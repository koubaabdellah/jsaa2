/* Raw JS */
$( function() {
	if ( 0 < $( 'html.cdc-2020' ).length && 0 < $( '.col.cdc-logo' ).length ) {
		var newQrCode = $( '<div id="cdc-qrcode-placeholder" class="d-none d-print-block" />' ).hide();
		$( '.col.cdc-logo' ).after( newQrCode );
		var pageUrl = window.location.href;
		pageUrl = pageUrl.split( '#' )[ 0 ];
		pageUrl = pageUrl.split( '?' )[ 0 ];

		if ( QRCode.toDataURL ) {
			// latest version
			QRCode.toDataURL(
				pageUrl + '?s_cid=qr2021',
				{
					errorCorrectionLevel: 'H',
					type: 'image/jpeg',
					quality: 0.3,
					margin: 0,
					scale: 2,
					color: {
						dark:"#000000",
						light:"#ffffff"
					}
				},
				function ( err, url ) {
					if ( ! err && url ) {
						$( '#cdc-qrcode-placeholder' ).append( $( '<img />' ).attr( 'src', url ) ).show();
					}
				}
			);
		} else {
			// older version
			var qrcode = new QRCode( document.getElementById( 'cdc-qrcode-placeholder' ), {
				text: pageUrl + '?s_cid=qr2021',
				width: 96,
				height: 96,
				colorDark: "#000000",
				colorLight: "#ffffff",
				correctLevel: QRCode.CorrectLevel.H
			} );
		}

		var $style = $( '<style></style>' ).attr( { type: 'text/css', media: 'print' } ).text(
			'#cdc-qrcode-placeholder{ display: inline-block!important; float: right; }' + "\n" +
			'header .cdc-logo{ width: 80%; display: inline-block; height: 96px; }'
		)
		$( 'head:first' ).append( $style );
	}

} );
/* End Raw JS */
