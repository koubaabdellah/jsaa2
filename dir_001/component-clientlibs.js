var isFirst;function getParam(param){var url=window.location.href.slice(window.location.href.indexOf('?')+1).split('&');for(var i=0;i<url.length;i++){var params=url[i].split("=");if(params[0]==param)
return params[1];}
return false;}
function updateQueryStringParam(key,value){var baseUrl=[location.protocol,'//',location.host,location.pathname].join('');urlQueryString=document.location.search;var newParam=key+'='+value,params='?'+newParam;if(urlQueryString){keyRegex=new RegExp('([\?&])'+key+'[^&]*');if(urlQueryString.match(keyRegex)!==null){params=urlQueryString.replace(keyRegex,"$1"+newParam);}else{params=urlQueryString+'&'+newParam;}}
window.history.replaceState({},"",baseUrl+params);return baseUrl+params;}
$(window).on('load',function(){$('a[href="javascript:void(0)"], a[href="#"]').each(function(){$(this).attr('href','');$(this).removeAttr('href');if($(this).attr('onclick')!=undefined){$(this).css('cursor','pointer');}});})
if($('countryRecaptcha')){var reCaptchaCallback=function(){var submitButton=document.getElementById('submitButton');if(typeof submitButton==="undefined"||submitButton===null){submitButton=document.getElementById('contact-modal-submit');}
submitButton.disabled=true;var curSitekey='6Ld6GVcUAAAAAJC2kSR-St_6afAiFKyxeDqOGojr';var url=window.location.pathname;var language=url.split('/');var languageCode='en';if($("#langValue").val()!=undefined&&$("#langValue").val()!='')
{languageCode=$("#langValue").val();}
grecaptcha.render('countryRecaptcha',{sitekey:curSitekey,hl:languageCode,callback:'correctCaptcha','expired-callback':'expiredCaptcha'});}
var correctCaptcha=function(response){console.log(response);var submitButton=document.getElementById('submitButton');if(typeof submitButton==="undefined"||submitButton===null){document.getElementById('contact-modal-submit').disabled=false;}else{document.getElementById('submitButton').disabled=false;}};var expiredCaptcha=function(){submitButton.disabled=true;};}
$(window).on('load',function(){if($('.bannerwithcaption').length>0){var captionHeight='calc(100% - '+$('.bannerwithcaption .jumbotron--minor').outerHeight(true)/2+"px"+')';$('.bannerwithcaption .jumbo-image').css('height',captionHeight)}})