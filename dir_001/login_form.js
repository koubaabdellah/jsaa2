

function eccUserCookie(){

    var expDate = new Date(1000);
                        var c_name = "ECCUser";
                        c_start=document.cookie.indexOf(c_name + "=");
                        if (c_start != -1){
                                c_start=c_start + c_name.length+1;
                                c_end=document.cookie.indexOf(";",c_start);
                                if (c_end == -1) c_end=document.cookie.length;
                                var eccUserCookie = document.cookie.substring(c_start,c_end).toLowerCase();
                                if(eccUserCookie == "null"){
                                        document.cookie = "ECCUser=;path=/;domain=.att.com;expires=" + expDate.toGMTString();
                            }
                    }
}


                  function alertMsgPopup() {
                            vReturnValue =  showModalDialog('/portal/alertmsg_banner.jsp?prelogin=true', "myWindow", 'dialogHeight:560px;dialogWidth:980px;location:no;status:no;resizable:yes;scroll:yes;center:yes;');
                              }





if (!document.cookie) {
    document.cookie = '@showAlert=0;expires=Friday, 01-Aug-03 23:12:40 GMT'
}




/* The below method is commented out during reskin developement as the method doesnt seems to be referred anywhere.Once the testing is done and proved to be useless,
* this method needs to be removed*/



/*      function awardWinnerPortal() {
    if (confirm("You are leaving AT&T BusinessDirect website. AT&T is not responsible for the website you are about to visit.")) {
            window.open("http://www.stevieawards.com/iba");
    }

} */
/*
* This method is implemented to allow submit on key ENTER from password field
*/

function submitenter(myfield, e,textFieldDetailarray1) {






    var code; //changed the variable keycode to code
    if (window.event)
            code = window.event.keyCode; //changed the variable keycode to code
    else if (e) {
            code = e.keyCode; // Changed this line of code to fix NS 6.01 -- also changed the variable keycode to code
    } else
            return true;

    if (code == 13) //changed the variable keycode to code
    {


	    reSetPlaceHolder(textFieldDetailarray1);
	    myfield.form.submit();
            return false;
    } else
            return true;


}
/*/* The below method is commented out during reskin developement as the method doesnt seems to be referred anywhere.Once the testing is done and proved to be useless,
* this method needs to be removed */

/*      if (document.layers) {
    document.captureEvents(Event.KEYPRESS);
    document.onkeypress = function(evt) {
            if (evt.target.constructor == Input && evt.which == 13) {
                    getForm('loginArea').forms[0].submit();
            }
    };
} */

  /*Method added by reskin dev(non UI) team.Below methods add red color borderline
 * to the userID and password text fields in case of SSV error
 * */
function errorPanel()
{
            $('.userNameBox').addClass('invalidUserName');
            $('.passwordBox').addClass('invalidPassword');
	    $('.field').addClass('invalidPassword');

            $('.invalidCredentials').removeClass('hide');
}
