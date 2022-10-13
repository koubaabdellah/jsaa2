//Function:     fixBottom()
//Arguments:    none
//Description:  This function is a bit of a hack. The main content container
//              and the floating menu are both controlled by scroll events;
//              if the user changes a view without scrolling, the container
//              and/or floating menus will be in the wrong place. This
//              function will run occasionally when this bug happens to 
//              scroll the user's browser up a pixel, until the problem
//              is resolved.
function fixBottom() {
	$("body,html").clearQueue();
	$('body,html').animate({ 'scrollTop': ($(this).scrollTop()-1) }, 100);
}

//Function: 	fixSpeakerRows()
function fixSpeakerRows() {
	//log("\n\n\nfunction fixSpeakerRows() - "+localStorage.PageLoaded);
	if (localStorage.PageLoaded.match(/speakers/)) {
		//log("Speaker Letters: "+localStorage.speaker_letters);
		var speaker_letters = localStorage.speaker_letters.split(/,/);
		var spkrLtr = "";
		var showBlock = false;
		for(var i = 0; i < speaker_letters.length; i++) {
			showBlock = false;
			spkrLtr = speaker_letters[i];
			//log("Are there any speakers visible under \""+spkrLtr+"\"?");
			$("#speaker_content_"+spkrLtr+" li").each(function(ind) {
				//log("Speaker: "+$(this).attr("id"));
				if ($("#"+$(this).attr("id")).is(":visible")) { 
					//log("     ~ Visible");
					showBlock = true;
					return false;
				} else { 
					//log("     ~ Hidden");
				}
			});
			if (showBlock) {
				//log("     ~ Yes");
				$("#speaker_letter_"+spkrLtr).parent().show();
			} else {
				//log("     ~ No");
				$("#speaker_letter_"+spkrLtr).parent().hide();
			}
		}
	}
}
//Function:     fixRowColors()
//Arguments:    none
//Description:  This function will redraw the even/odd row
//              colors after each filter function to make 
//              sure the two colors always alternate.
function fixRowColors() {
	//var active = getCurrentlyActiveMode().replace(/^\s*/, '').replace(/\s*$/, '');
	var active = getActiveView();
	log("Function \"Fix Row Colors\" - Active View: "+active);
	if (active === "search") { log("function skipped because of active state["+active+"]"+window.debug_newline); return; } 
	if (!active) { active = "list"; }
	if (active === "speaker-bio") { return; }
	//log("Active Mode: "+active+" -> "+(active.match(/speakers/) ? 'show all speaker sections...' : 'hie empty letter divider bars'));
	if (active.match(/speakers/)) { $(".alpha-speakers #alpha_tabs_all").click(); return; }
	if (localStorage.sorting_state.match(/alpha_day/)) {
		log("   - Hide empty day dividers");
		$(".cal_row_start_time").hide().removeClass("shown");
		$("#alpha_wrapper").hide();
		// log("are dividers visible? "+($(".cal_row_start_time").is(":visible") ? 'They are...' : 'they are "hidden"'));
		var pos_days = localStorage.pos_days.split(/,/);
		$(".alpha_by_day_wrapper").show();
		for(var i in pos_days) {
			if (pos_days.hasOwnProperty(i)) {
				day = pos_days[i];
				if (!$("#cal_"+day+" .calendar-cell").is(":visible")) {
					$("#alpha_by_day_"+day).hide();
				}
			}
		}

	} else if (localStorage.sorting_state.match(/alpha/)) {
		log("   - Hide empty letter divider bars");
		$(".cal_row_start_time").hide().removeClass("shown");
		var ids = localStorage.alpha_sort.split(/,/);
		var check_sessions = new Array();
		var track_bucket = 0;
		//if (sort_type.match(/_cba/)) { ids.reverse(); }
		$.each(window.session_first_letters, function(i, letter) {
			letter=letter.toUpperCase();
			if (!letter.match(/[A-Z]/)) { letter = "hashtag"; }
			//log("Processing["+letter+"]: ");
			if (window.session_first_letter_buckets[letter.toLowerCase()]) {
				track_bucket = 0;
				check_sessions = window.session_first_letter_buckets[letter.toLowerCase()];
				//log("    - Letter Bucket Start["+track_bucket+"]: "+check_sessions);
				$.each(check_sessions, function(j, id) {
					//log("j: "+j+"   id: "+id);
					if ($("#cal_session_"+id).is(":visible")) { track_bucket++; return false; }
					//log("        ~ Processing["+id+"]: $(\"#cal_session_"+id+"\").is(\":visible\") == "+(track_bucket ? "True" : "False"));
				});
				//log("    - Letter Bucket End["+track_bucket+"]: "+check_sessions);
				//log("    - Does this letter["+letter+"] have a visible session?");
				if (track_bucket) { 
					log("    - True"); 
					$("#ad_"+letter.toLowerCase()).show();
				} else { 
					log("    - False"); 
					$("#ad_"+letter.toLowerCase()).hide();
				}
				check_sessions = [];
			} else { 
				console.error("Could not process this letter divider because '"+letter.toLowerCase()+"' couldn't be found in:\n"
					+window.session_first_letter_buckets.join(", "));
			}
		});
	} else {
		log("   - Hide empty timeslot bars");
		var dup_containers = new Array();
		$(".start_time_wrapper").show();
		$(".cal_row_start_time").show().addClass("shown");
		$(".sb_button").removeClass("active");
		if (active) {
			if (active.match(/list/) || active.match(/calendar/)) {
				if (localStorage.ScheduleState === "full") { $("#all_sessions_btn").addClass("active"); }
				if (localStorage.ScheduleState === "my") { $("#my_schedule_btn").addClass("active"); }
			}
		}
		$(".cal_row_content").each(function(index) {
			var container = "#"+$(this).attr("id");
			var wrapper = container.replace(/content/, "wrapper");
			var track = 0;
			//log(container+": "+$.inArray(container, dup_containers));
			if ($.inArray(container, dup_containers)===-1) {
				//log("Container: "+container);
				dup_containers.push(container);
				$(container+" .calendar-cell").each(function(ind) {
					var session_cell = "#"+$(this).attr("id");
					if ($(session_cell).is(":visible")) { track++; return false; }
				});
				//If no session is visible in the time, block, hide it; otherwise show it.
				if (!track) { 
					//log("Hide: "+wrapper+", "+container); 
					$(wrapper).css("display", "none");
					$(container).hide(); 
				} else { 
					//log("Show: "+wrapper+", "+container); 
					$(wrapper).css("display", "list-tem");
					$(container).show(); 
				}
			}
		});
	}
	$(".calendar-cell:visible:even").css("background-color", window.listEvenColor);
	$(".calendar-cell:visible:odd").css("background-color", window.listOddColor);
	/*
	log("   - Crnt URL: "+window.location.href);
	var     History = window.History, 
		State   = History.getState();
	log("   - History State: "+State.url);
	*/
}

function sign_in_loading_gif(state) { 
	log("sign_in_loading_gif(\""+state+"\"):");
	if(state.match(/on/)) { 
		log("   -> Show loading gif, and hide other elements");
		$("#sign_in_link").html('<img src="'+window.baseURL+'/images/loading.gif" width="15" height="15" />');
		$("#create_account_link, .signin_create_divider").hide();
	} else { 
		log("   -> Remove loading gif and show sign-in/create-accoutn links");
		$("#sign_in_link").html('Sign In');
		$("#sign_in_link, #create_account_link, .signin_create_divider").show();
	}
}
