if(!window.debug_newline) { window.debug_newline = "\n"; }
if(!window.dd_api_version) { window.dd_api_version = "2"; }
if(!window.dd_api_base) { window.dd_api_base = "https://api.doubledutch.me/v2"; }
//Browser Detection Workaround
window.browser = {};
checkVersion();
$(window).ready(function() {

	log("Onload SB5!");

	//handles sign in
	$(document).on("click", "#sb5-sign-in-btn", function(e) {
		e.preventDefault();

		$('#sb5-sign-in').modal('hide');
		$('.modal-backdrop').remove();

		sign_in_loading_gif("on");
		log("button click sign in");

		//sign_in_loading_gif("on");

		if ($("input#EmailAddress").val()) {
			var email = $("input#EmailAddress").val().replace(/^\s*/, "").replace(/\s*$/, "");
		} else {
			var email = $("#sb5-sign-in-email").val().replace(/^\s*/, "").replace(/\s*$/, "");
		}
		if ($("input#Password").val()) {
			var password = $("input#Password").val();
		} else {
			var password = $("#sb5-sign-in-password").val();
		}

		log("Login(Email: \""+email+"\", Password: \""+password+"\") - SB5 v1.0");

		if (email.length > 3 && password.length > 3 && !localStorage.UserId) {
				log("via ng and ddv2 email: "+email+", password: "+password+"... ");
				sso_login(email, password);

		} else {
			sign_in_loading_gif("off");
			showNotification({
				message: (window.translation.error_messages.error_login_no_email
					? window.translation.error_messages.error_login_no_email
					: "Must enter an email address and password to log in."),
				type: "error",
				autoClose: true,
				duration: window.error_message_timeout
			});
		}
	});

	//Submit form if Enter Key is pressed on any field
	$("input#Password,#password-password,#email_input").keyup(function(e) {
		e.preventDefault();
		if (e.which === 13 && !localStorage.UserId) {
			log("Login! [submitted by enter key]");
			$("#sb5-sign-in-btn").click();
		}
	});

	$("input#sb5-sign-in-email").focusout(function() {
		if(($("#sb5-sign-in").data('bs.modal') || {}).isShown){
			check_email("sb5-sign-in-email");
		}
	});

	$("input#CreateEmailAddress").focusout(function() {
		if(($("#sb5-create-account").data('bs.modal') || {}).isShown){
			//check_email("#CreateEmailAddress");
			check_email("CreateEmailAddress");
		}
	});

	$(document).on("click", ".sb5-add-remove-btn", function(e) {
		e.preventDefault();

		var add = true;
		var that = this;
		if ($(that).hasClass("sb5-remove-btn")) { add = false; }
		var ev2_id = $(that).val();
		var dd_session_id = 0;
		var user_id = "";
		if(add){
			log('add button clicked');
		}else{
			log('remove button clicked');
		}
		log("ev2_id "+ev2_id);

		var sessionTitle = $('#session_link_'+ev2_id).text();
		log('session title ('+ev2_id+'): '+sessionTitle);

		if (localStorage.ev2_id_to_dd_id && window.schedule_adapter_id == 2) {
			dd_session_id = ev2_to_dd[ev2_id];
		} else if(window.schedule_adapter_id == 1) {
			dd_session_id = ev2_id;
		}else{
			log("NO DD ID FOR: "+ev2_id);
		}
		log("dd_session_id "+dd_session_id);

		log("localStorage.UserId "+localStorage.UserId);

		if (localStorage.UserId > 0 && dd_session_id > 0) {
			user_id = localStorage.UserId;
			window.userId = user_id;
			log("User Id: "+user_id+" Ev2[DD]: "+ev2_id+"["+dd_session_id+"] add: "+(add ? 'true' : 'false'));

			//disable it
			$(that).prop("disabled", "disabled");

			if (add) { //Add Session

				//Omniture start
				if(typeof s !== 'undefined') {
					s.pageURL = window.location;
					s.pageName = document.title;
					s.eVar63 = sessionTitle;
					s.eVar64 = "";
					var s_code = s.t();
					if(s_code) document.write(s_code);
					s.eVar63 = "";
				}
				//Omniture end

				log("Use V2 to add favorite. [2]");

				if(typeof window.bearerToken != "undefined" && window.bearerToken.length > 5){
					//UBM SS
					if(window.schedule_adapter_id == 1 && ev2_id > 0){
						addUserSchedule(ev2_id);
					}else if(window.schedule_adapter_id == 2  && dd_session_id > 0){ // DD
						addFavorite(dd_session_id);
					}
				} else { log("Error: No token found"); return false; }

			} else { //Remove Session

				//Omniture start
				if(typeof s !== 'undefined') {
					s.pageURL = window.location;
					s.pageName = document.title;
					s.eVar63 = "";
					s.eVar64 = sessionTitle;
					var s_code = s.t();
					if(s_code) document.write(s_code);
					s.eVar64 = "";
				}
				//Omniture end

				log("Use V2 to remove favorite. ");

				if(typeof window.bearerToken != "undefined" && window.bearerToken.length > 5){
					//UBM SS
					if(window.schedule_adapter_id == 1 && ev2_id > 0){
						removeUserSchedule(ev2_id);
					}else if(window.schedule_adapter_id == 2  && dd_session_id > 0){ //DD
						removeFavorite(dd_session_id);
					}

					if (localStorage.ScheduleState === "my") {
						$("#my_schedule_btn").click();
					}
				} else { log("Error: No token found"); return false; }
			}
		} else {
			if (dd_session_id > 0) { log("DD Session Ids not loaded"); }
			if (!localStorage.UserId) {
				showNotification({
					message: (window.translation
						? window.translation.warning_messages.warning_must_login
						: "You must log in or create an account to use this feature."),
					type: "warning",
					autoClose: true,
					duration: 5
				});
				$('#sb5-sign-in').modal('show');
				logout();
			}
		}
	});



	$(document).on("click", "#sb5-create-account-btn", function(e) {
		e.preventDefault();

		$('#sb5-create-account').modal('hide');
		$('.modal-backdrop').remove();

		//Post function
		var firstname = $("input#FirstName").val();
		var lastname = $("input#LastName").val();
		var email = $("input#CreateEmailAddress").val();
		var password = $("input#CreatePassword").val();
		var confirmpassword = $("input#ConfirmPassword").val();
		var country = $("#Country").val();
		var question_one = ($("#optin-question-one").prop("checked") ? "Y" : "N");
		var question_two = ($("#optin-question-two").prop("checked") ? "Y" : "N");
		var question_three = ($("#optin-question-three").prop("checked") ? "Y" : "N");
		if (firstname && lastname && email && password && confirmpassword && country.length > 0 && country > 3) {
			if (password == confirmpassword) {

				log("Create Account via NG api");
				if(!valid_password(password)) {
					showNotification({
						message: (window.translation.error_messages.error_invalid_password
							? window.translation.error_messages.error_invalid_password
							: "Not a valid password. Your password must be at least 7 characters and include at least one number and one letter."),
						type: "error",
						autoClose: false
					});
					$('#sb5-create-account').modal('show');
					return false;
				}

				$.ajax({
					type: "POST",
					url: window.baseURL+"/src/sso_functions.php",
					data: {
						create_account:true,
						current_page: window.location.href,
						firstname: firstname,
						lastname: lastname,
						password: password,
						country: country,
						question_one: question_one,
						question_two: question_two,
						question_three: question_three,
						email: email
					},
					success: function(data) {
						var create_account_res = JSON.parse(data);
						log("       - Create Account Result:\n")
						log(create_account_res);
						if (create_account_res["error"] < 1) {
							//log("       - User Auth Token: "+create_account_res["user_auth_token"]);

							$("input#EmailAddress,#sb5-sign-in-email").val(email);
							$("input#Password,#sb5-sign-in-password").val(password);

							//Omniture start
							if(typeof s !== 'undefined') {
								s.eVar20 = email;
								s.events = s.apl(s.events,'event51',',',1);
							}
							//Omniture end

							$("#sb5-sign-in-btn").click();
						} else {
							//ERROR
							showNotification({
								message: (window.translation.error_messages.error_bad_password_or_user_id
									? window.translation.error_messages.error_bad_password_or_user_id
									: "Incorrect email address or password."),
								type: "error",
								autoClose: true,
								duration: window.error_message_timeout
							});
							log("Error: "+create_account_res["message"]);
							log("Break out of create-account function"+window.debug_newline);
							return false;
						}
					},
					error: function(data, ajaxOptions, thrownError) {
						log(data.status, thrownError);
					}
				});

			} else {
				showNotification({
					message: (window.translation.error_messages.error_passwords_do_not_match
						? window.translation.error_messages.error_passwords_do_not_match
						: "The passwords you entered, do not match. Please try again."),
					type: "error",
					autoClose: true,
					duration: window.error_message_timeout
				});
			}
		} else {
			log("First Name: "+firstname+"\nLast Name: "+lastname+"\nEmail: "+email+"\nPassword: "+password+"\nConfirmation Password: "+confirmpassword);
			showNotification({
				message: (window.translation.error_messages.error_missing_field
					? window.translation.error_messages.error_missing_field
					: "There is a required field that was not filled out. Please try again."),
				type: "error",
				autoClose: true,
				duration: window.error_message_timeout
			});
		}

	});


	$(document).on("click", "#sb5-reset-pw-btn", function(e) {
		e.preventDefault();

		$('#sb5-reset-pwd').modal('hide');
		$('.modal-backdrop').remove();

		var email = $("input#sb5-reset-pwd-email-address").val();
		if (email.length) {
			if (window.dd_api_version === "2") {
				if(typeof window.change_password_url === "undefined" || window.change_password_url.length < 1) {
					log("var undefined pw URL");
					showNotification({
						message: (window.translation.error_messages.error_reset_failure
							? window.translation.error_messages.error_reset_failure
							: "Could not send reset password email because no reset url was defined... Please contact support staff."),
						type: "error",
						autoClose: true,
						duration: window.error_message_timeout
					});
					return false;
				}
				var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				if(!re.test(email)) {
					log("Invalid emaill address");
					//console.error(window.translation.error_messages.error_invalid_email_address);
					showNotification({
						message: (window.translation.error_messages.error_invalid_email_address
						&& typeof window.translation.error_messages.error_invalid_email_address !== "object"
							? window.translation.error_messages.error_invalid_email_address
							: "Invalid email address... Try again."),
						type: "error",
						autoClose: true,
						duration: window.error_message_timeout
					});
					return false;
				}
				log("Request new password email via NG api");
				var user_id = 0;

				$.ajax({
					type: "POST",
					url: window.baseURL+"/src/sso_functions.php",
					data: {
						email_in_use:true,
						user_email: email

					},
					success: function(data) {
						var is_user_res = JSON.parse(data);
						//log(is_user_res);
						var is_user = is_user_res["email_in_use"];
						if(!is_user) {
							showNotification({
								message: (window.translation.error_messages.error_user_not_found
									? window.translation.error_messages.error_user_not_found
									: "This email address does not exist on our system... Would you like to create an account?"),
								type: "error",
								autoClose: true,
								duration: window.error_message_timeout
							});
							$("#CreateEmailAddress").val(email);
							$('#sb5-create-account').modal('show');
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
													log("       - Reset Password Result:\n")
													//log(reset_password_res);
													if (reset_password_res["error"] < 1) {
														//log("       - User Auth Token: "+reset_password_res["user_auth_token"]);
														if(reset_password_res["ng_res"]["error"] < 1) {
															showNotification({
																message: (window.translation.confirmation_messages.confirmation_reset_password
																		? window.translation.confirmation_messages.confirmation_reset_password
																		: "An email will be sent for you to set a new password and the reset-password link will expire in 24 hours."
																),
																type: "success",
																autoClose: true,
																duration: window.error_message_timeout
															});

															$('#sb5-sign-in').modal('show');
														} else {
															showNotification({
																message: (window.translation.error_messages.error_password_change_failure
																	? window.translation.error_messages.error_password_change_failure
																	: "There was a problem resetting your password:<br />"+reset_password_res["ng_res"]["message"]),
																type: "error",
																autoClose: true,
																duration: window.error_message_timeout
															});
														}
													} else {
														//ERROR
														showNotification({
															message: (window.translation.error_messages.error_bad_password_or_user_id
																? window.translation.error_messages.error_bad_password_or_user_id
																: "Incorrect email address or password."),
															type: "error",
															autoClose: true,
															duration: window.error_message_timeout
														});
														log("Error: "+auth_res["message"]);
														log("[2]Break out of reset-password function"+window.debug_newline)
														return false;
													}
												},
												error: function(data, ajaxOptions, thrownError) {
													log(data.status, thrownError);
												}
											});
										} else { log("Error: User ID not set, or not an int: "+user_id); }
									} else {
										//ERROR
										showNotification({
											message: (window.translation.error_messages.error_email_not_found
												? window.translation.error_messages.error_email_not_found
												: "That email address was not found..."),
											//message: (window.translation.error_messages.error_no_user_id
											//	? window.translation.error_messages.error_no_user_id
											//	: "There was a problem accessing the user service because no user id was found."),
											// ^--> This message was commented out so that people can't tell the difference between an incorrect email
											//      vs incorrect password
											//      Swap out the currently commented out message for debugging purposes
											type: "error",
											autoClose: true,
											duration: window.error_message_timeout
										});

										log("Error: "+res["message"]);
										//log(res);
										log("[1]Break out of reset-password function"+window.debug_newline)
										return false;
									}
								},
								error: function(data, ajaxOptions, thrownError) {
									log(data.status, thrownError);
								}
							});
							return false;
						}
						return true;
					},
					error: function(data, ajaxOptions, thrownError) {
						log(data.status, thrownError);
						return false;
					}
				});
			}
		} else {
			showNotification({
				message: (window.translation.error_messages.error_temp_password_no_email
					? window.translation.error_messages.error_temp_password_no_email
					: "Must enter an email address to be have your password reset."),
				type: "error",
				autoClose: true,
				duration: window.error_message_timeout
			});
		}
	});


	$(document).on("click", "#sb5-change-pwd-btn", function(e) {
		e.preventDefault();


		var new_password = $("input#ChangeNewPassword").val();
		var confirm_new_password = $("input#ChangeConfirmNewPassword").val();

		log("Change Password using NG api");

		if (new_password === confirm_new_password) {

			log('validating password..');
			if(!valid_password(new_password)) {
				sign_in_loading_gif("off");
				showNotification({
					message: (window.translation.error_messages.error_invalid_password
						? window.translation.error_messages.error_invalid_password
						: "Not a valid password. Your password must be at least 7 characters and include at least one number and one letter."),
					type: "error",
					autoClose: false
				});
				return false;
			}

			if (window.ng_user_id && new_password) {
				log("User ID: "+window.ng_user_id);
				log("UAuth Token: "+window.user_auth_token);
				$.ajax({
					type: "POST",
					url: window.baseURL+"/src/sso_functions.php",
					data: {
						change_password: true,
						user_id: window.ng_user_id,
						granting_token: window.user_auth_token,
						new_password: new_password
					},
					success: function(data) {
						log(data);
						var change_password_res = JSON.parse(data);
						log("       - Change Password Result:\n")
						//log(change_password_res);
						if (change_password_res["error"] < 1) {
							//log("       - User Auth Token: "+change_password_res["user_auth_token"]);
							showNotification({
								message: (window.translation.confirmation_messages.confirmation_password_change
										? window.translation.confirmation_messages.confirmation_password_change
										: "Your password was successfully changed."
								),
								type: "success",
								autoClose: true,
								duration: window.error_message_timeout
							});
						} else {
							//ERROR
							///showNotification({
							//	message: (window.translation.error_messages.error_bad_password_or_user_id
							//		? window.translation.error_messages.error_bad_password_or_user_id
							//		: "Incorrect email address or password."),
							//	type: "error",
							//	autoClose: true,
							//	duration: window.error_message_timeout
							//});
							log("Error: "+auth_res["message"]);
							log("Break out of change-password function"+window.debug_newline)
							return false;
						}

						$('#sb5-change-pwd').modal('hide');
						$('.modal-backdrop').remove();

					},
					error: function(data, ajaxOptions, thrownError) {
						log(data.status, thrownError);
					}
				});
				log("Ajax complete");
			} else {
				showNotification({
					message: (window.translation.error_messages.error_must_enter_both_passwords
						? window.translation.error_messages.error_must_enter_both_passwords
						: "You must enter your current password and a new password to change your current password. "
						+"If you don't remember your current password, click the \"forgot password\" link, in the sign in dialog window."),
					type: "error",
					autoClose: true,
					duration: window.error_message_timeout
				});
			}
		} else {
			showNotification({
				message: (window.translation.error_messages.error_confirmation_password_not_match
					? window.translation.error_messages.error_confirmation_password_not_match
					:"Confirmation password did not match, try again."),
				type: "error",
				autoClose: true,
				duration: window.error_message_timeout
			});
		}
	});

	//Submit form if Enter Key is pressed on any field
	$("#ChangeNewPassword,#ChangeConfirmNewPassword").keyup(function(e) {
		e.preventDefault();
		if (e.which === 13 && localStorage.UserId) {
			log("Change Password [submitted by enter key]...");
			$("#change_password_button").click();
		}
	});

	$(document).on("click", "#sb5-edit-user-btn", function(e) {

		$('#sb5-edit-user').modal('hide');
		$('.modal-backdrop').remove();

		var firstname	= $("input#sb5-edit-account-first-name").val();
		var lastname	= $("input#sb5-edit-account-last-name").val();

		log(firstname + ' ' + lastname + ' ' +ng_user_id);

		//log(window.dd_auth_hash);
		log(window.schedule_adapter_id);
		log(window.baseURL);
		//return false;

		if (window.ng_user_id && firstname.length > 0 && lastname.length > 0) {
			log("Edit user info using NG api");

			log("Run edit function...");
			$.ajax({
				type: "POST",
				url: window.baseURL+"/src/sso_functions.php",
				data: {
					edit_user:true,
					user_id: window.ng_user_id,
					granting_token: window.user_auth_token,
					dd_event_user_id: window.userId,
					application_id: window.application_id,
					bearer_token: window.bearerToken,
					firstname: firstname,
					lastname: lastname,
					schedule_adapter_id: window.schedule_adapter_id
				},
				success: function(data) {
					var edit_user_res = JSON.parse(data);
					log("       - Edit Result:\n")
					//log(edit_user_res);
					//Query Error
					//log("Error: "+edit_user_res["error"]);
					if (edit_user_res["error"] < 1) {
						showNotification({
							message: (window.translation.confirmation_messages.confirmation_user_info_updated
									? window.translation.confirmation_messages.confirmation_user_info_updated
									: "User information was successfully updated."
							),
							type: "success",
							autoClose: true,
							duration: window.error_message_timeout
						});
					} else {
						//ERROR
						var err_shown = false;
						if(edit_user_res["ng_res"]["error"] > 0) {
							console.error("NG error message: "+edit_user_res["ng_res"]["message"]);
							showNotification({
								message: (window.translation.error_messages.ng_error
									? window.translation.error_messages.ng_error
									: "NG API ERROR: "+edit_user_res["ng_res"]["message"]),
								type: "error",
								autoClose: true,
								duration: window.error_message_timeout
							});
							err_shown = true;
						}
						var dd_res = JSON.parse(edit_user_res["dd_res"]);
						if(!dd_res["IsSuccess"]) {
							console.error("dd error message: "+dd_res["Message"]);
							showNotification({
								message: (window.translation.error_messages.dd_error
									? window.translation.error_messages.dd_error
									: "DD API ERROR: "+dd_res["Message"]),
								type: "error",
								autoClose: true,
								duration: window.error_message_timeout
							});
							err_shown = true;
						}

						if(!err_shown) {
							console.error("Main error message: "+edit_user_res["message"]);
							showNotification({
								message: "Could not successfully sync updated user information to the app.",
								type: "error",
								autoClose: true,
								duration: window.error_message_timeout
							});
						}

						log("Break out of edit-user function"+window.debug_newline);
						return false;
					}
				},
				error: function(data, ajaxOptions, thrownError) {
					log(data.status, thrownError);
				}
			});
		}else {
			log("First Name: "+firstname+"\nLast Name: "+lastname+"\n");
			showNotification({
				message: (window.translation.error_messages.error_missing_field
					? window.translation.error_messages.error_missing_field
					: "There is a required field that was not filled out. Please try again."),
				type: "error",
				autoClose: true,
				duration: window.error_message_timeout
			});

		}

		return false;
	});

	//Click event for change/reset password
	$(document).on("click", "#change-password-btn", function(e) {
		log("click");
		e.preventDefault();
		var user_id = $("#user_id").val();
		var hash = $("#hash").val();
		var new_password = $("#new-password").val().replace("/^\s+|\s+$/gm", "");
		var confirm_password = $("#confirm-password").val().replace("/^\s+|\s+$/gm", "");
		//var encryption_method = "SHA1";
		//var encryption_method = "MD5";
		var encryption_method = "plaintext";//Lack of encryption method
		if(new_password.length) {
			if(new_password === confirm_password) {
				if(!valid_password(new_password)) {
					showNotification({
						message: (window.translation.error_messages.error_invalid_password
							? window.translation.error_messages.error_invalid_password
							: "Not a valid password. Your password must be at least 7 characters and include at least one number and one letter."),
						type: "error",
						autoClose: false
					});
					return false;
				}
				//log("\""+new_password+"\" Matches \""+confirm_password+"\"");
				//var encrypted_password = eval('String(CryptoJS.'+encryption_method+'("'+new_password+'"))');
				if(encryption_method.match(/MD5/i)) {
					var encrypted_password = String(CryptoJS.MD5(new_password));
				} else if (encryption_method.match(/SHA1/i)) {
					var encrypted_password = String(CryptoJS.SHA1(new_password));
				} else {
					var encrypted_password = new_password;
				}

				//log("Encypted Password: "+encrypted_password);
				$.ajax({
					type: "POST",
					url: "../src/sso_functions.php",
					data: {
						change_reset_password: true,
						user_id: user_id,
						hash: hash,
						password_encryption: encryption_method,
						new_password: encrypted_password
					},
					success: function(data) {
						//log("Response Data");
						//log(data);
						var res = JSON.parse(data);
						log("Response data: ");
						//log(res);
						if(res["ng_res"]["ng_res"].match(/400|404|500/)) {
							log("NG Error: "+res["ng_res"]["message"]);
							showNotification({
								message: (window.translation.error_messages.error_login_failure
									? window.translation.error_messages.error_login_failure
									: "There was a problem logging in. Please refresh the page, and try again."),
								type: "error",
								autoClose:true,
								duration: window.error_message_timeout
							});
						} else {
							showNotification({
								message: (window.translation.confirmation_messages.confirmation_password_change
									? window.translation.confirmation_messages.confirmation_password_change
									: "Password succesfully changed."),
								type: "info",
								autoClose: false
							});
						}
					},
					error: function(data, ajaxOptions, thrownError) {
						log(data.status, thrownError);
					}
				});
			} else { log("Password do not match"); showNotification({ message: (window.translation.error_messages.error_passwords_do_not_match ? window.translation.error_messages.error_passwords_do_not_match : "Passwords must match..."), type: "error", autoClose: false }); }
		} else { log("No passwords entered"); showNotification({ message: (window.translation.error_messages.error_login_no_email ? window.translation.error_messages.error_login_no_email : "You must enter a password..."), type: "error", autoClose: false }); }
	});

	//Submit form if Enter Key is pressed on any field
	$("#sb5-edit-account-first-name,#sb5-edit-account-last-name").keyup(function(e) {
		e.preventDefault();
		if (e.which === 13 && localStorage.UserId) {
			log("Edit User [submitted by enter key]...");
			$("#sb5-edit-user-btn").click();
		}
	});

	$(document).on("click", "#sb5-export-btn", function(e) {
		e.preventDefault();

		log(window.debug_newline+"Export Function()");
		var export_type = $(".export_as:radio[name=export_type]:checked").val().replace(/export_/, "");
		window.export_format = export_type;
		var export_as = $(".export_as:radio[name=export_as]:checked").val();
		if (!export_as) { export_as = "full_schedule"; }

		var show_these_ids = "";
		log("Export Type: "+export_type+"\nExport As: "+export_as);

		switch(export_as) {
			case "full_schedule":
				show_these_ids = "all_sessions";
				break;
			case "personal_schedule":
			case "justify_schedule":
				var personal_ids = eval("localStorage.PersonalScheduleIds").split(",");
				if (window.schedule_adapter_id == 2) {
					var ev2_ids = JSON.parse(localStorage.dd_id_to_ev2_id);
					for(var dd_id in personal_ids) {
						if (dd_id && personal_ids[dd_id] && personal_ids.hasOwnProperty(dd_id)) {
							show_these_ids = show_these_ids+(ev2_ids[personal_ids[dd_id]])+",";
						}
					}
				} else if(window.schedule_adapter_id == 1) {
					for(var i=0; i < personal_ids.length; i++) {
						if (personal_ids[i]) {
							show_these_ids = show_these_ids+personal_ids[i]+",";
						}
					}//end for loop
				}
				show_these_ids = show_these_ids.replace(/,*undefined/g, '');
				break;
			case "filtered_schedule":
				//activateViewMode("list");
				$(".sb5-session-detail:visible").each(function(index) {
					show_these_ids = show_these_ids+($(this).attr("id").replace(/cal_session_/, ""))+",";
				});
				break;
		}
		log('show_these_ids: '+show_these_ids);
		if (show_these_ids) {
			show_these_ids = show_these_ids.replace(/,$/, "").replace(/^,/, "");
			log("iframe_export("+window.export_format+", "+export_as+", "+show_these_ids+", "+window.ev2_feed+")");
			var tmp_url = window.baseURL+"/src/export.php?export_schedule=true&event_id="+window.event_id+"&feed="+window.ev2_feed
				+"&export_format="+window.export_format
				+"&export_as="+export_as
				+"&feed_url="+(window.feed_url ? encodeURIComponent(window.feed_url) : window.event_id)+(window.default_start_time ? '&default_start_time='+window.default_start_time : '')
				+(window.feed_domain ? '&feed_domain='+window.feed_domain : '')
				+"&local_timezone="+encodeURIComponent(window.local_timezone)
				+"&cache_freeze="+window.cache_freeze
				+"&show_these_ids="+show_these_ids;
			$("#download_iframe").attr("src", tmp_url);
		} else {
			log("export("+window.export_format+", "+export_as+")");
		}

		$('#sb5-export').modal('hide');
		$('.modal-backdrop').remove();

	});


	$(document).on("click", "#sb5-my-schedule-button", function(e) {
		window.global_my_schedule_trip = true;
		log(window.debug_newline+"[BUTTON CLICK]: Show only \"My Schedule\""+window.debug_newline);
		window.filter_on = true;
		if (localStorage.UserId) {
			log('localStorage.PersonalScheduleIds: '+localStorage.PersonalScheduleIds)
			if(typeof localStorage.PersonalScheduleIds == "undefined" || localStorage.PersonalScheduleIds.length == 0){
				showNotification({
					message: (window.translation
						? window.translation.error_messages.error_no_favorites
						:"You have no sessions on \"My Schedule.\""),
					type: "warning",
					autoClose: true,
					duration: window.error_message_timeout
				});
				return false;
			}else if(typeof showMySchedule != "undefined" && showMySchedule == true){
				$(".sb5_button").removeClass("active");
				$("#sb5-my-schedule-button").addClass("active");
				sb5_show_my_schedule();
				return false;
			}else if(window.global_my_schedule_trip){
				log('global_my_schedule_trip triggered, loading my schedule page now...');
			}
		} else {
			showNotification({
				message: (window.translation
					? window.translation.warning_messages.warning_must_login
					:"You must log in or create an account to use this feature."),
				type: "warning",
				autoClose: true,
				duration: window.error_message_timeout
			});
			$('#sb5-sign-in').modal('show');
			logout();
			return false;
		}
	});


	//if the _sessionID is set then we're on a session description page
	if(typeof _sessionId != 'undefined'){
		loadSession(_sessionId);
	}

	$(document).on("click", "#create_account_link", function(e) {
		//Omniture start
		if(typeof s !== 'undefined') {
			s.pageURL = window.location;
			s.pageName = document.title;
			s.events = s.apl(s.events,'event43',',',1);
			var s_code = s.t();
			if(s_code) document.write(s_code);
			s.events = "";
		}
		//Omniture end
	});

	//handles CASL questions
	$("#Country").change(function(){
		if($(this).find(":selected").val() == 124){
			$(".optin-group-one").hide();
			$(".optin-group-two").show();
		}else{
			$(".optin-group-one").show();
			$(".optin-group-two").hide();
		}
	});

	$('#sb5-search-form').submit(function(e) {
		e.preventDefault();

		log('searching');
		var search_query = $("#search_input").val().trim().replace(/\+/g, " ");
		search_query = search_query.replace(/[^0-9a-z\+\-]/gi, '+');

		if (search_query.length < 2) {
			showNotification({
				message: (window.translation.tools.search.response_codes.short_query
					? window.translation.tools.search.response_codes.short_query
					: "Your search term was too vauge. Please try again with two or more characters."),
				type: "error",
				autoClose: true,
				duration: window.error_message_timeout
			});
			return false;
		}
		if (search_query.length > 80) {
			showNotification({
				message: (window.translation.tools.search.response_codes.long_query
					? window.translation.tools.search.response_codes.long_query
					: "Your search query was too long. Please try again with 80 characters or less."),
				type: "error",
				autoClose: true,
				duration: window.error_message_timeout
			});
			return false;
		}

		var searchUrl = window.baseURL+"/search/"+encodeURI(search_query);
		log(searchUrl);
		//return false;

		window.location = searchUrl;

		return false;
	});

	//back to top
	$('body').append('<div id="toTop" class="btn btn-info"><span class="glyphicon glyphicon-chevron-up"></span> Back to Top</div>');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 400) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});

	//tooltip initialization
	$('[data-toggle="tooltip"]').tooltip();


	//handles tabs on speaker list page
    var tabs = $('.sb5-alphabet-tabs');
    var firstTab = $(":first-child a", tabs);
    $(firstTab).removeClass('inactive');
    $(firstTab).addClass('active');
    $('.sb5-alphabet-tabs li a').on('click', function() {
	    log('clicked alpha tab');;
        var tab_value = $(this).attr('data-val');
        $('.sb5-alphabet-tabs li a').removeClass('active');
        $(this).removeClass('inactive');
        $(this).addClass('active');
        if (tab_value == 'hashtag') {
            $('.speaker_row_wrapper').show();
        } else {
            $('.speaker_row_wrapper').hide();
            $('div.speakers_tab_'+tab_value).show();
        }
    });

	//handles mobile filters using modal UI
	$( "#sb5-mobile-filter-types .list-group-item" ).click(function(e) {
		log('clicked on mobile filter');
		e.preventDefault();

		var target = $(this).attr("id").replace(/_mobile_filter/, "");

		//trigger click on the checkbox - which invokes the filtering
		$("#"+target+"_checkbox").trigger('click');

		return false;
	});

	//mobile clear all filter button
	$('#sb5-mobile-clear-all-filters').click( function(e) {
		e.preventDefault();
		log('mobile button clear all filters');
		$('.sb5-session-list-filters input:checkbox').prop('checked',false);
		//remove the active class to unselect the mobile filter items
		$('#sb5-mobile-filter-types .list-group-item').removeClass('active');
		checkFilters();
	});


	$('#sb5-all-sessions-button').click(function(e){
		e.preventDefault();
		sessionStorage.removeItem('filter_checkboxes');
		sessionStorage.removeItem('filter_date_checkbox');
		window.location = window.baseURL + '/sessions';
	});

	//marketing codes support
	if (typeof jQuery.cookie == "undefined") {
		log('appending jquery cookie JS files');
		//create the element and append it to the head tag
		var jqueryCookies = document.createElement('script')
		jqueryCookies.setAttribute("type","text/javascript")
		jqueryCookies.setAttribute("src", '/js/jquery.cookies.js');
		document.getElementsByTagName("head")[0].appendChild(jqueryCookies);
	}

	if (typeof generateRegLink !== "function") {
		log('appending marketing code JS files');
		//create the element and append it to the head tag
		var marketingCookiesJs = document.createElement('script')
		marketingCookiesJs.setAttribute("type","text/javascript")
		marketingCookiesJs.setAttribute("src", '/js/marketing-codes.js');
		document.getElementsByTagName("head")[0].appendChild(marketingCookiesJs);
	}

	$(document).on("click", ".sb5_file_download", function(e) {
		var fileID = $(this).attr("id").replace(/file_/, "");
		var sessionID = $('#sb5-file-download-session').val();
		$('#sb5-file-download-modal-title').html('Download File - '+$(this).text());
		$('#sb5-file-download-form').attr('action',window.baseURL+"/session/"+sessionID+"/downloadfile/"+fileID);

		if($('#sb5-file-download-password').val().length > 0){
			$('#sb5-file-download').modal('hide');
			$('.modal-backdrop').remove();
			$('#sb5-file-download-form').submit();
		}
	});
	
	$(document).on("click", ".sb5_show_video", function(e) {
		var fileID = $(this).attr("id").replace(/video_/, "");
		//alert(fileID);
		var sessionID = $('#sb5-file-show-video').val();
		//$('#sb5-file-download-modal-title').html('Download File - '+$(this).text());
		$('#sb5-show-video-form').attr('action',window.baseURL+"/session/"+sessionID+"/showvideo/"+fileID);

		if($('#sb5-show-video-password').val().length > 0){
			$('#sb5-video-show').modal('hide');
			$('.modal-backdrop').remove();
			$('#sb5-show-video-form').submit();
		}
	});

	$( "#sb5-file-download-btn" ).click(function( event ) {
		event.preventDefault();
		$('#sb5-file-download').modal('hide');
		$('.modal-backdrop').remove();
		$('#sb5-file-download-form').submit();
	});

});  //end $(window).ready(function()... on line 4
