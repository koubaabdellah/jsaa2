function escapeHTML(str){str=str.replace(new RegExp("&","g"),"&amp;");str=str.replace(new RegExp("<","g"),"&lt;");str=str.replace(new RegExp(">","g"),"&gt;");str=str.replace(new RegExp("\"","g"),"&quot;");return str;}
function sharing_url(socialType,position,domain){var final_url=document.URL;if((window.location.href.indexOf("/content/prnmedia")>-1)||(final_url.indexOf("prnmedia.prnewswire.com")>-1)){if(domain!==null||domain!==undefined){if(domain==='www.newswire.ca'){final_url=escapeHTML(final_url.replace('/content/prnmedia/us/en/','/content/newswire-ca/ca/en/'));final_url=final_url.indexOf("-prnmedia.prnewswire.com")>-1?escapeHTML(final_url.replace('-prnmedia.prnewswire.com','.newswire.ca')):escapeHTML(final_url.replace('prnmedia.prnewswire.com','newswire.ca'))}
else if(domain==='www.prnewswire.com'){final_url=final_url.replace('/content/prnmedia/','/content/prnewswire/');final_url=final_url.indexOf("-prnmedia.prnewswire.com")>-1?final_url.replace('-prnmedia.prnewswire.com','.prnewswire.com'):escapeHTML(final_url.replace('prnmedia.prnewswire.com','prnewswire.com'));}}
if($('#langValue').val()==='fr'&&domain!='www.newswire.ca'){final_url=final_url.replace("/fr/",'/');}else if($('#langValue').val()==='de'||$('#langValue').val()==='es'){final_url=final_url.replace("/de/",'/');final_url=final_url.replace("/es/",'/');}}else{final_url=escapeHTML(document.URL);}
var sharingTitle=document.querySelector("meta[id='sharingTitle']").getAttribute("content");var sharingDesc=document.querySelector("meta[id='sharingDesc']").getAttribute("content");var metatags=document.getElementsByTagName('meta');var shareimag='';for(var i=0;i<metatags.length;++i){var metaImage=metatags[i];if(metaImage.getAttribute('property')==="og:image"){shareimag=document.querySelector("meta[property='og:image']").getAttribute("content");break;}}
var link="";if(socialType==='facebook'){link="https://www.facebook.com/sharer/sharer.php?u="+final_url+"&t="+sharingTitle;window.open(link,'_blank','height=485,width=700');shareIt(this,'Facebook',position);}
else if(socialType==='twitter'){link="https://twitter.com/intent/tweet?text="+sharingTitle+"&amp;url="+final_url;window.open(link,'_blank','height=485,width=700');shareIt(this,'Twitter',position);}
else if(socialType=='googleplus'){link="https://plus.google.com/share?url="+final_url;window.open(link,'_blank','height=485,width=700');shareIt(this,'Google+',position);}
else if(socialType==='linkedin'){link="https://www.linkedin.com/shareArticle?mini=true&url="+final_url+"&amp;title="+sharingTitle;window.open(link,'_blank','height=485,width=700');shareIt(this,'LinkedIn',position);}
else if(socialType==='pinterest'){link="http://pinterest.com/pin/create/button/?url="+final_url+"&description="+sharingDesc+"&media="+shareimag;window.open(link,'_blank','height=485,width=700');shareIt(this,'Pinterest',position);}
else if(socialType==='Email'){window.location="mailto:?subject="+encodeURIComponent(sharingTitle)+"&body="+encodeURIComponent(sharingDesc)+":"+final_url;shareIt(this,'Email',position);}}