/****** Custom Js ******/
/**** Author: MKS ******/
/**** Last Update: 05/16/2015 | MKS ******/

$('document').ready(function(){		

	// login invalid credentials script.
    $('#loginToBD').click(function() {
        /*Changes made by reskin dev(non UI) team.Start*/
        var uname = $('.userNameBox').val();
                                var pass = $('.passwordBox').val();
                                /*
                                 * This code will have to be removed once the  resetPlaceHolder() is tested which
                                 * will reside in a common file
                                 */
                                if ($('.userNameBox').val() == 'UserID' &&  ($('.passwordBox').val() =='Password' || $('.passwordBox').val() !='Password') ) {
                                        $('.userNameBox').val("");
                                        $('.passwordBox').val("");
                                }
                                else if ($('.userNameBox').val() != 'UserID' &&  $('.passwordBox').val()=='Password') {
                                        $('.passwordBox').val("");
                                }


                                var y = document.forms[1];
                                if (y.secondclick.value == "true") {
                                        window.location = "/portal/index.jsp";
        }else {

                                        y.secondclick.value = "true";
                                        //alert(getForm('loginArea').forms[0].name);


                                        document.forms[0].submit();
        }
                                  /*Changes made by reskin dev(non UI) team.END*/
		});
		
		// Top bar welcome dropdown.	
		$('.boxlink').mouseover(function(){
			$('.userDetailsWrapper').toggle();
		});
		$('.boxlink').click(function(){			
			$('.userDetailsWrapper').toggle();
		});
		$('#imgclose').click(function(){
			$('.userDetailsWrapper').toggle();
		});
		
		// Comapny Nav Shorcut dropdown.	
		$('.shortcutbox').mouseover(function(){
			$('.shortcutWrapper').toggle();			
		});
		$('.shortcutbox').click(function(){
			$('.shortcutWrapper').toggle();			
		});
		$('#close').click(function(){
			$('.shortcutWrapper').toggle();
		});
			    	
   });

   	// login page background script.
    $(function() {
        var images = ['img_login_bknd3.jpg', 'img_login_bknd2.jpg', 'img_login_bknd1.jpg', 'img_login_bknd4.jpg', 'img_login_bknd5.jpg', 'img_login_bknd6.jpg','img_login_bknd7.jpg', 'img_login_bknd8.jpg'];
        $('#background_image').css({'background-image': 'url(../images/' + images[Math.floor(Math.random() * images.length)] + ')'});
    });
	// Other page
	$(function() {
    var images = [ 'bkgdimage_340x281_opt1.png','bkgdimage_340x281_opt4.png','bkgdimage_340x281_opt5.png','bkgdimage_340x281_opt6.png','bkgdimage_340x281_opt7.png','bkgdimage_340x281_opt1.png','bkgdimage_340x281_opt8.png','43141732B8260G8796.original.png','44140002E0512B1551.original.png'];
$('#new_image_refresh').css({'background': 'url(/images/' + images[Math.floor(Math.random() * images.length)] + ') bottom no-repeat'});
});

/*Update Profile new*/

 $(document).ready(function () {
		
/***** Scroll Bar for Asigned company inside****/	
	$('.iaa_block').each( function(){
    if ($(this).height() > 165) {
        $(this).css('height', '165px');
        $(this).css('overflow-y', 'scroll');
    }
	});
	$('.aa_block').each( function(){
			if ($(this).height() > 115) {
				$(this).css('height', '115px');
				$(this).css('overflow-y', 'scroll');
			}
			});
			
		/***** Scroll Bar Create User ****/
		$('.scroll_box').each( function(){
		if ($(this).height() > 120) {
			$(this).css('height', '120px');
			$(this).css('overflow-y', 'scroll');
		}
		});	
            $(".plusminus_temp").click(function () {

                if ($(this).parents().next('.blockContent').is(':visible')) {
                    $(this).parents().next('.blockContent').slideUp(300);
                    $(this).removeClass('minus');
                    $(this).addClass('plus');		

                } else {
                    $(this).parents().next('.blockContent').slideDown(300);
                    $(this).removeClass('plus');
                    $(this).addClass('minus');
                     }

                });



		$(".plusminus").click(function () {          
                   

                if ($(this).parents().next('.blockContent').is(':visible')) {

                    $(this).parents().next('.blockContent').slideUp(300);

                    var elementTitle = $(this).attr('alt');

                    var newtitle = "Activate to expand "+ elementTitle;                   

                    $(this).attr('title', newtitle);
			
		    $(this).html("<img src=\"../images/plus.png\" alt=\""+newtitle+"\"/>");
                    

                } else {
                    $(this).parents().next('.blockContent').slideDown(300);

                    var eleTitle = $(this).attr('alt');

                    var netitle = "Activate to collapse "+ eleTitle;                   

                    $(this).attr('title', netitle);		

                    $(this).html("<img src=\"../images/minus.png\" alt=\""+netitle+"\"/>");
                    

                 }
		
                
	});
 /***** Scroll Bar Asigned company accordion****/

 /***** Scroll Bar for Table ****/	
	$('.scroll_tbl1').each( function(){
    if ($(this).height() > 200) {
        $(this).css('height', '200px');
        $(this).css('overflow-y', 'scroll');
    }
	});
	
/*** Scroll to top **/
			$(window).scroll(function(){
				if ($(this).scrollTop() > 100) {
					$('.scrollup').fadeIn();
				} else {
					$('.scrollup').fadeOut();
				}
			}); 
			
			$('.scrollup').click(function(){
				$("html, body").animate({ scrollTop: 0 }, 600);
				return false;
			});
 		
/*** Menu Accordion ***/

    $(".hasChild").click(function () {
        if ($(this).next(".menuList").is(':visible')) {
            $(this).next(".menuList").slideUp(300);
			$(this).removeClass('m_active');            
        } else {
            $(this).next(".menuList").slideDown(300); 
			$(this).addClass('m_active');
        }
    });
});

/*View user profile*/
$(".red-tooltip").tooltip({
    placement : 'top'
});  
$(document).ready(function(){
    $("[rel='tooltip']").tooltip();
    $('#vts').click(function(){
        $(this).toggleClass('summaryup','summarydown');
        $('#et_toggle').toggle(100);
    });
});


/*Express Ticketing*/
$(function() {
        $('#ticketNumber').val('');
        $('#sst').val('');
    });

    $(document).ready(function() {   
        $('#createTicketButton').on('click', function(e) {
            e.preventDefault();
            window.open('https://expressticketing.acss.att.com/expressticketing/index.html?createTicket=newTicket');
        });

        $('#scc').on('change', function(e) {
            if ($('#scc').val() != 'USA') {
                $('#sst').attr('disabled', true);
            } else {
                $('#sst').attr('disabled', false);
            }
        });

        $('#getStatusButton').on('click', function(e) {
            e.preventDefault();
            var t = $('#ticketNumber').val(),
                st = $('#sst').val(),
                cc = $('#scc').val(),
                validation;

            if (t === '' || t === null) { validation = 1;}
			else { validation = 0; }
            if (cc === '' || cc === null) { validation = 1; }
			else {validation = 0;}

            if (cc == 'USA') {
                if (st === '' || st === null || cc != 'USA') {
                    validation = 1
                } else {
                    validation = 0;
                }
            }
            if (validation === 0) {
                window.open('https://expressticketing.acss.att.com/expressticketing/index.html?t='+t+'&st='+st+'&cc='+cc+'&ticketStatus=ticketStatus');
            }
        })
    });

/*Express Ticketing*/

/* -- Skip Link -- */
 $( document ).ready(function() {
        $(".skiplink").click(function(event){
            // strip the leading hash and declare the content we're skipping to
            var skipTo="#"+this.href.split('#')[1];
            // Setting 'tabindex' to -1 takes an element out of normal 
            // tab flow but allows it to be focused via javascript
            $(skipTo).attr('tabindex', -1).on('blur focusout', function () {
                // when focus leaves this element, 
                // remove the tabindex attribute
                $(this).removeAttr('tabindex');
    
            }).focus(); // focus on the content container
        });
    });
