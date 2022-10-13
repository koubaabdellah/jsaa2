//      ---------->  DD Functions  <----------      //

//function dd_login()
//  step 1 of the 2 step authentication process
//  the first step takes the email/password and returns the global user id
function dd_login(email, password) {
	var endpoint_url = '/admin/auth/authenticatebundle?'
		+'sessionToken='+window.sessionToken
		+'&sdk=true';
	log(window.debug_newline+"DD Endpoint: "+endpoint_url+window.debug_newline);
	$.ajax({
		url: window.baseURL+"/src/sso_functions.php",
		type: 'POST',
		data: {
			dd_proxy: true,
			dd_login: true,
			endpoint: encodeURIComponent(endpoint_url),
			EmailAddress : email,
			Password: password
		},
		success: function(data){
			log('Auth response: ');
			//log(data);
			try {
				var d = JSON.parse(data);
			} catch (e) {
				console.error("Error: Json could not be parsed\n"+e+"\nString:\n"+data)
				return false;
			}
			log("JSON Parsed...");
			if(d.IsSuccess) {
				log("Set Password Token");
				delete window.globalUserId;
				delete window.passwordToken;
				delete window.userId;
				//if(typeof window.application_id === "undefined") { log("get application id"); dd_get_application_id(); log("application id: "+window.application_id); }

				var global_user_id = "";
				var password_token = "";
				if(d.Value[0].Id) {
					global_user_id = d.Value[0].Id;
					window.globalUserId = global_user_id;
					set_session_var("dd_global_user_id", global_user_id);
					log("Global User ID: "+global_user_id);
				}
				if(d.Value[0].PasswordToken) {
					password_token = d.Value[0].PasswordToken;
					window.passwordToken = password_token;
					set_session_var("dd_password_token", password_token);
					log("Password Token: "+password_token);
				}
				//showNotification({message: "Temp disabled... MF 1/27/15", type: "error", autoClose: false });
				if(password_token.length && global_user_id.length) {
					log("Password token set... Link user");
					dd_link_user(password_token, global_user_id);
				} else {
					console.error("Missing password token or global user id from dd api");
				}
			} else {
				log("DD Error: "+d.Message);
				sign_in_loading_gif("off");
				showNotification({
					message: (window.translation.error_messages.error_dd_connection_error
						? window.translation.error_messages.error_dd_connection_error
						: "Could not connect to mobile app to save favorites. Please try again later."),
					type: "error",
					autoClose:true,
					duration: window.error_message_timeout
				});

			}
		},
		error: function(data, ajaxOptions, thrownError) {
			log("DD Endpoint: "+endpoint_url+"\n"+data.status+": "+thrownError);
		}
	});
}


//function link()
//  step 2 of the 2 step authentication process
//  the second step uses the global user id and the password token to get the user's event-based user id
function dd_link_user(password_token, global_user_id, bearer_token) {
	log("function dd_link_user(password_token:\""+password_token+"\", global_user_id:\""+global_user_id+"\")");
	//if(typeof window.application_id === "undefined") { log("get application id"); dd_get_application_id(); log("application id: "+window.application_id); }
	log("dd base: "+window.dd_api_base);
	log("app id: "+window.application_id);


	var endpoint_url = '/admin/applications/' + window.application_id + '/link';

	if(bearer_token == "undefined" || bearer_token == null){
		log('password token w/ global user id or bearer token required.');
		return false;
	}

	delete window.userId;
    //alert({dd_proxy: true,dd_link: true,endpoint: encodeURIComponent(endpoint_url),global_user_id: global_user_id,password_token: password_token,bearer_token: bearer_token});
	log(window.debug_newline+"DD Endpoint: "+endpoint_url+window.debug_newline);

	$.ajax({
		url: window.baseURL+"/src/sso_functions.php",
		type: 'POST',
		data: {
			dd_proxy: true,
			dd_link: true,
			endpoint: encodeURIComponent(endpoint_url),
			global_user_id: global_user_id,
			password_token: password_token,
			bearer_token: bearer_token
		},
		success: function(data){
			log('Link response: ');
			//log(data);
			var d = JSON.parse(data);
			if(d.IsSuccess) {
				var email = d.Value[0].EmailAddress.toLowerCase();
				var dd_event_user_id = d.Value[0].Id;
				window.userId = dd_event_user_id;
				localStorage.UserId = window.userId;
				var first_name = d.Value[0].FirstName;
				var last_name = d.Value[0].LastName;
				var password_token = d.Value[0].PasswordToken;

				if(typeof window.passwordToken === 'undefined'){
					window.passwordToken = d.Value[0].PasswordToken;
					set_session_var("dd_password_token", password_token);
				}

				login(email, password_token, dd_event_user_id, first_name, last_name);
				return false;
			} else {
				log("DD Error: "+d.Message);
				sign_in_loading_gif("off");
				showNotification({
					message: (window.translation.error_messages.error_dd_sso_linking_error
						? window.translation.error_messages.error_dd_sso_linking_error
						: "There was a problem linking your account to this event. Please contact the support staff, if this message persists."),
					type: "error",
					autoClose:true,
					duration: window.error_message_timeout
				});
				console.log("Checking logout for SCD-2760: "+global_user_id+" LOGOUT\n");
				logout();
			}
		},
		error: function(data, ajaxOptions, thrownError) {
			log("DD Endpoint: "+endpoint_url+"\n"+data.status+": "+thrownError);
		}
	});
}




//function dd_get_application_id()
function dd_get_application_id() {
	//if(!window.application_id) { window.application_id = ""; }
	if(typeof window.application_id === "undefined") { window.application_id = ""; }
	log("Application ID["+window.application_id.length+"]: "+window.application_id);
	if(window.application_id.length === 0) {
		var endpoint_url = window.dd_api_base+'/admin/applications/current?'
			+'sessionToken='+window.sessionToken
			+'&sdk=true';
		log(window.debug_newline+"DD Endpoint: "+endpoint_url+window.debug_newline);
		$.ajax({
		url: endpoint_url,
			type: 'GET',
			data: JSON.stringify({  }),
			contentType:"application/json; charset=utf-8",
			dataType:"json",
			success: function(d){
				//log('getApplication response: '+JSON.stringify(d));
				if(d.IsSuccess) {
					window.application_id = d.Value[0].Id;
					set_session_var("dd_application_id", d.Value[0].Id);
					log("Application ID Set: "+window.application_id);
					return true;
				} else {
					log("DD ERROR: "+d.Message+"<br />Could not update application id (mobile app's event id)...");
					sign_in_loading_gif("off");
					showNotification({
						message: (window.translation.error_messages.error_application_not_found
							? window.translation.error_messages.error_application_not_found
							: "Could not get application id (mobile app's event id)..."),
						type: "error",
						autoClose:true,
						duration: window.error_message_timeout
					});
					return false;
				}
			},
			error: function(data, ajaxOptions, thrownError) {
				log("DD Endpoint: "+endpoint_url+"\n"+data.status+": "+thrownError);
				return false;
			}
		});
	} else { log("getApplication() Skipped because it was already set: "+window.application_id); return false; }
}






//Function:     login()
//Arguments:    email (string), dd_pt (string), dd_user_id (int),
//              dd_first_name (string), dd_last_name (string),
//Description:  This function will do an ajax request based on cookies stored
//              in the user's browser after loggin in once.
function login(email, dd_pt, dd_user_id, dd_first_name, dd_last_name) {
	log(window.debug_newline
		+'function login(email['+email+'], '
			+'password_token['+dd_pt+'], '
			+'dd_event_user_id['+dd_user_id+'], '
			+'fisrt_name['+dd_first_name+'], '
			+'last_name['+dd_last_name+']'
		+')'
		+window.debug_newline
	);

	if (email && dd_pt && dd_user_id) {
		setCookie("dd_em", email, 7);
		setCookie("dd_ui", dd_user_id, 7);
		if(dd_pt != 'ng'){
			setCookie("dd_pt", dd_pt, 7);
		}
		log("User ID: "+dd_user_id);
		log("Name: "+dd_first_name+" "+dd_last_name);
		$("#sb5-sign-in").modal('hide');
		localStorage.UserId=dd_user_id;

		log("updating sso links");
		//SB Lite
		$("#sb5-sign-in-link, #sb5-create-account-link, .signin_create_divider").hide();
		var logged = '<span class="sb5-you-are-logged-in-as">'
		 	+(window.translation.tools.user_control.logged_in_as ? window.translation.tools.user_control.logged_in_as : 'You are logged in as:')
		 	+'</span>&nbsp;<a data-toggle="modal" data-target="#sb5-edit-user" id="sb5-logged-in-link">'+email+'&nbsp;<span class="small">('+(window.translation.tools.dialogs.edit_user_dialog.edit ? window.translation.tools.dialogs.edit_user_dialog.edit : 'edit')+')</span></a>'
		    +' <span class="glyphicon glyphicon-refresh sb5-refresh-from-app" aria-hidden="true" data-toggle="tooltip" data-placement="bottom" title="Sync Schedule"></span>'
	        +'<span class="sb5-logged-in-divider"> | </span>'
	        +'<a href="javascript:logout()" id="logout">'+(window.translation.tools.user_control.log_out ? window.translation.tools.user_control.log_out : 'Log Out')+'</a>'
	        +'<span class="sb5-logged-in-divider"> | </span>';

		$('#sb5-edit-account-first-name').val(dd_first_name);
		$('#sb5-edit-account-last-name').val(dd_last_name);
		$(".sb5-options").prepend(logged);
		log("    - Done");

		//update personal schedule
		log("Update Add/Remove Buttons: "+dd_user_id);
		if(update_personal_schedule(dd_user_id)) {
			log("Add/Remove buttons updated for personal schedule.");
		} else { log("Personal Schedule could not be applied to SB"); }

		//show export personal schedule option
		$(".sb5-export-personal-schedule").show();

		//show my schedule buttton
		$('#sb5-my-schedule-button').css("display", "block");

		log("Set up refresh button");
		$(document).on("click", ".sb5-refresh-from-app", function(e) {
			e.preventDefault();
			log("Update Add/Remove Buttons: "+dd_user_id);
			if(update_personal_schedule(dd_user_id)) {
				log("Add/Remove buttons updated for personal schedule.");
				showNotification({
					message: (window.translation.confirmation_messages.confirmation_sync_successful
						? window.translation.confirmation_messages.confirmation_sync_successful
						: "All changes have been synced from the mobile app!"),
					type: "success",
					autoClose: true,
					duration: window.error_message_timeout
				});
			} else {
				log("Personal Schedule could not be applied to SB");
				sign_in_loading_gif("off");
				showNotification({
					message: (window.translation.error_messages.error_could_not_sync
						? window.translation.error_messages.error_could_not_sync
						: "Changes could NOT be synced from the mobile app!"),
					type: "error",
					autoClose: true,
					duration: window.error_message_timeout
				});
			}
		});
		log("    - Initialized!");
	} else {
		log("Missing var(s): email: "+email+"   -   password token: "+dd_pt+"   -   user id: "+dd_user_id);
		sign_in_loading_gif("off");
		showNotification({
			message: (window.translation.error_messages.error_login_failure
				? window.translation.error_messages.error_login_failure
				: 'There was a problem logging in! Refresh the page, and try again please.'),
			type: "error",
			autoClose: true,
			duration: window.error_message_timeout
		});
	}

	return false;
}


function update_personal_schedule(user_id) {
	log("Function update_personal_schedule(user_id:"+user_id+");");
	var ret = true;
	if(window.dd_api_version === "2") {
		if(window.dd_api_base.length > 0) {
			window.userId = user_id;
			if(window.userId > 0 ) {

				if(window.schedule_adapter_id == 1 && typeof window.bearerToken != "undefined" && window.bearerToken.length > 5){
					getUserSchedule();
				}else if(window.schedule_adapter_id == 2){

					if(typeof window.bearerToken != "undefined" && window.bearerToken.length > 5){
						log("Run getFavorites(); w/ bearer_token");
						getFavorites();
					}else if(window.globalUserId.length > 0 ) {
						if(window.application_id.length > 0) {
							if(window.passwordToken.length > 0) {
								log("Run getFavorites();");
								getFavorites();
								return true;
							} else { log("Error: No password passed"); return false; }
						} else { log("Error: No application id found"); return false; }
					} else { log("Error: No User-gid found"); return false; }

				}


			} else { log("Error: No User-id found"); return false; }
		} else { log("Error: No base url for dd api call"); return false; }
	}
	return ret;
}


function logout() {
	log("logout()");
    $.ajax({
        type: "POST",
        url: window.baseURL+"/src/sso_functions.php",
        data: {
            log_activity:true,
            current_page: window.location.href
        },
        success: function(data) {},
        error: function(data, ajaxOptions, thrownError) {
            log(data.status, thrownError);
        }
    });
	setCookie('dd_pt', null, 365);
	setCookie('dd_em', null, 365);
	setCookie('dd_ui', null, 365);
	set_session_var("clear_session", "true");
	delete window.passwordToken;
	delete window.globalUserId;
	delete window.ng_user_id;
	delete window.user_auth_token;
	delete window.userId;
	localStorage.ScheduleState = 'full';
	localStorage.removeItem("UserId");
	localStorage.removeItem("PersonalScheduleIds");
	$(".description_page_add_button").show().html("&nbsp;").attr("id", "");
	$(".description_page_remove_button").hide().html("&nbsp;").attr("id", "");
	$(".logged_in, #sb5-logged-in-link, #logged_out_link, #logout, .sb5-logged-in-divider, .sb5-refresh-from-app, .sb5-you-are-logged-in-as,.sb5-export-personal-schedule").remove();
	$("#sb5-sign-in-link,#sb5-create-account-link").show();
	//$("#all_sessions_btn, #sb5-my-schedule-button").hide();
	sign_in_loading_gif("off");
	$(".refresh_wrapper").remove();
	$("#email_input").val("");
	$("#password-clear").val("");
	$("#password-password").val("");
	$("input#EmailAddress").val("");
	$("input#Password").val("");

	//clear personalal schedule if it's the my schedule page
	if(typeof showMySchedule != "undefined" && showMySchedule == true) {
		$('#list_filters li div input').prop('checked', false);
		var formData = $('#list_filters').serialize();
		sb5_filter_schedule(formData);
	}

	//Omniture start
	if(typeof s !== 'undefined') {
		s.eVar20 = s.eVar35 = '';
		s.events = '';
		s.prop19 = s.eVar23 = "Logged out";
	}
	//Omniture end

	$('.clear_all').click();
	$(".remove_from_schedule").addClass("add_to_schedule").removeClass("remove_from_schedule").prop("checked", "").parent().addClass("checkbox-inactive").removeClass("checkbox-active");
	$('.sb5-add-remove-btn').removeClass("sb5-remove-btn");
	$('.sb5-add-remove-btn').html("Add");


}

//      ---------->  DD User Functions  <----------      //

//function getFavorites()
//  This function requires the user be authenticated
//  and takes the global/local user ids and the password token to return a list of dd session ids
function getFavorites() {

	if(typeof window.bearerToken == "undefined" || window.bearerToken.length < 5){
		return false;
	}

	var endpoint_url = '/users/'+window.userId+'/favorites?applicationid='+window.application_id

	log(window.debug_newline+"Endpoint: "+endpoint_url+window.debug_newline);
	$.ajax({
		url: window.baseURL+"/src/sso_functions.php",
		type: 'POST',
		data: {
			dd_proxy: true,
			get_favorites: true,
			endpoint: encodeURIComponent(endpoint_url),
			bearer_token: window.bearerToken
		},
		success: function(data) {
			var d = JSON.parse(data);
			if(d.IsSuccess) {
				var ids = new Array();
				for(var i = 0; i < d.Value.length; i++) {
					//$("#add_"+d.Value[i].Id).html("Remove "+d.Value[i].Id).attr("onClick", "removeFavorite('"+d.Value[i].Id+"'); return false;");
					//log("addedFavorite("+d.Value[i].Item.Id+")");
					ids.push(d.Value[i].Item.Id);
				}

				//log("Favorites('"+ids.join(",")+"');");
				localStorage.PersonalScheduleIds = ids.join(",");

				//if the my schedule button was clicked when the user was not logged in
				if (window.global_my_schedule_trip && typeof showMySchedule == "undefined") {
					if (window.userId) {
						log('global_my_schedule_trip activated.');
						//workaround to click the my schedule button
						// jquery.trigger('click') doesn't load the link's href
						document.getElementById("sb5-my-schedule-button").click();
					} else {
						showNotification({
							message: (window.translation.warning_messages.warning_must_login
								? window.translation.warning_messages.warning_must_login
								:"You must log in or create an account to use this feature."),
							type: "warning",
							autoClose: true,
							duration: window.error_message_timeout
						});
						$(".login_dialog_wrapper").dialog('open');
						logout();
					}
				}else if(typeof _sessionId != 'undefined'){ //if the _sessionID is set then we're on a session description page
                    loadSession(_sessionId);
				}else if(window.is_session_list == true){
                    log('updating list view add/remove buttons');

					for(var i=0; i < ids.length; i++) {
						if (ids[i]) {
							var dd = ids[i];
							if (dd_to_ev2[dd]) {
								$("#sb5-add-remove-btn-"+dd_to_ev2[dd]).addClass("sb5-remove-btn");
								$("#sb5-add-remove-btn-"+dd_to_ev2[dd]).html('Remove');
							} else {
								log("Ev2 id not found from dd id: "+dd);
							}
						}
					}

					log('displaying list view add/remove buttons');
					$(".sb5-add-remove").show();

					if(typeof showMySchedule != "undefined" && showMySchedule == true){
						$('#sb5-my-schedule-button').trigger('click');
						window.global_my_schedule_trip = false;
					}
				}



			} else {
				log("DD Error: "+d.Message);
				showNotification({
					message: (window.translation.error_messages.error_get_favorites
						? window.translation.error_messages.error_get_favorites
						: "Could not get favorites... Please try again later."),
					type: "error",
					autoClose: true,
					duration: window.error_message_timeout
				});
			}
		},
		error: function(data, ajaxOptions, thrownError) {
			//log("ERROR: Endpoint: "+endpoint_url+"\n"+data.status+": "+thrownError);
		}
	});
}


//function addFavorite(dd_session_id)
//  This function takes an authenticated user and a dd-session-id to add it to a list of favorites
function addFavorite(dd_session_id) {

	if(typeof window.bearerToken == "undefined" || window.bearerToken.length < 5){
		return false;
	}

	var endpoint_url =  '/users/'+window.userId+'/favorites?applicationid='+window.application_id;

	log(window.debug_newline+"Endpoint: "+endpoint_url+"\nSession ID: "+dd_session_id);
	$.ajax({
		url: window.baseURL+"/src/sso_functions.php",
		type: 'POST',
		data: {
			dd_proxy: true,
			add_favorite: true,
			endpoint: encodeURIComponent(endpoint_url),
			session_id: dd_session_id,
			bearer_token: window.bearerToken
		},
		success: function(data){
			var d = JSON.parse(data);
			log('Add response['+dd_session_id+']: '+JSON.stringify(d));
			var dd_to_ev2 = JSON.parse(localStorage.dd_id_to_ev2_id);
			if(d.IsSuccess) {
				//reactivate the button
				$("#sb5-add-remove-btn-"+dd_to_ev2[dd_session_id]).addClass("sb5-remove-btn");
				$("#sb5-add-remove-btn-"+dd_to_ev2[dd_session_id]).html("Remove");
				$("#sb5-add-remove-btn-"+dd_to_ev2[dd_session_id]).prop("disabled","");
				localStorage.PersonalScheduleIds = localStorage.PersonalScheduleIds+","+parseInt(dd_session_id);

				//Display success message
				showNotification({
					message: (window.translation.confirmation_messages.confirmation_session_added
						? window.translation.confirmation_messages.confirmation_session_added
						: "This session[s->d:"+dd_to_ev2[dd_session_id]+"->"+dd_session_id+"] has been added to your personal schedule."),
					type: "success",
					autoClose: true,
					duration: 5
				});
			} else {
				//Revert Button
				$("#sb5-add-remove-btn-"+dd_to_ev2[dd_session_id]).removeClass("sb5-remove-btn").prop("disabled","");
				//End Revert Button

				//Noisy Error:
				//alert("could not add session: "+dd_session_id+":"+dd_to_ev2[dd_session_id]);
				showNotification({
					message: (window.translation.error_messages.error_problem_adding_session_to_schedule
						? window.translation.error_messages.error_problem_adding_session_to_schedule
						: "DD ERROR: "+d.Message+"<br />"+"This session[s->d:"+dd_to_ev2[dd_session_id]+"->"+dd_session_id+"] COULD NOT be added to your personal schedule."),
					type: "error",
					autoClose: true,
					duration: window.error_message_timeout
				});
			}
		},
		error: function(data, ajaxOptions, thrownError) {
			//log("ERROR: Endpoint: "+endpoint_url+"\n"+data.status+": "+thrownError);
		}
	});
}


//function removeFavorite(dd_session_id)
//  This function takes an authenticated user and a dd-session-id to add it to a list of favorites
function removeFavorite(dd_session_id) {

	if(typeof window.bearerToken == "undefined" || window.bearerToken.length < 5){
		return false;
	}

	var endpoint_url =  '/users/'+window.userId+'/favorites/'+dd_session_id+'?applicationid='+window.application_id;

	log(window.debug_newline+"Endpoint: "+endpoint_url+"\nSession ID: "+dd_session_id);
	$.ajax({
		url: window.baseURL+"/src/sso_functions.php",
		type: 'POST',
		data: {
			dd_proxy: true,
			remove_favorite: true,
			endpoint: encodeURIComponent(endpoint_url),
			session_id: dd_session_id,
			bearer_token: window.bearerToken
		},
		success: function(data){
			var d = JSON.parse(data);
			//log('Remove response['+dd_session_id+']: '+JSON.stringify(d)) // should be event-specific user information
			var dd_to_ev2 = JSON.parse(localStorage.dd_id_to_ev2_id);
			//$("#add_"+dd_session_id).html("Add "+dd_session_id).attr("onClick", "addFavorite('"+dd_session_id+"'); return false;");
			if(d.IsSuccess) {
				//reactivate the button
				$("#sb5-add-remove-btn-"+dd_to_ev2[dd_session_id]).removeClass("sb5-remove-btn");
				$("#sb5-add-remove-btn-"+dd_to_ev2[dd_session_id]).html("Add");
				$("#sb5-add-remove-btn-"+dd_to_ev2[dd_session_id]).prop("disabled","");
				localStorage.PersonalScheduleIds = String(localStorage.PersonalScheduleIds).replace(dd_session_id, "").replace(/,,/, ",").replace(/,$/, "");
				if(window.location.href.match(/\/my-schedule/)) { $("#cal_session_"+dd_to_ev2[dd_session_id]).hide(); hideTimeHeaderDivider(); }

				//Display success message
				showNotification({
					message: (window.translation.confirmation_messages.confirmation_session_removed
						? window.translation.confirmation_messages.confirmation_session_removed
						: "This session[s->d:"+dd_to_ev2[dd_session_id]+"->"+dd_session_id+"] has been removed your personal schedule."),
					type: "success",
					autoClose: true,
					duration: 5
				});
			} else {
				//Revert Button
				$("#sb5-add-remove-btn-"+dd_to_ev2[dd_session_id]).addClass("sb5-remove-btn").prop("disabled","");
				//End Revert Button

				//Noisy Error:
				//alert("could not add session: "+dd_session_id+":"+dd_to_ev2[dd_session_id]);
				showNotification({
					message: (window.translation.error_messages.error_problem_removing_session_from_schedule
						? window.translation.error_messages.error_problem_removing_session_from_schedule
						: "DD ERROR: "+d.Message+"<br />"+"This session[s->d:"+dd_to_ev2[dd_session_id]+"->"+dd_session_id+"] COULD NOT be removed from your personal schedule."),
					type: "error",
					autoClose: true,
					duration: window.error_message_timeout
				});
			}
		},
		error: function(data, ajaxOptions, thrownError) {
			//log("ERROR: Endpoint: "+endpoint_url+"\n"+data.status+": "+thrownError);
		}
	});
}

function loadSession(session_id) {
	log('loadSession('+session_id+')');

	var id = session_id;

	if(window.schedule_adapter_id == 2){ //to support DD id mapping

		//log("localStorage.ev2_id_to_dd_id = \""+localStorage.ev2_id_to_dd_id+"\"");
		//log("localStorage.PersonalScheduleIds = \""+localStorage.PersonalScheduleIds+"\"");

		if(localStorage.ev2_id_to_dd_id && !localStorage.ev2_id_to_dd_id.match(/\{\s*\}/)){
			//parse to array
			var dd_ids = JSON.parse(localStorage.ev2_id_to_dd_id);

			if (dd_ids[session_id]) {
				id = dd_ids[session_id];
				log("Match found: "+session_id+" -> "+id);
			}else{
				log("Session: "+session_id+" Not found in dd array... Cannot show button");
				return false
			}
		}else{
			log("Session: "+session_id+" Not found in dd array... Cannot show button");
			return false
		}
	}

	if (localStorage.UserId && localStorage.PersonalScheduleIds && localStorage.PersonalScheduleIds.match(id) ) {
        $("#sb5-add-remove-btn-"+session_id).addClass("sb5-remove-btn");
        $("#sb5-add-remove-btn-"+session_id).html("Remove");
		log('showing remove button');
	} else {
        $("#sb5-add-remove-btn-"+session_id).removeClass("sb5-remove-btn");
        $("#sb5-add-remove-btn-"+session_id).html("Add");
		log('showing add button');
	}

	$(".sb5-add-remove").show();


}
