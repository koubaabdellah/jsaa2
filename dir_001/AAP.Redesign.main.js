$(document).ready(function () {
    initiateMainContainer();

    //for RedesignArticlePageLayout.aspx
    $(".fontScalerWrapper").fontScaler({
        target: ".fontScalerWrapper",
        increment: 'variable',
        fx: 'smooth',
        containerclass: 'fontScaler',
        controllerElement: "#font-scaler-container"
    });

    if ($("div[id*='PublishingPageImageField__ControlWrapper']").find("img").length <= 0) {
        $("div[id*='PublishingPageImageField__ControlWrapper']").remove();
    }

    if ($("div[id*='MobilePageImageField__ControlWrapper']").find("img").length <= 0) {
        $("div[id*='MobilePageImageField__ControlWrapper']").remove();
    }

    if ($(".article-image").find("img").length <= 0) {
        $(".article-image").css("display", "none !important");
    }

    //for RedesignNewsPageLayout.aspx
    if ($("div[id*='ArticleMainImage']").find("img").length <= 0) {
        $("div[id*='ArticleMainImage']").hide();
    }

    if ($("div[id*='MobilePageImageField']").find("img").length <= 0) {
        $("div[id*='MobilePageImage']").hide();
    }

    if ($(".article-image").find("img").length <= 0) {
        $(".article-image").hide();
    }
});