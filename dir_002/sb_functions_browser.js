//Browser Detection Workaround
function getInternetExplorerVersion() {
	var rv = -1; 
	window.browser.version = 10;
	if (navigator.appName == 'Microsoft Internet Explorer') {
		var ua = navigator.userAgent;
		var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		if (re.exec(ua) != null) { rv = parseFloat( RegExp.$1 ); }
		window.browser.version = rv;
	}
	return rv;
}
	
function checkVersion() {
	//var msg = "You're not using Internet Explorer.";
	var ver = getInternetExplorerVersion();
	if ( ver > -1 ) {
		window.browser.msie = true;
		if ( ver > 8.0 ) {
			//msg = "You're using a recent copy of Internet Explorer.";
		} else {
			//msg = "You should upgrade your copy of Internet Explorer.";
		}
	}
	//alert( msg );
}

function resetUriHistory(){
	window.previousUriHistoryStack = [];
}

//flag to check if we're back to the session page
window.isBackOnSessionList = false;
window.previousUriHistoryStack = JSON.parse(sessionStorage.getItem('previous_uri_array')) || [];
var wasLinkedClicked = JSON.parse(sessionStorage.getItem('previous_uri_link_clicked')) || false;

if(window.previousUriHistoryStack.length > 1){
	log(window.previousUriHistoryStack[(window.previousUriHistoryStack.length - 1)]);

	var lastUri = window.previousUriHistoryStack[(window.previousUriHistoryStack.length - 1)];
	var oneBeforeLastUri = window.previousUriHistoryStack[(window.previousUriHistoryStack.length - 2)];
	log('sb5 - was linked clicked from last page: '+wasLinkedClicked);
	log('sb5 - last URI: '+lastUri);
	log('sb5 - one before last URI: '+oneBeforeLastUri);

	//if a link wasn't clicked to load this page and it's the same URL, then it's a page refresh
	if(wasLinkedClicked == false && lastUri == window.location.pathname){
		log('sb5 - page refresh detected');
		//pop the URI off the array
		window.previousUriHistoryStack.pop();
		//debug
		//log(window.previousUriHistoryStack);

	//if a link wasn't clicked and the current URI is same the one before the last URI, then it's a back button
	}else if(wasLinkedClicked == false && oneBeforeLastUri == window.location.pathname){
		log('sb5 - back button detected');
		window.previousUriHistoryStack.pop(); // pop the last one
		window.previousUriHistoryStack.pop(); // pop the one before that

		if(oneBeforeLastUri.match('sessions') || oneBeforeLastUri == '/'){
			log('sb5 - back button onto session list detected');
			window.isBackOnSessionList = true;
		}
		//log(window.previousUriHistoryStack);
	}

	log('sb5 - page history URI stack:',window.previousUriHistoryStack);

	//reset - we dont need to track that much
	if(window.previousUriHistoryStack.length > 200){
		window.previousUriHistoryStack = [];
	}
}

if(wasLinkedClicked == true){
	sessionStorage.setItem('previous_uri_link_clicked',JSON.stringify(false));
}

window.addEventListener("beforeunload", function (event) {
	window.previousUriHistoryStack.push(window.location.pathname);
	log('sb5 - saving current page URI');
	sessionStorage.setItem('previous_uri_array', JSON.stringify(window.previousUriHistoryStack));

});

$(window).ready(function() {
	$("#sb5 a").on("click", function (e) {
		sessionStorage.setItem('previous_uri_link_clicked',JSON.stringify(true));
	});
});