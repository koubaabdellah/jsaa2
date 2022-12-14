var psmMgrConfig=
{
  "psmBrand": "warnermedia",
  "psmSubBrand": "warnermedia.com",
  "psmBootstrapVersion": "web/release/3.1.2",
  "psmHost": "warnermedia.com"
}
psmMgrConfig.psmEnvironment="release";
psmMgrConfig.psmBrandToken="warnermedia";

var psmMgr = {
    psmBootstrapProdEnvironment: psmMgrConfig.psmBootstrapProdEnvironment || "PROD",
    psmBootstrapNonProdEnvironment: psmMgrConfig.psmBootstrapNonProdEnvironment || "TEST",
    psmBootstrapVersion: psmMgrConfig.psmBootstrapVersion || "0.0",
    psmTelBootstrapVersion: psmMgrConfig.psmTelVersion || "0.0",
    psmBootstrapEnvironment: "TEST",
    psmGeoCookieName: psmMgrConfig.psmGeoCookieName || "countryCode",
    psmGeoExpectedCookieValues: psmMgrConfig.psmGeoExpectedCookieValues || ["US", "PR", "VI", "UM"],
    psmSendGeoInit: (typeof psmMgrConfig.psmSendGeoInit) !== 'undefined' ? psmMgrConfig.psmSendGeoInit : true,
    psmHost: psmMgrConfig.psmHost.indexOf('.') === -1 ? psmMgrConfig.psmHost + '.com' : psmMgrConfig.psmHost,
    psmShortCircuit: (typeof psmMgrConfig.psmShortCircuit) !== 'undefined' ? psmMgrConfig.psmShortCircuit : false,
    psmTelThrottleBy: (typeof psmMgrConfig.psmTelThrottleBy) === 'number' && psmMgrConfig.psmTelThrottleBy < 10 && psmMgrConfig.psmTelThrottleBy >= 0 ? parseInt(psmMgrConfig.psmTelThrottleBy) : 0,
    // this is for BETA SDK
    psmTelLoadSdk: (typeof psmMgrConfig.psmTelLoadSdk) !== 'undefined' ? psmMgrConfig.psmTelLoadSdk : false,
    // this is for Release SDK
    psmMonitorTop2Player: (typeof psmMgrConfig.psmMonitorTop2Player) !== 'undefined' ? psmMgrConfig.psmMonitorTop2Player : false,
    ttl: 86400, // 60 * 60 * 24
    psm_data_test_version: null,
    psm_test_ts: null,
    psm_data_test_environment: null,
    expires_ts: null,
    PLAYER_LOAD_ITERATION_COUNT: 18,

    initPsm: function() {
        window.WM = window.WM || {};
        window.WM.PSM = window.WM.PSM || {};
        WM.PSM.initPsm (
            {
                platform: psmMgrConfig.psmPlatform || 'web',
                brand: psmMgrConfig.psmBrand,
                subBrand: (typeof psmMgrConfig.psmSubBrand) !== 'undefined' ? psmMgrConfig.psmSubBrand : '',
                psmEnvironment: psmMgr.psmBootstrapEnvironment,
                countryCode: psmMgr.psmSendGeoInit === true ? psmMgr.psmGeoActualCookieValue : '',
                cookieDomain: psmMgr.psmHost,
                topics: psmMgrConfig.psmTopics || {},
                contentMetadata: psmMgrConfig.psmContentMetadata || {},
                bootstrapVersion: psmMgr.psmBootstrapVersion,
                psmBrandToken: psmMgrConfig.psmBrandToken || psmMgrConfig.psmBrand,
                psmPrivacyMode: psmMgrConfig.psmPrivacyMode
            }
        )
        var throttleTest = parseInt(Date.now().toString().substr(-1));

        if (psmMgr.psmTelLoadSdk === true && psmMgr.psmTelThrottleBy <= throttleTest) {
            psmMgr.loadPsmTel()

        } else if (true === psmMgr.psmMonitorTop2Player) {
            psmMgr.loadPlayerObject( psmMgr.startMonitoringVideo );
        }

        if (psmMgr.psmTelThrottleBy > 0) {
            psmMgr.log("psm tel throttled by " + psmMgr.psmTelThrottleBy + "0%");
        }
    },

    startMonitoringVideo: function () {
        window.psmVideo.top2.startMonitoring(window.TopPlayer);
    },

    loadPlayerObject: function(callback) {
        i = 0;
        var videoObjVerification = setInterval(function () {
            ++i;
            if (typeof TopPlayer !== 'undefined') {
                psmMgr.log("Player Object Found .. on iteration " + i);

                callback();
                clearInterval(videoObjVerification);
            }
            if (i >= psmMgr.PLAYER_LOAD_ITERATION_COUNT) {
                clearInterval(videoObjVerification);
                psmMgr.log("Player Object Not Found");
            }
        }, 600);
    },

    initPsmTel: function() {
        psmMgr.log("INIT psmTel");

        var psmTelInitObj = {
            brand: psmMgrConfig.psmBrand,
            subBrand: (typeof psmMgrConfig.psmSubBrand) !== 'undefined' ? psmMgrConfig.psmSubBrand : '',
            streamType: (typeof psmMgrConfig.psmTelStreamType) !== 'undefined' ? psmMgrConfig.psmTelStreamType : '',
            environment: psmMgr.psmBootstrapEnvironment
        }

        if (typeof TopPlayer !== 'undefined') {
            psmMgr.log("Init PSM TEL");
            psmVideo.init(psmTelInitObj, TopPlayer);
        } else {
            psmMgr.log("PSM TEL Not Initialised");
        }
    },

    loadScript: function(src, callback) {
        var e = document.createElement('script');
        e.type = 'text/javascript';
        e.async = true;
        e.src = src;
        if (callback) {
            e.addEventListener('load', callback);
        }
        var n = document.getElementsByTagName('script')[0];
        n.parentNode.insertBefore(e, n);
    },

    getParameterByName: function(name) {
        var url = window.location.href;
        /* Backwards compatible for IE11 */
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        let val = decodeURIComponent(results[2].replace(/\+/g, ' '));
        return val === "true" ? true : val === "false" ? false : val;
    },

    getCookie: function(cookieName) {
        var match = document.cookie.match(new RegExp('(^| )' + cookieName + '=([^;]+)'));
        if (match) {
            return match[2];
        } else {
            return '';
        }
    },

    log: function(msg) {
        if (typeof psmMgr.psm_test_ts !== 'undefined' && psmMgr.psm_test_ts) {
            console.log(msg);
        }
    },

    applyTestOverrides: function() {
        this.psm_data_test_version = this.getParameterByName("psm_data_test_version");
        this.psm_tel_test_version = this.getParameterByName("psm_tel_test_version");
        this.psm_test_ts = parseInt( this.getParameterByName("psm_test_ts") )
        this.psm_data_test_environment = this.getParameterByName("psm_data_test_environment");
        this.psm_test_country_code = this.getParameterByName("psm_test_country_code");
        this.psm_monitor_top_2_player = this.getParameterByName("psm_monitor_top_2_player");
        this.psm_tel_load_beta_sdk = this.getParameterByName("psm_tel_load_beta_sdk");
        now = Math.floor(Date.now() / 1000);
        this.expires_ts = this.psm_test_ts + this.ttl;

        this.psmBootstrapEnvironment = psmMgrConfig.psmEnvironment == "release" ? this.psmBootstrapProdEnvironment : this.psmBootstrapNonProdEnvironment;

        if (this.psm_test_ts && now > this.psm_test_ts && now < this.expires_ts) {
            this.psmBootstrapVersion = this.psm_data_test_version || this.psmBootstrapVersion;
            this.psmTelBootstrapVersion = this.psm_tel_test_version || this.psmTelBootstrapVersion;
            this.psmBootstrapEnvironment = this.psm_data_test_environment || this.psmBootstrapEnvironment;
            this.psmGeoActualCookieValue = this.psm_test_country_code ? this.psm_test_country_code : this.psmGeoActualCookieValue;
            this.psmMonitorTop2Player = this.psm_monitor_top_2_player ? this.psm_monitor_top_2_player : this.psmMonitorTop2Player;
            this.psmTelLoadSdk = this.psm_tel_load_beta_sdk ? this.psm_tel_load_beta_sdk : this.psmTelLoadSdk;
            this.log( "psm: entering test mode. ", "ver:", this.psmBootstrapVersion, "env:", this.psmBootstrapEnvironment, "geo code:", this.psmGeoActualCookieValue, "monitorTop2:", this.psmMonitorTop2Player, "load beta tel sdk:", this.psmTelLoadSdk );
        }
    },

    loadPsm: function() {

        this.psmGeoActualCookieValue = this.getCookie(this.psmGeoCookieName);

        this.applyTestOverrides();

        var run = true;
 
        if (this.psmBootstrapVersion === "0.0") {
            run = false;
        }

        if (this.psmGeoExpectedCookieValues.indexOf(this.psmGeoActualCookieValue) < 0  && this.psmShortCircuit) {
            run = false;
        }

        if (run) {
            try {
                this.loadScript("https://lightning." + this.psmHost + "/cdp/psm/i/" + this.psmBootstrapVersion + "/psm.legacy.min.umd.js", this.initPsm );
            } catch (e) {
                this.log("psm legacy did not load", e);
            }
        }
    },

    loadPsmTel: function () {
        var run = false;

        if (psmMgr.psmTelBootstrapVersion !== "0.0") {
            run = true;
        }

        if (run) {
            try {
                psmMgr.log("try to load psm tel");
                psmMgr.loadScript("https://lightning." + psmMgr.psmHost + "/cdp/psm/tel/" + psmMgr.psmTelBootstrapVersion + "/psm-tel.js", psmMgr.loadPlayerObject( psmMgr.initPsmTel ));
            } catch (e) {
                psmMgr.log("psm tel did not load", e);
            }
        }
    }
}

psmMgr.loadPsm();

