function doRedirect(redirectUrl){
	window.location.replace(redirectUrl);
}

function showErrorIcon(){
	document.getElementById("iconBanner").style.display = "block";
	document.getElementById("loader").style.display = "none";
	document.getElementById("responseMessage").innerHTML = "";
}

function showLoader(){
	document.getElementById("iconBanner").style.display = "none";
	document.getElementById("loader").style.display = "flex";
}

function showFormLoader(){
	document.getElementById("rsaResponse").innerHTML = "";
	document.getElementById("loginButton").style.visibility = "hidden";
	document.getElementById("formLoader").style.display = "flex";
}

function hideLoader(){
	document.getElementById("loader").style.display = "none";
}

function hideFormLoader(){
	document.getElementById("loginButton").style.visibility = "visible";
	document.getElementById("formLoader").style.display = "none";
}

function mitigateXSS(message){
    return message.replace(/\&/g, '&amp;')
        .replace(/\</g, '&lt;')
        .replace(/\>/g, '&gt;')
        .replace(/\"/g, '&quot;')
        .replace(/\'/g, '&#x27')
}

function isMalformed(appName){
	  var code, i, len;

	  for (i = 0, len = appName.length; i < len; i++) {
	    code = appName.charCodeAt(i);
	    if (!(code > 47 && code < 58) && // numeric (0-9)
	        !(code > 64 && code < 91) && // upper alpha (A-Z)
	        !(code > 96 && code < 123) &&  // lower alpha (a-z)
	        !(code == 45)) { // (Hyphen)
	      return false;
	    }
	  }
	  return true;
}

function createCookie(){
	var cookieValue = Math.random().toString(36);
	document.cookie = "mfaSecurity=" + cookieValue + ";domain=.att.com;path=/;secure";
	
	//document.cookie = "mfaSecurity=" + cookieValue + ";path=/;";
}

function authenticateRsaToken(workstationID,sessionToken,rsaAMISUrl,idpSAMLUrl,appContact){
	
	document.getElementById("responseMessage").innerHTML = "Authenticating RSA token..";
	
	var xhr = new XMLHttpRequest();
	var data = '{"workStationID":"'.concat(mitigateXSS(workstationID)).concat('","sessionToken":"').concat(mitigateXSS(sessionToken)).concat('","rsaAMISUrl":"').concat(rsaAMISUrl).concat('"}');;

	var url = window.location.origin+"/mfaapp/servlet?action=authenticateIDCToken";

	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.setRequestHeader("Accept", "application/json");

	xhr.onreadystatechange = function () {
	showLoader();
    if (xhr.readyState === 4 && xhr.status === 200) {
			var json = JSON.parse(xhr.responseText);
			
			if (json.errorCode == "0"){
				document.getElementById("responseMessage").innerHTML = "Authenticated successfully..";
				createCookie();
				doRedirect(idpSAMLUrl);
			}
			else{
				hideLoader();
				showErrorIcon();
				document.getElementById("responseMessage").innerHTML=mitigateXSS(json.errorString) + " Please contact "+ appContact +" for assistance.";			
			}
    }
	else if (xhr.readyState === 4 && xhr.status != 200){
		showErrorIcon();
		document.getElementById("responseMessage").innerHTML="Error Code : E00003. MFA application error has been encountered. Servlet request failed.";
	}
};
   xhr.send(data);	
}

function authenticateRsaToolBarToken(rsaAMISUrl,idpSAMLUrl,appContact,appName){

	sessionStorage.setItem('rsaAMISUrl',rsaAMISUrl);
	sessionStorage.setItem('idpSAMLUrl',idpSAMLUrl);
	sessionStorage.setItem('appContact',appContact);
	if (appName == "doors"){
		doRedirect(window.location.origin+"/mfaapp/doors.html");
	}else{
		doRedirect(window.location.origin+"/mfaapp/submitToken.html");
	}
}

function getRsaToken(idpSAMLUrl,rsaAMISUrl,appContact,idcCompanyType,rsaFallback,appName){

	document.getElementById("responseMessage").innerHTML="Generating RSA token..";	
	var xhr = new XMLHttpRequest();
	var url = "https://localhost:48080/";
	var redirectUrl;

	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.setRequestHeader("Accept", "application/json");

	xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
			var json = JSON.parse(xhr.responseText);

			if (json.errorCode == "0"){
				authenticateRsaToken(json.workstationID,json.sessionToken,rsaAMISUrl,idpSAMLUrl,appContact);
			}
			else{
				hideLoader();
				showErrorIcon();		
				if (json.errorCode == "1"){
					document.getElementById("responseMessage").innerHTML="ERROR_CODE : "+ json.errorCode +". RSA token for company "+ idcCompanyType +" is not available in the client. Please contact "+ appContact +" for assistance.";
				}
				else if (json.errorCode == "2"){
					document.getElementById("responseMessage").innerHTML="ERROR_CODE : "+ json.errorCode +". Not able to generate token. Please contact "+ appContact +" for assistance.";
				}
				else if (json.errorCode == "3"){
					document.getElementById("responseMessage").innerHTML="ERROR_CODE : "+ json.errorCode +". Invalid/Incorrect arguments submitted to generate RSA token.";
				}
				else if (json.errorCode == "5"){
					document.getElementById("responseMessage").innerHTML="ERROR_CODE : "+ json.errorCode +". Unable to retrive RSA token from the client. Please verify that the token activation was successful and contact "+ appContact +" for assistance.";
				}
				else if (json.errorCode == "6"){
					document.getElementById("responseMessage").innerHTML="ERROR_CODE : "+ json.errorCode +". More than one token was found for the company "+ idcCompanyType +" in the client. Please contact "+ appContact +" for assistance.";
				}
				else if (json.errorCode == "7"){
					document.getElementById("responseMessage").innerHTML="ERROR_CODE : "+ json.errorCode +". Invalid RSA action.";
				}
				else if (json.errorCode == "8"){
					document.getElementById("responseMessage").innerHTML="ERROR_CODE : "+ json.errorCode +". Not able to generate RSA token due to duplicate attempts within a minute. Please retry after a minute.";
				}
				else if (json.errorCode == "11"){
					document.getElementById("responseMessage").innerHTML="ERROR_CODE : "+ json.errorCode +". Token for company "+ idcCompanyType +" is not initialised on the client. Please contact "+ appContact +" for assistance.";
				}
				else {
					var errorMessage=json.errorMessage;
					document.getElementById("responseMessage").innerHTML="RSA Error : " +errorMessage + ". Please contact "+ appContact;
				}
		}

		}
		else if (xhr.readyState === 4 && xhr.status != 200){
			if (rsaFallback == "N"){
	            hideLoader();
				showErrorIcon();
				document.getElementById("responseMessage").innerHTML="Error Code : E00007. Couldn't generate RSA token. Please verify that RSA client is running on your system and retry.";
			
			}else if(rsaFallback == "Y"){
				document.getElementById("responseMessage").innerHTML="Fallback to RSA token toolbar.";
				authenticateRsaToolBarToken(rsaAMISUrl,idpSAMLUrl,appContact,appName);
			}else{
	            hideLoader();
				showErrorIcon();
				document.getElementById("responseMessage").innerHTML="Error Code : E00007. Couldn't generate RSA token. Please verify that RSA client is running on your system and retry.";				
			}
		}
};

   var jsonString = '{"action":"authenticate","arguments":[{"name":"dealerUserID","value":""},{"name":"dealerCode","value":""}],"companyID":"';
   var getTokenJSON = jsonString.concat(idcCompanyType).concat('"}');
   xhr.send(getTokenJSON);
}


function getLookups(appName){
	var xhr = new XMLHttpRequest();
	var url = window.location.origin+"/mfaapp/servlet?action=getLookups&appName="+appName;
	
	xhr.open("GET", url, true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.setRequestHeader("Accept", "application/json");

	xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
			var json = JSON.parse(xhr.responseText);
			
			if (json.errorCode == "0"){
				if (json.rsaEnabled != "Y"){
					createCookie();
					doRedirect(json.idpSAMLUrl)
				}else{
					getRsaToken(json.idpSAMLUrl,json.rsaAMISUrl,json.appContact,json.idcCompanyType,json.rsaFallback,appName);
				}
			}
			else if (json.errorCode == "1"){
				hideLoader();
				showErrorIcon();
				document.getElementById("responseMessage").innerHTML="Error Code : E00001. MFA application error has been encountered. Invalid appName " + appName;				
			}
			else if (json.errorCode == "2"){
				hideLoader();
				showErrorIcon();
				document.getElementById("responseMessage").innerHTML="Error Code : E00002. MFA application error has been encountered. System Error. Missing application configurations.";				
			}
			else if (json.errorCode == "3"){
				hideLoader();
				showErrorIcon();
				document.getElementById("responseMessage").innerHTML="Error Code : E00006. MFA application error has been encountered. System Error. Database connectivity failed.";								
			}
    }
	else if (xhr.readyState === 4 && xhr.status != 200){
		hideLoader();
		showErrorIcon();
		document.getElementById("responseMessage").innerHTML="Error Code : E00003. MFA application error has been encountered. Servlet request failed.";
	}
};

   xhr.send();
}

function getQueryParams(paramName){
	var params = window.location.search.substr(1).split('?');
	for (var i = 0; i < params.length; i++) {
        var p=params[i].split('=');
        if (p[0] == paramName) {
            return p[1];
            }
    }
	return p[0];
}

function checkRequest(){

	var windowUrl = window.location.href;
	
	if(windowUrl.indexOf('?appName=') != -1){
		document.getElementById("responseMessage").innerHTML="Initialising request..";		
	}
	else if(windowUrl.indexOf('&appName=') != -1){
		document.getElementById("responseMessage").innerHTML="Initialising request..";		
	}else{
		showErrorIcon();
		document.getElementById("responseMessage").innerHTML="Error Code : E00004. MFA application error has been encountered. Invalid request.";	
	}
	
	var appName = getQueryParams('appName');
	
	if ( appName ){
		if (isMalformed(appName)){
			showLoader();
			getLookups(appName);			
		}
		else{
			showErrorIcon();
			document.getElementById("responseMessage").innerHTML="Error Code : E00005. MFA application error has been encountered. Malformed request.";			
		}

	}
	else{
		showErrorIcon();
		document.getElementById("responseMessage").innerHTML="Error Code : E00004. MFA application error has been encountered. Invalid request.";
	}
}

function checkFormRequest(){
	var rsaAMISUrl = sessionStorage.getItem('rsaAMISUrl');
	var idpSAMLUrl = sessionStorage.getItem('idpSAMLUrl');
	var appContact = sessionStorage.getItem('appContact');
	if (rsaAMISUrl == null || idpSAMLUrl == null || appContact == null) {
		doRedirect(window.location.origin+"/mfaapp/error.html");
	}
}

function trimSerialNumber(str){
	
	while (str.substr(0,1) == '0' && str.length > 1) {
		str = str.substr(1,9999);
	}
	return str;
}

function submitToolbarToken(){
	
	var serialNumber=trimSerialNumber(document.forms["rsaTokenForm"]["serialNumber"].value)
	var passcode=document.forms["rsaTokenForm"]["passcode"].value
	
    if ((serialNumber.length < 8) || (serialNumber.length > 10 ) || (passcode.length != 8) || isNaN(serialNumber) || isNaN(passcode)){
        document.getElementById("rsaResponse").innerHTML="Invalid input."
    }else{
    	showFormLoader();
    	var rsaAMISUrl = sessionStorage.getItem('rsaAMISUrl');
    	var idpSAMLUrl = sessionStorage.getItem('idpSAMLUrl');
    	var appContact = sessionStorage.getItem('appContact');
    	
    	if (window.XMLHttpRequest){
    		var xhr = new XMLHttpRequest();
    	}else{
    		var xhr=new ActiveXObject("Microsoft.XMLHTTP");
    	}
    	
    	var data = '{"serialNumber":"'.concat(mitigateXSS(serialNumber)).concat('","passcode":"').concat(mitigateXSS(passcode)).concat('","rsaAMISUrl":"').concat(rsaAMISUrl).concat('"}');;
    	var url = window.location.origin+"/mfaapp/servlet?action=authenticateToolBarToken";

    	xhr.open("POST", url, true);
    	xhr.setRequestHeader("Content-Type", "application/json");
    	xhr.setRequestHeader("Accept", "application/json");

    	xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
    			var json = JSON.parse(xhr.responseText);
    			
    			if (json.errorCode == "0"){
    				createCookie();
    				doRedirect(idpSAMLUrl)
    			}
    			else if(json.errorCode == "1"){
    				hideFormLoader();
    				document.getElementById("rsaResponse").innerHTML=mitigateXSS(json.errorString) + ". Please contact "+ appContact +" for assistance."; return false;	
    			}
    			else{
    				hideFormLoader();
    				document.getElementById("rsaResponse").innerHTML=mitigateXSS(json.errorString) + " Please contact "+ appContact +" for assistance."; return false;				
    			}
        }
    	else if (xhr.readyState === 4 && xhr.status != 200){
    		hideFormLoader();
    		document.getElementById("rsaResponse").innerHTML="Error Code : E00003. MFA application error has been encountered. Servlet request failed."; return false;
    	}
    };
       xhr.send(data);
       return false;    	
    }

}

function ackTerms(obj)
{
  var loginobj = document.getElementById("tguardLoginButton");
    if(obj.checked )
    {
        loginobj.style.display = 'block';
    } else {
        loginobj.style.display = 'none';
    }
}

function submitToolbarTokenDoors(){
	
	document.getElementById("tguardLoginButton").style.display = "none";
	document.getElementById("rsaResponse").innerHTML="";
	var serialNumber=trimSerialNumber(document.forms["rsaTokenForm"]["serialNumber"].value)
	var passcode=document.forms["rsaTokenForm"]["passcode"].value
	
    if ((serialNumber.length < 8) || (serialNumber.length > 10 ) || (passcode.length != 8) || isNaN(serialNumber) || isNaN(passcode)){
    	document.getElementById("tguardLoginButton").style.display = "block";
        document.getElementById("rsaResponse").innerHTML="Invalid input."
    }else{
    	var rsaAMISUrl = sessionStorage.getItem('rsaAMISUrl');
    	var idpSAMLUrl = sessionStorage.getItem('idpSAMLUrl');
    	var appContact = sessionStorage.getItem('appContact');
    	
    	if (window.XMLHttpRequest){
    		var xhr = new XMLHttpRequest();
    	}else{
    		var xhr=new ActiveXObject("Microsoft.XMLHTTP");
    	}
    	
    	var data = '{"serialNumber":"'.concat(mitigateXSS(serialNumber)).concat('","passcode":"').concat(mitigateXSS(passcode)).concat('","rsaAMISUrl":"').concat(rsaAMISUrl).concat('"}');;
    	var url = window.location.origin+"/mfaapp/servlet?action=authenticateToolBarToken";

    	xhr.open("POST", url, true);
    	xhr.setRequestHeader("Content-Type", "application/json");
    	xhr.setRequestHeader("Accept", "application/json");

    	xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
    			var json = JSON.parse(xhr.responseText);
    			
    			if (json.errorCode == "0"){
    				createCookie();
    				doRedirect(idpSAMLUrl)
    			}
    			else if(json.errorCode == "1"){
    				document.getElementById("tguardLoginButton").style.display = "block";
    				document.getElementById("rsaResponse").innerHTML=mitigateXSS(json.errorString) + ". Please contact "+ appContact +" for assistance."; return false;	
    			}
    			else{
    				document.getElementById("tguardLoginButton").style.display = "block";
    				document.getElementById("rsaResponse").innerHTML=mitigateXSS(json.errorString) + " Please contact "+ appContact +" for assistance."; return false;				
    			}
        }
    	else if (xhr.readyState === 4 && xhr.status != 200){
    		document.getElementById("tguardLoginButton").style.display = "block";
    		document.getElementById("rsaResponse").innerHTML="Error Code : E00003. MFA application error has been encountered. Servlet request failed."; return false;
    	}
    };
       xhr.send(data);
       return false;    	
    }

}
