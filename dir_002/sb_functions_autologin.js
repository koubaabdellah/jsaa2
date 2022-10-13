
$(function() {
    $.ajax({
		url: window.baseURL+"/sso/autologin",
		type: 'POST',
		data: {
			autologin: true,
		},
		success: function(data) {
			if(data.IsSuccess) { 
				window.user_auth_token = data.user_auth_token;
				window.ng_user_id = data.ng_user_id;

				if(window.schedule_adapter_id == 1 && data.bearerToken){
					window.bearerToken = data.bearerToken;
					log("get UBM SS user now");
					getUser();
				}else if(window.schedule_adapter_id == 2){
					if(data.bearerToken){
						window.bearerToken = data.bearerToken;
						dd_link_user(null,null,window.bearerToken);
					}else{
						window.globalUserId = data.globalUserId;
						window.passwordToken = data.passwordToken;
						dd_link_user(window.passwordToken, window.globalUserId);
					}
				}
			}else{
                if(window.dd_auth_hash && window.dd_ng_site_id && !(window.cache_freeze == "1" && window.env == 'production') ){
					//show sign in/create account link and add buttons
					$('#sb5-sign-in-link,#sb5-create-account-link,.signin_create_divider,.sb5-add-remove').show();

					$('#sb5-my-schedule-button').css("display", "block");

					if(typeof showMySchedule != "undefined" && showMySchedule == true){
						$('#sb5-my-schedule-button').click();
						showMySchedule = false;
					}
				}
				//as per RT SDC-2498
				if(window.dd_auth_hash && window.dd_ng_site_id && window.schedule_adapter_id == 1){
					//show sign in/create account link and add buttons
					$('#sb5-sign-in-link,#sb5-create-account-link,.signin_create_divider,.sb5-add-remove').show();

					$('#sb5-my-schedule-button').css("display", "block");

					if(typeof showMySchedule != "undefined" && showMySchedule == true){
						$('#sb5-my-schedule-button').click();
						showMySchedule = false;
					}
				}
			}
		},
		error: function(data, ajaxOptions, thrownError) { 
			log("ERROR: Endpoint: "+endpoint_url+"\n"+data.status+": "+thrownError);
		}
	});
});
