jQuery(document).on("click.SidrMobileMenuClosing", ".mobile-menu-overlay, .mobile-menu-overlay-side", function () {
    jQuery.sidr("close", "sidr-main");
    jQuery.sidr("close", "sidr-sidenav");
});

$(document).ready(function () {

    var config = {
        sensitivity: 2, // number = sensitivity threshold (must be 1 or higher)    
        interval: 100, // number = milliseconds for onMouseOver polling interval    
        over: menuHoverOver, // function = onMouseOver callback (REQUIRED)    
        timeout: 300, // number = milliseconds delay before onMouseOut    
        out: menuHoverOut // function = onMouseOut callback (REQUIRED)    
    };

    $(".nav-dropdown").css({ 'opacity': '0' });
    $(".nav li").hoverIntent(config);

    // FLEXSLIDER 
    $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        pausePlay: false,
        slideshow: false,
        startAt: 0,
        start: function (slider) {
            $('body').removeClass('loading');
        }
    });

    $("#personalize-your-experience-slider").flexslider({
        animation: "slide",
        animationLoop: false,
        controlNav: false,
        pausePlay: false,
        slideshow: false,
        startAt: 0,
        start: function (slider) {
            $('body').removeClass('loading');
            var animateSlide = slider.slides.eq(slider.animatingTo);
            var storyContainer = $(animateSlide).find("ul");

            if ($(storyContainer).hasClass("child-stories") || $(storyContainer).hasClass("prenatal-stories")) {
                jQuery(".personalize-your-experience-logged-in").find(".personalize-your-experience-icons a[panel-index='0']");
            } else {
                jQuery(".personalize-your-experience-logged-in").find(".personalize-your-experience-icons a[panel-index='0']").addClass('active');
            }
        },
        before: function (slider) {
            var animateSlide = slider.slides.eq(slider.animatingTo);
            var storyContainer = $(animateSlide).find("ul");

            var panelTitle = $(storyContainer).siblings(".story-title-text").text();
            $(animateSlide).parents(".personalize-your-experience-logged-in").find(".personalize-your-experience-icons").find(".story-title").find(".current-story-title-text").text(panelTitle);
            $(animateSlide).parents(".personalize-your-experience-logged-in").find(".personalize-your-experience-icons").find("a.active").removeClass("active");

            if ($(storyContainer).hasClass("child-stories") || $(storyContainer).hasClass("prenatal-stories")) {
                var index = $(storyContainer).attr("panel-index");
                $(animateSlide).parents(".personalize-your-experience-logged-in").find(".personalize-your-experience-icons").find("a[panel-index='" + index + "']").addClass("active");
            }
        }
    });
    
    // MOBILE/TABLET NAVIGATION
    $('.btn-mobile-menu').sidr({
        body: 'none',
        name: 'sidr-main',
        side: 'right',
        displace: 'false',
        source: '#navigation',
        onOpen: function () {
            var mobileMenuOverlay = $("<div>", {
                "class": "mobile-menu-overlay"
            });
            $('#s4-workspace').prepend(mobileMenuOverlay);
            $('#s4-workspace').css("opacity", "0.2");
        },
        onClose: function () {
            $(".mobile-menu-overlay").remove();
            $('#s4-workspace').css("opacity", "1");
        }
    });

    $('.menu-more').sidr({
        body: 'none',
        name: 'sidr-sidenav',
        side: 'left',
        displace: 'false',
        source: '.left-col-container',
        onOpen: function () {
            var mobileMenuOverlay = $('<div>', {
                class: 'mobile-menu-overlay-side'
            });
            $('#s4-workspace').prepend(mobileMenuOverlay);
            $('#s4-workspace').css('opacity', '0.2');
        },
        onClose: function () {
            $('.mobile-menu-overlay-side').remove();
            $('#s4-workspace').css('opacity', '1');
        }
    });

    // $("#s4-workspace").bind("click", function () { $.sidr("close", "sidr-main"); });
    // $("#s4-workspace").bind("click", function () { $.sidr("close", "sidr-sidenav"); });

    // Need to move sidr-main within the form so the postback works
    jQuery('#aspnetForm').prepend(jQuery('#sidr-main'));

    var flyoutMenus = $(".sidr-class-nav-dropdown");
    $.each(flyoutMenus, function (i, item) {
        var parentLi = $(item).parents("li");
        $(parentLi).addClass("item-has-children");

        if ($(parentLi).has(".sidr-class-nav-active").length > 0) {
            $(parentLi).addClass("nav-active-container");
        }

        $(parentLi).bind("click", function () {
            var thisLi = this;
            $(thisLi).find(".sidr-class-nav-dropdown").slideToggle(400, function () {
                if ($(thisLi).find(".sidr-class-nav-dropdown").is(":visible")) {
                    $(thisLi).addClass("open-dropdown");
                }
                else {
                    $(thisLi).removeClass("open-dropdown");
                }
            });
        });
    });

    //initialize methods
    initializeLanguageContainer();

    //article rollup pagers
    $(".rollup-pager").each(function (i, item) {
        $(item).find("a:first").click();
    });

    //tab landing listings
    $(".listing-tabs-container").each(function (i, item) {
        $(item).find(".listing-tab:first").click();
    });

    //hide article image
    if ($(".article-image").has("img").length <= 0) {
        $(".article-image").hide();
    }

    //personalize logged in
    initializeLoggedInPersonalize();

    //initialize mobile sponsors
    $(".promo-rollup-container").parent().addClass("promo-switch-container");
    initializeMobileSponsors();
    $(window).resize(function () {
        initializeMobileSponsors();
        initializeLanguageButtonPosition();
    });

    $('a.sidr-class-root-mobile-link').each(function () {
        var link = jQuery(this);
        var divs = link.parent().children('div');

        if (divs.length > 0) {
            link.click(function (e) {
                e.preventDefault();
            });
        }
    });
});


// MEGANAV
function menuHoverOver() {
    $(this).find(".nav-dropdown").stop().fadeTo('fast', 1).show();
}

function menuHoverOut() {
    $(this).find(".nav-dropdown").stop().fadeTo('fast', 0, function () {
        $(this).hide();
    });
}

//initialize menu container
function initiateMainContainer() {
    $("#hcMainContainer").addClass("container");
}

function initializeLanguageContainer() {
    var langId = $("input[id*='hdnLanguage']").val();
    switch (langId) {
        case "3082":
        case "21514":
            $("body").addClass("hc-espanol");
            break;
    }
}

function getRollupPageItems(el, pageNumber, pageItemLimit) {
    var numPageNumber = Number(pageNumber);
    var numPageItemLimit = Number(pageItemLimit);
    if (numPageItemLimit <= 0 || numPageNumber <= 0) return;

    var index = (numPageNumber - 1) * numPageItemLimit;
    var end = numPageNumber * numPageItemLimit;

    $(el).parents(".rollup-pager").find(".active").removeClass("active");
    $(el).addClass("active");

    var rollup = $(el).parents(".rollup-container").find(".rollup-item-container").find(".rollup");
    $(rollup).find("li").hide();
    $(rollup).find("li").slice(index, end).show();
}

function changeLandingListingTabs(el) {
    $(el).parents(".listing-tabs").find(".active").removeClass("active");
    $(el).parents(".tab-listing-container").find(".listing-tab-info").hide();

    var newVisiblePane = $(el).attr("pane");
    $(el).addClass("active");
    $(el).parents(".tab-listing-container").find("#" + newVisiblePane).show();
}

function showHideMilestoneList(el) {
    var milestoneInfo = $(el).parents(".milestone-list-container").find(".milestone-list-info");
    if ($(milestoneInfo).hasClass("see-all-info")) {
        $(milestoneInfo).removeClass("see-all-info");
    }
    else {
        $(milestoneInfo).addClass("see-all-info");
    }

}

function goToPersonalizePanel(el) {
    var panelIndex = $(el).attr("panel-index");
    var sliderContainer = $(el).parents(".personalize-your-experience-logged-in").find("#personalize-your-experience-slider");

    var currentPanel = $(sliderContainer).find(".slides > li:not(.clone)").find("ul[panel-index='" + panelIndex + "']");
    var currentPanelIndex = $(currentPanel).parents("li:not(.clone)").index()
    $(sliderContainer).flexslider(Number(currentPanelIndex));
}

function initializeLoggedInPersonalize() {
    $("#personalize-your-experience-slider").each(function (i, item) {
        var childName = $(item).find(".slides .flex-active-slide").find("ul").siblings(".story-title-text").text();
        $(item).parents(".personalize-your-experience-logged-in").find(".personalize-your-experience-icons").find(".current-story-title-text").text(childName);

        var index = $(item).find(".slides .flex-active-slide").find(".child-stories").attr("panel-index");
        if (index) {
            $(item).parents(".personalize-your-experience-logged-in").find(".personalize-your-experience-icons").find("a[panel-index='" + index + "']").addClass("active");
        }
    });
}

function aToZScrollToTop(el) {
    var backToTopPos = $(el).parents(".alphabet-links-container").find("#back-to-top-pos");
    $('#s4-workspace').animate({
        scrollTop: $(backToTopPos).offset().top
    }, 2000);
}

function initializeMobileSponsors() {
    var mobileSponsors = $(".middle-col-container .mobile-sponsors");
    var leftNavSponsors = $(".left-col-container .tablet-desktop-sponsors");
    var isMobileSponsorReady = $(mobileSponsors).is(":visible");
    if (isMobileSponsorReady) {
        var sponsorHtml = $(leftNavSponsors).find(".promo-switch-container").html().trim();
        if (sponsorHtml) {
            if (sponsorHtml != "" && sponsorHtml != "\n") {
                $(mobileSponsors).html(sponsorHtml);
                $(leftNavSponsors).find(".promo-switch-container").html("");
            }
        }
    }
    else {
        var sponsorHtml = $(mobileSponsors).html();
        if (sponsorHtml) {
            sponsorHtml = sponsorHtml.trim();
            if (sponsorHtml != "" && sponsorHtml != "\n") {
                $(leftNavSponsors).find(".promo-switch-container").html(sponsorHtml);
                $(mobileSponsors).html("");
            }
        }
    }
}

function initializeLanguageButtonPosition() {
    var isSponsorsVisible = $(".hc-ribbon .btn-our-sponsors.hidden-xs").is(":visible");
    if (!isSponsorsVisible) {
        $(".hc-ribbon .btn-language").attr("style", "left: 15px");
    }
    else {
        $(".hc-ribbon .btn-language").removeAttr("style");
    }
}

