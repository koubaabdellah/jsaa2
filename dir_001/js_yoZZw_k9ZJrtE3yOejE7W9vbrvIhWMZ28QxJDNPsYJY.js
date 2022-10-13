(function(drupalSettings){
  interval = setInterval(function qiota_init() {
    if (typeof renderQiotaAuth === 'function') {
      window.q_token = drupalSettings.q_token;
      window.q_urlcallback = drupalSettings.q_urlcallback;
      window.q_ressource_uri = window.location.href;
      window.renderQiotaAuth(window.q_token, window.q_urlcallback);
      clearInterval(interval);
    }
  }, 1000);
})(drupalSettings);
;
/**
 * @file
 * Colorbox JS.
 */

(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.initColorbox = {
    attach: function (context, settings) {
      if (!$.isFunction($.colorbox) || typeof settings.colorbox === 'undefined') {
        return;
      }

      if (settings.colorbox.mobiledetect && window.matchMedia) {
        // Disable Colorbox for small screens.
        var mq = window.matchMedia('(max-device-width: ' + settings.colorbox.mobiledevicewidth + ')');
        if (mq.matches) {
          $.colorbox.remove();
          return;
        }
      }

      settings.colorbox.rel = function () {
        return $(this).data('colorbox-gallery')
      };

      $('.colorbox', context)
        .once('init-colorbox').each(function() {
        // Only images are supported for the "colorbox" class.
        // The "photo" setting forces the href attribute to be treated as an image.
        var extendParams = {
          photo: true
        };
        // If a title attribute is supplied, sanitize it.
        var title = $(this).attr('title');
        if (title) {
          extendParams.title = Drupal.checkPlain(title);
        }
        $(this).colorbox($.extend({}, settings.colorbox, extendParams));
      });

      $('.colorbox', context).colorbox({
        onComplete: function (e) {
          var focus = $('#cboxContent').find('#cboxPrevious').css('display') !== 'none' ? $('#cboxContent').find('#cboxPrevious') : $('#cboxContent').find('#cboxClose');
          focus.focus();

          $('#cboxContent').on('keydown', function (e) {
            var keyCode = e.keyCode || e.which;
            var firstElement = $('#cboxContent').find('#cboxPrevious').last().is(':focus');
            var lastElement = $('#cboxContent').find('#cboxClose').first().is(':focus');
            if (keyCode === 9 && !e.shiftKey && lastElement) {
              e.preventDefault();
              $('#cboxContent').find('#cboxPrevious').first().focus();
            }
            else if (keyCode === 9 && e.shiftKey && firstElement) {
              e.preventDefault();
              $('#cboxContent').find('#cboxClose').first().focus();
            }
          });
        }
      });
    }
  };

})(jQuery, Drupal);
;
/**
 * @file
 */

(function ($, Drupal) {

  "use strict";

  Drupal.behaviors.initColorboxPlainStyle = {
    attach: function (context, settings) {
      $(context).bind('cbox_complete', function () {
        // Make all the controls invisible.
        $('#cboxCurrent, #cboxSlideshow, #cboxPrevious, #cboxNext', context).addClass('element-invisible');
        // Replace "Close" with "×" and show.
        $('#cboxClose', context).html('\u00d7').addClass('cbox-close-plain');
        // Hide empty title.
        if ($('#cboxTitle:empty', context).length == true) {
          $('#cboxTitle', context).hide();
        }
        $('#cboxLoadedContent', context).bind('mouseover', function () {
          $('#cboxClose', context).animate({opacity: 1}, {queue: false, duration: "fast"});
          if ($('#cboxTitle:empty', context).length == false) {
            $('#cboxTitle', context).slideDown();
          }
        });
        $('#cboxOverlay', context).bind('mouseover', function () {
          $('#cboxClose', context).animate({opacity: 0}, {queue: false, duration: "fast"});
          if ($('#cboxTitle:empty', context).length == false) {
            $('#cboxTitle', context).slideUp();
          }
        });
      });
      $(context).bind('cbox_closed', function () {
        $('#cboxClose', context).removeClass('cbox-close-plain');
      });
    }
  };

})(jQuery, Drupal);
;
/**
 * @file
 * Attaches several event listener to a web page.
 */

(function ($, Drupal, drupalSettings) {

  /* eslint max-nested-callbacks: ["error", 4] */

  'use strict';

  Drupal.google_analytics = {};

  $(document).ready(function () {

    // Attach mousedown, keyup, touchstart events to document only and catch
    // clicks on all elements.
    $(document.body).on('mousedown keyup touchstart', function (event) {

      // Catch the closest surrounding link of a clicked element.
      $(event.target).closest('a,area').each(function () {

        // Is the clicked URL internal?
        if (Drupal.google_analytics.isInternal(this.href)) {
          // Skip 'click' tracking, if custom tracking events are bound.
          if ($(this).is('.colorbox') && (drupalSettings.google_analytics.trackColorbox)) {
            // Do nothing here. The custom event will handle all tracking.
            // console.info('Click on .colorbox item has been detected.');
          }
          // Is download tracking activated and the file extension configured
          // for download tracking?
          else if (drupalSettings.google_analytics.trackDownload && Drupal.google_analytics.isDownload(this.href)) {
            // Download link clicked.
            ga('send', {
              hitType: 'event',
              eventCategory: 'Downloads',
              eventAction: Drupal.google_analytics.getDownloadExtension(this.href).toUpperCase(),
              eventLabel: Drupal.google_analytics.getPageUrl(this.href),
              transport: 'beacon'
            });
          }
          else if (Drupal.google_analytics.isInternalSpecial(this.href)) {
            // Keep the internal URL for Google Analytics website overlay intact.
            ga('send', {
              hitType: 'pageview',
              page: Drupal.google_analytics.getPageUrl(this.href),
              transport: 'beacon'
            });
          }
        }
        else {
          if (drupalSettings.google_analytics.trackMailto && $(this).is("a[href^='mailto:'],area[href^='mailto:']")) {
            // Mailto link clicked.
            ga('send', {
              hitType: 'event',
              eventCategory: 'Mails',
              eventAction: 'Click',
              eventLabel: this.href.substring(7),
              transport: 'beacon'
            });
          }
          else if (drupalSettings.google_analytics.trackOutbound && this.href.match(/^\w+:\/\//i)) {
            if (drupalSettings.google_analytics.trackDomainMode !== 2 || (drupalSettings.google_analytics.trackDomainMode === 2 && !Drupal.google_analytics.isCrossDomain(this.hostname, drupalSettings.google_analytics.trackCrossDomains))) {
              // External link clicked / No top-level cross domain clicked.
              ga('send', {
                hitType: 'event',
                eventCategory: 'Outbound links',
                eventAction: 'Click',
                eventLabel: this.href,
                transport: 'beacon'
              });
            }
          }
        }
      });
    });

    // Track hash changes as unique pageviews, if this option has been enabled.
    if (drupalSettings.google_analytics.trackUrlFragments) {
      window.onhashchange = function () {
        ga('send', {
          hitType: 'pageview',
          page: location.pathname + location.search + location.hash
        });
      };
    }

    // Colorbox: This event triggers when the transition has completed and the
    // newly loaded content has been revealed.
    if (drupalSettings.google_analytics.trackColorbox) {
      $(document).on('cbox_complete', function () {
        var href = $.colorbox.element().attr('href');
        if (href) {
          ga('send', {
            hitType: 'pageview',
            page: Drupal.google_analytics.getPageUrl(href)
          });
        }
      });
    }

  });

  /**
   * Check whether the hostname is part of the cross domains or not.
   *
   * @param {string} hostname
   *   The hostname of the clicked URL.
   * @param {array} crossDomains
   *   All cross domain hostnames as JS array.
   *
   * @return {boolean} isCrossDomain
   */
  Drupal.google_analytics.isCrossDomain = function (hostname, crossDomains) {
    return $.inArray(hostname, crossDomains) > -1 ? true : false;
  };

  /**
   * Check whether this is a download URL or not.
   *
   * @param {string} url
   *   The web url to check.
   *
   * @return {boolean} isDownload
   */
  Drupal.google_analytics.isDownload = function (url) {
    var isDownload = new RegExp('\\.(' + drupalSettings.google_analytics.trackDownloadExtensions + ')([\?#].*)?$', 'i');
    return isDownload.test(url);
  };

  /**
   * Check whether this is an absolute internal URL or not.
   *
   * @param {string} url
   *   The web url to check.
   *
   * @return {boolean} isInternal
   */
  Drupal.google_analytics.isInternal = function (url) {
    var isInternal = new RegExp('^(https?):\/\/' + window.location.host, 'i');
    return isInternal.test(url);
  };

  /**
   * Check whether this is a special URL or not.
   *
   * URL types:
   *  - gotwo.module /go/* links.
   *
   * @param {string} url
   *   The web url to check.
   *
   * @return {boolean} isInternalSpecial
   */
  Drupal.google_analytics.isInternalSpecial = function (url) {
    var isInternalSpecial = new RegExp('(\/go\/.*)$', 'i');
    return isInternalSpecial.test(url);
  };

  /**
   * Extract the relative internal URL from an absolute internal URL.
   *
   * Examples:
   * - https://mydomain.com/node/1 -> /node/1
   * - https://example.com/foo/bar -> https://example.com/foo/bar
   *
   * @param {string} url
   *   The web url to check.
   *
   * @return {string} getPageUrl
   *   Internal website URL.
   */
  Drupal.google_analytics.getPageUrl = function (url) {
    var extractInternalUrl = new RegExp('^(https?):\/\/' + window.location.host, 'i');
    return url.replace(extractInternalUrl, '');
  };

  /**
   * Extract the download file extension from the URL.
   *
   * @param {string} url
   *   The web url to check.
   *
   * @return {string} getDownloadExtension
   *   The file extension of the passed url. e.g. 'zip', 'txt'
   */
  Drupal.google_analytics.getDownloadExtension = function (url) {
    var extractDownloadextension = new RegExp('\\.(' + drupalSettings.google_analytics.trackDownloadExtensions + ')([\?#].*)?$', 'i');
    var extension = extractDownloadextension.exec(url);
    return (extension === null) ? '' : extension[1];
  };

})(jQuery, Drupal, drupalSettings);
;
/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }

}( typeof window != 'undefined' ? window : this, function() {

"use strict";

function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice(0);
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( var i=0; i < listeners.length; i++ ) {
    var listener = listeners[i]
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
};

return EvEmitter;

}));
;
(function (Drupal, drupalSettings, EvEmitter) {
  var ns = 'toggler';
  var evEmitter = new EvEmitter();

  evEmitter.on('toggler:changeState', function (emitter) {
    // si le nouvel état du toggler qui a émit l'event est 'open'
    // alors on ferme les toggler qui sont ouverts
    if (emitter.state === 'open') {
      drupalSettings[ns].instances.forEach(function(instance){
        if (instance.element !== emitter.element && instance.state === 'open') {
          instance.close();
        }
      });
    }
  });

  // si on clique en dehors d'un toggler (bouton et target)
  // on les ferme tous
  document.addEventListener('click', function (e) {
    if (
      !e.target.matches('.toggler') &&
      !e.target.matches('.toggler *') &&
      !e.target.matches('.toggler_target') &&
      !e.target.matches('.toggler_target *')
    ) {
      drupalSettings[ns].instances.forEach(function(instance){
        instance.close();
      });
    }
  });

  function Toggler (element) {
    this.element = element;
    this.target = this.element.nextElementSibling;
    this.wrapper = this.element.parentNode;
    this.config = Toggler.prepareConfig(element);
    this.state = this.config.initialeState;
    this.init();
  }

  Toggler.defaults = {
    initialeState: 'close'
  };

  Toggler.prepareConfig = function (element) {
    var data = element.dataset.toggler;
    try {
      var options = JSON.parse(data);
      return Object.assign({}, Toggler.defaults, options);
    } catch (error) {
      return Toggler.defaults;
    }
  };

  Toggler.prototype.init = function () {
    var that = this;
    that.element.classList.add('toggler');
    that.target.classList.add('toggler_target');
    that.wrapper.classList.add('toggler_wrapper');
    that[that.state]();

    that.element.addEventListener('click', function (e) {
      var toggleAction = that.state === 'close' ? 'open' : 'close';
      that[toggleAction]();
    });
  };

  Toggler.prototype.open = function () {
    this.element.setAttribute('aria-expanded', 'true');
    this.target.setAttribute('aria-hidden', 'false');
    this.element.focus();
    this.setState('open');
  };

  Toggler.prototype.close = function () {
    this.element.setAttribute('aria-expanded', 'false');
    this.target.setAttribute('aria-hidden', 'true');
    this.setState('close');
  };

  Toggler.prototype.setState = function (newState) {
    this.state = newState;
    evEmitter.emitEvent('toggler:changeState', [this]);
  };

  if (typeof drupalSettings[ns] === 'undefined') {
    drupalSettings[ns] = {
      instances: []
    };
  }

  Drupal.behaviors[ns] = {
    attach: function (context, settings) {
      context.querySelectorAll('[data-' + ns + ']').forEach(function (element) {
        if (typeof element[ns] === 'undefined') {
          settings[ns].instances.push(element[ns] = new Toggler(element));
        }
      });
    }
  };

})(Drupal, drupalSettings, EvEmitter);
;
(function () {

  function createHabillage () {
    var link = document.createElement('a');
    link.href = 'http://www.cbnews.fr';
    link.target = '_blank';
    link.title = 'Lien habillage';
    link.className = 'test-habillage_link';

    document.body.className += ' test-habillage';
    document.body.insertBefore(link, document.body.firstChild);
  }

  window.createHabillage = createHabillage;

})();
;
/* Variables definition */ 
var sp_hid = [];
sp_hid["desktop"] = "BB3180BA570E63C14E7030D7A9270B13";
sp_hid["mobile"] = "77B1D05C7CA33DF1A3DD3D567C580EFA";

var _spURL = "https://ws3.smartp.com/sp_tracker_v3.cfm";
/* user consent : 
	. 1 = consent OK
	. 0 = consent KO or No consent
*/
var sp_tracking_consent = 0; /* no consent by default */

/* utilitaires */
String.prototype.trim = String.prototype.trim || function trim() { return this.replace(/^\s\s*/, '').replace(/\s\s*$/, ''); };

function getTitle() {
	return encodeURI(document.title.split("-")[0].trim());
}
function isMobileOrTablet() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

/* tracker js pour smartProfile */
var sp_trackerv3 = function() {  
	/* private stuff */
    var generateID = function() {
		return ""+(new Date).getTime().toString(16)+Math.floor(1E7*Math.random()).toString(16)+Math.floor(1E7*Math.random()).toString(16);
    };
    var getDomain = function() {
		return encodeURIComponent(window.location.protocol+'//'+window.location.hostname);
    };
    var getTimezoneOffset = function() {
		var _ctz = (new Date()).getTimezoneOffset();
		return Math.round(((_ctz==(new Date(20010101)).getTimezoneOffset())?_ctz:(_ctz+60))/-60);
    };
	var getViewportSize = function(){
	  if(window.innerWidth !== undefined && window.innerHeight !== undefined) { 
		var _w = window.innerWidth;
		var _h = window.innerHeight;
	  } else {  
		var _w = document.documentElement.clientWidth;
		var _h = document.documentElement.clientHeight;
	  }
	  if (_w !== undefined)
		return _w + "x" + _h;
	  else
		return "n/a";
	};
	var getUrlParamValue = function(param) {
		var qs = window.location.search.substr(1);
		var vars = qs.split("&");
		for (var i=0;i<vars.length;i++) {
			var pair = vars[i].split("=");
			if (pair[0].toLowerCase() == param.toLowerCase()) {
				var _val = pair[1].split("#");
				return _val[0];
			}
		}
		return "";
	};
	var setCookie = function(_name,_value,_expireInDays) {
		var _expireDate = new Date();
        _expireDate.setTime(_expireDate.getTime()+(_expireInDays*24*60*60*1000));
        document.cookie = _name + "=" + (encodeURIComponent(_value) || "")  + ((_expireInDays) ? (';expires=' + _expireDate.toUTCString()) : "") + "; path=/";
	};
	var getCookie = function(_name) {
		var nameEQ = _name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	};
	var deleteCookie = function(_name) {   
		document.cookie = _name+'=; Max-Age=-99999999;';  
	};
	var	getSPCookie = function() {
		var _ckValue = (getCookie("sp_i")!=null) ? getCookie("sp_i") : generateID();
		setCookie("sp_i",_ckValue,395);
		return _ckValue;
	};
	var	_params = {
      		_consent : sp_tracking_consent,
			_hid : "",
			_sp_url : _spURL,
			_cr : new Date().getTime(),
			_ck : (navigator.cookieEnabled ? 1 : 0),
      		_ua : navigator.userAgent,
			_fv : -1,
			_dom : getDomain(),
			_title : encodeURIComponent(document.title),
			_res : (window.screen) ? screen.width + "x" + screen.height : "n/a",
			_col : (window.screen) ? screen.colorDepth : "n/a",
			_vp : getViewportSize(),
			_tz : getTimezoneOffset(),
      		_h : "",
			_fp : getSPCookie(),
			_event : "",
			_sp_con : "",
			_utm_campaign : "",
			_utm_source : "",
			_utm_medium : "",
			_utm_content : "",
			_ready : false
	};
	var getH = function(_hid) {
	  	var _qs = '?action=getH&_hid='+_hid+'&_res='+_params._res+'&_col='+_params._col+'&_tz='+_params._tz;
		fetch(_params._sp_url+_qs).then(function(response) {
		  if (response.ok) {
			return response.json();
		   }
		}).then(function(_json) {
	    	_params._h = _json.h;
			_params._ready = true;
  		});		
	};
	
	/* public part */
    return {
    	isReady : function (){
    		return _params._ready;
    	},
		getHash : function(_hid) {
			getH(_hid);			
		},
		doTrackClick : function (ctyp,clab,cfrom,cto,hid,cst,site) {
			var sp=new Array();
			sp[0]="?_hid="+hid;
			sp[1]="&_ctyp="+ctyp;
			sp[2]="&_clab="+clab;
			sp[3]="&_cfrom="+cfrom;
			sp[4]="&_cto="+cto;
		    if ((typeof site !== 'undefined') && (site != "")) { 
				sp[5]="&_site="+site;
			}
			sp_trackerv3.doTrack(sp,"",cst);
		},
        doTrack : function(sp,ci,cst) {
		  if (typeof cst !== 'undefined') { _params._consent=cst;}
		  else _params._consent=0;
	  
		  var smartParam = "";
		  for(var i=0;i<sp.length;i++) {
			  if (_params._consent==false || _params._consent==0) {
				var _crit = sp[i].trim().substr(1,5);
				if (_crit!="login")
					smartParam += sp[i];
			  }
			  else
				smartParam += sp[i];
		  }
		  if (ci!="") smartParam += "&_ci=" +ci;
		  smartParam += "&_cr=" + Math.round (Math.random()*1000000000000000);
		  smartParam += "&_fv=" + encodeURIComponent(_params._fv);
		  smartParam += "&_dom=" + encodeURIComponent(window.location.protocol+'//'+window.location.hostname);
		  smartParam += "&_ref=" + encodeURIComponent(document.referrer.substring(0,254));
		  smartParam += "&_res=" + encodeURIComponent(_params._res) + "&_col=" + encodeURIComponent(_params._col);
		  smartParam += "&_vp=" + _params._vp;
		  smartParam += "&_tz=" + _params._tz;
		  smartParam += "&_ck=" + _params._ck;
		  smartParam += "&_fp=" + _params._fp;
		  smartParam += "&_optin=" + _params._consent;
		  smartParam += "&_event=" + encodeURIComponent(getUrlParamValue("event"));
		  smartParam += "&_sp_con=" + encodeURI(getUrlParamValue("sp_con"));
		  smartParam += "&utm_campaign=" + encodeURI(getUrlParamValue("utm_campaign"));
		  smartParam += "&utm_source=" + encodeURI(getUrlParamValue("utm_source"));
		  smartParam += "&utm_medium=" + encodeURI(getUrlParamValue("utm_medium"));
		  smartParam += "&utm_content=" + encodeURI(getUrlParamValue("utm_content"));
		  smartImageF=new Image();
		  smartImageF.src=_params._sp_url+smartParam;
        }
    };
}();

/* Specific */
function sp_track(_consent) {
	if (isMobileOrTablet())
		sp_trackMobile(_consent);
	else
		sp_trackDesktop(_consent);	
}

function sp_trackDesktop(_consent) {
  if (typeof _consent !== 'undefined') { sp_tracking_consent=_consent; }
  var spParams = [], ci="";
  spParams[0] = "?_hid="+sp_hid["desktop"];
  spParams[1] = "&_title="+getTitle();

  sp_trackerv3.doTrack(spParams, ci, sp_tracking_consent);
}

function sp_trackMobile(_consent) {
  if (typeof _consent !== 'undefined') { sp_tracking_consent=_consent; }
  var spParams = [], ci="";
  spParams[0] = "?_hid="+sp_hid["mobile"];
  spParams[1] = "&_title="+getTitle();

  sp_trackerv3.doTrack(spParams, ci, sp_tracking_consent);
}

;
(function (drupalSettings) {

  function getHid () {
    var is_mobile = window.matchMedia && matchMedia('(max-width:767px)').matches;
    return is_mobile ? '77B1D05C7CA33DF1A3DD3D567C580EFA' : 'BB3180BA570E63C14E7030D7A9270B13';
  }

  function sendHit () {
    var cookie_applied = (document.cookie.indexOf('sp=1') >= 0);
    if (typeof sp_track != 'undefined') {
      sp_track(cookie_applied);
    }
  }

  // Expose sendHit for advanced/asynchronous usages
  window.OJD_sendHit = sendHit;

  // Current page auto tracking
  sendHit();

})(drupalSettings);
;
(function (Drupal) {
  Drupal.behaviors.wysiwyg = {
    attach: function (context, settings) {
      context.querySelectorAll('.tweetable_quote').forEach(function (element) {
        element.addEventListener('click', function () {
          var text = element.textContent;
          var url = window.location.href;
          var twitterUrl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(text) + '&url=' + encodeURIComponent(url) + '&via=CB_News';
          window.open(twitterUrl, 'Tweet', 'width=500, height=300, top=200, left=200, toolbar=no, menubar=yes, location=no, resizable=yes, scrollbars=no, status=no');
        });
      });
      context.querySelectorAll('iframe[src^="https://www.bfmtv.com/"]').forEach(function(element){
        if(!element.classList.contains('bfm-frame')) {
          element.classList.add('bfm-frame');
          var wrapper = document.createElement('div');
          wrapper.classList.add('object-ratio');
          element.parentNode.insertBefore(wrapper, element);
          wrapper.appendChild(element);
        }
      });
    }
  };
})(Drupal);
;
(function () {

  var supportCSSFilters = (function () {
    var el = document.createElement('a');
    var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
    el.style.cssText = prefixes.join('filter:blur(2px); ');
    // https://github.com/Modernizr/Modernizr/issues/615
    // documentMode is needed for false positives in oldIE, please see issue above
    return !!el.style.length && ((document.documentMode === undefined || document.documentMode > 9));
  })();

  if (!supportCSSFilters) {
    document.body.className += ' no-filters';
  }

})();
;
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  // universal module definition

  /* jshint strict: false */

  /* globals define, module, window */
  if (typeof define == 'function' && define.amd) {
    // AMD - RequireJS
    define(factory);
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) == 'object' && module.exports) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.Bookmark = factory();
  }
})(typeof window != 'undefined' ? window : void 0, function () {
  /**
   * Dependencies :
   * - Drupal
   * - jQuery
   * - EvEmitter https://github.com/metafizzy/ev-emitter
   */
  // Check for dependencies
  if (typeof jQuery === 'undefined' || typeof EvEmitter === 'undefined' || typeof Drupal === 'undefined') {
    throw new Error('Bookmark - Missing dependendies.');
  }

  var $ = jQuery;
  var ns = 'bookmark';
  /**
   * Bookmark
   */

  var Bookmark =
  /*#__PURE__*/
  function () {
    function Bookmark(element) {
      _classCallCheck(this, Bookmark);

      if (element[ns]) {
        return;
      }

      this.element = element;
      this.element[ns] = this;
      this.busy = false;
      this.init();
    }

    _createClass(Bookmark, [{
      key: "init",
      value: function init() {
        var _this = this;

        if (drupalSettings.bookmark.enabled) {
          this.update().always(function () {
            _this.attachBindings();
          });
        } else {
          this.element.parentNode.removeChild(this.element);
        }
      }
    }, {
      key: "update",
      value: function update(id) {
        var _this2 = this;

        if (!drupalSettings.bookmark.enabled) {
          return;
        }

        this.busy = true;
        this.id = id || this.element.dataset.bookmarkId;
        return $.ajax({
          'url': Bookmark.routeApiChecker,
          'method': 'POST',
          'processData': false,
          'data': JSON.stringify({
            content_id: this.id
          })
        }).done(function (response) {
          if (response.status === 200) {
            _this2.updateState(response.is_flagged);
          }
        }).always(function () {
          _this2.busy = false;
        });
      }
    }, {
      key: "updateState",
      value: function updateState(isBookmarked) {
        this.isBookmarked = isBookmarked;
        this.updateUI();
        this.emitEvent('updateState', [isBookmarked]);
      }
    }, {
      key: "updateUI",
      value: function updateUI() {
        var title = this.isBookmarked ? 'Retirer ce contenu de vos bookmarks.' : 'Ajouter ce contenu à vos bookmarks.';
        this.element.setAttribute('title', title);
        this.element.setAttribute('data-bookmarked', this.isBookmarked ? 'true' : 'false');
      }
    }, {
      key: "attachBindings",
      value: function attachBindings() {
        var _this3 = this;

        this.element.addEventListener('click', function (e) {
          e.preventDefault();

          _this3.makeRequest();
        });
      }
    }, {
      key: "makeRequest",
      value: function makeRequest() {
        var _this4 = this;

        if (this.busy || !this.id) {
          return;
        }

        this.busy = true;
        this.element.setAttribute('data-bookmark', 'loading');
        $.ajax({
          'url': Bookmark.routeApiUpdate,
          'method': this.isBookmarked ? 'DELETE' : 'POST',
          'processData': false,
          'data': JSON.stringify({
            content_id: this.id
          })
        }).done(function (response) {
          if (response.status === 200) {
            _this4.updateState(!_this4.isBookmarked);
          }
        }).always(function () {
          _this4.busy = false;

          _this4.element.setAttribute('data-bookmark', '');
        });
      }
    }]);

    return Bookmark;
  }();

  Bookmark.routeApiUpdate = '/api/v1/flag/bookmark';
  Bookmark.routeApiChecker = '/api/v1/flag/checker/bookmark';
  $.extend(Bookmark.prototype, EvEmitter.prototype);
  return Bookmark;
});

;
(function (Drupal) {

  Drupal.theme.icon = function (name) {
    return '<svg class="icon icon-' + name + '" role="img" aria-hidden="true"><use xlink:href="#' + name + '-icon"></use></svg>';
  };

  Toolbar.template = '\
  <div class="toolbar_alpha">\
    <a href="" target="_blank" data-share="twitter" class="toolbar_btn bg-twitter color-white" title="Partager sur Twitter">' +
      Drupal.theme.icon('ic_twitter') +
    '</a>\
    <a href="" target="_blank" data-share="facebook" class="toolbar_btn bg-facebook color-white" title="Partager sur Facebook">' +
      Drupal.theme.icon('ic_facebook') +
    '</a>\
    <a href="" target="_blank" data-share="linkedin" class="toolbar_btn bg-linkedin color-white" title="Partager sur LinkedIn">' +
      Drupal.theme.icon('ic_linkedin') +
    '</a>\
  </div>\
  <div class="toolbar_beta">\
  </div>\
  <div class="toolbar_gamma">\
    <button class="toolbar_btn toolbar_btn-bookmark">' +
      Drupal.theme.icon('ic_etoile') +
    '</button>\
    <a href="javascript:print();" class="toolbar_btn toolbar_btn--print bg-black color-white" title="Imprimer">' +
      Drupal.theme.icon('ic_imprimante') +
    '</a>\
    <a href="" data-share="email" class="toolbar_btn toolbar_btn--email bg-grey color-white" title="Partager par email">' +
      Drupal.theme.icon('ic_mail') +
    '</a>\
  </div>';

  function Toolbar () {
    this.toolbar;
    this.init();
    document.body.className += ' toolbar-active'
  }

  Toolbar.prototype.init = function () {
    // Insert toolbar
    if (!document.getElementById('toolbar')) {
      this.toolbar = document.createElement('div');
      this.toolbar.id = 'toolbar';
      this.toolbar.className = 'toolbar';
      this.toolbar.setAttribute('role', 'complementary');
      this.toolbar.innerHTML = Toolbar.template;
      document.body.appendChild(this.toolbar);
    }

    this.updateSharers();
    var bookmarkButton = this.toolbar.querySelector('.toolbar_btn-bookmark');
    bookmarkButton.setAttribute('data-bookmark-id', drupalSettings.bookmark.id);
    this.bookmark = new Bookmark(bookmarkButton);
  };

  Toolbar.prototype.updateSharers = function (title, url) {
    title = title || (document.querySelector('h1') ? document.querySelector('h1').textContent : null) || document.title;
    url = url || window.location.href;

    var sharers = this.toolbar.querySelectorAll('[data-share]');
    sharers.forEach(function (sharer) {
      var provider = sharer.getAttribute('data-share');
      if (typeof Toolbar.providers[provider] === 'function') {
        sharer.href = Toolbar.providers[provider](title, url);
      }
    });

  };

  Toolbar.prototype.getReadingTime = function(elements){
    var wordsPerMinute = 250; // cf https://fr.wikipedia.org/wiki/Mot_par_minute
    var words = 0;
    var current_toolbar = this;
    elements.forEach(function(element){
      words += current_toolbar.countWords(element.textContent);
    });
    return Math.ceil(words / wordsPerMinute);
  };

  Toolbar.prototype.countWords = function(str) {
    var matches = str.match(/\S+/g);
    return matches ? matches.length : 0;
  };

  Toolbar.prototype.calculateArticleReadingTime = function(selector, context) {
    context = context || document;
    selector = selector || '.chapo, .wysiwyg';
    var readingElements = context.querySelectorAll(selector);
    return this.getReadingTime(readingElements);
  };

  Toolbar.prototype.updateArticleToolbar = function(selector, context) {
    readingTime = this.calculateArticleReadingTime(selector, context);
    this.updateContent('Temps de lecture estimé à ' + readingTime + ' minute' + (readingTime > 1 ? 's' : '') + '.');
  };

  Toolbar.providers  = {};

  Toolbar.providers.twitter = function (title, url) {
    return 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(title) + '&url=' + encodeURIComponent(url) + '&via=CB_News';
  };

  Toolbar.providers.facebook = function (title, url) {
    return 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url);
  };

  Toolbar.providers.linkedin = function (title, url) {
    return 'http://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(url);
  };

  Toolbar.providers.googleplus = function (title, url) {
    return 'https://plus.google.com/share?url=' + encodeURIComponent(url);
  };

  Toolbar.providers.email = function (title, url) {
    var subject = 'CB News - ' + title;
    var body = "Bonjour,%0D%0A%0D%0AJ'ai pensé que cet article de CB News pourrait t'intéresser :%0D%0A" + title + "%0D%0A" + url + "%0D%0A%0D%0AÀ bientôt !";
    return 'mailto:?subject=' + subject + '&body=' + body;
  };

  Toolbar.prototype.changeProvider = function(provider, prov_func){
    if (typeof Toolbar.providers[provider] === 'function' && typeof prov_func === 'function') {
      Toolbar.providers[provider] = prov_func;
    }
    this.updateSharers();
  };

  Toolbar.prototype.updateContent = function (content) {
    this.toolbar.querySelector('.toolbar_beta').innerHTML = content;
  };

  window.Toolbar = Toolbar;

})(Drupal);
;
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  // universal module definition

  /* jshint strict: false */

  /* globals define, module, window */
  if (typeof define == 'function' && define.amd) {
    // AMD - RequireJS
    define(factory);
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) == 'object' && module.exports) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.InfiniteScroll = factory();
  }
})(typeof window != 'undefined' ? window : void 0, function () {
  /**
   * Dependencies :
   * - Drupal
   * - jQuery
   * - EvEmitter https://github.com/metafizzy/ev-emitter
   *
   * Built-in page view actions :
   * - document title
   * - browser history
   *
   * Events :
   * - ready
   * - page:loaded
   * - page:view
   */
  // Check for dependencies
  if (typeof jQuery === 'undefined' || typeof EvEmitter === 'undefined' || typeof Drupal === 'undefined') {
    throw new Error('InfiniteScroll - Missing dependendies.');
  }

  var $ = jQuery;
  var ns = 'infinitescroll';
  /**
   * InfiniteScroll
   */

  var InfiniteScroll =
  /*#__PURE__*/
  function () {
    function InfiniteScroll(pages, options) {
      _classCallCheck(this, InfiniteScroll);

      // Handle required settings
      if (!pages || !pages.length) {
        throw new Error('InfiniteScroll - Settings missing');
      }

      this.init(pages, options);
    }

    _createClass(InfiniteScroll, [{
      key: "init",
      value: function init(pages, options) {
        var _this = this;

        this.busy = false;
        this.pageViewTimer;
        this.pageViewTimerDelay = 1000;
        this.config = $.extend({}, InfiniteScroll.defaults, options || {}); // Create pages collection

        this.pages = new PagesCollection();
        pages.forEach(function (page, index) {
          var pageConfig = $.extend(page, {
            element: document.querySelector("[".concat(_this.config.pageElementSelector, "=\"").concat(page.id, "\"]"))
          });

          _this.pages.add(new Page(pageConfig));
        });

        if (this.pages.isEmpty()) {
          throw new Error('InfiniteScroll - No pages to load');
        }

        this.start();
        setTimeout(function () {
          _this.emitEvent('ready', [_this.pages]);
        });
      }
    }, {
      key: "start",
      value: function start() {
        var _this2 = this;

        var initialPage = this.pages.get(0);
        this.currentPageId = initialPage.id; // Add page observer to the initial page

        this.addPageObserver(initialPage); // Handle next page observer (mechanism to detect when to load the next page)

        this.$nextAnchor = $("<div id=\"".concat(ns, "-anchor\"></div>"));
        $(initialPage.element).after(this.$nextAnchor);
        var a_lire_aussi = document.querySelectorAll('.a_lire_aussi_if');
        a_lire_aussi.forEach(function (a_lire, index) {
          a_lire.classList.remove('a_lire_aussi_if_nojs');
        });
        var nextObserver = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.intersectionRatio === 1) {
              var nextPageLoader = _this2.loadNextPage();

              nextPageLoader.done(function (page) {
                _this2.emitEvent('page:loaded', [page]);
              });
              nextPageLoader.fail(function (reason) {
                if (reason === 'end') {
                  nextObserver.disconnect();

                  _this2.$nextAnchor.remove();

                  if (Drupal.blazy) {
                    Drupal.blazy.init.load(document.querySelectorAll('img.b-lazy'), true);
                  }
                }
              });
            }
          });
        }, {
          rootMargin: '0px 0px 200px'
        });
        nextObserver.observe(document.getElementById("".concat(ns, "-anchor"))); // Update variables based on viewport dimensions

        $(window).on("resize.".concat(ns), function () {
          _this2.updateViewportFillPortion();
        }).trigger("resize.".concat(ns));
      }
    }, {
      key: "updateViewportFillPortion",
      value: function updateViewportFillPortion() {
        this.viewportFillPortion = 2 / 3 * window.innerHeight;
      }
    }, {
      key: "loadNextPage",
      value: function loadNextPage() {
        var _this3 = this;

        var defer = $.Deferred();
        var nextPage = this.pages.getFirstPageWithoutElement();

        if (this.busy) {
          defer.reject('busy');
        } else if (nextPage) {
          this.busy = true;
          this.$nextAnchor.addClass('ajax-progress');
          var ajaxObject = Drupal.ajax({
            url: nextPage.url
          });

          ajaxObject.commands.insert = function (ajax, response, status) {
            _this3.$nextAnchor.before(response.data);

            requestAnimationFrame(function () {
              _this3.addPageObserver(nextPage);
            });
          };

          var ajaxResult = ajaxObject.execute();
          ajaxResult.always(function () {
            _this3.$nextAnchor.removeClass('ajax-progress');

            _this3.busy = false; // We execute Drupal.ajax manually
            // so we have to execute attachBehaviors manually

            setTimeout(function () {
              // @warn : pay attention to libraries attached to the new content and JS files particularly
              // make sure JS dependencies is loaded before calling `Drupal.attachBehaviors`
              // @info : https://www.drupal.org/project/cdn/issues/2714155
              // @info : https://www.drupal.org/project/drupal/issues/1988968
              Drupal.attachBehaviors();
            });
          });
          ajaxResult.done(function (commands) {
            defer.resolve(nextPage);
          });
          ajaxResult.fail(function () {
            defer.reject('ajax');
          });
        } else {
          defer.reject('end');
        }

        return defer.promise();
      }
    }, {
      key: "addPageObserver",
      value: function addPageObserver(page) {
        var _this4 = this;

        var observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: [0]
        };
        var thresholdSteps = 100;

        for (var i = 1; i <= thresholdSteps; i++) {
          observerOptions.threshold.push(i / thresholdSteps);
        }

        page.element = document.querySelector("[".concat(this.config.pageElementSelector, "=\"").concat(page.id, "\"]"));
        page.observer = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (_this4.isPageActive(entry)) {
              _this4.checkForPageView(page);
            }
          });
        }, observerOptions);
        page.observer.observe(page.element);
      }
      /**
       * Make sur page view is not trigger too many times.
       * Wait for a reasonable delay on a page (ie. user seems to focus on this page)
       * before triggering a page view event.
       */

    }, {
      key: "checkForPageView",
      value: function checkForPageView(page) {
        var _this5 = this;

        if (this.checkPageId !== page.id) {
          this.checkPageId = page.id;
          clearTimeout(this.pageViewTimer);

          if (this.currentPageId !== page.id) {
            this.pageViewTimer = setTimeout(function () {
              _this5.checkPageId = null;

              _this5.onPageView(page);
            }, this.pageViewTimerDelay);
          }
        }
      }
      /**
       * Assume the page is active
       * if it fills an arbitrary portion of the viewport height
       */

    }, {
      key: "isPageActive",
      value: function isPageActive(entry) {
        if (entry.boundingClientRect.height <= this.viewportFillPortion) {
          return entry.intersectionRatio === 1;
        }

        return entry.intersectionRect.height >= this.viewportFillPortion;
      }
    }, {
      key: "onPageView",
      value: function onPageView(page) {
        this.currentPageId = page.id; // Update document title

        document.title = page.title; // Update browser history

        if (history && history.replaceState) {
          history.replaceState({
            pageId: page.id
          }, page.title, page.url);
        } // Trigger custom event


        this.emitEvent('page:view', [page]);
      }
    }]);

    return InfiniteScroll;
  }();

  InfiniteScroll.defaults = {
    pageElementSelector: "data-".concat(ns, "-page")
  };
  $.extend(InfiniteScroll.prototype, EvEmitter.prototype);
  /**
   * PagesCollection
   */

  var PagesCollection =
  /*#__PURE__*/
  function () {
    function PagesCollection() {
      _classCallCheck(this, PagesCollection);

      this.pages = [];
    } // Add a new Page instance to the collection


    _createClass(PagesCollection, [{
      key: "add",
      value: function add(page) {
        this.pages.push(page);
      } // Return one specific page by index or url

    }, {
      key: "get",
      value: function get(needle) {
        var result;

        if (typeof needle === 'number' && this.pages[needle]) {
          return this.pages[needle];
        } else if (typeof needle === 'string') {
          // assume `needle` param is an url
          result = $.grep(this.pages, function (page) {
            return page.url === needle;
          });

          if (result.length) {
            return result[0];
          }
        }

        return false;
      }
    }, {
      key: "getById",
      value: function getById(id) {
        var result = $.grep(this.pages, function (page) {
          return page.id === id;
        });

        if (result.length) {
          return result[0];
        }

        return false;
      } // Indicate if pages collection is empty

    }, {
      key: "isEmpty",
      value: function isEmpty() {
        return !this.pages.length;
      } // Return first page without element

    }, {
      key: "getFirstPageWithoutElement",
      value: function getFirstPageWithoutElement() {
        var page;

        for (var index = 0; index < this.pages.length; index++) {
          var item = this.pages[index];

          if (!item.element) {
            page = item;
            break;
          }
        }

        return page;
      }
    }]);

    return PagesCollection;
  }();
  /**
   * Page
   * @argument config Page configuration with these properties :
   * - id : used to call ajax specific node
   * - url : used to update browser history
   * - title : used to update document title
   * - element : DOM element hosting page content
   */


  var Page = function Page(config) {
    _classCallCheck(this, Page);

    Object.assign(this, config);
  };

  return InfiniteScroll;
});

;
(function($, InfiniteScroll, OJD_sendHit){

  if (drupalSettings.path.currentPath.indexOf('node/preview') === 0) {
    return;
  }

  function updatePrintStyles (id) {
    var rule = '@media print { article[data-infinitescroll-page]:not([data-infinitescroll-page="' + id + '"]) { display: none !important; } }';
    $printStyles.html(rule);
  }

  function refreshArticleAds(element) {
    var ad = element.querySelector('.ad-rectangle-sticky > [id^="sas_"]');
    if (ad && typeof sas !== 'undefined') {
      sas.refresh(ad.id);
    }
  }

  var toolbar = new Toolbar();
  toolbar.updateArticleToolbar('.chapo, .wysiwyg');

  // Handle infinite scroll and print current article
  var $printStyles = $('<style type="text/css" id="article-print-styles"></style>');
  $(document.head).append($printStyles);

  var headerBreadcrumb = document.querySelector('#header-flyout .header_breadcrumb');

  var articleInfiniteScroll = new InfiniteScroll(drupalSettings.infiniteScroll.pages);

  articleInfiniteScroll.on('page:view', function (page) {
    var sharedUrl = location.protocol + '//' + location.hostname + page.url;
    // toolbar > share buttons
    toolbar.updateSharers(page.title, sharedUrl);
    // toolbar > time to read
    toolbar.updateArticleToolbar('.chapo, .wysiwyg', page.element);
    // toolbar > bookmark button
    toolbar.bookmark.update(page.id);
    // toolbar > print (dynamic article)
    updatePrintStyles(page.id);

    // header flyout > breadcrumb
    headerBreadcrumb.innerHTML = page.breadcrumb;

    // page > tags pubs
    refreshArticleAds(page.element);

    // page > tag analytics
    if (typeof gtag !== 'undefined' && typeof tarteaucitron !== 'undefined' && tarteaucitron.state.gtag) {
      gtag('set', { 'dimension1' : page.id });
      gtag('set', { 'dimension2' : page.bundle });
      gtag('config', tarteaucitron.user.gtagUa, { 'page_path': window.location.pathname });
    }

    // page > ojd tracker
    if (typeof OJD_sendHit !== 'undefined') {
      OJD_sendHit(page.title);
    }
  });

})(jQuery, InfiniteScroll, OJD_sendHit);
;
