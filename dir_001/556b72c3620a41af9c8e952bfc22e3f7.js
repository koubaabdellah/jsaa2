(function (kv) {
    /** The following code may be altered **/

    /* Define the data required to embed the content */
    var embed = {
        id: "KnowledgeVisionEmbeddedContent556b72c3620a41af9c8e952bfc22e3f7",
        type: "webpage",
        useHTTPS: true,

        title: "AT&amp;T Inc.",
        profile: "production",
        isUnpublished: false,

        params: {
            url: "https://content.knowledgevision.com/player/shared/assets/html/404.html",
            width: "100%",
            height: "100%",
            preloaderBackground: "#FFFFFF",
            preloaderImageUrl: "https://content.knowledgevision.com/preset/b8bd860b-92e7-4e82-92b2-3578c8ecde7a/preloader/preloader.gif?Expires=1665701812&Signature=ejZ207HPGcKnKNrjg2lVek7PrjXcNlJtTII-k24xuDnsCyEij45HW9-einaIqRTh6PS2zksjsoMcyyw6H9nVxedYinIxbnenne8gSQT5gVDQ5I1wt0wBCG3B4GLSp2l-VnbX1pBlfDFL1vXf6oZRlKp91wR7InuRaBHA28eywhU_&Key-Pair-Id=APKAIYS7FWXO6EGL24MQ"
        }
    };

    /** The following code should not be altered **/

    /* Create the "embeds" array if it doesn't exist */
    kv.embeds = kv.embeds || [];

    /* Add the embed for this presentation to the array */
    kv.embeds.push(embed);

    /* Inserts a new script in the DOM above the first script found */
    var insertScript = function (src, async) {
        var el = document.createElement("script");
        el.async = async;
        el.src = src;
        el.type = "text/javascript";

        var scripts = document.getElementsByTagName("script");

        if (async) {
            scripts[0].parentNode.insertBefore(el, scripts[0]);
        } else {
            document.write(unescape("%3Cscript src='" + src + "' type='text/javascript'%3E%3C/script%3E"));
        }
    };

    var shouldCheckEmbeds = function () {
        if (kv.checkEmbeds != null) {
            kv.checkEmbeds();
        }
    }

    /* Inject the Loader script, only if it has not been loaded already */
    if (kv.loaded != true) {
        insertScript("https://content.knowledgevision.com/player/shared/version/1/0/loader.js", true);
        kv.loaded = true;
        shouldCheckEmbeds();
    } else {
        kv.updateSessionInfo(shouldCheckEmbeds);
    }
})(window.knowledgevisionLoader = window.knowledgevisionLoader || {});
