function getUser(){

	if(!window.bearerToken || window.bearerToken.length == 0 || window.schedule_adapter_id != 1 || window.dd_auth_hash.length == 0){
		log(window.debug_newline+"UBM SS: getUser() - cannot get user. missing auth requirements. "+window.debug_newline);
		return false;
	}

	log(window.debug_newline+"UBM SS: getUser() "+window.debug_newline);

	$.ajax({
		url: window.baseURL+"/src/sso_functions.php",
		type: 'POST',
		data: {
			get_user: true,
			bearer_token:window.bearerToken
		},
		success: function(data){
			log('UBM SS getUser response: ');
			log(data);
			var user = JSON.parse(data);

			if (user["error"] < 1) {

				delete window.userId;

				var email = user.UserDetail.EmailAddress.Email.toLowerCase();
				var ng_user_id = user.UserDetail.UserId;
				window.userId = ng_user_id;
				localStorage.UserId = window.userId;
				var first_name = user.UserDetail.FirstName;
				var last_name = user.UserDetail.LastName;

				log(window.debug_newline
					+'Execute: login(email['+email+'], '
						+'dd_event_user_id['+ng_user_id+'], '
						+'fisrt_name['+first_name+'], '
						+'last_name['+last_name+']'
						+');'
				+window.debug_newline
				);

				login(email, 'ng', ng_user_id, first_name, last_name);
				//return false;

			} else {
				log("UBM SS Error: "+d.Message);
				sign_in_loading_gif("off");
				showNotification({
					message: (window.translation.error_messages.error_dd_sso_linking_error
						? window.translation.error_messages.error_dd_sso_linking_error
						: "There was a problem retrieving your account for this event. Please contact the support staff, if this message persists."),
					type: "error",
					autoClose:true,
					duration: window.error_message_timeout
				});
				logout();
			}
		},
		error: function(data, ajaxOptions, thrownError) {
			log("DD Endpoint: "+endpoint_url+"\n"+data.status+": "+thrownError);
		}
	});

}

function getUserSchedule(){

	if(!window.bearerToken || window.bearerToken.length == 0 || window.schedule_adapter_id != 1 || !window.event_id){
		return false;
	}

	log(window.debug_newline+"UBM SS Endpoint: getUserSchedule () "+window.debug_newline);

	$.ajax({
		url: window.baseURL+"/src/sso_functions.php",
		type: 'POST',
		data: {
			get_user_schedule: true,
			event_id: window.event_id
		},
		success: function(data){
			log('UBM SS getUserSchedule response: ');
			log(data);

			var userSchedule  = JSON.parse(data);

			if (userSchedule["error"] < 1) {

				var ids = new Array();

				for (var i = 0; i < userSchedule.Sessions.length; i++) {
					//log("addedFavorite("+userSchedule.Sessions[i].id+")");
					ids.push(userSchedule.Sessions[i].id);
				}

				log("Favorites('"+ids.join(",")+"');");
				localStorage.PersonalScheduleIds = ids.join(",");

				if (window.global_my_schedule_trip) {
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
				}else if(typeof _sessionId != 'undefined' && _sessionId > 0){ //if the _sessionID is set then we're on a session description page

					loadSession(_sessionId);

				}else {

					log('updating list view add/remove buttons');

					for (var i = 0; i < ids.length; i++) {
						if (ids[i]) {
							var dd = ids[i];
							$("#sb5-add-remove-btn-"+dd).addClass("sb5-remove-btn");
							$("#sb5-add-remove-btn-"+dd).html('Remove');
						}
					}

					log('displaying list view add/remove buttons');
					$(".sb5-add-remove").show();

					if(typeof showMySchedule != "undefined" && showMySchedule == true){
						log('$(\'#sb5-my-schedule-button\').trigger(\'click\') in getUserSchedule()');
						$('#sb5-my-schedule-button').trigger('click');
						window.global_my_schedule_trip = false;
					}

				}

			} else {
				log("UBM SS Error: "+userSchedule.Message);
				sign_in_loading_gif("off");
				showNotification({
					message: (window.translation.error_messages.error_dd_sso_linking_error
						? window.translation.error_messages.error_dd_sso_linking_error
						: "There was a problem retrieving your schedule for this event. Please contact the support staff, if this message persists."),
					type: "error",
					autoClose:true,
					duration: window.error_message_timeout
				});
				logout();
			}
		},
		error: function(data, ajaxOptions, thrownError) {
			log("DD Endpoint: "+endpoint_url+"\n"+data.status+": "+thrownError);
		}
	});

}

function addUserSchedule(sessionId){


	if( !isInt(sessionId) || !window.bearerToken || window.bearerToken.length == 0 || window.schedule_adapter_id != 1 || !window.event_id){
		return false;
	}

	log(window.debug_newline+"UBM SS Endpoint: getUserSchedule () "+window.debug_newline);

	$.ajax({
		url: window.baseURL+"/src/sso_functions.php",
		type: 'POST',
		data: {
			add_user_schedule: true,
			session_id: sessionId,
			event_id: window.event_id
		},
		success: function(data){
			log('UBM SS addUserSchedule response: ');
			log(data);
			var response  = JSON.parse(data);

			if (response.isSuccess) {

				//reactivate the button
				$("#sb5-add-remove-btn-"+sessionId).addClass("sb5-remove-btn");
				$("#sb5-add-remove-btn-"+sessionId).html("Remove");
				$("#sb5-add-remove-btn-"+sessionId).prop("disabled","");

				localStorage.PersonalScheduleIds = localStorage.PersonalScheduleIds+","+parseInt(sessionId);

				//Display success message
				showNotification({
					message: (window.translation.confirmation_messages.confirmation_session_added
						? window.translation.confirmation_messages.confirmation_session_added
						: "This session "+sessionId+" has been added to your personal schedule."),
					type: "success",
					autoClose: true,
					duration: 5
				});

			} else {
				log("UBM SS Error: "+response.Message);

				//Revert Button
				$("#sb5-add-remove-btn-"+sessionId).removeClass("sb5-remove-btn").prop("disabled","");
				//End Revert Button

				showNotification({
					message: (window.translation.error_messages.error_problem_adding_session_to_schedule
						? window.translation.error_messages.error_problem_adding_session_to_schedule
						: "UBM SS ERROR: "+response.Message+"<br />"+"This session "+sessionId+" COULD NOT be added to your personal schedule."),
					type: "error",
					autoClose: true,
					duration: window.error_message_timeout
				});
			}
		},
		error: function(data, ajaxOptions, thrownError) {
			log("UBM SS addUserSchedule\n"+data.status+": "+thrownError);
		}
	});
}

function removeUserSchedule(sessionId){

	if( !isInt(sessionId) || !window.bearerToken || window.bearerToken.length == 0 || window.schedule_adapter_id != 1  || !window.event_id){
		return false;
	}

	log(window.debug_newline+"UBM SS Endpoint: removeUserSchedule () "+window.debug_newline);

	$.ajax({
		url: window.baseURL+"/src/sso_functions.php",
		type: 'POST',
		data: {
			remove_user_schedule: true,
			session_id: sessionId,
			event_id: window.event_id
		},
		success: function(data){
			log('UBM SS removeUserSchedule response: ');
			log(data);
			var response  = JSON.parse(data);

			if (response.isSuccess) {

				//reactivate the button
				$("#sb5-add-remove-btn-"+sessionId).removeClass("sb5-remove-btn");
				$("#sb5-add-remove-btn-"+sessionId).html("Add");
				$("#sb5-add-remove-btn-"+sessionId).prop("disabled","");
				localStorage.PersonalScheduleIds = String(localStorage.PersonalScheduleIds).replace(sessionId, "").replace(/,,/, ",").replace(/,$/, "");

				if(window.location.href.match(/\/my-schedule/)) { $("#cal_session_"+sessionId).hide(); hideTimeHeaderDivider(); }

				//Display success message
				showNotification({
					message: (window.translation.confirmation_messages.confirmation_session_removed
						? window.translation.confirmation_messages.confirmation_session_removed
						: "This session "+sessionId+" has been removed your personal schedule."),
					type: "success",
					autoClose: true,
					duration: 5
				});

			} else {
				log("UBM SS Error: "+response.Message);

				//Revert Button
				$("#sb5-add-remove-btn-"+sessionId).addClass("sb5-remove-btn").prop("disabled","");
				//End Revert Button

				//Noisy Error:
				showNotification({
					message: (window.translation.error_messages.error_problem_removing_session_from_schedule
						? window.translation.error_messages.error_problem_removing_session_from_schedule
						: "UBM SS ERROR: "+response.Message+"<br />This session "+sessionId+" COULD NOT be removed from your personal schedule."),
					type: "error",
					autoClose: true,
					duration: window.error_message_timeout
				});

			}
		},
		error: function(data, ajaxOptions, thrownError) {
			log("UBM SS removeUserSchedule\n"+data.status+": "+thrownError);
		}
	});
}