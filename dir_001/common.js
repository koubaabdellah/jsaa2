// JavaScript Document

function oListing(eList,options) {
	var parent = this;
	// local variables
	this.modeUL	= (options.modeUL==null)?false:options.modeUL;
	this.eList 	= eList;
	this.ePage	= (options.page==null)?"#dPage":options.page;
	this.ePages	= (options.pages==null)?"#dPages":options.pages;
	this.eRecs	= (options.recs==null)?"#dRecords":options.recs;
	this.eSearch= (options.search==null)?"#iSearch":options.search;
	this.eNext	= (options.next==null)?"#dNext":options.next;
	this.ePrev	= (options.prev==null)?"#dPrev":options.prev;
	
	this.url	= (options.url==null)?"":options.url;
	this.listHolder	= "";
	this.vars		= Array();
	this.json	= (options.json==null)?true:options.json;
	this.totalRecords	= 0;
	this.totalPages		= 0;
	this.form	= (options.form==null)?false:options.form;
	
	this.init	= init;
	function init() {
	this.listHolder = (this.modeUL)?this.eList:this.eList+" tbody";
	this.vars["sort"] 	= "id";
	this.vars["order"] 	= "DESC";
	this.vars["page"] 	= "1";
	this.convertNav();
	this.convertTH();
	this.convertSearch();
	}
	
	this.convertSearch = convertSearch;
	function convertSearch() {
	$(this.eSearch).bind("keyup",function(){parent.vars["search"]=$(this).val(); parent.load();});
	}
	
	this.convertNav = convertNav;

	function convertNav() {
	p = $(this.ePrev); n = $(this.eNext);
	p.bind("click",function(){parent.prev()});
	n.bind("click",function(){parent.next()});
	}
	
	this.prev = prev;

	function prev() {
	current = this.vars["page"];
		if(current==1) return false;
		else {
		this.vars["page"] = --current;
		this.load();
		}
	}
	
	this.next = next;
	function next() {
	current = this.vars["page"];
		if(current>=this.totalPages) return false;
		else {		
		this.vars["page"] = (current*1)+1;
		this.load();
		}
	}
	
	this.convertTH = convertTH;
	function convertTH() {
	parent = this;
	$(this.eList+" th").each( function() { 
		th = $(this);
		axis = th.attr("axis");
			if(axis!="") {
			th.bind("click",function(){parent.sort($(this).attr("axis"));}).css({cursor:"pointer"});
			if(parent.vars["sort"]==axis) th.addClass("sorted");
			}
		});
	}
	
	this.load = load;
	function load() {
	message = new Message;
	if(! message.isAJAX() ) message.showAJAX("Loading...");
		sData = this.loadData();
		obj = $.ajax({
			type: "POST",
			url: this.url+"&",
			data: sData,
			async: false
		});

		this.clear();
		table = $(this.listHolder);

		if(this.json) {
		json = $.parseJSON(obj.responseText);
		html = json["html"];
		this.totalPages = json["totalPages"];
		this.totalRecords = json["totalRecords"];
		this.page = (this.totalPages>0)?json["page"]:0;
		$(this.ePages).html(this.totalPages);
		$(this.eRecs).html(this.totalRecords);
		$(this.ePage).html(this.page);
			if(json["totalRecords"]==0) {
			table.append("<tr><td colspan='99'></td></tr>");
			table = $(this.listHolder+" tr td");
			}
		if(this.page>1) $(this.ePrev).removeClass("disabled"); else $(this.ePrev).addClass("disabled");
		if(this.page<this.totalPages) $(this.eNext).removeClass("disabled"); else $(this.eNext).addClass("disabled");
		} else {
		html = obj.responseText;
		$(this.ePage).html(this.vars["page"]);
		}
		table.append(html);
		message.showAJAX("Complete",500);
		$(this.eList+" a[rel=boxy]").boxy();
		$(this.eList+" a[rel=iboxy]").iboxy();
		this.alternateRow();
	}

	this.loadData = loadData;
	function loadData() {
	vars = this.vars;
	data = (this.json)?"json=true&":"";
		for(var i in vars) 
		data+=i+"="+vars[i]+"&";
	return data;
	}

	this.clear = clear;
	function clear() {
		$(this.listHolder).empty();
	}
	
	this.sort = sort;
	function sort(field) {
	message.showAJAX("Sorting...");
	this.vars["page"] = 1;
	if(this.vars["sort"]==field) this.vars["order"]=(this.vars["order"]=="DESC")?"ASC":"DESC";
	else this.vars["sort"]=field;
	$(this.eList+" th").removeClass("sorted").each( function(){
		th = $(this); if(th.attr("axis")==field) th.addClass("sorted");
		});
	this.load();
	}
	
	this.set = set;
	function set(variable,value) {
	this.vars[variable] = value;
	return true;
	}
	
	this.act = act;
	function act(action) {
	if(!this.form) return false;
	form = $(this.form);
	url = form.attr("action");
	data = form.serialize()+"&a="+action;
	b = $.ajax({
	  type: 'POST',
	  url: url,
	  data: data,
	  async: false
	}).responseText;
	b = $.parseJSON(b);
	message.show(b.message,b.type);
	this.load();
	return false;
	}
	
	this.alternateRow = alternateRow;
	function alternateRow() {
	$(this.eList+" tr").bind("mouseover",function(){ $(this).addClass("trhover");}).bind("mouseout",function(){$(this).removeClass("trhover")});
	}

	// initialize
	this.init();
}

function Message() {
this.ajax = "#fAJAX";
this.message = "#fMessage";

	this.showAJAX = showAJAX;
	function showAJAX(msg) {
	ajax = $(this.ajax);
	out = (arguments.length>1)?arguments[1]:0;
	ajax.html(msg).fadeIn(500);
	if(out>0) setTimeout(this.hideAJAX,out);
	}
	
	this.hideAJAX = hideAJAX;
	function hideAJAX() {
	ajax = (this.ajax);
	ajax.hide(); ajax.html("");
	}
	
	this.isAJAX = isAJAX;
	function isAJAX() {
	ajax = $(this.ajax);
	return(ajax.html()!="")?true:false;
	}

	this.show = show;
	function show(msg,type) {
	message = $(this.message);
	message.html(msg).slideDown().attr("class","message "+type);
	}
	
	this.hide = hide;
	function hide() {
	message = $(this.message);
	message.html("").hide().attr("class","message");
	}
}
var message;
message = new Message;

$(document).ready(function(){
$("#ajax").bind("click",function(){$(this).fadeOut(300);});						   
});

function number_format(nStr)
{
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}
$("document").ready(function(){
    $(".contentDescription a").attr("target","_blank");
})

//FB SHARE

var fphp = fphp || {};

fphp.PATH_ROOT = '/';

/**
 * Facebook Handler
 */
fphp.fb = fphp.fb || {};

(function(f){

    /**
     * Flag for whether or not the SDK was loaded
     */
    f.sdkLoaded = false;

    /**
     * Loads the Facebook JavaScript SDK
     */
    f.loadSdk = function() {

        // Load the SDK Asynchronously
        (function(d){
            var js, id = 'facebook-jssdk';
            if (d.getElementById(id))
                {return;}
            js = d.createElement('script');
            js.id = id;
            js.async = false;
            js.src = "//connect.facebook.net/en_US/all.js";
            d.getElementsByTagName('head').item(0).appendChild(js);
        })(document);

    }

    f.conduct = function( task ) {

        if ( !task )
            throw('fphp.fb.conduct expects a string task name as argument!');

        // Load SDK if not loaded
        if ( !fphp.fb.sdkLoaded ) {
            fphp.fb.loadSdk();
            var context = this;
            setTimeout(function() {
                fphp.fb.conduct.call(context, task);
            }, 500);
            return;
        }
        // Conduct the task!
        else {
            try {
                fphp.fb[task].call(this);
            } catch(e) {
                throw ('fphp.fb.conduct could not recognize task \"' + task + '\"');
            }
        }

    }

    /**
     * Handles Facebook Auth with our site's auth
     */
    f.handleLogin = function(user) {
        $.ajax({
            url : fphp.PATH_ROOT + 'user/facebook/verify-account?fbid=' + user.id + '&_lang=' + fphp.lang,
            complete : function(xhr) {
                try {
                    eval(xhr.responseText);
                } catch(e) {
                    alert('Server returned a bad response! ' + xhr.responseText);
                }
            }
        });
    }

    /**
     * Handles regisration for a given Facebook user
     * @param u The Facebook User object
     */
    f.handleRegistration = function(u) {

        if ( 'object' != typeof(u) || !u.id )
            throw ('fphp.fb.handleRegistration expects a Facebook User object as argument');

        var loc = fphp.PATH_ROOT + 'user/register?fbid=' + u.id + '&full_name=' + u.name + '&username=' + u.email;
        if ( u.mobile )
            loc += '&mobile=' + u.mobile;
        window.location = loc;
        return;

    }

    /**
     * Initializes Facebook Login
     */
    f.initRegistration = function() {
        FB.login(
            function(r) {
                // Denied
                if ( 'connected' != r.status ) {
                    alert('You must login to your Facebook Account and allow us permissions to access your Facebook data if you wish to login with your Facebook Account!');
                    return;
                }
                FB.api('/me', fphp.fb.handleLogin);
            },
            {scope : 'email'}
        );
        return !1;
    }

    f.share = function( args ) {
        
        args = $.extend({
            method: 'feed',
            link: fphp.PATH_ROOT,
            name: window.title,
            description: "Some description."
        }, args);
        
        // Convert relative URL to absolute URL
        if ( 0 === args.link.indexOf('/') ) {
            args.link =
                window.location.protocol + '//' 
                + window.location.hostname
                + args.link;
        }
        
        console.log(args.link);
        
        FB.ui(args, function(r) {});
        
    }

})(fphp.fb);

window.fbAsyncInit = function() {
    FB.init({
        appId      : '144725338999020', // App ID
        channelUrl : '//' + window.location.hostname + fphp.PATH_ROOT + 'static/facebook/channel.html', // Channel File
        status     : true, // check login status
        cookie     : true, // enable cookies to allow the server to access the session
        xfbml      : true  // parse XFBML
    });

    // Mark SDK Loaded
    try {
        fphp.fb.sdkLoaded = true;
    } catch(e) {}
}
fphp.fb.loadSdk();

fphp.user = window.fphp.user || {};

/**
 * Orchestrate user login
 */
fphp.user.doLogin = function() {
    fphp.user.doTask('user/login');
}

/**
 * Orchestrate user login
 */
fphp.user.doRegistration = function() {
    fphp.user.doTask('user/register');
}

fphp.user.doTask = function( task ) {
    if ( !window.Boxy )
        alert('No Boxy?');
    window._boxyInstance = new Boxy('<iframe src="' + fphp.PATH_ROOT + task + '" width="700" height="400"></iframe>', {
        title : '&nbsp;',
        modal : true,
        afterHide : function() {
            fphp.user.init();
            $('.yt-video').css('visibility', 'visible');
        }
    });
    // Hide youtube videos
    setTimeout(function() {
        $('.yt-video').css('visibility', 'hidden');
    }, 500);
}

/**
 * Updates client-side User data and login status
 */
fphp.user.init = function() {
    $.ajax({
        url: fphp.PATH_ROOT + 'user/get-status',
        complete: function(xhr){
            try {
                var response = eval('(' + xhr.responseText + ');');
                for ( var i in response ) {
                    fphp.user[i] = response[i];
                }
            } catch(e) {}
        }
    });
}
//fphp.user.init();

/**
 * Thumbnail list-index height fixer
 */
fphp.equalizeThumbHeight = function( id, colCount ) {
    if ('undefined' == typeof(colCount))
        return false;
    var oL = document.getElementById(id);
    if (null == oL)
        throw new Exception('List does not Exist! Nothing done!');
    var $li = $(oL).find('li');    
    for (var i = 0; i < $li.length; i += colCount) {
        var rowHeight = 0;
        for (var j=i; j < i+colCount; j++) {
            try {
                rowHeight = Math.max($($li[j]).height(), rowHeight );
            } catch(e) {}
        }
        for (var j=i; j < i+colCount; j++) {
            try {
                $($li[j]).height(rowHeight);
            } catch(e) {}
        }
    }
    return true;
}