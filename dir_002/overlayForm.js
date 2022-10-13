/// <reference path="jquery-3.6.0.min.js"/>

var storeOverlayForm = (function (window) {
    // My public methods will get added to this object
    var publicAPIs = {};

    //Can call from this .js or anything in the parent page via onclick="storeOverlayForm.saveAndCloseOverlay()
    publicAPIs.saveAndCloseOverlay = function () { 
        if (_overlayName != '')
            saveWallSeen();
        closeOverlay(true, _shortDelay);
    }
    //Everything else is private
    var _cookieName = 'storeOverlayCheckV2';
    var _storeUrl = '';
    var _overlayName = '';
    var _overlayOpen = false;
    var _promotionCode = '';
    //Wait this long between checking for another message
    var _shortDelay = 15; //success conditions
    var _longDelay = 60; //error & no existing messages conditions

    //Get actual store url
    var sc = document.getElementsByTagName("script");
    for (var idx = 0; idx < sc.length; idx++) {
        var s = sc.item(idx);

        if (s.src && s.src.match(/overlayForm\.js/)) {
            _storeUrl = s.src.substr(0, s.src.toLowerCase().indexOf('js/overlayform.js'));
            if (_storeUrl.indexOf('localhost') === -1 && _storeUrl.indexOf('dev.') === -1)
                _storeUrl = _storeUrl.replace('http:', 'https:'); //force https
        }
    }
    addEvent(window, 'load', function () {
        try
        {
        if (!navigator.cookieEnabled) {
            if (window.console && window.console.log)
                console.log('Skip overlay, the browser does not support or is blocking cookies.');
            return;
        }

        if (isIE() && isIE() < 8) {
            if (window.console && window.console.log)
                console.log('Skip overlay, old versions of IE not supported.');
            return; //skip loading overlay
        }
        if (!getCookie('userAccount') || getCookie('accountType') === 'pA1sNZMA') {
            if (window.console && window.console.log)
                console.log('Skip overlay, not logged in or using a shared account.');
            return; //skip loading overlay
        }
        if (getCookie(_cookieName)) {
            if (window.console && window.console.log)
                console.log('Skip overlay, has already seen it recently.  Confirmed via cookie.');
            return; //skip if already done
        }

        if (!window.jQuery) {
            var jq = document.createElement('script');
            jq.type = 'text/javascript';
            jq.src = '//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js';
            var sc = document.getElementsByTagName('script')[0];
            sc.parentNode.insertBefore(jq, sc);
        }

        // Poll for jQuery to come into existence
        var checkReady = function (callback) {
            if (window.jQuery) {
                callback(jQuery);
            }
            else {
                window.setTimeout(function () { checkReady(callback); }, 100);
            }
        };
        checkReady(function ($) {
            //Switch to mobile styles on resize
            $(window).resize(function () {
                switchCSS($(this).width());
            });

            try {
                //load up overlay css
                $('<link>').appendTo($('head')).attr({ type: 'text/css', rel: 'stylesheet' }).attr('href', _storeUrl + 'css/overlay.css');
                //pull in necessary plugin
                $.getScript( _storeUrl + 'js/iframeResizer.min.js', function() {
                    $.ajax({
                        url: _storeUrl + "JsonWebService.svc/hasOverlayMessage?Email=" + encodeURIComponent(getCookie('userAccount')),
                        data: {},
                        crossDomain: true,
                        dataType: 'jsonp',
                        success: function (msg) {
                            if (msg) {
                                if (window.console && window.console.log)
                                    console.log('Message waiting, load overlay');
                                loadOverlay();
                            }
                            else {
                                if (window.console && window.console.log)
                                    console.log('No message waiting, skip overlay');
                                closeOverlay(true, _longDelay);
                            }
                        }, //End success function
                        error: function (xhr, textStatus, errorThrown) {
                            closeOverlay(true, _longDelay);
                            var extraMsg = null;
                            if (xhr && xhr.responseText)
                                extraMsg = 'xhr.responseText = ' + xhr.responseText;
                            else {
                                extraMsg = '; textStatus = ';
                                extraMsg += textStatus;
                                extraMsg += '; errorThrown = ';
                                extraMsg += errorThrown;
                            }
                            reportError('hasOverlayMessage ajax error function', null, extraMsg);
                        } //End error function 
                    });
                });

            }
            catch (err) {
                reportError('checkReady function', err);
                closeOverlay(true, _longDelay);
            }

        });
        }
        catch (err) {
            reportError('window.onload function', err);
            closeOverlay(true, _longDelay);
        }
    });

    function addEvent(element, event, fn) {
        if (element.addEventListener)
            element.addEventListener(event, fn, false);
        else if (element.attachEvent)
            element.attachEvent('on' + event, fn);
    }

    function isIE() {
        var myNav = navigator.userAgent.toLowerCase();
        return (myNav.indexOf('msie') !== -1) ? parseInt(myNav.split('msie')[1]) : false;
    }

    function getCookie(name) {
        var results = document.cookie.match(name + '=(.*?)(;|$)');
        if (results)
            return (unescape(results[1]));// jshint ignore:line
        else
            return null;
    }

    function setCookieForDays(c_name, value, exdays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());// jshint ignore:line
        document.cookie = c_name + "=" + c_value;
    }

    function setCookieForMinutes(name, value, exminutes) {
        var exdate = new Date();
        exdate.setTime(exdate.getTime() + (exminutes * 60 * 1000));
        var expires = "; expires=" + exdate.toUTCString();
        document.cookie = name + "=" + value + expires + ";";
    }


    function loadOverlay() {
        if (!window.jQuery)
            return;
        try {
            $(document.body).wrapInner('<div id="default-content"></div>').append('<div id="overlay-container"><div id="store-overlay"><!--<a href="#" class="closeOverlay" onclick="storeOverlayForm.saveAndCloseOverlay()"></a>--></div></div><div id="overlay-background"></div>');
            $('<iframe id="store-external-content" class="store-iframe" frameborder="0" width="100%" scrolling="no"></iframe>').appendTo('#store-overlay').attr("src", _storeUrl + 'OverlayForm.aspx?UserAccount=' + encodeURIComponent(getCookie('userAccount')));
            $('iframe').iFrameResize({
                log: true,
                enablePublicMethods: true,
                checkOrigin: false,
                messageCallback: function (data) { 
                    if (data && data.message) {
                        if (window.console && window.console.log)
                            console.log('Message received from iframe ID ' + data.iframe.id + ': ' + data.message);
                        var messageAction = data.message; //default, no split.  Format: '[action]|[wallName]|[promotionCode]'
                        var messageData = '';
                        var promotionCode = '';
                        var messageData = data.message.split('|');
                        if (messageData.length >= 2)  
                            messageAction = messageData[0]; //fix action var
                        switch (messageAction) {
                            case 'open':
                                openOverlay();
                                if (messageData != '') {
                                    _overlayName = messageData[1];
                                    if (messageData.length >= 3) //New feature: May 2020
                                        _promotionCode = messageData[2];
                                    if (window.console && window.console.log)
                                        console.log('Loaded iframe, mode=' + _overlayName + ', promoCode=' + _promotionCode);
                                }
                                break;
                            case 'close':
                                closeOverlay(true, _shortDelay);
                                break;
                            case 'saveandclose':
                                storeOverlayForm.saveAndCloseOverlay();
                                break;
                            case 'logout':
                                logout();
                                break;
                            case 'error':
                                closeOverlay(true, _longDelay);
                                break;
                            default:
                                if (window.console && window.console.error)
                                    console.error('Invalid message: ' + data.message);
                                break;
                        }
                    }
                }
            });
        }
        catch (err) {
            reportError('loadOverlay function', err);
            closeOverlay(true, _longDelay);
        }
    }
    function logout()
    {
        if (window.console && window.console.log)
            console.log('Sending the user to logout');

        //location.href = _storeUrl + "Login.aspx?mode=silent&source=" + escape(location.href);
        location.href = _storeUrl + "Logout.aspx?source=" + escape(location.href);
        closeOverlay(true, _shortDelay);
    }

    function closeOverlay(setCookie, minutes) {
        if (setCookie && minutes>0)
            setCookieForMinutes(_cookieName, true, minutes);

        if (window.jQuery) {
            $('#overlay-container,#overlay-background').fadeOut();
            $('#store-external-content').hide();
            _overlayOpen = false;
        }
        if (_overlayOpen && window.console && window.console.log)
            console.log('Closing overlay, setting cookie to skip checking for new messages for the next ' + minutes + ' minutes');
    }

    function openOverlay() {
        if (window.jQuery) {
            $('#store-external-content').show();
            $('#overlay-container,#overlay-background').fadeIn();
            _overlayOpen = true;
			switchCSS($(window).width());//check for mobile
        }
    }
	
    function reportError(note, e, extraMsg) {
        try {
            if (!window.jQuery)
                return;
            var error = '[unknown]';
            if (e) {
                error = e.message;
                if (e.stack)
                    error += '.  Stack Trace: ' + e.stack;
            }
            if (typeof extraMsg !== "undefined" && extraMsg)
                error += '.  Extra Info: ' + extraMsg;
            $.ajax({
                type: "GET",
                url: _storeUrl + "JsonWebService.svc/ReportScriptError",
                data: {
                    Location:  location.href.replace(/'/g, "\\'"),
                    Note: note.replace(/'/g, "\\'"),
                    Error: error.replace(/'/g, "\\'")
                },
                contentType: "application/json; charset=utf-8",
                dataType: 'jsonp'
            });
            if (window.console && window.console.error)
                console.error(error);
        } catch (err) { }
    }

    function saveWallSeen() {
        try {
            if (!window.jQuery)
                return;
            $.ajax({
                type: "GET",
                url: _storeUrl + "JsonWebService.svc/ProcessRequest",
                data: {
                    Mode: 'SeenWall',
                    UserAccount: encodeURIComponent(getCookie('userAccount')),
                    WallName: _overlayName,
                    PromotionCode: _promotionCode
                },
                contentType: "application/json; charset=utf-8",
                dataType: 'jsonp',
                success: function (msg) {
                    if (window.console && window.console.log) {
                        if (msg && msg.d) {
                            console.log('Error updating LastSeen date: ' + msg.d);
                        }
                        else {
                            console.log('Successfully updated LastSeen date');
                        }
                    }
                }, //End success function
                error: function (xhr, textStatus, errorThrown) {
                    var extraMsg = null;
                    if (xhr && xhr.responseText)
                        extraMsg = 'xhr.responseText = ' + xhr.responseText;
                    else {
                        extraMsg = '; textStatus = ';
                        extraMsg += textStatus;
                        extraMsg += '; errorThrown = ';
                        extraMsg += errorThrown;
                    }
                    reportError('saveWallSeen ajax error function, wallName=' + _overlayName + ', promoCode=' + _promotionCode, null, extraMsg);
                } //End error function
            });
        } catch (err) { }
    }

    return publicAPIs;
})(this);


// enable mobile styles
function switchCSS(windowsize) {
	//console.log('window size: ' + windowsize);
	if (windowsize < 1023) {
		$('#store-overlay').addClass('mobile');
	} 
	else {
		if($('#store-overlay').hasClass('mobile')){
			$('#store-overlay').removeClass('mobile');
		}
	}
}
