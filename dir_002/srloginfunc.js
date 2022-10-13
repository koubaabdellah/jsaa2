//this file was added on Aug 19, 20
$('document').ready(function(){		

$('#loginToSRBD').click(function() {
			        
        var uname = $('.userNameBox').val();
                                var pass = $('.passwordBox').val();
                                 
                                var y = document.forms[1];
                                if (y.secondclick.value == "true") {
                                        window.location = "/portal/index.jsp";
                                }
								else{
 
										var unameStatus = userIDCheck(uname);										
										if(unameStatus){
                                        y.secondclick.value = "true";                                        
                                        document.forms[0].submit();
										}
									    else{
								
										var ermsg = "Please enter a valid Username. The Username must be at least 6 characters and at most 12 characters long and will only accept lower-case characters (a-z) and numbers (0-9)";
										$("#elog").remove();
										$("#elog2").addClass("invalidCredentials").text(ermsg);
										
                                        return false;
                                        }										
								        }
                                  
});
});
		 
function submitenter2(myfield, e,textFieldDetailarray1) {

    var code;  
    if (window.event)
            code = window.event.keyCode;  
    else if (e) {
            code = e.keyCode;  
    } else
            return true;

    if (code == 13)  
    {
           var error = document.getElementById("error");
           var uname = $('.userNameBox').val();
           var unameStatus = userIDCheck(uname);
		   if(unameStatus == false){
               var ermsg = "Please enter a valid Username. The Username must be at least 6 characters and at most 12 characters long and will only accept lower-case characters (a-z) and numbers (0-9)";
										$("#elog").remove();
										$("#elog2").addClass("invalidCredentials").text(ermsg);
			  return true;
		   }
		   
	    reSetPlaceHolder(textFieldDetailarray1);		
	    myfield.form.submit();
            return false;
    } else
            return true;
}



function userIDCheck(userlogin){		   
      var alphanumCheck = checkalphaNumFunc(userlogin);
		  			
			if(alphanumCheck){
				return true;
			}
			else{
				return false;
			}			       		
}
		
		 
function checkalphaNumFunc(userlogin){
		  var letters = /^([0-9a-z]){6,12}$/;
          if(userlogin.match(letters))
          {
            return true;
           }
          else
          {
           return false;
          }		  
}