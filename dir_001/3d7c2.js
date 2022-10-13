'use strict';var StrCPVisitsAjaxCount=function($){var zeroPad=function zeroPad(num,places){return String(num).padStart(places,'0');};console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");console.log('Strongetic Page Visits Counter Lite - JS status = OK');if(typeof StrCPVisits_page_data==="undefined"){console.log('Strongetic Page Visits Counter Lite - PHP status = FALSE');}else{console.log('Strongetic Page Visits Counter Lite - PHP status = OK');}
console.log("↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑");$.ajax({url:STR_CPVISITS.ajax_url,type:'POST',data:{action:'StrCPVisits_update_total_visits',page_data:StrCPVisits_page_data,security:STR_CPVISITS.security},success:function success(response){if(response.success===true){handleResponse(response.data);}}});function handleResponse(data){console.log("===================================================================");if(typeof StrCPVisits_page_data!=="undefined"){console.log(STR_CPVISITS.text_page_name+": "+StrCPVisits_page_data.title+"");}else{console.log(STR_CPVISITS.text_cannot_access_page_name);}
console.log("===================================================================");if(typeof data.msg!="undefined"){console.log(STR_CPVISITS.text_message+": "+data.msg);}
if(typeof data.msg_not_counting_the_page!="undefined"){console.log("-------> "+data.msg_not_counting_the_page);}
if(typeof data.page_visits_on_refresh!="undefined"&&data.page_visits_on_refresh!=null&&data.page_visits_on_refresh!=""){console.log(STR_CPVISITS.text_total_page_visits+': '+data.page_visits_on_refresh);updatePageCounter(data.page_visits_on_refresh);}
if(typeof data.page_visits!="undefined"&&data.page_visits!=null&&data.page_visits!=""){if(typeof data.page_visits.nr!="undefined"){if(data.page_visits.nr==null||data.page_visits.nr==""){console.log(STR_CPVISITS.text_total_page_visits+": N/A");}else{console.log(STR_CPVISITS.text_total_page_visits+": "+data.page_visits.nr);updatePageCounter(data.page_visits.nr);}}}
if(typeof data.total_visits!="undefined"){if(typeof data.total_visits.nr!="undefined"){console.log(STR_CPVISITS.text_total_website_visits+": "+data.total_visits.nr);updateWebsiteCounter(data.total_visits.nr);}}
console.log("===================================================================");}
function updatePageCounter(nr){nr=zeroPad(nr,5);$('#strcpv-page-counter').html("<p>"+nr+"</p>");}
function updateWebsiteCounter(nr){nr=zeroPad(nr,5);$('#strcpv-website-counter').html("<p>"+nr+"</p>");}}(jQuery);