/****** Custom2 Js *****/
/**** Author: MKS ******/
/**** Last Update: 05/16/2015 | MKS ******/
/*****************************************/

$('document').ready(function(){		
	$('.clickBD').click(function(){		
		if($('.clickBD').hasClass('dbpopupAreaHead')){
			//$(this).next('.dbpopupAreaContent').hide();
			$('.dbpopupAreaContent').hide();
			//$(this).removeClass('dbpopupAreaHead');
			$('.clickBD').removeClass('dbpopupAreaHead');
			}
		else{
			$(this).next('.dbpopupAreaContent').show();
			$(this).addClass('dbpopupAreaHead');}	
				
	});

	$('.dbpopupAreaContent').mouseleave(function(){ 
		$('.clickBD').removeClass('dbpopupAreaHead');
		$(this).hide();
	});
	$('ul.ul_db_popup > li:last-child').focusout(function(){ 
		$('.clickBD').removeClass('dbpopupAreaHead');
		$('.dbpopupAreaContent').hide();
	});
});
/************* Pop Up ********************/
function popuptrigger(pdivID)
	{

	var cdiv = pdivID;
	var divID = '#' + pdivID;
	$('.blanket1').css({'display': 'block'});
	if(cdiv != divID){ 	$(divID).css({'display': 'block'});	 }
	else {	$(pdivID).css({'display': 'block'}); }
	document.getElementsByTagName("body")[0].style.overflowY = (over?"hidden":"scroll");
    document.getElementsByTagName("html")[0].style.position = (over?"fixed":"static");
    document.getElementsByTagName("html")[0].style.height = (over?"100%":"auto");
    
	}
function popupClose(pdivID)
	{
	var cdiv = pdivID;
	var divID = '#' + pdivID;
	$('.blanket1').css({'display': 'none'});
	if(cdiv != divID){ 	$(divID).css({'display': 'none'});	 }
	else {	$(pdivID).css({'display': 'none'}); }
	}

function externalCompPopupClose(pdivID,url)
{		
		popupClose(pdivID);
                newwindow(url);

}

function isCSSEnabled()
{	

	var val;
	var el=document.getElementById("checkDummy");
	if(document.getComputedStyle)
		val=document.defaultView.getComputedStyle(el,null).getPropertyValue("margin-top");
	else
		val=el.currentStyle.marginTop
	
	if(val=="1px")
		return true;
	else
		return false;

	}


/*View user profile*/
$(".red-tooltip").tooltip({
    placement : 'top'
});

$(document).ready(function(){
var count = $(".alertZonetext li").length;
if (count == 1)
	{$('.brdr').css({'border-bottom': 'none'}); }
else {$('.brdr').css({'border-bottom': '#aeaeae solid 1px'}); }
});

$(document).ready(function(){
    $("[rel='tooltip']").tooltip();

    $('#vts').click(function(){
        $(this).toggleClass('summaryup','summarydown');
        $('#et_toggle').toggle(100);
    });

});

/* For Dynamic app */
$('.scroll_bd').each( function(){
    if ($(this).height() > 200) {
        $(this).css('height', '200px');
        $(this).css('overflow-y', 'scroll');
    }
	});
	

