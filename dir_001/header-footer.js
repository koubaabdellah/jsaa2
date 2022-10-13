/* ========================================================================
 * Bootstrap: dropdown.js v3.2.0
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.2.0'

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.trigger('focus')

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown', relatedTarget)
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27)/.test(e.keyCode)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive || (isActive && e.keyCode == 27)) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.divider):visible a'
    var $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc)

    if (!$items.length) return

    var index = $items.index($items.filter(':focus'))

    if (e.keyCode == 38 && index > 0)                 index--                        // up
    if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
    if (!~index)                                      index = 0

    $items.eq(index).trigger('focus')
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $parent = getParent($(this))
      var relatedTarget = { relatedTarget: this }
      if (!$parent.hasClass('open')) return
      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))
      if (e.isDefaultPrevented()) return
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle + ', [role="menu"], [role="listbox"]', Dropdown.prototype.keydown)

}(jQuery);

(function( jQuery ) {
  jQuery.fn.hasAttr = function( name ) {
      for ( var i = 0, l = this.length; i < l; i++ ) {
          if ( !!( this.attr( name ) !== undefined ) ) {
              return true;
          }
      }
      return false;
  };
})( jQuery );
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (arguments.length > 1 && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));

(function() {
  'use strict';
    //Client-Side User Data Model
    var Client = {
        deviceType: null,
        browser:{
            vendor: null,
            versionNumber: null,
            fullVersion: null
        },
        os:{
            type:null,
            versionNumber:null,
            fullVersion: null
        }
    };

    //Sniffer Data
    var UA = navigator.userAgent.toLowerCase(),
        Phones = new RegExp('160x|240x|3g_t|355x|471x|480x|848b|8325rc|8325rc|8352rc|8325rc|a615|ac831|a700|a1000|ahong|avantgo|b832|bc831|blackberry|blazer|bolt|boost|brew|c-810|c888|c5588|c5005|c7100|c500|c500foma:|compal|c5100|cricket|docomo|d88|d615|d763|d736|e860|e300|ems100|el370|elaine|fone|fly v71|g83|_h797|gu1100|htc\/|htc_touch|hiptop|htil-g1|i250|ipod|iphone|i;458x|iris|lge|lg380|lgku|lgu900|lg210|lg47|lg920|lg840|lg370|lg|ktouch|km100|kddi|k610i|m4u\/|m50|mtk |me702|me702m-three|m800|m881|mini|mini 9.5|me701|midp|mobile|mmp|mob-x|mowser|motorola|m5252|mt126|mp500|mw200|_mms|myx|nx250|n120|n210|nokia|novarra|o2|opera mini|opera mobi|r800|rim8|p-9521|p404i|pocket|phone|palm|pre\/|palm os|psp|pie|pie|plucker|s590|s710|t880|samsung|smartphone|samu3|samu4|samu5|samu6|samu6|samu7|samu9|sam-r|samsu|sanyo|sd588|sony cmd|sonyericsson|s920|sl74|sl900|s302|s820|s55|s5330|s580|s700|s800|sk16d|sprint|symbian|s940|s210|-three|telco|treo|teleca|t66|t503|up\.browser|up\.link|up.browser|up.link|u940|ux840|vodafone|-x113|vx1000|vx400|vx10|vx54|v120|wap|w839|webos|windows phone|windows ce|windows ce; smartphone;|windows ce; iemobile|wos|wireless|w398samr810|x160|xda_|x640|x320|vx10|vx8|vx9|x225|xiino'),
        Tablets = new RegExp('ipad|kindle|playbook|tablet'),    // Fixes for IE10  touch removed
        Browsers = ['opera','msie','safari','chrome','firefox'],
        OS = ['macintosh', 'windows', 'x11'],
        iOSDevice = UA.match(/(ios|ipad|ipod|iphone)/i);

    //Sniffer Agent
    var SnufferAgent = (function(snufferAgent){
        return snufferAgent = {
            init:function(){
                var _tablet = (UA.match(Tablets)) ? true : false,
                    _mobile = (UA.match(Phones) && !_tablet) ? true : false;

                // Fixes for IE10
                if(UA.indexOf('pc')>=0){
                    _tablet= false;
                }

                //Fix for wrongly identified android devices
                if(UA.match(/android/)){
                    if (UA.match(/mobile/)) {
                        _mobile = true
                    } else {
                        _tablet = true
                    }
                }

                //Client Device
                if(_mobile || _tablet){
                    Client.deviceType = (_mobile) ? "mobile" : "tablet";
                } else {
                    Client.deviceType = "pc";
                }

                snufferAgent.detectBrowser();
                snufferAgent.detectOS();
            },

            detectBrowser:function(){
                var _getBrowserVersion = function(_BrowserName, _BrowserIndex, type){
                    var _versionInUA = (UA.indexOf('version') != -1) ? true : false,
                        _version;

                    if (_versionInUA) {
                        _version = UA.split('version/')[1].split(' ')[0];
                    } else if(_BrowserName == 'nokiabrowser') {
                        _version =  UA.split('nokiabrowser/')[1].split(' ')[0];
                    } else {
                        _version = UA.substring(_BrowserIndex+_BrowserName.length +1).split(' ')[0].split(';')[0];
                    }

                    return {
                        versionNumber: Number(_version.split('.')[0]+'.'+_version.split('.')[1]),
                        fullVersion: _version
                    }
                }

                //Define vars to find
                var _browserType, _browserVersion, i;

                //Find Browser Name, Main V, Full V
                for(i=0; i < Browsers.length; ++i){
                    var _browserIndex = UA.indexOf(Browsers[i]);

                    //Match
                    if(_browserIndex != -1){
                        if(Client.deviceType == 'pc'){
                            _browserType = Browsers[i];
                        } else {
                            if(UA.match(/bb10/)){
                                _browserType = 'blackberry';
                            } else if(UA.match(/nokiabrowser/)){
                                _browserType = 'nokiabrowser';
                            } else if (iOSDevice) {
                                _browserType = 'safari';
                            } else if(Browsers[i] == 'safari' && UA.match(/android/)){
                                _browserType = 'android-webkit';
                            } else{
                                _browserType = Browsers[i];
                            }
                        }

                        _browserVersion = _getBrowserVersion(_browserType, _browserIndex);

                    //Catchall on Last
                    } else if(i == Browsers.length - 1 && !_browserType) {
                        var _nameOffset = UA.lastIndexOf(' '),
                            _versionOffset = UA.lastIndexOf('/');

                        _browserType = UA.substring(_nameOffset, _versionOffset);
                        _browserVersion = _getBrowserVersion(_browserType, _browserIndex);
                    }
                }

                //Change for simplicity
                if(_browserType == 'msie') _browserType = 'ie';

                //Set Data
                Client.browser = {
                    type: _browserType,
                    versionNumber: _browserVersion.versionNumber,
                    fullVersion: _browserVersion.fullVersion
                };
            },

            detectOS:function(){
                var _osType, _osName, _osVersion, _osVersionNumber, i;

                //Sniff for Mobile first
                if(Client.deviceType != 'pc'){

                    if(iOSDevice){
                        _osType ='iOS';
                        _osVersion = UA.substring(UA.indexOf('os ')+3,UA.indexOf(' like')).replace(/_/g,'.');
                    } else if(UA.match(/(blackberry|rim|bb10)/i)){
                        _osType = 'blackberry';
                    } else if(UA.match(/android/)){
                        _osType = 'android';
                        _osVersion=  UA.substring(UA.indexOf('android')+8, UA.indexOf('android')+11);
                    }

                    _osVersionNumber = Number(_osVersion.split('.')[0]+'.'+_osVersion.split('.')[1]);
                    if(!_osVersionNumber) _osVersionNumber = null;

                    if(UA.match(/kindle/)){
                        _osType = 'kindle';
                        _osVersion = UA.substring(UA.indexOf('kindle')+7, UA.indexOf(' build'));
                    }

                } else {
                    //Sniff for PC OS
                    for(i=0; i < OS.length; ++i){
                        var _osIndex = UA.indexOf(OS[i]),
                            _osTypeLength = OS[i].split('').length;

                        if(_osIndex != -1){
                            _osType = UA.substring(_osIndex, _osTypeLength+_osIndex);

                            if(_osType == 'macintosh') {

                                _osVersion = UA.substring(_osTypeLength+_osIndex+2, UA.indexOf(')')).replace(/_/g, '.');
                                _osVersionNumber = _osVersion.split('mac os x ')[1];
                                _osVersionNumber = (_osVersionNumber) ? Number(_osVersionNumber.split('.')[0]+'.'+_osVersionNumber.split('.')[1]) : 'legacy';
                                _osType = 'mac';

                            } else if(_osType == 'windows') {

                                var _winNT = 'windows nt ',
                                    _winNT = UA.substring(_winNT.split('').length + _osIndex, UA.indexOf(';'));

                                if(_winNT == 6.3){
                                    _osVersionNumber = 8.1;
                                    _osVersion = 8.1;
                                } else if(_winNT == 6.2){
                                    _osVersionNumber = 8;
                                    _osVersion = 8;
                                } else if(_winNT == 6.1){
                                    _osVersionNumber = 7;
                                    _osVersion = 7;
                                } else if(_winNT == 5.2 || _winNT == 5.1){
                                    _osVersion = 'XP';
                                } else {
                                    _osVersionNumber = null;
                                }

                            } else if (_osType =='x11') {

                                if(UA.match(/linux x86_64/)){
                                    _osType='linux';
                                    _osVersion = 'linux x86_64';
                                    _osVersionNumber = 64;
                                } else if(UA.match(/linux i686/)){
                                    _osType='linux';
                                    _osVersion = 'linux i686';
                                    _osVersionNumber = 32;
                                } else {
                                    _osVersion = navigator.platform;
                                }

                            }
                        }
                    };
                }

                if(!_osType){
                    _osType = navigator.platform;
                    _osVersion = navigator.platform;
                }

                Client.os = {
                    type: _osType,
                    versionNumber: _osVersionNumber,
                    fullVersion: _osVersion
                };
            }
        };
    })().init();

    var _GetVersionInfo = function (client, param){
        if(param == 'type'){
            return client.type;
        } else if(param == 'version-number'){
            return client.versionNumber;
        } else if(param == 'full-version'){
            return client.fullVersion;
        } else {
            return console.log('Please input one of these valid parameters: "type", "version-number", "fullversion"');
        }
    }

    window.Snuffr = (function(window, document, undefined){
        //Set Snuffer
        return {
            getDeviceType: function() {
                return Client.deviceType;
            },
            getBrowser: function(param) {
                if(param){
                    return _GetVersionInfo(Client.browser, param);
                } else {
                    return Client.browser;
                }
            },
            getOS: function(param) {
                if(param){
                    return _GetVersionInfo(Client.os, param);
                } else {
                    return Client.os;
                }
            }
        };
    })(this, window.document);
})();

/*!
 * 
 *  js-cloudimage-360-view v2.6.0
 *  https://github.com/scaleflex/js-cloudimage-360-view
 * 
 *  Copyright (c) 2019 scaleflex
 *  Released under the MIT license
 * 
 *  Date: 2020-09-03T11:26:04.718Z
 * 
*/!function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=33)}([function(e,t){e.exports="object"==typeof window&&window&&window.Math==Math?window:"object"==typeof self&&self&&self.Math==Math?self:Function("return this")()},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,i){var n=i(10),o=i(26);e.exports=i(4)?function(e,t,i){return n.f(e,t,o(1,i))}:function(e,t,i){return e[t]=i,e}},function(e,t,i){e.exports=!i(1)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(e,t){var i={}.hasOwnProperty;e.exports=function(e,t){return i.call(e,t)}},function(e,t,i){var n=i(0),o=i(9),s=n["__core-js_shared__"]||o("__core-js_shared__",{});(e.exports=function(e,t){return s[e]||(s[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.0.0",mode:i(42)?"pure":"global",copyright:"Â© 2019 Denis Pushkarev (zloirock.ru)"})},function(e,t,i){var n=i(2);e.exports=function(e){if(!n(e))throw TypeError(String(e)+" is not an object");return e}},function(e,t,i){var n=i(6)("wks"),o=i(27),s=i(0).Symbol,r=i(43);e.exports=function(e){return n[e]||(n[e]=r&&s[e]||(r?s:o)("Symbol."+e))}},function(e,t,i){var n=i(0),o=i(3);e.exports=function(e,t){try{o(n,e,t)}catch(i){n[e]=t}return t}},function(e,t,i){var n=i(4),o=i(23),s=i(7),r=i(25),a=Object.defineProperty;t.f=n?a:function(e,t,i){if(s(e),t=r(t,!0),s(i),o)try{return a(e,t,i)}catch(e){}if("get"in i||"set"in i)throw TypeError("Accessors not supported");return"value"in i&&(e[t]=i.value),e}},function(e,t,i){var n=i(0),o=i(28).f,s=i(3),r=i(46),a=i(9),c=i(49),l=i(54);e.exports=function(e,t){var i,u,h,d,f,v=e.target,p=e.global,y=e.stat;if(i=p?n:y?n[v]||a(v,{}):(n[v]||{}).prototype)for(u in t){if(d=t[u],h=e.noTargetGet?(f=o(i,u))&&f.value:i[u],!l(p?u:v+(y?".":"#")+u,e.forced)&&void 0!==h){if(typeof d==typeof h)continue;c(d,h)}(e.sham||h&&h.sham)&&s(d,"sham",!0),r(i,u,d,e)}}},function(e,t,i){var n=i(18),o=i(20);e.exports=function(e){return n(o(e))}},function(e,t){e.exports={}},function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(e,t,i){var n=i(0),o=i(17),s=Function.call;e.exports=function(e,t,i){return o(s,n[e].prototype[t],i)}},function(e,t,i){var n=i(17),o=i(18),s=i(39),r=i(21),a=i(40);e.exports=function(e,t){var i=1==e,c=2==e,l=3==e,u=4==e,h=6==e,d=5==e||h,f=t||a;return function(t,a,v){for(var p,y,g=s(t),m=o(g),w=n(a,v,3),x=r(m.length),b=0,I=i?f(t,x):c?f(t,0):void 0;x>b;b++)if((d||b in m)&&(y=w(p=m[b],b,g),e))if(i)I[b]=y;else if(y)switch(e){case 3:return!0;case 5:return p;case 6:return b;case 2:I.push(p)}else if(u)return!1;return h?-1:l||u?u:I}}},function(e,t,i){var n=i(38);e.exports=function(e,t,i){if(n(e),void 0===t)return e;switch(i){case 0:return function(){return e.call(t)};case 1:return function(i){return e.call(t,i)};case 2:return function(i,n){return e.call(t,i,n)};case 3:return function(i,n,o){return e.call(t,i,n,o)}}return function(){return e.apply(t,arguments)}}},function(e,t,i){var n=i(1),o=i(19),s="".split;e.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?s.call(e,""):Object(e)}:Object},function(e,t){var i={}.toString;e.exports=function(e){return i.call(e).slice(8,-1)}},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},function(e,t,i){var n=i(22),o=Math.min;e.exports=function(e){return e>0?o(n(e),9007199254740991):0}},function(e,t){var i=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:i)(e)}},function(e,t,i){e.exports=!i(4)&&!i(1)((function(){return 7!=Object.defineProperty(i(24)("div"),"a",{get:function(){return 7}}).a}))},function(e,t,i){var n=i(2),o=i(0).document,s=n(o)&&n(o.createElement);e.exports=function(e){return s?o.createElement(e):{}}},function(e,t,i){var n=i(2);e.exports=function(e,t){if(!n(e))return e;var i,o;if(t&&"function"==typeof(i=e.toString)&&!n(o=i.call(e)))return o;if("function"==typeof(i=e.valueOf)&&!n(o=i.call(e)))return o;if(!t&&"function"==typeof(i=e.toString)&&!n(o=i.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t){var i=0,n=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++i+n).toString(36))}},function(e,t,i){var n=i(4),o=i(45),s=i(26),r=i(12),a=i(25),c=i(5),l=i(23),u=Object.getOwnPropertyDescriptor;t.f=n?u:function(e,t){if(e=r(e),t=a(t,!0),l)try{return u(e,t)}catch(e){}if(c(e,t))return s(!o.f.call(e,t),e[t])}},function(e,t,i){e.exports=i(6)("native-function-to-string",Function.toString)},function(e,t,i){var n=i(6)("keys"),o=i(27);e.exports=function(e){return n[e]||(n[e]=o(e))}},function(e,t,i){var n=i(5),o=i(12),s=i(32)(!1),r=i(13);e.exports=function(e,t){var i,a=o(e),c=0,l=[];for(i in a)!n(r,i)&&n(a,i)&&l.push(i);for(;t.length>c;)n(a,i=t[c++])&&(~s(l,i)||l.push(i));return l}},function(e,t,i){var n=i(12),o=i(21),s=i(52);e.exports=function(e){return function(t,i,r){var a,c=n(t),l=o(c.length),u=s(r,l);if(e&&i!=i){for(;l>u;)if((a=c[u++])!=a)return!0}else for(;l>u;u++)if((e||u in c)&&c[u]===i)return e||u||0;return!e&&-1}}},function(e,t,i){"use strict";i(34),i(55),i(59);var n,o=i(67),s=(n=o)&&n.__esModule?n:{default:n};function r(){var e=[],t=document.querySelectorAll(".cloudimage-360:not(.initialized)");[].slice.call(t).forEach((function(t){e.push(new s.default(t))})),window.CI360._viewers=e}function a(){return!(window.CI360._viewers&&window.CI360._viewers.length>0)}window.CI360=window.CI360||{},window.CI360.init=r,window.CI360.destroy=function(){a()||(window.CI360._viewers.forEach((function(e){e.destroy()})),window.CI360._viewers=[])},window.CI360.getActiveIndexByID=function(e){if(!a()){var t=window.CI360._viewers.filter((function(t){return t.id===e}))[0];return t&&t.activeImage-1}},window.CI360.notInitOnLoad||r()},function(e,t,i){e.exports=i(35)},function(e,t,i){i(36),e.exports=i(15)("Array","forEach")},function(e,t,i){"use strict";var n=i(37);i(11)({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},function(e,t,i){"use strict";var n=[].forEach,o=i(16)(0),s=i(44)("forEach");e.exports=s?function(e){return o(this,e,arguments[1])}:n},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},function(e,t,i){var n=i(20);e.exports=function(e){return Object(n(e))}},function(e,t,i){var n=i(2),o=i(41),s=i(8)("species");e.exports=function(e,t){var i;return o(e)&&("function"!=typeof(i=e.constructor)||i!==Array&&!o(i.prototype)?n(i)&&null===(i=i[s])&&(i=void 0):i=void 0),new(void 0===i?Array:i)(0===t?0:t)}},function(e,t,i){var n=i(19);e.exports=Array.isArray||function(e){return"Array"==n(e)}},function(e,t){e.exports=!1},function(e,t,i){e.exports=!i(1)((function(){String(Symbol())}))},function(e,t,i){"use strict";var n=i(1);e.exports=function(e,t){var i=[][e];return!i||!n((function(){i.call(null,t||function(){throw Error()},1)}))}},function(e,t,i){"use strict";var n={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,s=o&&!n.call({1:2},1);t.f=s?function(e){var t=o(this,e);return!!t&&t.enumerable}:n},function(e,t,i){var n=i(0),o=i(3),s=i(5),r=i(9),a=i(29),c=i(47),l=c.get,u=c.enforce,h=String(a).split("toString");i(6)("inspectSource",(function(e){return a.call(e)})),(e.exports=function(e,t,i,a){var c=!!a&&!!a.unsafe,l=!!a&&!!a.enumerable,d=!!a&&!!a.noTargetGet;"function"==typeof i&&("string"!=typeof t||s(i,"name")||o(i,"name",t),u(i).source=h.join("string"==typeof t?t:"")),e!==n?(c?!d&&e[t]&&(l=!0):delete e[t],l?e[t]=i:o(e,t,i)):l?e[t]=i:r(t,i)})(Function.prototype,"toString",(function(){return"function"==typeof this&&l(this).source||a.call(this)}))},function(e,t,i){var n,o,s,r=i(48),a=i(2),c=i(3),l=i(5),u=i(30),h=i(13),d=i(0).WeakMap;if(r){var f=new d,v=f.get,p=f.has,y=f.set;n=function(e,t){return y.call(f,e,t),t},o=function(e){return v.call(f,e)||{}},s=function(e){return p.call(f,e)}}else{var g=u("state");h[g]=!0,n=function(e,t){return c(e,g,t),t},o=function(e){return l(e,g)?e[g]:{}},s=function(e){return l(e,g)}}e.exports={set:n,get:o,has:s,enforce:function(e){return s(e)?o(e):n(e,{})},getterFor:function(e){return function(t){var i;if(!a(t)||(i=o(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return i}}}},function(e,t,i){var n=i(29),o=i(0).WeakMap;e.exports="function"==typeof o&&/native code/.test(n.call(o))},function(e,t,i){var n=i(5),o=i(50),s=i(28),r=i(10);e.exports=function(e,t){for(var i=o(t),a=r.f,c=s.f,l=0;l<i.length;l++){var u=i[l];n(e,u)||a(e,u,c(t,u))}}},function(e,t,i){var n=i(51),o=i(53),s=i(7),r=i(0).Reflect;e.exports=r&&r.ownKeys||function(e){var t=n.f(s(e)),i=o.f;return i?t.concat(i(e)):t}},function(e,t,i){var n=i(31),o=i(14).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,o)}},function(e,t,i){var n=i(22),o=Math.max,s=Math.min;e.exports=function(e,t){var i=n(e);return i<0?o(i+t,0):s(i,t)}},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t,i){var n=i(1),o=/#|\.prototype\./,s=function(e,t){var i=a[r(e)];return i==l||i!=c&&("function"==typeof t?n(t):!!t)},r=s.normalize=function(e){return String(e).replace(o,".").toLowerCase()},a=s.data={},c=s.NATIVE="N",l=s.POLYFILL="P";e.exports=s},function(e,t,i){e.exports=i(56)},function(e,t,i){i(57),e.exports=i(15)("Array","filter")},function(e,t,i){"use strict";var n=i(16)(2),o=i(58)("filter");i(11)({target:"Array",proto:!0,forced:!o},{filter:function(e){return n(this,e,arguments[1])}})},function(e,t,i){var n=i(1),o=i(8)("species");e.exports=function(e){return!n((function(){var t=[];return(t.constructor={})[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},function(e,t,i){e.exports=i(60)},function(e,t,i){i(61),e.exports=i(15)("Array","includes")},function(e,t,i){"use strict";var n=i(32)(!0);i(11)({target:"Array",proto:!0},{includes:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),i(62)("includes")},function(e,t,i){var n=i(8)("unscopables"),o=i(63),s=i(3),r=Array.prototype;null==r[n]&&s(r,n,o(null)),e.exports=function(e){r[n][e]=!0}},function(e,t,i){var n=i(7),o=i(64),s=i(14),r=i(66),a=i(24),c=i(30)("IE_PROTO"),l=function(){},u=function(){var e,t=a("iframe"),i=s.length;for(t.style.display="none",r.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),u=e.F;i--;)delete u.prototype[s[i]];return u()};e.exports=Object.create||function(e,t){var i;return null!==e?(l.prototype=n(e),i=new l,l.prototype=null,i[c]=e):i=u(),void 0===t?i:o(i,t)},i(13)[c]=!0},function(e,t,i){var n=i(4),o=i(10),s=i(7),r=i(65);e.exports=n?Object.defineProperties:function(e,t){s(e);for(var i,n=r(t),a=n.length,c=0;a>c;)o.f(e,i=n[c++],t[i]);return e}},function(e,t,i){var n=i(31),o=i(14);e.exports=Object.keys||function(e){return n(e,o)}},function(e,t,i){var n=i(0).document;e.exports=n&&n.documentElement},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),o=i(68);var s=function(){function e(t,i,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=t,this.activeImage=1,this.movementStart=0,this.isClicked=!1,this.loadedImages=0,this.imagesLoaded=!1,this.reversed=!1,this.fullScreenView=!!i,this.ratio=n,this.images=[],this.devicePixelRatio=Math.round(window.devicePixelRatio||1),this.isMobile=!!("ontouchstart"in window||navigator.msMaxTouchPoints),this.id=t.id,this.init(t)}return n(e,[{key:"mousedown",value:function(e){e.preventDefault(),this.imagesLoaded&&(this.glass&&this.closeMagnifier(),this.view360Icon&&this.remove360ViewIcon(),(this.autoplay||this.loopTimeoutId)&&(this.stop(),this.autoplay=!1),this.movementStart=e.pageX,this.isClicked=!0,this.container.style.cursor="grabbing")}},{key:"mouseup",value:function(){this.imagesLoaded&&(this.movementStart=0,this.isClicked=!1,this.container.style.cursor="grab",this.bottomCircle&&this.show360ViewCircleIcon())}},{key:"mousemove",value:function(e){this.isClicked&&this.imagesLoaded&&this.onMove(e.pageX)}},{key:"touchstart",value:function(e){this.imagesLoaded&&(this.glass&&this.closeMagnifier(),this.view360Icon&&this.remove360ViewIcon(),(this.autoplay||this.loopTimeoutId)&&(this.stop(),this.autoplay=!1),this.movementStart=e.touches[0].clientX,this.isClicked=!0)}},{key:"touchend",value:function(){this.imagesLoaded&&(this.movementStart=0,this.isClicked=!1,this.bottomCircle&&this.show360ViewCircleIcon())}},{key:"touchmove",value:function(e){this.isClicked&&this.imagesLoaded&&this.onMove(e.touches[0].clientX)}},{key:"keydownGeneral",value:function(){this.imagesLoaded&&this.glass&&this.closeMagnifier()}},{key:"keydown",value:function(e){this.imagesLoaded&&(this.glass&&this.closeMagnifier(),-1!==[37,39].indexOf(e.keyCode)&&(37===e.keyCode?this.reversed?this.prev():this.next():39===e.keyCode&&(this.reversed?this.next():this.prev()),this.onSpin()))}},{key:"onSpin",value:function(){this.bottomCircle&&this.hide360ViewCircleIcon(),this.view360Icon&&this.remove360ViewIcon(),(this.autoplay||this.loopTimeoutId)&&(this.stop(),this.autoplay=!1)}},{key:"keyup",value:function(e){this.imagesLoaded&&-1!==[37,39].indexOf(e.keyCode)&&this.onFinishSpin()}},{key:"onFinishSpin",value:function(){this.bottomCircle&&this.show360ViewCircleIcon()}},{key:"onMove",value:function(e){if(e-this.movementStart>=this.speedFactor){var t=Math.floor((e-this.movementStart)/this.speedFactor)||1;this.movementStart=e,this.spinReverse?this.moveActiveIndexDown(t):this.moveActiveIndexUp(t),this.bottomCircle&&this.hide360ViewCircleIcon(),this.update()}else if(this.movementStart-e>=this.speedFactor){var i=Math.floor((this.movementStart-e)/this.speedFactor)||1;this.movementStart=e,this.spinReverse?this.moveActiveIndexUp(i):this.moveActiveIndexDown(i),this.bottomCircle&&this.hide360ViewCircleIcon(),this.update()}}},{key:"moveActiveIndexUp",value:function(e){var t=this.controlReverse?!this.spinReverse:this.spinReverse;this.stopAtEdges?this.activeImage+e>=this.amount?(this.activeImage=this.amount,(t?this.prevElem:this.nextElem)&&(0,o.addClass)(t?this.prevElem:this.nextElem,"not-active")):(this.activeImage+=e,this.nextElem&&(0,o.removeClass)(this.nextElem,"not-active"),this.prevElem&&(0,o.removeClass)(this.prevElem,"not-active")):this.activeImage=(this.activeImage+e)%this.amount||this.amount}},{key:"moveActiveIndexDown",value:function(e){var t=this.controlReverse?!this.spinReverse:this.spinReverse;this.stopAtEdges?this.activeImage-e<=1?(this.activeImage=1,(t?this.nextElem:this.prevElem)&&(0,o.addClass)(t?this.nextElem:this.prevElem,"not-active")):(this.activeImage-=e,this.prevElem&&(0,o.removeClass)(this.prevElem,"not-active"),this.nextElem&&(0,o.removeClass)(this.nextElem,"not-active")):this.activeImage-e<1?this.activeImage=this.amount+(this.activeImage-e):this.activeImage-=e}},{key:"loop",value:function(e){e?this.prev():this.next()}},{key:"next",value:function(){this.moveActiveIndexUp(1),this.update()}},{key:"prev",value:function(){this.moveActiveIndexDown(1),this.update()}},{key:"update",value:function(){var e=this.images[this.activeImage-1],t=this.canvas.getContext("2d");if(t.scale(this.devicePixelRatio,this.devicePixelRatio),this.fullScreenView){this.canvas.width=window.innerWidth*this.devicePixelRatio,this.canvas.style.width=window.innerWidth+"px",this.canvas.height=window.innerHeight*this.devicePixelRatio,this.canvas.style.height=window.innerHeight+"px";var i=(0,o.contain)(this.canvas.width,this.canvas.height,e.width,e.height),n=i.offsetX,s=i.offsetY,r=i.width,a=i.height;t.drawImage(e,n,s,r,a)}else this.canvas.width=this.container.offsetWidth*this.devicePixelRatio,this.canvas.style.width=this.container.offsetWidth+"px",this.canvas.height=this.container.offsetWidth*this.devicePixelRatio/e.width*e.height,this.canvas.style.height=this.container.offsetWidth/e.width*e.height+"px",t.drawImage(e,0,0,this.canvas.width,this.canvas.height)}},{key:"updatePercentageInLoader",value:function(e){this.loader&&(this.loader.style.width=e+"%"),this.view360Icon&&(this.view360Icon.innerText=e+"%")}},{key:"onAllImagesLoaded",value:function(){if(this.imagesLoaded=!0,this.container.style.cursor="grab",this.removeLoader(),this.fullScreenView){var e=this.container.offsetHeight/this.container.offsetWidth,t=this.container.offsetWidth;this.ratio>e&&(t=this.container.offsetHeight/this.ratio),this.speedFactor=Math.floor(this.dragSpeed/150*36/this.amount*25*t/1500)||1}else this.speedFactor=Math.floor(this.dragSpeed/150*36/this.amount*25*this.container.offsetWidth/1500)||1;this.autoplay&&this.play(),this.view360Icon&&(this.view360Icon.innerText="",(0,o.setView360Icon)(this.view360Icon,this.logoSrc)),this.initControls()}},{key:"onFirstImageLoaded",value:function(e){var t=this;if(this.hide360Logo||this.add360ViewIcon(),this.fullScreenView){this.canvas.width=window.innerWidth*this.devicePixelRatio,this.canvas.style.width=window.innerWidth+"px",this.canvas.height=window.innerHeight*this.devicePixelRatio,this.canvas.style.height=window.innerHeight+"px";var i=this.canvas.getContext("2d"),n=(0,o.contain)(this.canvas.width,this.canvas.height,e.target.width,e.target.height),s=n.offsetX,r=n.offsetY,a=n.width,c=n.height;i.drawImage(e.target,s,r,a,c)}else{this.canvas.width=this.container.offsetWidth*this.devicePixelRatio,this.canvas.style.width=this.container.offsetWidth+"px",this.canvas.height=this.container.offsetWidth*this.devicePixelRatio/e.target.width*e.target.height,this.canvas.style.height=this.container.offsetWidth/e.target.width*e.target.height+"px",this.canvas.getContext("2d").drawImage(e.target,0,0,this.canvas.width,this.canvas.height)}this.lazyload&&!this.fullScreenView&&this.images.forEach((function(e,i){0!==i?e.getAttribute("data-src")&&(e.src=e.getAttribute("data-src")):t.innerBox.removeChild(t.lazyloadInitImage)})),this.ratio&&(this.container.style.minHeight="auto"),this.magnifier&&!this.fullScreenView&&this.addMagnifier(),this.boxShadow&&!this.fullScreenView&&this.addBoxShadow(),this.bottomCircle&&!this.fullScreenView&&this.add360ViewCircleIcon(),this.fullScreen&&!this.fullScreenView?this.addFullScreenIcon():this.fullScreenView&&this.addCloseFullScreenView()}},{key:"onImageLoad",value:function(e,t){var i=Math.round(this.loadedImages/this.amount*100);this.loadedImages+=1,this.updatePercentageInLoader(i),this.loadedImages===this.amount?this.onAllImagesLoaded(t):0===e&&this.onFirstImageLoaded(t)}},{key:"addCloseFullScreenView",value:function(){var e=document.createElement("div");(0,o.setCloseFullScreenViewStyles)(e),e.onclick=this.closeFullScreenModal.bind(this),this.innerBox.appendChild(e)}},{key:"add360ViewIcon",value:function(){var e=document.createElement("div");(0,o.set360ViewIconStyles)(e),e.innerText="0%",this.view360Icon=e,this.innerBox.appendChild(e)}},{key:"addFullScreenIcon",value:function(){var e=document.createElement("div");(0,o.setFullScreenIconStyles)(e),e.onclick=this.openFullScreenModal.bind(this),this.innerBox.appendChild(e)}},{key:"addMagnifier",value:function(){var e=document.createElement("div");(0,o.setMagnifyIconStyles)(e,this.fullScreen),e.onclick=this.magnify.bind(this),this.innerBox.appendChild(e)}},{key:"getOriginalSrc",value:function(){var e=this.images[this.activeImage-1],t=e.src.lastIndexOf("//");return t>10?e.src.slice(t):e.src}},{key:"magnify",value:function(){var e=this,t=new Image,i=this.getOriginalSrc();t.src=i,t.onload=function(){e.glass&&(e.glass.style.cursor="none")},this.glass=document.createElement("div"),this.container.style.overflow="hidden",(0,o.magnify)(this.container,i,this.glass,this.magnifier||3)}},{key:"closeMagnifier",value:function(){this.glass&&(this.container.style.overflow="visible",this.container.removeChild(this.glass),this.glass=null)}},{key:"openFullScreenModal",value:function(){var t=document.createElement("div");(0,o.setFullScreenModalStyles)(t);var i=this.container.cloneNode(),n=this.images[0],s=n.height/n.width;i.style.height="100%",i.style.maxHeight="100%",t.appendChild(i),window.document.body.appendChild(t),new e(i,!0,s)}},{key:"closeFullScreenModal",value:function(){document.body.removeChild(this.container.parentNode)}},{key:"add360ViewCircleIcon",value:function(){var e=new Image;(0,o.set360ViewCircleIconStyles)(e,this.bottomCircleOffset),this.view360CircleIcon=e,this.innerBox.appendChild(e)}},{key:"hide360ViewCircleIcon",value:function(){this.view360CircleIcon&&(this.view360CircleIcon.style.opacity="0")}},{key:"show360ViewCircleIcon",value:function(){this.view360CircleIcon&&(this.view360CircleIcon.style.opacity="1")}},{key:"remove360ViewCircleIcon",value:function(){this.view360CircleIcon&&(this.innerBox.removeChild(this.view360CircleIcon),this.view360CircleIcon=null)}},{key:"addLoader",value:function(){var e=document.createElement("div");(0,o.setLoaderStyles)(e),this.loader=e,this.innerBox.appendChild(e)}},{key:"addBoxShadow",value:function(){var e=document.createElement("div");(0,o.setBoxShadowStyles)(e,this.boxShadow),this.innerBox.appendChild(e)}},{key:"removeLoader",value:function(){this.loader&&(this.innerBox.removeChild(this.loader),this.loader=null)}},{key:"remove360ViewIcon",value:function(){this.view360Icon&&(this.innerBox.removeChild(this.view360Icon),this.view360Icon=null)}},{key:"play",value:function(){var e=this;this.bottomCircle&&this.hide360ViewCircleIcon(),this.remove360ViewIcon(),this.loopTimeoutId=window.setInterval((function(){e.loop(e.reversed)}),this.autoplaySpeed)}},{key:"stop",value:function(){this.bottomCircle&&this.show360ViewCircleIcon(),window.clearTimeout(this.loopTimeoutId)}},{key:"getSrc",value:function(e,t,i,n,s){var r=s.ciSize,a=s.ciToken,c=s.ciOperation,l=s.ciFilters,u=""+i+n;if(e){var h=t.offsetWidth;if(this.fullScreenView){var d=t.offsetHeight/t.offsetWidth;this.ratio>d&&(h=t.offsetHeight/this.ratio)}u="https://"+a+".cloudimg.io/"+c+"/"+(0,o.getSizeAccordingToPixelRatio)(r||(0,o.getResponsiveWidthOfContainer)(h))+"/"+l+"/"+u}return u}},{key:"preloadImages",value:function(e,t,i,n,s,r,a){var c=this;if(this.imageList)try{var l=JSON.parse(this.imageList);this.amount=l.length,l.forEach((function(e,t){var o=/(http(s?)):\/\//gi.test(e)?"":c.folder,l=c.getSrc(r,s,o,e,a);c.addImage(l,i,n,t)}))}catch(e){console.error("Wrong format in image-list attribute: "+e.message)}else[].concat(function(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}(new Array(e))).map((function(e,s){var r=(0,o.pad)(s+1,c.indexZeroBase),a=t.replace("{index}",r);c.addImage(a,i,n,s)}))}},{key:"addImage",value:function(e,t,i,n){var o=new Image;t&&!this.fullScreenView?(o.setAttribute("data-src",e),o.className=o.className.length?o.className+" "+i:i,0===n&&(this.lazyloadInitImage=o,o.style.position="absolute",o.style.top="0",o.style.left="0",this.innerBox.appendChild(o))):o.src=e,o.onload=this.onImageLoad.bind(this,n),o.onerror=this.onImageLoad.bind(this,n),this.images.push(o)}},{key:"destroy",value:function(){stop();var e=this.container,t=e.cloneNode(!0),i=t.querySelector(".cloudimage-inner-box");t.className=t.className.replace(" initialized",""),t.style.position="relative",t.style.width="100%",t.style.cursor="default",t.setAttribute("draggable","false"),t.style.minHeight="auto",t.removeChild(i),e.parentNode.replaceChild(t,e)}},{key:"initControls",value:function(){var e=this,t=this.controlReverse?!this.spinReverse:this.spinReverse,i=this.container.querySelector(".cloudimage-360-prev"),n=this.container.querySelector(".cloudimage-360-next");if(i||n){var s=function(t){t.stopPropagation(),e.onSpin(),e.prev(),e.loopTimeoutId=window.setInterval(e.prev.bind(e),e.autoplaySpeed)},r=function(t){t.stopPropagation(),e.onSpin(),e.next(),e.loopTimeoutId=window.setInterval(e.next.bind(e),e.autoplaySpeed)},a=function(){e.onFinishSpin(),window.clearTimeout(e.loopTimeoutId)},c=function(){e.onFinishSpin(),window.clearTimeout(e.loopTimeoutId)};i&&(i.style.display="block",i.addEventListener("mousedown",t?r:s),i.addEventListener("touchstart",t?r:s),i.addEventListener("mouseup",t?c:a),i.addEventListener("touchend",t?c:a),this.prevElem=i),n&&(n.style.display="block",n.addEventListener("mousedown",t?s:r),n.addEventListener("touchstart",t?s:r),n.addEventListener("mouseup",t?a:c),n.addEventListener("touchend",t?a:c),this.nextElem=n),(t?n:i)&&this.stopAtEdges&&(0,o.addClass)(t?n:i,"not-active")}}},{key:"addInnerBox",value:function(){this.innerBox=document.createElement("div"),this.innerBox.className="cloudimage-inner-box",this.container.appendChild(this.innerBox)}},{key:"addCanvas",value:function(){this.canvas=document.createElement("canvas"),this.canvas.style.width="100%",this.canvas.style.fontSize="0",this.ratio&&(this.container.style.minHeight=this.container.offsetWidth*this.ratio+"px",this.canvas.height=parseInt(this.container.style.minHeight)),this.innerBox.appendChild(this.canvas)}},{key:"attachEvents",value:function(e,t,i){e&&(this.container.addEventListener("mousedown",this.mousedown.bind(this)),this.container.addEventListener("mouseup",this.mouseup.bind(this)),this.container.addEventListener("mousemove",this.mousemove.bind(this))),t&&(this.container.addEventListener("touchstart",this.touchstart.bind(this),{passive:!0}),this.container.addEventListener("touchend",this.touchend.bind(this),{passive:!0}),this.container.addEventListener("touchmove",this.touchmove.bind(this))),i?(document.addEventListener("keydown",this.keydown.bind(this)),document.addEventListener("keyup",this.keyup.bind(this))):document.addEventListener("keydown",this.keydownGeneral.bind(this))}},{key:"applyStylesToContainer",value:function(){this.container.style.position="relative",this.container.style.width="100%",this.container.style.cursor="wait",this.container.setAttribute("draggable","false"),this.container.className=this.container.className+" initialized"}},{key:"init",value:function(e){var t=(0,o.get360ViewProps)(e),i=t.folder,n=t.filename,s=t.imageList,r=t.indexZeroBase,a=t.amount,c=t.draggable,l=void 0===c||c,u=t.swipeable,h=void 0===u||u,d=t.keys,f=t.bottomCircle,v=t.bottomCircleOffset,p=t.boxShadow,y=t.autoplay,g=t.speed,m=t.autoplayReverse,w=t.fullScreen,x=t.magnifier,b=t.ratio,I=t.responsive,S=t.ciToken,C=t.ciSize,k=t.ciOperation,E=t.ciFilters,L=t.lazyload,O=t.lazySelector,A=t.spinReverse,M=t.dragSpeed,P=t.stopAtEdges,V=t.controlReverse,R=t.hide360Logo,j=t.logoSrc,z={ciSize:C,ciToken:S,ciOperation:k,ciFilters:E};this.addInnerBox(),this.addLoader(),this.folder=i,this.filename=n,this.imageList=s,this.indexZeroBase=r,this.amount=a,this.bottomCircle=f,this.bottomCircleOffset=v,this.boxShadow=p,this.autoplay=y&&!this.isMobile,this.speed=g,this.reversed=m,this.fullScreen=w,this.magnifier=!(this.isMobile||!x)&&x,this.lazyload=L,this.ratio=b,this.spinReverse=A,this.controlReverse=V,this.dragSpeed=M,this.autoplaySpeed=36*this.speed/this.amount,this.stopAtEdges=P,this.hide360Logo=R,this.logoSrc=j,this.applyStylesToContainer(),this.addCanvas();var F=this.getSrc(I,e,i,n,z);this.preloadImages(a,F,L,O,e,I,z),this.attachEvents(l,h,d)}}]),e}();t.default=s},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=function(e,t){var i=s(e,t),n=s(e,"data-"+t);return null!==i&&"false"!==i||null!==n&&"false"!==n},s=function(e,t){return e.getAttribute(t)},r=(n=!0,function(e,t,i,o){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:.5,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:.5,c=i/o,l=e/t,u=e*s,h=t*s;return(n?c>l:c<l)?h=u/c:u=h*c,{width:u,height:h,offsetX:(e-u)*r,offsetY:(t-h)*a}});t.get360ViewProps=function(e){return{folder:s(e,"folder")||s(e,"data-folder")||"/",filename:s(e,"filename")||s(e,"data-filename")||"image-{index}.jpg",imageList:s(e,"image-list")||s(e,"data-image-list")||null,indexZeroBase:parseInt(s(e,"index-zero-base")||s(e,"data-index-zero-base")||0,10),amount:parseInt(s(e,"amount")||s(e,"data-amount")||36,10),speed:parseInt(s(e,"speed")||s(e,"data-speed")||80,10),dragSpeed:parseInt(s(e,"drag-speed")||s(e,"data-drag-speed")||150,10),keys:o(e,"keys"),boxShadow:s(e,"box-shadow")||s(e,"data-box-shadow"),autoplay:o(e,"autoplay"),autoplayReverse:o(e,"autoplay-reverse"),bottomCircle:o(e,"bottom-circle"),fullScreen:o(e,"full-screen"),magnifier:(null!==s(e,"magnifier")||null!==s(e,"data-magnifier"))&&parseInt(s(e,"magnifier")||s(e,"data-magnifier"),10),bottomCircleOffset:parseInt(s(e,"bottom-circle-offset")||s(e,"data-bottom-circle-offset")||5,10),ratio:parseFloat(s(e,"ratio")||s(e,"data-ratio")||0)||!1,responsive:o(e,"responsive"),ciToken:s(e,"responsive")||s(e,"data-responsive")||"demo",ciSize:s(e,"size")||s(e,"data-size"),ciOperation:s(e,"operation")||s(e,"data-operation")||"width",ciFilters:s(e,"filters")||s(e,"data-filters")||"q35",lazyload:o(e,"lazyload"),lazySelector:s(e,"lazyload-selector")||s(e,"data-lazyload-selector")||"lazyload",spinReverse:o(e,"spin-reverse"),controlReverse:o(e,"control-reverse"),stopAtEdges:o(e,"stop-at-edges"),hide360Logo:o(e,"hide-360-logo"),logoSrc:s(e,"logo-src")||"https://scaleflex.ultrafast.io/https://scaleflex.airstore.io/filerobot/js-cloudimage-360-view/360_view.svg"}},t.set360ViewIconStyles=function(e){e.style.position="absolute",e.style.top="0",e.style.bottom="0",e.style.left="0",e.style.right="0",e.style.width="100px",e.style.height="100px",e.style.margin="auto",e.style.backgroundColor="rgba(255,255,255,0.8)",e.style.borderRadius="50%",e.style.boxShadow="rgb(255, 255, 255, 0.5) 0px 0px 4px",e.style.transition="0.5s all",e.style.color="rgb(80,80,80)",e.style.textAlign="center",e.style.lineHeight="100px",e.style.zIndex="2"},t.set360ViewCircleIconStyles=function(e,t){e.src="https://scaleflex.ultrafast.io/https://scaleflex.api.airstore.io/v1/get/_/2236d56f-914a-5a8b-a3ae-f7bde1c50000/360.svg",e.style.position="absolute",e.style.top="auto",e.style.bottom=t+"%",e.style.left="0",e.style.right="0",e.style.width="80%",e.style.height="auto",e.style.margin="auto",e.style.transition="0.5s all",e.style.zIndex="2"},t.setLoaderStyles=function(e){e.className="cloudimage-360-loader",e.style.position="absolute",e.style.zIndex="100",e.style.top="0",e.style.left="0",e.style.right="0",e.style.width="0%",e.style.height="8px",e.style.background="rgb(165,175,184)"},t.setBoxShadowStyles=function(e,t){e.className="cloudimage-360-box-shadow",e.style.position="absolute",e.style.zIndex="99",e.style.top="0",e.style.left="0",e.style.right="0",e.style.bottom="0",e.style.boxShadow=t},t.setView360Icon=function(e,t){e.style.background="rgba(255,255,255,0.8) url('"+t+"') 50% 50% / contain no-repeat"},t.magnify=function(e,t,i,n){var o,s;function r(t){var r,a=void 0,c=void 0;t.preventDefault(),r=function(t){var i,n=0,o=0;return t=t||window.event,i=e.getBoundingClientRect(),n=t.pageX-i.left,o=t.pageY-i.top,n-=window.pageXOffset,o-=window.pageYOffset,{x:n,y:o}}(t),a=r.x,c=r.y,a>e.offsetWidth-o/n&&(a=e.offsetWidth-o/n),a<o/n&&(a=o/n),c>e.offsetHeight-s/n&&(c=e.offsetHeight-s/n),c<s/n&&(c=s/n),i.style.left=a-o+"px",i.style.top=c-s+"px",i.style.backgroundPosition="-"+(a*n-o+3)+"px -"+(c*n-s+3)+"px"}i.setAttribute("class","img-magnifier-glass"),e.prepend(i),i.style.backgroundColor="#fff",i.style.backgroundImage="url('"+t+"')",i.style.backgroundRepeat="no-repeat",i.style.backgroundSize=e.offsetWidth*n+"px "+e.offsetHeight*n+"px",i.style.position="absolute",i.style.border="3px solid #000",i.style.borderRadius="50%",i.style.cursor="wait",i.style.lineHeight="200px",i.style.textAlign="center",i.style.zIndex="1000",i.style.width="250px",i.style.height="250px",i.style.top="-75px",i.style.right="-85px",o=i.offsetWidth/2,s=i.offsetHeight/2,i.addEventListener("mousemove",r),e.addEventListener("mousemove",r),i.addEventListener("touchmove",r),e.addEventListener("touchmove",r)},t.setMagnifyIconStyles=function(e,t){e.style.position="absolute",e.style.top=t?"35px":"5px",e.style.right="5px",e.style.width="25px",e.style.height="25px",e.style.zIndex="101",e.style.cursor="pointer",e.style.background="url('https://scaleflex.ultrafast.io/https://scaleflex.airstore.io/filerobot/js-cloudimage-360-view/loupe.svg') 50% 50% / cover no-repeat"},t.setFullScreenModalStyles=function(e){e.style.position="fixed",e.style.top="0",e.style.bottom="0",e.style.left="0",e.style.right="0",e.style.width="100%",e.style.height="100%",e.style.zIndex="999",e.style.background="#fff"},t.setFullScreenIconStyles=function(e){e.style.position="absolute",e.style.top="5px",e.style.right="5px",e.style.width="25px",e.style.height="25px",e.style.zIndex="101",e.style.cursor="pointer",e.style.background="url('https://scaleflex.ultrafast.io/https://scaleflex.airstore.io/filerobot/js-cloudimage-360-view/full_screen.svg') 50% 50% / cover no-repeat"},t.setCloseFullScreenViewStyles=function(e){e.style.position="absolute",e.style.top="5px",e.style.right="5px",e.style.width="25px",e.style.height="25px",e.style.zIndex="101",e.style.cursor="pointer",e.style.background="url('https://scaleflex.ultrafast.io/https://scaleflex.airstore.io/filerobot/js-cloudimage-360-view/cross.svg') 50% 50% / cover no-repeat"},t.getResponsiveWidthOfContainer=function(e){return(t=e)<=25?"25":t<=50?"50":(100*Math.ceil(t/100)).toString();var t},t.getSizeAccordingToPixelRatio=function(e){var t=e.toString().split("x"),i=[];return[].forEach.call(t,(function(e){i.push(e*Math.round(window.devicePixelRatio||1))})),i.join("x")},t.contain=r,t.addClass=function(e,t){e.classList?e.classList.add(t):e.className+=" "+t},t.removeClass=function(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")},t.pad=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(e+="").length>=t?e:new Array(t-e.length+1).join("0")+e}}]);
//code to do the flyout mobile nav
$(document).ready(function () {
    //flyout code
    var menuLeft = $('.header__mobileNavFlyout'),
        hamburgerMenuIcon = $('body').hasClass('v2p') ? $('#micrositeHeader__hamburgerBtn') : $('#hamburger'),
        body = $('body');
    // Store the window width
    var navCheckWindowWidth = $(window).width();

    //flyout code click
    hamburgerMenuIcon.on('click', function () {
        hamburgerMenuIcon.toggleClass('activeFlyout');
        if (body.hasClass('v2p')) {
            body.toggleClass('mobileNavFlyout');
            $('.header__mobileNavFlyout').removeClass('region-selector-active');
        } else {
            body.toggleClass('mobileNavFlyout-push-toright');
        }
        menuLeft.toggleClass('mobileNavFlyout-open');
    });

    //hide/unhide the account items section
    if ($('.header__mobileNavFlyout__accountItems').length > 0) {
        $('.header__mobileNavFlyout__showhideAccountItems').unbind('click');
        $('.header__mobileNavFlyout__showhideAccountItems').on('click', function () {
            $('.header__mobileNavFlyout__accountItems').toggle();
        });
    }

    //setup the constants
    var NAV_LINK_CONTAINER = $('.nav__link__container');
    var NAV_LINK_HAS_DROPDOWN = $('.nav--dropdown-link');

    //loop over all list items, and if an l3 is authored with a real href (not missing, blank, or #), copy it into the l4 so that it can be accessed
    //l3 cannot be both a trigger and a link
    NAV_LINK_CONTAINER.each(function(index,val){
        var $this = $(this);
        var navLink = $this.find('.nav__link');
        if( typeof navLink.attr('href') != 'undefined' && navLink.attr('href') != '#' && navLink.attr('href') != '' && navLink.attr('href') != 'javascript:void(0);'){
            $this.find('.nav__dropdown ul').prepend('<li><a href="'+navLink.attr('href')+'">'+navLink[0].innerText+'</a></li>');
        }
    });

    //on click prevent the default behavior, this l3 is always a trigger and never a link
    if (!body.hasClass('v2p')) {
        NAV_LINK_HAS_DROPDOWN.on('click', function(e){
            e.preventDefault();
            if (e.currentTarget.ariaExpanded === "false") {
                e.currentTarget.ariaExpanded = "true";
            } else if (e.currentTarget.ariaExpanded === "true") {
                e.currentTarget.ariaExpanded = "false";
            }
        });
    }

    $(".header__dropdown__container").on('click', function(e) {
        e.stopPropagation();
        $(e.currentTarget).toggleClass("open");
    });
    $(".header__dropdown").on('click', function(e) {
        e.stopPropagation();
    });
    $(document).on('click', function(e) {
        $(".header__dropdown__container").removeClass("open");
    });


    //set active class
    var activeStateClassName = 'active';
    //subnav in flyout and desktop
    $('.header__mainNavigationList > li > a, .locale-selector a.localeTitle').on('click', function () {
        // do nothing if the parent doesn't have children
        if ($(this).parent().hasClass('no-subitems')) {
            return;
        }

        $(this).attr('aria-expanded', $(this).attr('aria-expanded') === 'false' ? 'true' : 'false');


        //if mobile
        if ($('.header__hamburgerWrap:visible').length > 0) {
            //normal
            var _thisNavItem = $(this);
            var _parentListItem = _thisNavItem.parent();

            //check if currently active parent
            if (_parentListItem.hasClass(activeStateClassName)) {
                _parentListItem.removeClass(activeStateClassName);
                $('.header__mainNavigationList > li, .header__infoUtilityWrap a.Primary').show();
            } else {
                _parentListItem.addClass(activeStateClassName);
                $('.header__mainNavigationList > li, .header__infoUtilityWrap a.Primary')
                  .not(_thisNavItem.parent())
                  .hide();
                
                  $('.header__mainNavigationList > li > a')
                    .not(_thisNavItem)
                    .attr('aria-expanded', 'false');

                $('.header__infoUtilityWrap .' + activeStateClassName + ' a.Primary').show();

                // reset scroll position for improved UX when user is on a lower node
                $('.header__mobileNavFlyout-left.mobileNavFlyout-open').scrollTop(0);
            }


        } else {
            //desktop view

            var _thisNavItem = $(this);
            var _parentListItem = _thisNavItem.parent();

            //check if currently active parent
            if (_parentListItem.hasClass(activeStateClassName)) {
                _parentListItem.removeClass(activeStateClassName);
            } else {

                $('.header__mainNavigationList > li > a')
                    .not(_thisNavItem)
                    .attr('aria-expanded', 'false');

                //remove from secondary navigation 
                $('.nav__link__container').removeClass($('.nav__link__container').data('toggler'));
                $('.header__mainNavigationList > li').removeClass(activeStateClassName);
                _parentListItem.addClass(activeStateClassName);
            }
        }
    });

    // sometimes navigation items do not have sub items, do not show the arrow in these situations
    $('.header__mainNavigationList > li').each(function () {
        var node = $(this);

       if ($('.header__subNavWrap', node).length === 0) {
           $(node).addClass('no-subitems');
       }
    });

    // V2P Region Selector Persistance
    if (body.hasClass('v2p')) {
        var storedRegion = localStorage.getItem('region');
        if (storedRegion) {
            var storedRegionObject = JSON.parse(storedRegion);
            var storedLanguageCode = storedRegionObject.regionLanguageCode;
            var storedRegionName = storedRegionObject.regionName;
            var selectedRegionElement = $('.region .region__country:contains(' + storedRegionName + ')');

            // Differentiate the two markup structures
            if (selectedRegionElement.parent().is('a')) {
                selectedRegionElement.parent().addClass('active-region');
                $('.region-selector-open span').replaceWith('<span>' + storedRegionName + '</span> - <span class="region-language-code">' + storedLanguageCode + '</span>');
            } else if (selectedRegionElement.parent().hasClass('region__content-wrapper')) {
                var selectedRegionLinks = selectedRegionElement.parent().children('.region__link');
                selectedRegionLinks.each(function() {
                    if ( $(this).text().trim() === storedLanguageCode ) {
                        $(this).addClass('active-region');
                    }
                });
                $('.region-selector-open span').replaceWith('<span>' + storedRegionName + '</span> - <span class="region-language-code">' + storedLanguageCode + '</span>');
            }
        }

        $('.region__link').on('click tap', function (event) {
            var target = $(event.target);
            target = target.parent();
            var regionLanguageCode = target.attr('data-language');
            var regionName = target.attr('data-region-name');
            var regionObject = {
                regionLanguageCode: regionLanguageCode,
                regionName: regionName
            };
            localStorage.setItem('region', JSON.stringify(regionObject));
            $('.region .active-region').removeClass('active-region');
            target.addClass('active-region');
        });
    }

    // using no-subitems to suppress accordion behavior and adding has-subitems to give top level item unique styling
    if (body.hasClass('v2p')) {
        $('.header__mainNavigationList > li').each(function () {
            var node = $(this);
            $(node).addClass('no-subitems');

            if ($(node).children().hasClass('header__subNavWrap')) {
                $(node).addClass('has-subitems');
            }
        });
    }

    if (body.hasClass('v2p')) {
        $('.header__infoUtilityWrap > a').each(function () {
            var utilityLink = $(this);
            if (!utilityLink.hasClass('locale-selector')) {
                utilityLink.hide();
            }
        });
    }
    //search button code
    //show search box
    $('.header__searchButton').on('click keyup', function (event) {
        if(event.type === 'click' || event.key === 'Enter') {

            // Toggle aria expanded attribute
            $(this).attr('aria-expanded', $(this).attr('aria-expanded') === 'false' ? 'true' : 'false');

            //hide quick order first
            $('.header__quickOrderWrap').hide();
            //check visible not visible
            if ($('.header__searchBoxWrap:visible').length == 0) {
                $('.header__searchBoxWrap').css('display', 'inline-flex');
                $(this).find('.corn-icon-search-icon').hide();
                $(this).find('.corn-icon-close-icon').show();
                $('.header__searchBox input').not('#sticky-phantom .header__searchBox input').focus();
            } else {
                $(this).find('.corn-icon-close-icon').hide();
                $(this).find('.corn-icon-search-icon').show();
                $('.header__searchBoxWrap').hide();
                $('body').focus();
            }
        }
    });

    //hide search when anything else is clicked
    $(document).on('click', function (e) {
        //not search wrap parent or the search button iteself
        if ($(e.target).closest('.header__searchBoxWrap').length === 0 && $(e.target).closest('.header__searchButton').length === 0) {
            $('.header__searchButton').find('.corn-icon-close-icon').hide();
            $('.header__searchButton').find('.corn-icon-search-icon').show();
            $('.header__searchBoxWrap').hide();
        }
    });

    //hide open dropdowns when body clicked, or if another link clicked
    $(document).on('click', function(e){
        var $this = $(this);
        var $cachetarget = $(e.target);

        //if does not have data-toggler attribute
        if(!$cachetarget.closest('.nav__link__container').data('toggler') && !$cachetarget.closest('.header__mainNavigationList > li').hasClass(activeStateClassName)){
            $('.nav__link__container').removeClass($('.nav__link__container').data('toggler'));
            $('.header__mainNavigationList > li').removeClass(activeStateClassName);
        }

        if($cachetarget.parents().index($('.locale-selector'))<0){
            if($('.locale-selector').hasClass('selected')){
                $('.empty-div-wh-bg').hide();
                $('.locale-selector').removeClass('selected');
            }
        }
    });

    $('.locale-selector .locale-selector-sub-nav a').click(function(){
        var hostName = localeConfArray.akamaiURL.match(/^http:\/\/[^/]+/);
        localeConfArray.akamaiURL = $(this).attr('href');
        $.cookie('AKAMAI_region', localeConfArray.akamaiURL, { expires: 365, path: '/', domain: domainName });

        $.cookie('CLS_UserDisplayName','', {path:'/',domain:domainName});
        $.cookie('CLS_CartItemCount',0, {path:'/',domain:domainName});
    });

    $('a.localeTitle').on("click tap",function(e){
        if($(window).width()>768 && !$('.locale-selector').hasClass('selected')){
            e.preventDefault();
            $('.empty-div-wh-bg').show();
            $('.locale-selector').addClass('selected');
        }
        else{
           $('.empty-div-wh-bg').hide();
           $('div.locale-selector').removeClass('selected');
        }
    });

    // New Region Selector Open
    if (body.hasClass('v2p')) {
        $('.region-selector-open').on('click tap', function(e) {
            $('.header__mobileNavFlyout').addClass('region-selector-active');
        });

        // New Region Selector Close
        $('.region-selector-close').on('click tap', function(e) {
            $('.header__mobileNavFlyout').removeClass('region-selector-active');
        });

        //quick order mobile button
        $('.header__quickOrderButton').on('click', function () {
            //hide search stuff
            $('.header__searchButton').find('.corn-icon-close-icon').hide();
            $('.header__searchButton').find('.corn-icon-search-icon').show();
            $('.header__searchBoxWrap').hide();
            //check visible not visible
            if ($('.header__quickOrderWrap:visible').length == 0) {
                $('.header__quickOrderWrap').css('display', 'flex');
            } else {
                $('.header__quickOrderWrap').hide();
            }
        });
    }

    //on resize do something
    if (!body.hasClass('v2p')) {
        var navWindowResizeFn = debounce(function () {
            // Check window width has actually changed and it's not just iOS triggering a resize event on scroll
            if ($(window).width() != navCheckWindowWidth) {
            // If the current active element is a text input, we can assume the soft keyboard is visible.
            //else mobile calls resize event
            if ($(document.activeElement).prop('type') !== 'text') {
                // All the taxing stuff you do
                $('.header__mainNavigationList .' + activeStateClassName).removeClass(activeStateClassName);
                $('.header__mainNavigationList > li, .header__infoUtilityWrap a.Primary').css('display', 'inline-block');
                $('.header__mainNavigationList > li, .header__infoUtilityWrap a.Primary').show();
                hamburgerMenuIcon.removeClass('activeFlyout');
                body.removeClass('mobileNavFlyout-push-toright');
                menuLeft.removeClass('mobileNavFlyout-open');
                //reset search and quicknav
                //hide quick order first
                $('.header__quickOrderWrap').hide();
                //hide search stuff
                $('.header__searchButton').find('.corn-icon-close-icon').hide();
                $('.header__searchButton').find('.corn-icon-search-icon').show();
                $('.header__searchBoxWrap').hide();
            }
            // Update the window width for next time
            navCheckWindowWidth = $(window).width();
            }
        }, 250);
        window.addEventListener('resize', navWindowResizeFn);
    }

    //mobile search icon form submit
    $('.header__searchBox__searchIcon').on('click', function () {
        $(this).closest('form').submit();
    });

});


function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

//setup the nav to be sticky
$(document).ready(function () {

    var $header = $("header");
    if(!$header.length) { return; }

    var STICKY_CLASS = "header-sticky";
    var unstickyHeight, unstickyPostion, $stickyPhantom, stickyHeight, offset;

    var subNav = $('.mainSubnav');
    var micrositeSecondaryNav = $('.cmp-secondary-nav--microsite');
    console.log('microsite present', micrositeSecondaryNav)
    //If secondary navigation exists on page, add it to main header
    if (subNav.length > 0 && micrositeSecondaryNav.length === 0) {
        var hasSecNav = $header.find('.has-sec-nav');
        if (hasSecNav.length == 0){
            $header.addClass('has-sec-nav');
        }
        var subText = subNav.find('.nav__logo__subtext');
        if (subText.length > 0) {
            $header.addClass('has-subtext');
        }
        $header.append(subNav);
    } else {
        $header.removeClass('has-sec-nav');
    }

    stickyRecon();

    var isSticking = $header.hasClass(STICKY_CLASS);

    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        var stickingPoint = unstickyPostion + offset;

        if(isSticking && scrollTop <= stickingPoint) { // Unstick
            $header.removeClass(STICKY_CLASS);
            $stickyPhantom.hide();
            isSticking = false;
        } else if(!isSticking && scrollTop > stickingPoint) { // Stick
            $header.addClass(STICKY_CLASS);
            $stickyPhantom.show();
            isSticking = true;
        }
    });

    var resizeTimer;
    var RESIZE_DEBOUNCE = 200;
    $(window).resize(function() {
        resizeTimer = setTimeout(function() {
            clearTimeout(resizeTimer);
            stickyRecon();
        }, RESIZE_DEBOUNCE);
    });

    function stickyRecon() {
        var startedSticky = $header.hasClass(STICKY_CLASS);
        if(startedSticky) {
            $header.removeClass(STICKY_CLASS);
        }
        
        // unstuck recon
        unstickyHeight = $header.height();
        unstickyPostion = $header.offset().top;
        
        if(!$stickyPhantom) {
            // Create a placeholder for the sticky header since it pops out of the flow when it sticks (position: fixed)
            //      so the content below doesn't jump all over
            $stickyPhantom = $('<div id="sticky-phantom"></div>').hide();
            $header.after($stickyPhantom);
        }

        $stickyPhantom.css({
            height: unstickyHeight, // Take up the same space
            // Match the margins, just incase something was collapsing against it
            marginTop: $header.css('margin-top'),
            marginBottom: $header.css('margin-bottom')
        });

        // Recon for when it is sticky
        $header.addClass(STICKY_CLASS);
        stickyHeight = $header.height();

        // Put it back the way it was originally
        if(!startedSticky) {
            $header.removeClass(STICKY_CLASS);
        }

        // If the sticky height is shorter than the main height, 
        //      then don't stick until the visible height of the header is the same as the stuck height
        offset = (stickyHeight < unstickyHeight) ? (unstickyHeight - stickyHeight) : 0;
    }
});





/*
  Simple class toggle functionality

  Usage

  Add [data-toggle] to the trigger element you wish to the toggle functionality
  On the target element specify in the [data-toggler] the class you want to toggle on the target element

  Example

    <button class="toggle-trigger" data-toggle=".target-element">Foo</button>

    <div class="target-element" data-toggler="visible">
      Bar
    </div>

  After toggle

    <button class="toggle-trigger" data-toggle=".target-element">Foo</button>

    <div class="target-element visible" data-toggler="visible">
      Bar
    </div>

*/

$(document).ready(function () {

  // Add click event listener to all [data-toggle] elements
  $("[data-toggle]").click(function (ev) {

    ev.preventDefault();


    // The target element is specified in the [data-toggle] attribute
    var $el = $($(this).data('toggle'));

    if(!$el.hasClass($el.data('toggler'))){
        $('.nav__link__container').removeClass($('.nav__link__container').data('toggler'));
        $('.header__mainNavigationList > li').removeClass('active');
    }

    // Toggling the class on the selected element
    $el.toggleClass($el.data('toggler'));

  });

  // Same functionality as the toggle but on closest element to the trigger
  $("[data-toggle-closest]").click(function (ev) {

    var $size = $(this).closest('.nav__dropdown__container').data('size');
    if( $size > 0 ){
        //if link has a dropdown prevent default behavior
        ev.preventDefault();
    }
    
    var $el = $(this).closest($(this).data('toggle-closest'));

    if(!$el.hasClass($el.data('toggler'))){
        $('.nav__link__container').removeClass($('.nav__link__container').data('toggler'));
        $('.header__mainNavigationList > li').removeClass('active');
    }

    $el.toggleClass($el.data('toggler'));
  });

  $("[data-toggle-self]").click(function (ev) {


    if(!$(this).hasClass($(this).data('toggle-self'))){
        $('.nav__link__container').removeClass($('.nav__link__container').data('toggler'));
        $('.header__mainNavigationList > li').removeClass('active');
    }

    $(this).toggleClass($(this).data('toggle-self'));
  });
});



$(document).on('click', function(e){
    var $this = $(this);
    var $cachetarget = $(e.target);

    //if does not have data-toggler attribute
    if(!$cachetarget.closest('.nav__link__container').data('toggler') && !$cachetarget.closest('.header__mainNavigationList > li').hasClass('active')){
        $('.nav__link__container').removeClass($('.nav__link__container').data('toggler'));
        $('.header__mainNavigationList > li').removeClass('active');
    }
});


/*

  Usage

  Example

*/

$(document).ready(function () {

    var rules = [];

    // Init the arrow-box
    $("[data-arrow-box]").each(function (ndx, elem) {
        var $arrowBox = $(elem);

        var $arrow = $('<span />').addClass('arrow_box__arrow');
        var $shadow = $('<span />').addClass('arrow_box__arrow__shadow');

        $arrowBox.append($shadow, $arrow);
    });

    //on resize do something
    var positionArrows = debounce(function () {
        $("[data-arrow-box]").each(function (ndx, elem) {
            // Assign the element to a jQuery object
            var $arrowBox = $(elem);

            var $arrow = $arrowBox.find('.arrow_box__arrow');
            var $shadow = $arrowBox.find('.arrow_box__arrow__shadow');

            // Find the pointer
            var $pointer = $arrowBox.parents('[data-arrow-box-container]').find('[data-arrow-pointer]');
            if ($pointer.length > 0) {
                // Get the position of the arrow pointer
                var position = $pointer.position();

                // Get the left position of the arrowbox
                position.left -= parseInt($arrowBox.css('left'), 10);

                // Get the pointer width
                var pointerWidth = $pointer.width();

                var shadowOffset = Math.abs($arrow.width() - $shadow.width()) / 2;

                // Position the arrow and the shadow
                $shadow.css('left', position.left + pointerWidth / 2 - $shadow.width() / 2 - shadowOffset);
                $arrow.css('left', position.left + pointerWidth / 2 - $arrow.width() / 2);
            }
        });
    }, 250);

    window.addEventListener('resize', positionArrows);

    positionArrows();
});


// Need to convert to Jquery
// Navigation Icon
let menuOpen = false;
$('#micrositeHeader__hamburgerBtn').on('click', function () {
    const menuBtn = document.querySelector('#micrositeHeader__hamburgerBtn');
    if (!menuOpen) {
        $(".micrositeHeader__nav-icon").toggleClass("open");
        menuBtn.setAttribute('aria-expanded', 'true');
        menuOpen = true;
    } else {
        menuBtn.setAttribute('aria-expanded', 'false');
        $(".micrositeHeader__nav-icon").toggleClass("open");
        menuOpen = false;
    }
})

console.log('getuserstatus.js loaded')

window.COOKIE_CONSTANTS = {
    // Cookie key names
    COOKIE_REGION_INFO: 'regionInfo',

    // Cookie key names (shared with Hybris)
    COOKIE_HYBRIS_LANGUAGE: 'language',
    COOKIE_HYBRIS_REGION: 'region',
    COOKIE_HYBRIS_BUSINESS_UNIT: 'Business_Unit',
    COOKIE_HYBRIS_CUSTOMER_TYPE: 'customerType',
    COOKIE_HYBRIS_STORE_ID: 'storeID',
    COOKIE_USER_NAME: 'User_Display_Name',
    COOKIE_CART_COUNT: 'Cart_Items_Count',

    // Cookie values
    CLS_BUSINESS_UNIT_COOKIE: 'CLS',
    COC_BUSINESS_UNIT_COOKIE: 'COC',
    CLS_BUSINESS_UNIT_STRING: 'life-sciences',
    COC_BUSINESS_UNIT_STRING: 'optical-communications',
    BUSINESS_UNIT_B2B: 'B2B',
    BUSINESS_UNIT_B2C: 'B2C',

    // Business unit as presented in the URL and in the meta tags
    BUSINESS_UNIT_COC: 'coc',
    BUSINESS_UNIT_CLS: 'cls',
    BUSINESS_UNIT_CLSB2B: 'clsb2b',
    BUSINESS_UNIT_CLSB2C: 'clsb2c',

    // Business unit as presented in the Group meta tag
    GROUP_COC: 'Optical Communications',
    GROUP_CLS: 'Life Sciences',

    // Fusion/search
    SEARCH_REGION_PARAM_PREFIX: 'search-region=',

    //
    REGION_CURRENT_PAGE_PREFIX: 'pagePath=',

    COOKIE_DOMAIN: {
        path: '/'
        , domain: '.corning.com' // Include when pushing to .COM
    }
};

const URL_SUFFIXES = {
    LOGIN: 'login',
    QUICK_ORDER: 'quickOrder',
    CART: 'cart',
    CART_PORTALS: 'portals/cart',
    CART_PUNCHOUT: 'punchout/cart',
    MATERIAL_LIST: 'material-list',
    PROFILE: 'my-account/update-profile',
    LOGOUT: 'logout',
    IMPORT_SAVED_CART: 'import/csv/saved-cart'
};

// Global variables to store Page Locale Info, Page region Info & Hybris Metadata Info.
var regionLang, regionSite, contextMappingsSerp, contextMappingsRegions, groupName;
var regionDefaultCountry, baseHybrisUrl, defaultBaseUrlClsb2b, defaultBaseUrlClsb2c,
    defaultBaseUrlCoc, defaultHybrisLanguage, defaultHybrisRegion, defaultHybrisBusinessUnit;
var onCocPage, onClsPage, onHybrisPage;

// Global variables to store current cookie values
var cookieHybrisLanguage = $.cookie(window.COOKIE_CONSTANTS.COOKIE_HYBRIS_LANGUAGE);
var cookieHybrisRegion = $.cookie(window.COOKIE_CONSTANTS.COOKIE_HYBRIS_REGION);
var cookieHybrisBusinessUnit = $.cookie(window.COOKIE_CONSTANTS.COOKIE_HYBRIS_BUSINESS_UNIT);
var cookieHybrisCustomerType = $.cookie(window.COOKIE_CONSTANTS.COOKIE_HYBRIS_CUSTOMER_TYPE);

// Temp fix until Hybris always uses "customerType" for cookie name for CLS and COC instead of "Customer_Type" in some
// cases.
if (!cookieHybrisCustomerType) {
    cookieHybrisCustomerType = $.cookie("Customer_Type");
}

var cookieHybrisStoreId = $.cookie(window.COOKIE_CONSTANTS.COOKIE_HYBRIS_STORE_ID)
var cookieUserName = $.cookie(window.COOKIE_CONSTANTS.COOKIE_USER_NAME);
var cookieRegionInfo = $.cookie(window.COOKIE_CONSTANTS.COOKIE_REGION_INFO);

// Global variable for Search Results URL (set globally so React search can access)
var searchResultsUrl = searchResultsUrl ? searchResultsUrl : "";
var regionsPageUrl;

// Global variable for Search Region so that fusion builds correct search URLs
var searchRegionsParam = null;
if (cookieHybrisRegion) {
    searchRegionsParam = window.COOKIE_CONSTANTS.SEARCH_REGION_PARAM_PREFIX + cookieHybrisRegion;
}

// Global variable for storing the region Info object & setting it as a region info cookie.
var currentRegionInfo = null;

// Global variable for Hybris URLs
// so it can cache the value instead of "re-figuring" each time getHybrisUrl is called
window.personalizedHybrisUrlBase = false;
window.pageHybrisUrlBase = false;


/**
 * Util method to get the attribute value from the 'div' with 'id' equal to 'portal-header-data'
 * @param attributeName - the name of the attribute to look for.
 * @return the attribute value.
 */
function getDataFromPortalHeader(attributeName) {
    return $('#portal-header-data').attr(attributeName);
}


/**
 * Util method to get region from Store ID Cookie value.
 * @param storeId - the value from the Store ID Cookie.
 * @return the region value - ex: "lifeSciencesUSB2BStore" = US; "opticalCommunicationsAfricaB2CStore" = "Africa"
 */
function parseRegionFromStoreId(storeId) {
    var str = storeId.replace(/^(lifeSciences|opticalCommunications)/, '');
    str = str.replace(/(B2B|B2C)Store$/, '');
    return str;
}

/**
 * Util method to get the BU Cookie value & Customer Type value.
 * @param bu - Business unit as presented in the URL and in the meta tags
 * @return an array of 2 values - Business Unit Cookie value & Customer type.
 */
function getCookieValueBusinessUnit(bu) {
    if (!bu) {
        return null;
    }

    var businessUnit, customerType;

    switch (bu) {
        case window.COOKIE_CONSTANTS.BUSINESS_UNIT_COC:
            businessUnit = window.COOKIE_CONSTANTS.COC_BUSINESS_UNIT_COOKIE;
            customerType = window.COOKIE_CONSTANTS.BUSINESS_UNIT_B2B;
            break;
        case window.COOKIE_CONSTANTS.BUSINESS_UNIT_CLSB2B:
            businessUnit = window.COOKIE_CONSTANTS.CLS_BUSINESS_UNIT_COOKIE;
            customerType = window.COOKIE_CONSTANTS.BUSINESS_UNIT_B2B;
            break;
        case window.COOKIE_CONSTANTS.BUSINESS_UNIT_CLSB2C:
            businessUnit = window.COOKIE_CONSTANTS.CLS_BUSINESS_UNIT_COOKIE;
            customerType = window.COOKIE_CONSTANTS.BUSINESS_UNIT_B2C;
            break;
        default:
            console.error('Business Unit', bu, 'is not supported');
    }

    if (businessUnit && customerType) {
        return [businessUnit, customerType];
    }

    return null;
}


/**
 * Util method to update the BU Cookie value.
 * @param bu - Business unit as presented in the URL and in the meta tags
 */
function updateBusinessUnitCookie(bu) {
    var mapped = getCookieValueBusinessUnit(bu);

    if (mapped) {
        var businessUnit = mapped[0];
        var customerType = mapped[1];

        if (businessUnit) {
            $.cookie(window.COOKIE_CONSTANTS.COOKIE_HYBRIS_BUSINESS_UNIT, businessUnit, window.COOKIE_CONSTANTS.COOKIE_DOMAIN);
            cookieHybrisBusinessUnit = businessUnit;
        }
        // Don't set customerType (let them choose)
    }
}


/**
 * Util method to display the country info, login links, welcome message & cart links.
 * @param fallback - boolean.
 */
function displayCurrentCountryFromCookie(fallback) {
    var displayCountry, displayLanguage;
    var updatedDisplay = false;

    if (fallback) {
        displayCountry = regionDefaultCountry;
        displayLanguage = regionLang;
    }

    if (cookieRegionInfo) {
        try {
            var info = JSON.parse(cookieRegionInfo);
            var currentAEMRegion = regionSite.split('/')[0].toLowerCase();

            if (info[currentAEMRegion]) {
                var filterForHybrisRegion;

                if (cookieHybrisRegion) {
                    filterForHybrisRegion = cookieHybrisRegion;
                }

                if (onHybrisPage && cookieHybrisStoreId) {
                    // storeid trumps region
                    console.log('Mismatch between storeID and region cookies: ' + parseRegionFromStoreId(cookieHybrisStoreId) + ', ' + filterForHybrisRegion + ', using region from storeID.');
                    filterForHybrisRegion = parseRegionFromStoreId(cookieHybrisStoreId);
                }

                if (
                    (filterForHybrisRegion && info[currentAEMRegion]["region"] == filterForHybrisRegion) // If a hybris region is indicated, make sure this matches
                    || !filterForHybrisRegion // otherwise, just show the first one
                ) {
                    window.currentRegionInfo = info[currentAEMRegion];

                    displayCountry = window.currentRegionInfo.name || displayCountry;
                    displayLanguage = window.currentRegionInfo.language || displayLanguage;
                }
            }
        } catch (e) {
            // Cookie is corrupted, clear it out to avoid issues
            $.removeCookie(window.COOKIE_CONSTANTS.COOKIE_REGION_INFO, window.COOKIE_CONSTANTS.COOKIE_DOMAIN);
        }
    }
    personalizeLoginLogout();
    personalizeWelcome();
    if (displayCountry && displayLanguage) {
        var $selector = $('.regional-selector');
        if (displayLanguage) {
            $selector.find('.regional-lang').text('(' + displayLanguage.toUpperCase() + ')');
        }
        if (displayCountry) {
            $selector.find('.regional-country').text(displayCountry);
        }
        updatedDisplay = true;

        personalizeLinks(); // Update the other links with the same data that's being used to display the country & language
    }

    return updatedDisplay;
}


/**
 * Util method to parse region page to get the region info.
 * @param whichRegion - the region to look for.
 * @param whichLanguage - the language to look for.
 * @param $links - the links HTML in the region page.
 */
function parseRegionPageForInfo(whichRegion, whichLanguage, $links) {
    var $matchingLinks = $links.filter(function () {
        return (
            ($(this).data('region').toUpperCase() == whichRegion.toUpperCase())
            && ($(this).data('language').toUpperCase() == whichLanguage.toUpperCase())
        );
    });

    if ($matchingLinks.length === 1) {
        populateRegionInfoCookie($matchingLinks);
        cookieRegionInfo = $.cookie(window.COOKIE_CONSTANTS.COOKIE_REGION_INFO);
    } else {
        console.warn('Multiple regions available for region', whichRegion, 'and language', whichLanguage, 'displaying default');
    }
}

/**
 * Util method to populate the region info cookie.
 * @param $link - the HTML element
 * @param updateHybrisCookies - boolean
 */
function populateRegionInfoCookie($link, updateHybrisCookies) {
    var regionCode = $link.data('region');
    var language = $link.data('language');
    var regionName = $link.data('region-name');
    var baseUrlCOC = $link.data('baseurl-coc');
    var baseUrlCLSB2B = $link.data('baseurl-clsb2b');
    var baseUrlCLSB2C = $link.data('baseurl-clsb2c');
    var aemRegionUrl = $link.data('baseurl-aem');

    if (updateHybrisCookies) {
        $.cookie(window.COOKIE_CONSTANTS.COOKIE_HYBRIS_REGION, regionCode, window.COOKIE_CONSTANTS.COOKIE_DOMAIN);
        $.cookie(window.COOKIE_CONSTANTS.COOKIE_HYBRIS_LANGUAGE, language, window.COOKIE_CONSTANTS.COOKIE_DOMAIN);
        var storeID = $.cookie(window.COOKIE_CONSTANTS.COOKIE_HYBRIS_STORE_ID);
        if (storeID) {
            var storeIdRegion = storeID.replace(/^(lifeSciences|opticalCommunications)/, '');
            storeIdRegion = storeIdRegion.replace(/(B2B|B2C)Store$/, '');
            storeID = storeID.replace(storeIdRegion, regionCode);
            $.cookie(window.COOKIE_CONSTANTS.COOKIE_HYBRIS_STORE_ID, storeID, window.COOKIE_CONSTANTS.COOKIE_DOMAIN);
        }
        }

    ////// set cookie for utility nav header
    //	(several countries are lumped under a single region - save what they clicked)
    var aemRegion;
    if (aemRegionUrl) {

        // Make sure the link is absolute, for more consistent parsing
        var absoluteEle = document.createElement('a');
        absoluteEle.setAttribute('href', aemRegionUrl);
        aemRegionUrl = absoluteEle.href;

        // NOTE: Assuming that the link is in the structure: **/(REGION)/(LANGUAGE)[/]
        if (aemRegionUrl[aemRegionUrl.length - 1] == '/') {
            aemRegionUrl = aemRegionUrl.slice(0, -1);
        } // Remove trailing /
        aemRegionUrl = aemRegionUrl.split('/');
        aemRegion = aemRegionUrl[aemRegionUrl.length - 2]; // Grab (REGION) in the url
    }

    var savedData = $.cookie(window.COOKIE_CONSTANTS.COOKIE_REGION_INFO);
    if (savedData) {
        try {
            savedData = JSON.parse(savedData);
        } catch (e) {
            savedData = {};
            $.removeCookie(window.COOKIE_CONSTANTS.COOKIE_REGION_INFO, window.COOKIE_CONSTANTS.COOKIE_DOMAIN);
        }
    } else {
        savedData = {};
    }

    if (aemRegion && regionName && language) {
        savedData[aemRegion.toLowerCase()] = { // Override or set this region with the most recent data
            name: regionName,
            language: language,
            region: regionCode,
            baseUrls: {
                coc: baseUrlCOC,
                clsb2b: baseUrlCLSB2B,
                clsb2c: baseUrlCLSB2C
            }
        };

        $.cookie(window.COOKIE_CONSTANTS.COOKIE_REGION_INFO, JSON.stringify(savedData), window.COOKIE_CONSTANTS.COOKIE_DOMAIN);
    }
}

/**
 * Util method to return the rendered contextual hybris url.
 * @param basedOnPageBU - boolean value.
 */
function getHybrisUrl(basedOnPageBU) {
    if (!basedOnPageBU && window.personalizedHybrisUrlBase) {
        return window.personalizedHybrisUrlBase;
    } else if (basedOnPageBU && window.pageHybrisUrlBase) {
        return window.pageHybrisUrlBase;
    }

    var businessUnit;
    var customerType;

    if ((basedOnPageBU || !cookieHybrisCustomerType) && defaultHybrisBusinessUnit) {
        var mappedBu = getCookieValueBusinessUnit(defaultHybrisBusinessUnit)
        if (mappedBu) {
            // Use the page value (either basedOnPageBU or don't have a cookie)
            businessUnit = mappedBu[0];

            if (cookieHybrisCustomerType) {
                customerType = cookieHybrisCustomerType; // Use the cookie if it's available
            } else {
                customerType = mappedBu[1]; // otherwise, fall back on the default meta data
            }
        }
    } else if (cookieHybrisBusinessUnit && cookieHybrisCustomerType) {
        businessUnit = cookieHybrisBusinessUnit;
        customerType = cookieHybrisCustomerType;
    }

    var url;
    var savedUrlBases = window.currentRegionInfo ? window.currentRegionInfo.baseUrls : null;

    // Figure out what URL base to use, based on business unit / customer type saved
    if (businessUnit == window.COOKIE_CONSTANTS.CLS_BUSINESS_UNIT_COOKIE) {
        if (customerType == window.COOKIE_CONSTANTS.BUSINESS_UNIT_B2B) {
            if (savedUrlBases && savedUrlBases.clsb2b) {
                url = savedUrlBases.clsb2b;
            } else {
                url = defaultBaseUrlClsb2b;
            }
        } else if (customerType == window.COOKIE_CONSTANTS.BUSINESS_UNIT_B2C) {
            if (savedUrlBases && savedUrlBases.clsb2c) {
                url = savedUrlBases.clsb2c;
            } else {
                url = defaultBaseUrlClsb2c;
            }
        }
    } else if (businessUnit == window.COOKIE_CONSTANTS.COC_BUSINESS_UNIT_COOKIE) {
        if (savedUrlBases && savedUrlBases.coc) {
            url = savedUrlBases.coc;
        } else {
            url = defaultBaseUrlCoc;
        }
    }

    // A little string manipulation so there's no double slashes
    if (baseHybrisUrl && baseHybrisUrl[baseHybrisUrl.length - 1] != "/") {
        baseHybrisUrl += "/";
    } // end in /
    if (url && url[0] == "/") {
        url = url.substr(1);
    } // do not start with / (baseHyrbisUrl ends in one)
    if (url && url[url.length - 1] != "/") {
        url += "/";
    } // Ends in a slash for easier concatination later

    // Tack on the Hybris domain
    if (url) {
        url = baseHybrisUrl + url;
    }

    if (basedOnPageBU) {
        window.pageHybrisUrlBase = url;
    } else {
        window.personalizedHybrisUrlBase = url;
    }

    return url;
}


/**
 * Util method to show the 'Edit Account' link and Welcome user notification.
 */
function personalizeWelcome() {
    var personalizedUrlBase = getHybrisUrl();

    var $accountLinks = $('.header__mobileNavFlyout__showhideAccountItems, .header__utilityNavuserWrap > a');
    if ($accountLinks.length) {
        if (cookieUserName) {
            $accountLinks.attr('href', personalizedUrlBase + URL_SUFFIXES.PROFILE).show();
        } else {
            $accountLinks.hide();
        }
    }
}


/**
 * Util method to update links with region, business unit, etc. data
 * Cart link, Materials List Link, Quick Order Link etc.
 */
function personalizeLinks() {
    console.log('Personalized Hybris URL (based on Cookies):', getHybrisUrl());
    console.log('Hybris URL (based on page):', getHybrisUrl(true));

    var urlBase = getHybrisUrl(true);
    var personalizedUrlBase = getHybrisUrl();

    var cartCount = 0;

    var $cartLinkWrap = $('.header__utilityNav-iconWrap--commerce');
    var $cartLink = $cartLinkWrap.find('.header__cartWrap');
    var $cartCount = $cartLink.find('.user-cart-count');
    if ($cartLink.length) {
        if (cookieUserName || (!cookieUserName && onClsPage)) {
            var cartLinkHref;
            if (corningPageContext && corningPageContext.isPortal && corningPageContext.isPunchOut) {
                cartLinkHref = personalizedUrlBase + URL_SUFFIXES.CART_PUNCHOUT;
                cartLinkHref = cartLinkHref.replace(/https:\/\/(.*).corning.com/g, '');
            } else if (corningPageContext && corningPageContext.isPortal && !corningPageContext.isPunchOut) {
                cartLinkHref = personalizedUrlBase + URL_SUFFIXES.CART_PORTALS;
            } else {
                cartLinkHref = personalizedUrlBase + URL_SUFFIXES.CART;
            }
            $cartLink.attr('href', cartLinkHref).show();
            $cartLinkWrap.show();

            if ($.cookie(window.COOKIE_CONSTANTS.COOKIE_CART_COUNT)) {
                try {
                    cartCount = parseInt($.cookie(window.COOKIE_CONSTANTS.COOKIE_CART_COUNT));
                } catch (e) {
                    cartCount = 0;
                }
            } else {
                var cartCountUrl = cartLinkHref + '/miniCart/TOTAL';
                $.ajax({
                    url: cartCountUrl,
                    cache: false,
                    async: false,
                    type: 'GET',
                    xhrFields: {
                        withCredentials: true
                    },
                    success: function (jsonData) {
                        if (jsonData.totalUnitCount) {
                            try {
                                cartCount = parseInt(jsonData.totalUnitCount);
                            } catch (e) {
                                cartCount = 0;
                            }
                        }
                    }
                });
            }
            if (cartCount) {
                $cartCount.text('(' + cartCount + ')').show();
            } else {
                $cartCount.hide();
            }
        } else {
            $cartLink.hide();
            $cartLinkWrap.hide();
        }
    }

    var $quickOrder = $('.quick-order');
    if ($quickOrder.length) {
        if (onClsPage) {
            // NOTE: not personalized url - based on the page meta tag
            $quickOrder.attr('href', urlBase + URL_SUFFIXES.QUICK_ORDER).show();
        } else {
            $quickOrder.hide();
        }
    }

    var $importSavedCart = $('.import-saved-cart');
    if ($importSavedCart.length) {
        if (onClsPage) {
            // NOTE: not personalized url - based on the page meta tag
            $importSavedCart.attr('href', urlBase + URL_SUFFIXES.IMPORT_SAVED_CART).show();
        } else {
            $importSavedCart.hide();
        }
    }

    var $materialsListWrap = $('.nav-item__materials-list');
    var $materialsListLink = $materialsListWrap.children('a');
    if ($materialsListWrap.length) {
        if (onCocPage) {
            // NOTE: not personalized url - based on the page meta tag
            $materialsListLink.attr('href', urlBase + URL_SUFFIXES.MATERIAL_LIST);
            $materialsListWrap.show();
        } else {
            $materialsListWrap.hide();
        }
    }

    var LISTLINKS_BASE;
    var $listlinksHybris = $('.listlinks--hybrisproducts');

    if ($listlinksHybris.length) {
        //first get cookies driven base url, if that doesn't exist, then get the meta value driven base url
        if (typeof personalizedUrlBase !== 'undefined') {
            LISTLINKS_BASE = personalizedUrlBase;
        } else if (typeof urlBase !== 'undefined') {
            LISTLINKS_BASE = urlBase;
        }

        $listlinksHybris.each(function (index, val) {
            $this = $(this);
            var items = $this.find('.listlink');
            items.each(function (index, val) {
                $item = $(this);
                var id = $item.find('a').data('subcategory-id');
                $item.find('a').attr('href', LISTLINKS_BASE + id);
            })
        })
    }
}


/**
 * Util method to modify the Login/Logout links
 */
function personalizeLoginLogout() {

    var personalizedUrlBase = getHybrisUrl();

    if (!personalizedUrlBase) {
        personalizedUrlBase = '';
    }

    var $loginoutLinks = $('.header-link__loginout');
    var $loginoutWrappers = $('.header__utilityNav_signout, .header__mobileNavFlyout__signout, .header__mobileNavFlyout__header');
    var $welcome = $('.welcome-user');
    var loginLabel;
    if (onAemPage && !onClsPage) {
        loginLabel = $loginoutLinks.data('label-login');
    } else if (onHybrisPage || onClsPage) {
        loginLabel = $loginoutLinks.data('label-login-register');
    }
    const logoutLabel = $loginoutLinks.data('label-logout');
    const welcomeLabel = $welcome.data('label-welcome');
    if ($loginoutLinks.length) {

        if (cookieUserName) { // Always show if logged in (Welcome and Sign Out link)
            $loginoutLinks.text(logoutLabel).attr('href', personalizedUrlBase + URL_SUFFIXES.LOGOUT);
            $welcome.text(welcomeLabel + ' ' + cookieUserName);
            $loginoutWrappers.show();
        } else {
            $loginoutLinks.text(loginLabel).attr('href', personalizedUrlBase + URL_SUFFIXES.LOGIN);
            $welcome.text('');

            if (onCocPage || onClsPage) { // Only show the login link on these pages
                $loginoutWrappers.show();
            } else {
                $loginoutWrappers.hide();
            }
        }
    }
}


$(document).ready(function () {
    /**
     ************************************************** [START] Collect data from the DOM ********************************************************************
     **/
    // Get lang, regionSite, contextMappingsSerp & contextMappingsRegions from meta-tags or portal-header-data div element.
    regionLang = $('meta[property=lang]').attr('content') || getDataFromPortalHeader('lang');
    regionSite = $('meta[property=regionSite]').attr('content') || $('meta[name=regionSite]').attr('content') || getDataFromPortalHeader('regionSite');
    contextMappingsSerp = $('meta[property=contextMappingsSerp]').attr('content') || getDataFromPortalHeader('contextMappingsSerp');
    contextMappingsRegions = $('meta[property=contextMappingsRegions]').attr('content') || getDataFromPortalHeader('contextMappingsRegions');

    onHybrisPage = (function () {
        if (window.corningPageContext.page === 'HYBRIS') {
            return true;
        }
        return false;
    })();

    onHybrisCocPage = (function () {
        if (onHybrisPage && cookieHybrisBusinessUnit === COOKIE_CONSTANTS.COC_BUSINESS_UNIT_COOKIE) {
            return true;
        }
        return false;
    })();

    onHybrisClsPage = (function () {
        if (onHybrisPage && cookieHybrisBusinessUnit === COOKIE_CONSTANTS.CLS_BUSINESS_UNIT_COOKIE) {
            return true;
        }
        return false;
    })();

    if (onHybrisClsPage) {
        groupName = COOKIE_CONSTANTS.GROUP_CLS;
    } else if (onHybrisCocPage) {
        groupName = COOKIE_CONSTANTS.GROUP_COC;
    } else {
        // Get groupName from meta-tags
        // (Not getting from portal-header-data for this variable bcoz we need to be able to change BU facets in search results)
        groupName = $('meta[name=businessUnit]').attr('content');
    }

    if (groupName) {
        //store global variable here
        window.initialCategory = 'search-initialcatalog=' + groupName;
    }

    // If the hybris meta tags are missing or empty, attempt to get the values from the portal header.
    regionDefaultCountry = $('meta[name=defaultCountry]').attr('content') || getDataFromPortalHeader('defaultCountry');
    baseHybrisUrl = $('meta[name=baseHybrisUrl]').attr('content') || getDataFromPortalHeader('baseHybrisUrl');
    defaultBaseUrlClsb2b = $('meta[name=baseUrlClsb2b]').attr('content') || getDataFromPortalHeader('baseUrlClsb2b');
    defaultBaseUrlClsb2c = $('meta[name=baseUrlClsb2c]').attr('content') || getDataFromPortalHeader('baseUrlClsb2c');
    defaultBaseUrlCoc = $('meta[name=baseUrlCoc]').attr('content') || getDataFromPortalHeader('baseUrlCoc');
    defaultHybrisLanguage = $('meta[name=defaultHybrisLanguage]').attr('content') || getDataFromPortalHeader('defaultHybrisLanguage');
    defaultHybrisRegion = $('meta[name=defaultHybrisRegion]').attr('content') || getDataFromPortalHeader('defaultHybrisRegion');
    defaultHybrisBusinessUnit = $('meta[name=defaultHybrisBusinessUnit]').attr('content') || getDataFromPortalHeader('defaultHybrisBusinessUnit');

    onAemPage = (function () {
        if (window.corningPageContext.page === 'AEM') {
            return true;
        }
        return false;
    })();

    onAemCocPage = (function () {
        if (defaultHybrisBusinessUnit == window.COOKIE_CONSTANTS.BUSINESS_UNIT_COC) {
            return true;
        }
        return groupName == window.COOKIE_CONSTANTS.GROUP_COC;
    })();

    onAemClsPage = (function () {
        if (
            defaultHybrisBusinessUnit == window.COOKIE_CONSTANTS.BUSINESS_UNIT_CLSB2B ||
            defaultHybrisBusinessUnit == window.COOKIE_CONSTANTS.BUSINESS_UNIT_CLSB2C
        ) {
            return true;
        }
        return groupName == window.COOKIE_CONSTANTS.GROUP_CLS;
    })();

    onCocPage = (function () {
        return onAemCocPage || onHybrisCocPage;
    })();


    onClsPage = (function () {
        return onAemClsPage || onHybrisClsPage;
    })();


    /**
     ********************************************* [END] Collect data from the DOM *************************************************************************
     **/


    /**
     ************************************************** [START] Update the cookies ********************************************************************
     **/
    if (!onHybrisPage) {
        // Update the region cookie if it is not set already (i.e. auto-set the user's preference)
        if (!cookieHybrisRegion) {
            if (cookieHybrisStoreId) { // First, try using the store id if it exists
                cookieHybrisRegion = parseRegionFromStoreId(cookieHybrisStoreId);
                $.cookie(window.COOKIE_CONSTANTS.COOKIE_HYBRIS_REGION, cookieHybrisRegion, window.COOKIE_CONSTANTS.COOKIE_DOMAIN);
            }

            if (!cookieHybrisRegion && defaultHybrisRegion) { // If store id didn't work, use the default on the page
                cookieHybrisRegion = defaultHybrisRegion;
                $.cookie(window.COOKIE_CONSTANTS.COOKIE_HYBRIS_REGION, defaultHybrisRegion, window.COOKIE_CONSTANTS.COOKIE_DOMAIN);
            }
        }

        // Update the language cookie if it is not set already
        if (!cookieHybrisLanguage && defaultHybrisLanguage) {
            $.cookie(window.COOKIE_CONSTANTS.COOKIE_HYBRIS_LANGUAGE, defaultHybrisLanguage, window.COOKIE_CONSTANTS.COOKIE_DOMAIN);
        }
    }

    // There's a default available, and either the user is not logged in or they are logged in but it wasn't set
    if (defaultHybrisBusinessUnit && (!cookieUserName || (cookieUserName && !cookieHybrisBusinessUnit))) {
        // Update the business unit & customer type based on the meta tag, if its populated
        var mappedBu = getCookieValueBusinessUnit(defaultHybrisBusinessUnit);
        if (mappedBu && (mappedBu[0] != cookieHybrisBusinessUnit)) {
            updateBusinessUnitCookie(defaultHybrisBusinessUnit);
        }
    }
    /**
     ************************************************** [END] Update the cookies ***************************************************************************
     **/


    /**
     ************************************************** [START] Update the region selector link & set up search results url *********************************
     **/
    var defaultContextMappings = {
        "worldwide/en": {
            "serp": "/worldwide/en/search.html",
            "regions": "/worldwide/en/regions.html"
        },
        "jp/jp": {
            "serp": "/jp/jp/search.html",
            "regions": "/jp/jp/regions.html"
        },
        "cala/en": {
            "serp": "/cala/en/search.html",
            "regions": "/cala/en/regions.html"
        },
        "cala/es": {
            "serp": "/cala/es/search.html",
            "regions": "/cala/es/regions.html"
        },
        "cala/pt": {
            "serp": "/cala/pt/search.html",
            "regions": "/cala/pt/regions.html"
        },
        "au/en": {
            "serp": "/au/en/search.html",
            "regions": "/au/en/regions.html"
        },
        "cn/zh": {
            "serp": "/cn/zh/search.html",
            "regions": "/cn/zh/regions.html"
        },
        "emea/en": {
            "serp": "/emea/en/search.html",
            "regions": "/emea/en/regions.html"
        },
        "in/en": {
            "serp": "/in/en/search.html",
            "regions": "/in/en/regions.html"
        },
        "kr/ko": {
            "serp": "/kr/ko/search.html",
            "regions": "/kr/ko/regions.html"
        },
        "asean/en": {
            "serp": "/asean/en/search.html",
            "regions": "/asean/en/regions.html"
        },
        "tw/zh_tw": {
            "serp": "/tw/zh_tw/search.html",
            "regions": "/tw/zh_tw/regions.html"
        },
        "emea/de": {
            "serp": "/emea/de/search.html",
            "regions": "/emea/de/regions.html"
        },
        "ru/ru": {
            "serp": "/ru/ru/search.html",
            "regions": "/ru/ru/regions.html"
        },
        "emea/fr": {
            "serp": "/emea/fr/search.html",
            "regions": "/emea/fr/regions.html"
        }
    };

    // This JS file is shared with Portal Hybris Pages.
    if (onAemPage || onHybrisPage) {

        // If Non-Portal, set search results URL & regionsPage URL.
        // If Portal, set only the search results URL. Do not set the regionsPage Url.
        if (!window.corningPageContext.isPortal) {
            // Set the vars to the meta tag values.
            // Set the vars to Fallback values (if the meta tags don't exist)
            if (contextMappingsSerp !== undefined && contextMappingsRegions !== undefined) {
                searchResultsUrl = contextMappingsSerp;
                regionsPageUrl = contextMappingsRegions;
            } else {
                for (var i in defaultContextMappings) {
                    if (i === regionSite) {
                        searchResultsUrl = defaultContextMappings[i].serp;
                        regionsPageUrl = defaultContextMappings[i].regions;
                    }
                }
            }

            // Region Selector Href Change (based on region selected)
            var currentPageParam = $('.regional-selector').data('current-page');
            var newURL;
            var query = window.location.search.substring(1);
            if (query.length > 0) {
                // remove current page param if it already exists from previous region selector use
                var queryParamsArray = query.split('&');
                var newQueryParamsArray = [];
                for (var i = 0; i < queryParamsArray.length; i++) {
                    if (!queryParamsArray[i].startsWith(COOKIE_CONSTANTS.REGION_CURRENT_PAGE_PREFIX)) {
                        newQueryParamsArray.push(queryParamsArray[i]);
                    }
                }
                query = newQueryParamsArray.join('&');
                query = "&" + query;
            }
            var currentHybrisPage = window.location.pathname;
            if (regionsPageUrl && currentPageParam) {
                if (onAemPage) {
                    // No other params on the contextMappings above, simple append
                    newURL = regionsPageUrl + '?' + window.COOKIE_CONSTANTS.REGION_CURRENT_PAGE_PREFIX + currentPageParam + '&' + query;
                } else if (onHybrisPage) {
                    var aemBaseUrl = $('.regional-selector').data('aem-base-url');
                    // remove trailing slash
                    aemBaseUrl = aemBaseUrl.substring(0, aemBaseUrl.lastIndexOf('/'));
                    regionsPageUrl = aemBaseUrl + regionsPageUrl;
                    var pathArray = currentHybrisPage.split("/");
                    var busUnitParam = window.cookieHybrisBusinessUnit.toLowerCase();
                    if (busUnitParam === COOKIE_CONSTANTS.BUSINESS_UNIT_CLS) {
                        var consumerType = window.cookieHybrisCustomerType.toLowerCase();
                        busUnitParam = busUnitParam.concat(consumerType);
                    }
                    currentPageParam = "";
                    for (var i = 5; i < pathArray.length; i++) {
                        currentPageParam += "/";
                        currentPageParam += pathArray[i];
                    }
                    if (currentPageParam.includes('/p/')) {
                        currentPageParam = currentPageParam.substring(currentPageParam.indexOf('/p/') + 1);
                    }
                    newURL = regionsPageUrl + '?' + "bu=" + busUnitParam + '&' + window.COOKIE_CONSTANTS.REGION_CURRENT_PAGE_PREFIX + currentPageParam + query;
                    searchResultsUrl = aemBaseUrl + searchResultsUrl;
                    $('.search-form').attr('action', searchResultsUrl);
                } else {
                    newURL = regionsPageUrl;
                }
                if (newURL) {
                    $('.regional-selector').attr('href', newURL);
                }
            } else if (window.corningPageContext.isPortal && onAemPage) {
                if (contextMappingsSerp !== undefined) {
                    searchResultsUrl = contextMappingsSerp;
                } else {
                    for (var i in defaultContextMappings) {
                        if (i === regionSite) {
                            searchResultsUrl = defaultContextMappings[i].serp;
                        }
                    }
                }
            }
        }
        /**
         ************************************************** [END] Update the region selector link & set up search results url *********************************
         **/


        /**
         ************************************************** [START] handle regional lang and country name display on AEM side *********************************
         **/
        var displaySuccess = displayCurrentCountryFromCookie(false); // First, try loading from the info that was cached

        // If there wasn't appropriate cached info, use the cookies from Hybris and collect the info
        if (!displaySuccess && !!cookieHybrisStoreId && !!cookieHybrisLanguage && !!regionsPageUrl) {
            const LINK_SELECTOR = '.region > a';

            // If on the the regions page, no need to do the call
            var $linksOnPage = $(LINK_SELECTOR);
            if ($linksOnPage.length) {
                parseRegionPageForInfo(parseRegionFromStoreId(cookieHybrisStoreId), cookieHybrisLanguage, $linksOnPage);
                displayCurrentCountryFromCookie(true); // Fallback to the default if an appropriate region wasn't populated
            } else if (onAemPage || regionsPageUrl.startsWith("http")) { // Only if we are on an AEM page or have the full URL to AEM
                // Get the same mappings as used when setting above cookie from the AEM page
                $.ajax(regionsPageUrl, {
                    success: function (htmlString) {
                        // parse through HTML of the page returned; jQuery can't parse head, doctype, body, etc, so cut out all but the body content
                        // http://stackoverflow.com/a/12848798/738394
                        htmlString = htmlString.replace(/^[\s\S]*<body.*?>|<\/body>[\s\S]*$/g, '');
                        htmlString = htmlString.replaceAll('"/etc.clientlibs', '"' + aemBaseUrl + '/etc.clientlibs');
                        var $pageContent = $($.trim(htmlString));
                        parseRegionPageForInfo(parseRegionFromStoreId(cookieHybrisStoreId), cookieHybrisLanguage, $pageContent.find(LINK_SELECTOR));
                    }, complete: function () {
                        displayCurrentCountryFromCookie(true); // Fallback to the default if an appropriate region wasn't populated
                    }
                });
            }
        } else {
            displayCurrentCountryFromCookie(true); // Fallback to the default
        }
        /**
         ************************************************** [END] handle regional lang and country name display on AEM side *********************************
         **/

    }
});
$(document).ready(function () {

	const addCookies = {
		'Business_Unit': true,
		'contactGroup': true,
		'language': true,
		'region': true,
		'regionInfo': true,
		'AKAMAI_region': true,
		'user_country_code': true,
		'EU_Cookie_Policy': true,
		'worldwide_worldwide_en': true,
		'cala_cala_es': true,
		'cala_cala_en': true,
		'cala_cala_pt': true,
		'apac_au_en': true,
		'apac_cn_zh': true,
		'apac_asean_en': true,
		'apac_in_en': true,
		'apac_jp_jp': true,
		'apac_kr_ko': true,
		'apac_tw_zh_tw': true,
		'emea_emea_en': true,
		'emea_emea_de': true,
		'emea_emea_fr': true,
		'emea_ru_ru': true,
		'default': false
	};

    function checkCookie(cookieName) {
        return (addCookies[cookieName] || addCookies['default'])
    }

	const deleteCookies = {
		'Business_Unit': 'businessUnit=; path=/; max-age=0;',
		'contactGroup': 'contactGroup=; path=/; max-age=0;',
		'language': 'language=; path=/; max-age=0;',
		'region': 'region=; path=/; max-age=0;',
		'regionInfo': 'regionInfo=; path=/; max-age=0;',
		'AKAMAI_region': 'AKAMAI_region=; path=/; max-age=0;',
		'user_country_code': 'user_country_code=; path=/; max-age=0;',
		'EU_Cookie_Policy': 'EU_Cookie_Policy=; path=/; max-age=0;',
		'worldwide_worldwide_en': 'worldwide_worldwide_en=; path=/; max-age=0;',
		'cala_cala_es': 'cala_cala_es=; path=/; max-age=0;',
		'cala_cala_en': 'cala_cala_en=; path=/; max-age=0;',
		'cala_cala_pt': 'cala_cala_pt=; path=/; max-age=0;',
		'apac_au_en': 'apac_au_en=; path=/; max-age=0;',
		'apac_cn_zh': 'apac_cn_zh=; path=/; max-age=0;',
		'apac_asean_en': 'apac_asean_en=; path=/; max-age=0;',
		'apac_in_en': 'apac_in_en=; path=/; max-age=0;',
		'apac_jp_jp': 'apac_jp_jp=; path=/; max-age=0;',
		'apac_kr_ko': 'apac_kr_ko=; path=/; max-age=0;',
		'apac_tw_zh_tw': 'apac_tw_zh_tw=; path=/; max-age=0;',
		'emea_emea_en': 'emea_emea_en=; path=/; max-age=0;',
		'emea_emea_de': 'emea_emea_de=; path=/; max-age=0;',
		'emea_emea_fr': 'emea_emea_fr=; path=/; max-age=0;',
		'emea_ru_ru': 'emea_ru_ru=; path=/; max-age=0;',
		'default': ''
	};

    function getDeleteText(cookie) {
        return (deleteCookies[cookie] || deleteCookies['default']);
    }

	const maxAges = {
		'AKAMAI_region': ' ;max-age=31540015',
		'EU_Cookie_Policy': ' ;max-age=31540015',
		'worldwide_worldwide_en': ' ;max-age=86400',
		'cala_cala_es': ' ;max-age=86400',
		'cala_cala_en': ' ;max-age=86400',
		'cala_cala_pt': ' ;max-age=86400',
		'apac_au_en': ' ;max-age=86400',
		'apac_cn_zh': ' ;max-age=86400',
		'apac_asean_en': ' ;max-age=86400',
		'apac_in_en': ' ;max-age=86400',
		'apac_jp_jp': ' ;max-age=86400',
		'apac_kr_ko': ' ;max-age=86400',
		'apac_tw_zh_tw': ' ;max-age=86400',
		'emea_emea_en': ' ;max-age=86400',
		'emea_emea_de': ' ;max-age=86400',
		'emea_emea_fr': ' ;max-age=86400',
		'emea_ru_ru': ' ;max-age=86400',
		'default': ''
	};

    function getMaxAge(cookieName) {
        return (maxAges[cookieName] || maxAges['default'])
    }

    function generateHostname(hostname) {
        if (hostname.includes('corning')) {
            return '.corning.com';
        } else {
            return 'localhost';
        }
    }

    const hostName = generateHostname(window.location.hostname);

    let cookies = document.cookie.split(";");

    function trimCookies(element, index, array) {
        array[index] = element.trim();
    }

    cookies.forEach(trimCookies);

    function deleteCookie(element) {
        let cookieName = element.substring(0, element.indexOf('='));
        let deleteString = getDeleteText(cookieName);
        document.cookie = deleteString;
    }

    cookies.forEach(deleteCookie)

    function addCookie(element) {
        let cookieName = element.substring(0, element.indexOf('='));
        if (checkCookie(cookieName)) {
            let addProperties = '; path=/; domain=' + hostName
                + getMaxAge(cookieName) + '; Secure; SameSite=None';
            let addString = element + addProperties;
            document.cookie = addString;
        }
    }

    cookies.forEach(addCookie);
});


$(document).ready(function($) {
    //Menu animation    

 //preventing secondary nav append in devices
    if ($(window).width() > 1024) {
        var maxwidth = 0;
        $('#site-navigation > ul > li').each(function() {
            maxwidth += $(this).outerWidth();
        })

        if ($(window).width() > maxwidth) {
            $('#site-navigation ul').css({
                width: maxwidth + 10 + "px",
                margin: '0 auto'
            })
        }
    }
    // Dropdown on Hover
    // $('#site-navigation > ul > li').hover(function() {
    //     if ($(this).find('.subnav .container ul').length > 0) {
    //         $(this).find('.arrow-top').show();
    //     }
    //     $(this).find('.subnav').css({
    //         visibility: "visible",
    //         display: "block"
    //     }).show(400);
    // }, function() {
    //     $('.secondary-navigaiton .arrow-top').hide();
    //     $(this).find('.subnav').css({
    //         display: "none"
    //     }).hide(400);
    // });

    // $('.secondary-navigaiton ul .mega-menu.sec-nav-li .subnav ul').each(function(){
    //     var li_len,rem_li;
    //     if($(this).find('li').length<4) {
    //         $(this).addClass('menu'+$(this).find('li').length);
    //     }

    //     $(this).find('li').css({"border-bottom": "1px solid #e0e0e0"});
    //     li_len=$(this).find('li').length;

    //     if ( $( this ).find('li').hasClass( "overview-device" ) ) {
    //         li_len=(li_len-1);
    //     }

    //      if(li_len>0 && li_len<4){
    //         $(this).removeClass().addClass('menu'+li_len);
    //     }

    //     rem_li=li_len%4;
    //     if(rem_li==1){
    //         $(this).find('li:nth-last-child(-n+1)').css({"border-bottom": "none"});
    //     }
    //     else if(rem_li==2){
    //         $(this).find('li:nth-last-child(-n+2)').css({"border-bottom": "none"});
    //     }
    //     else if(rem_li==3){
    //         $(this).find('li:nth-last-child(-n+3)').css({"border-bottom": "none"});
    //     }
    //     else if(rem_li==0){
    //         $(this).find('li:nth-last-child(-n+4)').css({"border-bottom": "none"});
    //     }
    // });

    // Check coc cookie and set value login link
    var opCommUsername = $.cookie('CCS_UserDisplayName');
    if ((typeof opCommUsername == 'undefined' || opCommUsername == "") && 
        (typeof isCOCTagAvailable != 'undefined' && isCOCTagAvailable) && 
        (typeof isCLSTagAvailable != 'undefined' && !isCLSTagAvailable)) {
        $('.userLogin').css('display', 'block');
        $('.userLogout').css('display', 'none');
    } else if ((typeof opCommUsername != 'undefined' || opCommUsername != "") && 
        (typeof isCOCTagAvailable != 'undefined' && isCOCTagAvailable) && 
        (typeof isCLSTagAvailable != 'undefined' && !isCLSTagAvailable)) {
        $('.userLogout').css('display', 'block');
        $('.userLogin').css('display', 'none');
    }
    
    // Check cls  cookie and set value login link
    var clsUsername = $.cookie('CLS_UserDisplayName');
    if ((typeof clsUsername == 'undefined' || clsUsername == "" || clsUsername == null || clsUsername == 'null') && 
        (typeof isCLSTagAvailable != 'undefined' && isCLSTagAvailable) &&
        (typeof isCOCTagAvailable != 'undefined' && !isCOCTagAvailable)) {
        $('.userLogin').css('display', 'block');
        $('.userLogout').css('display', 'none');
    } else if ((typeof clsUsername != 'undefined' || clsUsername != "" || clsUsername != null || clsUsername != 'null') && 
        (typeof isCLSTagAvailable != 'undefined' && isCLSTagAvailable) &&
        (typeof isCOCTagAvailable != 'undefined' && !isCOCTagAvailable)){
        $('.userLogout').css('display', 'block');
        $('.userLogin').css('display', 'none');
    }
    $(".secondary-navigaiton li.products .wrap[data-cta-button='true']").children('a').addClass('cta').addClass('gloss-blue').addClass('white_text');
});
$(window).resize(function() {
    //preventing secondary nav append in devices
    if ($(window).width() > 1024) {

        var maxwidth = 0;
        $('#site-navigation > ul > li').each(function() {
            maxwidth += $(this).outerWidth();
        })

        if ($(window).width() > maxwidth) {
            $('#site-navigation ul').css({
                width: maxwidth + 10 + "px",
                margin: '0 auto'
            })
        }
    }
});

$(window).load(function() {
    //preventing secondary nav append in devices
    if ($(window).width() > 1024) {

        var maxwidth = 0;
        $('#site-navigation > ul > li').each(function() {
            maxwidth += $(this).outerWidth();
        })

        if ($(window).width() > maxwidth) {
            $('#site-navigation ul').css({
                width: maxwidth + 10 + "px",
                margin: '0 auto'
            })
        }
    }
});

$(function(){

    $('#site-navigation > ul > li > .wrap > a').each(function(){
        var linkHref = $(this).attr('href');
        var linkText = $(this).text();
        var $newListItem = $('<li class="secondary-nav-li secondary-nav-l3-item"><a href="'+linkHref+'">'+linkText+'</a></li>');
        if(linkHref != '#'){
            $(this).closest('.wrap').find('.subnav > .container > ul').prepend($newListItem);
        }
    });

    $('#site-navigation > ul > li > .wrap > a').on('click', function(e) {
        if ($(this).closest('.wrap').find('.subnav > .container > ul').length > 0) {
            e.preventDefault();
            if(! $(this).closest('.wrap').hasClass('menu-open') ) {
                if($('#site-navigation > ul > li > .wrap').hasClass('menu-open')) {
                    $('#site-navigation > ul > li > .wrap').removeClass('menu-open');
                    $('#site-navigation > ul > li > .wrap > .subnav').removeClass('menu-open');
                }
            } 
            $(this).closest('.wrap').toggleClass('menu-open');
            $(this).closest('.wrap').find('.subnav').toggleClass('menu-open');
        }
    });

    $('body').on('click', function(e){
        var $this = $(this);
        var $cachetarget = $(e.target);
        if(!$cachetarget.parent().parent().parent().hasClass('sec-nav-li')){
            $('#site-navigation > ul > li > .wrap').removeClass('menu-open');
            $('#site-navigation > ul > li > .wrap > .subnav').removeClass('menu-open');
        }
    });

});
// $(function(){
// 	$(window).on('scroll', function(){

// 		// breadcrumb will only stick for desktop
// 		if ( $(window).width() > 1024 && $('.breadcrumb-navigation').length > 0) {

// 			// get the height of top sticky element
// 			var topHeight = 0;

// 			if( $('.secondary-navigaiton').length > 0 ) {
// 				topHeight = $("header.sticky").height() + $(".secondary-navigaiton").height()+"px";
// 			} else {
// 				topHeight = $("header.sticky").height() + "px";
// 			}
// 			// on scroll check the breadcrumb position and apply the position
// 			if( $(window).scrollTop() + $("header.sticky").height() + $(".secondary-navigaiton").height() >= $('.breadcrumb-navigation').offset().top ){

// 				$('.breadcrumb-navigation').css({
// 				    'position': 'fixed',
// 				    'top': topHeight,
// 				    'border-bottom': 'rgba(255, 255, 255, 0.4) 4px'
// 				});

// 				$('.breadcrumb-navigation').addClass('sticky-breadcrumb');

// 			} else {
// 				$('.breadcrumb-navigation').css({
// 				    'position': 'relative',
// 				    'top': 'auto',
// 				    'border-bottom': 'none'
// 				});
// 				$('.breadcrumb-navigation').removeClass('sticky-breadcrumb');
// 			}
// 		}
// 	});
// });

//set Cookie for BU specific group
if(localeConfArray.createContactGroupCookie) {
    $.cookie('contactGroup', localeConfArray.contactGroup, {path : '/'});
}

// getting global variable
function localeInformation() {
    //var localeInfo = [localeConfArray.akamaiRegion, localeConfArray.akamaiCountry, localeConfArray.akamaiLocale];
    
    return localeConfArray.searchCookieName;
}

function storageData() {
    var storage = {},
        _localeInfo = localeInformation(),
        currentStorageIndex = _localeInfo,
        searchHistory = $.cookie.getObj(currentStorageIndex);
  
        if(typeof searchHistory !== "undefined" && typeof searchHistory.sL !== "undefined"){
                $(".context-search ul.dropdown-menu li").each(function() {
                    var searchLabel = searchHistory.sL.toLowerCase().replace(' ', '-'),
                        activeitem = $(this).find('a').attr('id');

                    if (searchLabel == activeitem) {
                        storage = {
                            suggestQuerySearch: $(this).find('a').data('suggest-query-search'),
                            suggestUri: $(this).find('a').data('suggest-uri'),
                            searchQuery: $(this).find('a').data('search-query'),
                            suggestlabel: $(this).find('a').data('label')
                        }
                    }
                   

                })
             }
             
    return storage;

}

// Added for google re-captcha
var captchaflag=false;
var captchResponse='';
function captchAjax(){
    if(!captchaflag){
            return $.ajax({
            method:"GET",
            url:"/recaptcha?response=" + grecaptcha.getResponse(),
            dataType: "json",
            cache: false,
            //contact bug fix captcha added async: false
            async: false
        });
    }
}

// set cookies
function getLocaleInfo() {

    $.cookie.raw = true;

    var userDisplayName = $.cookie('CCS_UserDisplayName');
    var coc_materialListCount = $.cookie('CCS_MaterialListCount');
    var cls_userDisplayName = $.cookie('CLS_UserDisplayName');
    var cls_cartItemCount = $.cookie('CLS_CartItemCount');

    // *****************************************************************
    // **
    // **  Legacy cookies, no longer needed
    // **
    // *****************************************************************
    //
    // var clsRegion = $.cookie('CLS_region');
    // var clsLocale = $.cookie('CLS_locale');
    //
    //
    // if((typeof clsRegion == 'undefined' || typeof clsLocale == 'undefined') ||
    //     ((typeof clsRegion != 'undefined' && clsRegion != localeConfArray.clsRegion) ||
    //     (typeof clsLocale != 'undefined' && clsLocale != localeConfArray.clsLocale))) {
    //
    //     $.cookie('CLS_region', localeConfArray.clsRegion, {
    //         expires: 7,
    //         path: '/',
    //         domain: domainName
    //     });
    //     $.cookie('CLS_country', localeConfArray.clsCountry, {
    //         expires: 7,
    //         path: '/',
    //         domain: domainName
    //     });
    //     $.cookie('CLS_locale', localeConfArray.clsLocale, {
    //         expires: 7,
    //         path: '/',
    //         domain: domainName
    //     });
    //     $.cookie('CLS_culture', localeConfArray.clsCulture, {
    //         expires: 7,
    //         path: '/',
    //         domain: domainName
    //     });
    //
    // }
    //
    // $.cookie('CCS_region', localeConfArray.ccsRegion, {
    //     expires: 7,
    //     path: '/',
    //     domain: domainName
    // });
    // $.cookie('CCS_language', localeConfArray.ccsLanguage, {
    //     expires: 7,
    //     path: '/',
    //     domain: domainName
    // });


    $("#userDisplayName").hide();
    $("#materialListCount").hide();

    $('.touch .navs header nav.primary .site-nav ul li#userDisplayName').hide();
    $('.touch .navs header nav.primary .site-nav ul li#materialListCount').hide();


    $("#clsUserDisplayName").hide();
    $("#basketLink").hide();
    $("#quickOrderLink").hide();

    $('.touch .navs header nav.primary .site-nav ul li#clsUserDisplayName').hide();
    $('.touch .navs header nav.primary .site-nav ul li#basketLink').hide();
    $('.touch .navs header nav.primary .site-nav ul li#quickOrderLink').hide();
    
    if(!(typeof isCOCTagAvailable != 'undefined' && isCOCTagAvailable && typeof isCLSTagAvailable != 'undefined' && isCLSTagAvailable)){
        
        if (userDisplayName != '' && typeof isCOCTagAvailable != 'undefined' && isCOCTagAvailable && typeof userDisplayName != 'undefined') {
    
            // ajax call
            $.ajax({
                url: '/cornservice/decrypt',
                type: 'GET',
                dataType: 'html',
                data: {
                    userName: userDisplayName
                },
                success: function(data) {
    
                    $("#userDisplayName").show();
                    $("#userDisplayName a span").text(localeConfArray.welcomeText + ' ' + data);
                    $('.touch .navs header nav.primary .site-nav ul li#userDisplayName').show();
                    
                    if(typeof myMaterialListLink != 'undefined' && myMaterialListLink != '') {
                        $("#materialListCount").show();
                        if(coc_materialListCount != '' && typeof coc_materialListCount != 'undefined'){
                            $("#materialListCount a span").text(myMaterialList +" (" + coc_materialListCount + ")");
                        }else{
                            $("#materialListCount a span").text(myMaterialList);
                        }
                        $('.touch .navs header nav.primary .site-nav ul li#materialListCount').show();
                    }
    
                },
                error: function() {
                    console.log('error' + data);
    
                }
    
            });
        }
        
        if (typeof isCLSTagAvailable != 'undefined' &&  isCLSTagAvailable){
    
            $.ajax({
                url: '/cornservice/decrypt',
                type: 'GET',
                dataType: 'html',
                data: {
                    userName: cls_userDisplayName
                },
                success: function(data) {
                    
                    var l_showOrderNowLink = false;
                    
                    if(typeof cls_userDisplayName != 'undefined' && cls_userDisplayName != '' && cls_userDisplayName != null && cls_userDisplayName != 'null'){
                        $("#clsUserDisplayName").show();
                        $("#clsUserDisplayName a span").text(localeConfArray.welcomeText + ' ' + data);
                        $('.touch .navs header nav.primary .site-nav ul li#clsUserDisplayName').show();
                        
                        if(typeof myBasketLink != 'undefined' && myBasketLink != '') {
                            if(cls_cartItemCount != '' && typeof cls_cartItemCount != 'undefined'){
                                
                                $("#basketLink").show();
                                
                                var int_cls_cartItemCount = parseInt(cls_cartItemCount);
                                
                                if(int_cls_cartItemCount > 0){
                                    $("#basketLink a span").text(myCart + " (" + int_cls_cartItemCount + ")");
                                }else{
                                    $("#basketLink a span").text(myCart + " (" + cls_cartItemCount + ")");
                                }
                                
                                $('.touch .navs header nav.primary .site-nav ul li#basketLink').show();
                            }else{
                                $("#basketLink").show();
                                $("#basketLink a span").text(myCart + " (0)");
                                $('.touch .navs header nav.primary .site-nav ul li#basketLink').show();
                            }
                        }
                        
                        l_showOrderNowLink = true;
                    }else{
                        if(typeof myBasketLink != 'undefined' && myBasketLink != '') {
                            if(cls_cartItemCount != '' && typeof cls_cartItemCount != 'undefined'){
                                
                                var int_cls_cartItemCount = parseInt(cls_cartItemCount);
                                
                                if(int_cls_cartItemCount > 0){
                                    $("#basketLink").show();
                                    $("#basketLink a span").text(myCart + " (" + int_cls_cartItemCount + ")");
                                    $('.touch .navs header nav.primary .site-nav ul li#basketLink').show();
                                }
                            }
                        }
                    }
                    
                    if(l_showOrderNowLink && typeof myOrderNowLink != 'undefined' && myOrderNowLink != '') {
                        $("#quickOrderLink").show();
                        $("#quickOrderLink a span").text(orderNow);
                        $('.touch .navs header nav.primary .site-nav ul li#quickOrderLink').show();
                    }
                    
                },
                error: function() {
                    console.log('error' + data);
    
                }
    
            });
    
        }
    }
    
    return localeConfArray.searchCookieName;

}


(function() {

    $(window.document).on('click', '.tabs .nav-inner li a', function(e) {
        e.preventDefault();
        $('.footable').trigger('footable_initialize');

        $('.module-story-snippet-visual-text .item-image').removeAttr('style');
        
        setTimeout(function() {
            var visualText = $('.module-story-snippet-visual-text .tab-pane').width()/2,
              vTaspectSize = resizeRendition(visualText, 1);

              $('.module-story-snippet-visual-text .item-image').css('height', parseInt(vTaspectSize));
              $('.module-story-snippet-visual-text .story .content .item-image .story-row').css('height', parseInt(vTaspectSize)/2);
              $('.module-story-snippet-visual-text .item-image').parents(".carousel").css('height', parseInt(vTaspectSize));
             }, 100);
        if($(window).width()>767) {
            $('.module-story-snippet-visual-text .slick-slide').each(function(){
                $(this).find('.table-container').outerHeight($(this).parents('.carousel').height() - $(this).find('.graph-text').outerHeight());
            });
        }
    });


    $(window.document).on('click', '#myModal .close, .modal', function(e) {
        // Prevent this logic on Asset Share modals
        if ($(this).hasClass('cmp-modal')) {
            return true;
        }

        if (!$(this).hasClass('modal--okta')) {
            if ($('html').hasClass('ie8')) {
                $('body').css('padding-right', '');
            }

            $('#myModal, .modal-backdrop').remove();
            $('#myModal').remove();
            $('#modelbox').attr('src', "");
            $('#myModal').modal('toggle');
            $('body').removeClass('modal-open');
            e.stopImmediatePropagation();
            e.preventDefault();
            e.stopPropagation();
        }
    });

    // display model box on click
    $(window.document).on('click tap', '.video-modal-launch-wrapper, .modelbox', function(e) {
        // code added for gsa video click handler
        var modelBox = $(e.currentTarget).find('.modelbox');
        if ($(e.currentTarget).hasClass('modelbox')) {
            modelBox = $(e.currentTarget);
        }
        
        var videoTitle = $(modelBox).data('video-title') || "",
            videoType = $(modelBox).data('video-type') || "";

        if (typeof dataLayer != 'undefined') {
            dataLayer.push({
                'VideoTitle': videoTitle,
                'VideoType': videoType
            });
        }

        var $this = $(modelBox);

        $('#myModal').remove();
        var remote = $this.data('load-remote');
        // code added for gsa video click handler ends

        function qs(key, url) {
            var vars = [], hash;

            if (!url) return;

            var hashes = url.slice(url.indexOf('?') + 1).split('&');
            for (var i = 0; i < hashes.length; i++) {
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
            }

            return vars[key];
        }

        var resourceLibraryURL = decodeURIComponent(qs("videoBaseUrl", remote))||"//csmedia.corning.com/opcomm/Resource_Documents/videos_rl/";
        var tempResourceLibraryURL = resourceLibraryURL.split("//");
        if(tempResourceLibraryURL[0] != "http:") {
            tempResourceLibraryURL[0] = "http:";
            resourceLibraryURL = tempResourceLibraryURL.join("//");
        }
        var videoId = qs("id", remote) || "";
        var videoType = qs("type", remote) || "";

        if(videoType == 'flv' && (remote.indexOf('catalog.corning.com') > -1 || remote.indexOf('catalog2.corning.com') > -1 )){
                var videourl = (decodeURIComponent(qs("playerUrl", remote))||"//catalog.corning.com/opcomm/catalog/VideoPlayer.swf?autostart=true&file=") + encodeURIComponent(resourceLibraryURL) + videoId + '.flv';
                var tempVideourl = videourl.split("//");
                if(tempVideourl[0] != "http:") {
                    tempVideourl[0] = "http:";
                    videourl = tempVideourl.join("//");
                }
               window.open(videourl);

        }else{

            if (remote) {
                $('body').append('<div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
                    '<div class="modal-dialog">' +
                    '<div class="modal-content">' +
                    '<div class="modal-header">' +
                    '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
                    '</div>' +
                    '<div class="modal-body">' +
                    '<iframe id="modelbox" width="100%" height="300" src="' + remote + '" allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>');
                $('#myModal').modal();
                if ($(e.currentTarget).closest('.module-webinar-tile').length) $('#myModal').addClass('webinar-modal-popup');
                handleModalPosition();
            }
        }
    });

    function handleModalPosition() {
        var $dialog = $(".modal-content");
        var offset = ($(window).height() - $dialog.outerHeight()) / 2;

        if(offset < 0) {
            $dialog.css("margin-top", 30);
        } else {
            $dialog.css("margin-top", offset);
        }
    }

    $(window.document).on('click', function(e) {
        var target = e.target.className,
            _primaryNav = $('header nav.primary'),
            searchIcon = $('header .navbar-search-cta .fa-search, header .searchbtn .fa-search ');

        if (($(e.target).parents().index($('nav.primary')) > -1) || ($(e.target).parents().index($('.navbar-search-cta')) > -1)) {

            if (((target.indexOf('searchbtn') > -1) || (target.indexOf('fa-search') > -1)) && !$(e.target).closest('.search-inline-icon').length) {

                searchIcon.hasClass('close-icon') ? searchIcon.removeClass('close-icon') : searchIcon.addClass('close-icon');

                if ($('.search-input').val() != "") {
                    $('.search-form button').removeAttr('disabled', 'disabled').removeClass('disable');
                    $('#searchQuery').val($('.search-input').val());
                }

                // Analytics changes : to modify the Analytics-On-SiteSearch class in searchbtn on click of search icon
                var searchIconParent = $(searchIcon).parent();

                if ($(searchIconParent).hasClass("searchbtn")) {
                    searchIcon.hasClass('close-icon') ? $(searchIcon).parent().removeClass('Analytics-On-SiteSearch') : $(searchIcon).parent().addClass('Analytics-On-SiteSearch');
                }

                if ($('.search-box').is(':visible')) {
                    $('.search-box').hide();
                    _primaryNav.removeClass('search-box-on');
                    $('.navs header').removeClass('visbilebg');
                } else {
                    $('.search-box').show();
                    $('.search-input').focus();
                    _primaryNav.addClass('search-box-on');
                    $('.navs header').addClass('visbilebg');
                    $('.search-input.tt-input').trigger("focus");
                }
            }
        } else {
            searchIcon.removeClass('close-icon')
            $('.search-box').hide();
            $('html').removeClass('disable-scroll').removeClass('search-active');
        }

        if ($(e.target).parents().index($('.subcategory')) < 0 && $(e.target).parents().index($('.filterItem')) < 0) {
            if ($('.facet-list').is(':visible')) {
                $('.facet-list').hide();
                $('#facetfilters').find('a').removeClass('minus');
            }
        }
    })

    /**search Storage Handler
     * implemented while working on locale specific storage**/
    function searchStorageHandler(expiredHour) {
        var _self = this;

        _self.storrageIndex = '';

        _self.expiredHour = expiredHour == undefined ? 24 : expiredHour;


        _self.init = function() {

            var localeInfo = getLocaleInfo(),
                nonCookiedata = "";

            _self.storrageIndex = localeInfo;

            /*
                * Extend Coooke to achieve object storage
                *
                * (1) setObj - set object to cookie based on index
                * (2) getObj - get object from cookie from index

                * call function eg:
                *
                * setObj
                * $.cookie.setObj('indexValue',{<objects>});
                *
                * getObj
                *
                * $.cookie.getObj('indexValue');
                *
                *
                */
            $.extend(true, $.cookie, {

                setObj: function(key, obj) {
                    $.cookie(key, JSON.stringify(obj), {
                        expires: 1,
                        path: '/',
                        domain: domainName
                    });

                    nonCookiedata = obj;
                },
                getObj: function(key) {

                    if(typeof $.cookie(key) !== 'undefined'){
                        return (typeof $.cookie(key) === 'string') ? JSON.parse($.cookie(key)) : $.cookie(key);
                    }else{
                        return nonCookiedata;
                    }
                    
                }

            });


            /**
             * Extend Storage API to store object
             */
            // Storage.prototype.setObj = function(key, obj) {
            //   //  console.log(obj)
            //     return this.setItem(key, JSON.stringify(obj))
            // }
            /**
             * Extend Storage API to retrive object
             */
            // Storage.prototype.getObj = function(key) {
            //     return JSON.parse(this.getItem(key))
            // }

            _self.updateStorage();
            _self.setSearchInfoStorage();


        };
        /**
         * Update storage info on change of search criteria
         */
        _self.updateStorage = function() {
            var menu = $('ul.dropdown-menu');
            $(".dropdown-menu").on('click', 'li a', function() {
                _self.setSearchInfoStorage($(this));
            });
        };
        _self.setSearchInfoStorage = function(active) {

            var isDefaultItem = (typeof active == 'undefined') || (active == undefined) ? true : false,
                menu = $('ul.dropdown-menu'),
                activeItem = isDefaultItem ? menu.find('li.selected a') : active,
                suggestUri = activeItem.data('suggest-uri'),
                suggestQuerySearch = activeItem.data('suggest-query-search'),
                searchQuery = activeItem.data('search-query'),
                suggestlabel = activeItem.attr('id'), //activeItem.data('label'),
                searchInfo = '',
                _history = '',
                defaultLabel = activeItem.attr('id'), //activeItem.text(),
                isStorageExpired = false,
                recentItems = null;


            /**
             * Get search info History
             * Incase search history has value two scenario will come
             *
             * (1) Get default label from history/ o/w will be from menu selected list
             * (1) If storage time is expired
             *     then update with default label and new time stamp
             * (2) If storage time is not expired
             *     then update with current value and new time stamp
             *
             *
             *
             *
             */


            _history = $.cookie.getObj(_self.storrageIndex);



            if (_history != undefined && _history != null && _history.dL != undefined && _history.dL != null) {

                // isStorageExpired = _self.isStorageExpired(_history.cD);
                defaultLabel = _history.dL;

                if (isDefaultItem) {
                    // suggestUri = _history.sU;
                    // suggestQuerySearch = _history.sQs;
                    // searchQuery = _history.sQ;
                    suggestlabel = _history.sL;
                    recentItems = _history.rSi;
                }


                // if(isStorageExpired){
                //      suggestlabel = _history.dL;
                //      recentItems = null;
                // }
                 recentItems = _history.rSi ;
            }
            searchInfo = {
                // sU:suggestUri,
                // sQs:suggestQuerySearch,
                // sQ:searchQuery,
                sL: suggestlabel,
                // createdDate: new Date(),
                dL: defaultLabel,
                rSi: recentItems
            };


            /**
             * Set menu option with current value of suggested label
             */

            /**
             * Set search information in local Storage based on
             * locale/country/region
             * Index key will be region_country_locale
             *
             *
             */
            _self.setSelectOption(suggestlabel);

            $.cookie.setObj(_self.storrageIndex, searchInfo);

        };
        _self.setSelectOption = function(suggestlabel) {
            var menuOption = $('ul.dropdown-menu li');
            menuOption.removeClass('selected');
            menuOption.each(function() {
                var a = $(this),
                    text = a.find('a').attr('id');
                if (text == suggestlabel) {
                    a.addClass('selected');
                }
            });

            // var menuOption = $('ul.dropdown-menu li');
            // menuOption.removeClass('selected');
            // menuOption.each(function(){

            //     var a = $(this),
            //         text = a.text();
            //     if(a.find('a').attr('id') == defaultSearchId){

            //       $('ul.dropdown-menu li').removeClass('selected');
            //    a.addClass('selected');
            //     }else{
            //       if(a.find('a').attr('id') == suggestlabel){
            //         $('ul.dropdown-menu li').removeClass('selected');
            //           a.addClass('selected');
            //       }
            //     }
            // });

        };

        _self.isStorageExpired = function(timeSaved) {

            var dateCreated = new Date(timeSaved),
                currentDate = new Date()
            hourDiff = (currentDate - dateCreated) / (3600000);
            return _self.expiredHour <= hourDiff;

        };


    }

    var storageHandler = new searchStorageHandler();
    storageHandler.init();

    /**
     * Search Storage Handler end
     */

    var selectedtxt = $('.dropdown-menu li.selected').text();
    $('.dropdown-toggle').find('.options').html(selectedtxt);
    $(document.body).on('click', '.dropdown-toggle', function(event) {
        var $target = $(event.currentTarget);

        $('.dropdown-menu li').removeClass('selected');
        $target.addClass("selected");
        $target.closest('.btn-group')
            .find('[data-bind="label"]').text($target.text())
            .end()
            .children('.dropdown-toggle').dropdown('toggle');
        return false;
    });

    $('.close-search').on('click', function() {
        $('.search-box').hide();
    })

    // fix for 2a 2b hide controls
    function getInternetExplorerVersion() {
        var rv = -1;
        if (navigator.appName == 'Microsoft Internet Explorer') {
            var ua = navigator.userAgent;
            var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
            if (re.exec(ua) != null)
                rv = parseFloat(RegExp.$1);
        }
        return rv;
    }

    function checkVersion() {
        var ver = getInternetExplorerVersion();

        if (ver > -1) {
            if (ver <= 10) {
                $('.banneroverlay').addClass("lt-ie11");
            }
        }
    }
    checkVersion();


    //toggle feedback form in search page
    // $('.userFeedback').addClass('hideUserFeedback');
    $(window.document).on('click', '.userFeedback a', function() {
        var userAgent = navigator.userAgent.toLowerCase(),
            iosFlag = false;
        if ((userAgent.indexOf("iphone") > -1) || (userAgent.indexOf("ipad") > -1) || (userAgent.indexOf("ipod") > -1)) {
            iosFlag = true;
        }
        if ($('.userFeedback').hasClass('hideUserFeedback')) {
            $('.userFeedback').removeClass('hideUserFeedback').addClass('showUserFeedback');
            if($('.g-recaptcha').html() == '')
            {
                grecaptcha.render( $('.g-recaptcha')[0], { sitekey : $('.g-recaptcha').data('sitekey') });
            }
            if(iosFlag) {

                $('body').css('margin-top', -window.scrollY).data('scrollPosition', window.scrollY);
                $('html').css({'position' : 'fixed',
                                'top' : 0,
                                'height': $(window).innerHeight(),
                                'overflow': 'hidden'
                });
                if(window.innerWidth<767) {
                    $('.userFeedback input').bind('focus', function(){
                        $('.userFeedback .form-style').css({'padding-bottom' : 40});
                    });
                    $('.userFeedback input').bind('blur', function(){
                        $('.userFeedback .form-style').css({'padding-bottom' : ''});
                    });
                }

            }
        } else {
            $('.userFeedback').removeClass('showUserFeedback').addClass('hideUserFeedback');
            if(iosFlag) {

                $('html').css({'position' : '',
                            'top' : '',
                            'height': '',
                            'overflow': ''
                });

                $('body').css('margin-top', '');
                window.scrollTo(0, $('body').data('scrollPosition'));
                if(window.innerWidth<767) {
                    $('.userFeedback input').unbind('focus');
                    $('.userFeedback input').unbind('blur');
                }

            }
        }
        if ($(window).height() < 479) {
            $('.feedbackForm').height($(window).height() - 60);
        }

        if ($(window).width() < 767) {
            if ($('.showUserFeedback').length > 0) {
                $('body').css('overflow', 'hidden');
            } else {
                $('body').css('overflow', 'auto');
            }
        }
    });

    // $(window).smartresize(function(e) {
    //     if ($(window).height() < 479) {
    //         $('.feedbackForm').height($(window).height() - 60);
    //     }
    // });

    $(window).on('load', function(e) {
        if ($(window).height() < 479) {
            $('.feedbackForm').height($(window).height() - 60);
        }
    });

})();

  // set playicon position in center
    function positionPlayIcon() {

        $('.modelbox').each(function() {
            var imageSize = $(this).find('> img');
            var modelparentwidth = $(imageSize).outerWidth(true),
            modelparentheight = $(imageSize).outerHeight(true),
            playIconwidth = $(this).find('.playicon').outerWidth(true),
            playIconheight = $(this).find('.playicon').outerHeight(true);
        $(this).find('.playicon').css('left', (modelparentwidth / 2) - (playIconwidth / 2));
        $(this).find('.playicon').css('top', (modelparentheight / 2) - (playIconheight / 2));

        })

    }

    $(window.document).on('click', function(e) {
        positionPlayIcon();
    })

    $(window).resize(function(e) {
        setTimeout(function() {
            positionPlayIcon();
        }, 500);      
    })
    $(window).on('load', function(e) {
        positionPlayIcon();

        setTimeout(function() {
            positionPlayIcon();
        }, 1000);
    })
    $(document).ready(function() {
        setTimeout(function() {
            positionPlayIcon();
        }, 500);
        setTimeout(function() {
            positionPlayIcon();
        }, 1000);
        setTimeout(function() {
            positionPlayIcon();
        }, 2000);
        $(window).scroll(function(){
            positionPlayIcon();  
        })
    });


//feedback form validation

function feedbackForm(event) {
    
    event.preventDefault ? event.preventDefault() : event.returnValue = false;

    var email = $('.validEmail'),
        captcha = $('#googleReCaptchaWrap'),
        errorContainer = $('.feedbackForm-error'),
        captchaInvalid = false,
        emailExp = /^([A-Za-z0-9]+[._-]?)*[A-Za-z0-9]+@([A-Za-z0-9]+[.-]?)*[A-Za-z0-9]+.[A-Za-z]{2,4}$/;

    
    // email field validation
    if (email.val() != "") {

        // email field format validation
        if (!email.val().match(emailExp)) {
            $('.errormsg').css('display', 'block');
            $(".errormessage").removeClass("errormessage");
            email.focus().addClass('errormessage');
            $('.errormsg').html(errorContainer.find('.email-error').html());
            return false;
        }
    }

    // recaptcha validation
    if( $.cookie("user_country_code") && $.cookie("user_country_code").toLowerCase() == "cn" ){
        if( !$(".cn-recaptcha .chkbox").hasClass("checked") ) {
            captchaInvalid = true;
        }
    } else {

        if(!captchaflag){
            captchaResponse=captchAjax();
            captchaResponse.success(function (response) {
              captchaResponseSucess=response.success;
              
               if(!captchaResponseSucess){
                    $('.errormsg').css('display', 'block');
                    $(".errormessage").removeClass("errormessage");
                    $('.errormsg').html(errorContainer.find('.captcha-error').html());
                    captchaInvalid = true;
                }
                else {
                    captchaInvalid = false;
                }
            });
        }
        
    }

    if(captchaInvalid) {
        $('.errormsg').css('display', 'block');
        $(".errormessage").removeClass("errormessage");
        $('.errormsg').html(errorContainer.find('.captcha-error').html());
        return false;
    }
    $.ajax({
        type: 'POST',
        dataType: 'html',
        url: '/cornservice/searchfeedbackservlet',
        data: $('#searchfeedbackform').serialize(),
        success: function(data) {
            if (data != null && data == 'true') {
                $('.userFeedback .feedbackSubmit').addClass('success');
            } else {
                $('.userFeedback .feedbackSubmit').addClass('error');
            }
        },
        error: function(data) {
            $('.userFeedback .feedbackSubmit').addClass('error');

        }
    });
}
$(window).load(function(){
    $('.userFeedback .feedbackSubmit .closeAfterSubmit, .userFeedback .openFeedback a').click(function(){

        if($('.userFeedback .feedbackSubmit').hasClass('error') || $('.userFeedback .feedbackSubmit').hasClass('success')){
            $('.userFeedback .feedbackSubmit').removeClass('success error');
            $('#searchfeedbackform').trigger('reset');
            grecaptcha.reset();
            $('#searchfeedbackform .errormsg').hide();
            $('#searchfeedbackform .errormessage').removeClass('errormessage');
        }
                    
    });
});

$(document).ready(function() {
    if (navigator.userAgent.toLowerCase().indexOf("iphone") > -1){
        $(window.document).on('click', '.openFeedback a', function(){
            $('.captcha-parent').show();
            $(window.document).on("DOMSubtreeModified", function() {
                if($('.gc-bubbleDefault').length){
                    $('.gc-bubbleDefault').parent().addClass('captcha-parent');
                    $(window.document).off("DOMSubtreeModified");
                }
            });
        });
        $('.userFeedback .close-feedback-cta').click(function(){
            $('.captcha-parent').hide();
        });
    }
});

/* Image rendition changes */
function resizeRendition(elm, aratio){
        return elm / aratio
}

function resizeComponent() {
    //18A Image Gallery
    var photoGallery = $('.module-photo-gallery .gallery li').find('img').width(),
        pGalleryAS = resizeRendition(photoGallery, 1.92);
        $('.module-photo-gallery .gallery-slider').css('height', parseInt(pGalleryAS));

    var photoGalleryThumb = $('.module-photo-gallery .viewport li').find('img').width(),
        pGalleryThumbAS = resizeRendition(photoGalleryThumb, 1.92);
        $('.module-photo-gallery .viewport li').css('height', parseInt(pGalleryThumbAS));
}

$(window).resize(resizeComponent); 
$(window).bind('load', resizeComponent);

$(window).bind('load', function(){  
    $('html').addClass('loading'); 
    setTimeout( function(){ $('html').removeClass('loading'); }, 100); 
});

$( document ).ready(function() {
    var videoWrapper = $('.video-wrapper');
    if(videoWrapper.length) {
        videoWrapper.each(function(){
            var actualHeight = $(this).find('.banneroverlay').outerHeight();
            var navHeight = 0;
            if($('html').hasClass('no-touch')) {
                navHeight = $('.navs header').height();
            }
            else {
                navHeight = 0;
            }
             $(this).find('.item-text').each(function() {
                var heightOffset = (actualHeight - navHeight - $(this).outerHeight())/2;
                $(this).css({'top': heightOffset+navHeight});
            });

            $(this).find('.video-playing').css('height', $(this).height());
        });
    }
});

$( window ).resize(function() {
    if($('html').hasClass('ie8')){
            $(window).unbind('resize');
    }
});


 (function(){
    window.domainName = window.domainName||'.corning.com';
    window.searchResultsCount = null;
})();

$(document).ready(function(){
    function transformBannerHomepage() {
        $('.module-story-banner-homepage img').each(function(){
            if($(this).css('-webkit-transform')){
                $(this).css('-webkit-transform', 'translate3d(0px, 0px, 0px)');
            } else{
                $(this).css('top', '0px');
            }
        });
    }

    if($('#showZipcode .zipcode').length > -1) {
        var $input = $('#showZipcode .zipcode');
        $input.keyup(function(e) {
            var max = 10;
            if ($input.val().length >= max) {
                $input.val($input.val().substr(0, max));
            }
        });
    }


    if($('html').hasClass('ie8')){
        $('.module-story-banner-homepage').find('.item').append('<div class = "banner-top-gradient"></div>');
        $('.module-story-banner-standard').find('.item').append('<div class = "banner-top-gradient"></div>');
        $('.module-story-banner-small').append('<div class = "banner-top-gradient"></div>');
    }

    if ($('.secondary-navigaiton').length) {
        $('.module-story-banner-standard, .module-story-banner-small').removeClass('sec-nav-absent');
    }

    $(window).resize(function(){
        if ($(window).width() > 1023) {
            transformBannerHomepage();
        }
    });

    $('.secondary-nav-mobile li a, #primary-nav-mobile li a').on('click', function(){
        if ($(this).hasClass('overview-device')) {
            $.cookie('activepage', "true", { path: '/' });
        } else{
            $.cookie("activepage", "false", { path: '/' });
            $.removeCookie("activepage", { path: '/' });
        }
    });

    var activepage = $.cookie('activepage');

    if(activepage !== "" && activepage){
        $('html').removeClass('menu-active');
    }

    transformBannerHomepage(); // resize on load
});

$(window).load(function(){
    $('.ie8 nav.primary').show();
});


(function scrollToAnchors(){
    var $window = $(window);
    var $anchor = $('.anchor');
    var $root = $('html, body');
    var anchors = [];
    var offsetHeight = null;
    var breadcrumbNavHeight = null;
    var secondaryNavHeight = null;
    var hash = window.location.hash.substr(1);

    if($anchor){
        $window.on('resize, load', getHeights);

        $anchor.each(function(){
            $this = $(this);
            anchors.push($this.attr('id'));
        });

        $.each(anchors, function(i, val){
            $('a[href="#'+val+'"]').on('click', function(e){
                e.preventDefault();
                var totalOffset = offsetHeight + breadcrumbNavHeight + secondaryNavHeight;
                if (hash.length == 0) { return }
                var $target = $('#'+ hash + ', a[name='+ hash +']');
                if ($target.length > 0) {
                    $root.animate({
                        scrollTop:$target.first().offset().top - totalOffset
                    }, 0);
                }
            });
        });

        if(hash){
            $window.on('load', function(){  
                var totalOffset = offsetHeight + breadcrumbNavHeight + secondaryNavHeight;             
                function toHashOnLoad(){
                    if (hash.length == 0) { return }

                    // If the hash is not possibly a valid selector, return.
                    if (hash.indexOf("/") >= 0) { return; }

                    var $target = $('#'+ hash + ', a[name='+ hash +']');
                    if ($target.length > 0) {
                        $root.animate({
                            scrollTop: $target.first().offset().top - totalOffset
                        }, 0);
                    }
                }
                setTimeout(toHashOnLoad, 100);
            });
        }
    }

    function getHeights(){
        offsetHeight = $('.navs').find('header').height();
        secondaryNavHeight = $('.secondary-navigaiton.topSticky').height();
        breadcrumbNavHeight = $('.breadcrumb-navigation.sticky-breadcrumb').height();
    }
})();

$(document).ready(function() {
    if ($.cookie("User_Portal_Access") == "true") {
        $(".header_portalLink").removeClass("hidden");
    }
});


var corningFooter = {
    init : function() {
        var screenWidth = $(document).width(),
        footer = '.footer',
        footerSocialList = $(footer).find('.social'),
        selectedClass = 'selected';

        // change css in mobile device
        $('footer nav ul.horizontal li.social > a').each(function() {
            var isShowMenuExist = $(this).siblings('.showMenu').find('ul').length;
            if(isShowMenuExist > 0){
                $(this).removeClass('removeArrow');
            } else {
                $(this).removeClass('removeArrow').addClass('removeArrow');
            }
        });
        $(footerSocialList).removeClass('selected');
        $(footer).find('.corning-ss').on('click', function (event) {
            event.preventDefault();
        });

        //Display Flyout menu
        if (screenWidth > 1024) {
            $(footerSocialList).on('mouseenter', function (event) {
                $(this).addClass(selectedClass);
                $(this).find('.corning-ss').attr('aria-expanded', 'true');
            });

            $(footerSocialList).on('mouseleave', function (event) {
                $(this).removeClass(selectedClass);
                $(this).find('.corning-ss').attr('aria-expanded', 'false');
            });

            $(footerSocialList).on('keyup', function (event) {
                if(event.key === 'Enter' || event.key === ' ') {

                    if ($(this)[0].classList.contains('selected') === false) {
                        var parentList = $(this)[0].parentElement;

                        for(i = 0 ; i < parentList.children.length; i++) {
                            $(this)[0].parentElement.children[i].classList.remove('selected');
                            $(parentList.childNodes).find('.corning-ss')[i].setAttribute('aria-expanded', 'false');
                        }
                    }

                    $(this).find('.corning-ss').attr('aria-expanded',
                        $(this).find('.corning-ss').attr('aria-expanded') === 'false' ? 'true' : 'false'
                    );

                    $(this).toggleClass(selectedClass);
                }
            });
        } else {
            $(footer).on('click', function (event) {
                var currentDoc = $(event.target).parents('li');
                if ($(event.target).closest('.social').length) {
                    currentDoc.siblings('li').removeClass(selectedClass).end().addClass(selectedClass);
                } else {
                    $(footerSocialList).removeClass(selectedClass);
                }
            });
        }
    }
}
corningFooter.init();
$(window).on('resize', corningFooter.init);

//Updating datalayer variables for analytics based on cookie values
var cookiedata = $.cookie();
if (typeof dataLayer !== 'undefined') {
    var $isPortalPage = $('input[name="is-portal-page"]');
    if ($isPortalPage !== 'undefined' && $isPortalPage.val() !== 'undefined' && $isPortalPage.val() === 'true') {
        delete dataLayer[0]['event4'];
        delete dataLayer[0]['UserType-Level2'];
    } else if (typeof cookiedata.CCS_UserDisplayName !== 'undefined' && typeof cookiedata.CLS_UserDisplayName !== 'undefined') {
        if (cookiedata.CCS_UserDisplayName !== "" && cookiedata.CLS_UserDisplayName !== "") {
            dataLayer[0]['LoginState'] = 'LoggedIn';
            dataLayer[0]['UserType'] = 'ProspectiveCustomer';
            dataLayer[0]['event4'] = 'LoginSuccessful';
            dataLayer[0]['UserType-Level2'] = 'Both';
        }
    } else if (typeof cookiedata.CCS_UserDisplayName !== 'undefined' && cookiedata.CCS_UserDisplayName !== ""
            && (typeof cookiedata.CLS_UserDisplayName === 'undefined' || cookiedata.CLS_UserDisplayName === "")) {
        dataLayer[0]['LoginState'] = 'LoggedIn';
        dataLayer[0]['UserType'] = 'ProspectiveCustomer';
        dataLayer[0]['event4'] = 'LoginSuccessful';
        dataLayer[0]['UserType-Level2'] = 'COC';
    }
    else if (typeof cookiedata.CLS_UserDisplayName !== 'undefined' && cookiedata.CLS_UserDisplayName !== ""
            && (typeof cookiedata.CCS_UserDisplayName === 'undefined' || cookiedata.CCS_UserDisplayName === "")) {
        dataLayer[0]['LoginState'] = 'LoggedIn';
        dataLayer[0]['UserType'] = 'ProspectiveCustomer';
        dataLayer[0]['event4'] = 'LoginSuccessful';
        dataLayer[0]['UserType-Level2'] = 'CLS';
    } else {
        delete dataLayer[0]['event4'];
        dataLayer[0]['UserType'] = 'Visitor';
        dataLayer[0]['LoginState'] = 'Anonymous';
        delete dataLayer[0]['UserType-Level2'];
    }


    //This code will be called when user clicks on email on Contact-Us Form.
    $('.analytics-email').on('click', function () {
        dataLayer.push({
            'Contact-Us Leads': 'LeadCompleted',
            'LeadMedia': 'Email'
        });
    });

    //This code will be called when user clicks on Call to on Contact-Us Form.
    $('.analytics-mobile').on('click', function () {
        dataLayer.push({
            'ContactUsLeadsClick': 'LeadCompleted',
            'LeadMedia': 'Mobile'
        });
    });

    //This will be called when user clicks on JobsMultitle People Soft link.
    $('.analytics-jourcompleted').on('click', function () {
        var prospectiveId = '';
        if (!!$.cookie('ProspectiveEmployeeId')) {
            prospectiveId = $.cookie('ProspectiveEmployeeId')
        } else {
            prospectiveId = Math.floor(Math.random() * 2000000) + (new Date().getTime()).toString();
            $.cookie('ProspectiveEmployeeId', prospectiveId, {path: '/'});
        }

        dataLayer.push({
            'ProspectiveEmployee': 'JourneyComplete',
            'ProspectiveEmployeeId': prospectiveId
        });
    });

    //Event-5 var to be updated for all onload of third party forms
    $(document).ready(function () {
        if ($('.module-job-mulitile').length > 0) {
            dataLayer[0]['ProspectiveEmployee'] = 'JourneyStart';
        }
        if ($('.analytics-errorpage-404').length > 0) {
            dataLayer[0]['Error'] = '404';
        }
        $('body').append('<script type="text/plain" class="cc-onconsent-social" src="//www.brighttalk.com/clients/js/embed/embed.js" async></script>');
    });

    $('.analytics-eventbrite-section').on('click', function () {
        dataLayer.push({
            'event6': 'EventBrite-Register-Now'
        });
    });

    //Code for analytics social share component on click of icons
    $('.Analytics-Social-Share').on('click', function () {
        var socialShare = $(this).data('social-share');
        dataLayer.push({
            'event8': 'SocialSharing',
            'SocialChannel': socialShare
        });
    });

    //Code added for analytics social click  in footer
    $('.Analytics-Social').on('click', function () {
        var socialChannel = $(this).data('footer-social') || "";
        dataLayer.push({
            'event8': 'SocialOnClick',
            'SocialChannel': socialChannel
        });
    });

    // code added for analytics social click  in LOGO
    // var logoText = $('.navbar-logo').attr('href') +"#Home";
    // $('.navbar-logo').attr('href',logoText)
    // $('.navbar-logo').on('click',function(){
    //     var logoHashValue= location.hash.slice(1);
    //      dataLayer[0]['L1 Section'] = "Home";
    //      location.reload();
    // });
}


// $(function(){
//     var dataPrimary,hrefValue,hrefSecLev,secLvlText,currentURL;
//     var datasecondary,hrefValueSec,hrefSecLevSN,secLvlTextSN;
//     var  utilData, hrefutilData;
//     function primaryNavAnalytics(){
//         $('#site-nav ul > li > .wrap > a').each(function(){
//             dataPrimary = $(this).attr('data-primary');
//             hrefValue=$(this).attr('href');
//             if(hrefValue=="#"){
//                 hrefValue = "#";
//             }
//             else{
//                 hrefValue = hrefValue +'#'+ dataPrimary;
//             }
//             if($(window).width()>1024){
//                 $(this).removeAttr('href'); 
//             }                
//             $(this).siblings('.subnav').find('li a').each(function(){
//                 hrefSecLev=$(this).attr('href');
//                 secLvlText=$(this).text();
//                 hrefSecLev= hrefSecLev +'#'+ dataPrimary +','+secLvlText;
//                 $(this).attr('href',hrefSecLev);
//             });

//         });
//     }
//     function secNavAnalytics(){
//             if($('.secondary-navigaiton').length>0){
//                 currentURL=location.hash;
//                 $('.secondary-navigaiton li.products.sec-nav-li .wrap > a').each(function(){
//                 datasecondary = $(this).attr('data-secondary');

//                 hrefValueSec= $(this).attr('href');

//                 if(typeof hrefValueSec == 'undefined'){
//                     hrefValueSec = "";
//                 }

//                 if(window.location.hash !== ""){
//                     var hrefval = $(this).attr('href') || "";
//                     if(hrefval.indexOf(window.location.host) > -1){
//                         hrefValueSec = hrefValueSec +currentURL+','+datasecondary;
//                      }
//                 }else{
//                         hrefValueSec = hrefValueSec;
//                 }

//                 if($(this).attr('href') == ""){
//                  }else{
//                     // console.log(hrefValueSec);
//                     $(this).attr('href', hrefValueSec);
//                  }


//                 $(this).siblings('.subnav').find('li a').each(function(){
//                     hrefSecLevSN=$(this).attr('href');
//                     secLvlTextSN=$(this).text();
//                     // console.log("hascheck");

//                     if(window.location.hash !== ""){
//                         hrefSecLevSN= hrefSecLevSN +currentURL+','+datasecondary+','+secLvlTextSN;
//                     // }else{
//                         hrefSecLevSN = hrefSecLevSN
//                     }
//                     $(this).attr('href',hrefSecLevSN);
//                 });
//             });
//         }
//     }

//     function utilNavAnalytiscs(){
//         $('.utils-account li.accountLi a').each(function(){
//             utilData = $(this).text();
//             hrefutilData=$(this).attr('href') +'#' +utilData;
//             $(this).attr('href',hrefutilData);
//         });
//         $('.locale-selector a.localeTitle').removeAttr('href');
//     }


//     $('#site-nav ul > li > .wrap > a').on('click',function(event){
//         if($(window).width()>1024){
//             event.preventDefault();
//         }
//     });

//     $('.secondary-navigaiton li.products.sec-nav-li .wrap > a').on('click',function(e){
//         if($(this).attr('href') == ""){
//             e.preventDefault();
//         }
//     });

//     var hashValue=(location.hash).replace('#', '');
//     if(hashValue!=""){
//         var res = hashValue.split(",");
//         if(typeof dataLayer != 'undefined'){
//             if(typeof res[0] != "undefined"){
//                 dataLayer[0]['L1 Section'] = res[0];
//             }
//             if(typeof res[1]!= "undefined"){
//                 dataLayer[0]['L2 Section'] = res[1];
//             }
//             if(typeof res[2] != "undefined"){
//                 dataLayer[0]['L3 Section'] = res[2];
//             }
//            if(typeof res[3] != "undefined"){
//                 dataLayer[0]['L4 Section'] = res[3];
//             }
//         }
//     }
//     primaryNavAnalytics();
//     secNavAnalytics();
//     utilNavAnalytiscs();
// });

// Marketo Munchkin script, asynchronous jQuery
// $.ajax({
//   url: '//munchkin.marketo.net/munchkin.js',
//   dataType: 'script',
//   cache: true,
//   success: function() {
//     Munchkin.init(muchikin_Id);
//   }
// });
/*$(document).ready(function(){
    if(typeof disableAnalytics == "undefined"){
        $('<script type="text/plain" class="cc-onconsent-social" src="//munchkin.marketo.net/munchkin.js"></script>').insertBefore('#GtmDiv');
        $('<script type="text/plain" class="cc-onconsent-social">var myVar = setInterval(function(){if(typeof Munchkin !=="undefined"){Munchkin.init(muchikin_Id);clearInterval(myVar);}}, 300)</script>').insertBefore('#GtmDiv');
    }
});*/
