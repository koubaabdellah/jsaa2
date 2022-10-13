/**************************************************/
/****************** AdSlot Layer ******************/
/************** jquery.adSlotLayer.js *************/

(function($) {
	var adObject = ".first-mpu.adSlot-layer";
	var desktopPosition = ".first-mpu.adSlot-position.desktop-only";
	var mobilePosition = ".first-mpu.adSlot-position.mobile-only";
	// var mobilePositionObject = ".adSlot-position";
	// var articleContainer = ".articleBody";
	// var numOfContentObject = 5;
	var topImage = ".bigStory-section figure .wide, .bigStory-section figure .stardand";



	function adSlotPos() {
		$(adObject).css('position', 'absolute');
		$(adObject).css('z-index', '1');
		if ($(desktopPosition).css('display') != 'none') {
			$(adObject).css('top', $(desktopPosition).offset().top);
			$(adObject).css('left', $(desktopPosition).offset().left);
			$(adObject).css('width', $(desktopPosition).width());
		} else {
			$(adObject).css('top', $(mobilePosition).offset().top);
			$(adObject).css('left', $(mobilePosition).offset().left);
			$(adObject).css('width', $(mobilePosition).width());
		}
	}

	// if ($(articleContainer).has(mobilePositionObject).length == 0 ) {
	// 	if ($(articleContainer + " > :nth-child(" + numOfContentObject + ")").length % 2 == 1 ) {
	// 		$("<section></section>").addClass(mobilePositionObject.substring(1, mobilePositionObject.length)).insertAfter(articleContainer + " > :nth-child(" + numOfContentObject + ")");
	// 	} else {
	// 		$("<section></section>").addClass(mobilePositionObject.substring(1, mobilePositionObject.length)).insertAfter(articleContainer + " > :last-child");
	// 	}
	// }

	if ($(adObject).length) {
	    adSlotPos();

	    $(document).ready(function(){
		    adSlotPos();
	    });

	    $(document).scroll(function(){
		    adSlotPos();
	    });

	    $(window).resize(function() {
		    adSlotPos();
	    });

	    // Check Image loaded
	    $(topImage).ready(function(){
		    adSlotPos();
	    });

	    setInterval(function() {
    	    adSlotPos();
	    }, 1);
	}

})(jQuery);

(function($) {
	var adObject = ".second-mpu.adSlot-layer";
	var desktopPosition = ".second-mpu.adSlot-position.desktop-only";
	var mobilePosition = ".second-mpu.adSlot-position.mobile-only";
	var topImage = ".bigStory-section figure .wide, .bigStory-section figure .stardand";



	function adSlotPos() {
		$(adObject).css('position', 'absolute');
		$(adObject).css('z-index', '1');
		if ($(desktopPosition).css('display') != 'none') {
			$(adObject).css('top', $(desktopPosition).offset().top);
			$(adObject).css('left', $(desktopPosition).offset().left);
			$(adObject).css('width', $(desktopPosition).width());
		} else {
			$(adObject).css('top', $(mobilePosition).offset().top);
			$(adObject).css('left', $(mobilePosition).offset().left);
			$(adObject).css('width', $(mobilePosition).width());
		}
	}

	// if ($(articleContainer).has(mobilePositionObject).length == 0 ) {
	// 	if ($(articleContainer + " > :nth-child(" + numOfContentObject + ")").length % 2 == 1 ) {
	// 		$("<section></section>").addClass(mobilePositionObject.substring(1, mobilePositionObject.length)).insertAfter(articleContainer + " > :nth-child(" + numOfContentObject + ")");
	// 	} else {
	// 		$("<section></section>").addClass(mobilePositionObject.substring(1, mobilePositionObject.length)).insertAfter(articleContainer + " > :last-child");
	// 	}
	// }

	if ($(adObject).length) {
	    adSlotPos();

	    $(document).ready(function(){
		    adSlotPos();
	    });

	    $(document).scroll(function(){
		    adSlotPos();
	    });

	    $(window).resize(function() {
		    adSlotPos();
	    });

	    // Check Image loaded
	    $(topImage).ready(function(){
	        adSlotPos();
	    });

	    setInterval(function() {
    	    adSlotPos();
	    }, 1);
	}

})(jQuery);

/********** end of jquery.adSlotLayer.js **********/