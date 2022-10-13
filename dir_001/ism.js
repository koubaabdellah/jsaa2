var isFlyoutMenu = false;
var isFlyoutOpen = false;

$(function () {
    $('img').unveil(50);
    $('table').wrap('<div class="table-wrapper"></div>');

    $.get(window.location.protocol + '//' + window.location.host + '/account-buttons/?time=' + new Date().getTime(), function (data) {

      
        $('.sec-menu').html(data.ButtonsHtml);
        $('.pullout-menu').prepend(data.ButtonsHtml);

        if (data.GAEvents.length > 0) {
            for (var i = 0; i < data.GAEvents.length; i++) {
                ga('send', 'event', data.GAEvents[i].EventCategory, data.GAEvents[i].EventAction, data.GAEvents[i].EventLabel);
            }
        }

    }).fail(function() {
        console.log('hello');
    });

    $.get(window.location.protocol + '//' + window.location.host + '/nav/mobile/', function (data) {
        $('#mobile-links').html(data);
    });

    $('.ticker').newsTicker({
        max_rows: 1,
        row_height: $('.ticker li').height(),
        direction: 'up',
        autostart: 1,
        speed: 1000,
        duration: 4000
    });

    var ads = [];
    var refreshAds = [];

    googletag.cmd.push(function () {
        googletag.pubads().collapseEmptyDivs(true);

        var leaderboardMapping = googletag.sizeMapping()
            .addSize([300, 50], [300, 50])
            .addSize([760, 90], [728, 90])
            .build();

        $('.dfp').each(function () {
            var ad = $(this);
            var id = ad.attr('id');
            var size = ad.data('ad-sizes');

            if (Object.prototype.toString.call(size[0]) === '[object Array]') {
                size = size[0];
            }

            ads.push({
                width: size[0],
                height: size[1],
                sizes: ad.data('ad-sizes'),
                id: id
            });
        });

        ads.sort(function (x, y) {
            var widthSort = x.width - y.width;

            if (widthSort != 0) {
                return widthSort;
            }

            return x.height - y.height;
        });

        googletag.pubads().setTargeting('topics', window.gptTopics);

        for (var ad in ads) {
            if (ads.hasOwnProperty(ad)) {
                var adSlot = googletag.defineSlot('/1165/rx_infosecurity_magazine/' + window.gptZone, ads[ad].sizes, ads[ad].id).addService(googletag.pubads());

                if (ads[ad].width === 728 && ads[ad].height === 90) {
                    adSlot.defineSizeMapping(leaderboardMapping);
                    refreshAds.push(adSlot);
                }
            }
        }

        googletag.pubads().setTargeting('topics', window.gptTopics);
        googletag.pubads().enableSingleRequest();
        googletag.enableServices();

        for (var a = 0; a < ads.length; a++) {
            googletag.display(ads[a].id);
        }
    });

    var refreshAdsDiv = $('.refresh-ads');
    var refreshIsVisible = refreshAdsDiv.is(':visible');

    $(window).resize(function () {
        newRefreshIsVisible = refreshAdsDiv.is(':visible');

        if (newRefreshIsVisible != refreshIsVisible) {
            refreshIsVisible = newRefreshIsVisible;
            googletag.pubads().refresh(refreshAds);
        };
    });

    var openMegaDrop = undefined;

    $('li:has(".mega-drop") > a').on('click', function () {
        var selectedDropdown = $('.mega-drop', $(this).parent()).attr('id');
        var previousDropdown = openMegaDrop;
        var navLinks = $('.nav-bar-link');

        if (previousDropdown != undefined) {
            $('#' + openMegaDrop).fadeOut();
            navLinks.removeClass('active');
            openMegaDrop = undefined;
        }
        
        if (selectedDropdown != previousDropdown) {
            // check if dropdown has content
            if ($('#' + selectedDropdown).text() == '') {
                $.get($(this).attr('href'), function (data) {
                    $('#' + selectedDropdown).html(data);
                });
            }

            $('#' + selectedDropdown).fadeIn();
            $(this).addClass('active');
            $('.active:after').css('border-bottom', '12px solid transparent');
            
            openMegaDrop = selectedDropdown;
        }

        return false;
    });

    $('.flyout-controls').on('click', function () {
        if (isFlyoutOpen) {
            closeFlyout();
        } else {
            openFlyout();
        }

        return false;
    });

    $('.pullout-overlay').on('click', function () { closeFlyout() });

    var megaDrop = $('.mega-drop')

    megaDrop.on('click', function (e) {
        e.stopPropagation();
    });
    
    $(document).on('click', function (e) {
        if(megaDrop.is(':visible')){
            // Do whatever you want; the event that'd fire if the "special" element has been clicked on has been cancelled.
            openMegaDrop = undefined;
            $('.nav-bar-link').removeClass('active');
            megaDrop.fadeOut();
        };
    });
});

$(window).load(function () {
    equalHeights();
});

$(window).resize(_.debounce(function () {
    if ($('.pullout-menu').css('display') == 'none') {
        if (isFlyoutOpen) {
            closeFlyout();
        }
        isFlyoutMenu = false;
    }

    equalHeights();
}, 300));

openFlyout = function () {
    $('html,body,.page').css('overflow', 'hidden');

    $('.pullout-overlay').show().on('touchstart', function(e) {
        //e.preventDefault();
    });

    $('.page-wrapper').animate({
        'margin-left': '250px'
    }, 250);

    $('header').animate({
        'left': '250px'
    }, 250);

    $('.pullout-menu').animate({
        'left': '0'
    }, 250);

    isFlyoutOpen = true;
}

closeFlyout = function () {
    $('html,body,.page').css('overflow', '');
    $('.page-wrapper').animate({
        'margin-left': '0'
    }, 250);

    $('header').animate({
        'left': '0'
    }, 250);

    $('.pullout-menu').animate({
        'left': '-250px'
    }, 250);

    $('.pullout-overlay').hide();

    isFlyoutOpen = false;
}

saveResponse = function (answerId, input, radio) {
    if (radio) {
        var label = document.querySelector('label[for=' + input.id + ']');
    } else {
        var label = input;
    }
        label.className = 'selected';
    

    $.get('/homepage-feature/?param=' + answerId, function (data) {
        $('#feature-panel').html(data);
    });
};

equalHeights = function () {
    var groups = [];
    $('[data-height-group]').each(function () {
        var groupName = $(this).data('height-group');

        if ($.inArray(groupName, groups) < 0) {
            groups.push(groupName);
        }
        
    });

    for (var g = 0; g < groups.length; g++) {
        var maxHeight = 0;

        $('[data-height-group="' + groups[g] + '"]').height('auto').each(function () {
            if ($(this).height() > maxHeight) {
                maxHeight = $(this).height();
            }
        }).height(maxHeight);
    }
};

moveToAnchor = function (anchor) {
    var anchorPosition = $(anchor).offset().top;

    if ($(document).width() < 760) {
        var offset = $('header').outerHeight() + 16;
        anchorPosition = anchorPosition - offset;
    }

    $('html, body').animate({ scrollTop: anchorPosition }, { duration: 1 });
};

scrollToTop = function () {
    $('html, body').animate({ scrollTop: 0 }, { duration: 750, easing: 'swing' });
};

highlightNavigation = function (classToHighlight) {
    var links = $('.nav-bar-link');

    for (var i = 0; i < links.length; i++) {
        var link = $(links[i]);

        if (link.hasClass(classToHighlight)) {
            link.addClass('nav-highlight');
        }
    }
};