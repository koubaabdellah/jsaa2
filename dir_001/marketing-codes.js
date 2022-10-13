// Valid Marketing Codes
var valid_marketing_codes = {
    "_mc": "_mc",
    "elq": "elq",
    "elqCampaignId": "elqCampaignId",
    "elqaid": "elqaid",
    "elqat": "elqat",
    "elqTrackId": "elqTrackId",
    "cid": "cid",
    "itc": "itc",
    "partnerref": "partnerref",
    "sourcecode": "sourcecode",
    "location": "location",
    "ppc":"ppc",
    "kw":"kw"
};

// Function call to save marketing codes to cookies
function saveMC() {
    var sb_params = { }; // Holds any parameters passed in 
    var codes_used = { }; // Holds valid codes used

    // Process the domain name to get just the root domain; used to set cookies for domain
    var hostname_parts = location.hostname.split('.');
    var domainname = hostname_parts.slice(-2).join('.');
    var www_hostname = "www." + domainname;
    //console.log("hosname="+location.hostname);
    //console.log("domainname="+domainname);
    //console.log("www_hosname="+www_hostname);
    
    // Getting (any) parameters
    var query_string = location.search.slice(1).split("&");
    
    // Only do stuff if there are parameters to process
    if (query_string.length > 0) {
        for (var i = 0; i < query_string.length; i++) {
            temp = query_string[i].split("=");
            if (temp[0]) {
                if (temp.length < 2) {
                    // This is so that there's always a valid value for each key, rather than a NULL
                    temp.push(""); 
                }
                var key = decodeURIComponent(temp[0]);
                var value = decodeURIComponent(temp[1]);
                value = value.replace(/[^-a-zA-Z0-9_]/g,''); // Do some scrubbing
                sb_params[key] = value;
    
                // While processing, check to see that the marketing code seen is valid;
                // If so, set a cookie
                if (key in valid_marketing_codes) {
                    // Remove potentially conflicting cookies from the default domain 
                    $.removeCookie(key);
                    $.removeCookie(key, { path: '/'});
                    $.removeCookie(key, { domain: www_hostname});
                    $.removeCookie(key, { domain: www_hostname, path: '/'});
                    // Set the cookie at the root domain (.blackhat.com), root level (/), for 183 days
                    $.cookie(key, value, { path: '/', domain: domainname, expires: 183 });
                }
            }
        }
    }
} // saveMC()

/*
 Call saveMC() function. This can be moved to another file as long as 
 this .js file comes before the call (of course).
*/
saveMC();

/* Generate a registration link */
function generateRegLink(reg_url) {
    var return_url = reg_url;
    var url_parameters = "?";
    var all_marketing_codes = Object.keys(valid_marketing_codes)
    for (var i = 0; i < all_marketing_codes.length; i++) {
        if (typeof $.cookie(all_marketing_codes[i]) != "undefined") {
            url_parameters += all_marketing_codes[i] + "=" + $.cookie(all_marketing_codes[i]) + "&";
        }
    }        
    self.location.href=return_url + url_parameters;
    return false;
}
