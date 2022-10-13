/* global window, jQuery, CNNENV, document */
var CNN = CNN || {};

/* sets some context for companion script */
(function legacyBridge(ns, win, env, doc) {
    var Bridge;

    function LegacyBridge() {

        this.bridge = {
            getScript: getScript,
            getStaticDomain: getStaticDomain,
            getStyle: getStyle,
            hasJquery: hasJquery(),
            hasModernizr: hasModernizr()
        };

        function isProd() {
            return (env.indexOf('www') > -1 || env.indexOf('edition.cnn') > -1 || env.indexOf('us.cnn') > -1) ? true : false;
        }

        /* check for jQuery and a valid version of jQuery */
        function hasJquery() {
            var hasSupportedVersion = null,
                hasJQ = (win.jQuery) ? true : false,
                version = null;

            if (hasJQ) {
                version = (jQuery.fn.jquery).split('.', 2);
                hasSupportedVersion = (Number(version[1]) > 7) ? true : false;
            } else {
                hasSupportedVersion = false;
            }
            return hasSupportedVersion;
        }

        /* quick check for Modernizr */
        function hasModernizr() {
            return (win.Modernizr) ? true : false;
        }

        /* on success will append a stylesheet to the head of the document */
        function getStyle(url, options, callback) {
            var div,
                link = doc.createElement('link'),
                defaultOptions = {
                    ie8only: false
                },
                opts = options || {
                    ie8only: false
                },
                forIE8 = opts.hasOwnProperty('ie8only') ? opts.ie8only : defaultOptions.ie8only,
                addLink = true;

            link.type = 'text/css';
            link.rel = 'stylesheet';
            link.href = url;

            if (forIE8) {
                div = doc.createElement('div');
                div.innerHTML = '<!--[if lte IE 8]><i></i><![endif]-->';
                if (div.getElementsByTagName('i').length !== 1) {
                    addLink = false;
                }
            }

            if (addLink) {
                doc.getElementsByTagName('head')[0].appendChild(link);
                if (callback) {
                    callback();
                }
            }
        }

        function getStaticDomain() {
            return (isProd()) ? '//cdn.cnn.com/cnn' : env;
        }

        /* on success will append a script to the head of the document */
        function getScript(url, success) {
            var script, head, done;
            script = doc.createElement('script');
            script.src = url;
            head = doc.getElementsByTagName('head')[0];
            if (success) {
                done = false;
                script.onload = script.onreadystatechange = function() {
                    if (!this.readyState || /loaded|complete/.test(this.readyState)) {
                        done = true;
                        success();
                        script.onload = script.onreadystatechange = null;
                    }
                };
            }
            head.appendChild(script);
        }

        /**
         * this style sheet is for global overrides - namespace overrides as this
         * stylesheet is loaded everywhere the static chrome is used
         * e.g. - this style sheet overrides legacy blog styles
         */
        getStyle(getStaticDomain() + '/.element/ssi/www/misc/4.0/static/css/static-init.css?v1.4');
    }

    LegacyBridge.prototype.getState = function() {
        return this.bridge;
    };

    ns.staticNav = ns.staticNav || {};

    Bridge = new LegacyBridge();
    ns.staticNav.legacyBridge = Bridge.getState();

}(CNN, window, CNNENV, document));

/* global jQuery, window, document, CNN, CNNENV */

/**
 * static page message handler
 * companion script: cnn-michonne/src/js/pages/common/static-chrome.js
 */

var CNNVERTICAL = CNNVERTICAL || false,
    CNNSTATICSECTION = CNNSTATICSECTION || '';


(function handleMessages(win, doc, ns, env) {
    'use strict';

    if(CNNVERTICAL === false) {
      if(CNNSTATICSECTION.indexOf('/') > -1) {
        CNNVERTICAL = CNNSTATICSECTION.split("/")[0];
      }
      else {
        CNNVERTICAL = CNNSTATICSECTION;
      }
    }

    var $j;
    ns.staticNav = ns.staticNav || {};
    /* when loading on mobile web the cnnApp parameter will be present */
    ns.staticNav.appDetected = ns.staticNav.appDetected || (win.location.search.indexOf('cnnApp') > -1) ? 1 : 0;
    /* if the cnnApp parameter is present exit */
    if (ns.staticNav.appDetected) {
        console.info('CNN App Mode Active');
        return;
    }

    /**
     * @member {Array} dataType
     * container for the data-type(s) attributes found in the DOM
     * passed to Michonne as the type parameter
     */
    ns.staticNav.dataType = [];

    /**
     * @member {Object} ctx
     * container used to hold the page state
     */
    ns.staticNav.ctx = {};
    ns.staticNav.ctx.section = CNNSTATICSECTION;
    ns.staticNav.ctx.isVertical = CNNVERTICAL;
    ns.staticNav.ctx.isMobile = /Android|webOS|iPad|iPhone|iPod|BlackBerry|IEMobile/i.test(win.navigator.userAgent);

    /* legacy pages are not responsive to browser size and will not have this property set */
    ns.staticNav.responsive = ns.staticNav.responsive || ns.staticResponsive || false;

    /* setting the chrome to be responsive on mobile even if the content is not */
    if (ns.staticNav.ctx.isMobile && !ns.staticNav.responsive) {
        ns.staticNav.responsive = true;
    }

    /* custom event store */
    ns._zonesAndDomReadyEvent = true;

    /**
     * @member {Function} init
     * initializes the static chrome
     *
     * @param {String} vertical
     * CNNSTATICSECTION is passed in
     * verticals are passed with a "/" e.g. style/design
     */
    ns.staticNav.init = function initiate(vertical) {
        vertical = (vertical && vertical.indexOf('/') > -1) ? vertical + '/' : '';

        /* Most legacy pages load jquery 1.3.2 | a valid version of jQuery should be loaded before getting started */
        if (!ns.staticNav.legacyBridge.hasJquery) {
            ns.staticNav.legacyBridge.getScript(ns.staticNav.legacyBridge.getStaticDomain() + '/.element/ssi/www/misc/4.0/static/js/jquery.min.js', function () {
                ns.staticNav.legacyBridge.hasJquery = true;
                init();
            });
        } else {
            init();
        }

        /* the template for requesting the config from Michonne */
        var chromeFrame = '<iframe id="cnn-nav-chrome" src="' + env + '/data/ocs/section/' + vertical + 'index.html:*/views/pages/common/static-chrome.html#cnn-nav-chrome" style="display:none;"></iframe>';

        function init() {
            $j = jQuery;

            /* handler for the onZonesAndDomReady event that breaking news initialzes on */
            $j.fn.extend({
                /* Event for all zones rendered and DOM ready */
                onZonesAndDomReady: function (handler) {
                    if (typeof handler === 'function') {
                        if (ns._zonesAndDomReadyEvent === true) {
                            handler(jQuery);
                        } else {
                            jQuery(this).on('allZonesAndDomReady', {handler: handler}, function _allZonesAndDomReadyEventHandler(event) {
                                event = event || {};
                                if (typeof event.data === 'object' && event.data !== null && typeof event.data.handler === 'function') {
                                    event.data.handler(jQuery);
                                }
                            });
                        }
                    }
                }
            });

            $j(doc).on('ready', function fnReady() {
                var wrapper = $j('.cnn-js-chrome-wrapper').first(),
                    html = wrapper.html();

                /* navigation styles namespace */
                $j('body').addClass('cnn-navigation');
                wrapper.html(chromeFrame + html);
                startMessageHandler();
            });

            /* listen on the window for the message event */
            $j(win).on('message', processMessage);
        }

        function startMessageHandler() {
            /* store the chrome types (e.g. header/footer) the page wants to load */
            $j('.cnn-js-navigation').each(function() {
                var type = $j(this).data('type');
                ns.staticNav.dataType.push(type);
            });
        }

        function processMessage(e) {
            var data,
                postMessageEvent = e.originalEvent,
                origin = getOriginMatch(postMessageEvent.origin);

            /* only process messages from valid domains */
            if (postMessageEvent.origin === origin) {
                data = postMessageEvent.data;
                if (data) {
                    if (data.indexOf('-static-') > -1) {
                        processJSON(data);
                    } else {
                        placeMarkup(data);
                    }
                }
            }
        }

        function processJSON(data) {
            /**
             * parses the initial message into json
             * creates the necessary members for breaking news, sets the script & stylesheet paths
             * and sets the edition
             * @var {Object} json
             * parses the content of the message
             */
            var json = JSON.parse($j(data).html());
            ns.staticNav.paths = {
                nav: json.header.bundle,
                foot: json.footer.bundle,
                modernizr: json.header.modernizr,
                hostDomain: json.data.host,
                headerStyle: json.stylesheets.responsive,
                footerStyle: json.stylesheets.footer,
                pickerStyle: json.stylesheets.picker,
                skinnyStyle: json.stylesheets.skinny,
                sponsored: json.stylesheets.sponsored,
                sponsoredWhiteLabel: json.stylesheets.sponsoredWhiteLabel
            };

            ns.contentModel = {
                edition: json.contentModel.edition
            };
            ns.Features = {
                enableBreakingNews: json.Features.enableBreakingNews
            };
            ns.Feeds = {
                breakingNews: {
                    ttl: json.Feeds.breakingNews.ttl,
                    url: json.Feeds.breakingNews.url
                }
            };

            ns.WatchLiveCountries = json.WatchLiveCountries || [];

            /* load Modernizr if not present */
            if (!ns.staticNav.legacyBridge.hasModernizr) {
                ns.staticNav.legacyBridge.getScript(ns.staticNav.paths.modernizr, function () {
                    ns.staticNav.legacyBridge.hasModernizr = true;
                    loadScripts(json.scripts);
                });
            }

            /* edition namespace for chrome styles */
            $j('body').eq(0).addClass(json.contentModel.edition);
        }

        function loadScripts(scripts) {
            /* load the scripts passed in from the config */
            $j(scripts).each(function(i, b) {
                ns.staticNav.legacyBridge.getScript(b);
            });
        }

        function getOriginMatch(origin) {
            /**
             * @var {Array} validOrigins
             * a dictionary of valid origins to process messages from
             *
             * @var {Null | String} validOrigin
             * A successful match will return a string
             *
             * @returns on success will return a valid origin
             */
            var validOrigin = null,
                validOrigins = [
                    '//www.cnn.com',
                    '//edition.cnn.com',
                    '//edition.enable.next.cnn.com',
                    '//edition.sweet.next.cnn.com',
                    '//dev.next.cnn.com',
                    '//enable.next.cnn.com',
                    '//ref.next.cnn.com',
                    '//localhost.next.cnn.com:8080',
                    '//train.next.cnn.com',
                    '//stage.next.cnn.com',
                    '//edition.dev.next.cnn.com',
                    '//edition.ref.next.cnn.com',
                    '//edition.train.next.cnn.com',
                    '//edition.stage.next.cnn.com',
                    '//us.cnn.com',
                    '//etrain.next.cnn.com',
                    '//edition.etrain.next.cnn.com',
                    '//beta.next.cnn.com',
                    '//edition.beta.next.cnn.com',
                    '//sponsorcontent.cnn.com',
                    '//sweet.next.cnn.com'
                ];

            $j(validOrigins).each(function(i, b) {
                if (origin.indexOf(b) !== 1) {
                    validOrigin = origin;
                    return false;
                }
            });

            return validOrigin;
        }

        function getNavStyle(type) {
            /**
             * determines the correct style sheet to add to the page
             * ensures edition picker style sheet is only added once
             * @param {str} type -- the type of nav
             * @var {obj} root -- cache the staticNav obj
             * @var {obj} getStyle -- literal style sheet paths
             */
            var root = ns.staticNav,
                getStyle = {
                    nav: root.paths.headerStyle,
                    footer: root.paths.footerStyle,
                    picker: root.paths.pickerStyle,
                    skinny: root.paths.skinnyStyle,
                    sponsored: root.paths.sponsored,
                    sponsoredWhiteLabel: root.paths.sponsoredWhiteLabel
                };

            root.ctx = root.ctx || {};
            root.legacyBridge.getStyle(getStyle[type]);

            if (!root.ctx.pickerLoaded) {
                root.legacyBridge.getStyle(getStyle.picker);
                root.ctx.pickerLoaded = true;
            }
        }

        function placeMarkup(data) {
            /**
             * places the data received in the correct place on the page
             * @param {str} data -- post message data
             * @var {obj} root -- cache staticNav
             * @var {obj} getBundle -- literal of which markup to process
             * based on type
             * @var {str} markup -- innerHTML of message data
             * @var {obj} $m jQuery wrapper around markup
             */
            var getBundle = {
                    nav: ns.staticNav.paths.nav,
                    footer: ns.staticNav.paths.foot,
                    skinny: '',
                    sponsored: '',
                    sponsoredWhiteLabel: ''
                },
                markup = $j(data).html(),
                $m = $j(markup),
                footerOnly;
                /*$body = $j('body');*/

            ns.staticNav.ctx = ns.staticNav.ctx || {};

            /* if a header is requested the prepend it to the body */
            /* NOTE: super-skinny now loads sponsored header */
            if (data.indexOf('plain-header') > -1 ||
                data.indexOf('super-skinny') > -1 ||
                data.indexOf('sponsored-white-lable') > -1 ||
                data.indexOf('nav-header') > -1) {

                if (!ns.staticNav.ctx.headerLoaded) {
                    getNavStyle(ns.staticNav.dataType[0]);
                    $m.prependTo('body');
                    ns.staticNav.legacyBridge.getScript(getBundle[ns.staticNav.dataType[0]]);
                    ns.staticNav.ctx.headerLoaded = true;

                    if (ns.staticNav.dataType[0] === 'sponsored') {
                        $j('body').addClass('pg pg-sponsor-article');
                    }

                    /* hack for legacy blogs that sets the nav to only display the home link
                    if ($body.hasClass('blog') || $body.hasClass('error404') || $body.hasClass('single')) {
                        $j('#nav').removeClass('nav-index-0');
                    }
                    */
                }
            }

            /* if a footer is requested append it to the body */
            if (data.indexOf('l-footer') > -1 && !ns.staticNav.ctx.footerLoaded) {
                footerOnly = ns.staticNav.dataType.length === 1;

                if (footerOnly) {
                    ns.staticNav.legacyBridge.getScript(getBundle[ns.staticNav.dataType[0]]);
                    getNavStyle(ns.staticNav.dataType[0]);
                } else {
                    ns.staticNav.legacyBridge.getScript(getBundle[ns.staticNav.dataType[1]]);
                    getNavStyle(ns.staticNav.dataType[1]);
                }

                $m.appendTo('body');
                $j('footer').addClass('cnn-static-footer');
                ns.staticNav.ctx.footerLoaded = true;
            }
        }
    };

    ns.staticNav.init(CNNSTATICSECTION);
}(window, document, CNN, CNNENV));
