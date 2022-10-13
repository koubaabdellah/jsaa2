	$jqtr=jQuery.noConflict();

	//Start Crazyegg 
	setTimeout(function(){var a=document.createElement("script");
	var b=document.getElementsByTagName("script")[0];
	a.src=document.location.protocol+"//script.crazyegg.com/pages/scripts/0020/2432.js?"+Math.floor(new Date().getTime()/3600000);
	a.async=true;a.type="text/javascript";b.parentNode.insertBefore(a,b)}, 1);
	//End Crazyegg 

	//Adobe Tracking Scripts
	function getUIExperience(){    
           var uiExperience = '';
           if ((window.innerWidth || document.documentElement.clientWidth) <= 767) {
                   uiExperience = 'Smartphone';
           }else if ((window.innerWidth || document.documentElement.clientWidth) <= 991) {
                   uiExperience = 'Tablet';
           }else if ((window.innerWidth || document.documentElement.clientWidth) >= 1200) {
                   uiExperience = 'Desktop';
           }
           return uiExperience;
	}

	function adobeTrkLeadFormSubmitFirstNet() {
		att.adobeDataLayer.pushEvent(
            att.adobeDataLayerManager.trackingEventCodeData.mcomContactMeSubmit()
        );
		// var formContent = $jqtr('#modalForm').contents(),
		// linkDestURL     = 'https://s2025473527.t.eloqua.com/e/f2',
		// formName 		= 'universalcontactform',
		// formEmail 		= formContent.find('input[name="email_address"]').val();

		// adobeTrkLeadForm({
		// 	formsubmit            : 'MCOM_Contact_Me_Submit', 
		// 	linkname              : 'Contact Me', 
		// 	linkdesturl           : linkDestURL,
		// 	formName              : formName, 
		// 	formEmail             : formEmail
		// });
	}


	/**
	 * adobeTrkLeadForm This method will be called when RAI form submit button click
	 * @param  {Object}    options {linkName:<value>, slotFriendlyName:<value>, linkDestinationUrl:<value>,
	 *                             formName:<value>, formEmail:<value>, formCompany:<value>, 
	 *                             formServicePortfolip:<value>,
	 *                             formServiceFamily:<value>, formService:<value>, 
	 *                             formSolutionOfInterest:<value>,
	 *                             formRequestType:<value>, formType:<value>}     
	 * @required           detm-container-hdr.js
	 * @required           detm-container-ftr.js
	 * @requires           RAI form submit button (inside iframe)
	 * @return {undefined} returns nothing
	 * @example
	 * Please documentation of adobeTrkLeadFormFailure to 
	 * understand how to call this function
	 */
	// var glbOptions;
	// function adobeTrkLeadForm (options) {
	// 	glbOptions = options;
	// 	if(typeof options === 'undefined') return;

	// 	att.adobeDataLayer.pushEvent(
    //         att.adobeDataLayerManager.trackingEventCodeData.mcomContactMeSubmit()
    //     );
	// }

	function adobeTrkLeadFormConfFirstNet() {
		if ($jqtr('.thankyoucontainer').is(':visible')) {
			adobeTrkLeadFormConf();
		}
	}

    /**
     * adobeTrkLeadFormConf Method will be called after successful post of RAI form submit
     * @param  {Object} options  {formsubmit:<value>, linkname:<value>, slotname:<value>, 
     *                            linkdesturl:<value>, url:<value>, 
     *                            formName:<value>, formEmail:<value>, formCompany:<value>, 
     *                            formServicePortfolip:<value>,
     *                            formServiceFamily:<value>, formService:<value>, 
     *                            formSolutionOfInterest:<value>,
     *                            formRequestType:<value>, formType:<value>}
     * @return {undefined}        returns nothing
     * @example
     * Please documentation of adobeTrkLeadFormFailure to 
     * understand how to call this function
     */
	function adobeTrkLeadFormConf () {
		if(typeof att.adobeDataLayer === 'undefined') return;
		att.adobeDataLayer.pushEvent(
            att.adobeDataLayerManager.trackingEventCodeData.mcomContactMeSubmit()
        );
		// ddo.pushEvent('formResponse', options.formsubmit, 
		// 	{
		// 		'successFlag'           : '1',
		// 		'linkName'              : options.linkname,
		// 		'linkDestinationUrl'    : options.linkdesturl,
		// 		'formName'              : options.formName,
		// 		'formEmail'             : options.formEmail
		// 	}
		// );
	}

	function parseUrl(url) {
		urlItems = url.split('/');
		if (urlItems[2]=='www.business.att.com') {
			url = url.replace(/^.*\/\/[^\/]+/, '');
		}
		return url;
	}

// START - Wait until DOM ready event for event binding
$jqtr(function () {
    // Event bindings
	// Header/Footer tracking
	$jqtr('header a').bind('click', function(event) {	 
		if(typeof att.adobeDataLayerManager !== 'undefined') {	 
		att.adobeDataLayer.pushEvent(att.adobeDataLayerManager.trackingDataOnClick(event,
			{
				'slotFriendlyName'   : 'Header',
				'contentFriendlyName': 'GlobalNav',
				'linkName'           : 'FirstNet Logo',
				'linkDestinationUrl' : $jqtr(this).attr('href'),
				'type': 'others'
			}
		));		 
		}
	});
	$jqtr('#sitemap a').bind('click', function(event) {	
		if(typeof att.adobeDataLayerManager !== 'undefined') {	 
		att.adobeDataLayer.pushEvent(att.adobeDataLayerManager.trackingDataOnClick(event,
			{
				'slotFriendlyName'   : 'Sitemap',
				'contentFriendlyName': $jqtr(this).text(),
				'linkName'           : $jqtr(this).text(),
				'linkDestinationUrl' : $jqtr(this).attr('href'),
				'type': 'others'
			}
		));		 
		}
	});
	$jqtr('#followus a').bind('click', function(event) {
		if(typeof att.adobeDataLayerManager !== 'undefined') {		 		
		att.adobeDataLayer.pushEvent(att.adobeDataLayerManager.trackingDataOnClick(event,
			{
				'slotFriendlyName'   : 'FollowUs',
				'contentFriendlyName': $jqtr(this).text(),
				'linkName'           : $jqtr(this).text(),
				'linkDestinationUrl' : $jqtr(this).attr('href'),
				'type': 'others'
			}
		));	
		}
	});
	$jqtr('#help .list-group a').bind('click', function (event) {
		if(typeof att.adobeDataLayerManager !== 'undefined') {		 	 
		att.adobeDataLayer.pushEvent(att.adobeDataLayerManager.trackingDataOnClick(event,
			{
				'slotFriendlyName'   : 'Help',
				'contentFriendlyName': $jqtr(this).text(),
				'linkName'           : $jqtr(this).text(),
				'linkDestinationUrl' : $jqtr(this).attr('href'),
				'type': 'others'
			}
		));	
		}
	});

	//P&S Landing Page Carousel Tracking
	$jqtr('.carousel-control-next').bind('click', function (event) {
		if(typeof att.adobeDataLayerManager !== 'undefined') {				 
		att.adobeDataLayer.pushEvent(att.adobeDataLayerManager.trackingDataOnClick(event,
			{
				'slotFriendlyName'   : 'marquee',
				'contentFriendlyName': 'carousel',
				'linkName'           : 'next',
				'linkDestinationUrl' : $jqtr(this).attr('href'),
				'type': 'others'
			}
		));	
		}
	});

	$jqtr('.carousel-control-prev').bind('click', function (event) {
		if(typeof att.adobeDataLayerManager !== 'undefined') {		 		
		att.adobeDataLayer.pushEvent(att.adobeDataLayerManager.trackingDataOnClick(event,
			{
				'slotFriendlyName'   : 'marquee',
				'contentFriendlyName': 'carousel',
				'linkName'           : 'previous',
				'linkDestinationUrl' : $jqtr(this).attr('href'),
				'type': 'others'
			}
		));	
		}
	});

	$jqtr('#modalForm .btn-primary').bind('click', function () {
		// adobeTrkLeadFormSubmitFirstNet(); 
		setTimeout(
			 adobeTrkLeadFormConfFirstNet, 
			 2000);
	});

});
// END - Wait until DOM ready event for event binding