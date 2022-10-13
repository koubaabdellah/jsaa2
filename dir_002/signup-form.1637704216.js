/** 
 * Helper script for the sign up forms on Mumbrella which automatically detects users
 * located in the EU and flags them as such when passing the subsription along to Numbrella.
 */

(function($) {

	function get_query_params() {
		// Pinched from; https://stackoverflow.com/questions/7722683/how-to-get-all-querystring-values-using-javascript

	    var vars = [], hash;
	    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	    for ( var i = 0; i < hashes.length; i++ ) {
	        hash = hashes[i].split('=');
	        vars.push(hash[0]);
	        vars[hash[0]] = hash[1];
	    }

	    return vars;
	}

	function geoip_lookup(callback) {

		var request = {};

		var query = get_query_params();
		if (query['country_code'] != undefined) {
			request['country_code'] = query['country_code'];
		}

		$.ajax({
		    url: '/api/v1/geoip/',
		    type: 'POST',
		    data: request,  // pass all qeury string vars along to the geoip webservice, so we can spoof location
		    error: function(XMLHttpRequest, textStatus, errorThrown){
		    	callback(undefined);    
		    },
		    success: function(resp) {
		    	callback(resp.response);
		    }
		});

	}

	function add_geo_fields($form) {

		geoip_lookup(function(geo) {
			console.log("Subscribe geo target");
			console.log(geo);

			// Add geo values to form if lookup succeeded
			if (geo != undefined) {
				$form.append('<input type="hidden" name="tracked_country" value="'+ geo.country +'"/>');
				$form.append('<input type="hidden" name="signedup_in_eu" value="'+ geo.is_eu +'"/>');
			} else {
				console.error("Failed to lookup geoip for client");
			}

		});

	}

	$(document).ready(function() {
		var have_added_geo_fields = false;

		var query = get_query_params();
		if ( query['e'] !== undefined ) {
			$( '#amf-input-email_1358' ).val( query['e'] );
		}

		$('form.adestra-email-sub.popup-button').not('#subscriber form.adestra-email-sub').on( 'submit', function(e) {
			e.preventDefault();
			var $this = $( this );
			var email = $this.find( '.email-placeholder' ).val();
			var is_valid_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
			var location_string = '/subscribe';
			if ( is_valid_email ) {
				location_string += '?e=' + email;
			}
			window.location.href = location_string;
		} );

		// Clicking the submit button more than once clears the recaptcha field
        $(document).on('submit', 'form.adestra-email-sub', function ( event ) {
        	console.log( 'Disabled Adestra form submit button' );

            var $this = $( this );
            var $submit = $this.find( 'input[type=submit]' );

            $submit.attr({disabled: 'disabled'});

        } );

		$(document).on('click', 'form.adestra-email-sub', function(event) {

			if ( ! have_added_geo_fields ) {
				add_geo_fields($(this));
				have_added_geo_fields = true;
			}

		});

		$(document).on('change', 'form.adestra-email-sub input', function(event) {

			if ( ! have_added_geo_fields ) {
				add_geo_fields($(this).closest("form"));
				have_added_geo_fields = true;
			}
			
		});

	});

})(jQuery);