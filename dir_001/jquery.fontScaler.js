/* 
 * fontScaler - flexible font-sizing plugin  
 * Examples and documentation at: http://www.marcup.nl/projects/fontScaler 
 * Version 0.2 (13/09/2009) * Copyright (c) 2009 Marc Bruisten 
 * Licensed under the GPL License: http://www.gnu.org/licenses/gpl.txt 
 * Requires: jQuery v1.3+ 
 *
 * Changelog 0.2
 * - removed obsolete class "fontScaler" from fontscaler anchor buttons
 * - fixed cookie storage functionality
 * - added cookie lifetime (storetime) setting
 *
 */
 
 (function($) {

	$.fn.fontScaler = function(options) {
		var defaultSettings = {
			increment: 'fixed'				// fixed || variable
		, fixed: {							// fixed increment options
			  size1: 62.5
			, size2: 75
			, size3: 100
			, id1: 'fs_normal'
			, id2: 'fs_medium'
			, id3: 'fs_large'
			, title1: 'normal'
			, title2: 'medium'
			, title3: 'large'
			, character: 'A'
		}
		, variable: {						// variable increment options
			  step: 10						// variable increment value in percentages
			, id1: 'fs_decrease'
			, id2: 'fs_increase'
			, title1: 'decrease'
			, title2: 'increase'
			, character1: '-'
			, character2: '+'
		}
		, store: false						// store user font-size in cookie
		, storetime: 10						// lifetime of cookie in minutes
		, target: eval(document.body)
		, containerclass: "fontScaler"
		, fx: "normal"						// normal || smooth
		, fxspeed: 100
		, controllerElement: this
		};

		if (options && options.fixed)
			options.fixed = $.extend({}, defaultSettings.fixed, options.fixed);

		if (options && options.variable)
			options.variable = $.extend({}, defaultSettings.variable, options.variable);
		
		var settings = new Array();
		settings = $.extend({}, defaultSettings, options);			
		
		// increment constructor

		function newfontScaler(i) {
			
			var fixed = settings.fixed;
			var variable = settings.variable;

			if (settings.increment == "fixed") {
				var fsid = fixed["id" + i];
				var fstitle = fixed["title" + i];
				var fscharacter = fixed.character;
			}
			if (settings.increment == "variable") {
				var fsid = variable["id" + i];
				var fstitle = variable["title" + i];
				var fscharacter = variable["character" + i];
			}

			if ((settings.increment == "variable" && variable["id" + i] != null) || (settings.increment == "fixed" && fixed["id" + i] != null)) {
				return $(document.createElement('a'))
				.attr('href', 'javascript:void(0)')
				.attr('id', fsid)
				.attr('title', fstitle)
				.append($(document.createTextNode(fscharacter)))
				.bind("click", function(e) { changeFontSize(i,e) })
			}
		}

		var fontSizeLinks = $(document.createElement('div'))
		.attr('class', settings.containerclass)
		.append(
			newfontScaler(1), newfontScaler(2), newfontScaler(3)
		);

		$(settings.controllerElement).append(fontSizeLinks);
		
	
		
		// fontScaler function
		
		function changeFontSize(i,event) {
			
			i = i * 1;
			var target = settings.target;			
			
			if (settings.increment == "fixed") {

				if (settings.fx == "normal") {
					$(target).css('font-size', settings.fixed["size" + i] + '%');
				}
				if (settings.fx == "smooth") {
					$(target).animate({
						fontSize: settings.fixed["size" + i] + '%'
					}, settings.fxspeed);
				}
				if ((event) && (settings.store == true)) { //case button clicked //create a cookie to store font-size
					var duration = ((settings.storetime /24) /60);
					createCookie('fontScalerFixed', (i), duration);
				}
			
			}
			
			if (settings.increment == "variable") {
				
				var currentSize = $(target).css('font-size').split("px")[0] * 1;
				
				if (event) { //case button clicked
					var pressedbutton = $(event.target);
					if (pressedbutton.hasClass("disabled")) {
						eraseCookie('fontScalerVariable');
						return false;
					}
				}			

				if (i == 1) {
					var newSize = currentSize - ((settings.variable["step"] / 100) * currentSize);
				}
				else if (i == 2) {
					var newSize = currentSize + ((settings.variable["step"] / 100) * currentSize);
					if (event) { pressedbutton.siblings().removeClass("disabled"); }
				}	
				else {
					var newSize = i;
				}

				if (settings.fx == "normal" && newSize > 10) {					
					$(target).css('font-size', newSize);
				}
				else if (settings.fx == "smooth" && newSize > 10) {
					$(target).animate({
						fontSize: newSize
					}, settings.fxspeed);
				}
				else if (event) {
					pressedbutton.toggleClass("disabled"); 	
				}
				
				if ((event) && (settings.store == true)) { //case button clicked //create a cookie to store font-size
					var duration = ((settings.storetime /24) /60);
					createCookie('fontScalerVariable', (newSize), duration);
				}
				
			}
			
		}
		
		var cookievalueFixed = readCookie('fontScalerFixed');
		if ((cookievalueFixed != null) && (settings.store == true)) {
			changeFontSize(cookievalueFixed);
		}
		var cookievalueVariable = readCookie('fontScalerVariable');
		if ((cookievalueVariable != null)&& (settings.store == true)) {
			changeFontSize(cookievalueVariable);
		}
		
		/* cookie functions */
		function createCookie(name, value, days) {
			if (days) {
				var date = new Date();
				date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
				var expires = "; expires=" + date.toGMTString();
			}
			else var expires = "";
			document.cookie = name + "=" + value + expires + "; path=/";
		}

		function readCookie(name) {
			var nameEQ = name + "=";
			var ca = document.cookie.split(';');
			for (var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') c = c.substring(1, c.length);
				if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
			}
			return null;
		}

		function eraseCookie(name) {
			createCookie(name, "", -1);
		}


	};
})(jQuery);