$(document).ready(function(){var cookieEnabled=navigator.cookieEnabled;if(typeof navigator.cookieEnabled==='undefined'&&!cookieEnabled){document.cookie='testCookie';cookieEnabled=(document.cookie.indexOf('testCookie')!==-1);}
if(!cookieEnabled){return;}
var cookieName='gdpr_cookie_darkreading';var cookie=getCookie(cookieName);cookie=parseInt(cookie);if(isNaN(cookie)){cookie=null;}
if(cookie){return;}
var $banner=$('<div></div>').html(document.gdpr_banner);$banner.prependTo('body');setCookie(cookieName,1,5*365);$('.close-button').click(function(){$banner.hide();});});function getCookie(cname){var name=cname+"=";var decodedCookie=decodeURIComponent(document.cookie);var ca=decodedCookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' '){c=c.substring(1);}
if(c.indexOf(name)==0){return c.substring(name.length,c.length);}}
return "";}
function setCookie(cname,cvalue,exdays){var d=new Date();d.setTime(d.getTime()+(exdays*24*60*60*1000));var expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+";"+expires+";path=/";}