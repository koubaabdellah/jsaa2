
(function($){

	$(document).ready(function () {
                        
		var deviceAgent = navigator.userAgent.toLowerCase();
		var isMobile = deviceAgent.match(/(iphone|ipod|android|iemobile)/)
		var templateDirectory = $("#sf-option-params").data("template-directory");
		var stylesheetDirectory = $("#sf-option-params").data("stylesheet-directory");
		var homeURL = $("#sf-option-params").data("home");
		var document_title = document.title;
		var document_url = document.URL;

		$(".elementor-post__read-more").append(' <i aria-hidden="true"><img class="inject-me" data-src="' + templateDirectory + '/images/icon-arrow.svg" src="' + templateDirectory + '/images/icon-arrow.png" /></i>');
		$(".elementor-search-form__submit i").html(' <img class="inject-me" data-src="' + stylesheetDirectory + '/images/icon-search.svg" src="' + stylesheetDirectory + '/images/icon-search.png" />');
		$(".elementor-search-form__submit i").removeClass("fa").removeClass("fa-search");
		if ( $("img.inject-me").length > 0 ) {

			var mySVGsToInject = document.querySelectorAll('img.inject-me');
			var injectorOptions = {};
			SVGInjector(mySVGsToInject, injectorOptions, function (totalSVGsInjected) {
				/* SVG IMAGES HAVE BEEN INJECRED */

			});

		}
		$(".elementor-widget-tabs").each(function () {
			$thisMenu = $(this).find(".elementor-tabs-wrapper");
			$(this).css("min-height", $thisMenu.height() + 60);
		});
		$(".content-wrap > p").each(function () {
			if ( $(this).text() == $(this).find("a").first().text() ) {
				$(this).find("a").first().addClass("sf-button").addClass("large").addClass("brand-fill");
			}
		});

		var blogInstance = $(".equal-height-columns .blog-items");

		blogInstance.imagesLoaded(function () {
			blogInstance.equalHeights();
		});

		$('#toggle').click(function() {
			$(this).toggleClass('toggle-active');
			$('#overlay').toggleClass('nav-active');
		});

	});

})(jQuery);

