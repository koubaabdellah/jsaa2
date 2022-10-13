// import { get } from "https";
(function ($) {
    var $ = $.noConflict();

    var ga_dump = {
        // @TODO: This is dynamic 
        "sidebar-pdf-dl": {
            action: 'Click',
            label: 'Sidebar PDF DL'

        },
        "conclusion-view-reports": {
            action: 'Click',
            label: 'Conclusion View Reports'
        },
        "conclusion-get-rating": {
            action: 'Click',
            label: 'Conclusion Get Rating'
        },
        "footer-security": {
            action: 'Click',
            label: 'Footer Security'
        },
        "footer-cybersec-insights": {
            action: 'Click',
            label: 'Footer Cybersec Insights'
        }
    };

    window.onload = function () {
        let svgNames = ['Chart_IncreaseInAttacks_desktop', 'Chart_IncreaseInAttacks_mobile', 'circular-chart-73', 'Chart_WhichDescribesYourCSProgram_desktop', 'Chart_WhichDescribesYourCSProgram_Mobile_noText', 'Chart_HowDoYouIdentifyCSThreats_desktop', 'Chart_HowDoYouIdentifyCSThreats_Mobile', 'Chart_HowDoYouCoordinateIncidentResponse_desktop', 'Chart_HowDoYouCoordinateIncidentResponse_mobile', 'Chart_WhichElementsTest_desktop', 'Chart_WhichElementsTest_mobile', 'Chart_LevelOfRisk_desktop', 'Chart_LevelOfRisk_mobile', 'circular-chart-22', 'Chart_WhichAreasMostConfident_desktop', 'Chart_WhichAreasMostConfident_mobile', 'Chart_RisksDeployEmergingTech_desktop', 'Chart_RisksDeployEmergingTech_mobile', 'circular-chart-88', 'Chart_PenetrationTests_desktop', 'Chart_PenetrationTests_mobile'];

        svgNames.forEach(function (svgName) {
            let ajax = new XMLHttpRequest();
            ajax.open("GET", '/content/dam/attbusiness/insights/reports/cybersecurity-vol85/bundle-svgs/' + svgName + '.svg', true);
            ajax.send();
            ajax.svgName = svgName
            ajax.onload = function (e) {
                let child = document.createElement('div');
                child.innerHTML = ajax.responseText;
                document.querySelector('[make-ajax-svg=' + ajax.svgName + ']').appendChild(att.entbus.veracode.sanitizeHtml(child));
                if (ajax.svgName === svgNames[svgNames.length - 1]) {
                    // var s = document.createElement('script');
                    // s.type = 'text/javascript';
                    // s.async = true;
                    // s.src = './js/smil.user.js';
                    // var x = document.getElementsByTagName('script')[0];
                    // x.parentNode.insertBefore(s, x);           
                    document.documentElement.removeAttribute("smiling"); 
                    initSMIL()
                    animateChartsOnScroll();

                    // Removeing PIE chart mask animation. which is not supporteed in IE
                    if (detectIEBrowser()) {
                    $('.mask-animation').hide();
                    }
                }
            }
        });


        scrollToSections();
        animateChartsOnScroll();
        googleAnalyticsTriggering();
        activeNavTabs();

    }

    function throttle(callback, limit) {
        var tick = false;
        return function () {
            if (!tick) {
                callback.call();
                tick = true;
                setTimeout(function () {
                    tick = false;
                }, limit);
            }
        }
    }




    function debounce(func, wait, immediate) {
        // 'private' variable for instance
        // The returned function will be able to reference this due to closure.
        // Each call to the returned function will share this common timer.
        var timeout;

        // Calling debounce returns a new anonymous function
        return function () {
            // reference the context and args for the setTimeout function
            var context = this,
                args = arguments;

            // Should the function be called now? If immediate is true
            //   and not already in a timeout then the answer is: Yes
            var callNow = immediate && !timeout;

            // This is the basic debounce behaviour where you can call this 
            //   function several times, but it will only execute once 
            //   [before or after imposing a delay]. 
            //   Each time the returned function is called, the timer starts over.
            clearTimeout(timeout);

            // Set the new timeout
            timeout = setTimeout(function () {

                // Inside the timeout function, clear the timeout variable
                // which will let the next execution run when in 'immediate' mode
                timeout = null;

                // Check if the function already ran with the immediate flag
                if (!immediate) {
                    // Call the original function with apply
                    // apply lets you define the 'this' object as well as the arguments 
                    //    (both captured before setTimeout)
                    func.apply(context, args);
                }
            }, wait);

            // Immediate mode and no wait timer? Execute the function..
            if (callNow) func.apply(context, args);
        }

    }

    function onScrollMethods() {
        activeNavTabs();
        activePageView();
        animateChartsOnScroll();
    }






    // Define the debounced function
    var debouncedScroll = debounce(onScrollMethods, 50);

    // Call the debounced function on every mouse move
    window.addEventListener('scroll', debouncedScroll);


    // added throttle for scroll event listener
    window.addEventListener("scroll", throttle(onScrollMethods, 500));



    /**
     * To animate charts on first time scroll to them
     */
    function animateChartsOnScroll(event) {
        var chartElements = Array.prototype.slice.call(document.getElementsByClassName('graph-clipath'), 0);
        var limitHeight = (window.innerHeight - 100);
        chartElements.forEach(function (chartElement) {
            var elemTop = chartElement.getBoundingClientRect().top;
            if (elemTop < limitHeight) {
                if (chartElement.classList) {
                    chartElement.classList.add("active");
                    addSlimAnimations(chartElement);
                } else if (!hasClass(chartElement, "active")) {
                    addSlimAnimations(chartElement);
                    chartElement.setAttribute('class', chartElement.getAttribute('class') + ' ' + "active");

                }
            }
        });

    }

    function addSlimAnimations(chartElement) {
        var browser = navigator.userAgent.toLowerCase();
        if ((browser.indexOf('firefox') || detectIEBrowser()) &&
            chartElement.attributes.animationid &&
            !hasClass(chartElement, 'animation-activated')) {
            $(chartElement).addClass('animation-activated');
            document.getElementById(chartElement.attributes.animationid.nodeValue).beginElement && document.getElementById(chartElement.attributes.animationid.nodeValue).beginElement();
        }
    }

    function hasClass(ele, cls) {
        if (ele.classList) {
            return ele.classList.contains(cls);
        } else {
            return ele.getAttribute('class').indexOf(cls) > -1;
        }
    }


    /***
 * T
o check the the scroll height and add the active class to the respective section nav link.
 */
    function activeNavTabs() {
        var last_known_scroll_position = 0;
        var ticking = false;
        var sections = document.getElementsByClassName('nav-bar-section');
        var navElements = document.getElementsByClassName('att-nav-btn');
        for (var j = 0; j < navElements.length; j++) {
            var element = navElements[j];
            element.classList.remove('nav-active');
        }

        last_known_scroll_position = window.pageYOffset;

        if (!ticking) {

            window.requestAnimationFrame(function () {
                fixHeaderOnScroll(last_known_scroll_position);
                ticking = false;
            });
            ticking = true;
        }

        for (var i = 0; i < sections.length; i++) {
            var el = sections[i];
            var rect = el.getBoundingClientRect();
            var elemTop = rect.top;
            var elemBottom = rect.bottom;

            var isVisible = (elemTop < window.innerHeight && elemBottom >= 0);
            if (isVisible) {
                var id = el.id;
                for (var j = 0; j < navElements.length; j++) {
                    var element = navElements[j];
                    element.classList.remove('nav-active');
                }
                document.querySelectorAll('[data-nav-id=' + id + ']')[0].classList.add('nav-active');
            }
        }

    }

    /***
     * To fix the header on the top when user scrolls the page.
     */
    function fixHeaderOnScroll(scroll_pos) {
        // do something with the scroll position
        var headerHeight = document.getElementById('sw-header').offsetHeight;

        document.getElementById('navbar').classList.add('nav-fixed');

        if (scroll_pos > headerHeight) {
            document.getElementById('navbar').classList.add('nav-fixed');
        } else {
            document.getElementById('navbar').classList.remove('nav-fixed');
        }
    }

    function activePageView() {
        var last_known_scroll_position = 0;
        var ticking = false;
        var sections = document.getElementsByClassName('page-section');

        last_known_scroll_position = window.pageYOffset;

        if (!ticking) {

            window.requestAnimationFrame(function () {
                fixHeaderOnScroll(last_known_scroll_position);
                ticking = false;
            });
            ticking = true;
        }

        for (var i = 0; i < sections.length; i++) {

            var el = sections[i];
            var rect = el.getBoundingClientRect();
            var elemTop = rect.top;
            var elemBottom = rect.bottom;

            var isVisible = (elemTop < window.innerHeight && elemBottom >= 0);
            if (isVisible && !el.classList.contains('viewed-section')) {
                var page = el.getAttribute('pageView');
                el.classList.add('viewed-section');
                sendPageView(page);

            }
        }
    }

    /***
     * To scroll the selected section from top.
     */
    function scrollToSections() {
        Array.prototype.slice.call(document.querySelectorAll(".att-nav-btn"), 0).forEach(function (anchor) {
            anchor.addEventListener('click', function (e) {
                // e.preventDefault();
                let id = e.currentTarget.attributes['data-nav-id'].nodeValue;
                let scrollOffset = document.getElementById(id).offsetTop;
                //ToDo in future
                $('html, body').animate({
                    scrollTop: scrollOffset - 120
                }, 200)
            });
        });
    }




    function googleAnalyticsTriggering() {
        //seach page version3 experiments start
        var a = document.querySelectorAll("[x-ga-name]");
        if (a.length) {
            for (let index = 0; index < a.length; index++) {
                // e.preventDefault();
                var eachElem = a[index];
                eachElem.addEventListener("click", bindClick(eachElem));
            }
        }
    };

    function bindClick(elem) {
        return function () {
            var gaTag = elem.getAttribute('x-ga-name');
            var gaValues = ga_dump[gaTag];
            sendEvent(gaValues.action, gaValues.label)
        };
    }

    function sendEvent(action, label) {
        // gtag('event', action, {
        //     'event_category': 'Vendor Interactive',
        //     'event_label': label + '287353',
        //     'non_interaction': false
        // });
    }

    function sendPageView(page) {
        var gaPrefix = 'edge.spiceworksstatic.com/service.labs/att/ebrochure/287353/en/sw';
        // gtag('config', 'UA-314222-5', {
        //     'page_location': gaPrefix + page,
        //     'non_interaction': true
        // });
    }

    function detectIEBrowser() {
        return !!window.MSInputMethodContext && !!document.documentMode;

    }

}(jQuery))