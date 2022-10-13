jQuery(function lastLoadInjector($) {
	console.log('lastload');
	$(document).ready(function() {
		/*$('.content-wrapper').ready(function() {
			var link = document.createElement("link");
			link.href = "/wp-content/themes/dolores/assets/styles/lastload_stylesheet.css";
			link.type = "text/css";
			link.rel = "stylesheet";
			document.getElementsByTagName("head")[0].appendChild(link);
		})*/
		//Memberpress set default country
		$('#mepr-address-country').val('US');
		$('#mepr-address-country').change();
		var windowbig=true
		var flyout = $('.oht-menu-container--flyout')
		adminbar_fixes()
		adminOverlap()
		hamburgerler()
		$( window ).resize(function() {
			hamburgerler()
			adminOverlap() 
		})
		
		function adminOverlap(){
			if($('#wpadminbar').length > 0 &&  $(window).width() < 783){
			    $('#wpadminbar').css('height', '42px')
				$('#wpadminbar').css('margin-top', '-7px')
				if($('.oht-menu--clem').length > 0 || $('.oht-menu--ford').length > 0){ 
					$('#wpadminbar').css('position', 'fixed')
				}
				
			}
			if($('#wpadminbar').length > 0 &&  $(window).width() > 783){
				$('#wpadminbar').css('height', '32px')
				$('#wpadminbar').css('margin-top', '0px')
				
			}
		}
		function hamburgerler (){
			if($(window).width() < 1024) {
				$('.hamburger-text').remove()
				if(windowbig==true){
					adminbar_fixes()
				}
				 windowbig = false
				 
			}
			if($(window).width() > 1024) {
				if(windowbig ==false){
					$('.hamburger-text-anch').before( '<div class="hamburger-text">Menu</div>')
					windowbig=true
				}
			}
		}
		function adminbar_fixes(){
			if($('#wpadminbar').length > 0){
				flyout.css('margin-top','20px')
			}
		}
		
	})
	
})
jQuery(".oht-slider").click(function (event) {
	event.preventDefault();
	event.stopImmediatePropagation();
	if (jQuery(".oht-aa-link:hover").length != 0) {
	  console.log("hit it!");
	  window.location.href = jQuery(".oht-aa-link:hover").attr("href");
	}
  });
  