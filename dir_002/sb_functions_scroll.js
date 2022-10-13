
//Function:     scrollToTop(speed)
//Arguments:    none
//Description:  This function will scroll the user to the top of the page
function scrollToTop(speed) {

	var speed = speed || 0;
	var scroll = 0;
	if ($('a[name=top]').offset() !== undefined) {
		scroll = $('a[name=top]').offset().top;
	} else if ($("#top-of-schedule").offset().top) {
		scroll = $("#top-of-schedule").offset().top;
	} else if ($("h1").offset().top) {
		scroll = $("h1").offset().top;
	} else {
		scroll = 300;
	}
	if (scroll > 1000) { scroll = 300; }
	var min = 0;
	var max = 10;
	if (typeof window.user_browser_info !== "undefined") {
		if (window.user_browser_info.ismobiledevice) { scroll = Math.floor(Math.random() * (max - min)) + min;; }
	}

	log(window.debug_newline+"function scrollToTop(speed) { offset = "+scroll+"px; going this fast: "+speed+"ms } "+window.debug_newline);
	$("body,html").clearQueue();
	$('body,html').animate({ 'scrollTop': scroll }, speed);

}

//Function:     scrollToSession()
//Arguments:    tmp_session_id (int)
//Description:  This function will scroll the user to a specific
//              session, which is triggered after returning to 
//              the list/calendar view, from a session description page.
function scrollToSession(tmp_session_id) {
	if (tmp_session_id && localStorage.session_titles) { 
		var session_titles = JSON.parse(localStorage.session_titles);
		//log("Scroll to session["+tmp_session_id+"]: "+eval("localStorage.title_"+tmp_session_id));
		log("Scroll to session["+tmp_session_id+"]: "+session_titles[tmp_session_id]);
	}
	var session_position = $('#cal_session_'+tmp_session_id).offset().top;
	//var scroll_top_margin = window.topMargin+window.topMargin+window.border_total;
	//var scroll_top_margin = 0;
	var once = false;
	$("body,html").clearQueue();
	$('body,html').animate({ 'scrollTop': session_position }, 1000, function() { 
		if (!once) {
			once = true; 
			$("body,html").clearQueue();
			window.scrollTo(0, session_position);
			//log("Scroll position: "+session_position+"   Calculated Top Margin: "+scroll_top_margin);
			fixRowColors(); 
		}
	});
}

//Function:     jumpToDay()
//Arguments:    day (string)
//Description:  This function will scroll the user to a specific
//              day divider on the list or calendar view
function jumpToDay(day) {
	//var target = "#"+(getCurrentlyActiveMode() === 'calendar' ? 'cal' : getCurrentlyActiveMode())+"_"+day;
	var target = "#cal_"+day;
	var pds = localStorage.pos_days.split(/,/);
	log("Jump to Day: "+day+"    Target: "+target);
	//log("First Day: "+pds[0]);
	if (target.match(/list/) || target.match(/cal/)) {
		if (day === pds[0]) {
			scrollToTop(200);
		} else {
			//log("Scroll To: "+target+"   offset: "+$(target).offset().top);
			$("body,html").clearQueue();
			$('body,html').animate({ 'scrollTop': ($(target).offset().top-((window.topMargin*2)+window.topBottomBorderSize)) }, 1000);
		}
	}
}

//Function:     jumpToSpeakerAnchor()
//Arguments:    letter (string)
//Description:  This function will scroll the user to a specific
//              letter divider on the master speaker list view
function jumpToSpeakerAnchor(letter) {
	// if (getCurrentlyActiveMode() === 'speakers') {
	if (getActiveView() === 'speakers') {
			$("body,html").clearQueue();
			$("body,html").animate({ 'scrollTop': ($("#speaker_letter_"+letter).offset().top-((window.topMargin*2)+window.topBottomBorderSize)) }, 1000);
	}
}
