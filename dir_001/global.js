

var DS2 = DS2 || {}
               /* 9:tab    13:enter  17:ctrl   18:alt    27:esc    32:space  35:end    36:home   37:left   38:up     39:right  40:down */
var keymap     = {9:false, 13:false, 17:false, 18:false, 27:false, 32:false, 35:false, 36:false, 37:false, 38:false, 39:false, 40:false},
    isMobile   = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    notMobile  = !/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    isIE       = /msie|trident/i.test(navigator.userAgent),
    isTouch    = 'ontouchstart' in document.documentElement,
    isSelected = "";

jQuery.extend(jQuery.expr[':'], {
    focusable: function(el, index, selector){
      return $(el).is('a, button, input, select, textarea, [tabindex]');
    }
});


$(window).on('beforeunload', function(){
   $.noop(); // onbeforeunload enables back caching in IE
});

/* ONLOAD */
$(window).on("load", function () {
   "use strict";

   $.getScript = function (url, callback, cache) {
      $.ajax({
         type: "GET",
         url: url,
         success: callback,
         dataType: "script",
         cache: cache
      });
   };

   if ($('[data-theme*="cm-theme"]').length != '0' && window.location.hash == "#cm-theme")                     { $('head').append('<link rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/cm-theme.css?timestamp=1489597570980">'); }
   
   if ($('table .data-row').length != '0')                           { DS2.complexTables(); }
   if ($('.autoSize, .autoSize-children, .promo-tabs').length != '0'){ DS2.setautoSize(); }
   if ($('.autoWidth').length != '0')                                { DS2.autoWidth(); }
   if ($('[data-show-at], [data-show-between]').length != '0')       { DS2.mediaQueryShow(); }
   if ($('.reset-field').length != '0')                              { DS2.clearField(); }
   if ($('.btn-switch').length != '0')                               { DS2.sliderSwitch(); }
   if ($('[role="radiogroup"]').length != '0')                       { DS2.radioFIX(); }
   if ($('textarea').length != '0')                                  { DS2.textareaFIX(); }
   if ($('.checkbox-selectall').length != '0')                       { DS2.checkboxSelectall(); }
   if ($('[data-max-select]').length != '0')                         { DS2.maxselectbtn(); }
   if ($('.blur-overlay').length != '0')                             { DS2.blurOverlay(); }
   if ($('.progress').length != '0')                                 { DS2.progressBar(); }
   if ($('select').length != '0')                                    { DS2.wrapSelect(); }   
   if ($('.starRating').length != '0')                               { DS2.starRating(); }
   if ($('.bellyband-link').length != '0')                           { DS2.bellyband(); }
   if ($('.modal').length != '0')                                    { DS2.modalDockedButtons(); }
   if ($('.btn-quantity-toggle').length != '0')                      { DS2.qtyToggle(); }
   if ($('.starrating-wrap[data-rating-avg]').length != '0')         { DS2.starRatings(); }
   
   if ($('.tiny-accordion, .tiny-tabs, .tiny-accordion-to-tabs').length != '0') { 
      DS2.loadAccordionCSS();
      $('#ds2-accordion-css').on('load', function(){
         $.getScript($thisDomain + "/js/jquery/2.0.0/ds2-tabs-n-accordions.js?timestamp=1490215471547", DS2.accordionCallback, true);
      });
   }
   if ($('[data-provide="datepicker"]').length != '0')               { $.getScript($thisDomain + "/js/jquery/2.0.0/ds2-bootstrap-datepicker.js?timestamp=1490215471547", DS2.loadCalendarCSS, true); }
   if ($('.filmstrip').length != '0')                                { $.getScript($thisDomain + "/js/jquery/2.0.0/ds2-filmstrip.min.js?timestamp=1490215471547", DS2.loadFilmstripCSS, true); }
   if ($('.filters').length != '0')                         			{ $.getScript($thisDomain + "/js/jquery/2.0.0/ds2-filters.js?timestamp=1490215471547", DS2.loadFiltersCSS, true); }
   if ($('#marquee').length != '0')                                  { $.getScript($thisDomain + "/js/jquery/2.0.0/ds2-marquee.js?timestamp=1490215471547", DS2.loadMarqueeCSS, true); }
	if ($('[data-toggle="modal"]').length != '0')                     { $.getScript("ds2-modal.js", DS2.loadModalCSS, true); }
   if ($('.pagination').length != '0')                               { $.getScript($thisDomain + "/js/jquery/2.0.0/ds2-pagination.js?timestamp=1490215471547", DS2.loadPaginationCSS,$.fn.pagination,true );}
   if ($('[class*="tooltip"]').length != '0')                        { $.getScript($thisDomain + "/js/jquery/2.0.0/ds2-tooltip.js?timestamp=1490215471547", DS2.loadTooltipCSS, true); }
   if ($('[data-process-cccard]').length != '0')                     { $.getScript($thisDomain + "/js/jquery/2.0.0/ds2-creditCardValidator.min.js?timestamp=1490215471547", DS2.loadCCInputCSS, true); }
   if ($('.linkSelectionMenu,.selectionMenu').length != '0')         { $.getScript($thisDomain + "/js/jquery/2.0.0/ds2-selection-menu.js?timestamp=1490215471547", true); }
   if ($('[data-validate], [data-required="true"]').length != '0')   { $.getScript($thisDomain + "/js/jquery/2.0.0/ds2-form-validation.js?timestamp=1490215471547", $.noop, true); }
   if ($('.step-indicator, .strength-meter-container').length != '0'){ DS2.loadStepIndicatorCSS(); }

   // lazy load additional fonts
   if ($('[class*="icon-social-"]').length != '0')                   { $('head').append('<link rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/icon-social.css?timestamp=1490215471547">'); }
   if ($('[class*="icon-arrows-"]').length != '0')                   { $('head').append('<link rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/icon-arrows.css?timestamp=1490215471547">'); }
   if ($('[class*="icon-building-"]').length != '0')                 { $('head').append('<link rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/icon-buildings.css?timestamp=1490215471547">'); }
   if ($('[class*="icon-content-"]').length != '0')                  { $('head').append('<link rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/icon-content.css?timestamp=1490215471547">'); }
   if ($('[class*="icon-controls-"]').length != '0')                 { $('head').append('<link rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/icon-controls.css?timestamp=1490215471547">'); }
   if ($('[class*="icon-datanetwork-"]').length != '0')              { $('head').append('<link rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/icon-datanetwork.css?timestamp=1490215471547">'); }
   if ($('[class*="icon-devices-"]').length != '0')                  { $('head').append('<link rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/icon-devices.css?timestamp=1490215471547">'); }
   if ($('[class*="icon-documents-"]').length != '0')                { $('head').append('<link rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/icon-documents.css?timestamp=1490215471547">'); }
   if ($('[class*="icon-healthcare-"]').length != '0')               { $('head').append('<link rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/icon-healthcare.css?timestamp=1490215471547">'); }
   if ($('[class*="icon-location-"]').length != '0')                 { $('head').append('<link rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/icon-location.css?timestamp=1490215471547">'); }
   if ($('[class*="icon-misc-"]').length != '0')                     { $('head').append('<link rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/icon-misc.css?timestamp=1490215471547">'); }
   if ($('[class*="icon-numslets-"]').length != '0')                 { $('head').append('<link rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/icon-numslets.css?timestamp=1490215471547">'); }
   if ($('[class*="icon-people-"]').length != '0')                   { $('head').append('<link rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/icon-people.css?timestamp=1490215471547">'); }
   if ($('[class*="icon-retail-"]').length != '0')                   { $('head').append('<link rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/icon-retail.css?timestamp=1490215471547">'); }
   if ($('[class*="icon-securityalerts-"]').length != '0')           { $('head').append('<link rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/icon-securityalerts.css?timestamp=1490215471547">'); }
   if ($('[class*="icon-bubble-"]').length != '0')                   { $('head').append('<link rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/icon-speechbubbles.css?timestamp=1490215471547">'); }
   if ($('[class*="icon-trans-"]').length != '0')                    { $('head').append('<link rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/icon-transportation.css?timestamp=1490215471547">'); }
   if ($('[class*="icon-weather-"]').length != '0')                  { $('head').append('<link rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/icon-weather.css?timestamp=1490215471547">'); }

   DS2.miscellaneous();
   
   $(function () {
      var count = 1,
         event = function(event){

            if (event.animationName == 'DOMinsertion') {

               DS2.complexTables();
               DS2.setautoSize();
               DS2.autoWidth();
               DS2.mediaQueryShow();
               DS2.clearField();
               DS2.sliderSwitch();
               DS2.radioFIX();
               DS2.textareaFIX();
               DS2.checkboxSelectall();
               DS2.maxselectbtn();
               DS2.blurOverlay();
               DS2.progressBar();
               DS2.wrapSelect();
               DS2.starRating();
               DS2.bellyband();
               DS2.modalDockedButtons();
               DS2.qtyToggle();
               DS2.starRatings();
               
               if ($('.tiny-accordion, .tiny-tabs, .tiny-accordion-to-tabs').length != '0' && $('#ds2-accordion-css').length == '0') { 
                  DS2.loadAccordionCSS();
                  $('#ds2-accordion-css').on('load', function(){
                     $.getScript($thisDomain + "/js/jquery/2.0.0/ds2-tabs-n-accordions.js?timestamp=1490215471547", DS2.accordionCallback, true);
                  });
               }
               if ($('[data-toggle="modal"]').length != '0' && $('#ds2-modal-css').length == '0') { 
                  DS2.loadModalCSS();
                  $('#ds2-modal-css').on('load', function(){
                     $.getScript("ds2-modal.js", $.noop(), true); 
                  });
               }
               if($('[class*="tooltip"]').length != '0' && $('#ds2-tooltip-css').length == '0') { 
                  DS2.loadTooltipCSS();  
                  $('#ds2-tooltip-css').on('load', function(){
                     $.getScript($thisDomain + "/js/jquery/2.0.0/js/jquery/2.0.0/ds2-tooltip.js?timestamp=1490215471547", $.noop(), true);
                  });
               }
               if($('[data-provide="datepicker"]').length != '0' && $('#ds2-datepicker-css').length == '0') { 
                  DS2.loadCalendarCSS(); 
                  $('#ds2-datepicker-css').on('load', function(){
                     $.getScript($thisDomain + "/js/jquery/2.0.0/ds2-bootstrap-datepicker.js?timestamp=1490215471547", $.noop(), true); 
                  });
               }
               if($('[data-process-cccard]').length != '0' && $('#ds2-ccinput-css').length == '0') { 
                  DS2.loadCCInputCSS();
                  $('#ds2-ccinput-css').on('load', function(){
                     $.getScript($thisDomain + "/js/jquery/2.0.0/ds2-creditCardValidator.js?timestamp=1490215471547", $.noop(), true);
                  });
               }
               if($('.filmstrip').length != '0' && $('#ds2-filmstrip-css').length == '0') { 
                  DS2.loadFilmstripCSS();
                  $('#ds2-filmstrip-css').on('load', function(){
                     $.getScript($thisDomain + "/js/jquery/2.0.0/ds2-filmstrip.js?timestamp=1490215471547", $.noop(), true);
                  });
               }
               if($('.pagination').length != '0' && $('#ds2-pagination-css').length == '0') {
                  DS2.loadPaginationCSS();
                  $('#ds2-pagination-css').on('load', function(){
                     $.getScript($thisDomain + "/js/jquery/2.0.0/ds2-pagination.js?timestamp=1490215471547", $.fn.pagination(), true);
                  });
               }
               if($('#marquee').length != '0' && $('#ds2-marquee-css').length == '0') { 
                  DS2.loadMarqueeCSS();
                  $('#ds2-marquee-css').on('load', function(){
                     $.getScript($thisDomain + "/js/jquery/2.0.0/ds2-marquee.min.js?timestamp=1490215471547", $.noop(), true);
                  });
               }
					if($('.filters').length != '0' && $('#ds2-filters-css').length == '0') {
                  DS2.loadFiltersCSS();
                  $('#ds2-filters-css').on('load', function(){
                     $.getScript($thisDomain + "/js/jquery/2.0.0/ds2-filters.js?timestamp=1490215471547", $.noop(), true);
                  });
               }               
               if($('.linkSelectionMenu, .selectionMenu').length != '0' && $('#ds2-selection-menu-js').length != '0') {
                  $('head').append('<script id="ds2-selection-menu-js" src="' + $thisDomain + '/js/jquery/2.0.0/ds2-selection-menu.js?timestamp=1490215471547">'); 
               }
               if($('[data-validate], [data-required="true"]').length != '0' && $('#ds2-validation-js').length != '0') {
                  $('head').append('<script id="ds2-validation-js" src="' + $thisDomain + '/js/jquery/2.0.0/rwd-form-validation.js?timestamp=1490215471547">'); 
               }
               if ($('.step-indicator').length != '0')                           { DS2.loadStepIndicatorCSS(); }
               
               // lazy load additional fonts
               if ($('[class*="icon-social-"]').length != '0')                   { if($('#iconSocialCSS').length == '0'){ $('head').append('<link id="iconSocialCSS" rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/icon-social.css?timestamp=1490215471547">'); } }
               if ($('[class*="icon-arrows-"]').length != '0')                   { if($('#iconArrowCSS').length == '0'){ $('head').append('<link id="iconArrowCSS" rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/icon-arrows.css?timestamp=1490215471547">'); } }
               if ($('[class*="icon-building-"]').length != '0')                 { if($('#iconBuildingCSS').length == '0'){ $('head').append('<link id="iconBuildingCSS" rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/icon-buildings.css?timestamp=1490215471547">'); } }
               if ($('[class*="icon-content-"]').length != '0')                  { if($('#iconContentCSS').length == '0'){ $('head').append('<link id="iconContentCSS" rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/icon-content.css?timestamp=1490215471547">'); } }
               if ($('[class*="icon-controls-"]').length != '0')                 { if($('#iconControlsCSS').length == '0'){ $('head').append('<link id="iconControlsCSS" rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/icon-controls.css?timestamp=1490215471547">'); } }
               if ($('[class*="icon-datanetwork-"]').length != '0')              { if($('#iconDatanetworkCSS').length == '0'){ $('head').append('<link id="iconDatanetworkCSS" rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/icon-datanetwork.css?timestamp=1490215471547">'); } }
               if ($('[class*="icon-devices-"]').length != '0')                  { if($('#iconDevicesCSS').length == '0'){ $('head').append('<link id="iconDevicesCSS" rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/icon-devices.css?timestamp=1490215471547">'); } }
               if ($('[class*="icon-documents-"]').length != '0')                { if($('#iconDocumentsCSS').length == '0'){ $('head').append('<link id="iconDocumentsCSS" rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/icon-documents.css?timestamp=1490215471547">'); } }
               if ($('[class*="icon-healthcare-"]').length != '0')               { if($('#iconHealthcareCSS').length == '0'){ $('head').append('<link id="iconHealthcareCSS" rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/icon-healthcare.css?timestamp=1490215471547">'); } }
               if ($('[class*="icon-location-"]').length != '0')                 { if($('#iconLocationCSS').length == '0'){ $('head').append('<link id="iconLocationCSS" rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/icon-location.css?timestamp=1490215471547">'); } }
               if ($('[class*="icon-misc-"]').length != '0')                     { if($('#iconMiscCSS').length == '0'){ $('head').append('<link id="iconMiscCSS" rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/icon-misc.css?timestamp=1490215471547">'); } }
               if ($('[class*="icon-numslets-"]').length != '0')                 { if($('#iconNumsletsCSS').length == '0'){ $('head').append('<link id="iconNumsletsCSS" rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/icon-numslets.css?timestamp=1490215471547">'); } }
               if ($('[class*="icon-people-"]').length != '0')                   { if($('#iconPeopleCSS').length == '0'){ $('head').append('<link id="iconPeopleCSS" rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/icon-people.css?timestamp=1490215471547">'); } }
               if ($('[class*="icon-retail-"]').length != '0')                   { if($('#iconRetailCSS').length == '0'){ $('head').append('<link id="iconRetailCSS" rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/icon-retail.css?timestamp=1490215471547">'); } }
               if ($('[class*="icon-securityalerts-"]').length != '0')           { if($('#iconSecurityalertsCSS').length == '0'){ $('head').append('<link id="iconSecurityalertsCSS" rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/icon-securityalerts.css?timestamp=1490215471547">'); } }
               if ($('[class*="icon-bubble-"]').length != '0')                   { if($('#iconBubbleCSS').length == '0'){ $('head').append('<link id="iconBubbleCSS" rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/icon-speechbubbles.css?timestamp=1490215471547">'); } }
               if ($('[class*="icon-trans-"]').length != '0')                    { if($('#iconTransCSS').length == '0'){ $('head').append('<link id="iconTransCSS" rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/icon-transportation.css?timestamp=1490215471547">'); } }
               if ($('[class*="icon-weather-"]').length != '0')                  { if($('#iconWeatherCSS').length == '0'){ $('head').append('<link id="iconWeatherCSS" rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/icon-weather.css?timestamp=1490215471547">'); } }
               
               DS2.miscellaneous();               
            }
        }

      document.addEventListener('animationstart', event, false);
      document.addEventListener('MSAnimationStart', event, false);
      document.addEventListener('webkitAnimationStart', event, false);
   });
});

// Load CSS that isn't used very often
DS2.loadModalCSS = function(){
   if($('#ds2-modal-css').length == '0'){
      $('head').append('<link id="ds2-modal-css" rel="stylesheet" type="text/css" href="../css/ds2-modal.css">');
   }
};
DS2.loadAccordionCSS = function(){
   if($('#ds2-accordion-css').length == '0'){
      $('head').append('<link id="ds2-accordion-css" rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/ds2-accordion.min.css?timestamp=1490215471547">');
   }
};
DS2.loadTooltipCSS = function(){
   if($('#ds2-tooltip-css').length == '0'){
      $('head').append('<link id="ds2-tooltip-css" rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/ds2-tooltip.min.css?timestamp=1490215471547">');
   }
};
DS2.loadCalendarCSS = function () {
   if($('#ds2-datepicker-css').length == '0'){
      $('head').append('<link id="ds2-datepicker-css" rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/ds2-bootstrap-datepicker.min.css?timestamp=1490215471547">');
   }
};
DS2.loadStepIndicatorCSS = function () {
   if($('#ds2-step-indicator-css').length == '0'){
      $('head').append('<link id="ds2-step-indicator-css" rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/ds2-step-indicator.min.css?timestamp=1490215471547">');
   }
};
DS2.loadC2cCSS = function () {
   if($('#ds2-c2c-css').length == '0'){
      $('head').append('<link id="ds2-c2c-css" rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/ds2-c2c.min.css?timestamp=1490215471547">');
   }
};
DS2.loadCCInputCSS = function () {
   if($('#ds2-ccinput-css').length == '0'){
      $('head').append('<link id="ds2-ccinput-css" rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/ds2-cc-input-field.min.css?timestamp=1490215471547">');
   }
};
DS2.loadFilmstripCSS = function () {
   if($('#ds2-filmstrip-css').length == '0'){
      $('head').append('<link id="ds2-filmstrip-css" rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/ds2-filmstrip.min.css?timestamp=1490215471547">');
   }
};
DS2.loadPaginationCSS = function () {
   if($('#ds2-pagination-css').length == '0'){
      $('head').append('<link id="ds2-pagination-css" rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/ds2-pagination.css?timestamp=1490215471547">');
   }
};
DS2.loadMarqueeCSS = function () {
    if($('#ds2-marquee-css').length == '0'){
        $('head').append('<link id="ds2-marquee-css" rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/ds2-marquee.min.css?timestamp=1490215471547">');
    }
}
DS2.loadFiltersCSS = function () {
    if($('#ds2-filters-css').length == '0'){
        $('head').append('<link id="ds2-filters-css" rel="stylesheet" type="text/css" href="' + $thisDomain + '/styles/2.0.0/css/ds2-filters.css?timestamp=1490215471547">');
    }
};

// ACCORDION CALLBACK
DS2.accordionCallback = function(){
   $('.accordion-content .faux-table-cell').each(function(){
      var cellHeight = $(this).height() - 7;
      $(this).css({
        'background-position': '0 ' + cellHeight + 'px' 
      });
   });
};

$(window).on("resize", function () {
   "use strict";
   DS2.setBlur();
   
   if($('.product-tile').width() <= '285'){
      $('.product-badge-secondary').hide();
   }
   else{
      $('.product-badge-secondary').show();
   }
   
   if ($('.autoSize').length !== 0) {
      $('.autoSize-this').removeAttr('style');

      if($('.autoSize').attr('data-autosize-what') != undefined){
         var tmp = $('.autoSize').attr('data-autosize-what').split("|");
         $(tmp[0]).removeAttr('style');
         $(tmp[1]).removeAttr('style');
         $(tmp[2]).removeAttr('style');
         $(tmp[3]).removeAttr('style');
         $(tmp[4]).removeAttr('style');
         $(tmp[5]).removeAttr('style');
      }

      DS2.setautoSize();
      DS2.bellyband();
   }
   if ($('.autoWidth').length !== 0) {
      $('.autoWidth-this').removeAttr('style');
   }
   if ($('.modal').length != '0')                                          { DS2.modalDockedButtons(); }
   if ($('[data-show-at], [data-show-between]').length != '0')             { DS2.mediaQueryShow(); }
   
   // COMPLEX TABLES
   $('.data-row-list li').addClass('hide');
   $('.data-row').each(function(){
      if($(this).next('.data-row-list').is(':hidden')){
         $(this).removeClass('opened');
         $(this).find('.icon-accordion-minus').removeClass('icon-accordion-minus').addClass('icon-accordion-plus');
         $(this).find('span[id="sup-"]').text('Show row below.');
         $(this).next('.data-row-list').addClass('hide');
      }
   });
   
   DS2.datatable();
});

// COMPLEX TABLES
DS2.complexTables = (function(){
   $('.data-row th.col-1').each(function(){
      var colText = $(this).text();
      $(this).contents().filter(function(){
         return this.nodeType === 3
      }).wrap('<span id="span-'+ $(this).attr('id') +'" class="hide"></span>');
      $(this).append('<button type="button" aria-expanded="false" aria-describedby="sup-'+ $(this).attr('id') +'"><i class="icon-accordion-plus" aria-hidden="true"></i>'+ colText +'</button><span id="sup-'+ $(this).attr('id') +'" style="display:none">Show row below.</span>');
   });
   
   $('.data-row-list').addClass('hide');
   $('.data-row-list li').addClass('hide');
   DS2.datatable();
   DS2.datatableExpand(); 
});

DS2.datatable = function(){         
   var h1 = $('#heading1').text(),
       h2 = $('#heading2').text(),
       h3 = $('#heading3').text(),
       h4 = $('#heading4').text(),
       h5 = $('#heading5').text(),
       h6 = $('#heading6').text(),
       h7 = $('#heading7').text(),
       h8 = $('#heading8').text(),
       h9 = $('#heading9').text();

   $('#row-heading').find('.align-col-right').each(function(){
      var colNum = $(this).index() + 1;
      $('.data-row td.col-' + colNum).addClass('text-right');
   });
   $('table').each(function(){
      if( $(this).find('tbody > tr').length >= '6' && $(this).attr('data-table')!=="complex-table"){
         $(this).addClass('striped');
         $(this).find('tbody > tr:odd').addClass('odd');
      }
   });
   
   $('.data-row').each(function(){
      var $this = $(this),
          data1 = $(this).find('.col-1').html(),
          data2 = $(this).find('.col-2').html(),
          data3 = $(this).find('.col-3').html(),
          data4 = $(this).find('.col-4').html(),
          data5 = $(this).find('.col-5').html(),
          data6 = $(this).find('.col-6').html(),
          data7 = $(this).find('.col-7').html(),
          data8 = $(this).find('.col-8').html(),
          data9 = $(this).find('.col-9').html(),
         anycol = $(this).find('td:hidden'),
      rowNumber = $this.index('.data-row') + 1;
         
      if($('#heading2').is(':hidden')){
         $this.next('.data-row-list').find('.li-2').removeClass('hide').html('<div>'+ h2 +': </div><div>'+ data2 +'</div>');
      }
      if($('#heading3').is(':hidden')){
         $this.next('.data-row-list').find('.li-3').removeClass('hide').html('<div>'+ h3 +': </div><div>'+ data3 +'</div>');
      }
      if($('#heading4').is(':hidden')){
         $this.next('.data-row-list').find('.li-4').removeClass('hide').html('<div>'+ h4 +': </div><div>'+ data4 +'</div>');
      }
      if($('#heading5').is(':hidden')){
         $this.next('.data-row-list').find('.li-5').removeClass('hide').html('<div>'+ h5 +': </div><div>'+ data5 +'</div>');
      }
      if($('#heading6').is(':hidden')){
         $this.next('.data-row-list').find('.li-6').removeClass('hide').html('<div>'+ h6 +': </div><div>'+ data6 +'</div>');
      }
      if($('#heading7').is(':hidden')){
         $this.next('.data-row-list').find('.li-7').removeClass('hide').html('<div>'+ h7 +': </div><div>'+ data7 +'</div>');
      }
      if($('#heading8').is(':hidden')){
         $this.next('.data-row-list').find('.li-8').removeClass('hide').html('<div>'+ h8 +': </div><div>'+ data8 +'</div>');
      }
      if($('#heading9').is(':hidden')){
         $this.next('.data-row-list').find('.li-9').removeClass('hide').html('<div>'+ h9 +': </div><div>'+ data9 +'</div>');
      }
      if(anycol.length != '0'){
         $(this).addClass('has-button');
         $(this).find('span[id*="span-"]').addClass('hide');
         $(this).find('.col-1 button').removeClass('hide');
         $(this).closest('table').addClass('complex-table');
      }
      else{
         $(this).removeClass('has-button');
         $(this).find('span[id*="span-"]').removeClass('hide');
         $(this).find('.col-1 button').addClass('hide');
         $(this).closest('table').removeClass('complex-table');
      }
                  
   });
   
   $('[data-toggle="table"]').click(function(){
      var $this = $(this);
      $this.toggleClass('down');
      
      var colIndex = $this.prevAll().length;
      var tbody = $this.closest("table").find("tbody");
      
      var sortRows = function(rowSelector, dataSelector){
         var rows = tbody.find(rowSelector);
         rows.sort(function(a,b){
            var A = $(a).find(dataSelector).eq(colIndex).text();
            var B = $(b).find(dataSelector).eq(colIndex).text();
            
            if (!isNaN(A)){
               A = Number(A);
            }
            
            else if (!isNaN(B)){
               B = Number(B);
            } 
            
            if(!$this.hasClass('down')){
               return (A > B);
            }
            else{
               return (B > A);
            }
         });  
         $.each(rows, function(index, row){
            tbody.append(row);
         });
      };
      if($this.closest("table").attr('data-table')=="complex-table"){
         sortRows("tr.data-row", "th>span");
      } else {
         sortRows("tr", "td");      
      }
   });

}

DS2.datatableExpand = function(){
   $('table .col-1 button').on('click', function(){
      if(!$(this).hasClass('hide') && $(this).closest('.data-row').next('.data-row-list').hasClass('hide')){
         $(this).attr({'aria-expanded':'true'});
         $(this).find('i').removeClass().addClass('icon-accordion-minus');
         $(this).closest('.data-row').addClass('opened');
         $(this).closest('.data-row').next('.data-row-list').removeClass('hide'); 
         $(this).next().text('Hide row below.');         
      }
      else{
         $(this).attr({'aria-expanded':'false'});
         $(this).find('i').removeClass().addClass('icon-accordion-plus');
         $(this).closest('.data-row').removeClass('opened');
         $(this).closest('.data-row').next('.data-row-list').addClass('hide');
         $(this).next().text('Show row below.');         
      }      
   });
}
// end complex tables

DS2.mediaQueryShow = (function(){
   $('[data-show-at]').each(function(){

      if($(this).not('[data-dom="ready"]')){
         $(this).attr('data-dom','ready');

         var $this      = $(this),
            showAtWidth = $(this).attr('data-show-at');

         if( window.innerWidth >= showAtWidth ){
            $this.css({
               'display':'',
               'visibility':'visible'
            });
         }
         else{
            $this.css({
               'display':'none',
               'visibility':'hidden'
            });
         }
      }
   });

   $('[data-show-between]').each(function(){
      if($(this).not('[data-dom="ready"]')){
         $(this).attr('data-dom','ready');

         var $this      = $(this),
            showBetween = $(this).attr('data-show-between'),
            betweenThese = showBetween.split("|"),
            betweenThis = betweenThese[0],
            betweenThat = betweenThese[1];

         if(betweenThis == ''){ betweenThis = '0' }
         if(betweenThat == ''){ betweenThat = window.innerWidth }

         if( window.innerWidth >= betweenThis && window.innerWidth <= betweenThat){
            $this.css({
               'display':'inherit',
               'visibility':'visible'
            });
         }
         else{
            $this.css({
               'display':'none',
               'visibility':'hidden'
            });
         }
      }
   });
});

// MAKE ALL CONTAINERS SAME HEIGHT
DS2.setautoSize = function () {
   $('.autoSize').each(function () {
      if($(this).not('[data-dom="ready"]')){
         $(this).attr('data-dom','ready');

         var autoSize = $(this).find('.autoSize-this').tallestSize() + "px";
         $(this).find('.autoSize-this').each(function () {
            if (window.innerWidth >= '768') {
               $(this).css({
                  'height': autoSize
               });
            }
            else if (window.innerWidth <= '768' && $(this).parents('.row-nowrap')) {
               $(this).parents('.row-nowrap').find('.autoSize-this').css({
                  'height': autoSize
               });
            }
            else {
               $(this).css({
                  'height': 'auto'
               });
            }
         });

         if($(this).attr('data-autosize-what') != undefined){
            var sizeWhat = $(this).attr('data-autosize-what'),
                     tmp = sizeWhat.split("|"),
               autoSize1 = $(this).find(tmp[0]).tallestSize() + "px",
               autoSize2 = $(this).find(tmp[1]).tallestSize() + "px",
               autoSize3 = $(this).find(tmp[2]).tallestSize() + "px",
               autoSize4 = $(this).find(tmp[3]).tallestSize() + "px",
               autoSize5 = $(this).find(tmp[4]).tallestSize() + "px";

            $(this).find(tmp[0]).css({ 'height': autoSize1 });
            $(this).find(tmp[1]).css({ 'height': autoSize2 });
            $(this).find(tmp[2]).css({ 'height': autoSize3 });
            $(this).find(tmp[3]).css({ 'height': autoSize4 });
            $(this).find(tmp[4]).css({ 'height': autoSize5 });
         }

      }
   });
   $('.autoSize-children').each(function(){
      if($(this).not('[data-dom="ready"]')){
         $(this).attr('data-dom','ready');

         var autoHeight = $(this).children().tallestSize() + "px",
              autoWidth = $(this).children().widestSize() + "px";

         $(this).children().each(function () {
            $(this).css({
               'height': autoHeight,
               'width': autoWidth
            });
         });
      }
   });
};

// MAKE ALL CONTAINERS SAME WIDTH
DS2.autoWidth = function () {
   $('.autoWidth').each(function () {
      if($(this).not('[data-dom="ready"]')){
         $(this).attr('data-dom','ready');

         var autoWidth = $(this).find('.autoWidth-this').widestSize() + "px";
         $(this).find('.autoWidth-this').each(function () {
            $(this).css({
               'width': autoWidth
            });
         });
      }
   });
};

// CLEAR FORM FIELD
DS2.clearField = function () {
   $('.reset-field').each(function(){
      if($(this).not('[data-dom="ready"]')){
         $(this).attr('data-dom','ready');

         $(this).attr({
            'tabindex': '-1',
            'aria-hidden': 'true'
         }).on('click', function () {
            $(this).removeAttr('style');
            $(this).siblings('input, textarea').prop('value','').focus();
         });
      }
   });
};

// ON/OFF SLIDE SWITCH
DS2.sliderSwitch = function () {
   $('.btn-switch > input').each(function () {
      var $this = $(this);

      if($(this).not('[data-dom="ready"]')){
         $(this).attr('data-dom','ready');

         $(this).on('focus', function(){
            $(this).closest('.btn-switch').addClass('focused');
         });
         $(this).on('blur', function(){
            $(this).closest('.btn-switch').removeClass('focused');
         });
         
         $(this).closest('label').on('keydown', function (e) {
            if (e.keyCode in keymap) {
               keymap[e.keyCode] = true;
               if(keymap[13]) {
                  $this.click();
                  e.stopPropagation();
               }
            }
         });
         
         var   x = $(this).closest('.btn-switch-label').find('> span').text(),
               y = $(this).closest('.btn-switch-label').find('.switch-overlay > .btn-slider-on').text(),
               z = $(this).closest('.btn-switch-label').find('.switch-overlay > .btn-slider-off').text(),
            msg1 = 'Activate to toggle'
               d = 'Disabled';
         
         if($(this).is(':checked') == true){
            if($(this).is(':disabled') == false){
               $(this).attr({'aria-checked':'true', 'aria-label': x + ' ' + y + '. ' + msg1});
            }
            else{
               $(this).attr({'aria-label': x + ' ' + y + '. ' + d + '. '});
            }
         }
         else{
            if($(this).is(':disabled') == false){
               $(this).attr({'aria-checked':'false', 'aria-label': x + ' ' + z + '. ' + msg1});
            }
            else{
               $(this).attr({'aria-label': x + ' ' + z + '. ' + d + '. '});
            }
         }
      }
   });

   $(document).on('click touchstart', '.btn-switch > input', function (e) {
      if(e.type == 'touchstart') {
         return;
      }
      e.handled = true;

      var x = $(this).closest('.btn-switch-label').find('> span').text(),
          y = $(this).closest('.btn-switch-label').find('.switch-overlay > .btn-slider-on').text(),
          z = $(this).closest('.btn-switch-label').find('.switch-overlay > .btn-slider-off').text(),
       msg1 = 'Activate to toggle',
          d = 'Disabled';
      
      if($(this).is(':checked') == true){
         if($(this).is(':disabled') == false){
            $(this).attr({'aria-checked':'true', 'aria-label': x + ' ' + y + '. ' + msg1});
         }
      }
      else{
         if($(this).is(':disabled') == false){
            $(this).attr({'aria-checked':'false', 'aria-label': x + ' ' + z + '. ' + msg1});
         }
      }

   });

};


/* =====================================================
   * RADIO ACCESSIBILITY FIX v1.1.0
   * http://www.att.com/sandbox
   * ===================================================
   * Copyright 2016 AT&T, Inc.
   *
   * Description: Radios are announced incorrectly when
   * the form elements are wrapped within other elements
   * like DIV's.

   * Since designs are complex there is no alternative
   * but to tell screen readers what is a radio, which
   * group of radios it belongs to, and which one within
   * the group is selected.
* ====================================================== */
DS2.radioFIX = (function() {
   $('[role="radiogroup"]').each(function(){

      $(this).find('[data-role="radio"], [role="radio"]').each(function(index){
         if($(this).not('[data-dom="ready"]')){
            $(this).attr('data-dom','ready');

            if(this.tagName == "BUTTON"){
               var isChecked = $(this).hasClass('active') ? 'Checked' : 'Unchecked',
                  NofN     = (index + 1) + ' of ' + $(this).closest('[role="radiogroup"]').find('button[role="radio"]').length,
                  $buttons = $(this).closest('[role="radiogroup"]').find('button[role="radio"]');

               if(/Android/i.test(navigator.userAgent)) {
                  $(this).append('<span class="hidden-spoken">. '+ NofN+'.</span>');
               }

               if(notMobile){
                  if( $(this).hasClass('active') ){
                     $(this).attr('tabindex','0');
                  }
                  else if( $(this).attr('tabindex') == '0'){
                     $(this).attr('tabindex','0');
                  }
                  else{
                     $(this).attr('tabindex','-1');
                  }
                  $(this).on('focus', function(){
                     $(this).click();
                  });

                  $(this).on('keydown', function(e){
                     if (e.keyCode in keymap) {
                        keymap[e.keyCode] = true;
                        /* USED ON BUTTON GROUPS - possible issue with NVDA */
                        if(keymap[37] || keymap[38]) { // left||up = previous
                           if(index == "0"){
                              $buttons.attr('tabindex','-1');
                              $buttons.last().focus().click().attr('tabindex','0');
                           }
                           else{
                              $(this).attr('tabindex','-1').prev().focus().click().attr('tabindex','0');
                           }
                           e.preventDefault();
                        }
                        if(keymap[39] || keymap[40]) { // right||down = next
                           if(index == ($buttons.length) -1 ) {
                              $buttons.attr('tabindex','-1');
                              $buttons.first().focus().click().attr('tabindex','0');
                           }
                           else{
                              $(this).attr('tabindex','-1').next().focus().click().attr('tabindex','0');
                           }
                           e.preventDefault();
                        }
                     }
                  });
               }
            }
            if(this.tagName != "BUTTON"){
               var isChecked  = $(this).find('input[type="radio"]').is(':checked') ? 'true' : 'false',
                   isDisabled = $(this).find('input[type="radio"]').is(':disabled') ? 'true' : 'false',
                   numOfx     = (index + 1) + ' of ' + $(this).closest('[role="radiogroup"]').find('input[type="radio"]').length,
                   NofN       = (index + 1) + ' of ' + $(this).closest('[role="radiogroup"]').find('button[role="radio"]').length;

               $(this).attr({'aria-disabled':isDisabled, 'data-opNum':numOfx});
               isChecked == 'true' ? $(this).closest('.radio-box').addClass('active') : $(this).closest('.radio-box').removeClass('active');

               if(/Android/i.test(navigator.userAgent)) {
                  $(this).append('<span class="hidden-spoken">. '+ numOfx+'.</span>');
               }if(/iPhone|iPod/i.test(navigator.userAgent)) {
                  $(this).append('<span class="hidden-spoken">. '+ numOfx+'.</span>');
              }
            }
         }
      });
   });

   // update radios on click
   $('[role="radiogroup"] input[type="radio"]').on('click', function(){
      var    $this  = $(this),
         isDisabled = $(this).find('input').is(':disabled') ? 'true' : 'false';

      $(this).closest('[role="radiogroup"]').find('input[type="radio"]').each(function(){
         var isDisabled2= $(this).is(':disabled') ? 'true' : 'false',
            numOfx2    = $(this).closest('[data-role="radio"]').attr('data-opNum');

         $(this).not($this).closest('[data-role="radio"]').attr({'aria-disabled':isDisabled2}).closest('.radio-box').removeClass('active');
      });
        $this.closest('[data-role="radio"]').attr({'aria-disabled':isDisabled}).focus().closest('.radio-box').addClass('active');
   });
   /* end radio fix */
});

// TEXTAREA ADJUSTMENT WHEN RESET
DS2.textareaFIX = (function(){
   $('textarea').each(function(){
      if($(this).not('[data-dom="ready"]')){
         $(this).attr('data-dom','ready');

         $(this).prop('scrollHeight') > $(this).innerHeight() ? $(this).addClass('hasScrollbar') : $(this).removeClass('hasScrollbar');
         $(this).on('keyup', function(){
            $(this).prop('scrollHeight') > $(this).innerHeight() ? $(this).addClass('hasScrollbar') : $(this).removeClass('hasScrollbar');
         });
      }
   });
});

// SELECT ALL CHECKBOXES
DS2.checkboxSelectall = (function(){
   $('.checkbox-selectall').each(function(){
      if($(this).not('[data-dom="ready"]')){
         $(this).attr('data-dom','ready');

         var $this            = $(this),
          boxGroup            = $this.attr('data-selectall-group'),
          checkboxesSelector  = $('#'+ boxGroup).find('input[type="checkbox"]');
          
        $.each(checkboxesSelector, function(index) {
            var numOfChx     = (index + 1) + ' of ' + $(checkboxesSelector).closest('[role="group"]').find(':checkbox').length;
            $(this).closest('[data-role="checkbox"], [role="checkbox"]').append('<span class="hidden-spoken">. '+ numOfChx+'.</span>');
        }); 
          
          if(notMobile){ // FF + NVDA reads twice if role="checkbox" is there as a NATIVE checkbox parent || S15-84380
             $this.closest('[role="checkbox"]').attr('data-role', 'checkbox').removeAttr('role');
             $this.closest('.form-row').siblings('[role="group"]').find('[role="checkbox"]').attr('data-role', 'checkbox').removeAttr('role');
         }
         
         function setState(){
            var someChecked    = false,
                someNotChecked = false;

            var status = "none";

            $(checkboxesSelector).each( function() {
               if( $(this).prop("checked") === true ) {
                  $(this).attr('checked', true).closest('[role="checkbox"], [data-role="checkbox"]').attr("aria-checked", "true");
                  someChecked = true;
               } else {
                  $(this).attr('checked', false).closest('[role="checkbox"], [data-role="checkbox"]').attr("aria-checked", "false");
                  someNotChecked = true;
               }
            });

            if( someChecked && someNotChecked ) {
               $this
                  .prop({'indeterminate': true, 'checked': false})
                  .attr({'indeterminate': true})
                  .addClass('indeterminate')
                  .closest('[role="checkbox"], [data-role="checkbox"]')
                     .attr('aria-checked', 'mixed');
            }
            else if( someChecked && !someNotChecked ) {
               $this.prop('checked', true)
                  .attr({'checked': true})
                  .removeAttr("indeterminate")
                  .removeClass('indeterminate')
                  .closest('[role="checkbox"], [data-role="checkbox"]')
                     .attr('aria-checked', 'true');
            }
            else if( !someChecked ) {
               $this.prop('checked', false)
                  .attr({'checked': false})
                  .removeAttr("indeterminate")
                  .removeClass('indeterminate')
                  .closest('[role="checkbox"], [data-role="checkbox"]')
                     .attr('aria-checked', 'false');
            }
         }

         $this.on('click', function() {
            $(checkboxesSelector).each( function() {
               $(this)
                  .prop('checked', $this.prop('checked'))
                  .attr('checked', $this.prop('checked'))
                     .closest('[role="checkbox"], [data-role="checkbox"]')
                     .attr('aria-checked', $this.prop('checked'));

               if($this.prop('checked') == true){
                  $this
                     .removeAttr('indeterminate')
                     .removeClass('indeterminate')
                     .prop('checked', $this.prop('checked'))
                        .closest('[role="checkbox"], [data-role="checkbox"]')
                        .attr( "aria-checked",'true' );
               }
               else if($this.prop('checked') == false){
                  $this
                     .prop({'checked': $this.prop('checked'), 'indeterminate': false})
                        .closest('[role="checkbox"], [data-role="checkbox"]')
                        .attr('aria-checked','false');

                  $(checkboxesSelector).each( function() {
                     var box = $(this);

                     setState();

                     box.click( function() {
                        setState();
                     });
                  });
               }
            });
         });

         $(checkboxesSelector).each( function() {
            var box = $(this);

            setState();

            box.click( function() {
                if(!$(this).prop('checked') && $(this).closest('[role="group"]').find(':checkbox:checked').length==0){
                   $this.prop({'checked': false, 'indeterminate': false})
                      .closest('[role="checkbox"], [data-role="checkbox"]').attr('aria-checked','false');
                } else if($(this).prop('checked') && $(this).closest('[role="group"]').find(':checkbox:not(:checked)').length==0){
                   $this.prop({'checked': true, 'indeterminate': false})
                      .closest('[role="checkbox"], [data-role="checkbox"]').attr('aria-checked','true');
                }
               setState();
            });
         });

         return $this;
      }
   });
});

// max selectable number of buttons in a button group
DS2.maxselectbtn = (function(){
   $('[data-max-select]').each(function () {
      if($(this).not('[data-dom="ready"]')){
         $(this).attr('data-dom','ready');

         var $this = $(this),
            $btnMax = $this.attr('data-max-select'),
            countchecked = 0;
            
         $this.find('.btn').each(function(){$(this).attr('aria-label', $(this).text()+ ' ' +($btnMax - countchecked) + ' choices remaining.')});
         $this.find('.btn').on('state_change', function () {
            countlength = $this.find('.btn').length,
            countchecked = $this.find('.btn.active').length;
            //$thisAria = $this.find('button').attr('aria-label');
           	if (countchecked < $btnMax) {
               $this.find('button:disabled').removeAttr('disabled');
               if(($btnMax - countchecked)<=1) { 
                   $this.find('.btn').each(function(){$(this).attr('aria-label', $(this).text() + ' ' +($btnMax - countchecked) + ' choice remaining.')}); 
               } else { 
                   $this.find('.btn').each(function(){$(this).attr('aria-label', $(this).text() + ' ' +($btnMax - countchecked) + ' choices remaining.')}); 
               }
               
               $this.on('click', 'button.active', function (e) {
                  $this.removeClass('active');
                  $this.attr('data-toggle', 'button').find('button:disabled').removeAttr('disabled').find('button > .hidden-spoken').remove();
               });
            }
            else {
               $this.find('.btn').each(function(){
                  if($(this).hasClass('active')){
                     $(this).attr('aria-label', $(this).text() + ' Max options selected.')
                 }else{
                     $(this).attr('aria-label', $(this).text() + ' ' + $btnMax + ' options already selected.');
                 }
               });
               $this.find('button').not(".active").attr({
                  'onclick': 'return false;',
                  'disabled': 'disabled',
                  'aria-selected': 'false'
               });
               $this.removeAttr('data-toggle');
            }
         });
      }
   });
});

// get current properties of element
DS2.getProperties = function(e,p,g){g=window.getComputedStyle;return(g?g(e):e.currentStyle)[p.replace(/-(\w)/gi,function(w,l){return l.toUpperCase()})]},
DS2.blurOverlay = (function(){
   if(isIE){
      $('.blur-overlay').each(function(){
			if($(this).not('[data-dom="ready"]')){
         $(this).attr('data-dom','ready');

            var thisElement = $(this);
            var getId = $(this).attr('data-blur-what'),
            marquee  = document.getElementById(getId);
            if(typeof getId === "undefined") { return }
            var blur_bgImg= (function() {
               var bg = DS2.getProperties(marquee, 'background-image');
               bg = bg.replace('url("','').replace('")','');
               return bg;
            });
            var bgImg = new Image();
            bgImg.src = blur_bgImg();
            var imgSize = (function(){
               bgImg.onload = (function() {
                  var imgWidth = this.width;
                  var imgHeight = this.height;
                  blurFunction(imgWidth, imgHeight);
               });
            });
            // add blurBg overlay
            var blurFunction = (function(imgWidth, imgHeight){
               thisElement.before('<svg class="blurBg" viewBox="0 0 '+ imgWidth +' '+ imgHeight +'" preserveAspectRatio="xMidYMin slice" id="'+ getId +'-blurIMG"><image width=100% height=100% style="filter:url(#blur-effect-1);" x="0" y="0" xlink:href="'+ blur_bgImg() +'" /><filter id="blur-effect-1"><feGaussianBlur stdDeviation="8" /></filter></svg>');
               DS2.setBlur();
               $(window).on('resize', function(){
                     var bgValues =  DS2.getProperties(marquee, 'background-position').split(" ");
                     var marqueeWidth =  parseFloat(DS2.getProperties(marquee, 'width'));
                     var xPosition = parseFloat(bgValues[0]),
                     posPercent = xPosition/100,
                     posDifference = posPercent-0.5;
                     var blurPosition = (function(){
                         var blurPosX = (marqueeWidth*posDifference)+((marqueeWidth-imgWidth)*posDifference);
                         return blurPosX;
                     });
                     if(xPosition==50){
                         $('.blurBg > image').attr('x', 0);
                     }else{
                         $('.blurBg > image').attr('x', blurPosition());
                     }
               }).resize();
            });
            imgSize();
         }
		});
	}
	else{
		$('.blur-overlay').each(function(){
      	if($(this).not('[data-dom="ready"]')){
            $(this).attr('data-dom','ready');

            var getId = $(this).attr('data-blur-what');
            if(typeof getId === "undefined") { return }
            // add blurBg overlay
            !$(this).siblings('.blurBg').length && $(this).before('<div class="blurBg" id="'+ getId +'-blurIMG"></div>');
         }
		});
		DS2.setBlur();
	}
});
DS2.setBlur = (function(){
    setTimeout(function() {
        $('.blur-overlay').each(function(){
           if($(this).not('[data-dom="ready"]')){
              $(this).attr('data-dom','ready');

              var getId   = $(this).attr('data-blur-what');
              
              if(typeof getId === "undefined") { return }
              
              var marquee     = document.getElementById(getId),
                  blur_width  = marquee.offsetWidth,
                  blur_height = marquee.offsetHeight,
                  bgImg       = DS2.getProperties(marquee, 'background-image'),
                  bgPos       = DS2.getProperties(marquee, 'background-position'),
                  bgSize      = DS2.getProperties(marquee, 'background-size'),
                  blurBg      = getId + '-blurIMG',
                  overlayY    = $(this).offset().top - $('#'+ blurBg).offset().top,
                  overlayX    = $(this).offset().left - $(this).offsetParent().offset().left,
                  overlayW    = $(this).outerWidth(),
                  overlayH    = $(this).outerHeight();
              
              
              if($(this).hasClass('promo-overlay')){                 
                var newClip  = 'rect(' + overlayY + 'px, ' + (overlayW + overlayX) + 'px, ' + (overlayH + overlayY + 10) + 'px, ' + overlayX + 'px)',
                    clipPath = 'inset(' + overlayY + 'px ' + (overlayW + overlayX) + 'px ' + (overlayH + overlayY + 10) + 'px ' + overlayX + 'px)';
                
                $("#" + blurBg).css({
                    'background-image': bgImg,
                    'background-position': bgPos,
                    'background-size': bgSize,
                    'clip': newClip,
                    'height': blur_height + 10,
                    'width': blur_width
                 });
              }
              else{
                 var newClip  = 'rect(' + overlayY + 'px, ' + (overlayW + overlayX) + 'px, ' + (overlayH + overlayY) + 'px, ' + overlayX + 'px)',
                    clipPath = 'inset(' + overlayY + 'px ' + (overlayW + overlayX) + 'px ' + (overlayH + overlayY) + 'px ' + overlayX + 'px)';
                 
                 $("#" + blurBg).css({
                    'background-image': bgImg,
                    'background-position': bgPos,
                    'background-size': bgSize,
                    'clip': newClip,
                    'height': blur_height,
                    'width': blur_width
                 });
              }
           }
        });
    }, 300);
});

DS2.progressBar = function(){
   // USAGE INDICATOR ANIMATION   
   var $css = $('#ds2-progressbarCSS')
   // Lazyload style sheet   
   if($css.length == '0'){
      $('head').append('<link id="ds2-progressbarCSS" rel="stylesheet" type="text/css"  href="' + $thisDomain + '/styles/2.0.0/css/ds2-progressbar.min.css?timestamp=1490215471547">');
   }
   var fill = function() {       
      $('.progress').each(function(i, each) {
          var $this = $(each)
          if($this.not('[data-dom="ready"]')) {
              $this.attr('data-dom', 'ready')
          }
          $this.children('[data-percentage]').each(function () {
             var barWidth = $(this).attr('data-percentage');
             $(this).animate({
                'width': barWidth + '%'
             }, 2000);
          });
      })
   }
   
   // run animation when .ajaxed is found in the page
   $('.progress.ajaxed').length > 0 && fill()
    // animate progress bar when style sheet is loaded
   $('#ds2-progressbarCSS').one('load', fill)
};

/* ===================================================
 * ADAPTIVE SELECT ELEMENT SKIN v2.0.0
 * http://quickstart.att.com/digitaldesign
 * ===================================================
 * Copyright 2015 AT&T, Inc.
 *
 * Description: The options of a dropdown cannot be styled
 * but a custom dropdown can. This function takes a normal
 * select element and converts it into the appropriate div
 * structure and applies the necessary functionality for it
 * to work like a traditional select dropdown.
 *
 * This version allows mobile devices to continue using the
 * traditional Sandbox 3.2.0 version of the select element
 * while providing a more robust version to desktops.
 * ========================================================== */
DS2.wrapSelect = function () {
   // IF MOBILE
   $('select.awd-select').not('.isWrapped').each(function () {
      var sel = $(this);
      var selectedText = $(':selected', $(this)).text();

      if (isMobile) {
         $(this).addClass('isWrapped').wrap('<span class="selectWrap"></span>');
         $(this).parent().append('<span aria-hidden="true">' + selectedText + '<i class="icon-down"></i></span>');
         if($(this).is(':disabled')){
            $(this).closest('.selectWrap').addClass('disabled');
         }
         
         $(this).on('change', function (e) {
            var selectedText = $(':selected', $(this)).text();
            $(this).next().html(selectedText + ' <i class="icon-down"></i>');
            $(this).focus();
            if($(this).find('option').attr('data-expand-this')!=="undefined" && typeof $(this).find(':selected').attr('data-expand-this')!=="undefined" ){
               $('#' + $(this).find(':selected').attr('data-expand-this')).siblings('div').slideUp(100).attr({'aria-hidden': 'true', 'tabindex': '-1'});
               $('#' + $(this).find(':selected').attr('data-expand-this')).slideDown(500, function(){$(this).find('*:first').attr('tabindex', '0').focus()}).attr({'aria-hidden': 'false', 'tabindex': '0'});
            } 
            else {
               $(this).find('option').each(function(){
                  $('#'+ $(this).attr('data-expand-this')).slideUp(1)
               })
            }
            DS2.modSelectPlaceholder();
         });
      }
      DS2.modSelectPlaceholder();
   });

   // DESKTOP
   if (notMobile) {
      $('select.awd-select').not('.isWrapped').each(function () {
         if( $(this).hasClass('large') ){
            $(this).addClass('isWrapped closed').wrap('<span class="selectWrap large"></span>');
         }
         else{
            $(this).addClass('isWrapped closed').wrap('<span class="selectWrap"></span>');
         }

         $('select.awd-select optgroup').each(function () {
            var optLabel = $(this).attr('label');
            if (typeof optLabel !== typeof undefined && optLabel !== false) {
               var $optLabel = optLabel
            }
            $(this).wrapAll('<li class="optgroup-wrapper">' + $optLabel + '</li>');
            $(this).replaceWith(function () {
               return $(this).contents();
            });
         });

         $('select.awd-select option').each(function () {
            var isSelected = $(this).attr('selected');
            if (typeof isSelected !== typeof undefined && isSelected !== false) {
               $(this).attr('aria-selected', 'true');
            } 

            var $this = $(this);
            var $props = $this.attr(),
               $oldAttr = [];

            $.each($props, function (name, value) {
               $oldAttr.push(name + '="' + value + '" ');
            });
            var $attr = $oldAttr.join("");

            $(this).wrap('<li ' + $attr + ' class="awd-select-list-item" value="' + $(this).attr('value') + '" tabindex="0" role="option">');

            if ($(this).attr('data-img-src')) {
               $(this).prepend('<img src="' + $(this).attr('data-img-src') + '" alt="">');
            }
            $(this).replaceWith(function () {
               return $(this).contents();
            });
         });

         var $this = $(this);
         var $props = $this.attr(),
            $oldAttr = [];

         $.each($props, function (name, value) {
            $oldAttr.push(name + '="' + value + '" ');
         });
         var $attr = $oldAttr.join(""),
         $btext = $this.find($('[data-default-placeholder]')).text();
         
         $this.before('<input type="hidden" id="' + $this.attr('id') + '-value" name="' + $this.attr('name') + '" class="awd-select-value" role="combobox">');
         
         if($this.attr('select-btn-menu') == "true"){                  
            $this.before('<button ' + $attr + ' type="button" aria-haspopup="true" aria-expanded="false" data-default-placeholder="'+ $btext +'">'+ $btext +'</button>');
         }
         if($this.attr('select-btn-menu') == "false"){            
            $this.before('<input ' + $attr + ' type="text" aria-activedescendant="select" role="combobox" placeholder="'+ $btext +'" readonly aria-expanded="false">') ;
         }
         $(this).closest('.selectWrap').find('li[data-default-placeholder]').remove();
         
         $this.wrap('<div id="' + $this.attr('id') + '-wrapper" class="selectWrapper"><ul role="menu" aria-label="Choose options" class="awd-select-list" id="' + $this.attr('id') + '-dropdown" tabindex="-1" >');
         $this.replaceWith(function () {
            return $this.contents();
         });
         if($this.is(':disabled')){
            $('#'+ $this.attr('id') + '-wrapper').closest('.selectWrap').addClass('disabled');
         }
         $('#' + $this.attr("id") + '-wrapper').after('<i class="icon-down" aria-hidden="true"></i>');
      });

      $('li.optgroup-wrapper').each(function () {
         $(this).find('.awd-select-list-item').wrapAll('<ul class="optgroup">');
      });

      $('.awd-select-list-item[aria-selected="true"]').each(function () {
         var selectVal = $(this).attr('value'),
               selectTxt = $(this).html(),
               selectContent=$(this).text(),
               selectID = $(this).closest('.awd-select-list').parent().prev().attr('id'),
               selectAttr=$(this).closest('.awd-select-list').parent().prev().attr('select-btn-menu'),              
               selectLabel=$(this).closest('.awd-select-list').parent().parent().prev().html();               
            if($(this).attr('disabled')){
               e.preventDefault();
               return false;
            }
            if(selectAttr=="true"){ 
               if(selectLabel!==undefined) { 
                 $('#' + selectID).html(selectTxt).attr({'aria-expanded':'false','aria-label':selectLabel+' '+selectContent}).removeClass('active').addClass('closed').prev().val(selectVal);
            }
            else{
                 $('#' + selectID).html(selectTxt).attr({'aria-expanded':'false','aria-label':selectContent}).removeClass('active').addClass('closed').prev().val(selectVal);
              }
            }
            if(selectAttr=="false"){
             if(selectLabel!==undefined) { 
               $('#' + selectID).attr({'aria-expanded':'false','value': selectTxt,'aria-label':selectLabel+' '+selectContent}).removeClass('active').addClass('closed').prev().val(selectVal);
             }
             else{
                $('#' + selectID).attr({'aria-expanded':'false','value': selectTxt,'aria-label':selectContent}).removeClass('active').addClass('closed').prev().val(selectVal);
              }
            }
        $(this).attr('aria-selected', 'true');
      });

      $('.awd-select-list').slideUp(0);

      $('.awd-select-list-item').each(function () {
         var optLabel = $(this).text();
         var $this = $(this);
         
         if($this.attr('data-img-src')){
            $this.removeAttr('data-img-src');
         }
         if($this.parent().parent().hasClass('optgroup-wrapper')){
            var groupLabel=$this.parent().parent().clone().children().remove().end().text();
              $this.attr({'aria-label':groupLabel+''+optLabel});             
         }

         $this.on('mouseover', function() {
            $this.closest('.awd-select-list').find('.awd-select-list-item').removeAttr('aria-selected').removeAttr('selected');
            $this.attr({'aria-selected':'true','selected':'selected'}).focus();
         });
         
         $this.on('keydown', function (e) {                 
           var selectVal = $(this).attr('value'),
               selectTxt = $(this).html(),
               selectContent=$(this).text(),
               selectID = $(this).closest('.awd-select-list').parent().prev().attr('id'),
               selectAttr=$(this).closest('.awd-select-list').parent().prev().attr('select-btn-menu'),              
               selectLabel=$(this).closest('.awd-select-list').parent().parent().prev().html();                 
            if (e.keyCode in keymap) {
               keymap[e.keyCode] = true;
               if(/(18)/.test(e.keyCode)) { 
                  $(this).trigger('click');                    
                   e.preventDefault();               
               }         
               if (/(13|32|27)/.test(e.keyCode)) {               
               if(selectAttr=="true" ){
                  if( selectLabel !== undefined){                  
                        $(this).trigger('click');
                        e.preventDefault();                     
                  }
                  else{
                     $(this).trigger('click');
                     e.preventDefault();
                  }
               }               
               if(selectAttr=="false" ){
                  if( selectLabel !== undefined){                  
                        $(this).trigger('click');
                        e.preventDefault();                     
                  }
                  else{
                     $(this).trigger('click');
                     e.preventDefault();
                  }
               }                           
               $(this).siblings().attr('aria-selected', 'false').removeAttr('selected');
               $(this).attr({
                  'aria-selected': 'true',
                  'selected': 'selected'
               }).closest('.awd-select-list').slideUp(200);
               $('#' + selectID).focus();
               isSelected = "true";
            }
             if (/(9)/.test(e.keyCode)){
               $this.click();
               $this.closest('.selectWrapper').prev('.awd-select').attr({'aria-label':selectTxt}).focus();
               e.preventDefault();
            }
                    listElements = $(this).closest(".awd-select-list").find('.awd-select-list-item');                   
                    selectedIndex = $(listElements).index($(this).closest('.awd-select-list').find('.awd-select-list-item[selected=selected]'));                                      
                    if (/(38)/.test(e.keyCode) && selectedIndex > 0){
                        selectedIndex--;
                        $(listElements).removeAttr('aria-selected').removeAttr('selected');
                        $(listElements[selectedIndex]).attr({'aria-selected':'true','selected':'selected'}).focus();      
                        e.preventDefault();    
                    }
                    if (/(40)/.test(e.keyCode)){
                        selectedIndex++; 
                         if (selectedIndex == -1 || selectedIndex >= listElements.length) {                        
                           return false;
                         }
                        $(listElements).removeAttr('aria-selected').removeAttr('selected');
                        $(listElements[selectedIndex]).attr({'aria-selected':'true','selected':'selected'}).focus();
                        e.preventDefault();
                    }                    
             }
         });        
         
         $(this).on('click', function () {
            var selectVal = $(this).attr('value'),
               selectTxt = $(this).html(),
               selectContent=$(this).text(),
               selectID = $(this).closest('.awd-select-list').parent().prev().attr('id'),
               selectAttr=$(this).closest('.awd-select-list').parent().prev().attr('select-btn-menu'),              
               selectLabel=$(this).closest('.awd-select-list').parent().parent().prev().html();               
            if($(this).attr('disabled')){
               e.preventDefault();
               return false;
            }
            if(selectAttr=="true"){ 
               if(selectLabel!==undefined) { 
                 $('#' + selectID).html(selectTxt).attr({'aria-expanded':'false','aria-label':selectLabel+' '+selectContent}).removeClass('active').addClass('closed').prev().val(selectVal);
            }
            else{
                 $('#' + selectID).html(selectTxt).attr({'aria-expanded':'false','aria-label':selectContent}).removeClass('active').addClass('closed').prev().val(selectVal);
              }
            }
            if(selectAttr=="false"){
             if(selectLabel!==undefined) { 
               $('#' + selectID).attr({'aria-expanded':'false','value': selectTxt,'aria-label':selectLabel+' '+selectContent}).removeClass('active').addClass('closed').prev().val(selectVal);
             }
             else{
                $('#' + selectID).attr({'aria-expanded':'false','value': selectTxt,'aria-label':selectContent}).removeClass('active').addClass('closed').prev().val(selectVal);
              }
            }
            if($this.data('expand-this')){
               $('#' + selectID).attr({'aria-expanded':'true'});
               dropDownExpand($(this));
            }
            $(this).siblings().removeAttr('aria-selected').removeAttr('selected');
            $(this).attr({'aria-selected':'true', 'selected':'selected'}).closest('.awd-select-list').slideUp(200);
            $('#' + selectID).focus();
            isSelected = "true";
         });
      });
         $('input.awd-select').on('keydown',function(e){              
            if (e.keyCode in keymap) {
               keymap[e.keyCode] = true;
               if(keymap[18] && keymap[40] || keymap[18] && keymap[38]) { 
                  $(this).trigger('click');   
                   e.preventDefault();               
               }                             
            } 
         });
   }
   dropdownAutocomplete()
};


DS2.bellyband = (function(){
   $('.bellyband-link').each(function(){
      
      if( window.innerWidth <= '479' ){ 
         $(this).closest('.bellyband-group').removeAttr('style');
      }
      
      else if( window.innerWidth > '479' && window.innerWidth < '768' ){
         var lnkHeight = $(this).height(),
                lnkMar = $(this).css('margin-bottom');

         if($(this).closest('.bellyband-container').find('.bellyband-link').length == 2){
            bblink = ((lnkHeight + parseInt(lnkMar)) * 1) + 'px';
         }
         else if($(this).closest('.bellyband-container').find('.bellyband-link').length == 3){
            bblink = ((lnkHeight + parseInt(lnkMar)) * 2) + 'px';
         }
         else if($(this).closest('.bellyband-group').find('.bellyband-link').length == 4){
            bblink = ((lnkHeight + parseInt(lnkMar)) * 2) + 'px';
         }  
         else if($(this).closest('.bellyband-container').find('.bellyband-link').length >= 5){
            bblink = ((lnkHeight + parseInt(lnkMar)) * 3) + 'px';
         }
         else{}

         $(this).closest('.bellyband-group').css({'max-height': bblink});         
      }

      else if( window.innerWidth >= '768'){
         $(this).closest('.bellyband-group').css({'max-height':'inherit'});
         if( $(this).closest('.bellyband-group').find('.bellyband-link').length == '6' ){ $(this).css({'flex':'1 1 0'}); }
      }      
   });
});

// STAR RATING
DS2.starRating = function () {
   $('[data-stars-percent]').each(function () {
      if (!$(this).attr('style')) {
         var starPercent = parseInt($(this).attr('data-stars-percent'), 0),
            ratingText = $(this).parent().next('.starsRating').text(),
            newRating = ratingText.replace(/[{()} ]/g, ''),
            starQty = "";

         $(this).css({  'width': starPercent + '%' });

         if (starPercent === "0") {                       starQty = "0"; }
         if (starPercent >  "0" && starPercent <= "10") { starQty = ".5"; }
         if (starPercent > "10" && starPercent <= "20") { starQty = "1"; }
         if (starPercent > "20" && starPercent <= "30") { starQty = "1.5"; }
         if (starPercent > "30" && starPercent <= "40") { starQty = "2"; }
         if (starPercent > "40" && starPercent <= "50") { starQty = "2.5"; }
         if (starPercent > "50" && starPercent <= "60") { starQty = "3"; }
         if (starPercent > "60" && starPercent <= "70") { starQty = "3.5"; }
         if (starPercent > "70" && starPercent <= "80") { starQty = "4"; }
         if (starPercent > "80" && starPercent <= "90") { starQty = "4.5"; }
         if (starPercent > "90" && starPercent <= "100") { starQty = "5"; }

         //$(this).parent().next('.starsRating').next('.hidden-spoken').prepend("Rated " + starQty + " out of 5 stars based on " + newRating).append(" customer reviews.");
         $(this).closest('.starsCan').siblings('.starsRating').attr('aria-label', 'Rated ' + starQty + ' out of 5 stars based on ' + newRating + ' customer reviews.');
      }
   });
};

// BUTTON QUANTITY TOGGLE
DS2.qtyToggle = function () {
   $('.btn-quantity-toggle').each(function () {
      if($(this).not('[data-dom="ready"]')){
         $(this).attr('data-dom','ready');

         var     $this = $(this),
            currentVal = $this.find('input[data-max-quantity]'),
                maxVal = currentVal.attr('data-max-quantity');

         $this.find('input[data-max-quantity]').attr({'value':currentVal.val(), 'aria-valuenow': currentVal.val() });
         if(/iPhone|iPod/i.test(navigator.userAgent)){ $this.find('input[data-max-quantity]').removeAttr('role').attr({'aria-label':'quantity: ' +currentVal.val(), 'aria-live':'off'}); }
         
         if($(this).hasClass('disabled')){
            $(this).find('.btn').attr('disabled', true);
         }
         else{            
            if (currentVal.val() <= "0") {
               currentVal.val('0').attr({'aria-valuenow':'0'});;
   
               currentVal.next().removeAttr('disabled').removeClass('disabled');
               currentVal.prev().attr('disabled', 'disabled').addClass('disabled');
            }
         if(isMobile==true){
               $(this).find('.btn').removeAttr('tabindex aria-hidden');
            }   
   
            // RESTRICT VALUE FROM GOING OVER MAX QUANTITY ALLOWABLE
            currentVal.on('keyup', function (e) {
               currentVal.attr('value', $(currentVal).val());
   
               if (e.keyCode in keymap) {
                  keymap[e.keyCode] = true;   
                  if(keymap[38]) { // up arrow
                     $(this).next().trigger('click');
                     keymap[e.keyCode] = false;
                  }
                  if(keymap[40]) { // down arrow
                     $(this).prev().trigger('click');
                     keymap[e.keyCode] = false;
                  }
               }
               
               if (currentVal.val() >= parseInt($('[data-max-quantity]').attr('data-max-quantity'))) {
                  currentVal.val(maxVal).attr({'aria-valuenow':maxVal });
                  currentVal.prev().removeAttr('disabled aria-disabled').removeClass('disabled');
                  currentVal.next().attr({'disabled':true, 'aria-disabled':'true'}).addClass('disabled');
                  if(/iPhone|iPod/i.test(navigator.userAgent)){ currentVal.attr({'aria-label':'quantity: ' +maxVal, 'aria-live':'polite' }); }
               } 
               else if (currentVal.val() <= "0") {
                  currentVal.val('0').attr({'aria-valuenow':'0' });
                  currentVal.next().removeAttr('disabled aria-disabled').removeClass('disabled');
                  currentVal.prev().attr({'disabled':true, 'aria-disabled':'true'}).addClass('disabled');
                  if(/iPhone|iPod/i.test(navigator.userAgent)){ currentVal.attr({'aria-label':'quantity: ' +maxVal, 'aria-live':'polite' }); }
               } 
               else {
                  currentVal.next().removeAttr('disabled aria-disabled').removeClass('disabled');
                  currentVal.prev().removeAttr('disabled aria-disabled').removeClass('disabled');
                  return false;
               }
            });
   
            // DECREMENT VALUE UNTIL 0
            $this.find('.btn-prev').on('click', function () {
               if (currentVal.val() == "1") {
                  currentVal.prev().attr({'disabled':true, 'aria-disabled':'true'}).addClass('disabled');
               }
               if (currentVal.val() == "0") {
                  return false;
               } 
               else {
                  currentVal.val(parseInt(currentVal.val()) - 1);
                  currentVal.attr({'value': $(currentVal).val(), 'aria-valuenow':parseInt(currentVal.val()) });
                  currentVal.next().removeAttr('disabled aria-disabled').removeClass('disabled');
                  if(/iPhone|iPod/i.test(navigator.userAgent)){ currentVal.attr({'aria-label':'quantity: ' +currentVal.val(), 'aria-live':'polite' }); }
               }
            });
   
            // INCREMENT VALUE UNTIL MAX QUANTITY REACHED
            $this.find('.btn-next').on('click', function () {
               if (currentVal.val() == parseInt($('[data-max-quantity]').attr('data-max-quantity')) - 1) {
                  currentVal.next().attr('disabled', 'disabled').addClass('disabled');                  
               }
               if (currentVal.val() == parseInt($('[data-max-quantity]').attr('data-max-quantity'))) {
                  currentVal.next().attr('disabled', 'disabled').addClass('disabled');                  
                  return false;
               } 
               else {
                  currentVal.val(parseInt(currentVal.val()) + 1);
                  currentVal.attr({'value': $(currentVal).val(), 'aria-valuenow':parseInt(currentVal.val())});
                  if(/iPhone|iPod/i.test(navigator.userAgent)){ currentVal.attr({'aria-label':'quantity: ' +currentVal.val(), 'aria-live':'polite' }); }
               }
               $this.find('.btn-prev').removeAttr('disabled aria-disabled').removeClass('disabled');               
            });
         }
      }
   });
};

DS2.miscellaneous = (function(){
   pasteEvents = function (delay) {
      if (delay === undefined) {
         delay = 20;
      }
      return $(this).each(function () {
         var $el = $(this);
         $el.on("paste", function () {
            $el.trigger("prepaste");
            setTimeout(function () {
               $el.trigger("postpaste");
            }, delay);
         });
      });
   };
   
   if(isMobile){
      $('.promo-heading > span').attr('role','option');
   }
   
   if($('.product-tile').width() <= '285'){
      $('.product-badge-secondary').hide();
   }
   else{
      $('.product-badge-secondary').show();
   }
   
   $('.step-on').each(function(){
      var   txt = $(this).text(),
          smTxt = $(this).find('[data-sm-text]').attr('data-sm-text'),
          lgTxt = $(this).find('[data-large-text]').attr('data-large-text'),
       smSubTxt = $(this).find('[data-sm-sub-step]').attr('data-sm-sub-step') ? $(this).find('[data-sm-sub-step]').attr('data-sm-sub-step') : '',
       lgSubTxt = $(this).find('[data-lg-sub-step]').attr('data-lg-sub-step') ? $(this).find('[data-lg-sub-step]').attr('data-lg-sub-step') : '';
      
      if(window.innerWidth <= 1024){
         $(this).closest('.steps').next('.hidden-spoken').attr('data-sr-text', smTxt + txt + smSubTxt);
      }
      else if(window.innerWidth > 1024){
         $(this).closest('.steps').next('.hidden-spoken').attr('data-sr-text', smTxt + txt + lgSubTxt);
      }
      else{}
   });
   
   $('[data-colordatatext]').find('button').each(function(){
      var txt     = $(this).attr('aria-label'),
       txtTarget  = $(this).closest('[data-colordatatext]').attr('data-colordatatext'),
       numOf      = $(this).closest('[data-colordatatext]').find('[role="radio"]').index($(this)) +1,
       hiddenSpokn= numOf+ ' of '+ $(this).closest('[data-colordatatext]').find('[role="radio"]').length;
      
      if(/Android/i.test(navigator.userAgent)) { // Bug 92346, Android X of X not announced
          $(this).attr({'aria-label': txt + '. ' + hiddenSpokn});
          $(this).find('.hidden-spoken').remove(); // Because Aria label overwriting hidden spoken
       }      
      if($(this).hasClass('active')){
         if($('#'+txtTarget+' span').length == '0'){
            $('#'+txtTarget).append('<span> ' + txt+ '</span>');
         }
         else{
            $('#'+txtTarget+' span').text(' '+txt);
         }
      }
      
      $(this).on('click', function(){
         if($('#'+txtTarget+' span').length == '0'){
            $('#'+txtTarget).append('<span> ' + txt+ '</span>');
         }
         else{
            $('#'+txtTarget+' span').text(' '+txt);
         }
      });
      
   });
   
   $('hr').attr({'aria-hidden':'true','tabindex':'-1'});

   $('a[role="button"]').not('.icon-tooltip').on('keydown', function(e){
      if (e.keyCode in keymap) {
         keymap[e.keyCode] = true;   
         if(keymap[32]) { // spacebar
            $(this).trigger('click');
         }
      }
   });
   
   $('a.share-this').on('click', function (e) {
		if ( $(this).next('.share-icons').hasClass('active') ) {
			$(this).attr({'aria-expanded':'false'});
			$(this).next('.share-icons').removeClass('active').attr({
				'aria-hidden': 'true'
			});
		} else {
			$(this).attr({'aria-expanded':'true'});
			$(this).next('.share-icons').addClass('active').attr({
				'aria-hidden': 'false'
			});
			$(this).next('.share-icons').find('a').first().focus();
		}
		e.preventDefault();
	});
   
   isKey = "false";
   $('[data-expand-this]').each(function(){      
      var toggleThis = $(this).attr('data-expand-this');
      
      // CHECKBOX/RADIO EXPAND [slide]
      if($(this).find('input').is(':checked')){
         $('#' + toggleThis).show();
      }
      // CHECKBOX
      if($(this).hasClass('checkbox')){
         if(notMobile){$(this).attr('data-role', 'checkbox').removeAttr('role')}; // To Avoid NVDA which reads Twice because of Native Checkbox inside.
         $(this).find(':checkbox').on('change', function(e){
            e.stopPropagation();
            var $this = $(this);
            $this.closest('[role="group"]').find('#chk-offscreen').remove();
            $this.closest('[role="group"]').append('<span id="chk-offscreen" class="hidden-spoken" aria-live="polite"></span>');
            if($this.is(':checked')){
               $this.closest('.checkbox').attr({'aria-checked': 'true'});
               setTimeout(function(){$this.closest('[role="group"]').find('#chk-offscreen').text('Additional Field Expanded').attr('aria-live', 'polite')},700);
               $('#' + toggleThis).slideDown(); 
            }
            else{
               $this.closest('.checkbox').attr({'aria-checked': 'false'});
               setTimeout(function(){$this.closest('[role="group"]').find('#chk-offscreen').text('Additional Field Collapsed').attr('aria-live', 'polite')},700);
               $('#' + toggleThis).slideUp();            
            }
            
         });     
      }
      // RADIO
      else if($(this).hasClass('radio')){
         $(this).on('change', function(e){ var $this = $(this);
            $(this).closest('[role="radiogroup"]').find('input[type="radio"]').each(function(){
               $this.closest('[role="radiogroup"]').find('#radio-offscreen').remove();
               $this.closest('[role="radiogroup"]').append('<span id="radio-offscreen" class="hidden-spoken" aria-live="polite"></span>');
               $('#' + $(this).closest('[data-expand-this]').attr('data-expand-this')).slideUp();               
            });
            if($(this).find('input').prop('checked')){var $this = $(this);
               setTimeout(function(){$this.closest('[role="radiogroup"]').find('#radio-offscreen').text('Additional Field Expanded').attr('aria-live', 'polite')},700);
               $('#' + toggleThis).slideDown(function(){setTimeout(function(){$this.closest('[role="radiogroup"]').find('#radio-offscreen').remove()},1200)});
            }
         });
      }
      else if($(this).is('option') || $(this).is('.awd-select-list-item')){
        $(this).attr('aria-label', $(this).text() + ' adds additional fields below');
      }
       // DROPDOWNS, See Events binding for ".awd-select-list-item" for Custom Dropdowns and Look for "dropDownExpand($(this))"
       
   });
    
   dropDownExpand = function(ele){ //Dropdown Expand function
        var currContent = ele.attr('data-expand-this');
        $('#' + currContent).siblings('div').slideUp(100).attr({'aria-hidden': 'true','aria-expanded': 'false'});
        $('#' + currContent).slideDown(500, function(){ var sectionSlided = $(this);
            $(sectionSlided).find('*:first').attr('tabindex', '0').focus();
            setTimeout(function(){$(sectionSlided).find('[tabindex]:first').removeAttr('tabindex')},1000);
        }).attr({'aria-hidden': 'false', 'aria-expanded': 'true'});
   };
   
     $('.show-qualifier').each(function(){
       if($(this).hasClass('psd') || $(this).is('[href$="psd"]')){
           $(this).attr('aria-describedby','qualifier-psd');
           if($('#qualifier-psd').length == '0'){
              $('body').append('<div id="qualifier-psd" class="hidden-spoken" aria-hidden="true">Photoshop is required to open this document.</div>');
           }
       } 
       else if($(this).hasClass('pdf') || $(this).is('[href$="pdf"]')){
           $(this).attr('aria-describedby','qualifier-pdf');
           if($('#qualifier-pdf').length == '0'){
              $('body').append('<div id="qualifier-pdf" class="hidden-spoken" aria-hidden="true">A PDF reader is required to read this document.</div>');
            }
       }
   });

   // set color to element, then check if the color is correct. If not, colors have been disabled in the browser.
   if( $('.color-test').length == 0 ){
      $('footer').after('<div class="color-test" style="background-color:orange; height:0">')
   }
   if($('.color-test').css('background-color') != 'rgb(255, 165, 0)'){
      $('html').addClass('ds2-no-colors');
   }

   $('br').attr('aria-hidden','true');

   $('span.copyright').text(new Date().getFullYear());

   $('[data-dismiss="alert"]').on('click', function(){
      $(this).closest('.alert').fadeOut(300, function(){
         $(this).remove();
      });
   });

   $('a.disabled').each(function(){
      $(this).attr({'aria-disabled':'true', 'tabindex':'-1'});
   }).on('click', function(e){
      if($(this).attr('aria-disabled') == 'true'){
         e.preventDefault();
      }
      else{
         return true;
      }
   });   
   $('button:disabled').each(function(){
      $(this).attr({'aria-disabled':'true'});
   });
   
   $('.truncate').each(function () { // because to add elipsis you must specify width of container
      $(this).css({
         'width': $(this).width()
      });
   });

   // Make font smaller
   $('.small, small').each(function(){
      var pSize = $(this).parent().css('font-size'),
         newSize = ((parseInt(pSize) * .1) - .2) + 'rem';
      $(this).css({
         'font-size':newSize
      });
   });

   // CHECKBOX ACTIVATES BUTTON
   $(document).on('click', 'input', function (e) {
      if ($(this).attr('data-activate-button')) {
         var theBtn = $(this).attr('data-activate-button');
         if ($(this).is(':checked')) {
            $('#' + theBtn).removeAttr('disabled');
         }
         else {
            $('#' + theBtn).attr('disabled', 'disabled');
         }
      }
   });

   // Enter checks checkbox
   $('.checkbox input').on('keydown',function(e){
      if (e.keyCode in keymap) {
         keymap[e.keyCode] = true;
         if(keymap[13]) {
            //$(this).prop('checked', !$(this).prop('checked') );
            $(this).trigger('click');
         }
      }
      e.stopPropagation();
   });

   // ERROR MSG LINKS
   $('.alert-error a').on('click', function (e) {
      var lnk = $(this).attr('href'),
         lnktemp = lnk.split("#"),
         focusTo = lnktemp[1];

      $('#' + focusTo).focus();
      e.preventDefault();
   });

   // external modal
   $('[data-same-domain="false"]').on('click', function (e) {
      e.preventDefault();
      var url = $(this).attr('href'),
         target = $(this).attr('data-target');
      $(target).html('<iframe width="100%" height="100%" frameborder="0" scrolling="no" allowtransparency="true" src="' + url + '"></iframe>');
   });

   // Scroll to something
   $(document).on('click', '.scroll', function () {
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') || location.hostname === this.hostname) {
         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
         // suspend mousewheel until animation ends
         $('body, .modal-body').on('mousewheel.go.code', false)
         if (target.length) {
            if( $('.stickypad').length != '0' ){
               // use $.stop to remove any on going animation for body, .modal-body. Then start a new one
               $('html,body,.modal-body').stop(true, false).animate({
                  scrollTop: target.offset().top - 85
                  // remove mousewheel listener after animation is done
               }, 1000, function(e) { $('body, .modal-body').off('mousewheel.go.code')});
               return false;
            }
            else{
               $('html,body,.modal-body').stop(true, false).animate({
                  scrollTop: target.offset().top
               }, 1000, function(e) { $('body, .modal-body').off('mousewheel.go.code')});
               return false;
            }
         }
      }
   });

});




/* IMMEDIATELY ENVOKED */
! function ($) {
   "use strict";

   var d = new Date(),
      h = d.getHours(),
      m = d.getMinutes(),
      n = d.getSeconds();

   if(isIE){   $('html').addClass('isIE'); }
   if(/Android/i.test(navigator.userAgent)) { $('html').addClass('isAndroid'); }
   if(/iPhone|iPod/i.test(navigator.userAgent)) {$('html').addClass('isIOS'); }
   if(isMobile){ $('html').addClass('isMobile'); }
   
   // MODAL ADJUSTMENT
   DS2.modalDockedButtons = function () {
      var $this = $('.modal.in'),
         $headHeight = $this.find('.modal-header').outerHeight(),
         $footHeight = $this.find('.modal-footer').outerHeight(),
         $modalHeight = $this.outerHeight(),
         $windowHeight= window.innerHeight;

      if ($headHeight === null || $headHeight === -1) {
         $headHeight = '0';
      }
      if ($footHeight === null || $footHeight === -1) {
         $footHeight = '0';
      }
      var $portraitHeight = $windowHeight - ($headHeight + $footHeight) + 'px';
      var $landscapeHeight = $modalHeight - ($headHeight + $footHeight) + 'px';

      if($this.closest('.modalwrapper').hasClass('modal-docked')){
         // if portrait
         if (window.innerHeight > window.innerWidth) {
            $this.closest('.modalwrapper.active').removeClass('modal-landscape');
            $this.css({'height':'100%'});
            $this.find('.modal-body').css({'height': $landscapeHeight});
         }
         // else if small landscape
         else if (window.innerHeight < window.innerWidth && window.innerWidth < 767) {
            $this.closest('.modalwrapper.active').addClass('modal-landscape');
            $this.find('.modal-body').removeAttr('style');
         }
         // else if large landscape
         else if (window.innerHeight < window.innerWidth && window.innerWidth > 767) {
            $('html').removeClass('scroll-y');
            $this.closest('.modalwrapper.active').addClass('modal-landscape');
            $this.removeAttr('style');
            $this.find('.modal-body').removeAttr('style').css({'height': $landscapeHeight});
         }         
      }

      DS2.wrapSelect();
   };

   // Calculate tallest/shortest/widest/thinnest size of group of elements
   $.fn.tallest = function () {      return this.eXtremities({ 'aspect': 'innerHeight', 'max': true })[0]; };
   $.fn.tallestSize = function () {  return this.eXtremities({ 'aspect': 'innerHeight', 'max': true })[1]; };
   $.fn.shortest = function () {     return this.eXtremities({ 'aspect': 'innerHeight', 'max': false })[0]; };
   $.fn.shortestSize = function () { return this.eXtremities({ 'aspect': 'innerHeight', 'max': false })[1]; };
   $.fn.widest = function () {       return this.eXtremities({ 'aspect': 'innerWidth', 'max': true })[0]; };
   $.fn.widestSize = function () {   return this.eXtremities({ 'aspect': 'innerWidth', 'max': true })[1]; };
   $.fn.thinnest = function () {     return this.eXtremities({ 'aspect': 'innerWidth', 'max': false })[0]; };
   $.fn.thinnestSize = function () { return this.eXtremities({ 'aspect': 'innerWidth', 'max': false })[1]; };

   $.fn.eXtremities = function (options) {
      var defaults = {
            aspect: 'height',
            max: true
         },
         bestIndex = 0,
         bestSize = this.eq(0)[options.aspect](),
         thisSize;

      if (this.length < 2) {
         return [this, this[options.aspect]()];
      }

      for (var i = 1; i < this.length; ++i) {
         var thisSize = this.eq(i)[options.aspect]();
         if ((options.max && thisSize > bestSize) || (!options.max && thisSize < bestSize)) {
            var bestSize = thisSize;
            bestIndex = i;
         }
      }
      return [this.eq(bestIndex), bestSize];
   };


   //
   /* ============================================================
    * bootstrap-button.js v2.3.2
    * http://twitter.github.com/bootstrap/javascript.html#buttons
    * ============================================================
    * Copyright 2012 Twitter, Inc.
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    * ============================================================ */
   /* BUTTON PUBLIC CLASS DEFINITION
    * ============================== */
   var Button = function (element, options) {
      this.$element = $(element);
      this.options = $.extend({}, $.fn.button.defaults, options)
   };

   Button.prototype.setState = function (state) {
      var d = 'disabled'
       , $el = this.$element
       , data = $el.data()
       , val = $el.is('input') ? 'val' : 'html';

      state = state + 'Text';
      data.resetText || $el.data('resetText', $el[val]());

      $el[val](data[state] || this.options[state]);

      // push to event loop to allow forms to submit
      setTimeout(function () {
         state == 'loadingText' ? $el.addClass(d).attr({'disabled':'disabled', 'aria-disabled':'true'}) : $el.removeClass(d).removeAttr('disabled aria-disabled')
      }, 0)
   };

   Button.prototype.toggle = function () {
      // checkbox rules
      if(this.$element.attr('data-toggle') == "button"){
         this.$element.toggleClass('active').trigger('state_change');
      }
      else if(this.$element.closest('.btn-group').attr('data-toggle') == "button"){

         this.$element.toggleClass('active').trigger('state_change');

         if(this.$element.hasClass('active')){
            this.$element.attr({'aria-checked':'true'});            
         }
         else {
            this.$element.attr({'aria-checked':'false'});
         }

      }
      else if(this.$element.closest('.btn-group').attr('data-toggle') == "buttons-radio"){
         var $parent = this.$element.closest('[data-toggle="buttons-radio"]');

         $parent && $parent
         .find('.active')
         .removeClass('active')
         .attr({'aria-checked':'false'});

         this.$element.toggleClass('active').trigger('state_change');

         if(this.$element.hasClass('active')){
            this.$element.attr({'aria-checked':'true'}); //append('<span class="hidden-spoken dynamic-text"> is selected</span>')
         }
         else {
            this.$element.attr({'aria-checked':'false'}); //.find('.dynamic-text').remove();
         }
      }

      $("#" + this.$element.attr('data-show-id')).slideDown(300).attr('aria-hidden','false');
      $("#" + this.$element.attr('data-hide-id')).slideUp(300).attr('aria-hidden','true');

   };

   /* BUTTON PLUGIN DEFINITION
   * ======================== */
   var old = $.fn.button;

   $.fn.button = function (option) {
      return this.each(function () {
         var $this = $(this)
         , data = $this.data('button')
         , options = typeof option == 'object' && option;
         if (!data) $this.data('button', (data = new Button(this, options)));
         if (option == 'toggle') data.toggle();
         else if (option) data.setState(option)
      })
   };

   $.fn.button.defaults = {
      loadingText: 'Loading'
   };

   $.fn.button.Constructor = Button;

   /* BUTTON NO CONFLICT
   * ================== */
   $.fn.button.noConflict = function () {
      $.fn.button = old;
      return this
   };

   /* added by do6596 - BUTTON LOADING MSG */
   $(document).on('click.button.data-api', '[data-loading-text]', function(e) {
      var $btn = $(e.target);
      $btn.button('loading');
   });

   /* BUTTON DATA-API
   * =============== */

   $(document).on('click.button.data-api', '[data-toggle^=button]', function (e) {
      var $btn = $(e.target);
      if (!$btn.hasClass('btn') ){
         $btn = $btn.closest('.btn').not(':disabled');
      }
      $btn.button('toggle');
   });

   /* ===================================================
    * RETURN FOCUS TO TRIGGER AFTER VIDEO CLOSES v1.0.0
    * http://quickstart.att.com/digitaldesign
    * ===================================================
    * Copyright 2014 AT&T, Inc.
    *
    * Description: After video is played in a mobile device's
    * native player, focus is lost and page is returned to top
    * of screen when player closes.
    *
    * This function will set localStorage of last clicked
    * element that has a class="return-focus-here". When
    * video closes, script checks if localStorage contains
    * 'lastclicked' key. If so, sets focus to last clicked
    * element. After clicking anywhere else on page the localstorage
    * key is removed.
    * ========================================================== */
   $(function () {
      // Return to last clicked element from native video player while VoiceOver & Talkback running
      try {         
         if (localStorage.getItem("storedClick") != null) {
            $('body').attr('data-return-focus-to', localStorage.getItem("storedClick"));
         }
         $('.jshook-return-focus-here').on('click', function (e) {
            localStorage.setItem("storedClick", $(this).attr('id'));
            $('body').attr('data-return-focus-to', localStorage.getItem("storedClick"));
         })
      } 
      catch(e){}
   });

   $(window).on('load', function () {
      var returnFocusTo = $('body').attr('data-return-focus-to');
      if (returnFocusTo) {
         setTimeout('$.fn.getId', 2000);
         $('#' + returnFocusTo).attr('tabindex', '0').focus();
      }
      $.fn.getId = function () {
         return $('#' + returnFocusTo).attr('tabindex', '0').focus()
      }
   });


   /* ===================================================
    * SUPER SIMPLE ALERT CLOSER v1.0.0
    * http://quickstart.att.com/digitaldesign
    * ===================================================
    * Copyright 2015 AT&T, Inc.
    *
    * Description: A simple close and remove function.
    *
    * Unlike the previous function, this does exactly
    * what we need with only a few lines of code.
    * ========================================================== */
   $(function () {
      $('.alert .close').on('click', function () {
         $(this).closest('.alert').fadeOut(100, "linear", function () {
            $(this).remove()
         })
      });
   })


   /* ===================================================
    * bootstrap-transition.js v2.3.2
    * http://twitter.github.com/bootstrap/javascript.html#transitions
    * ===================================================
    * Copyright 2012 Twitter, Inc.
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    * ========================================================== */

   $(function () {
      $.support.transition = (function () {
         var transitionEnd = (function () {
            var el = document.createElement('bootstrap'),
               transEndEventNames = {
                  'WebkitTransition': 'webkitTransitionEnd',
                  'MozTransition': 'transitionend',
                  'OTransition': 'oTransitionEnd otransitionend',
                  'transition': 'transitionend'
               },
               name;

            for (name in transEndEventNames) {
               if (el.style[name] !== undefined) {
                  return transEndEventNames[name]
               }
            }

         }());

         return transitionEnd && {
            end: transitionEnd
         }

      })()
   })

   // modal
      
}(window.jQuery)



// Make 'Select' placeholder color
DS2.modSelectPlaceholder = function () {
   $('[data-default-placeholder="true"]').each(function () {
      if ($(this).is(':selected')) {
         $(this).parent('.mod-select').next('span').addClass('placeholdercolor');
      } else {
         $(this).parent('.mod-select').next('span').removeClass('placeholdercolor');
      }
   });
};

dropdownAutocomplete = function () {
   var keymap={MAP: { 91 : "COMMAND", 8 : "BACKSPACE" , 9 : "TAB" , 13 : "ENTER" , 16 : "SHIFT" , 17 : "CTRL" , 18 : "ALT" , 19 : "PAUSEBREAK" , 20 : "CAPSLOCK" , 27 : "ESC" , 32 : "SPACE" , 33 : "PAGE_UP", 34 : "PAGE_DOWN" , 35 : "END" , 36 : "HOME" , 37 : "LEFT" , 38 : "UP" , 39 : "RIGHT" , 40 : "DOWN" , 43 : "+" , 44 : "PRINTSCREEN" , 45 : "INSERT" , 46 : "DELETE", 48 : "0" , 49 : "1" , 50 : "2" , 51 : "3" , 52 : "4" , 53 : "5" , 54 : "6" , 55 : "7" , 56 : "8" , 57 : "9" , 59 : ";", 61 : "=" , 65 : "A" , 66 : "B" , 67 : "C" , 68 : "D" , 69 : "E" , 70 : "F" , 71 : "G" , 72 : "H" , 73 : "I" , 74 : "J" , 75 : "K" , 76 : "L", 77 : "M" , 78 : "N" , 79 : "O" , 80 : "P" , 81 : "Q" , 82 : "R" , 83 : "S" , 84 : "T" , 85 : "U" , 86 : "V" , 87 : "W" , 88 : "X" , 89 : "Y" , 90 : "Z", 96 : "0" , 97 : "1" , 98 : "2" , 99 : "3" , 100 : "4" , 101 : "5" , 102 : "6" , 103 : "7" , 104 : "8" , 105 : "9", 106 : "*" , 107 : "+" , 109 : "-" , 110 : "." , 111 : "/", 112 : "F1" , 113 : "F2" , 114 : "F3" , 115 : "F4" , 116 : "F5" , 117 : "F6" , 118 : "F7" , 119 : "F8" , 120 : "F9" , 121 : "F10" , 122 : "F11" , 123 : "F12", 144 : "NUMLOCK" , 145 : "SCROLLLOCK" , 186 : ";" , 187 : "=" , 188 : "," , 189 : "-" , 190 : "." , 191 : "/" , 192 : "`" , 219 : "[" , 220 : "\\" , 221 : "]" , 222 : "'"
   }};
   var currentindex={position:-1};
   if (!Array.prototype.regexIndexOf) {
      Object.defineProperty(Array.prototype, 'regexIndexOf', {
         enumerable: false,
         value: function (regex, startIndex, loop) {   
            startIndex = startIndex && startIndex > -1 ? startIndex : 0;
            for (var index = startIndex; index < this.length; index++) {
               if (this[index].toString().match(regex)) {
                  currentindex.position=index;
                  return index;
               }
            }
            if (loop) {
               for (var index = 0; index < startIndex; index++) {
                  if (this[index].toString().match(regex)) {
                     currentindex.position=index;
                     return index;
                  }
               }
            }
            return -1; 
         }
      })
    }  
   var searchElement = function (searchExp,options) {
      var regex = new RegExp("\\b" + searchExp, "gi");
      var position = options.regexIndexOf(regex, currentindex.position + 1, true);
      if (position > -1) {
         return position;
      }
      return undefined;
   }; 
   $(document).on('keydown', '.selectWrap', function (e) { var $this = $(this);
      if(e.keyCode >= 48 && e.keyCode <= 105){
         var options=[];
         var parent=$(this).parent();
         parent.find('.awd-select-list-item').each(function(){
            options.push($(this).text());      
         });        
         searchString="";
         searchString = searchString + (keymap.MAP[e.keyCode] || '');
         var position = searchElement(searchString,options);
         $(this).find('button.awd-select').html(options[position]).attr({'aria-label':options[position]});
         $(this).find('input.awd-select').attr({'value':options[position],'aria-label':options[position]});
         if(!isNaN(position)) {
            $(parent).find('.awd-select-list-item').removeAttr('aria-selected selected');
            $(parent).find('.awd-select-list-item:eq('+position+')').attr({'aria-selected': 'true', 'selected': 'selected'});
         }
         if($this.find('.awd-select-list-item[data-expand-this]').length!==0){
             $(parent).find('.awd-select-list-item:eq('+position+')').trigger('click');dropDownExpand($(this));
         }
         e.preventDefault();
         e.stopPropagation();
      }
   });
}

$(document).on('keydown', '.selectWrap', function (e) {
   var $this = $(this),
      upKey = '38',
      downKey = '40',
      hasFocus = document.activeElement.tagName.toLowerCase(),
      isClosed = $(document.activeElement).hasClass('closed'),
      isOpened = $(document.activeElement).hasClass('active');

   if (e.keyCode in keymap) {
      keymap[e.keyCode] = true;      
      if(keymap[27]) {
         $('.selectWrap button.active').click().focus();
         e.preventDefault();
      }
      if(isClosed==true){
        var list=$(this).find('.selectWrapper  li:not(.optgroup-wrapper)');        
        var selected=$(this).find('.selectWrapper  li:not(.optgroup-wrapper)').index($(this).find(".selectWrapper li[selected=selected]"));      
        if((keymap[40])&&(selected<list.length-1)) {         
               selected++;               
               $(this).find('.selectWrapper li').removeAttr('selected');
               var selectedText=$(list[selected]).attr({'selected':'selected'}).html();
               var ariaText=$(list[selected]).attr({'selected':'selected'}).text()
               $(this).find('button').attr({'aria-label':ariaText}).html(selectedText);        
               $(this).find('input').attr({'value':selectedText});
               if($(this).find('.selectWrapper .awd-select-list-item[data-expand-this]').length!==0){
                    $(list[selected]).trigger('click');dropDownExpand($(this));
               }
               e.preventDefault();
        }        
       if((keymap[38])&&(selected>0)){           
           selected--;
           $(this).find('.selectWrapper li').removeAttr('selected');
           var selectedText=$(list[selected]).attr({'selected':'selected'}).html();
           var ariaText=$(list[selected]).attr({'selected':'selected'}).text()
           $(this).find('button').attr({'aria-label':ariaText}).html(selectedText);        
           $(this).find('input').attr({'value':selectedText});
           if($(this).find('.selectWrapper .awd-select-list-item[data-expand-this]').length!==0){
               $(list[selected]).trigger('click');dropDownExpand($(this));
           }
           e.preventDefault();   
      }      
   }
   }
}).keyup(function(e) {
   if (e.keyCode in keymap) {
      keymap[e.keyCode] = false;
   }
});

$(document).on('click', function (e) {
   $('.awd-select').removeClass('active').addClass('closed').attr('aria-expanded', 'false').next().find('.awd-select-list').slideUp(200);
   if (!$(e.target).prop('disabled') && $(e.target).hasClass("awd-select") && $(e.target).next().find('.awd-select-list').is(':hidden')) {
         $(e.target).removeClass('closed').addClass('active').attr('aria-expanded', 'true').next().find('.awd-select-list').slideDown(200, function(){
         var winHeight   = (window.innerHeight),
            buttonHeight = ($(e.target).outerHeight()),
              butTopPos  = ($(this).offset().top - $(e.target).outerHeight() ),
              listTopPos = ($(e.target).next().find('.awd-select-list').offset().top ),
              listHeight = ($(e.target).next().find('.awd-select-list').outerHeight()),
              listBotPos = (listTopPos + listHeight),
               scrollPos = $(document).scrollTop(),
             mustScroll1 = butTopPos - scrollPos,
             mustScroll2 = winHeight - mustScroll1,
             mustScroll3 = mustScroll2 - listHeight,
             mustScroll4 = mustScroll3 - buttonHeight;

         if(mustScroll4 <= 20){
            $('html,body').animate({
               scrollTop: listBotPos - winHeight + 40
            }, 1000);            
         }
        
         if($(this).find('.awd-select-list-item[aria-selected="true"]').attr('aria-selected') == "true"){
            $(this).find('.awd-select-list-item[aria-selected="true"]').attr({'aria-selected':'true','selected':'selected'}).focus();
         }
         else{
            if ($(this).find('li').hasClass('optgroup-wrapper')) { 
                   $(this).find('.optgroup-wrapper:first-child').find('.awd-select-list-item:first-of-type').attr({'aria-selected':'true','selected':'selected'}).focus();; 
              }
              else{              
            $(this).find('.awd-select-list-item:first-of-type').attr({'aria-selected':'true','selected':'selected'}).focus();
         }
      }
      
      });
      e.preventDefault();
   }
   else if ($(e.target).hasClass('awd-select') && $(e.target).next().find('.awd-select-list').is(':visible')) {
      $('.awd-select').removeClass('active').addClass('closed').attr('aria-expanded', 'false').next().find('.awd-select-list').slideUp(200);
      e.preventDefault();
   }
   else if(!$(e.target).hasClass('awd-select')){
      $('.awd-select.active').next().find('.awd-select-list-item[aria-selected="true"]').click();
      $('.awd-select').removeClass('active').addClass('closed').attr('aria-expanded', 'false');
   }
   else {
      $('.awd-select').removeClass('active').addClass('closed').attr('aria-expanded', 'false').next().find('.awd-select-list').slideUp(200);
   }
   
});




// FACEBOOK LIKE BUTTON
DS2.btnFacebook = function () {
   var fb = '//www.facebook.com/plugins/like.php?href=';
   var canonical = escape($('link[rel=canonical]').attr('href'));
   var fbParam = '&amp;width=75&amp;height=21&amp;colorscheme=light&amp;layout=button_count&amp;action=like&amp;show_faces=false&amp;send=false';

   $('.facebook-like').html('<iframe id="facebookFrame" src="' + fb + canonical + fbParam + '" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:auto; height:21px;" allowTransparency="true"></iframe>');
   $('iframe .pluginConnectButtonLayoutRoot').css({
      'background-color': 'black !important'
   })
};

// STAR RATING COMPONENT
DS2.starRatings = function () {
    $('.starrating-wrap[data-rating-avg]').each(function(){ 
        var ratingEachCompo  = $(this),
            eachCompoPercntg = ratingEachCompo.attr('data-rating-avg'),
            starsToFilled = eachCompoPercntg / 20,      // Divided Entire Percentage to per Star Instance
            remainStr = starsToFilled.toFixed(2),       // Restrict the whole percentage to 2 digits after Decimal
            fullStars = Math.floor(starsToFilled),      // Round down the number of full stars that are going to be filled with 100%
            remainStrEnd = remainStr.split('.')[1];     // Get the 2 digit percentage after decimal to fill the partial Star if there's any

        $(ratingEachCompo).find('.starrating li>i>i').removeAttr('data-fill-width style');  // Removing Previous All Values
        $(ratingEachCompo).find('.starrating li').slice(0, fullStars).find('>i>i').attr('data-fill-width', '100'); // Filling Full Star(s)


        $(ratingEachCompo).find('.starrating li').eq(fullStars).find('>i>i').attr('data-fill-width', remainStrEnd); // Partial Star
        var partialVal = $(ratingEachCompo).find('.starrating li').eq(fullStars).find('>i>i').attr('data-fill-width');
        if(partialVal >= 95 && partialVal <= 100){
            $(ratingEachCompo).find('.starrating li').eq(fullStars).find('>i>i').attr('data-fill-width', '100'); // Partial Star Value
        }if(partialVal >= 45 && partialVal <= 50){
            $(ratingEachCompo).find('.starrating li').eq(fullStars).find('>i>i').attr('data-fill-width', '50'); // Partial Star Value
        }
        if($(ratingEachCompo).find('.total-reviews').length!=0){
           $(ratingEachCompo).find('.hidden-spoken').text('Average star rating of this product is ' + starsToFilled.toFixed(1) + ' based on ' + $(ratingEachCompo).attr('data-total-reviews') +' reviews');
           $(ratingEachCompo).find('.total-reviews').attr('aria-label', $(ratingEachCompo).attr('data-total-reviews')+ ' reviews of Product ' + $(ratingEachCompo).prev('p').text());
       }else {
           $(ratingEachCompo).find('.hidden-spoken').text('Average star rating of this product is ' + starsToFilled.toFixed(1));
       }
        $(ratingEachCompo).find('.total-reviews').text($(ratingEachCompo).attr('data-total-reviews')+ ' reviews');
        $(ratingEachCompo).find('.final-rating').text(starsToFilled.toFixed(1)).attr({'aria-label': 'Average star rating of this product is (' + starsToFilled.toFixed(1) + ')'});    
        $(ratingEachCompo).find('.starrating li').each(function(){
            // Setting the width using Inline Style attr as previously set in data-fill-width in each i ele
            $(this).find('>i>i').css('width', $(this).find('>i>i').attr('data-fill-width')+ '%');
        });
    });
};

(function (old) {
   $.fn.attr = function () {
      if (arguments.length === 0) {
         if (this.length === 0) {
            return null;
         }

         var obj = {};
         $.each(this[0].attributes, function () {
            if (this.specified) {
               obj[this.name] = this.value;
            }
         });
         return obj;
      }

      return old.apply(this, arguments);
   };
})($.fn.attr)
