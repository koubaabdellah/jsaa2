/* 2018 American Heart Association
 * Sitecore Heart.org Header Footer Syndication Plugin
 * Version 2.0 -  Non Vue.js, no webpack
 * Prod 3/25/2019
 * ------------------------------------------------------------------------
 * OPTIONS
 * Updates:
 * 1/29/2019: Coveo search
 * 2/15/2019: Heart logo changeable
 * 2/28/2019: Change to non vue js, no bundle, no webpack to increase performance
 * <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
 * <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
 * <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
 *  9/24/2020: All images are not pointing to static.heart.org/ahaanywhere/sitecore/dist/images directory
 *  5/11/2021: Updated json footer
 *  1/12/2022: Updated footer memorial gift link from https://www.heart.org/?form=legacy&s_src=20U2W1EEMM&sub_src=footer_memorial_gift
 */

;
(function ($, window, document, undefined) {

    var pluginName = 'ahaHeaderFooterSitecore';

    function Plugin(element, options) {

        // Store a reference to the source element
        this.el = element;

        // Store a jQuery reference  to the source element
        //this.$el = $(element);

        this.options = $.extend({}, $.fn[pluginName].defaults, options);
        // Initialize the plugin instance
        this.init();
    }

    // RAW html and copied API response for placeholders header + footer
    // https://www.heart.org/x-sitecore-service/layoutservice/index?route=/
    // Replace the image src to point to https://static.heart.org/ahaanywhere/sitecore/dist/images/ directory
    Plugin.prototype = {
        "dataObj": {
            "placeholders": {
                "header": [
                    // {
                    //     "name": "aha-notification",
                    //     "type": "",
                    //     "contents": "\u003caha-notification notification-id=\"alert-2DE6CDD386ED42BABE7A272778D99145\"\u003e\r\n            \u003cdiv class=\"c-alert\" role=\"alert\" aria-atomic=\"true\"\u003e\r\n                \u003cdiv class=\"container c-alert__container\"\u003e\r\n                    \u003cdiv class=\"c-alert__message\"\u003e\r\n                        \u003cspan class=\"c-alert__kicker\"\u003eAlert\u003c/span\u003e\r\n                      \r\n                        \u003ca href=\"https://www.heart.org/en/about-us/disaster-resources\" class=\"c-alert__content \"\u003eEmergency Resources for hurricanes and wildfires\u003c/a\u003e\r\n                    \u003c/div\u003e\r\n\r\n                    \u003cdiv class=\"c-alert__actions\"\u003e\r\n                            \u003ca href=\"https://www.heart.org/en/about-us/disaster-resources\" class=\"c-alert__cta btn btn-round btn-light \" target=\"\"\u003e\r\nEmergency Resources\r\n                            \u003c/a\u003e\r\n                        \u003cbutton type=\"button\" class=\"c-alert__close btn btn-dark\" aria-label=\"Close\" ref=\"alert-2DE6CDD386ED42BABE7A272778D99145\"\u003e\r\n                            \u003cspan aria-hidden=\"true\"\u003e\u0026times;\u003c/span\u003e\r\n                        \u003c/button\u003e\r\n                    \u003c/div\u003e\r\n                \u003c/div\u003e\r\n            \u003c/div\u003e\r\n        \u003c/aha-notification\u003e"
                    // },

                    {
                        "name":"div",
                        "type":"",
                        "contents":"\u003cdiv\u003e\r\n\r\n\r\n    \r\n    \r\n    \u003c!-- Resources --\u003e\r\n    \u003cdiv id=\"coveo3a949f41\" class=\"CoveoForSitecoreContext\" data-sc-should-have-analytics-component=\u0027true\u0027 data-sc-analytics-enabled=\u0027true\u0027 data-sc-current-language=\u0027en\u0027 data-prebind-sc-language-field-name=\u0027fieldTranslator\u0027 data-sc-language-field-name=\u0027_language\u0027 data-sc-default-pipeline-name=\u0027heart.org\u0027 data-sc-labels=\u0027{\u0026quot;Created\u0026quot; : \u0026quot;Created\u0026quot; , \u0026quot;Created by\u0026quot; : \u0026quot;Created by\u0026quot; , \u0026quot;Creation time.\u0026quot; : \u0026quot;Creation time.\u0026quot; , \u0026quot;Language\u0026quot; : \u0026quot;Language\u0026quot; , \u0026quot;Last time modified.\u0026quot; : \u0026quot;Last time modified.\u0026quot; , \u0026quot;Template\u0026quot; : \u0026quot;Template\u0026quot; , \u0026quot;Uniform resource identifier\u0026quot; : \u0026quot;URI\u0026quot; , \u0026quot;Updated by\u0026quot; : \u0026quot;Updated by\u0026quot; , \u0026quot;Miles\u0026quot; : \u0026quot;miles\u0026quot; , \u0026quot;Website\u0026quot; : \u0026quot;Website\u0026quot; , \u0026quot;Directions\u0026quot; : \u0026quot;Directions\u0026quot; , \u0026quot;If the problem persists contact the administrator.\u0026quot; : \u0026quot;If the problem persists contact the administrator.\u0026quot; , \u0026quot;Search is currently unavailable\u0026quot; : \u0026quot;Oops! Something went wrong on the server.\u0026quot; , \u0026quot;Ascending\u0026quot; : \u0026quot;Ascending\u0026quot; , \u0026quot;Descending\u0026quot; : \u0026quot;Descending\u0026quot;}\u0027 data-sc-maximum-age=\u0027900000\u0027 data-sc-page-name=\u0027Home\u0027 data-sc-page-name-full-path=\u0027/sitecore/content/Heart/Home\u0027 data-sc-index-source-name=\u0027Coveo_web_index - azre1vsitecmpw1-sitecoreprodcm.heart.org\u0027 data-sc-is-in-experience-editor=\u0027false\u0027 data-sc-is-user-anonymous=\u0027true\u0027 data-sc-item-uri=\u0027sitecore://web/{06543030-2367-46B0-A2D2-0ECC48DA526F}?lang=en\u0026amp;ver=127\u0027 data-sc-item-id=\u002706543030-2367-46b0-a2d2-0ecc48da526f\u0027 data-prebind-sc-latest-version-field-name=\u0027fieldTranslator\u0027 data-sc-latest-version-field-name=\u0027_latestversion\u0027 data-sc-rest-endpoint-uri=\u0027/coveo/rest\u0027 data-sc-site-name=\u0027heart\u0027 data-sc-field-prefix=\u0027f\u0027 data-sc-field-suffix=\u002712787\u0027 data-sc-prefer-source-specific-fields=\u0027false\u0027 data-sc-external-fields=\u0027[{\u0026quot;fieldName\u0026quot;:\u0026quot;permanentid\u0026quot;,\u0026quot;shouldEscape\u0026quot;:false}]\u0027 data-sc-source-specific-fields=\u0027[{\u0026quot;fieldName\u0026quot;:\u0026quot;attachmentparentid\u0026quot;},{\u0026quot;fieldName\u0026quot;:\u0026quot;author\u0026quot;},{\u0026quot;fieldName\u0026quot;:\u0026quot;clickableuri\u0026quot;},{\u0026quot;fieldName\u0026quot;:\u0026quot;collection\u0026quot;},{\u0026quot;fieldName\u0026quot;:\u0026quot;concepts\u0026quot;},{\u0026quot;fieldName\u0026quot;:\u0026quot;date\u0026quot;},{\u0026quot;fieldName\u0026quot;:\u0026quot;filetype\u0026quot;},{\u0026quot;fieldName\u0026quot;:\u0026quot;indexeddate\u0026quot;},{\u0026quot;fieldName\u0026quot;:\u0026quot;isattachment\u0026quot;},{\u0026quot;fieldName\u0026quot;:\u0026quot;language\u0026quot;},{\u0026quot;fieldName\u0026quot;:\u0026quot;printableuri\u0026quot;},{\u0026quot;fieldName\u0026quot;:\u0026quot;rowid\u0026quot;},{\u0026quot;fieldName\u0026quot;:\u0026quot;size\u0026quot;},{\u0026quot;fieldName\u0026quot;:\u0026quot;source\u0026quot;},{\u0026quot;fieldName\u0026quot;:\u0026quot;title\u0026quot;},{\u0026quot;fieldName\u0026quot;:\u0026quot;topparent\u0026quot;},{\u0026quot;fieldName\u0026quot;:\u0026quot;topparentid\u0026quot;},{\u0026quot;fieldName\u0026quot;:\u0026quot;transactionid\u0026quot;},{\u0026quot;fieldName\u0026quot;:\u0026quot;uri\u0026quot;},{\u0026quot;fieldName\u0026quot;:\u0026quot;urihash\u0026quot;}]\u0027\u003e\r\n    \u003c/div\u003e\r\n    \u003cscript type=\"text/javascript\"\u003e\r\n        var endpointConfiguration = {\r\n            itemUri: \"sitecore://web/{06543030-2367-46B0-A2D2-0ECC48DA526F}?lang=en\u0026amp;ver=127\",\r\n            siteName: \"heart\",\r\n            restEndpointUri: \"/coveo/rest\"\r\n        };\r\n        if (typeof (CoveoForSitecore) !== \"undefined\") {\r\n            CoveoForSitecore.SearchEndpoint.configureSitecoreEndpoint(endpointConfiguration);\r\n            CoveoForSitecore.version = \"5.0.788.5\";\r\n            var context = document.getElementById(\"coveo3a949f41\");\r\n            if (!!context) {\r\n                CoveoForSitecore.Context.configureContext(context);\r\n            }\r\n        }\r\n    \u003c/script\u003e\r\n\u003c/div\u003e"
                     },
                     {
                        "name":"div",
                        "type":"",
                        "contents":"\u003cdiv class=\"l-header__top\" v-sticky-header=\"\"\u003e\r\n        \u003cdiv class=\"container container-fluid container-wide\"\u003e\r\n            \u003cnav class=\"c-top-nav js-mobile-nav-positioning\" role=\"navigation\" aria-label=\"Top Navigation\"\u003e\r\n                \u003ca href=\"https://www.heart.org/en\" class=\"c-top-nav__logo\"\u003e\r\n                        \u003cimg src=\"https://static.heart.org/ahaanywhere/sitecore/dist/images/aha_icon.svg\" alt=\"Return to American Heart Association \" disablewebedit=\"False\"\u003e\r\n\r\n                        \u003cdiv class=\"sticky__logo\"\u003e\r\n                            \u003cimg src=\"https://static.heart.org/ahaanywhere/sitecore/dist/images/aha_icon.svg\" alt=\"American Heart Association\" disablewebedit=\"False\"\u003e\r\n                        \u003c/div\u003e\r\n                \u003c/a\u003e\r\n\r\n\r\n\r\n                    \u003cul class=\"c-top-nav__nav nav\"\u003e\r\n                        \r\n                            \u003cli class=\"c-top-nav__item  \"\u003e\r\n                                    \u003ca href=\"https://www.heart.org/en/about-us/heart-attack-and-stroke-symptoms\" target=\"\" class=\"c-top-nav__link c-cta c-cta--icon   \"\u003e\r\n                                        \u003cspan class=\"c-underline-link\"\u003e\r\n                                            Heart Attack and Stroke Symptoms\r\n                                        \u003c/span\u003e\r\n                                    \u003c/a\u003e\r\n                            \u003c/li\u003e\r\n                            \u003cli class=\"c-top-nav__item  \"\u003e\r\n                                    \u003ca href=\"https://www.heart.org/en/coronavirus\" target=\"\" class=\"c-top-nav__link c-cta c-cta--icon   \"\u003e\r\n                                        \u003cspan class=\"c-underline-link\"\u003e\r\n                                            COVID-19 Resources\r\n                                        \u003c/span\u003e\r\n                                    \u003c/a\u003e\r\n                            \u003c/li\u003e\r\n                            \u003cli class=\"c-top-nav__item  \"\u003e\r\n                                    \u003ca href=\"https://www.heart.org/en/volunteer/opportunities\" target=\"\" class=\"c-top-nav__link c-cta c-cta--icon   \"\u003e\r\n                                        \u003cspan class=\"c-underline-link\"\u003e\r\n                                            Volunteer\r\n                                        \u003c/span\u003e\r\n                                    \u003c/a\u003e\r\n                            \u003c/li\u003e\r\n                            \u003cli class=\"c-top-nav__item  \"\u003e\r\n                                    \u003ca href=\"https://www.shopheart.org/?utm_source=heart.org\u0026amp;utm_medium=Referral\u0026amp;utm_campaign=AHA-Parent-Site-Top-Nav-Desktop\" target=\"\" class=\"c-top-nav__link c-cta c-cta--icon   \"\u003e\r\n                                        \u003cspan class=\"c-underline-link\"\u003e\r\n                                            SHOP\r\n                                        \u003c/span\u003e\r\n                                    \u003c/a\u003e\r\n                            \u003c/li\u003e\r\n                            \u003cli class=\"c-top-nav__item c-top-nav__button \"\u003e\r\n                                    \u003ca href=\"https://heart.donorsupport.co/-/XXRCJWZY\" target=\"\" class=\"c-top-nav__link c-cta c-cta--icon h-color--white  text-uppercase\"\u003e\r\n                                        \u003cspan class=\"c-underline-link\"\u003e\r\n                                                \u003cimg src=\"https://static.heart.org/ahaanywhere/sitecore/dist/images/donateheartwhite.svg\" alt=\"\"\u003e\r\n                                            DONATE NOW\r\n                                        \u003c/span\u003e\r\n                                    \u003c/a\u003e\r\n                            \u003c/li\u003e\r\n                        \r\n                        \r\n\r\n\r\n\u003cli\u003e\r\n    \u003cb-btn class=\"c-top-nav__link btn btn-link-plain\" v-b-modal.coveomodal1=\"\"\u003e\r\n        \u003cimg src=\"https://static.heart.org/ahaanywhere/sitecore/dist/images/search.svg\" alt=\"Search\" width=\"24\" height=\"24\" disablewebedit=\"False\"\u003e \u003cspan class=\"sr-only\"\u003eSearch\u003c/span\u003e\r\n    \u003c/b-btn\u003e\r\n    \u003cb-modal id=\"coveomodal1\" class=\"c-site-search-modal global-search-section\" hide-footer=\"\" v-close-coveo-modal=\"\" title-tag=\"\"\u003e\r\n        \u003cdiv class=\"global-search-section__search-text\"\u003e Search \u003c/div\u003e\r\n        \u003cdiv class=\"global-search-section__coveo-block\"\u003e\r\n            \r\n        \u003c/div\u003e\r\n    \u003c/b-modal\u003e\r\n\r\n\u003c/li\u003e\r\n\r\n                    \u003c/ul\u003e\r\n\r\n                \u003c!--Mobila Navigation--\u003e\r\n                \u003caha-mobile-nav modal-role=\"dialog\" modal-content-role=\"document\"\u003e\r\n                    \u003ctemplate\u003e\r\n                        \u003cul class=\"c-mobile-nav__list\"\u003e\r\n                            \r\n                        \u003c/ul\u003e\r\n                    \u003c/template\u003e\r\n                \u003c/aha-mobile-nav\u003e\r\n            \u003c/nav\u003e\r\n        \u003c/div\u003e\r\n    \u003c/div\u003e"
                     },
                     {
                        "name":"div",
                        "type":"",
                        "contents":"\u003cdiv class=\"l-header__utility\"\u003e\r\n        \u003cnav class=\"container container-fluid\" aria-label=\"Mobile Utility Navigation\"\u003e\r\n            \u003cul class=\"c-utility-nav nav\"\u003e\r\n                \r\n                \r\n\r\n                        \u003cli\u003e\r\n                            \u003ca href=\"https://www.heart.org/en/about-us/heart-attack-and-stroke-symptoms\" target=\"\" class=\"c-cta c-cta--icon h-color--gray-dark  \"\u003e\r\n                                Warning Signs\r\n                            \u003c/a\u003e\r\n                        \u003c/li\u003e\r\n                        \u003cli\u003e\r\n                            \u003ca href=\"https://www.heart.org/en/coronavirus\" target=\"\" class=\"c-cta c-cta--icon h-color--gray-dark  \"\u003e\r\n                                COVID-19 Resources\r\n                            \u003c/a\u003e\r\n                        \u003c/li\u003e\r\n                        \u003cli\u003e\r\n                            \u003ca href=\"https://www.heart.org/en/volunteer/opportunities\" target=\"\" class=\"c-cta c-cta--icon h-color--gray-dark  \"\u003e\r\n                                Volunteer\r\n                            \u003c/a\u003e\r\n                        \u003c/li\u003e\r\n                        \u003cli\u003e\r\n                            \u003ca href=\"https://www.shopheart.org/?utm_source=heart.org\u0026amp;utm_medium=Referral\u0026amp;utm_campaign=AHA-Parent-Site-Top-Nav-Mobile\" target=\"\" class=\"c-cta c-cta--icon h-color--gray-dark  \"\u003e\r\n                                SHOP\r\n                            \u003c/a\u003e\r\n                        \u003c/li\u003e\r\n                \r\n            \u003c/ul\u003e\r\n        \u003c/nav\u003e\r\n    \u003c/div\u003e"
                     }

                ],
                "/header/donate-mobile": [
                    {
                        "name":"li",
                        "type":"",
                        "contents":"\u003cli class=\"d-block d-lg-none d-xl-none donate-btn--mobile\"\u003e\r\n\r\n\u003ca href=\"https://heart.donorsupport.co/-/XWJXNTGJ?s_src=21H2W1AEMG\u0026amp;s_subsrc=feb21_global_mobile\u0026amp;utm_source=heart.org\u0026amp;utm_medium=website\u0026amp;utm_campaign=fy21_feb\u0026amp;utm_content=feb21_global_mobilr\" disablewebedit=\"True\" class=\"c-mobile-nav__list-item c-cta c-cta--icon h-color--white btn btn-primary btn-round\"\u003eDonate Now\u003c/a\u003e            \u003c/li\u003e"
                     },
                ],
                "search": [
                    {
                        "contents": " <li>\
                        <button class='btn c-top-nav__link btn btn-link-plain' data-toggle='modal' data-target='#coveomodal1'>\
                        <img src='//static.heart.org/ahaanywhere/sitecore/dist/images/search.svg'\
                            alt='' width='24' height='24' disablewebedit='False'> <span class='sr-only'>Search</span>\
                        </button>\
                         <div class='c-site-search-modal'></div>\
                        </div>\
                        </li>\
                        "
                    }

                ],
                "footer": [
                    {
                        "name":"div",
                        "type":"",
                        "contents":"\u003cdiv class=\"container container-fluid\"\u003e\n    \u003cdiv class=\"l-generic row\"\u003e\n        \u003cdiv class=\"l-generic__col col-md-12\"\u003e\n            \n        \u003c/div\u003e\n    \u003c/div\u003e\n\u003c/div\u003e"
                     },
                     {
                        "name":"div",
                        "type":"",
                        "contents":"\u003cdiv class=\"l-footer__section\"\u003e\n        \u003cdiv class=\"container container-fluid\"\u003e\n            \u003cdiv class=\"row\"\u003e\n                \u003cdiv class=\"col-sm-6 col-md-3 l-footer__nav\"\u003e\n                        \u003cdiv class=\"l-footer__logo\"\u003e\n                            \u003cimg src=\"https://www.heart.org/-/media/Images/Logos/Global-Do-No-Edit/Header/AHA_Full.svg?h=256\u0026amp;iar=0\u0026amp;mw=960\u0026amp;w=426\u0026amp;hash=0DABA00FF5BAFEF13579E5C0CC322FA1\" alt=\"American Heart Association - Full Logo\" width=\"426\" height=\"256\" loading=\"lazy\" disablewebedit=\"False\"\u003e\n                        \u003c/div\u003e\n                    \u003cbutton v-b-toggle=\"\u0027contact-collapse-footer\u0027\" class=\"btn btn-link-plain btn--select \"\u003e\n                        \u003ch2 class=\"h6\"\u003eContact Us\u003c/h2\u003e\n                    \u003c/button\u003e\n                        \u003cb-collapse id=\"contact-collapse-footer\" :visible=\"false\"\u003e\n                            \u003cp\u003e\n\u003cstrong\u003eNational Center\u003c/strong\u003e\u003cbr\u003e\n7272 Greenville Ave.\u003cbr\u003e\nDallas, TX 75231\u003c/p\u003e\n\u003cp\u003e\n\u003cstrong\u003eCustomer Service\u003c/strong\u003e\u003cbr\u003e\n1-800-AHA-USA-1\u003cbr\u003e\n1-800-242-8721\u003cbr\u003e\n\u003cbr\u003e\n\u003ca href=\"https://www.heart.org/en/about-us/contact-us\" class=\"c-cta btn btn-md btn-light btn-round h-theme--red w-75\"\u003eContact Us\u003c/a\u003e\u003c/p\u003e\n\u003cp\u003e\n\u003cstrong\u003eHours\u003c/strong\u003e\u003cbr\u003e\nMonday - Friday: 7 a.m. \u0026ndash; 7 p.m. CT\u0026nbsp;\u003cbr\u003e\nSaturday: 9 a.m. - 5 p.m. CT\u003cbr\u003e\nClosed on Sundays\u003c/p\u003e\n\u003cp\u003e\u003cstrong\u003eTax Identification Number\u003cbr\u003e\n\u003c/strong\u003e13-5613797\u003c/p\u003e\n                        \u003c/b-collapse\u003e\n                \u003c/div\u003e\n                    \u003cdiv class=\"col-sm-6 col-md-3 l-footer__nav\"\u003e\n                        \u003ch2 class=\"h6 l-footer__nav-title\"\u003eAbout Us\u003c/h2\u003e\n                        \u003cbutton v-b-toggle=\"\u0027footer_collapse_7bd34300-0756-433d-8d9c-ec90741851e3\u0027\" class=\"btn btn-link-plain btn--select \"\u003e\n                            \u003cspan class=\"h6\"\u003eAbout Us\u003c/span\u003e\n                        \u003c/button\u003e\n                        \u003cb-collapse id=\"footer_collapse_7bd34300-0756-433d-8d9c-ec90741851e3\" :visible=\"false\"\u003e\n                            \u003cul class=\"nav flex-column\"\u003e\n                                        \u003cli class=\"nav-item\"\u003e\n                                            \u003ca href=\"https://www.heart.org/en/about-us\" title=\"About the AHA/ASA\" disablewebedit=\"True\" class=\" c-cta--arrow \"\u003e About the AHA/ASA\u003c/a\u003e\n                                        \u003c/li\u003e\n                                        \u003cli class=\"nav-item\"\u003e\n                                            \u003ca href=\"https://www.heart.org/en/about-us/annual-report\" title=\"Annual Report\" disablewebedit=\"True\" class=\" c-cta--arrow \"\u003e Annual Report\u003c/a\u003e\n                                        \u003c/li\u003e\n                                        \u003cli class=\"nav-item\"\u003e\n                                            \u003ca href=\"https://www.heart.org/en/about-us/aha-financial-information\" title=\"AHA Financial Information\" disablewebedit=\"True\" class=\" c-cta--arrow \"\u003e AHA Financial Information\u003c/a\u003e\n                                        \u003c/li\u003e\n                                        \u003cli class=\"nav-item\"\u003e\n                                            \u003ca href=\"https://www.heart.org/en/about-us/international-programs\" title=\"International Programs\" disablewebedit=\"True\" class=\" c-cta--arrow \"\u003e International Programs\u003c/a\u003e\n                                        \u003c/li\u003e\n                                        \u003cli class=\"nav-item\"\u003e\n                                            \u003ca href=\"https://www.heart.org/en/news\" title=\"Latest Heart and Stroke News\" disablewebedit=\"True\" class=\" c-cta--arrow \"\u003e Latest Heart and Stroke News\u003c/a\u003e\n                                        \u003c/li\u003e\n                                        \u003cli class=\"nav-item\"\u003e\n                                            \u003ca href=\"https://newsroom.heart.org/\" title=\"AHA/ASA Media Newsroom\" disablewebedit=\"True\" class=\" c-cta--arrow \"\u003e AHA/ASA Media Newsroom\u003c/a\u003e\n                                        \u003c/li\u003e\n                                        \u003cli class=\"nav-item\"\u003e\n                                            \u003ca href=\"https://heart.jobs/?utm_campaign=heart.org-Footer\u0026amp;vs=2896\u0026amp;utm_medium=Other\u0026amp;utm_source=heart.org-Footer\" title=\"Careers\" disablewebedit=\"True\" class=\" c-cta--arrow \"\u003e Careers\u003c/a\u003e\n                                        \u003c/li\u003e\n                            \u003c/ul\u003e\n                        \u003c/b-collapse\u003e\n                    \u003c/div\u003e\n                    \u003cdiv class=\"col-sm-6 col-md-3 l-footer__nav\"\u003e\n                        \u003ch2 class=\"h6 l-footer__nav-title\"\u003eGet Involved\u003c/h2\u003e\n                        \u003cbutton v-b-toggle=\"\u0027footer_collapse_5af5d17d-c298-4c54-ad01-9b9c9f57dd3a\u0027\" class=\"btn btn-link-plain btn--select \"\u003e\n                            \u003cspan class=\"h6\"\u003eGet Involved\u003c/span\u003e\n                        \u003c/button\u003e\n                        \u003cb-collapse id=\"footer_collapse_5af5d17d-c298-4c54-ad01-9b9c9f57dd3a\" :visible=\"false\"\u003e\n                            \u003cul class=\"nav flex-column\"\u003e\n                                        \u003cli class=\"nav-item\"\u003e\n                                            \u003ca href=\"https://mygiving.heart.org/-/XEDQWRZF\" title=\"Donate Now\" disablewebedit=\"True\" class=\" c-cta--arrow \"\u003e Donate Now\u003c/a\u003e\n                                        \u003c/li\u003e\n                                        \u003cli class=\"nav-item\"\u003e\n                                            \u003ca href=\"https://www.heart.org?form=FUNQCSERKQD\u0026amp;s_src=20U2W1EEMM\u0026amp;sub_src=footer_memorial_gift\" title=\"Make a Memorial Gift\" title=\"Memorial Gift\" disablewebedit=\"True\" class=\" c-cta--arrow \"\u003e Make a Memorial Gift\u003c/a\u003e\n                                        \u003c/li\u003e\n                                        \u003cli class=\"nav-item\"\u003e\n                                            \u003ca href=\"https://www.heart.org/en/get-involved/ways-to-give\" title=\"Ways to Give\" disablewebedit=\"True\" class=\" c-cta--arrow \"\u003e Ways to Give\u003c/a\u003e\n                                        \u003c/li\u003e\n                                        \u003cli class=\"nav-item\"\u003e\n                                            \u003ca href=\"https://www.heart.org/en/get-involved/advocate\" title=\"Advocate\" disablewebedit=\"True\" class=\" c-cta--arrow \"\u003e Advocate\u003c/a\u003e\n                                        \u003c/li\u003e\n                                        \u003cli class=\"nav-item\"\u003e\n                                            \u003ca href=\"https://www.heart.org/en/volunteer/opportunities\" title=\"Volunteer\" disablewebedit=\"True\" class=\" c-cta--arrow \"\u003e Volunteer\u003c/a\u003e\n                                        \u003c/li\u003e\n                                        \u003cli class=\"nav-item\"\u003e\n                                            \u003ca href=\"https://www.goredforwomen.org/en/\" title=\"Go Red For Women\" disablewebedit=\"True\" class=\" c-cta--arrow \"\u003e Go Red For Women\u003c/a\u003e\n                                        \u003c/li\u003e\n                                        \u003cli class=\"nav-item\"\u003e\n                                            \u003ca href=\"https://www.shopheart.org/?a=aha-heart.org-bottom-navigation\u0026amp;utm_source=heart.org\u0026amp;utm_medium=referral\u0026amp;utm_campaign=aha-heart.org-bottom-navigation\" title=\"SHOP\" disablewebedit=\"True\" class=\" c-cta--arrow text-uppercase\"\u003e SHOP\u003c/a\u003e\n                                        \u003c/li\u003e\n                            \u003c/ul\u003e\n                        \u003c/b-collapse\u003e\n                    \u003c/div\u003e\n                    \u003cdiv class=\"col-sm-6 col-md-3 l-footer__nav\"\u003e\n                        \u003ch2 class=\"h6 l-footer__nav-title\"\u003eOur Sites\u003c/h2\u003e\n                        \u003cbutton v-b-toggle=\"\u0027footer_collapse_5a4f2b26-5096-453a-a428-e566a5b49970\u0027\" class=\"btn btn-link-plain btn--select \"\u003e\n                            \u003cspan class=\"h6\"\u003eOur Sites\u003c/span\u003e\n                        \u003c/button\u003e\n                        \u003cb-collapse id=\"footer_collapse_5a4f2b26-5096-453a-a428-e566a5b49970\" :visible=\"false\"\u003e\n                            \u003cul class=\"nav flex-column\"\u003e\n                                        \u003cli class=\"nav-item\"\u003e\n                                            \u003ca href=\"https://www.heart.org/en/\" title=\"American Heart Association\" disablewebedit=\"True\" class=\" c-cta--arrow \"\u003e American Heart Association\u003c/a\u003e\n                                        \u003c/li\u003e\n                                        \u003cli class=\"nav-item\"\u003e\n                                            \u003ca href=\"https://www.stroke.org/en/\" title=\"American Stroke Association\" disablewebedit=\"True\" class=\" c-cta--arrow \"\u003e American Stroke Association\u003c/a\u003e\n                                        \u003c/li\u003e\n                                        \u003cli class=\"nav-item\"\u003e\n                                            \u003ca href=\"https://cpr.heart.org/en/\" title=\"CPR \u0026amp; ECC\" disablewebedit=\"True\" class=\" c-cta--arrow \"\u003e CPR \u0026amp; ECC\u003c/a\u003e\n                                        \u003c/li\u003e\n                                        \u003cli class=\"nav-item\"\u003e\n                                            \u003ca href=\"https://professional.heart.org/en/\" title=\"Professional Heart Daily\" disablewebedit=\"True\" class=\" c-cta--arrow \"\u003e Professional Heart Daily\u003c/a\u003e\n                                        \u003c/li\u003e\n                                        \u003cli class=\"nav-item\"\u003e\n                                            \u003ca href=\"https://www.heart.org/en/about-us/aha-asa-website-directory\" title=\"More Sites\" disablewebedit=\"True\" class=\" c-cta--arrow \"\u003e More Sites\u003c/a\u003e\n                                        \u003c/li\u003e\n                            \u003c/ul\u003e\n                        \u003c/b-collapse\u003e\n                    \u003c/div\u003e\n            \u003c/div\u003e\n        \u003c/div\u003e\n    \u003c/div\u003e"
                     },
                     {
                        "name":"div",
                        "type":"",
                        "contents":"\u003cdiv class=\"l-footer__section\"\u003e\n        \u003cdiv class=\"container container-fluid l-footer__social\"\u003e\n                \u003cul class=\"nav l-icon-nav\"\u003e\n                            \u003cli\u003e\n                                \u003ca href=\"https://www.facebook.com/AmericanHeart\" rel=\"noopener noreferrer\" disablewebedit=\"True\" target=\"_blank\"\u003e\u003cimg src=\"https://www.heart.org/-/media/Feature/Navigation/Social/facebook-gray.svg?h=52\u0026amp;iar=0\u0026amp;mw=960\u0026amp;w=52\u0026amp;hash=33465ADC41884841750228F71D10B2B4\" alt=\"Facebook\" width=\"52\" height=\"52\" loading=\"lazy\" disablewebedit=\"True\"\u003e\u003c/a\u003e\n                            \u003c/li\u003e\n                            \u003cli\u003e\n                                \u003ca href=\"https://instagram.com/american_heart\" rel=\"noopener noreferrer\" title=\"American Heart Association Instagram\" disablewebedit=\"True\" target=\"_blank\"\u003e\u003cimg src=\"https://www.heart.org/-/media/Feature/Navigation/Social/instagram-gray.svg?h=52\u0026amp;iar=0\u0026amp;mw=960\u0026amp;w=52\u0026amp;hash=97FB156508DB9D7E1B4078CC66612140\" alt=\"Instagram\" width=\"52\" height=\"52\" loading=\"lazy\" disablewebedit=\"True\"\u003e\u003c/a\u003e\n                            \u003c/li\u003e\n                            \u003cli\u003e\n                                \u003ca href=\"https://www.twitter.com/American_Heart\" rel=\"noopener noreferrer\" disablewebedit=\"True\" target=\"_blank\"\u003e\u003cimg src=\"https://www.heart.org/-/media/Feature/Navigation/Social/twitter-gray.svg?h=52\u0026amp;iar=0\u0026amp;mw=960\u0026amp;w=52\u0026amp;hash=F62CADED1F2898E8EE0F8950C8E7C178\" alt=\"Twitter\" width=\"52\" height=\"52\" loading=\"lazy\" disablewebedit=\"True\"\u003e\u003c/a\u003e\n                            \u003c/li\u003e\n                            \u003cli\u003e\n                                \u003ca href=\"https://www.tiktok.com/@americanheartassociation?lang=en\" rel=\"noopener noreferrer\" disablewebedit=\"True\" target=\"_blank\"\u003e\u003cimg src=\"https://www.heart.org/-/media/Feature/Social/Tiktok_grey.png?h=52\u0026amp;iar=0\u0026amp;mw=960\u0026amp;w=52\u0026amp;hash=2C6B9CE30538A91433C446B26D44E360\" alt=\"Tik Tok\" width=\"52\" height=\"52\" loading=\"lazy\" disablewebedit=\"True\"\u003e\u003c/a\u003e\n                            \u003c/li\u003e\n                            \u003cli\u003e\n                                \u003ca href=\"https://www.youtube.com/user/americanheartassoc\" rel=\"noopener noreferrer\" title=\"American Heart Association YouTube\" disablewebedit=\"True\" target=\"_blank\"\u003e\u003cimg src=\"https://www.heart.org/-/media/Feature/Navigation/Social/youtube-gray.svg?h=52\u0026amp;iar=0\u0026amp;mw=960\u0026amp;w=52\u0026amp;hash=F527E6110617B9C45AE48599E6978ECC\" alt=\"YouTube\" width=\"52\" height=\"52\" loading=\"lazy\" disablewebedit=\"True\"\u003e\u003c/a\u003e\n                            \u003c/li\u003e\n                            \u003cli\u003e\n                                \u003ca href=\"https://www.linkedin.com/company/american-heart-association\" rel=\"noopener noreferrer\" title=\"American Heart Association Linked In\" disablewebedit=\"True\" target=\"_blank\"\u003e\u003cimg src=\"https://www.heart.org/-/media/Feature/Navigation/Social/linkedin-gray.svg?h=52\u0026amp;iar=0\u0026amp;mw=960\u0026amp;w=52\u0026amp;hash=C5DB01D669B2BAF0A1E09AC5E024EB72\" alt=\"LinkedIn\" width=\"52\" height=\"52\" loading=\"lazy\" disablewebedit=\"True\"\u003e\u003c/a\u003e\n                            \u003c/li\u003e\n                            \u003cli\u003e\n                                \u003ca href=\"https://www.pinterest.com/americanheart/\" rel=\"noopener noreferrer\" title=\"American Heart Association Pinterest\" disablewebedit=\"True\" target=\"_blank\"\u003e\u003cimg src=\"https://www.heart.org/-/media/Feature/Navigation/Social/pinterest-gray.svg?h=52\u0026amp;iar=0\u0026amp;mw=960\u0026amp;w=52\u0026amp;hash=56E0F9174853E59F7211DBE1E6D3E0D4\" alt=\"Pinterest\" width=\"52\" height=\"52\" loading=\"lazy\" disablewebedit=\"True\"\u003e\u003c/a\u003e\n                            \u003c/li\u003e\n                \u003c/ul\u003e\n            \u003cdiv class=\"l-footer__logos\"\u003e\n                    \u003cul class=\"nav l-icon-nav\"\u003e\n                            \u003cli\u003e\n\u003ca href=\"https://nationalhealthcouncil.org/standards-of-excellence/\" title=\"National Health Council Standards of Excellence Certification Program\" disablewebedit=\"True\" class=\"twoClick\"\u003e\u003cimg src=\"https://www.heart.org/-/media/Images/Logos/Global-Do-No-Edit/Footer/nhc_optimized.png?h=50\u0026amp;iar=0\u0026amp;mw=960\u0026amp;w=49\u0026amp;hash=A5011B2251C776E7437E64E2B0A786D7\" alt=\"National Health Council\" width=\"49\" height=\"50\" loading=\"lazy\" disablewebedit=\"True\"\u003e\u003c/a\u003e                            \u003c/li\u003e\n                            \u003cli\u003e\n\u003ca href=\"https://www.give.org/charity-reviews/national/health/american-heart-association-in-dallas-tx-173\" title=\"Better Business Bureau Accredited Charity\" disablewebedit=\"True\" class=\"twoClick\"\u003e\u003cimg src=\"https://www.heart.org/-/media/Images/Logos/Global-Do-No-Edit/Footer/bbb_100px.png?h=50\u0026amp;iar=0\u0026amp;mw=960\u0026amp;w=31\u0026amp;hash=0E762D14C3D4A88FB3F216EF91B46246\" alt=\"Better Business Bureau\" width=\"31\" height=\"50\" loading=\"lazy\" disablewebedit=\"True\"\u003e\u003c/a\u003e                            \u003c/li\u003e\n                            \u003cli\u003e\n\u003ca href=\"https://www.charitynavigator.org/index.cfm?bay=search.summary\u0026amp;orgid=3260\" title=\"Charity Navigator\" disablewebedit=\"True\" class=\"twoClick\"\u003e\u003cimg src=\"https://www.heart.org/-/media/Images/Logos/Global-Do-No-Edit/Footer/Charity-Navigator.png?h=50\u0026amp;iar=0\u0026amp;mw=960\u0026amp;w=100\u0026amp;hash=2097D847A9074176B7F64718A16325F2\" alt=\"Charity Navigator\" width=\"100\" height=\"50\" loading=\"lazy\" disablewebedit=\"True\"\u003e\u003c/a\u003e                            \u003c/li\u003e\n                            \u003cli\u003e\n\u003ca href=\"https://ssl.comodo.com/\" title=\"Comodo Secure\" disablewebedit=\"True\" class=\"twoClick\"\u003e\u003cimg src=\"https://www.heart.org/-/media/Images/Logos/Global-Do-No-Edit/Footer/ComodoSSLSecureSeal.png?h=50\u0026amp;iar=0\u0026amp;mw=960\u0026amp;w=76\u0026amp;hash=01F6E3635220B7BB54CF7531FDA5B046\" alt=\"Comodo Secure\" width=\"76\" height=\"50\" loading=\"lazy\" disablewebedit=\"True\"\u003e\u003c/a\u003e                            \u003c/li\u003e\n                    \u003c/ul\u003e\n            \u003c/div\u003e\n        \u003c/div\u003e\n    \u003c/div\u003e"
                     },
                     {
                        "name":"div",
                        "type":"",
                        "contents":"\u003cdiv class=\"l-footer__section\"\u003e\n        \u003cdiv class=\"container container-fluid\"\u003e\n            \u003cul class=\"nav l-divider-link-nav l-footer__supplemental-nav\"\u003e\n                    \u003cli\u003e\n                        \u003ca href=\"https://heart.jobs/?utm_campaign=heart.org-Footer\u0026amp;vs=2896\u0026amp;utm_medium=Other\u0026amp;utm_source=heart.org-Footer\" title=\"AHA Careers\" disablewebedit=\"True\" class=\"  \"\u003eAHA Careers\u003c/a\u003e\n                    \u003c/li\u003e\n                    \u003cli\u003e\n                        \u003ca href=\"https://www.heart.org/en/about-us/statements-and-policies/privacy-statement\" title=\"Privacy Policy\" disablewebedit=\"True\" class=\"  \"\u003ePrivacy Policy\u003c/a\u003e\n                    \u003c/li\u003e\n                    \u003cli\u003e\n                        \u003ca href=\"https://www.heart.org/en/about-us/statements-and-policies/medical-advice\" title=\"Medical Advice Disclaimer\" disablewebedit=\"True\" class=\"  \"\u003eMedical Advice Disclaimer\u003c/a\u003e\n                    \u003c/li\u003e\n                    \u003cli\u003e\n                        \u003ca href=\"https://www.heart.org/en/about-us/statements-and-policies/copyright\" title=\"Copyright Policy\" disablewebedit=\"True\" class=\"  \"\u003eCopyright Policy\u003c/a\u003e\n                    \u003c/li\u003e\n                    \u003cli\u003e\n                        \u003ca href=\"https://www.heart.org/en/about-us/statements-and-policies/accessibility-statement\" title=\"Accessibility Statement\" disablewebedit=\"True\" class=\"  \"\u003eAccessibility Statement\u003c/a\u003e\n                    \u003c/li\u003e\n                    \u003cli\u003e\n                        \u003ca href=\"https://www.heart.org/en/about-us/statements-and-policies/ethics-policy\" title=\"Ethics Policy\" disablewebedit=\"True\" class=\"  \"\u003eEthics Policy\u003c/a\u003e\n                    \u003c/li\u003e\n                    \u003cli\u003e\n                        \u003ca href=\"https://www.heart.org/en/about-us/statements-and-policies/conflict-of-interest-policy\" title=\"Conflict of Interest Policy\" disablewebedit=\"True\" class=\"  \"\u003eConflict of Interest Policy\u003c/a\u003e\n                    \u003c/li\u003e\n                    \u003cli\u003e\n                        \u003ca href=\"https://www.heart.org/en/about-us/statements-and-policies/linking-policy\" title=\"Linking Policy\" disablewebedit=\"True\" class=\"  \"\u003eLinking Policy\u003c/a\u003e\n                    \u003c/li\u003e\n                    \u003cli\u003e\n                        \u003ca href=\"https://www.heart.org/en/about-us/editorial-guidelines\" title=\"Content Editorial Guidelines\" disablewebedit=\"True\" class=\"  \"\u003eContent Editorial Guidelines\u003c/a\u003e\n                    \u003c/li\u003e\n                    \u003cli\u003e\n                        \u003ca href=\"https://www.heart.org/en/about-us/diversity-inclusion\" title=\"Diversity\" disablewebedit=\"True\" class=\"  \"\u003eDiversity\u003c/a\u003e\n                    \u003c/li\u003e\n                    \u003cli\u003e\n                        \u003ca href=\"https://www.heart.org/en/about-us/procurement-services/procurement-services-department\" title=\"Suppliers \u0026 Providers\" disablewebedit=\"True\" class=\"  \"\u003eSuppliers \u0026 Providers\u003c/a\u003e\n                    \u003c/li\u003e\n                    \u003cli\u003e\n                        \u003ca href=\"https://www.heart.org/en/about-us/statements-and-policies/state-fundraising-notices\" title=\"State Fundraising Notices\" disablewebedit=\"True\" class=\"  \"\u003eState Fundraising Notices\u003c/a\u003e\n                    \u003c/li\u003e\n            \u003c/ul\u003e\n                \u003cdiv class=\"l-footer__copyright\"\u003e\n                    \u003cp class=\"h-color--black\"\u003e\n\u0026copy;2022 American Heart Association, Inc. All rights reserved. Unauthorized use prohibited.\u003cbr\u003e\nThe American Heart Association is a qualified 501(c)(3) tax-exempt organization. \u003cbr\u003e\n*Red Dress \u0026trade; DHHS, Go Red \u0026trade; AHA ; National Wear Red Day\u0026reg; is a registered trademark.\n\u003c/p\u003e\n                \u003c/div\u003e\n        \u003c/div\u003e\n    \u003c/div\u003e"
                     },
                ]
            },

        },
        // Coveo modal
        "coveomodal": '\
            <div id="coveomodal1___BV_modal_outer_">\
                <div id="coveomodal1" role="dialog" aria-hidden="true" tabindex="-1" class="modal fade" style="display: none; padding:0;">\
                    <div class="modal-dialog modal-md">\
                        <div tabindex="-1" role="document" aria-labelledby="coveomodal1___BV_modal_header_" aria-describedby="coveomodal1___BV_modal_body_" class="modal-content">\
                            <header id="coveomodal1___BV_modal_header_" class="modal-header">\
                                <div class="modal-title"></div><button type="button" aria-label="Close" class="close" data-dismiss="modal">×</button>\
                            </header>\
                            <div id="coveomodal1___BV_modal_body_" class="modal-body">\
                                <div class="global-search-section__search-text"> Search </div>\
                                <div class="global-search-section__coveo-block">\
                                    <div>\
                                            <div class="coveo-search-section">\
                                                <div id="searchbox">\
                                                    <div class="CoveoSearchbox" data-enable-omnibox="true" data-enable-query-suggest-addon="false" data-placeholder="example: Heart Attack Symptoms"></div>\
                                                </div>\
                                            </div>\
                                    </div>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
            </div>\
        ',
        // Adding speed bump modal html
        "speedBumpHTML": '\
        <div id="speed-bump" tabindex="-1" role="dialog" class="c-speed-bump__modal text-center modal fade" style="display:none;" aria-hidden="true">\
            <div class="modal-dialog modal-md modal-dialog-centered" role="document">\
            <div  class="modal-content">\
                <header aria-label="modal-header" id="speed-bump-modal___BV_modal_header__js53bblf" class="modal-header">\
                <h2 class="sr-only">Speed Bump</h2>\
                </header>\
                <div id="speed-bump-modal___BV_modal_body__js53bblf" class="modal-body"> <button type="button" aria-label="Close" class="close" data-dismiss="modal">&times;</button>\
                <div class="c-speed-bump__media"><img src="//static.heart.org/ahaanywhere/sitecore/dist/images/ahalogo.png" alt="American Heart Association logo"></div>\
                <p>The link provided below is for convenience only, and is not an endorsement of either the linked-to entity or any product or service.</p>\
                <p><span class="c-speed-bump__link">speed bump link</span></p>\
                <a target="_blank" class="btn btn-danger btn-round" href="http://www.nationalhealthcouncil.org/resources/standards-excellence-certification-program">Proceed</a>\
                </div>\
            </div>\
            </div>\
        </div>',
        init: function () {

            var that = this;

            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            that.loadStyleSheets();
            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

            if (this.options.fetchAPI != true) {
                //Header Injection 
                if ($('header#aha-header').length > 0) {
                    $('header#aha-header').attr('aria-label', 'main-header');
                    $.each(that.dataObj.placeholders.header, function (index, element) {
                        $('header#aha-header').append(element.contents);
                    });
                    $('header#aha-header').find('ul.c-top-nav__nav li').last().remove(); // remove search because it's a vue component
                    $.each(that.dataObj.placeholders.search, function (index, element) {
                        $('header#aha-header').find('ul.c-top-nav__nav').append(element.contents); //adding static search button
                    });
                    $('header#aha-header').find('.c-site-search-modal').append(this.coveomodal);
                    // $('header#aha-header').find('ul.c-top-nav__nav li').last().prepend(that.dataObj.placeholders['/header/donate-mobile'][0].contents);
                    $.each(that.dataObj.placeholders['/header/donate-mobile'], function (index, element) {
                        $('header#aha-header').find('ul.c-top-nav__nav').prepend(element.contents);
                    });
                    $.each(that.dataObj.placeholders['/header/utility-nav'], function (index, element) {
                        $('header#aha-header').append(element.contents);
                    });
                    if (this.options.showSearch === true) {
                        this.loadCoveoFiles(this.options.coveoBundleURL, this.options.coveo2BundleURL);
                    }

                };


                //Footer Injection
                if ($('footer#aha-footer').length > 0) {
                    $.each(that.dataObj.placeholders.footer, function (index, element) {
                        //last item is the speedbump, do not load the speed bump
                        // replace image src path to static.heart.org
                        element.contents = element.contents.replace(/https:\/\/www.heart.org\/-\/media\/images\/logos\/global-do-no-edit\/header/gi, "https:\/\/static.heart.org\/ahaanywhere\/sitecore\/dist\/images").replace(/https:\/\/www.heart.org\/-\/media\/images\/logos\/global-do-no-edit\/footer/gi, "https:\/\/static.heart.org\/ahaanywhere\/sitecore\/dist\/images").replace(/https:\/\/www.heart.org\/-\/media\/feature\/navigation\/social/g, "https:\/\/static.heart.org\/ahaanywhere\/sitecore\/dist\/images").replace(/<div.*(?:^|\W)l-footer__compliance(?:$|\W)[\s\S]*?<\/div>/gm, "");
                        //will load manually since not using vue and app bundle
                        $('footer#aha-footer').append(element.contents);
                    });
                    // Footer: Replacing the h2 with divs. Throwing accessibility errors for vendors b/c h2 is out of heading sequence
                    this.replaceFooterH2();
                    //Collapse Mobile Footer
                    this.collapseFooterMobile();
                    //Speedbump
                    $('footer#aha-footer').append(this.speedBumpHTML)
                };

                //Load custom options
                that.generators();

            } else {
                // F E T C H - A P I - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                //Fetch Headless API
                var _headlessurl = this.options.headlessAPIURL;

                // 1. Fetch json    
                //API
                var apiCall = $.ajax({
                    type: 'GET',
                    url: String(_headlessurl),
                    dataType: 'json',
                    success: function (data) {
                        // A. Load content into the header
                        if ($('header#aha-header').length > 0) {
                            $.each(data.placeholders.header, function (index, element) {
                                //This is not to load coveo js and the donation modal for vendors
                                if (element.name === "script" || element.name === "aha-donation-modal") {
                                    // blank
                                } else {
                                    $('header#aha-header').append(element.contents);
                                }
                            });

                            setTimeout(function () {
                                //Replace the h5 in modal for search
                                $('h5.modal-title').replaceWith(function () {
                                    return $("<div>", {
                                        "class": this.classList,
                                        html: $(this).html()
                                    });
                                });
                                //Replace vue button component with regular html
                                $('ul.c-top-nav__nav li:last-child').find('b-btn').replaceWith(function () {
                                    return $("<button>", {
                                        "class": 'btn c-top-nav__link btn btn-link-plain',
                                        "data-toggle": 'modal',
                                        "data-target": '#coveomodal1',
                                        html: $(this).html()
                                    });
                                });

                                //Replace vue modal
                                // b-modal
                                // #coveomodal1


                                $('ul.c-top-nav__nav li:last-child').find('b-modal').replaceWith(function () {
                                    return $("<div>", {
                                        "class": 'c-site-search-modal',
                                        html: that.coveomodal
                                    });
                                });

                                //Removing <aha-mobile-nav>, .l-header__main, .l-header__utility__desktop 
                                $('.l-header__main').remove();
                                $('aha-mobile-nav').remove();
                                $('.l-header__utility__desktop').remove();

                            }, 0);
                        }
                        // B. Load content into Footer
                        if ($('footer#aha-footer').length > 0) {
                            $.each(data.placeholders.footer, function (index, element) {
                                //last item is the speedbump, do not load the speed bump
                                //will load manually since not using vue and app bundle
                                if (data.placeholders.footer.length - 1 !== index) {
                                    $('footer#aha-footer').append(element.contents);
                                }
                            });

                            // Footer: Replacing the h2 with divs. Throwing accessibility errors for vendors b/c h2 is out of heading sequence
                            $('h2.l-footer__nav-title').replaceWith(function () {
                                return $("<div>", {
                                    "class": this.classList,
                                    html: $(this).html()
                                });
                            });



                            that.collapseFooterMobile();
                            $('footer#aha-footer').append(that.speedBumpHTML);

                        }

                        that.loadCoveoFiles(that.options.coveoBundleURL, that.options.coveo2BundleURL);
                        //Load custom options
                        that.generators();

                    },
                    error: function () {
                        //Any errors
                    }
                }); //end apiCall

            } //end ifelse

        },
        generators: function () {
            //Hide location
            var options = this.options;

            //Alert - - - - - - - - - - - - - - - - - - - - - - - -
            // Cookie for alert banner 
            var docCookies = {
                getItem: function (sKey) {
                    if (!sKey) {
                        return null;
                    }
                    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
                },
                setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
                    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
                        return false;
                    }
                    var sExpires = "";
                    if (vEnd) {
                        switch (vEnd.constructor) {
                            case Number:
                                sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
                                /*
                                Note: Despite officially defined in RFC 6265, the use of `max-age` is not compatible with any
                                version of Internet Explorer, Edge and some mobile browsers. Therefore passing a number to
                                the end parameter might not work as expected. A possible solution might be to convert the the
                                relative time to an absolute time. For instance, replacing the previous line with:
                                */
                                /*
                                sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; expires=" + (new Date(vEnd * 1e3 + Date.now())).toUTCString();
                                */
                                break;
                            case String:
                                sExpires = "; expires=" + vEnd;
                                break;
                            case Date:
                                sExpires = "; expires=" + vEnd.toUTCString();
                                break;
                        }
                    }
                    document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
                    return true;
                },
                removeItem: function (sKey, sPath, sDomain) {
                    if (!this.hasItem(sKey)) {
                        return false;
                    }
                    document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
                    return true;
                },
                hasItem: function (sKey) {
                    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
                        return false;
                    }
                    return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
                },
                keys: function () {
                    var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
                    for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) {
                        aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
                    }
                    return aKeys;
                }
            };

            //Cookie name: alertCookie
            // ID from alert banner
            var alertID = $('.c-alert').parent().attr('notification-id');

            // Cookies ======================================================
            // ON LOAD ======================================================
            if (docCookies.getItem('alertCookie') !== null) {
                var cval = docCookies.getItem('alertCookie');
                if (cval !== alertID) {
                    $('.c-alert').addClass('show');
                }
            } else {
                $('.c-alert').addClass('show');
            }
            $('.c-alert__close:visible').on('click', function (e) {
                $('.c-alert').removeClass('show');
                docCookies.setItem('alertCookie', alertID);
            });

            //CoBrand - - - - - - - - - - - - - - - - - - - - - - -
            if (options.cobrand !== undefined) {
                var cobrandEls = options.cobrand;
                var cobrandHTML = '\
                <a class="c-top-nav__cobrand" href= "' + cobrandEls.link + '" title="' + cobrandEls.linkalttext + '" class="c-top-nav__cobrand">' + cobrandEls.name + '</a>\
                ';

                setTimeout(function () {
                    var logo = document.querySelector('.c-top-nav__logo');
                    logo.insertAdjacentHTML('afterend', cobrandHTML);
                }, 0);

                setTimeout(function () {
                    var cobrandNode = document.querySelector('.c-top-nav__cobrand');
                    cobrandNode.classList.add('fade', 'show');
                }, 500);

            }
            //Search - - - - - - - - - - - - - - - - - - - - - - -
            if (options.showSearch === false) {
                $('ul.c-top-nav__nav li:last-child').remove();

            }
            //DONATE LINKS - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            if (options.donateLinks) {
                this.createDonateLinks(options.donateLinks);
            }
            //FOOTER - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            if (options.footerContactInfo) {
                //Relace with new contact info
                var contactEl = $('#contact-collapse-footer p'),
                    address = options.footerContactInfo.address,
                    numbers = options.footerContactInfo.numbers;
                // Clear data
                contactEl.empty();
                for (var i = 0; i < address.length; i++) {
                    //remove html tags from string
                    contactEl.append(address[i].replace(/(&nbsp;|<([^>]+)>)/ig, ""));
                    contactEl.append("<br>");
                }
                contactEl.append("<br> Customer Service <br>");
                for (var j = 0; j < numbers.length; j++) {
                    //remove html tags from string
                    contactEl.append(numbers[j].replace(/(&nbsp;|<([^>]+)>)/ig, "")).append("<br>");
                }
            }
            //FOOTER SUPPORT BAR - - - - - - - - - - - - - - - - - - - - - - - - - - -
            if (options.showFooterSupportBar == true) {
                this.createFooterSupportBar();
            }

            if (typeof options.logoType !== 'undefined') {
                var _img, _title, _link;
                switch (options.logoType.type) {
                    case 'asa':
                    case 'ASA':
                        _img = '//static.heart.org/ahaanywhere/sitecore/dist/images/asa_full.svg';
                        _title = 'Return to American Stroke Association';
                        _link = 'https://www.strokeassociation.org/';
                        break;
                    case 'custom':
                    case 'Custom':
                        _img = options.logoType.imgPath;
                        _title = options.logoType.title;
                        _link = options.logoType.link;
                        break;
                }
                var el = $('.c-top-nav__logo img');
                el.attr('src', _img);
                el.attr('title', _title);
                $('a.c-top-nav__logo').attr('href', _link);


            }

            //SPEED BUMP MODAL FOCUS TRAPPING - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            var speedBumpTrapFocus = function () {
                //Trapping focus for accessibility in speed bump modal
                var el = document.getElementById('speed-bump');
                var focusableEls = el.querySelectorAll('a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select');
                var firstFocusableEl = focusableEls[0],
                    lastFocusableEl = focusableEls[focusableEls.length - 1];

                var KEYCODE_TAB = 9;

                el.addEventListener('keydown', function (e) {

                    var isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);

                    if (!isTabPressed) {
                        return;
                    }

                    if (e.shiftKey) /* shift + tab */ {
                        if (document.activeElement === firstFocusableEl) {
                            lastFocusableEl.focus();
                            e.preventDefault();
                        }
                    } else /* tab */ {
                        if (document.activeElement === lastFocusableEl) {
                            firstFocusableEl.focus();
                            e.preventDefault();
                        }
                    }
                });
            }
            //end speedBumpTrapFocus

            $('.twoClick').on('click', function (evt) {
                evt.preventDefault();
                var speedBumpLink = $(evt.currentTarget).attr('href');
                $('.c-speed-bump__link').text(speedBumpLink);
                $('#speed-bump a').attr('href', speedBumpLink);
                var prevActiveElement = document.activeElement;
                $('#speed-bump').modal('show');
                $('#speed-bump').on('hidden.bs.modal', function (e) {
                    $(prevActiveElement).focus();
                });
                speedBumpTrapFocus();
            });
            //END SPEED BUMP MODAL FOCUS TRAPPING - - - - - - - - - - - - - - - - - - - - - - - - - - 


        },
        createFooterSupportBar: function () {
            var parent = document.getElementById("aha-footer"),
                supportBar = document.createElement("div"),
                content = this.options.supportBarContent, //object, {title,info}
                cta = this.options.supportBarCallToActions; //array of object [{title,link}]

            var spHTML, ctaHTML;
            spHTML = '<div id="aha-footer-support-bar" class="c-inquiries-support">\
            <div class="container container-fluid">\
              <div class="row justify-content-md-center">\
                <div class="c-inquiries-support__container col-md-9">\
                  <div class="c-inquiries-support__content">\
                    <p>' + content.title + ' <br />' + content.info + '</p>\
                  </div>\
                  <div class="c-inquiries-support__actions">';
            for (var i = 0; i < cta.length; i++) {
                ctaHTML = '<div class="c-inquiries-support__cta">\
                      <a class="c-cta c-cta--arrow h-theme--black" href="' + cta[i].link + '">' + cta[i].title + '</a>\
                    </div>\
                    ';
                spHTML += ctaHTML;
            }
            spHTML += '</div>\
                </div>\
              </div>\
            </div>';
            //supportBar.setAttribute('id', 'aha-footer-support-bar');
            supportBar.innerHTML = spHTML;
            parent.insertBefore(supportBar, parent.firstChild);
        },
        hideHeader: function () {
            $('header#aha-header').css({
                'visibility': 'hidden'
            });
        },
        showHeader: function () {
            $('header#aha-header').css({
                'visibility': 'visible'
            });
        },
        loadStyleSheets: function () {
            var _css = this.options.bundleCSS,
                i = 0,
                link = document.createElement('link'),
                head = document.getElementsByTagName('head')[0],
                tmp;
            link.rel = 'stylesheet';

            for (; i < _css.length; i++) {
                tmp = link.cloneNode(true);
                tmp.href = _css[i];
                head.insertBefore(tmp, head.firstChild);
            }
        },
        loadCoveoFiles: function (file1, file2) {
            $.ajax({
                url: file1,
                dataType: "script",
                success: function () {
                    $.ajax({
                        url: file2,
                        dataType: "script",
                        // success: function () {
                        //     $.ajax({
                        //         url: file3,
                        //         dataType: "script"
                        //     });
                        // }
                    });
                }
            });
        },
        collapseFooterMobile: function () {
            //Collapse Mobile
            $('.l-footer__nav button').each(function () {
                var el = $(this);
                var id = $(el).attr('v-b-toggle').replace(/'/g, ''); //remove single quote for the id
                $(el).attr({
                    "data-toggle": "collapse",
                    "data-target": '#' + id,
                    "aria-expanded": "false",
                    "aria-controls": id
                });
                //collapse panel
                $(el).next().replaceWith(function () {
                    return $("<div>", {
                        "class": "collapse",
                        html: $(this).html(),
                        "id": this.id
                    });
                });


            });
            //End collapse
        },
        replaceFooterH2: function () {
            $('h2.l-footer__nav-title').replaceWith(function () {
                return $("<div>", {
                    "class": this.classList,
                    html: $(this).html()
                });
            });
        },
        createDonateLinks: function (arr) {
            //Get the location of the DONATE link in the top nav list
            // FIND IF DONATE LINK EXIST FIRST AND RETURN THE INDEX NUMBER
            var donateIndex;
            $('ul.c-top-nav__nav li.c-top-nav__item').each(function (index) {
                if ($(this).find('span').text().trim() == "Donate") {
                    donateIndex = index;
                }
            });

            // - - - - - - - -  - - - - - - - - - - - - - -
            if (donateIndex) {
                var donateEl = $('ul.c-top-nav__nav li.c-top-nav__item').eq(donateIndex);
                var dropdownList = $(donateEl).find('ul.c-nav-dropdown__list');
                dropdownList.empty();
                var _arr = arr;
                var length = _arr.length;
                //Loop
                var link, name, html;
                for (var i = 0; i < length; i++) {
                    var obj = _arr[i];
                    link = obj.link;
                    name = obj.name;

                    html = '\
                    <li class="c-nav-dropdown__item">\
                    <a href="' + link + '" disablewebedit="True" role="menuitem" class="c-nav-dropdown__link c-nav-dropdown__header">\
                    ' + name + '\
                    </a>\
                    </li>\
                    ';
                    dropdownList.append(html);
                } //end for loop
            } //end if
        }
    };

    $.fn[pluginName] = function (options) {
        var args = arguments;

        if (options === undefined || typeof options === 'object') {
            // Creates a new plugin instance, for each selected element, and
            // stores a reference withint the element's data
            return this.each(function () {
                if (!$.data(this, 'plugin_' + pluginName)) {
                    $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
                }
            });
        } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
            // Call a public pluguin method (not starting with an underscore) for each 
            // selected element.
            if (Array.prototype.slice.call(args, 1).length == 0 && $.inArray(options, $.fn[pluginName].getters) != -1) {
                // If the user does not pass any arguments and the method allows to
                // work as a getter then break the chainability so we can return a value
                // instead the element reference.
                var instance = $.data(this[0], 'plugin_' + pluginName);
                return instance[options].apply(instance, Array.prototype.slice.call(args, 1));
            } else {
                // Invoke the speficied method on each selected element
                return this.each(function () {
                    var instance = $.data(this, 'plugin_' + pluginName);
                    if (instance instanceof Plugin && typeof instance[options] === 'function') {
                        instance[options].apply(instance, Array.prototype.slice.call(args, 1));
                    }
                });
            }
        }
    };

    /**
     * Default options
     */
    $.fn[pluginName].defaults = {
        fetchAPI: false, // Set to false if don't want to fetch API
        logoType: "aha" //aha or asa
        ,
        headlessAPIURL: "https://www.heart.org/x-sitecore-service/layoutservice/index?route=/" //PROD
        ,
        coveoBundleURL: "https://static.cloud.coveo.com/searchui/v2.4382/js/CoveoJsSearch.Lazy.min.js",
        coveo2BundleURL: "//static.heart.org/ahaanywhere/sitecore/dist/bundles/v3/CoveoInit-non-api.js",
        bundleCSS: ['//static.heart.org/ahaanywhere/sitecore/dist/css/aha-sitecore-headerfooter.css'],
        // bundleCSS: ['dist/css/aha-sitecore-headerfooter.css'],
        showSearch: true,
        showFooterSupportBar: false,
        supportBarContent: {
            'title': 'CPR-Related Inquiries:',
            'info': '1-888-AHA-4CPR Or 1-877-242-4277'
        },
        supportBarCallToActions: [{
            'title': 'International Inquiries',
            'link': '#'
        }, {
            'title': 'Global Web Support',
            'link': '#'
        }]
    };

})(jQuery, window, document);