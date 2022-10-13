/* Copyright 2019, Yahoo Inc.
   Copyrights licensed under the MIT License.
   See the accompanying LICENSE file for terms. */

/*global window, document, YAFT */
if (typeof window !== 'undefined') {
(function (w, d) {
    'use strict';
    // don't allow this code to be included twice
    if (w.YAFT !== undefined) {
        return;
    }
    //private variables
    var version = '0.3.28',
        perf,
        isInitialized = false,
        perfExists = false,
        perfFpsExists = false,
        showReport = false,
        showPerfBar = true,
        startTime = new Date().getTime(), // We have to have this as perf.timing.navigationStart
        isLoadFired = false,
        de = d.documentElement,
        confs = {
            usePrefixRegex: true,
            useNormalizeCoverage: true,
            canShowVisualReport: true,
            canShowPerfBar: false,
            useNativeStartRender: true, // which uses `first-paint`. Use `first-contentful-paint` tested
            useNativeStartRenderMeaningful: false, // which uses `first-contentful-paint`. Remove this once it is tested
            maxWaitTime: 3000,
            modules: [],
            adModules: [],
            modulesExclude: [],
            modulesAft2Container: [],
            customReportModules: [],
            includeOnlyAft2: false, // modal aft2 should be set as true
            punishAdsOnNoShow: false,
            plugins: [],
            whiteListedContainerElements: ['div', 'section', 'ul', 'ol', 'li', 'header', 'img', 'a', 'video', 'figure', 'span', 'picture'],
            customStartRender: false,
            preProcess: false,
            getAccurateFirstPaint: true, // for browsers does not support render api
            fpsMinSampleCount: 15, // approximately 250 ms scrolling 15/60
            fpsMissLimit: 18, // 1000ms/60fps = 16.666ms is the goal. Actionable limit 18 is picked. Should not go below 17
            preferDataModNameOverId: false
        },
        startRender = 0,
        viewport,
        totalCoveragePercentage = 0,
        normTotalCoveragePercentage = 0,
        costlyResources = [],
        timings = {},
        modules = {},
        visuallyComplete = 0,
        modulesReport = {},
        aft2StartTime = 0, // delta between navstarttime and second AFT start time
        aft2EndTime = 0,
        aft2NavStart = 0,
        aft2StartRender = 0,
        aftTimer = 0, //first aft setTimeoutID
        aft2Timer = 0, //second aft setTimeoutID
        fpsRunning = false,
        fpsData = [],
        fpsAction,
        rafIndex;

    /**
     * Clones an object. Simplified recursive version
     * @param {object} obj
     * @returns {object}
     */
    function cloneObject(obj) {
        var clone = {},
            i;
        for(i in obj) {
            if (typeof(obj[i]) === 'object' && obj[i] !== null) {
                clone[i] = cloneObject(obj[i]);
            } else {
                clone[i] = obj[i];
            }
        }
        return clone;
    }

    /**
     * Creates array of timing entries from Navigation and Resource Timing Interfaces
     * @returns {object[]}
     */
    function getTimings() {
        var entries = [],
            n,
            i,
            iframes,
            parentDelta = 0,
            resources = []; // Other entries come from Resource Timing API

        // Page times come from Navigation Timing API
        entries.push(createEntryFromNavigationTiming());

        resources = perf.getEntriesByType('resource');

        for(n = 0; n < resources.length; n += 1) {
            if (resources[n].name !== 'document') {
                entries.push(createEntryFromResourceTiming(resources[n]));
            }
        }
        //TODO: iframes have their own resource timings. Normilize to parents navigation start
        iframes = document.getElementsByTagName('iframe');
        if (iframes && iframes.length) {
            for (i = 0; i < iframes.length; i += 1) {
                try {
                    resources = iframes[i].contentWindow.performance.getEntriesByType('resource');
                    parentDelta = iframes[i].contentWindow.performance.timing.navigationStart - perf.timing.navigationStart;
                    for(n = 0; n < resources.length; n += 1) {
                        if (resources[n].name !== 'document') {
                            entries.push(createEntryFromResourceTiming(resources[n], parentDelta));
                        }
                    }
                } catch (e){
                    //most probably security origin issue.
                }
            }
            entries.sort(function(a, b) {
                return a.start - b.start;
            });
        }

        return entries;
    }

    /**
     * Creates an entry from a PerformanceResourceTiming object
     * @param {object} resource
     * @returns {object}
     */
    function createEntryFromResourceTiming(resource, parentDelta) {
        // TODO: Add fetchStart and duration, fix TCP, SSL timings
        // NB
        // AppCache: start = fetchStart, end = domainLookupStart, connectStart or requestStart
        // TCP: start = connectStart, end = secureConnectionStart or connectEnd
        // SSL: secureConnectionStart can be undefined
        if (!(parentDelta && parentDelta > 0)) {
            parentDelta = 0;
        }
        return {
            url: resource.name,
            start: resource.startTime + parentDelta,
            duration: resource.duration,
            transferSize: (typeof resource.transferSize !== 'undefined') ? resource.transferSize : -1,
            durationFromNStart: (resource.duration > 0) ? (resource.duration + resource.startTime + parentDelta) : resource.startTime + parentDelta,
            redirectStart: resource.redirectStart + parentDelta,
            redirectDuration: resource.redirectEnd - resource.redirectStart,
            appCacheStart: 0, // TODO
            appCacheDuration: 0, // TODO
            dnsStart: resource.domainLookupStart + parentDelta,
            dnsDuration: resource.domainLookupEnd - resource.domainLookupStart,
            tcpStart: resource.connectStart + parentDelta,
            tcpDuration: resource.connectEnd - resource.connectStart, // TODO
            sslStart: (resource.secureConnectionStart > 0) ? resource.secureConnectionStart - resource.connectStart : 0,
            sslDuration: (resource.secureConnectionStart > 0) ? (resource.connectEnd - resource.secureConnectionStart) : -1,
            requestStart: resource.requestStart + parentDelta,
            requestDuration: resource.responseStart - resource.requestStart,
            responseStart: resource.responseStart + parentDelta,
            // ??? - Chromium returns zero for responseEnd for 3rd party URLs, bug?
            responseDuration: resource.responseStart === 0 ? 0 : resource.responseEnd - resource.responseStart
        };
    }

    /**
     * Creates an entry from a PerformanceResourceTiming object
     * @param {object} resource
     * @returns {object}
     */
    function createEntryFromNavigationTiming() {
        var timing = perf.timing;
        var htmlPage = perf.getEntries('resource')[0];

        // TODO: Add fetchStart and duration, fix TCP, SSL etc. timings
        return {
            url: d.location.href,
            start: 0,
            transferSize: (typeof htmlPage.transferSize !== 'undefined') ? htmlPage.transferSize : -1,
            duration: timing.responseEnd - timing.navigationStart,
            durationFromNStart: timing.responseEnd - timing.navigationStart,
            redirectStart: timing.redirectStart === 0 ? 0 : timing.redirectStart - timing.navigationStart,
            redirectDuration: timing.redirectEnd - timing.redirectStart,
            appCacheStart: 0, // TODO
            appCacheDuration: 0, // TODO
            dnsStart: timing.domainLookupStart - timing.navigationStart,
            dnsDuration: timing.domainLookupEnd - timing.domainLookupStart,
            tcpStart: timing.connectStart - timing.navigationStart,
            tcpDuration: timing.connectEnd - timing.connectStart, // TODO
            sslStart: (timing.secureConnectionStart > 0) ? timing.secureConnectionStart - timing.connectStart : 0,
            sslDuration: (timing.secureConnectionStart > 0) ? (timing.connectEnd - timing.secureConnectionStart) : -1,
            requestStart: timing.requestStart - timing.navigationStart,
            requestDuration: timing.responseStart - timing.requestStart,
            responseStart: timing.responseStart - timing.navigationStart,
            responseDuration: timing.responseEnd - timing.responseStart
        };
    }


    /**
     * Gets viewport object and helper functions for area calculation
     * @returns {object}
     */
    function getViewPortObject() {
        return {
            win : w,
            doc : d,
            docElem : de,
            viewportWidth: (de.clientWidth < w.innerWidth ? w.innerWidth : de.clientWidth),
            viewportHeight: (de.clientHeight < w.innerHeight ? w.innerHeight : de.clientHeight),
            getScrollXY: function() {
                //TODO: use requestAnimationFrame to reduce layout trashing
                return {
                    x: w.scrollX || w.pageXOffset,
                    y: w.scrollY || w.pageYOffset
                };
            },
            getViewportArea : function() {
                return this.viewportWidth * this.viewportHeight;
            },
            getElementBounds : function(e) {
                var bounding,
                    elem = e,
                    scrollxy = this.getScrollXY();

                // result of getBoundingClientRect is immutable
                bounding = cloneObject(elem.getBoundingClientRect());
                bounding.top = bounding.top + scrollxy.y;
                bounding.bottom = bounding.bottom + scrollxy.y;
                bounding.left = bounding.left + scrollxy.x;
                bounding.right = bounding.right + scrollxy.x;
                return bounding;
            },
            isInViewport : function(e, noVisibilityCheck) {
                var bounds = this.getElementBounds(e);
                //adding bounds.bottom and bounds.right limit
                return (bounds.top < this.viewportHeight && bounds.left < this.viewportWidth && bounds.bottom >= 0 && bounds.right >= 0 && this.isVisible(e, noVisibilityCheck));
            },
            isVisible : function(e, noVisibilityCheck) {
                var visbl = true,
                    elem = e;
                visbl = visbl && elem.offsetWidth > 0 && elem.offsetHeight > 0;
                if (visbl && !noVisibilityCheck) {
                    while('BODY' !== elem.tagName && visbl) {
                        visbl = visbl && 'hidden' !== w.getComputedStyle(elem).visibility;
                        elem = elem.parentElement;
                    }
                }
                return visbl;
            },
            getElementCoverage : function(e) {
                var bounds = this.getElementBounds(e),
                    x,
                    y,
                    viewArea,
                    elementCoveragePerc,
                    elementCoverage;

                if (bounds.right < 0) {
                    x = 0; // whole element is left of viewport
                } else if (bounds.right > this.viewportWidth) {
                    if (bounds.left >= 0) {
                        x = this.viewportWidth - bounds.left; // right part of element is out of viewport and left is on screen
                    } else {
                        x = this.viewportWidth; // right part of element is out of viewport and so is left, so x becomes viewportWidth
                    }
                } else if (bounds.left < 0 && bounds.right > 0) {
                    x = bounds.right; // part in viewport is only visible from 0 to bounds.right
                } else {
                    x = bounds.width; // the whole width of the element is on the screen
                }

                if (bounds.bottom < 0) {
                    y = 0; // whole image is above viewport
                } else if (bounds.bottom > this.viewportHeight) {
                    if (bounds.top >= 0) {
                        y = this.viewportHeight - bounds.top; // bottom part of element is out of viewport
                    } else {
                        y = this.viewportHeight;
                    }
                } else if (bounds.top < 0 && bounds.bottom > 0){
                    y = bounds.bottom; // top part is above viewport
                } else {
                    y = bounds.height; // the whole height of element is on screen
                }

                viewArea = this.getViewportArea();
                elementCoverage = x * y;
                elementCoveragePerc = (elementCoverage * 100) / viewArea;

                if (elementCoveragePerc < 1) {
                    elementCoveragePerc = Math.ceil(elementCoveragePerc);
                }
                return {
                    x: x,
                    y: y,
                    elCoverage: elementCoverage,
                    elCoveragePerc: elementCoveragePerc
                };
                // return x * y;
            }
        };
    }

    function getAndSetModules(rules, exclude, aft2Container) {
        var modName = '',
            i, j,
            rule,
            elems,
            elemsLen,
            matches = false,
            exclusions = [],
            exLen = 0,
            len;

        rules = rules || [];

        if (exclude && !aft2Container) {
            exclusions = exclude;
        } else if (!exclude && aft2Container) {
            exclusions = aft2Container;
        } else if (exclude && aft2Container) {
            exclusions = exclude.concat(aft2Container);
        }
        exLen = (exclusions && exclusions.length) ? exclusions.length : 0;

        for (i = 0, len = rules.length; i < len; i+=1) {
            rule = rules[i];

            elems = d.querySelectorAll(YAFT.getModuleSelector(rule, confs.usePrefixRegex));

            elemsLen = elems.length;
            for (j = elemsLen - 1; j >= 0; j--) {
                modName = YAFT.getModuleName(elems[j]);
                matches = false;

                if (exclusions.indexOf(modName) !== -1) {
                    matches = true;
                }

                if (!matches && !modules[modName]) {
                    //TODO: check if its parent or any of child node is there too
                    elems[j].modName = modName;
                    modules[modName] = elems[j];
                }
            }
        }
        return modules;
    }

    function prepareCustomModuleReport(mod, customReport){
        var modId = mod.modName;
        modulesReport[modId] = getModuleReport(mod, customReport);
    }

    function prepareModulesReport(mods, sTime, sRender, onlyAft2Mods) {
        var report,
            modId,
            key,
            i = 0,
            adMods = confs.adModules ? confs.adModules : [],
            adModsLen = adMods.length;

        for (modId in mods){
            if (mods.hasOwnProperty(modId)) {
                if (!modulesReport[modId]) {
                    report = getModuleReport(mods[modId]);
                    if (onlyAft2Mods) {
                        if (report.isAft2Module) {
                            modulesReport[modId] = report;
                        }
                    } else {
                        modulesReport[modId] = report;
                    }
                }
            }
        }

        // Detect adModules and punish if it does not show up on time
        if (adModsLen) {
            for (key in modulesReport){
                if (modulesReport.hasOwnProperty(key)) {
                    modulesReport[key].isAdModule = false;
                    for (i = 0; i < adModsLen; i += 1) {
                        if (key.search(adMods[i]) !== -1) {
                            modulesReport[key].isAdModule = true;
                            if (confs.punishAdsOnNoShow && modulesReport[key].loadTime === sRender) {
                                modulesReport[key].loadTime = perf.now() - sTime - 100; // 100 ms for the aft interval
                            }
                            break;
                        }
                    }
                }
            }
        }

        return modulesReport;
    }
    function getModuleStartTime() {
        if (confs.useNativeStartRender) {
            if (startRender) {
                return startRender;
            } else {
                return YAFT.getStartRenderTime();
            }
        } else {
            return perfExists ? perf.timing.domContentLoadedEventStart - startTime : 0;
        }
    }

    function checkAft2Mod (aft2Container, el) {
        var isAft2Elem = false;
        while (el.parentNode) {
            if (el.parentNode.id && aft2Container.indexOf(el.parentNode.id) !== -1) {
                isAft2Elem = true;
                break;
            }
            el = el.parentNode;
        }
        return isAft2Elem;
    }

    function getModuleReport(mod, customReport) {
        //get all srcs
        var i,
            elem,
            coverage,
            isCustom = false,
            isAft2Module = checkAft2Mod(confs.modulesAft2Container, mod),
            isCustomReportModule = (confs.customReportModules && confs.customReportModules.indexOf(mod.modName) !== -1),
            resourceUrl,
            resources = [],
            resource,
            now = perf.now(),
            customEndTime = isAft2Module ? (now - aft2StartTime) : now,
            modStart = aft2StartTime ? aft2StartRender : getModuleStartTime(),
            modEnd = isCustomReportModule ? customEndTime : modStart,
            childElements = mod.querySelectorAll(confs.whiteListedContainerElements.join()),
            len = childElements.length;

        if (!customReport) {

            if (aft2StartTime > 0 && !isAft2Module) {
                //if it is aft2 calculation but the module is NOT aft2 module
                modStart = 0;
                modEnd = 0;
            } else {
                // calculate resource timing based modStart/modEnd only if the
                // module does not do custom reporting
                if (!isCustomReportModule) {
                    //AFT or (AFT2 calculation with AFT modules)
                    // Check element itself first wheater it has a resource or not

                    resourceUrl = YAFT.getElemResourceUrl(mod);
                    if (resourceUrl) {
                        resource = perf.getEntriesByName(resourceUrl);
                        if (resource && resource.length && resource.length > 0 && viewport.isInViewport(mod)) {
                            resources.push(createEntryFromResourceTiming(resource[0]));
                        }
                    }

                    if (childElements && len > 0) {
                        // Get all child elements which has media module which requires http requests
                        for (i =0; i < len; i += 1) {
                            elem = childElements[i];
                            resourceUrl = YAFT.getElemResourceUrl(elem);
                            if (resourceUrl) {
                                resource = perf.getEntriesByName(resourceUrl);
                                if (resource && resource.length && resource.length > 0 && viewport.isInViewport(elem)) {
                                    resources.push(createEntryFromResourceTiming(resource[0]));
                                }
                            }
                        }
                    }
                    len = resources.length;
                    if (len > 0) {
                        for (i =0; i < len; i += 1) {
                            if (aft2StartTime > 0 && isAft2Module) {
                                //if it is aft2 calculation and the module is aft2 module
                                resources[i].start -= aft2StartTime;
                                resources[i].durationFromNStart -= aft2StartTime;
                                if (resources[i].start <= 0) {
                                    resources[i].start = modStart;
                                }
                                if (resources[i].durationFromNStart <= 0) {
                                    resources[i].durationFromNStart = modEnd;
                                }
                            }

                            if (resources[i].start > modStart) {
                                modStart = resources[i].start;
                            }
                            if (resources[i].durationFromNStart > modEnd) {
                                modEnd = resources[i].durationFromNStart;
                            }
                        }
                    }
                } else {
                    isCustom = true;
                }
            }
        } else {
            //Custom report
            // TODO: check if module is not in exception list
            isCustom = true;
            modStart = customReport.modStart ? customReport.modStart : modStart;
            modEnd = customReport.modEnd ? customReport.modEnd : modEnd;
            if (aft2StartTime) {
                if (modStart > aft2StartTime) {
                    modStart -= aft2StartTime;
                } else {
                    modStart = 0;
                }
                if (modEnd > aft2StartTime) {
                    modEnd -= aft2StartTime;
                } else {
                    modEnd = 0;
                }
            }
        }

        coverage = viewport.getElementCoverage(mod);
        return {
            isCustom: isCustom,
            isAft2Module: isAft2Module,
            start: modStart,
            loadTime: modEnd,
            name: mod.modName,
            resources: resources,
            inViewPort: isCustom ? viewport.isInViewport(mod, true): viewport.isInViewport(mod, false),
            coverageWidth: coverage.x,
            coverageHeight: coverage.y,
            coverageArea: coverage.elCoverage,
            coveragePercentage: coverage.elCoveragePerc
        };
    }

    function getTotalCoverage(modReports) {
        var key,
            modCov = 0,
            totCov = 0;

        for (key in modReports){
            if (modReports.hasOwnProperty(key)) {
                modCov =  modReports[key].coveragePercentage;
                if (modReports[key].inViewPort && Math.round(modCov)>0){
                    totCov += modCov;
                }
            }
        }
        return totCov;
    }
    function getVisuallyComplete(aftIntervals) {
        var i,
            len = aftIntervals.length;

        for (i = 0; i < len; i += 1) {
            if (confs.useNormalizeCoverage) {
                if (Math.round(aftIntervals[i]) === Math.round(normTotalCoveragePercentage)) {
                    return i * 100;
                }
            } else {
                if (Math.round(aftIntervals[i]) === Math.round(totalCoveragePercentage)) {
                    return i * 100;
                }
            }
        }
        return 0;
    }
    function getAFT(modsReport, sRender) {
        var aboveFoldTime = 0, //aka Speedindex
            aboveFoldTimeNoAd = 0,
            rnow = perf.now() - aft2StartTime, //right now from navigation timing api
            aftIntervalCount = Math.floor(rnow / 100), // 100ms per interval. Should be max 500. Dont kill the memory
            aftIntervals = new Array(aftIntervalCount), //set intervals array for aft calculation and graph for visualization
            aftIntervalsNoAd = new Array(aftIntervalCount),
            i,
            normTotCovPerc = 0,
            key;

        //init intervals
        for (i = 0; i < aftIntervalCount; i += 1) {
            aftIntervals[i] = 0;
            aftIntervalsNoAd[i] = 0;
        }
        i = 0;
        for (key in modsReport){
            if (modsReport.hasOwnProperty(key) && modsReport[key].inViewPort && Math.round(modsReport[key].coveragePercentage) > 0) {
                if (confs.useNormalizeCoverage) {
                    modsReport[key].normCoveragePercentage =  (modsReport[key].coveragePercentage / totalCoveragePercentage) * 100;
                    normTotCovPerc += modsReport[key].normCoveragePercentage;
                }

                if (modsReport[key].loadTime >= 0) {
                    i = Math.round(modsReport[key].loadTime / 100);
                    aftIntervals[i] += confs.useNormalizeCoverage ? modsReport[key].normCoveragePercentage: modsReport[key].coveragePercentage;
                    if (!modsReport[key].isAdModule) {
                        aftIntervalsNoAd[i] += confs.useNormalizeCoverage ? modsReport[key].normCoveragePercentage: modsReport[key].coveragePercentage;
                    } else {
                        i = Math.round(sRender / 100);
                        aftIntervalsNoAd[i] += confs.useNormalizeCoverage ? modsReport[key].normCoveragePercentage: modsReport[key].coveragePercentage;
                    }
                }
            }
        }


        if (confs.useNormalizeCoverage) {
            aboveFoldTime += (normTotCovPerc - aftIntervals[0]);
            aboveFoldTimeNoAd += (normTotCovPerc - aftIntervalsNoAd[0]);
        } else {
            aboveFoldTime += (totalCoveragePercentage - aftIntervals[0]);
            aboveFoldTimeNoAd += (totalCoveragePercentage - aftIntervalsNoAd[0]);
        }
        for (i = 1; i < aftIntervalCount; i += 1) {
            aftIntervals[i] = aftIntervals[i - 1] + aftIntervals[i];
            aftIntervalsNoAd[i] = aftIntervalsNoAd[i - 1] + aftIntervalsNoAd[i];
            if (confs.useNormalizeCoverage) {
                aboveFoldTime += (normTotCovPerc - aftIntervals[i]);
                aboveFoldTimeNoAd += (normTotCovPerc - aftIntervalsNoAd[i]);
            } else {
                aboveFoldTime += (totalCoveragePercentage - aftIntervals[i]);
                aboveFoldTimeNoAd += (totalCoveragePercentage - aftIntervalsNoAd[i]);
            }
        }

        return {
            aft: aboveFoldTime,
            aftNoAd: aboveFoldTimeNoAd,
            aftIntervals: aftIntervals,
            normTotalCoveragePercentage: normTotCovPerc
        };
    }
    function getCostlyResources(){
        var timingsArray = timings.slice(0);
        timingsArray.sort(function(a,b) {
            return b.duration - a.duration;
        });
        return timingsArray;
    }
    function getHttpRequestsReport(reqs){
        var httpReqReport = {},
            i = 0,
            cached = 0,
            plt = YAFT.getPageLoadTime(),
            onloadCount = 0,
            onloadCached = 0;
        httpReqReport.count = reqs.length;
        for (i = 0; i < httpReqReport.count; i += 1) {
            if (reqs[i].start <= plt) {
                onloadCount += 1;
            }
            if (reqs[i].duration <= 0) {
                cached += 1;
                if (reqs[i].start <= plt) {
                    onloadCached += 1;
                }
            }
        }
        httpReqReport.cached = cached;
        httpReqReport.nonCached = httpReqReport.count - cached;
        httpReqReport.onloadCount = onloadCount;
        httpReqReport.onloadCached = onloadCached;
        httpReqReport.onloadNonCached = onloadCount - onloadCached;

        return httpReqReport;
    }

    function standardDeviation(avg, arr){
        var sqDiffArr,
            sum,
            avgSquareDiff,
            stdDev;

        sqDiffArr = arr.map(function(value){
            var diff = value - avg,
                sqrDiff = diff * diff;
            return sqrDiff;
        });

        sum = sqDiffArr.reduce(function(sum, value){
            return sum + value;
        }, 0);

        avgSquareDiff = sum / sqDiffArr.length;
        stdDev = Math.sqrt(avgSquareDiff);

        return stdDev;
    }

    function getFpsStat() {
        var fpsDeltas,
            avg,
            half,
            miss = 0,
            len = fpsData.length,
            stat = {
                median: NaN,
                worse: NaN,
                avgFps: NaN,
                stdev: NaN,
                miss: NaN,
                sample: NaN
            };

        if (len === 0 || len <= confs.fpsMinSampleCount) {
            return stat;
        }

        stat.sample = len;

        //average fps: close to 60 is better
        avg = ((fpsData[len-1] - fpsData[0]) / (len-1));
        stat.avgFps = Math.round(1000.0 / avg);
        if (stat.avgFps > 60) {
            stat.avgFps = 60;
        }

        fpsDeltas = fpsData.map(function(frame, index) {
            if (index === 0) {
                return NaN;
            } else {
                var elapsed = frame - fpsData[index-1];
                if (elapsed > confs.fpsMissLimit) {
                    miss++;
                }
                return elapsed;
            }
        });
        fpsDeltas.shift();

        stat.miss = miss;

        //Get Standard Deviation of frames: close to 0 is better
        stat.stdev = standardDeviation(avg, fpsDeltas);

        //Sort to get max and min and median
        fpsDeltas.sort(function(a, b) {
            return a - b;
        });

        //worse frame time
        stat.worse = fpsDeltas[fpsDeltas.length-1];

        //median frame calculation
        half = Math.floor(fpsDeltas.length/2);
        if(fpsDeltas.length % 2) {
            stat.median = fpsDeltas[half];
        }
        else {
            stat.median = ((fpsDeltas[half-1] + fpsDeltas[half]) / 2.0);
        }

        return stat;
    }

    function tick () {
        fpsData.push(perf.now());
        if (fpsRunning && fpsData.length < 300) {
            // Keep running test until the FPS.stop called
            // or approximately 5 sec => 60 frame per sec x 5 sec = 300
            rafIndex = w.requestAnimationFrame(tick);
        }
    }

    function startFPS (action) {
        if (!perfFpsExists) {
            return false;
        }
        fpsRunning = false;
        if (rafIndex) {
            w.cancelAnimationFrame(rafIndex);
        }

        fpsAction = action;
        fpsData.length = 0;

        fpsRunning = true;
        rafIndex = w.requestAnimationFrame(tick);
    }

    function stopFPS (action, callback) {
        var fpsStats;
        fpsRunning = false;

        if (!perfFpsExists) {
            if (callback) {
                callback ('FPS is not available for this browser');
            }
            return false;
        }

        if (rafIndex) {
            w.cancelAnimationFrame(rafIndex);
        }

        if (fpsAction !== action) {
            if (callback) {
                callback ('FPS stop action cannot be different than start action');
            }
            return false;
        }

        fpsStats = getFpsStat();
        fpsStats.action = action;

        if (!fpsStats.avgFps) {
            if (callback) {
                callback ('FPS is not available');
            }
            return false;
        }
        if (callback) {
            callback(null, fpsStats);
        }
        YAFT.logToConsole(fpsStats);
        return fpsStats;
    }

    function startAft2() {
        modules = {};
        modulesReport = {};
        aft2EndTime = 0;
        if (!perfExists || !isInitialized) {
            return false;
        }

        //first remove the report
        if (showReport === true && confs.canShowVisualReport && w.YAFT_REPORT && w.YAFT_REPORT.removeReport) {
            w.YAFT_REPORT.removeExtras();
            w.YAFT_REPORT.removeReport();
        }
        //if aft2 and aft setTimeout id are on, kill it
        if (aftTimer) {
            clearTimeout(aftTimer);
        }
        if (aft2Timer) {
            clearTimeout(aft2Timer);
        }
        //clear resource timing data
        try {
            if (perf.clearResourceTimings) {
                perf.clearResourceTimings();
            } else if (perf.webkitClearResourceTimings) {
                perf.webkitClearResourceTimings();
            }
        } catch (err) {}
        aft2StartTime = perf.now(); // 1000ms
        aft2NavStart = aft2StartTime + startTime;
    }

    function setAFT2StartRender() {
        if (!perfExists || !isInitialized) {
            return false;
        }

        if (aft2EndTime === 0) {
            aft2EndTime = perf.now();
        }
    }

    function getAFT2StartRender() {
        return aft2EndTime;
    }

    function endAft2(callback) {
        var data = {},
            aftData = {},
            modsReport = {},
            domElementsCount = 0;

        if (!perfExists || !isInitialized) {
            callback(null, 'Nav or resource timing or both are not available or YAFT is not initialized');
            return false;
        }

        if (!aft2EndTime) {
            aft2EndTime = perf.now();
        }
        aft2StartRender = aft2EndTime - aft2StartTime;

        if (confs.maxWaitTime && confs.maxWaitTime > 0) {
            aft2Timer = setTimeout(function() {
                if (!viewport) {
                    viewport = getViewPortObject();
                }

                timings = getTimings();

                if (confs.preProcess && typeof confs.preProcess === 'function') {
                    confs.preProcess();
                }

                domElementsCount = YAFT.getDomElementsCount();

                getAndSetModules(confs.modules, confs.modulesExclude, confs.modulesAft2Container);

                prepareModulesReport(modules, aft2StartTime, aft2StartRender, confs.includeOnlyAft2);

                modsReport = YAFT.getFinalModulesReport();

                //1.5 get total coverage
                totalCoveragePercentage = getTotalCoverage(modsReport);

                //1.5 finanlly calculate AFT
                aftData = getAFT(modsReport, aft2StartRender);
                normTotalCoveragePercentage = aftData.normTotalCoveragePercentage;

                //4. Calculate Visually Complete
                visuallyComplete = getVisuallyComplete(aftData.aftIntervals);

                data = {
                    aft: aftData.aft,
                    aftNoAd: aftData.aftNoAd,
                    startRender: aft2StartRender,
                    event: 'aft2',
                    modulesReport: modsReport,
                    totalCoveragePercentage: totalCoveragePercentage,
                    normTotalCoveragePercentage: normTotalCoveragePercentage,
                    domElementsCount: domElementsCount,
                    resources: timings,
                    visuallyComplete: visuallyComplete
                };

                if (callback) {
                    callback(data);
                }
                YAFT.data.push(data);
                //lastly draw the report
                if (showReport === true && confs.canShowVisualReport && w.YAFT_REPORT && w.YAFT_REPORT.drawReport) {
                    YAFT.logToConsole(data);
                    YAFT.logToConsole(aftData.aftIntervals);
                    w.YAFT_REPORT.drawReport(data, aftData.aftIntervals);
                }

            }, confs.maxWaitTime);
        }
    }

    function finalResult(evnt, callback) {
        var data = {},
            aftData = {},
            pageLoadTime = YAFT.getPageLoadTime(),
            domContentLoaded = YAFT.getDomContentLoaded(),
            domElementsCount = YAFT.getDomElementsCount(),
            ttfb = YAFT.getTTFB(),
            domInteractive = YAFT.getDomInteractive(),
            modsReport = {},
            httpRequests = {},
            prePlugins = [],
            postPlugIns = [],
            i;

        startRender = YAFT.getStartRenderTime();
        timings = getTimings();
        if (!(timings && timings.length && timings.length > 0)) {
            callback(null, 'No timings available');
            return;
        }

        if (confs.preProcess && typeof confs.preProcess === 'function') {
            confs.preProcess();
        }

        if(confs.plugins) {
            for(i = 0; i < confs.plugins.length; i += 1) {
                if(window['yaft_' + confs.plugins[i].name] && window['yaft_' + confs.plugins[i].name].execute) {
                    if (confs.plugins[i].isPre) {
                        prePlugins.push(confs.plugins[i]);
                        YAFT.logToConsole('YAFT plugin ' + confs.plugins[i].name + ' will be executed before the callback');
                    } else {
                        postPlugIns.push(confs.plugins[i]);
                        YAFT.logToConsole('YAFT plugin ' + confs.plugins[i].name + ' will be executed after the callback');
                    }
                }
                else {
                    YAFT.logToConsole('YAFT plugin ' + confs.plugins[i].name + ' not found or it does not have execute method');
                }
            }
        }

        //1. Calculate AFT
        //1.2 get viewport
        if (!viewport) {
            viewport = getViewPortObject();
        }

        //1.3 get all modules and set to modules variable
        getAndSetModules(confs.modules, confs.modulesExclude, confs.modulesAft2Container);

        //1.4 prepare module report which sets to "modulesReport" variable
        prepareModulesReport(modules, 0, startRender);

        // I could have just used just "modulesReport" variable but I needed this to make unit test working
        modsReport = YAFT.getFinalModulesReport();

        //1.5 get total coverage
        totalCoveragePercentage = getTotalCoverage(modsReport);

        //1.5 finanlly calculate AFT
        aftData = getAFT(modsReport, startRender);
        normTotalCoveragePercentage = aftData.normTotalCoveragePercentage;

        //2. Get costly resources
        costlyResources = getCostlyResources();

        //3. Get httpRequests
        httpRequests = getHttpRequestsReport(costlyResources);

        //4. Calculate Visually Complete
        visuallyComplete = getVisuallyComplete(aftData.aftIntervals);

        data = {
            aft: aftData.aft,
            aftNoAd: aftData.aftNoAd,
            pageLoadTime: pageLoadTime,
            startRender: startRender,
            domInteractive: domInteractive,
            domContentLoaded: domContentLoaded,
            ttfb: ttfb,
            event: evnt,
            modulesReport: modsReport,
            totalCoveragePercentage: totalCoveragePercentage,
            normTotalCoveragePercentage: normTotalCoveragePercentage,
            domElementsCount: domElementsCount,
            resources: timings,
            costlyResources: costlyResources,
            httpRequests: httpRequests,
            visuallyComplete: visuallyComplete
        };

        //execute pre plugins before the callback
        for(i = 0; i < prePlugins.length; i += 1) {
            try {
                window['yaft_' + prePlugins[i].name].execute(prePlugins[i].config, data);
            }
            catch(e) {
                YAFT.logToConsole('YAFT plugin ' + prePlugins[i].name + ' failed to execute');
                YAFT.logToConsole(e);
            }
        }

        //call the callback
        if (callback) {
            callback(data);
        }
        YAFT.data.push(data);

        //execute post plugins after the callback
        for(i = 0; i < postPlugIns.length; i += 1) {
            try {
                window['yaft_' + postPlugIns[i].name].execute(postPlugIns[i].config, data);
            }
            catch(e) {
                YAFT.logToConsole('YAFT plugin ' + postPlugIns[i].name + ' failed to execute');
                YAFT.logToConsole(e);
            }
        }

        //lastly draw the report
        if (showReport === true && confs.canShowVisualReport && w.YAFT_REPORT && w.YAFT_REPORT.drawReport) {
            YAFT.logToConsole(data);
            YAFT.logToConsole(aftData.aftIntervals);
            w.YAFT_REPORT.drawReport(data, aftData.aftIntervals);
        }

        if (showPerfBar && confs.canShowPerfBar && w.YAFT_PERFBAR.drawReport) {
            w.YAFT_PERFBAR.drawReport(data);
        }
    }

    function triggerPerf(evnt, callback) {
        if (isLoadFired || !isInitialized) {
            return;
        }
        isLoadFired = true;

        if (!perfExists) {
            callback(null, 'Nav or resource timing or both are not available');
            return false;
        }

        //add extra wait
        if (confs.maxWaitTime && confs.maxWaitTime > 0) {

            aftTimer = setTimeout(function(){
                finalResult(evnt, callback);
            }, confs.maxWaitTime);

        } else {
            finalResult(evnt, callback);
        }
    }

    function getPerformance() {
        return w.performance || w.webkitPerformance || w.msPerformance || w.mozPerformance || w.Performance;
    }


    perf = getPerformance();
    if (perf && perf.timing) {
        startTime = perf.timing.navigationStart;
        perf.now = perf.now || perf.webkitNow || perf.msNow || perf.mozNow || undefined;
        if (perf.now) {
            if ((perf.getEntriesByType !== undefined || perf.webkitGetEntriesByType !== undefined) &&
                (perf.getEntriesByName !== undefined || perf.webkitGetEntriesByName !== undefined)) {
                perfExists = true;
            }
            if (w.requestAnimationFrame && w.cancelAnimationFrame) {
                perfFpsExists = true;
            }
        }
    }

    w.YAFT = {
        data: [],
        /**
         * triggers YAFT's final perf metric calculations. If you want to use this function, run YAFT.init first.
         * @param {string} evnt event name. callback
         * @param {function} callback callback function which will get the YAFT final result in the second param
         */
        triggerPerf: triggerPerf,

        triggerCustomTiming: function(mod, startTime, endTime) {
            //check isInitialized first
            if (!perfExists) {
                return false;
            }
            var el,
                modName;
            if (YAFT.isInitialized()){
                //get viewport early
                if (!viewport) {
                    viewport = getViewPortObject();
                }

                //add to modules and modulesReport
                el = d.querySelector(YAFT.getModuleSelector(mod, false));

                if (el) {
                    modName = YAFT.getModuleName(el);
                    el.modName = modName;

                    // include custom module only if it is not excluded
                    if (confs.modulesExclude.indexOf(modName) === -1) {
                        modules[modName] = el;

                        //add to modules report
                        prepareCustomModuleReport(el, {
                            modStart: startTime,
                            modEnd: endTime
                        });
                    }
                }
            }
        },

        /**
         * Gets final modules report
         * @returns {object} modules report
         */
        getFinalModulesReport: function () {
            return modulesReport;
        },

        /**
         * resets YAFT private variables.
         */
        reset: function() {
            isInitialized = true;
            isLoadFired =false; // TODO: remove event handler
            modules = [];
            modulesReport = {};
        },

        /**
         * Checks if Navigation and Resource Timing APIs exist or not
         * @returns {bool}
         */
        perfExists: function() {
            return perfExists;
        },

        /**
         * Checks if YAFT.init function is already called or not. Use YAFT.reset() first to reinit the YAFT
         * @returns {bool}
         */
        isInitialized: function() {
            return isInitialized;
        },

        /**
         * Gets config object which will be used for YAFT configuration
         * @returns {object}
         */
        getConfig: function() {
            return confs;
        },

        /**
         * Sets/Updates existing/default YAFT configs
         */
        updateConfig: function(configs) {
            var key;
            //set/overides configs
            for(key in configs) {
                if (confs.hasOwnProperty(key) && configs.hasOwnProperty(key)) {
                    if(typeof confs[key] !== 'undefined' && typeof configs[key] !== 'undefined') {
                        confs[key] = configs[key];
                    }
                }
            }
        },

        /**
         * Gets window.performance object if it exists
         * @returns {object}
         */
        getPerformance: getPerformance,

        init: function(configs, callback) {
            //reset everthing first
            this.reset();

            if (!perfExists) {
                callback(null, 'Nav or resource timing or both are not available');
                return false;
            }

            //determine to show report
            if (this.getQueryStrings().showaft){
                showReport = true;
            }

            //determine to show perf bar at bottom of viewport
            if (this.getQueryStrings().perfbar === '0'){
                showPerfBar = false;
            }

            //set/overides configs
            this.updateConfig(configs);

            if (perf.timing.loadEventStart > perf.timing.navigationStart){
                //if onlaod is already fired, trigger aft calculation
                YAFT.triggerPerf('deferred', callback);
            } else {
                if (w.addEventListener) {
                    //fire page load perf beacons on window load event
                    w.addEventListener('load', function() {
                        YAFT.triggerPerf('load', callback);
                    }, false);
                    //for fallback if onload already fired
                    w.addEventListener('unload', function() {
                        YAFT.triggerPerf('unload', callback);
                    }, false);

                } else if (w.attachEvent) {
                    //you may not need this since load event might be fireed yet. Check perf.onloadend
                    w.attachEvent('onload', function() {
                        YAFT.triggerPerf('load', callback);
                    });

                    w.attachEvent('onunload', function() {
                        YAFT.triggerPerf('unload', callback);
                    });
                }
            }
        },
        AFT2: {
            start: startAft2,
            setAFT2StartRender: setAFT2StartRender,
            getAFT2StartRender: getAFT2StartRender,
            end: endAft2
        },
        FPS: {
            start: startFPS,
            stop: stopFPS
        },
        getDomElementsCount: function(){
            //it is exactly what WPT does but this shows a lot more. Why?
            //https://code.google.com/p/webpagetest/source/browse/trunk/agent/browser/chrome/extension/wpt/script.js#77
            return d.getElementsByTagName('*').length;
        },
        getTTFB: function() {
            return perfExists ? perf.timing.responseStart - startTime : 0;
        },
        getPageLoadTime: function(){
            return perfExists ? perf.timing.loadEventStart - startTime : 0;
        },
        getDomContentLoaded: function(){
            return perfExists ? perf.timing.domContentLoadedEventStart - startTime : 0;
        },
        getStartRenderTime: function() {
            var dclt, firstPaint, chromeTimes, slt, entries, n;

            if (!perfExists) {
                return 0;
            }

            // if confs.customStartRender is provided, use it
            if (confs.customStartRender && typeof confs.customStartRender === 'function') {
                return confs.customStartRender();
            }

            dclt = this.getDomContentLoaded();
            // If the browser supports a first paint event, just use what the browser reports
            entries = w.performance.getEntriesByType('paint');
            if (entries && entries.length && entries.length > 0) {
                if (confs.useNativeStartRenderMeaningful) {
                    for (n = 0; n < entries.length; n += 1) {
                        if (entries[n].name === 'first-contentful-paint') {
                            firstPaint = entries[n].startTime;
                            break;
                        }
                    }
                }
                //fallback to first-paint
                if (firstPaint === undefined) {
                    for (n = 0; n < entries.length; n += 1) {
                        if (entries[n].name === 'first-paint') {
                            firstPaint = entries[n].startTime;
                            break;
                        }
                    }
                }
            }

            if (firstPaint === undefined) {
                if ('msFirstPaint' in w.performance.timing) {
                    firstPaint = w.performance.timing.msFirstPaint - startTime;
                } else if ('chrome' in w && 'loadTimes' in w.chrome && w.chrome.loadTimes) {
                    chromeTimes = w.chrome.loadTimes();
                    if ('firstPaintTime' in chromeTimes && chromeTimes.firstPaintTime > 0) {
                        slt = chromeTimes.startLoadTime;
                        if ('requestTime' in chromeTimes && chromeTimes.requestTime > 0) {
                            slt = chromeTimes.requestTime;
                        }
                        if (chromeTimes.firstPaintTime >= slt) {
                            firstPaint = (chromeTimes.firstPaintTime - slt) * 1000.0;
                        }
                    }
                }
            }

            // For browsers that don't support first-paint or where we get insane values,
            // use the time of the last non-async script or css from the head.
            if (confs.getAccurateFirstPaint === true &&
                (firstPaint === undefined || firstPaint < 0 || firstPaint > 120000)
            ) {
                firstPaint = w.performance.timing.responseStart - startTime;
                var headURLs = {};
                var headElements = d.getElementsByTagName('head')[0].children;
                for (var i = 0; i < headElements.length; i++) {
                    var el = headElements[i];
                    if (el.tagName === 'SCRIPT' && el.src && !el.async) {
                        headURLs[el.src] = true;
                    }
                    if (el.tagName === 'LINK' && el.rel === 'stylesheet' && el.href) {
                        headURLs[el.href] = true;
                    }
                }
                var requests = w.performance.getEntriesByType("resource");
                var doneCritical = false;
                for (var j = 0; j < requests.length; j++) {
                    if (!doneCritical &&
                        headURLs[requests[j].name] &&
                        (requests[j].initiatorType === 'script' || requests[j].initiatorType === 'link')
                    ) {
                        var requestEnd = requests[j].responseEnd;
                        if (firstPaint === undefined || requestEnd > firstPaint) {
                            firstPaint = requestEnd;
                        }
                    } else {
                        doneCritical = true;
                    }
                }
            }

            // If we get insane values or firstPaint is not supported, use domContentLoadedEventStart for the last resort
            if (firstPaint === undefined || firstPaint < 0 || (firstPaint > 120000 && firstPaint > dclt)) {
                return dclt;
            }
            return firstPaint;
        },
        getDomInteractive: function(){
            return perfExists ? perf.timing.domInteractive - startTime : 0;
        },
        getNow: function(){
            return perfExists ? perf.now() : 0;
        },
        getQueryStrings: function () {
            if(this.qParams) {
                return this.qParams;
            }
            var result = {},
                keyValuePair = '',
                keyValuePairs = w.location.search.slice(1).split('&'),
                i = 0,
                len = keyValuePairs.length || 0;

            for (i = 0; i <len; i += 1) {
                keyValuePair = keyValuePairs[i].split('=');
                result[keyValuePair[0]] = keyValuePair[1] || '';
            }
            this.qParams = result;
            return result;
        },
        getViewport: function() {
            return viewport;
        },
        getVersion: function () {
            return version;
        },
        //log to console
        logToConsole: function(obj) {
            if (perfExists && showReport && console && console.log) {
                console.log(obj);
            }
        },
        getModuleSelector: function(moduleName, usePrefixRegex) {
            var selectorArr = [],
                regCarret = usePrefixRegex ? "^" : "",
                regStar =  usePrefixRegex ? "*" : "";

            for(var i = 0, len = confs.whiteListedContainerElements.length; i < len; i++) {
                selectorArr.push(confs.whiteListedContainerElements[i] + '[id'+regCarret+'="' + moduleName + '"]');
            }

            selectorArr.push(regStar +'[data-yaft-module'+regCarret+'="' + moduleName + '"]');

            return selectorArr.join(',');
        },
        getModuleName: function(el) {
            var moduleName;

            if (confs.preferDataModNameOverId) {
                moduleName = el.getAttribute('data-yaft-module') || el.id || undefined;
            } else {
                moduleName = el.id || el.getAttribute('data-yaft-module') || undefined;
            }

            return moduleName;
        },
        getElemResourceUrl: function(el) {
            var resUrl = '',
                matches = [],
                elStyle;

            if (el.nodeName === 'VIDEO') {
                //TODO
            } else if (el.src) {
                resUrl = el.src;
            } else {
                elStyle = el.currentStyle || window.getComputedStyle(el, false);
                if (elStyle && elStyle.backgroundImage) {
                    matches = elStyle.backgroundImage.match(/url\((["']{0,1})([^'"]+)\1\)$/);
                    if (matches && matches.length === 3) {
                        resUrl = matches[2];
                    }
                }
            }
            return resUrl;
        }


    };
})(window, document);
}

if (typeof module !== 'undefined' && module.exports) {
    if (typeof window !== 'undefined') {
        module.exports = window.YAFT;
    } else {
        module.exports = false;
    }
}
