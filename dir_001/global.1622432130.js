
/**
 * Defines the region where an ad slot need to be displayed.
 * 
 * @param parent    element path    The ID of the division which encapsulates the start, end and ad slot element (example '#unique_id').
 * @param ad_slot   element path 	The class name of the ad slot aka the div that you want to attach to the page (example '.class_ad').
 * @param end_point element path 	The class name for the division that you want the ad slot to stop moving when it reaches the bottom (example '.class_end').
 *
 * @author Alec Arnold <aarnold@thecode.co>
 */
function hook_ad_slots( parent, ad_slot, end_point ) {

	// Convert the parameters to elements
	var $parent_element  = $( parent );
	var $ad_slot_element = $parent_element.find( ad_slot );
	var $end_element     = $parent_element.find( end_point );

	// Get the height of the ad slot - used for the offset
	var ad_height    = $ad_slot_element.height();

	// Get the division offsets 
	// Temp disable re bug fix on infinite scroll with comments disabled
	//var end_offset    = $end_element.offset().top;

	// Get the height for the side bar
	var single_height = $( '#single', $parent_element ).height();
	var ad_slot_element_height = $ad_slot_element.height();

	// Set the ad slot offset 
	$( '#side', $parent_element ).height( single_height + 'px' );

	// Define the function that need to run when the the user reaches its original position 
	var top_funciton = function() {
		$ad_slot_element.toggleClass( 'stuck' ).removeClass( 'bottom' );
	}

	// Hook the waypoint into the ad slot
	$( '#single', $parent_element ).waypoint( top_funciton, { offset: '-41px' } );

	// Define the function that needs to run once the the user reaches the end point
	var bottom_function = function() {
		$ad_slot_element.toggleClass('bottom');
	}

	// Hook the waypoint to the bottom of the end point division
	$( '#single', $parent_element ).waypoint( bottom_function, { offset: '-' + ( $( '#single', $parent_element ).height() - '715' ) + 'px' } );

}


function PopupCenterDual(url, title, w, h) {
	// Fixes dual-screen position Most browsers Firefox
	var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
	var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;
	width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
	height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
	
	var left = ((width / 2) - (w / 2)) + dualScreenLeft;
	var top = ((height / 2) - (h / 2)) + dualScreenTop;
	var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
	
	// Puts focus on the newWindow
	if (window.focus) {
	newWindow.focus();
	}
}


( function( $ ) {

    /* Select box styles */
    $('select').selectric();

    /* Mobile drop down toggle */
    $( "#mobile .mobmenu" ).click(function() {
        $( "#mobiledrop" ).slideToggle( "slow").toggleClass('close');
        $(this).toggleClass('close');
    });

    $( "#mobile .mobsearch" ).click(function() {
        $( "#mobilesearch" ).slideToggle( "slow").toggleClass('close');
        $(this).toggleClass('close');
    });

    /* Sub menu toggle */
    $( ".dropbox ul#cats li" ).hover(function() {
        $(this).children('.sub-menu').fadeIn( "fast");
        $(this).siblings().children('.sub-menu').fadeOut();
    });



    /* Load drop down */
    $( ".hide" ).click(function() {
        $(this).hide();
        $(this).siblings(".moredrop").slideDown();
        $(this).siblings(".link").show();
    });

    /* Comments Drop down */
    var hiddenComments = $(".hidden-comments");
    var hideComm = $(".hidecomm");
    var showComm = $( ".showcomm" );
    var comment = $("#comments .comment");

    showComm.click(function() {
        $(this).hide();
        hiddenComments.slideDown();
        hideComm.show();
       	comment.addClass("clear");
    });

    hideComm.click(function() {
        $(this).hide();
        hiddenComments.slideUp();
        showComm.show();
       	comment.removeClass("clear");
    });

    $( ".link" ).click(function() {
        $(this).hide();
        $(this).siblings(".moredrop").slideUp();
        $(this).siblings(".hide").show();
    });

    /* Mobile submenu */
    $( "#mobiledrop .menu-item-has-children a" ).click(function() {
        $(this).siblings(".sub-menu").slideToggle('easeInQuart');
        $(this).toggleClass('close');
    });


    /* Lightbox */
    $('a.lightbox').nivoLightbox();


    /* Search dropdown */
    $( ".search a" ).click(function() {
        $('form.topsearch').fadeToggle();
        $(this).toggleClass('close');
    });


    /* globe dropdown */
    $( ".globe" ).hover(function() {
        $('.geo').fadeToggle();
    });


    var premiumListings = $('#premiumlistings');
	$('.listingcontrols').show();
	premiumListings.show();
	premiumListings.bxSlider({
		auto: true,
		autoHover: true,
		responsive: true,
	});

    var ifMob = $("#ifmob > div");

	$('#topFeature').waypoint(
		function() {
			ifMob.toggleClass('stuck');
		}
	);
	$('#postWrap').waypoint(
		function() {
			ifMob.toggleClass('stuck');
		}
	);


	// Three Carousel library (check custom.js), Why? TODO: Remove one library
	// Carousel
	$('.eventSlide').carouFredSel({
		scroll: { pauseOnHover: true, fx: 'slide' },
		auto: { timeoutDuration: 3000 },
		prev: { button: '.prev', key: 'left' },
		next: { button: '.next', key: 'right' },
		responsive: true,
		swipe: true,
	});

    //Carousel
    $('.event-slider').bxSlider({
        auto: true,
        ticker: true,
        speed: 1500
    });

	
	/* leaderboard slider */
	$('.leaderboards .slide').carouFredSel({
		scroll: { pauseOnHover: true, fx: 'slide' },
		auto: { timeoutDuration: 3000 },
		prev: { button: '.prev', key: 'left' },
		next: { button: '.next', key: 'right' },
		responsive: true,
		swipe: true,
		pagination: {
			container: '#pager'
		}
	});

	/* Infinte Scroll */
	$('#postWrap').cleverInfiniteScroll({
		contentsWrapperSelector: '#isMarker',
		contentSelector: '.singlePost',
		contentHeight: '.white',
		nextSelector: '#scroller',
		loadImage: ''
	});

	var $commentform = $( '#commentform' );

	$( '.comment .reply' ).click( function( e ) {
		e.preventDefault();
		
		var $this = $( this );
		var comment_id = $this.data( 'comment' );
		var $replyform = $commentform.clone();
		
		var $hidden = $(  '<input type="hidden" name="comment_parent">' ).val( comment_id );
		$replyform.append( $hidden );
		$this.after( $replyform );
		
		$this.hide();
		
	} );


	// Todo : improve the code below, find() can be removed I think.
	$( '.featureBanner iframe' ).contents().find( "body a img" ).attr( "style", "width:100%;" );

	if( $('.match_height').length ){
        $('.match_height').matchHeight();
	}

	$( document ).ready(function () {
		var articleImages = $( 'article.longform .wp-caption img' );
		if ( articleImages.length ) {
			articleImages.each( function( index, element ) {
				var $this = $( element ),
					offset = 95, // The offset is within the margin.
					parent = $this.parent(),
					imgWidth = parseInt( $this.attr( 'width' ) ),
					allowedIncreasePercent = 0.20, // Images should never be increased by 20%
					allowedPercentOfMax = ( 1 / ( 1 + allowedIncreasePercent ) );

				console.log({
					'imgWidth': imgWidth,
					'parent.width()': parent.width(),
					'( parent.width() - offset ) * allowedPercentOfMax': ( parent.width() - offset ) * allowedPercentOfMax,
				});

				/*
				 * If the image is smaller than the content width minus offset and of the allowed percentage of max
				 * adjust the size.
				 */
				if ( imgWidth < ( ( parent.width() - offset ) * allowedPercentOfMax ) ) {
					var newWidth = imgWidth * ( 1 + allowedIncreasePercent );
					$this.css( 'width', newWidth + 'px' );
					console.log( 'newWidth', newWidth);
					parent.addClass( 'dynamic-image' );
				}
			} );
		}
	} );

} )( jQuery );
