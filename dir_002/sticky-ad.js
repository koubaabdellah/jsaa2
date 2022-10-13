jQuery(document).ready(function() {
    var $window = jQuery(window);
    var $ad_container = jQuery('#div-gpt-ad-1610641794756-0');
    var $ad_anchor = jQuery('#sidebar-sticky-ad-anchor');


    // Run this on scroll events.
    $window.scroll(function() {
        var window_top = $window.scrollTop() + 60;
        var div_top = $ad_anchor.offset().top;
        var window_width = $window.innerWidth();
        if (window_top > div_top && window_width >= 992) {
            $ad_container.css({'position': 'fixed', 'top': '60px'}); 
            $ad_anchor.height($ad_container.height());
        } else {
            $ad_container.css({'position': 'static', 'top': '0px'}); 
            $ad_anchor.height(0);
        }
    });
});