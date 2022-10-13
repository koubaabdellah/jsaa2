/*Methods Added by Krishna-setPlaceHolder,reSetPlaceHolder will be moved to a central file
TODO -reSetPlaceHolder is yet to be called
By doing the same,we are trying to save good amount of code redundancy*/

/* Method Level comment
This method will collect all file names and their default value separated by ':' in to an array
The same is passed along with the corresponding formname to the setDefaultValue which will set the default
value to each of them.The same array can then be used while resetting the fields as well
Imp note for the Developer who works on this file:
The arrays used here are one-one with forms.Hence you will as many number of array as the number of forms
Any new text field you are adding has to be added to the corresponding array */

/**@ param formName form name
*@ param textFieldDetailarray array containing id,value of all text boxes
* @return void
*/

/**function getForm(id)  {
	if (browser == 'ns4')  {return myDOM(id).document;}
	else  {return document;}
}*/


function reSetPlaceHolder(textFieldDetailarray) {
 //alert("reset");
    var element;    
    for (i = 0; i < textFieldDetailarray.length; i++) {
    	
            var element = textFieldDetailarray[i].split(":");
            
            var inputfieldid = element[0];
// alert(inputfieldid);
            var placeholderVal = element[1];
//alert(placeholderVal);
            var inputfield= document.getElementById(inputfieldid);
//alert(placeholderVal.value);

            /*when user has not entered anything and we have only default value reaching this method*/
            if (inputfield.value == placeholderVal) {
            	
            	inputfield.value = "";
            }

    }
}

/**@ param formName form name
*@ param textFieldDetailarray array containing id,value of all text boxes
* @return void
*/
/*function getForm(id)  {
	if (browser == 'ns4')  {return myDOM(id).document;}
	else  {return document;}
}*/


function setPlaceHolder(textFieldDetailarray) {

    var element;


    for (i = 0; i < textFieldDetailarray.length; i++) {
    	
            var element = textFieldDetailarray[i].split(":");
            
            var inputfieldid = element[0];
    
            var placeholderVal = element[1];
            
            var inputfield= document.getElementById(inputfieldid);
           
            /*when user has not entered anything and we have only default value reaching this method*/
            if(inputfield.value=='')
            	{

            inputfield.value=placeholderVal;
            	}
 

    }
    
    }  
    
    
    
           



/* This  Method is to get the browser version number */

function msieversion() {
    var ua = window.navigator.userAgent
    var msie = ua.indexOf("MSIE ")

    if (msie > 0)
            return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)))
    else
            // If another browser, return 0
            return 0

}

/*
This method has two responsibilities
1.To set the doubleclick behaviour
2.To set default value to the user id and password field when the browser version is less than IE9
*/

function doubleClickControlFunction() {

    /*if (msieversion() < 11) {
            $('.userNameBox').val("UserID");
            $('.passwordBox').val("Password");
    }*/
    var x = document.forms[1];
    x.secondclick.value = "false";

}

