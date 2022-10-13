/**
 * @file
 * Colorbox module init js.
 */

(function ($) {

Drupal.behaviors.initColorbox = {
  attach: function (context, settings) {
    if (!$.isFunction($('a, area, input', context).colorbox) || typeof settings.colorbox === 'undefined') {
      return;
    }

    if (settings.colorbox.mobiledetect && window.matchMedia) {
      // Disable Colorbox for small screens.
      var mq = window.matchMedia("(max-device-width: " + settings.colorbox.mobiledevicewidth + ")");
      if (mq.matches) {
        return;
      }
    }

    // Use "data-colorbox-gallery" if set otherwise use "rel".
    settings.colorbox.rel = function () {
      if ($(this).data('colorbox-gallery')) {
        return $(this).data('colorbox-gallery');
      }
      else {
        return $(this).attr('rel');
      }
    };

    $('.colorbox', context)
      .once('init-colorbox').each(function(){
        $(this).colorbox(settings.colorbox);
      });

    $(context).bind('cbox_complete', function () {
      Drupal.attachBehaviors('#cboxLoadedContent');
    });
  }
};

})(jQuery);
;
/**
 * @file
 * Colorbox module style js.
 */

(function ($) {

Drupal.behaviors.initColorboxDefaultStyle = {
  attach: function (context, settings) {
    $(context).bind('cbox_complete', function () {
      // Only run if there is a title.
      if ($('#cboxTitle:empty', context).length == false) {
        $('#cboxLoadedContent img', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideDown();
        });
        $('#cboxOverlay', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideUp();
        });
      }
      else {
        $('#cboxTitle', context).hide();
      }
    });
  }
};

})(jQuery);
;
(function ($) {
  Drupal.behaviors.hitn_sticky_menu = {
    attach: function (context) {
      var $aboveHeight = $('.region-scripts-ini').outerHeight();
      var $headerHeight = $('header#navbar').height();
      if ($aboveHeight > 0) {
        $('.navbar').removeClass('fixed').next().css('padding-top', '0');
      }
      $(window).scroll(function () {
        $aboveHeight = $('.region-scripts-ini').outerHeight();
        //if scrolled down more than the header’s height
        if ($(window).scrollTop() > $aboveHeight) {
          $('.navbar').addClass('fixed').css('top', '0').next()
            .css('padding-top', '0px');
          $('body').css('padding-top', $headerHeight+20+'px');
        }
        else {
          $('.navbar').removeClass('fixed').next()
            .css('padding-top', '0');
          $('body').css('padding-top', '0px');
        }
      });
    }
  }
})(jQuery);
;
(function ($) {

  Drupal.mhn_processAds = Drupal.mhn_processAds || {};

  Drupal.behaviors.adsRespons = {
    attach: function (context) {
      $('body').once('hitn_ads', function () {
        Drupal.mhn_processAds($('.group-main-content-wrapper'));
      });
    }
  };

  Drupal.mhn_processAds = function ($parent) {
    var move_ads = !$('body').hasClass('node-type-slideshow') && !$('body').hasClass('node-type-video');
    if (move_ads) {
      //bottom ad
      var $ad2 = $parent.find('.field-name-right-ad-2');
      var current_state;

      //move ad2 to bottom if content is large (height > 850px)
      var additional_content_height = 0;
      if ($parent.find('.field-name-field-sponsor-term').length) {
        additional_content_height += $('.field-name-field-sponsor-term').height();
        if ($('#block-mobihealth-display-right-sponsor-block').length) {
          additional_content_height += $('#block-mobihealth-display-right-sponsor-block').height();
        }
      }
      if ($parent.find('.group-main-content').height() - additional_content_height > 950) {
        $ad2.css('position', 'absolute');
      }

      var number_of_elements_inside = $parent.find('.field-name-body .field-items .field-item').children().length,
        position_of_first_element = Math.round(number_of_elements_inside / 3),
        position_of_second_element = Math.round(2 * number_of_elements_inside / 3) - 1;
      if (position_of_second_element < number_of_elements_inside) {
        position_of_second_element++;
      }
      var $p1 = $parent.find('.field-name-body .field-items .field-item ').children().eq(position_of_first_element);
      var $p2 = $parent.find('.field-name-body .field-items .field-item ').children().eq(position_of_second_element);
      if (992 > $(window).width()) {
        current_state = 0; //variable where we stores where currently ads located. 1 - sidebar, 0-body
        var $ads1_content = $parent.find('.oas-ad-Right1-wrapper');
        var $ads2_content = $parent.find('.oas-ad-Right2-wrapper');
        $ads1_content.insertBefore($p1);
        $ads2_content.insertAfter($p2);
        //oas_tag.reloadAds("Right1");
        //oas_tag.reloadAds("Right2");
      }
      else {
        current_state = 1; //variable where we stores where currently ads located. 1 - sidebar, 0-body
      }
      $(window).resize(function () {
        var $ads1_content = $parent.find('.oas-ad-Right1-wrapper');
        var $ads2_content = $parent.find('.oas-ad-Right2-wrapper');
        if (992 > $(window).width() && (current_state == 1)) {
          current_state = 0; //variable where we stores where currently ads located. 1 - sidebar, 0-body
          $ads1_content.insertBefore($p1);
          $ads2_content.insertAfter($p2);
          //oas_tag.reloadAds("Right1");
          //oas_tag.reloadAds("Right2");
        }
        if (992 < $(window).width() && (current_state == 0)) {
          current_state = 1; //variable where we stores where currently ads located. 1 - sidebar, 0-body
          $ads1_content.appendTo($parent.find('#block-oas-blocks-oas-ad-block-right1'));
          $ads2_content.appendTo($parent.find('#block-oas-blocks-oas-ad-block-right2'));
          //oas_tag.reloadAds("Right1");
          //oas_tag.reloadAds("Right2");
        }
      });
    }
  };

})(jQuery);;
