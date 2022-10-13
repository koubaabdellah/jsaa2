$(document).ready(function(){
    $('.box-featuredParaInn a').each(function() {
        var href = $(this).attr('href');
        if (href.indexOf('mailto:') == -1) {
            var target = "_self";
            $(this).attr('target','_blank');
        }
    });

    var window_size = $(window).width();
    if (window_size <= 767) {
        var container_size = (window_size - 30)+"px";
        $('.box-featuredParaInn img').each(function() {
            var img_width = $(this).css('width');
            if (img_width >= container_size) {
                if ($(this).hasClass('img-leftAlign') || $(this).hasClass('img-rightAlign')) {
                    $(this).removeClass('img-leftAlign');
                    $(this).removeClass('img-rightAlign');
                }
            }
        });
    }
});