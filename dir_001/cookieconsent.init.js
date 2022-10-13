window.addEventListener("load", function () {
    window.cookieconsent.initialise({
        "palette": {
            "popup": {
                "background": "#000000"
            },
            "button": {
                "background": "#c5001d"
            }
        },
        "content": {
            "showLink": false,
            "link": null,
            "message": document.getElementById('cookie-consent-msg').innerHTML,
            "dismiss": 'OK'
        },
        "elements": {
            "messagelink": '<span id="cookieconsent:desc" class="cc-message">{{message}}</span>',
            //"dismiss": '<button aria-label="dismiss cookie message" tabindex="0" class="cc-btn cc-dismiss">{{dismiss}}</button>',
        }
    })
});