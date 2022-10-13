"use strict";

/**
 * @file
 * JS functionality for moving the modal component to the body when the modal is opened
 */
(function ($) {
  "use strict";

  $(document).on("show.bs.modal", function (event) {
    var $modalTarget = $(event.target);
    $modalTarget.once("modal-moved").each(function () {
      var $modal = $(this);
      $modal.detach();
      $("body").append($modal);
    });
  });
})(window.jQuery);;
"use strict";

/**
 * @file
 * Behaviors for the attsite_vbtheme theme.
 */
(function ($, _, Drupal) {
  'use strict';

  var init = false;
  /**
   * @type {string[]} Domains to be considered internal.
   *
   * No link tracking will be fired when navigating between these!
   */

  var linkInternalFilters = ['javascript:', 'experience.att.com', 'watch.att.com', 'more.att.com', 'audiencenetwork.att.com']; // Event.composedPath

  (function (e, d, w) {
    if (!e.composedPath) {
      e.composedPath = function () {
        if (this.path) {
          return this.path;
        }

        var target = this.target;
        this.path = [];

        while (target.parentNode !== null) {
          this.path.push(target);
          target = target.parentNode;
        }

        this.path.push(d, w);
        return this.path;
      };
    }
  })(Event.prototype, document, window);

  Drupal.behaviors.attsite_analytics = {
    attach: function attach(context) {
      if (init || drupalSettings.user.uid != null && drupalSettings.user.uid != 0) {
        return;
      }

      init = true;
      var counter = 10;

      var isAnalyticsLoaded = function isAnalyticsLoaded() {
        return window.s && window.s.isReadyToTrack();
      };

      var updateEventTracking = function updateEventTracking() {
        document.addEventListener('click', function (event) {
          var path = event.path || event.composedPath && event.composedPath();
          var eventPath = path.slice(0, path.length - 5);
          var targetLocation = 'link location';
          var destinationUrl;
          var linkName;

          for (var i = 0; i < eventPath.length; i++) {
            var currentTag = eventPath[i];

            if (currentTag.tagName === 'A' && !destinationUrl) {
              destinationUrl = currentTag.href || undefined;
              linkName = currentTag.textContent.trim();
            }

            if (destinationUrl && currentTag.getAttribute('data-track')) {
              targetLocation = "".concat(targetLocation, " | ").concat(currentTag.getAttribute('data-track'));
            }

            if (currentTag.classList && currentTag.classList.contains('content')) {
              break;
            }
          }

          destinationUrl && linkClicked(linkName, destinationUrl, targetLocation);
        }, true);
      };

      var linkClicked = function linkClicked(linkName, destinationUrl, targetLocation) {
        // These props were removed from s.setupLinkTrack()
        // call in the analytics script, in order to fill them here.
        window.s.prop19 = destinationUrl;
        window.s.prop20 = targetLocation; // Manually trigger "Other click" link tracking, as the analytics script
        // only triggers for "real" external links (not part of att.com)

        if (isExternalUrl(destinationUrl)) {
          s.tl(true, 'o', linkName, {
            prop19: destinationUrl,
            prop20: targetLocation
          });
        }
      };

      var isExternalUrl = function isExternalUrl(url) {
        url = url.toLowerCase().replace(/(^https?:\/\/)|(^\/\/)/, '');

        for (var i = 0; i < linkInternalFilters.length; ++i) {
          var filter = linkInternalFilters[i].toLowerCase();

          if (url.match(new RegExp('^[^\/\?]*' + escapeRegExp(filter), 'i'))) {
            return false;
          }
        }

        return true;
      };

      var escapeRegExp = function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      };

      (function initializeTracking() {
        if (!isAnalyticsLoaded()) {
          if (counter-- > 0) {
            setTimeout(initializeTracking, 256);
          } else {
            console.log('Adobe DTM is not running properly. Please check if the js is loaded and working!');
          }
        } else {
          updateEventTracking();
        }
      })();
    }
  };
})(window.jQuery, window._, window.Drupal);;
"use strict";

/**
 * @file
 * Behaviors for the attsite_vbtheme theme.
 */
(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.attsite_vbtheme = {
    attach: function attach(context) {
      // Vartheme subtheme JavaScript behaviors goes here.
      var scroll = new SmoothScroll('a[href*="#"]', {
        header: '.sticky-header',
        easing: 'easeInQuad',
        speedAsDuration: true
      });
      $('.att-lightbox-button').click(function () {
        var dataTarget = $(this).attr('data-target') + ' img';
        showBlazy(dataTarget);
      });
    }
  }; // Function to swap blazy data-src and src attributes.

  var showBlazy = function showBlazy(dataTarget) {
    $(dataTarget).attr('src', $(dataTarget).attr('data-src')).addClass('b-loaded');
    $('<style>.media--loading:before {display: none}</style>').appendTo('head');
  };
})(window.jQuery, window.Drupal);;
/**
 * @file
 * Bootstrap Popovers.
 */

var Drupal = Drupal || {};

(function ($, Drupal, Bootstrap) {
  "use strict";

  var $document = $(document);

  /**
   * Extend the Bootstrap Popover plugin constructor class.
   */
  Bootstrap.extendPlugin('popover', function (settings) {
    return {
      DEFAULTS: {
        animation: !!settings.popover_animation,
        autoClose: !!settings.popover_auto_close,
        enabled: settings.popover_enabled,
        html: !!settings.popover_html,
        placement: settings.popover_placement,
        selector: settings.popover_selector,
        trigger: settings.popover_trigger,
        title: settings.popover_title,
        content: settings.popover_content,
        delay: parseInt(settings.popover_delay, 10),
        container: settings.popover_container
      }
    };
  });

  /**
   * Bootstrap Popovers.
   *
   * @todo This should really be properly delegated if selector option is set.
   */
  Drupal.behaviors.bootstrapPopovers = {
    $activePopover: null,
    attach: function (context) {
      // Immediately return if popovers are not available.
      if (!$.fn.popover || !$.fn.popover.Constructor.DEFAULTS.enabled) {
        return;
      }

      var _this = this;

      $document
        .on('show.bs.popover', '[data-toggle=popover]', function () {
          var $trigger = $(this);
          var popover = $trigger.data('bs.popover');

          // Only keep track of clicked triggers that we're manually handling.
          if (popover.options.originalTrigger === 'click') {
            if (_this.$activePopover && _this.getOption('autoClose') && !_this.$activePopover.is($trigger)) {
              _this.$activePopover.popover('hide');
            }
            _this.$activePopover = $trigger;
          }
        })
        // Unfortunately, :focusable is only made available when using jQuery
        // UI. While this would be the most semantic pseudo selector to use
        // here, jQuery UI may not always be loaded. Instead, just use :visible
        // here as this just needs some sort of selector here. This activates
        // delegate binding to elements in jQuery so it can work it's bubbling
        // focus magic since elements don't really propagate their focus events.
        // @see https://www.drupal.org/project/bootstrap/issues/3013236
        .on('focus.bs.popover', ':visible', function (e) {
          var $target = $(e.target);
          if (_this.$activePopover && _this.getOption('autoClose') && !_this.$activePopover.is($target) && !$target.closest('.popover.in')[0]) {
            _this.$activePopover.popover('hide');
            _this.$activePopover = null;
          }
        })
        .on('click.bs.popover', function (e) {
          var $target = $(e.target);
          if (_this.$activePopover && _this.getOption('autoClose') && !$target.is('[data-toggle=popover]') && !$target.closest('.popover.in')[0]) {
            _this.$activePopover.popover('hide');
            _this.$activePopover = null;
          }
        })
        .on('keyup.bs.popover', function (e) {
          if (_this.$activePopover && _this.getOption('autoClose') && e.which === 27) {
            _this.$activePopover.popover('hide');
            _this.$activePopover = null;
          }
        })
      ;

      var elements = $(context).find('[data-toggle=popover]').toArray();
      for (var i = 0; i < elements.length; i++) {
        var $element = $(elements[i]);
        var options = $.extend({}, $.fn.popover.Constructor.DEFAULTS, $element.data());

        // Store the original trigger.
        options.originalTrigger = options.trigger;

        // If the trigger is "click", then we'll handle it manually here.
        if (options.trigger === 'click') {
          options.trigger = 'manual';
        }

        // Retrieve content from a target element.
        var target = options.target || $element.is('a[href^="#"]') && $element.attr('href');
        var $target = $document.find(target).clone();
        if (!options.content && $target[0]) {
          $target.removeClass('visually-hidden hidden').removeAttr('aria-hidden');
          options.content = $target.wrap('<div/>').parent()[options.html ? 'html' : 'text']() || '';
        }

        // Initialize the popover.
        $element.popover(options);

        // Handle clicks manually.
        if (options.originalTrigger === 'click') {
          // To ensure the element is bound multiple times, remove any
          // previously set event handler before adding another one.
          $element
            .off('click.drupal.bootstrap.popover')
            .on('click.drupal.bootstrap.popover', function (e) {
              $(this).popover('toggle');
              e.preventDefault();
              e.stopPropagation();
            })
          ;
        }
      }
    },
    detach: function (context) {
      // Immediately return if popovers are not available.
      if (!$.fn.popover || !$.fn.popover.Constructor.DEFAULTS.enabled) {
        return;
      }

      // Destroy all popovers.
      $(context).find('[data-toggle="popover"]')
        .off('click.drupal.bootstrap.popover')
        .popover('destroy')
      ;
    },
    getOption: function(name, defaultValue, element) {
      var $element = element ? $(element) : this.$activePopover;
      var options = $.extend(true, {}, $.fn.popover.Constructor.DEFAULTS, ($element && $element.data('bs.popover') || {}).options);
      if (options[name] !== void 0) {
        return options[name];
      }
      return defaultValue !== void 0 ? defaultValue : void 0;
    }
  };

})(window.jQuery, window.Drupal, window.Drupal.bootstrap);
;
/**
 * @file
 * Bootstrap Tooltips.
 */

var Drupal = Drupal || {};

(function ($, Drupal, Bootstrap) {
  "use strict";

  /**
   * Extend the Bootstrap Tooltip plugin constructor class.
   */
  Bootstrap.extendPlugin('tooltip', function (settings) {
    return {
      DEFAULTS: {
        animation: !!settings.tooltip_animation,
        enabled: settings.tooltip_enabled,
        html: !!settings.tooltip_html,
        placement: settings.tooltip_placement,
        selector: settings.tooltip_selector,
        trigger: settings.tooltip_trigger,
        delay: parseInt(settings.tooltip_delay, 10),
        container: settings.tooltip_container
      }
    };
  });

  /**
   * Bootstrap Tooltips.
   *
   * @todo This should really be properly delegated if selector option is set.
   */
  Drupal.behaviors.bootstrapTooltips = {
    attach: function (context) {
      // Immediately return if tooltips are not available.
      if (!$.fn.tooltip || !$.fn.tooltip.Constructor.DEFAULTS.enabled) {
        return;
      }

      var elements = $(context).find('[data-toggle="tooltip"]').toArray();
      for (var i = 0; i < elements.length; i++) {
        var $element = $(elements[i]);
        var options = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, $element.data());
        $element.tooltip(options);
      }
    },
    detach: function (context) {
      // Immediately return if tooltips are not available.
      if (!$.fn.tooltip || !$.fn.tooltip.Constructor.DEFAULTS.enabled) {
        return;
      }

      // Destroy all tooltips.
      $(context).find('[data-toggle="tooltip"]').tooltip('destroy');
    }
  };

})(window.jQuery, window.Drupal, window.Drupal.bootstrap);
;
