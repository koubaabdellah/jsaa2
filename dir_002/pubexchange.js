/**
 * Code provided by PubExchange and modified by POPSUGAR to make the module_name a data-item
 */
(function (w, d, s, id) {
    var pub_code = document.body.getAttribute('data-sugar-pubexchange-name');
    
    w.PUBX = w.PUBX || {pub: pub_code, discover: true, lazy: true};
    
    var js, pjs = d.getElementsByTagName(s)[0];
    
    if (d.getElementById(id))
        return;
    
    js = d.createElement(s);
    js.id = id;
    js.async = true;
    js.src = "//main.pubexchange.com/loader.min.js";
    
    pjs.parentNode.insertBefore(js, pjs);
    
}(window, document, "script", "pubexchange-jssdk"));

