
//
// <hand wave>You do not need to change anything below this line</hand wave>
//

// Run JavaScript after document load
document.addEventListener("DOMContentLoaded", function(){
    // Check cookies for CSS style
	checkCookieCSS();
	// Get URL to build Breadcrumbs
	getURL();
});
// Run JavaScript after document load *** END ***

// Switch CSS style sheet between two .CSS files 
function toggle_style() {
	var el1 = document.getElementById("style-light"),
		el2 = document.getElementById("style-dark"),
		el3 = document.getElementById("style-light-bs"),
		el4 = document.getElementById("style-dark-bs");
	if( el1.disabled ) {
		el1.disabled = false;
		el2.disabled = true;
		el3.disabled = false;
		el4.disabled = true;
		setCookie("style", "style-light", 30);
	} else {
		el1.disabled = true;
		el2.disabled = false;
		el3.disabled = true;
		el4.disabled = false;
		setCookie("style", "style-dark", 30);
	}
}
// Switch CSS style *** END ***

// Set the CSS style sheet per cookie value
function set_style(css) {
	var el1 = document.getElementById("style-light"),
		el2 = document.getElementById("style-dark"),
		el3 = document.getElementById("style-light-bs"),
		el4 = document.getElementById("style-dark-bs");
	if( css == "style-light" ) {
		el1.disabled = false;
		el2.disabled = true;
		el3.disabled = false;
		el4.disabled = true;
	} else {
		el1.disabled = true;
		el2.disabled = false;
		el3.disabled = true;
		el4.disabled = false;
	}
}
// Set the CSS style sheet per cookie value *** END ***

// Close navigation tabs
function closetab(tab){
	var tabEl = document.getElementById(tab)
	$(tabEl).removeClass('active');
	$(".tab-pane").removeClass('active');
	$(".nav-link").removeClass('active');
}
// Close navigation tabs *** END ***

// Close navigation tabs
function closealltabs(){
	var tabEl = document.getElementById("news-tab")
	$(tabEl).removeClass('active');
	var tabEl = document.getElementById("companies-tab")
	$(tabEl).removeClass('active');
	var tabEl = document.getElementById("awards-tab")
	$(tabEl).removeClass('active');
	var tabEl = document.getElementById("events-tab")
	$(tabEl).removeClass('active');
	var tabEl = document.getElementById("sponsored-tab")
	$(tabEl).removeClass('active');
	var tabEl = document.getElementById("about-tab")
	$(tabEl).removeClass('active');
	$(".tab-pane").removeClass('active');
	$(".nav-link").removeClass('active');
}
// Close navigation tabs *** END ***

// In The News 
new Dragdealer('inthenews-carousel', {
  steps: 16,
  speed: 0.3,
  loose: true,
  requestAnimationFrame: true
});
// In The News *** END ***

// Subtaxonomies slider 
new Dragdealer('inthetaxonomies-carousel', {
  steps: 16,
  speed: 0.3,
  loose: true,
  requestAnimationFrame: true
});
// Subtaxonomies slider *** END ***

// Set Cookie
function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
// Set Cookie *** END ***

// Get Cookie and parse values
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
// Get Cookie and parse values *** END ***

// Get css style from Cookie
function checkCookieCSS() {
  // Check if Cookies are enabled
  if(navigator.cookieEnabled) {
	// Get the chosen Style from the Cookies
    let css = getCookie("style");
	// If CSS is not blank, use that CSS style
    if (css != "") {
      set_style(css);
    } else {
	  // If no chosen CSS set Light color scheme
      setCookie("style", "style-light", 30);
    }
  }else{
	  // Cookies not enabled - Boo!
  }
}
// Get css style from Cookie *** END ***

// Build breadcrumbs from URL
function getURL() {
  let url = (window.location.pathname);
  let breadcrumbs = "";
  var urlArray = url.split('/');
  for (i = 1; i < urlArray.length; i++) {
    breadcrumbs = breadcrumbs + '/' + urlArray[i];
	$("ol#breadcrumb").append('<li class="breadcrumb-item'+ (i+1==urlArray.length?' active" aria-current="page">' + urlArray[i] :'">' + '<a href="' + breadcrumbs + '">' + urlArray[i] + '</a>') + '</li>');
  }
}
// Build breadcrumbs from URL *** END *** 

