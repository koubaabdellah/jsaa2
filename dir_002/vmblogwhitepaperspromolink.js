$(document).ready(function () {
    $(".wplink").tooltip({
        position: {
            my: "center bottom-12",
            at: "center top",
            using: function (position, feedback) {
                $(this).css(position);
                $("<div>")
                    .addClass("arrow")
                    .addClass(feedback.vertical)
                    .addClass(feedback.horizontal)
                    .appendTo(this);
            }
        }
    });
    var offset = $.browser.msie ? 30 : 16;
    $(".wplinkimg").tooltip({
        position: {
            my: "center bottom-" + offset,
            at: "center top",
            using: function (position, feedback) {
                $(this).css(position);
                $("<div>")
                    .addClass("arrow")
                    .addClass(feedback.vertical)
                    .addClass(feedback.horizontal)
                    .appendTo(this);
            }
        }
    });
});

function ShowHideWhitePaperDescription(id) {
    var a = jQuery("#" + id + "Link");
    var o = jQuery("#" + id);
    var c = o.attr("class");
    if (c == "hide") {
        o.animate({
            opacity: '1',
            height: '100',
            width: '100%'
        }, 300);
        o.attr("class", "show");
        o.css("width", "");
        o.css("border", "solid 1px #999");
        o.scrollTop(0);
        a.text("Hide full descripton");
    }
    else if (c == "show") {
        o.animate({
            opacity: '0',
            height: '0',
            width: '0'
        }, 300);
        o.attr("class", "hide");
        o.css("border-width", "0");
        a.text("Show full descripton");
    }
}
