(function($) {
    'use strict';

    $( document ).ready(function(){

        let $redirectUrlInputField = $( 'input[name=redirect_url]' );

        if( $redirectUrlInputField && $redirectUrlInputField.length && $redirectUrlInputField.length > 0  ) {

            // start - bypass wpcf7 success message on redirect
            const $cf7ResponseOutput = $('.wpcf7-response-output')[0];
            let observer = new MutationObserver( function( mutations ) {
                if ( $('.wpcf7-form.sent p') !== undefined ) {
                    $('.wpcf7-response-output').remove();
                    observer.disconnect();
                }
            });

            observer.observe( document, { attributes: false, childList: true, characterData: false, subtree: true } );
            $('body').remove( $cf7ResponseOutput );
            // end - bypass wpcf7 success message on redirect

            let redirectUrl = $redirectUrlInputField.val();
            $redirectUrlInputField.val( addUrlParam( redirectUrl, 'logged-in', awIsUserLoggedIn() ) );

            document.addEventListener( 'wpcf7mailsent', function( event ) {
                let redirectUrl = $redirectUrlInputField.val();
                if ( redirectUrl ){
                    window.location.href = redirectUrl;
                }
            }, false );
        }

    });

})(jQuery);