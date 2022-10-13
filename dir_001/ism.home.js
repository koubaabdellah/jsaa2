$(function () {
    $('#features-scroller').sly({
        horizontal: 1,
        itemNav: 'centered',
        smart: 1,
        activateOn: 'click',
        mouseDragging: 1,
        touchDragging: 1,
        releaseSwing: 1,
        startAt: 0,
        scrollSource: $('.features-scrollbar'),
        scrollBar: $('.features-scrollbar'),
        scrollBy: 1,
        dragHandle: 1,
        dynamicHandle: 1,
        cycleBy: 'items',       // Enable automatic cycling by 'items' or 'pages'.
        cycleInterval: 2500,    // Delay between cycles in milliseconds.
        pauseOnHover: 1,        // Pause cycling when mouse hovers over the FRAME.
        startPaused: 0          // Whether to start in paused sate.
    });

    $('#podcasts-scroller').sly({
        horizontal: 1,
        itemNav: 'centered',
        smart: 1,
        activateOn: 'click',
        mouseDragging: 1,
        touchDragging: 1,
        releaseSwing: 1,
        startAt: 0,
        scrollSource: $('.podcasts-scrollbar'),
        scrollBar: $('.podcasts-scrollbar'),
        scrollBy: 1,
        dragHandle: 1,
        dynamicHandle: 1,
        cycleBy: 'items',       // Enable automatic cycling by 'items' or 'pages'.
        cycleInterval: 2500,    // Delay between cycles in milliseconds.
        pauseOnHover: 1,        // Pause cycling when mouse hovers over the FRAME.
        startPaused: 0          // Whether to start in paused sate.
    });

    $("#owl-carousel").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 500,
        paginationSpeed: 1500,
        singleItem: true,
        autoPlay: 10000,
        //transitionStyle: 'fade',
        navigationText: ["<i class=\"spricon-arrow\"></i>", "<i class=\"spricon-arrow\"></i>"]
    });

    var carouselLink = $('.carousel-link');

    carouselLink.on('click', function () {
        window.location = $(this).data('href');
    });

    $.get('/homepage-feature/', function (data) {
        $('#feature-panel').html(data);
    });

    var featureItems = $('#features-list li');
    featureItems.on('mouseenter', function () {
        $(this).addClass('active');
    }).on('mouseleave', function () {
        $(this).removeClass('active');
        });

    var podcastItems = $('#podcast-list li');
    podcastItems.on('mouseenter', function () {
        $(this).addClass('active');
    }).on('mouseleave', function () {
        $(this).removeClass('active');
    });

    var subButton = $('#sub-button');
    var subTextBox = $('#sub-textbox');

    subButton.on('click', function () {
        var input = subTextBox.val();
        var defaultLink = '/my-account/login/';

        if (input.length > 0) {
            window.location = defaultLink + '?signup=' + encodeURIComponent(input);
        } else {
            window.location = defaultLink;
        }
    });
});

$(window).resize(_.debounce(function () {
    $('#features-scroller').sly('reload');
    $('#podcasts-scroller').sly('reload');
}));