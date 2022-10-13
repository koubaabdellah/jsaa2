
// insert a promo after the nth paragraph within an article's content
	function Set_InContentPlacement( numOfParagraphPlacement, promoAsString )
	{
		var nthParagraph;
		var paragraphElements;
		var numOfParagraphs;
		var counter;
		var contentWrapperElement;
		var contentPromo;

		paragraphElements = document.querySelectorAll('#articleContentWrapper p');

		if ( paragraphElements && paragraphElements.length > 0 )
		{
			numOfParagraphs = paragraphElements.length;
			counter = 0;

			contentWrapperElement = document.createElement('div');
			contentWrapperElement.setAttribute('id', 'promo_incontent');

			contentPromo = document.createElement('div');
			contentPromo.innerHTML = promoAsString;

			contentWrapperElement.appendChild( contentPromo );

			if ( numOfParagraphPlacement == '' || numOfParagraphPlacement > numOfParagraphs )
			{
				numOfParagraphPlacement = 2;
			}
			else if ( numOfParagraphPlacement == 'Bottom' )
			{
				numOfParagraphPlacement = numOfParagraphs - 1;
			}
			else
			{
				numOfParagraphPlacement --;
			}

			nthParagraph = paragraphElements[numOfParagraphPlacement];

			if ( paragraphElements[numOfParagraphPlacement] !== undefined )
			{
				nthParagraph.parentNode.insertBefore( contentWrapperElement, nthParagraph.nextSibling );
			}
		}
	}

/*
In Content Promos
*/


	function addPromoTrackingToInContentPromos() {
		var inContentPromoElement = document.querySelector('#promo_incontent');
		var allLinkElems;
		var allFormElems;
		var counter = 0;
		var numOf = 0;

		if ( inContentPromoElement && promo_inContent_postId ) {
			// since this was found, log an impression event
			LogPromoEvent('promo_inContent', promo_inContent_postId , 'impression' );

			// set up event listeners for the other possible events
			allLinkElems = inContentPromoElement.querySelectorAll('a');
			allFormElems = inContentPromoElement.querySelectorAll('form');

			counter = 0;
			numOf = allLinkElems.length;

			for ( counter = 0; counter < numOf; counter ++ ) {
				allLinkElems[counter].addEventListener('click', LogPromoEvent.bind( this, 'promo_inContent', promo_inContent_postId , 'click' ) );
			}

			counter = 0;
			numOf = allFormElems.length;
			
			for ( counter = 0; counter < numOf; counter ++ ) {
				allFormElems[counter].addEventListener('submit', LogPromoEvent.bind( this, 'promo_inContent', promo_inContent_postId , 'submit' ) );
			}
		}
	}

	window.addEventListener('DOMContentLoaded', addPromoTrackingToInContentPromos )

/*
Alert bar promos
*/

	// alert bar instantiation
		function AlertBar ( closeButtonId, contentWrapperId ) {

			var closeButtonElement;
			var contentWrapperElement;
			var headerElement;
			var tomorrowDate = new Date();
				tomorrowDate.setHours( tomorrowDate.getHours() + 24);
			
			closeButtonElement = document.querySelector('#' + closeButtonId );
			contentWrapperElement = document.querySelector('#' + contentWrapperId );

			if ( closeButtonElement && contentWrapperElement ) {
				closeButtonElement.addEventListener('click', AlertBar_Toggle.bind(this, true) );
				headerElement = contentWrapperElement.parentNode;

				// set initial state
				if ( Cookies.get('alertbar') == 'closed' ) {
					AlertBar_Close( false );
				}
				else {
					AlertBar_Open( false );

					if ( promo_alert_postId ) {
						LogPromoEvent( 'promo_alert', promo_alert_postId , 'impression' );
					}
				}
				AlertBar_TrackLinks();
			}


			function AlertBar_Toggle( cookieBrowser ) {

				// alert bar is hidden
				if ( contentWrapperElement.style.display == 'none' ) {
					AlertBar_Open( cookieBrowser );

					if ( promo_alert_postId ) {
						LogPromoEvent( 'promo_alert', promo_alert_postId , 'open' );
					}
				}
				// alert bar is visible
				else {
					AlertBar_Close( cookieBrowser );

					if ( promo_alert_postId ) {
						LogPromoEvent( 'promo_alert', promo_alert_postId , 'close' );
					}
				}
			}
			function AlertBar_Open( cookieBrowser ) {

				// content wrapper
				contentWrapperElement.style.display = 'block';
				var headers_array = document.getElementsByClassName('site-header');
				var theheader = headers_array[0];
				theheader.style.marginTop = '40px';

				var thenav = document.getElementById('genesis-nav-primary');
				thenav.style.marginTop = '40px';

				const innerClass = document.querySelector('.site-inner');
				const innerStyle = getComputedStyle(innerClass);
				let margin_Top = innerStyle.marginTop;
				margin_Top = parseInt(margin_Top) + 40;
				margin_Top = margin_Top + 'px';
				innerClass.style.marginTop = margin_Top;

				// should browser be cookied to remember this state?
				if ( cookieBrowser === true ) {
					Cookies.set('alertbar', 'open', {expires: tomorrowDate});
				}
			}
			function AlertBar_Close( cookieBrowser ) {

				// content wrapper
				contentWrapperElement.style.display = 'none';
				var headers_array = document.getElementsByClassName('site-header');
				var theheader = headers_array[0];
				theheader.style.marginTop = '0px';

				var thenav = document.getElementById('genesis-nav-primary');
				thenav.style.marginTop = '0px';

				const innerClass = document.querySelector('.site-inner');
				if (window.innerWidth < 855)
				{
					innerClass.style.marginTop = '150px';
				} else
				{
					innerClass.style.marginTop = '120px';
				}
				

				// should browser be cookied to remember this state?
				if ( cookieBrowser === true ) {
					Cookies.set('alertbar', 'closed', {expires: tomorrowDate});
				}
			}
			function AlertBar_TrackLinks() {
				var allLinkElems = contentWrapperElement.querySelectorAll('a');
				var numOf = allLinkElems.length;
				var counter = 0;

				for ( counter = 0; counter < numOf; counter ++ ) {
					if ( allLinkElems[counter] != closeButtonElement.parentNode ) {
						allLinkElems[counter].addEventListener('click', LogPromoEvent.bind( this, 'promo_alert', promo_alert_postId , 'click' ) );
					}
				}
			}
		}
		window.addEventListener('DOMContentLoaded', AlertBar.bind( AlertBar, 'promo_bar_close', 'promo_bar'), { passive: true } );

	// helper function for alert bar event tracking
		function LogPromoEvent( loggedCategory, postId, loggedAction ) {

			if ( loggedAction == 'impression' )
			{
				ga('send', { hitType: 'event', eventCategory: loggedCategory, eventAction: loggedAction, eventLabel: postId, nonInteraction: true });
			}
            
			else
			{
				ga('send', { hitType: 'event', eventCategory: loggedCategory, eventAction: loggedAction, eventLabel: postId });
			}
		}


//Footer promo 

	function footerPromo() {

		var callback;
		var promoElement;

		function Footer_TrackLinks() {
			var allLinkElems = this.promoElement.querySelectorAll('a');
			var numOf = allLinkElems.length;
			var counter = 0;

			for ( counter = 0; counter < numOf; counter ++ ) {
				allLinkElems[counter].addEventListener('click', LogPromoEvent.bind( this, 'footerotherpromo', promo_footer_postId , 'click' ) );
			}
		}
		function Init() {
			var footerPromoElement = document.querySelector('.footerotherpromo'); //called in footer.php (not used in guest footer)

			if ( footerPromoElement ) {

				if ( Cookies.get('promo_footer') !== 'closed' ) {

					this.promoElement = footerPromoElement;

					// add event tracking to footer promo links
					Footer_TrackLinks();
				}
			}
		}
		window.addEventListener('DOMContentLoaded', Init);	
	}
	footerPromo();


/*
Bottom Bar Promos
*/
	function bottombarPromo() {

		var callback;
		var promoElement;
		var promoCloseElement;
		var yDistanceToTrigger = 500;
		var tomorrowDate = new Date();
			tomorrowDate.setHours( tomorrowDate.getHours() + 24);


		function Close() {
			this.promoElement.style.display = 'none';
			Deregister();
			Cookies.set('promo_bottombar', 'closed', {expires: tomorrowDate});

			// log a close event for the bottom bar promo
			if ( promo_bottombar_postId ) {
				LogPromoEvent( 'promo_bottombar', promo_bottombar_postId , 'close' );
			}

		}
		function Open() {
			this.promoElement.style.display = 'block';
			Cookies.set('promo_bottombar', 'open', {expires: tomorrowDate});

			// log an open event for the bottom bar promo
			if ( promo_bottombar_postId ) {
				LogPromoEvent( 'promo_bottombar', promo_bottombar_postId , 'open' );
			}
		}
		function Toggle() {
			if ( this.promoElement.style.display == 'block' ) {
				this.Close();
			}
			else {
				this.Open();
			}
		}
		function Register(){
			callback = CheckScroll.bind( this );
			window.addEventListener('scroll', callback );
		}
		function Deregister(){
			window.removeEventListener('scroll', callback );
		}
		function CheckScroll( event ){
			
			var yDimension;

			if ( event.pageY ) {
				yDimension = event.pageY;
			}
			else {
				yDimension = document.body.scrollTop || window.pageYOffset;
			}

			if ( yDimension > yDistanceToTrigger ) {
				
				this.promoElement.style.display = 'block';

				Deregister();

				// log an impression for the bottom bar promo having appeared
				if ( promo_bottombar_postId ) {
					LogPromoEvent( 'promo_bottombar', promo_bottombar_postId , 'impression' );
				}
			}
		}
		function Bottombar_TrackLinks() {
			var allLinkElems = this.promoElement.querySelectorAll('a');
			var numOf = allLinkElems.length;
			var counter = 0;

			for ( counter = 0; counter < numOf; counter ++ ) {
				allLinkElems[counter].addEventListener('click', LogPromoEvent.bind( this, 'promo_bottombar', promo_bottombar_postId , 'click' ) );
			}
		}
		function Init() {
			var bottombarPromoElement = document.querySelector('#promo_bottombar');
			var promoCloseElement = document.querySelector('#promo_bottombar_close');

			if ( bottombarPromoElement ) {

				if ( Cookies.get('promo_bottombar') !== 'closed' ) {

					this.promoElement = bottombarPromoElement;

					// add close button click listener
					if ( promoCloseElement ) {
						promoCloseElement.addEventListener('click', Close.bind( this ) );
					} 

					// register scroll listener
					Register();

					// add event tracking to footer promo links
					Bottombar_TrackLinks();
				}
			}
		}
		window.addEventListener('DOMContentLoaded', Init);	
	}
	bottombarPromo();

/*
Subscription / Article Promos
*/
	function addPromoTrackingToSubscriptionPromos() {

		var wrapperElement = document.querySelector('#magazine-promo');
		var allLinkElems;
		var allFormElems;
		var counter = 0;
		var numOf = 0;

		if ( wrapperElement && promo_subscription_postId ) {

			// since this was found, log an impression event
			LogPromoEvent('promo_site', promo_subscription_postId , 'impression' );

			// set up event listeners for the other possible events
			allLinkElems = wrapperElement.querySelectorAll('a');
			allFormElems = wrapperElement.querySelectorAll('form');

			counter = 0;
			numOf = allLinkElems.length;

			for ( counter = 0; counter < numOf; counter ++ ) {
				allLinkElems[counter].addEventListener('click', LogPromoEvent.bind( this, 'promo_site', promo_subscription_postId , 'click' ) );
			}

			counter = 0;
			numOf = allFormElems.length;

			for ( counter = 0; counter < numOf; counter ++ ) {
				allFormElems[counter].addEventListener('submit', LogPromoEvent.bind( this, 'promo_site', promo_subscription_postId , 'submit' ) );
			}
		}
	}

	window.addEventListener('DOMContentLoaded', addPromoTrackingToSubscriptionPromos);



/*
General
*/
