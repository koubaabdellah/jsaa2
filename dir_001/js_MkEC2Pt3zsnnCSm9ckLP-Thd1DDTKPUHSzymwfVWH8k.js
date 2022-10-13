(function ($) {
  Drupal.behaviors.themename = {
    attach: function (context, settings) {
      var groupSidebar = $(".group-sidebar", context);
      var breakpoint = 991;

      groupSidebar.wrap("<div class='sticky-spacer'/>");

      // Run sticky-kit only for desktop view (>991px).
      if ($(window).width() > breakpoint) {
        groupSidebar.stick_in_parent({
          parent: ".group-main-content-wrapper",
          spacer: ".sticky-spacer",
          offset_top: 113,
          recalc_every: 1
        });
      }

      // Detach stick AD on sidebar for mobile.
      $(window).on("resize", function () {
        if ($(window).width() <= breakpoint) {
          groupSidebar.trigger("sticky_kit:detach");
        }
      });

      if ($("#ads_prescroll_mobile:first-child", context).length > 0) {
        $("footer").css("padding-bottom", "90px");
      }
    }
  };
})(jQuery);
;
