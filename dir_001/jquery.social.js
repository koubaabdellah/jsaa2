(function ($) {
    $.fn.FacebookShare = function (options) {
        var settings = $.extend({
            url: "http://www.campaignasia.com"
        }, options);

        $(this).on("click", function (e) {
            e.preventDefault();
            var url = settings.url;
            var facebookUrl = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url);
            window.open(facebookUrl, "ShareOnFacebook", "width=500,height=150");
        });
    };

    $.fn.GooglePlusShare = function (options) {
        var settings = $.extend({
            url: "http://www.campaignasia.com"
        }, options);

        $(this).on("click", function (e) {
            e.preventDefault();
            var url = settings.url;
            var googleUrl = "https://plus.google.com/share?url=" + encodeURIComponent(url);
            window.open(googleUrl, "ShareOnGoogle+", "width=500,height=150");
        });
    }

    $.fn.LinkedInShare = function (options) {
        var settings = $.extend({
            text: "Campaign",
            url: "http://www.campaignasia.com",
        }, options);

        $(this).on("click", function (e) {
            e.preventDefault();
            var url = settings.url;
            var linkedInUrl = "https://www.linkedin.com/cws/share?url=" + url;
            window.open(linkedInUrl, "ShareOnLinkedIn", "width=500,height=150");
        });
    };

    $.fn.TwitterShare = function (options) {
        var settings = $.extend({
            text: "Campaign",
            url: "http://www.campaignasia.com",
        }, options);

        $(this).on("click", function (e) {
            e.preventDefault();
            var text = settings.text;
            var url = settings.url.replace(/ /g, "%20");
            var twitterUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text).replace(/%20/g, "+") + "&url=" + encodeURIComponent(url);
            window.open(twitterUrl, "ShareOnTwitter", "width=645,height=445");
        });
    };

    $.fn.WhatsappMobileShare = function(options) {
        var settings = $.extend({
            text: "Campaign",
            url: "http://www.campaignasia.com"
        }, options);
        $(this).on("click", function(e) {
            e.preventDefault();
            window.location.href = "whatsapp://send?text=" + encodeURIComponent(settings.text + "\n" + settings.url);
        });
    }

    $.fn.WeiboShare = function(options) {
        var settings = $.extend({
            text: "Campaign",
            url: "http://www.campaignasia.com",
            imageUrl: "http://cdn.i.haymarketmedia.asia/?n=campaign-asia%2fcontent%2fno-image.jpg"
        }, options);
        $(this).on("click", function (e) {
            e.preventDefault();
            var weiboUrl = "http://service.weibo.com/share/share.php?url=" + encodeURIComponent(settings.url) + "&title=" + settings.text + "&pic=" + settings.imageUrl;
            window.open(weiboUrl, "ShareOnWeibo", "width=645,height=445");
        });
    }

    $.fn.PopupShare = function (options) {
        var settings = $.extend({
            url: "http://www.campaignasia.com",
            popupHeading: "articleShare-popup",
            popupInstructions: ""
        }, options);

        $(this).on("click", function (e) {
            e.preventDefault();
            $.magnificPopup.open({
                items: { src: "#articleShare-popup" },
                type: "inline",
                showCloseBtn: true,
                enableEscapeKey: true,
                closeOnBgClick: false,
                callbacks: {
                    beforeOpen: function () {
                        $("#articleShare-qrcode").qrcode({
                            height: 220,
                            width: 220,
                            text: settings.url
                        });
                        $("#articleShare-popup header").text(settings.popupHeading);
                        $("#articleShare-popup footer").text(settings.popupInstructions);
                    },
                    close: function() {
                        $("#articleShare-qrcode").empty();
                    }
                }
            }, 0);
            $(".mfp-bg").addClass("no-bg");
        });
    }

})(jQuery);