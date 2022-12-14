/// <reference path="jquery-1.3.2-vsdoc2.js" />

var AAP = AAP || {};

AAP.vendor = navigator.vendor;
AAP.safari = "Apple Computer, Inc.";

/* Spanish / English toggle */

AAP.toggleSiteLanguage = function () {
    var myUrl = window.location.href;
    var host = window.location.protocol + "//" + window.location.host;
    myUrl = myUrl.toLowerCase();
    if (myUrl.indexOf(host + "/spanish/") >= 0) {
        // replace /spanish/ with /english/
        myUrl = myUrl.replace(host + "/spanish/", host + "/english/");

        // replace /paginas/ with /pages/
        myUrl = myUrl.replace("/paginas/", "/pages/");
    } else if (myUrl.indexOf(host + "/english/") >= 0) {
        // replace /english/ with /spanish/
        myUrl = myUrl.replace(host + "/english/", host + "/spanish/");

        // replace /paginas/ with /pages/
        myUrl = myUrl.replace("/pages/", "/paginas/");
    }

    window.location.href = myUrl;
}

/* Main stage rotator */
$.fn.verticalRotator = function (options) {

    return this.each(function () {
        var vRotator = $(this), mainViews = vRotator.find(".mCnt"), navOptArea = vRotator.find(".navOptions"), navOptions = navOptArea.find(".navOpt"), navUp = vRotator.find(".navUp"), navDown = vRotator.find(".navDown"), currentIdx = 0, timedScroller = false, timedScrolling,
           trueFirst, trueLast, fakeFirst, fakeLast, fake2ndFirst, fake2ndLast,
           NAV_BTN_HT = 68, AUTO_SCROLL_TIME = 5000;

        // clear activated states
        function clearViews() {
            // hide current main window view & remove the on class from any nav option
            mainViews.hide();
            navOptions.removeClass("on");
        }
        // animation sequence for selecting a nav option
        function activateView(navOpt) {
            currentIdx = navOptions.index(navOpt);

            clearViews();
            clearUpDownClicks();

            // show the view associated with this option and turn this nav option on
            $(mainViews.get(currentIdx)).fadeIn();
            navOpt.addClass("on");

            // navigate selected item into view
            //navOptArea.animate( { "top": -1*(navIndex - 1) * NAV_BTN_HT + "px" } );
            navOptArea.animate({ "top": -1 * (currentIdx + 1) * NAV_BTN_HT + "px" }, { complete: function () { setUpDownClicks(); } }); // this adjustment is to account for the fakes at the beginning of the list
        };

        // view click
        navOptions.each(function (index) {
            var navOpt = $(this);

            navOpt.click(function () {

                clearAutoScroll();

                activateView(navOpt);

                //return false;

            });
        });

        // navigate via click up and down and click utilities
        function clearUpDownClicks() {
            navUp.unbind("click");
            navDown.unbind("click");

            navUp.click(function () { return false; });
            navDown.click(function () { return false; });
        }
        function setUpDownClicks() {
            navUp.unbind("click");
            navDown.unbind("click");

            navUp.click(function () {

                clearAutoScroll();
                clearUpDownClicks();

                // decrement the current index and rotate to it; if it is before the beginning of the list, use the fake move to go to the end
                currentIdx -= 1;

                if (currentIdx >= 0) { activateView($(navOptions.get(currentIdx))); }
                else { goFakeLast(); }

                return false;

            });
            navDown.click(function () {

                clearAutoScroll();
                clearUpDownClicks();

                // increment the current index and rotate to it; if it is after the end of the list, use the fake move to go to the beginning
                currentIdx += 1;

                if (currentIdx < navOptions.length) { activateView($(navOptions.get(currentIdx))); }
                else { goFakeFirst(); }

                return false;
            });
        }
        setUpDownClicks();

        // create fake elements for infinite scroll effect
        trueFirst = $(navOptions.get(0));
        trueLast = $(navOptions.get(navOptions.length - 1));
        fakeFirst = trueFirst.clone();
        fakeLast = trueLast.clone();
        if (navOptions.length > 1) {
            fake2ndFirst = $(navOptions.get(1)).clone();
            fake2ndLast = $(navOptions.get(navOptions.length - 2)).clone();
        }
        else {
            fake2ndFirst = fakeLast.clone();
            fake2ndLast = fakeFirst.clone();
        }
        // insert the fakes into the list at the appropriate spots
        navOptArea.prepend(fakeLast);
        navOptArea.prepend(fake2ndLast);
        navOptArea.append(fakeFirst);
        navOptArea.append(fake2ndFirst);
        // fake move proxies
        function goFakeFirst() {
            clearViews();

            // show the associated views
            $(mainViews.get(0)).fadeIn();
            fakeFirst.addClass("on");

            // set the index to the first item
            currentIdx = 0;

            // navigate fake item into view
            navOptArea.animate({ "top": -1 * (navOptions.length + 1) * NAV_BTN_HT + "px" }, {
                complete: function () {

                    // complete animation swap to true item move
                    fakeFirst.removeClass("on");
                    trueFirst.addClass("on");
                    navOptArea.css({ "top": -1 * NAV_BTN_HT + "px" });

                    setUpDownClicks();
                }
            });
        }
        function goFakeLast() {
            clearViews();

            // show the associated views
            $(mainViews.get(navOptions.length - 1)).fadeIn();
            fakeLast.addClass("on");

            // set the index to the last item
            currentIdx = navOptions.length - 1;

            // navigate the fake item into view
            navOptArea.animate({ "top": "0" }, {
                complete: function () {

                    // complete animation swap to true item move
                    fakeLast.removeClass("on");
                    trueLast.addClass("on");
                    navOptArea.css({ "top": -1 * (currentIdx + 1) * NAV_BTN_HT + "px" });

                    setUpDownClicks();
                }
            });
        }
        // create click proxying for the fakes
        fakeFirst.click(function () {
            clearAutoScroll();
            goFakeFirst();

            //return false;

        });
        fakeLast.click(function () {
            clearAutoScroll();
            goFakeLast();

            //return false;
        });


        // auto scrolling functions
        // clear auto scroller
        function clearAutoScroll() {
            if (timedScroller !== false) { clearInterval(timedScroller); timedScroller = false; }
        }
        // auto scrolling function
        timedScrolling = function () {
            currentIdx += 1;

            // increment and go to next option, unless
            if (currentIdx < navOptions.length) { activateView($(navOptions.get(currentIdx))); }
            else { goFakeFirst(); }
        };
        // initialize first item
        activateView($(navOptions.get(0)));
        // ... and start auto scrolling timer
        timedScroller = setInterval(timedScrolling, AUTO_SCROLL_TIME);

    });

};

/*^------------------^*/

/* image rollover :
-------------------------------------------------------------------------*/
AAP.initRollovers = function(UpdatePanelID) {
    var selector = ".rollover";
    if (!AAP.isNullOrEmptyString(UpdatePanelID)) {
        selector = "#" + UpdatePanelID + " " + selector;
    }
    var rollovers = $(selector);
    if (rollovers.length > 0) {
        rollovers.mouseover(function () {
            AAP.rollover($(this));
        }).mouseout(function () {
            AAP.rollover($(this));
        });
    }
}

AAP.rollover = function(obj) {
    var btnObj = obj;
    var classValue = btnObj.attr("class");
    var imgAttr = "src";
    var overImg = "off.";
    var outImg = "on.";

    if (browseris && browseris.ie && (browseris.iever == 6) && (classValue.indexOf("tpng") > 0)) {
        imgAttr = "name";
    }
    var btnSrc = btnObj.attr(imgAttr);

    if (btnSrc.indexOf(outImg) > 0) {
        overImg = "on.";
        outImg = "off.";
    }

    btnObj.attr("src", btnSrc.replace(overImg, outImg, 'gi'));
}

AAP.rolloverInline = function(imgId) {
    var btnObj = $("#" + imgId);
    AAP.rollover(btnObj);
}
/* image rollover ^
-------------------------------------------------------------------------*/

/* pop up :
-------------------------------------------------------------------------*/
AAP.popWindow = function(href, title, sb, width, height) {
    window.open(href, title, 'toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=' + sb + ',resizable=0,width=' + width + ',height=' + height + ',top=150,left=150');
}
/* pop up ^
-------------------------------------------------------------------------*/

/* print page :
-------------------------------------------------------------------------*/
AAP.initPrint = function() {
    var printBtns = $(".print-button");

    printBtns.each(function () {
        $(this).click(function () {
            window.print();
        });
    });
}
/* print page ^
-------------------------------------------------------------------------*/

/* toggle pane :
-------------------------------------------------------------------------*/
AAP.initToggle = function() {
    var tObj = $(".toggle-button");

    tObj.each(function () {
        $(this).click(function () {
            AAP.togglePane(this);
        });
    });
}

AAP.togglePane = function(obj) {
    var pane;

    if ($(obj).parent().hasClass("toggle-pane")) {
        pane = $(obj).parent();
    }
    else {
        pane = $(obj).parent().find(".toggle-pane");
    }

    AAP.toggle(pane);
}
/* toggle pane ^
-------------------------------------------------------------------------*/

/* centerstage :
-------------------------------------------------------------------------*/
AAP._csTimer;
AAP.initCenterStage = function() {
    var _csTimeout = 8000;
    var startPane = "prenatal";
    var btns = $("#centerstage .button");
    var imgAttr = "src";
    if (browseris && browseris.ie && (browseris.iever == 6)) {
        imgAttr = "name";
    }
    var btnObj = $("#centerstage div").find("img[alt=" + startPane + "]");
    var btnIndex = btns.index(btnObj);
    var btnSrc = btnObj.attr(imgAttr);

    AAP.csToggle(btnObj);

    btns.click(
        function () {
            AAP.csToggle($(this));
            clearTimeout(AAP._csTimer);
        }
    );
    AAP._csTimer = setTimeout(function () { AAP.csRotate(btns, btnIndex, _csTimeout) }, _csTimeout);
}

AAP.csRotate = function(obj, index, _csTimeout) {
    var next = index + 1;
    var btns = obj;
    if (btns.length == next)
        next = 0;
    var btnObj = btns.eq(next);
    AAP.csToggle(btnObj);
    AAP._csTimer = setTimeout(function () { AAP.csRotate(btns, next, _csTimeout) }, _csTimeout);
}

AAP.csToggle = function(obj) {
    var btnObj = obj;
    var csItemsContainer = btnObj.parent().siblings("ul");
    var cName = btnObj.attr("alt").replace(' ', '', 'gi');
    var altName = btnObj.attr("alt");
    var btns = btnObj.parent().find("img[alt!=" + altName + "]");
    var imgAttr = "src";
    if (browseris && browseris.ie && (browseris.iever == 6)) {
        imgAttr = "name";
    }
    var btnSrc = btnObj.attr(imgAttr);

    btnObj.attr("src", btnSrc.replace('off.', 'on.', 'gi'));
    csItemsContainer.removeClass();
    csItemsContainer.addClass(cName);
    csItemsContainer.children("li").not("." + cName).fadeOut(200);
    csItemsContainer.find("." + cName).fadeIn(500);

    var btnArrSrc;
    jQuery.each(btns, function () {
        btnArrSrc = $(this).attr(imgAttr);
        $(this).attr("src", btnArrSrc.replace('on.', 'off.', 'gi'));
    });
}
/* centerstage ^
-------------------------------------------------------------------------*/

/* landing feature :
-------------------------------------------------------------------------*/
AAP._lfTimer;
AAP._lfCurIndex;
AAP.initLandingFeature = function() {
    var featureObj = $("#landing-feature .feature");
    var startIndex = 0;
    var _lfTimeout = 8000;

    AAP.buildNavigation(featureObj);
    AAP.switchFeature(startIndex);
    AAP._lfCurIndex = startIndex;
    AAP._lfTimer = setTimeout(function () { AAP.lfRotate(featureObj, startIndex, _lfTimeout) }, _lfTimeout);
}

AAP.lfRotate = function(obj, index, _lfTimeout) {
    var nextIndex = index + 1;
    var features = obj;
    if (features.length == nextIndex) {
        nextIndex = 0;
    }
    AAP._lfCurIndex = nextIndex;
    AAP.switchFeature(nextIndex);
    AAP._lfTimer = setTimeout(function () { AAP.lfRotate(features, nextIndex, _lfTimeout) }, _lfTimeout);
}

AAP.buildNavigation = function(featureObj) {
    var navBar = $("#landing-feature .navigation-bar");

    var divButtons = document.createElement('div');
    $(divButtons).addClass("buttons");

    var prevBtn = document.createElement("a");
    $(prevBtn).attr("href", "#").addClass("previous").click(function (event) {
        event.preventDefault();
        var prevIndex = AAP._lfCurIndex - 1;

        if (prevIndex == -1) {
            prevIndex = featureObj.length - 1;
        }
        AAP._lfCurIndex = prevIndex;

        AAP.switchFeature(prevIndex);
        clearTimeout(AAP._lfTimer);
    }).html("previous");

    var nextBtn = document.createElement("a");
    $(nextBtn).attr("href", "#").addClass("next").click(function (event) {
        event.preventDefault();
        var nextIndex = AAP._lfCurIndex + 1;

        if (nextIndex == featureObj.length) {
            nextIndex = 0;
        }
        AAP._lfCurIndex = nextIndex;

        AAP.switchFeature(nextIndex);
        clearTimeout(AAP._lfTimer);
    }).html("next");

    $(divButtons).append(prevBtn);

    var featObjLength = featureObj.length;
    for (var i = 0; i < featObjLength; i++) {
        var text = i + 1;
        var itemBtn = document.createElement("a");
        $(itemBtn).attr("href", "#").addClass("feature-number").click(function (event) {
            event.preventDefault();
            var j = $(this).html() - 1;
            AAP.switchFeature(j);
            clearTimeout(AAP._lfTimer);
            AAP._lfCurIndex = j;
        }).html(text);
        $(divButtons).append(itemBtn);
    }
    $(divButtons).append(nextBtn);
    navBar.append(divButtons);
}

AAP.switchFeature = function(index) {
    var featureObj = $("#landing-feature .feature");
    var nextFeatureObj = null;
    var featureBtns = $("#landing-feature .feature-number");
    var currFeature = null;

    nextFeatureObj = featureObj.eq(index);
    featureObj.css("display", "none");
    nextFeatureObj.css("display", "block");

    currFeature = featureBtns.eq(index);
    featureBtns.removeClass("current");
    currFeature.addClass("current");
}
/* landing feature ^
-------------------------------------------------------------------------*/


/* symptom checker
-------------------------------------------------------------------------*/
AAP.hideSurroundingSymptomDivs = function() {
    $(".site-header, .content-right, .site-footer, .page-toolbar, .bread-crumb, .page-section-header").css("display", "none");
    $("div").removeClass("site-main");
    $("div").removeClass("primary-content");
}
AAP.hideAllSymptomChecker = function() {
    $(".site-header, .content-right, .site-footer, .rail-left, .page-toolbar, .bread-crumb, .page-section-header").css("display", "none");
    $("div").removeClass("site-main");
    $("div").removeClass("primary-content");
    $("#symptom-checker-page").remove();
}
/* symptom checker ^
-------------------------------------------------------------------------*/

/* tools widget :
-------------------------------------------------------------------------*/
AAP._twTimer;
AAP._twCurIndex;
AAP.initToolsWidget = function() {
    var toolObj = $("");
    var totalTools = toolObj.length;
    var startIndex = Math.floor(Math.random() * totalTools);
    var _twTimeout = 4000;

    AAP.buildTWNavigation(toolObj);
    AAP.switchTool(startIndex);
    AAP._twCurIndex = startIndex;
    AAP._twTimer = setTimeout(function () { AAP.twRotate(toolObj, startIndex, _twTimeout) }, _twTimeout);
}

AAP.twRotate = function(obj, index, _twTimeout) {
    var nextIndex = index + 1;
    var features = obj;
    if (features.length == nextIndex) {
        nextIndex = 0;
    }
    AAP._twCurIndex = nextIndex;
    AAP.switchTool(nextIndex);
    AAP._twTimer = setTimeout(function () { AAP.twRotate(features, nextIndex, _twTimeout) }, _twTimeout);
}

AAP.buildTWNavigation = function(toolObj) {
    var navBar = $("#widget-tools .navigation-bar");

    var divButtons = document.createElement('div');
    $(divButtons).addClass("buttons");

    var toolObjLength = toolObj.length;
    for (var i = 0; i < toolObjLength; i++) {
        var text = i + 1;
        var itemBtn = document.createElement("a");
        $(itemBtn).attr("href", "#").addClass("feature-number").click(function (event) {
            event.preventDefault();
            var j = $(this).text() - 1;
            AAP.switchTool(j);
            clearTimeout(AAP._twTimer);
            AAP._twCurIndex = j;
        }).html(text);
        var currentIndicator = document.createElement('span');
        $(itemBtn).append(currentIndicator);
        $(divButtons).append(itemBtn);
    }
    navBar.append(divButtons);
}

AAP.switchTool = function(index) {
    var toolObj = $("#widget-tools .tool");
    var nexttoolObj = null;
    var featureBtns = $("#widget-tools .feature-number");
    var toolTitle = $('#tool-title');
    var currFeature = null;

    nexttoolObj = toolObj.eq(index);
    toolObj.css("display", "none");
    nexttoolObj.css("display", "block");
    toolTitle.text(nexttoolObj.attr('data-tool-name'));


    currFeature = featureBtns.eq(index);
    featureBtns.removeClass("current");
    currFeature.addClass("current");
}
/* tools widget ^
-------------------------------------------------------------------------*/

/* prs profile map :
-------------------------------------------------------------------------*/
AAP.initPrsProfileMap = function() {
    var hiddenLat = $("input:hidden").filter(function () {
        var strID = $(this).attr("id");
        return strID.indexOf("hidFirstAddressLatitude") > 0;
    });
    var hiddenLong = $("input:hidden").filter(function () {
        var strID = $(this).attr("id");
        return strID.indexOf("hidFirstAddressLongitude") > 0;
    });

    var latVal = hiddenLat.val();
    var longVal = hiddenLong.val();

    var llCenter = new google.maps.LatLng(latVal, longVal);

    var llMarker1 = new google.maps.LatLng(latVal, longVal);

    var myOptions = {
        zoom: 13,
        center: llCenter,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);

    var marker = new google.maps.Marker({
        position: llMarker1,
        map: map,
        title: "Marker 1"
    });

}

/* prs profile map ^
-------------------------------------------------------------------------*/

/* enable click :
-------------------------------------------------------------------------*/
AAP.initEnableClick = function() {
    var enablers = $("input.enable-click");
    var submitBtns = $("input.enable-input");

    if (enablers.length > 0) {
        enablers.attr("checked", "").click(function () {
            var index = enablers.index(this);
            AAP.enableClick(this, index);
        });
        submitBtns.bind("click.terms", AAP.formAlert);
    }
}

AAP.enableClick = function(obj, index) {
    var enableBtn = $(".enable-input").eq(index);
    var btnSrc = enableBtn.attr("src");
    var chkBox = $(obj);
    var chkBoxChecked = chkBox.is(':checked');

    if (chkBoxChecked) {
        enableBtn.attr("src", btnSrc.replace('disable.', 'off.', 'gi')).unbind("click.terms");
    }
    else {
        enableBtn.attr("src", btnSrc.replace('off.', 'disable.', 'gi')).bind("click.terms", AAP.formAlert);
    }
}

AAP.formAlert = function() {
    var locationValue = window.location.href.toLowerCase();
    if (locationValue.indexOf("healthychildren.org/english/") !== -1)
        alert("You must first accept the terms & conditions before running a search.");
    else if (locationValue.indexOf("healthychildren.org/spanish/") !== -1)
        alert("Usted debe aceptar primero los t\351rminos y condiciones antes de iniciar su b\372squeda.");
    return false;
}
/* enable click ^
-------------------------------------------------------------------------*/

/* AAP.toggleList :
-------------------------------------------------------------------------*/
AAP.toggleList = function() {
    var btnObj = $(".accordion-panels .button");
    var topPnl = btnObj.parent().find(".panel-collapse");
    var htmlObj = $("html");
    var _listBGColor = "#fff";
    var panel;

    if (htmlObj.hasClass("baby-site")) {
        _listBGColor = "#fef1e9";
    }
    else if (htmlObj.hasClass("toddler-site")) {
        _listBGColor = "#fcfcb4";
    }
    else if (htmlObj.hasClass("preschooler-site")) {
        _listBGColor = "#f8ea9f";
    }

    btnObj.toggle(
        function () {
            panel = $(this).parent();
            panel.find(".panel-collapse").hide("blind", { direction: "vertical" }, 500);
            panel.animate({ backgroundColor: _listBGColor }, 500);
        },
        function () {
            panel = $(this).parent();
            panel.find(".panel-collapse").show("blind", { direction: "vertical", mode: "show" }, 500);
            panel.animate({ backgroundColor: "#fff" }, 500);
        }
    );
}
/* AAP.toggleList ^
-------------------------------------------------------------------------*/

/* limit text :
-------------------------------------------------------------------------*/
AAP.initCountdown = function() {
    var textareas = $(".countdowntextbox");
    var limitNum;

    if (textareas.length > 0) {
        var textareasLength = textareas.length;
        for (var i = 0; i < textareasLength; i++) {
            limitNum = $(".countdowntextbox:eq(" + i + ")").attr("characters");
            $(".countdowninput:eq(" + i + ")").text(limitNum - textareas[i].value.length);
        }
    }
}

AAP.limitText = function(inputID) {
    var objInput = $("#" + inputID);
    var objInputVal = objInput.val();
    var objCount = $("#" + inputID.replace("_txt", "_lbl", 'gi') + "Count");
    var limitNum = objInput.attr("characters");

    if (objInputVal.length > limitNum) {
        objInput.val(objInputVal.substring(0, limitNum));
        alert("You have reached your maximum character limit of " + limitNum);
    }

    else {
        objCount.text(limitNum - objInputVal.length);
    }

    if (objInputVal.length >= (limitNum - 20)) {
        objCount.addClass("error");
        objCount.css("font-weight", "bold");
    }

    else {
        if (objCount.hasClass("error")) {
            objCount.removeClass("error");
            objCount.css("font-weight", "normal");
        }
    }
}
/* limit text ^
-------------------------------------------------------------------------*/

/* ratings UI :
-------------------------------------------------------------------------*/
AAP.initRatingUI = function() {
    var inputs = $(".content-rating .star");
    inputs.click(function () {
        var hiddenObj = $("input:hidden").filter(function () {
            var strID = $(this).attr("id");
            return strID.indexOf("hidArticleRating") > 0;
        });
        var inputIndex = inputs.index($(this));
        var ratingVal = inputIndex + 1;

        hiddenObj.val(ratingVal);
    });
}
/* ratings UI ^
-------------------------------------------------------------------------*/

/* modal clicks :
-------------------------------------------------------------------------*/
AAP.initModals = function() {
    var termsLnk = $("a.terms-conditions");
    var sendLnk = $("a.send-link");
    var videoLink = $("a.video-link");

    if (termsLnk.length > 0) {
        termsLnk.click(function (ev) {
            ev.preventDefault();
            AAP.termsModal($(this));
        });
    }

    if (sendLnk.length > 0) {
        sendLnk.click(function (ev) {
            ev.preventDefault();
            AAP.sendToFriend($(this));
        });
    }

    if (videoLink.length > 0) {
        videoLink.click(function (ev) {
            ev.preventDefault();
            AAP.videoModal($(this))
        });
    }
}

AAP.termsModal = function(obj) {
    var iframeSrc = obj.attr("href");
    $.modal('<iframe src="' + iframeSrc + '" height="450" width="830" frameborder="0" style="border:0">', {
        containerCss: {
            height: 450,
            padding: 0,
            width: 830
        },
        overlayClose: true
    });
}

AAP.sendToFriend = function(obj) {
    var iframeSrc = obj.attr("href");
    $.modal('<iframe src="' + iframeSrc + '?url=' + location.href + '" height="480" width="350" frameborder="0" style="border:0">', {
        containerCss: {
            height: 480,
            padding: 0,
            width: 350
        },
        overlayClose: true
    });
}

AAP.cartModal = function(price, quantity, title) {
    var div = document.createElement('div');
    var html = '<div class="page-section-header"><h1 class="cart-header">Shopping Cart</h1></div>';
    html += '<div><p>You have added <strong>' + title + '</strong> to your cart.</p></div>';
    html += '<div class="form-button-row"><a href="javascript://" onclick="$.modal.close();"><img src="/_layouts/15/aap.healthychildren/images/btn-continue-shopping-off.gif" id="modal-continue" onmouseover="AAP.rolloverInline(this.id)" onmouseout="AAP.rolloverInline(this.id)" class="button" alt="Continue Shopping" width="144" height="24" /></a>';
    html += '<a href="/english/bookstore/pages/shopping-cart.aspx"><img src="/_layouts/15/aap.healthychildren/images/btn-proceed-to-checkout-off.png" id="modal-checkout" onmouseover="AAP.rolloverInline(this.id)" onmouseout="AAP.rolloverInline(this.id)" class="button tpng" width="164" height="24" alt="Proceed to checkout" /></a></div>';

    $(div).attr("class", "cart-modal");
    $(div).html(html);
    $.modal(div, {
        containerCss: {
            height: 200,
            padding: 0,
            width: 400
        },
        overlayClose: true
    });
}

AAP.spanishCartModal = function(price, quantity, title) {
    var div = document.createElement('div');
    var html = '<div class="page-section-header"><h1 class="cart-header">Carrito de compras</h1></div>';
    html += '<div><p>Ha agregado <strong>' + title + '</strong> a su carrito.</p></div>';
    html += '<div class="form-button-row"><a href="javascript://" onclick="$.modal.close();"><img src="~/_layouts/15/AAP.HealthyChildren/3082/images/btn-continue-shopping-off.gif" id="modal-continue" onmouseover="AAP.rolloverInline(this.id)" onmouseout="AAP.rolloverInline(this.id)" class="button" alt="Continue Shopping" width="144" height="24" /></a>';
    html += '<a href="/spanish/bookstore/paginas/shopping-cart.aspx"><img src="~/_layouts/15/AAP.HealthyChildren/3082/images/btn-proceed-to-checkout-off.gif" id="modal-checkout" onmouseover="AAP.rolloverInline(this.id)" onmouseout="AAP.rolloverInline(this.id)" class="button tpng" width="164" height="24" alt="Proceed to checkout" /></a></div>';

    $(div).attr("class", "cart-modal");
    $(div).html(html);
    $.modal(div, {
        containerCss: {
            height: 200,
            padding: 0,
            width: 400
        },
        overlayClose: true
    });
}

AAP.loginRequiredModal = function() {
    var loginLink = $(".login-required");
    var modalContent = $(".cart-modal");

    if (loginLink.length > 0) {
        loginLink.click(function () {
            modalContent.modal({
                containerCss: {
                    height: 200,
                    padding: 0,
                    width: 450
                },
                overlayClose: true
            });
        });
    }
}

AAP.tocModal = function() {
    var tocLink = $("#toc-link");
    var tocContent = $("#toc");

    if (tocLink.length > 0) {
        if (tocContent.children().length > 0) {
            tocLink.css("visibility", "visible");
        }
        tocLink.click(function (ev) {
            ev.preventDefault();
            tocContent.modal({
                containerCss: {
                    height: 500,
                    padding: 0,
                    width: 450
                },
                overlayClose: true
            });
        });
    }
}

AAP.videoModal = function(obj) {
    var modalContent = $("#healthy-children-video");

    modalContent.modal({
        containerCss: {
            height: 274,
            padding: 0,
            width: 488
        },
        overlayClose: true
    });
}

AAP.orderDetailsModal = function() {
    var detailsLnk = $("a.order-details-link");
    var detailsContent = $("div.order-details");
    var height = detailsContent.height();
    var width = detailsContent.width();
    var modalContent;

    if (detailsLnk.length > 0) {
        detailsLnk.click(function (ev) {
            ev.preventDefault();
            modalContent = $(this).siblings(detailsContent);
            modalContent.modal({
                containerCss: {
                    height: height,
                    padding: 0,
                    width: width
                },
                overlayClose: true
            });
        });
    }
}
/* modal clicks ^
-------------------------------------------------------------------------*/

/* video embeds :
-------------------------------------------------------------------------*/
AAP.embedVideo = function() {
    var vidID, objID;
    var script = document.createElement('script');
    $(script).attr("type", "text/javascript");
    $(script).attr("src", "/_layouts/15/AAP.HealthyChildren/js/swfobject.js");
    $("#ctl00_Head1").append(script);

    var video = $("#healthy-children-video");
    if (video.length > 0) {
        vidID = "7071495";
        objID = "healthy-children-video";

        AAP.embedFlashVideo(objID, vidID);
    }

    var videoObj = $(".video-embed");
    if (videoObj.length > 0) {
        videoObj.each(function () {
            href = $(this).find("a").attr("href");
            if (href) {
                vidID = href.split(".com/")[1];
                objID = vidID;

                $(this).attr("id", objID);
                $(this).css("margin", "24px 0");
                $(this).css("border", "#aea59d 1px solid");
                $(this).css("background", "#fff url('/_layouts/15/AAP.HealthyChildren/styles/images/ajax-loader.gif') no-repeat center center");
                $(this).width(488);
                $(this).height(274);

                AAP.embedFlashVideo(objID, vidID);
            }
        });
    }
}

AAP.embedVideoDynamic = function() {
    var vidID, objID;
    var script = document.createElement('script');
    $(script).attr("type", "text/javascript");
    $(script).attr("src", "/_layouts/15/AAP.HealthyChildren/js/swfobject.js");
    $("#ctl00_Head1").append(script);

    var videoObj = $(".video-embed");
    if (videoObj.length > 0) {
        videoObj.each(function () {
            href = $(this).find("a").attr("href");
            vidID = href.split(".com/")[1];
            objID = vidID;

            $(this).attr("id", objID);
            $(this).css("margin", "24px 0");
            $(this).css("border", "#aea59d 1px solid");
            $(this).width(488);
            $(this).height(274);

            AAP.embedFlashVideo(objID, vidID);
        });
    }
}

AAP.embedFlashVideo = function(objID, vidID) {
    var so = new SWFObject("https://vimeo.com/moogaloop.swf?clip_id=" + vidID + "&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=1&amp;show_portrait=0&amp;color=eb6732&amp;fullscreen=1", "swf", "488", "274", "9", "#0000ff");
    so.addParam("wmode", "transparent");
    so.addParam("allowfullscreen", "true");
    so.addParam("allowscriptaccess", "always");
    //so.useExpressInstall('/flash/expressinstall.swf');
    so.write(objID);
}
/* video embeds ^
-------------------------------------------------------------------------*/

/* symptom checker :
-------------------------------------------------------------------------*/
AAP.initSymptomChecker = function() {
    $(".body-pane .body-part-content").css("display", "block");
    AAP.bodyColors();
    AAP.bodyEvents();
    AAP.initScroll();
    AAP.bodyMobile();
    $(".az-pane").css("position", "relative").css("left", "0");
}

AAP.bodyColors = function () {
    JSRequest.EnsureSetup();
    var kidBG = JSRequest.QueryString['ChildColor'];
    var hoverBG = JSRequest.QueryString['HoverColor'];
    var styleStr = jQuery('style.symptom-css').html();
    var bgStr = jQuery('.symptom-bg').html();

    var lightenAmount = 30;

    if (kidBG) {
        // check to see if dark color, if so increase lightness of BG
        if (AAP.relativeLuminanceW3C(kidBG) <= 0.179) {
            lightenAmount = 90;
        }

        if (AAP.relativeLuminanceW3C(kidBG) > 0.8) {
            lightenAmount = 0;
        }

        styleStr = styleStr.replace(/FBBA64/g, kidBG).replace(/F6B599|ff6578|88A80D/g, AAP.LightenDarkenColor(kidBG, lightenAmount));
        bgStr = bgStr.replace(/F6B599|ff6578|88A80D/g, AAP.LightenDarkenColor(kidBG, lightenAmount));
    }

    if (hoverBG) {
        // check to see if dark color, if so increase lightness of font colors
        if (AAP.relativeLuminanceW3C(hoverBG) <= 0.179) {
            styleStr = styleStr.replace(/443|444/g, 'FFF');
        }

        styleStr = styleStr.replace(/bed067/g, hoverBG).replace(/bed480/g, hoverBG);
    }

    jQuery('style.symptom-css').html(styleStr);
    jQuery('.symptom-bg').html(bgStr);
}

AAP.LightenDarkenColor = function (col, amt) {
    var usePound = false;

    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
    var num = parseInt(col, 16);
    var r = (num >> 16) + amt;

    if (r > 255) r = 255;
    else if (r < 0) r = 0;

    var b = ((num >> 8) & 0x00FF) + amt;

    if (b > 255) b = 255;
    else if (b < 0) b = 0;

    var g = (num & 0x0000FF) + amt;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}

AAP.relativeLuminanceW3C = function (hex) {
    hex = hex.replace('#', '');
    var R8bit = parseInt(hex.substring(0, 2), 16);
    var G8bit = parseInt(hex.substring(2, 4), 16);
    var B8bit = parseInt(hex.substring(4, 6), 16);

    var RsRGB = R8bit / 255;
    var GsRGB = G8bit / 255;
    var BsRGB = B8bit / 255;

    var R = (RsRGB <= 0.03928) ? RsRGB / 12.92 : Math.pow((RsRGB + 0.055) / 1.055, 2.4);
    var G = (GsRGB <= 0.03928) ? GsRGB / 12.92 : Math.pow((GsRGB + 0.055) / 1.055, 2.4);
    var B = (BsRGB <= 0.03928) ? BsRGB / 12.92 : Math.pow((BsRGB + 0.055) / 1.055, 2.4);

    // For the sRGB colorspace, the relative luminance of a color is defined as: 
    var L = 0.2126 * R + 0.7152 * G + 0.0722 * B;

    return L;
}

AAP.bodyMobile = function () {
    jQuery('#list-body-parts .mobile-body-parts').remove();

    var mobileDiv = jQuery('<div class="mobile-body-parts"></div>');
    jQuery('#list-body-parts').children('div').each(function () {
        var type = jQuery(this).attr('data-bodypart');
        var trigger = jQuery('<div class="body-trigger" data-bodypart="' + type + '"></div>');

        var copiedHeader = jQuery(this).find('h3').clone();
        copiedHeader.css('font-weight', 'bold');
        trigger.append(copiedHeader);
        mobileDiv.append(trigger);

        copiedHeader.click(function () {
            AAP.bodyClick(jQuery(this).parent().attr('data-bodypart'));
        });
    });
    jQuery('#list-body-parts').append(mobileDiv);
}

AAP.initScroll = function() {
    //Set up scroll panes   
    var scrollPane = jQuery(".az-list");
    scrollPane.jScrollPane({ scrollbarWidth: 10, scrollbarMargin: 10, showArrows: true, animateTo: true });
    var api = scrollPane.data("jsp");

    var $targets = jQuery('.letter-anchors');
    $targets.html('');
    var scrollPaneTop = parseInt(scrollPane.offset().top);
    jQuery(".az-list .letter-section").each(function (index) {
        var letterSection = jQuery(this);
        var list = jQuery('<li />');
        var anchor = jQuery('<a href="#" rel="' + letterSection.offset().top + '">' + jQuery(this).attr("id").toUpperCase() + '</a>');
        anchor.click(function (event) {
            event.preventDefault();
            api.scrollToY(parseInt(jQuery(this).attr('rel')) - scrollPaneTop, true);
        });

        list.append(anchor);
        $targets.append(list);
    });
}

AAP.bodyEvents = function() {
    jQuery('#body svg').each(function () {
        var svg = jQuery(this);
        svg.unbind().find('.body-part').each(function () {
            var part = jQuery(this);
            var type = part.attr('data-part');
            var sex = part.attr('data-sex');

            part.unbind().mouseenter(function () {
                AAP.bodyOver(type, 'over');
            }).mouseleave(function () {
                AAP.bodyOver(type, 'out');
            }).click(function () {
                AAP.bodyClick(type, sex);
            });
        })
    });

    $("h3.skin-symptom").bind("mouseover", function () {
        AAP.bodyOver('skin', "over");
    }).bind("mouseout", function () {
        AAP.bodyOver('skin', "out");
    }).bind("click", function () {
        AAP.bodyClick('skin', null);
    });
}

AAP.resetBodyHovers = function() {
    var objBodyPart = $(".body-part-girl .body-trigger, .body-part-boy .body-trigger, .body-part-content .body-trigger");
    objBodyPart.css("background-image", "none");
}

AAP.bodyClick = function (type, sex) {
    var bodyItems = $(".body-part-content .body-trigger");
    var list = jQuery('#list-body-parts').children('[data-bodypart="' + type + '"]');
    var scroll = list.find(".symptom-list");

    var div = document.createElement('div');
    var html = '<a class="close-modal" href="javascript://">CLOSE</a>' + list.find(".list-content").html();
    $(div).attr("id", "body-part-modal-container");
    $(div).html(html);
    if (browseris && browseris.ie && (browseris.iever == 6)) {
        $(div).css("top", "40px").css("left", "150px").css("border", "3px solid #ccc");
        $(".body-pane").append(div);
        $(".close-modal").bind("click", function () {
            $(this).parent("#body-part-modal-container").remove();
            //AAP.bodyEvents();
        });
    }
    else {
        $.modal(div, {
            containerCss: {
                height: 250,
                padding: 0,
                width: 400,
                backgroundColor: "#bed480",
                backgroundImage: "none"
            },
            overlayClose: true,
            onShow: function (dialog) {
                dialog.container.find(".close-modal").bind("click", function () {
                    $.modal.close();
                });
                $(".modalCloseImg").css("display", "none");
                jQuery("#body-part-modal-container .symptom-list").jScrollPane({ scrollbarWidth: 10, scrollbarMargin: 0, showArrows: true, animateTo: true });
            },
            onClose: function (dialog) {
                //AAP.bodyEvents();
                AAP.resetBodyHovers()
                $.modal.close();
            }
        });
    }
    list.css("visibility", "hidden");
    //bodyItems.unbind("mouseout").unbind("mouseover").unbind("click");
}

AAP.bodyOver = function(type, eventType) {
    if (eventType == "out") {
        jQuery('[data-part="' + type + '"]').attr('data-state', '');
        jQuery('#list-body-parts [data-bodypart="' + type + '"] .list-container').css('visibility', 'hidden');      
    } else {
        jQuery('[data-part="' + type + '"]').attr('data-state', 'hover');
        jQuery('#list-body-parts [data-bodypart="' + type + '"] .list-container').css('visibility', 'visible');
    }
}

/* symptom checker ^
-------------------------------------------------------------------------*/

AAP.displayCurrentYear = function() {
    var d = new Date();
    var currYear = d.getFullYear();
    $("#copyright-year").html(currYear);
}

/* helper functions :
-------------------------------------------------------------------------*/
AAP.toggle = function(pane) {
    if ($(pane).css("display") == "block") {
        $(pane).css("display", "none");
    }
    else {
        $(pane).css("display", "block");
    }
}

AAP.position = function(obj, pane, left, top) {
    var xPos = $(obj).position().left + left;
    var yPos = $(obj).position().top - top;

    $(pane).css("left", xPos + "px");
    $(pane).css("top", yPos + "px");
}

AAP.initClearValue = function() {
    var input = $(".clear-value");
    var defaultVal;

    var inputLength = input.length;
    if (inputLength > 0) {
        for (var i = 0; i < input.length; i++) {
            $(input[i]).focus(function () {
                defaultVal = $(this).val();
                $(this).val("");
                $(this).removeClass("clear-value");
                $(this).unbind("focus");
            }).blur(function () {
                if ($(this).val() == "") {
                    $(this).val(defaultVal);
                    $(this).addClass("clear-value");
                    AAP.initClearValue();
                }
            });
        }
    }
}
/* helper functions ^
-------------------------------------------------------------------------*/

/* re-attach functions after ajax :
-------------------------------------------------------------------------*/
AAP.postbackElement;
Sys.WebForms.PageRequestManager.getInstance().add_beginRequest(AAP.beginRequest);
Sys.WebForms.PageRequestManager.getInstance().add_pageLoaded(AAP.pageLoaded);

AAP.beginRequest = function(sender, args) {
    AAP.postbackElement = args.get_postBackElement(); //object that initiated the postback
}

AAP.pageLoaded = function(sender, args) {
    var updatedPanels = args.get_panelsUpdated();
    if (updatedPanels.length > 0) {
        var updatedPanelsLength = updatedPanels.length;
        for (i = 0; i < updatedPanelsLength; i++) {
            AAP.initRollovers(updatedPanels[i].id);
        }
    }
}
/* re-attach functions after ajax ^
-------------------------------------------------------------------------*/

/* IE 6 dropdown functions :
-------------------------------------------------------------------------*/
!(function ($) {
    if (browseris && browseris.ie && (browseris.iever == 6)) {
        mhover = function () {
            var navDiv = $(".site-menu");

            var navDivLength = navDiv.length;
            for (var j = 0; j < navDivLength; j++) {
                var sfEls = navDiv[j].getElementsByTagName("li");

                var sfElsLength = sfEls.length;
                for (var i = 0; i < sfElsLength; i++) {
                    var hoverClass = "mhover";

                    sfEls[i].onmouseover = function () {
                        if (!AAP.isNullOrEmptyString(this.id)) {
                            hoverClass = this.id + "-hover mhover"
                        }

                        $(this).addClass(hoverClass);
                    }
                    sfEls[i].onmouseout = function () {
                        if (!AAP.isNullOrEmptyString(this.id)) {
                            hoverClass = this.id + "-hover mhover"
                        }
                        $(this).removeClass(hoverClass);
                    }
                }
            }
        }
        window.attachEvent("onload", mhover);
    }
})(jQuery);

/* IE 6 dropdown functions ^
-------------------------------------------------------------------------*/

$(document).ready(function () {
    AAP.initRollovers();
    AAP.initPrint();
    AAP.initClearValue();
    AAP.initEnableClick();
    AAP.initModals();
    AAP.displayCurrentYear();
    AAP.loginRequiredModal();
    AAP.embedVideo();
    AAP.initToolsWidget();

    $(function () {
        var toolbar = $(".page-toolbar");
        if (toolbar.length > 0) {
            $('.custom_button, .hover_menu').mouseover(function () {
                $('.hover_menu').fadeIn('fast');
                $(this).data('in', true);
                $('.hover_menu').data('hidden', false);
            }).mouseout(function () {
                $(this).data('in', false);
                setTimeout(hideMenu, delay);
            });
            $('.custom_button').click(function (ev) {
                ev.preventDefault();
            });
        }
        var delay = 400;
        function hideMenu() {
            if (!$('.custom_button').data('in') && !$('.hover_menu').data('in') && !$('.hover_menu').data('hidden')) {
                $('.hover_menu').fadeOut('fast');
                $('.custom_button').removeClass('active');
                $('.hover_menu').data('hidden', true);
            }
        }
    });


    /* RTE Fixing */
    jQuery('#FixRTE').click(function (ev) {
        ev.preventDefault();

        jQuery('.ms-rtestate-field div[contenteditable=true], .ms-rtestate-field[contenteditable=true]').each(function (index, element) {
            var editor = jQuery(element);
            var txt = editor.html()
            editor.html(AAP.FixRTEString(txt));
        });

        jQuery('div[id*="PublishingPageContentField_RichHtmlField_hiddenStorage"]').each(function (index, element) {
            var input = jQuery(element);
            input.val(AAP.FixRTEString(input.val())).update();
        });

        return false;
    });
});

jQuery(window).on('load', function () {
    if (document.forms[MSOWebPartPageFormName].MSOLayout_InDesignMode.value === "1") {
        FixRibbonAndPageLayout(); // sp function that resizes ribbon.
    }
});

AAP.FixRTEString = function (txt) {
    // format incoming txt string, replacing bad chars with various values
    var exp = new RegExp(String.fromCharCode(8203), "g");
    var expWordQuote = new RegExp(String.fromCharCode(8220), "g");
    var expWordUnquote = new RegExp(String.fromCharCode(8221), "g");
    txt = txt.replace(exp, '');
    txt = txt.replace(/&nbsp;/g, ' ');
    txt = txt.replace(/ {2,}/g, ' ');
    txt = txt.replace(/&quot;/g, '"');
    txt = txt.replace(expWordQuote, '"');
    txt = txt.replace(expWordUnquote, '"');

    return txt;
}

/**
 * --------------------------------------------------------------------
 * jQuery-Plugin "pngFix"
 * Version: 1.1, 11.09.2007
 * by Andreas Eberhard, andreas.eberhard@gmail.com
 *                      http://jquery.andreaseberhard.de/
 *
 * Copyright (c) 2007 Andreas Eberhard
 * Licensed under GPL (http://www.opensource.org/licenses/gpl-license.php)
 */
//eval(function(p,a,c,k,e,r){e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'([237-9n-zA-Z]|1\\w)'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(s(m){3.fn.pngFix=s(c){c=3.extend({P:\'blank.gif\'},c);8 e=(o.Q=="t R S"&&T(o.u)==4&&o.u.A("U 5.5")!=-1);8 f=(o.Q=="t R S"&&T(o.u)==4&&o.u.A("U 6.0")!=-1);p(3.browser.msie&&(e||f)){3(2).B("img[n$=.C]").D(s(){3(2).7(\'q\',3(2).q());3(2).7(\'r\',3(2).r());8 a=\'\';8 b=\'\';8 g=(3(2).7(\'E\'))?\'E="\'+3(2).7(\'E\')+\'" \':\'\';8 h=(3(2).7(\'F\'))?\'F="\'+3(2).7(\'F\')+\'" \':\'\';8 i=(3(2).7(\'G\'))?\'G="\'+3(2).7(\'G\')+\'" \':\'\';8 j=(3(2).7(\'H\'))?\'H="\'+3(2).7(\'H\')+\'" \':\'\';8 k=(3(2).7(\'V\'))?\'float:\'+3(2).7(\'V\')+\';\':\'\';8 d=(3(2).parent().7(\'href\'))?\'cursor:hand;\':\'\';p(2.9.v){a+=\'v:\'+2.9.v+\';\';2.9.v=\'\'}p(2.9.w){a+=\'w:\'+2.9.w+\';\';2.9.w=\'\'}p(2.9.x){a+=\'x:\'+2.9.x+\';\';2.9.x=\'\'}8 l=(2.9.cssText);b+=\'<y \'+g+h+i+j;b+=\'9="W:X;white-space:pre-line;Y:Z-10;I:transparent;\'+k+d;b+=\'q:\'+3(2).q()+\'z;r:\'+3(2).r()+\'z;\';b+=\'J:K:L.t.M(n=\\\'\'+3(2).7(\'n\')+\'\\\', N=\\\'O\\\');\';b+=l+\'"></y>\';p(a!=\'\'){b=\'<y 9="W:X;Y:Z-10;\'+a+d+\'q:\'+3(2).q()+\'z;r:\'+3(2).r()+\'z;">\'+b+\'</y>\'}3(2).hide();3(2).after(b)});3(2).B("*").D(s(){8 a=3(2).11(\'I-12\');p(a.A(".C")!=-1){8 b=a.13(\'url("\')[1].13(\'")\')[0];3(2).11(\'I-12\',\'none\');3(2).14(0).15.J="K:L.t.M(n=\'"+b+"\',N=\'O\')"}});3(2).B("input[n$=.C]").D(s(){8 a=3(2).7(\'n\');3(2).14(0).15.J=\'K:L.t.M(n=\\\'\'+a+\'\\\', N=\\\'O\\\');\';3(2).7(\'n\',c.P)})}return 3}})(3);',[],68,'||this|jQuery||||attr|var|style||||||||||||||src|navigator|if|width|height|function|Microsoft|appVersion|border|padding|margin|span|px|indexOf|find|png|each|id|class|title|alt|background|filter|progid|DXImageTransform|AlphaImageLoader|sizingMethod|scale|blankgif|appName|Internet|Explorer|parseInt|MSIE|align|position|relative|display|inline|block|css|image|split|get|runtimeStyle'.split('|'),0,{}))

/*  pngHover Advanced, version 0.9
 *  (c) 2007 Nate Weiner <nate@ideashower.com>
 *  Co-Authors: (submit your updates to this code at http://www.ideashower.com/)
 *  propertyChanged function written by Aaron Porter <aaron@javasource.org>
 *  getCurStyle function written by www.quirksmode.org 
 *
 *  pngHover is freely distributable under the terms of an MIT-style license.
 *  For details and other scripts, see the Idea Shower web site: http://www.ideashower.com/
 *
/*--------------------------------------------------------------------------*/

/* --- Just two variables to define here --- */

AAP.navId = "#symptom-checker-page .symptom-tool-pane #body"; //Id of the nav UL element you are fixing
AAP.slideSide = 'leftToRight'; //Which was does the hover sliding door slide?  Enter either upAndDown or leftToRight
AAP.transparentImage = '/_layouts/15/AAP.HealthyChildren/styles/clearpixel.gif'; //Where a 1px transparent gif file is (needed to hack png)

/* --- Don't need to edit below -- */

//eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('l r(p,n,q){m.p=p;m.n=n;m.q=q;3=m};r.1j={X:l(){b(3.n==\'F\'){3.v=2;3.t=1}A{3.v=1;3.t=2}z=C.Q(3.p).R(\'19\');1a(i=0;i<z.K;i++){b(z[i].1b==C.Q(3.p)){8=z[i].R(\'a\');b(8.K>0){8=8[0];8.1d=\'\';8.9.1e=\'c\';8.9.V=\'1s\';d=C.1r(\'1g\');g=3.j(8,\'w\').o(\'6\',\'\');f=3.j(8,\'s\').o(\'6\',\'\');d.L(\'h\',3.j(8,\'T\').1h(5,3.j(8,\'T\').K-7));d.L(\'w\',g*3.v);d.L(\'s\',f*3.t);3.J(d);d.1k=3.S;d.9.1l=\'1m\';d.9.V=\'1p\';d.9.G=\'c\';d.9.H=\'c\';8.1q(d);8.9.1t=\'1u\';3.D(P,8);8.1v=3.O;8.10=3.D}}}},O:l(e,4){b(!4){4=m}g=3.j(4,\'w\').o(\'6\',\'\');f=3.j(4,\'s\').o(\'6\',\'\');b(3.n==\'F\'){4.k.9.B=\'u(c \'+(g*2)+\'6 \'+f+\'6 \'+g+\'6)\';4.k.9.G=\'-\'+g+\'6\'}A{4.k.9.B=\'u(\'+f+\'6 \'+(g*3.v)+\'6 \'+(f*3.t)+\'6 c)\';4.k.9.H=\'-\'+f+\'6\'}},D:l(e,4){b(!4){4=m}g=3.j(4,\'w\').o(\'6\',\'\');f=3.j(4,\'s\').o(\'6\',\'\');4.k.9.B=\'u(c \'+g+\'6 \'+f+\'6 c)\';b(3.n==\'F\'){4.k.9.G=\'c\'}A{4.k.9.H=\'c\'}4.k.9.B=\'u(c \'+g+\'6 \'+f+\'6 c)\'},S:l(e){b(1f.1i=="h"){3.J(m)}},J:l(4){I h=4.h;b(h.U(3.q)!=-1)M;b(h.U("1n")==-1){4.Y.Z="";M}4.h=3.q;4.Y.Z="16:13.14.15(h=\'"+h+"\',17=\'18\')"},j:l(x,E){b(x.W)I y=x.W[E];A b(1o.N)I y=C.11.N(x,P).1c(E);M y}};r=12 r(p,n,q);r.X();',62,94,'|||pho|obj||px||navA|style||if|0px|newIMG||img_height|img_width|src||getCurStyle|firstChild|function|this|AAP.slideSide|replace|AAP.navId|AAP.transparentImage|pngHover|height|heightMod|rect|widthMod|width|||navLI|else|clip|document|pngHover_back|styleProp|leftToRight|left|top|var|pngHack|length|setAttribute|return|getComputedStyle|pngHover_hover|null|getElementById|getElementsByTagName|propertyChanged|backgroundImage|indexOf|position|currentStyle|init|runtimeStyle|filter|onmouseout|defaultView|new|DXImageTransform|Microsoft|AlphaImageLoader|progid|sizingMethod|scale|li|for|parentNode|getPropertyValue|innerHTML|textIndent|event|img|substr|propertyName|prototype|onpropertychange|overflow|hidden|png|window|absolute|appendChild|createElement|relative|background|none|onmouseover'.split('|'),0,{}))

$(function () {
    $('#Div1 input[type="text"]').bind('keypress', function (e) {
        if (e.which == 13) {
            e.preventDefault();
            $(this).siblings('input').click();
        }
    });
});

/* ScrollTop listener */
!(function () {
    jQuery('#s4-workspace').on('scroll', null, function () {
        var scrollTop = jQuery('#s4-workspace').scrollTop();

        if (scrollTop >= 50) {
            jQuery('body').addClass('scrolled');
        } else {
            jQuery('body').removeClass('scrolled');
        }
    });
    jQuery(document).off('click.ScrollToTopListener');
    jQuery(document).on('click.ScrollToTopListener', '.scroll-to-top-button', function (ev) {
        ev.preventDefault();

        jQuery('#s4-workspace').animate({
            scrollTop: 0
        });
    })
})()

/** Slippry Slideshow */
jQuery(document).ready(function () {
    jQuery('.slideshow-item').closest('ul').addClass('news-slider');
    jQuery('.slideshow-item').find('p').each(function () {
        var pGraph = jQuery(this);
        pGraph.html(pGraph.html().replace(/(?:\r\n|\r|\n)/g, '<br />'));
    });

    if (jQuery().slippry) {
        jQuery('.news-slider').each(function () {
            var slider = jQuery(this);

            var speedVal = 1200;
            var pauseVal = 8000;
            var transitionVal = 'horizontal';
            var pagerVal = true;
            var autoRotateVal = true;


            var title = slider.closest('.ms-webpart-chrome').find('.js-webpart-titleCell');
            if (title.length > 0) {
                var titleval = title.attr('title');
                title.attr('title', titleval.split(' - ')[0]);

                var attribString = titleval.split(' - ').pop();
                var attribEqs = [];
                var attribs = {};
                if (attribString) {
                    attribEqs = attribString.split(';');
                }

                jQuery(attribEqs).each(function () {
                    var attr = this;
                    attrArr = attr.split('=');
                    var key = jQuery.trim(attrArr[0]);
                    var val = jQuery.trim(attrArr.pop());

                    //clean it up for the object
                    if (val.toLowerCase() == 'true') {
                        val = true
                    } else if (val.toLowerCase() == 'false') {
                        val = false;
                    }
                    if (!isNaN(parseInt(val))) {
                        val = parseInt(val);
                    }

                    if (key != '' && key) {
                        attribs[key] = val;
                    }
                });

                speedVal = attribs['speed'] || speedVal;
                pauseVal = attribs['pause'] || pauseVal;
                transitionVal = attribs['transition'] || transitionVal;
                pagerVal = attribs['showpager'] || pagerVal;

                if (typeof attribs['autorotate'] != 'undefined' && attribs['autorotate'] != null) {
                    autoRotateVal = attribs['autorotate'];
                }
            }

            var slipSetts = {
                // general elements & wrapper
                slippryWrapper: '<div class="sy-box news-slider" />', // wrapper to wrap everything, including pager
                elements: 'li.dfwp-item', // elments cointaining slide content

                // options
                adaptiveHeight: true, // height of the sliders adapts to current 
                captions: false,
                auto: autoRotateVal,

                // pager
                pager: pagerVal,
                pagerClass: 'news-pager',

                // transitions
                transition: transitionVal, // fade, horizontal, kenburns, false
                speed: speedVal,
                pause: pauseVal,
            };

            console.log(slipSetts);

            slider.slippry(slipSetts);
        });
    }
})
/** /Slippry Slideshow */

/** slippry library */

/** @preserve
 *
 * slippry v1.4.0 - Responsive content slider for jQuery
 * http://slippry.com
 *
 * Authors: Lukas Jakob Hafner - @saftsaak
 *          Thomas Hurd - @SeenNotHurd
 *
 * Copyright 2016, booncon oy - http://booncon.com
 *
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */
!function (a) { "use strict"; var b; b = { slippryWrapper: '<div class="sy-box" />', slideWrapper: '<div class="sy-slides-wrap" />', slideCrop: '<div class="sy-slides-crop" />', boxClass: "sy-list", elements: "li", activeClass: "sy-active", fillerClass: "sy-filler", loadingClass: "sy-loading", adaptiveHeight: !0, start: 1, loop: !0, captionsSrc: "img", captions: "overlay", captionsEl: ".sy-caption", initSingle: !0, responsive: !0, preload: "visible", pager: !0, pagerClass: "sy-pager", controls: !0, controlClass: "sy-controls", prevClass: "sy-prev", prevText: "Previous", nextClass: "sy-next", nextText: "Next", hideOnEnd: !0, transition: "fade", kenZoom: 120, slideMargin: 0, transClass: "transition", speed: 800, easing: "swing", continuous: !0, useCSS: !0, auto: !0, autoDirection: "next", autoHover: !0, autoHoverDelay: 100, autoDelay: 500, pause: 4e3, onSliderLoad: function () { return this }, onSlideBefore: function () { return this }, onSlideAfter: function () { return this } }, a.fn.slippry = function (c) { var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A; return e = this, 0 === e.length ? this : e.length > 1 ? (e.each(function () { a(this).slippry(c) }), this) : (d = {}, d.vars = {}, n = function () { var a, b, c; b = document.createElement("div"), c = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", MSTransition: "msTransitionEnd", OTransition: "oTransitionEnd", transition: "transitionEnd transitionend" }; for (a in c) if (void 0 !== b.style[a]) return c[a] }, w = function () { var a = document.createElement("div"), b = ["Khtml", "Ms", "O", "Moz", "Webkit"], c = b.length; return function (d) { if (d in a.style) return !0; for (d = d.replace(/^[a-z]/, function (a) { return a.toUpperCase() }) ; c--;) if (b[c] + d in a.style) return !0; return !1 } }(), z = function (b, c) { var d, e, f, g; return d = c.split("."), e = a(b), f = "", g = "", a.each(d, function (a, b) { b.indexOf("#") >= 0 ? f += b.replace(/^#/, "") : g += b + " " }), f.length && e.attr("id", f), g.length && e.attr("class", a.trim(g)), e }, A = function () { var a, b, c, e; c = {}, e = {}, a = 100 - d.settings.kenZoom, e.width = d.settings.kenZoom + "%", d.vars.active.index() % 2 === 0 ? (e.left = a + "%", e.top = a + "%", c.left = "0%", c.top = "0%") : (e.left = "0%", e.top = "0%", c.left = a + "%", c.top = a + "%"), b = d.settings.pause + 2 * d.settings.speed, d.vars.active.css(e), d.vars.active.animate(c, { duration: b, easing: d.settings.easing, queue: !1 }) }, l = function () { d.vars.fresh ? (d.vars.slippryWrapper.removeClass(d.settings.loadingClass), d.vars.fresh = !1, d.settings.auto && e.startAuto(), d.settings.useCSS || "kenburns" !== d.settings.transition || A(), d.settings.onSliderLoad.call(void 0, d.vars.active.index())) : a("." + d.settings.fillerClass, d.vars.slideWrapper).addClass("ready") }, q = function (b, c) { var e, f, g; e = b / c, f = 1 / e * 100 + "%", g = a("." + d.settings.fillerClass, d.vars.slideWrapper), g.css({ paddingTop: f }), l() }, g = function (b) { var c, d; void 0 !== a("img", b).attr("src") ? a("<img />").on("load", function () { c = b.width(), d = b.height(), q(c, d) }).attr("src", a("img", b).attr("src")) : (c = b.width(), d = b.height(), q(c, d)) }, f = function () { if (0 === a("." + d.settings.fillerClass, d.vars.slideWrapper).length && d.vars.slideWrapper.append(a('<div class="' + d.settings.fillerClass + '" />')), d.settings.adaptiveHeight === !0) g(a("." + d.settings.activeClass, e)); else { var b, c, f; c = 0, f = 0, a(d.vars.slides).each(function () { a(this).height() > c && (b = a(this), c = b.height()), f += 1, f === d.vars.count && (void 0 === b && (b = a(a(d.vars.slides)[0])), g(b)) }) } }, p = function () { d.settings.pager && (a("." + d.settings.pagerClass + " li", d.vars.slippryWrapper).removeClass(d.settings.activeClass), a(a("." + d.settings.pagerClass + " li", d.vars.slippryWrapper)[d.vars.active.index()]).addClass(d.settings.activeClass)) }, u = function () { !d.settings.loop && d.settings.hideOnEnd && (a("." + d.settings.prevClass, d.vars.slippryWrapper)[d.vars.first ? "hide" : "show"](), a("." + d.settings.nextClass, d.vars.slippryWrapper)[d.vars.last ? "hide" : "show"]()) }, i = function () { var b, c; d.settings.captions !== !1 && (b = "img" !== d.settings.captionsSrc ? d.vars.active.attr("title") : void 0 !== a("img", d.vars.active).attr("title") ? a("img", d.vars.active).attr("title") : a("img", d.vars.active).attr("alt"), c = "custom" !== d.settings.captions ? a(d.settings.captionsEl, d.vars.slippryWrapper) : a(d.settings.captionsEl), void 0 !== b && "" !== b ? c.html(b).show() : c.hide()) }, e.startAuto = function () { void 0 === d.vars.timer && void 0 === d.vars.delay && (d.vars.delay = window.setTimeout(function () { d.vars.autodelay = !1, d.vars.timer = window.setInterval(function () { d.vars.trigger = "auto", t(d.settings.autoDirection) }, d.settings.pause) }, d.vars.autodelay ? d.settings.autoHoverDelay : d.settings.autoDelay), d.settings.autoHover && d.vars.slideWrapper.unbind("mouseenter").unbind("mouseleave").bind("mouseenter", function () { void 0 !== d.vars.timer ? (d.vars.hoverStop = !0, e.stopAuto()) : d.vars.hoverStop = !1 }).bind("mouseleave", function () { d.vars.hoverStop && (d.vars.autodelay = !0, e.startAuto()) })) }, e.stopAuto = function () { window.clearInterval(d.vars.timer), d.vars.timer = void 0, window.clearTimeout(d.vars.delay), d.vars.delay = void 0 }, e.refresh = function () { d.vars.slides.removeClass(d.settings.activeClass), d.vars.active.addClass(d.settings.activeClass), d.settings.responsive ? f() : l(), u(), p(), i() }, s = function () { e.refresh() }, m = function () { d.vars.moving = !1, d.vars.active.removeClass(d.settings.transClass), d.vars.fresh || d.vars.old.removeClass("sy-ken"), d.vars.old.removeClass(d.settings.transClass), d.settings.onSlideAfter.call(void 0, d.vars.active, d.vars.old.index(), d.vars.active.index()), d.settings.auto && (d.vars.hoverStop && void 0 !== d.vars.hoverStop || e.startAuto()) }, r = function () { var b, c, f, g, h, i, j; d.settings.onSlideBefore.call(void 0, d.vars.active, d.vars.old.index(), d.vars.active.index()), d.settings.transition !== !1 ? (d.vars.moving = !0, "fade" === d.settings.transition || "kenburns" === d.settings.transition ? (d.vars.fresh ? (d.settings.useCSS ? d.vars.slides.css({ transitionDuration: d.settings.speed + "ms", opacity: 0 }) : d.vars.slides.css({ opacity: 0 }), d.vars.active.css("opacity", 1), "kenburns" === d.settings.transition && d.settings.useCSS && (h = d.settings.pause + 2 * d.settings.speed, d.vars.slides.css({ animationDuration: h + "ms" }), d.vars.active.addClass("sy-ken")), m()) : d.settings.useCSS ? (d.vars.old.addClass(d.settings.transClass).css("opacity", 0), d.vars.active.addClass(d.settings.transClass).css("opacity", 1), "kenburns" === d.settings.transition && d.vars.active.addClass("sy-ken"), a(window).off("focus").on("focus", function () { d.vars.moving && d.vars.old.trigger(d.vars.transition) }), d.vars.old.one(d.vars.transition, function () { return m(), this })) : ("kenburns" === d.settings.transition && A(), d.vars.old.addClass(d.settings.transClass).animate({ opacity: 0 }, d.settings.speed, d.settings.easing, function () { m() }), d.vars.active.addClass(d.settings.transClass).css("opacity", 0).animate({ opacity: 1 }, d.settings.speed, d.settings.easing)), s()) : ("horizontal" === d.settings.transition || "vertical" === d.settings.transition) && (i = "horizontal" === d.settings.transition ? "left" : "top", b = "-" + d.vars.active.index() * (100 + d.settings.slideMargin) + "%", d.vars.fresh ? (e.css(i, b), m()) : (j = {}, d.settings.continuous && (!d.vars.jump || "controls" !== d.vars.trigger && "auto" !== d.vars.trigger || (c = !0, g = b, d.vars.first ? (f = 0, d.vars.active.css(i, d.vars.count * (100 + d.settings.slideMargin) + "%"), b = "-" + d.vars.count * (100 + d.settings.slideMargin) + "%") : (f = (d.vars.count - 1) * (100 + d.settings.slideMargin) + "%", d.vars.active.css(i, -(100 + d.settings.slideMargin) + "%"), b = 100 + d.settings.slideMargin + "%"))), d.vars.active.addClass(d.settings.transClass), d.settings.useCSS ? (j[i] = b, j.transitionDuration = d.settings.speed + "ms", e.addClass(d.settings.transition), e.css(j), a(window).off("focus").on("focus", function () { d.vars.moving && e.trigger(d.vars.transition) }), e.one(d.vars.transition, function () { return e.removeClass(d.settings.transition), c && (d.vars.active.css(i, f), j[i] = g, j.transitionDuration = "0ms", e.css(j)), m(), this })) : (j[i] = b, e.stop().animate(j, d.settings.speed, d.settings.easing, function () { return c && (d.vars.active.css(i, f), e.css(i, g)), m(), this }))), s())) : (s(), m()) }, v = function (a) { d.vars.first = d.vars.last = !1, "prev" === a || 0 === a ? d.vars.first = !0 : ("next" === a || a === d.vars.count - 1) && (d.vars.last = !0) }, t = function (b) { var c, f; d.vars.moving || ("auto" !== d.vars.trigger && e.stopAuto(), c = d.vars.active.index(), "prev" === b ? (f = b, c > 0 ? b = c - 1 : d.settings.loop && (b = d.vars.count - 1)) : "next" === b ? (f = b, c < d.vars.count - 1 ? b = c + 1 : d.settings.loop && (b = 0)) : (b -= 1, f = c > b ? "prev" : "next"), d.vars.jump = !1, "prev" === b || "next" === b || b === c && !d.vars.fresh || (v(b), d.vars.old = d.vars.active, d.vars.active = a(d.vars.slides[b]), (0 === c && "prev" === f || c === d.vars.count - 1 && "next" === f) && (d.vars.jump = !0), r())) }, e.goToSlide = function (a) { d.vars.trigger = "external", t(a) }, e.goToNextSlide = function () { d.vars.trigger = "external", t("next") }, e.goToPrevSlide = function () { d.vars.trigger = "external", t("prev") }, j = function () { if (d.settings.pager && d.vars.count > 1) { var b, c, e; for (b = d.vars.slides.length, e = a('<ul class="' + d.settings.pagerClass + '" />'), c = 1; b + 1 > c; c += 1) e.append(a("<li />").append(a('<a href="#' + c + '">' + c + "</a>"))); d.vars.slippryWrapper.append(e), a("." + d.settings.pagerClass + " a", d.vars.slippryWrapper).click(function () { return d.vars.trigger = "pager", t(parseInt(this.hash.split("#")[1], 10)), !1 }), p() } }, k = function () { d.settings.controls && d.vars.count > 1 && (d.vars.slideWrapper.append(a('<ul class="' + d.settings.controlClass + '" />').append('<li class="' + d.settings.prevClass + '"><a href="#prev">' + d.settings.prevText + "</a></li>").append('<li class="' + d.settings.nextClass + '"><a href="#next">' + d.settings.nextText + "</a></li>")), a("." + d.settings.controlClass + " a", d.vars.slippryWrapper).click(function () { return d.vars.trigger = "controls", t(this.hash.split("#")[1]), !1 }), u()) }, o = function () { d.settings.captions !== !1 && ("overlay" === d.settings.captions ? d.vars.slideWrapper.append(a('<div class="sy-caption-wrap" />').html(z("<div />", d.settings.captionsEl))) : "below" === d.settings.captions && d.vars.slippryWrapper.append(a('<div class="sy-caption-wrap" />').html(z("<div />", d.settings.captionsEl)))) }, y = function () { t(d.vars.active.index() + 1) }, x = function (b) { var c, e, f, g; return g = "all" === d.settings.preload ? b : d.vars.active, f = a("img, iframe", g), c = f.length, 0 === c ? void y() : (e = 0, void f.each(function () { a(this).one("load error", function () { ++e === c && y() }).each(function () { this.complete && a(this).trigger("load") }) })) }, e.getCurrentSlide = function () { return d.vars.active }, e.getSlideCount = function () { return d.vars.count }, e.destroySlider = function () { d.vars.fresh === !1 && (e.stopAuto(), d.vars.moving = !1, d.vars.slides.each(function () { void 0 !== a(this).data("sy-cssBckup") ? a(this).attr("style", a(this).data("sy-cssBckup")) : a(this).removeAttr("style"), void 0 !== a(this).data("sy-classBckup") ? a(this).attr("class", a(this).data("sy-classBckup")) : a(this).removeAttr("class") }), void 0 !== e.data("sy-cssBckup") ? e.attr("style", e.data("sy-cssBckup")) : e.removeAttr("style"), void 0 !== e.data("sy-classBckup") ? e.attr("class", e.data("sy-classBckup")) : e.removeAttr("class"), d.vars.slippryWrapper.before(e), d.vars.slippryWrapper.remove(), d.vars.fresh = void 0) }, e.reloadSlider = function () { e.destroySlider(), h() }, h = function () { var f; return d.settings = a.extend({}, b, c), d.vars.slides = a(d.settings.elements, e), d.vars.count = d.vars.slides.length, d.settings.useCSS && (w("transition") || (d.settings.useCSS = !1), d.vars.transition = n()), e.data("sy-cssBckup", e.attr("style")), e.data("sy-classBackup", e.attr("class")), e.addClass(d.settings.boxClass).wrap(d.settings.slippryWrapper).wrap(d.settings.slideWrapper).wrap(d.settings.slideCrop), d.vars.slideWrapper = e.parent().parent(), d.vars.slippryWrapper = d.vars.slideWrapper.parent().addClass(d.settings.loadingClass), d.vars.fresh = !0, d.vars.slides.each(function () { a(this).addClass("sy-slide " + d.settings.transition), d.settings.useCSS && a(this).addClass("useCSS"), "horizontal" === d.settings.transition ? a(this).css("left", a(this).index() * (100 + d.settings.slideMargin) + "%") : "vertical" === d.settings.transition && a(this).css("top", a(this).index() * (100 + d.settings.slideMargin) + "%") }), d.vars.count > 1 || d.settings.initSingle ? (-1 === a("." + d.settings.activeClass, e).index() ? (f = "random" === d.settings.start ? Math.round(Math.random() * (d.vars.count - 1)) : d.settings.start > 0 && d.settings.start <= d.vars.count ? d.settings.start - 1 : 0, d.vars.active = a(d.vars.slides[f]).addClass(d.settings.activeClass)) : d.vars.active = a("." + d.settings.activeClass, e), k(), j(), o(), x(d.vars.slides), void 0) : this }, h(), this) } }(jQuery);

/** /slippry library */