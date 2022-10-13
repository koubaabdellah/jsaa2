//if (!window.baseURL) { window.baseURL = ".."; }
if (!window.error_message_timeout) { window.error_message_timeout = 15; }
$(document).ready(function() {

	//"Click Button" if enter key is pressed.
	$("#reset-email-address").keyup(function(e) { e.preventDefault(); if (e.which === 13) { $("#reset-password-btn").click(); } });

	//Click event for reset password
	$("#reset-password-btn").click(function(e) { 
		log("click");
		e.preventDefault();
		var email = $("#ResetEmailAddress").val().replace("/^\s+|\s+$/gm", "");
		log(email);
		$(".cpw_error").html(""); 
		var orig = $(".cpw_container").html();	
		if (email.length) {
			$(".cpw_container").css("text-align", "center").html('<img src="'+window.baseURL+'/src/images/loading.gif" width="15" height="15" />');
			//if (window.dd_api_version === "2") { 
			if(typeof window.change_password_url === "undefined") { 
				log("var undefined");
				$(".cpw_container").css("text-align", "left").html(orig);
				$(".cpw_error").html(
					(window.translation.error_messages.error_reset_failure
						? window.translation.error_messages.error_reset_failure
						: "Could not send reset password email because no reset url was defined... Please contact support staff.")
				);
				return false;
			} else if( window.change_password_url.length < 1) { 
				log("var not set");
				$(".cpw_container").css("text-align", "left").html(orig);
				$(".cpw_error").html(
					(window.translation.error_messages.error_reset_failure
						? window.translation.error_messages.error_reset_failure
						: "Could not send reset password email because no reset url was defined... Please contact support staff.") 
				);
				return false;
			}
			var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			if(!re.test(email)) { 
				log("Invalid emaill address");
				//console.error(window.translation.error_messages.error_invalid_email_address);
				$(".cpw_container").css("text-align", "left").html(orig);
				$(".cpw_error").html(
					(window.translation.error_messages.error_invalid_email_address
						&& typeof window.translation.error_messages.error_invalid_email_address !== "object"
						? window.translation.error_messages.error_invalid_email_address
						: "Invalid email address... Try again.")
				);
				return false;
			}
			log("Request new password email via NG api");
			//log("URL: "+window.auth_token_url+"?nocache="+(Math.floor(Math.random() * (99999 - 10000)) - 10000))//Deprecated;
			var user_id 	   = 0;

			$.ajax({
				type: "POST", 
				url: window.baseURL+"/src/sso_functions.php",
				data: { 
					email_in_use:true,
					user_email: email
	
				},
				success: function(data) { 
					var is_user_res = JSON.parse(data);
					//console.log(is_user_res);
					var is_user = is_user_res["email_in_use"];
					if(!is_user) { 
						$(".cpw_container").css("text-align", "left").html(orig);
						$(".cpw_error").html(
							(window.translation.error_messages.error_user_not_found 
								? window.translation.error_messages.error_user_not_found
								: "This email address does not exist on our system... Would you like to create an account?")
						);
						//$("#CreateEmailAddress").val(email);
						//$("#create-account-wrapper").dialog("open");
						return false;
					}
					if(is_user) {

						$.ajax({
							type: "POST", 
							url: window.baseURL+"/src/sso_functions.php",
							data: { 
								get_user_id:true,
								user_email: email
		
							},
							success: function(data) { 
								var res = JSON.parse(data);
								//log("      - User ID Response:\n"+data);
								if (res["error"] < 1) { 
									log("       - User ID: "+res["user_id"]);
									user_id = parseInt(res["user_id"]);
									if (user_id > 0) { 
										$.ajax({
											type: "POST",
											url: window.baseURL+"/src/sso_functions.php",
											data: { 
												reset_password:true,
												change_password_url: window.change_password_url,
												EmailAddress: email,
												user_id: user_id
											},
											success: function(data) { 
												var reset_password_res = JSON.parse(data);
												log("       - Reset Password Result:\n");
												//console.log(reset_password_res);
												if (reset_password_res["error"] < 1) { 
													//log("       - User Auth Token: "+reset_password_res["user_auth_token"]);
													if(reset_password_res["ng_res"]["error"] < 1) { 
														showNotification({
															message: (window.translation.confirmation_messages.confirmation_reset_password)
																? window.translation.confirmation_messages.confirmation_reset_password
																: "An email will be sent for you to set a new password and the reset-password link will expire in 24 hours.",
															type: "info", 
															autoClose:false
														});
													} else { 
														$(".cpw_container").css("text-align", "left").html(orig);
														$(".cpw_error").html(
															(window.translation.error_messages.error_password_change_failure
																? window.translation.error_messages.error_password_change_failure
																: "There was a problem resetting your password:<br />"+reset_password_res["ng_res"]["message"])
															);
													}
												} else {
													log("Error: "+auth_res["message"]);
													log("[2]Break out of reset-password function"+window.debug_newline)
													$(".cpw_container").css("text-align", "left").html(orig);
													$(".cpw_error").html(auth_res["message"]);
													return false;
												}
											},
											error: function(data, ajaxOptions, thrownError) {
												//error_temp_password_dd_failure
												log(data.status, thrownError);
												$(".cpw_container").css("text-align", "left").html(orig);
												$(".cpw_error").html((window.translation.error_messages.error_temp_password_dd_failure
													? window.translation.error_messages.error_temp_password_dd_failure
													: "There was a problem resetting your password..."));
											}
										});
									} else { 
										log("Error: User ID not set, or not an int: "+user_id); 
										$(".cpw_container").css("text-align", "left").html(orig);
										$(".cpw_error").html('Invalid User id... None of that now...');
									}
								} else { 
									//ERROR
									$(".cpw_container").css("text-align", "left").html(orig);
									$(".cpw_error").html((window.translation.error_messages.error_email_not_found 
										? window.translation.error_messages.error_email_not_found
										: "That email address was not found..."));

									log("Error: "+res["message"]);
									//console.log(res);
									log("[1]Break out of reset-password function"+window.debug_newline)
									return false;
								}
							},
							error: function(data, ajaxOptions, thrownError) {
								$(".cpw_container").css("text-align", "left").html(orig);
								$(".cpw_error").html('Could not get this email address... please try back later.');
								log(data.status, thrownError);
							}
						});
						return false;
					}
					return true;
				},
				error: function(data, ajaxOptions, thrownError) {
					$(".cpw_container").css("text-align", "left").html(orig);
					$(".cpw_error").html('Could not get this email address... please try back later.');
					console.error("Ajax error");
					console.log(data);
					log(data.status, thrownError);
					return false;
				}
			});
		} else {
			$(".cpw_container").css("text-align", "left").html(orig);
			$(".cpw_error").html(
				(window.translation.error_messages.error_temp_password_no_email
					? window.translation.error_messages.error_temp_password_no_email 
					: "Must enter an email address to be have your password reset.")
				);
			return false;
		}
		return false;
	});

});
