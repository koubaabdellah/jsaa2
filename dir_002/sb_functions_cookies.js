function setCookie(c_name,value,exdays) {
	if (!exdays) { exdays = 30; }
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : ";expires="+exdate.toUTCString());
	//var path = "/";
	var cookie = c_name + "=" + c_value + ";" + (document.domain ? 'domain=.'+document.domain.replace(/\.*mth\.*/, '').replace(/\.*www\.*/, '') : '') +";path=/;";
	log("Cookie: \n"+cookie+"\n\n");
	document.cookie = cookie;
}

function getCookie(c_name) {
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++) {
		x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
		y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
		x=x.replace(/^\s+|\s+$/g,"");
		if (x==c_name) { return unescape(y); }
	}
}
