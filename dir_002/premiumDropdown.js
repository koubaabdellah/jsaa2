(function () {
    $('.js-premium-nav-btn, .js-premium-nav-btn > a').on('mouseenter', function () {
        $('.js-premium-nav-btn .js-default-column > a').addClass('defaultSubNav');
        
        var navbarWidth = $('#primaryNav').outerWidth();
        var ratio = 0.2;
        $(".js-subMenu").width(navbarWidth * ratio);
        $('.js-subMenu .js-subMenu-panel').css({
            width: navbarWidth * (1 - ratio),
            left: navbarWidth * ratio
        });

        $(".js-subMenu .js-default-column .js-subMenu-panel").css("display", "block");
    });

    $('.js-column').one('mouseenter', function () {
        var self = this;
        var ajaxurl = $(self).data('ajax-url');
        fetchContents(ajaxurl, function (response) {
            $(self).find('.js-subMenu-content').html(response);
        });
    });

    function fetchContents(url, successCb) {
        $.ajax({
            url: url,
            cache: false,
            dataType: "html",
            success: function(response) {
                successCb(response);
            },
        });
    }

    // jquery.menu-aim
    $(".js-subMenu-wrapper").each(function(index, menu) {
        $menu = $(menu);
        $menu.menuAim({
            activate: activateSubmenu,
            deactivate: deactivateSubmenu,
            rowSelector: '> .js-default-column, > .js-column',
            exitMenu: function() { return true; },
        });
    })

    function activateSubmenu(row) {
        var $row = $(row),
        $submenu = $("#" + $row.data('submenu-id'));
        // Show the submenu
        $submenu.css({
            display: "block",
        });
        // Keep the currently activated row's highlighted look
        $row.find("> a").addClass("defaultSubNav");
    }

    function deactivateSubmenu(row) {
        var $row = $(row),
        $submenu = $("#" + $row.data('submenu-id'));        
        // Hide the submenu and remove the row's highlighted look
        $submenu.css("display", "none");
        $row.find("> a").removeClass("defaultSubNav");
    }

}());