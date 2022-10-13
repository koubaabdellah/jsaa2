/*jshint camelcase: false */
/*global window, YAFT */
/*
    YAFT plugin to send secondary aft metric: aft without ads
*/
;(function(w) {
    'use strict';

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

    function execute(confs, data) {

        var aftNoAd = 0,
            aftIntervalCount = Math.floor(data.visuallyComplete / 100), // 100ms per interval. Should be max 500. Dont kill the memory
            aftIntervals = new Array(aftIntervalCount), //set intervals array for aft calculation and graph for visualization
            i,
            normTotCovPerc = 0,
            aftModsReport = data.modulesReport,
            modsReport = {},
            adMods = confs.adModules,
            adModsLen = adMods.length,
            matches,
            totalCoveragePercentage = 0,
            key;
    
        for (key in aftModsReport){
            if (aftModsReport.hasOwnProperty(key)) {
                matches = false;
                for (i = 0; i < adModsLen; i += 1) {
                    if (key.search(adMods[i]) !== -1) {
                        matches = true;
                        break;
                    }
                }
                if (!matches) {
                    modsReport[key] = aftModsReport[key];
                }
            }
        }
    

        totalCoveragePercentage = getTotalCoverage(modsReport);
        //init intervals
        for (i = 0; i < aftIntervalCount; i += 1) {
            aftIntervals[i] = 0;
        }
        i = 0;
        for (key in modsReport){
            if (modsReport.hasOwnProperty(key) && modsReport[key].inViewPort && Math.round(modsReport[key].coveragePercentage) > 0) {
                if (confs.useNormalizeCoverage) {
                    modsReport[key].normCoveragePercentage =  (modsReport[key].coveragePercentage / totalCoveragePercentage) * 100;
                    normTotCovPerc += modsReport[key].normCoveragePercentage;
                }

                if (modsReport[key].loadTime > 0) {
                    i = Math.round(modsReport[key].loadTime / 100);
                    aftIntervals[i] += confs.useNormalizeCoverage ? modsReport[key].normCoveragePercentage: modsReport[key].coveragePercentage; 
                }
            }
        }


        if (confs.useNormalizeCoverage) {
            aftNoAd += (normTotCovPerc - aftIntervals[0]);
        } else {
            aftNoAd += (totalCoveragePercentage - aftIntervals[0]);
        }
        for (i = 1; i < aftIntervalCount; i += 1) {
            aftIntervals[i] = aftIntervals[i - 1] + aftIntervals[i];
            if (confs.useNormalizeCoverage) {
                aftNoAd += (normTotCovPerc - aftIntervals[i]);
            } else {
                aftNoAd += (totalCoveragePercentage - aftIntervals[i]);
            }
        }
        
        data.aftNoAd = aftNoAd;
        YAFT.logToConsole('----NOADAFT----');
        YAFT.logToConsole(modsReport);
        if (w.YAFT_REPORT && w.YAFT_REPORT.addExtra) {
            w.YAFT_REPORT.addExtra({name:'aftNoAd', title: 'AFTNOAD', value: aftNoAd, isNumeric: true, needsRounding: true});
        }
        return data;
    }

    w.yaft_aftnoad = {execute: execute};
}(window));
