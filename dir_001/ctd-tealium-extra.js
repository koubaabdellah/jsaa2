/**
 * @file Contains a global variable object for use with Tealium.
 */
var ctdTealium = {
  init: function () {
    this.campaign = this.getHashParam('ftag');
    this.viewGuid = this.createGuid();
    this.isMobile = this.isMobile();
    this.isAmp    = this.isAmp();
    this.isVideoEmbedded = this.isVideoEmbedded();
    this.initSiteObject();

    return this;
  },

  // This is to support legacy Brightcove video plugin code.
  initSiteObject: function () {
    window.site          = window.site          || {};
    window.site.ftag     = window.site.ftag     || this.campaign;
    window.site.campaign = window.site.campaign || this.campaign;
    window.site.vguid    = window.site.vguid    || this.viewGuid;
    window.site.viewguid = window.site.viewguid || this.viewGuid;
  },

  /**
   * Determines if is a mobile device based on user agent.
   *
   * @return {boolean}
   */
  isMobile: function () {
    'use strict';
    var check = false;
    (function (a) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
        check = true;
      }
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  },

  /**
   * Attempt to determine if this is an AMP page.
   *
   * @return {boolean}
   */
  isAmp: function () {
    // First check for the query param then check for a hash param.
    return this.hasQueryParam('%3Famp') || this.getQueryParam('amp') || (this.getHashParam('amp') === 'amp');
  },

  /**
   *  Attempt to determine if this is an embedded Video page
   *
   * @return {boolean}
   */
  isVideoEmbedded: function () {
    return window.location.href.includes('/video-embed/');
  },

  /**
   * Creates a guid.
   *
   * This function should only be used by ctdTealium.init().
   *
   * If a piece of code needs the Tealium viewGuid, get the viewGuid variable (e.g. ctdTealium.viewGuid).
   *
   * @returns {string}
   */
  createGuid: function () {
    'use strict';
    function _p8(s) {
      var p = (Math.random().toString(16) + '000000000').substr(2, 8);
      return s ? '-' + p.substr(0, 4) + '-' + p.substr(4, 4) : p;
    }

    return _p8() + _p8(true) + _p8(true) + _p8();
  },

  /**
   * Check if a query parameter exists.
   *
   * @param {string} name
   *
   * @return {boolean}
   */
  hasQueryParam: function (name) {
    return (window.location.search.indexOf(name) !== -1);
  },

  /**
   * Get the value of a query parameter or all query parameters.
   *
   * False if does not exist. True if exists but has no value.
   *
   * @param {string=} name
   *
   * @return {boolean|string}
   */
  getQueryParam: function (name) {
    var params = {};
    if (!window.location.search) {
      return false;
    }
    window.location.search.substring(1).split('&').forEach(function (value, index) {
      let parts = value.split('=');
      params[parts[0]] = parts.length === 1 ? true : decodeURIComponent(parts[1].replace(/\+/g, ' '));
    });
    if (!name) {
      return params;
    }
    if (!this.hasQueryParam(name)) {
      return false;
    }
    return params[name];
  },

  /**
   * Get the value of a part of the URL hash.
   *
   * @param {string} variable
   *
   * @return {string|boolean}
   */
  getHashParam: function (variable) {
    'use strict';
    var hash = window.location.hash.substring(1);
    if (!variable) {
      return hash;
    }
    if (hash.indexOf(variable) === -1) {
      return false;
    }
    var param = hash.substring(hash.indexOf(variable));
    if (param.indexOf('&') !== -1) {
      param = param.split('&')[0];
    }
    var value = true;
    if (param.indexOf('=') !== -1) {
      value = param.split('=')[1];
    }
    return value;
  },

  /**
   * Extend/Merge two objects.
   *
   * @param {Object} target
   * @param {Object} source
   *
   * @return {Object}
   */
  extend: function (target, source) {
    'use strict';
    target = target || {};
    for (var prop in source) {
      if (typeof source[prop] === 'object') {
        target[prop] = this.extend(target[prop], source[prop]);
      }
      else {
        target[prop] = source[prop];
      }
    }
    return target;
  },
  get merge() {
    return this.extend;
  }
};

ctdTealium.init();
