/**
 * listen for afterMenu right away and set a cookie when its ready
 */
$(document).one('epub.afterMenu', function () {
  $.cookie('epubAfterMenu', true);
});

$(function () {
  if ($('#related-categories').length > 0) {
    require(['components/expandable-nav'], function (ExpandableNav) {
      new ExpandableNav('#related-categories', {
        defaultVisibleItems: 4
      });
    });
  }
});

if ($('.page-search-index').length > 0) {
  require([
    'pickerdate',
    "css!/javascripts/vendor/pickadatejs/themes/classic",
    "css!/javascripts/vendor/pickadatejs/themes/classic.date"], function (pickadate) {

      $(function () {
        $('#filter_start_date, #filter_end_date').pickadate({
          max: new Date(),
          formatSubmit: 'mm/dd/yyyy',
          hiddenName: true,
          selectYears: true,
          onStart: function () {
            this.set('select', null);
          }
        });
      });
    });
}

require(['jquery', 'components/add-this-toolbox'], function ($, AddThisToolbox) {
  $(function () {
    var services = [
      { name: 'print' },
      { name: 'email' },
      { name: 'facebook', type: 'counter' },
      { name: 'twitter' },
      { name: 'linkedin', type: 'counter' },
      { name: 'more' }
    ];

    $('.addthis-toolbox').each(function () {
      new AddThisToolbox(this, {
        services: services
      });
    });
  });
});

if (!$('.main-header').hasClass('event-microsite')) {
  require([
    'jquery',
    'mobile-nav',
    'nav-quick-return',
    'quick-search',
    'user-actions',
  ], function ($, MobileNav, NavQuickReturn, QuickSearch) {
    $(function () {
      let config = {};

      // Diff order and config of Mobile Menu for v2 redesign
      // TODO: Refactor once all sites are on v2
      if (window.homeVersionV2Enabled) {
        config = {
          triggerID: '#hamburger-nav-link,#search-nav-link',
          addBeforeMenu: ['.main-nav--horizontal:not(.main-nav--horizontal--quick-return) #user-actions', '#user-actions', '#quick-search', '#subscribe-mobile-nav-link'],
          addAfterMenu: ['#directory-nav', '#cart-social-wrapper'],
          mmenuConfigAddon: {
            classNames: {
              fixedElements: {
                fixedTop: "main-header--quick-return"
              }
            }
          },
          mmenu: {
            offCanvas: {
              position: 'right',
            },
          },
        };
      } else {
        config = {
          addBeforeMenu: ['#quick-search', '#user-actions', '#subscribe-mobile-nav-link'],
          addAfterMenu: ['#directory-nav', '#cart-link', '#social-links'],
          mmenuConfigAddon: {
            classNames: {
              fixedElements: {
                fixedTop: "main-header--quick-return"
              }
            }
          },
        };
      }

      const mobileNav = new MobileNav('.main-nav--horizontal', config);

      new NavQuickReturn('.main-header', {
        mediaQuery: "screen and (max-width: 1200px)",
        appendCloneTo: '.mmenu-placeholder'
      });

      new NavQuickReturn('.main-nav--horizontal');

      new QuickSearch('#quick-search');
    });
  });
}

require([
  'jquery',
  'follow-scroll',
  'sponsored-content-help',
  'selectize',
  'bundle/scrolldepth.bundle'
], function ($, FollowScroll, SponsoredContentHelp, selectize, ScrollDepthWrapper) {
  $(function () {
    new ScrollDepthWrapper.default();

    if (!window.homeVersionV2Enabled) {

      new FollowScroll('#homepage-left-column', {
        bottomPosition: function () {
          return $("#main-footer").offset().top;
        },
        mediaQuery: "screen and (min-width: 950px)"
      });

      new FollowScroll('#main-sidebar', {
        bottomPosition: function () {
          return $("#main-footer").offset().top;
        }
      });

      new FollowScroll('#featured-home-contents', {
        bottomPosition: function () {
          return $("#main-footer").offset().top;
        }
      });
    }

    if (!Modernizr.csstransitions) {
      $('.main-nav--horizontal').on({
        mouseenter: function mainNavMouseEnter() {
          $(this).find('.level2').show();
        },
        mouseleave: function mainNavMouseLeave() {
          $(this).find('.level2').hide();
        }
      }, '.level1-li');
    }

    $('#subscribe-now').on('click.subscribe-now', '.subscribe-now__subscribe-link', function openSubscribeNowDropdown(e) {
      e.preventDefault();
      var $nav = $(this).next('.subscribe-now__nav');
      // Animation Fallback if No CSS3 Transition Support
      if (!Modernizr.csstransitions) {
        $nav.slideToggle();
      } else {
        $nav.toggleClass('js-animate--flip-open');
      }
    });

    $('#home-subscribe-cta').on('click.home-subscribe-cta', '.home-subscribe-cta__subscribe-link', function openSubscribeNowDropdown(e) {
      e.preventDefault();
      var $nav = $(this).next('.home-subscribe-cta__nav');
      // Animation Fallback if No CSS3 Transition Support
      if (!Modernizr.csstransitions) {
        $nav.slideToggle();
      } else {
        $nav.toggleClass('js-animate--flip-open');
      }
    });

    // Hide Apprenticeship Reviews Directories breadcrumbs
    if ($('.breadcrumbs').length) {
      const breadcrumb = $('.breadcrumbs').text();
      if (breadcrumb.indexOf("Apprenticeship") > 0) {
        $('.breadcrumbs').hide();
      }
    }

    if ($('#sponsored-content').length) {
      new SponsoredContentHelp('#sponsored-content');
    }
    if ($('#home-sponsored-content').length) {
      new SponsoredContentHelp('#home-sponsored-content', { component: '.sponsored-content-list' });
    }
    if ($('#sponsored-content-widget').length) {
      new SponsoredContentHelp('#sponsored-content-widget', { component: '.sponsored-content-widget' });
    }

    // Replace select fields with improved UI
    // Cache to var to use API
    // Implemented using workaround https://github.com/brianreavis/selectize.js/issues/744
    $('select').each(function () {
      // The 'if' makes sure that selectize does not get added to the drop downs
      // in the calendar search for select year.
      if (!$(this).hasClass('picker__select--year')) {
        $(this).selectize();
      }
    });

    // Checkout Page: Update the country and state custom select fields,
    // on the change event of the native select fields. This is
    // for when the shipping address is the same as billing.

    $('#bill_country_id').on('change', function () {
      var value = $(this).val();
      var selectize = $('#ship_country_id')[0].selectize;
      selectize.setValue(value);
    });

    $('#bill_state_id').on('change', function () {
      var value = $(this).val();
      var selectize = $('#ship_state_id')[0].selectize;
      selectize.setValue(value);
    });

    // jQuery validation will ignore hidden elements,
    // since we are using Selectize to replace select fields,
    // we must set validation to ignore hidden fields with the exception
    // of selectize controlled hidden fields
    $.validator.setDefaults({
      ignore: ':hidden:not([class~=selectized]),:hidden > .selectized, .selectize-control .selectize-input input'
    });

    /*
      This corrects a bug on the navigation for tablet devices where a click on the
      parent link was going directly to the link and not expanding the level2 nav
      items.  This prevents default in cases where the level2 nav is not currently
      visible.
    */
    $('.main-nav--horizontal').on('click', '.link2', function (evt) {
      if ($(this).siblings('.level2').height() == 0) {
        evt.preventDefault();
      }
    });

    // Detect RFP form changes and show red dot on submit
    const RFPChange = localStorage.getItem('rfpchange');
    if (RFPChange === 'true') {
      $('.badge-dot-edit').show();
    }
    $('.rfp-form input, .rfp-form select, .rfp-form textarea').on('input', function () {
      $('.badge-dot-edit').show();
    });
    $('.rfp-add-supplier-button').click(function () {
      localStorage.setItem('rfpchange', 'true');
      $('.badge-dot-edit').show();
    });
    $('.rfp-form__button-container input').click(function () {
      localStorage.removeItem('rfpchange');
    });
  });
});

// Initialize all the brightcove video lists we find that have the following markup
//
// <div
//  data-playlist-id=""
//  data-player-url=""
//  data-open-in-new-window=""
//  data-width=""
//  data-height=""
//  data-video-logo=""
//  data-video-play-arrow=""
//  data-randomize-videos=""
//  data-show-long-descriptions=""
//  data-max-videos-visible="">
// </div>
//
//
require(['jquery'], function ($) {
  $(function () {
    $('div[data-playlist-id]').each(function () {
      var videoDiv = $(this);
      // If we don't find any, this won't ever be pulled in
      require(['bundle/brightcove-video-list.bundle'], function (videoBrightCoveGallery) {
        var playlist_id = videoDiv.data('playlist-id');
        var player_url = videoDiv.data('player-url');
        var width = videoDiv.data('width');
        var height = videoDiv.data('height');
        var openInNewWindow = videoDiv.data('open-in-new-window');
        var randomizeVideos = videoDiv.data('randomize-videos');
        var showLongDescriptions = videoDiv.data('show-long-descriptions');
        var video_logo = videoDiv.data('video-logo');
        var video_play_arrow = videoDiv.data('video-play-arrow');
        var max_videos_visible = videoDiv.data('max-videos-visible');
        var max_thumbnails_visible = videoDiv.data('max-thumbnails-visible');
        var autoplay = videoDiv.data('autoplay');
        var carousel = videoDiv.data('carousel');
        var token = videoDiv.data('token') || "BCpkADawqM1CSLkNMXl4noZnUFKfkqq30qsaWUzd5MZ8UFUmwKL7KzrYLM-Z9C_5OJG351h5c1ZBtJFULAf6Jp_hmftcuqTx93AFdiL1lNh6YaeVgKAS5unUTZ0";

        var videoList = new videoBrightCoveGallery.default(videoDiv, playlist_id, token, player_url, {
          width: width,
          height: height,
          openInNewWindow: openInNewWindow,
          randomizeVideos: randomizeVideos,
          showLongDescriptions: showLongDescriptions,
          video_logo: video_logo,
          max_videos_visible: max_videos_visible,
          max_thumbnails_visible: max_thumbnails_visible,
          carousel: carousel
        }, {
          autoplay: autoplay
        });
      });
    });
  });
});

require([
  'jquery',
  'bundle/olytics-dfp.bundle',
  'bundle/dfp-ads.bundle',
  'bundle/modify-dfp-targeting.bundle',
], function ($, olyticsDFPInit, GoogleTagSetup, ModifyDfpTargeting) {
  /**
   * A better way of ensuring that window.olytics is completely
   * ready. Relying on the load of olyticsImport script revealed an
   * async issue.
   */
  const checkForOlyticsHandler = setInterval(function () {
    if (typeof window.olytics !== 'undefined' && "ready" in window.olytics) {
      window.olytics.ready(olyticsInit);
    }
  }, 200);


  const olyticsGiveupHandler = setTimeout(function () {
    if (typeof window.olytics !== 'undefined' && "ready" in window.olytics) {
      clearTimeout(olyticsGiveupHandler);
      return;
    }
    clearInterval(checkForOlyticsHandler);
    dfpInit();
  }, 1500);

  function dfpInit() {
    try {

      var href = window.location.href;
      var shouldCollapse = !(href.includes('-stage.epublishing.com') || href.includes(':3000'));

      window.dfpAds = new GoogleTagSetup.default(targeting, {
        refreshChangeCorrelator: true,
        collapse: shouldCollapse,
        slotRenderEnded: function (evt, slot) {
          if (typeof slot === 'undefined') return;

          var $slot = $('#' + slot.id);
          var $frame = $($slot.find('iframe').prop('contentDocument'));

          if (!$frame.length && shouldCollapse) return $slot.remove();

          $frame.on('load', function () {
            if ($frame.find('canvas,img').length) return;
            
            shouldCollapse && $slot.remove();
          });
        },
      });
    } catch (error) {
      console.log('Error while initializing DFP', error)
    }

  }

  function olyticsInit() {
    /**
     * kick off olytics DFP
    */
    clearInterval(checkForOlyticsHandler);
    clearTimeout(olyticsGiveupHandler)
    window.olytics.loadDfpSegments();

    window.olyticsDfpSegments = function (segments) {
      /**
       * olytics is looking for this global function as its callback
       * segments from `loadDfpSegments` are sent to this function
      */
      new olyticsDFPInit.default(segments, {
        awaitMobileNav: true,
        initDFP: function (mergedTargeting) {
          targeting = ModifyDfpTargeting.modifyDfpTargeting(mergedTargeting, {
            reg_user: 'email',
          });

          dfpInit();
        }
      });
    }
  }
})

require(['jquery'], function ($) {
  $(document).ready(function () {
    if ($('body').data('controller') == 'events' && $('body').data('action') == 'category') {
      $('.live-and-upcoming__see-full-description').on('click', function () {
        $button = $(this)
        const eventID = $button.data('eventId')

        $('#classification-title__description--truncated-' + eventID).toggle()
        $('#classification-title__description--full-' + eventID).toggle()

        const SEE_FULL = 'See Full Description'
        const COLLAPSE = 'Collapse Full Description'
        if ($button.text() === SEE_FULL) {
          $button.text(COLLAPSE)
        } else {
          $button.text(SEE_FULL)
        }
      })
    }
  })
})