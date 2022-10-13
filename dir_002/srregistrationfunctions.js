//start - <!--#include virtual="/small_business/includes/common.js"-->
function isDigit(value)
{
   for (i = 0; i < value.length; i++)
   {
      ch = value.substring(i, i + 1);
      if ((ch < "0") || (ch > "9"))
      {
          return false;
      }
   }
   return true;
}

function checkAccountNumber()
{
  var accountNum, accountType;
  var ver = navigator.appVersion;

  var   strNSMsg  = "",
        strIEMsg  = "",
        strMsg    = "";

  var strAltMsg = "Enter the first 3 digits of your account number.";
  var strError  = "Alphanumeric characters are not accepted.  Please, try again using numeric characters only.";

  strIEMsg  = "Please enter first 3 digits of your account number to determine eligibility. ";
  strNSMsg  = "Please enter the first 3 digits of your account number to determine eligibility. ";

  // Display informational message
  // If Bowser version <4.0, can't display more that 47 chars. on Prompt line.
  if (ver[ver.indexOf("=")+1] < 4)
  {
     accountNum = prompt(strAltMsg, "");
  } else
  {
        if (navigator.appName.indexOf("Netscape") != -1)
        {
            accountNum = prompt(strNSMsg + strMsg, "");
        }
        else//if IE
        {
            accountNum = prompt(strIEMsg + strMsg, "");
        }
  }
  //Check Account number
  if (accountNum)
  {
      accountType = accountNum.substring(0,3);                //Get the first three chars.
      if ( !isDigit(accountNum) )
      {
           alert(strError);
           return false;
      }
      if ( (accountType == "142") || (accountType == "146") ||
           (accountType == "166") || (accountType == "176") ||
           (accountType == "177") || (accountType == "191") ||
           (accountType == "196") )
      {
              strMsg = "Unfortunately, we're unable to provide online registration for ";
              strMsg = strMsg + "your AT&T business service account.\n\n";
              strMsg = strMsg + "Please, contact your sales executive to assist you in ";
              strMsg = strMsg + "registering for AT&T Online Customer Service.\n\n ";
              strMsg = strMsg + "Note: AT&T Online Customer Service is not available  ";
              strMsg = strMsg + "for AT&T wireless, Internet, and local service accounts.\n\n";
              alert(strMsg);
              return false;
      } else
      {// Account was OKAY
              strMsg = "Good news -- your AT&T business service account\n";
              strMsg = strMsg + " is eligible To register online.\n\n";
              strMsg = strMsg + "Please make sure that the account you wish to register\n";
              strMsg = strMsg + "is not an AT&T wireless, Internet, or local service\n";
              strMsg = strMsg + "account -- As these services are not available on\n";
              strMsg = strMsg + "AT&T Online Customer Service at this time.\n\n";
              strMsg = strMsg + "Please, click CANCEL to end the registration process.\n";
              strMsg = strMsg + "Or, click OK to continue. ";
              return confirm(strMsg);
      }
   }
   return false;
}

var wdwNewWindow = null;

function openPopupWindow (sURL,iWidth,iHeight)
{
        var url = sURL;
        var i = navigator.appVersion.indexOf(" ")
     if (navigator.appName == "Netscape" &&
        (navigator.appVersion.substring(0,i)=="4.06" ||
          navigator.appVersion.substring(0,i)=="4.08") ) {
          url = sURL.substring(sURL.indexOf("http"));
        }

        wdwNewWindow = window.open (url, 'newWindow', 'toolbar=no,width=' +
            iWidth + ',height=' + iHeight + ',toolbar=no,resize=no,location=no,scrollbars=yes');

        wdwNewWindow.focus();
} //openIntPopupWindow

function openLogoutWindow (logoutURL)
{
        self.name = "SBCHOME";

        window.location = logoutURL;
}

function openGenPopupWindow (sURL,iWidth,iHeight)
{
        var url = sURL;
     var i = navigator.appVersion.indexOf(" ")
     if (navigator.appName == "Netscape" &&
        (navigator.appVersion.substring(0,i)=="4.06" ||
          navigator.appVersion.substring(0,i)=="4.08") ) {
          url = sURL.substring(sURL.indexOf("http"));
        }

        wdwNewWindow = window.open (url, 'newWindow', 'toolbar=no,width=' +
            iWidth + ',height=' + iHeight + ',scrollbars=yes,resizable=yes');
} //openIntPopupWindow

//open windows, call spare_inq & passes npa-nxx-line as qry string
function processTollFree(fNpa, fExchange, fLine, flag) {
   var npa = fNpa.value;
   var exchange = fExchange.value;
   var line = fLine.value;

   var url = '/small_business/includes/spare_inq.jhtml?npa='+npa.toUpperCase()+'&nxx='+exchange.toUpperCase()+'&line='+line.toUpperCase()+'&flag='+flag.toUpperCase();
   //alert('url='+url);

   openPopupWindow(url, 400, 450);

} //processTollFree

//end - <!--#include virtual="/small_business/includes/common.js"-->

//start - <!--#include virtual="/small_business/includes/check_text_js_edit.js"-->

function checkText(obj, req, len_min, len_max, base_type,specialChars, label)
 { return checkText(obj, req, len_min, len_max, base_type, specialChars, label, 0); }

function checkText(obj, req, len_min, len_max, base_type, specialChars, label, check_status)
 {
   var ch = "";
   var i = 0;
   var value;

   // Trim off any leading/trailing blanks in the value for non-password fields.
   if (base_type != "PWD") obj.value = trim(obj.value);
   value=obj.value;
   if (!checkReq(obj, value, req, label, check_status))
      return false;
   if (value.length < len_min)
     {
                if(label == 'User Login') {
                        errorMsg = "User Login contains an invalid value: " +value+". Your User Login must be between 6 and 12 characters and may contain letters and/or numbers a-z, 0-9.";
                        return handleError(obj, errorMsg, check_status);
                }
                else
        if  (label == 'Account Number'){
                        errorMsg = "Account Number contains an invalid value: " +value+". Account Number must be 13 digits.";
                        return handleError(obj, errorMsg, check_status);
        }
                else
        if  (label == 'Password'){
                        errorMsg = label + " format is invalid. A " + label + " must have a minimum of 8 but no more than 16 characters.";
                        return handleError(obj, errorMsg, check_status);
        }
        else {
                    errorMsg = "Input value for " + label + " must be at least " + len_min + " characters.";
            return handleError(obj, errorMsg, check_status);
        }
     }
   if (value.length > len_max)
     { errorMsg = "Input value for " + label + " contains too many characters.  Only " + len_max + " characters may be entered";
       return handleError(obj,errorMsg, check_status);
     }
   if (base_type == "N" || base_type == "n")
     { return isValidNType(obj, value, specialChars, label, check_status); }
   else if (base_type == "A")
     { return isValidAType(obj, value, specialChars, label, check_status); }
   else if (base_type == "a")
     { return isValidLowerAType(obj, value, specialChars, label, check_status); }
   else if (base_type == "AN")
     { return isValidANType(obj, value, specialChars, label, check_status); }
   else if (base_type == "an")
     { return isValidLowerANType(obj, value, specialChars, label, check_status); }
   else if (base_type == "PWD" && label == 'Password')
     {
       if (isValidANType(obj, value, specialChars, label, check_status))
       { return isValidPassword(obj, value, specialChars, label, check_status); }
       else
       { return false; }
     }
   else if (base_type == "X")
     { return true;}
   else if (base_type != "PWD" && base_type != "pwd")
     { errorMsg = "INTERNAL APPLICATION ERROR: " + label + " has invalid base_type " + base_type;
       return handleError(obj,errorMsg, check_status);
     }
   return true;
 }

function isWildCardChar( value) {
        for (i=0; i<value.length; i++) {
                if(value.charAt(i) == "*") {
                        alert("Please remove * from the above field(s).");
                        return false;
                }
        }
        return true;
}
function isValidPassword(obj, value, specialChars, label, check_status)
 {
   numCount = 0;
   alphaCount = 0;
   for (i=0; i<value.length; i++)
   { ch = value.substring(i, i+1);
     if (isNumChar(ch)) {
                numCount++;
     }
     if (isAlphaChar(ch) || isLowerAlphaChar(ch)) {
                alphaCount++;
     }
   }
   if (numCount < 2)
   {
     errorMsg = label + " format is invalid. A " + label + " must have at least 2 numbers: 0-9.";
         handleError(obj, errorMsg, check_status);
   }
   if (alphaCount < 2)
   {
     errorMsg = label + " format is invalid. A " + label + " must have at least 2 alphabetic characters.";
         handleError(obj, errorMsg, check_status);
   }
   if (numCount < 2 || alphaCount < 2)
   {
     return false;
   }
   return true;
 }

function isValidNType(obj,value, specialChars, label, check_status)
 {
   for (i=0; i<value.length; i++)
   { ch = value.substring(i, i+1);
     if (!isNumChar(ch) && specialChars.indexOf(ch) < 0) {
        if  (label == 'Account Number'){
                  errorMsg = "Account Number contains an invalid character: " +ch+". Account Number must be 13 digits.";
                  handleError(obj, errorMsg, check_status);
          return false;
        }
        else {
         errorMsg = label+ " field contains an invalid character: "+ ch +". The following characters are allowed: 0-9.";
         handleError(obj, errorMsg, check_status);
         return false;
       }
     }
   }
   return true;
 }

function isValidAType(obj,value, specialChars, label, check_status)
 { if (specialChars == "" || specialChars == null)
   { for (i=0; i<value.length; i++)
     { ch = value.substring(i, i+1);
          if (!isAlphaChar(ch))
            { errorMsg = label + " field contains an invalid character: " + ch + ". The following characters are allowed: a-z A-Z.";
              handleError(obj,errorMsg, check_status);
              return false;
             }
     }
   }
   else
    { for (i=0; i<value.length; i++)
      { ch = value.substring(i, i+1);
        if (!isAlphaChar(ch) && specialChars.indexOf(ch) < 0)
           { errorMsg = label + " field contains an invalid character: " + ch + ". The following characters are allowed:\n a-z A-Z" + formatChars(specialChars) + ".";
             handleError(obj,errorMsg, check_status);
             return false;
           }
      }
    }
    return true;
  }

function isValidLowerAType(obj,value, specialChars, label, check_status)
 { if (specialChars == "" || specialChars == null)
     { for (i=0; i<value.length; i++)
        { ch = value.substring(i, i+1);
          if (!isLowerAlphaChar(ch))
            { errorMsg = label + " field contains an invalid character: " + ch + ". The following characters are allowed: a-z ";
              handleError(obj,errorMsg, check_status);
              return false;
             }
        }
     }
   else
     { for (i=0; i<value.length; i++)
        { ch = value.substring(i, i+1);
          if (!isLowerAlphaChar(ch) && specialChars.indexOf(ch) < 0)
            { errorMsg = label + " field contains an invalid character: " + ch + ". The following characters are allowed:\n a-z " + formatChars(specialChars) + ".";
              handleError(obj,errorMsg, check_status);
              return false;
            }
        }
      }
    return true;
  }

function isValidANType(obj,value, specialChars, label, check_status)
 { if (specialChars == "" || specialChars == null)
    { for (i=0; i<value.length; i++)
       { ch = value.substring(i, i+1);
         if (!isAlphaNumChar(ch))
            {
            errorMsg = label + " field contains an invalid character: " + ch + ". The following characters are allowed: a-z A-Z 0-9";
            handleError(obj,errorMsg, check_status);
            return false;
          }
       }
    }
   else
    { for (i=0; i<value.length; i++)
       { ch = value.substring(i, i+1);
         if (!isAlphaNumChar(ch) && specialChars.indexOf(ch) < 0)
            { errorMsg = label + " field contains an invalid character: " + ch + ". The following characters are allowed:\n a-z A-Z 0-9" + formatChars(specialChars) + ".";
            handleError(obj,errorMsg, check_status);
            return false;
          }
       }
    }
   return true;
  }

function isValidLowerANType(obj,value, specialChars, label, check_status)
 {  if(label == 'User Login')
    { for (i=0; i<value.length; i++)
       { ch = value.substring(i, i+1);
         if (!isLowerAlphaNumChar(ch))
            { errorMsg = label + " contains an invalid character: " + ch + ". Your User Login must be between 6 and 12 characters and may contain letters and/or numbers a-z, 0-9.";
            handleError(obj,errorMsg, check_status);
            return false;
          }
       }
    }
   else
    { for (i=0; i<value.length; i++)
       { ch = value.substring(i, i+1);
         if (!isLowerAlphaNumChar(ch) && specialChars.indexOf(ch) < 0)
            { errorMsg = label + " field contains an invalid character: " + ch + ". The following characters are allowed:\n a-z 0-9" + formatChars(specialChars) + ".";
            handleError(obj,errorMsg, check_status);
            return false;
          }
       }
    }
   return true;
  }

function checkEmail(obj, label, check_status)
 {
  if (obj.value != null && obj.value != "")
  {
    if (obj.value.indexOf('@') < 0 ||
        obj.value.indexOf('.') < 0   ) {
       errorMsg = label + " field is in an invalid format.  At least one period (.) and \"@\" sign is required.";
       return handleError(obj, errorMsg, check_status);
    }
  }
  return true;
}

function PWDCrossCheck(pass1, label1, pass2, label2, login1, label3)
 {
   if ((pass1.value != null && pass1.value != "") && (login1.value != null && login1.value != ""))
   {
     if (pass1.value == login1.value)
     {
       errorMsg = "Your " + label3 + " and " + label1 + " cannot be the same.";
       return handleError(pass1, errorMsg, 1);
     }
   }

   if ((pass1.value != null && pass1.value != "") && (pass2.value != null && pass2.value != ""))
   {
     if (pass1.length != pass2.length || pass1.value != pass2.value)
     {
       errorMsg = label1 + " and " + label2 + " fields do not match.";
       return handleError(pass1, errorMsg, 1);
     }
   }
 }
//end - <!--#include virtual="/small_business/includes/check_text_js_edit.js"-->

//start - <!--#include virtual="/small_business/includes/common_js_edits.js"-->
var isNNBrowser = (navigator.appName.indexOf("Netscape")!=-1);

function autoTabMove(field1, field2, len, e)
{
        var keyCode = (isNNBrowser) ? e.which : e.keyCode;
        var filter = (isNNBrowser) ? [0,8,9] : [0,8,9,16,17,18,37,38,39,40,46];

        if(field1.value.length == len && !containsElement(filter,keyCode) && field2 != null )
        {
                //field1.value = field1.value.slice(0, len);
                field2.focus();
        }
        return true;
}

function containsElement(arr, ele)
{
        var found = false, index = 0;
        while(!found && index < arr.length)
    {
                if(arr[index] == ele)
                        found = true;
                else
                        index++;
        }
        return found;
}

function formatChars(charList)
{ var fmtStr=" ";
var c=0;
while (c<charList.length) {
if (charList.charAt(c)!=' ') fmtStr=fmtStr+charList.charAt(c)+" ";
else { fmtStr=fmtStr+"space ";}
c=c+1;
} return fmtStr; }

function trim(value)
 { var startPos;
   var endPos;
   var c=0;
   while (c<=value.length-1 && value.charAt(c)==' ')
     c++;
   startPos=c;
   c=value.length-1;
   while (c>=0 && value.charAt(c)==' ')
     c--;
   endPos=c+1;
   if (endPos<=startPos) value='';
   else value=value.substring(startPos,endPos);
   return value;
 }

function escapeTailSpace(str)
 { var last_index = 0;
   var temp = "";

   if (str == null || str == "")
     return temp;
   last_index=str.length;
   temp = str.substring(last_index-1, last_index)
   while (last_index > 0 && temp == " ")
     { last_index--;
       temp = str.substring(last_index-1, last_index)
     }
   return str.substring(0, last_index);
 }

function escapeHeadSpace(str)
 { var i = 0;
   var temp = "";
   if (str == null || str == "")
    return temp;
   while (str.substring(i, i+1) == " " && i < str.length)
      i++;
   return str.substring(i, str.length);
 }

function isNumChar(ch)
 {
   if (ch >= '0' && ch <= '9')
      return true;
   return false;
 }

function isAlphaChar(ch)
 {
   if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z'))
      return true;
   return false;
 }

function isAlphaNumChar(ch)
 {
   if (isNumChar(ch) || isAlphaChar(ch))
      return true;
   return false;
 }

function isLowerAlphaChar(ch)
 {
   if ((ch >= 'a' && ch <= 'z'))
      return true;
   return false;
 }

function isLowerAlphaNumChar(ch)
 {
   if (isNumChar(ch) || isLowerAlphaChar(ch))
      return true;
   return false;
 }

function handleError(obj, str, check_status)
 { if (errorField == null && check_status == 1 && obj != "") errorField=obj;
   if (check_status != 1)
   {
    // alert(str);
   if($('#popUpDiv1').length){
                    $('.popBody>p').html(str);
                    popuptrigger('popUpDiv1');}
                    else
                       alert(str);
   }
   else
   { if (totalErrorCount >= totalErrorLimit)
       return true;
      totalErrorCount++;
       if($('#popUpDiv1').length){
          errorMsgBuffer += "<br>(" + totalErrorCount + ")  " + str+"<br>";
          }
      else

      errorMsgBuffer += "\n\n(" + totalErrorCount + ")  " + str;
      if (totalErrorCount >= totalErrorLimit)
        { //errorMsgBuffer += "\n\n... too many errors ..."
          return true;
        }
   }
   return false;
 }

function checkReqValueOnly(obj, val, req, label)
{
        if (req == 1 && (obj.value == null || obj.value =="")) {
                if (val != "nofocusset") {
                        if (errorField == null) errorField=obj;
                }
                return false;
        }
        return true;
}

function checkReq(obj, val, req, label, check_status)
 {
   if (check_status == 1) {
     if (req == 1 && (obj.value == null || obj.value ==""))
     {
       if (missingFlds == "")
         { missingFlds = label; }
       else
         { missingFlds = missingFlds + ", " + label; }
       if (val != "nofocusset")
         { if (errorField == null) errorField=obj; }
       return false;
     }
     return true;
   }
   else
   {
     if (req == 1 && (val == null || val ==""))
       { errorMsg = "The " + label + " is required.  Please enter a value for this field.";
         handleError(obj, errorMsg, check_status);
         return false;
       }
     if (req == 0 && (val == null || val ==""))
       { return false; }
     return true;
   }
 }

function toDigits(str)
 {
   var ch = "";
   var junk = "";

   if (str != null && str != "")
     { for (i=0; i<str.length; i++)
         { ch = str.substring(i, i+1);
           if (ch >= '0' && ch <= '9')
             junk += ch;
         }
     }
   return junk;
 }
//end - <!--#include virtual="/small_business/includes/common_js_edits.js"-->

//start - <!--#include virtual="/small_business/includes/check_select_js_edit.js"-->
function checkSelect(obj, val, req, label, check_status)
 {
   var i = 0;

   if ( req != 1)
   { return true; }

   if (! obj.options[0].selected)
   { return true; }
   else
   {
     if (check_status == 1)
     {
       if (missingFlds == "")
         { missingFlds = label; }
       else
         { missingFlds = missingFlds + ", " + label; }
       if (val != "nofocusset")
         { if (errorField == null) errorField=obj; }
       return false;
     }
     else
     {
       errorMsg = "The " + label + " field is required.  Please select a value from the list.";
       return handleError(obj, errorMsg, 1);
     }
   }
   return false;
 }
//end - <!--#include virtual="/small_business/includes/check_select_js_edit.js"-->

//start - <!--#include virtual="/small_business/includes/check_currency_js_edit.js"-->
function checkCurrency(obj, req, min, max, label)
{ return checkCurrency(obj, req, min, max, label, 0); }

function checkCurrency(obj, req, min, max, label, check_status)
{
  //alert("F: checkCurrency: " + "," + req + "," + min + "," + max + "," + label);
  var value="", ch = '', spChar="$,.";
  var real="0", decimal="00";
  var i = 0, decimalCount = 0, realD=0, fractionD=0;

  value = escapeHeadSpace(obj.value);
  value = escapeTailSpace(value);
  obj.value = value;
  if (!checkReq(obj,value, req, label, check_status))
     return false;

  if(value < 0)
    { errorMsg = "Total Amount Due is in an invalid format. Total Amount Due must be >= 0.00. If you have a credit balance, please enter 0.00 in this field.";
      return handleError(obj,errorMsg, check_status);
    }
  for (i=0; i<value.length; i++)
    { ch = value.substring(i, i+1);
      if (!isNumChar(ch) && spChar.indexOf(ch) < 0)
            { errorMsg = label + " field contains an invalid character: " + ch + ". The following characters are allowed: 0-9 .";
          return handleError(obj,errorMsg, check_status);
        }
      else if (ch == '.')
          decimalCount++;
    }
  if (decimalCount > 1)
            { errorMsg = "Invalid value in the " + label + " field.  Only one '.' character may appear in this field.";
      return handleError(obj,errorMsg, check_status);
    }
  if (decimalCount == 0)
      real = value;
  else
    { decimal = value.substring(value.indexOf('.'),value.length);
      real = value.substring(0,value.indexOf('.'));
      decimal = toDigits(decimal);
      if (decimal == null || decimal.length == 0)
        decimal = "00";
      else
        { if (decimal.length == 1)
            decimal += "0";
          else if (decimal.length > 2)
            decimal = decimal.substring(0,2);
        }
    }
   real = toDigits(real);
   if (real != null && real.length != 0)
    { i= 0; ch = real.substring(i , i+1);
      while (ch == '0')
       { i++; ch = real.substring(i , i+1); }
      real = real.substring(i, real.length);
    }
   if (real == null || real.length == 0)
      real = "0";
  if (parseFloat(real) < parseFloat(min))
    { errorMsg = "Value for " + label + " must be at least $ " + min + ".";
      return handleError(obj,errorMsg, check_status);
    }
  if (parseFloat(real) >= parseFloat(max))
    { errorMsg = "Value for " + label + " is too big.  Please enter a value less than $ " + max + ".";
      return handleError(obj,errorMsg, check_status);
    }
   obj.value = real + "." + decimal;
   return true;
 }
//end - <!--#include virtual="/small_business/includes/check_currency_js_edit.js"-->

//start - <!--#include virtual="/small_business/includes/check_date_js_edit.js"-->
function checkDate(obj, req, year_min, year_max, label)
{ return checkDate(obj, req, year_min, year_max, label, 0); }

function checkDate(obj, req, year_min, year_max, label, check_status)
{
  //alert("F: checkDate: " + obj + "," + req + "," + year_min + "," + year_max + "," + label);
  var value="", ch = '';
  var month=0, day=0, year=0;
  var i = 0, nonNumCount = 0;

  value = escapeHeadSpace(obj.value);
  value = escapeTailSpace(value);
  obj.value = value;
  if (!checkReq(obj,value, req, label, check_status))
     return false;
  value = "";
  if(year_min < 1956 || year_max > 2055)
    { errorMsg = "Invalid year entered in " + label + ".  Please enter a year between 1956-2055.";
      return handleError(obj,errorMsg, check_status);
    }
  for (i = 0; i<obj.value.length; i++)
    { ch = obj.value.substring(i,i+1);
      if ((ch >= '0') && (ch <='9'))
           value += ch;
      else
       { value += '/';  nonNumCount++; }
    }
  if (value.substring(1,2) == '/')
    value = '0' + value;
  if (value.substring(4,5) == '/')
    value = value.substring(0,3) + '0' +
            value.substring(3,value.length);
  if (nonNumCount != 2 || value.substring(2,3) != '/'
      || value.substring(5,6) != '/' || (value.length != 10
      && value.length != 8) )
    { errorMsg = label + " format is invalid. " + label + " must be in the MM/DD/YYYY format.";
      return handleError(obj,errorMsg, check_status);
    }
  if ( value.length == 8)
    { if (value.substring(6,8) >= '56')
        value = value.substring(0,6) + '19' + value.substring(6,8);
      else
        value = value.substring(0,6) + '20' + value.substring(6,8);
    }
  if (value.substring(0,1) == '0')
    month = parseInt(value.substring(1,2));
  else
    month = parseInt(value.substring(0,2));
  if (value.substring(3,4) == '0')
    day = parseInt(value.substring(4,5));
  else
    day = parseInt(value.substring(3,5));
  year = parseInt(value.substring(6,10));
  if (isNaN(month) || month < 1 || month > 12)
    { errorMsg = "Bill Date includes an invalid month. Bill Date Month must be between 01 and 12.";
      return handleError(obj,errorMsg, check_status);
    }
  if (isNaN(day) || day < 1 || day > 31)
    { errorMsg = "Bill Date includes an invalid day of the month.";
      return handleError(obj,errorMsg, check_status);
    }
  if (isNaN(year) || year < year_min || year > year_max)
    { errorMsg = "Bill Date includes an invalid year. Bill Date Year must be between 1956 and 2055.";
      return handleError(obj,errorMsg, check_status);
    }
  if (month == 4 || month == 6 ||
      month == 9 || month == 11)
    { if (day > 30)
    { errorMsg = "Bill Date includes an invalid day of the month.";
          return handleError(obj,errorMsg, check_status);
       }
    }
  else if (month == 2 && (year%4 == 0))
   { if ( day > 29)
    { errorMsg = "Bill Date includes an invalid day of the month.";
         return handleError(obj,errorMsg, check_status);
       }
   }
  else if (month == 2 && (year%4 != 0))
   { if ( day > 28)
    { errorMsg = "Invalid day of the month entered in " + label + ".";
         return handleError(obj,errorMsg, check_status)
       }
   }
  obj.value = value;
  return true;
}
//end - <!--#include virtual="/small_business/includes/check_date_js_edit.js"-->

//start - <!--#include virtual="/small_business/includes/check_checkbox_js_edit.js"-->
function checkCheckBox(obj, val, req, label, check_status)
 {
   var i = 0;
   if (obj.checked == true)
    { return true; }
   else
   {
     if (check_status == 1)
     {
       if (missingFlds == "")
         { missingFlds = label; }
       else
         { missingFlds = missingFlds + ", " + label; }
       if (val != "nofocusset")
         { if (errorField == null) errorField=obj; }
       return false;
     }
     else
     {
      errorMsg = "Please select the check box to indicate acceptance of the " + label +
         " in order to proceed with the AT&T Online Customer Service Self Registration process.";
       return handleError(obj, errorMsg, 1);
     }
   }
   return false;
 }
//end - <!--#include virtual="/small_business/includes/check_checkbox_js_edit.js"-->
