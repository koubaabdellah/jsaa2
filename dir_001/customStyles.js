var styles = {
    init: function(h, sh, b, l) {
        var hSizes = styles._interpretFontSize("headline", h);
        var shSizes = styles._interpretFontSize("subheadline", sh);
        var bSizes = styles._interpretFontSize("body", b);
        var lSizes = styles._interpretFontSize("legal", l);

        styles._fontSizeInjection(hSizes, shSizes, bSizes, lSizes);
    },
    _interpretFontSize: function (text, size) {
        var maxSize, minSize, multiplier;

        if (text == "headline") {
            if (size == "ExtraLarge") {
                maxSize = "56px";
                minSize = "40px";
                multiplier = 16;
                console.log("HEADLINE: Extra Lrg");
            } else if (size == "Large") {
                maxSize = "48px";
                minSize = "32px";
                multiplier = 16;
                console.log("HEADLINE: Lrg");
            } else if (size == "Medium") {
                maxSize = "40px";
                minSize = "28px";
                multiplier = 12;
                console.log("HEADLINE: Medium");
            } else if (size == "Small") {
                maxSize = "32px";
                minSize = "24px";
                multiplier = 8;
                console.log("HEADLINE: Sm");
            } else if (size == "ExtraSmall") { // Extra Small
                maxSize = "24px";
                minSize = "20px";
                multiplier = 4;
                console.log("HEADLINE: Extra Sm");
            }
        } else if (text == "subheadline") {
            if (size == "ExtraLarge") {
                maxSize = "36px";
                minSize = "24px";
                multiplier = 12;
                console.log("SUBHEADLINE: Extra Large");
            } else if (size == "Large") {
                maxSize = "30px";
                minSize = "22px";
                multiplier = 8;
                console.log("SUBHEADLINE: Large");
            } else if (size == "Medium") {
                maxSize = "24px";
                minSize = "18px";
                multiplier = 6;
                console.log("SUBHEADLINE: Medium");
            } else if (size == "Small") {
                maxSize = "18px";
                minSize = "16px";
                multiplier = 2;
                console.log("SUBHEADLINE: Sm");
            } else if (size == "ExtraSmall") { // Extra Small
                maxSize = "16px";
                minSize = "14px";
                multiplier = 2;
                console.log("SUBHEADLINE: Extra Sm");
            }
        } else if (text == "body") {
            if (size == "ExtraLarge") {
                maxSize = "32px";
                minSize = "20px";
                multiplier = 12;
                console.log("BODY: Extra Lrg");
            } else if (size == "Large") {
                maxSize = "22px";
                minSize = "18px";
                multiplier = 4;
                console.log("BODY: Lrg");
            } else if (size == "Medium") {
                maxSize = "18px";
                minSize = "16px";
                multiplier = 2;
                console.log("BODY: Medium");
            } else if (size == "Small") {
                maxSize = "16px";
                minSize = "14px";
                multiplier = 2;
                console.log("BODY: Small");
            } else if (size == "ExtraSmall") { // Extra Small
                maxSize = "14px";
                minSize = "12px";
                multiplier = 2;
                console.log("BODY: Extra Small");
            }
        } else if (text == "legal") {
            if (size == "ExtraLarge") {
                maxSize = "16px";
                minSize = "14px";
                multiplier = 2;
                console.log("LEGAL: Extra Large");
            } else if (size == "Large") {
                maxSize = "14px";
                minSize = "12px";
                multiplier = 2;
                console.log("LEGAL: Large");
            } else if (size == "Medium") {
                maxSize = "12px";
                minSize = "11px";
                multiplier = 1;
                console.log("LEGAL: Medium");
            } else if (size == "Small") {
                maxSize = "11px";
                minSize = "10px";
                multiplier = 1;
                console.log("LEGAL: Small");

            } else if (size == "ExtraSmall") { // Extra Small
                maxSize = "10px";
                minSize = "9px";
                multiplier = 1;
                console.log("LEGAL: Extra Small");
            }
        }

        return { maxSize, minSize, multiplier };
    },
    _fontSizeInjection: function (h, sh, b, l) {
        var styleSheet = document.styleSheets[0];
        var headlineSelectors = ".copy .copy__text--headline, .scratch-off__text--headline, .callout__text--headline";
        var subheadlineSelectors = ".copy .copy__text--subheadline, .scratch-off__text--details, .scratch-off__text--details-link, .callout__text--copy";
        var bodySelectors = ".copy .copy__text--details, .form .inner-form .form-item .form__detail-copy, .form .inner-form .form-item .form__detail-copy .form__detail-copy--link";
        var legalSelectors = ".callout__text--disclaimer, .sweeps-form__disclaimer-copy p, .copy.rules-copy .copy__text--details p, .copy.rules-copy .copy__text--details ul, .copy.rules-copy .copy__text--details ol, .copy.rules-copy .copy__text--details p a"

        // Headline Styles
        styleSheet.insertRule( headlineSelectors + " { font-size: " + h.minSize + "; }", styleSheet.cssRules.length);
        styleSheet.insertRule("@media screen and (min-width: 1920px) { " + headlineSelectors + " { font-size:" + h.maxSize + "; } }", styleSheet.cssRules.length);
        styleSheet.insertRule("@media screen and (min-width: 320px) {" + headlineSelectors + " {font-size: calc(" + h.minSize + " + " + h.multiplier + "* ((100vw - 320px) / 1600)); } }", styleSheet.cssRules.length);

        // Subheadline Styles
        styleSheet.insertRule(subheadlineSelectors + " { font-size: " + sh.minSize + "; }", styleSheet.cssRules.length);
        styleSheet.insertRule("@media screen and (min-width: 1920px) { " + subheadlineSelectors + " { font-size:" + sh.maxSize + "; } }", styleSheet.cssRules.length);
        styleSheet.insertRule("@media screen and (min-width: 320px) {" + subheadlineSelectors + " {font-size: calc(" + sh.minSize + " + " + sh.multiplier + "* ((100vw - 320px) / 1600)); } }", styleSheet.cssRules.length);

        // Body Styles
        styleSheet.insertRule(bodySelectors + " { font-size: " + b.minSize + "; }", styleSheet.cssRules.length);
        styleSheet.insertRule("@media screen and (min-width: 1920px) { " + bodySelectors + " { font-size:" + b.maxSize + "; } }", styleSheet.cssRules.length);
        styleSheet.insertRule("@media screen and (min-width: 320px) { " + bodySelectors + " {font-size: calc(" + b.minSize + " + " + b.multiplier + "* ((100vw - 320px) / 1600)); } }", styleSheet.cssRules.length);

        // Legal Styles
        styleSheet.insertRule(legalSelectors + " { font-size: " + l.minSize + "; }", styleSheet.cssRules.length);
        styleSheet.insertRule("@media screen and (min-width: 1920px) { " + legalSelectors + " { font-size:" + l.maxSize + "; } }", styleSheet.cssRules.length);
        styleSheet.insertRule("@media screen and (min-width: 320px) { " + legalSelectors + " {font-size: calc(" + l.minSize + " + " + l.multiplier + "* ((100vw - 320px) / 1600)); } }", styleSheet.cssRules.length);

    }
}