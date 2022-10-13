/*! 6/1/2022, 2:19:25 PM -  */
/*! URI.js v1.13.2 http://medialize.github.io/URI.js/ */
/* build contains: URI.js */
(function(q,w){"object"===typeof exports?module.exports=w(require("./punycode"),require("./IPv6"),require("./SecondLevelDomains")):"function"===typeof define&&define.amd?define('framework/URI',["./punycode","./IPv6","./SecondLevelDomains"],w):q.URI=w(q.punycode,q.IPv6,q.SecondLevelDomains,q)})(this,function(q,w,v,p){function e(a,b){if(!(this instanceof e))return new e(a,b);void 0===a&&(a="undefined"!==typeof location?location.href+"":"");this.href(a);return void 0!==b?this.absoluteTo(b):this}function s(a){return a.replace(/([.*+?^=!:${}()|[\]\/\\])/g,
"\\$1")}function y(a){return void 0===a?"Undefined":String(Object.prototype.toString.call(a)).slice(8,-1)}function l(a){return"Array"===y(a)}function x(a,b){var c,e;if(l(b)){c=0;for(e=b.length;c<e;c++)if(!x(a,b[c]))return!1;return!0}var f=y(b);c=0;for(e=a.length;c<e;c++)if("RegExp"===f){if("string"===typeof a[c]&&a[c].match(b))return!0}else if(a[c]===b)return!0;return!1}function A(a,b){if(!l(a)||!l(b)||a.length!==b.length)return!1;a.sort();b.sort();for(var c=0,e=a.length;c<e;c++)if(a[c]!==b[c])return!1;
return!0}function B(a){return escape(a)}function z(a){return encodeURIComponent(a).replace(/[!'()*]/g,B).replace(/\*/g,"%2A")}var C=p&&p.URI;e.version="1.13.2";var d=e.prototype,t=Object.prototype.hasOwnProperty;e._parts=function(){return{protocol:null,username:null,password:null,hostname:null,urn:null,port:null,path:null,query:null,fragment:null,duplicateQueryParameters:e.duplicateQueryParameters,escapeQuerySpace:e.escapeQuerySpace}};e.duplicateQueryParameters=!1;e.escapeQuerySpace=!0;e.protocol_expression=
/^[a-z][a-z0-9.+-]*$/i;e.idn_expression=/[^a-z0-9\.-]/i;e.punycode_expression=/(xn--)/i;e.ip4_expression=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;e.ip6_expression=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
e.find_uri_expression=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/ig;e.findUri={start:/\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,end:/[\s\r\n]|$/,trim:/[`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u201e\u2018\u2019]+$/};e.defaultPorts={http:"80",https:"443",ftp:"21",gopher:"70",ws:"80",wss:"443"};e.invalid_hostname_characters=
/[^a-zA-Z0-9\.-]/;e.domAttributes={a:"href",blockquote:"cite",link:"href",base:"href",script:"src",form:"action",img:"src",area:"href",iframe:"src",embed:"src",source:"src",track:"src",input:"src"};e.getDomAttribute=function(a){if(a&&a.nodeName){var b=a.nodeName.toLowerCase();return"input"===b&&"image"!==a.type?void 0:e.domAttributes[b]}};e.encode=z;e.decode=decodeURIComponent;e.iso8859=function(){e.encode=escape;e.decode=unescape};e.unicode=function(){e.encode=z;e.decode=decodeURIComponent};e.characters=
{pathname:{encode:{expression:/%(24|26|2B|2C|3B|3D|3A|40)/ig,map:{"%24":"$","%26":"&","%2B":"+","%2C":",","%3B":";","%3D":"=","%3A":":","%40":"@"}},decode:{expression:/[\/\?#]/g,map:{"/":"%2F","?":"%3F","#":"%23"}}},reserved:{encode:{expression:/%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig,map:{"%3A":":","%2F":"/","%3F":"?","%23":"#","%5B":"[","%5D":"]","%40":"@","%21":"!","%24":"$","%26":"&","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"="}}}};e.encodeQuery=
function(a,b){var c=e.encode(a+"");void 0===b&&(b=e.escapeQuerySpace);return b?c.replace(/%20/g,"+"):c};e.decodeQuery=function(a,b){a+="";void 0===b&&(b=e.escapeQuerySpace);try{return e.decode(b?a.replace(/\+/g,"%20"):a)}catch(c){return a}};e.recodePath=function(a){a=(a+"").split("/");for(var b=0,c=a.length;b<c;b++)a[b]=e.encodePathSegment(e.decode(a[b]));return a.join("/")};e.decodePath=function(a){a=(a+"").split("/");for(var b=0,c=a.length;b<c;b++)a[b]=e.decodePathSegment(a[b]);return a.join("/")};
var r={encode:"encode",decode:"decode"},m,u=function(a,b){return function(c){return e[b](c+"").replace(e.characters[a][b].expression,function(c){return e.characters[a][b].map[c]})}};for(m in r)e[m+"PathSegment"]=u("pathname",r[m]);e.encodeReserved=u("reserved","encode");e.parse=function(a,b){var c;b||(b={});c=a.indexOf("#");-1<c&&(b.fragment=a.substring(c+1)||null,a=a.substring(0,c));c=a.indexOf("?");-1<c&&(b.query=a.substring(c+1)||null,a=a.substring(0,c));"//"===a.substring(0,2)?(b.protocol=null,
a=a.substring(2),a=e.parseAuthority(a,b)):(c=a.indexOf(":"),-1<c&&(b.protocol=a.substring(0,c)||null,b.protocol&&!b.protocol.match(e.protocol_expression)?b.protocol=void 0:"file"===b.protocol?a=a.substring(c+3):"//"===a.substring(c+1,c+3)?(a=a.substring(c+3),a=e.parseAuthority(a,b)):(a=a.substring(c+1),b.urn=!0)));b.path=a;return b};e.parseHost=function(a,b){var c=a.indexOf("/"),e;-1===c&&(c=a.length);"["===a.charAt(0)?(e=a.indexOf("]"),b.hostname=a.substring(1,e)||null,b.port=a.substring(e+2,c)||
null,"/"===b.port&&(b.port=null)):a.indexOf(":")!==a.lastIndexOf(":")?(b.hostname=a.substring(0,c)||null,b.port=null):(e=a.substring(0,c).split(":"),b.hostname=e[0]||null,b.port=e[1]||null);b.hostname&&"/"!==a.substring(c).charAt(0)&&(c++,a="/"+a);return a.substring(c)||"/"};e.parseAuthority=function(a,b){a=e.parseUserinfo(a,b);return e.parseHost(a,b)};e.parseUserinfo=function(a,b){var c=a.indexOf("/"),g=-1<c?a.lastIndexOf("@",c):a.indexOf("@");-1<g&&(-1===c||g<c)?(c=a.substring(0,g).split(":"),b.username=
c[0]?e.decode(c[0]):null,c.shift(),b.password=c[0]?e.decode(c.join(":")):null,a=a.substring(g+1)):(b.username=null,b.password=null);return a};e.parseQuery=function(a,b){if(!a)return{};a=a.replace(/&+/g,"&").replace(/^\?*&*|&+$/g,"");if(!a)return{};for(var c={},g=a.split("&"),f=g.length,d,h,n=0;n<f;n++)d=g[n].split("="),h=e.decodeQuery(d.shift(),b),d=d.length?e.decodeQuery(d.join("="),b):null,c[h]?("string"===typeof c[h]&&(c[h]=[c[h]]),c[h].push(d)):c[h]=d;return c};e.build=function(a){var b="";a.protocol&&
(b+=a.protocol+":");a.urn||!b&&!a.hostname||(b+="//");b+=e.buildAuthority(a)||"";"string"===typeof a.path&&("/"!==a.path.charAt(0)&&"string"===typeof a.hostname&&(b+="/"),b+=a.path);"string"===typeof a.query&&a.query&&(b+="?"+a.query);"string"===typeof a.fragment&&a.fragment&&(b+="#"+a.fragment);return b};e.buildHost=function(a){var b="";if(a.hostname)b=e.ip6_expression.test(a.hostname)?b+("["+a.hostname+"]"):b+a.hostname;else return"";a.port&&(b+=":"+a.port);return b};e.buildAuthority=function(a){return e.buildUserinfo(a)+
e.buildHost(a)};e.buildUserinfo=function(a){var b="";a.username&&(b+=e.encode(a.username),a.password&&(b+=":"+e.encode(a.password)),b+="@");return b};e.buildQuery=function(a,b,c){var g="",f,d,h,n;for(d in a)if(t.call(a,d)&&d)if(l(a[d]))for(f={},h=0,n=a[d].length;h<n;h++)void 0!==a[d][h]&&void 0===f[a[d][h]+""]&&(g+="&"+e.buildQueryParameter(d,a[d][h],c),!0!==b&&(f[a[d][h]+""]=!0));else void 0!==a[d]&&(g+="&"+e.buildQueryParameter(d,a[d],c));return g.substring(1)};e.buildQueryParameter=function(a,
b,c){return e.encodeQuery(a,c)+(null!==b?"="+e.encodeQuery(b,c):"")};e.addQuery=function(a,b,c){if("object"===typeof b)for(var g in b)t.call(b,g)&&e.addQuery(a,g,b[g]);else if("string"===typeof b)void 0===a[b]?a[b]=c:("string"===typeof a[b]&&(a[b]=[a[b]]),l(c)||(c=[c]),a[b]=a[b].concat(c));else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");};e.removeQuery=function(a,b,c){var g;if(l(b))for(c=0,g=b.length;c<g;c++)a[b[c]]=void 0;else if("object"===typeof b)for(g in b)t.call(b,
g)&&e.removeQuery(a,g,b[g]);else if("string"===typeof b)if(void 0!==c)if(a[b]===c)a[b]=void 0;else{if(l(a[b])){g=a[b];var f={},d,h;if(l(c))for(d=0,h=c.length;d<h;d++)f[c[d]]=!0;else f[c]=!0;d=0;for(h=g.length;d<h;d++)void 0!==f[g[d]]&&(g.splice(d,1),h--,d--);a[b]=g}}else a[b]=void 0;else throw new TypeError("URI.addQuery() accepts an object, string as the first parameter");};e.hasQuery=function(a,b,c,g){if("object"===typeof b){for(var d in b)if(t.call(b,d)&&!e.hasQuery(a,d,b[d]))return!1;return!0}if("string"!==
typeof b)throw new TypeError("URI.hasQuery() accepts an object, string as the name parameter");switch(y(c)){case "Undefined":return b in a;case "Boolean":return a=Boolean(l(a[b])?a[b].length:a[b]),c===a;case "Function":return!!c(a[b],b,a);case "Array":return l(a[b])?(g?x:A)(a[b],c):!1;case "RegExp":return l(a[b])?g?x(a[b],c):!1:Boolean(a[b]&&a[b].match(c));case "Number":c=String(c);case "String":return l(a[b])?g?x(a[b],c):!1:a[b]===c;default:throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter");
}};e.commonPath=function(a,b){var c=Math.min(a.length,b.length),e;for(e=0;e<c;e++)if(a.charAt(e)!==b.charAt(e)){e--;break}if(1>e)return a.charAt(0)===b.charAt(0)&&"/"===a.charAt(0)?"/":"";if("/"!==a.charAt(e)||"/"!==b.charAt(e))e=a.substring(0,e).lastIndexOf("/");return a.substring(0,e+1)};e.withinString=function(a,b,c){c||(c={});var g=c.start||e.findUri.start,d=c.end||e.findUri.end,k=c.trim||e.findUri.trim,h=/[a-z0-9-]=["']?$/i;for(g.lastIndex=0;;){var n=g.exec(a);if(!n)break;n=n.index;if(c.ignoreHtml){var l=
a.slice(Math.max(n-3,0),n);if(l&&h.test(l))continue}var l=n+a.slice(n).search(d),m=a.slice(n,l).replace(k,"");c.ignore&&c.ignore.test(m)||(l=n+m.length,m=b(m,n,l,a),a=a.slice(0,n)+m+a.slice(l),g.lastIndex=n+m.length)}g.lastIndex=0;return a};e.ensureValidHostname=function(a){if(a.match(e.invalid_hostname_characters)){if(!q)throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-] and Punycode.js is not available');if(q.toASCII(a).match(e.invalid_hostname_characters))throw new TypeError('Hostname "'+
a+'" contains characters other than [A-Z0-9.-]');}};e.noConflict=function(a){if(a)return a={URI:this.noConflict()},p.URITemplate&&"function"===typeof p.URITemplate.noConflict&&(a.URITemplate=p.URITemplate.noConflict()),p.IPv6&&"function"===typeof p.IPv6.noConflict&&(a.IPv6=p.IPv6.noConflict()),p.SecondLevelDomains&&"function"===typeof p.SecondLevelDomains.noConflict&&(a.SecondLevelDomains=p.SecondLevelDomains.noConflict()),a;p.URI===this&&(p.URI=C);return this};d.build=function(a){if(!0===a)this._deferred_build=
!0;else if(void 0===a||this._deferred_build)this._string=e.build(this._parts),this._deferred_build=!1;return this};d.clone=function(){return new e(this)};d.valueOf=d.toString=function(){return this.build(!1)._string};r={protocol:"protocol",username:"username",password:"password",hostname:"hostname",port:"port"};u=function(a){return function(b,c){if(void 0===b)return this._parts[a]||"";this._parts[a]=b||null;this.build(!c);return this}};for(m in r)d[m]=u(r[m]);r={query:"?",fragment:"#"};u=function(a,
b){return function(c,e){if(void 0===c)return this._parts[a]||"";null!==c&&(c+="",c.charAt(0)===b&&(c=c.substring(1)));this._parts[a]=c;this.build(!e);return this}};for(m in r)d[m]=u(m,r[m]);r={search:["?","query"],hash:["#","fragment"]};u=function(a,b){return function(c,e){var d=this[a](c,e);return"string"===typeof d&&d.length?b+d:d}};for(m in r)d[m]=u(r[m][1],r[m][0]);d.pathname=function(a,b){if(void 0===a||!0===a){var c=this._parts.path||(this._parts.hostname?"/":"");return a?e.decodePath(c):c}this._parts.path=
a?e.recodePath(a):"/";this.build(!b);return this};d.path=d.pathname;d.href=function(a,b){var c;if(void 0===a)return this.toString();this._string="";this._parts=e._parts();var g=a instanceof e,d="object"===typeof a&&(a.hostname||a.path||a.pathname);a.nodeName&&(d=e.getDomAttribute(a),a=a[d]||"",d=!1);!g&&d&&void 0!==a.pathname&&(a=a.toString());if("string"===typeof a)this._parts=e.parse(a,this._parts);else if(g||d)for(c in g=g?a._parts:a,g)t.call(this._parts,c)&&(this._parts[c]=g[c]);else throw new TypeError("invalid input");
this.build(!b);return this};d.is=function(a){var b=!1,c=!1,d=!1,f=!1,k=!1,h=!1,l=!1,m=!this._parts.urn;this._parts.hostname&&(m=!1,c=e.ip4_expression.test(this._parts.hostname),d=e.ip6_expression.test(this._parts.hostname),b=c||d,k=(f=!b)&&v&&v.has(this._parts.hostname),h=f&&e.idn_expression.test(this._parts.hostname),l=f&&e.punycode_expression.test(this._parts.hostname));switch(a.toLowerCase()){case "relative":return m;case "absolute":return!m;case "domain":case "name":return f;case "sld":return k;
case "ip":return b;case "ip4":case "ipv4":case "inet4":return c;case "ip6":case "ipv6":case "inet6":return d;case "idn":return h;case "url":return!this._parts.urn;case "urn":return!!this._parts.urn;case "punycode":return l}return null};var D=d.protocol,E=d.port,F=d.hostname;d.protocol=function(a,b){if(void 0!==a&&a&&(a=a.replace(/:(\/\/)?$/,""),!a.match(e.protocol_expression)))throw new TypeError('Protocol "'+a+"\" contains characters other than [A-Z0-9.+-] or doesn't start with [A-Z]");return D.call(this,
a,b)};d.scheme=d.protocol;d.port=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0!==a&&(0===a&&(a=null),a&&(a+="",":"===a.charAt(0)&&(a=a.substring(1)),a.match(/[^0-9]/))))throw new TypeError('Port "'+a+'" contains characters other than [0-9]');return E.call(this,a,b)};d.hostname=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0!==a){var c={};e.parseHost(a,c);a=c.hostname}return F.call(this,a,b)};d.host=function(a,b){if(this._parts.urn)return void 0===a?"":this;
if(void 0===a)return this._parts.hostname?e.buildHost(this._parts):"";e.parseHost(a,this._parts);this.build(!b);return this};d.authority=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a)return this._parts.hostname?e.buildAuthority(this._parts):"";e.parseAuthority(a,this._parts);this.build(!b);return this};d.userinfo=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){if(!this._parts.username)return"";var c=e.buildUserinfo(this._parts);return c.substring(0,
c.length-1)}"@"!==a[a.length-1]&&(a+="@");e.parseUserinfo(a,this._parts);this.build(!b);return this};d.resource=function(a,b){var c;if(void 0===a)return this.path()+this.search()+this.hash();c=e.parse(a);this._parts.path=c.path;this._parts.query=c.query;this._parts.fragment=c.fragment;this.build(!b);return this};d.subdomain=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var c=this._parts.hostname.length-this.domain().length-
1;return this._parts.hostname.substring(0,c)||""}c=this._parts.hostname.length-this.domain().length;c=this._parts.hostname.substring(0,c);c=new RegExp("^"+s(c));a&&"."!==a.charAt(a.length-1)&&(a+=".");a&&e.ensureValidHostname(a);this._parts.hostname=this._parts.hostname.replace(c,a);this.build(!b);return this};d.domain=function(a,b){if(this._parts.urn)return void 0===a?"":this;"boolean"===typeof a&&(b=a,a=void 0);if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var c=this._parts.hostname.match(/\./g);
if(c&&2>c.length)return this._parts.hostname;c=this._parts.hostname.length-this.tld(b).length-1;c=this._parts.hostname.lastIndexOf(".",c-1)+1;return this._parts.hostname.substring(c)||""}if(!a)throw new TypeError("cannot set domain empty");e.ensureValidHostname(a);!this._parts.hostname||this.is("IP")?this._parts.hostname=a:(c=new RegExp(s(this.domain())+"$"),this._parts.hostname=this._parts.hostname.replace(c,a));this.build(!b);return this};d.tld=function(a,b){if(this._parts.urn)return void 0===a?
"":this;"boolean"===typeof a&&(b=a,a=void 0);if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var c=this._parts.hostname.lastIndexOf("."),c=this._parts.hostname.substring(c+1);return!0!==b&&v&&v.list[c.toLowerCase()]?v.get(this._parts.hostname)||c:c}if(a)if(a.match(/[^a-zA-Z0-9-]/))if(v&&v.is(a))c=new RegExp(s(this.tld())+"$"),this._parts.hostname=this._parts.hostname.replace(c,a);else throw new TypeError('TLD "'+a+'" contains characters other than [A-Z0-9]');else{if(!this._parts.hostname||
this.is("IP"))throw new ReferenceError("cannot set TLD on non-domain host");c=new RegExp(s(this.tld())+"$");this._parts.hostname=this._parts.hostname.replace(c,a)}else throw new TypeError("cannot set TLD empty");this.build(!b);return this};d.directory=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path&&!this._parts.hostname)return"";if("/"===this._parts.path)return"/";var c=this._parts.path.length-this.filename().length-1,c=this._parts.path.substring(0,
c)||(this._parts.hostname?"/":"");return a?e.decodePath(c):c}c=this._parts.path.length-this.filename().length;c=this._parts.path.substring(0,c);c=new RegExp("^"+s(c));this.is("relative")||(a||(a="/"),"/"!==a.charAt(0)&&(a="/"+a));a&&"/"!==a.charAt(a.length-1)&&(a+="/");a=e.recodePath(a);this._parts.path=this._parts.path.replace(c,a);this.build(!b);return this};d.filename=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path||"/"===this._parts.path)return"";
var c=this._parts.path.lastIndexOf("/"),c=this._parts.path.substring(c+1);return a?e.decodePathSegment(c):c}c=!1;"/"===a.charAt(0)&&(a=a.substring(1));a.match(/\.?\//)&&(c=!0);var d=new RegExp(s(this.filename())+"$");a=e.recodePath(a);this._parts.path=this._parts.path.replace(d,a);c?this.normalizePath(b):this.build(!b);return this};d.suffix=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path||"/"===this._parts.path)return"";var c=this.filename(),
d=c.lastIndexOf(".");if(-1===d)return"";c=c.substring(d+1);c=/^[a-z0-9%]+$/i.test(c)?c:"";return a?e.decodePathSegment(c):c}"."===a.charAt(0)&&(a=a.substring(1));if(c=this.suffix())d=a?new RegExp(s(c)+"$"):new RegExp(s("."+c)+"$");else{if(!a)return this;this._parts.path+="."+e.recodePath(a)}d&&(a=e.recodePath(a),this._parts.path=this._parts.path.replace(d,a));this.build(!b);return this};d.segment=function(a,b,c){var e=this._parts.urn?":":"/",d=this.path(),k="/"===d.substring(0,1),d=d.split(e);void 0!==
a&&"number"!==typeof a&&(c=b,b=a,a=void 0);if(void 0!==a&&"number"!==typeof a)throw Error('Bad segment "'+a+'", must be 0-based integer');k&&d.shift();0>a&&(a=Math.max(d.length+a,0));if(void 0===b)return void 0===a?d:d[a];if(null===a||void 0===d[a])if(l(b)){d=[];a=0;for(var h=b.length;a<h;a++)if(b[a].length||d.length&&d[d.length-1].length)d.length&&!d[d.length-1].length&&d.pop(),d.push(b[a])}else{if(b||"string"===typeof b)""===d[d.length-1]?d[d.length-1]=b:d.push(b)}else b||"string"===typeof b&&b.length?
d[a]=b:d.splice(a,1);k&&d.unshift("");return this.path(d.join(e),c)};d.segmentCoded=function(a,b,c){var d,f;"number"!==typeof a&&(c=b,b=a,a=void 0);if(void 0===b){a=this.segment(a,b,c);if(l(a))for(d=0,f=a.length;d<f;d++)a[d]=e.decode(a[d]);else a=void 0!==a?e.decode(a):void 0;return a}if(l(b))for(d=0,f=b.length;d<f;d++)b[d]=e.decode(b[d]);else b="string"===typeof b?e.encode(b):b;return this.segment(a,b,c)};var G=d.query;d.query=function(a,b){if(!0===a)return e.parseQuery(this._parts.query,this._parts.escapeQuerySpace);
if("function"===typeof a){var c=e.parseQuery(this._parts.query,this._parts.escapeQuerySpace),d=a.call(this,c);this._parts.query=e.buildQuery(d||c,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);this.build(!b);return this}return void 0!==a&&"string"!==typeof a?(this._parts.query=e.buildQuery(a,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),this.build(!b),this):G.call(this,a,b)};d.setQuery=function(a,b,c){var d=e.parseQuery(this._parts.query,this._parts.escapeQuerySpace);
if("object"===typeof a)for(var f in a)t.call(a,f)&&(d[f]=a[f]);else if("string"===typeof a)d[a]=void 0!==b?b:null;else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");this._parts.query=e.buildQuery(d,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&(c=b);this.build(!c);return this};d.addQuery=function(a,b,c){var d=e.parseQuery(this._parts.query,this._parts.escapeQuerySpace);e.addQuery(d,a,void 0===b?null:b);this._parts.query=
e.buildQuery(d,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&(c=b);this.build(!c);return this};d.removeQuery=function(a,b,c){var d=e.parseQuery(this._parts.query,this._parts.escapeQuerySpace);e.removeQuery(d,a,b);this._parts.query=e.buildQuery(d,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&(c=b);this.build(!c);return this};d.hasQuery=function(a,b,c){var d=e.parseQuery(this._parts.query,this._parts.escapeQuerySpace);
return e.hasQuery(d,a,b,c)};d.setSearch=d.setQuery;d.addSearch=d.addQuery;d.removeSearch=d.removeQuery;d.hasSearch=d.hasQuery;d.normalize=function(){return this._parts.urn?this.normalizeProtocol(!1).normalizeQuery(!1).normalizeFragment(!1).build():this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()};d.normalizeProtocol=function(a){"string"===typeof this._parts.protocol&&(this._parts.protocol=this._parts.protocol.toLowerCase(),
this.build(!a));return this};d.normalizeHostname=function(a){this._parts.hostname&&(this.is("IDN")&&q?this._parts.hostname=q.toASCII(this._parts.hostname):this.is("IPv6")&&w&&(this._parts.hostname=w.best(this._parts.hostname)),this._parts.hostname=this._parts.hostname.toLowerCase(),this.build(!a));return this};d.normalizePort=function(a){"string"===typeof this._parts.protocol&&this._parts.port===e.defaultPorts[this._parts.protocol]&&(this._parts.port=null,this.build(!a));return this};d.normalizePath=
function(a){if(this._parts.urn||!this._parts.path||"/"===this._parts.path)return this;var b,c=this._parts.path,d="",f,k;"/"!==c.charAt(0)&&(b=!0,c="/"+c);c=c.replace(/(\/(\.\/)+)|(\/\.$)/g,"/").replace(/\/{2,}/g,"/");b&&(d=c.substring(1).match(/^(\.\.\/)+/)||"")&&(d=d[0]);for(;;){f=c.indexOf("/..");if(-1===f)break;else if(0===f){c=c.substring(3);continue}k=c.substring(0,f).lastIndexOf("/");-1===k&&(k=f);c=c.substring(0,k)+c.substring(f+3)}b&&this.is("relative")&&(c=d+c.substring(1));c=e.recodePath(c);
this._parts.path=c;this.build(!a);return this};d.normalizePathname=d.normalizePath;d.normalizeQuery=function(a){"string"===typeof this._parts.query&&(this._parts.query.length?this.query(e.parseQuery(this._parts.query,this._parts.escapeQuerySpace)):this._parts.query=null,this.build(!a));return this};d.normalizeFragment=function(a){this._parts.fragment||(this._parts.fragment=null,this.build(!a));return this};d.normalizeSearch=d.normalizeQuery;d.normalizeHash=d.normalizeFragment;d.iso8859=function(){var a=
e.encode,b=e.decode;e.encode=escape;e.decode=decodeURIComponent;this.normalize();e.encode=a;e.decode=b;return this};d.unicode=function(){var a=e.encode,b=e.decode;e.encode=z;e.decode=unescape;this.normalize();e.encode=a;e.decode=b;return this};d.readable=function(){var a=this.clone();a.username("").password("").normalize();var b="";a._parts.protocol&&(b+=a._parts.protocol+"://");a._parts.hostname&&(a.is("punycode")&&q?(b+=q.toUnicode(a._parts.hostname),a._parts.port&&(b+=":"+a._parts.port)):b+=a.host());
a._parts.hostname&&a._parts.path&&"/"!==a._parts.path.charAt(0)&&(b+="/");b+=a.path(!0);if(a._parts.query){for(var c="",d=0,f=a._parts.query.split("&"),k=f.length;d<k;d++){var h=(f[d]||"").split("="),c=c+("&"+e.decodeQuery(h[0],this._parts.escapeQuerySpace).replace(/&/g,"%26"));void 0!==h[1]&&(c+="="+e.decodeQuery(h[1],this._parts.escapeQuerySpace).replace(/&/g,"%26"))}b+="?"+c.substring(1)}return b+=e.decodeQuery(a.hash(),!0)};d.absoluteTo=function(a){var b=this.clone(),c=["protocol","username",
"password","hostname","port"],d,f;if(this._parts.urn)throw Error("URNs do not have any generally defined hierarchical components");a instanceof e||(a=new e(a));b._parts.protocol||(b._parts.protocol=a._parts.protocol);if(this._parts.hostname)return b;for(d=0;f=c[d];d++)b._parts[f]=a._parts[f];b._parts.path?".."===b._parts.path.substring(-2)&&(b._parts.path+="/"):(b._parts.path=a._parts.path,b._parts.query||(b._parts.query=a._parts.query));"/"!==b.path().charAt(0)&&(a=a.directory(),b._parts.path=(a?
a+"/":"")+b._parts.path,b.normalizePath());b.build();return b};d.relativeTo=function(a){var b=this.clone().normalize(),c,d,f,k;if(b._parts.urn)throw Error("URNs do not have any generally defined hierarchical components");a=(new e(a)).normalize();c=b._parts;d=a._parts;f=b.path();k=a.path();if("/"!==f.charAt(0))throw Error("URI is already relative");if("/"!==k.charAt(0))throw Error("Cannot calculate a URI relative to another relative URI");c.protocol===d.protocol&&(c.protocol=null);if(c.username===
d.username&&c.password===d.password&&null===c.protocol&&null===c.username&&null===c.password&&c.hostname===d.hostname&&c.port===d.port)c.hostname=null,c.port=null;else return b.build();if(f===k)return c.path="",b.build();a=e.commonPath(b.path(),a.path());if(!a)return b.build();d=d.path.substring(a.length).replace(/[^\/]*$/,"").replace(/.*?\//g,"../");c.path=d+c.path.substring(a.length);return b.build()};d.equals=function(a){var b=this.clone();a=new e(a);var c={},d={},f={},k;b.normalize();a.normalize();
if(b.toString()===a.toString())return!0;c=b.query();d=a.query();b.query("");a.query("");if(b.toString()!==a.toString()||c.length!==d.length)return!1;c=e.parseQuery(c,this._parts.escapeQuerySpace);d=e.parseQuery(d,this._parts.escapeQuerySpace);for(k in c)if(t.call(c,k)){if(!l(c[k])){if(c[k]!==d[k])return!1}else if(!A(c[k],d[k]))return!1;f[k]=!0}for(k in d)if(t.call(d,k)&&!f[k])return!1;return!0};d.duplicateQueryParameters=function(a){this._parts.duplicateQueryParameters=!!a;return this};d.escapeQuerySpace=
function(a){this._parts.escapeQuerySpace=!!a;return this};return e});



/*
 RequireJS 2.0.6 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
*/
var requirejs,require,define;
(function(Z){function x(b){return J.call(b)==="[object Function]"}function E(b){return J.call(b)==="[object Array]"}function o(b,e){if(b){var f;for(f=0;f<b.length;f+=1)if(b[f]&&e(b[f],f,b))break}}function M(b,e){if(b){var f;for(f=b.length-1;f>-1;f-=1)if(b[f]&&e(b[f],f,b))break}}function y(b,e){for(var f in b)if(b.hasOwnProperty(f)&&e(b[f],f))break}function N(b,e,f,h){e&&y(e,function(e,j){if(f||!F.call(b,j))h&&typeof e!=="string"?(b[j]||(b[j]={}),N(b[j],e,f,h)):b[j]=e});return b}function t(b,e){return function(){return e.apply(b,
arguments)}}function $(b){if(!b)return b;var e=Z;o(b.split("."),function(b){e=e[b]});return e}function aa(b,e,f){return function(){var h=ga.call(arguments,0),c;if(f&&x(c=h[h.length-1]))c.__requireJsBuild=!0;h.push(e);return b.apply(null,h)}}function ba(b,e,f){o([["toUrl"],["undef"],["defined","requireDefined"],["specified","requireSpecified"]],function(h){var c=h[1]||h[0];b[h[0]]=e?aa(e[c],f):function(){var b=z[O];return b[c].apply(b,arguments)}})}function G(b,e,f,h){e=Error(e+"\nhttp://requirejs.org/docs/errors.html#"+
b);e.requireType=b;e.requireModules=h;if(f)e.originalError=f;return e}function ha(){if(H&&H.readyState==="interactive")return H;M(document.getElementsByTagName("script"),function(b){if(b.readyState==="interactive")return H=b});return H}var j,p,u,B,s,C,H,I,ca,da,ia=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,ja=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,ea=/\.js$/,ka=/^\.\//;p=Object.prototype;var J=p.toString,F=p.hasOwnProperty;p=Array.prototype;var ga=p.slice,la=p.splice,w=!!(typeof window!==
"undefined"&&navigator&&document),fa=!w&&typeof importScripts!=="undefined",ma=w&&navigator.platform==="PLAYSTATION 3"?/^complete$/:/^(complete|loaded)$/,O="_",S=typeof opera!=="undefined"&&opera.toString()==="[object Opera]",z={},r={},P=[],K=!1;if(typeof define==="undefined"){if(typeof requirejs!=="undefined"){if(x(requirejs))return;r=requirejs;requirejs=void 0}typeof require!=="undefined"&&!x(require)&&(r=require,require=void 0);j=requirejs=function(b,e,f,h){var c,o=O;!E(b)&&typeof b!=="string"&&
(c=b,E(e)?(b=e,e=f,f=h):b=[]);if(c&&c.context)o=c.context;(h=z[o])||(h=z[o]=j.s.newContext(o));c&&h.configure(c);return h.require(b,e,f)};j.config=function(b){return j(b)};require||(require=j);j.version="2.0.6";j.jsExtRegExp=/^\/|:|\?|\.js$/;j.isBrowser=w;p=j.s={contexts:z,newContext:function(b){function e(a,d,k){var l,b,i,v,e,c,f,g=d&&d.split("/");l=g;var h=m.map,j=h&&h["*"];if(a&&a.charAt(0)===".")if(d){l=m.pkgs[d]?g=[d]:g.slice(0,g.length-1);d=a=l.concat(a.split("/"));for(l=0;d[l];l+=1)if(b=d[l],
b===".")d.splice(l,1),l-=1;else if(b==="..")if(l===1&&(d[2]===".."||d[0]===".."))break;else l>0&&(d.splice(l-1,2),l-=2);l=m.pkgs[d=a[0]];a=a.join("/");l&&a===d+"/"+l.main&&(a=d)}else a.indexOf("./")===0&&(a=a.substring(2));if(k&&(g||j)&&h){d=a.split("/");for(l=d.length;l>0;l-=1){i=d.slice(0,l).join("/");if(g)for(b=g.length;b>0;b-=1)if(k=h[g.slice(0,b).join("/")])if(k=k[i]){v=k;e=l;break}if(v)break;!c&&j&&j[i]&&(c=j[i],f=l)}!v&&c&&(v=c,e=f);v&&(d.splice(0,e,v),a=d.join("/"))}return a}function f(a){w&&
o(document.getElementsByTagName("script"),function(d){if(d.getAttribute("data-requiremodule")===a&&d.getAttribute("data-requirecontext")===g.contextName)return d.parentNode.removeChild(d),!0})}function h(a){var d=m.paths[a];if(d&&E(d)&&d.length>1)return f(a),d.shift(),g.undef(a),g.require([a]),!0}function c(a,d,k,l){var b,i,v=a?a.indexOf("!"):-1,c=null,f=d?d.name:null,h=a,j=!0,m="";a||(j=!1,a="_@r"+(M+=1));v!==-1&&(c=a.substring(0,v),a=a.substring(v+1,a.length));c&&(c=e(c,f,l),i=q[c]);a&&(c?m=i&&
i.normalize?i.normalize(a,function(a){return e(a,f,l)}):e(a,f,l):(m=e(a,f,l),b=g.nameToUrl(m)));a=c&&!i&&!k?"_unnormalized"+(O+=1):"";return{prefix:c,name:m,parentMap:d,unnormalized:!!a,url:b,originalName:h,isDefine:j,id:(c?c+"!"+m:m)+a}}function p(a){var d=a.id,k=n[d];k||(k=n[d]=new g.Module(a));return k}function r(a,d,k){var b=a.id,c=n[b];if(F.call(q,b)&&(!c||c.defineEmitComplete))d==="defined"&&k(q[b]);else p(a).on(d,k)}function A(a,d){var k=a.requireModules,b=!1;if(d)d(a);else if(o(k,function(d){if(d=
n[d])d.error=a,d.events.error&&(b=!0,d.emit("error",a))}),!b)j.onError(a)}function s(){P.length&&(la.apply(D,[D.length-1,0].concat(P)),P=[])}function u(a,d,k){a=a&&a.map;d=aa(k||g.require,a,d);ba(d,g,a);d.isBrowser=w;return d}function z(a){delete n[a];o(L,function(d,k){if(d.map.id===a)return L.splice(k,1),d.defined||(g.waitCount-=1),!0})}function B(a,d,k){var b=a.map.id,c=a.depMaps,i;if(a.inited){if(d[b])return a;d[b]=!0;o(c,function(a){var a=a.id,b=n[a];return!b||k[a]||!b.inited||!b.enabled?void 0:
i=B(b,d,k)});k[b]=!0;return i}}function C(a,d,b){var l=a.map.id,c=a.depMaps;if(a.inited&&a.map.isDefine){if(d[l])return q[l];d[l]=a;o(c,function(i){var i=i.id,c=n[i];!Q[i]&&c&&(!c.inited||!c.enabled?b[l]=!0:(c=C(c,d,b),b[i]||a.defineDepById(i,c)))});a.check(!0);return q[l]}}function I(a){a.check()}function T(){var a,d,b,l,c=(b=m.waitSeconds*1E3)&&g.startTime+b<(new Date).getTime(),i=[],e=!1,j=!0;if(!U){U=!0;y(n,function(b){a=b.map;d=a.id;if(b.enabled&&!b.error)if(!b.inited&&c)h(d)?e=l=!0:(i.push(d),
f(d));else if(!b.inited&&b.fetched&&a.isDefine&&(e=!0,!a.prefix))return j=!1});if(c&&i.length)return b=G("timeout","Load timeout for modules: "+i,null,i),b.contextName=g.contextName,A(b);j&&(o(L,function(a){if(!a.defined){var a=B(a,{},{}),d={};a&&(C(a,d,{}),y(d,I))}}),y(n,I));if((!c||l)&&e)if((w||fa)&&!V)V=setTimeout(function(){V=0;T()},50);U=!1}}function W(a){p(c(a[0],null,!0)).init(a[1],a[2])}function J(a){var a=a.currentTarget||a.srcElement,d=g.onScriptLoad;a.detachEvent&&!S?a.detachEvent("onreadystatechange",
d):a.removeEventListener("load",d,!1);d=g.onScriptError;a.detachEvent&&!S||a.removeEventListener("error",d,!1);return{node:a,id:a&&a.getAttribute("data-requiremodule")}}var U,X,g,Q,V,m={waitSeconds:7,baseUrl:"./",paths:{},pkgs:{},shim:{}},n={},Y={},D=[],q={},R={},M=1,O=1,L=[];Q={require:function(a){return u(a)},exports:function(a){a.usingExports=!0;if(a.map.isDefine)return a.exports=q[a.map.id]={}},module:function(a){return a.module={id:a.map.id,uri:a.map.url,config:function(){return m.config&&m.config[a.map.id]||
{}},exports:q[a.map.id]}}};X=function(a){this.events=Y[a.id]||{};this.map=a;this.shim=m.shim[a.id];this.depExports=[];this.depMaps=[];this.depMatched=[];this.pluginMaps={};this.depCount=0};X.prototype={init:function(a,d,b,c){c=c||{};if(!this.inited){this.factory=d;if(b)this.on("error",b);else this.events.error&&(b=t(this,function(a){this.emit("error",a)}));this.depMaps=a&&a.slice(0);this.depMaps.rjsSkipMap=a.rjsSkipMap;this.errback=b;this.inited=!0;this.ignore=c.ignore;c.enabled||this.enabled?this.enable():
this.check()}},defineDepById:function(a,d){var b;o(this.depMaps,function(d,c){if(d.id===a)return b=c,!0});return this.defineDep(b,d)},defineDep:function(a,d){this.depMatched[a]||(this.depMatched[a]=!0,this.depCount-=1,this.depExports[a]=d)},fetch:function(){if(!this.fetched){this.fetched=!0;g.startTime=(new Date).getTime();var a=this.map;if(this.shim)u(this,!0)(this.shim.deps||[],t(this,function(){return a.prefix?this.callPlugin():this.load()}));else return a.prefix?this.callPlugin():this.load()}},
load:function(){var a=this.map.url;R[a]||(R[a]=!0,g.load(this.map.id,a))},check:function(a){if(this.enabled&&!this.enabling){var d,b,c=this.map.id;b=this.depExports;var e=this.exports,i=this.factory;if(this.inited)if(this.error)this.emit("error",this.error);else{if(!this.defining){this.defining=!0;if(this.depCount<1&&!this.defined){if(x(i)){if(this.events.error)try{e=g.execCb(c,i,b,e)}catch(f){d=f}else e=g.execCb(c,i,b,e);if(this.map.isDefine)if((b=this.module)&&b.exports!==void 0&&b.exports!==this.exports)e=
b.exports;else if(e===void 0&&this.usingExports)e=this.exports;if(d)return d.requireMap=this.map,d.requireModules=[this.map.id],d.requireType="define",A(this.error=d)}else e=i;this.exports=e;if(this.map.isDefine&&!this.ignore&&(q[c]=e,j.onResourceLoad))j.onResourceLoad(g,this.map,this.depMaps);delete n[c];this.defined=!0;g.waitCount-=1;g.waitCount===0&&(L=[])}this.defining=!1;if(!a&&this.defined&&!this.defineEmitted)this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0}}else this.fetch()}},
callPlugin:function(){var a=this.map,d=a.id,b=c(a.prefix,null,!1,!0);r(b,"defined",t(this,function(b){var k;k=this.map.name;var i=this.map.parentMap?this.map.parentMap.name:null;if(this.map.unnormalized){if(b.normalize&&(k=b.normalize(k,function(a){return e(a,i,!0)})||""),b=c(a.prefix+"!"+k,this.map.parentMap,!1,!0),r(b,"defined",t(this,function(a){this.init([],function(){return a},null,{enabled:!0,ignore:!0})})),b=n[b.id]){if(this.events.error)b.on("error",t(this,function(a){this.emit("error",a)}));
b.enable()}}else k=t(this,function(a){this.init([],function(){return a},null,{enabled:!0})}),k.error=t(this,function(a){this.inited=!0;this.error=a;a.requireModules=[d];y(n,function(a){a.map.id.indexOf(d+"_unnormalized")===0&&z(a.map.id)});A(a)}),k.fromText=function(a,b){var d=K;d&&(K=!1);p(c(a));j.exec(b);d&&(K=!0);g.completeLoad(a)},b.load(a.name,u(a.parentMap,!0,function(a,b,d){a.rjsSkipMap=!0;return g.require(a,b,d)}),k,m)}));g.enable(b,this);this.pluginMaps[b.id]=b},enable:function(){this.enabled=
!0;if(!this.waitPushed)L.push(this),g.waitCount+=1,this.waitPushed=!0;this.enabling=!0;o(this.depMaps,t(this,function(a,b){var k,e;if(typeof a==="string"){a=c(a,this.map.isDefine?this.map:this.map.parentMap,!1,!this.depMaps.rjsSkipMap);this.depMaps[b]=a;if(k=Q[a.id]){this.depExports[b]=k(this);return}this.depCount+=1;r(a,"defined",t(this,function(a){this.defineDep(b,a);this.check()}));this.errback&&r(a,"error",this.errback)}k=a.id;e=n[k];!Q[k]&&e&&!e.enabled&&g.enable(a,this)}));y(this.pluginMaps,
t(this,function(a){var b=n[a.id];b&&!b.enabled&&g.enable(a,this)}));this.enabling=!1;this.check()},on:function(a,b){var c=this.events[a];c||(c=this.events[a]=[]);c.push(b)},emit:function(a,b){o(this.events[a],function(a){a(b)});a==="error"&&delete this.events[a]}};return g={config:m,contextName:b,registry:n,defined:q,urlFetched:R,waitCount:0,defQueue:D,Module:X,makeModuleMap:c,configure:function(a){a.baseUrl&&a.baseUrl.charAt(a.baseUrl.length-1)!=="/"&&(a.baseUrl+="/");var b=m.pkgs,e=m.shim,f=m.paths,
j=m.map;N(m,a,!0);m.paths=N(f,a.paths,!0);if(a.map)m.map=N(j||{},a.map,!0,!0);if(a.shim)y(a.shim,function(a,b){E(a)&&(a={deps:a});if(a.exports&&!a.exports.__buildReady)a.exports=g.makeShimExports(a.exports);e[b]=a}),m.shim=e;if(a.packages)o(a.packages,function(a){a=typeof a==="string"?{name:a}:a;b[a.name]={name:a.name,location:a.location||a.name,main:(a.main||"main").replace(ka,"").replace(ea,"")}}),m.pkgs=b;y(n,function(a,b){if(!a.inited&&!a.map.unnormalized)a.map=c(b)});if(a.deps||a.callback)g.require(a.deps||
[],a.callback)},makeShimExports:function(a){var b;return typeof a==="string"?(b=function(){return $(a)},b.exports=a,b):function(){return a.apply(Z,arguments)}},requireDefined:function(a,b){var e=c(a,b,!1,!0).id;return F.call(q,e)},requireSpecified:function(a,b){a=c(a,b,!1,!0).id;return F.call(q,a)||F.call(n,a)},require:function(a,d,e,f){var h;if(typeof a==="string"){if(x(d))return A(G("requireargs","Invalid require call"),e);if(j.get)return j.get(g,a,d);a=c(a,d,!1,!0);a=a.id;return!F.call(q,a)?A(G("notloaded",
'Module name "'+a+'" has not been loaded yet for context: '+b)):q[a]}e&&!x(e)&&(f=e,e=void 0);d&&!x(d)&&(f=d,d=void 0);for(s();D.length;)if(h=D.shift(),h[0]===null)return A(G("mismatch","Mismatched anonymous define() module: "+h[h.length-1]));else W(h);p(c(null,f)).init(a,d,e,{enabled:!0});T();return g.require},undef:function(a){s();var b=c(a,null,!0),e=n[a];delete q[a];delete R[b.url];delete Y[a];if(e){if(e.events.defined)Y[a]=e.events;z(a)}},enable:function(a){n[a.id]&&p(a).enable()},completeLoad:function(a){var b,
c,e=m.shim[a]||{},f=e.exports&&e.exports.exports;for(s();D.length;){c=D.shift();if(c[0]===null){c[0]=a;if(b)break;b=!0}else c[0]===a&&(b=!0);W(c)}c=n[a];if(!b&&!q[a]&&c&&!c.inited)if(m.enforceDefine&&(!f||!$(f)))if(h(a))return;else return A(G("nodefine","No define call for "+a,null,[a]));else W([a,e.deps||[],e.exports]);T()},toUrl:function(a,b){var c=a.lastIndexOf("."),f=null;c!==-1&&(f=a.substring(c,a.length),a=a.substring(0,c));return g.nameToUrl(e(a,b&&b.id,!0),f)},nameToUrl:function(a,b){var c,
e,f,i,h,g;if(j.jsExtRegExp.test(a))i=a+(b||"");else{c=m.paths;e=m.pkgs;i=a.split("/");for(h=i.length;h>0;h-=1)if(g=i.slice(0,h).join("/"),f=e[g],g=c[g]){E(g)&&(g=g[0]);i.splice(0,h,g);break}else if(f){c=a===f.name?f.location+"/"+f.main:f.location;i.splice(0,h,c);break}i=i.join("/");i+=b||(/\?/.test(i)?"":".js");i=(i.charAt(0)==="/"||i.match(/^[\w\+\.\-]+:/)?"":m.baseUrl)+i}return m.urlArgs?i+((i.indexOf("?")===-1?"?":"&")+m.urlArgs):i},load:function(a,b){j.load(g,a,b)},execCb:function(a,b,c,e){return b.apply(e,
c)},onScriptLoad:function(a){if(a.type==="load"||ma.test((a.currentTarget||a.srcElement).readyState))H=null,a=J(a),g.completeLoad(a.id)},onScriptError:function(a){var b=J(a);if(!h(b.id))return A(G("scripterror","Script error",a,[b.id]))}}}};j({});ba(j);if(w&&(u=p.head=document.getElementsByTagName("head")[0],B=document.getElementsByTagName("base")[0]))u=p.head=B.parentNode;j.onError=function(b){throw b;};j.load=function(b,e,f){var h=b&&b.config||{},c;if(w)return c=h.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml",
"html:script"):document.createElement("script"),c.type=h.scriptType||"text/javascript",c.charset="utf-8",c.async=!0,c.setAttribute("data-requirecontext",b.contextName),c.setAttribute("data-requiremodule",e),c.attachEvent&&!(c.attachEvent.toString&&c.attachEvent.toString().indexOf("[native code")<0)&&!S?(K=!0,c.attachEvent("onreadystatechange",b.onScriptLoad)):(c.addEventListener("load",b.onScriptLoad,!1),c.addEventListener("error",b.onScriptError,!1)),c.src=f,I=c,B?u.insertBefore(c,B):u.appendChild(c),
I=null,c;else fa&&(importScripts(f),b.completeLoad(e))};w&&M(document.getElementsByTagName("script"),function(b){if(!u)u=b.parentNode;if(s=b.getAttribute("data-main")){if(!r.baseUrl)C=s.split("/"),ca=C.pop(),da=C.length?C.join("/")+"/":"./",r.baseUrl=da,s=ca;s=s.replace(ea,"");r.deps=r.deps?r.deps.concat(s):[s];return!0}});define=function(b,e,f){var h,c;typeof b!=="string"&&(f=e,e=b,b=null);E(e)||(f=e,e=[]);!e.length&&x(f)&&f.length&&(f.toString().replace(ia,"").replace(ja,function(b,c){e.push(c)}),
e=(f.length===1?["require"]:["require","exports","module"]).concat(e));if(K&&(h=I||ha()))b||(b=h.getAttribute("data-requiremodule")),c=z[h.getAttribute("data-requirecontext")];(c?c.defQueue:P).push([b,e,f])};define.amd={jQuery:!0};j.exec=function(b){return eval(b)};j(r)}})(this);

/*! Hammer.JS - v1.0.5 - 2013-04-07
 * http://eightmedia.github.com/hammer.js
 *
 * Copyright (c) 2013 Jorik Tangelder <j.tangelder@gmail.com>;
 * Licensed under the MIT license */

(function(t,e){"use strict";function n(){if(!i.READY){i.event.determineEventTypes();for(var t in i.gestures)i.gestures.hasOwnProperty(t)&&i.detection.register(i.gestures[t]);i.event.onTouch(i.DOCUMENT,i.EVENT_MOVE,i.detection.detect),i.event.onTouch(i.DOCUMENT,i.EVENT_END,i.detection.detect),i.READY=!0}}var i=function(t,e){return new i.Instance(t,e||{})};i.defaults={stop_browser_behavior:{userSelect:"none",touchAction:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},i.HAS_POINTEREVENTS=navigator.pointerEnabled||navigator.msPointerEnabled,i.HAS_TOUCHEVENTS="ontouchstart"in t,i.MOBILE_REGEX=/mobile|tablet|ip(ad|hone|od)|android/i,i.NO_MOUSEEVENTS=i.HAS_TOUCHEVENTS&&navigator.userAgent.match(i.MOBILE_REGEX),i.EVENT_TYPES={},i.DIRECTION_DOWN="down",i.DIRECTION_LEFT="left",i.DIRECTION_UP="up",i.DIRECTION_RIGHT="right",i.POINTER_MOUSE="mouse",i.POINTER_TOUCH="touch",i.POINTER_PEN="pen",i.EVENT_START="start",i.EVENT_MOVE="move",i.EVENT_END="end",i.DOCUMENT=document,i.plugins={},i.READY=!1,i.Instance=function(t,e){var r=this;return n(),this.element=t,this.enabled=!0,this.options=i.utils.extend(i.utils.extend({},i.defaults),e||{}),this.options.stop_browser_behavior&&i.utils.stopDefaultBrowserBehavior(this.element,this.options.stop_browser_behavior),i.event.onTouch(t,i.EVENT_START,function(t){r.enabled&&i.detection.startDetect(r,t)}),this},i.Instance.prototype={on:function(t,e){for(var n=t.split(" "),i=0;n.length>i;i++)this.element.addEventListener(n[i],e,!1);return this},off:function(t,e){for(var n=t.split(" "),i=0;n.length>i;i++)this.element.removeEventListener(n[i],e,!1);return this},trigger:function(t,e){var n=i.DOCUMENT.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e;var r=this.element;return i.utils.hasParent(e.target,r)&&(r=e.target),r.dispatchEvent(n),this},enable:function(t){return this.enabled=t,this}};var r=null,o=!1,s=!1;i.event={bindDom:function(t,e,n){for(var i=e.split(" "),r=0;i.length>r;r++)t.addEventListener(i[r],n,!1)},onTouch:function(t,e,n){var a=this;this.bindDom(t,i.EVENT_TYPES[e],function(c){var u=c.type.toLowerCase();if(!u.match(/mouse/)||!s){(u.match(/touch/)||u.match(/pointerdown/)||u.match(/mouse/)&&1===c.which)&&(o=!0),u.match(/touch|pointer/)&&(s=!0);var h=0;o&&(i.HAS_POINTEREVENTS&&e!=i.EVENT_END?h=i.PointerEvent.updatePointer(e,c):u.match(/touch/)?h=c.touches.length:s||(h=u.match(/up/)?0:1),h>0&&e==i.EVENT_END?e=i.EVENT_MOVE:h||(e=i.EVENT_END),h||null===r?r=c:c=r,n.call(i.detection,a.collectEventData(t,e,c)),i.HAS_POINTEREVENTS&&e==i.EVENT_END&&(h=i.PointerEvent.updatePointer(e,c))),h||(r=null,o=!1,s=!1,i.PointerEvent.reset())}})},determineEventTypes:function(){var t;t=i.HAS_POINTEREVENTS?i.PointerEvent.getEvents():i.NO_MOUSEEVENTS?["touchstart","touchmove","touchend touchcancel"]:["touchstart mousedown","touchmove mousemove","touchend touchcancel mouseup"],i.EVENT_TYPES[i.EVENT_START]=t[0],i.EVENT_TYPES[i.EVENT_MOVE]=t[1],i.EVENT_TYPES[i.EVENT_END]=t[2]},getTouchList:function(t){return i.HAS_POINTEREVENTS?i.PointerEvent.getTouchList():t.touches?t.touches:[{identifier:1,pageX:t.pageX,pageY:t.pageY,target:t.target}]},collectEventData:function(t,e,n){var r=this.getTouchList(n,e),o=i.POINTER_TOUCH;return(n.type.match(/mouse/)||i.PointerEvent.matchType(i.POINTER_MOUSE,n))&&(o=i.POINTER_MOUSE),{center:i.utils.getCenter(r),timeStamp:(new Date).getTime(),target:n.target,touches:r,eventType:e,pointerType:o,srcEvent:n,preventDefault:function(){this.srcEvent.preventManipulation&&this.srcEvent.preventManipulation(),this.srcEvent.preventDefault&&this.srcEvent.preventDefault()},stopPropagation:function(){this.srcEvent.stopPropagation()},stopDetect:function(){return i.detection.stopDetect()}}}},i.PointerEvent={pointers:{},getTouchList:function(){var t=this,e=[];return Object.keys(t.pointers).sort().forEach(function(n){e.push(t.pointers[n])}),e},updatePointer:function(t,e){return t==i.EVENT_END?this.pointers={}:(e.identifier=e.pointerId,this.pointers[e.pointerId]=e),Object.keys(this.pointers).length},matchType:function(t,e){if(!e.pointerType)return!1;var n={};return n[i.POINTER_MOUSE]=e.pointerType==e.MSPOINTER_TYPE_MOUSE||e.pointerType==i.POINTER_MOUSE,n[i.POINTER_TOUCH]=e.pointerType==e.MSPOINTER_TYPE_TOUCH||e.pointerType==i.POINTER_TOUCH,n[i.POINTER_PEN]=e.pointerType==e.MSPOINTER_TYPE_PEN||e.pointerType==i.POINTER_PEN,n[t]},getEvents:function(){return["pointerdown MSPointerDown","pointermove MSPointerMove","pointerup pointercancel MSPointerUp MSPointerCancel"]},reset:function(){this.pointers={}}},i.utils={extend:function(t,n,i){for(var r in n)t[r]!==e&&i||(t[r]=n[r]);return t},hasParent:function(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1},getCenter:function(t){for(var e=[],n=[],i=0,r=t.length;r>i;i++)e.push(t[i].pageX),n.push(t[i].pageY);return{pageX:(Math.min.apply(Math,e)+Math.max.apply(Math,e))/2,pageY:(Math.min.apply(Math,n)+Math.max.apply(Math,n))/2}},getVelocity:function(t,e,n){return{x:Math.abs(e/t)||0,y:Math.abs(n/t)||0}},getAngle:function(t,e){var n=e.pageY-t.pageY,i=e.pageX-t.pageX;return 180*Math.atan2(n,i)/Math.PI},getDirection:function(t,e){var n=Math.abs(t.pageX-e.pageX),r=Math.abs(t.pageY-e.pageY);return n>=r?t.pageX-e.pageX>0?i.DIRECTION_LEFT:i.DIRECTION_RIGHT:t.pageY-e.pageY>0?i.DIRECTION_UP:i.DIRECTION_DOWN},getDistance:function(t,e){var n=e.pageX-t.pageX,i=e.pageY-t.pageY;return Math.sqrt(n*n+i*i)},getScale:function(t,e){return t.length>=2&&e.length>=2?this.getDistance(e[0],e[1])/this.getDistance(t[0],t[1]):1},getRotation:function(t,e){return t.length>=2&&e.length>=2?this.getAngle(e[1],e[0])-this.getAngle(t[1],t[0]):0},isVertical:function(t){return t==i.DIRECTION_UP||t==i.DIRECTION_DOWN},stopDefaultBrowserBehavior:function(t,e){var n,i=["webkit","khtml","moz","ms","o",""];if(e&&t.style){for(var r=0;i.length>r;r++)for(var o in e)e.hasOwnProperty(o)&&(n=o,i[r]&&(n=i[r]+n.substring(0,1).toUpperCase()+n.substring(1)),t.style[n]=e[o]);"none"==e.userSelect&&(t.onselectstart=function(){return!1})}}},i.detection={gestures:[],current:null,previous:null,stopped:!1,startDetect:function(t,e){this.current||(this.stopped=!1,this.current={inst:t,startEvent:i.utils.extend({},e),lastEvent:!1,name:""},this.detect(e))},detect:function(t){if(this.current&&!this.stopped){t=this.extendEventData(t);for(var e=this.current.inst.options,n=0,r=this.gestures.length;r>n;n++){var o=this.gestures[n];if(!this.stopped&&e[o.name]!==!1&&o.handler.call(o,t,this.current.inst)===!1){this.stopDetect();break}}return this.current&&(this.current.lastEvent=t),t.eventType==i.EVENT_END&&!t.touches.length-1&&this.stopDetect(),t}},stopDetect:function(){this.previous=i.utils.extend({},this.current),this.current=null,this.stopped=!0},extendEventData:function(t){var e=this.current.startEvent;if(e&&(t.touches.length!=e.touches.length||t.touches===e.touches)){e.touches=[];for(var n=0,r=t.touches.length;r>n;n++)e.touches.push(i.utils.extend({},t.touches[n]))}var o=t.timeStamp-e.timeStamp,s=t.center.pageX-e.center.pageX,a=t.center.pageY-e.center.pageY,c=i.utils.getVelocity(o,s,a);return i.utils.extend(t,{deltaTime:o,deltaX:s,deltaY:a,velocityX:c.x,velocityY:c.y,distance:i.utils.getDistance(e.center,t.center),angle:i.utils.getAngle(e.center,t.center),direction:i.utils.getDirection(e.center,t.center),scale:i.utils.getScale(e.touches,t.touches),rotation:i.utils.getRotation(e.touches,t.touches),startEvent:e}),t},register:function(t){var n=t.defaults||{};return n[t.name]===e&&(n[t.name]=!0),i.utils.extend(i.defaults,n,!0),t.index=t.index||1e3,this.gestures.push(t),this.gestures.sort(function(t,e){return t.index<e.index?-1:t.index>e.index?1:0}),this.gestures}},i.gestures=i.gestures||{},i.gestures.Hold={name:"hold",index:10,defaults:{hold_timeout:500,hold_threshold:1},timer:null,handler:function(t,e){switch(t.eventType){case i.EVENT_START:clearTimeout(this.timer),i.detection.current.name=this.name,this.timer=setTimeout(function(){"hold"==i.detection.current.name&&e.trigger("hold",t)},e.options.hold_timeout);break;case i.EVENT_MOVE:t.distance>e.options.hold_threshold&&clearTimeout(this.timer);break;case i.EVENT_END:clearTimeout(this.timer)}}},i.gestures.Tap={name:"tap",index:100,defaults:{tap_max_touchtime:250,tap_max_distance:10,tap_always:!0,doubletap_distance:20,doubletap_interval:300},handler:function(t,e){if(t.eventType==i.EVENT_END){var n=i.detection.previous,r=!1;if(t.deltaTime>e.options.tap_max_touchtime||t.distance>e.options.tap_max_distance)return;n&&"tap"==n.name&&t.timeStamp-n.lastEvent.timeStamp<e.options.doubletap_interval&&t.distance<e.options.doubletap_distance&&(e.trigger("doubletap",t),r=!0),(!r||e.options.tap_always)&&(i.detection.current.name="tap",e.trigger(i.detection.current.name,t))}}},i.gestures.Swipe={name:"swipe",index:40,defaults:{swipe_max_touches:1,swipe_velocity:.7},handler:function(t,e){if(t.eventType==i.EVENT_END){if(e.options.swipe_max_touches>0&&t.touches.length>e.options.swipe_max_touches)return;(t.velocityX>e.options.swipe_velocity||t.velocityY>e.options.swipe_velocity)&&(e.trigger(this.name,t),e.trigger(this.name+t.direction,t))}}},i.gestures.Drag={name:"drag",index:50,defaults:{drag_min_distance:10,drag_max_touches:1,drag_block_horizontal:!1,drag_block_vertical:!1,drag_lock_to_axis:!1,drag_lock_min_distance:25},triggered:!1,handler:function(t,n){if(i.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",t),this.triggered=!1,e;if(!(n.options.drag_max_touches>0&&t.touches.length>n.options.drag_max_touches))switch(t.eventType){case i.EVENT_START:this.triggered=!1;break;case i.EVENT_MOVE:if(t.distance<n.options.drag_min_distance&&i.detection.current.name!=this.name)return;i.detection.current.name=this.name,(i.detection.current.lastEvent.drag_locked_to_axis||n.options.drag_lock_to_axis&&n.options.drag_lock_min_distance<=t.distance)&&(t.drag_locked_to_axis=!0);var r=i.detection.current.lastEvent.direction;t.drag_locked_to_axis&&r!==t.direction&&(t.direction=i.utils.isVertical(r)?0>t.deltaY?i.DIRECTION_UP:i.DIRECTION_DOWN:0>t.deltaX?i.DIRECTION_LEFT:i.DIRECTION_RIGHT),this.triggered||(n.trigger(this.name+"start",t),this.triggered=!0),n.trigger(this.name,t),n.trigger(this.name+t.direction,t),(n.options.drag_block_vertical&&i.utils.isVertical(t.direction)||n.options.drag_block_horizontal&&!i.utils.isVertical(t.direction))&&t.preventDefault();break;case i.EVENT_END:this.triggered&&n.trigger(this.name+"end",t),this.triggered=!1}}},i.gestures.Transform={name:"transform",index:45,defaults:{transform_min_scale:.01,transform_min_rotation:1,transform_always_block:!1},triggered:!1,handler:function(t,n){if(i.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",t),this.triggered=!1,e;if(!(2>t.touches.length))switch(n.options.transform_always_block&&t.preventDefault(),t.eventType){case i.EVENT_START:this.triggered=!1;break;case i.EVENT_MOVE:var r=Math.abs(1-t.scale),o=Math.abs(t.rotation);if(n.options.transform_min_scale>r&&n.options.transform_min_rotation>o)return;i.detection.current.name=this.name,this.triggered||(n.trigger(this.name+"start",t),this.triggered=!0),n.trigger(this.name,t),o>n.options.transform_min_rotation&&n.trigger("rotate",t),r>n.options.transform_min_scale&&(n.trigger("pinch",t),n.trigger("pinch"+(1>t.scale?"in":"out"),t));break;case i.EVENT_END:this.triggered&&n.trigger(this.name+"end",t),this.triggered=!1}}},i.gestures.Touch={name:"touch",index:-1/0,defaults:{prevent_default:!1,prevent_mouseevents:!1},handler:function(t,n){return n.options.prevent_mouseevents&&t.pointerType==i.POINTER_MOUSE?(t.stopDetect(),e):(n.options.prevent_default&&t.preventDefault(),t.eventType==i.EVENT_START&&n.trigger(this.name,t),e)}},i.gestures.Release={name:"release",index:1/0,handler:function(t,e){t.eventType==i.EVENT_END&&e.trigger(this.name,t)}},"object"==typeof module&&"object"==typeof module.exports?module.exports=i:(t.Hammer=i,"function"==typeof t.define&&t.define.amd&&t.define("hammer",[],function(){return i}))})(this),function(t,e){"use strict";t!==e&&(Hammer.event.bindDom=function(n,i,r){t(n).on(i,function(t){var n=t.originalEvent||t;n.pageX===e&&(n.pageX=t.pageX,n.pageY=t.pageY),n.target||(n.target=t.target),n.which===e&&(n.which=n.button),n.preventDefault||(n.preventDefault=t.preventDefault),n.stopPropagation||(n.stopPropagation=t.stopPropagation),r.call(this,n)})},Hammer.Instance.prototype.on=function(e,n){return t(this.element).on(e,n)},Hammer.Instance.prototype.off=function(e,n){return t(this.element).off(e,n)},Hammer.Instance.prototype.trigger=function(e,n){var i=t(this.element);return i.has(n.target).length&&(i=t(n.target)),i.trigger({type:e,gesture:n})},t.fn.hammer=function(e){return this.each(function(){var n=t(this),i=n.data("hammer");i?i&&e&&Hammer.utils.extend(i.options,e):n.data("hammer",new Hammer(this,e||{}))})})}(window.jQuery||window.Zepto);
//
// framework.js - Sitewide JavaScript for Headers/Footers
//
// $Author: suchan $
// $Date: 2012-10-26 12:45:41 -0400 (Fri, 26 Oct 2012) $
// $Revision: 132348 $
//

(function($){

var Framework = {
   init: function(){
       Framework.supernav();
       Framework.mainsearch();
       Framework.superfooter();
   },
   
   supernav: function(){

       if (/hbs\.edu\/doctoral\//.test(document.location.href)) {
          $(".universal-header-v3 .nav-tabs #header-nav-doctoral").toggleClass('active inherit-bg inherit-color-onhover');
       } else if (/hbs\.edu\/mba\//.test(document.location.href)) {
          $(".universal-header-v3 .nav-tabs #header-nav-mba").toggleClass('active inherit-bg inherit-color-onhover');
       } else if (/hbs\.edu\/about\//.test(document.location.href)) {
          $(".universal-header-v3 .nav-tabs #header-nav-about").toggleClass('active inherit-bg inherit-color-onhover');
       } else if (/hbs\.edu\/news\//.test(document.location.href)) {
          $(".universal-header-v3 .nav-tabs #header-nav-about").toggleClass('active inherit-bg inherit-color-onhover');
       } else if (/hbs\.edu\/faculty\//.test(document.location.href)) {
          $(".universal-header-v3 .nav-tabs #header-nav-faculty").toggleClass('active inherit-bg inherit-color-onhover');
       } else if (/exed\.hbs\.edu\//.test(document.location.href)) {
          $(".universal-header-v3 .nav-tabs #header-nav-ee").toggleClass('active inherit-bg inherit-color-onhover');
       } else if (/alumni/.test(document.location.hostname)) {
          $(".universal-header-v3 .nav-tabs #header-nav-alumni").toggleClass('active inherit-bg inherit-color-onhover');
       }

       $(".universal-banner .toggle-button").click(function(){
          window.setTimeout(function(){
              $(".universal-site-search-query").each(function(){
                 this.selectionStart = this.selectionEnd = this.value.length;
              })
          },500);
       });

       $("#supernav-sitemap,.supernav-sitemap-trigger").click(function(){
          $("#supernav .sitemap").slideToggle(400);
          $("#supernav-sitemap").toggleClass("on");
          if (window.analytics && !window.sitemapEventSent)  {
                analytics.event("sitemap");
                window.sitemapEventSent = 1;
          }
          return false;
       }).attr('href','#');

       $("#supernav .close a").click(function(){
          $("#supernav .sitemap").slideToggle(400);
          $("#supernav-sitemap").toggleClass("on");
          return false;
       });
   },
      
   mainsearch: function() {
      var prompt = 'SEARCH';
      if ($("#search_text").attr('data-placeholder')) { prompt = $("#search_text").attr('data-placeholder') }
      $("#search_text").focus(function(){
            if ($(this).val() == prompt) { $(this).val('') }
      });
      // new
      $(".universal-site-search-query").keypress(function (e) {
          var code = (e.keyCode ? e.keyCode : e.which);
          if (code === 13) { //Enter keycode                        
              $("#aspnetForm").submit(function(){return false});
              $(".universal-site-search-button").click();
          }
      });
      // legacy
      $('#search_text').keypress(function(e) { 
          if(e.which == 13) {
             $(this).blur();
             $('#search_submit').click();
             return false;
          }
          else{
             return true;
          }
      });

      $("#search_submit,.universal-site-search-button").click(function(){
          var val = '';
          $("#search_text,.universal-site-search-query").filter(':visible').each(function(){
              val = val || $(this).val();
          });
          if (val != prompt && val != '') {
             var url = $("meta[name=HBSSearchUrl]").attr('content');
             if (url) {
                var subset = $("meta[name=HBSSearchSubset]").attr('content');
                if (subset) {
                    subset = 'sub='+subset+'&';
                } else {
                    subset = ''
                }
                document.location.href = url +"?"+subset+"q=" + encodeURIComponent(val);
             } else {
                url = "http://search.hbs.edu:8765/";
                var subset = $("meta[name=HBSSearchSubset]").attr('content');
                if (subset) {
                    subset = 'sub='+subset+'&';
                } else {
                    subset = ''
                }
                var theme = $("meta[name=HBSSearchTheme]").attr('content');
                if (theme) {
                    theme = theme + '/'
                } else {
                    theme = ''
                }
                document.location.href = url + theme+"?"+subset+"qt=" + encodeURIComponent(val);
            }
          }
          return false;
      });

      $(".mobile-navbar-search").each(function(){
             var subset = $("meta[name=HBSSearchSubset]").attr('content');
             if (subset) {
                $(this).append('<input type="hidden" name="subset" value="'+subset+'"/>');
             } 
      })

      $("meta[name=HBSSearchSuggestUrl]").eq(0).each(function(){
          var url = $(this).attr('content');
          var searchurl = $("meta[name=HBSSearchUrl]").attr('content');
          $(".universal-site-search-query").each(function(){
             $(this).wrap('<div class="typeahead-container" data-typeahead-prefetch="'+url+'?_autocomplete=1&step=9999"></div>');
             $(document).trigger('framework.domupdate');
             $(this).parent().on('select',function(e,data){
                 document.location.href = framework.URI(searchurl).search({'q':data.val}).toString()
             })
          })
          


          $(".universal-site-search-query").on('keyup',function(){
             console.info($(this).val())
             if ($(this).val()){
               $(".slider-container").addClass('slider-backdrop-active')
             } else {
               $(".slider-container").removeClass('slider-backdrop-active')
             }
          }).blur(function(){
               $(".slider-container").removeClass('slider-backdrop-active')
          })

      })

   },

   mobilesearch: function(){
       
   },
       
   superfooter: function(){

           // inherit color       
           var match = false;
           $("div[class*='-inherit']").eq(0).each(function(){
              /([a-z]+-inherit)/.test(this.className);
              var color = RegExp.$1
              match = true;
              $(".universal-footer-v3,.universal-header-v3").addClass(color);
           })
           if (!match) $(".universal-footer-v3,.universal-header-v3").addClass('hbsred-inherit');


          // inject site-footer into the superfooter
          var footer = $("#site-footer #info").html() || $("#site-footer").html();
          $("#site-footer").remove();          
          $("#superfooter .infobar .inner").append(footer);
          
          function toggleopen(){
             
             $("#superfooter .selector").not('.opened').each(function(){
                $("#superfooter .icon-footer-expand").removeClass("icon-footer-expand").addClass("icon-footer-collapse")
                $("#superfooter .infobar").slideDown(150,function(){
                    $("#superfooter .selector").toggleClass("opened");
                });
             });
          }

          function toggleclose(){
                closeAll();
                
                $("#superfooter .selector.opened").each(function(){
                   $("#superfooter .icon-footer-collapse").removeClass("icon-footer-collapse").addClass("icon-footer-expand")
                   $(".footerspace").slideUp(150);
                   $("#superfooter .infobar").slideToggle(150,function(){
                      $("#superfooter .selector").toggleClass("opened");
                   });
                });
          }

          // opening the infobar with click
                
          $("#superfooter .selector").click(function(){
             toggleopen();
             if (window.analytics && !window.footerOpenEventSent)  {
                analytics.event("footer");
                window.footerOpenEventSent = 1;
             }
          });   
                
          $("#superfooter").click(function(){
             toggleclose();
          });   
                
          // Social Icons
               
          $("#superfooter").click(function(event){event.stopPropagation();})


          function toggleOverlay(li) {
              $("li:last",li).addClass("last");
              $(".overlay", li).slideToggle(function(){
                  $(this).toggleClass("closed");                  
              });     
              
              $("a.close",li).remove();
              $(".overlay",li).prepend('<a href="#" class="close"><span class="icon-square-close-micro"></span></a>');
              $("a.close",li).click(function(){
                 closeAll();
                 return false;
              })
          }
             
          function closeAll() { 
               $(".overlay:not(.closed)").slideToggle(function(){
                  $(this).toggleClass("closed");
               }); 
               $(".overlay.closed").hide();
          }
              
          $("#superfooter .opens-overlay-popup").addClass("opens-overlay");

          $("#superfooter .opens-overlay>a").click(function(event){
               closeAll();
               var $p = $(this).parent();
               if ($(">div,>ul",$p).hasClass("closed")) { 
                    toggleOverlay($p);
               }
               event.stopPropagation();
               return false;
          });
                
          
    }

}


$(window).on("load", function(){Framework.init()}); // make sure this happens last for the mobile flyout search box


})(jQuery);


/**
* Functions extracted from the core.js library, these are stored in framework.js so they can be changed globally.
*
*
**/ 

(function($){

var GlobalCore = {

    inSharePointEditModeCache: null,
    inSharePointEditMode: function(){
      if (GlobalCore.inSharePointEditModeCache == null) {
         GlobalCore.inSharePointEditModeCache = $(".ms-formfieldlabel").length > 0;
      }
      return GlobalCore.inSharePointEditModeCache;
    },
    
    add_link_class: function(a,options) {
        $a = $(a);

        //add to prevent double event bindings
        $a.data("linkClassAdded",true);

        var ext = false;
        var pdf = false;
        var href = String(a.href);
        var hrefAttr = $a.attr("href");
        var hrefText = $a.text().trim();
        var endsWithPDF = /\(pdf\)$/i.test(hrefText);
    
        if (href && href.indexOf('mailto') == -1) {
            //with exception of 1)PDFs 2)clubhub.hbs.org and 3)hbs.planyourlegacy.org, all non hbs.edu links are to open in a new tab.

            if (hrefAttr == "#" || href.indexOf('hbs.edu') > -1 || 
                href.indexOf('hbs.org') > -1 || 
                href.indexOf('service-now.com') > -1 || 
                href.indexOf('hbsstg.org') > -1 ||
                href.indexOf('localhost') > -1 ||
                href.indexOf('force.com') > -1 ||
                href.indexOf('hbscloud.org') > -1 ||
                href.indexOf('amazonaws.com') > -1 ||
                href.indexOf('hbs.planyourlegacy.org') > -1 || 
                href.indexOf('javascript:') > -1){
                ext = false;
            } else {
                ext = true;
            }
            if ( href.indexOf('.pdf') > -1 ) {
                ext = false;
                pdf = true;
             }
        }
        
        if ($a.hasClass('noext')) {ext = false;}
        if (($a.attr('class') || '').indexOf('widget-video') > -1) {ext = false;}

        if (($a.hasClass('nopdf')) || ($a.hasClass('btn-arrow'))) {pdf = false;}

    if((options.v2) && (endsWithPDF)) { pdf = false;}

        // if there are any images inside the a tag and marked as ext
        if (ext && ($a.children("img").length > 0) && ($a.attr("href") != "#")){    
            ext = false;
            $a.addClass('ext-no-icon');
        }
        // if there are any images inside the a tag and marked as ext, if text already ends with "(pdf")        
        if (pdf && ($a.children("img").length > 0)&&($a.attr("href") != "#")){    
            pdf = false;
            $a.addClass('ext-no-icon');
        }
      
    if (ext) $a.addClass('ext');
        if (pdf) $a.addClass('pdf');
    },
    
    std_link: function(a,options) {

        if( GlobalCore.inSharePointEditMode() ) return;
    
        if( $(a).data("linkClassAdded") == true ) return;

        var originalHtml = a.outerHTML;
        
        // fix the sharepoint deployment bug
        if (document.location.hostname === 'www.hbs.edu' && a.hostname && a.hostname === 'prod.hbs.edu') a.hostname = 'www.hbs.edu';

        var defaults = {
           noIcons: false,
           v2: false
        };

        options = $.extend(defaults,options)
        GlobalCore.add_link_class(a, options);
        $a = $(a);

        $a.on('reset',function(){
          $(this).replaceWith(originalHtml);
        })

        //add code to open in a new window
        if (($a.hasClass("ext")||($a.hasClass("pdf"))||($a.hasClass("ext-no-icon")))) {
            if(!$(a).parent().hasClass("opens-overlay")){ //without this, clicking on a footer's social media icon opens up in a new tab
                if (!a.target) {
                    a.target = "_blank";
                    $a.attr("rel", "noopener noreferrer");
                }
            }
        }
    
  //  if(options.v2){
      //append text (pdf) for .pdf links
      if ($a.hasClass('pdf')) {
         if((!options.noIcons) && (!$a.hasClass('no-append')) && $a.text().indexOf('(pdf)') === -1){ //skip if unwanted & (pdf) doesn't exist
          $a.append(" <span class='pdf-append'>(pdf)</span>");
        } 
      }
    //}
    //else{
      //hover effect for .pdf links
      if($("#pdfHover").length < 1){
        $("body").append($('<div id="pdfHover" aria-hidden="true"><span class="pdf-text">PDF</span><span class="arrow-down"> </span></div>'));
      }
      if ($a.hasClass('pdf') || $a.hasClass('protected')) {
         if((!options.noIcons) && (!$a.hasClass('ext-no-icon')) && (!$a.hasClass('no-pdf-hover'))){    //skip if unwanted
          
          $(a).hover(
            function(e){
              if (!$(".ua-desktop").length) return;

              var x = e.pageX;
              var y = e.pageY;
              var $a = $(this);
              if (!$a.hasClass('pdf') && !$a.hasClass('protected')) return;
              
              //get the y distance of the link 
              var $t = $(e.target);
              var top = Math.ceil($t.offset().top);
              var cursorDistance = y - top;
      
              // get lineHeight
              $t.prepend('<span>I</span>');
              var measure = $t.find('span').eq(0);
              var lineHeight = measure.height();
              measure.remove();
      
              //Supports up to 2 lines only. Anything beyond, hover icon appears at line 2.
              var lines = 0;
              if (cursorDistance >= lineHeight) {
                lines = 1
              } 

              if ($a.hasClass('protected')) {
                 $("#pdfHover .pdf-text").html("LOGIN&nbsp;REQUIRED");
                 $("#pdfHover").addClass("protected");
              } else {
                 $("#pdfHover").removeClass("protected");
                 $("#pdfHover .pdf-text").html("PDF");
              }

              $("#pdfHover").css("top", top + (lines * lineHeight)-33);
              $("#pdfHover").css("left", x-20);
            },
            function(){
              $("#pdfHover").css("top", "-50px");
              $("#pdfHover").css("left", "-50px");
          });
        }
      }
    
    
    //}
        
    }
}



window.GlobalCore = GlobalCore;

})(jQuery);

/* ----------------------------------------------------
 *
 * Load Query Parameters
 *
 * ----------------------------------------------------
 */

window.query = {};
window.location.href.replace(
    new RegExp("([^?=&]+)(=([^&]*))?", "g"),
    function($0, $1, $2, $3) { if ($3) window.query[$1] = $3;}
);

// sharepoint bug
var removeAllStatus = function(){};

/* ----------------------------------------------------
 *
 * for browsers that don't support logging
 *
 * ----------------------------------------------------
*/

// Console-polyfill. MIT license.
// https://github.com/paulmillr/console-polyfill
// Make it safe to do console.log() always.
(function(global) {
  'use strict';
  global.console = global.console || {};
  var con = global.console;
  var prop, method;
  var empty = {};
  var dummy = function() {};
  var properties = 'memory'.split(',');
  var methods = ('assert,clear,count,debug,dir,dirxml,error,exception,group,' +
     'groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,' +
     'show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn').split(',');
  while (prop = properties.pop()) if (!con[prop]) con[prop] = empty;
  while (method = methods.pop()) if (!con[method]) con[method] = dummy;
})(typeof window === 'undefined' ? this : window);
// Using `this` for web workers while maintaining compatibility with browser
// targeted script loaders such as Browserify or Webpack where the only way to
// get to the global object is via `window`.














(function() {
    var lastTime = 0; 
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());
  

/*!
 * Copyright (c) Christopher Keefer, 2016.
 * jquery-ajax-localstorage-cache: V1.0.1.
 * This file is generated by grunt - do not edit directly.
 * Alter source files as needed, then run `grunt` in project directory.
 * Compiled: 2016-03-26 
 */


!function(a,b){var c=function(a){var b=a.url.replace(/jQuery.*/,"");return a.cache===!1&&(b=b.replace(/([?&])_=[^&]*/,"")),a.cacheKey||b+a.type+(a.data||"")},d=function(a){if(!a)return!1;if(a===!0)return b.localStorage;if("object"==typeof a&&"getItem"in a&&"removeItem"in a&&"setItem"in a)return a;throw new TypeError("localCache must either be a boolean value, or an object which implements the Storage interface.")},e=function(a,b){a.removeItem(b),a.removeItem(b+"cachettl"),a.removeItem(b+"dataType")};a.ajaxPrefilter(function(a){var b,f,g=d(a.localCache),h=a.cacheTTL||5,i=c(a),j=a.isCacheValid;g&&(b=g.getItem(i+"cachettl"),j&&"function"==typeof j&&!j()&&(e(g,i),b=0),b&&b<+new Date&&(e(g,i),b=0),f=g.getItem(i),f||(a.success&&(a.realsuccess=a.success),a.success=function(b,c,d){var f=b,j=this.dataType||d.getResponseHeader("Content-Type");-1!==j.toLowerCase().indexOf("json")&&(f=JSON.stringify(b));try{g.setItem(i,f),g.setItem(i+"cachettl",+new Date+36e5*h),g.setItem(i+"dataType",j)}catch(k){e(g,i),console.log("Cache Error:"+k,i,f)}a.realsuccess&&a.realsuccess(b,c,d)}))}),a.ajaxTransport("+*",function(a){if(a.localCache){var b=c(a),e=d(a.localCache),f=a.dataType||e.getItem(b+"dataType")||"text",g=e?e.getItem(b):!1;if(g)return-1!==f.toLowerCase().indexOf("json")&&(g=JSON.parse(g)),{send:function(a,b){var c={};c[f]=g,b(200,"success",c,"")},abort:function(){console.log("Aborted ajax transport for json cache.")}}}})}(jQuery,window);


if (typeof jQuery.fn.on === 'function') { // protect against old jQuery libraries


/* Parsley dist/parsley.min.js build version 1.1.16 http://parsleyjs.org */
!function(d){var h=function(a){this.messages={defaultMessage:"This value seems to be invalid.",type:{email:"This value should be a valid email.",url:"This value should be a valid url.",urlstrict:"This value should be a valid url.",number:"This value should be a valid number.",digits:"This value should be digits.",dateIso:"This value should be a valid date (YYYY-MM-DD).",alphanum:"This value should be alphanumeric.",phone:"This value should be a valid phone number."},notnull:"This value should not be null.",
notblank:"This value should not be blank.",required:"This value is required.",regexp:"This value seems to be invalid.",min:"This value should be greater than or equal to %s.",max:"This value should be lower than or equal to %s.",range:"This value should be between %s and %s.",minlength:"This value is too short. It should have %s characters or more.",maxlength:"This value is too long. It should have %s characters or less.",rangelength:"This value length is invalid. It should be between %s and %s characters long.",
mincheck:"You must select at least %s choices.",maxcheck:"You must select %s choices or less.",rangecheck:"You must select between %s and %s choices.",equalto:"This value should be the same."};this.init(a)};h.prototype={constructor:h,validators:{notnull:function(a){return 0<a.length},notblank:function(a){return"string"===typeof a&&""!==a.replace(/^\s+/g,"").replace(/\s+$/g,"")},required:function(a){if("object"===typeof a){for(var b in a)if(this.required(a[b]))return!0;return!1}return this.notnull(a)&&
this.notblank(a)},type:function(a,b){var c;switch(b){case "number":c=/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/;break;case "digits":c=/^\d+$/;break;case "alphanum":c=/^\w+$/;break;case "email":c=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
break;case "url":a=/(https?|s?ftp|git)/i.test(a)?a:"http://"+a;case "urlstrict":c=/^(https?|s?ftp|git):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
break;case "dateIso":c=/^(\d{4})\D?(0[1-9]|1[0-2])\D?([12]\d|0[1-9]|3[01])$/;break;case "phone":c=/^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;break;default:return!1}return""!==a?c.test(a):!1},regexp:function(a,b,c){return RegExp(b,c.options.regexpFlag||"").test(a)},minlength:function(a,b){return a.length>=b},maxlength:function(a,b){return a.length<=b},rangelength:function(a,b){return this.minlength(a,b[0])&&this.maxlength(a,b[1])},
min:function(a,b){return Number(a)>=b},max:function(a,b){return Number(a)<=b},range:function(a,b){return a>=b[0]&&a<=b[1]},equalto:function(a,b,c){c.options.validateIfUnchanged=!0;return a===d(b).val()},remote:function(a,b,c){var f={},g={};f[c.$element.attr("name")]=a;"undefined"!==typeof c.options.remoteDatatype&&(g={dataType:c.options.remoteDatatype});var m=function(a,b){"undefined"!==typeof b&&("undefined"!==typeof c.Validator.messages.remote&&b!==c.Validator.messages.remote)&&d(c.ulError+" .remote").remove();
c.updtConstraint({name:"remote",valid:a},b);c.manageValidationResult()},n=function(a){if("object"===typeof a)return a;try{a=d.parseJSON(a)}catch(b){}return a},e=function(a){return"object"===typeof a&&null!==a?"undefined"!==typeof a.error?a.error:"undefined"!==typeof a.message?a.message:null:null};d.ajax(d.extend({},{url:b,data:f,type:c.options.remoteMethod||"GET",success:function(a){a=n(a);m(1===a||!0===a||"object"===typeof a&&null!==a&&"undefined"!==typeof a.success,e(a))},error:function(a){a=n(a);
m(!1,e(a))}},g));return null},mincheck:function(a,b){return this.minlength(a,b)},maxcheck:function(a,b){return this.maxlength(a,b)},rangecheck:function(a,b){return this.rangelength(a,b)}},init:function(a){var b=a.validators;a=a.messages;for(var c in b)this.addValidator(c,b[c]);for(c in a)this.addMessage(c,a[c])},formatMesssage:function(a,b){if("object"===typeof b){for(var c in b)a=this.formatMesssage(a,b[c]);return a}return"string"===typeof a?a.replace(/%s/i,b):""},addValidator:function(a,b){this.validators[a]=
b},addMessage:function(a,b,c){if("undefined"!==typeof c&&!0===c)this.messages.type[a]=b;else if("type"===a)for(var d in b)this.messages.type[d]=b[d];else this.messages[a]=b}};var j=function(a,b,c){this.options=b;this.Validator=new h(b);if("ParsleyFieldMultiple"===c)return this;this.init(a,c||"ParsleyField")};j.prototype={constructor:j,init:function(a,b){this.type=b;this.valid=!0;this.element=a;this.validatedOnce=!1;this.$element=d(a);this.val=this.$element.val();this.isRequired=!1;this.constraints=
{};"undefined"===typeof this.isRadioOrCheckbox&&(this.isRadioOrCheckbox=!1,this.hash=this.generateHash(),this.errorClassHandler=this.options.errors.classHandler(a,this.isRadioOrCheckbox)||this.$element);this.ulErrorManagement();this.bindHtml5Constraints();this.addConstraints();this.hasConstraints()&&this.bindValidationEvents()},setParent:function(a){this.$parent=d(a)},getParent:function(){return this.$parent},bindHtml5Constraints:function(){if(this.$element.hasClass("required")||this.$element.prop("required"))this.options.required=
!0;"undefined"!==typeof this.$element.attr("type")&&RegExp(this.$element.attr("type"),"i").test("email url number range")&&(this.options.type=this.$element.attr("type"),RegExp(this.options.type,"i").test("number range")&&(this.options.type="number","undefined"!==typeof this.$element.attr("min")&&this.$element.attr("min").length&&(this.options.min=this.$element.attr("min")),"undefined"!==typeof this.$element.attr("max")&&this.$element.attr("max").length&&(this.options.max=this.$element.attr("max"))));
"string"===typeof this.$element.attr("pattern")&&this.$element.attr("pattern").length&&(this.options.regexp=this.$element.attr("pattern"))},addConstraints:function(){for(var a in this.options){var b={};b[a]=this.options[a];this.addConstraint(b,!0)}},addConstraint:function(a,b){for(var c in a)c=c.toLowerCase(),"function"===typeof this.Validator.validators[c]&&(this.constraints[c]={name:c,requirements:a[c],valid:null},"required"===c&&(this.isRequired=!0),this.addCustomConstraintMessage(c));"undefined"===
typeof b&&this.bindValidationEvents()},updateConstraint:function(a,b){for(var c in a)this.updtConstraint({name:c,requirements:a[c],valid:null},b)},updtConstraint:function(a,b){this.constraints[a.name]=d.extend(!0,this.constraints[a.name],a);"string"===typeof b&&(this.Validator.messages[a.name]=b);this.bindValidationEvents()},removeConstraint:function(a){a=a.toLowerCase();delete this.constraints[a];"required"===a&&(this.isRequired=!1);this.hasConstraints()?this.bindValidationEvents():"ParsleyForm"===
typeof this.getParent()?this.getParent().removeItem(this.$element):this.destroy()},addCustomConstraintMessage:function(a){var b=a+("type"===a&&"undefined"!==typeof this.options[a]?this.options[a].charAt(0).toUpperCase()+this.options[a].substr(1):"")+"Message";"undefined"!==typeof this.options[b]&&this.Validator.addMessage("type"===a?this.options[a]:a,this.options[b],"type"===a)},bindValidationEvents:function(){this.valid=null;this.$element.addClass("parsley-validated");this.$element.off("."+this.type);
this.options.remote&&!/change/i.test(this.options.trigger)&&(this.options.trigger=!this.options.trigger?"change":" change");var a=(!this.options.trigger?"":this.options.trigger)+(/key/i.test(this.options.trigger)?"":" keyup");this.$element.is("select")&&(a+=/change/i.test(a)?"":" change");a=a.replace(/^\s+/g,"").replace(/\s+$/g,"");this.$element.on((a+" ").split(" ").join("."+this.type+" "),!1,d.proxy(this.eventValidation,this))},generateHash:function(){return"parsley-"+(Math.random()+"").substring(2)},
getHash:function(){return this.hash},getVal:function(){return this.$element.data("value")||this.$element.val()},eventValidation:function(a){var b=this.getVal();if("keyup"===a.type&&!/keyup/i.test(this.options.trigger)&&!this.validatedOnce||"change"===a.type&&!/change/i.test(this.options.trigger)&&!this.validatedOnce||!this.isRadioOrCheckbox&&b.length<this.options.validationMinlength&&!this.validatedOnce)return!0;this.validate()},isValid:function(){return this.validate(!1)},hasConstraints:function(){for(var a in this.constraints)return!0;
return!1},validate:function(a){var b=this.getVal(),c=null;if(!this.hasConstraints())return null;if(this.options.listeners.onFieldValidate(this.element,this)||""===b&&!this.isRequired)return this.reset(),null;if(!this.needsValidation(b))return this.valid;c=this.applyValidators();("undefined"!==typeof a?a:this.options.showErrors)&&this.manageValidationResult();return c},needsValidation:function(a){if(!this.options.validateIfUnchanged&&null!==this.valid&&this.val===a&&this.validatedOnce)return!1;this.val=
a;return this.validatedOnce=!0},applyValidators:function(){var a=null,b;for(b in this.constraints){var c=this.Validator.validators[this.constraints[b].name](this.val,this.constraints[b].requirements,this);!1===c?(a=!1,this.constraints[b].valid=a,this.options.listeners.onFieldError(this.element,this.constraints,this)):!0===c&&(this.constraints[b].valid=!0,a=!1!==a,this.options.listeners.onFieldSuccess(this.element,this.constraints,this))}return a},manageValidationResult:function(){var a=null,b;for(b in this.constraints)!1===
this.constraints[b].valid?(this.manageError(this.constraints[b]),a=!1):!0===this.constraints[b].valid&&(this.removeError(this.constraints[b].name),a=!1!==a);this.valid=a;return!0===this.valid?(this.removeErrors(),this.errorClassHandler.removeClass(this.options.errorClass).addClass(this.options.successClass),!0):!1===this.valid?(this.errorClassHandler.removeClass(this.options.successClass).addClass(this.options.errorClass),!1):a},ulErrorManagement:function(){this.ulError="#"+this.hash;this.ulTemplate=
d(this.options.errors.errorsWrapper).attr("id",this.hash).addClass("parsley-error-list")},removeError:function(a){a=this.ulError+" ."+a;var b=this;this.options.animate?d(a).fadeOut(this.options.animateDuration,function(){d(this).remove();b.ulError&&0===d(b.ulError).children().length&&b.removeErrors()}):d(a).remove();this.ulError&&0===d(this.ulError).children().length&&this.removeErrors()},addError:function(a){for(var b in a){var c=d(this.options.errors.errorElem).addClass(b);d(this.ulError).append(this.options.animate?
d(c).html(a[b]).hide().fadeIn(this.options.animateDuration):d(c).html(a[b]))}},removeErrors:function(){this.options.animate?d(this.ulError).fadeOut(this.options.animateDuration,function(){d(this).remove()}):d(this.ulError).remove()},reset:function(){this.valid=null;this.removeErrors();this.validatedOnce=!1;this.errorClassHandler.removeClass(this.options.successClass).removeClass(this.options.errorClass);for(var a in this.constraints)this.constraints[a].valid=null;return this},manageError:function(a){d(this.ulError).length||
this.manageErrorContainer();if(!("required"===a.name&&null!==this.getVal()&&0<this.getVal().length)&&(!this.isRequired||!("required"!==a.name&&(null===this.getVal()||0===this.getVal().length)))){var b=a.name,c=!1!==this.options.errorMessage?"custom-error-message":b,f={};a=!1!==this.options.errorMessage?this.options.errorMessage:"type"===a.name?this.Validator.messages[b][a.requirements]:"undefined"===typeof this.Validator.messages[b]?this.Validator.messages.defaultMessage:this.Validator.formatMesssage(this.Validator.messages[b],
a.requirements);d(this.ulError+" ."+c).length||(f[c]=a,this.addError(f))}},manageErrorContainer:function(){var a=this.options.errorContainer||this.options.errors.container(this.element,this.isRadioOrCheckbox),b=this.options.animate?this.ulTemplate.show():this.ulTemplate;"undefined"!==typeof a?d(a).append(b):!this.isRadioOrCheckbox?this.$element.after(b):this.$element.parent().after(b)},addListener:function(a){for(var b in a)this.options.listeners[b]=a[b]},destroy:function(){this.$element.removeClass("parsley-validated");
this.reset().$element.off("."+this.type).removeData(this.type)}};var l=function(a,b,c){this.initMultiple(a,b);this.inherit(a,b);this.Validator=new h(b);this.init(a,c||"ParsleyFieldMultiple")};l.prototype={constructor:l,initMultiple:function(a,b){this.element=a;this.$element=d(a);this.group=b.group||!1;this.hash=this.getName();this.siblings=this.group?'[data-group="'+this.group+'"]':'input[name="'+this.$element.attr("name")+'"]';this.isRadioOrCheckbox=!0;this.isRadio=this.$element.is("input[type=radio]");
this.isCheckbox=this.$element.is("input[type=checkbox]");this.errorClassHandler=b.errors.classHandler(a,this.isRadioOrCheckbox)||this.$element.parent()},inherit:function(a,b){var c=new j(a,b,"ParsleyFieldMultiple"),d;for(d in c)"undefined"===typeof this[d]&&(this[d]=c[d])},getName:function(){if(this.group)return"parsley-"+this.group;if("undefined"===typeof this.$element.attr("name"))throw"A radio / checkbox input must have a data-group attribute or a name to be Parsley validated !";return"parsley-"+
this.$element.attr("name").replace(/(:|\.|\[|\])/g,"")},getVal:function(){if(this.isRadio)return d(this.siblings+":checked").val()||"";if(this.isCheckbox){var a=[];d(this.siblings+":checked").each(function(){a.push(d(this).val())});return a}},bindValidationEvents:function(){this.valid=null;this.$element.addClass("parsley-validated");this.$element.off("."+this.type);var a=this,b=(!this.options.trigger?"":this.options.trigger)+(/change/i.test(this.options.trigger)?"":" change"),b=b.replace(/^\s+/g,
"").replace(/\s+$/g,"");d(this.siblings).each(function(){d(this).on(b.split(" ").join("."+a.type+" "),!1,d.proxy(a.eventValidation,a))})}};var k=function(a,b,c){this.init(a,b,c||"parsleyForm")};k.prototype={constructor:k,init:function(a,b,c){this.type=c;this.items=[];this.$element=d(a);this.options=b;var f=this;this.$element.find(b.inputs).each(function(){f.addItem(this)});this.$element.on("submit."+this.type,!1,d.proxy(this.validate,this))},addListener:function(a){for(var b in a)if(/Field/.test(b))for(var c=
0;c<this.items.length;c++)this.items[c].addListener(a);else this.options.listeners[b]=a[b]},addItem:function(a){if(d(a).is(this.options.excluded))return!1;a=d(a).parsley(this.options);a.setParent(this);this.items.push(a)},removeItem:function(a){a=d(a).parsley();for(var b=0;b<this.items.length;b++)if(this.items[b].hash===a.hash)return this.items[b].destroy(),this.items.splice(b,1),!0;return!1},validate:function(a){var b=!0;this.focusedField=!1;for(var c=0;c<this.items.length;c++)if("undefined"!==typeof this.items[c]&&
!1===this.items[c].validate()&&(b=!1,!this.focusedField&&"first"===this.options.focus||"last"===this.options.focus))this.focusedField=this.items[c].$element;this.focusedField&&!b&&this.focusedField.focus();this.options.listeners.onFormSubmit(b,a,this);return b},isValid:function(){for(var a=0;a<this.items.length;a++)if(!1===this.items[a].isValid())return!1;return!0},removeErrors:function(){for(var a=0;a<this.items.length;a++)this.items[a].parsley("reset")},destroy:function(){for(var a=0;a<this.items.length;a++)this.items[a].destroy();
this.$element.off("."+this.type).removeData(this.type)},reset:function(){for(var a=0;a<this.items.length;a++)this.items[a].reset()}};d.fn.parsley=function(a,b){function c(c,g){var e=d(c).data(g);if(!e){switch(g){case "parsleyForm":e=new k(c,f,"parsleyForm");break;case "parsleyField":e=new j(c,f,"parsleyField");break;case "parsleyFieldMultiple":e=new l(c,f,"parsleyFieldMultiple");break;default:return}d(c).data(g,e)}return"string"===typeof a&&"function"===typeof e[a]?(e=e[a](b),"undefined"!==typeof e?
e:d(c)):e}var f=d.extend(!0,{},d.fn.parsley.defaults,"undefined"!==typeof window.ParsleyConfig?window.ParsleyConfig:{},a,this.data()),g=null;d(this).is("form")?g=c(d(this),"parsleyForm"):d(this).is(f.inputs)&&!d(this).is(f.excluded)&&(g=c(d(this),!d(this).is("input[type=radio], input[type=checkbox]")?"parsleyField":"parsleyFieldMultiple"));return"function"===typeof b?b():g};d.fn.parsley.Constructor=k;d.fn.parsley.defaults={inputs:"input, textarea, select",excluded:"input[type=hidden], :disabled",
trigger:!1,animate:!0,animateDuration:300,focus:"first",validationMinlength:3,successClass:"parsley-success",errorClass:"parsley-error",errorMessage:!1,validators:{},showErrors:!0,messages:{},validateIfUnchanged:!1,errors:{classHandler:function(){},container:function(){},errorsWrapper:"<ul></ul>",errorElem:"<li></li>"},listeners:{onFieldValidate:function(){return!1},onFormSubmit:function(){},onFieldError:function(){},onFieldSuccess:function(){}}};d(window).on("load",function(){d('[data-validate="parsley"]').each(function(){d(this).parsley()})})}(window.jQuery||
window.Zepto);




}
define('jquery', function () {
    if (typeof jQuery === 'undefined')
        throw 'jQuery is not installed';
    return jQuery;
});
define('framework/smoothscroll', ['jquery'], function ($) {
    return function (a, event, isMock) {
        var href = $(a).attr('href');
        if (event.isDefaultPrevented())
            return;
        if (href.indexOf('#') != 0)
            return;
        var name = a.href.split('#')[1];
        var target = $(document.getElementById(name));
        if ($(a).attr('id') && window.analytics) {
            analytics.event($(a).attr('id'));
        }
        if (target.length == 0)
            return false;
        if (name.indexOf('xslq-logline') > -1)
            return false;
        if ($('body').hasClass('nosmooth'))
            return false;
        if ($(a).hasClass('nosmooth'))
            return false;
        target.attr('id', name + '-link');
        window.setTimeout(function () {
            target.attr('id', name);
        }, 1000);
        var targetOffset = target.offset().top;
        if (!isMock) {
            if (document.getElementById('s4-workspace')) {
                $('#s4-workspace,html,body').animate({ scrollTop: targetOffset }, 1000, 'swing', function () {
                    document.location.href = '#' + name;
                });
            } else {
                $('html,body').animate({ scrollTop: targetOffset }, 1000, 'swing', function () {
                    document.location.href = '#' + name;
                });
            }
            event.preventDefault();
        } else {
            $(a).addClass('smooth-scroll-mock');
        }
        return true;
    };
});
define('framework/tabs', ['jquery'], function ($) {
    return function (el) {
        var $el = $(el);
        if ($el.data('tabs-installed') === true)
            return;
        $el.data('tabs-installed', true);
        var toggleClass = 'inherit-bg';
        if ($(el).hasClass('active-white-bg'))
            toggleClass = 'white-bg';
        $(el).on('mouseenter', 'a', function () {
            if (!$(this).hasClass(toggleClass) && $('html').hasClass('ua-no-touch'))
                $(this).addClass('hover');
        });
        $(el).on('mouseleave', 'a', function () {
            if (!$(this).hasClass(toggleClass))
                $(this).removeClass('hover');
        });
        $(el).on('click', 'a[href^=\'#\']', function (event, skipAnalytics) {
            var clicked = this;
            var scrollContainer = $el.parents('.fade-container-active').eq(0);
            if (scrollContainer.length) {
                if ($el.is('table')) {
                    scrollContainer.find('.overflow-x').animate({ scrollLeft: $(clicked).offset().left + scrollContainer.find('.overflow-x').scrollLeft() - 60 }, 500);
                } else {
                    $el.animate({ scrollLeft: $(clicked).offset().left + $el.scrollLeft() - 40 }, 500);
                }
            }
            $('a', $(this).parents('.nav-tabs').eq(0)).each(function () {
                $(this).removeClass(toggleClass + ' hover');
                $(this).parent().removeClass('active');
                var id = this.href.split('#', 2)[1];
                $target = $('*[id=\'' + id + '\']');
                if (window.analytics && !skipAnalytics && clicked == this && $target.length)
                    analytics.event('nav-tab-' + id.toLowerCase());
                clicked == this ? $target.show() : $target.hide();
            });
            $(clicked).addClass(toggleClass).parent().addClass('active');
            $(document).trigger('framework.domupdate');
            return false;
        });
        $(el).find('li, td').eq(0).find('a').trigger('click', true);
    };
});
define('framework/choice', ['jquery'], function ($) {
    function toggle(clicked, el) {
        $(el).find('.choice-button-active').removeClass('choice-button-active');
        $(clicked).addClass('choice-button-active');
        $('a.choice-button', el).each(function () {
            $target = $(document.getElementById(this.href.split('#', 2)[1]));
            clicked == this ? $target.show() : $target.hide();
            clicked == this ? $target.addClass('choice-active') : $target.removeClass('choice-active');
        });
        $('input.choice-button:radio', el).each(function () {
            $target = $(document.getElementById(this.value.split('#', 2)[1]));
            clicked == this ? $target.show() : $target.hide();
            clicked == this ? $target.addClass('choice-active') : $target.removeClass('choice-active');
        });
        $('option.choice-button', el).each(function () {
            $target = $(document.getElementById(this.value.split('#', 2)[1]));
            clicked == this ? $target.show() : $target.hide();
            clicked == this ? $target.addClass('choice-active') : $target.removeClass('choice-active');
        });
        $(document).trigger('framework.domupdate');
        if (window.Widgets)
            Widgets.refresh();
        $(el).trigger('changed');
    }
    return function (el) {
        var $el = $(el);
        if ($el.data('choice-installed') === true)
            return;
        $el.data('choice-installed', true);
        if ($(el).is('select')) {
            $(el).on('change', function () {
                toggle($(this).find(':selected')[0], el);
            });
            toggle($(el).find(':selected')[0], el);
        }
        $(el).on('click', 'a[href^=\'#\']', function (event) {
            toggle(this, el);
            event.preventDefault();
        });
        $(el).on('change', '.choice-button:radio', function (event) {
            console.info(this, el);
            toggle(this, el);
        });
        if ($(el).find('.choice-button:radio').length) {
            $(el).find('.choice-button:checked').eq(0).trigger('change');
        } else {
            $(el).find('.choice-button').eq(0).click();
        }
    };
});
define('framework/megamenu', ['jquery'], function ($) {
    return function (el) {
        var $el = $(el);
        if ($el.data('megamenu-installed') === true)
            return;
        $el.data('megamenu-installed', true);
        $el.on('click', '.megamenu-close', function (event) {
            $('.megamenu-toggled', el).removeClass('megamenu-toggled');
            event.preventDefault();
        });
        $('body').click(function (event) {
            if (!jQuery.contains(el, event.target)) {
                $('.megamenu-toggled', el).removeClass('megamenu-toggled');
            }
        });
        var opening = false;
        $el.on('click', '.megamenu-button', function (event) {
            var item = $(this).parents('.megamenu-item').eq(0);
            if (item.hasClass('megamenu-toggled')) {
                $('.megamenu-toggled', el).removeClass('megamenu-toggled');
            } else {
                $('.megamenu-toggled', el).removeClass('megamenu-toggled');
                $(item).addClass('megamenu-toggled');
            }
            event.preventDefault();
        });
    };
});
define('framework/links', ['jquery'], function ($) {
    return function (el) {
        $('a', el).each(function () {
            if (this.href && String(this.href).indexOf('twitter.com/intent') > -1)
                return;
            if ($(el).hasClass('link-controller-v2')) {
                var option = { v2: true };
                GlobalCore.std_link(this, option);
            } else {
                GlobalCore.std_link(this);
            }
        });
    };
});
define('framework/slideshow', ['jquery'], function ($) {
    function renderSlideshowNav(el, images) {
        if (images.length == 0)
            return;
        var h = '<ul class="slideshow-nav mobile-hidden">';
        h += '<li><a href="#" class="prev" role="button"><span aria-hidden="true" class="icon-circle-arrow-left"></span></a></li>';
        h += '<li><a href="#" class="next" role="button"><span aria-hidden="true" class="icon-circle-arrow-right"></span></a></li>';
        if ($(el).hasClass('dark')) {
            h = h.replace('icon-circle-arrow-left', 'icon-circle-arrow-left-white');
            h = h.replace('icon-circle-arrow-right', 'icon-circle-arrow-right-white');
        }
        h += '</ul>';
        $('.slideshow-controls', el).append(h);
        $('.slideshow-nav span', el).hover(function () {
            if ($(this).hasClass('fade')) {
            } else if (this.className.indexOf('left-white') > -1) {
                this.className = 'icon-circle-arrow-left-inverted inherit-bg';
            } else if (this.className.indexOf('left') > -1 && $(el).hasClass('light')) {
                this.className = 'icon-circle-arrow-left-white';
            } else if (this.className.indexOf('left') > -1) {
                this.className = 'icon-circle-arrow-left-white-inverted inherit-bg';
            } else if (this.className.indexOf('right-white') > -1) {
                this.className = 'icon-circle-arrow-right-inverted inherit-bg';
            } else if (this.className.indexOf('right') > -1 && $(el).hasClass('light')) {
                this.className = 'icon-circle-arrow-right-white';
            } else if (this.className.indexOf('right') > -1) {
                this.className = 'icon-circle-arrow-right-white-inverted inherit-bg';
            }
        }, function () {
            if ($(this).hasClass('fade')) {
            } else if (this.className.indexOf('left-inverted') > -1) {
                this.className = 'icon-circle-arrow-left-white';
            } else if (this.className.indexOf('left') > -1) {
                this.className = 'icon-circle-arrow-left';
            } else if (this.className.indexOf('right-inverted') > -1) {
                this.className = 'icon-circle-arrow-right-white';
            } else if (this.className.indexOf('right') > -1) {
                this.className = 'icon-circle-arrow-right';
            }
        });
        $('.slideshow-nav .next,.slideshow-nav .prev', el).click(function (event) {
            event.preventDefault();
            if ($(this).hasClass('disabled'))
                return;
            if ($(this).hasClass('next')) {
                $('.slideshow-thumbnails .active', el).next().find('a').click();
            } else {
                $('.slideshow-thumbnails .active', el).prev().find('a').click();
            }
        });
    }
    function renderSlideshowViewport(el, images) {
        var img = images[0].src;
        var h = '<div class="slideshow-viewport mobile-hidden"><img src="' + img + '" class="fluid"/></div><div class="slideshow-controls mobile-hidden"></div>';
        $(el).append(h);
    }
    function renderSlideshowThumbnails(el, images) {
        var $controls = $('.slideshow-controls', el);
        var h = '<div class="slideshow-thumbnails-viewport"><ul class="slideshow-thumbnails">';
        images.each(function () {
            var thumb = $(this).parent().find('img.thumbnail').eq(0).attr('src') || this.src;
            var src = this.src;
            h += '<li><a href="#" class="stroke2 inherit-border-color-onhover"><img src="' + thumb + '" width="56" height="52" data-src="' + src + '"/></a></li>';
        });
        if ($(el).hasClass('dark')) {
            h = h.replace(/stroke2 /g, 'white-stroke2 ');
        }
        h += '</ul></div>';
        $controls.append(h);
        if (images.filter('[title]').length > 0) {
            var c = '<div class="slideshow-caption nu"></div>';
            var fullimg = $('.slideshow-images img:not(.thumbnail)', el).eq(0);
            if (fullimg && fullimg.attr('title')) {
                $('.slideshow-caption').html(fullimg.attr('title'));
            }
            $controls.append(c);
            $controls.addClass('captioned');
        }
        $('.slideshow-thumbnails a', el).click(function (event) {
            var index = $('.slideshow-thumbnails a', el).index(this);
            if (index == 0) {
                if ($(el).hasClass('dark')) {
                    $('.slideshow-nav .prev', el).addClass('disabled').find('span').addClass('fade icon-circle-arrow-left-white').removeClass('icon-circle-arrow-left-white-inverted inherit-bg');
                } else {
                    $('.slideshow-nav .prev', el).addClass('disabled').find('span').addClass('fade icon-circle-arrow-left').removeClass('icon-circle-arrow-left-white-inverted inherit-bg icon-circle-arrow-left-white');
                }
            } else {
                $('.slideshow-nav .prev', el).removeClass('disabled').find('span').removeClass('fade');
            }
            if (index == images.length - 1) {
                if ($(el).hasClass('dark')) {
                    $('.slideshow-nav .next', el).addClass('disabled').find('span').addClass('fade icon-circle-arrow-right-white').removeClass('icon-circle-arrow-right-white-inverted inherit-bg');
                } else {
                    $('.slideshow-nav .next', el).addClass('disabled').find('span').addClass('fade icon-circle-arrow-right').removeClass('icon-circle-arrow-right-white-inverted icon-circle-arrow-right-white inherit-bg');
                }
            } else {
                $('.slideshow-nav .next', el).removeClass('disabled').find('span').removeClass('fade');
            }
            if (images.length > 5) {
                var w = $(this).parent().width() + 8;
                var end = w * (index - 2);
                if (end < 0)
                    end = 0;
                console.info('animating', end);
                $(el).find('.slideshow-thumbnails').stop().animate({ left: -end }, 500, 'swing');
            }
            var img = $('img', this).data('src');
            $('.slideshow-viewport img', el).attr('src', img);
            var fullimg = $('.slideshow-images img:not(.thumbnail)', el).eq(index);
            console.info('index', index, fullimg[0]);
            if (fullimg && fullimg.attr('title')) {
                $('.slideshow-caption', el).fadeOut('fast', function () {
                    $(this).html(fullimg.attr('title')).fadeIn('fast');
                });
            } else {
                $('.slideshow-caption', el).html('');
            }
            $('.slideshow-thumbnails .active', el).removeClass('active');
            $(this).parent().addClass('active');
            event.preventDefault();
            event.stopPropagation();
        });
    }
    function renderMobileCarousel(el, images) {
        if (images.length == 0)
            return;
        var h = '<div class="carousel-container mobile-visible">';
        h += '<ul class="carousel-panels">';
        images.each(function () {
            var src = $(this).attr('src');
            var caption = $(this).attr('title');
            if (caption) {
                h += '<li><img src="' + src + '" class="fluid"/><div>' + caption + '</div></li>';
            } else {
                h += '<li><img src="' + src + '" class="fluid"/></li>';
            }
        });
        h += '</ul>';
        h += '<div class="carousel-nav carousel-nav-minimal carousel-nav-centered"></div>';
        h += '</div>';
        $(el).append(h);
    }
    return function (el) {
        if ($(el).hasClass('slideshow-pattern'))
            return;
        $(el).addClass('slideshow-pattern');
        $('.slideshow-images', el).hide();
        var images = $(el).find('.slideshow-images > li > img:not(.thumbnail)');
        renderSlideshowViewport(el, images);
        renderSlideshowThumbnails(el, images);
        renderSlideshowNav(el, images);
        renderMobileCarousel(el, images);
        $('.slideshow-thumbnails a', el).eq(0).click();
    };
});
define('framework/obfuscate', ['jquery'], function ($) {
    return function (a) {
        if ($(a).data('obfuscations-installed') == true)
            return;
        $(a).data('obfuscations-installed', true);
        function reverse(text) {
            return text.split('').reverse().join('');
        }
        var email;
        if (a.href.indexOf('mailto:') > -1) {
            email = a.href.replace('mailto:', '');
        } else {
            email = a.innerHTML;
        }
        ;
        email = reverse(email);
        email = email.replace(/\+/, '@');
        email = reverse(email);
        if (a.href.indexOf('mailto') == -1) {
            a.innerHTML = email;
        }
        ;
        a.href = 'mailto:' + email;
    };
});
define('framework/expandable', ['jquery'], function ($) {
    function updateExpandableHeading($el) {
        var currentContent = $el.clone(true, true);
        if ($('html').hasClass('ua-mobile') && !$el.next().hasClass('accordionized')) {
            console.log('Mobile');
            var h = '';
            h += '<div class="expandable-headings accordionized"><div class="toggle-container">';
            h += '<button role="button" aria-label="show" href="#" class="toggle-button black eta-uc">' + $el.find('h2, h3').first().text() + ' <i class="icon24-open toggle-hide"></i><i class="icon24-close toggle-show"></i></a>';
            h += '<div class="toggle-show has-slide accordion-body">';
            currentContent.find('h2, h3').first().remove();
            h += '</div></div></div>';
            $el.addClass('original').hide();
            $newel = $(h);
            $el.after($newel);
            $newel.find('.accordion-body').append(currentContent);
            $(document).trigger('framework.domupdate');
        }
        if ($('html').hasClass('ua-tablet') || $('html').hasClass('ua-desktop')) {
            console.log('tablet or desktop');
            $el.next('.accordionized').remove();
            $el.show();
            $(document).trigger('framework.domupdate');
        }
    }
    return function (el) {
        if ($(el).data('expandable-installed') === true)
            return;
        $(el).data('expandable-installed', true);
        var $el = $(el);
        $el.find('dd').hide();
        if ($el.hasClass('plusminus')) {
            $el.find('>dt').each(function () {
                $(this).find('a:first').prepend('<span class="plus" aria-hidden="true">+</span><span class="minus" aria-hidden="true">&ndash;</span>');
                $(this).find('a:first').attr('aria-expanded', 'false');
            });
        }
        if ($el.hasClass('accordian')) {
            $el.find('>dt').each(function () {
                $(this).find('a:first').after('<span class="icon-accordian-expand"></span><span class="icon-accordian-collapse"></span>');
                $(this).find('a:first').attr('aria-expanded', 'false');
            });
        }
        if ($el.hasClass('mobile-accordion')) {
            $('.mobile-accordion-header', $el).each(function () {
                window.framework.fastClick(this);
                if ($(this).hasClass('mobile-accordion-header-plusminus')) {
                    $(this).prepend('<span class="icon-plusbox mobile-visible"></span>');
                } else {
                    $(this).prepend('<span class="icon-expand2 mobile-visible black"></span>');
                }
            });
            $el.on('click', '.mobile-accordion-header', function () {
                console.info($(this).find('mobile-visible:visible').length);
                if ($(this).find('.mobile-visible:visible').length === 0)
                    return;
                if ($(this).hasClass('mobile-accordion-header-plusminus')) {
                    $(this).find('.icon-plusbox,.icon-minusbox').toggleClass('icon-minusbox icon-plubox');
                }
                $(this).toggleClass('mobile-accordion-header-active').next('.mobile-accordion-body').slideToggle('fast');
            });
            $el.find('.mobile-accordion-header.mobile-accordion-header-active').each(function () {
                if ($(this).hasClass('mobile-accordion-header-plusminus')) {
                    $(this).find('.icon-plusbox,.icon-minusbox').toggleClass('icon-minusbox icon-plubox');
                }
                $(this).next('.mobile-accordion-body').css('display', 'block');
            });
        } else if ($el.hasClass('mobile-accordion2')) {
            $el.on('click', 'a', function (event) {
                var parent = $(this).parent();
                parent.toggleClass('active');
                var placeholder = parent.find('.mobile-accordion2-placeholder');
                if (placeholder.length == 0) {
                    var target = $(this).attr('href');
                    parent.append('<div class="mobile-accordion2-placeholder"></div>');
                    $(target).each(function () {
                        parent.find('.mobile-accordion2-placeholder').append(this);
                    });
                }
                event.preventDefault();
            });
        } else if ($el.hasClass('mobile-expandable-headings')) {
            updateExpandableHeading($el);
            $(document).bind('framework.resize', function () {
                updateExpandableHeading($el);
            });
        } else {
            $el.on('click', 'dt', function () {
                $(this).toggleClass('open').next('dd').slideToggle('fast');
                if ($(this).hasClass('open')) {
                    $(this).find('a:first').attr('aria-expanded', 'true');
                } else
                    $(this).find('a:first').attr('aria-expanded', 'false');
                if (window.Widgets)
                    window.Widgets.refresh();
                return false;
            });
            $('dt.open', $el).each(function () {
                $(this).next('dd').slideToggle('fast');
            });
        }
    };
});
!function (document, undefined) {
    var cookie = function () {
        return cookie.get.apply(cookie, arguments);
    };
    var utils = cookie.utils = {
        isArray: Array.isArray || function (value) {
            return Object.prototype.toString.call(value) === '[object Array]';
        },
        isPlainObject: function (value) {
            return !!value && Object.prototype.toString.call(value) === '[object Object]';
        },
        toArray: function (value) {
            return Array.prototype.slice.call(value);
        },
        getKeys: Object.keys || function (obj) {
            var keys = [], key = '';
            for (key in obj) {
                if (obj.hasOwnProperty(key))
                    keys.push(key);
            }
            return keys;
        },
        escape: function (value) {
            return String(value).replace(/[,;"\\=\s%]/g, function (character) {
                return encodeURIComponent(character);
            });
        },
        retrieve: function (value, fallback) {
            return value == null ? fallback : value;
        }
    };
    cookie.defaults = {};
    cookie.expiresMultiplier = 60 * 60 * 24;
    cookie.set = function (key, value, options) {
        if (utils.isPlainObject(key)) {
            for (var k in key) {
                if (key.hasOwnProperty(k))
                    this.set(k, key[k], value);
            }
        } else {
            options = utils.isPlainObject(options) ? options : { expires: options };
            var expires = options.expires !== undefined ? options.expires : this.defaults.expires || '', expiresType = typeof expires;
            if (expiresType === 'string' && expires !== '')
                expires = new Date(expires);
            else if (expiresType === 'number')
                expires = new Date(+new Date() + 1000 * this.expiresMultiplier * expires);
            if (expires !== '' && 'toGMTString' in expires)
                expires = ';expires=' + expires.toGMTString();
            var path = options.path || this.defaults.path;
            path = path ? ';path=' + path : '';
            var domain = options.domain || this.defaults.domain;
            domain = domain ? ';domain=' + domain : '';
            var secure = options.secure || this.defaults.secure ? ';secure' : '';
            document.cookie = utils.escape(key) + '=' + utils.escape(value) + expires + path + domain + secure;
        }
        return this;
    };
    cookie.remove = function (keys) {
        keys = utils.isArray(keys) ? keys : utils.toArray(arguments);
        for (var i = 0, l = keys.length; i < l; i++) {
            this.set(keys[i], '', -1);
        }
        return this;
    };
    cookie.empty = function () {
        return this.remove(utils.getKeys(this.all()));
    };
    cookie.get = function (keys, fallback) {
        fallback = fallback || undefined;
        var cookies = this.all();
        if (utils.isArray(keys)) {
            var result = {};
            for (var i = 0, l = keys.length; i < l; i++) {
                var value = keys[i];
                result[value] = utils.retrieve(cookies[value], fallback);
            }
            return result;
        } else
            return utils.retrieve(cookies[keys], fallback);
    };
    cookie.all = function () {
        if (document.cookie === '')
            return {};
        var cookies = document.cookie.split('; '), result = {};
        for (var i = 0, l = cookies.length; i < l; i++) {
            var item = cookies[i].split('=');
            if (item[0] != 'AnalyticsData') {
                result[decodeURIComponent(item[0])] = decodeURIComponent(item[1]);
            }
        }
        return result;
    };
    cookie.enabled = function () {
        if (navigator.cookieEnabled)
            return true;
        var ret = cookie.set('_', '_').get('_') === '_';
        cookie.remove('_');
        return ret;
    };
    if (typeof define === 'function' && define.amd) {
        define('framework/cookie', [], function () {
            return cookie;
        });
    } else if (typeof exports !== 'undefined') {
        exports.cookie = cookie;
    } else
        window.cookie = cookie;
}(document);
define('punycode', function () {
    window.punycode;
});
define('framework/punycode', [], function () {
    return;
});
define('IPv6', function () {
    window.IPv6;
});
define('framework/IPv6', [], function () {
    return;
});
define('SecondLevelDomains', function () {
    window.SecondLevelDomains;
});
define('framework/SecondLevelDomains', [], function () {
    return;
});
(function (q, w) {
    'object' === typeof exports ? module.exports = w(require('./punycode'), require('./IPv6'), require('./SecondLevelDomains')) : 'function' === typeof define && define.amd ? define('framework/URI', [
        './punycode',
        './IPv6',
        './SecondLevelDomains'
    ], w) : q.URI = w(q.punycode, q.IPv6, q.SecondLevelDomains, q);
}(this, function (q, w, v, p) {
    function e(a, b) {
        if (!(this instanceof e))
            return new e(a, b);
        void 0 === a && (a = 'undefined' !== typeof location ? location.href + '' : '');
        this.href(a);
        return void 0 !== b ? this.absoluteTo(b) : this;
    }
    function s(a) {
        return a.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
    }
    function y(a) {
        return void 0 === a ? 'Undefined' : String(Object.prototype.toString.call(a)).slice(8, -1);
    }
    function l(a) {
        return 'Array' === y(a);
    }
    function x(a, b) {
        var c, e;
        if (l(b)) {
            c = 0;
            for (e = b.length; c < e; c++)
                if (!x(a, b[c]))
                    return !1;
            return !0;
        }
        var f = y(b);
        c = 0;
        for (e = a.length; c < e; c++)
            if ('RegExp' === f) {
                if ('string' === typeof a[c] && a[c].match(b))
                    return !0;
            } else if (a[c] === b)
                return !0;
        return !1;
    }
    function A(a, b) {
        if (!l(a) || !l(b) || a.length !== b.length)
            return !1;
        a.sort();
        b.sort();
        for (var c = 0, e = a.length; c < e; c++)
            if (a[c] !== b[c])
                return !1;
        return !0;
    }
    function B(a) {
        return escape(a);
    }
    function z(a) {
        return encodeURIComponent(a).replace(/[!'()*]/g, B).replace(/\*/g, '%2A');
    }
    var C = p && p.URI;
    e.version = '1.13.2';
    var d = e.prototype, t = Object.prototype.hasOwnProperty;
    e._parts = function () {
        return {
            protocol: null,
            username: null,
            password: null,
            hostname: null,
            urn: null,
            port: null,
            path: null,
            query: null,
            fragment: null,
            duplicateQueryParameters: e.duplicateQueryParameters,
            escapeQuerySpace: e.escapeQuerySpace
        };
    };
    e.duplicateQueryParameters = !1;
    e.escapeQuerySpace = !0;
    e.protocol_expression = /^[a-z][a-z0-9.+-]*$/i;
    e.idn_expression = /[^a-z0-9\.-]/i;
    e.punycode_expression = /(xn--)/i;
    e.ip4_expression = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
    e.ip6_expression = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
    e.find_uri_expression = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/gi;
    e.findUri = {
        start: /\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,
        end: /[\s\r\n]|$/,
        trim: /[`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u201e\u2018\u2019]+$/
    };
    e.defaultPorts = {
        http: '80',
        https: '443',
        ftp: '21',
        gopher: '70',
        ws: '80',
        wss: '443'
    };
    e.invalid_hostname_characters = /[^a-zA-Z0-9\.-]/;
    e.domAttributes = {
        a: 'href',
        blockquote: 'cite',
        link: 'href',
        base: 'href',
        script: 'src',
        form: 'action',
        img: 'src',
        area: 'href',
        iframe: 'src',
        embed: 'src',
        source: 'src',
        track: 'src',
        input: 'src'
    };
    e.getDomAttribute = function (a) {
        if (a && a.nodeName) {
            var b = a.nodeName.toLowerCase();
            return 'input' === b && 'image' !== a.type ? void 0 : e.domAttributes[b];
        }
    };
    e.encode = z;
    e.decode = decodeURIComponent;
    e.iso8859 = function () {
        e.encode = escape;
        e.decode = unescape;
    };
    e.unicode = function () {
        e.encode = z;
        e.decode = decodeURIComponent;
    };
    e.characters = {
        pathname: {
            encode: {
                expression: /%(24|26|2B|2C|3B|3D|3A|40)/gi,
                map: {
                    '%24': '$',
                    '%26': '&',
                    '%2B': '+',
                    '%2C': ',',
                    '%3B': ';',
                    '%3D': '=',
                    '%3A': ':',
                    '%40': '@'
                }
            },
            decode: {
                expression: /[\/\?#]/g,
                map: {
                    '/': '%2F',
                    '?': '%3F',
                    '#': '%23'
                }
            }
        },
        reserved: {
            encode: {
                expression: /%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/gi,
                map: {
                    '%3A': ':',
                    '%2F': '/',
                    '%3F': '?',
                    '%23': '#',
                    '%5B': '[',
                    '%5D': ']',
                    '%40': '@',
                    '%21': '!',
                    '%24': '$',
                    '%26': '&',
                    '%27': '\'',
                    '%28': '(',
                    '%29': ')',
                    '%2A': '*',
                    '%2B': '+',
                    '%2C': ',',
                    '%3B': ';',
                    '%3D': '='
                }
            }
        }
    };
    e.encodeQuery = function (a, b) {
        var c = e.encode(a + '');
        void 0 === b && (b = e.escapeQuerySpace);
        return b ? c.replace(/%20/g, '+') : c;
    };
    e.decodeQuery = function (a, b) {
        a += '';
        void 0 === b && (b = e.escapeQuerySpace);
        try {
            return e.decode(b ? a.replace(/\+/g, '%20') : a);
        } catch (c) {
            return a;
        }
    };
    e.recodePath = function (a) {
        a = (a + '').split('/');
        for (var b = 0, c = a.length; b < c; b++)
            a[b] = e.encodePathSegment(e.decode(a[b]));
        return a.join('/');
    };
    e.decodePath = function (a) {
        a = (a + '').split('/');
        for (var b = 0, c = a.length; b < c; b++)
            a[b] = e.decodePathSegment(a[b]);
        return a.join('/');
    };
    var r = {
            encode: 'encode',
            decode: 'decode'
        }, m, u = function (a, b) {
            return function (c) {
                return e[b](c + '').replace(e.characters[a][b].expression, function (c) {
                    return e.characters[a][b].map[c];
                });
            };
        };
    for (m in r)
        e[m + 'PathSegment'] = u('pathname', r[m]);
    e.encodeReserved = u('reserved', 'encode');
    e.parse = function (a, b) {
        var c;
        b || (b = {});
        c = a.indexOf('#');
        -1 < c && (b.fragment = a.substring(c + 1) || null, a = a.substring(0, c));
        c = a.indexOf('?');
        -1 < c && (b.query = a.substring(c + 1) || null, a = a.substring(0, c));
        '//' === a.substring(0, 2) ? (b.protocol = null, a = a.substring(2), a = e.parseAuthority(a, b)) : (c = a.indexOf(':'), -1 < c && (b.protocol = a.substring(0, c) || null, b.protocol && !b.protocol.match(e.protocol_expression) ? b.protocol = void 0 : 'file' === b.protocol ? a = a.substring(c + 3) : '//' === a.substring(c + 1, c + 3) ? (a = a.substring(c + 3), a = e.parseAuthority(a, b)) : (a = a.substring(c + 1), b.urn = !0)));
        b.path = a;
        return b;
    };
    e.parseHost = function (a, b) {
        var c = a.indexOf('/'), e;
        -1 === c && (c = a.length);
        '[' === a.charAt(0) ? (e = a.indexOf(']'), b.hostname = a.substring(1, e) || null, b.port = a.substring(e + 2, c) || null, '/' === b.port && (b.port = null)) : a.indexOf(':') !== a.lastIndexOf(':') ? (b.hostname = a.substring(0, c) || null, b.port = null) : (e = a.substring(0, c).split(':'), b.hostname = e[0] || null, b.port = e[1] || null);
        b.hostname && '/' !== a.substring(c).charAt(0) && (c++, a = '/' + a);
        return a.substring(c) || '/';
    };
    e.parseAuthority = function (a, b) {
        a = e.parseUserinfo(a, b);
        return e.parseHost(a, b);
    };
    e.parseUserinfo = function (a, b) {
        var c = a.indexOf('/'), g = -1 < c ? a.lastIndexOf('@', c) : a.indexOf('@');
        -1 < g && (-1 === c || g < c) ? (c = a.substring(0, g).split(':'), b.username = c[0] ? e.decode(c[0]) : null, c.shift(), b.password = c[0] ? e.decode(c.join(':')) : null, a = a.substring(g + 1)) : (b.username = null, b.password = null);
        return a;
    };
    e.parseQuery = function (a, b) {
        if (!a)
            return {};
        a = a.replace(/&+/g, '&').replace(/^\?*&*|&+$/g, '');
        if (!a)
            return {};
        for (var c = {}, g = a.split('&'), f = g.length, d, h, n = 0; n < f; n++)
            d = g[n].split('='), h = e.decodeQuery(d.shift(), b), d = d.length ? e.decodeQuery(d.join('='), b) : null, c[h] ? ('string' === typeof c[h] && (c[h] = [c[h]]), c[h].push(d)) : c[h] = d;
        return c;
    };
    e.build = function (a) {
        var b = '';
        a.protocol && (b += a.protocol + ':');
        a.urn || !b && !a.hostname || (b += '//');
        b += e.buildAuthority(a) || '';
        'string' === typeof a.path && ('/' !== a.path.charAt(0) && 'string' === typeof a.hostname && (b += '/'), b += a.path);
        'string' === typeof a.query && a.query && (b += '?' + a.query);
        'string' === typeof a.fragment && a.fragment && (b += '#' + a.fragment);
        return b;
    };
    e.buildHost = function (a) {
        var b = '';
        if (a.hostname)
            b = e.ip6_expression.test(a.hostname) ? b + ('[' + a.hostname + ']') : b + a.hostname;
        else
            return '';
        a.port && (b += ':' + a.port);
        return b;
    };
    e.buildAuthority = function (a) {
        return e.buildUserinfo(a) + e.buildHost(a);
    };
    e.buildUserinfo = function (a) {
        var b = '';
        a.username && (b += e.encode(a.username), a.password && (b += ':' + e.encode(a.password)), b += '@');
        return b;
    };
    e.buildQuery = function (a, b, c) {
        var g = '', f, d, h, n;
        for (d in a)
            if (t.call(a, d) && d)
                if (l(a[d]))
                    for (f = {}, h = 0, n = a[d].length; h < n; h++)
                        void 0 !== a[d][h] && void 0 === f[a[d][h] + ''] && (g += '&' + e.buildQueryParameter(d, a[d][h], c), !0 !== b && (f[a[d][h] + ''] = !0));
                else
                    void 0 !== a[d] && (g += '&' + e.buildQueryParameter(d, a[d], c));
        return g.substring(1);
    };
    e.buildQueryParameter = function (a, b, c) {
        return e.encodeQuery(a, c) + (null !== b ? '=' + e.encodeQuery(b, c) : '');
    };
    e.addQuery = function (a, b, c) {
        if ('object' === typeof b)
            for (var g in b)
                t.call(b, g) && e.addQuery(a, g, b[g]);
        else if ('string' === typeof b)
            void 0 === a[b] ? a[b] = c : ('string' === typeof a[b] && (a[b] = [a[b]]), l(c) || (c = [c]), a[b] = a[b].concat(c));
        else
            throw new TypeError('URI.addQuery() accepts an object, string as the name parameter');
    };
    e.removeQuery = function (a, b, c) {
        var g;
        if (l(b))
            for (c = 0, g = b.length; c < g; c++)
                a[b[c]] = void 0;
        else if ('object' === typeof b)
            for (g in b)
                t.call(b, g) && e.removeQuery(a, g, b[g]);
        else if ('string' === typeof b)
            if (void 0 !== c)
                if (a[b] === c)
                    a[b] = void 0;
                else {
                    if (l(a[b])) {
                        g = a[b];
                        var f = {}, d, h;
                        if (l(c))
                            for (d = 0, h = c.length; d < h; d++)
                                f[c[d]] = !0;
                        else
                            f[c] = !0;
                        d = 0;
                        for (h = g.length; d < h; d++)
                            void 0 !== f[g[d]] && (g.splice(d, 1), h--, d--);
                        a[b] = g;
                    }
                }
            else
                a[b] = void 0;
        else
            throw new TypeError('URI.addQuery() accepts an object, string as the first parameter');
    };
    e.hasQuery = function (a, b, c, g) {
        if ('object' === typeof b) {
            for (var d in b)
                if (t.call(b, d) && !e.hasQuery(a, d, b[d]))
                    return !1;
            return !0;
        }
        if ('string' !== typeof b)
            throw new TypeError('URI.hasQuery() accepts an object, string as the name parameter');
        switch (y(c)) {
        case 'Undefined':
            return b in a;
        case 'Boolean':
            return a = Boolean(l(a[b]) ? a[b].length : a[b]), c === a;
        case 'Function':
            return !!c(a[b], b, a);
        case 'Array':
            return l(a[b]) ? (g ? x : A)(a[b], c) : !1;
        case 'RegExp':
            return l(a[b]) ? g ? x(a[b], c) : !1 : Boolean(a[b] && a[b].match(c));
        case 'Number':
            c = String(c);
        case 'String':
            return l(a[b]) ? g ? x(a[b], c) : !1 : a[b] === c;
        default:
            throw new TypeError('URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter');
        }
    };
    e.commonPath = function (a, b) {
        var c = Math.min(a.length, b.length), e;
        for (e = 0; e < c; e++)
            if (a.charAt(e) !== b.charAt(e)) {
                e--;
                break;
            }
        if (1 > e)
            return a.charAt(0) === b.charAt(0) && '/' === a.charAt(0) ? '/' : '';
        if ('/' !== a.charAt(e) || '/' !== b.charAt(e))
            e = a.substring(0, e).lastIndexOf('/');
        return a.substring(0, e + 1);
    };
    e.withinString = function (a, b, c) {
        c || (c = {});
        var g = c.start || e.findUri.start, d = c.end || e.findUri.end, k = c.trim || e.findUri.trim, h = /[a-z0-9-]=["']?$/i;
        for (g.lastIndex = 0;;) {
            var n = g.exec(a);
            if (!n)
                break;
            n = n.index;
            if (c.ignoreHtml) {
                var l = a.slice(Math.max(n - 3, 0), n);
                if (l && h.test(l))
                    continue;
            }
            var l = n + a.slice(n).search(d), m = a.slice(n, l).replace(k, '');
            c.ignore && c.ignore.test(m) || (l = n + m.length, m = b(m, n, l, a), a = a.slice(0, n) + m + a.slice(l), g.lastIndex = n + m.length);
        }
        g.lastIndex = 0;
        return a;
    };
    e.ensureValidHostname = function (a) {
        if (a.match(e.invalid_hostname_characters)) {
            if (!q)
                throw new TypeError('Hostname "' + a + '" contains characters other than [A-Z0-9.-] and Punycode.js is not available');
            if (q.toASCII(a).match(e.invalid_hostname_characters))
                throw new TypeError('Hostname "' + a + '" contains characters other than [A-Z0-9.-]');
        }
    };
    e.noConflict = function (a) {
        if (a)
            return a = { URI: this.noConflict() }, p.URITemplate && 'function' === typeof p.URITemplate.noConflict && (a.URITemplate = p.URITemplate.noConflict()), p.IPv6 && 'function' === typeof p.IPv6.noConflict && (a.IPv6 = p.IPv6.noConflict()), p.SecondLevelDomains && 'function' === typeof p.SecondLevelDomains.noConflict && (a.SecondLevelDomains = p.SecondLevelDomains.noConflict()), a;
        p.URI === this && (p.URI = C);
        return this;
    };
    d.build = function (a) {
        if (!0 === a)
            this._deferred_build = !0;
        else if (void 0 === a || this._deferred_build)
            this._string = e.build(this._parts), this._deferred_build = !1;
        return this;
    };
    d.clone = function () {
        return new e(this);
    };
    d.valueOf = d.toString = function () {
        return this.build(!1)._string;
    };
    r = {
        protocol: 'protocol',
        username: 'username',
        password: 'password',
        hostname: 'hostname',
        port: 'port'
    };
    u = function (a) {
        return function (b, c) {
            if (void 0 === b)
                return this._parts[a] || '';
            this._parts[a] = b || null;
            this.build(!c);
            return this;
        };
    };
    for (m in r)
        d[m] = u(r[m]);
    r = {
        query: '?',
        fragment: '#'
    };
    u = function (a, b) {
        return function (c, e) {
            if (void 0 === c)
                return this._parts[a] || '';
            null !== c && (c += '', c.charAt(0) === b && (c = c.substring(1)));
            this._parts[a] = c;
            this.build(!e);
            return this;
        };
    };
    for (m in r)
        d[m] = u(m, r[m]);
    r = {
        search: [
            '?',
            'query'
        ],
        hash: [
            '#',
            'fragment'
        ]
    };
    u = function (a, b) {
        return function (c, e) {
            var d = this[a](c, e);
            return 'string' === typeof d && d.length ? b + d : d;
        };
    };
    for (m in r)
        d[m] = u(r[m][1], r[m][0]);
    d.pathname = function (a, b) {
        if (void 0 === a || !0 === a) {
            var c = this._parts.path || (this._parts.hostname ? '/' : '');
            return a ? e.decodePath(c) : c;
        }
        this._parts.path = a ? e.recodePath(a) : '/';
        this.build(!b);
        return this;
    };
    d.path = d.pathname;
    d.href = function (a, b) {
        var c;
        if (void 0 === a)
            return this.toString();
        this._string = '';
        this._parts = e._parts();
        var g = a instanceof e, d = 'object' === typeof a && (a.hostname || a.path || a.pathname);
        a.nodeName && (d = e.getDomAttribute(a), a = a[d] || '', d = !1);
        !g && d && void 0 !== a.pathname && (a = a.toString());
        if ('string' === typeof a)
            this._parts = e.parse(a, this._parts);
        else if (g || d)
            for (c in g = g ? a._parts : a, g)
                t.call(this._parts, c) && (this._parts[c] = g[c]);
        else
            throw new TypeError('invalid input');
        this.build(!b);
        return this;
    };
    d.is = function (a) {
        var b = !1, c = !1, d = !1, f = !1, k = !1, h = !1, l = !1, m = !this._parts.urn;
        this._parts.hostname && (m = !1, c = e.ip4_expression.test(this._parts.hostname), d = e.ip6_expression.test(this._parts.hostname), b = c || d, k = (f = !b) && v && v.has(this._parts.hostname), h = f && e.idn_expression.test(this._parts.hostname), l = f && e.punycode_expression.test(this._parts.hostname));
        switch (a.toLowerCase()) {
        case 'relative':
            return m;
        case 'absolute':
            return !m;
        case 'domain':
        case 'name':
            return f;
        case 'sld':
            return k;
        case 'ip':
            return b;
        case 'ip4':
        case 'ipv4':
        case 'inet4':
            return c;
        case 'ip6':
        case 'ipv6':
        case 'inet6':
            return d;
        case 'idn':
            return h;
        case 'url':
            return !this._parts.urn;
        case 'urn':
            return !!this._parts.urn;
        case 'punycode':
            return l;
        }
        return null;
    };
    var D = d.protocol, E = d.port, F = d.hostname;
    d.protocol = function (a, b) {
        if (void 0 !== a && a && (a = a.replace(/:(\/\/)?$/, ''), !a.match(e.protocol_expression)))
            throw new TypeError('Protocol "' + a + '" contains characters other than [A-Z0-9.+-] or doesn\'t start with [A-Z]');
        return D.call(this, a, b);
    };
    d.scheme = d.protocol;
    d.port = function (a, b) {
        if (this._parts.urn)
            return void 0 === a ? '' : this;
        if (void 0 !== a && (0 === a && (a = null), a && (a += '', ':' === a.charAt(0) && (a = a.substring(1)), a.match(/[^0-9]/))))
            throw new TypeError('Port "' + a + '" contains characters other than [0-9]');
        return E.call(this, a, b);
    };
    d.hostname = function (a, b) {
        if (this._parts.urn)
            return void 0 === a ? '' : this;
        if (void 0 !== a) {
            var c = {};
            e.parseHost(a, c);
            a = c.hostname;
        }
        return F.call(this, a, b);
    };
    d.host = function (a, b) {
        if (this._parts.urn)
            return void 0 === a ? '' : this;
        if (void 0 === a)
            return this._parts.hostname ? e.buildHost(this._parts) : '';
        e.parseHost(a, this._parts);
        this.build(!b);
        return this;
    };
    d.authority = function (a, b) {
        if (this._parts.urn)
            return void 0 === a ? '' : this;
        if (void 0 === a)
            return this._parts.hostname ? e.buildAuthority(this._parts) : '';
        e.parseAuthority(a, this._parts);
        this.build(!b);
        return this;
    };
    d.userinfo = function (a, b) {
        if (this._parts.urn)
            return void 0 === a ? '' : this;
        if (void 0 === a) {
            if (!this._parts.username)
                return '';
            var c = e.buildUserinfo(this._parts);
            return c.substring(0, c.length - 1);
        }
        '@' !== a[a.length - 1] && (a += '@');
        e.parseUserinfo(a, this._parts);
        this.build(!b);
        return this;
    };
    d.resource = function (a, b) {
        var c;
        if (void 0 === a)
            return this.path() + this.search() + this.hash();
        c = e.parse(a);
        this._parts.path = c.path;
        this._parts.query = c.query;
        this._parts.fragment = c.fragment;
        this.build(!b);
        return this;
    };
    d.subdomain = function (a, b) {
        if (this._parts.urn)
            return void 0 === a ? '' : this;
        if (void 0 === a) {
            if (!this._parts.hostname || this.is('IP'))
                return '';
            var c = this._parts.hostname.length - this.domain().length - 1;
            return this._parts.hostname.substring(0, c) || '';
        }
        c = this._parts.hostname.length - this.domain().length;
        c = this._parts.hostname.substring(0, c);
        c = new RegExp('^' + s(c));
        a && '.' !== a.charAt(a.length - 1) && (a += '.');
        a && e.ensureValidHostname(a);
        this._parts.hostname = this._parts.hostname.replace(c, a);
        this.build(!b);
        return this;
    };
    d.domain = function (a, b) {
        if (this._parts.urn)
            return void 0 === a ? '' : this;
        'boolean' === typeof a && (b = a, a = void 0);
        if (void 0 === a) {
            if (!this._parts.hostname || this.is('IP'))
                return '';
            var c = this._parts.hostname.match(/\./g);
            if (c && 2 > c.length)
                return this._parts.hostname;
            c = this._parts.hostname.length - this.tld(b).length - 1;
            c = this._parts.hostname.lastIndexOf('.', c - 1) + 1;
            return this._parts.hostname.substring(c) || '';
        }
        if (!a)
            throw new TypeError('cannot set domain empty');
        e.ensureValidHostname(a);
        !this._parts.hostname || this.is('IP') ? this._parts.hostname = a : (c = new RegExp(s(this.domain()) + '$'), this._parts.hostname = this._parts.hostname.replace(c, a));
        this.build(!b);
        return this;
    };
    d.tld = function (a, b) {
        if (this._parts.urn)
            return void 0 === a ? '' : this;
        'boolean' === typeof a && (b = a, a = void 0);
        if (void 0 === a) {
            if (!this._parts.hostname || this.is('IP'))
                return '';
            var c = this._parts.hostname.lastIndexOf('.'), c = this._parts.hostname.substring(c + 1);
            return !0 !== b && v && v.list[c.toLowerCase()] ? v.get(this._parts.hostname) || c : c;
        }
        if (a)
            if (a.match(/[^a-zA-Z0-9-]/))
                if (v && v.is(a))
                    c = new RegExp(s(this.tld()) + '$'), this._parts.hostname = this._parts.hostname.replace(c, a);
                else
                    throw new TypeError('TLD "' + a + '" contains characters other than [A-Z0-9]');
            else {
                if (!this._parts.hostname || this.is('IP'))
                    throw new ReferenceError('cannot set TLD on non-domain host');
                c = new RegExp(s(this.tld()) + '$');
                this._parts.hostname = this._parts.hostname.replace(c, a);
            }
        else
            throw new TypeError('cannot set TLD empty');
        this.build(!b);
        return this;
    };
    d.directory = function (a, b) {
        if (this._parts.urn)
            return void 0 === a ? '' : this;
        if (void 0 === a || !0 === a) {
            if (!this._parts.path && !this._parts.hostname)
                return '';
            if ('/' === this._parts.path)
                return '/';
            var c = this._parts.path.length - this.filename().length - 1, c = this._parts.path.substring(0, c) || (this._parts.hostname ? '/' : '');
            return a ? e.decodePath(c) : c;
        }
        c = this._parts.path.length - this.filename().length;
        c = this._parts.path.substring(0, c);
        c = new RegExp('^' + s(c));
        this.is('relative') || (a || (a = '/'), '/' !== a.charAt(0) && (a = '/' + a));
        a && '/' !== a.charAt(a.length - 1) && (a += '/');
        a = e.recodePath(a);
        this._parts.path = this._parts.path.replace(c, a);
        this.build(!b);
        return this;
    };
    d.filename = function (a, b) {
        if (this._parts.urn)
            return void 0 === a ? '' : this;
        if (void 0 === a || !0 === a) {
            if (!this._parts.path || '/' === this._parts.path)
                return '';
            var c = this._parts.path.lastIndexOf('/'), c = this._parts.path.substring(c + 1);
            return a ? e.decodePathSegment(c) : c;
        }
        c = !1;
        '/' === a.charAt(0) && (a = a.substring(1));
        a.match(/\.?\//) && (c = !0);
        var d = new RegExp(s(this.filename()) + '$');
        a = e.recodePath(a);
        this._parts.path = this._parts.path.replace(d, a);
        c ? this.normalizePath(b) : this.build(!b);
        return this;
    };
    d.suffix = function (a, b) {
        if (this._parts.urn)
            return void 0 === a ? '' : this;
        if (void 0 === a || !0 === a) {
            if (!this._parts.path || '/' === this._parts.path)
                return '';
            var c = this.filename(), d = c.lastIndexOf('.');
            if (-1 === d)
                return '';
            c = c.substring(d + 1);
            c = /^[a-z0-9%]+$/i.test(c) ? c : '';
            return a ? e.decodePathSegment(c) : c;
        }
        '.' === a.charAt(0) && (a = a.substring(1));
        if (c = this.suffix())
            d = a ? new RegExp(s(c) + '$') : new RegExp(s('.' + c) + '$');
        else {
            if (!a)
                return this;
            this._parts.path += '.' + e.recodePath(a);
        }
        d && (a = e.recodePath(a), this._parts.path = this._parts.path.replace(d, a));
        this.build(!b);
        return this;
    };
    d.segment = function (a, b, c) {
        var e = this._parts.urn ? ':' : '/', d = this.path(), k = '/' === d.substring(0, 1), d = d.split(e);
        void 0 !== a && 'number' !== typeof a && (c = b, b = a, a = void 0);
        if (void 0 !== a && 'number' !== typeof a)
            throw Error('Bad segment "' + a + '", must be 0-based integer');
        k && d.shift();
        0 > a && (a = Math.max(d.length + a, 0));
        if (void 0 === b)
            return void 0 === a ? d : d[a];
        if (null === a || void 0 === d[a])
            if (l(b)) {
                d = [];
                a = 0;
                for (var h = b.length; a < h; a++)
                    if (b[a].length || d.length && d[d.length - 1].length)
                        d.length && !d[d.length - 1].length && d.pop(), d.push(b[a]);
            } else {
                if (b || 'string' === typeof b)
                    '' === d[d.length - 1] ? d[d.length - 1] = b : d.push(b);
            }
        else
            b || 'string' === typeof b && b.length ? d[a] = b : d.splice(a, 1);
        k && d.unshift('');
        return this.path(d.join(e), c);
    };
    d.segmentCoded = function (a, b, c) {
        var d, f;
        'number' !== typeof a && (c = b, b = a, a = void 0);
        if (void 0 === b) {
            a = this.segment(a, b, c);
            if (l(a))
                for (d = 0, f = a.length; d < f; d++)
                    a[d] = e.decode(a[d]);
            else
                a = void 0 !== a ? e.decode(a) : void 0;
            return a;
        }
        if (l(b))
            for (d = 0, f = b.length; d < f; d++)
                b[d] = e.decode(b[d]);
        else
            b = 'string' === typeof b ? e.encode(b) : b;
        return this.segment(a, b, c);
    };
    var G = d.query;
    d.query = function (a, b) {
        if (!0 === a)
            return e.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        if ('function' === typeof a) {
            var c = e.parseQuery(this._parts.query, this._parts.escapeQuerySpace), d = a.call(this, c);
            this._parts.query = e.buildQuery(d || c, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
            this.build(!b);
            return this;
        }
        return void 0 !== a && 'string' !== typeof a ? (this._parts.query = e.buildQuery(a, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), this.build(!b), this) : G.call(this, a, b);
    };
    d.setQuery = function (a, b, c) {
        var d = e.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        if ('object' === typeof a)
            for (var f in a)
                t.call(a, f) && (d[f] = a[f]);
        else if ('string' === typeof a)
            d[a] = void 0 !== b ? b : null;
        else
            throw new TypeError('URI.addQuery() accepts an object, string as the name parameter');
        this._parts.query = e.buildQuery(d, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
        'string' !== typeof a && (c = b);
        this.build(!c);
        return this;
    };
    d.addQuery = function (a, b, c) {
        var d = e.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        e.addQuery(d, a, void 0 === b ? null : b);
        this._parts.query = e.buildQuery(d, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
        'string' !== typeof a && (c = b);
        this.build(!c);
        return this;
    };
    d.removeQuery = function (a, b, c) {
        var d = e.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        e.removeQuery(d, a, b);
        this._parts.query = e.buildQuery(d, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
        'string' !== typeof a && (c = b);
        this.build(!c);
        return this;
    };
    d.hasQuery = function (a, b, c) {
        var d = e.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        return e.hasQuery(d, a, b, c);
    };
    d.setSearch = d.setQuery;
    d.addSearch = d.addQuery;
    d.removeSearch = d.removeQuery;
    d.hasSearch = d.hasQuery;
    d.normalize = function () {
        return this._parts.urn ? this.normalizeProtocol(!1).normalizeQuery(!1).normalizeFragment(!1).build() : this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build();
    };
    d.normalizeProtocol = function (a) {
        'string' === typeof this._parts.protocol && (this._parts.protocol = this._parts.protocol.toLowerCase(), this.build(!a));
        return this;
    };
    d.normalizeHostname = function (a) {
        this._parts.hostname && (this.is('IDN') && q ? this._parts.hostname = q.toASCII(this._parts.hostname) : this.is('IPv6') && w && (this._parts.hostname = w.best(this._parts.hostname)), this._parts.hostname = this._parts.hostname.toLowerCase(), this.build(!a));
        return this;
    };
    d.normalizePort = function (a) {
        'string' === typeof this._parts.protocol && this._parts.port === e.defaultPorts[this._parts.protocol] && (this._parts.port = null, this.build(!a));
        return this;
    };
    d.normalizePath = function (a) {
        if (this._parts.urn || !this._parts.path || '/' === this._parts.path)
            return this;
        var b, c = this._parts.path, d = '', f, k;
        '/' !== c.charAt(0) && (b = !0, c = '/' + c);
        c = c.replace(/(\/(\.\/)+)|(\/\.$)/g, '/').replace(/\/{2,}/g, '/');
        b && (d = c.substring(1).match(/^(\.\.\/)+/) || '') && (d = d[0]);
        for (;;) {
            f = c.indexOf('/..');
            if (-1 === f)
                break;
            else if (0 === f) {
                c = c.substring(3);
                continue;
            }
            k = c.substring(0, f).lastIndexOf('/');
            -1 === k && (k = f);
            c = c.substring(0, k) + c.substring(f + 3);
        }
        b && this.is('relative') && (c = d + c.substring(1));
        c = e.recodePath(c);
        this._parts.path = c;
        this.build(!a);
        return this;
    };
    d.normalizePathname = d.normalizePath;
    d.normalizeQuery = function (a) {
        'string' === typeof this._parts.query && (this._parts.query.length ? this.query(e.parseQuery(this._parts.query, this._parts.escapeQuerySpace)) : this._parts.query = null, this.build(!a));
        return this;
    };
    d.normalizeFragment = function (a) {
        this._parts.fragment || (this._parts.fragment = null, this.build(!a));
        return this;
    };
    d.normalizeSearch = d.normalizeQuery;
    d.normalizeHash = d.normalizeFragment;
    d.iso8859 = function () {
        var a = e.encode, b = e.decode;
        e.encode = escape;
        e.decode = decodeURIComponent;
        this.normalize();
        e.encode = a;
        e.decode = b;
        return this;
    };
    d.unicode = function () {
        var a = e.encode, b = e.decode;
        e.encode = z;
        e.decode = unescape;
        this.normalize();
        e.encode = a;
        e.decode = b;
        return this;
    };
    d.readable = function () {
        var a = this.clone();
        a.username('').password('').normalize();
        var b = '';
        a._parts.protocol && (b += a._parts.protocol + '://');
        a._parts.hostname && (a.is('punycode') && q ? (b += q.toUnicode(a._parts.hostname), a._parts.port && (b += ':' + a._parts.port)) : b += a.host());
        a._parts.hostname && a._parts.path && '/' !== a._parts.path.charAt(0) && (b += '/');
        b += a.path(!0);
        if (a._parts.query) {
            for (var c = '', d = 0, f = a._parts.query.split('&'), k = f.length; d < k; d++) {
                var h = (f[d] || '').split('='), c = c + ('&' + e.decodeQuery(h[0], this._parts.escapeQuerySpace).replace(/&/g, '%26'));
                void 0 !== h[1] && (c += '=' + e.decodeQuery(h[1], this._parts.escapeQuerySpace).replace(/&/g, '%26'));
            }
            b += '?' + c.substring(1);
        }
        return b += e.decodeQuery(a.hash(), !0);
    };
    d.absoluteTo = function (a) {
        var b = this.clone(), c = [
                'protocol',
                'username',
                'password',
                'hostname',
                'port'
            ], d, f;
        if (this._parts.urn)
            throw Error('URNs do not have any generally defined hierarchical components');
        a instanceof e || (a = new e(a));
        b._parts.protocol || (b._parts.protocol = a._parts.protocol);
        if (this._parts.hostname)
            return b;
        for (d = 0; f = c[d]; d++)
            b._parts[f] = a._parts[f];
        b._parts.path ? '..' === b._parts.path.substring(-2) && (b._parts.path += '/') : (b._parts.path = a._parts.path, b._parts.query || (b._parts.query = a._parts.query));
        '/' !== b.path().charAt(0) && (a = a.directory(), b._parts.path = (a ? a + '/' : '') + b._parts.path, b.normalizePath());
        b.build();
        return b;
    };
    d.relativeTo = function (a) {
        var b = this.clone().normalize(), c, d, f, k;
        if (b._parts.urn)
            throw Error('URNs do not have any generally defined hierarchical components');
        a = new e(a).normalize();
        c = b._parts;
        d = a._parts;
        f = b.path();
        k = a.path();
        if ('/' !== f.charAt(0))
            throw Error('URI is already relative');
        if ('/' !== k.charAt(0))
            throw Error('Cannot calculate a URI relative to another relative URI');
        c.protocol === d.protocol && (c.protocol = null);
        if (c.username === d.username && c.password === d.password && null === c.protocol && null === c.username && null === c.password && c.hostname === d.hostname && c.port === d.port)
            c.hostname = null, c.port = null;
        else
            return b.build();
        if (f === k)
            return c.path = '', b.build();
        a = e.commonPath(b.path(), a.path());
        if (!a)
            return b.build();
        d = d.path.substring(a.length).replace(/[^\/]*$/, '').replace(/.*?\//g, '../');
        c.path = d + c.path.substring(a.length);
        return b.build();
    };
    d.equals = function (a) {
        var b = this.clone();
        a = new e(a);
        var c = {}, d = {}, f = {}, k;
        b.normalize();
        a.normalize();
        if (b.toString() === a.toString())
            return !0;
        c = b.query();
        d = a.query();
        b.query('');
        a.query('');
        if (b.toString() !== a.toString() || c.length !== d.length)
            return !1;
        c = e.parseQuery(c, this._parts.escapeQuerySpace);
        d = e.parseQuery(d, this._parts.escapeQuerySpace);
        for (k in c)
            if (t.call(c, k)) {
                if (!l(c[k])) {
                    if (c[k] !== d[k])
                        return !1;
                } else if (!A(c[k], d[k]))
                    return !1;
                f[k] = !0;
            }
        for (k in d)
            if (t.call(d, k) && !f[k])
                return !1;
        return !0;
    };
    d.duplicateQueryParameters = function (a) {
        this._parts.duplicateQueryParameters = !!a;
        return this;
    };
    d.escapeQuerySpace = function (a) {
        this._parts.escapeQuerySpace = !!a;
        return this;
    };
    return e;
}));
define('framework/dialog', ['jquery'], function ($) {
    function Dialog(options) {
        this.options = options;
    }
    Dialog.prototype.render = function (options) {
        var html = '';
        if (options.id) {
            html += '<div id="' + options.id + '">';
        } else {
            html += '<div>';
        }
        html += '<div class="js-framework color-framework component-framework pattern-framework grid-framework type-framework responsive-framework">';
        html += '<div class="modal-backdrop black-bg"></div>';
        html += '<div class="modal">';
        html += '<div class="shim16" id="modal-shim"></div>';
        html += '<div class="shim18 mobile-hidden"></div>';
        var styl = '';
        styl += options.width ? 'max-width:' + options.width : '';
        html += '<div class="container mobile-container tablet-container" style="' + styl + '">';
        var cls = '';
        cls += options.backgroundColor == 'black' ? '' : 'white-bg';
        cls += options.textColor == 'white' ? 'white' : '';
        var closeColor = options.textColor == 'white' ? 'white' : 'hbsred';
        var anim = options.animation == 'slidedown' ? 'modal-slidedown' : 'modal-fadein';
        html += '   <div class="modal-dialog ' + anim + ' ' + cls + '">';
        if (options.title) {
            html += '     <div class="modal-header"> ';
            html += '          <div class="kappa-uc modal-header-text">' + options.title + '</div>';
            if (options.textColor == 'white') {
                html += '          <div class="hr white-bg"></div>';
            } else {
                html += '          <div class="hr"></div>';
            }
            html += '     </div>';
            html += '     <div class="modal-body">' + options.body + '</div>';
        } else {
            html += '     <div class="modal-header"> ';
            html += '          <div class="clear"></div>';
            html += '     </div>';
            html += '     <div class="modal-body" style="padding-top:0">' + options.body + '</div>';
        }
        if (options.buttons && $.isPlainObject(options.buttons)) {
            html += '     <div class="modal-footer" style="text-align:right"><div class="shim24"></div>';
            if (options.title)
                html += '<div class="hr"></div>';
            var num = 0;
            $.each(options.buttons, function (key, value) {
                if (num == 0) {
                    html += '       <button class="btn-submit hbsred-bg button-' + num + '" style="min-width:75px">' + key + '</button>';
                } else {
                    html += '       <button class="btn-submit silver-bg button-' + num + '" style="min-width:75px">' + key + '</button>';
                }
                num++;
            });
            html += '       <div class="shim12"></div>';
            html += '     </div>';
        } else if (options.buttons && $.isArray(options.buttons)) {
            html += '     <div class="modal-footer" style="text-align:right"><div class="shim24"></div>';
            if (options.title)
                html += '<div class="hr"></div>';
            var num = 0;
            $.each(options.buttons, function (i, obj) {
                html += '       <button class="button-' + num + ' ' + (obj['class'] || obj['className']) + '" style="min-width:75px;' + (obj.style || '') + '">' + obj.label + '</button>';
                num++;
            });
            html += '       <div class="shim12"></div>';
            html += '     </div>';
        } else {
            html += '<div class="shim24"></div>';
        }
        html += '          <button type="button" class="modal-header-close btn-unstyled ' + closeColor + ' eta" aria-label="Close" role="button">&times;</button>';
        html += '   </div>';
        html += '<div class="shim32"></div>';
        html += '</div>';
        html += '<div class="shim32"></div>';
        html += '</div>';
        html += '</div></div>';
        return html;
    };
    Dialog.prototype.open = function () {
        var self = this;
        window.topDialog = this;
        $('#framework-modal').remove();
        var options = this.options;
        var h = this.render(options);
        var h = '<div id="framework-modal">' + h + '</div>';
        $('body').append(h);
        if (typeof options.body == 'object')
            $('#framework-modal .modal-body').html(options.body);
        $('#framework-modal .modal-footer').on('click', 'button', function () {
            var key = $(this).text();
            if ($.isArray(options.buttons)) {
                $.each(options.buttons, function (i, obj) {
                    if (obj.label == key) {
                        var fn = obj.onClick;
                        if (fn)
                            fn.apply(self);
                    }
                });
            } else {
                var fn = options.buttons[key];
                if (fn)
                    fn.apply(self);
            }
        });
        $(document).off('esc.dialog').on('esc.dialog', function (e) {
            window.topDialog.close();
        });
        $('#framework-modal').on('click', '.modal-header-close', function () {
            self.close();
        });
        $('#framework-modal').on('touchmove', '.modal-backdrop', function (event) {
            event.preventDefault();
        });
        window.requestAnimationFrame(function () {
            window.requestAnimationFrame(function () {
                $('body').addClass('modal-open');
                if (options.centered)
                    self.center();
                $(document).trigger('framework.domupdate');
                if (window.Widgets)
                    Widgets.refresh();
                window.requestAnimationFrame(function () {
                    setTimeout(function () {
                        var focus = $('.modal-dialog:visible .modal-body').first().find('button:visible, a:visible, input:visible, select:visible, textarea:visible, [tabindex]:not([tabindex="-1"]:visible)').first();
                        if (focus.length == 0)
                            focus = $('button.modal-header-close:visible');
                        $(focus).focus();
                        $(focus).on('keydown', function (e) {
                            if (e.which === 9 && e.shiftKey) {
                                e.preventDefault();
                                $('button.modal-header-close:visible').focus();
                            }
                        });
                        $('button.modal-header-close').on('keydown', function (e) {
                            if (e.which === 9 && !e.shiftKey) {
                                e.preventDefault();
                                $(focus).focus();
                            }
                        });
                        if (self.openFn)
                            self.openFn();
                    }, 500);
                });
            });
        });
    };
    Dialog.prototype.center = function () {
        var winHeight = $('#framework-modal .modal').height() * 0.75;
        var dlgHeight = $('#framework-modal .modal-body').height();
        var diff = winHeight / 2 - dlgHeight / 2;
        if (diff > 0) {
            $('#modal-shim').height(diff);
        } else {
            $('#modal-shim').height(0);
        }
    }, Dialog.prototype.onOpen = function (fn) {
        this.openFn = fn;
    }, Dialog.prototype.onClose = function (fn) {
        this.closeFn = fn;
    }, Dialog.prototype.close = function () {
        var self = this;
        window.topDialog = null;
        if (this.closeFn)
            this.closeFn();
        $('body').removeClass('modal-open');
        window.setTimeout(function () {
            $('#framework-modal').remove();
            if (self.options) {
                $(self.options.caller).focus();
            }
        }, 200);
    };
    Dialog.prototype.find = function (tag) {
        return $('#framework-modal').find(tag);
    };
    return Dialog;
});
define('framework/exports', [
    'jquery',
    'framework/cookie',
    'framework/URI',
    'framework/dialog'
], function ($, cookie, URI, Dialog) {
    if ($(window).data('exports-installed') === true)
        return;
    $(window).data('exports-installed', true);
    var exports = {};
    exports.cookie = cookie;
    exports.URI = URI;
    exports.Dialog = Dialog;
    exports.progress = {
        start: function () {
            require(['https://d1gfwsbop52idw.cloudfront.net/static/shared/js/plugins/nprogress.min.js'], function (nprogress) {
                exports.progress = nprogress;
                exports.progress.start();
            });
        },
        done: function () {
        }
    };
    exports.notify = function (name, msg, severity) {
    };
    exports.notifyExeception = function (e) {
    };
    exports.debounce = function (func, threshold, execAsap) {
        var timeout;
        return function debounced() {
            var obj = this, args = arguments;
            function delayed() {
                if (!execAsap)
                    func.apply(obj, args);
                timeout = null;
            }
            if (timeout)
                clearTimeout(timeout);
            else if (execAsap)
                func.apply(obj, args);
            timeout = setTimeout(delayed, threshold || 100);
        };
    };
    exports.newGuid = function () {
        return 'Axxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : r & 3 | 8;
            return v.toString(16);
        }).toUpperCase();
    };
    exports.reload = function () {
        if (window.sneaky) {
            window.sneaky.sneak();
            location.reload();
        }
    };
    exports.scrollIntoView = function (el) {
        require(['https://d1gfwsbop52idw.cloudfront.net/static/shared/js/plugins/jquery.scrollintoview.min.js'], function () {
            $(el).eq(0).scrollintoview();
        });
    };
    exports.scrollTo = function (el) {
        var targetOffset = $(el).offset().top;
        if (document.getElementById('s4-workspace')) {
            $('#s4-workspace,html,body').animate({ scrollTop: targetOffset }, 1, 'swing', function () {
            });
        } else {
            $('html,body').animate({ scrollTop: targetOffset }, 1, 'swing', function () {
            });
        }
    };
    function NoClickDelay(el) {
        this.element = typeof el === 'object' ? el : document.getElementById(el);
        if (window.Touch)
            this.element.addEventListener('touchstart', this, false);
    }
    NoClickDelay.prototype = {
        handleEvent: function (e) {
            switch (e.type) {
            case 'touchstart':
                this.onTouchStart(e);
                break;
            case 'touchmove':
                this.onTouchMove(e);
                break;
            case 'touchend':
                this.onTouchEnd(e);
                break;
            }
        },
        onTouchStart: function (e) {
            e.preventDefault();
            this.moved = false;
            this.theTarget = document.elementFromPoint(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
            if (this.theTarget.nodeType === 3)
                this.theTarget = this.theTarget.parentNode;
            this.theTarget.className += ' pressed';
            this.element.addEventListener('touchmove', this, false);
            this.element.addEventListener('touchend', this, false);
        },
        onTouchMove: function () {
            this.moved = true;
            this.theTarget.className = this.theTarget.className.replace(/ ?pressed/gi, '');
        },
        onTouchEnd: function () {
            this.element.removeEventListener('touchmove', this, false);
            this.element.removeEventListener('touchend', this, false);
            if (!this.moved && this.theTarget) {
                this.theTarget.className = this.theTarget.className.replace(/ ?pressed/gi, '');
                var theEvent = document.createEvent('MouseEvents');
                theEvent.initEvent('click', true, true);
                this.theTarget.dispatchEvent(theEvent);
            }
            this.theTarget = undefined;
        }
    };
    exports.fastClick = function (el) {
        new NoClickDelay(el);
    };
    exports.accessibleClick = function (event) {
        if (event.type === 'click') {
            return true;
        } else if (event.type === 'keypress' || event.type === 'keyup') {
            var code = event.charCode || event.keyCode;
            if (code === 32 || code === 13) {
                return true;
            }
        } else {
            return false;
        }
    };
    function handleFirstTab(e) {
        if (e.keyCode === 9) {
            document.body.classList.add('user-is-tabbing');
            window.removeEventListener('keydown', handleFirstTab);
        }
    }
    window.addEventListener('keydown', handleFirstTab);
    window.framework = exports;
    return exports;
});
define('framework/backtotop', [
    'jquery',
    'framework/exports'
], function ($, FW) {
    return function (el) {
        if ($(el).data('backtotop-installed') == true)
            return;
        $(el).data('backtotop-installed', true);
        window.setTimeout(function () {
            var viewport = window;
            if (document.getElementById('s4-workspace')) {
                viewport = document.getElementById('s4-workspace');
            }
            if ($('body').height() - 100 > $(window).height()) {
                viewport = window;
            }
            $(viewport).scroll(FW.debounce(function () {
                if ($(this).scrollTop() > 300) {
                    if (!$(el).hasClass('active')) {
                        $(el).addClass('active fadeInUp').removeClass('fadeOutDown');
                    }
                } else if ($(el).hasClass('active')) {
                    $(el).removeClass('fadeInUp').addClass('fadeOutDown');
                    window.setTimeout(function () {
                        $(el).removeClass('active');
                    }, 500);
                }
            }, 100));
            $(el).click(function (event) {
                $(this).removeClass('paused');
                if (viewport != window) {
                    $('#s4-workspace').animate({ scrollTop: 0 }, 600);
                } else {
                    $('body,html').animate({ scrollTop: 0 }, 600);
                }
                event.preventDefault();
                $('.skipto').focus();
            });
        }, 1000);
    };
});
define('framework/dropdown', ['jquery'], function ($) {
    function reposition($el) {
        $el.find('.dropdown-anchor').toggleClass('dropdown-anchor');
        var anchor = $('<div class="dropdown-anchor"></div>');
        var menu = $el.find('.dropdown-menu3').eq(0);
        $el.find('.dropdown-toggle3').addClass('active');
        console.info('menu height', menu.outerHeight());
        if ($el.offset().top > $(window).scrollTop() + $(window).height() - menu.outerHeight() && $el.offset().top - menu.height() > 0) {
            anchor.addClass('dropdown-anchor-up');
            $el.prepend(anchor);
        } else {
            anchor.addClass('dropdown-anchor-down');
            $el.append(anchor);
        }
        if ($el.offset().left > $(window).scrollLeft() + $(window).width() - menu.outerWidth()) {
            anchor.addClass('dropdown-anchor-left');
        } else {
            anchor.addClass('dropdown-anchor-right');
        }
        console.info('final class', anchor.attr('class'));
        menu.appendTo(anchor);
    }
    function open($el, touched) {
        $('body').trigger('framework.dropdown.closeall');
        if ($el.hasClass('dropdown-container3')) {
            $el.off('reposition').on('reposition', function () {
                console.info('repositioning', $el);
                reposition($el);
            });
            $el.trigger('reposition');
        }
        if ($el.hasClass('active')) {
            close($el);
            return;
        }
        $el.find('.hover').removeClass('hover inherit-bg');
        $el.addClass('opening active').trigger('opened');
        $el.find('a.dropdown-toggle').attr('aria-expanded', 'true');
        $el.find('a.dropdown-toggle2').attr('aria-expanded', 'true');
        $el.find('a.dropdown-toggle3').attr('aria-expanded', 'true');
        $el.addClass('prevent-clicking');
        var dropdownElem = $el.find('ul.dropdown-menu');
        if (dropdownElem.length > 0) {
            var dropdownPos = dropdownElem.offset();
            var rightEdge = dropdownPos.left + dropdownElem.outerWidth();
            var browseWidth = $('body').width();
            if (rightEdge > browseWidth) {
                dropdownElem.css('width', browseWidth - dropdownPos.left - 6);
            }
            dropdownElem.find('li:first-of-type a').focus();
        }
        window.setTimeout(function () {
            $el.removeClass('prevent-clicking');
        }, 500);
        $el.find('.filtering-input').val('').trigger('change');
        ;
        if (touched) {
            window.setTimeout(function () {
                $el.removeClass('opening');
            }, 1000);
        } else {
            if ($('html').hasClass('ua-touch')) {
                window.setTimeout(function () {
                    $el.removeClass('opening');
                }, 1000);
            } else {
                $el.removeClass('opening');
            }
        }
    }
    function close($el) {
        if ($el.hasClass('opening'))
            return;
        $el.removeClass('active');
        $el.find('a.dropdown-toggle').attr('aria-expanded', 'false');
        $el.find('a.dropdown-toggle2').attr('aria-expanded', 'false');
        $el.find('a.dropdown-toggle3').attr('aria-expanded', 'false');
        $el.trigger('closed');
        $el.find('.dropdown-toggle3').removeClass('active').trigger('closed');
        ;
    }
    function bindevents($el) {
        $('.dropdown-menu a,.dropdown-menu2 a', $el).on('mouseenter', function () {
            if ($el.hasClass('opening'))
                return;
            if ($el.parents('.gold-inherit').length) {
                $el.find('.hover').removeClass('black');
            }
            $el.find('.hover').removeClass('hover inherit-bg');
            $(this).addClass('inherit-bg').addClass('hover');
            if ($el.parents('.gold-inherit').length) {
                $(this).addClass('black');
            }
        });
        $('.dropdown-menu a,.dropdown-menu2 a', $el).on('mouseleave', function () {
        });
        $('.dropdown-menu a,.dropdown-menu2 a', $el).on('click', function (event) {
            if ($el.hasClass('opening'))
                return false;
            if ($(this).is('a[href^=\'#\']')) {
                var val = $(this).text();
                $('.dropdown-toggle', $el).html(val + '<span class="icon-select"></span>');
                close($el);
                event.preventDefault();
            }
        });
        $el.on('click', '.dropdown-option', function () {
            $('.inherit-color.active', $el).removeClass('inherit-color active').addClass('white');
            $(this).addClass('inherit-color active').removeClass('white');
            $el.find('.dropdown-selected').html($(this).html());
            document.location.hash = $(this).attr('href');
            $el.trigger('change');
        });
        $el.on('click', '.dropdown-menu a', function () {
            if ($el.hasClass('prevent-clicking')) {
                return false;
            }
        });
        if ($el.hasClass('dropdown-container') || $el.hasClass('dropdown-container2')) {
            $('body').on('click', function (event) {
                if (!$(event.target).is('a')) {
                    close($el);
                }
            });
        }
        if ($el.hasClass('dropdown-container3')) {
            $('body').on('click', function (event) {
                if ($el.has(event.target).length == 0) {
                    close($el);
                }
            });
            $el.on('click', '.dropdown-close3', function (event) {
                close($el);
                event.preventDefault();
            });
        }
        $('body').on('framework.dropdown.closeall', function (event) {
            close($el);
        });
        $(document).on('esc.dropdown', function (e) {
            close($el);
        });
    }
    return function (el) {
        var $el = $(el);
        if ($el.data('dropdown-installed') == true)
            return;
        $el.data('dropdown-installed', true);
        if (!$.fn.on)
            $.fn.on = $.fn.bind;
        $('a.dropdown-toggle', $el).click(function () {
            open($el, true);
            return false;
        });
        $('a.dropdown-toggle2', $el).click(function () {
            open($el);
            return false;
        });
        $('a.dropdown-toggle3', $el).click(function () {
            if ($el.hasClass('active')) {
                close($el);
            } else {
                open($el);
            }
            return false;
        });
        if ($el.hasClass('dropdown-container')) {
            $el.on('mouseenter', function (event) {
                open($el);
            });
            $el.on('mouseleave', function () {
                close($el);
            });
            $el.find('ul.dropdown-menu li:last-child a').on('blur', function () {
                close($el);
            });
        }
        if ($el.hasClass('dropdown-container2')) {
            var w = $('.dropdown-toggle2', $el).width();
            if (w) {
                if ($('.dropdown-menu2', $el).attr('class').indexOf('dropdown-split') > -1) {
                } else {
                    $('.dropdown-menu2', $el).css('min-width', w + 12);
                }
            }
        }
        bindevents($el);
    };
});
define('framework/toggle', [
    'jquery',
    'framework/exports'
], function ($, FW) {
    function readCookie(name) {
        var nameEQ = name + '=';
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0)
                return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    function saveToggleCookie(el, save) {
        var id = $(el).attr('id');
        if (!id)
            return;
        var cookie = readCookie('fw.toggle');
        var parts = [];
        if (cookie != null)
            parts = cookie.split('&');
        var states = [];
        var found = false;
        for (var i = 0; i < parts.length; i++) {
            if (!save && parts[i] == id) {
                found = true;
            } else if (save && parts[i] == id) {
                found = true;
                states.push(id);
            } else if (parts[i]) {
                states.push(parts[i]);
            }
        }
        if (!found && save)
            states.push(id);
        document.cookie = 'fw.toggle=' + states.join('&') + '; path=/';
    }
    function loadToggleCookie(el) {
        var id = $(el).attr('id');
        if (!id)
            return;
        var cookie = readCookie('fw.toggle');
        if (cookie) {
            var parts = cookie.split('&');
            for (var i = 0; i < parts.length; i++) {
                if (parts[i] == id) {
                    return true;
                }
            }
        }
        return false;
    }
    function isClosest(obj, thisContainer) {
        var objContainer = $(obj).closest('.toggle-container')[0];
        return $.data(objContainer) == $.data(thisContainer);
    }
    return function (el) {
        if ($(el).data('toggle-installed') == true)
            return;
        $(el).data('toggle-installed', true);
        $('.toggle-show', el).hide();
        $(el).find('.toggle-button').each(function () {
        });
        $(el).bind('reset', function () {
            $(el).removeClass('toggled');
            $(el).find('input.toggle-button:checkbox').prop('checked', false);
            $('.toggle-show', el).each(function () {
                if (isClosest(this, el)) {
                    if ($(this).hasClass('has-slide')) {
                        $(this).slideUp('fast');
                    } else {
                        $(this).hide();
                    }
                }
            });
            $('.toggle-hide', el).each(function () {
                if (isClosest(this, el)) {
                    $(this).show();
                }
            });
        });
        $(el).on('click', '.toggle-button', function (event) {
            var target = $(this).attr('href');
            if (typeof target === 'string' && target.indexOf('#') == 0)
                target = target.substring(1);
            if ($(this).hasClass('toggle-plus') || $(this).hasClass('toggle-minus')) {
                $(this).toggleClass('toggle-plus toggle-minus');
            }
            if (isClosest(this, el)) {
                $('.toggle-hide,.toggle-show,.mobile-toggle-show,.mobile-toggle-hide', el).each(function () {
                    if (isClosest(this, el)) {
                        if (!target || !$(this).attr('id') || target == $(this).attr('id')) {
                            $(this).addClass('to-toggle');
                        }
                    }
                });
                if (target) {
                    $('#' + target).addClass('to-toggle');
                }
                $('.to-toggle').each(function () {
                    if ($(this).hasClass('has-slide')) {
                        $(this).slideToggle('fast');
                    } else {
                        $(this).toggle();
                    }
                    $(this).removeClass('to-toggle');
                    $(this).parent().find('.toggle-focus:visible').focus();
                });
                $(el).toggleClass('toggled');
                var toFocus = $(this);
                if ($(this).is(':visible')) {
                    toFocus = $(this);
                } else if ($('.toggle-button:visible', el).length) {
                    toFocus = $('.toggle-button:visible', el).eq(0);
                } else {
                    toFocus = $('a:visible', el).eq(0);
                }
                toFocus.focus();
                if ($(el).hasClass('has-memory')) {
                    saveToggleCookie(el, $(el).hasClass('toggled'));
                }
                $(document).trigger('framework.domupdate');
                $(el).trigger('change');
                if ($(this).is(':checkbox')) {
                } else {
                    event.stopPropagation();
                    event.preventDefault();
                }
            }
        });
        if ($(el).hasClass('toggle-is-body-click-closed')) {
            $('body').click(function (event) {
                if (!jQuery.contains(el, event.target)) {
                    $(el).trigger('reset');
                }
            });
        }
        if ($(el).hasClass('has-memory')) {
            if (loadToggleCookie(el)) {
                $(el).toggleClass('toggled');
                $(el).find('input.toggle-button:checkbox').prop('checked', true);
                $('.toggle-hide,.toggle-show', el).each(function () {
                    if (isClosest(this, el)) {
                        $(this).toggle();
                    }
                });
            }
        }
    };
});
define('framework/plugins', ['jquery'], function ($) {
    var queues = {};
    var status = {};
    var plugins = { jqueryui: 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.0/jquery-ui.min.js' };
    return {
        ready: function (pluginName, callback) {
            if (pluginName == 'jqueryui' && window.jQuery && window.jQuery.ui) {
                callback.call();
                return;
            }
            if (typeof plugins[pluginName] == 'undefined') {
                return;
            }
            if (typeof status[pluginName] == 'undefined') {
                status[pluginName] = 'start';
                queues[pluginName] = [];
            }
            if (status[pluginName] == 'finished') {
                callback.call();
            } else {
                queues[pluginName].push(callback);
            }
            if (status[pluginName] == 'start') {
                status[pluginName] = 'loading';
                console.info('loading', plugins[pluginName]);
                $.ajax({
                    url: plugins[pluginName],
                    dataType: 'script',
                    cache: true,
                    success: function () {
                        status[pluginName] = 'finished';
                        for (var i = 0; i < queues[pluginName].length; i++) {
                            queues[pluginName][i].call();
                        }
                    }
                });
            }
        }
    };
});
define('framework/datepicker', [
    'jquery',
    'framework/plugins'
], function ($, Plugins) {
    function cleanup(dp, color) {
        if (dp.inline)
            return;
        var dpdiv;
        if (dp.dpDiv) {
            dpdiv = $(dp.dpDiv[0]);
        } else {
            dpdiv = dp;
        }
        if (color == null)
            color = '';
        var cssStyles = {
            width: '250px',
            backgroundColor: '#cecece'
        };
        dpdiv.css('z-index', '1000');
        dpdiv.addClass('component-framework color-framework type-framework').css(cssStyles).children().addClass('datepicker-pattern ' + color);
    }
    function cleanup2(dp, color) {
        var dpdiv;
        if (dp.dpDiv) {
            dpdiv = $(dp.dpDiv[0]);
        } else {
            dpdiv = dp;
        }
        if (color == null)
            color = '';
        dpdiv.children().addClass('datepicker-pattern ' + color);
    }
    function parseDate(strDate) {
        var dateParts = strDate.split('/');
        return new Date(dateParts[2], dateParts[0] - 1, dateParts[1]);
    }
    function installDatepicker(el) {
        var opts = {};
        opts.beforeShow = function (input, dp) {
            dpdiv = $(dp.dpDiv[0]);
            $(input).data('dp', dp);
            cleanup(dp);
        };
        opts.beforeShowDay = function (date) {
            var data = { date: date };
            $(el).trigger('beforeShowDay', data);
            if (data.result) {
                return data.result;
            } else {
                return [
                    true,
                    '',
                    ''
                ];
            }
        };
        opts.monthNames = 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' ');
        opts.showAnim = '';
        opts.constrainInput = true;
        opts.gotoCurrent = true;
        opts.dateFormat = 'mm/dd/yy';
        opts.showOtherMonths = true;
        opts.selectOtherMonths = true;
        if ($(el).hasClass('datepicker-cn')) {
            opts.monthNames = '1月 2月 3月 4月 5月 6月 7月 8月 9月 10月 11月 12月'.split(' ');
            opts.dayNamesMin = '一 二 三 四 五 六 日'.split(' ');
        }
        opts.onChangeMonthYear = function (year, month, dp) {
            if (year)
                $(el).trigger('changeMonthYear', {
                    year: year,
                    month: month
                });
            window.setTimeout(function () {
                cleanup(dp);
            }, 1);
        };
        opts.onSelect = function (str, dp) {
            if (str) {
                $(el).trigger('select', { date: str });
                if (typeof Event === 'function') {
                    var event = new Event('submit');
                } else {
                    var event = document.createEvent('Event');
                    event.initEvent('submit', true, true);
                }
                el.dispatchEvent(event, { date: str });
            }
            window.setTimeout(function () {
                cleanup(dp);
            }, 1);
        };
        if ($(el).attr('data-maxDate') || $('input', el).attr('data-maxDate')) {
            var d = parseDate($(el).attr('data-maxDate') || $('input', el).attr('data-maxDate'));
            if (d)
                opts.maxDate = d;
        }
        if ($(el).attr('data-minDate') || $('input', el).attr('data-minDate')) {
            var d = parseDate($(el).attr('data-minDate') || $('input', el).attr('data-minDate'));
            if (d)
                opts.minDate = d;
        }
        if ($(el).attr('data-dateFormat')) {
            opts.dateFormat = $(el).attr('data-dateFormat');
        }
        var classNames = $(el).parents('[class*=\'-inherit\']').attr('class');
        var color = 'white-inherit';
        if (/([^ ]+-inherit)/.test(classNames)) {
            color = RegExp.$1;
        }
        if ($(el).is(':input')) {
            var dp = $(el).datepicker(opts);
            dp.inline = false;
            $(el).keyup(function () {
                var dp = $(this).data('dp');
                cleanup(dp);
                window.setTimeout(function () {
                    cleanup(dp);
                }, 1);
            });
            $(el).bind('focus keydown', function () {
                cleanup($(this).data('dp'), color);
            });
        } else {
            var $el = $(el);
            $el.prepend($('<div class="datepicker-top-container"></div>'));
            $el.append($('<div class="datepicker-bottom-container"></div>'));
            if ($el.hasClass('datepicker-container-inline')) {
                var dp = $el.datepicker(opts);
                dp.inline = true;
                $(el).data('dp', dp);
                cleanup2(dp, color);
            }
            $el.on('focus', ':input', function () {
                var dp = $el.data('dp');
                if (dp && dp.find('.ui-datepicker-inline').length) {
                    return;
                }
                var sel = '.datepicker-bottom-container';
                if ($(this).offset().top > $(window).scrollTop() + $(window).height() - 220) {
                    sel = '.datepicker-top-container';
                }
                opts.defaultDate = $(this).val();
                $(this).addClass('focus');
                dp = $(sel, el).datepicker(opts);
                dp.inline = false;
                $(el).data('dp', dp);
                cleanup2(dp, color);
            });
            $(el).on('select', function (e, data) {
                if (data) {
                    var dp = $(el).data('dp');
                    if (dp.inline == false) {
                        $(':input', el).val(data.date);
                        $('.ui-datepicker', el).fadeOut(200, function () {
                            if (dp)
                                dp.datepicker('destroy');
                            $(':input', el).removeClass('focus');
                        });
                    }
                }
            });
            $('body').click(function (e) {
                dp = $el.data('dp');
                if (dp && dp.inline == false) {
                    if ($el.has(e.target).length == 0 && $(e.target).attr('class') && $(e.target).attr('class').indexOf('ui-datepicker') == -1) {
                        var dp = $(el).data('dp');
                        if (dp)
                            dp.datepicker('destroy');
                        $(':input', el).removeClass('focus');
                    }
                }
            });
            $('.link-skipdates').click(function (e) {
                e.preventDefault();
                $('body').trigger('click');
                $($(this).attr('href')).get(0).focus();
            });
            $(el).on('keyup', ':input', function () {
                var val = $(this).val();
                console.info('input change', val);
                try {
                    var date = $.datepicker.parseDate('mm/dd/yy', val);
                    console.info('new date', date);
                    var dp = $(el).data('dp');
                    if (dp)
                        $(dp).datepicker('setDate', val);
                } catch (e) {
                }
            });
        }
    }
    return function (el) {
        if ($(el).data('datepicker-installed') == true)
            return;
        $(el).data('datepicker-installed', true);
        Plugins.ready('jqueryui', function () {
            installDatepicker(el);
        });
    };
});
define('framework/carousel', [
    'jquery',
    'framework/cookie'
], function ($, cookie) {
    function renderCarouselNav(el, color, inverted) {
        var size = $(el).find('.carousel-panels > li').length;
        $(el).data('size', size);
        $(el).find('.carousel-nav').each(function () {
            var nav = $(this);
            var h = '<ul class="nav-carousel">';
            var slideTitle = $(nav).data('slide-title');
            if (slideTitle === undefined) {
                slideTitle = '';
            }
            if (color == 'white' && inverted) {
                h += '<li class="prev"><a href="#" aria-label="Previous ' + slideTitle + 'slide" role="button"><span aria-hidden="true" class="icon-circle-arrow-left-white"></span></a></li>';
            } else if (color == 'white') {
                h += '<li class="prev"><a href="#" aria-label="Previous ' + slideTitle + 'slide" role="button"><span aria-hidden="true" class="icon-circle-arrow-left"></span></a></li>';
            } else {
                h += '<li class="prev"><a href="#" aria-label="Previous ' + slideTitle + 'slide" role="button"><span aria-hidden="true" class="icon-circle-arrow-left-white-inverted black-bg icon-transition-bg-color"></span></a></li>';
            }
            for (var i = 0; i < size; i++) {
                h += '<li class="dot"><a href="#" aria-label="Slide ' + Number(i + 1) + '" role="button"><span aria-hidden="true" class="icon-dot icon-transition-color">&#8226;</span></a></li>';
            }
            if (color == 'white' && inverted) {
                h += '<li class="next desktop-visible"><a href="#" aria-label="Next ' + slideTitle + 'slide" role="button"><span aria-hidden="true" class="icon-circle-arrow-right-white"></span></a></li>';
            } else if (color == 'white') {
                h += '<li class="next desktop-visible"><a href="#" aria-label="Next ' + slideTitle + 'slide" role="button"><span aria-hidden="true" class="icon-circle-arrow-right"></span></a></li>';
            } else {
                h += '<li class="next desktop-visible"><a href="#" aria-label="Next ' + slideTitle + 'slide" role="button"><span aria-hidden="true" class="icon-circle-arrow-right-white-inverted black-bg icon-transition-bg-color"></span></a></li>';
            }
            h += '</ul>';
            if (nav.hasClass('carousel-nav-centered')) {
                h = '<table style="margin-left: auto !important;margin-right: auto !important;"><tr><td>' + h + '</td></tr></table>';
            }
            nav.html(h);
            if (nav.hasClass('carousel-nav-minimal')) {
                nav.find('.prev,.next').hide();
            }
        });
    }
    function setPanel(el, num, animate, color, inverted) {
        var size = $(el).data('size');
        $(el).data('num', num);
        var id = $(el).attr('id');
        if (id && $(el).hasClass('has-memory')) {
            cookie.set(id, num);
        }
        $(el).find('.active').removeClass('active');
        if (inverted) {
            $(el).find('.dot span').removeClass(color + ' active-' + color).addClass('white fade');
        } else {
            $(el).find('.dot span').removeClass(color + ' active-' + color).addClass('black');
        }
        if (color == 'white') {
            if (num == 0) {
                if (inverted) {
                    $(el).find('.prev').addClass('disabled').find('span').addClass('fade');
                } else {
                    $(el).find('.prev').addClass('disabled').find('span').addClass('fade').addClass('icon-circle-arrow-left').removeClass('icon-circle-arrow-left-white');
                }
            } else {
                $(el).find('.prev').removeClass('disabled').find('span').removeClass('fade');
            }
            if (num == size - 1) {
                if (inverted) {
                    $(el).find('.next').addClass('disabled').find('span').addClass('fade');
                } else {
                    $(el).find('.next').addClass('disabled').find('span').addClass('fade').addClass('icon-circle-arrow-right').removeClass('icon-circle-arrow-right-white');
                    ;
                }
            } else {
                $(el).find('.next').removeClass('disabled').find('span').removeClass('fade');
            }
        } else {
            if (num == 0) {
                $(el).find('.prev').addClass('disabled').find('span').removeClass('inherit-bg ' + color + '-bg black-bg').addClass('silver-bg');
            } else {
                var span = $(el).find('.prev').removeClass('disabled').find('span');
                if (span.hasClass(color + '-bg'))
                    span.removeClass('silver-bg').addClass(color + '-bg');
                else
                    span.removeClass('silver-bg').addClass('black-bg');
            }
            if (num == $(el).data('size') - 1) {
                $(el).find('.next').addClass('disabled').find('span').removeClass('inherit-bg ' + color + '-bg black-bg').addClass('silver-bg');
            } else {
                var span = $(el).find('.next').removeClass('disabled').find('span');
                if (span.hasClass(color + '-bg'))
                    span.removeClass('silver-bg').addClass(color + '-bg');
                else
                    span.removeClass('silver-bg').addClass('black-bg');
            }
        }
        $(el).find('.carousel-nav').each(function () {
            if (inverted) {
                $(this).find('.dot').eq(num).addClass('active').find('span').addClass(color + ' active-' + color).removeClass('black fade');
            } else {
                $(this).find('.dot').eq(num).addClass('active').find('span').addClass(color + ' active-' + color).removeClass('black fade');
            }
        });
        var w = $(el).width();
        var end = 0;
        var panels = $(el).find('.carousel-panels > li');
        for (var i = 0; i < num; i++) {
            end += panels.eq(i).width();
        }
        var speed = animate ? 500 : 0;
        $(el).data('pos', -end);
        $(el).find('.carousel-panels > li').css('max-height', 'none');
        var oldmaxheight = $(el).data('maxheight') || 0;
        var maxheight = oldmaxheight;
        var newmaxheight = $(el).find('.carousel-panels > li').eq(num).height();
        if (newmaxheight > maxheight || $('html.ua-mobile,html.ua-tablet').length)
            maxheight = newmaxheight;
        $(el).data('maxheight', maxheight);
        $(el).find('.carousel-panels > li').css('max-height', maxheight + 'px');
        $(el).find('.carousel-panels').stop().animate({ left: -end }, speed, 'swing', function () {
            $(el).find('.carousel-panels > li').slice(0, num + 2).removeClass('hidden').find('.lazy').show().trigger('appear');
        });
    }
    function resize(el) {
        var w = $(el).width();
        $(el).data('width', w);
        if (!$(el).find('.carousel-panels').hasClass('carousel-panels-fixed-width')) {
            $(el).find('.carousel-panels > li').css('width', w);
        }
    }
    function touchEvents($el) {
        var panels = $el.find('.carousel-panels');
        function handleHammer(ev) {
            ev.gesture.preventDefault();
            switch (ev.type) {
            case 'dragright':
            case 'dragleft':
                var pos = $el.data('pos') + ev.gesture.deltaX;
                var num = $el.data('num');
                var size = $el.data('size');
                if (num == 0 && pos > 0) {
                } else if (num == size - 1 && pos < 0) {
                } else {
                    panels.css({ left: pos });
                }
                break;
            case 'release':
                if (ev.gesture.deltaX < -100) {
                    $el.find('.next a').eq(0).trigger('click');
                }
                if (ev.gesture.deltaX > 100) {
                    $el.find('.prev a').eq(0).trigger('click');
                }
                break;
            }
        }
        if ('ontouchstart' in window) {
            $('img', $el).bind('dragstart', function (e) {
                return false;
            });
            panels.hammer({
                stop_browser_behavior: { touchAction: 'pan-y' },
                drag_lock_to_axis: true,
                drag_vertical: false
            }).on('release dragleft dragright', handleHammer);
        }
    }
    function shuffle(items) {
        var c = [];
        return items.each(function () {
            c.push($(this).clone(true));
        }).each(function (a, b) {
            $(b).replaceWith(c[a = Math.floor(Math.random() * c.length)]);
            c.splice(a, 1);
        });
    }
    return function (el) {
        var $el = $(el);
        if ($el.data('carousel-installed') == true)
            return;
        $el.data('carousel-installed', true);
        if ($el.hasClass('has-shuffle') && navigator.userAgent.indexOf('HeadlessChrome') == -1) {
            shuffle($el.find('.carousel-panels > li'));
        }
        var color = 'teal';
        var inverted = false;
        if ($(el).parents('.inherit-bg').length > 0 || $(el).hasClass('carousel-monotone')) {
            color = 'white';
        }
        if ($(el).hasClass('carousel-inverted')) {
            color = 'white';
            inverted = true;
        }
        renderCarouselNav(el, color, inverted);
        resize(el);
        $(window).on('load', function () {
            resize(el);
        });
        $(document).bind('framework.resize framework.domupdate', function () {
            resize(el);
            setPanel(el, $(el).data('num'), false, color, inverted);
        });
        touchEvents($el);
        var id = $el.attr('id');
        var startnum = parseInt(cookie.get(id)) || 0;
        if (startnum > $(el).data('size'))
            startnum = 0;
        $(el).data('num', startnum);
        setPanel(el, $(el).data('num'), false, color, inverted);
        $(window).on('load', function () {
            setPanel(el, $(el).data('num'), false, color, inverted);
        });
        $(el).on('click', '.nav-carousel .dot a', function (event) {
            var num = $(this).parent().parent().find('.dot a').index(this);
            setPanel(el, num, true, color, inverted);
            event.preventDefault();
        });
        $(el).on('click', '.next a', function (event) {
            if (!$(this).parent().hasClass('disabled')) {
                var num = $(el).data('num') + 1;
                setPanel(el, num, true, color, inverted);
                if (window.analytics)
                    analytics.event('carousel-arrow-next');
            }
            event.preventDefault();
        });
        $(el).on('click', '.carousel-next', function (event) {
            var num = $(el).data('num') + 1;
            setPanel(el, num, true, color, inverted);
            if (window.analytics)
                analytics.event('carousel-next');
            event.preventDefault();
        });
        $(el).on('click', '.carousel-prev', function (event) {
            var num = $(el).data('num') - 1;
            setPanel(el, num, true, color, inverted);
            if (window.analytics)
                analytics.event('carousel-prev');
            event.preventDefault();
        });
        $(el).on('click', '.prev a', function (event) {
            if (!$(this).parent().hasClass('disabled')) {
                var num = $(el).data('num') - 1;
                setPanel(el, num, true, color, inverted);
                if (window.analytics)
                    analytics.event('carousel-arrow-prev');
            }
            event.preventDefault();
        });
        $('.next a,.prev a,.dot a', el).hover(function () {
            if ($('html.ua-touch').length != 0)
                return;
            var icon = this.firstChild;
            if (inverted)
                return;
            if ($(icon).hasClass('silver-bg') || $(icon).hasClass('fade')) {
            } else if (color == 'white' && icon.className.indexOf('left') > -1) {
                icon.className = 'icon-circle-arrow-left-white';
            } else if (color == 'black' && icon.className.indexOf('left') > -1) {
                icon.className = 'icon-circle-arrow-left';
            } else if (color == 'white' && icon.className.indexOf('right') > -1) {
                icon.className = 'icon-circle-arrow-right-white';
            } else if (color == 'black' && icon.className.indexOf('right') > -1) {
                icon.className = 'icon-circle-arrow-right';
            } else if (color == 'white' && icon.className.indexOf('dot') > -1 && icon.className.indexOf('active-' + color) == -1) {
                icon.className = 'icon-dot white icon-transition-color';
            } else if (icon.className.indexOf('left') > -1) {
                icon.className = 'icon-circle-arrow-left-white-inverted ' + color + '-bg icon-transition-bg-color';
            } else if (icon.className.indexOf('right') > -1) {
                icon.className = 'icon-circle-arrow-right-white-inverted ' + color + '-bg icon-transition-bg-color';
            } else if (icon.className.indexOf('dot') > -1 && icon.className.indexOf('active-' + color) > -1) {
                icon.className = 'icon-dot ' + color + ' icon-transition-color active-' + color;
            } else if (icon.className.indexOf('dot') > -1) {
                icon.className = 'icon-dot ' + color + ' icon-transition-color';
            }
        }, function () {
            var icon = this.firstChild;
            if (inverted)
                return;
            if ($(icon).hasClass('silver-bg') || $(icon).hasClass('fade')) {
            } else if (color == 'white' && icon.className.indexOf('left') > -1) {
                icon.className = 'icon-circle-arrow-left';
            } else if (color == 'black' && icon.className.indexOf('left') > -1) {
                icon.className = 'icon-circle-arrow-left-white';
            } else if (color == 'white' && icon.className.indexOf('right') > -1) {
                icon.className = 'icon-circle-arrow-right';
            } else if (color == 'white' && icon.className.indexOf('right') > -1) {
                icon.className = 'icon-circle-arrow-right-white';
            } else if (icon.className.indexOf('left') > -1) {
                icon.className = 'icon-circle-arrow-left-white-inverted black-bg icon-transition-bg-color';
            } else if (icon.className.indexOf('right') > -1) {
                icon.className = 'icon-circle-arrow-right-white-inverted black-bg icon-transition-bg-color';
            } else if (icon.className.indexOf('dot') > -1 && icon.className.indexOf('active-' + color) > -1) {
                icon.className = 'icon-dot ' + color + ' icon-transition-color active-' + color;
            } else if (icon.className.indexOf('dot') > -1) {
                icon.className = 'icon-dot black icon-transition-color';
            }
        });
    };
});
define('framework/trim', ['jquery'], function ($) {
    return function (el) {
        var verbose = false;
        if (/_fw_trim_verbose/.test(document.location)) {
            verbose = true;
        }
        if (verbose) {
            console.info('Element', el);
        }
        if ($(el).data('trim-installed') == true)
            return;
        $(el).data('trim-installed', true);
        var $el = $(el);
        var $clone = $(el.cloneNode(true)).css('overflow', 'visible').height('auto').css('max-height', 'none');
        $el.after($clone);
        if ($clone.outerHeight() <= $el.outerHeight()) {
            if (verbose) {
                console.info('Not trimming', el, $clone.outerHeight(), $el.outerHeight());
            }
            $clone.remove();
            return;
        }
        ;
        var $target = $('.trim-ellipsis,.trim-ellipsis-char', $clone).eq(0);
        if ($target.length == 0)
            return;
        var option = 'word';
        if ($target.hasClass('trim-ellipsis-char'))
            option = 'char';
        function bestfit(clone, orig, target, origtext, pos, step, direction, option) {
            if (!origtext || origtext.length == 0)
                return text;
            var newtext;
            if (option == 'word') {
                for (var i = 0; i < 100; i++) {
                    if (origtext[pos + i * direction] == ' ') {
                        pos = pos + i * direction;
                        break;
                    }
                }
            }
            newtext = origtext.substr(0, pos);
            if (verbose) {
                console.info('NEW', direction, pos, step, newtext);
            }
            if (step == 0) {
                return;
            }
            if (step > 0) {
                newtext = newtext + '&hellip;';
                target.html(newtext);
            }
            var sizediff = clone.outerHeight() - orig.outerHeight();
            direction = -1;
            if (sizediff > 0) {
                pos = pos - Math.floor(step / 2);
            } else {
                pos = pos + Math.floor(step / 2);
                direction = 1;
            }
            bestfit(clone, orig, target, origtext, pos - 1, Math.floor(step / 2), direction, option);
        }
        var text = $target.html();
        bestfit($clone, $el, $target, text, text.length, text.length, 1, option);
        $el.html($clone.html());
        $clone.remove();
    };
});
define('framework/formcontainer', ['jquery'], function ($) {
    return function (el) {
        var $el = $(el);
        if ($el.data('formcontainer-installed') === true)
            return;
        $el.data('formcontainer-installed', true);
        var action = $el.attr('data-action');
        var method = $el.attr('data-method');
        var form = $('#aspnetForm');
        var isFakeFormElement = !$el.is('form');
        if (isFakeFormElement) {
            if ($el.parents('#aspnetForm').length == 0) {
                $el.wrap('<form></form>');
                form = $el.parent();
                form.attr('action', action);
                form.attr('method', method);
            }
            $el.on('click', ':submit', function (e) {
                if (!e.isDefaultPrevented())
                    submitForm(form, $el);
                return false;
            });
            function keypressInBox(e) {
                var code = e.keyCode ? e.keyCode : e.which;
                if (code === 13) {
                    e.preventDefault();
                    if (!$el.hasClass('disable-submit-on-enter')) {
                        submitForm(form, $el);
                    }
                }
            }
            $(':text,:password', $el).bind('keypress', {}, keypressInBox);
        } else {
            form = $el;
            form.submit(function () {
                return submitForm(form, $el);
            });
        }
        $el.bind('validate', function () {
            validate(form, $el);
        });
        function validate(thisForm, container) {
            if ($(thisForm).attr('id') === 'aspnetForm') {
                $(':input', container).each(function () {
                    $(this).data('autoform', '1');
                });
                $(':input').each(function () {
                    if (!$(this).data('autoform')) {
                        $(this).addClass('autoform-remove-name');
                        if ($(this).hasClass('required')) {
                            $(this).addClass('autoform-remove-required');
                            $(this).removeClass('required');
                        }
                    }
                });
            }
            thisForm.parsley({
                messages: {
                    defaultMessage: '<b>ERROR</b> This value seems to be invalid.',
                    type: {
                        email: '<b>ERROR</b> This value should be a valid email.',
                        url: '<b>ERROR</b> This value should be a valid url.',
                        urlstrict: '<b>ERROR</b> This value should be a valid url.',
                        number: '<b>ERROR</b> This value should be a valid number.',
                        digits: '<b>ERROR</b> This value should be digits.',
                        dateIso: '<b>ERROR</b> This value should be a valid date (YYYY-MM-DD).',
                        alphanum: '<b>ERROR</b> This value should be alphanumeric.',
                        phone: '<b>ERROR</b> This value should be a valid phone number.'
                    },
                    notnull: '<b>ERROR</b> This value should not be null.',
                    notblank: '<b>ERROR</b> This value should not be blank.',
                    required: '<b>ERROR</b> This value is required.',
                    regexp: '<b>ERROR</b> This value seems to be invalid.',
                    min: '<b>ERROR</b> This value should be greater than or equal to %s.',
                    max: '<b>ERROR</b> This value should be lower than or equal to %s.',
                    range: '<b>ERROR</b> This value should be between %s and %s.',
                    minlength: '<b>ERROR</b> This value is too short. It should have %s characters or more.',
                    maxlength: '<b>ERROR</b> This value is too long. It should have %s characters or less.',
                    rangelength: '<b>ERROR</b> This value length is invalid. It should be between %s and %s characters long.',
                    mincheck: '<b>ERROR</b> You must select at least %s choices.',
                    maxcheck: '<b>ERROR</b> You must select %s choices or less.',
                    rangecheck: '<b>ERROR</b> You must select between %s and %s choices.',
                    equalto: '<b>ERROR</b> This value should be the same.'
                },
                animate: false,
                errorClass: 'field-error',
                errors: {
                    errorElem: '<div><b>Error:</b> </div>',
                    errorsWrapper: '<div></div>',
                    classHandler: function (elem, isRadioOrCheckbox) {
                        var grp = elem.parents('.field-group-vertical').eq(0);
                        if (grp)
                            return grp;
                        if (!elem.attr('class') || elem.attr('class').indexOf('field') === -1) {
                            return $(elem).parent().parent();
                        } else {
                            return $(elem).parent();
                        }
                    },
                    container: function (elem, isRadioOrCheckbox) {
                        var $container;
                        var grp = elem.parents('.field-group-vertical').eq(0);
                        if (grp.length) {
                            $container = $('<div class=\'error-placeholder\'></div>').insertAfter(grp.children().last());
                            return $container;
                        }
                        if (!elem.attr('class') || elem.attr('class').indexOf('field') === -1) {
                            $container = $('<div class=\'error-placeholder\'></div>').insertAfter(elem.parent());
                            return $container;
                        }
                        $container = elem.parent().find('.error-placeholder');
                        if ($container.length === 0) {
                            $container = $('<div class=\'error-placeholder\'></div>').insertAfter(elem);
                        }
                        return $container;
                    }
                }
            });
            thisForm.parsley('validate');
            if (thisForm.parsley('isValid')) {
                container.removeClass('invalid');
            } else {
                container.addClass('invalid');
            }
        }
        function submitForm(thisForm, container) {
            if ($(container).hasClass('form-container-submitting'))
                return false;
            var e = jQuery.Event('submit');
            $el.trigger(e);
            if (e.isDefaultPrevented()) {
                return false;
            }
            validate(thisForm, container);
            if (thisForm.parsley('isValid')) {
                $('.autoform-remove-name').each(function () {
                    $(this).attr('name', null);
                });
                var action = container.attr('data-action');
                var method = container.attr('data-method');
                thisForm.attr('action', action);
                if (!method) {
                    method = 'GET';
                }
                thisForm.attr('method', method);
                thisForm.attr('action', action);
                if (thisForm.attr('method').toLowerCase() == 'get') {
                    $('input[type=password]').each(function () {
                        $(this).val('');
                    });
                }
                $(container).addClass('form-container-submitting');
                window.setTimeout(function () {
                    $(container).removeClass('form-container-submitting');
                }, 20000);
                $(thisForm).each(function () {
                    this.elements = {};
                    this.elements.__SCROLLPOSITIONY = 0;
                    this.elements.__SCROLLPOSITIONX = 0;
                });
                $(thisForm).submit();
                return true;
            } else {
                $('.autoform-remove-required').each(function () {
                    $(this).addClass('required');
                });
                return false;
            }
        }
    };
});
define('framework/resize', [
    'jquery',
    'framework/exports'
], function ($, FW) {
    return function () {
        if ($(window).data('resize-installed') == true)
            return;
        $(window).data('resize-installed', true);
        $(window).bind('resize', FW.debounce(function (e) {
            $(document).trigger('framework.resize');
        }, 250, false));
    };
});
;
window.Modernizr = function (a, b, c) {
    function x(a) {
        j.cssText = a;
    }
    function y(a, b) {
        return x(prefixes.join(a + ';') + (b || ''));
    }
    function z(a, b) {
        return typeof a === b;
    }
    function A(a, b) {
        return !!~('' + a).indexOf(b);
    }
    function B(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!A(e, '-') && j[e] !== c)
                return b == 'pfx' ? e : !0;
        }
        return !1;
    }
    function C(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c)
                return d === !1 ? a[e] : z(f, 'function') ? f.bind(d || b) : f;
        }
        return !1;
    }
    function D(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1), e = (a + ' ' + n.join(d + ' ') + d).split(' ');
        return z(b, 'string') || z(b, 'undefined') ? B(e, b) : (e = (a + ' ' + o.join(d + ' ') + d).split(' '), C(e, b, c));
    }
    var d = '2.8.3', e = {}, f = !0, g = b.documentElement, h = 'modernizr', i = b.createElement(h), j = i.style, k, l = {}.toString, m = 'Webkit Moz O ms', n = m.split(' '), o = m.toLowerCase().split(' '), p = {}, q = {}, r = {}, s = [], t = s.slice, u, v = {}.hasOwnProperty, w;
    !z(v, 'undefined') && !z(v.call, 'undefined') ? w = function (a, b) {
        return v.call(a, b);
    } : w = function (a, b) {
        return b in a && z(a.constructor.prototype[b], 'undefined');
    }, Function.prototype.bind || (Function.prototype.bind = function (b) {
        var c = this;
        if (typeof c != 'function')
            throw new TypeError();
        var d = t.call(arguments, 1), e = function () {
                if (this instanceof e) {
                    var a = function () {
                    };
                    a.prototype = c.prototype;
                    var f = new a(), g = c.apply(f, d.concat(t.call(arguments)));
                    return Object(g) === g ? g : f;
                }
                return c.apply(b, d.concat(t.call(arguments)));
            };
        return e;
    }), p.cssanimations = function () {
        return D('animationName');
    }, p.csstransitions = function () {
        return D('transition');
    };
    for (var E in p)
        w(p, E) && (u = E.toLowerCase(), e[u] = p[E](), s.push((e[u] ? '' : 'no-') + u));
    return e.addTest = function (a, b) {
        if (typeof a == 'object')
            for (var d in a)
                w(a, d) && e.addTest(d, a[d]);
        else {
            a = a.toLowerCase();
            if (e[a] !== c)
                return e;
            b = typeof b == 'function' ? b() : b, typeof f != 'undefined' && f && (g.className += ' ua-' + (b ? '' : 'no-') + a), e[a] = b;
        }
        return e;
    }, x(''), i = k = null, e._version = d, e._domPrefixes = o, e._cssomPrefixes = n, e.testProp = function (a) {
        return B([a]);
    }, e.testAllProps = D, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') + (f ? ' ua-js ua-' + s.join(' ua-') : ''), e;
}(this, this.document);
define('framework/modernizr.custom', [], function () {
    return;
});
define('framework/useragent', [
    'jquery',
    'framework/modernizr.custom'
], function ($, m) {
    function is_touch_device() {
        return 'ontouchstart' in window || navigator.maxTouchPoints;
    }
    function is_retina() {
        if (window.devicePixelRatio >= 2) {
            return true;
        } else {
            return false;
        }
    }
    function checkBreakpoints() {
        var $html = $('html');
        var currClass = '';
        if ($html.hasClass('ua-desktop')) {
            currClass = 'ua-desktop';
        } else if ($html.hasClass('ua-tablet')) {
            currClass = 'ua-tablet';
        } else if ($html.hasClass('ua-mobile')) {
            currClass = 'ua-mobile';
        }
        var finalClass = 'ua-desktop';
        var w = $(window).width();
        if (w < 650) {
            finalClass = 'ua-mobile';
        } else if (w < 920) {
            finalClass = 'ua-tablet';
        }
        if (currClass == finalClass) {
            return;
        }
        $html.removeClass('ua-desktop ua-tablet ua-mobile');
        if (finalClass == 'ua-desktop') {
            $html.removeClass('ua-tablet ua-mobile');
        } else if (finalClass == 'ua-tablet') {
            $html.removeClass('ua-desktop ua-mobile');
        } else if (finalClass == 'ua-mobile') {
            $html.removeClass('ua-desktop ua-tablet');
        }
        if (!$html.hasClass(finalClass)) {
            $html.addClass(finalClass);
            if (currClass) {
                $(document).trigger('framework.breakpoint');
            }
        }
    }
    return function () {
        var $html = $('html');
        $html.addClass('ua-js');
        if ($html.data('useragent-installed') == true)
            return;
        $html.data('useragent-installed', true);
        if (is_touch_device())
            $html.addClass('ua-touch');
        else
            $html.addClass('ua-no-touch');
        if (is_retina())
            $html.addClass('ua-retina');
        else
            $html.addClass('ua-not-retina');
        if (navigator.userAgent.indexOf('HeadlessChrome') > -1) {
            $html.addClass('ua-headless');
        }
        $(document).bind('framework.resize', checkBreakpoints);
        checkBreakpoints();
    };
});
define('framework/hover', ['jquery'], function ($) {
    return function (el) {
        var $el = $(el);
        if ($el.data('hover-installed') == true)
            return;
        $el.data('hover-installed', true);
        $el.on({
            mouseenter: function () {
                console.info('enter');
                $el.find('.hover-sync').addClass('hover').filter('a').addClass('u');
            },
            mouseleave: function () {
                console.info('exit');
                $el.find('.hover-sync').removeClass('hover').filter('a').removeClass('u');
            }
        }, '.hover-sync');
    };
});
define('framework/popover', ['jquery'], function ($) {
    function showPopover($container, $target, $content) {
        $container.addClass('popover-active');
        $content.fadeIn('fast');
    }
    function hidePopover($container) {
        $container.removeClass('popover-active');
        $('.popover-content', $container).fadeOut('fast');
    }
    return function (el) {
        var $el = $(el);
        if ($el.data('popover-installed') == true)
            return;
        $el.data('popover-installed', true);
        var config = {
            over: function () {
                var $content = $(this).next('.popover-content');
                if ($content.length == 0) {
                    $content = $(this).find('.popover-content');
                }
                hidePopover($el);
                showPopover($el, $(this), $content);
            },
            out: function () {
                hidePopover($el);
            },
            interval: 20,
            sensitivity: 10
        };
        require(['https://d1gfwsbop52idw.cloudfront.net/static/shared/js/plugins/jquery.hoverIntent.js'], function () {
            $('.popover-toggle', $el).hoverIntent(config);
        });
    };
});
define('framework/lazy', ['jquery'], function ($) {
    return function (el) {
        var $el = $(el);
        if ($el.data('lazy-installed') == true)
            return;
        $el.data('lazy-installed', true);
        if (!$el.data('src'))
            return;
        if ($el.hasClass('lazy-fadein')) {
            require(['https://d1gfwsbop52idw.cloudfront.net/static/shared/js/plugins/jquery.lazyload.min.js'], function () {
                $el.lazyload({
                    data_attribute: 'src',
                    effect: 'fadeIn',
                    effectspeed: '250'
                });
            });
        } else if ($el.hasClass('defer')) {
            $(window).on('load', function () {
                window.setTimeout(function () {
                    $el.attr('src', $el.data('src'));
                }, 200);
            });
        } else if ($el.hasClass('ondemand')) {
            $el.bind('appear', function () {
                var src = $(this).data('src');
                this.src = src;
            });
        } else {
            require(['https://d1gfwsbop52idw.cloudfront.net/static/shared/js/plugins/jquery.lazyload.min.js'], function () {
                $el.lazyload({ data_attribute: 'src' });
            });
        }
    };
});
define('framework/iframe', ['jquery'], function ($) {
    return function (el) {
        var $el = $(el);
        if ($(el).data('iframe-installed') == true)
            return;
        $(el).data('iframe-installed', true);
        var originalHtml = el.outerHTML;
        var src = $(el).find('a').attr('href');
        $(el).find('a').remove();
        var iframe = document.createElement('iframe');
        iframe.src = src;
        var style = $(el).attr('style');
        console.info(style);
        $(iframe).attr('style', style);
        $(iframe).attr('scrolling', 'no');
        $(iframe).css('width', '100%');
        $(iframe).attr('frameborder', '0');
        $el.append(iframe);
        $el.on('reset', function () {
            console.log('reset iframe');
            $el.replaceWith(originalHtml);
        });
    };
});
define('framework/randomize', ['jquery'], function ($) {
    function shuffle(items) {
        var c = [];
        return items.each(function () {
            c.push($(this).clone(true));
        }).each(function (a, b) {
            $(b).replaceWith(c[a = Math.floor(Math.random() * c.length)]);
            c.splice(a, 1);
        });
    }
    return function (el) {
        var $el = $(el);
        var num = 4;
        if ($(el).data('random-installed') == true)
            return;
        $(el).data('random-installed', true);
        if (/random-(\d+)/.test($el.attr('class'))) {
            num = parseInt(RegExp.$1);
        }
        var $items = $el.find('.random-item');
        if (navigator.userAgent.indexOf('HeadlessChrome') == -1) {
            shuffle($items);
        }
        for (var i = 0; i < num; i++) {
            $el.find('.random-item').eq(i).show();
        }
        $el.find('.random-item:hidden').remove();
    };
});
define('framework/scroll-lock', ['jquery'], function ($) {
    return function (el) {
        var $el = $(el);
        if ($el.data('noscroll-installed') === true)
            return;
        $el.data('noscroll-installed', true);
        require(['https://d1gfwsbop52idw.cloudfront.net/static/shared/js/plugins/scroll-sneak.js'], function () {
            window.sneaky = window.sneaky || new ScrollSneak();
            $el.click(window.sneaky.sneak);
        });
    };
});
define('framework/in-viewport', [
    'jquery',
    'framework/exports'
], function ($, FW) {
    function update($el) {
        var settings = {};
        if ($el.is(':in-viewport')) {
            $el.addClass('in-viewport').trigger('framework.in-viewport').trigger('framework.responsive-in-viewport');
        } else {
            $el.removeClass('in-viewport');
        }
    }
    function throttle(func, wait, options) {
        var context, args, result;
        var timeout = null;
        var previous = 0;
        if (!options)
            options = {};
        var later = function () {
            previous = options.leading === false ? 0 : Date.now();
            timeout = null;
            result = func.apply(context, args);
            if (!timeout)
                context = args = null;
        };
        return function () {
            var now = Date.now();
            if (!previous && options.leading === false)
                previous = now;
            var remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0 || remaining > wait) {
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = null;
                }
                previous = now;
                result = func.apply(context, args);
                if (!timeout)
                    context = args = null;
            } else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining);
            }
            return result;
        };
    }
    ;
    return function (el) {
        var $el = $(el);
        if ($el.data('in-viewport-installed') == true)
            return;
        $el.data('in-viewport-installed', true);
        require(['https://d1gfwsbop52idw.cloudfront.net/static/shared/js/plugins/jquery.lazyload.min.js'], function () {
            var $container = $(document.getElementById('s4-workspace') || window);
            $container.bind('scroll', throttle(function (e) {
                var data = {};
                data.offset = $container.scrollTop();
                $(document).trigger('framework.scroll', data);
                return update($el);
            }, 250));
            if ($('html.ua-touch, html.ua-headless').length)
                $el.trigger('framework.responsive-in-viewport');
            update($el);
        });
    };
});
define('framework/styledfields', ['jquery'], function ($) {
    function styledCheckboxButtons($el, $zone) {
        if ($el.hasClass('field-checkbox')) {
            fixCheckbox = function ($el) {
                if ($el.find('input:checked').length > 0) {
                    $el.addClass('field-checkbox-checked');
                } else {
                    $el.removeClass('field-checkbox-checked');
                }
                window.setTimeout(function () {
                    if ($el.find('input:focus').length > 0) {
                        $el.addClass('field-checkbox-focus');
                    } else {
                        $el.removeClass('field-checkbox-focus');
                    }
                }, 1);
            };
            $el.on('change focus blur', 'input', function () {
                fixCheckbox($el);
            });
            fixCheckbox($el);
        }
    }
    function styledSelect($el, $zone) {
        if ($el.hasClass('field-select')) {
            $el.on('focus', 'select', function () {
                $el.addClass('field-select-focus');
            });
            $el.on('blur', 'select', function () {
                $el.removeClass('field-select-focus');
            });
        }
        function installSelectBoxIt(s) {
            require(['https://d1gfwsbop52idw.cloudfront.net/static/shared/js/plugins/jquery.selectboxit.min.js'], function () {
                s.selectBoxIt({ autoWidth: false });
                s.bind('touchstart', function () {
                    $('.back-to-top').remove();
                });
                $(document).bind('framework.domupdate', function () {
                    if (s && s.data && s.data('selectBox-selectBoxIt')) {
                        s.data('selectBox-selectBoxIt').refresh();
                    }
                });
            });
        }
        if ($el.hasClass('field-select2')) {
            var s = $el.find('select');
            if (s.is(':visible')) {
                installSelectBoxIt(s);
            } else {
                (function (s) {
                    s.interval = window.setInterval(function () {
                        if (s.is(':visible')) {
                            installSelectBoxIt(s);
                            window.clearInterval(s.interval);
                        }
                    }, 500);
                }(s));
            }
        }
    }
    function styledRadioButtons($el, $zone) {
        if ($el.hasClass('field-radio')) {
            fixRadio = function ($el) {
                if ($el.find('input:checked').length > 0) {
                    $el.addClass('field-radio-checked');
                } else {
                    $el.removeClass('field-radio-checked');
                }
                window.setTimeout(function () {
                    if ($el.find('input:focus').length > 0) {
                        $el.addClass('field-radio-focus');
                    } else {
                        $el.removeClass('field-radio-focus');
                    }
                }, 1);
            };
            fixAllRadio = function () {
                $('.field-radio').each(function () {
                    fixRadio($(this));
                });
            };
            $el.on('change focus blur', 'input', function () {
                fixAllRadio($el, this);
            });
            fixRadio($el);
        }
    }
    return function (zone, el) {
        var $el = $(el);
        var $zone = $(zone);
        if ($el.data('styledfields-installed') == true)
            return;
        $el.data('styledfields-installed', true);
        styledRadioButtons($el, $zone);
        styledCheckboxButtons($el, $zone);
        styledSelect($el, $zone);
    };
});
define('framework/imgcontroller', ['jquery'], function ($) {
    return function (el) {
        window.imgZoomresizeDialog = function (img) {
            if (img.naturalWidth)
                $('#framework-modal .container').css('max-width', img.naturalWidth);
        };
        $(el).off('.img-zoom').on('click.img-zoom', '.img-zoom', function (e) {
            var dlg = new framework.Dialog({
                body: $('<img class="fluid" onload="window.imgZoomresizeDialog(this)"/>').attr('src', this.href),
                backgroundColor: 'black',
                textColor: 'white',
                width: '800px'
            });
            dlg.open();
            e.preventDefault();
        });
        function isImageOk(img) {
            if (!img.complete) {
                return false;
            }
            if (typeof img.naturalWidth != 'undefined' && img.naturalWidth == 0) {
                return false;
            }
            return true;
        }
        $('img', el).each(function () {
            var $el = $(this);
            if ($el.data('imgcontroller-installed') == true)
                return;
            $el.data('imgcontroller-installed', true);
            $el.on('error load', function () {
                if (!isImageOk(this)) {
                    $(this).addClass('broken-image');
                    this.style.visibility = 'hidden';
                }
            }).each(function () {
                if (this.complete) {
                    if (!isImageOk(this)) {
                        $(this).addClass('broken-image');
                        this.style.visibility = 'hidden';
                    }
                }
            });
        });
    };
});
define('framework/timeago', ['jquery'], function ($) {
    return function (el) {
        var timestamp = $(el).data('timestamp');
        function parse(iso8601) {
            var s = $.trim(iso8601);
            s = s.replace(/\.\d+/, '');
            s = s.replace(/-/, '/').replace(/-/, '/');
            s = s.replace(/T/, ' ').replace(/Z/, ' UTC');
            s = s.replace(/([\+\-]\d\d)\:?(\d\d)/, ' $1$2');
            return new Date(s);
        }
        function distance(date) {
            return new Date().getTime() - date.getTime();
        }
        function inWords(distanceMillis) {
            var $l = {
                prefixAgo: null,
                prefixFromNow: null,
                suffixAgo: '',
                suffixFromNow: 'from now',
                seconds: '1 minute ago',
                minute: '1 minute ago',
                minutes: '%d minutes ago',
                hour: '1 hour ago',
                hours: '%d hours ago',
                day: 'yesterday',
                days: '%d days ago',
                month: '1 month ago',
                months: '%d months ago',
                year: '1 year ago',
                years: '%d years ago',
                wordSeparator: ' ',
                numbers: []
            };
            var prefix = $l.prefixAgo;
            var suffix = $l.suffixAgo;
            var seconds = Math.abs(distanceMillis) / 1000;
            var minutes = seconds / 60;
            var hours = minutes / 60;
            var days = hours / 24;
            var years = days / 365;
            function substitute(stringOrFunction, number) {
                var string = $.isFunction(stringOrFunction) ? stringOrFunction(number, distanceMillis) : stringOrFunction;
                var value = $l.numbers && $l.numbers[number] || number;
                return string.replace(/%d/i, value);
            }
            var words = seconds < 45 && substitute($l.seconds, Math.round(seconds)) || seconds < 90 && substitute($l.minute, 1) || minutes < 45 && substitute($l.minutes, Math.round(minutes)) || minutes < 90 && substitute($l.hour, 1) || hours < 24 && substitute($l.hours, Math.round(hours)) || hours < 42 && substitute($l.day, 1) || days < 30 && substitute($l.days, Math.round(days)) || days < 45 && substitute($l.month, 1) || days < 365 && substitute($l.months, Math.round(days / 30)) || years < 1.5 && substitute($l.year, 1) || substitute($l.years, Math.round(years));
            var separator = $l.wordSeparator === undefined ? ' ' : $l.wordSeparator;
            return $.trim([
                prefix,
                words,
                suffix
            ].join(separator));
        }
        $(el).html(inWords(distance(parse(timestamp))));
    };
});
jQuery.fn.isChildOverflowing = function (child) {
    var p = jQuery(this).get(0);
    var el = jQuery(child).get(0);
    return el.offsetTop < p.offsetTop || el.offsetLeft < p.offsetLeft || (el.offsetTop + el.offsetHeight > p.offsetTop + p.offsetHeight || el.offsetLeft + el.offsetWidth > p.offsetLeft + p.offsetWidth);
};
define('framework/overflow', [
    'jquery',
    'framework/exports'
], function ($, FW) {
    function fadeCheck(el) {
        var $element = $(el);
        var $overflow = $(el).parent();
        var $wrap = $overflow.parent();
        if ($element.outerWidth(true) > $overflow.width()) {
            $wrap.addClass('fade-container-active');
        } else {
            $wrap.removeClass('fade-container-active');
        }
    }
    function liFadeCheck(el) {
        var $element = $(el);
        var $overflow = $(el).parent().parent();
        var $lastli = $element.find('li:last-child');
        if ($lastli != undefined) {
            var state = $element.isChildOverflowing($lastli);
            if (state) {
                $overflow.addClass('fade-container-active');
            } else {
                $overflow.removeClass('fade-container-active');
            }
        }
    }
    function scrollCheck(el) {
        var container = $(el).parent().parent();
        var cwidth = container.width();
        var elwidth = $(el).width();
        $(el).parent().bind('scroll', FW.debounce(function (e) {
            if ($(this).scrollLeft() + cwidth + 10 >= elwidth) {
                container.addClass('fade-container-far-right');
            } else {
                container.removeClass('fade-container-far-right');
            }
            if ($(this).scrollLeft() == 0) {
                container.addClass('fade-container-far-left');
            } else {
                container.removeClass('fade-container-far-left');
            }
        }, 250, false));
    }
    return function (el) {
        if ($(el).data('overflow-installed') == true)
            return;
        $(el).data('overflow-installed', true);
        $(el).on('reset', function () {
            var e = $(this);
            console.info('reset', this);
            if (e.parent().hasClass('overflow-x'))
                e.unwrap();
            if (e.parent().hasClass('fade-container'))
                e.unwrap();
        });
        $(el).wrap('<div class="fade-container fade-container-far-left"><div class="overflow-x"></div></div>');
        scrollCheck(el);
        $(document).bind('framework.resize', function () {
            fadeCheck(el);
            if ($(el).hasClass('liFadeChecker') == true) {
                liFadeCheck(el);
            }
        });
        fadeCheck(el);
        if ($(el).hasClass('liFadeChecker') == true) {
            liFadeCheck(el);
        }
    };
});
define('framework/slider', ['jquery'], function ($) {
    return function (el) {
        var $el = $(el);
        if ($(el).data('slider-installed') == true)
            return;
        $(el).data('slider-installed', true);
        window.setTimeout(function () {
            $('.slider-open', $el).each(function () {
                var btn = $(this);
                if (btn.data('target') == 'flyout-navigation')
                    btn.attr('aria-label', 'Open Flyout Navigation');
                if (btn.data('target') == 'flyout-search')
                    btn.attr('aria-label', 'Open Searchbox');
                $(btn).attr('aria-expanded', 'false');
                btn.click(function (e) {
                    if ($(this).hasClass('inherit-bg')) {
                        var c = $(this).removeClass('inherit-bg').parents('.slider-container');
                        c.addClass('slider-closing').removeClass('slider-open');
                        window.setTimeout(function () {
                            c.removeClass('slider-closing');
                        }, 400);
                        $(btn).attr('aria-expanded', 'false');
                        $(el).trigger('close');
                        if (window.analytics) {
                            analytics.event('slidernav-close');
                            console.info('Analytics: slidernav-close');
                        }
                    } else {
                        $('.slider-open', $el).removeClass('inherit-bg').attr('aria-expanded', 'false');
                        $(this).addClass('inherit-bg');
                        var target = $(this).data('target');
                        $('.slider-targets', $el).hide();
                        $(document.getElementById(target)).show();
                        $(this).parents('.slider-container').addClass('slider-open');
                        $(btn).attr('aria-expanded', 'true');
                        $(el).trigger('open');
                        if (window.analytics) {
                            analytics.event('slidernav-open');
                            console.info('Analytics: slidernav-open');
                        }
                        var $s = $('input:text:visible.universal-site-search-query', $el);
                        if ($s.length) {
                            $s.focus();
                        } else {
                            $('.slider-close', $el).focus().each(function () {
                                if (document.getElementById('s4-workspace')) {
                                    $('#s4-workspace,html,body').scrollTop(0);
                                } else {
                                    window.scrollTo(0, 0);
                                }
                            });
                        }
                    }
                    e.preventDefault();
                });
            });
            $('.slider-close', $el).each(function () {
                var btn = $(this);
                btn.attr('aria-label', 'Close Navigation Flyout Menu');
                btn.click(function (e) {
                    $('.universal-banner-menu-toggle').focus();
                    $('.slider-open', $el).removeClass('inherit-bg').attr('aria-expanded', 'false');
                    var c = $(this).parents('.slider-container').addClass('slider-closing');
                    c.addClass('slider-closing').removeClass('slider-open');
                    window.setTimeout(function () {
                        c.removeClass('slider-closing');
                    }, 400);
                    e.preventDefault();
                    $(el).trigger('close');
                    if (window.analytics) {
                        analytics.event('slidernav-close');
                        console.info('Analytics: slidernav-close');
                    }
                });
            });
            $('.slider-backdrop', $el).click(function (e) {
                $('.slider-close', $el).click();
                e.preventDefault();
            });
        }, 100);
    };
});
define('framework/autorender', ['jquery'], function ($) {
    function flyoutHTML() {
        var h = '';
        h += '';
        h += '<button class="flyout-panel-button slider-backdrop-above slider-close btn-glass black" style="padding-top: 3px!important;"><svg width="17" height="17" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false"><g id="closeicon" fill="currentColor" fill-rule="nonzero"><polygon points="14 1.41 12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7"></polygon></g></svg></button>';
        h += '<div class="slider-targets inherit-bg" id="flyout-navigation">';
        var siteheader = $('.site-header h1').eq(0).text();
        if (!siteheader || siteheader.includes('svg')) {
            siteheader = $('.site-header .site-home').eq(0).text();
        }
        if (!siteheader) {
            siteheader = $('.page-header h1').eq(0).text();
        }
        var siteheaderId = 'slidernav-header-' + $.trim(siteheader.toLowerCase()).replace(/ /gi, '-').replace(/^[^a-z]+|[^\w:.-]+/gi, '');
        var siteHeaderLink = $('.site-header h1 a').eq(0).attr('href');
        if (!siteHeaderLink) {
            siteHeaderLink = $('.site-header .site-home a').eq(0).attr('href');
        }
        var links = [];
        if ($('.flyout-nav-links').length) {
            $('.flyout-nav-links a').each(function () {
                links.push(this);
            });
        } else {
            $('.navbar a').each(function () {
                links.push(this);
            });
        }
        if (links.length) {
            h += '<div class="flyout-padding">';
            if (!siteHeaderLink) {
                h += '   <nav class="gamma-uc site-title" aria-label="Site Homepage"><span class="black" id="' + siteheaderId + '">' + siteheader + '</span></nav>';
            } else {
                h += '   <nav class="gamma-uc site-title" aria-label="Site Homepage"><a class="black" href="' + siteHeaderLink + '" id="' + siteheaderId + '">' + siteheader + '</a></nav>';
            }
            if (links.length) {
                h += '   <div class="hr"></div>';
                h += '<nav aria-label="Section" class="section-nav"><ul class="epsilon-uc unbulleted">';
                $(links).each(function (i, a) {
                    var $el = $(this).clone();
                    var analytics_id = $.trim($el.text().toLowerCase()).replace(/ /gi, '-').replace(/^[^a-z]+|[^\w:.-]+/gi, '');
                    $el.attr('id', 'slidernav-' + analytics_id);
                    if ($el.hasClass('active'))
                        $el.addClass('inherit-color');
                    $el.addClass('skip-underline');
                    if ($el.hasClass('first-sub'))
                        h += '<ul class="unstyled">';
                    h += '<li';
                    if ($el.hasClass('active'))
                        h += ' class="active black-bg"';
                    h += '>' + $el[0].outerHTML;
                    if (!$el.hasClass('has-sub'))
                        h += '</li>';
                    if ($el.hasClass('last-sub'))
                        h += '</ul></li>';
                });
                h += '</ul></nav>';
            }
            var toolbar = [];
            $('.toolbar > li > *').each(function () {
                toolbar.push(this);
            });
            if (toolbar.length) {
                h += '<div class="hr"></div>';
                h += '<nav aria-label="Utility" class="util-nav"><ul class="unstyled kappa-uc">';
                $(toolbar).each(function (i, a) {
                    if ($(this).find('.utility-menu').length == 0) {
                        var $el = $(this).clone();
                        var analytics_id = $.trim($el.text().toLowerCase()).replace(/ /gi, '-').replace(/^[^a-z]+|[^\w:.-]+/gi, '');
                        $el.attr('id', 'slidernav-' + analytics_id);
                        if ($el.hasClass('active'))
                            $el.addClass('inherit-color');
                        h += '<li';
                        if ($el.hasClass('active'))
                            h += ' class="active black-bg"';
                        h += '>' + $el[0].outerHTML + '</li>';
                    }
                });
                h += '</ul></nav>';
            }
            h += '</div>';
        }
        var n = $('#universal-slider-nav').clone();
        n.find('a').addClass('inherit-color').addClass('skip-underline');
        if ($('#universal-slider-nav').length) {
            h += '<div class="black-bg" style="padding-bottom:20px">';
            h += '<div class="flyout-padding">';
            h += n.html().replace('epsilon', 'kappa');
            h += '</div>';
            h += '</div>';
        }
        h += '</div>';
        h += '<div class="search-container slider-targets hidden" id="flyout-search" role="search">';
        h += '<div class="flyout-padding">';
        h += '<div class="gamma-uc black site-title">Search</div>';
        h += '<div class="hr"></div>';
        h += '<div><table class="search-box">';
        h += '   <tr>';
        h += '      <td><input type="text" class="universal-site-search-query" aria-label="Search text" name="qt" value=""></td>';
        h += '  <td><button type="submit" class="btn-unstyled hbsred-bg universal-site-search-button" style="height:31px;width:31px;" aria-label="Perform Search">';
        h += '    <svg width="16px" height="19px" style="vertical-align:middle;" viewBox="1 1 96 113" preserveAspectRatio="xMidYMin" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="hbsred-bg">';
        h += '        <g id="Group" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(7.000000, 7.000000)">';
        h += '            <circle id="Oval" stroke="#fff" stroke-width="11" cx="36" cy="36" r="36"></circle>';
        h += '            <rect id="Rectangle" fill="#fff" transform="translate(68.783343, 81.926814) rotate(55.000000) translate(-68.783343, -81.926814) " x="45.2833428" y="72.9268136" width="47" height="18"></rect>';
        h += '        </g>';
        h += '    </svg>';
        h += '  </button></td>';
        h += '  </tr>';
        h += '</table></div>';
        h += '<div class="hr"></div>';
        h += '</div>';
        h += '</div>';
        return h;
    }
    return function (el) {
        var $el = $(el);
        if ($(el).data('autorender-installed') == true)
            return;
        $(el).data('autorender-installed', true);
        if ($el.hasClass('responsive-filters-inject')) {
            var stickyFilterHTML = '<div class="smoke-bg filter-sticky" style="padding-top:16px; padding-bottom:16px; visibility:hidden;">' + '<div class="container  tablet-container mobile-container">' + '<a href="#filter-top" class="black epsilon nosmooth">Filter Results: <span class="hbsred">' + $('.responsive-filters-total').first().text() + '</span>' + '<i class="icon24-filter-open xtoggle-hide"></i>' + '</a>' + '</div>' + '</div>';
            $('.responsive-filters-inject').prepend(stickyFilterHTML);
        }
        if ($el.hasClass('responsive-facet-inject')) {
            $('.desktop-visible .facets').clone().appendTo('.responsive-facet-inject');
            $('.responsive-facet-inject-target').clone().appendTo('.responsive-facet-inject');
        }
        if ($el.hasClass('slider-inject')) {
            $el.addClass('slider-right-220 slider-container');
            if ($el.children('.slider-content').length == 0) {
                $el.wrapInner('<div class="slider-content responsive-type"></div>');
            }
            $el.prepend('<div class="slider-menu inherit-bg responsive-type"><div class="flyout-panel">' + flyoutHTML() + '</div></div>');
            $el.find('.slider-content').append('<div class="slider-backdrop"></div>');
            var v = $('.universal-site-search-query').val();
            $('.universal-site-search-query').val(v);
            $('.universal-slider-open').click(function () {
                $('.slider-inject').find('.slider-open[data-target=flyout-navigation]').click();
                return false;
            });
            $('.slider-inject').find('.slider-open[data-target=flyout-navigation]').on('click', function () {
                $('.slider-menu').addClass('black-bg').removeClass('inherit-bg');
            });
            $('.slider-inject').find('.slider-open[data-target=flyout-search]').on('click', function () {
                $('.slider-menu').addClass('inherit-bg').removeClass('black-bg');
            });
            $('.slider-inject').on('open', function () {
                $('.universal-slider-open').addClass('inherit-bg');
            });
            $('.slider-inject').on('close', function () {
                $('.universal-slider-open').removeClass('inherit-bg');
            });
        }
        if ($el.hasClass('h1-responsive-nav')) {
            $el.find('h1,h2').each(function () {
                var h = '';
                h += '<div class="responsive-local-navigation toggle-container mobile-visible tablet-visible">';
                h += '<a href="#" class="toggle-button white">' + this.outerHTML;
                h += '</a>';
                h += '<div class="toggle-show has-slide">';
                h += '<ul class="kappa-uc">';
                var li = '';
                var label = $(this).text();
                var found = false;
                $el.find('.responsive-breadcrumb .dropdown-container').each(function () {
                    var text = $(this).find('.dropdown-toggle').text();
                    var title = $(this).find('.dropdown-toggle').attr('title');
                    if (text.toLowerCase() == label.toLowerCase() || title && title.toLowerCase() == label.toLowerCase()) {
                        found = true;
                        $(this).find('.dropdown-menu a:gt(0)').each(function () {
                            li += '<li>' + this.outerHTML + '</li>';
                        });
                    }
                });
                h += li;
                h += '</ul>';
                h += '</div>';
                h += '</div>';
                if (!found)
                    return;
                $(this).addClass('mobile-hidden tablet-hidden');
                $(this).after(h);
                $el.find('.responsive-local-navigation a').removeClass('inherit-color white');
                $el.find('.responsive-local-navigation a.active').addClass('white').parent().addClass('white');
            });
            var button = '<span class="toggle-hide"><i class="icon24-open"></i></span>';
            button += '<span class="toggle-show"><i class="icon24-close"></i></span>';
            $('.responsive-local-navigation h1,.responsive-local-navigation h2', el).append(button);
        }
        $('.slider-menu a').last().focus().keydown(function (e) {
            if (e.which === 9 && !e.shiftKey) {
                e.preventDefault();
                $('.slider-menu button:first-of-type').focus();
            }
        });
        $('.slider-menu button:first-of-type').focus().keydown(function (e) {
            if (e.which === 9 && e.shiftKey) {
                e.preventDefault();
                $('.slider-menu a').last().focus();
            }
        });
    };
});
define('framework/cover', ['jquery'], function ($) {
    function resize($container) {
        var $img = $('.cover-img img', $container);
        var height = $container.height();
        $('.cover-body,.cover-img', $container).css('height', height);
        $img.css('width', $container.width());
        $img.css('height', 'auto');
        if ($img.height() < $container.height()) {
            $img.css('width', 'auto');
            $img.css('height', $container.height());
        }
        var bottom = -height;
        var left = 0;
        if ($container.hasClass('cover-right')) {
            left = $container.width() - $img.width();
        } else if ($container.hasClass('cover-left')) {
            left = 0;
        } else {
            left = ($container.width() - $img.width()) / 2;
        }
        $('.cover-img', $container).css('margin-bottom', bottom).css('margin-left', left).css('visibility', 'visible');
    }
    return function (el) {
        var $el = $(el);
        if ($el.data('cover-installed') == true)
            return;
        $el.data('cover-installed', true);
        $(window).on('load', function () {
            resize($el);
        });
        $(document).bind('framework.resize', function () {
            resize($el);
        });
    };
});
define('framework/map', ['jquery'], function ($) {
    function renderMap($el) {
        console.info(google, google.maps);
        var style = [
            {
                stylers: [
                    { saturation: '-10' },
                    { xlightness: '20' }
                ]
            },
            {
                featureType: 'poi',
                stylers: [{ visibility: 'off' }]
            },
            {
                featureType: 'transit',
                stylers: [{ visibility: 'on' }]
            },
            {
                featureType: 'road',
                stylers: [
                    { lightness: '50' },
                    { visibility: 'on' }
                ]
            },
            {
                featureType: 'landscape',
                stylers: [{ xlightness: '50' }]
            }
        ];
        if ($el.length > 0) {
            var mapElement = $el.find('.map:first');
            var options = {
                zoom: mapElement.data('zoom') ? mapElement.data('zoom') : 7,
                minZoom: mapElement.data('min-zoom') ? mapElement.data('min-zoom') : 2,
                maxZoom: mapElement.data('max-zoom') ? mapElement.data('max-zoom') : 18,
                scrollwheel: false,
                center: new google.maps.LatLng(42.3601983, -71.127229),
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disableDefaultUI: false
            };
            if (mapElement.data('center')) {
                if (mapElement.data('center').indexOf(',') > -1) {
                    var lat = parseFloat(mapElement.data('center').split(',')[0]);
                    var lon = parseFloat(mapElement.data('center').split(',')[1]);
                    options.center = new google.maps.LatLng(lat, lon);
                }
            }
            var bounds = new google.maps.LatLngBounds();
            var map = new google.maps.Map(mapElement[0], options);
            map.setOptions({ styles: style });
            var infowindow = new google.maps.InfoWindow({});
            console.info($el.find('ul.pins').html());
            $el.find('ul.pins > li').each(function () {
                var title = $(this).attr('title');
                if ($(this).data('latlon').indexOf(',') == -1)
                    return;
                var lat = parseFloat($(this).data('latlon').split(',')[0]);
                var lon = parseFloat($(this).data('latlon').split(',')[1]);
                var html = $(this).html();
                var myLatlng = new google.maps.LatLng(lat, lon);
                var marker = new google.maps.Marker({
                    position: myLatlng,
                    map: map,
                    icon: {
                        path: google.maps.SymbolPath.CIRCLE,
                        fillOpacity: 0.9,
                        fillColor: '#368db9',
                        strokeColor: '#a41034',
                        strokeOpacity: 0,
                        scale: 4
                    },
                    title: title
                });
                google.maps.event.addListener(marker, 'click', function () {
                    infowindow.setContent(html);
                    infowindow.open(map, marker);
                });
                bounds.extend(marker.position);
            });
            if (mapElement.data('fitbounds'))
                map.fitBounds(bounds);
            var listener = google.maps.event.addListener(map, 'idle', function () {
                google.maps.event.removeListener(listener);
            });
        }
    }
    return function (el) {
        var $el = $(el);
        if ($el.data('map-installed') === true)
            return;
        $el.data('map-installed', true);
        console.info('init', $el.find('.pins').html());
        if (window.google && window.google.maps) {
            renderMap($el);
        } else {
            var num = parseInt(Math.random(0, 10000) * 100000000);
            window['framework_map_init'] = window['framework_map_init'] || [];
            window['framework_map_init'].push(function () {
                renderMap($el);
            });
            window.framework_map_init_all = function () {
                for (var i = 0; i < window.framework_map_init.length; i++) {
                    window.framework_map_init[i]();
                }
                window.framework_map_init_all = function () {
                };
            };
            var libs = ['https://maps.googleapis.com/maps/api/js?&callback=framework_map_init_all'];
            require(libs, function () {
            });
        }
    };
});
define('framework/tooltip', ['jquery'], function ($) {
    return function (el) {
        var $el = $(el);
        if ($el.data('tolltip-installed') == true)
            return;
        $el.data('tolltip-installed', true);
        var elHalfWidth = $el.find('.tooltip-content').outerWidth() / 2;
        if (elHalfWidth > 60) {
            $el.find('.tooltip-content').css('margin-left', 0 - elHalfWidth);
        }
    };
});
define('framework/inputmask', ['jquery'], function ($) {
    return function (el) {
        require(['https://d1gfwsbop52idw.cloudfront.net/static/shared/js/plugins/jquery.inputmask.js'], function () {
            var $el = $(el);
            var mask = $(el).data('mask');
            if (mask == 'email') {
                $el.inputmask({
                    alias: 'email',
                    'placeholder': ''
                });
            } else if (mask == 'integer') {
                $el.inputmask({
                    alias: 'integer',
                    rightAlign: false
                });
            } else if (mask == 'date') {
                $el.inputmask('mm/dd/yyyy');
            }
        });
    };
});
define('framework/filtering', [
    'jquery',
    'framework/exports'
], function ($, FW) {
    function filter(el, str) {
        str = str.toLowerCase();
        if (str == $(this).data('current-filter'))
            return;
        $(this).data('current-filter', str);
        var li = $(el).data('li');
        if (!li || li.length == 0) {
            li = $('.filtering-list>li', el);
            $(el).data('li', li);
        }
        li.hide();
        li.each(function () {
            var txt = $(this).data('text');
            if (!txt) {
                txt = $(this).text().toLowerCase();
                $(this).data('text', txt);
            }
            if (!str || txt.indexOf(str) > -1) {
                $(this).show();
            }
        });
    }
    return function (el) {
        if ($(el).data('filtering-installed') == true)
            return;
        $(el).data('filtering-installed', true);
        $('.filtering-input', el).bind('keyup', FW.debounce(function (e) {
            filter(el, $(this).val());
        }, 150, false));
        $('.filtering-input', el).bind('change', function () {
            filter(el, $(this).val());
        });
    };
});
define('framework/widgetsloader', ['jquery'], function ($) {
    return function () {
        var $el = $(window);
        if ($el.data('widgets-installed') == true)
            return;
        $el.data('widgets-installed', true);
        if (window.Widgets)
            return;
        if ($('.widget-video-embed,.widget-video-inline,.widget-video-popup,.widget-sharebar,.widget-twitter-stream,.widget-popup-dark,.widget-popup').length) {
            console.log('src: ' + $('script[src*=\'framework\']').attr('src'));
            var src = $('script[src*=\'js/framework\']').attr('src').replace('js/framework', 'js/widgets');
            console.info('loading', src);
            require([src], function (w) {
                window.Widgets.refresh();
            });
        }
    };
});
define('framework/typeahead', ['jquery'], function ($, typeahead) {
    function substringMatcher(strs) {
        return function findMatches(q, cb) {
            var matches, substringRegex;
            matches = [];
            substrRegex = new RegExp(q, 'i');
            $.each(strs, function (i, str) {
                if (substrRegex.test(str)) {
                    matches.push(str);
                }
            });
            cb(matches);
        };
    }
    ;
    function install(el) {
        require([
            'typeahead.js',
            'bloodhound'
        ], function (typeahead, Bloodhound) {
            var $el = $(el);
            var configs = [{
                    hint: $el.data('typeahead-hint') ? true : false,
                    highlight: true,
                    minLength: 1
                }];
            for (var i = -1; i < 10; i++) {
                var d = $el.data('typeahead-set' + i + '-values');
                if (i == -1)
                    d = $el.data('typeahead-values');
                if (d) {
                    var values = [];
                    $.each(d.split('|'), function () {
                        values.push($.trim(this));
                    });
                    var c = { source: substringMatcher(values) };
                    var label = $el.data('typeahead-set' + i + '-label');
                    if (label)
                        c['templates'] = { header: '<h3 class="mu-uc">' + label + '</h3>' };
                    configs.push(c);
                }
            }
            var endpoint = $el.data('typeahead-endpoint');
            var prefetch = $el.data('typeahead-prefetch');
            var limit = $el.data('typeahead-limit') || 5;
            if (endpoint || prefetch) {
                var opts = {};
                opts.datumTokenizer = Bloodhound.tokenizers.obj.nonword('value');
                opts.queryTokenizer = Bloodhound.tokenizers.nonword;
                if (prefetch)
                    opts.prefetch = {
                        url: prefetch,
                        cacheKey: $el.data('typeahead-cachekey') || document.location.pathname,
                        transform: function (response) {
                            var results = [];
                            $.each(response, function () {
                                results.push({ 'value': this.t || this.title });
                            });
                            return results;
                        }
                    };
                if (endpoint)
                    opts.remote = {
                        url: endpoint,
                        wildcard: '%QUERY',
                        cacheKey: $el.data('typeahead-cachekey') || document.location.pathname,
                        transform: function (response) {
                            var results = [];
                            $.each(response, function () {
                                results.push({ 'value': this.t || this.title });
                            });
                            return results;
                        }
                    };
                var dataset = new Bloodhound(opts);
                var c = {
                    display: 'value',
                    source: dataset,
                    limit: limit
                };
                configs.push(c);
            }
            if (configs.length > 1) {
                $el.find('input').each(function () {
                    var t = null;
                    if (configs.length == 2)
                        t = $(this).typeahead(configs[0], configs[1]);
                    if (configs.length == 3)
                        t = $(this).typeahead(configs[0], configs[1], configs[2]);
                    t.on('typeahead:select', function (e, data) {
                        $el.trigger('select', { val: t.val() });
                    });
                    t.on('typeahead:open', function (e, data) {
                        $el.trigger('open', { val: t.val() });
                    });
                    t.on('open', function (e, data) {
                        $el.trigger('open', { val: t.val() });
                    });
                    t.on('typeahead:render', function (e, data, async, dataset) {
                        $el.trigger('render');
                    });
                    t.on('typeahead:autocomplete', function (e, data) {
                        console.info('autocomplete', e, data);
                    });
                    t.on('keypress', function (e) {
                        var code = e.keyCode ? e.keyCode : e.which;
                        if (code === 13) {
                            e.preventDefault();
                            $el.trigger('enter', { val: t.val() });
                        }
                    });
                });
            }
        });
    }
    return function (el) {
        var $el = $(el);
        if ($el.data('typeahead-installed') == true)
            return;
        $el.data('typeahead-installed', true);
        require(['https://d1gfwsbop52idw.cloudfront.net/static/shared/js/plugins/jquery.typeahead.js'], function () {
            install(el);
        });
    };
});
define('framework/universal.footer', ['jquery'], function ($, m) {
    return function () {
        $(document).on('click', '#footer-snapchat,#footer-snapchat-default,.universal-snapchat-popup', function (e) {
            var body = '<div><img src="https://d3vgmmrg377kge.cloudfront.net/shared/images/social/snapcode.jpg" class="fluid"/><div class="shim20"></div></div>';
            body += '<div class="mu">Scan the image above to follow @harvardhbs on Snapchat</div>';
            var qrdlg = new framework.Dialog({
                title: '<span class=\'icon-snapchat\'></span><span style=\'text-transform:initial\'>Snapchat</span>',
                body: body,
                buttons: {
                    'ok': function () {
                        this.close();
                        return false;
                    }
                },
                width: '400px;'
            });
            qrdlg.open();
            return false;
        });
        if (document.location.href.indexOf('exed') == -1) {
            $(document).on('click', '#footer-wechat,.universal-wechat-popup', function (e) {
                var body = '<div><img src="https://d3gps3f1qcxh97.cloudfront.net/Style Library/Images/ee_wechat_account.gif" class="fluid"/><div class="shim20"></div></div>';
                body += '<div class="mu">Scan the QR code above to follow us on WeChat</div>';
                var qrdlg = new framework.Dialog({
                    title: '<span class=\'icon-wechat\'></span><span style=\'text-transform:initial\'>WeChat</span>',
                    body: body,
                    buttons: {
                        'ok': function () {
                            this.close();
                            return false;
                        }
                    },
                    width: '400px;'
                });
                qrdlg.open();
                return false;
            });
        }
    };
});
define('framework/filterSticky', ['jquery'], function ($) {
    return function (el) {
        $(window).scroll(function (event) {
            var filterSticky = $('.filter-sticky');
            var filter = $('.filter-top');
            if (filter.length == 0)
                return;
            var top = filter.offset().top - parseFloat(filter.css('marginTop')) + 5;
            var ypos = $(this).scrollTop();
            if (ypos >= top) {
                filterSticky.addClass('fixed');
            } else {
                filterSticky.removeClass('fixed');
                filterSticky.css('opacity', '0');
                filterSticky.css('visibility', 'hidden');
            }
        });
        $('.responsive-filters .filter-sticky').click(function () {
            $('.filter-top .toggle-container:not(.toggled) a.toggle-button').eq(0).click();
        });
    };
});
require([
    'jquery',
    'framework/smoothscroll',
    'framework/tabs',
    'framework/choice',
    'framework/megamenu',
    'framework/links',
    'framework/slideshow',
    'framework/obfuscate',
    'framework/expandable',
    'framework/backtotop',
    'framework/dropdown',
    'framework/toggle',
    'framework/datepicker',
    'framework/carousel',
    'framework/trim',
    'framework/formcontainer',
    'framework/resize',
    'framework/useragent',
    'framework/hover',
    'framework/popover',
    'framework/lazy',
    'framework/iframe',
    'framework/randomize',
    'framework/scroll-lock',
    'framework/in-viewport',
    'framework/styledfields',
    'framework/imgcontroller',
    'framework/timeago',
    'framework/overflow',
    'framework/slider',
    'framework/autorender',
    'framework/cover',
    'framework/map',
    'framework/tooltip',
    'framework/inputmask',
    'framework/filtering',
    'framework/widgetsloader',
    'framework/typeahead',
    'framework/universal.footer',
    'framework/filterSticky'
], function ($, smoothscroll, tabs, choice, megamenu, links, slideshow, obfuscate, expandable, backtotop, dropdown, toggle, datepicker, carousel, trim, formcontainer, resize, useragent, hover, popover, lazy, iframe, randomize, scrolllock, inview, styledfields, imgcontroller, timeago, overflow, slider, autorender, cover, map, tooltip, inputmask, filtering, widgetsloader, typeahead, footer, filterSticky) {
    var oldJQuery = typeof $.fn.on == 'undefined';
    function main() {
        if ($('.ms-rtestate-write').length > 0)
            return;
        useragent();
        resize();
        $('.js-framework').each(function () {
            var $zone = $(this);
            $('.slider-inject,.h1-responsive-nav,.responsive-facet-inject,.responsive-filters-inject', this).each(function () {
                autorender(this);
            });
            $('.dropdown-container,.dropdown-container2,.dropdown-container3', this).each(function () {
                dropdown(this);
            });
            if (oldJQuery)
                return;
            $('.random-container', this).each(function () {
                randomize(this);
            });
            $(this).on('click', 'a[href*=\'#\']', function (e, args) {
                smoothscroll(this, e, args == 'mock');
                return true;
            });
            $('.nav-tabs', this).each(function () {
                tabs(this);
            });
            $('.megamenu-container', this).each(function () {
                megamenu(this);
            });
            $('.hover-container', this).each(function () {
                hover(this);
            });
            $('.tooltip', this).each(function () {
                tooltip(this);
            });
            $('.to', this).each(function () {
                obfuscate(this);
            });
            $('.filtering-container', this).each(function () {
                filtering(this);
            });
            $('.in-viewport-trigger', this).each(function () {
                inview(this);
            });
            $('.table-overflow', this).each(function () {
                overflow(this);
            });
            $('.typeahead-container', this).each(function () {
                typeahead(this);
            });
            $('.plusminus, .accordian, .mobile-accordion, .mobile-accordion2, .mobile-expandable-headings', this).each(function () {
                expandable(this);
            });
            $('.lazy,.defer,.ondemand', this).each(function () {
                lazy(this);
            });
            $('.slider-container', this).each(function () {
                slider(this);
            });
            $('.map-container', this).each(function () {
                map(this);
            });
            $('input[data-mask]', this).each(function () {
                inputmask(this);
            });
            $('.back-to-top', this).each(function () {
                backtotop(this);
            });
            $('.trim-container', this).each(function () {
                trim(this);
            });
            $('.scroll-lock', this).each(function () {
                scrolllock(this);
            });
            $('.iframe-container', this).each(function () {
                iframe(this);
            });
            $('.choice-container', this).each(function () {
                choice(this);
            });
            $('.link-controller', this).each(function () {
                links(this);
            });
            $('.img-controller', this).each(function () {
                imgcontroller(this);
            });
            $('.toggle-container', this).each(function () {
                toggle(this);
            });
            $('.timeago', this).each(function () {
                timeago(this);
            });
            $('.datepicker,.datepicker-container,.datepicker-container-inline', this).each(function () {
                datepicker(this);
            });
            $('.popover-container', this).each(function () {
                popover(this);
            });
            $('.cover-container', this).each(function () {
                cover(this);
            });
            $('.filter-sticky', this).each(function () {
                filterSticky(this);
            });
            $('.slideshow-container', this).each(function () {
                slideshow(this);
            });
            $('.carousel-container', this).each(function () {
                carousel(this);
            });
            $('.field-checkbox,.field-radio,.field-select,.field-select2', this).each(function () {
                styledfields($zone, this);
            });
            $('.form-container', this).each(function () {
                formcontainer(this);
            });
            $('.responsive-breadcrumb > li:last-child .txt-arrow').hide();
        });
    }
    $(document).bind('framework.domupdate', main);
    $(document).ready(function () {
        widgetsloader();
        $(document).keyup(function (e) {
            if (e.keyCode === 27)
                $(document).trigger('esc');
        });
        $(document).on('keypress', 'a[role=button]', function (event) {
            if (event.keyCode == 32 || event.keyCode == 13) {
                event.preventDefault();
                $(this).click();
            }
        });
        if (typeof window._onload === 'object') {
            for (var i = 0; i < window._onload.length; i++) {
                $(window).on('load', window._onload[i]);
            }
            window._onload = [];
        }
        if (typeof window._domready === 'object') {
            for (var i = 0; i < window._domready.length; i++) {
                $(document).ready(window._domready[i]);
            }
            window._domready = [];
        }
        footer();
        $(document).trigger('framework.domupdate');
        if (window.analytics && window.analytics.rebind) {
            $(document).bind('framework.domupdate', function () {
                window.window.analytics.rebind();
            });
        }
    });
});
define('js-framework', [
    'jquery',
    'framework/smoothscroll',
    'framework/tabs',
    'framework/choice',
    'framework/megamenu',
    'framework/links',
    'framework/slideshow',
    'framework/obfuscate',
    'framework/expandable',
    'framework/backtotop',
    'framework/dropdown',
    'framework/toggle',
    'framework/datepicker',
    'framework/carousel',
    'framework/trim',
    'framework/formcontainer',
    'framework/resize',
    'framework/useragent',
    'framework/hover',
    'framework/popover',
    'framework/lazy',
    'framework/iframe',
    'framework/randomize',
    'framework/scroll-lock',
    'framework/in-viewport',
    'framework/styledfields',
    'framework/imgcontroller',
    'framework/timeago',
    'framework/overflow',
    'framework/slider',
    'framework/autorender',
    'framework/cover',
    'framework/map',
    'framework/tooltip',
    'framework/inputmask',
    'framework/filtering',
    'framework/widgetsloader',
    'framework/typeahead',
    'framework/universal.footer',
    'framework/filterSticky'
], function () {
    return;
});