$(function () {
    var whatsHotPanel = $('.whats-hot');
    var whatsHotTabList = $('.whats-hot-tabs', whatsHotPanel);
    var whatsHotTabs = $('li', whatsHotTabList);
    var whatsHotTabLinks = $('a', whatsHotTabs);
    var tabPanels = $('.tab-panel');
    var activeValue = $('#whatsHotActiveTab');

    selectActiveTab = function () {
        whatsHotTabs.each(function () {
            var tabValue = $(this).data('tab-value');
            var tabPanel = $('.tab-panel[data-tab-value="' + tabValue + '"]');

            if (tabValue != activeValue.val()) {
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
                tabPanels.hide();
                tabPanel.show();
            }
        });

        EqualiseHeights();
    };

    function EqualiseHeights() {
        var items = $('.whats-hot-item');
        var height = 0;

        //Remove height from elements
        items.css('height', 'auto');

        //Find max height of group
        items.each(function () {
            height = Math.max($(this).height(), height);
        });

        //Apply max height to each item
        items.css('height', height);


        var tabs = $('.whats-hot-tabs li');
        var height = 0;

        tabs.css('height', 'auto');

        tabs.each(function () {
            height = Math.max($(this).height(), height);
        });

        tabs.css('height', height);
    };

    $(window).resize(function () {
        EqualiseHeights();
    });

    whatsHotTabLinks.click(function () {
        activeValue.val($(this).parent('li').data('tab-value'));
        selectActiveTab();
    });

    $(window).load(function(){ selectActiveTab(); });
});