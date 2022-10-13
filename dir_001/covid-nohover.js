$( document ).ready( function() {

	$( '#bot-modal' ).removeClass( 'd-none' );
	$( '#bot-modal' )
		.attr( 'aria-modal', 'true' )
		.attr( 'role', 'dialog' )
		.attr( 'aria-label', 'Coronavirus Self-Checker' )
		.attr( 'aria-labelledby', 'bot-title' );

	$( '#cdc-chat-bot-button' ).on( 'click', showChatBot );

	var closeModal = function( e ) {
		$( 'body' ).css( 'overflow-y', 'auto' );
		$( '.bot-modal' ).css( 'display', 'none' );
		$( '#bot-modal .card-body' ).find( 'iframe' ).remove();
		$( '#cdc-chat-bot' ).show();
		$( '#cdc-chat-bot-button' )[ 0 ].focus();

		$( '*[tabindex]' ).each( function( index ) {
			var tabable$ = $( this );
			if ( tabable$.attr( 'previous-tabindex' ) ) {
				tabable$.attr( 'tabindex', tabable$.attr( 'previous-tabindex' ) );
			} else {
				tabable$.attr( 'tabindex', '' );
			}
		} );

		$( this ).trigger( 'metrics-capture', [ 'selfchecker', 'button|close|' ] );

		if ( e ) e.stopImmediatePropagation();
		return false;
	};

	$( '.bot-modal .close' ).on( 'click', closeModal );
	$( '.bot-modal .close' ).on( 'keyup', function( e ) {
		if ( 27 === e.keyCode ) {
			closeModal( e );
		}
	} );

	window.closeModal = function( e ) {
		closeModal( e );
	}

	var restartModal = function( e ) {
		// Reload the IFRAME.
		$( '#cdc-covid19-healthbot' ).attr( 'src', $( '#cdc-covid19-healthbot' ).attr( 'src' ) );

		$( this ).trigger( 'metrics-capture', [ 'selfchecker', 'button|restart|' ] );

		e.stopImmediatePropagation();
		return false;
	};

	$( '.bot-modal button.restart' ).on( 'click', restartModal );
	$( '.bot-modal button.restart' ).on( 'keyup', function() {
		if ( 13 === e.keyCode ) {
			restartModal( e );
		}
	} );

	window.restartModal = function( e ) {
		restartModal( e );
	}

	var convertRemToPixels = function( rem ) {
		return rem * parseFloat( getComputedStyle( document.documentElement ).fontSize );
	};

	var updateBotModalSize = function() {
		if ( 'block' === $( '#bot-modal' ).css( 'display' ) ) {
			var newHeight = $( window ).height() - convertRemToPixels( 2 );
			if ( 767 > $( window ).width() ) {
				newHeight = $( window ).height();
			}
			var newBodyHeight = newHeight - $( '#bot-modal .card .card-header' ).height();

			$( '#bot-modal .card' ).css( 'height', newHeight.toString() + 'px' );
			$( '#bot-modal .card-body' ).css( 'height', newBodyHeight.toString() + 'px' );
		}
	};

	$( window ).on( 'resize', updateBotModalSize );

	function showChatBot( e ) {
		var botModal = $( '#bot-modal' );
		if ( 1 < botModal.length ) {
			botModal = $( botModal[ 0 ] );
		}

		if ( 0 < botModal.length ) {
			$( 'body' ).css( 'overflow-y', 'hidden' );

			var newHeight = $( window ).height() - convertRemToPixels( 2 );
			if ( 767 > $( window ).width() ) {
				newHeight = $( window ).height();
			}
			var newBodyHeight = newHeight - $( '#bot-modal .card .card-header' ).height();

			botModal.find( '.card' ).css( 'height', newHeight + 'px' );

			var language = $( 'html' ).attr( 'lang' );

			var botTitle = 'Coronavirus Self-Checker';
			if ( 'es' === language || 0 === language.indexOf( 'es-' ) ) {
				botTitle = 'Autoverificador del Coronavirus';
			} else if ( 'ko' === language || 0 === language.indexOf( 'ko-' ) ) {
				botTitle = '코로나바이러스 자가 점검 시스템';
			} else if ( 'vi' === language || 0 === language.indexOf( 'vi-' ) ) {
				botTitle = 'Bộ Câu Hỏi Tự Kiểm Tra Vi-rút Corona';
			} else if ( 'zh' === language || 0 === language.indexOf( 'zh-' ) ) {
				botTitle = '冠状病毒自检工具';
			}
			botModal.find( '.card-header .col-md-12 > span' ).html( botTitle );

			var botIframe = $( '<iframe id="cdc-covid19-healthbot" src="https://covid19healthbot.cdc.gov/?language=' + language + '" width="100%" height="100%" />' );
			botModal.find( '.card-body' ).css( 'height', '100%' ).append( botIframe );

			$( 'a[href],button,input,select,textarea,iframe,*[tabindex]' ).each( function( index ) {
				var tabable$ = $( this );
				if ( tabable$.attr( 'tabindex' ) ) {
					tabable$.attr( 'previous-tabindex', tabable$.attr( 'tabindex' ) );
				}
				tabable$.attr( 'tabindex', -1 );
			} );
			$( '.bot-modal button, .bot-modal iframe' ).attr( 'tabindex', '' );

			botModal.css( 'display', 'block' );

			// If we have Android, force display
			if ( navigator.userAgent.indexOf( "Android" ) !== -1 ) {
				$( '#bot-modal' ).attr( 'style', 'display: block !important;' );
			}

			botModal.find( 'button.close' )[ 0 ].focus();
		}
		if ( e ) {
			e.stopImmediatePropagation();
		}
		return false;
	}

	if ( '#cdc-chat-bot-open' === location.hash ) {
		showChatBot();
	}
	// share with window
	window.CDCShowCovidChatBot = function() {
		showChatBot();
	}

} );
