/**
*	Ericsson javascripts for edm
*/
var edmTags = (function() {
    var pageTag, sessionTag, eventTag;
    /**
     * Initializes the ids for pageTag, sessionTag and eventTag
     * These are mandatory
     *
     * @param params {object} Object with the following properties:
     * * pageTag, sessionTag and eventTag
     *
     * @example
     *   edmTags.init({ pageTag: "edmPage", sessionTag: "edmSession",eventTag: "edmEvent" });
     */
    function init(params) {
        pageTag = params.pageTag;
        sessionTag = params.sessionTag;
        eventTag = params.eventTag;
    }

    /**
     * Read html5 data from pageTag
     * data-page-context data-page-url data-page-language data-page-name data-page-flow-code
     */
    function setPageAttributes() {
        var id = pageTag;
        var $edmPageTag = $('#' + id);
        if ($edmPageTag) {
            // Read html5 page context data-page-language data-page-name and data-page-flow-code from pageTag
            _setEdmVar('page.pageInfo.language', $edmPageTag.data('pageLanguage'));
            _setEdmVar('page.pageInfo.friendlyPageName', $edmPageTag.data('pageName'));
        };
        setPageUrl();
    }

    /**
     * Read html5 page context data-page-context and data-page-url from pageTag
     */

    function setPageUrl() {
        var id = pageTag;
        var $edmPageTag = $('#' + id);
        if ($edmPageTag) {
            var type = _getViewType();
            var context = $edmPageTag.data('pageContext');
            var action = $edmPageTag.data('pageUrl');
            var virtualUrl = _getPageUrl(context, action);
            _setEdmVar('page.pageInfo.responsiveExperience', type);
        };
    }

    function getPageTagId() {
        return pageTag;
    }

    function _setEdmVar(name, value) {
        try { 
		    	if (typeof value === 'undefined' ||  value == null) {
		            return;
		        }
		    	// could convert a number to string
		        var temp = value+'';
		        //Only set ddo when value is not empty
		        if (temp.length > 0) {
		            ddo.setVar(name, temp);
		        }
	        } catch(err) {
	        	console.log(err);
	        }
    }

    function _getViewType() {
        var width = $(window).width();
        var viewType = 'desktop';
        if (typeof width === 'undefined') {
            return viewType;
        }
        if (width <= 480) {
            viewType = 'smartphone';
        } else if (width <= 767) {
            viewType = 'tablet';
        } else {
            viewType = 'desktop';
        }
        return viewType;
    }

    function _getPageUrl(context, action) {
        var temp1 = context;
        var temp2 = _getViewType();
        var temp3 = action;
        if (typeof context === 'undefined') {
            temp1 = '/';
        }
        if (typeof action === 'undefined') {
            temp1 = '';
        }
        var url = temp1 + '/virtual/' + temp2 + temp3;
        return url;
    }


    /**
     * Read common data from session tag
     */

    function setSessionAttributes() {
        var id = sessionTag;
        var $edmSessionTag = $('#' + id);
        if ($edmSessionTag) {
            _setEdmVar('user.login.id', $edmSessionTag.data('userLoginId'));
            _setEdmVar('user.login.type', $edmSessionTag.data('userLoginType'));
            _setEdmVar('user.account.ctn', $edmSessionTag.data('userAccountCtn'));
            _setEdmVar('user.account.fan', $edmSessionTag.data('userAccountFan'));
            _setEdmVar('user.account.liabilityType', $edmSessionTag.data('userAccountLiabilityType'));
            _setEdmVar('user.account.status', $edmSessionTag.data('userAccountStatus'));
            _setEdmVar('user.account.billingState', $edmSessionTag.data('userAccountBillingState'));
            _setEdmVar('user.account.billingCity', $edmSessionTag.data('userAccountBillingCity'));
            _setEdmVar('user.account.billingZip', $edmSessionTag.data('userAccountBillingZip'));
            _setEdmVar('page.pageInfo.zipCode', $edmSessionTag.data('userZip'));
            _setEdmVar('user.attributes.email', $edmSessionTag.data('userEmail'));
        };
    }

    /**
     * Read common data from event tag
     * data-event-action data-event-name data-event-attributes
     */
 
    function setEventAttributes() {
    	var id = eventTag;
    	var $edmPushTag = $('#' + id);
    	if ($edmPushTag) {

    		$(document).ready(function(){
    			var eventAction = $edmPushTag.data('eventAction');
    			var eventName = $edmPushTag.data('eventName');
    			var eventAttrs = $edmPushTag.data('eventResponseData');
    			if (typeof eventAction === 'undefined' || typeof eventName === 'undefined') {
    				return;
    			}
    			if (typeof eventAttrs === 'undefined') {
    				eventAttrs = '';
    			}
    			var temp = eventAttrs.split('|');
    			try { 

    				// eventResponse 
    				ddo.pushEvent(eventAction, eventName, _buildEventData(temp));
    			}
    			catch(err) {
    				console.log(err);
    			}
    		});

    		if(document.getElementById("login-form")){
    			document.getElementById("login-form").onsubmit = function() {
    				var eAction = $edmPushTag.data('eventSubmitAction');
    				var eName = $edmPushTag.data('eventSubmitName');
    				var etData = $edmPushTag.data('eventSubmitData');
    				if (typeof eData === 'undefined') {
    					eData = '';
    				}
    				var tmp = etData.split('|');
    				try { 
    					// eventSubmit 
    					ddo.pushEvent(eAction, eName, _buildEventData(tmp));
    				}
    				catch(err) {
    					console.log(err);
    				}
    			};
    		}
    	}

    }


    function _buildEventData(rows) {
        var jsonData = {};
        if (typeof rows === 'undefined') {
            return jsonData;
        }
        rows.forEach(function(row) {
            var temp = row.split(':');
            if (temp.length == 2) {
                var myArray = temp[1].split('~');
            	if (_isArray(myArray) && myArray.length > 1 ) {
            	   jsonData[temp[0]] = myArray;
            	}
            	else
            	   jsonData[temp[0]] = temp[1];
            }
        });
        return jsonData;
    }

    function _isArray(myArray) {
        return myArray.constructor.toString().indexOf("Array") > -1;
    }
    /**
     * public fucntion for edm utils
     */
    return {
        pageTag: getPageTagId,
        init: init,
        setPageAttributes: setPageAttributes,
        setPageUrl: setPageUrl,
        getView: _getViewType,
        setSessionAttributes: setSessionAttributes,
        setEventAttributes: setEventAttributes
    };
})();

$(document).ready(function() {
    //console.log("call in document.ready");
	try {
		edmTags.setPageAttributes();
	    edmTags.setSessionAttributes();
	    edmTags.setEventAttributes();
	}
	catch(err) {
		console.log(err);
	}

});


/**
 * reset ddm value whenever resize
 * data-attribute data-page-responsive-experience for debug only
 */
$(window).load(function() {
    //console.log("call in window.load");
    var width = $(window).width();
    var type = edmTags.getView();
    var id = edmTags.pageTag();
    //Test only $("p.testp").text('Initial screen width is currently: ' + width + 'px.' + type);
    $('#' + id).attr('data-page-responsive-experience', type);
    edmTags.setPageUrl();
    //view
    $(window).resize(function() {
        //console.log("window.resize");
        var id = edmTags.pageTag();
        var type = edmTags.getView();
        $('#' + id).attr('data-page-responsive-experience', type);
        //test only $("p.testp").text('Width is currently: ' + width + 'px.' + type);
        edmTags.setPageUrl();
    });
});