//      ---------->  SSO Functions  <----------      //
// Dependencies:
//   window.auth_token_url
//   window.tranlsation
//   window.error_message_timeout
//   window.debug_newline
//   window.baseURL

function set_session_var(key, value) {
	log("Set session(key: \""+key+"\", value: \""+value+"\")");
	if(key.match(/clear_session|bearer_token|dd_application_id|dd_password_token|dd_global_user_id|ng_user_auth_token|ng_user_id/)) {
		$.ajax({
			type: 'POST',
			url: window.baseURL+'/src/session-setter.php',
			data: { key: key, value: value },
			success: function(response) {
				log("Session variable set: ["+key+"] => \""+value+"\": ");
				//console.log(response);
			},
			error: function(data, ajaxOptions, thrownError) {
				console.error(thrownError, data);
			}
		});
	} else {
		log("Disabled...");
	}
}
function sso_login(email, password) {
	var auth_token = "";
	if(email.length > 0) {
		if(password.length > 0) {
			sso_get_user_id(email, password);
			return false;
		} else { sign_in_loading_gif("off"); log("ERROR: Missing minimum requirements... sso_get_user_id(password["+password+"])"); }
	} else { sign_in_loading_gif("off"); log("ERROR: Missing minimum requirements... sso_get_user_id(email["+email+"])"); }
	return false;
}


function sso_get_user_id(email, password) {
	if(email.length == 0 || password.length == 0) {
	    sign_in_loading_gif("off");
	    log("ERROR: Missing minimum requirements... sso_get_user_id(email["+email+"],password["+password+"])");
		showNotification({
			message: (window.translation.error_messages.error_bad_password_or_user_id
				? window.translation.error_messages.error_bad_password_or_user_id
				: "Incorrect email address or password."),
			type: "error",
			autoClose: true,
			duration: window.error_message_timeout
		});

	    return false;
	}
	var hash = B64.encode(password),auth_token = "", user_id = "";
	$.ajax({
		type: "POST",
		url: window.baseURL+"/src/sso_functions.php",
		data: {
			get_user_id:true,
			user_email: email,
			hash: hash,
			schedule_adapter_id: window.schedule_adapter_id
		},
		success: function(data) {
			if(data==''){
				showNotification({
					message: (window.translation.error_messages.error_bad_password_or_user_id
						? window.translation.error_messages.error_bad_password_or_user_id
						: "Incorrect email address or password."),
					type: "error",
					autoClose: true,
					duration: window.error_message_timeout
				});
				return false;
			};
			var res = JSON.parse(data);
			log("		- User ID Response:\n"+data);

			if (res["error"] < 1) {
				log("		 - User ID: "+res["user_id"]);
				user_id = res["user_id"];
				auth_token =  res["auth_token"];
				if(user_id > 0 && auth_token.length > 0) {
					window.ng_user_id = user_id;
					window.user_auth_token = auth_token;

					//Omniture start - adding this here since sso_complete_login() doesn't get called anymore
					if(typeof s !== 'undefined' && typeof s.apl === 'function' && typeof s.t === 'function') {
						s.pageURL = window.location;
						s.pageName = document.title;
						s.events = s.apl(s.events,'event32',',',1);
						s.eVar20 = email;
						s.eVar35 = user_id;
						s.prop19 = s.eVar23 = "Logged in";
						var s_code = s.t();
						if(s_code) document.write(s_code);
						s.events = "";
					}
					//Omniture end

					log("Log in using ng auth tokens");
					//get ng auth token and pass it to DD to get the passwordToken
					ng_auth_token(window.ng_user_id,window.user_auth_token,window.dd_auth_hash,window.dd_ng_site_id);
					//we no longer need this call:
					//sso_get_granting_token(email, password, user_id);
				} else {
					sign_in_loading_gif("off");
					log("ERROR: Missing minimum requirements... ng_auth_token(user_id["+user_id+"],user_auth_token["+auth_token+"])");
				}
				return false;
			} else {
				sign_in_loading_gif("off");
				//ERROR
				showNotification({
					message: (window.translation.error_messages.error_bad_password_or_user_id
						? window.translation.error_messages.error_bad_password_or_user_id
						: "Incorrect email address or password."),
					type: "error",
					autoClose: true,
					duration: window.error_message_timeout
				});

				log("Error: "+res["message"]);
				//console.log(res);
				log("[4]Break out of log in function"+window.debug_newline)
				return false;
			}
		},
		error: function(data, ajaxOptions, thrownError) {
			log(data.status, thrownError);
		}
	});
}

//function check_email()
function check_email(input_id) {
	log("function check_email(input_id: "+input_id+")");
	if(localStorage.UserId) { delete localStorage.UserId; }

	if(window.dd_api_version === "1") {
		log("Skipped because this is not the right version");
		return false;
	}
	if(!input_id.match(/sb5-sign-in-email|CreateEmailAddress/)) {
		log("Skipped because this is not the right field");
		return false;
	}
	var user_email = $("#"+input_id).val();
	if(user_email.length) {
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(re.test(user_email)) {
			$.ajax({
				type: "POST",
				url: window.baseURL+"/src/sso_functions.php",
				data: {
					email_in_use: true,
					user_email: user_email,
				},
				success: function(data) {
					//log("Successful Query...");
					var is_user_res = JSON.parse(data);
					//console.log(is_user_res);
					var is_user = is_user_res["email_in_use"];
					if(!is_user && input_id.match(/sb5-sign-in-email/)) {
						showNotification({
							message: (window.translation.error_messages.error_user_not_found
								? window.translation.error_messages.error_user_not_found
								: "This email address does not exist on our system... Would you like to create an account?"),
							type: "error",
							autoClose: true,
							duration: window.error_message_timeout
						});
						$("#CreateEmailAddress").val(user_email);
						$('#sb5-sign-in').modal('hide');
						$('#sb5-create-account').modal('show');
						return false;
					}
					if(is_user && input_id.match(/CreateEmailAddress/)) {
						showNotification({
							message: (window.translation.error_messages.error_user_already_exists
								? window.translation.error_messages.error_user_already_exists
								: "This email address is already in use... Would you like to try and log in?"),
							type: "error",
							autoClose: true,
							duration: window.error_message_timeout
						});
						$("#sb5-sign-in-email").val(user_email);
						$('#sb5-create-account').modal('hide');
						$('#sb5-sign-in').modal('show');
						return false;
					}
					return true;
				},
				error: function(data, ajaxOptions, thrownError) {
					log(data.status, thrownError);
					return false;
				}
			});
		} else {
			log("Invalid emaill address");
			showNotification({
				message: (window.translation.error_messages.error_invalid_email_address
					? window.translation.error_messages.error_invalid_email_address
					: "Invalid email address..."),
				type: "error",
				autoClose: true,
				duration: window.error_message_timeout
			});
			return false;
		}
	} else {
		//console.error("No email to check existance");
		return false;
	}
}


function sso_get_granting_token(email, password, user_id) {
	log("function sso_get_granting_token(email: "+email+", password: "+password+", user_id: "+user_id+")");
	$.ajax({
		type: "POST",
		url: window.baseURL+"/src/sso_functions.php",
		data: {
			get_granting_token:true,
			user_id: user_id
		},
		success: function(data) {
			//log("          - Granting Token Response:\n"+data);
			var grant_res = JSON.parse(data);
			if (grant_res["error"] < 1) {
				var granting_token = grant_res["granting_token"];
				var hash_id = grant_res["hash_type"];
				var hash_type = "";
				var salt = grant_res["salt"];

				if(granting_token.length > 0 && password.length > 0) {
					log("granting token: "+granting_token);
					switch(hash_id) {
						case 1:
							hash_type = "SHA1";
							salt = String(CryptoJS.SHA1(salt.concat(password))).toLowerCase();
							log("salt: "+salt);
							var hash = String(CryptoJS.SHA1(granting_token+salt)).toLowerCase();
							break;
						case 2:
							hash_type = "SHA256";
							salt = String(CryptoJS.SHA256(salt.concat(password))).toLowerCase();
							log("salt: "+salt);
							var hash = String(CryptoJS.SHA256(granting_token+salt)).toLowerCase();
							break;
						case 0:
						default:
							hash_type = "MD5";
							if(salt.length) { salt = salt.concat(password); } else { salt = password; }
							//log("salt: "+salt);
							salt = String(CryptoJS.MD5(salt)).toLowerCase();
							var hash = String(CryptoJS.MD5(granting_token+salt)).toLowerCase();
							break;
					}
					log("hash type["+hash_id+"]: "+hash_type);
					log("salt: "+salt);
				} else {
					log('Missing a var to build the hash');
				}
				//log("            - Hash : "+hash);
				log("Combine user granting token with hashed password to get user auth token");
				if(email.length > 0) {
					if(password.length > 0) {
						if(user_id > 0) {
							if(granting_token.length > 0) {
								if(hash.length > 0) {
									sso_complete_login(email, password, user_id, granting_token, hash);
									return false;
								} else { sign_in_loading_gif("off"); log("ERROR: Missing minimum requirements... sso_complete_login(hash["+hash+"])");}
							} else {
								sign_in_loading_gif("off");
								log("ERROR: Missing minimum requirements... sso_complete_login(granting_token["+granting_token+"])");
								showNotification({
									message: "Could not log into account because it appears to be locked. Please contact support team to have it unlocked.",
									type: "error",
									autoClose: true,
									duration: window.error_message_timeout
								});
								logout();
								return false;
							}
						} else { sign_in_loading_gif("off"); log("ERROR: Missing minimum requirements... sso_complete_login(user_id["+user_id+"])");}
					} else { sign_in_loading_gif("off"); log("ERROR: Missing minimum requirements... sso_complete_login(password["+password+"])"); }
				} else { sign_in_loading_gif("off"); log("ERROR: Missing minimum requirements... sso_complete_login(email["+email+"])"); }
				return false;
			} else {
				sign_in_loading_gif("off");
				//ERROR
				showNotification({
					message: (window.translation.error_messages.error_no_granting_token
						? window.translation.error_messages.error_no_granting_token
						: "There was a problem accessing the user service because granting token was sent."),
					type: "error",
					autoClose: true,
					duration: window.error_message_timeout
				});
				log("Error: "+grant_res["message"]);
				log("[3]Break out of log in function"+window.debug_newline)
				return false;
			}
		},
		error: function(data, ajaxOptions, thrownError) {
			log(data.status, thrownError);
		}
	});
}

function ng_auth_token(user_id,user_auth,dd_auth_hash,dd_ng_site_id){
	log("function ng_auth_token()");
	if(user_id > 0 && dd_ng_site_id > 0 && user_auth.length > 0 &&  dd_auth_hash.length > 0){

		$.ajax({
			type: "POST",
			url: window.baseURL+"/src/sso_functions.php",
			data: {
		 		access_token:true,
				user_id: user_id,
				user_auth_token: user_auth,
				dd_auth_hash: dd_auth_hash,
				dd_ng_site_id: dd_ng_site_id,
				schedule_adapter_id: window.schedule_adapter_id
			},
			success: function(data) {
				var auth_res = JSON.parse(data);
				log("		 - NG/DD Access Token Result:\n")
				log(auth_res);
				if (auth_res["error"] < 1) {
					log("		 - Bearer Token: "+auth_res["bearer_token"]);
					log("Set Bearer Token");
					delete window.bearerToken;
					window.bearerToken = auth_res["bearer_token"];
					set_session_var("bearer_token", auth_res["bearer_token"]);

					//DD integration team said global user ID is not required
					if(window.bearerToken.length) {
						if(window.schedule_adapter_id == 2){
							log("bearer token set... Linking DD user now");
							dd_link_user(null, null, window.bearerToken);
						}else if(window.schedule_adapter_id == 1) {
							log("bearer token set... Linking SS user now");
							getUser();
						}
					} else {
						console.error("Missing password token from dd api");
					}
				}

			},
			error: function(data, ajaxOptions, thrownError) {
				log(data.status, thrownError);
			}
		});
	}

}

function sso_complete_login(email, password, user_id, granting_token, hash) {
	log("function sso_complete_login(email: "+email+", \npassword: "+password+", \nuser_id: "+user_id+", \ngranting_token: "+granting_token+", \nhash: "+hash+")");
	if(email.length > 0) {
		if(user_id > 0) {
			if(granting_token.length > 0) {
				if(hash.length > 0) {
					$.ajax({
						type: "POST",
						url: window.baseURL+"/src/sso_functions.php",
						data: {
					 		login:true,
							user_id: user_id,
							granting_token: granting_token,
							hash: hash
						},
						success: function(data) {
							var auth_res = JSON.parse(data);
							log("		 - Authentication Result:\n")
							//console.log(auth_res);
							if (auth_res["error"] < 1) {
								log("		 - User Auth Token: "+auth_res["user_auth_token"]);
								window.user_auth_token	= auth_res["user_auth_token"];
								set_session_var("ng_user_auth_token", auth_res["user_auth_token"]);
								window.ng_user_id	= user_id;
								set_session_var("ng_user_id", user_id);

								//Omniture start
								if(typeof s !== 'undefined' && typeof s.apl === 'function' && typeof s.t === 'function') {
								  s.pageURL = window.location;
								  s.pageName = document.title;
									s.events = s.apl(s.events,'event32',',',1);
									s.eVar20 = email;
									s.eVar35 = user_id;
									s.prop19 = s.eVar23 = "Logged in";
								  var s_code = s.t();
								  if(s_code) document.write(s_code);
									s.events = "";
								}
								//Omniture end							

								log("		 - NG User ID : "+auth_res["ng_res"]["@attributes"]["id"]);
								log("            - DD Bundle Id: "+window.bundle_id)
								log("            - DD Bundle Secret Key: "+window.bundle_secret_key)
								if(typeof window.dd_auth_hash !== "undefined" && window.dd_auth_hash.length > 0 && window.dd_ng_site_id !== "undefined" && window.dd_ng_site_id > 0 && window.ng_user_id > 0 && window.user_auth_token.length > 0){
									log("Log in using ng auth tokens");
									//get ng auth token and pass it to DD to get the passwordToken
									ng_auth_token(window.ng_user_id,window.user_auth_token,window.dd_auth_hash,window.dd_ng_site_id);

								} else {
									//Logged into NG but DD creds don't exist, so favorites cannot be saved.
									showNotification({
										message: "Welcome "+auth_res["ng_res"]["FirstName"]
											+" "+auth_res["ng_res"]["LastName"]
											//+", your nick-name is: "
											//+auth_res["ng_res"]["Nickname"]
											//+". Your user id is: "
											//+auth_res["ng_res"]["@attributes"]["id"]
											+".<br />We couldn't connect to the mobile app, so you cannot save favorites at the moment. ",
										type: "warning",
										autoClose: true,
										duration: window.error_message_timeout
									});
									login(email, "", user_id, auth_res["ng_res"]["FirstName"], auth_res["ng_res"]["LastName"]);
									return false;
								}
							} else {
								sign_in_loading_gif("off");
								//ERROR
								showNotification({
									message: (window.translation.error_messages.error_bad_password_or_user_id
										? window.translation.error_messages.error_bad_password_or_user_id
										: "Incorrect email address or password."),
									type: "error",
									autoClose: true,
									duration: window.error_message_timeout
								});
								//log("Error: "+auth_res["message"]+" - "+auth_res["message"][0]);
								//console.log(auth_res);
								log("[2]Break out of log in function"+window.debug_newline)
								logout();
								return false;
							}
						},
						error: function(data, ajaxOptions, thrownError) {
							log(data.status, thrownError);
						}
					});
				} else { sign_in_loading_gif("off"); log("ERROR: Missing minimum requirements... sso_complete_login(hash["+hash+"])");}
			} else { sign_in_loading_gif("off"); log("ERROR: Missing minimum requirements... sso_complete_login(granting_token["+granting_token+"])");}
		} else { sign_in_loading_gif("off"); log("ERROR: Missing minimum requirements... sso_complete_login(user_id["+user_id+"])");}
	} else { sign_in_loading_gif("off"); log("ERROR: Missing minimum requirements... sso_complete_login(email["+email+"])"); }
}
