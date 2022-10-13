var andiEventListener = function (eventType,eventName,eventBody){
    'use strict';
    let aggregateinfoResponse = undefined;
    let isFetchAvaliable = window.fetch ? true : false;
    let nuanceChatHideCounter = 0;
    let nuanceTimer;
    let chatInProgressOnThisTab = false;
    let waitingCustomerInfo = false;
    let customerInfoResponse = null;
    let conversationId = null;
    let hasAndiMobileCookie = cookieExist("AndiMobileCookie") && getCookie("AndiMobileCookie") === "true";
    //console.log("hasAndiMobileCookie: ", hasAndiMobileCookie);
    //New parameters added for serachPage
    let andiEventName = eventName || '';
    let andiEventType = eventType || '';
    let andiEventBody = eventBody || null;
    let isANDIEnable = checkANDIEnable(andiEventBody) || false;
    let isANDIDisable = checkANDIDisable(andiEventBody) || false;
    let ANDiexistsFlag=false;
    const ANDI_IXP_FLAG="exp-andichatva-throttle=variant1-andichat";
    const supportPageList=[
        "/support/topic/wireless/",
        "/support/topic/u-verse-high-speed-internet/",
        "/support/topic/fixed-wireless-internet/",
        "/support/topic/directv/",
        "/support/topic/u-verse-voice/",
        "/support/topic/u-verse-tv/","/support/topic/wireless",
        "/support/topic/u-verse-high-speed-internet",
        "/support/topic/fixed-wireless-internet",
        "/support/topic/directv",
        "/support/topic/u-verse-voice",
        "/support/topic/u-verse-tv"];

    //Our main domain url
    const mainDomainUrl = window.location.origin;
    function andiApiDomain() {
        return 'https://www.att.com';
    }

    //To Enable MEG and Disable MEG Code changes
    function checkANDIEnable(andiEventBody) {
        let nuanceChatInProgress = window.sessionStorage.getItem("NuanceChatInProgress") || "";
        if (andiEventBody === null || andiEventBody === undefined) {
            return false;
        } else if (andiEventType === "invokeANDI" && andiEventName === "enableMEG" && isValidObjectForANDI(andiEventBody)) {
            for (let key in andiEventBody) {
                if (andiEventBody.hasOwnProperty("type") && (andiEventBody[key] === "searchPage" || (andiEventBody[key] === "nuancePage" && nuanceChatInProgress === "False"))){
                    return true;
                } else if (andiEventBody[key] === "nuanceRoutingPage" && nuanceChatInProgress === "False") {
                    setAndiAutoOpenToTrue();
                    postMessageToReact();
                    return true;
                }
            }
        }
    }

    function checkANDIDisable(andiEventBody) {
        let nuanceChatInProgress = window.sessionStorage.getItem("NuanceChatInProgress") || "";
        if (andiEventBody === null || andiEventBody === undefined) {
            return false;
        } else if (andiEventType === "invokeANDI" && andiEventName === "disableMEG" && isValidObjectForANDI(andiEventBody)) {
            for (let key in andiEventBody) {
                if (andiEventBody.hasOwnProperty("type") && (andiEventBody[key] === "searchPage" || (andiEventBody[key] === "nuancePage" && nuanceChatInProgress === "True"))) {
                    return true;
                }
            }
        }
    }

    function setAndiAutoOpenToTrue() {
        window.sessionStorage.setItem('AndiAutoOpen', "true")
    }

    function setAndiExistFlagToFalse() {
        window.sessionStorage.setItem('ANDiexistsFlag', "false");

    }

    function isValidObjectForANDI(andiEventBody) {
        return andiEventBody.constructor == Object;
    }

    function postMessageToReact() {
        const attChatWindowElement = document.getElementById('attChatWindow');
        let contentWindow;

        if(attChatWindowElement) {
            contentWindow = attChatWindowElement.contentWindow;
        }
        try {
            if (contentWindow) {
                contentWindow.postMessage(JSON.stringify({
                    case: 'AUTOOPEN'
                }), contentWindow.location.origin);
            }
        } catch (err) {
            log('contentWindow.postMessage auto open Error', err);
            console.log('contentWindow.postMessage auto open Error: ', err);
        }
    }

    //Hide ANDI Chat
    function hideANDIChat() {
        if (null !== window.document.getElementById("contactUsC2CB") && window.document.getElementById("chatDiv") !== null) {
            const contactUsDivs = window.parent.document.querySelectorAll("[id='contactUsC2CB']");                
            for (let i = 0; i < contactUsDivs.length; i++) { 
                contactUsDivs[i].style.display = "none";
            }
        } else if (null !== window.document.getElementById("attChatWindow")) { //future enhacemnet
            window.document.getElementById("attChatWindow").style.display = "none";
        }

    }

    //Show Hidden ANDI Chat
    function showHiddenANDIChat() {
        if (null !== window.document.getElementById("contactUsC2CB") && window.document.getElementById("chatDiv") !== null) {
            const contactUsDivs = window.parent.document.querySelectorAll("[id='contactUsC2CB']");                
            for (let i = 0; i < contactUsDivs.length; i++) {
                const contactUsDiv = contactUsDivs[i];
                if (contactUsDiv.style.display === "none" && window.document.getElementById("chatDiv").style.display === "none") {
                    contactUsDiv.style.display = "block";
                }
            }            
        } else if (null !== window.document.getElementById("attChatWindow") && window.document.getElementById("attChatWindow").style.display === "none") { //future enhacemnet){ //future enhacemnet
            window.document.getElementById("attChatWindow").style.display = "block";
        }

    }

    function isOnDemandANDITriggered() {
        if (isANDIEnable === false && isANDIDisable === false) {
            return false;
        }
        return true;
    }

    //Setting ANDiexistsFlag flag to true
    function setAndiExistFlagToTrue(){
        window.sessionStorage.setItem('ANDiexistsFlag', "true");
    }

    function triggerNuanceEventListener(){
        try{
            if (null!== window.inqFrame && window.inqFrame !== undefined && null !== window.inqFrame.Inq && window.inqFrame.Inq!==undefined)
            {
                log("triggerNuanceEventListener called");
                console.log("triggerNuanceEventListener called");	
                window.inqFrame.Inq.reinitChat();	
            }
        }catch(error){
            log("triggerNuanceEventListener called", error);
            console.log("error while calling nuanceEventListener");	
        }
        
    }

     function isSupportPage() {
        if (supportPageList.indexOf(window.parent.location.pathname) > -1) {
            return true;
        }
        return false;
    }

    function isANDIChatNewState()
    {
        let isANDIChatNewState=false;
        if(isANDiLoadedOnThisPage()===true)
        {
            var chatActiveBtnDiv=document.getElementById('attChatWindow').contentWindow.document.getElementById('chatActiveBtn');
            if(null!==chatActiveBtnDiv && undefined!==chatActiveBtnDiv && null!==chatActiveBtnDiv.className && undefined!==chatActiveBtnDiv.className && chatActiveBtnDiv.className!=="")
            {
                isANDIChatNewState = chatActiveBtnDiv.className.indexOf("chatfrontend-ui__show")> -1 ? true : false;	
                
            }
        }
        return isANDIChatNewState;
    }


	function generateContatUsDivSupportPage(childContatusLoading) {
		try{
			var newNodecontactUsC2C = window.parent.document.createElement('div');
			newNodecontactUsC2C.innerHTML = '<style>\n#contactUsC2C{\n  background-color: transparent;\n  color: #1d2329;\n  border: 1px solid #1d2329;\n  box-shadow: 0px 0px 0px 3px transparent inset, 0px 0px 0px 4px transparent inset;\n  padding: 0 48px;\n  height: 56px;\n  min-width: 200px;\n  border-radius: 3px !important;\n  font-size: 16px;\n  line-height: 1.2;\n  justify-content: center;\n  outline: none;\n  text-decoration: none;\n  text-transform: capitalize;\n}\n#contactUsC2C:hover{\n  background: #454b52;\n  border-color: #454b52;\n  color: #ffffff;\n  transition: background-color .3s linear, color .05s linear .05s;\n}\n#contactUsC2C:hover:focus{\n  background: #454b52;\n  box-shadow: 0px 0px 0px 3px #454b52 inset, 0px 0px 0px 4px #adb1b8 inset;\n}\n</style>\n<button type=\"button\" id=\"contactUsC2C\" alt=\"Chat\" class=\"btn-secondary btn-large\">Chat</button>'
			childContatusLoading.parentNode.replaceChild(newNodecontactUsC2C, childContatusLoading);
		}
		catch(error){
			console.log("error while generating the Div");
		}
	}
	
	function createInpageANDIDiv(){
		try{
			if (null !== window.parent.document.getElementById("contactUsC2CB") && window.parent.document.getElementById("chatDiv") !== null)
            {
                const contactUsDivs = window.parent.document.querySelectorAll("[id='contactUsC2CB']");
                
                for (let i = 0; i < contactUsDivs.length; i++) {
                    let currentContactUsC2CB = contactUsDivs[i];
                    const childContatusLoading = currentContactUsC2CB.childNodes[0];
                    if (null !== childContatusLoading)
                    {
                        if (null !== childContatusLoading.id && childContatusLoading.id === 'contactUsLoading') {
                            window.parent.document.getElementById("chatDiv").style.display = 'none';
                            generateContatUsDivSupportPage(childContatusLoading);
                            currentContactUsC2CB.style.display = 'block';
                            }
                        else if (null !== childContatusLoading.innerText && childContatusLoading.innerText.includes("Chat")) {
                            window.parent.document.getElementById("chatDiv").style.display = 'none';
                            currentContactUsC2CB.style.display = 'block';
                            }
                    }
                }                     
            }
			}
		catch(error){
			console.log("error while generating the Div");
		}
	}
	
	function isSearchPageOnDemand()
	
	{
		let isSearchPageOnDemand=false;
		if(isValidObjectForANDI(andiEventBody) )
		{
			for (let key in andiEventBody) 
			{
                if (andiEventBody.hasOwnProperty("type") && (andiEventBody[key] === "searchPage"))
                    isSearchPageOnDemand= true;
            } 
		}
		return isSearchPageOnDemand;
		
	}

    function checkChatIsInProgressOnOtherTabInPage(){
		try{
			if (null !== window.parent.document.getElementById("contactUsC2CB"))
            {
                const contactUsDivs = window.parent.document.querySelectorAll("[id='contactUsC2CB']");
                
                for (let i = 0; i < contactUsDivs.length; i++) {
                    let currentContactUsC2CB = contactUsDivs[i];
                    const childContatusLoading = currentContactUsC2CB.childNodes[0];
                    if (null !== childContatusLoading)
                    {
                        if (null !== childContatusLoading.id && childContatusLoading.id === 'contactUsLoading') {
                                 generateContatUsDivForInpageChatOnOtherTab(childContatusLoading);
                           
                        }
                       
                    }
                }                     
            }
			}
		catch(error){
			console.log("error while generating the Div");
		}
	}

    function generateContatUsDivForInpageChatOnOtherTab(childContatusLoading) {
		try{
			var newNodecontactUsC2C = window.parent.document.createElement('div');
			newNodecontactUsC2C.innerHTML = '<button type=\"button\" id=\" \" alt=\"Chat in progress\" class=\"btn-secondary btn-large\" style="text-transform:none" disabled>Chat’s open in another tab</button>'
			childContatusLoading.parentNode.replaceChild(newNodecontactUsC2C, childContatusLoading);
		}
		catch(error){
			console.log("error while generating the Div");
		}
	}


    //To Enable MEG and Disable MEG Code changes ENDS

    // ----------------- Data Layer attributes functions ----------------
    function getDataLayerAttributes(customerInfoResponse) {
        let nVer = navigator.appVersion;
        let nAgt = navigator.userAgent;
        let browserName = navigator.appName;
        let fullVersion = '' + parseFloat(navigator.appVersion);
        let majorVersion = parseInt(navigator.appVersion, 10);
        let nameOffset, verOffset, ix;
        // In Opera, the true version is after 'Opera' or after 'Version'
        if ((verOffset = nAgt.indexOf('Opera')) != -1) {
            browserName = 'Opera';
            fullVersion = nAgt.substring(verOffset + 6);
            if ((verOffset = nAgt.indexOf('Version')) != -1)
                fullVersion = nAgt.substring(verOffset + 8);
        }
        // In MSIE, the true version is after 'MSIE' in userAgent
        else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
            browserName = 'Microsoft Internet Explorer';
            fullVersion = nAgt.substring(verOffset + 5);
        }
        // In Chrome, the true version is after 'Chrome'
        else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
            browserName = 'Chrome';
            fullVersion = nAgt.substring(verOffset + 7);
        }
        // In Safari, the true version is after 'Safari' or after 'Version'
        else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
            browserName = 'Safari';
            fullVersion = nAgt.substring(verOffset + 7);
            if ((verOffset = nAgt.indexOf('Version')) != -1)
                fullVersion = nAgt.substring(verOffset + 8);
        }
        // In Firefox, the true version is after 'Firefox'
        else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
            browserName = 'Firefox';
            fullVersion = nAgt.substring(verOffset + 8);
        }
        // In most other browsers, 'name/version' is at the end of userAgent
        else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
            browserName = nAgt.substring(nameOffset, verOffset);
            fullVersion = nAgt.substring(verOffset + 1);
            if (browserName.toLowerCase() == browserName.toUpperCase()) {
                browserName = navigator.appName;
            }
        }
        // trim the fullVersion string at semicolon/space if present
        if ((ix = fullVersion.indexOf(';')) != -1)
            fullVersion = fullVersion.substring(0, ix);
        if ((ix = fullVersion.indexOf(' ')) != -1)
            fullVersion = fullVersion.substring(0, ix);
        majorVersion = parseInt('' + fullVersion, 10);
        if (isNaN(majorVersion)) {
            fullVersion = '' + parseFloat(navigator.appVersion);
            majorVersion = parseInt(navigator.appVersion, 10);
        }
        // system
        let os = null;
        let clientStrings = [{
                s: 'Windows 10',
                r: /(Windows 10.0|Windows NT 10.0)/
            },
            {
                s: 'Windows 8.1',
                r: /(Windows 8.1|Windows NT 6.3)/
            },
            {
                s: 'Windows 8',
                r: /(Windows 8|Windows NT 6.2)/
            },
            {
                s: 'Windows 7',
                r: /(Windows 7|Windows NT 6.1)/
            },
            {
                s: 'Windows Vista',
                r: /Windows NT 6.0/
            },
            {
                s: 'Windows Server 2003',
                r: /Windows NT 5.2/
            },
            {
                s: 'Windows XP',
                r: /(Windows NT 5.1|Windows XP)/
            },
            {
                s: 'Windows 2000',
                r: /(Windows NT 5.0|Windows 2000)/
            },
            {
                s: 'Windows ME',
                r: /(Win 9x 4.90|Windows ME)/
            },
            {
                s: 'Windows 98',
                r: /(Windows 98|Win98)/
            },
            {
                s: 'Windows 95',
                r: /(Windows 95|Win95|Windows_95)/
            },
            {
                s: 'Windows NT 4.0',
                r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
            },
            {
                s: 'Windows CE',
                r: /Windows CE/
            },
            {
                s: 'Windows 3.11',
                r: /Win16/
            },
            {
                s: 'Android',
                r: /Android/
            },
            {
                s: 'Open BSD',
                r: /OpenBSD/
            },
            {
                s: 'Sun OS',
                r: /SunOS/
            },
            {
                s: 'Chrome OS',
                r: /CrOS/
            },
            {
                s: 'Linux',
                r: /(Linux|X11(?!.*CrOS))/
            },
            {
                s: 'iOS',
                r: /(iPhone|iPad|iPod)/
            },
            {
                s: 'Mac OS X',
                r: /Mac OS X/
            },
            {
                s: 'Mac OS',
                r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
            },
            {
                s: 'QNX',
                r: /QNX/
            },
            {
                s: 'UNIX',
                r: /UNIX/
            },
            {
                s: 'BeOS',
                r: /BeOS/
            },
            {
                s: 'OS/2',
                r: /OS\/2/
            },
            {
                s: 'Search Bot',
                r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
            }
        ];
        for (let id in clientStrings) {
            let cs = clientStrings[id];
            if (cs.r.test(nAgt)) {
                os = cs.s;
                break;
            }
        }
        let osVersion = null;
        if (/Windows/.test(os)) {
            osVersion = /Windows (.*)/.exec(os)[1];
            os = 'Windows';
        }
        switch (os) {
            case 'Mac OS X':
                osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
                break;
            case 'Android':
                osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
                break;
            case 'iOS':
                osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
                osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
                break;
        }
        let browserInfo = browserName + ' ' + fullVersion;
        let osInfo = os + ' ' + osVersion;
        let pageLoadObj = window.earlyAnalytics.getPageLoadData().find((element) => {
            return element.evtAction === "pageLoad";
        });
        let dataLayerAttributes = {
            'userLevelAttributes': {
                'ABSactorType': pageLoadObj && pageLoadObj["user.attributes.ABSactorType"] || null,
                'ABScompanyRole': pageLoadObj && pageLoadObj["user.attributes.ABScompanyRole"] || null,
                'firstNetFlag': pageLoadObj && pageLoadObj["user.attributes.firstNetFlag"] || null,
                'premierContractType': pageLoadObj && pageLoadObj["user.attributes.premierContractType"] || null,
                'regionCode': pageLoadObj && pageLoadObj["user.attributes.regionCode"] || null,
                'dtvBillerIndicator': pageLoadObj && pageLoadObj["user.account.dtvBillerIndicator"] || null,
                'evergrentEmailAddress': pageLoadObj && pageLoadObj["user.account.evergrentEmailAddress"] || null,
                'customerName': customerInfoResponse && customerInfoResponse["user.attributes.customerName"] || null,
                'email': customerInfoResponse && customerInfoResponse["user.attributes.email"] || null,
                'accountInFocusIdentifier': customerInfoResponse && customerInfoResponse["user.account.accountInFocusIdentifier"] || null,
                'accountInFocusUserType': customerInfoResponse && customerInfoResponse["user.account.accountInFocusUserType"] || null,
                'ctn': customerInfoResponse && customerInfoResponse["user.account.ctn"] || null,
                'fan': customerInfoResponse && customerInfoResponse["user.account.fan"] || null,
                'liabilityType': customerInfoResponse && customerInfoResponse["user.account.liabilityType"] || null,
                'productSegment': customerInfoResponse && customerInfoResponse["user.account.productSegment"] || null,
                'serviceSegment': customerInfoResponse && customerInfoResponse["user.account.serviceSegment"] || null,
                'serviceType': customerInfoResponse && customerInfoResponse["user.account.serviceType"] || null,
                'wirelessAccountStatus': customerInfoResponse && customerInfoResponse["user.account.wirelessAccountStatus"] || null,
                'wirelessAccountNumber': customerInfoResponse && customerInfoResponse["user.account.wirelessAccountNumber"] || null,
                'wirelineAccountType': customerInfoResponse && customerInfoResponse["user.account.wirelineAccountType"] || null,
                'customerType': customerInfoResponse && customerInfoResponse["user.customerType"] || null,
                'id': customerInfoResponse && customerInfoResponse["user.login.id"] || null,
                'userType': customerInfoResponse && customerInfoResponse["user.login.userType"] || null,
            },
            'pageLevelAttributes': {
                'eligibleServices': pageLoadObj && pageLoadObj["page.attributes.eligibleServices"] || null,
                'integratedOfferPromoIndicator': pageLoadObj && pageLoadObj["page.attributes.integratedOfferPromoIndicator"] || null,
                'productType': pageLoadObj && pageLoadObj["page.attributes.productType"] || null,
                'pageFunction': pageLoadObj && pageLoadObj["page.category.pageFunction"] || null,
                'pageOwnership': pageLoadObj && pageLoadObj["page.category.pageOwnership"] || null,
                'flowCode': pageLoadObj && pageLoadObj["page.pageInfo.flowCode"] || null,
                'referralFlow': pageLoadObj && pageLoadObj["page.pageInfo.referralFlow"] || null,
                'friendlyPageName': pageLoadObj && pageLoadObj["page.pageInfo.friendlyPageName"] || null,
                'zipCode': pageLoadObj && pageLoadObj["page.pageInfo.zipCode"] || null,
                'url': window.location.pathname ? window.location.pathname : pageLoadObj ? pageLoadObj["page.location.url"] : null,
            },
            'systemLevelAttributes': {
                'os': osInfo ? osInfo : null,
                'browser': browserInfo ? browserInfo : null,
                'url': window.location.href ? window.location.href : pageLoadObj ? pageLoadObj["page.location._addressBarFullURL"] : null,
            }
        };
        //console.log('jsPlugin, dataLayerAttributes: ', dataLayerAttributes);
        return dataLayerAttributes;
    }
    // ----------------- end of Data Layer attributes functions ----------------
    // -------------------- API functions ---------------------------
    function postRequest(url, data) {
        try {
            if (isFetchAvaliable === true) {
                return fetch(url, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                }).then(function(afterResponse) {
                    if (afterResponse.status === "200" || afterResponse.ok)
                        return afterResponse.json();
                    else {
                        const errorMessage = 'Got error response while post request to ' + url + ' status: ' + afterResponse.status
                                                + '  ';
                        log(errorMessage, Error(errorMessage));
                         
                    }
                }).catch(function(error) {
                    const errorMessage = 'Got error in catch block while post request to ' + url + '  ';
                    log(errorMessage, error);
                    console.log("jsPlugin, postRequest catched error: ", error);
                     
                });
            } else {
                return new Promise(function(resolve, reject) {
                    window.$.ajax({
                        url: url,
                        type: 'POST',
                        data: JSON.stringify(data),
                        contentType: "application/json",
                        success: function(data, textStatus, xhr) {
                            if (xhr.status < 400) {
                                resolve(data);
                            } else {
                                const errorMessage = 'Got error response while post request to ' + url + ' status: ' + xhr.status
                                                + '  ';
                                log(errorMessage, Error(errorMessage));
                                 
                                reject(xhr);
                            }
                        },
                        error: function(error) {
                            const errorMessage = 'Got error in catch block while post request to ' + url + '  ';
                            log(errorMessage, error);
                             
                            reject(error);
                        },
                    });
                });
            }
        } catch (error) {
            const errorMessage = 'Got error in outer catch block while post request to ' + url + '  ';
            log(errorMessage, error);
            console.log("Error: ", error);
             
            return null;
        }
    }
    function putRequest(url, data) {
        try {
            if (isFetchAvaliable === true) {
                return fetch(url, {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                    body: JSON.stringify(data)
                }).then(function(afterResponse) {
                    if (afterResponse.status === "200" || afterResponse.ok)
                        return afterResponse.json();
                    else {
                        const errorMessage = 'Got error response while put request to ' + url + ' status: ' + afterResponse.status
                                                + '  ';
                        log(errorMessage, Error(errorMessage));
                         
                    }
                }).catch(function(error) {
                    const errorMessage = 'Got error in catch block while put request to ' + url + '  ';
                    log(errorMessage, error);
                    console.log("jsPlugin, putRequest catched error: ", error);
                     
                });
            } else {
                return new Promise(function(resolve, reject) {
                    window.$.ajax({
                        url: url,
                        type: 'PUT',
                        xhrFields: {
                            withCredentials: true
                        },
                        data: JSON.stringify(data),
                        contentType: "application/json",
                        success: function(data, textStatus, xhr) {
                            if (xhr.status < 400) {
                                resolve(data);
                            } else {
                                const errorMessage = 'Got error response while put request to ' + url + ' status: ' + xhr.status
                                + '  ';
                                log(errorMessage, Error(errorMessage));
                                 
                                reject(xhr);
                            }
                        },
                        error: function(error) {
                            const errorMessage = 'Got error in catch block while put request to ' + url + '  ';
                            log(errorMessage, error);
                             
                            reject(error);
                        },
                    });
                });
            }
        } catch (error) {
            const errorMessage = 'Got error in outer catch block while put request to ' + url + '  ';
            log(errorMessage, error);
            console.log("Error: ", error);
             
            return null;
        }
    }
    function getRequest(url) {
        try {
            if (isFetchAvaliable === true) {
                return fetch(url, {
                    method: "GET",
                    credentials: 'include',
                }).then(function(afterResponse) {
                    if (afterResponse.status === "200" || afterResponse.ok)
                        return afterResponse.json();
                    else {
                        const errorMessage = 'Got error response while get request to ' + url + ' status: ' + afterResponse.status
                        + '  ';
                        log(errorMessage, Error(errorMessage));
                         
                    }
                }).catch(function(error) {
                    const errorMessage = 'Got error in catch block while get request to ' + url + '  ';
                    log(errorMessage, error);
                    console.log("jsPlugin, getRequest catched error: ", error);
                     
                });
            } else {
                return new Promise(function(resolve, reject) {
                    window.$.ajax({
                        url: url,
                        type: 'GET',
                        xhrFields: {
                            withCredentials: true
                        },
                        contentType: "application/json",
                        success: function(data, textStatus, xhr) {
                            if (xhr.status < 400) {
                                resolve(data);
                            } else {
                                const errorMessage = 'Got error response while get request to ' + url + ' status: ' + xhr.status
                                + '  ';
                                log(errorMessage, Error(errorMessage));
                                 
                                reject(xhr);
                            }
                        },
                        error: function(error) {
                            const errorMessage = 'Got error in catch block while get request to ' + url + '  ';
                            log(errorMessage, error);
                             
                            reject(error);
                        },
                    });
                });
            }
        } catch (error) {
            const errorMessage = 'Got error in outer catch block while get request to ' + url + '  ';
            log(errorMessage, error);
            console.log("Error: ", error);
             
            return null;
        }
    }
    function getRequestWithoutFallback(url) {
        try {
            if (isFetchAvaliable === true) {
                return fetch(url, {
                    method: "GET",
                    credentials: 'include',
                }).then(function(afterResponse) {
                    if (afterResponse.status === "200" || afterResponse.ok)
                        return afterResponse.json();
                }).catch(function(error) {
                    const errorMessage = 'Got error while making get request ' + url;
                    log(errorMessage, error);
                    console.log("jsPlugin, getRequest catched error: ", error);
                });
            } else {
                return new Promise(function(resolve, reject) {
                    window.$.ajax({
                        url: url,
                        type: 'GET',
                        xhrFields: {
                            withCredentials: true
                        },
                        contentType: "application/json",
                        success: function(data, textStatus, xhr) {
                            if (xhr.status < 400) {
                                resolve(data);
                            } else {
                                const errorMessage = 'Got error while making get request ' + url + ' status ' + xhr.status;
                                log(errorMessage, error);
                                reject(xhr);
                            }
                        },
                        error: function(error) {
                            const errorMessage = 'Got error while making get request ' + url;
                            log(errorMessage, error);
                            reject(error);
                        },
                    });
                });
            }
        } catch (error) {
            const errorMessage = 'Got error in outer catch block of getRequestWithoutFallback';
            log(errorMessage, error);
            console.log("Error: ", error);
            return null;
        }
    }
    //----------------- end of API functions --------------------------
    // Enable to listen the UI's postMessages to able resize the iframe screen.
    function sendDataLayerAttr() {
        //check for cAuthCookie if the length > 2
        var cAuthCookie = getCookie('cAuthNState');
        if (cAuthCookie && cAuthCookie.length > 2) {
            const getCustomerInfo = getRequestWithoutFallback(buildApiUrlWithDomain('/msapi/reporting/v1/customerinfo'));
            getCustomerInfo.then(function(afterPromiseRes) {
                //console.log('jsPlugin, got response from customerInfo: ', getCustomerInfoResponse);
                customerInfoResponse = afterPromiseRes;
                callSSAFAttributes(customerInfoResponse);
            }).catch(function(error) {
                log('Got error in sendDataLayerAttr getRequestWithoutFallback', error);
                console.log('error while getting customerInfo');
                callSSAFAttributes();
            });
        } else {
            callSSAFAttributes();
        }
    }
    function callSSAFAttributes(customerInfoResponse) {
        const dataLayerAttributes = getDataLayerAttributes(customerInfoResponse ? customerInfoResponse : null);
        //console.log('jsPlugin, data.id: ', conversationId);
        let sampleRequest = {
            'conversationId': conversationId,
            'dataLayerAttributes': dataLayerAttributes
        };
        //Deleting the null properties in userLevelAttributes
        for (let element in sampleRequest.dataLayerAttributes.userLevelAttributes) {
            let value = sampleRequest.dataLayerAttributes.userLevelAttributes[element];
            if (value === null)
                delete sampleRequest.dataLayerAttributes.userLevelAttributes[element];
        }
        //Deleting the null properties in pageLevelAttributes
        for (let element in sampleRequest.dataLayerAttributes.pageLevelAttributes) {
            let value = sampleRequest.dataLayerAttributes.pageLevelAttributes[element];
            if (value === null)
                delete sampleRequest.dataLayerAttributes.pageLevelAttributes[element];
        }
        //Deleting the null properties in systemLevelAttributes
        for (let element in sampleRequest.dataLayerAttributes.systemLevelAttributes) {
            let value = sampleRequest.dataLayerAttributes.systemLevelAttributes[element];
            if (value === null)
                delete sampleRequest.dataLayerAttributes.systemLevelAttributes[element];
        }
        //console.log('sampleRequest: ', sampleRequest);
        const responseSaved = postRequest(buildApiUrlWithDomain('/msapi/chatlogicprocessor/v1/user/attributes'), sampleRequest);
        responseSaved.then(function(afterPromiseRes) {
            //console.log('jsPlugin, got response from attributes: ', afterPromiseRes);
        }).catch(function(error) {
            log('got error while saving request to /msapi/chatlogicprocessor/v1/user/attributes', error);
            console.log('jsPlugin, catched postRequest attributes error: ', error);
        });
    }
    function enableUIListener() {
        try {
            let divChatDiv = window.document.body.children.chatDiv;
            let attChatWindow = divChatDiv.children.attChatWindow;
            let contentWindow = attChatWindow.contentWindow;
            //const MEGIsActiveTabSessionKey = 'MEGIsActiveTab';
            //const MEGIsActiveKey = 'MEGIsAcive';
            //const MEGActiveTabIdKey = 'MEGActiveTabId';
            if(!window.andiJSPluginMessageEventListenerExist) {
                window.addEventListener('message', function(event) {
                    //console.log('jsPlugin, received event:', event);
                    if (event.origin !== mainDomainUrl)
                        return;
                    let data = typeof event.data === 'string' ? JSON.parse(event.data) : {};
                    //console.log('jsPlugin, event.data: ', data);
                    if (data.case === 'CONVERSATION_ID') {
                        conversationId = data.id; //Got conversationId from UI side
                        sendDataLayerAttr();
                    } else if (data.case === 'MINIMIZED') {
                        //console.log('jsPlugin updating to small size');
                        attChatWindow.style.width = '3.3em';
                        attChatWindow.style.height = '4.6em';
                        attChatWindow.style.bottom = '156px';
                        try {
                            if (contentWindow)
                                contentWindow.postMessage(JSON.stringify({
                                    case: 'DONE'
                                }), contentWindow.location.origin);
                        } catch (err) {
                            log('contentWindow.postMessage Minimized Error', err);
                            console.log('contentWindow.postMessage Minimized Error: ', err);
                        }
                    } else if (data.case === 'OPENED' || data.case === 'CLOSED') {
                        const megChatOpened = data.case === 'OPENED';
                        //console.log('jsPlugin updating to full size');
                        window.sessionStorage.setItem('MEGChatinProgress', megChatOpened);
                        window.sessionStorage.setItem('AndiChatInProgress', megChatOpened);
                        
                        if(isSupportPage()===true){
                                triggerNuanceEventListener();
                        }
                        /*              window.sessionStorage.setItem(MEGIsActiveTabSessionKey, megChatOpened);
                                        window.localStorage.setItem(MEGIsActiveKey, megChatOpened);
                                        if (megChatOpened === true && window.megTabId) {
                                            localStorage.setItem(MEGActiveTabIdKey, window.megTabId);
                                        }
                                        if (data.case === 'CLOSED') {
                                            localStorage.removeItem(MEGActiveTabIdKey);
                                            window.sessionStorage.removeItem(MEGIsActiveTabSessionKey);
                                            window.localStorage.removeItem(MEGIsActiveKey);
                                        }
                        */
                        //notify meg chat opened to other tabs
                        /*
                                        const megChatOpenedKey = 'megChatOpened';
                                        window.localStorage.setItem(megChatOpenedKey, megChatOpened);
                                        window.localStorage.removeItem(megChatOpenedKey);
                        */
                        if (megChatOpened === true && chatInProgressOnThisTab === false) {
                            chatInProgressOnThisTab = true;
                        }
                        if (data.case === 'CLOSED') {
                            chatInProgressOnThisTab = false;
                        }
                        attChatWindow.style.width = '100%';
                        attChatWindow.style.height = '100%';
                        attChatWindow.style.bottom = '0';
                        try {
                            if (contentWindow)
                                contentWindow.postMessage(JSON.stringify({
                                    case: 'DONE'
                                }), contentWindow.location.origin);
                        } catch (err) {
                            log('contentWindow.postMessage Opened/Closed', err);
                            console.log('contentWindow.postMessage Opened/Closed Error: ', err);
                        }
                    } else if (data.case === 'REDIRECT') {
                        window.sessionStorage.setItem('MEGChatinProgress', false);
                        window.sessionStorage.setItem('AndiChatInProgress', false);
                    
                        //window.location.href = buildApiUrlWithDomain('/support/');
                        window.location.assign(buildApiUrlWithDomain('/support/'));
                    } else if (data.case === 'ROUTETONUANCE'){
                        hideANDIChat();
                    }
                });
                window.andiJSPluginMessageEventListenerExist = true;
            }
        } catch (e) {
            const errorMessage = 'Got error in outer catch block of enableUIListener ';
            log(errorMessage, e);
            console.log('jsPlugin, enableUIListener error: ', e);
             
        }
    }
    //Loading ANDi Chat
    function showMegChatIcon() {
        try {
            if(window.document.getElementById("chatDiv") || 
                window.document.getElementById("attChatWindow")){
                showHiddenANDIChat();
                return;
            }

			setAndiExistFlagToTrue();
            if(isSupportPage()===true){
				loadNuanceChatIcon();
			}
            var content = window.document.createElement('div');
            content.id = 'chatDiv';
            var iframesrc = encodeURI(mainDomainUrl + '/chat');
            content.innerHTML = '<iframe id="attChatWindow" title="Chat Pane"' +
                ' name="123456789"' +
                ' src="' + iframesrc + '"' +
                ' style="position:fixed;height:4.6em;width:3.3em;bottom:156px;right:0;z-index:999999;"' +
                ' scrolling="NO"' +
                ' frameborder=0' +
                '></iframe>';
            window.document.body.appendChild(content);
        }  catch (error) {
            log('showMegChatIcon error', error);
            console.log('jsPlugin, showMegChatIcon catched error: ', error);
        }
    }

    function sendFinishSignal() {
        window.postMessage(JSON.stringify({
            case: 'FINISH'
        }), mainDomainUrl);
    }
    function setLoadingNuanceTrue(failRequestName, error) {
        window.sessionStorage.setItem('loadNuanceChat', 'true');
        console.log('jsPlugin, catched ' + failRequestName + 'error: ', error);
        sendFinishSignal();
    }

    function isANDiLoadedOnThisPage() {
        const chatIFrame = document.getElementById('attChatWindow');
        return chatIFrame !== undefined && chatIFrame !== null;
    }

    // Loading Nuance Chat
    function loadNuanceChatIcon() {
        suppressChat().then(function(suppressChat) {
            if (suppressChat === false) {
                if (isANDiLoadedOnThisPage() === true && isSupportPage()=== false) {
                    log('ANDi exist on this page. Not loading Nuance.');
                    console.log('ANDi exist on this page. Not loading Nuance.');
                    return;
                }
                if (cookieExist('ChatAB') === false) {
                    const chatABCookieExpiryValue = chatABCookieExpiry();
                    setCookie('ChatAB', 'Nuance', chatABCookieExpiryValue, '.att.com');
                }
                var touchcommerce = document.createElement('script');
                touchcommerce.src = 'https://att.inq.com/chatskins/launch/inqChatLaunch10004119.js';
                document.getElementsByTagName('body')[0].appendChild(touchcommerce);
                console.log('Chat DTM Global Rule from Jsplugin');
            }
        });
    }
    function hideNuanceChatBot() {
        var nuanceChat = document.getElementById('Chat_Bottom_Right');
        if (nuanceChat == null) {
            if (nuanceChatHideCounter > 40) {
                if (nuanceTimer != null) {
                    clearInterval(nuanceTimer);
                }
                return;
            }
            if (nuanceChatHideCounter == 0) {
                nuanceTimer = setInterval(hideNuanceChatBot, 1000);
            }
            nuanceChatHideCounter++;
            return;
        }
        if (nuanceTimer != null) {
            clearInterval(nuanceTimer);
        }
        nuanceChat.style.display = 'none';
    }

    function loadMegUIState() {
        const sessionStorageUIStateKey = 'chatStorageDataObj';
        const isEmpty = function(obj) {
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    return false;
                }
            }
            return JSON.stringify(obj) === JSON.stringify({});
        };
        const createVersionQueryStringFromUIState = function(clientUIState) {
            if (clientUIState && clientUIState.version && clientUIState.version > 0) {
                return '?version=' + clientUIState.version;
            }
            return '';
        };
        const transferChatOnTabClose = function(serverUIState, clientUIState) {
            const megPageUnloadInProgressKey = 'megpageunloadinprogress';
            const megPageUnloadInProgress = getCookie(megPageUnloadInProgressKey);
            let date = new Date();
            date.setTime(date.getTime() - (60 * 1000));
            const expires = 'expires=' + date.toUTCString();
            setCookie(megPageUnloadInProgressKey, '', expires, '.att.com');
            if (megPageUnloadInProgress === 'true' && serverUIState && isEmpty(serverUIState) === false && serverUIState.megTabId != window.megTabId) {
                serverUIState.megTabId = window.megTabId;
                clientUIState = serverUIState;
                sessionStorage.setItem(sessionStorageUIStateKey, JSON.stringify(clientUIState));
                postRequest(buildApiUrlWithDomain('/msapi/chatlogicprocessor/v1/ui-state'), serverUIState)
                    .then(function() {
                        log('Transfer active meg tab conversation');
                        console.log('Transfer active meg tab conversation');
                    });
            }
            return {
                'serverUIState': serverUIState,
                'clientUIState': clientUIState
            };
        };
        const browserUIState = sessionStorage.getItem(sessionStorageUIStateKey);
        let clientUIState = browserUIState ? JSON.parse(browserUIState) : undefined;
        //Handle if megtabid is removed from client ui state
        if (clientUIState && !clientUIState.megTabId) {
            clientUIState.megTabId = window.megTabId;
            if (!clientUIState.version) {
                clientUIState.version = 0;
            }
            sessionStorage.setItem(sessionStorageUIStateKey, JSON.stringify(clientUIState));
        }
        // Handle Duplicate Tab
        if (clientUIState && clientUIState.megTabId !== window.megTabId) {
            clientUIState = undefined;
            sessionStorage.removeItem(sessionStorageUIStateKey);
        }
        const uiStateRequest = getRequest(buildApiUrlWithDomain('/msapi/chatlogicprocessor/v1/ui-state' + createVersionQueryStringFromUIState(clientUIState)));
        return new Promise(function(resolve, reject) {
            uiStateRequest.then(function(serverUIState) {
                try {
                    //Handle if server doesnt have megtabid info. reset server state
                    if (serverUIState && isEmpty(serverUIState) === false && !serverUIState.megTabId) {
                        serverUIState = {};
                        postRequest(buildApiUrlWithDomain('/msapi/chatlogicprocessor/v1/ui-state'), serverUIState)
                            .then(function() {
                                log('Removed server state as no megTabId found');
                                console.log('Removed server state as no megTabId found');
                            });
                    }
                    const transferUIStateIfNecessary = transferChatOnTabClose(serverUIState, clientUIState);
                    serverUIState = transferUIStateIfNecessary.serverUIState;
                    clientUIState = transferUIStateIfNecessary.clientUIState;
                    //Handle chat in progress. if active session in other tab dont load chat iFrame
                    if (serverUIState && isEmpty(serverUIState) === false && serverUIState.megTabId !== window.megTabId) {
                        log('Chat in progress on tab: ' + serverUIState.megTabId + ' current tab: ' + window.megTabId);
                        sessionStorage.setItem(sessionStorageUIStateKey, JSON.stringify({
                            megTabId: window.megTabId,
                            version: 0
                        }));
                        reject({
                            chatIsInProgressOnOtherTab: true
                        });
                        return;
                    }
                    chatInProgressOnThisTab = serverUIState && serverUIState.megTabId === window.megTabId ? true : false;
                    let uiStateResult;
                    if (serverUIState && isEmpty(serverUIState) === false) {
                        if (clientUIState) {
                            if (clientUIState.version < serverUIState.version) {
                                uiStateResult = serverUIState;
                            }
                        } else {
                            uiStateResult = serverUIState;
                        }
                    } else {
                        if (!clientUIState) {
                            uiStateResult = {
                                megTabId: window.megTabId,
                                version: 0
                            };
                        }
                    }
                    if (uiStateResult && uiStateResult.megTabId === window.megTabId) {
                        sessionStorage.setItem(sessionStorageUIStateKey, JSON.stringify(uiStateResult));
                    }
                    if (chatInProgressOnThisTab === true) {
                        suppressChat(serverUIState)
                            .then(function(suppressChat) {
                                if (suppressChat === false && isOnDemandANDITriggered()===false) {
                                    resolve();
                                } else {
                                    reject({
                                        suppressAllChats: true
                                    });
                                }
                            });
                        return;
                    }
                    //Check If ANDI Enable don't check tagging page
                    if(isANDIEnable===true){
                        if(isANDiLoadedOnThisPage()===false){
                            resolve();
                        }else{
                            reject({
                                    andiLoadedOnThisPage: true
                                });
                        }
                        return;
                    }
                    //Check If ANDI disable don't check tagging page
                        if(isANDIDisable===true){
                        if(isANDiLoadedOnThisPage()===true){
                            reject({
                                    hideANDIChat: true
                                });
                        }else{
                            resolve();
                        }
                        return;
                    }
                    
                    const aggregateinfoAndIXPFlagCall = getAggregateinfoAndIXPFlagCall();
                    aggregateinfoAndIXPFlagCall.then(function(afterPromiseRes) {
                        let isShowWithOverride=showAndiWithOverride(afterPromiseRes) || false;
                        let isANDItagged=checkANDITagged(afterPromiseRes) || false;
                        if(showAndiWithOverride(afterPromiseRes) === true){
                            resolve();
                        } else {
                            loadNuanceScriptOnConditions(null,isShowWithOverride);
                            if(isANDItagged===true){
                                reject({
                                   showAndiWithOverride: true
                               });
                           }else{
                               reject();
                           }
                        }
                    }).catch(function(error) {
                        log('got error while making request to isAggregateinfoAndIXPFlagCall()', error)
                        console.log('got error when executing isAggregateinfoAndIXPFlagCall request: ', error);
                        reject();
                    });
                } catch (error) {
                    log('got error while making request to uistate api', error);
                    console.log('got error when applying meguistate: ' + error);
                    reject(error);
                }
            });
        });
    }
    function getDeviceType() {
        let ua = navigator.userAgent;
        if (/(tablet(?!.*pc)|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
            return "Tablet";
        }
        ua = navigator.userAgent || navigator.vendor || window.opera;
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(ua) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(ua.substr(0, 4)) ||
            /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
            return "Mobile";
        }
        return "Desktop";
    }
    function isDesktop() {
        return getDeviceType() === 'Desktop';
    }
    /* Unused funciton for now */
    function megConditionsForUnauthenicatedURL() {
        // this function always return false until June 15th after that will be updated with prod domain
        if (document.location.href.indexOf('https://e-tst3.stage.att.com/buy/phones/') > -1) {
            return true;
        } else {
            return false;
        }
    }
    function enableMEG() {
        const chatABCookieExpiryValue = chatABCookieExpiry();
        setCookie('ChatAB', 'MEG', chatABCookieExpiryValue, '.att.com');
        console.log('Loading MEG ');
        loadMegUIState().then(function() {
                showMegChatIcon();
                enableUIListener();
                hideNuanceChatBot();
            })
            .catch(function(error) {
                if (error && error.chatIsInProgressOnOtherTab === true) {
                    checkChatIsInProgressOnOtherTabInPage();
                    return;
                }
                if (error && error.suppressAllChats === true) {
                    return;
                }
                if (error && error.andiLoadedOnThisPage === true) {
                    showHiddenANDIChat();
                    return;
                }
                if (error && error.hideANDIChat === true) {
                    hideANDIChat();
                    return;
                }
                if(error && error.showAndiWithOverride === true)
				{
					let errorMessageValue="ANDI not loaded in tagged page as showAndiWithOverride criteria not met";
					//log(errorMessageValue, error); 	
					return;
				}
                const errorMessage = 'Got error in outer catch block of loadMegUIState under enableMEG ';
                log(errorMessage, error);
                 
            });
    }
    function cookieExist(cookieName) {
        const result = getCookie(cookieName);
        if (result) {
            return true;
        }
        return false;
    }
    function getCookie(cookieName) {
        var name = cookieName + '=';
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return undefined;
    }
    function setCookie(cookieName, cookieValue, cookieExpiration, cookieDomain) {
        let cookie = cookieName + '=' + cookieValue + '; path=/';
        if (cookieExpiration) {
            cookie = cookie + '; expires=' + cookieExpiration;
        }
        if (cookieDomain) {
            cookie = cookie + '; domain=' + cookieDomain;
        }
        document.cookie = cookieName + '=' + cookieValue + '; expires=' + cookieExpiration + '; path=/; domain=' + cookieDomain;
    }
    function getCurrentPageUrl() {
        try {
            let currentURL = window.location.href;
            if (null != currentURL && currentURL != '') {
                //currentURL = currentURL.includes('?') ? currentURL.split('?', 1).toString() : currentURL;
                currentURL = currentURL.indexOf('?') !== -1 ? currentURL.split('?', 1).toString() : currentURL;
            }
            return encodeURIComponent(currentURL);
        } catch (error) {
            console.log("Error while encoding URL");
        }
    }
    function buildApiUrlWithDomain(uri) {
        if (uri) {
            return andiApiDomain() + uri;
        }
        return uri;
    }
    function isLowerEnv() {
        return mainDomainUrl.indexOf('.stage.') > -1 || mainDomainUrl.indexOf('finalstage.') > -1
        || mainDomainUrl.indexOf('idp-fie.test')> -1;
    }
    function chatABCookieExpiry() {
        let date = new Date();
        date.setTime(date.getTime() + (120 * 60 * 1000)); // 2 hours
        const expires = 'expires=' + date.toUTCString();
        return expires;
    }
    function suppressChat(serverUIState) {
        return new Promise(function(resolvePromise, rejectPromise) {
            const isEmpty = function(obj) {
                for (var prop in obj) {
                    if (obj.hasOwnProperty(prop)) {
                        return false;
                    }
                }
                return JSON.stringify(obj) === JSON.stringify({});
            };
            const supressPaths = function() {
                if (document.location.href.indexOf('/acctmgmt/fid') > -1 ||
                    document.location.href.indexOf('/acctmgmt/fid/accountinfo') > -1 ||
                    document.location.href.indexOf('/acctmgmt/fpwd') > -1) {
                    return true;
                }
                return false;
            };
            const allowChatToLoad = function(serverUIState) {
                return new Promise(function(resolve, reject) {
                    if (serverUIState) {
                        if (isEmpty(serverUIState) === false) {
                            resolve(false);
                            return;
                        }
                        resolve(true);
                    } else {
                        const uiStateRequest = getRequest(buildApiUrlWithDomain('/msapi/chatlogicprocessor/v1/ui-state'));
                        uiStateRequest.then(function(serverUIStateResponse) {
                            if (isEmpty(serverUIStateResponse) === false) {
                                resolve(false);
                                return;
                            }
                            resolve(true);
                        }).catch(function(error) {
                            log('got error while making request to uistate under allowChatToLoad', error);
                            console.log('error when making get call to UIState endpoint ' + error);
                            resolve(true);
                        });
                    }
                });
            };
            if (supressPaths() === true) {
                allowChatToLoad(serverUIState)
                    .then(function(allowChatToLoad) {
                        resolvePromise(allowChatToLoad === false);
                    });
            } else {
                resolvePromise(false);
            }
        });
    }

    function invokeANDIVAChat(isANDIEnable, aggregateinfoAndIXPFlagResponse) {
        let IXPFlag = aggregateinfoAndIXPFlagResponse.ixpHeader;
        let isANDItagged=checkANDITagged(aggregateinfoAndIXPFlagResponse) || false;
        let isShowWithOverride=showAndiWithOverride(aggregateinfoAndIXPFlagResponse) || false;

        if(aggregateinfoAndIXPFlagResponse.payloadResponse 
            && aggregateinfoAndIXPFlagResponse.payloadResponse.isAuthenticated === true) {
            if(waitingCustomerInfo) {
                sendDataLayerAttr();
                waitingCustomerInfo = false; //Reset the value
            }
            //Targetting Rules
            if(showAndiWithOverride(aggregateinfoAndIXPFlagResponse) === true) {
                console.log("Passed, will show ANDi chat for auth urls");
                //enableSSAFListener();
                enableMEG();
            } else {
                if(isShowWithOverride===false){
                    loadNuanceScriptOnConditions(null,isShowWithOverride); 
                }
                if(isANDItagged===true){
                    throw new Error("showAndiWithOverride");
                }
                //If Targetting Rules are not met, inform DTM to launch Nuance Chat
                log(' as rule didnt pass - aggregateinfoAndIXPFlagResponse');
            }
        } else { //Not Authenticated
            if(isANDIEnable===true || (IXPFlag!==null 
                && IXPFlag.indexOf('variant1-andichat') > -1
                && showAndiWithOverride(aggregateinfoAndIXPFlagResponse) === true)) {
                console.log("Passed, will show ANDi chat for uauthurls");
                //enableSSAFListener();
                enableMEG();
            } else {
                if(isShowWithOverride===false){
                    loadNuanceScriptOnConditions(null,isShowWithOverride); 
                }
                if(IXPFlag.indexOf('variant1-andichat')===-1 && isANDItagged===true){
                    throw new Error("containANDIIXPFlag");
                }else if(isANDItagged===true){
                    throw new Error("showAndiWithOverride");
                }
                log(' as rule didnt pass - isANDIEnable===true || (IXPFlag!==null && IXPFlag.indexOf("variant1-andiunauth") > -1');
                console.log("Failed, unauth throttle not found loading Nuance");
            }
        }
    }
    
    function addJQuerySupport() {
        if (isFetchAvaliable === false && !window.$) {
            // Create JQuery script tag
            const jqueryScript = document.createElement("script");
            jqueryScript.type = "text/javascript";
            jqueryScript.src =
                "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
            // Add jquery to head element
            document.head.appendChild(jqueryScript);
            jqueryScript.addEventListener('load', function() {
                window.$ = window.jQuery;
                log('Jquery loaded running script again!');
                andiEventListener("","",null);
            });
        } else {
            console.log("JSPlugin: page has ES6 support or JQuery.");
        }
    }
    function addMegTabId() {
        const megTabIdCookieName = 'magTabId';
        const setMegTabIdCookie = function(value) {
            const megTabIdCookieExpireInMinutes = window.location.origin.toLowerCase().indexOf('stage') !== -1 ? 8 : 3;
            let date = new Date();
            date.setTime(date.getTime() + (megTabIdCookieExpireInMinutes * 60 * 1000));
            const expires = 'expires=' + date.toUTCString();
            setCookie(megTabIdCookieName, value, expires, '.att.com');
        };
        const deleteMegTabIdCookie = function() {
            let date = new Date();
            date.setTime(date.getTime() - (60 * 1000));
            const expires = 'expires=' + date.toUTCString();
            setCookie(megTabIdCookieName, '', expires, '.att.com');
        };
        const getMegTabIdCookie = function() {
            return getCookie(megTabIdCookieName);
        };
        const browserDetect = function(){
                 
            const userAgent = navigator.userAgent;
            let browserName;
            
            if(userAgent.match(/chrome|chromium|crios/i)){
                browserName = "chrome";
              } else if(userAgent.match(/firefox|fxios/i)){
                browserName = "firefox";
              } else if(userAgent.match(/safari/i)){
                browserName = "safari";
              } else if(userAgent.match(/edg/i)){
                browserName = "edge";
              } else {
                browserName="No browser detection";
              }
            return browserName;
        };

        if(!window.andiJSPluginUnloadEventListenerExist) { 
            const isOnIOS = navigator.userAgent.match(/iPad/i)|| navigator.userAgent.match(/iPhone/i);
            const pageHideEventType = 'pagehide';
            let eventName = isOnIOS ? pageHideEventType : 'beforeunload';
            
            if(eventName !== pageHideEventType && browserDetect() === 'safari' && 'onpagehide' in window) {
                eventName = pageHideEventType;
            }
            window.addEventListener(eventName, function(e) {
                window.sessionStorage.megTabId = window.megTabId;
                setMegTabIdCookie(window.megTabId);
                if (chatInProgressOnThisTab === true) {
                    setCookie('megpageunloadinprogress', 'true', undefined, '.att.com');
                }
                return;
            });
            window.andiJSPluginUnloadEventListenerExist = true;
        }
        

        if (window.sessionStorage.megTabId) {
            window.megTabId = window.sessionStorage.megTabId;
            window.sessionStorage.removeItem('megTabId');
            deleteMegTabIdCookie();
        } else if (!window.megTabId) {
            const megTabIdCookieValue = getMegTabIdCookie();
            if (megTabIdCookieValue) {
                window.megTabId = megTabIdCookieValue;
                deleteMegTabIdCookie();
            } else {
                window.megTabId = String(Math.floor(Math.random() * Date.now().toString()));
            }
        }
    }

    function getAggregateinfoAndIXPFlagCall(resetState) {
        const currentPageURL = getCurrentPageUrl();
        const sessionStorageUIStateKey = 'chatStorageDataObj';
        const browserUIState = sessionStorage.getItem(sessionStorageUIStateKey);
        const clientUIState = browserUIState ? JSON.parse(browserUIState) : undefined;
        const analysisAggregateInfo = function(aggregateData, ixpHeader) {
            return new Promise(function(resolve, reject) { 
                if(isLowerEnv() === false && aggregateData.isAuthenticated === true && aggregateData.taggedUrl.response === true) {
                    
                    let isCGEnabled =  ixpHeader ? ixpHeader.indexOf('variant1-cg') > 0 : false;

                    if (isCGEnabled) {
                        return resolve(aggregateData);
                    }

                    const getCustomerInfo = getRequestWithoutFallback(buildApiUrlWithDomain('/msapi/reporting/v1/customerinfo'));
                    getCustomerInfo.then(function (customerInfo) {
                        let userTypeInfo = '';
                        let libertyFlag = "0";
                        if (customerInfo !== undefined && customerInfo !== null) {
                            userTypeInfo = customerInfo["user.customerType"] || '';
                            libertyFlag = customerInfo["user.account.libertyFlag"] || '0';
                            //console.log('jsPlugin, got response from customerInfo: ', getCustomerInfoResponse);
                        }
                        if (userTypeInfo === "CONS" && libertyFlag === "0") {
                            aggregateData.shownAndi = true;
                        } else {
                            aggregateData.shownAndi = false;
                        }
                        resolve(aggregateData);
                    }).catch(function (error) {
                        log('Got error in /msapi/reporting/v1/customerinfo', error);
                        console.log('error while getting customerInfo');
                        reject("not able to get response.");
                    }); 
                }
                else {
                    resolve(aggregateData);
                }
            });
        };
        let urlPath = '/msapi/chatlogicprocessor/v1/user/aggregateinfo?url=' + currentPageURL;
        //if(clientUIState && clientUIState.conversationId){ //Need to revisit
           // urlPath = urlPath + '&conversationId=' + clientUIState.conversationId;
        //}
        const url = buildApiUrlWithDomain(urlPath);

        if (isFetchAvaliable === true) {
            return new Promise(function(resolve, reject) {
                if(resetState !== true && aggregateinfoResponse) {
                    resolve(aggregateinfoResponse);
                }
                else {
                    fetch(url, {
                        method: "GET",
                        credentials: 'include',
                    }).then(function(afterResponse) {
                        let ixpHeader, payloadResponse;
                        ixpHeader = afterResponse && afterResponse.headers && afterResponse.headers.get('ixp-exp-flags') 
                         ? afterResponse.headers.get('ixp-exp-flags') : ANDI_IXP_FLAG
                        if (afterResponse.status < 400 || afterResponse.ok) {
                            afterResponse.json().then(function(data) {
                                analysisAggregateInfo(data, ixpHeader)
                                .then(function(aggregateData) {
                                    payloadResponse = aggregateData;
                                    aggregateinfoResponse = {
                                        ixpHeader,
                                        payloadResponse
                                    };
                                    resolve(aggregateinfoResponse);
                                }).catch(function(error) {
                                    log('Got error in analysisAggregateInfo', error);
                                    console.log('error while analysisAggregateInfo');
                                    reject("not able to get analysisAggregateInfo response.");
                                });
                            });
                        } else {
                            reject("not able to get response.");
                        }
                    }).catch(function(error) {
                        log('got error while making request to ' + url + ' under getAggregateinfoAndIXPFlagCall', error);
                        console.log("jsPlugin, getRequest catched error: ", error);
                        reject(error);
                    });
                }
            });
        } else {
            return new Promise(function(resolve, reject) {
                if(resetState !== true && aggregateinfoResponse) {
                    resolve(aggregateinfoResponse);
                }
                else { 
                    window.$.ajax({
                        url: url,
                        type: 'GET',
                        contentType: "application/json",
                        success: function(data, textStatus, xhr) {
                            let ixpHeader, payloadResponse;
                            ixpHeader = xhr.getResponseHeader("ixp-exp-flags");
                            ixpHeader = ixpHeader===null || ixpHeader===undefined || ixpHeader==='' ? ANDI_IXP_FLAG : ixpHeader;
                            if (xhr.status < 400) {
                                analysisAggregateInfo(data, ixpHeader)
                                .then(function(aggregateData) {
                                    payloadResponse = aggregateData;
                                    aggregateinfoResponse = {
                                        ixpHeader,
                                        payloadResponse
                                    };
                                    resolve(aggregateinfoResponse);
                                }).catch(function(error) {
                                    log('Got error in analysisAggregateInfo', error);
                                    console.log('error while analysisAggregateInfo');
                                    reject("not able to get analysisAggregateInfo response.");
                                });
                            }
                            else {
                                reject("not able to get response.");
                            }
                        },
                        error: function(error) {
                            log('got error while making request to ' + url + ' under getAggregateinfoAndIXPFlagCall', error);
                            reject(error);
                        },
                    });
                }
            });
        }
    }

    function showAndiWithOverride(aggregateinfoAndIXPFlagResponse) {
        if(/*isLowerEnv() === true 
            || */aggregateinfoAndIXPFlagResponse.payloadResponse
            && aggregateinfoAndIXPFlagResponse.payloadResponse.shownAndi === true) {
                return true;
        }
        else {
            false;
        }
    }
	
	function checkANDITagged(aggregateinfoAndIXPFlagResponse){
		try{
			 if(aggregateinfoAndIXPFlagResponse && aggregateinfoAndIXPFlagResponse.payloadResponse.taggedUrl
			 && aggregateinfoAndIXPFlagResponse.payloadResponse.taggedUrl.response
				&& aggregateinfoAndIXPFlagResponse.payloadResponse.taggedUrl.response === true) {
					return true;
			}
		}
		catch(error){
			console.log("jsPlugin, checkANDITagged catched error: ", error);
		}
		
	}

    function loadNuanceScriptOnConditions( isLoadNuanceInMobileNativeAPP=null,
        isShowAndiWithOverride=null) { 
		if((null!==isLoadNuanceInMobileNativeAPP && isLoadNuanceInMobileNativeAPP === true) || (null!==isShowAndiWithOverride && isShowAndiWithOverride===false)) { //For Support Page Always loadNuanceChatIcon scripts when ANDI is tagged
            loadNuanceChatIcon(); 
		}
	}

	function checkLoadNuanceInMobileNativeAPP(isMobileApp, hasAndiMobileCookie) {
		if(isMobileApp && isMobileApp == 'native') {
			if(!hasAndiMobileCookie) {
				return true;
			}
		}
	}

	function checkMobileNativeAPP(isMobileApp) { 
		if(isMobileApp && isMobileApp == 'native') {
			return true;
		}
	}

    function log(message, errorLog) {
        const postRequest = function(url, data) {
            try {
                if (isFetchAvaliable === true) {
                    return fetch(url, {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data)
                    }).then(function(afterResponse) {
                        if (afterResponse.status == "200")
                            return afterResponse.json();
                        else
                            return '';
                    }).catch(function(error) {
                        console.log("jsPlugin, logrequest catched error: ", error);
                    });
                } else {
                    return new Promise(function(resolve, reject) {
                        window.$.ajax({
                            url: url,
                            type: 'POST',
                            data: JSON.stringify(data),
                            contentType: "application/json",
                            success: function(data, textStatus, xhr) {
                                if (xhr.status < 400) {
                                    if(xhr.status === 200)
                                        resolve(data);
                                    else
                                        resolve('');
                                } else {
                                    reject(xhr);
                                }
                            },
                            error: function(error) {
                                reject(error);
                            },
                        });
                    });
                }
            } catch (error) {
                console.log("jsPlugin, logrequest catched error: ", error);
                return null;
            }
        }
        const stackTraceParser = function(stack) {
            if(stack) {
                if(stack.length > 500){
                    return stack.substring(0, 500);
                }
                else {
                    return stack;
                }
            }
        }

        const sessionStorageUIStateKey = 'chatStorageDataObj';
        const browserUIState = sessionStorage.getItem(sessionStorageUIStateKey);
        const clientUIState = browserUIState ? JSON.parse(browserUIState) : undefined;
        let payload = {};
        try {
            payload.source = 'JSPlugin';
            payload.pageUrl = window.location.href;
        
            if(clientUIState && clientUIState.conversationId){
                payload.conversationId = clientUIState.conversationId;
            }
    
            if(!errorLog && message){
                payload.message = message;
            }
    
            if(errorLog instanceof Error){
                payload.error = {
                    message: 'msg: ' + message + ' error message: ' + errorLog.message
                };
    
                if(errorLog.stack) {
                    payload.error.stack = stackTraceParser(errorLog.stack);
                }
            }
            else {
                if(errorLog) {
                    payload.error = {
                        message: 'msg: ' + message + ' error message: ' + JSON.stringify(errorLog),
                        stack: stackTraceParser(errorLog.stack)
                    };
                }
            }    
        }
        catch(error) {
            console.log('jsPlugin, catched error while building log payload: ', error);
            return;
        }
        
        try {
            postRequest(buildApiUrlWithDomain('/msapi/chatlogicprocessor/v1/user/log'), payload)
            .then(function (responsedata){ })
            .catch(function(error) {
                console.log('jsPlugin, catched postRequest logging error: ', error);
            });
        }
        catch(error) {
            console.log('jsPlugin, catched error while calling postRequest to send logs to server: ', error);
        }
    }
    
    console.log('entering --- jsplugin');
    
    if(isFetchAvaliable === false && !window.$){
        addJQuerySupport();
        return;
    }

    if(ANDiexistsFlag===false && isOnDemandANDITriggered()===false){
        setAndiExistFlagToFalse();
    }
    //Check if jsplugin is running inside iframe. If Yes, return...
    if (window.self !== window.top) {
        log('ANDi JSPlugin is loaded inside iFrame. Aborting....');
        console.log('ANDi JSPlugin is loaded inside iFrame. Aborting....');
        return;
    }

    const currentPageUrl = getCurrentPageUrl();
	if(eventType === "reload" && eventName === "engage-js-event" && currentPageUrl === window.andiCurrentPageUrlJSPluginExecuted) {
		return;
	}
	window.andiCurrentPageUrlJSPluginExecuted = currentPageUrl;
	hideANDIChat();
    //load Nuance if user is not using desktop
    /*
    if(isDesktop() === false){
         
        return;
    }
    */
    const isMobileWeb = !isDesktop();

    if(isLowerEnv() === false && mainDomainUrl.indexOf('m.att.com') === -1 && mainDomainUrl.indexOf('www.att.com') === -1){
        loadNuanceChatIcon();
        return;
    }
   
    const nuanceChatInprogress = window.sessionStorage.getItem('NuanceChatInProgress');
    const browserUIState = window.sessionStorage.getItem('chatStorageDataObj');
    let clientUIState = browserUIState ? JSON.parse(browserUIState) : {};
    if (nuanceChatInprogress && nuanceChatInprogress === 'True'  && isSupportPage()=== false && clientUIState.chatInProgress !== 'Y') {
        log('loading nuance as rule didnt pass - nuanceChatInprogress && nuanceChatInprogress === "True"');
        loadNuanceChatIcon();
        return;
    }
    if(isOnDemandANDITriggered()==false){
        addMegTabId();
    }

    try {
        let chatABFlag = getCookie('ChatAB') || '';
        let currentPageURL = getCurrentPageUrl();
        const isAggregateinfoAndIXPFlagCall = getAggregateinfoAndIXPFlagCall(true);
        isAggregateinfoAndIXPFlagCall.then(function(afterPromiseRes){

            //When ANDI is not tagged for the page check for NativeAPP and allowed domain
			const isMobileApp = getCookie('accessDomain');
			let isMobileNativeAPP=checkMobileNativeAPP(isMobileApp)||  false;		
		    let isLoadNuanceInMobileNativeAPP=checkLoadNuanceInMobileNativeAPP(isMobileApp,hasAndiMobileCookie)|| false;
			let isANDItagged=checkANDITagged(afterPromiseRes) || false;
            
								
			//Load Nuance Scripts based on criterias 	
			loadNuanceScriptOnConditions(isLoadNuanceInMobileNativeAPP===true&&isANDItagged===false,null);
			
			if(isMobileNativeAPP===true){
				return;
			}
					
            if ((chatABFlag === "" || chatABFlag === null || chatABFlag === 'Nuance')) 
            {
                if(isANDIEnable===true){
                    if(isANDiLoadedOnThisPage()===false){
                        invokeANDIVAChat(isANDIEnable, afterPromiseRes);
                    }
                }
                else
                {
                    let IXPFlag = afterPromiseRes.ixpHeader;
                   
                    let containANDIFlag =  IXPFlag === null || IXPFlag === undefined ?
                    false : IXPFlag.indexOf("variant1-andichat") > 0;

                    if (containANDIFlag) {
                        invokeANDIVAChat(false,afterPromiseRes);
                    
                    } else {
                        if(isANDItagged===true)
                        {
							throw new Error("containANDIIXPFlag");
						}
                        log(' didnt pass rule - containANDIIXPFlag');
                    }
                    // if (null !== afterPromiseRes.payloadResponse 
                    //     && afterPromiseRes.payloadResponse !== undefined 
                    //     && afterPromiseRes.payloadResponse.taggedUrl !== undefined
                    //     && afterPromiseRes.payloadResponse.taggedUrl.response === true) {

                    // } else {
                    //     log(' as targeted url rule didnt met');
                    //      
                    // }
                }
            } else if (chatABFlag === "MEG") {
                //enableSSAFListener();
                console.log('Loading MEG...');
                loadMegUIState().then(function() {
                        showMegChatIcon();
                        enableUIListener();
                        hideNuanceChatBot();
                    })
                    .catch(function(error) {
                        if (error && error.chatIsInProgressOnOtherTab === true) {
                            checkChatIsInProgressOnOtherTabInPage();
                            return;
                        }
                        if (error && error.suppressAllChats === true) {
                            if(isSearchPageOnDemand() === true){
                                 hideANDIChat();
                            }
                            return;
                        }
                        if (error && error.andiLoadedOnThisPage === true) {
                            if(isSearchPageOnDemand() === true){
                                createInpageANDIDiv();
                            }else{
                                showHiddenANDIChat();
                            }
                            return;
                        }
                        if (error && error.hideANDIChat === true) {
                            hideANDIChat();
                            return;
                        }
                        if(error && error.showAndiWithOverride === true)
				        {
                            let errorMessageValue="ANDI not loaded in tagged page as showAndiWithOverride criteria not met";
                            //log(errorMessageValue, error); 	
                            return;
				        }
                        const errorMessage = 'Got error from loadMegUIState ';
                        log(errorMessage, error); 					
                    });
            } else {
				  if(isANDItagged===true)
                    {
						throw new Error("ChatABCookieCriteria")
					}
                log(' as targeted url rule didnt met');
            }
        })
        .catch(function(error) {
            let errorMessageValue='';
			if(error && error.message==="containANDIIXPFlag"){
				errorMessageValue="ANDI not loaded in tagged page as throttle is set to zero";
			}
			else if(error && error.message==="showAndiWithOverride"){
				errorMessageValue="ANDI not loaded in tagged page as showAndiWithOverride criteria not met";
			}
			else if(error && error.message==="ChatABCookieCriteria"){
				errorMessageValue="ANDI not loaded in tagged page as ChatABCookieCriteria criteria not met";
			}
			else{
				errorMessageValue='Got error making request to getAggregateinfoAndIXPFlagCall api ';
                log(errorMessageValue, error);
            }
        });

    } catch (error) {
        const errorMessage = 'Got error in outer main catch block';
        log(errorMessage, error); 
    }
};
andiEventListener("","",null);