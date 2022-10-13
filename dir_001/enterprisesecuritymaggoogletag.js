var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
(function() {
var gads = document.createElement('script');
gads.async = true;
gads.type = 'text/javascript';
var useSSL = 'https:' == document.location.protocol;
gads.src = (useSSL ? 'https:' : 'http:') + 
'//www.googletagservices.com/tag/js/gpt.js';
var node = document.getElementsByTagName('script')[0];
node.parentNode.insertBefore(gads, node);
})();

var w = window.innerWidth;
var h = window.innerHeight;
var screen_width = screen.width; 
if(w==480)
{
    document.getElementById("aaa").style.display="block";
}

googletag.cmd.push(function() {
var width = document.documentElement.clientWidth;
  var size;
  if (width < 300)         
    size = [88, 31]; // feature phones
  else if (width >=300 && width < 320)
    size = [234, 60];
  else if (width >= 320 && width < 360)
    size = [320, 50]; // smartphones
  else if (width >=360 && width < 480)
    size= [320, 50], [300, 100];
  else if (width >=480 && width < 729)
    size= [468,60];
  else
    size = [728, 90]; // desktops and tablets

googletag.defineSlot('/196957289/enterprisesecuritymag.com-728x90-top-1', [728, 90], 'div-gpt-ad-1460711158849-0').addService(googletag.pubads());
googletag.defineSlot('/196957289/enterprisesecuritymag.com-300x250-right-1', [300, 250], 'div-gpt-ad-1460711262633-0').addService(googletag.pubads());
googletag.defineSlot('/196957289/enterprisesecuritymaghomepageads', [728, 90], 'div-gpt-ad-1554384399750-0').addService(googletag.pubads());
googletag.pubads().enableSingleRequest();
googletag.enableServices();
});  

