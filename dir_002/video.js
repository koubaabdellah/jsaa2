!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.2",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=hb(),z=hb(),A=hb(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},eb=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fb){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function gb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+rb(o[l]);w=ab.test(a)&&pb(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function hb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ib(a){return a[u]=!0,a}function jb(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function kb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function lb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function nb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ob(a){return ib(function(b){return b=+b,ib(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pb(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=gb.support={},f=gb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=gb.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",eb,!1):e.attachEvent&&e.attachEvent("onunload",eb)),p=!f(g),c.attributes=jb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=jb(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=jb(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(jb(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),jb(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&jb(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return lb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?lb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},gb.matches=function(a,b){return gb(a,null,null,b)},gb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return gb(b,n,null,[a]).length>0},gb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},gb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},gb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},gb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=gb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=gb.selectors={cacheLength:50,createPseudo:ib,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||gb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&gb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=gb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||gb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ib(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ib(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ib(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ib(function(a){return function(b){return gb(a,b).length>0}}),contains:ib(function(a){return a=a.replace(cb,db),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ib(function(a){return W.test(a||"")||gb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ob(function(){return[0]}),last:ob(function(a,b){return[b-1]}),eq:ob(function(a,b,c){return[0>c?c+b:c]}),even:ob(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:ob(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:ob(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:ob(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=mb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=nb(b);function qb(){}qb.prototype=d.filters=d.pseudos,d.setFilters=new qb,g=gb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?gb.error(a):z(a,i).slice(0)};function rb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function tb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ub(a,b,c){for(var d=0,e=b.length;e>d;d++)gb(a,b[d],c);return c}function vb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wb(a,b,c,d,e,f){return d&&!d[u]&&(d=wb(d)),e&&!e[u]&&(e=wb(e,f)),ib(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ub(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:vb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=vb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=vb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sb(function(a){return a===b},h,!0),l=sb(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sb(tb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wb(i>1&&tb(m),i>1&&rb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xb(a.slice(i,e)),f>e&&xb(a=a.slice(e)),f>e&&rb(a))}m.push(c)}return tb(m)}function yb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=vb(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&gb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ib(f):f}return h=gb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,yb(e,d)),f.selector=a}return f},i=gb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&pb(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&rb(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&pb(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=jb(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),jb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||kb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&jb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||kb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),jb(function(a){return null==a.getAttribute("disabled")})||kb(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),gb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;
	return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)
}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});
var $jQ111 = jQuery.noConflict(true);
if (typeof(window.$) === 'undefined') { window.$ = $jQ111; }
if (typeof(window.jQuery) === 'undefined') { window.jQuery = $jQ111; }

;(function ( $jQ111, window, document, undefined ) {

	// undefined is used here as the undefined global
	// variable in ECMAScript 3 and is mutable (i.e. it can
	// be changed by someone else). undefined isn't really
	// being passed in so we can ensure that its value is
	// truly undefined. In ES5, undefined can no longer be
	// modified.

	// window and document are passed through as local
	// variables rather than as globals, because this (slightly)
	// quickens the resolution process and can be more
	// efficiently minified (especially when both are
	// regularly referenced in your plugin).

	function WSJVideo( container, settings ) {

		var defaults = {
			autoplay: true,
			adsEnabled: true,
			shareEnabled: true,
			allowPlayerPopup: false,
			chainVideos:false,
			disableHtmlControls: false,
			api:"https://video-api.wsj.com/api-video/",
			clickForSound: false,
			skynetEnable: false,
			skynetServer: "http://djibeacon.dowjoneson.com/v1/event.gif?",
			skynetRecServer: "http://skynet-service-prod.elasticbeanstalk.com/",
			userUri: "http://system.marketwatch.com/user/anonymous/",
			resetOnComplete:false,
			type:'',
			query:'',
			contentType: "article",
			disableEndscreen:false,
			noThumb: false,
			larsId: "91",
			larsAdId: "1259",
			larsIdChrome: "1272",
			oAccount:'',
			disableSeekBarThumbnails:true,
			allowFullScreen:true,
			adTag:'',
			useHttps:true,
			count:1,
			moduleId:'',
			disablePreroll:false,
			clickForSoundPreroll:false,
			adZone:'',
			lnid:'',
			plid:'',
			msrc:null,
			collapseable:false,
			disableDVR:null,
			maxBitrateIndex:null,
			enableCaptions:false,
			loaderThumb:false,
			chromecastEnabled:true,
			disableAdSkipping:false,
			playlist:null,
			suggestionsType:"wsj-section",
			suggestionsQuery:"",
			suggestionsDoctype:null,
			imaLibrary:"https://imasdk.googleapis.com/js/sdkloader/ima3.js",
			vrLibrary:"https://protoweb.marketwatch.com/api-video/player/v2/js/three.min.js",
			site:'',
			directLinks:false,
			playlistQuery:'',
			touchCastID:null,
			relativeLinks:false,
			disableChainPlay:false,
			sAccount:'',
			thumb:null,
			callback:null,
			fireTv:false,
			isAmp:false
		};
		var _self = this;
		this._self = this;
		this._container = $jQ111(container);


		this._container.css("position","relative");
		this._configLoaded = !("playerid" in settings);
		this._externalConfig;
		this._wrapper;
		this._containerId = $jQ111(container).attr("id");
		this._settings = $.extend( {}, defaults, settings);
		this._settings.api = "https://video-api.wsj.com/api-video/";
		this._defaults = defaults;
		this._name = "WSJVideo";
		this._flashContainer;
		this._flashPlayer;
		this._isAudio = false;

		this._videodata;
		this._buffering;
		this._videoTag;
		this._thumbnail;
		this._fields = 'fields=type,video174kMP4Url,video320kMP4Url,video664kMP4Url,video1264kMP4Url,video1864kMP4Url,video2564kMP4Url,hls,adZone,thumbnailList,guid,state,secondsUntilStartTime,author,description,name,linkURL,videoStillURL,duration,videoURL,adCategory,catastrophic,linkShortURL,doctypeID,youtubeID,titletag,rssURL,wsj-section,wsj-subsection,allthingsd-section,allthingsd-subsection,sm-section,sm-subsection,provider,formattedCreationDate,keywords,keywordsOmni,column,editor,emailURL,emailPartnerID,showName,omniProgramName,omniVideoFormat,linkRelativeURL,touchCastID,omniPublishDate,audioURL,adTagParams,gptCustParams,hlsNoCaptions';
		this._isInIframe, this._futureTimer, this._startTime;
		this._isIpad, this._isIphone, this._isAndroid, this._isIE, this._isMobile = false, this._androidV, this._isTwitter, this._isOperaMini, this._isChrome;
		this._chainTimer, this._chainTime = 10, this._chainKey = 0;
		this._touchCastMode = false;
		this._cssAppended = false;

		// Tracking //
		this._tObject = {};
		this._isChained = false;
		this._trackingMilestones = [false,false,false,false];
		this._isLive = false;
		this._initTracked = false;
		this._contentStartTracked = false;
		this._pingMilestone = 0;
		this._comscoreC3 = "13047035";
		this._comscoreMeta = {
			ns_st_ci: "", // Content Asset ID
			c3: this._comscoreC3, // Dictionary Classification Value
			c4: "*null", // Unused Dictionary Classification Value
			c6: "*null" // Unused Dictionary Classification Value
		};
		this._comscoreTag = new ns_.StreamingTag({ customerC2: '6035148' });
		this._pageEvents = "";
		this._events = {
            // 		Start,clicked away, ad error, playback error, ads disabled, ping, ad start, ad complete, editorial start, 25%, 50%, 75%, 100%, ads not supported, ad error during playback, 116 118 catastrophic ad Start, 117 119 blank ad start
            "video": ['event36', 'event40', 'event41', 'event42', 'event46', 'event67', 'event73', 'event74', 'event96', 'event97', 'event98', 'event99', 'event100', 'event113', 'event115','event116','event117'],
            "audio": ['event101', 'event102', 'event113', 'event104', 'event105', 'event67', 'event106', 'event107', 'event108', 'event109', 'event110', 'event111', 'event112', 'event113','event114', 'event118', 'event119']
        };
		this._currentEvents = this._events.video;

		// Video Attributes //
		this._duration;
		this._currentTime;
		this._height 	= this._container.height();
		this._width 	= this._container.width();
		this._volume 	= .8;
		this._muted		= false;
		this._callback;

		// IMA Ads //
		this._contentInitialized 	= false;
		this._adsLoaded 			= false;
		this._imaLoaded 			= false;
		this._imaInit 				= false;
		this._adMode 				= false;
		this._adId					= "none"; // for diagonstics
		this._adTagUsed				= "none"; // for diagonstics
		this._adsManager;
		this._adsLoader;
		this._adDisplayContainer;
		this._adContainer;
		this._intervalTimer;
		this._videoContent;
		this._endScreen;
		this._suggestionPopup, this._suggestionClose, this._suggestionLink ;
		this._adsClickTarget;
		this._adsSkipButton;
		this._suggestionRun	= false;
		this._adsLoading = false;
		// VR //
		this.vrLoaded = false;
		this._vrWrapper;
		this._vrComponents;

		this._adTime, this._adInfo, this._adDuration, this._adTimer, this._adPaused, this._currentAd;

		// Video Controls //
		this._controls;
		this._playBtn;
		this._pauseBtn;
		this._timeDisplay;
		this._fullscreenBtn;
		this._volumeBtn;
		this._scrubbar, this._scrubProgress, this._scrubLoaded;
		this._iosPlayPause, this._iosFullScreen;
		this._ccBtn, this._ccList;
		this._bitrateList, this._selectedBitrate = "video664kMP4Url", this._skipToTime = 0;


		// initialize //
		if(!this._configLoaded){
			var playerConigUrl = this._settings.api+"player/config/"+this._settings.playerid+".json?callback=?";
			$jQ111.ajax({
				url: playerConigUrl,
				type : 'GET',
				async: false,
				jsonpCallback: 'jsonCallback',
				dataType: 'jsonp',
				complete: externalConfigLoaded,
				error: externalConfigError
			});
		}else{
			this.init();
		}

		function externalConfigLoaded(data) {
			_self.configLoaded = true;
			_self._externalConfig = data.responseJSON;
			try{
				_self._settings = $jQ111.extend(_self._settings, _self._externalConfig);
				//if(_self._settings.s_account){
				//	svid = s_gi(_self.settings.s_account);
				//}
			}catch(error){}
			_self.init();
		};

		function externalConfigError(e){
			_self._configLoaded = true;
			_self.init();
		}
	}

	WSJVideo.prototype = {

		init: function() {
			var self = this;
			this._isInIframe = (window!=window.top);
			this._container.css("background-color","#000000");
			this._container.addClass( "wsjVideoPlayer" );
			this._callback	= this._container.attr('id').replace(/[^a-zA-Z0-9]/g, '');

			if(!svid)
				this.setupTracking();

			var cVolume = this.getCookie("djvideovol");
			if(cVolume != ""){
				this._volume = cVolume;
			}

			var cMute = this.getCookie("djvideomute");

			if(cMute != ""){
				if(cMute == 1){
					this._muted = true;
				}
			}

			var cBit = this.getCookie("djvideobit");
			if(cBit != ""){
				this._selectedBitrate = cBit;
			}

			var ua = window.navigator.userAgent.toLowerCase();
			var myNav = navigator.userAgent.toLowerCase();

			this._isIpad 		= ua.match(/(ipad)/i);
			this._isIpad		= (this._isIpad == null) ? false : true;
			this._isIphone 		= ua.match(/(iphone)/i);
			this._isIphone 		= (this._isIphone == null) ? false : true;
			this._isAndroid		= ua.match(/(android)/i);
			this._isAndroid 	= (this._isAndroid === null || typeof(this._isAndroid) == undefined) ? false : true;
			this._androidV 		= parseFloat(ua.slice(ua.indexOf("android")+8));
			this._isIE			= (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
			this._isOperaMini 	= ua.match(/(Android; Opera Mini)/i);
			this._isChrome		= ua.match(/(Chrome)/i);

			this._isTwitter		= false;

			if(!this._isIE){
				if(!!(navigator.userAgent.match(/Trident/) && !navigator.userAgent.match(/MSIE/))){
					this._isIE = 11;
				}
			}
			this._iOS		= (this._isIpad || this._isIphone);
			"use strict";
			this._isMobile = Boolean( this._isAndroid || myNav.match(/webos/i)|| this._isIphone || this._isIpad || myNav.match(/ipod/i) || myNav.match(/blackberry/i)|| myNav.match(/windows phone/i));

			if(this._settings.guid || (this._settings.type !== "" && this._settings.query !== "")){
				this.loadVideo();
			}

			// START EXTERNAL COMMANDS /////////////////////////
			this._container.resumeVideo = function(){
				if(self._flashPlayer){
					self._flashPlayer.unpauseVideo();
				}else{
					if(self._adMode )
						self._adsManager.resume();
					else
						self._videoTag.play();
				}
			}

			this._container.pauseVideo = function(){
				if(self._flashPlayer){
					self._flashPlayer.pauseVideo();
				}else{
					self._videoTag.pause();
					if(self._adsManager)
						self._adsManager.pause();
				}
			}

			this._container.updatePlaylist = function(pls){
				try{
					if(pls.items)
						self._settings.playlist = pls.items;
				}catch(e){
					self._settings.playlist = pls;
				};
			}

			this._container.vidoraShownList = function(list){
				for(gid in list){
					try{window.vidora.push(["send", "shown", list[gid]]);}catch(e){}
				}
			}

			this._container.loadVideo = function(data){

				self._settings.guid = data.guid;
				self._videodata = $jQ111.extend(self._videodata, data);
				try{
					if(data.vidora){window.vidora.push(["send", "click", data.guid,{ params: { personalized: 0 } }]);}
				}catch(e){}
				self._initTracked = false;
				if(self._endScreen){
					if(self._chainTimer){
						clearInterval(self._chainTimer);
						chainTime = 10;
					}
					self._endScreen.empty();
					self._endScreen.fadeOut("fast");
				}

				if((!self._contentInitialized && self._isMobile) || (!self._videoContent && !self._flashPlayer && data.linkURL)){
					window.location.href = data.linkURL;
				}else{
					if(self._controls)
						self._controls.hide();
					try{
						if(!self._flashPlayer){
							self.onAdRemoved();
						}
					}catch(e){}

					self.loadVideo();
				}
			}

			this._container.seek = function(tm, perc){
				if(self._videoTag && !self._adMode){
					if(perc){
						var sec = Math.round(self._duration * (tm / 100) );
						self._videoTag.currentTime = sec;
					}else{
						self._videoTag.currentTime = tm;
					}
				}
			}

			this._container.getStatus = function(){
				var rtn = {status:"playing"};
				if(self._flashPlayer){
					return self._flashPlayer.getStatus();
				}else if(self._videoTag){
					return self._videoTag.paused;
				}
			}

			this._container.setMute = function(mute){
				if(self._flashPlayer){
					return self._flashPlayer.setMute(mute);
				}else if(self._videoTag){
					self._videoTag.muted = mute;
					if(self._volumeBtn){
						self._volumeBtn.toggleClass( "btnVolumeMuted", self._videoContent.prop('muted') );
					}
					return true;
				}
			}

			this._container.playVideo = function(vDat){
				self._videodata = vDat;

				if(self._chainTimer){
					clearInterval(self._chainTimer);
					chainTime = 10;
				}

				try{
					if(!self._videodata.hlsNoCaptions){
						if(self._endScreen){
							self._endScreen.fadeOut("fast");
							self._videoContent.fadeOut("fast");
						}
						self._settings.guid = self._videodata.guid;
						self.loadVideo();
						return;
					}else{
						self.startVideo();
					}
				}catch(e){}

			}

			// END EXTERNAL COMMANDS /////////////////////////
			this._container.data('instance', this._container);

			if( typeof(self._settings.callback) == "function" ){
				self._settings.callback();
			}
		},

		setupTracking: function(){
			var overrideOAccount = false;
			try{
				var oAccount = location.search.split('oAccount=')[1];
				if(this._settings.oAccount != '')
					oAccount = this._settings.oAccount;
				if(oAccount){
					s_account = oAccount;
					overrideOAccount = true;
				}
			}catch(e){}
			if(!overrideOAccount){
				var s_account="djglobal,djwsj";
				try{
					var url = (window.location != window.parent.location) ? document.referrer: document.location.href;
					if (url.indexOf("wsj.com") !== -1) {
						s_account = "djglobal,djwsj";
					}
					if(url.indexOf('live.wsj.com')!== -1) {
						s_account = "djglobal,djwsjlive";
					}
					if(url.indexOf("cwsj.com") !== -1) {
						s_account = "djglobal,djwsjchina";
					}
					if(url.indexOf("cn.wsj.com") !== -1){
						s_account = "djglobal,djwsjchina";
					}
					if(url.indexOf("jwsj.com") !== -1) {
						s_account = "djglobal,djjapanwsj";
					}
					if (url.indexOf("kr.wsj.com") !== -1) {
						s_account = "djglobal,djwsjkorea";
					}
					if (url.indexOf("indo.wsj.com") !== -1) {
						s_account = "djglobal,djwsjindonesia";
					}
					if (url.indexOf("marketwatch.com") !== -1) {
						s_account = "djglobal,djmarketwatch";
					}
					if (url.indexOf("barrons.com") !== -1) {
						s_account = "djglobal,djbarrons";
					}
					if (url.indexOf("wsj.de") !== -1) {
						s_account = "djglobal,djwsjgermany";
					}
					if(url.indexOf('allthingsd.com')!== -1){
						s_account = "djglobal,djatd";
					}
					if(url.indexOf('wsj.com.tr')!== -1){
						s_account = "djglobal,djwsjturkey";
					}
					if(url.indexOf('efinancialnews.com')!== -1){
						s_account = "djglobal,djefinancialnews";
					}
					if(url.indexOf('mansionglobal.com')!== -1){
						s_account = "djmansionglobal";
					}
					if(url.indexOf('twitter.com/i/cards')!== -1){

						s_account = "djglobal,djwsjlive";
					}
					if(url.indexOf('heatst.com')!== -1){
						s_account = "djheatstreetprod";
					}
				}catch(e){
					s_account = "djglobal,djwsjlive";
				}
			}
			svid=s_gi(s_account);
			svid.charSet="ISO-8859-1";
			svid.currencyCode="USD";
			svid.trackDownloadLinks=true;
			svid.trackExternalLinks=false;
			svid.trackInlineStats=true;
			svid.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";
			svid.linkInternalFilters="javascript:,wsj.com,wallstreetjournal.com,bankrate.com,smartmoney.com,barrons.com,marketgauge.com,marketwatch.com,bigcharts.com,virtualstockexchange.com,hulbertinteractive.com,collegejournal.com,careercast.com,careerjournal.com,careerjournalasia.com,realestatejournal.com,loopnet.com,opinionjournal.com,politicaldiary.com,startupjournal.com,homefair.com,myplan.com,contacts.zoominfo.com,secure.theladders.com,selectrecruiters.com,kennedyinfo.com,allisontaylor.com,wsj.careerdev.org,wsj.resumeedge.com,newhomesource.com,blacksguide.com,rej.informars.com,wsj.miniplan.com,wsj.knowledgestorm.com,entrepreneur.com,toolkit.prnewswire.com,tsnn.com,allthingsd.com,traffic.outbrain.com,fins.com,wallstreetjournal.de";
			svid.linkLeaveQueryString=false;
			try{if(window.location.indexOf("https://")==0){svid.ssl = true;}}catch(e){}
			svid.visitorNamespace="dowjones";
			svid.trackingServer="om.dowjoneson.com";
			svid.trackingServerSecure="oms.dowjoneson.com";

		},

		initVideo: function(){ // Determines if the video is available or not yet
			var self = this;
			this._contentInitialized = true;
			if(this._thumbnail){
				this._thumbnail.off("click");
			}

			if(this._videodata.state == "future"){
				this._startTime = new Date();
				var now = new Date();
				var nam = (!this._videodata.showName) ? this._videodata.name : this._videodata.showName;
				end = new Date(now.valueOf() + (this._videodata.secondsUntilStartTime * 1000));
				this._container.prepend('<p class="videoMsg">This video will play automatically in: <br /><span id="countdown_'+this._containerId+'"></span></p>');
				this.showRemaining();
				this._futureTimer = setInterval(function(){self.showRemaining()}, 1000);
			}
			/*else if(this._videodata.state == "processing"){
				this._container.prepend('<p class="videoMsg">We are still processing your video. Please try again shortly.</p>');
			}*/else if(this._isOperaMini){
				this._container.html('<p class="videoMsg" >Sorry, your browser does not appear to support HTML5 video playback.<br />You will need to use a different browser.</p>');
				return;
			}else{

				if(this._isInIframe){
					try{
						$jQ111(window.top)[0].dj.util.Video.playVideo(this._settings.moduleId);
					}catch(e){}
				}else{
					this._container.trigger('dj.util.Video.playVideo',this._settings.moduleId);
				}
				var url = (window.location != window.parent.location) ? document.referrer: document.location.href;
				if(url.indexOf('twitter.com/i/cards')!== -1){
					this._isTwitter = true;
				}
				if(this._isMobile || this._videodata.vr || this._isTwitter){
					this.initHTML5();
				}else{
					//this._flashPlayer = true;
					// Flash Setup //
					var parameters = {
						autoPlay: true,
						disableSeekBarThumbnails: this._settings.disableSeekBarThumbnails,
						clickForSound: this._settings.clickForSound,
						disablePreroll: this._settings.disablePreroll,
						clickForSoundPreroll: this._settings.clickForSoundPreroll,
						suppressAds:!this._settings.adsEnabled,
						shareenabled: this._settings.shareEnabled,
						callback:this._callback,
						adZone:this._settings.adZone,
						endScreenOverlay: !this._settings.disableEndscreen,
						disableDVR: this._settings.disableDVR,
						enableCaptions: false,
						chainVideos: this._settings.chainVideos,
						adSkippingEnabled: !this._settings.disableAdSkipping,

						directLinks: this._settings.directLinks,
						relativeLinks: this._settings.relativeLinks,
						disableChainPlay: this._settings.disableChainPlay,
						disableTouchCast: false
						//trackingEnabled : false, // prevent flash double tracking from within the player
					};

					try{
						if(this._isIE){
							if(this._isIE < 11){
								this._settings.touchCastID = null;
							}
						}
					}catch(e){}
					try{
						if(this._settings.suggestionsType != '' && this._settings.suggestionsQuery != ''){
							this._settings.playlistQuery = "type="+this._settings.suggestionsType+'%26query='+this._settings.suggestionsQuery;

							this._settings.playlistQuery.replace(/&/g,'%26');  // escpae & to pass to flash
						}
						if(this._settings.suggestionsDoctype){
							this._settings.playlistQuery += "doctype="+this._settings.suggestionsDoctype;
						}
					}catch(e){}

					if(this._settings.adTag != "") {parameters.adTag = this._settings.adTag;}
					if(this._settings.playlistQuery != "") {parameters.playlistQuery = this._settings.playlistQuery;}
					if(this._settings.source != "") {parameters.source = this._settings.source;}
					if(this._settings.maxBitrateIndex) {parameters.maxBitrateIndex = this._settings.maxBitrateIndex;}
					if(this._settings.site != "") {parameters.adsite = this._settings.site;}
					if(this._settings.lnid != "") {parameters.lnid = this._settings.lnid;}
					if(this._settings.touchCastID) {parameters.touchCastID = this._settings.touchCastID;}
					if(this._settings.msrc) {parameters.msrc = this._settings.msrc;}
					if(this._settings.plid != "") {parameters.plid = this._settings.plid;}
					if(this._settings.allowPlayerPopup != "") {parameters.allowPlayerPopup = this._settings.allowPlayerPopup;}

					var wmodeValue = "direct";
					try{
						if(this._isIE){
							wmodeValue = "opaque"; // prevent flash player over menu issue on IE
						}
					}catch(e){}
					var wmodeOptions = ["direct", "opaque", "transparent", "window"];
					if (parameters.hasOwnProperty("wmode")) {
						if (wmodeOptions.indexOf(parameters.wmode) >= 0) {
							wmodeValue = parameters.wmode;
						}
						delete parameters.wmode;
					}

					if(!this._flashContainer){
						this._container.append('<div id="'+this._containerId+'_c" style="width:100%; height:100%;"></div>');
						this._flashContainer = $jQ111("#"+this._containerId+'_c');
					}

					var swfObjectStatus = function(e) {
						if(!e.success){
							self._flashContainer.remove();
							self.initHTML5();
							self._container.trigger({type:"onStart", playerType:"html5"});
						}else{
							self._container.trigger({type:"onStart", playerType:"flash"});
							self._flashPlayer = swfobject.getObjectById(e.id);
							self.onNewVideo(null);

							try{
								if(TouchCastPlayerSDK){ // required to get flash touchcast to work properly.  Prevents conflict.
									console.log("Touchcast Detection");
									delete TouchCastPlayerSDK;
								}
							}catch(e){}

						}
					};

					window['continueLoadVideo'+this._callback] = function(e) {
						try{
							if(!self._settings.source){ // Not manual
								if(!self._flashPlayer)
									self._flashPlayer = swfobject.getObjectById(self._containerId+"_c");

								try{
									if(self._isIE){
										if(self._isIE < 11){
											self._videodata.touchCastID = null;
										}
									}
								}catch(e){}
								self._flashPlayer.playVideo(self._videodata);
							}
						}catch(e){}
					};

					window['onVolumeChanged'+this._callback] = function(e, vol) {
						//self.trigger('onVolumeChanged', {volume: vol});
						self.onVolumeChanged(vol);
					};

					window['onClickAway'+this._callback] = function(e, vol) {
						try{
							this.setTrackingVars();
							this._tObject.linkTrackEvents = this._tObject.events = this._currentEvents[1]; // event40 , event102
							this._tObject.pev2 = "User_Clicked_Away_Before_Ad_Playback_Started";
							this._tObject.eVar46 = "none"; this._tObject.eVar49 = "none"; this._tObject.eVar50 = "none";
							this._tObject.pe = 'lnk_o';  svid.tl(this,'o',this._tObject.pev2, this._tObject);
							this._tObject.linkTrackEvents = this._tObject.events  = "";
						}catch(e){}
					};

					window['adComplete'+this._callback] = function(e){
						self.onAdComplete(e, self);
					};
					window['adRequested'+this._callback] = function(e, adTag){
						self.onAdRequested(e, self);
					};
					window['adStarted'+this._callback] = function(e, data){
						try{if(data.id)
							self._adId = data.id;
							self._adTagUsed = data.adUrl;
							self._adDuration = data.adDuration;
						}catch(e){}
						self.onAdStarted(e, self);
					};
					window['adSkipped'+this._callback] = function(e){
						self._container.trigger('adSkipped');
						self.onAdSkipped(e, self);
					};
					window['adError'+this._callback] = function(e, err){
						self._container.trigger('adError');
						var evt = {type:"flash", msg:err.msg, code:err.code};
						try{ if(err.adId){evt.adId = err.adId;} }catch(e){}
						try{ if(err.adUrl){evt.adUrl = err.adUrl;} }catch(e){}
						console.log(evt);
						self.onAdError(evt, self);
					};
					window['newVideo'+this._callback] = function(e, data){
						if(!self._settings.disableChainPlay){
							self._isChained = true;
							try{
								if(data.vidora){data.vidora = false; window.vidora.push(["send", "click", data.guid,{ params: { personalized: 0 } }]);}
							}catch(e){}
							data = $.extend( {}, self._videodata, data);
							self.onNewVideo(data);
						}else{
							self._container.trigger('onSuggestionPlay', data);
						}
					}
					window['onReplay'+this._callback] = function(e, data){
						self._container.trigger('replay');
						self.onNewVideo(null);
						self.onReplayVideo();
					}
					window['pauseVideo'+this._callback] = function(e, data){

					}
					window['unPauseVideo'+this._callback] = function(e, data){

					}
					window['paused'+this._callback] = function(e, data){
						try{self._comscoreTag.stop();}catch(e){}
					}
					window['unpaused'+this._callback] = function(e, data){
						try{
							if(self._adMode){
								try{self._comscoreTag.playAdvertisement();}catch(e){}
							}else{
								self._comscoreTag.playContentPart(self._comscoreMeta);
							}

						}catch(e){}
						self._container.trigger('unPauseVideo');
					}
					window['onMute'+this._callback] = function(e, data){
						self._container.trigger('onMute');
					}
					window['onUnMute'+this._callback] = function(e, data){
						self._container.trigger('onUnMute');
					}
					window['timeChange'+this._callback] = function(e, timeEvent){
						var percent = timeEvent.time / timeEvent.duration;
						if(timeEvent.duration > 3){
							self.uProgress(percent, timeEvent.time, timeEvent.cfs );
						}
						self._container.trigger('onTimeChange', timeEvent);
					};
					window['onCompanions'+this._callback] = function(module, ads) {
						if(typeof ads == "object"){
							ads = $jQ111.map(ads, function(value, index) {return [value];});
						}
						self._container.trigger({type:"onCompanions", availableAds:ads});
					};
					window['complete'+this._callback] = function (e){
						self.videoComplete(e);
					};
					window['vidoraShown'+this._callback] = function (e, thumbs){
						try{
							console.log(thumbs);
						}catch(e){}
					};
					window['requestPlaylist'+this._callback] = function (e){
						//self.trigger('requestPlaylist');
						if(self._settings.playlist){
							if(typeof self._settings.playlist == "string"){
								var json = $jQ111.parseJSON(self._settings.playlist);
								var result = [];
								var keys = Object.keys(json);
								keys.forEach(function(key){
									result.push(json[key]);
								});
								return result[0];
							}else if(typeof self._settings.playlist == "object"){
								if(self._settings.playlist.items){
									return self._settings.playlist.items;
								}else{
									return self._settings.playlist;
								}
							}else if(typeof self._settings.playlist == "array"){
								return self._settings.playlist;
							}
						}else{
							return;
						}
					};

					swfobject.embedSWF(
						this._settings.api+"player/hds.swf"
						, this._containerId+'_c'
						, "100%"
						, "100%"
						, "10.2.0"
						, ""
						//, "expressInstall.swf"
						, parameters
						, {
							allowFullScreen: this._settings.allowFullScreen,
							allowscriptaccess: "always",
							wmode: wmodeValue,
							bgcolor: "000000"
						}
						, {
							name: "WSJMediaPlayer"
						},swfObjectStatus
					);

				}
			}
		},

		checkPageEvents: function(evt){
			if(evt != "event40" && evt != "event42" && evt != "event36" && evt != "event96" && evt != "event97" && evt != "event98" && evt != "event99" && evt != "event100" && evt != "event73" && evt != "event74" && evt != "event67"){
				return false
			}else{
				return true;
			}
		},

		loadVideo: function(){

			try{
				var self = this._self;
				var guidLoaded = function(evt){
					if(evt.responseJSON){
						self._videodata = evt.responseJSON.items[0];
						//self._videodata.vr = true; // REMOVE
						try{self._settings.guid = self._videodata.guid}catch(e){}

						if(self._settings.msrc){
							self._videodata.msrc = self._settings.msrc;
						}

						if(self._videodata.thumbnailList){
							self._settings.thumb = self.getThumbnail(self._videodata.thumbnailList,  self._container.width());
							if(self._videoContent && !self._settings.fireTv)
								self._videoContent.attr('poster', self._settings.thumb);
						}
						if(self._videodata.error){
							self.showError(self._videodata.error);
						}else{
							if(!self._settings.autoplay && (!self._isMobile || self._settings.isAmp)){ // required for ios and android click to play issues with the video tag
								self.setupThumbnail();
							}else{
								if(!self._contentInitialized)
									self.initVideo();
								else
									self.startVideo();
							}
							self._container.trigger('onInitialize', self._videodata);
						}
					}
				}

				var guidLoadFail = function(evt){

				}

				var httpParam = "";
				if(this._settings.useHttps)
					httpParam = "&https=1";

				var playerConigUrl = "";
				if(this._settings.guid){
					playerConigUrl = this._settings.api+'find_all_videos.asp?type=guid&count=1'+httpParam+'&query='+this._settings.guid+'&'+this._fields;
				}else if( this._settings.type !== "" &&  this._settings.query !== ""){
					playerConigUrl =  this._settings.api+'find_all_videos.asp?type='+ this._settings.type+'&count=1'+httpParam+'&query='+ this._settings.query+'&'+this._fields;
				}



				if(this._isIE && this._isIE < 11){
					playerConigUrl += "&callback=?";
				}

				$jQ111.ajax({
					url: playerConigUrl,
					type : 'GET',
					async: true,
					dataType: 'json',
					complete: guidLoaded,
					error: guidLoadFail
				});
				this._container.trigger('onInitialize');
			}catch(e){

			}
		},

		showError: function(msg){
			this._container.html('<p class="videoMsg">We are sorry, we are unable to load this video.<br /><span>'+msg+'</span></p>');
			return;
		},

		setupThumbnail: function(){

			var self = this;

			this._container.empty();

			if(!this._settings.thumb){
				if(this._videodata.thumbnailList){
					this._settings.thumb = this.getThumbnail(this._videodata.thumbnailList,  this._container.width());
					if(!this._settings.thumb)
						this._settings.thumb = this._videodata.thumbnailURL;
				}else{
					this._settings.thumb = this._videodata.thumbnailURL;
				}
			}

			var hint = 'videoHint_80';
			var hintImg = 'background-image:url('+this._settings.api+'/player/v2/css/play_btn_80.png); width: 80px; height: 80px;';
			try{
				if(this._container.width() < 600){
					hint = 'videoHint_50';
					hintImg = 'background-image:url('+this._settings.api+'/player/v2/css/play_btn_50.png); width: 50px; height: 50px;';
				}
			}catch(err){}

			var hintLoc = 'bottom: 10px;';

			var style = ' style="'+hintImg+' '+hintLoc+' display: block;  left: 10px; position: absolute; text-indent: -9999px;  no-repeat scroll 0 0 transparent; overflow:hidden;" ';

			this._container.html('<div id="thumbnail_'+this._containerId+'" class="vidThumb" style="position:absolute; cursor:pointer; background-repeat: no-repeat; background-position: center center; z-index: 102; background-size:contain; height:100%; width:100%; background-image:url(' + this._settings.thumb +');"><div class="videoHint '+hint+'" '+style+'></div></div>');
			this._thumbnail = $jQ111('#thumbnail_'+this._containerId);
			this._thumbnail.click(function() {
				self._settings.autoplay = true;
				self._thumbnail.fadeOut(300,function(){self.initVideo()});
			});
			self.resize();
		},

		initHTML5: function(){

			var self = this._self;
			try{
				var testEl = document.createElement( "video" );
				var	canPlay =  testEl.canPlayType('video/mp4; codecs="avc1.42E01E"');
				if((this._videodata.state == "live" || this._videodata.state == "flive") && !this._iOS){
					this._videodata.state = "live";
					canPlay = false;
					if(this._isAndroid && this._androidV >= 4.4){
						canPlay = true;
					}
				}
				document.removeChild(testEl);
			}catch(ignore){}

			if(this._iOS && this._videodata.state == "live"){
				console.log("Ads Disabled - LIVE");
				this._settings.adsEnabled = false;
			}

			if(!canPlay){
				this._container.html('<p class="videoMsg" >Sorry, your browser does not appear to support HTML5 video playback of this type.<br />You will need the flash plugin installed to view this video.<br /><br /><a href="http://www.adobe.com/go/getflashplayer" target="_blank"  border="0" style="margin:0 auto;"><img style="border:none; margin:0 auto; height:auto; width:auto;" height=41 width=160 src="'+this._settings.api+'player/v2/css/get_flash_player.png'+'" /></a></p>');
				return;
			}
			/*
			 if(!this._cssAppended){
			 this._cssAppended = true;
			 var cssLink = $("<link rel='stylesheet' type='text/css' href='http://video-api.wsj.com/api-video/player/v2/css/wsjvideo.min.css'>");
			 $("head").append(cssLink);
			 }
			 */
			if(this._settings.adsEnabled && !this._imaLoaded ){
				try{
					if(typeof google.ima === 'undefined' || !this._imaLoaded){
						this.loadScript(this._settings.imaLibrary, function(){
							self._imaLoaded = true;
							self.initHTML5();
						});
					}
				}catch(e){
					if(!this._imaLoaded){
						this.loadScript(this._settings.imaLibrary,
							function(){ // loaded
								self._imaLoaded = true
								self.initHTML5();
							},
							function(){ // failed
								self._imaLoaded = true;
								self.initHTML5();
							}
						);
					}
				}
				if(!this._imaLoaded){
					return;
				}
			}

			if(this._videodata.vr){ // is VR Video?
				if(!self._vrLoaded){
					self.loadVRLibs(self);
					return;
				}
			}

			if(!this._settings.thumb){

				if(this._videodata.thumbnailList){
					this._settings.thumb = this.getThumbnail(this._videodata.thumbnailList,  this._container.width());
				}else{
					this._settings.thumb = this._videodata.thumbnailURL;
				}
			}
			if(this._settings.fireTv){
				this._settings.thumb = "";
			}

			var structure = '<div class="video_wrapper" id="wrapper_'+this._containerId+'" >';
			if((!this._settings.autoplay || this._iOS || this._isAndroid) && !this._settings.fireTv){
				structure += this.generateThumbnail();
			}

			structure += '<div id="endscreen_'+this._containerId+'" class="endScreen"></div><div class="video_buffering" id="buffering_'+this._containerId+'"></div><video width="100%" autoplay="autoplay" height="100%" class="wsjvideo_player" id="videoplayer_'+this._container.attr("id")+'"  preload="false"><p class="videoMsg">Sorry, your browser does not appear to support HTML5 video playback.<br />You will need the flash plugin installed to view this video.<br /><br /><a href="http://www.adobe.com/go/getflashplayer" target="_blank"  border="0" style="margin:0 auto;"><img height=41 width=160 src="'+this._settings.api+'player/v2/css/get_flash_player.png'+'" /></a></p></video><img class="wsjvideo_poster" id="poster_'+this._container.attr("id")+'" /><audio width="100%" height="100%" id="audioplayer_'+this._container.attr("id")+'" controls>Your browser does not support the audio tag.</audio><div id="vrWrapper_'+this._containerId+'" class="vrWrapper"></div>';

			structure += '</div>'; // end wrapper
			this._container.append(structure);

			this._videoContent = $jQ111('#videoplayer_'+this._containerId);
			this._videoTag = this._videoContent.get(0);
			this._buffering = $jQ111("#buffering_"+this._containerId);
			this._audioContent = $jQ111('#audioplayer_'+this._containerId);
			this._audioPoster = $jQ111('#poster_'+this._containerId);
			this._vrWrapper		= $jQ111('#vrWrapper_'+this._containerId);
			this._vrWrapper.hide();

			if(this._isIphone){
				this._videoContent.on('webkitendfullscreen', function(e) {
					if(self._adMode){
						self._thumbnail.show();
						self._thumbnail.click(function(){self._thumbnail.hide(); self._thumbnail.off("click"); self._videoTag.play();});
					}
				});
			}

			this._videoTag.volume	= this._volume;
			this._videoTag.muted  	= this._muted;

			this._wrapper = $jQ111('#wrapper_'+this._containerId);
			this._endScreen = $jQ111('#endscreen_'+this._containerId);

			if(!this._settings.disableHtmlControls && (!this._isIphone || (this._isTwitter && this._isIpad))){
				this.addPlayerControls();
				this._videoContent.prop("volume", .8);
			}else{
				if(!this._settings.fireTv)
					this._videoContent.prop("controls", true);
			}
			this.addVideoTagListeners(true);
			this.addEventListeners();
			this._wrapper.hover(function(){self.onRollOver();}, function(){self.onRollOut();});

			if($jQ111("#thumbnail_"+this._containerId)){
				this._thumbnail = $jQ111("#thumbnail_"+this._containerId);
				this._thumbnail.click(function() {
					$jQ111(this).fadeOut(300,function(){});
					self._thumbnail.off("click");
					self.startVideo();
				});
			}

			/*
			 if(this._isAndroid || this._isIpad){
			 this._wrapper.append('<div id="adClick_'+this._containerId+'" class="adClickTarget"></div>');
			 this._adsClickTarget = $jQ111('#adClick_'+this._containerId);
			 this._adsClickTarget.hide();

			 //this._wrapper.append('<div id="adSkip_'+this._containerId+'" class="adSkip"></div>');
			 //this._adsSkipButton = $jQ111('#adSkip_'+this._containerId);
			 this._adsSkipButton.click(function() {
			 if(self._adsManager){
			 self._adsManager.skip();
			 }
			 });
			 this._adsSkipButton.hide();

			 }
			 */


			this.resize();
			$jQ111(window).resize(function() {
				self.resize();
			});

			if(this._videodata.vr){ // is VR Video?
				this.initVrPlayback(this._vrWrapper);
				return;
			}

			if(this._settings.autoplay && ( !this._isMobile || this._settings.fireTv === true )){
				this.startVideo();
			}
		},

		initVrPlayback: function(){


			var self = this;
			var texture_placeholder;
			this._vrComponents = {};
			this._vrComponents.isUserInteracting = false;
			onMouseDownMouseX = 0, onMouseDownMouseY = 0,
				lon = 0, onMouseDownLon = 0,
				lat = 0, onMouseDownLat = 0,
				phi = 0, theta = 0;
			var videoUrl = "http://www.australia.com/video/2090103349001/201601/3337/2090103349001_4710730599001_4710667050001.mp4";
			var mesh;
			this._vrComponents.camera = new THREE.PerspectiveCamera( 75, this._vrWrapper.innerWidth() / this._vrWrapper.innerHeight(), 1, 1100 );
			this._vrComponents.camera.target = new THREE.Vector3( 0, 0, 0 );
			this._vrComponents.scene = new THREE.Scene();

			var geometry = new THREE.SphereGeometry( 500, 60, 40 );
			geometry.scale( - 1, 1, 1 );

			this._videoTag.crossOrigin = "anonymous";
			this._videoTag.src = videoUrl;
			var texture = new THREE.VideoTexture( this._videoTag );
			texture.minFilter = THREE.LinearFilter;

			var material   = new THREE.MeshBasicMaterial( { map : texture } );

			mesh = new THREE.Mesh( geometry, material );
			this._vrComponents.scene.add( mesh );

			this._vrComponents.renderer = new THREE.WebGLRenderer();

			var context = this._vrComponents.renderer.getContext();
			if(!context.getExtension("OES_texture_half_float_linear")){
				//alert("VR Not Supported.");
				//return false;
			}
			this._vrComponents.renderer.setPixelRatio( this._vrWrapper.devicePixelRatio );
			this._vrComponents.renderer.setSize( this._vrWrapper.innerWidth(), this._vrWrapper.innerHeight() );
			this._vrWrapper[0].appendChild( this._vrComponents.renderer.domElement );
			this._videoTag.play();
			this._videoContent.hide();

			$jQ111(window).resize(function() {
				onWindowResize();
			});

			animate();

			if(this._isMobile){
				this._vrWrapper[0].addEventListener( 'touchstart', onDocumentMouseDown, false );
				this._vrWrapper[0].addEventListener( 'touchmove', onDocumentMouseMove, false );
				this._vrWrapper[0].addEventListener( 'touchend', onDocumentMouseUp, false );
			}else{
				document.addEventListener( 'mousedown', onDocumentMouseDown, false );
				document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				document.addEventListener( 'mouseup', onDocumentMouseUp, false );
			}


			//this._vrWrapper[0].on( "taphold", function( event ) {alert("aa");} )

			function onDocumentMouseDown( event ) {

				event.preventDefault();

				if(typeof event.touches !== 'undefined'){
					event.clientX = event.touches[0].clientX;
					event.clientY = event.touches[0].clientY;
				}

				self._vrComponents.isUserInteracting = true;

				onPointerDownPointerX = event.clientX;
				onPointerDownPointerY = event.clientY;

				onPointerDownLon = lon;
				onPointerDownLat = lat;

			}

			function onDocumentMouseMove( event ) {
				if ( self._vrComponents.isUserInteracting === true ) {
					if(typeof event.touches !== 'undefined'){
						event.clientX = event.touches[0].clientX;
						event.clientY = event.touches[0].clientY;
					}
					lon = ( onPointerDownPointerX - event.clientX ) * 0.1 + onPointerDownLon;
					lat = ( event.clientY - onPointerDownPointerY ) * 0.1 + onPointerDownLat;
				}
			}

			function onDocumentMouseUp( event ) {
				self._vrComponents.isUserInteracting = false;
			}

			function onWindowResize() {
				self._vrComponents.camera.aspect = self._vrWrapper.innerWidth() / self._vrWrapper.innerHeight();
				self._vrComponents.camera.updateProjectionMatrix();
				self._vrComponents.renderer.setSize( self._vrWrapper.innerWidth(), self._vrWrapper.innerHeight() );
			}

			function animate() {
				requestAnimationFrame( animate );
				update();
			}

			function update() {

				lat = Math.max( - 85, Math.min( 85, lat ) );
				phi = THREE.Math.degToRad( 90 - lat );
				theta = THREE.Math.degToRad( lon );

				self._vrComponents.camera.target.x = 500 * Math.sin( phi ) * Math.cos( theta );
				self._vrComponents.camera.target.y = 500 * Math.cos( phi );
				self._vrComponents.camera.target.z = 500 * Math.sin( phi ) * Math.sin( theta );

				self._vrComponents.camera.lookAt( self._vrComponents.camera.target );

				/*
				 // distortion
				 camera.position.copy( camera.target ).negate();
				 */

				self._vrComponents.renderer.render( self._vrComponents.scene, self._vrComponents.camera );
			}
			return true;
		},

		initTouchcast: function(){
			if(TouchCastPlayerSDK){
				var self = this;
				TouchCastPlayerSDKEvent.removeEvent(document, "TouchCast_sdkReady", function(e) {self.touchCastEvent(e);});
				TouchCastPlayerSDKEvent.removeEvent(document, "TouchCast_interactiveLayerInitialized", function(e) {self.touchCastEvent(e);});
				TouchCastPlayerSDKEvent.removeEvent(document, "TouchCast_videosPartiallyReady", function(e) {self.touchCastEvent(e);});
				TouchCastPlayerSDKEvent.removeEvent(document, "TouchCast_videosFullyReady", function(e) {self.touchCastEvent(e);});
				TouchCastPlayerSDKEvent.removeEvent(document, "TouchCast_videoLoaded", function(e) {self.touchCastEvent(e);});

				TouchCastPlayerSDKEvent.addEvent(document, "TouchCast_sdkReady", function(e) {self.touchCastEvent(e);});
				TouchCastPlayerSDKEvent.addEvent(document, "TouchCast_interactiveLayerInitialized", function(e) {self.touchCastEvent(e);});
				TouchCastPlayerSDKEvent.addEvent(document, "TouchCast_videosPartiallyReady", function(e) {self.touchCastEvent(e);});
				TouchCastPlayerSDKEvent.addEvent(document, "TouchCast_videosFullyReady", function(e) {self.touchCastEvent(e);});
				TouchCastPlayerSDKEvent.addEvent(document, "TouchCast_videoLoaded", function(e) {self.touchCastEvent(e);});

				if(TouchCastPlayerSDK.checkIfInitialized()){
					TouchCastPlayerSDK.createInteractivePlayer('touchcast_swf_container', {}, self);
					//TouchCastPlayerSDK.loadVideos(this._videodata.touchCastID);
					//TouchCastPlayerSDK.videoStart(this._videodata.touchCastID);
				}else{
					TouchCastPlayerSDK.loadFiles();
				}
				return;
			}
		},

		touchCastEvent: function(e){
			console.log(e.type);
			switch (e.type) {
				case 'TouchCast_sdkReady':
					TouchCastPlayerSDK.createInteractivePlayer('touchcast_swf_container', {}, this);
					break;
				case 'TouchCast_interactiveLayerInitialized':
					TouchCastPlayerSDK.loadVideos(this._videodata.touchCastID);
					break;
				case 'TouchCast_videosFullyReady':

					break;
				case 'TouchCast_videoLoaded':

					break;
				case 'TouchCast_videosPartiallyReady':
					this._touchCastMode = true;
					this._videodata.video320kMP4Url = e.detail.videoInfo[0].video;
					this._videodata.video664kMP4Url = e.detail.videoInfo[0].video;
					this._videoContent.attr('src', this._videodata.video320kMP4Url);
					//this._videoTag.play(); // android 4.0+ hack  // issue possibly
					//TouchCastPlayerSDK.videoStart(this._videodata.touchCastID);
					if(this._isIpad){
						this._videoContent.prop("controls", false);
						this._controls.show();
					}
					break;
			}
		},

		loadVRLibs: function(scope, callback){
			try{
				if(typeof THREE === 'undefined' || !scope._vrLoaded){
					scope.loadScript(scope._settings.vrLibrary, function(){
						scope._vrLoaded = true;
						scope.initHTML5();
					});
				}
			}catch(e){
				if(!scope._vrLoaded){
					scope.loadScript(scope._settings.vrLibrary,
						function(){ // loaded
							scope._vrLoaded = true
							scope.initHTML5();
						},
						function(){ // failed
							scope._vrLoaded = true;
							scope.initHTML5();
						}
					);
				}
			}
		},

		startVideo: function(){

			var self = this;
			if(this._adMode){
				if(this._adsManager){
					this._adsManager.destroy();
					this._adsManager = null;
				}
			}

			this.onNewVideo(null);

			try{
				if(this._videodata.touchCastID){
					this._audioContent.hide();
					this._audioPoster.hide();
					if(this._isIE){
						if(this._isIE > 10){
							this.initTouchcast();
							return;
						}
					}else{
						this.initTouchcast();
						if(this._isIpad)
							this._videoTag.play();
						return;
					}
				}
			}catch(e){}

			this._isAudio = false;
			if(this._flashPlayer){ // is not flash
				this._flashPlayer.playVideo(this._videodata);
			}else{
				if(this._videodata.type == "audio" || this._videodata.type == "podcast"){
					this._isAudio = true;
					this._audioContent.attr('src', this._videodata.audioURL);
					this._audioPoster.attr('src', this._settings.thumb);
					this._audioPoster.show();
					if(this._isMobile){
						this._audioContent.show();
					}else{
						this._audioContent.hide();
					}
					this._audioContent[0].play();
					this._videoTag.pause();
					this._videoContent.hide();
					this.checkPlayerControls(this);
					this.resize();
				}else{
					this._audioPoster.attr('src', "");
					this._audioContent.attr('src', "");
					this._audioContent.hide();
					this._audioPoster.hide();
					this._isAudio = false;
					this._videoContent.show();
					if(this._settings.adsEnabled){  // add the required ad structure
						this.initializeAds();
					}
					if(this._iOS || this._settings.fireTv || (this._isLive && (this._isAndroid || this._androidV >= 4.4))){
						this._videoContent.attr('src', this._videodata.hlsNoCaptions);
					}else{
						if(!this._videodata.vr){
							if(this._selectedBitrate && this._videodata[this._selectedBitrate]){
								this._videoContent.attr('src', this._videodata[this._selectedBitrate]);
							}else{
								if(this._videodata.video664kMP4Url)
									this._videoContent.attr('src', this._videodata.video664kMP4Url);
								else
									this._videoContent.attr('src', this._videodata.video320kMP4Url);
							}
						}
					}
					this._videoTag.load = function() {
						self._videoTag.play(); // android 4.0+ hack  // issue possibly
					};
					try{
						this._comscoreTag.stop();
						this._comscoreTag.playContentPart(this._comscoreMeta);
					}catch(e){}
					this._videoTag.load();
					this._videoTag.play();
					//if(this._isMobile)  // allows tracking to fire on video start on IOS but prevent before if autoplay is set to false.
					//this.initialized();
				}
			}
		},

		resize: function(){  // update sizes for important elements

			var self = this;
			if(this._adContainer && this._adsManager){
				var vMode = google.ima.ViewMode.NORMAL;
				if(screenfull){
					if(screenfull.isFullscreen){
						vMode = google.ima.ViewMode.FULLSCREEN;
					}
				}

				setTimeout(
					function(){
						var padd = 30;
						try{
							if(!self._currentAd.isLinear()){
								padd = 30;
							}}catch(e){}
						self._adsManager.resize(self._wrapper.width(), self._wrapper.height() - padd , vMode);
					}, 100);

			}

			if(this._endScreen){
				this._endScreen.height(self._wrapper.height());
				this._endScreen.width(self._wrapper.width());
				this._endScreen.endScreen("update");
			}

			if(this._audioPoster){
				this._audioPoster.height(self._wrapper.height());
				this._audioPoster.width(self._wrapper.width());
			}

			try{
				var hintLoc = 'bottom: 10px;';
				var aspRatio = this._container.height() / this._container.width();
				if(aspRatio > .56){
					var loc = 0;
					loc = Math.round(this._container.height() / 2) - 10;
					loc += Math.round(this._container.width() * .56) / 2;
					loc -= $jQ111(".videoHint").first().width();
					hintLoc	= loc+'px'
					$jQ111(".videoHint").css("bottom",  "");
					$jQ111(".videoHint").css("top",  hintLoc);
				}else{
					$jQ111(".videoHint").css("bottom",  "10px");
				}
			}catch(e){
				$jQ111(".videoHint").css("top",  "");
				$jQ111(".videoHint").css("bottom",  "10px");
			}

		},

		onRollOver: function(){
			if(this._controls && !this._isAndroid && !this._iOS){
				this._controls.stop(true, true).fadeIn(300);
			}
		},

		onRollOut: function(){
			var self = this;
			if(this._controls && !this._isAndroid && !this._adMode){
				this._controls.stop().delay( 800 ).fadeOut(300);
				if(this._bitrateList){
					this._bitrateList.stop().fadeOut(300, function(){
						self._bitrateList.remove();
						delete(self._bitrateList);
					});
				}
				if(this._ccList){
					this._ccList.stop().fadeOut(300, function(){
						self._ccList.remove();
						delete(self._ccList);
					});
				}
			}
		},

		generateThumbnail: function(){
			var self = this;
			var getThumbnail = function (list, w){
				var rtn = false;
				var i, len;
				for (i=0,len=list.length; i<len; i = i + 1)
				{
					rtn = list[i].url;
					if(list[i].width > w){
						return rtn;
					}
				}
				return rtn;
			}

			var hint = 'videoHint_80';
			try{
				if(this._container.width() < 600){
					hint = 'videoHint_50';
				}
			}catch(err){}

			return '<div id="thumbnail_'+this._containerId+'" style="position:absolute; cursor:pointer; background-repeat: no-repeat; background-position: left center; z-index: 102; background-size:contain; height:100%; width:100%; background-image:url(' + this._settings.thumb +')" class="vidThumb"><div class="videoHint '+hint+'"></div></div>';
		},

		// TRACKING FUNCTIONS //

		initialized: function(){

			if(this._videodata.type == "audio" || this._videodata.type == "podcast"){
				this._tObject.pageName = "DJPodcasts_Podcast_"+this._videodata.name+"_"+this._videodata.duration;
			}else{
				this._tObject.pageName = "WSJLive_Video_"+this._videodata.name+"_"+this._videodata.duration;
			}

			this._tObject.eVar4 = this._tObject.pageName;
			this._tObject.eVar10 = this._tObject.pageName;

			try{this.setTrackingVars();}catch(e){};


			this._initTracked = true;
			if(this._settings.endScreenId){
				this._settings.larsId = this._settings.endScreenId;
				this._settings.endScreenId = null;
			}

			$jQ111.ajax({
				url: "https://video-api-secure.wsj.com/enf/wsjdn-video.asp?source="+this._settings.larsId+"&guid={"+this._settings.guid+"}",
				dataType: "json"
			});

			try{
				COMSCORE.beacon({ c1:1, c2:"6035148", c3:this._comscoreC3, c5:"020000", c7:document.domain, c8:document.title, c10:"1-4" });
			}catch(e){}

			try{
				window.vidora.push(["send", "play", this._videodata.guid]);
			}catch(e){}

			try{
				if(this._adsLoading){
					this._adsLoading = false;
					this._tObject.linkTrackEvents = this._tObject.events = this._currentEvents[1]; // event40 , event112
					try{this.setTrackingVars();}catch(e){};
					this._tObject.pev2 = "User_Clicked_Away_Before_Ad_Playback_Started";
					this._tObject.eVar46 = "none"; this._tObject.eVar50 = "none";
					this._tObject.pe = 'lnk_o';  svid.tl(this,'o',this._tObject.pev2, this._tObject);
				}
			}catch(e){}

			if(this.checkPageEvents(svid.events)){
				//this._pageEvents = svid.events;
			}

			this._tObject.linkTrackEvents = this._tObject.events = this._currentEvents[0]; // event36 , event101

			try{this.setTrackingVars();}catch(e){};
			if(this._isAudio){
				this._tObject.pev2 = "Podcast_Start";
			}else{
				this._tObject.pev2 = "Video_Start";
			}

			this._tObject.eVar46 = "none"; this._tObject.eVar49 = "none"; this._tObject.eVar50 = "none";
			this._tObject.pe = 'lnk_o';  svid.tl(this,'o',this._tObject.pev2, this._tObject);
			this._tObject.linkTrackEvents = this._tObject.events  = "";

			//delete(svid.linkTrackEvents);
			//delete(svid.events);

		},

		uProgress: function(perc, tm){
			if(!this._adMode){
				if(perc > 0.01 && !this._contentStartTracked){
					this._contentStartTracked = true;
					this.contentStarted();
				}

				if( !this._trackingMilestones[0] && (perc >= 0.25)){

					this._trackingMilestones[0] = true;
					this._tObject.pageName = this._tObject.eVar10;

					this._tObject.linkTrackEvents = this._tObject.events = this._currentEvents[9]; // event97 , event109

					try{this.setTrackingVars();}catch(e){};

					if(this._isAudio){
						this._tObject.pev2 = "Podcast_Milestone 1/4";
					}else{
						this._tObject.pev2 = "Video_Milestone 1/4";
					}

					this._tObject.eVar46 = "none"; this._tObject.eVar49 = "none"; this._tObject.eVar50 = "none";
					this._tObject.pe = 'lnk_o';  svid.tl(this,'o',this._tObject.pev2, this._tObject);
					this._tObject.linkTrackEvents = this._tObject.events  = "";

				}
				if( !this._trackingMilestones[1] && (perc >= 0.5)){
					this._trackingMilestones[1] = true;

					this._tObject.linkTrackEvents = this._tObject.events = this._currentEvents[10]; // event98 , event110

					try{this.setTrackingVars();}catch(e){};
					this._tObject.pageName = this._tObject.eVar10;
					if(this._isAudio){
						this._tObject.pev2 = "Podcast_Milestone 2/4";
					}else{
						this._tObject.pev2 = "Video_Milestone 2/4";
					}
					this._tObject.eVar46 = "none"; this._tObject.eVar49 = "none"; this._tObject.eVar50 = "none";
					this._tObject.pe = 'lnk_o';  svid.tl(this,'o',this._tObject.pev2, this._tObject);
					this._tObject.linkTrackEvents = this._tObject.events  = "";

				}
				if( !this._trackingMilestones[2] && (perc >= 0.75)){
					this._trackingMilestones[2] = true;

					this._tObject.linkTrackEvents = this._tObject.events = this._currentEvents[11]; // event99 , event111

					try{this.setTrackingVars();}catch(e){};
					this._tObject.pageName = this._tObject.eVar10;
					if(this._isAudio){
						this._tObject.pev2 = "Podcast_Milestone 3/4";
					}else{
						this._tObject.pev2 = "Video_Milestone 3/4";
					}
					this._tObject.eVar46 = "none"; this._tObject.eVar49 = "none"; this._tObject.eVar50 = "none";
					this._tObject.pe = 'lnk_o';  svid.tl(this,'o',this._tObject.pev2, this._tObject);
					this._tObject.linkTrackEvents = this._tObject.events  = "";

				}
				if( !this._trackingMilestones[3] && (perc >= 0.95)){
					this._trackingMilestones[3] = true;

					this._tObject.linkTrackEvents = this._tObject.events = this._currentEvents[12]; // event100 , event112

					try{this.setTrackingVars();}catch(e){};
					this._tObject.pageName = this._tObject.eVar10;
					if(this._isAudio){
						this._tObject.pev2 = "Podcast_Milestone 4/4";
					}else{
						this._tObject.pev2 = "Video_Milestone 4/4";
					}
					this._tObject.eVar46 = "none"; this._tObject.eVar49 = "none"; this._tObject.eVar50 = "none";
					this._tObject.pe = 'lnk_o';  svid.tl(this,'o',this._tObject.pev2, this._tObject);
					this._tObject.linkTrackEvents = this._tObject.events  = "";

				}
			}
			if(Math.floor(tm / 15) > this._pingMilestone && !this._isAudio){
				/*
				 this._pingMilestone = Math.floor(tm / 15);
				 svid.linkTrackEvents = svid.events = "event67";
				 try{this.setTrackingVars();}catch(e){};
				 svid.pageName = svid.eVar10;
				 svid.pev2 = "Video_Ping";
				 svid.eVar46 = "none"; svid.eVar50 = "none";
				 svid.pe = 'lnk_o';  svid.tl(this,'o',svid.pev2);
				 svid.linkTrackEvents = svid.events  = "";
				 */
				try{window.vidora.push(["send", "playhead_update", this._videodata.guid,  { params: { playhead_time: tm, duration: this._videodata.duration } }])}catch(e){}
			}
			this._container.trigger({type:"onTimeUpdate",percent:perc, time:tm});

			try{if(this._touchCastMode)
				TouchCastPlayerSDK.videoPlayTimeUpdate(tm);}catch(e){}
		},
		onNewVideo: function(data){
			this._touchCastMode = false;
			if(data !== null){
				try{
					data.guid = data.id.replace(/[^a-zA-Z 0-9]+/g,'');
				}catch(e){}
				this._videodata = data;
			}

			this._contentStartTracked = false;
			this._trackingMilestones = [false,false,false,false];
			this._pingMilestone = 0;
			this._initTracked = false;
			try{
				this.setTrackingVars();
			}catch(e){};
			try{
				if(!this._settings.adsEnabled){
					this._tObject.linkTrackEvents = this._tObject.events = this._currentEvents[4]; // event46 , event105;
					this._tObject.pev2 = "Ads_Disabled_Via_Player_Param";
					this._tObject.eVar46 = "none"; this._tObject.eVar49 = "none"; this._tObject.eVar50 = "none";
					this._tObject.pe = 'lnk_o';  svid.tl(this,'o',this._tObject.pev2, this._tObject);
					this._tObject.linkTrackEvents = this._tObject.events  = "";
				}
			}catch(e){}
			this._container.trigger('newVideo',this._videodata);

			this.initialized();
			try{
				TouchCastPlayerSDK.exitPIP();
			}catch(e){}
		},

		contentStarted: function(){
			try{this.setTrackingVars();}catch(e){};

			if(this._videodata.type == "audio" || this._videodata.type == "podcast"){
				this._tObject.pageName = "DJPodcasts_Podcast_"+this._videodata.name+"_"+this._videodata.duration;
			}else{
				this._tObject.pageName = "WSJLive_Video_"+this._videodata.name+"_"+this._videodata.duration;
			}

			this._tObject.eVar4 = this._tObject.pageName;
			try{
				var modValue = location.search.split('?mod=')[1];
				if(modValue)
					this._tObject.eVar5 = modValue;
			}catch(e){}
			this._tObject.eVar10 = this._tObject.pageName;

			this._tObject.linkTrackEvents = this._tObject.events = this._currentEvents[8]; // event96 , event108

			if(this._isAudio){
				this._tObject.pev2 = "Podcast_Content Started";
			}else{
				this._tObject.pev2 = "Video_Content Started";
			}
			this._tObject.eVar46 = "none"; this._tObject.eVar49 = "none"; this._tObject.eVar50 = "none";
			this._tObject.pe = 'lnk_o';  svid.tl(this,'o',this._tObject.pev2, this._tObject);
			this._tObject.linkTrackEvents = this._tObject.events  = "";

			try{this._comscoreTag.playContentPart(this._comscoreMeta);}catch(e){}
		},

		overrideAudioVars: function(){

		},

		setTrackingVars: function(){
			var data = this._videodata;
			var pageValues = this.getVideoContent();

			var isIframe = (window!=window.top);
			var url = (window.location != window.parent.location) ? document.referrer: document.location.href;
			var pageTitle = (window.location != window.parent.location) ? this._tObject.pageName: document.title;
			var channel = "";

			var typePrefix = 'video_';
			var wsjTypePrefix = 'WSJLive_';
			var wsjVideoPrefix = 'WSJLive_Video_';
			var embededOnsite = 'video embedded onsite';
			var embededOffsite = 'video embedded offsite';

			if(this._videodata.type == "audio" || this._videodata.type == "podcast"){
				this._isAudio = true;

				typePrefix 		= 'podcast_';
				wsjTypePrefix 	= 'DJPodcasts_';
				embededOnsite 	= 'podcast embedded onsite';
				embededOffsite 	= 'podcast embedded offsite';
				wsjVideoPrefix 	= 'DJPodcasts_Podcast_';
				pageValues.prop2 = 'WSJ_Podcast Center';
				this._currentEvents = this._events.audio;
			}else{
				this._isAudio = false;
				this._currentEvents = this._events.video;
			}




			this._isLive = false;
			if(data.state){
				if(data.state == "live"){
					this._isLive = true;
				}
			}
			try{
				if(window['s']){
					channel = s.channel;
				}else{
					channel = this.getDomain(url);
				}
			}catch(e){
				channel = this.getDomain(document.domain);
			}

			var prefix = "wsj";
			this._tObject.linkTrackVars="pageName,events,channel,pageType,eVar3,eVar4,eVar5,eVar10,eVar11,eVar13,eVar14,eVar15,eVar16,eVar17,eVar18,eVar20,eVar21,eVar26,eVar31,eVar32,eVar45,eVar46,eVar49,eVar50,eVar67,eVar37,eVar38,eVar39,eVar40,eVar53,eVar54,eVar25,eVar55,eVar61,eVar68,eVar25,eVar29,eVar52,eVar62,eVar66,eVar69,eVar70,eVar75";

			this._tObject.debugTracking 	= 	false;
			this._tObject.trackLocal 	= 	true;
			this._tObject.server			=	"om.dowjoneson.com";
			this._tObject.account = "djglobal,djwsjlive";

			try{
				if (url.indexOf("wsj.com") !== -1) {
					this._tObject.account = "djglobal,djwsj";
				}
				if(url.indexOf('live.wsj.com')!== -1) {
					this._tObject.account = "djglobal,djwsjlive";
				}
				if(url.indexOf('wsj.com/video')!== -1) {
					this._tObject.account = "djglobal,djwsjlive";
				}
				if(url.indexOf("cwsj.com") !== -1) {
					this._tObject.account = "djglobal,djwsjchina";
				}
				if(url.indexOf("cn.wsj.com") !== -1){
					this._tObject.account = "djglobal,djwsjchina";
				}
				if(url.indexOf("jwsj.com") !== -1) {
					this._tObject.account = "djglobal,djjapanwsj";
				}
				if (url.indexOf("kr.wsj.com") !== -1) {
					this._tObject.account = "djglobal,djwsjkorea";
				}
				if (url.indexOf("indo.wsj.com") !== -1) {
					this._tObject.account = "djglobal,djwsjindonesia";
				}
				if (url.indexOf("marketwatch.com") !== -1) {
					this._tObject.account = "djglobal,djmarketwatch";
				}
				if (url.indexOf("barrons.com") !== -1) {
					this._tObject.account = "djglobal,djbarrons";
				}
				if (url.indexOf("wsj.de") !== -1) {
					this._tObject.account = "djglobal,djwsjgermany";
				}
				if(url.indexOf('allthingsd.com')!== -1){
					this._tObject.account = "djglobal,djatd";
				}
				if(url.indexOf('wsj.com.tr')!== -1){
					this._tObject.account = "djglobal,djwsjturkey";
				}
				if(url.indexOf('efinancialnews.com')!== -1){
					this._tObject.account = "djglobal,djefinancialnews";
				}
				if(url.indexOf('mansionglobal.com')!== -1){
					this._tObject.account = "djmansionglobal";
				}
			}catch(e){
				this._tObject.account = "djglobal,djwsjlive";
			}

			if(channel === false){
				this._tObject.channel		=	"WSJ"; // WSJ, MarketWatch, Barrons Online
			}else{
				this._tObject.channel		=	channel;
			}
			this._tObject.pageType		=	""; //

			this._tObject.eVar3		=	""; //user uuid
			this._tObject.eVar4		=	pageTitle; 			// page name of page where video is played.
			this._tObject.eVar10		=	wsjVideoPrefix+data.name+"_"+data.duration;
			this._tObject.eVar11		=	this._tObject.channel;					// WSJDN site where video is being played
			this._tObject.eVar13		=	typePrefix+data.doctypeID; 	// doc type ID from player; in old implementation, this went into c8
			this._tObject.eVar14		=	data.adZone; 				// video ad zone; in old implementation, this went into c13
			this._tObject.eVar15		=	wsjTypePrefix+data.author; 	// name of video creator; in old implementation, this went into c21

			if(this._settings.showName){
				this._tObject.eVar16		=	typePrefix+settings.showName;
			}else if(data.omniProgramName){
				this._tObject.eVar16		=	data.omniProgramName;
			}else{
				this._tObject.eVar16		=	typePrefix+data.column;
			}

			if(channel === false){
				this._tObject.eVar17		=	(!isIframe) ? document.domain : embededOffsite; // if viewed offsite, [subdomain.domain.com]
				this._tObject.eVar18		=	embededOffsite; // page name of page where video is played.
				this._comscoreC3 = "13047035";
			}else{
				if (channel == "MarketWatch") { this._comscoreC3 = "13047034"; }
				else if (channel == "Barrons Online" || channel == 'barrons-video') { this._comscoreC3 = "13047031"; }
				else if(channel == "AllThingsD"){this._comscoreC3= "13047033";}
				else if(channel == "SmartMoney"){this._comscoreC3 = "3005492";}
				else if (channel == "FINS") { this._comscoreC3 = "13047038"; }
				else {this._comscoreC3 = "13047035";}

				if(channel == "AllThingsD"){
					prefix = "allthingsd";
				}else if(channel == "SmartMoney"){
					prefix = "sm";
				}
				this._tObject.eVar17		=	null; // if viewed offsite, [subdomain.domain.com]
				this._tObject.eVar18		=	channel; // page name of page where video is played.
			}

			if(data[prefix+'-section']){
				var ln = wsjVideoPrefix+data[prefix+'-section'];
				if(data[prefix+'-subsection']){
					ln += "_"+data[prefix+'-subsection'];
				}
				this._tObject.eVar20		=	ln; // describes the tabs where video is viewed on the WSJ Live site; in old implementation, this went into c22/c19
			}else{
				this._tObject.eVar20		=	null; // describes the tabs where video is viewed on the WSJ Live site; in old implementation, this went into c22/c19
			}

			this._tObject.eVar21		=	typePrefix+data.guid; // page name of page where video is played.

			 this._tObject.eVar26 = "WSJ_free"; // whether user is a wsjdn subscriber; in old implementation, this went into c27
			try{
				if(this.getCookie('REMOTE_USER')){
					this._tObject.eVar26 = "WSJ_sub_yes";
				}else{
					this._tObject.eVar26 = "WSJ_free";	
				}
			}catch(e){} 
			this._tObject.eVar27		= 	"Homepage";
			var d = new Date();
			var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
			var easternDate = new Date(utc + (3600000*-5.0));
			var weekday = new Array(7);
			weekday[0]="Sunday";
			weekday[1]="Monday";
			weekday[2]="Tuesday";
			weekday[3]="Wednesday";
			weekday[4]="Thursday";
			weekday[5]="Friday";
			weekday[6]="Saturday";

			this._tObject.eVar31		=	weekday[easternDate.getDay()]; // current day
			this._tObject.eVar32		=	easternDate.getHours() + ":" + easternDate.getMinutes(); // time
			var keywords = wsjTypePrefix+"null";
			if(data.keywords){
				if(data.keywords.length > 0){
					keywords = wsjTypePrefix;
					var  i;
					for (i=0;i<data.keywords.length;i = i + 1){
						keywords += data.keywords[i] + "|";
					}
					keywords = keywords.substr(0,keywords.length-1);
				}else{
					keywords = wsjTypePrefix+"null";
				}
			}
			this._tObject.eVar45 = "";
			this._tObject.eVar46 = "none"; this._tObject.eVar49 = "none"; this._tObject.eVar50 = "none";
			try{
				if(this._flashPlayer)
					this._tObject.eVar45	= "flash";
				else
					this._tObject.eVar45	= "html - 2.5.92";
			}catch(e){this._tObject.eVar45	= "html - 2.5.92";}

			this._tObject.eVar67	= 	keywords;

			if(channel === false){
				this._tObject.eVar37		=	embededOffsite;
				this._tObject.eVar38		=	embededOffsite;
				this._tObject.eVar39		=	embededOffsite;
				this._tObject.eVar40		=	embededOffsite;
				this._tObject.eVar53		=	embededOffsite;
				this._tObject.eVar54		= 	embededOffsite;
				this._tObject.eVar25		= 	embededOffsite;
				this._tObject.eVar55		= 	embededOffsite;
				this._tObject.eVar61		= 	embededOffsite;
				this._tObject.eVar68		= 	typePrefix+"emb";
				this._tObject.eVar29		=	embededOffsite;
				if(this._isLive){
					this._tObject.eVar69 = typePrefix+"live";
				}else{
					this._tObject.eVar69 = typePrefix+"vod_program";
				}
			}else{
				this._tObject.eVar4		=	(pageValues.pageName !== undefined)  ? pageValues.pageName : pageTitle;  // if page pagename is defined, use that.
				this._tObject.eVar29		=	(pageValues.prop26 !== undefined)  ? pageValues.prop26 : embededOnsite;
				this._tObject.eVar37		=	(pageValues.prop3 !== undefined)  ? pageValues.prop3 : embededOnsite;
				this._tObject.eVar38		=	(pageValues.prop19 !== undefined)  ? pageValues.prop19 : embededOnsite;
				this._tObject.eVar39		=	(pageValues.prop4 !== undefined)  ? pageValues.prop4 : embededOnsite;
				this._tObject.eVar40		=	(pageValues.prop4 !== undefined)  ? pageValues.prop4 : embededOnsite;
				this._tObject.eVar53		=	(pageValues.prop19 !== undefined)  ? pageValues.prop19 : embededOnsite;
				this._tObject.eVar25		= 	(pageValues.prop2 !== undefined)  ? pageValues.prop2 : embededOnsite;
				this._tObject.eVar54		= 	(pageValues.prop2 !== undefined)  ? pageValues.prop2 : embededOnsite;
				this._tObject.eVar55		= 	(pageValues.prop26 !== undefined)  ? pageValues.prop26 : embededOnsite;
				this._tObject.eVar61		= 	(pageValues.prop21 !== undefined)  ? pageValues.prop21 : embededOnsite;
				this._tObject.eVar68		= 	(pageValues.prop19 !== undefined)  ? typePrefix+"emb" : typePrefix+"emb";

				if(url.indexOf('twitter.com/i/cards')!== -1){
					this._isTwitter = true;
					this._tObject.eVar68 = typePrefix+"twitter";
				}

				if(this._isLive){
					this._tObject.eVar69 = typePrefix+"live";
				}else{
					try{
						if(data.omniVideoFormat){
							this._tObject.eVar69 = data.omniVideoFormat;
						}else{
							if(data.doctypeID == "31" || data.doctypeID == 31){
								this._tObject.eVar69 = typePrefix+"vod_program";
							}else if(data.column.indexOf("clip") != -1){
								this._tObject.eVar69 = typePrefix+"clip";
							}else if(data.doctypeID == "471" || data.doctypeID == 471){
								this._tObject.eVar69 = typePrefix+"sponsored";
							}else{
								this._tObject.eVar69 = typePrefix+"vod_non-program";
							}
						}
					}catch(err){
						this._tObject.eVar69 = typePrefix+"vod_non-program";
					}
				}
			}
			
			if(this._isChained)
				this._tObject.eVar69 = this._tObject.eVar69+'_autochain';

			var createdDate;
			if(data.omniPublishDate){
				createdDate = data.omniPublishDate;
			}else{
				if(data.formattedCreationDate){
					createdDate =	typePrefix+data.formattedCreationDate;
				}else{
					var month = ("0" + (easternDate.getMonth() + 1)).slice(-2);
					var date = ("0" + easternDate.getDate()).slice(-2);
					createdDate = typePrefix+easternDate.getFullYear()+month+date+"_"+easternDate.getHours()+":"+easternDate.getMinutes();
				}
			}
			try{
                this._tObject.eVar62 = this.getHostName(document.referrer);
            }catch(e){}
			this._tObject.eVar66		= 	createdDate;
			try{
				this._tObject.eVar70 	=	(data.column != null)  ? data.column : "";
			}catch(e){}
			this._tObject.eVar75		= 	url.split('?')[0];

			var trackVarsArray = this._tObject.linkTrackVars.split(",");
			for (var i=0; i<=trackVarsArray.length; i++){
				if(trackVarsArray[i] in this._settings){
					this._tObject[trackVarsArray[i]] = this._settings[trackVarsArray[i]];
				}
			}

			this._comscoreMeta.ns_st_ci = data.guid;
			this._comscoreMeta.c3 = this._comscoreC3;
		},
		
		getHostName: function (url) {
			var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
			if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
			return match[2];
			}
			else {
				return null;
			}
		},

		getVideoContent: function() {
			try{
				if (window!=window.top) {
					if(window.parent.s !== undefined){
						return 	window.parent.s;
					}
				}else{
					if(window.s !== undefined){
						return 	window.s;
					}
				}
				return false;
			}catch(e){
				return false;
			}
		},
		// END TRACKING FUNCTIONS //

		// ADVERTISMENT FUNCTIONS //

		initializeAds: function(){
			var self = this;
			try{
				this._adsLoading = true;
				if(!this._imaInit){

					this._imaInit = true;

					this._videoContent.after('<div id="adContainer_'+this._containerId+'" class="video_adContainer" style="position:absolute; top: 0px; left: 0px;"></div>');

					this._adContainer = $jQ111('#adContainer_'+this._containerId);

					if(this._isAndroid || this._isIphone){
						this._adDisplayContainer =  new google.ima.AdDisplayContainer(this._adContainer.get(0), this._videoTag);
						//this._adDisplayContainer =  new google.ima.AdDisplayContainer(this._adContainer.get(0), this._videoTag, this._adsClickTarget.get(0));
					}else{
						this._adDisplayContainer =  new google.ima.AdDisplayContainer(this._adContainer.get(0), this._videoTag);
					}

					this._adDisplayContainer.initialize();

					this._adsLoader = new google.ima.AdsLoader(this._adDisplayContainer);

					//this._adContainer.hide();

					this._adsLoader.addEventListener(
						google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
						function(evt){self.onAdsManagerLoaded(evt)},
						false);
					this._adsLoader.addEventListener(
						google.ima.AdErrorEvent.Type.AD_ERROR,
						function(evt){self.onAdError(evt)},
						false);
				}
				this.requestAds();
			}catch(e){
				this.onAdError(null);
			}
		},

		requestAds: function(){
			var adsRequest 	= this.getAdTag();
			this._adTagUsed	= adsRequest.adTagUrl;
			this._adsLoader.requestAds(adsRequest);
			//if(!this._isIphone)
			this.onAdRequested(null,this);
		},

		getAdTag: function(){
			var adsRequest = new google.ima.AdsRequest();
			if(this._settings.adTag){
				adsRequest.adTagUrl = this._settings.adTag;
			}else{
				var adData = [];

				if(this._settings.site != '')
					adData.site = this._settings.site;
				else
					adData.site = "video.wsj.com";

				if(this._settings.plid != ''){
					adData.plid = this._settings.plid;
				}else{
					if(this._videodata.plid)
						adData.plid = this._videodata.plid;
					else
						adData.plid = "video_articleembed";
				}

				if(	this._settings.adZone != ''){
					adData.zone = this._settings.adZone;
				}else{
					adData.zone = this._videodata.adZone;
				}


				adData.gptParams		= this._videodata.gptCustParams;
				if(this._settings.lnid){
					var lSplit = adData.gptParams.split("%26lnid%3D");
					adData.lnid = this._settings.lnid;
					if(lSplit.length > 0){
						adData.gptParams = lSplit[0]+'%26lnid%3D'+this._settings.lnid;
					}
				}else{
					if(this._videodata.adTagParams)
						adData.lnid = this._videodata.adTagParams.lnid;
					else
						adData.lnid = '';
				}

				var msrc = "";
				if(this._settings.msrc){
					msrc = "msrc="+this._settings.msrc+";";
				}

				var d = new Date();
				var timestamp = d.getTime();
				adsRequest.adTagUrl = "https://pubads.g.doubleclick.net/gampad/ads?sz=4x4&gdfp_req=1&iu=/2/"+adData.site+"&ciu_szs=300x50,300x600,300x250&url=[referrer_url]&correlator=[timestamp]&env=vp&unviewed_position_start=1&output=vast&impl=s&hl=en&cust_params="+adData.gptParams+"%26flash%3Dno%26plid%3D"+adData.plid;

			}

			adsRequest.adType = "video";

			return adsRequest;
		},

		adTimeoutStart: function(){
			var self = this;
			this._adTimeoutTick = 0;
			this.adTimeoutTick();
			this._adTimeoutClock = setInterval(function () {self.adTimeoutTick()}, 1000);
		},

		adTimeoutTick: function(){
			if(this._adMode && !this._adPaused){
				var currentTimeout = (this._adStarted) ? 6 : 7;
				console.log(this._adTimeoutTick+" : "+currentTimeout);
				this._adTimeoutTick++;
				if(this._adTimeoutTick > currentTimeout){
					clearInterval(this._adTimeoutClock);
					try{
						//console.log("removing ad: 1");
						if(this._adsManager){
							//console.log("removing ad: 2");
							this._adsManager.stop();
							//this._adsManager.destroy();
							//this.onAdRemoved();
							//this._videoTag.play();
						}
					}catch(e){}
					this.onAdError();
				}
			}
		},

		onAdsManagerLoaded: function(adsManagerLoadedEvent) {

			if(this._adsManager){

				return;
			}
			var self = this;
			var adsRenderingSettings = new google.ima.AdsRenderingSettings();
			
			if(this._iOS){
				adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = false;
			}else{
				adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true;
			}

			if(this._isMobile){
				adsRenderingSettings.bitrate = 200;
			}
			this._adsManager = adsManagerLoadedEvent.getAdsManager(this._videoTag, adsRenderingSettings);

			initMoatTracking(this._adsManager,{partnerCode: 'dowjonesvideojs40981571894',viewMode: google.ima.ViewMode.NORMAL} );

			this._adsManager.addEventListener(
				google.ima.AdErrorEvent.Type.AD_ERROR,
				function(e){
					// invalid useage of the API can be ignored per conv with the google ima team
					self.onAdError(e, self);
				});
			this._adsManager.addEventListener(
				google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,
				function(e){
					self.onContentPauseRequested(e);
				});
			this._adsManager.addEventListener(
				google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,
				function(e){
					self.onContentResumeRequested(e);
				});
			this._adsManager.addEventListener(
				google.ima.AdEvent.Type.ALL_ADS_COMPLETED,
				function(e){
					//self.onAdComplete(e, self);
				});
			this._adsManager.addEventListener(
				google.ima.AdEvent.Type.COMPLETE,
				function(e){
					self.onAdComplete(e, self);
				});
			this._adsManager.addEventListener(
				google.ima.AdEvent.Type.LOADED,
				function(e){
					self.onAdLoaded(e);
				});
			this._adsManager.addEventListener(
				google.ima.AdEvent.Type.STARTED,
				function(e){
					self.onAdStarted(e,self);
				});
			this._adsManager.addEventListener(
				google.ima.AdEvent.Type.PAUSED,
				function(e){
					self.onAdPaused(e,self);
				});
			this._adsManager.addEventListener(
				google.ima.AdEvent.Type.RESUMED,
				function(e){
					self.onAdResumed(e,self);
				});
			this._adsManager.addEventListener(
				google.ima.AdEvent.Type.SKIPPED,
				function(e){
					self.onAdSkipped(e,self);
				});
			this._adsManager.addEventListener(
				google.ima.AdEvent.Type.CLICK,
				function(e){
					self.onAdClicked(e);
				});
			this._adsManager.addEventListener(
				google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED,
				function(e){
					self.onSkippableChanged(e);
				});

			try {
				this._adsManager.init(this._container.width(), this._container.height() - 30, google.ima.ViewMode.NORMAL);
				//requestAds();
				this._timeDisplay.html("Loading Advertisement...");
				//if (this._contentInitialized) {
				//	this._adsManager.start();
				//}

			} catch (adError) {
				try{
					this._videoContent.play();
				}catch(e){}
			}
		},


		onAdClicked: function(evt){
			this._adsManager.pause();
		},

		onSkippableChanged: function(evt){
			if(this._adsSkipButton){
				this._adsSkipButton.show();
			}
			//this._videoContent.prop("controls", false);
		},

		onAdLoaded: function(evt){
			this._adsLoaded = true;

			try{
				var tempAd = evt.getAd();
				var wrappersStr = "";
				var wrappers = tempAd.getWrapperAdIds();
				for (w in wrappers) {
					wrappersStr += wrappers[w]+",";
				}
				if(tempAd.getAdId()){
					this._adId = wrappersStr + tempAd.getAdId();
				}else{
					this._adId = "none";
				}

			}catch(e){this._adId = "none";}
			if(this._contentInitialized){
				this._adsManager.start();
			}
		},

		onAdResumed: function(evt){
			if(this._adMode){
				this._adPaused = false;
				this._playBtn.toggleClass( "btnPause", true ).toggleClass( "btnPlay", false );
			}
			try{this._comscoreTag.playAdvertisement();}catch(e){}
		},
		onAdPaused: function(evt){
			if(this._adMode){
				this._adPaused = true;
				this._playBtn.toggleClass( "btnPause", false ).toggleClass( "btnPlay", true );
				try{this._comscoreTag.stop();}catch(e){}
			}
		},
		onAdSkipped: function(evt){
			//this.onAdComplete(evt, this);
			//this._videoTag.play();
			try{this._comscoreTag.stop();}catch(e){}
		},

		onAdError: function(evt){
			try{
				this._adsLoading = false;
				var omnitureErrorObj = {type:"", code:"", msg:""};
				if(evt === null){
					omnitureErrorObj.type 	= "Error not defined";
					omnitureErrorObj.code 	= "0";
					omnitureErrorObj.msg 	= "Error not defined";
					this.onAdRemoved();
				}else{
					if(evt.type == "flash"){ // flash error
						omnitureErrorObj = evt;
						try{if(evt.adId){this._adId = evt.adId;}}catch(e){}
						try{if(evt.adUrl){this._adTagUsed = evt.adUrl;}}catch(e){}
						this.onAdRemoved();
					}else{
						var err = evt.getError();  // DONT SEND TRACKING FOR ERROR CODE 900
						if(err.getErrorCode() != 900){  // error can be ignored per google ima team
							//alert("ad error:"+err.getMessage()+" : "+err.getErrorCode());
							this.onAdRemoved();
						}
						omnitureErrorObj.type 	= "html";
						omnitureErrorObj.code 	= err.getErrorCode();
						omnitureErrorObj.msg 	= err.getMessage();
					}
				}
			}catch(e){}
			try{
				if(omnitureErrorObj.code != 900 || evt.type == "flash"){
					if(svid){

						//this._tObject.linkTrackEvents = this._tObject.events = this._currentEvents[2]; // event41 , event103

						if(!this._adStarted) {
							this._tObject.linkTrackEvents = this._tObject.events = this._currentEvents[2]; // event41 , event103
						}else{
							this._tObject.linkTrackEvents = this._tObject.events = this._currentEvents[14]; // event114 , event115
						}

						try{this.setTrackingVars();}catch(e){};
						this._tObject.eVar46 = omnitureErrorObj.msg;
						this._tObject.eVar49 = this._adId;
						this._tObject.eVar50	= this._adTagUsed;
						try{
							var ordIndex = this._adTagUsed.indexOf(';ord=');
							if(ordIndex != -1)
								this._tObject.eVar50	= this._adTagUsed.substring(0, this._adTagUsed.indexOf(';ord='));
						}catch(e){}
						if(this._isAudio){
							this._tObject.pev2 = "Ads Not Supported";
						}else{
							this._tObject.pev2 = "Ad_Error";
						}

						this._tObject.pe = 'lnk_o';  svid.tl(this,'o',this._tObject.pev2, this._tObject);
						this._tObject.linkTrackEvents = this._tObject.events  = "";

						this._tObject.eVar50 = "none";
					}
				}
			}catch(e){}
			try{this._comscoreTag.stop();}catch(e){}
		},

		onContentPauseRequested: function(){
			this._videoTag.pause();
			this._videoContent.off('ended', this.videoComplete);
			this.addVideoTagListeners(false);
		},

		onContentResumeRequested: function(){
			this.addVideoTagListeners(true);
			this._videoContent.on('ended', this.videoComplete);
			this.onAdRemoved();
			if(this._iOS){
				this._videoContent.attr('src', this._videodata.hlsNoCaptions);
			}else{
				this.addVideoTagListeners(true);
				
			}
			this._videoTag.play();
		},

		onAdComplete: function(evt, scope){

			scope._adMode = false;
			scope.checkPlayerControls(scope);
			scope._container.trigger('adComplete');

			this._tObject.linkTrackEvents = this._tObject.events = scope._currentEvents[7]; // event74 , event107

			this._tObject.pageName = 'WSJLive_Video_Ad';
			this._tObject.pev2 = "Video_Ad_Complete";
			this._tObject.eVar46 = "none";
			this._tObject.eVar49 = scope._adId;
			this._tObject.eVar50	= scope._adTagUsed;
			try{
				var ordIndex = scope._adTagUsed.indexOf(';ord=');
				if(ordIndex != -1)
					this._tObject.eVar50	= scope._adTagUsed.substring(0, ordIndex);
			}catch(e){}
			this._tObject.pe = 'lnk_o';  svid.tl(scope,'o',this._tObject.pev2, this._tObject);

			$jQ111.ajax({
				url: "https://video-api-secure.wsj.com/enf/wsjdn-video.asp?source="+scope._settings.larsAdId+"&guid={"+scope._settings.guid+"}",
				dataType: "json"
			});
			//videoTag.play();


			try{scope._comscoreTag.stop();}catch(e){}
		},

		onAdStarted: function(evt,scope){

			try{
				scope._adStarted = true;
				scope._adsLoading = false;
				scope._adPaused = false;
				scope._adMode = true;
			}catch(e){}
			try{
				scope._container.trigger('adStarted');
				if (scope._videodata.catastrophic == "1") {
					scope._tObject.linkTrackEvents = scope._tObject.events = scope._currentEvents[15]; //  116 118 catastrophic ad Start
				} else {
					if (scope._adDuration < 2)
						scope._tObject.linkTrackEvents = scope._tObject.events = scope._currentEvents[16]; // 117 119 blank ad start
					else
						scope._tObject.linkTrackEvents = scope._tObject.events = scope._currentEvents[6]; // event73 , event106
				}
				try{scope.setTrackingVars();}catch(e){};
				scope._tObject.pageName = 'WSJLive_Video_Ad';
				scope._tObject.eVar4 = 'WSJLive_Video_Ad';
				scope._tObject.eVar46 = "none";
				scope._tObject.eVar49 = scope._adId;
				scope._tObject.eVar50	= scope._adTagUsed;
				try{
					var ordIndex = scope._adTagUsed.indexOf(';ord=');
					if(ordIndex != -1)
						scope._tObject.eVar50	= scope._adTagUsed.substring(0, ordIndex);
				}catch(e){}
				scope._tObject.pev2 = "Video_Ad_Started";

				scope._tObject.pe = 'lnk_o';  svid.tl(this,'o',scope._tObject.pev2, scope._tObject);
				scope._tObject.linkTrackEvents = scope._tObject.events  = "";
				try{scope._comscoreTag.stop();}catch(e){}
				try{scope._comscoreTag.playAdvertisement();}catch(e){}
			}catch(e){}

			if(scope._controls){
				scope._controls.show();
			}
			if(!scope._flashPlayer){ // is html player?
				scope.checkPlayerControls(scope);

				try{
					scope._currentAd = evt.getAd();
					if(scope._currentAd.isLinear()){
						if(scope._muted)
							scope._adsManager.setVolume(0);

						scope._adInfo = evt.getAd().getAdPodInfo();
						scope.onAdEvent(evt);

						scope._adDuration = scope._adInfo.getMaxDuration();
						scope.startAdTimer();
						scope._adProgress.fadeIn(1000);
						scope._playBtn.toggleClass( "btnPause", true ).toggleClass( "btnPlay", false );
						scope._scrubProgress.width(0);
						scope._scrubLoaded.width(0);
					}
				}catch(e){}
				try{
					var companionAdsRtn = [];
					if(scope._currentAd.b.companions.length){
						scope._currentAd.a = scope._currentAd.b;
					}
					if(scope._currentAd.a.companions.length){

						for (var i = 0; i < scope._currentAd.a.companions.length; i++) {
							companionAdsRtn[i] = {
								url:scope._currentAd.a.companions[i].content,
								clickUrl:"",
								height:scope._currentAd.a.companions[i].size.height,
								width:scope._currentAd.a.companions[i].size.width,
								type:"html"
							};
						}
					}
					scope._container.trigger({type:"onCompanions", availableAds:companionAdsRtn});
				}catch(e){
					scope._container.trigger({type:"onCompanions", availableAds:[]});
				}
			}

		},

		onAdRequested: function(evt,scope){
			scope._adStarted = false;
			/*
			 if(!scope._flashPlayer)
			 scope.adTimeoutStart();
			 */
		},

		onAdEvent: function(evt){

		},

		onAdRemoved: function(){

			this._adMode = false;
			this.addVideoTagListeners(true);
			this.checkPlayerControls(this);
			clearInterval(this._adTimer);
			try{
				if(this._adContainer){
					this._adContainer.hide();
					this._adProgress.animate({width: 0, left: 0}, {duration: 500});
				}
			}catch(e){}
			try{
				if(this._adsManager){
					this._adsManager.destroy();
					this._adsManager = null;
				}
			}catch(e){}
			/*
			 if(this._isIpad){
			 this.addRemoveIOSControls(false);
			 }
			 */
		},

		startAdTimer: function(){
			var self = this;
			this._adTime = 0;
			if(this._adTimer){
				clearInterval(this._adTimer);
			}
			this._adTimer = setInterval(function(){self.adTick();}, 1000);
		},

		adTick: function(evt){
			if(!this._adPaused && this._adsManager.getRemainingTime() > 0){
				var adProg = (this._adDuration - this._adsManager.getRemainingTime()) / this._adDuration;
				this._currentTime = this._videoTag.currentTime;
				try{
					this._container.trigger({type:"onAdTimeUpdate",percent:adProg, duration:this._adDuration});
				}catch(e){}

				this._adTime++;
				if (this._adTime > 30){
					clearInterval(this._adTimer);
				}
				if(this._adsManager){
					if(this._adsManager.getRemainingTime() < 1)
						clearInterval(this._adTimer);
				}
				try{if ( this._controls.css('display') == 'none' ){
					this._controls.show();
				}}catch(e){}
				try{
					if(this._adProgress){
						this._adProgress.width(Math.round(this._scrubbar.width() * adProg));
					}
					if(this._timeDisplay)
						this._timeDisplay.html(gTimeFormat(this._adsManager.getRemainingTime()) +' Advertisement');
				}catch(e){}
			}

		},
		// VIDEO FUNCTIONS //

		showRemaining: function(){
			var n = new Date();
			var sec = n.getTime() - this._startTime.getTime();
			var now = new Date(this._startTime.valueOf() + sec);
			var distance = end - now;
			if (distance < 0) {
				clearInterval(this._futureTimer);
				$jQ111('#countdown_'+this._containerId).html('Loading...');
				this._videodata.state = "flive";
				$jQ111('.videoMsg').fadeOut(1000);
				this.initVideo();
				return;
			}
			var hours = Math.floor(distance / 3600000);
			var minutes = Math.floor((distance % 3600000) / 60000);
			var seconds = Math.floor((distance % 60000) / 1000);
			var txt = "";
			if(hours > 0){
				txt += hours + 'hrs ';
			}
			if(minutes > 0){
				txt += minutes + 'mins ';
			}
			txt += seconds + 'secs';
			if(this._videodata.videoStillURL){
				this._container.css('background-image', 'url(' + this._videodata.videoStillURL + ')');
			}
			$jQ111('#countdown_'+this._containerId).html(txt);
		},

		loadScript: function(url, callback, errorCallback){
			var self = this;

			var buff = this._container.append('<div class="video_buffering" style="display:block;"></div>');
			$jQ111.getScript( url )
				.done(function( script, textStatus ) {
					self._container.empty();
					clearTimeout(failtimeout);
					callback();
				})
				.fail(function( jqxhr, settings, exception ) {
					clearTimeout(failtimeout);
					self._container.empty();
					errorCallback();
				});
			var callTimeout = function() {
				clearTimeout(failtimeout);
				self._container.empty();
				errorCallback();
			}
			var failtimeout = setTimeout(callTimeout, 4000);

			/*
			 var script = document.createElement("script")
			 script.type = "text/javascript";

			 if (script.readyState){  //IE
			 script.onreadystatechange = function(){
			 if (script.readyState == "loaded" ||
			 script.readyState == "complete"){
			 script.onreadystatechange = null;
			 callback();
			 }
			 };
			 } else {  //Others
			 script.onload = function(){
			 callback();
			 };
			 script.onerror = function(){
			 errorCallback();
			 return;
			 };
			 }
			 try{
			 script.src = url;
			 document.getElementsByTagName("head")[0].appendChild(script);
			 }catch(e){

			 }
			 */
		},

		//// VIDEO TAG FUNCTIONS ////

		addVideoTagListeners: function(enable){
			try{
				var self = this;
				/// LISTENERS /////
				////this._videoContent.off('loadedmetadata');
				this._videoContent.off('loadedmetadata');
				this._videoContent.on('loadedmetadata',  function(evt){self.onloadedmetadata();});

				this._videoContent.off('ended');
				this._videoContent.off('timeupdate');
				this._videoContent.off('playing');
				this._videoContent.off('play');


				this._videoContent.off('error');
				this._videoContent.off('pause');
				this._videoContent.off('stalled');
				this._videoContent.off('waiting');
				this._videoContent.off('loadstart');
				this._videoContent.off('canplay');
				this._videoContent.off('volumechange');
				this._videoContent.off('click');

				this._audioContent.off('timeupdate');
				this._audioContent.off('playing');
				this._audioContent.off('pause');
				this._audioContent.off('loadedmetadata');
				this._audioContent.off('ended');
				//this._audioContent.off('onProgress');

				if(enable){

					this._audioContent.on('timeupdate',  function(evt){self.videoProgress();});
					this._audioContent.on('playing',  function(evt){self.onAudioPlaying();});
					this._audioContent.on('pause',  function(evt){self.onAudioPause();});
					this._audioContent.on('loadedmetadata',  function(evt){self.onloadedmetadata(evt);});
					this._audioContent.on('ended', function(evt){self.audioComplete(evt);});

					this._videoContent.on('ended', function(evt){self.videoComplete(evt);});

					this._videoContent.on('timeupdate',  function(evt){self.videoProgress();});
					this._videoContent.on('playing',  function(evt){self.onPlaying();});
					this._videoContent.on('play',  function(evt){self.onPlay();});
					this._videoContent.on('error',  function(evt){self.onError(evt);});
					this._videoContent.on('pause',  function(evt){self.onPause();});
					//this._videoContent.on('webkitendfullscreen',  function(evt){self.onPlayerExitFullscreen();}, false);
					this._videoContent.on('stalled',  function(evt){self.onBuffering();});
					this._videoContent.on('waiting',  function(evt){self.onBuffering();});
					this._videoContent.on('loadstart',  function(evt){self.onBuffering();});
					this._videoContent.on('canplay',  function(evt){self.onCanPlay();});
					this._videoContent.on('volumechange',  function(evt){self.onVolumeChanged(self._videoTag.volume);});
					if(!this._isIpad)
						this._videoContent.on('click',  function(evt){self.onVideoClicked(evt);});
					else
						this._videoContent.on('touchstart',  function(evt){self.onVideoClicked(evt);});
				}
			}catch(e){}
			try{
				this._wrapper.on(screenfull.raw.fullscreenchange, function () {
					self.resize();
				});
			}catch(e){} // IE issue
		},

		// Events and Handlers

		onPlayPause: function(evt, scope){
			scope.calculateAvailableWidth();
			if(scope){
				if(scope._isAudio){
					if(scope._audioContent[0].paused){
						scope._audioContent[0].play();
					}else{
						scope._audioContent[0].pause();
					}
				}else if(scope._adMode){
					if(scope._adPaused){
						scope._adsManager.resume();
						try{scope._iosPlayPause.css("background-position", "0px 0px");}catch(e){}
					}else{
						scope._adsManager.pause();
						scope._videoTag.pause();
						try{scope._iosPlayPause.css("background-position", "0px -50px");}catch(e){}
					}
				}else{ // content play pause
					if(scope._videoTag.paused){
						scope._videoTag.play();
						try{
							if(scope._touchCastMode)
								TouchCastPlayerSDK.videoPlay(scope._videodata.touchCastID);
						}catch(e){}
						try{scope._comscoreTag.playContentPart(scope._comscoreMeta);}catch(e){}
					}else{
						try{scope._comscoreTag.stop();}catch(e){}
						scope._videoTag.pause();
						try{
							if(scope._touchCastMode)
								TouchCastPlayerSDK.videoPause(scope._videodata.touchCastID);
						}catch(e){}
					}
				}
			}
			else{
				if(scope._adMode)
					scope._adsManager.pause();
				else
					scope._videoTag.pause();
			}
		},

		onMuteUnMute: function(evt, scope){
			scope._videoContent.prop('volume', .8); // Remove when volume controls added
			scope._audioContent.prop('volume', .8); // Remove when volume controls added
			if( scope._videoContent.prop('muted') ){
				scope._videoContent.prop('muted', false);
				scope._audioContent.prop('muted', false);
				document.cookie = "djvideomute=0";
				if(scope._adsManager){
					scope._adsManager.setVolume(1);
				}
				scope._muted = false;
			}else {
				scope._videoContent.prop('muted', true);
				scope._audioContent.prop('muted', true);
				document.cookie = "djvideomute=1";
				if(scope._adsManager){
					scope._adsManager.setVolume(0);
				}
				scope._muted = true;
			}
			if(scope._volumeBtn){
				scope._volumeBtn.toggleClass( "btnVolumeMuted", scope._videoContent.prop('muted') );
			}
		},

		addEventListeners: function(){
			this._container.bind("onPlayPause",this.onPlayPause);
			this._container.bind("onMuteUnMute",this.onMuteUnMute);
		},

		onVideoClicked: function(evt){
			if(this._touchCastMode){
				var loc = this.getClickLoc(evt, this);
				TouchCastPlayerSDK.handleClicks(loc.tm, loc.x, loc.y);
				if(this._controls)
					this._controls.show();
			}else{
				if(!this._isMobile)
					this.onPlayPause(evt, this);
			}
		},

		videoComplete: function(evt){

			this._container.trigger({type:"videoComplete", guid:this._videodata.guid});
			this._container.trigger({type:"onVideoComplete", guid:this._videodata.guid});

			try{this._comscoreTag.stop();}catch(e){}
			if(!this._flashPlayer){
				if(!this._adMode){
					if(!this._settings.disableEndscreen && !this._settings.resetOnComplete){
						//this.hideSuggestion(true);
						this.generateEndscreen();
					}else{
						if(this._settings.resetOnComplete){
							this._container.empty();
							//this.hideSuggestion(true);
							this.setupThumbnail();
						}
						//this.generateThumbnail();
					}
					if(this._iOS){ //
						this._videoTag.webkitExitFullScreen();
					}
					try{
						if(this._touchCastMode){
							TouchCastPlayerSDK.videoEnded();
						}
					}catch(e){}
				}
			}else{
				if(this._settings.resetOnComplete){
					this._container.empty();
					this._flashContainer = null;
					this.setupThumbnail();
				}else{
					this._isChained = true;
				}
			}
		},

		audioComplete: function(evt){
			this.handleComplete(evt);
		},

		videoComplete: function(evt){
			this.handleComplete(evt);
		},

		handleComplete: function(evt){
			this._container.trigger({type:"videoComplete", guid:this._videodata.guid});
			this._container.trigger({type:"onVideoComplete", guid:this._videodata.guid});

			try{this._comscoreTag.stop();}catch(e){}
			if(!this._flashPlayer){
				if(!this._adMode){
					if(!this._settings.disableEndscreen && !this._settings.resetOnComplete){
						this.generateEndscreen();
					}else{
						if(this._settings.resetOnComplete){
							this._container.empty();
							this.setupThumbnail();
						}else{
							this._isChained = true;
						}
					}
					if(this._iOS){
						this._videoTag.webkitExitFullScreen();
					}
					try{
						if(this._touchCastMode){
							TouchCastPlayerSDK.videoEnded();
						}
					}catch(e){}
				}
			}else{
				if(this._settings.resetOnComplete){
					this._container.empty();
					this._flashContainer = null;
					this.setupThumbnail();
				}else{
					this._isChained = true;
				}
			}
		},

		onloadedmetadata: function(evt){
			if(this._videoTag.duration > 2){
				this._duration = this._videoTag.duration;
			}else{
				this._duration = this._videodata.duration;
			}

			this._contentInitialized = true;
			//this._videoContent.off('loadedmetadata');
			//if(this._adsLoaded && this._adsManager){
			//	this._adsManager.start();
			//}

		},

		videoProgress: function(evt){
			var bufferedProg = 0;
			if(this._isAudio){
				this._currentTime = this._audioContent[0].currentTime;
				if(this._audioContent[0].buffered.length > 0){
					bufferedProg	= this._audioContent[0].buffered.end(this._audioContent[0].buffered.length-1) / this._duration;
					console.log();
				}
			}else{
				this._currentTime = this._videoTag.currentTime;
				if(this._videoTag.buffered.length > 0){
					bufferedProg	= this._videoTag.buffered.end(0) / this._duration;
				}
			}
			if(this._isAndroid && this._androidV >= 4.0){ // hack to fix android no ended trigger
				if(Math.round(this._currentTime) == Math.floor(this._duration)  && !this._adMode && Math.round(this._currentTime) >= 35){
					//this.videoComplete(evt);
				}
			}
			this._buffering.hide();
			var percProg 		= this._currentTime / this._duration;
			this.uProgress(percProg, this._currentTime); // tracking

			if(this._scrubProgress)
				this._scrubProgress.width(Math.round(this._scrubbar.width() * percProg));
			if(this._scrubLoaded)
				this._scrubLoaded.width(Math.round(this._scrubbar.width() * bufferedProg));
			if(this._timeDisplay)
				this._timeDisplay.html(gTimeFormat(this._currentTime) +' / '+gTimeFormat(this._duration));

		},

		updateTimeDisplay: function(tm, dur){

		},

		onAudioPlaying: function(evt){
			this.checkPlayerControls(this);
			this._container.trigger("unPauseAudio");
			try{this._iosPlayPause.css("background-position", "0px 0px");}catch(e){}
			this._buffering.hide();
			if(this._playBtn)
				this._playBtn.toggleClass( "btnPause", true ).toggleClass( "btnPlay", false );
		},

		onPlaying: function(evt){
			this.checkPlayerControls(this);
			if(!this._videodata.vr)
				this._videoContent.show();
			this._container.trigger("unPauseVideo");
			try{this._iosPlayPause.css("background-position", "0px 0px");}catch(e){}
			this._buffering.hide();
			if(this._playBtn)
				this._playBtn.toggleClass( "btnPause", true ).toggleClass( "btnPlay", false );

			try{
				if(!this._isMobile && !this._videodata.vr){
					var curSource = this._videoContent.attr("src").split("#t=")[0];
					if(curSource != this._videodata[this._selectedBitrate]){
						this._videoContent.attr("src", this._videodata[this._selectedBitrate]+"#t="+this._currentTime);
					}
				}
			}catch(e){}

		},

		onPlay: function(evt){
			if(this._playBtn)
				this._playBtn.toggleClass( "btnPause", true ).toggleClass( "btnPlay", false );



		},

		trackPlaybackError: function(evt){
			var omnitureErrorObj = {type:"html", code:"error", msg:"error"};
			try{

				if(evt === null){
					omnitureErrorObj.type = "Error not defined";
					omnitureErrorObj.code = "0";
					omnitureErrorObj.msg = "Error not defined";
				}else{
					if(evt.type == "flash"){ // flash error
						omnitureErrorObj = evt;
					}else{
						omnitureErrorObj.type = "html";
						omnitureErrorObj.code = evt.type;
						omnitureErrorObj.msg = evt.type;
					}
				}
			}catch(e){}
			try{
				if(svid){

					this._tObject.linkTrackEvents = this._tObject.events = this._currentEvents[3]; // event42 , event104

					try{this.setTrackingVars();}catch(e){};
					this._tObject.eVar46 = omnitureErrorObj.msg;
					if(this._isAudio){
						this._tObject.pev2 = "Podcast_Playback_Error";
					}else{
						this._tObject.pev2 = "Playback_Error";
					}
					this._tObject.pe = 'lnk_o';  svid.tl(this,'o',this._tObject.pev2, this._tObject);
				}
			}catch(e){}
		},

		onError: function(evt){

			this.trackPlaybackError(evt);
			if(this._iOS){
				console.log(evt);
				this._wrapper.html('<p class="getFlash">Sorry, your browser does not appear to support HTML5 video playback or your device is using content blockers that are disrupting playback.<br />You will need to disable your blockers or use a different browser.</p>');
			}else{
				this._wrapper.html('<p class="getFlash">Sorry, your browser does not appear to support HTML5 video playback<br />You will need the flash plugin installed to view this video.<br /><br /><a href="http://www.adobe.com/go/getflashplayer" target="_blank"  border="0" style="margin:0 auto;"><img style="border:none; margin:0 auto; height:auto; width:auto;" height=41 width=160 src="'+this._settings.api+'player/v2/css/get_flash_player.png'+'" /></a></p>');
			}

		},

		onPause: function(evt){
			this._container.trigger("pauseVideo");
			try{this._iosPlayPause.css("background-position", "0px -50px");}catch(e){}
			if(this._playBtn)
				this._playBtn.toggleClass( "btnPause", false ).toggleClass( "btnPlay", true );
		},

		onAudioPause: function(evt){
			this._container.trigger("pauseVideo");
			try{this._iosPlayPause.css("background-position", "0px -50px");}catch(e){}
			if(this._playBtn)
				this._playBtn.toggleClass( "btnPause", false ).toggleClass( "btnPlay", true );

		},

		onPlayerExitFullscreen: function(evt){
			this.resize();
		},

		onBuffering: function(evt){
			if(!this._isIpad){
				this._buffering.show();
			}
		},

		onCanPlay: function(evt){

		},

		onVolumeChanged: function(vol){
			document.cookie = "djvideovol="+vol;
		},

		displayTime: function(){

		},

		calculateAvailableWidth: function(){
			try{
				var r = (this._controls.width() - (this._fullscreenBtn.offset().left - 6));
				var w = this._controls.width() - this._timeDisplay.position().left - this._timeDisplay.width() - r;
				return w;
			}catch(e){return "";}
		},

		onSeek: function(perc){
			var sec = Math.round(this._duration * perc);
			if(this._isAudio){
				this._audioContent[0].currentTime = sec;
			}else{
				this._videoTag.currentTime = sec;
			}
		},

		getVideoAreaWidth: function() {
			return this._videoContent.width();
		},

		getVideoAreaHeight: function() {
			return this._videoContent.height();
		},

		getVideoAreaX: function() {
			return 0;
		},

		getVideoAreaY: function() {
			return 0;
		},

		pauseVideoFromInteractiveLayer: function() {
			this._videoTag.pause();
		},

		resumeVideoFromInteractiveLayer: function() {
			this._videoTag.play();
		},

		changeVideoToPIPMode: function(change) {

		},

		addPlayerControls: function(){
			var self = this;

			this._wrapper.append('<div id="controls_'+this._containerId+'" class="controls"><div id="scrubBar_'+this._containerId+'" class="videoScrubBar"><div class="adProgress" id="adProgress_'+this._containerId+'"></div><div class="videoLoaded" id="videoLoaded_'+this._containerId+'"></div><div class="videoProgress" id="videoProgress_'+this._containerId+'"></div></div><div id="btnPlayPause_'+this._containerId+'" class="btnPlayPause btnPlay btn"></div><div class="videoTime" id="videoTime_'+this._containerId+'">0:00 / 0:00</div><div id="btnVolume_'+this._containerId+'" class="btnVolume btn"></div><div id="btnFullScreen_'+this._containerId+'" class="btnFullScreen btn"></div><div id="btnCC_'+this._containerId+'" class="btnCC btn"></div><div id="btnBit_'+this._containerId+'" class="btnBit btn"></div></div>');

			this._controls = $jQ111('#controls_'+this._containerId);

			this._playBtn = $jQ111('#btnPlayPause_'+this._containerId);
			this._playBtn.click(function(e){
				self.onPlayPause(e, self);
			});
			this._timeDisplay = $jQ111('#videoTime_'+this._containerId);
			this._fullscreenBtn = $jQ111('#btnFullScreen_'+this._containerId);
			this._fullscreenBtn.click(function(){
				self._width = self._container.css('width');
				self._height = self._container.css('height');
				if(self._isIpad){
					self._videoTag.webkitEnterFullscreen();
				}else{
					screenfull.toggle(self._videoTag);
				}
				self.resize();
			});

			this._bitBtn = $jQ111('#btnBit_'+this._containerId);
			this._bitBtn.hide();

			this._ccBtn = $jQ111('#btnCC_'+this._containerId);
			this._ccBtn.hide(); // REMOVE


			this._volumeBtn = $jQ111('#btnVolume_'+this._containerId);
			this._volumeBtn.click(function(){
				self._container.trigger("onMuteUnMute", [self]);
			});

			this._volumeBtn.toggleClass( "btnVolumeMuted", this._muted );

			//this._controls.hover(function(){self.onControlsRollOver();}, function(){self.onControlsRollOut();});

			this._scrubbar		= $jQ111('#scrubBar_'+this._containerId);
			this._scrubbar.click(function(e){
				if(!self._adMode){
					var parentOffset = $jQ111(this).parent().offset();
					var relX = e.pageX - parentOffset.left;
					var relY = e.pageY - parentOffset.top;
					self.onSeek(relX / $jQ111(this).width());
				}
			});
			this._scrubProgress	= $jQ111('#videoProgress_'+this._containerId);
			this._scrubLoaded   = $jQ111('#videoLoaded_'+this._containerId);
			this._adProgress   	= $jQ111('#adProgress_'+this._containerId);

		},

		captionSelection: function(lang){

		},

		checkPlayerControls: function(scope){
			if(scope._adMode){
				try{
					if(this._isAndroid || this._isIpad){
						var self = scope;
						scope._videoContent.prop("controls", false);
						scope._controls.show();
						scope._adContainer.click(function(e) {
							self.onPlayPause(e, self);
							return false;
						});
						if(scope._adsClickTarget){
							scope._adsClickTarget.show();
						}
					}
				}catch(e){}
				try{
					if(scope._adContainer){
						scope._buffering.hide();
						scope._adContainer.show();
						scope.resize();
					}
				}catch(e){}
			}else{

				if(scope._adContainer){
					scope._adContainer.unbind("click");
					scope._adContainer.hide();
				}

				try{
					if(scope._isAndroid || scope._isIpad){
						if(scope._touchCastMode){
							if(!scope._videoContent && !this._settings.fireTv)
								scope._videoContent.prop("controls", true);

							//if(scope._controls && !scope._touchCastMode)
							//scope._controls.hide();

							if(scope._adsClickTarget)
								scope._adsClickTarget.hide();

							scope._adContainer.unbind("click");
						}else{
							if(!this._settings.fireTv)
								scope._videoContent.prop("controls", true);
							scope._controls.hide();
							if(scope._adContainer){
								scope._adContainer.unbind("click");
								scope._adContainer.hide();
							}

						}
					}
				}catch(e){}
			}
		},

		addRemoveIOSControls: function(addRemove){
			var self = this;
			$jQ111('#iosControls_'+this._containerId).remove();

			if(addRemove){
				this._videoContent.prop("controls", false);
				this._wrapper.prepend( '<div class="iosControls" id="iosControls_'+this._containerId+'"><div class="iosPlayPause" id="iosPlayPause_'+this._containerId+'"></div><div class="iosFullScreen" id="iosFullScreen_'+this._containerId+'"></div></div>' );
				this._iosPlayPause 	=	$jQ111("#iosPlayPause_"+this._containerId);
				this._iosFullScreen	=	$jQ111("#iosFullScreen_"+this._containerId);

				this._iosPlayPause.click(function(e) {
					self.onPlayPause(e,self);
				});

				this._iosFullScreen.click(function(e) {
					if(self._videoTag.webkitSupportsFullscreen){
						self._videoTag.webkitEnterFullscreen();
						self.resize();
					}
				});

			}else{
				this._iosPlayPause.unbind( "click" );
				this._iosFullScreen.unbind( "click" );
				if(!this._settings.fireTv)
					this._videoContent.prop("controls", true);
			}
		},

		// Suggestion Popup
		generateSuggestion: function(lguid) {
			/*
			 var self = this;

			 function onSuggestionLoaded(data) {
			 var dat = data.items[0];
			 self._suggestionPopup.show();
			 self._suggestionPopup.find( "img" ).attr("src",dat.thumbnailURL);
			 self._suggestionPopup.find( ".suggestionDescription" ).text(dat.description);
			 self._suggestionPopup.find( ".suggestionTitle" ).text(dat.name);
			 self._suggestionPopup.animate({left: 10}, {duration: 600});

			 self._suggestionLink.click(function() {
			 window.location.href = dat.linkURL;
			 self.hideSuggestion(false);
			 });
			 self._suggestionClose.click(function() {
			 self.hideSuggestion(false);
			 });

			 }

			 this._suggestionPopup.hide();
			 $jQ111.getJSON(this._settings.api+'find_all_videos.asp?count=1&type=guid&query='+lguid+'C&fields=thumbnailURL,id,linkURL,description,name', onSuggestionLoaded);
			 */
		},

		hideSuggestion: function(resetRun){
			/*
			 if(this._suggestionPopup){
			 if(resetRun)
			 this._suggestionRun = false;
			 this._suggestionPopup.hide();
			 this._suggestionPopup.css( "left", -360 );
			 }
			 */
		},

		// Endscreen Functions //

		generateEndscreen: function() {

			var self = this;
			var numThumbs = 12;
			var httpParam = "";
			if(this._settings.useHttps)
				httpParam = "&https=1";

			this.resize(); // need to set the size of the endscreen

			try{
				if(this._settings.playlist){
					for(var i = 0; i < this._settings.playlist.length; i++){
						if(this._settings.playlist[i].guid == this._videodata.guid){
							var tmp = this._settings.playlist.splice(i,1);
							this._settings.playlist.push(tmp[0]);
							break;
						}
					}
				}
			}catch(e){}

			if(this._settings.playlist !== null){
				if (this._settings.playlist instanceof Object) {
					buildList(this._settings.playlist);
				}else{
					var tags = $jQ111.parseJSON(this._settings.playlist);
					buildList(tags.items)
				}

			}else{
				var qStr = '&type='+this._settings.suggestionsType+'&query=news';
				try{
					if(this._settings.suggestionsDoctype){
						qStr = "&doctype="+this._settings.suggestionsDoctype;
					}else if(this._settings.suggestionsQuery == ""){
						if(this._videodata['wsj-section']){
							qStr = '&type='+this._settings.suggestionsType+'&query='+this._videodata['wsj-section'];
						}
					}
				}catch(e){}

				$jQ111.getJSON(this._settings.api+'find_all_videos.asp?count='+numThumbs+httpParam+qStr+'&fields='+this._fields, onRecommendations);
			}

			function buildList(videos){
				self._videoContent.hide();

				var thumbnailImage = "";
				try{
					if(this._videodata.thumbnailList[4]){
						thumbnailImage = self._videodata.thumbnailList[4].url;
					}else{
						thumbnailImage = self._videodata.videoStillURL;
					}
				}catch(e){thumbnailImage = self._videodata.videoStillURL;}

				var thumbshtml = '<div id="main-wrap"><div class="endScreen" id="endScreen"><ul class="endScreen-items">';
				thumbshtml += '<li data-thumb="' + thumbnailImage + '" class="fixed" id="video_-1">';
				thumbshtml += '<a class="endThumb" rel="-1"><div class="hover-content vcenter"><div>';
				thumbshtml += '<p class="endscreen-title" >'+self._videodata.name+'</p>';
				thumbshtml += '</div></div><div class="footer replay"></div></a></li>';

				try{
					if(videos.items){
						videos = videos.items;
					}
				}catch(e){}

				var index = 0;

				$jQ111.each(videos, function(key, val) {

					if(self._isIpad){
						var thumbImg = "";
						try{
							if(val.thumbnailList[4]){
								thumbImg = val.thumbnailList[4].url;
							}else{
								thumbImg = val.videoStillURL;
							}
						}catch(e){thumbImg = val.videoStillURL;}
						thumbshtml += '<li data-thumb="' + thumbImg + '" class="fixed" id="video_' + index + '">';
					}else{
						thumbshtml += '<li data-thumb="' + val.videoStillURL + '" class="fixed" id="video_' + index + '">';
					}
					if(self._settings.directLinks){
						if(self._settings.relativeLinks && typeof self._videodata.linkRelativeURL != 'undefined'){
							thumbshtml += '<a class="endThumb" href="' + self._videodata.linkRelativeURL + '">';
						}else if(!this._settings.relativeLinks && typeof self._videodata.linkURL != 'undefined'){
							thumbshtml += '<a class="endThumb" href="' + self._videodata.linkURL + '">';
						}else{
							self._settings.directLinks = false;
							thumbshtml += '<a class="endThumb" rel="' + index + '">';
						}
					}else{
						thumbshtml += '<a class="endThumb" rel="' + index + '">';
					}
					thumbshtml += '<div class="hover-content vcenter">';
					thumbshtml += '<div>';
					thumbshtml += '<p class="endscreen-title" >'+val.name+'</p>';
					thumbshtml += '</div>';
					thumbshtml += '</div>';

					if(index == 0 && self._settings.chainVideos == true){
						self._chainKey = index;
						thumbshtml += '<div id="timer_'+self._containerId+'" class="footer">Up next in 10 seconds</div>';

						//self.startTimer();  // HACK REMOVE
					}

					thumbshtml += '</a>';
					thumbshtml += '</li>';

					index++;
				});
				thumbshtml += '</div></div></ul>';

				////// Temp hack to bypass endscreen on chaining //
				if(self._settings.chainVideos == true){
					self.playVideoFromEndScreen(self._chainKey);
					return;
				}

				if(self._controls){
					self._controls.hide();
				}

				self._endScreen.append(thumbshtml);

				if(!self._isMobile){
					self._endScreen.endScreen({
						maxItemHeight: 160,
						delay: 300,
						onHoverExclude: "item",
						breakpoints: "2600,1200,800,640,480",
						countX_2600: 3,
						countY_2600: 4,
						countX_1200: 3,
						countY_1200: 4,
						countX_800: 3,
						countY_800: 3,
						countX_640: 2,
						countY_640: 2,
						countX_480: false
					});
				}else{
					//$jQ111('#'+videoId).hide();

					self._endScreen.endScreen({
						onHoverExclude: "item",
						countX: 2,
						countY: 2
					});
				}

				self._endScreen.fadeIn("slow");

				function endscreenClicked(evt){
					var d = self._settings.playlist[parseInt(evt.currentTarget.rel)];
					try{window.vidora.push(["send", "click", d.guid,{ params: { personalized: 0 } }])}catch(e){}
					self.playVideoFromEndScreen(evt.currentTarget.rel);
				}

				if(!self._isIpad){
					$jQ111('.endThumb').on('click', function(e){endscreenClicked(e);});
				}else{
					$jQ111('.endThumb').on('touchstart', function(e){endscreenClicked(e);});
				}
			}

			function onRecommendations(data) {
				if(data.items){
					self._settings.playlist = data.items;
				}else{
					self._settings.playlist = data;
				}

				try{
					if(self._settings.playlist){
						for(var i = 0; i < self._settings.playlist.length; i++){
							if(self._settings.playlist[i].guid == self._videodata.guid){
								var tmp = self._settings.playlist.splice(i,1);
								self._settings.playlist.push(tmp[0]);
								break;
							}
						}
					}
				}catch(e){}

				buildList(self._settings.playlist);
			}
		},


		playVideoFromEndScreen: function(thumbId){ // HTML 5 endscreen

			if(this._chainTimer){
				clearInterval(this._chainTimer);
				chainTime = 10;
			}

			this._endScreen.empty();
			this._endScreen.fadeOut("fast");

			this._videoContent.show();
			//this._videoContent.fadeOut("fast");


			if(thumbId == -1){
				//this._videodata = swapAdData(videodata);
				this.startVideo();
			}else{
				try{
					var d = this._settings.playlist[parseInt(thumbId)];
					if(!d.hlsNoCaptions){
						this._settings.guid = d.guid;

						if(!this._settings.disableChainPlay)
							this.loadVideo();
						else
							this._container.trigger('onSuggestionPlay', d );
						return;
					}else{
						this._videodata = d; 
						this.startVideo();
					}
				}catch(e){}
			}

		},

		startTimer: function(){
			var self = this;
			this._chainTime = 10;
			if(this._chainTimer){
				clearInterval(this._chainTimer);
			}
			this._chainTimer = setInterval(function(){self.chainTick()}, 1000);
		},

		chainTick: function(){
			this._chainTime -= 1;
			$jQ111("#timer_"+this._containerId).html("Up next in "+this._chainTime+" seconds")
			if (this._chainTime <= 0){
				clearInterval(this._chainTimer);
				this._chainTime = 10;
				this.playVideoFromEndScreen(this._chainKey);
				return;
			}
		},

		// Utility Functions

		getThumbnail: function (list, w){
			var rtn = false;
			var i, len;
			for (i=0,len=list.length; i<len; i = i + 1)
			{
				rtn = list[i].url;
				if(list[i].width > w){
					return rtn;
				}
			}
			return rtn;
		},

		getClickLoc: function(clk, scope){
			var x = 0;
			var y = 0;
			var h = scope._videoContent.height();
			var w = scope._videoContent.width();
			var vh = Math.round(w * .5625);
			var top = (scope._videoContent.height() - vh) / 2;
			var curtime = clk.currentTarget.currentTime;
			var offset = scope._videoContent.offset();
			if (clk.type == 'touchstart' || clk.type == 'touchmove' || clk.type == 'touchend' || clk.type == 'touchcancel') {
				var touch = clk.originalEvent.touches[0] || clk.originalEvent.changedTouches[0];
				x = touch.pageX - offset.left;
				y = touch.pageY - offset.top;
			} else {
				x = clk.pageX - offset.left;
				y = clk.pageY - offset.top;
			}

			var xClick = x / scope._videoContent.width();
			var yClick = y / scope._videoContent.height();
			return {tm:curtime, x:xClick, y:yClick};
		},

		getDomain: function(domain){
			"use strict";
			if(domain.indexOf("cwsj.com") !== -1) {
				return "WSJ China";
			}
			if(domain.indexOf("cn.wsj.com") !== -1){
				return "WSJ China";
			}
			if (domain.indexOf("jwsj.com") !== -1) {
				return "WSJ Japan";
			}
			if (domain.indexOf("kr.wsj.com") !== -1) {
				return "WSJ Korea";
			}
			if (domain.indexOf("indo.wsj.com") !== -1) {
				return "WSJ Indonesia";
			}
			if (domain.indexOf("wsj.com") !== -1) {
				return "WSJ";
			}
			if (domain.indexOf("marketwatch.com") !== -1) {
				return "MarketWatch";
			}
			if (domain.indexOf("barrons.com") !== -1) {
				return "Barrons Online";
			}
			if (domain.indexOf("wsj.de") !== -1) {
				return "WSJ Germany";
			}
			if(domain.indexOf('allthingsd.com')!== -1){
				return "AllThingsD";
			}
			if(domain.indexOf('smartmoney.com')!== -1){
				return "SmartMoney";
			}
			if(domain.indexOf('fxtrader')!== -1) {
				return "DJFXTrader";
			}
			if(domain.indexOf('fins.com')!== -1) {
				return "FINS";
			}
			return false;
		},

		getCookie: function(cname) {
			var name = cname + "=";
			var ca = document.cookie.split(';');
			for(var i=0; i<ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0)==' ') c = c.substring(1);
				if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
			}
			return "";
		}
	};


	function gTimeFormat(seconds){
		var m=Math.floor(seconds/60)<10?"0"+Math.floor(seconds/60):Math.floor(seconds/60);
		var s=Math.floor(seconds-(m*60))<10?"0"+Math.floor(seconds-(m*60)):Math.floor(seconds-(m*60));
		if(isNaN(s)){
			return "00:00";
		}else{
			return m+":"+s;
		}
	};

	// A really lightweight plugin wrapper around the constructor,
	// preventing against multiple instantiations
	$jQ111.fn["WSJVideo"] = function ( options ) {
		return this.each(function () {
			if (!$jQ111.data(this, "plugin_WSJVideo")) {
				$jQ111.data(this, "plugin_WSJVideo",
					new WSJVideo( this, options ));
			}
		});
	};

})( $jQ111, window, document );

// Fullscreen lib //
(function(){"use strict";var e=typeof module!=="undefined"&&module.exports;var t=typeof Element!=="undefined"&&"ALLOW_KEYBOARD_INPUT"in Element;var n=function(){var e;var t;var n=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];var r=0;var i=n.length;var s={};for(;r<i;r++){e=n[r];if(e&&e[1]in document){for(r=0,t=e.length;r<t;r++){s[n[0][r]]=e[r]}return s}}return false}();var r={request:function(e){var r=n.requestFullscreen;e=e||document.documentElement;if(/5\.1[\.\d]* Safari/.test(navigator.userAgent)){e[r]()}else{e[r](t&&Element.ALLOW_KEYBOARD_INPUT)}},exit:function(){document[n.exitFullscreen]()},toggle:function(e){if(this.isFullscreen){this.exit()}else{this.request(e)}},onchange:function(){},onerror:function(){},raw:n};if(!n){if(e){module.exports=false}else{window.screenfull=false}return}Object.defineProperties(r,{isFullscreen:{get:function(){return!!document[n.fullscreenElement]}},element:{enumerable:true,get:function(){return document[n.fullscreenElement]}},enabled:{enumerable:true,get:function(){return!!document[n.fullscreenEnabled]}}});document.addEventListener(n.fullscreenchange,function(e){r.onchange.call(r,e)});document.addEventListener(n.fullscreenerror,function(e){r.onerror.call(r,e)});if(e){module.exports=r}else{window.screenfull=r}})()
// Endscreen lib //
try{
	$jQ111.easing.jswing=$jQ111.easing.swing,$jQ111.extend($jQ111.easing,{def:"easeOutQuad",swing:function(e,t,n,i,a){return $jQ111.easing[$jQ111.easing.def](e,t,n,i,a)},easeInQuad:function(e,t,n,i,a){return i*(t/=a)*t+n},easeOutQuad:function(e,t,n,i,a){return-i*(t/=a)*(t-2)+n},easeInOutQuad:function(e,t,n,i,a){return(t/=a/2)<1?i/2*t*t+n:-i/2*(--t*(t-2)-1)+n},easeInCubic:function(e,t,n,i,a){return i*(t/=a)*t*t+n},easeOutCubic:function(e,t,n,i,a){return i*((t=t/a-1)*t*t+1)+n},easeInOutCubic:function(e,t,n,i,a){return(t/=a/2)<1?i/2*t*t*t+n:i/2*((t-=2)*t*t+2)+n},easeInQuart:function(e,t,n,i,a){return i*(t/=a)*t*t*t+n},easeOutQuart:function(e,t,n,i,a){return-i*((t=t/a-1)*t*t*t-1)+n},easeInOutQuart:function(e,t,n,i,a){return(t/=a/2)<1?i/2*t*t*t*t+n:-i/2*((t-=2)*t*t*t-2)+n},easeInQuint:function(e,t,n,i,a){return i*(t/=a)*t*t*t*t+n},easeOutQuint:function(e,t,n,i,a){return i*((t=t/a-1)*t*t*t*t+1)+n},easeInOutQuint:function(e,t,n,i,a){return(t/=a/2)<1?i/2*t*t*t*t*t+n:i/2*((t-=2)*t*t*t*t+2)+n},easeInSine:function(e,t,n,i,a){return-i*Math.cos(t/a*(Math.PI/2))+i+n},easeOutSine:function(e,t,n,i,a){return i*Math.sin(t/a*(Math.PI/2))+n},easeInOutSine:function(e,t,n,i,a){return-i/2*(Math.cos(Math.PI*t/a)-1)+n},easeInExpo:function(e,t,n,i,a){return 0==t?n:i*Math.pow(2,10*(t/a-1))+n},easeOutExpo:function(e,t,n,i,a){return t==a?n+i:i*(-Math.pow(2,-10*t/a)+1)+n},easeInOutExpo:function(e,t,n,i,a){return 0==t?n:t==a?n+i:(t/=a/2)<1?i/2*Math.pow(2,10*(t-1))+n:i/2*(-Math.pow(2,-10*--t)+2)+n},easeInCirc:function(e,t,n,i,a){return-i*(Math.sqrt(1-(t/=a)*t)-1)+n},easeOutCirc:function(e,t,n,i,a){return i*Math.sqrt(1-(t=t/a-1)*t)+n},easeInOutCirc:function(e,t,n,i,a){return(t/=a/2)<1?-i/2*(Math.sqrt(1-t*t)-1)+n:i/2*(Math.sqrt(1-(t-=2)*t)+1)+n},easeInElastic:function(e,t,n,i,a){var o=1.70158,s=0,r=i;if(0==t)return n;if(1==(t/=a))return n+i;if(s||(s=.3*a),r<Math.abs(i)){r=i;var o=s/4}else var o=s/(2*Math.PI)*Math.asin(i/r);return-(r*Math.pow(2,10*(t-=1))*Math.sin(2*(t*a-o)*Math.PI/s))+n},easeOutElastic:function(e,t,n,i,a){var o=1.70158,s=0,r=i;if(0==t)return n;if(1==(t/=a))return n+i;if(s||(s=.3*a),r<Math.abs(i)){r=i;var o=s/4}else var o=s/(2*Math.PI)*Math.asin(i/r);return r*Math.pow(2,-10*t)*Math.sin(2*(t*a-o)*Math.PI/s)+i+n},easeInOutElastic:function(e,t,n,i,a){var o=1.70158,s=0,r=i;if(0==t)return n;if(2==(t/=a/2))return n+i;if(s||(s=.3*a*1.5),r<Math.abs(i)){r=i;var o=s/4}else var o=s/(2*Math.PI)*Math.asin(i/r);return 1>t?-.5*r*Math.pow(2,10*(t-=1))*Math.sin(2*(t*a-o)*Math.PI/s)+n:r*Math.pow(2,-10*(t-=1))*Math.sin(2*(t*a-o)*Math.PI/s)*.5+i+n},easeInBack:function(e,t,n,i,a,o){return void 0==o&&(o=1.70158),i*(t/=a)*t*((o+1)*t-o)+n},easeOutBack:function(e,t,n,i,a,o){return void 0==o&&(o=1.70158),i*((t=t/a-1)*t*((o+1)*t+o)+1)+n},easeInOutBack:function(e,t,n,i,a,o){return void 0==o&&(o=1.70158),(t/=a/2)<1?i/2*t*t*(((o*=1.525)+1)*t-o)+n:i/2*((t-=2)*t*(((o*=1.525)+1)*t+o)+2)+n},easeInBounce:function(e,t,n,i,a){return i-$jQ111.easing.easeOutBounce(e,a-t,0,i,a)+n},easeOutBounce:function(e,t,n,i,a){return(t/=a)<1/2.75?7.5625*i*t*t+n:2/2.75>t?i*(7.5625*(t-=1.5/2.75)*t+.75)+n:2.5/2.75>t?i*(7.5625*(t-=2.25/2.75)*t+.9375)+n:i*(7.5625*(t-=2.625/2.75)*t+.984375)+n},easeInOutBounce:function(e,t,n,i,a){return a/2>t?.5*$jQ111.easing.easeInBounce(e,2*t,0,i,a)+n:.5*$jQ111.easing.easeOutBounce(e,2*t-a,0,i,a)+.5*i+n}}),function(){function e(e,t,n,i,a,o,s,r){return r*n>a?$jQ111.easing[e](i,a,o,n*s,n*r):$jQ111.easing[t](i,a-n*r,o+n*s,(1-n)*s,(1-n)*r)}var t,n,i,a=$jQ111;t=["Cubic-Back","Cubic-Bounce-0.85","Cubic-Elastic-0.66","Back-Elastic-0.66"];for(var n in t)n=t[n].split("-"),i={},i["easeIn"+n[0]+"Out"+n[1]]=function(t,n,i){return function(a,o,s,r,u){return e("easeIn"+t,"easeOut"+n,i||.5,a,o,s,r,u)}}(n[0],n[1],n[2]),a.extend(a.easing,i)}(),function(e,t,n,i){"use strict";function a(e){this.init(e)}function o(t){this.elem=e(t)}function s(e){var t=this;t.base=e}function r(e){var t=this;t.base=e}{var u=n,c=t,m=(e(u),e(c),"endScreen"),d="endScreen",l=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),h=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.msCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),p=function(){return function(t){function n(){a=i(null,Math.max(0,o),t.from,t.to-t.from,s),t.callback&&t.callback(a,t.callbackParams,o,s),t.change&&t.change(a,t.callbackParams,o,s),o==s?t.complete&&t.complete():t.context[t.id]=l(function(){n()}),o=Math.min(s,o+1e3/60)}var i,a=t.from,o=-t.delay||0,s=t.duration?t.duration:1e3;i=e.easing&&e.easing[t.easing]?e.easing[t.easing]:f.swing,t.context[t.id]&&h(t.context[t.id]),n()}}(),f={swing:function(e,t,n,i,a){return-i*(t/=a)*(t-2)+n}},g=function(){var e=t.getComputedStyle(n.documentElement,""),i=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1],a="WebKit|Moz|MS|O".match(new RegExp("("+i+")","i"))[1];return{dom:a,lowercase:i,css:"-"+i+"-",js:i[0].toUpperCase()+i.substr(1)}}();!function(){try{var e,a;return e=n.createElement("p"),e.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",n.body.insertBefore(e,n.body.lastChild),a=t.getComputedStyle(e).getPropertyValue("transform"),o(e).remove(),a!==i?"none"!==a:!1}catch(o){return!1}}(),function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}()}a.prototype={init:function(e){var t=this;return t.elem=e,t},update:function(){var e,t=this,n=[];return n.push("translate3d("+t.x()+"px, "+t.y()+"px, "+t.z()+"px)"),n.push("rotateX("+t.rotX()+"deg)"),n.push("rotateY("+t.rotY()+"deg)"),n.push("rotateZ("+t.rotZ()+"deg)"),n.push("scale("+t.scale()+")"),e={},e[g.css+"transform"]=n.join(" "),e[g.css+"transform-origin"]=100*t.originX()+"% "+100*t.originY()+"%",e.opacity=t.opacity(),t.elem.css(e),t},animate:function(t,n,i){var a=this;t=t.split(",");for(var o in t)i=e.extend(!0,{},i),i.id=t[o]+"Tween",i.context=a,i.from=a[t[o]](),i.to=n,i.callback=function(e){return function(n){a[t[e]](n),a.update()}}(o),p(i);return a},stop:function(e){var t=this;e=e.split(",");for(var n in e)h(t[e[n]+"Tween"]);return t},set:function(e,t){var n=this;e=e.split(",");for(var i in e)n[e[i]](t);return n},x:function(e){var t=this;return e===i?t._x||0:(t._x=e,t)},y:function(e){var t=this;return e===i?t._y||0:(t._y=e,t)},z:function(e){var t=this;return e===i?t._z||0:(t._z=e,t)},rotX:function(e){var t=this;return e===i?t._rx||0:(t._rx=e,t)},rotY:function(e){var t=this;return e===i?t._ry||0:(t._ry=e,t)},rotZ:function(e){var t=this;return e===i?t._rz||0:(t._rz=e,t)},origin:function(e){var t=this;return t.originX(e).originY(e),t},originX:function(e){var t=this;return e===i?t._ogx===i?.5:t._ogx:(t._ogx=e,t)},originY:function(e){var t=this;return e===i?t._ogy===i?.5:t._ogy:(t._ogy=e,t)},opacity:function(e){var t=this;return e===i?t._op===i?1:t._op:(t._op=e,t)},scale:function(e){var t=this;return e===i?t._sc===i?1:t._sc:(t._sc=e,t)}};var x={items:"."+d+"-items",item:"."+d+"-item",itemWrap:"."+d+"-item-wrap",thumb:"."+d+"-item-thumb"};o.prototype={init:function(t,n){var i=this;return i.api(t,n)?i:(i.options=e.extend(e.fn[m].options,t),i.setup(),i.update(),i.manager=new s(i),i.manager.start(),i)},destroy:function(){var e,t,n=this;for(n.destroyed=!0,n.manager.stop(),delete n.manager,t=n.items.length,e=0;t>e;e++)n.items[e].destroy(),delete n.items[e];return n.elem.data("_"+m+"Instance",null),n},setup:function(){var e,t,n,i=this;for(i.items=[],i.domItems=i.elem.find(x.items).children(),t=i.domItems.length,n=0;t>n;n++)e=new r(i),e.init(i.domItems[n]),i.items.push(e);return i},getCountResponsive:function(){var e,t,n,a,o=this,s=o.elem.outerWidth();for(t=o.options.breakpoints?o.options.breakpoints.split(","):[],n=t.length,e={},a=0;n>a;a++)s<=t[a]&&o.options["countX_"+t[a]]!==i&&(e.x=o.options["countX_"+t[a]]),s<=t[a]&&o.options["countY_"+t[a]]!==i&&(e.y=o.options["countY_"+t[a]]);return e},update:function(){var e,t,n,i,a,o,s,r,u,c=this,m=c.elem.width(),d=c.elem.height();if(!c.destroyed){for(e=c.getCountResponsive(),e.x?c.xCount=e.x:c.options.countX?c.xCount=c.options.countX:(t=Math.floor(m/c.options.maxItemWidth),n=Math.ceil(m/c.options.maxItemWidth),c.xCount=m/t>c.options.maxItemWidth?n:t,c.xCount=Math.max(c.options.minCountX||1,c.xCount),c.options.maxCountX&&(c.xCount=Math.min(c.options.maxCountX,c.xCount))),e.y?c.yCount=e.y:c.options.countY?c.yCount=c.options.countY:(i=Math.floor(d/c.options.maxItemHeight),a=Math.ceil(d/c.options.maxItemHeight),c.yCount=d/i>c.options.maxItemHeight?a:i,c.yCount=Math.max(c.options.minCountY||1,c.yCount),c.options.maxCountY&&(c.yCount=Math.min(c.options.maxCountY,c.yCount))),c.itemWidth=Math.ceil(m/c.xCount),c.itemHeight=Math.ceil(d/c.yCount),c.domItems.hide().css("z-index",0),c.elem.css("overflow",c.overflow),c.grid=[],c.rows=[],c.columns=[],r=c.xCount*c.yCount,u=0;r>u;u++)o=u%c.xCount,s=Math.floor(u/c.xCount),c.items[u]&&(c.items[u].reset().setPos(o,s).loadThumb().elem.css({width:c.itemWidth,height:c.itemHeight}).show(),c.grid.push(c.items[u]),c.rows[s]||(c.rows[s]=[]),c.rows[s].push(c.items[u]),c.columns[o]||(c.columns[o]=[]),c.columns[o].push(c.items[u]));return c}},getItem:function(e,t,n,i,a){var o,s,r,u,c,m,d,l,h,p,f=this;if(!(f.items.length<=f.grid.length||f.destroyed)){switch(m=f.items[e],d=f.items[t],m.reset(),d.reset(),m.elem.css("z-index",9999),d.elem.css("z-index",9999),h="-"==n.slice(0,1)?-1:1,l=n.slice(n.length-1),a){case"easeInBackOutElastic":s=.33*i,r=.66*i,u="easeInBack",c="easeOutElastic";break;case"easeInBackOutCubic":s=.33*i,r=.66*i,u="easeInBack",c="easeOutCubic";break;case"easeInCubicOutElastic":s=.33*i,r=.66*i,u="easeInCubic",c="easeOutElastic";break;case"easeInBackOutBack":s=.5*i,r=s,u="easeInBack",c="easeOutBack";break;case"easeInCubicOutCubic":s=.5*i,r=s,u="easeInCubic",c="easeOutCubic";break;case"easeInCubicOutBounce":s=.5*i,r=s,u="easeInCubic",c="easeOutBounce";break;default:s=.5*i,r=s,u=c=a}switch(n){case"rollInX":case"rollInY":case"-rollInX":case"-rollInY":f.swapItems(t,e),d.elem.css("z-index",0),d.setPos(m.px,m.py).loadThumb().elem.css({width:f.itemWidth,height:f.itemHeight}).show(),m.css3d["origin"+l](h>0?1:0).animate("opacity",.5,{duration:s,easing:u}).animate("rot"+("Y"==l?"X":"Y"),-h*("Y"==l?1:-1)*(-90-180*Math.atan(.5*("Y"==l?f.itemHeight:f.itemWidth)/f.options.perspective)/Math.PI),{duration:s,easing:u,complete:function(){d.css3d.opacity(.5)["origin"+l](h>0?0:1)["rot"+("Y"==l?"X":"Y")](-h*("Y"==l?1:-1)*(90+180*Math.atan(.5*("Y"==l?f.itemHeight:f.itemWidth)/f.options.perspective)/Math.PI)).update().animate("opacity",1,{duration:r,easing:c}).animate("rot"+("Y"==l?"X":"Y"),0,{duration:r,easing:c,complete:function(){f.update(),m.reset()}})}}),d.css3d.opacity(.5)["origin"+l](h>0?0:1)["rot"+("Y"==l?"X":"Y")](-h*("Y"==l?1:-1)*(90+180*Math.atan(.5*("Y"==l?f.itemHeight:f.itemWidth)/f.options.perspective)/Math.PI)).update();break;case"rollOutX":case"rollOutY":case"-rollOutX":case"-rollOutY":f.swapItems(t,e);var g=e+h*("Y"==l?f.xCount:1);g>=0&&("Y"==l||g%f.xCount!=f.xCount-(h>0?0:1)&&g%f.xCount!=(h>0?0:-1))&&f.swapItems(t,g),d.elem.css("z-index",0);var x=!1;("-rollOutY"==n&&0==m.py||"rollOutY"==n&&m.py==f.yCount-1||"-rollOutX"==n&&0==m.px||"rollOutX"==n&&m.px==f.xCount-1)&&(x=!0),d.setPos(m.px,m.py).loadThumb().elem.css({width:f.itemWidth,height:f.itemHeight}).show(),m.css3d["origin"+l](h>0?1:0).animate("opacity",.5,{duration:s,easing:u}).animate("rot"+("Y"==l?"X":"Y"),h*("Y"==l?1:-1)*(-90+180*Math.atan(.5*("Y"==l?f.itemHeight:f.itemWidth)/f.options.perspective)/Math.PI),{duration:s,easing:u,complete:function(){x?(f.update(),f.items[t].reset()):m.setPos(d.px+("Y"==l?0:h),d.py+("Y"==l?h:0)).css3d["origin"+l](h>0?0:1)["rot"+("Y"==l?"X":"Y")](h*("Y"==l?1:-1)*(90-180*Math.atan(.5*("Y"==l?f.itemHeight:f.itemWidth)/f.options.perspective)/Math.PI)).update().animate("opacity",x?0:1,{duration:r,easing:c}).animate("rot"+("Y"==l?"X":"Y"),0,{duration:r,easing:c,complete:function(){f.update(),f.items[t].reset()}})}});break;case"slideX":case"slideY":case"-slideX":case"-slideY":l=l.toLowerCase(),f.swapItems(t,e),m.elem.css("overflow","hidden"),d.elem.css("overflow","hidden"),m.css3d.animate(l,-h*("x"==l?f.itemWidth:f.itemHeight),{duration:s,easing:u,complete:function(){f.update(),m.reset()}}),d.setPos(m.px,m.py).loadThumb().elem.css({width:f.itemWidth,height:f.itemHeight}).show(),d.css3d[l](h*("x"==l?f.itemWidth:f.itemHeight)).update().animate(l,0,{duration:r,easing:c});break;case"flipX":case"flipY":case"-flipX":case"-flipY":f.swapItems(t,e),m.css3d.animate("rot"+l,90*-h,{duration:s,easing:u,complete:function(){d.setPos(m.px,m.py).loadThumb().elem.css({width:f.itemWidth,height:f.itemHeight}).show(),d.css3d["rot"+l](90*h).opacity(.5).update().animate("opacity",1,{duration:r,easing:c}).animate("rot"+l,0,{duration:r,easing:c,complete:function(){f.update(),m.reset()}})}});break;case"slideRow":case"-slideRow":for(l="x",o=m.py,e=f.getIndex(h>0?f.xCount-1:0,o),m=f.items[e],f.swapItems(t,e),p=0;p<f.xCount-1;p++)f.swapItems(f.getIndex(h>0?f.xCount-1-p:p,o),f.getIndex(h>0?f.xCount-2-p:p+1,o));f.overflow=f.elem.css("overflow"),f.elem.css("overflow","hidden"),f.items[h>0?f.getIndex(0,o):f.getIndex(f.xCount-1,o)].setPos(h>0?0:f.xCount-1,o).loadThumb().elem.css({width:f.itemWidth,height:f.itemHeight}).show(),f.items[h>0?f.getIndex(0,o):f.getIndex(f.xCount-1,o)].css3d.x(-h*f.itemWidth).update().animate("x",0,{duration:i,easing:a,change:function(e){for(p=h>0?1:0;p<f.xCount-(h>0?0:1);p++)f.rows[o][p].css3d.x(h*f.itemWidth+e).update();m.css3d.x(h*f.itemWidth+e).update()},complete:function(){f.update(),m.reset()}});break;case"slideColumn":case"-slideColumn":for(l="y",o=m.px,e=f.getIndex(o,h>0?f.yCount-1:0),m=f.items[e],f.swapItems(t,e),p=0;p<f.yCount-1;p++)f.swapItems(f.getIndex(o,h>0?f.yCount-1-p:p),f.getIndex(o,h>0?f.yCount-2-p:p+1));f.overflow=f.elem.css("overflow"),f.elem.css("overflow","hidden"),f.items[h>0?f.getIndex(o,0):f.getIndex(o,f.yCount-1)].setPos(o,h>0?0:f.yCount-1).loadThumb().elem.css({width:f.itemWidth,height:f.itemHeight}).show(),f.items[h>0?f.getIndex(o,0):f.getIndex(o,f.yCount-1)].css3d.y(-h*f.itemHeight).update().animate("y",0,{duration:i,easing:a,change:function(e){for(p=h>0?1:0;p<f.yCount-(h>0?0:1);p++)f.columns[o][p].css3d.y(h*f.itemHeight+e).update();m.css3d.y(h*f.itemHeight+e).update()},complete:function(){f.update(),m.reset()}});break;case"fade":default:f.swapItems(t,e),m.elem.css("z-index",0),d.setPos(m.px,m.py).loadThumb().elem.css({width:f.itemWidth,height:f.itemHeight}).show(),d.css3d.opacity(0).update().animate("opacity",1,{duration:i,easing:a,complete:function(){f.update(),m.reset()}})}return f}},getIndex:function(e,t){var n=this;return t*n.xCount+e},swapItems:function(e,t){var n,i,a,o=this;return a=o.grid.length,n=o.items[e],i=o.items[t],o.items[e]=i,o.items[t]=n,a>e&&(o.grid[e]=i,o.rows[Math.floor(e/o.xCount)][e%o.xCount]=i,o.columns[e%o.xCount][Math.floor(e/o.xCount)]=i),a>t&&(o.grid[t]=n,o.rows[Math.floor(t/o.xCount)][t%o.xCount]=n,o.columns[t%o.xCount][Math.floor(t/o.xCount)]=n),o},api:function(t,n){var i=this;if("string"==typeof t){switch(t){case"update":i.update();break;case"start":i.manager.start();break;case"stop":i.manager.stop();break;case"show":i.manager.getItem(n[0],n[1],n[2],n[3],n[4]);break;case"option":var a={};a[n[0]]=n[1],i.options=e.extend(!0,{},i.options,a),i.update();break;case"destroy":i.destroy()}return!0}return!1}},s.prototype={start:function(e){var t=this;return p({id:"timer",context:t,from:0,to:1,duration:e||t.base.options.delay||1,complete:function(){t.destroyed||(t.getItem(),t.start(t.animationDuration+t.base.options.delay))}}),t},stop:function(){var e=this;return h(e.timer),e},pause:function(){var e=this;return e.paused=!0,e},resume:function(){var e=this;return e.paused=!1,e},getItem:function(e,t,n,i,a){}},r.prototype={init:function(t){var n=this;return n.elem=e(t),n.elem.wrapInner(e("<div/>").addClass(x.itemWrap.slice(1))),n.content=n.elem.children().eq(0),n.elem.css(g.css+"perspective",n.base.options.perspective),n.css3d=new a(n.content),n.elem.on("mouseenter",{t:n},n.handleMouseOver),n.elem.on("mouseleave",{t:n},n.handleMouseOut),n.elem.on("touchend",{t:n},n.handleTouchEnd),n},handleMouseOver:function(e){var t=e.data.t;t.elem.addClass("hover").siblings().removeClass("hover"),"all"==t.base.options.onHoverExclude&&t.base.manager.pause()},handleMouseOut:function(e){var t=e.data.t;t.elem.removeClass("hover"),"all"==t.base.options.onHoverExclude&&t.base.manager.resume()},handleTouchEnd:function(e){var t=e.data.t;return t.elem.hasClass("hover")?void 0:(e.preventDefault(),t.handleMouseOver(e),!1)},loadThumb:function(){var t=this,n=t.elem.data("thumb"),i=new Image;return t.thumbLoaded||!n?t:(t.elem.addClass("loading"),t.thumbLoaded=!0,i.onload=function(){t.content.append(e("<div/>").addClass(x.thumb.slice(1)).css({"background-image":"url("+n+")","background-position":"center center","background-repeat":"no-repeat","background-size":t.base.options.sizing}).fadeTo(0,0).fadeTo(300,1)),t.elem.removeClass("loading")},i.src=n,t)},setPos:function(e,t){var n=this;return n.px=e,n.py=t,n.elem.css({left:n.px*n.base.itemWidth,top:n.py*n.base.itemHeight}),n},reset:function(){var e=this;return e.elem.css({"z-index":0,overflow:"visible"}),e.css3d.stop("x,y,z,rotX,rotY,rotZ,opacity").set("x,y,z,rotX,rotY,rotZ",0).opacity(1).origin(.5).update(),e},destroy:function(){var e=this;return e.reset(),e.elem.off("mouseenter",e.handleMouseOver),e.elem.off("mouseleave",e.handleMouseOut),e.elem.empty().removeClass("hover").removeAttr("style"),e}},e.extend(e.fn,{endScreen:function(t){var n=Array.prototype.slice.call(arguments,1);return e(this).each(function(){var i=e(this).data("_"+m+"Instance");("string"!=typeof t||i)&&(i=i||new o(this),i.init(t,n),e(this).data("_"+m+"Instance",i))})}}),e.fn[m].options={animations:!1,animationsExcluded:!1,delay:500,maxItemWidth:240,maxItemHeight:160,countX:!1,countY:!1,minCountX:1,minCountY:1,maxCountX:!1,maxCountY:!1,onHoverExclude:!1,sizing:"cover",fixedClass:"fixed",perspective:600,duration:650,easing:"easeInOutCubic",rollInXDuration:!1,rollInXEasing:"easeInCubicOutCubic",rollInYDuration:!1,rollInYEasing:"easeInCubicOutCubic",rollOutXDuration:!1,rollOutXEasing:"easeInCubicOutCubic",rollOutYDuration:!1,rollOutYEasing:"easeInCubicOutCubic",flipXDuration:!1,flipXEasing:"easeInCubicOutCubic",flipYDuration:!1,flipYEasing:"easeInCubicOutCubic",slideXDuration:!1,slideXEasing:!1,slideYDuration:!1,slideYEasing:!1,slideRowDuration:!1,slideRowEasing:!1,slideColumnDuration:!1,slideColumnEasing:!1,fadeDuration:!1,fadeEasing:!1,breakpoints:!1}}($jQ111,window,document);
}catch(e){}

/*
 var jQueryScriptOutputted = false;
 function initJQuery() {
 if (typeof(jQuery) == 'undefined') {
 if (! jQueryScriptOutputted) {
 jQueryScriptOutputted = true;
 document.write('<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>');
 }
 setTimeout("initJQuery()", 50);
 }

 }
 initJQuery();
 $( document ).ready(function() {
 console.log( "ready!" );
 });
 */











/*	SWFObject v2.2 <http://code.google.com/p/swfobject/>
 is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
 */
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();

// COMSCORE SOURCE //
function udm_(a,b){var c="comScore=",d=document,e=d.cookie,f="",g="indexOf",h="substring",i="length",j=2048,k,l="&ns_",m="&",n,o,p,q,r=window,s=r.encodeURIComponent||escape;if(e[g](c)+1)for(p=0,o=e.split(";"),q=o[i];p<q;p++)n=o[p][g](c),n+1&&(f=m+unescape(o[p][h](n+c[i])));a+=l+"_t="+ +(new Date)+l+"c="+(d.characterSet||d.defaultCharset||"")+"&c8="+s(d.title)+f+"&c7="+s(d.URL)+"&c9="+s(d.referrer),a[i]>j&&a[g](m)>0&&(k=a[h](0,j-8).lastIndexOf(m),a=(a[h](0,k)+l+"cut="+s(a[h](k+1)))[h](0,j)),d.images?(n=new Image,r.ns_p||(ns_p=n),typeof b=="function"&&(n.onload=n.onerror=b),n.src=a):d.write("<","p","><",'img src="',a,'" height="1" width="1" alt="*"',"><","/p",">")}typeof _comscore=="undefined"&&(_comscore=[]),function(){var a="length",b=self,c=b.encodeURIComponent?encodeURIComponent:escape,d=".scorecardresearch.com",e="//app"+d+"/s2e/invite",f=Math,g="script",h="width",i=/c2=(\d*)&/,j,k=function(b){if(!!b){var e,f=[],g,h=0,i,j,k="";for(var l in b){g=typeof b[l];if(g=="string"||g=="number")f[f[a]]=l+"="+c(b[l]),l=="c2"?k=b[l]:l=="c1"&&(h=1)}if(f[a]<=0||k=="")return;j=b.options||{},j.d=j.d||document;if(typeof j.url_append=="string"){i=j.url_append.replace(/&amp;/,"&").split("&");for(var l=0,n=i[a],o;l<n;l++)o=i[l].split("="),o[a]==2&&(f[f[a]]=o[0]+"="+c(o[1]))}e=["http",j.d.URL.charAt(4)=="s"?"s://sb":"://b",d,"/b?",h?"":"c1=2&",f.join("&").replace(/&$/,"")],udm_(e.join(""),function(){m(this,j)})}},l=function(b){b=b||_comscore;for(var c=0,d=b[a];c<d;c++)k(b[c]);b=_comscore=[]},m=function(a,b){if(!(a.src.indexOf("c1=2")<0||!b.d.createElement))if(b.force_script_extension||a[h]==2&&a.height>f.round(f.random()*100)){var c=b.d.createElement(g),d=b.d.getElementsByTagName(g)[0],j=[b.script_extension_url||e,"?","c2=",a.src.match(i)[1]].join("");d&&(c.src=j,c.async=!0,d.parentNode.insertBefore(c,d))}};l(),(j=b.COMSCORE)?(j.purge=l,j.beacon=k):COMSCORE={purge:l,beacon:k}}()

var ns_=ns_||{};ns_.StreamSense=ns_.StreamSense||function(){function n(t){e=t}function r(e){t=e}function u(t,n){var r=t||"",i=f,u="undefined",a=s.comScore||s.sitestat||function(t){var n="comScore=",r=o.cookie,i="",a="indexOf",f="substring",l="length",c=2048,h,p="&ns_",d="&",v,m,g,y,b=s.encodeURIComponent||escape;if(r[a](n)+1)for(g=0,m=r.split(";"),y=m[l];g<y;g++)v=m[g][a](n),v+1&&(i=d+unescape(m[g][f](v+n[l])));t+=p+"_t="+ +(new Date)+p+"c="+(o.characterSet||o.defaultCharset||"")+i,t[l]>c&&t[a](d)>0&&(h=t[f](0,c-8).lastIndexOf(d),t=(t[f](0,h)+p+"cut="+b(t[f](h+1)))[f](0,c)),e(t),typeof ns_p===u&&(ns_p={src:t}),ns_p.lastMeasurement=t};if(typeof n!==u){var l=[],c=s.encodeURIComponent||escape;for(var h in n)n.hasOwnProperty(h)&&l.push(c(h)+"="+c(n[h]));/[\?\&]$/.test(r)||(r+="&"),r+=l.join("&")}return a(r)}function a(e,t){var n,r=2048,i=s.encodeURIComponent||escape,u=[],a=p.LABELS_ORDER,f=e.split("?"),l=f[0],c=f[1],h=c.split("&");for(var d=0,v=h.length;d<v;d++){var m=h[d].split("="),g=unescape(m[0]),y=unescape(m[1]);g&&(t[g]=y)}var b={};for(var d=0,v=a.length;d<v;d++){var w=a[d];t.hasOwnProperty(w)&&(b[w]=!0,u.push(i(w)+"="+i(t[w])))}for(var w in t){if(b[w])continue;t.hasOwnProperty(w)&&u.push(i(w)+"="+i(t[w]))}return n=l+"?"+u.join("&"),n=n+(n.indexOf("&c8=")<0?"&c8="+i(o.title):"")+(n.indexOf("&c7=")<0?"&c7="+i(o.URL):"")+(n.indexOf("&c9=")<0?"&c9="+i(o.referrer):""),n.length>r&&n.indexOf("&")>0&&(last=n.substr(0,r-8).lastIndexOf("&"),n=(n.substring(0,last)+"&ns_cut="+i(n.substring(last+1))).substr(0,r)),n}var e=function(e,t){},t=function(e,t,n){};n(function(e,t){var n=new Image;n.src=e,t&&setTimeout(t,0)}),r(function(e,t,n){n&&setTimeout(n,0)});var i=typeof window!="undefined"&&typeof document!="undefined",s,o;i?(s=window,o=document):(s={},o={location:{href:""},title:"",URL:"",referrer:"",cookie:""});var f=function(){var e={uid:function(){var e=1;return function(){return+(new Date)+"_"+e++}}(),filter:function(e,t){var n={};for(var r in t)t.hasOwnProperty(r)&&e(t[r])&&(n[r]=t[r]);return n},extend:function(e){var t=arguments.length,n;e=e||{};for(var r=1;r<t;r++){n=arguments[r];if(!n)continue;for(var i in n)n.hasOwnProperty(i)&&(e[i]=n[i])}return e},getString:function(e,t){var n=String(e);return e==null?t||"na":n},getLong:function(e,t){var n=Number(e);return e==null||isNaN(n)?t||0:n},getInteger:function(e,t){var n=Number(e);return e==null||isNaN(n)?t||0:n},getBoolean:function(e,t){var n=String(e).toLowerCase()=="true";return e==null?t||!1:n},isNotEmpty:function(e){return e!=null&&e.length>0},indexOf:function(t,n){var r=-1;return e.forEach(n,function(e,n){e==t&&(r=n)}),r},forEach:function(e,t,n){try{if(typeof t=="function"){n=typeof n!="undefined"?n:null;if(typeof e["length"]!="number"||typeof e[0]=="undefined"){var r=typeof e.__proto__!="undefined";for(var i in e)(!r||r&&typeof e.__proto__[i]=="undefined")&&typeof e[i]!="function"&&t.call(n,e[i],i)}else for(var i=0,s=e.length;i<s;i++)t.call(n,e[i],i)}}catch(o){}},regionMatches:function(e,t,n,r,i){if(t<0||r<0||t+i>e.length||r+i>n.length)return!1;while(--i>=0){var s=e.charAt(t++),o=n.charAt(r++);if(s!=o)return!1}return!0},size:function(e){var t=0,n;for(var n in e)e.hasOwnProperty(n)&&t++;return t},log:function(e,t){if(typeof t!="undefined"&&t){var n=new Date,r=n.getHours()+":"+n.getMinutes()+":"+n.getSeconds();console.log(r,e)}},isTrue:function(e){return typeof e=="undefined"?!1:typeof e=="string"?(e=e.toLowerCase(),e==="true"||e==="1"||e==="on"):e?!0:!1},toString:function(t){if(typeof t=="undefined")return"undefined";if(typeof t=="string")return t;if(Object.prototype.toString.call(t)==="[object Array]")return t.join(",");if(e.size(t)>0){var n="";for(var r in t)t.hasOwnProperty(r)&&(n+=r+":"+t[r]+";");return n}return t.toString()},exists:function(e){return typeof e!="undefined"&&e!=null},firstGreaterThan0:function(){for(var e=0,t=arguments.length;e<t;e++){var n=arguments[e];if(n>0)return n}return 0},cloneObject:function(e){if(null==e||"object"!=typeof e)return e;var t=e.constructor();for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}};return e.filterMap=function(t,n){for(var r in t)e.indexOf(r,n)==-1&&delete t[r]},e.getKeys=function(e,t){var n,r=[];for(n in e)(!t||t.test(n))&&e.hasOwnProperty(n)&&(r[r.length]=n);return r},e.getBrowserName=function(){var e=navigator.userAgent,t=navigator.appName,n,r,i;return(r=e.indexOf("Opera"))!=-1?t="Opera":(r=e.indexOf("MSIE"))!=-1?t="Microsoft Internet Explorer":(r=e.indexOf("Android"))!=-1?t="Android":(r=e.indexOf("Chrome"))!=-1?t="Chrome":(r=e.indexOf("Safari"))!=-1?t="Safari":(r=e.indexOf("Firefox"))!=-1?t="Firefox":(r=e.indexOf("Windows NT"))!=-1?t="Microsoft Internet Explorer":(n=e.lastIndexOf(" ")+1)<(r=e.lastIndexOf("/"))&&(t=e.substring(n,r),t.toLowerCase()==t.toUpperCase()&&(t=navigator.appName)),t},e.getBrowserFullVersion=function(){var e=navigator.userAgent,t=""+parseFloat(navigator.appVersion),n=parseInt(navigator.appVersion,10),r,i,s;return(i=e.indexOf("Opera"))!=-1?(t=e.substring(i+6),(i=e.indexOf("Version"))!=-1&&(t=e.substring(i+8))):(i=e.indexOf("MSIE"))!=-1?t=e.substring(i+5):(i=e.indexOf("Android"))!=-1?t=e.substring(i+8):(i=e.indexOf("Chrome"))!=-1?t=e.substring(i+7):(i=e.indexOf("Safari"))!=-1?(t=e.substring(i+7),(i=e.indexOf("Version"))!=-1&&(t=e.substring(i+8))):(i=e.indexOf("Firefox"))!=-1?t=e.substring(i+8):(i=e.indexOf("Windows NT"))!=-1?(i=e.indexOf("rv:"),t=e.substring(i+3)):(r=e.lastIndexOf(" ")+1)<(i=e.lastIndexOf("/"))&&(t=e.substring(i+1)),(s=t.indexOf(";"))!=-1&&(t=t.substring(0,s)),(s=t.indexOf(" "))!=-1&&(t=t.substring(0,s)),(s=t.indexOf(")"))!=-1&&(t=t.substring(0,s)),n=parseInt(""+t,10),isNaN(n)&&(t=""+parseFloat(navigator.appVersion)),t},e}(),l=function(){var e=["play","pause","end","buffer","keep-alive","hb","custom","ad_play","ad_pause","ad_end","ad_click"];return{PLAY:0,PAUSE:1,END:2,BUFFER:3,KEEP_ALIVE:4,HEART_BEAT:5,CUSTOM:6,AD_PLAY:7,AD_PAUSE:8,AD_END:9,AD_CLICK:10,toString:function(t){return e[t]}}}(),c=function(){var e=[l.END,l.PLAY,l.PAUSE,l.BUFFER];return{IDLE:0,PLAYING:1,PAUSED:2,BUFFERING:3,toEventType:function(t){return e[t]}}}(),h={ADPLAY:l.AD_PLAY,ADPAUSE:l.AD_PAUSE,ADEND:l.AD_END,ADCLICK:l.AD_CLICK},p={STREAMSENSE_VERSION:"4.1408.29",DEFAULT_PLAYERNAME:"streamsense",DEFAULT_HEARTBEAT_INTERVAL:[{playingtime:6e4,interval:1e4},{playingtime:null,interval:6e4}],DEFAULT_KEEP_ALIVE_INTERVAL:12e5,DEFAULT_PAUSED_ON_BUFFERING_INTERVAL:500,C1_VALUE:"19",C10_VALUE:"js",NS_AP_C12M_VALUE:"1",NS_NC_VALUE:"1",PAGE_NAME_LABEL:"name",LABELS_ORDER:["c1","c2","ns_site","ns_vsite","ns_ap_an","ns_ap_pn","ns_ap_pv","c12","name","ns_ak","ns_ap_ec","ns_ap_ev","ns_ap_device","ns_ap_id","ns_ap_csf","ns_ap_bi","ns_ap_pfm","ns_ap_pfv","ns_ap_ver","ns_ap_sv","ns_type","ns_radio","ns_nc","ns_ap_ui","ns_ap_gs","ns_st_sv","ns_st_pv","ns_st_it","ns_st_id","ns_st_ec","ns_st_sp","ns_st_sq","ns_st_cn","ns_st_ev","ns_st_po","ns_st_cl","ns_st_el","ns_st_pb","ns_st_hc","ns_st_mp","ns_st_mv","ns_st_pn","ns_st_tp","ns_st_pt","ns_st_pa","ns_st_ad","ns_st_li","ns_st_ci","ns_ap_jb","ns_ap_res","ns_ap_c12m","ns_ap_install","ns_ap_updated","ns_ap_lastrun","ns_ap_cs","ns_ap_runs","ns_ap_usage","ns_ap_fg","ns_ap_ft","ns_ap_dft","ns_ap_bt","ns_ap_dbt","ns_ap_dit","ns_ap_as","ns_ap_das","ns_ap_it","ns_ap_uc","ns_ap_aus","ns_ap_daus","ns_ap_us","ns_ap_dus","ns_ap_ut","ns_ap_oc","ns_ap_uxc","ns_ap_uxs","ns_ap_lang","ns_ap_miss","ns_ts","ns_st_ca","ns_st_cp","ns_st_er","ns_st_pe","ns_st_ui","ns_st_bc","ns_st_bt","ns_st_bp","ns_st_pc","ns_st_pp","ns_st_br","ns_st_ub","ns_st_vo","ns_st_ws","ns_st_pl","ns_st_pr","ns_st_ep","ns_st_ty","ns_st_cs","ns_st_ge","ns_st_st","ns_st_dt","ns_st_ct","ns_st_de","ns_st_pu","ns_st_cu","ns_st_fee","c3","c4","c5","c6","c10","c11","c12","c13","c14","c15","c16","c7","c8","c9"]},d=function(){var e=function(){function h(e,t){var n=t[e];n!=null&&(a[e]=n)}var e=this,t=0,n=0,r=0,i=0,s=0,o=0,u,a;f.extend(this,{reset:function(t){t!=null&&t.length>0?f.filterMap(a,t):a={},a.hasOwnProperty("ns_st_cl")||(a.ns_st_cl="0"),a.hasOwnProperty("ns_st_pn")||(a.ns_st_pn="1"),a.hasOwnProperty("ns_st_tp")||(a.ns_st_tp="1"),e.setPauses(0),e.setStarts(0),e.setBufferingTime(0),e.setBufferingTimestamp(-1),e.setPlaybackTime(0),e.setPlaybackTimestamp(-1)},setLabels:function(t,n){t!=null&&f.extend(a,t),e.setRegisters(a,n)},getLabels:function(){return a},setLabel:function(t,n){var r={};r[t]=n,e.setLabels(r,null)},getLabel:function(e){return a[e]},getClipId:function(){return(typeof u=="undefined"||u==null)&&e.setClipId("1"),u},setClipId:function(e){u=e},setRegisters:function(i,o){var u=i.ns_st_cn;u!=null&&(e.setClipId(u),delete i.ns_st_cn),u=i.ns_st_bt,u!=null&&(r=Number(u),delete i.ns_st_bt),h("ns_st_cl",i),h("ns_st_pn",i),h("ns_st_tp",i),h("ns_st_ub",i),h("ns_st_br",i);if(o==c.PLAYING||o==null)u=i.ns_st_sq,u!=null&&(n=Number(u),delete i.ns_st_sq);o!=c.BUFFERING&&(u=i.ns_st_pt,u!=null&&(s=Number(u),delete i.ns_st_pt));if(o==c.PAUSED||o==c.IDLE||o==null)u=i.ns_st_pc,u!=null&&(t=Number(u),delete i.ns_st_pc)},createLabels:function(r,i){var s=i||{};s.ns_st_cn=e.getClipId(),s.ns_st_bt=String(e.getBufferingTime());if(r==l.PLAY||r==null)s.ns_st_sq=String(n);if(r==l.PAUSE||r==l.END||r==l.KEEP_ALIVE||r==l.HEART_BEAT||r==null)s.ns_st_pt=String(e.getPlaybackTime()),s.ns_st_pc=String(t);return f.extend(s,e.getLabels()),s},incrementPauses:function(){t++},incrementStarts:function(){n++},getBufferingTime:function(){var e=r;return i>=0&&(e+=+(new Date)-i),e},setBufferingTime:function(e){r=e},getPlaybackTime:function(){var e=s;return o>=0&&(e+=+(new Date)-o),e},setPlaybackTime:function(e){s=e},getPlaybackTimestamp:function(){return o},setPlaybackTimestamp:function(e){o=e},getBufferingTimestamp:function(){return i},setBufferingTimestamp:function(e){i=e},getPauses:function(){return t},setPauses:function(e){t=e},getStarts:function(){return n},setStarts:function(e){n=e}}),a={},e.reset()};return e}(),v=function(){var e=function(){var e=this,t=null,n,r=0,i=0,s=0,o=0,u=0,a,h=0,p=!1;f.extend(this,{reset:function(t){t!=null&&t.length>0?f.filterMap(a,t):a={},e.setPlaylistId(+(new Date)+"_"+h),e.setBufferingTime(0),e.setPlaybackTime(0),e.setPauses(0),e.setStarts(0),e.setRebufferCount(0),p=!1},setLabels:function(t,n){t!=null&&f.extend(a,t),e.setRegisters(a,n)},getLabels:function(){return a},setLabel:function(t,n){var r={};r[t]=n,e.setLabels(r,null)},getLabel:function(e){return a[e]},getClip:function(){return t},getPlaylistId:function(){return n},setPlaylistId:function(e){n=e},setRegisters:function(e,t){var a=e.ns_st_sp;a!=null&&(r=Number(a),delete e.ns_st_sp),a=e.ns_st_bc,a!=null&&(s=Number(a),delete e.ns_st_bc),a=e.ns_st_bp,a!=null&&(o=Number(a),delete e.ns_st_bp),a=e.ns_st_id,a!=null&&(n=a,delete e.ns_st_id),t!=c.BUFFERING&&(a=e.ns_st_pa,a!=null&&(u=Number(a),delete e.ns_st_pa));if(t==c.PAUSED||t==c.IDLE||t==null)a=e.ns_st_pp,a!=null&&(i=Number(a),delete e.ns_st_pp)},createLabels:function(t,o){var u=o||{};u.ns_st_bp=String(e.getBufferingTime()),u.ns_st_sp=String(r),u.ns_st_id=String(n),s>0&&(u.ns_st_bc=String(s));if(t==l.PAUSE||t==l.END||t==l.KEEP_ALIVE||t==l.HEART_BEAT||t==null)u.ns_st_pa=String(e.getPlaybackTime()),u.ns_st_pp=String(i);if(t==l.PLAY||t==null)e.didFirstPlayOccurred()||(u.ns_st_pb="1",e.setFirstPlayOccurred(!0));return f.extend(u,e.getLabels()),u},incrementStarts:function(){r++},incrementPauses:function(){i++,t.incrementPauses()},setPlaylistCounter:function(e){h=e},incrementPlaylistCounter:function(){h++},addPlaybackTime:function(n){if(t.getPlaybackTimestamp()>=0){var r=n-t.getPlaybackTimestamp();t.setPlaybackTimestamp(-1),t.setPlaybackTime(t.getPlaybackTime()+r),e.setPlaybackTime(e.getPlaybackTime()+r)}},addBufferingTime:function(n){if(t.getBufferingTimestamp()>=0){var r=n-t.getBufferingTimestamp();t.setBufferingTimestamp(-1),t.setBufferingTime(t.getBufferingTime()+r),e.setBufferingTime(e.getBufferingTime()+r)}},getBufferingTime:function(){var e=o;return t.getBufferingTimestamp()>=0&&(e+=+(new Date)-t.getBufferingTimestamp()),e},setBufferingTime:function(e){o=e},getPlaybackTime:function(){var e=u;return t.getPlaybackTimestamp()>=0&&(e+=+(new Date)-t.getPlaybackTimestamp()),e},setPlaybackTime:function(e){u=e},getStarts:function(){return r},setStarts:function(e){r=e},getPauses:function(){return i},setPauses:function(e){i=e},getRebufferCount:function(){return s},incrementRebufferCount:function(){s++},setRebufferCount:function(e){s=e},didFirstPlayOccurred:function(){return p},setFirstPlayOccurred:function(e){p=e}}),t=new d,a={},e.reset()};return e}(),m=function(){var t=function(t,i){function U(e){var t=0;if(A!=null)for(var n=0;n<A.length;n++){var r=A[n],i=r.playingtime;if(!i||e<i){t=r.interval;break}}return t}function z(){$();var e=U(S.getClip().getPlaybackTime());if(e>0){var t=_>0?_:e;L=setTimeout(V,t)}_=0}function W(){$();var e=U(S.getClip().getPlaybackTime());_=e-S.getClip().getPlaybackTime()%e,L!=null&&$()}function X(){_=0,P=0,D=0}function V(){D++;var e=yt(l.HEART_BEAT,null);st(e),_=0,z()}function $(){L!=null&&(clearTimeout(L),L=null)}function J(){Q(),k=setTimeout(K,O)}function K(){var e=yt(l.KEEP_ALIVE,null);st(e),E++,J()}function Q(){k!=null&&(clearTimeout(k),k=null)}function G(){Z(),s.isPauseOnBufferingEnabled()&&lt(c.PAUSED)&&(N=setTimeout(Y,M))}function Y(){if(B==c.PLAYING){S.incrementRebufferCount(),S.incrementPauses();var e=yt(l.PAUSE,null);st(e),E++,B=c.PAUSED}}function Z(){N!=null&&(clearTimeout(N),N=null)}function et(e){return e==c.PLAYING||e==c.PAUSED}function tt(){y&&(clearTimeout(y),y=null)}function nt(e){return e==l.PLAY?c.PLAYING:e==l.PAUSE?c.PAUSED:e==l.BUFFER?c.BUFFERING:e==l.END?c.IDLE:null}function rt(e,t,n){tt();if(n)y=setTimeout(function(e,t){return function(){rt(e,t)}}(e,t),n);else if(pt(e)){var r=vt(),i=m,s=ht(t),o=i>=0?s-i:0;at(vt(),t),ft(e,t),mt(vt()),dt(e);for(var u=0,a=q.length;u<a;u++)q[u](r,e,t,o);it(t),S.setRegisters(t,e),S.getClip().setRegisters(t,e);var l=yt(c.toEventType(e),t);f.extend(l,t),lt(w)&&(st(l),B=w,E++)}}function it(e){var t=e.ns_st_mp;t!=null&&(j=t,delete e.ns_st_mp),t=e.ns_st_mv,t!=null&&(F=t,delete e.ns_st_mv),t=e.ns_st_ec,t!=null&&(E=Number(t),delete e.ns_st_ec)}function st(t,n){n===undefined&&(n=!0),n&&ut(t);var r=s.getPixelURL();if(x){if(!ot()){var i=R.am,o=R.et,u=i.newApplicationMeasurement(x,o.HIDDEN,t,r);x.getQueue().offer(u)}}else r&&e(a(r,t))}function ot(){var e=x.getAppContext(),t=x.getSalt(),n=x.getPixelURL();return e==null||t==null||t.length==0||n==null||n.length==0}function ut(e){I=yt(null),f.extend(I,e)}function at(e,t){var n=ht(t);if(e==c.PLAYING)S.addPlaybackTime(n),W(),Q();else if(e==c.BUFFERING)S.addBufferingTime(n),Z();else if(e==c.IDLE){var r=f.getKeys(S.getClip().getLabels());S.getClip().reset(r)}}function ft(e,t){var n=ht(t),r=ct(t);g=r,e==c.PLAYING?(z(),J(),S.getClip().setPlaybackTimestamp(n),lt(e)&&(S.getClip().incrementStarts(),S.getStarts()<1&&S.setStarts(1))):e==c.PAUSED?lt(e)&&S.incrementPauses():e==c.BUFFERING?(S.getClip().setBufferingTimestamp(n),C&&G()):e==c.IDLE&&X()}function lt(e){return e!=c.PAUSED&&e!=c.IDLE||B!=c.IDLE&&B!=null?e!=c.BUFFERING&&B!=e:!1}function ct(e){var t=-1;return e.hasOwnProperty("ns_st_po")&&(t=f.getInteger(e.ns_st_po)),t}function ht(e){var t=-1;return e.hasOwnProperty("ns_ts")&&(t=Number(e.ns_ts)),t}function pt(e){return e!=null&&vt()!=e}function dt(e){w=e,m=+(new Date)}function vt(){return w}function mt(e){b=e}function gt(){return b}function yt(){var e,t;arguments.length==1?(e=c.toEventType(w),t=arguments[0]):(e=arguments[0],t=arguments[1]);var n={};if(typeof document!="undefined"){var r=document;n.c7=r.URL,n.c8=r.title,n.c9=r.referrer}return t!=null&&f.extend(n,t),n.hasOwnProperty("ns_ts")||(n.ns_ts=String(+(new Date))),e!=null&&!n.hasOwnProperty("ns_st_ev")&&(n.ns_st_ev=l.toString(e)),s.isPersistentLabelsShared()&&x&&f.extend(n,x.getLabels()),f.extend(n,s.getLabels()),bt(e,n),S.createLabels(e,n),S.getClip().createLabels(e,n),n.hasOwnProperty("ns_st_mp")||(n.ns_st_mp=j),n.hasOwnProperty("ns_st_mv")||(n.ns_st_mv=F),n.hasOwnProperty("ns_st_ub")||(n.ns_st_ub="0"),n.hasOwnProperty("ns_st_br")||(n.ns_st_br="0"),n.hasOwnProperty("ns_st_pn")||(n.ns_st_pn="1"),n.hasOwnProperty("ns_st_tp")||(n.ns_st_tp="1"),n.hasOwnProperty("ns_st_it")||(n.ns_st_it="c"),n.ns_st_sv=p.STREAMSENSE_VERSION,n.ns_type="hidden",n}function bt(e,t){var n=t||{};n.ns_st_ec=String(E);if(!n.hasOwnProperty("ns_st_po")){var r=g,i=ht(n);if(e==l.PLAY||e==l.KEEP_ALIVE||e==l.HEART_BEAT||e==null&&w==c.PLAYING)r+=i-S.getClip().getPlaybackTimestamp();n.ns_st_po=f.getInteger(r)}return e==l.HEART_BEAT&&(n.ns_st_hc=String(D)),n}function wt(e){var t=ht(e);t<0&&(e.ns_ts=String(+(new Date)))}function Et(e,t,n){t=t||{},t.ns_st_ad=1,e>=l.AD_PLAY&&e<=l.AD_CLICK&&s.notify(e,t,n)}function St(e,t){s.notify(l.CUSTOM,e,t)}var s=this,o=500,h,d=null,m=0,g=0,y,b,w,E=0,S=null,x,T=!0,N,C=!0,k,L,A=p.DEFAULT_HEARTBEAT_INTERVAL,O=p.DEFAULT_KEEP_ALIVE_INTERVAL,M=p.DEFAULT_PAUSED_ON_BUFFERING_INTERVAL,_=0,D=0,P=0,H=!1,B,j,F,I,q,R={};f.extend(this,{reset:function(e){S.reset(e),S.setPlaylistCounter(0),S.setPlaylistId(+(new Date)+"_1"),S.getClip().reset(e),e!=null&&!e.isEmpty()?f.filterMap(h,e):h={},E=1,D=0,W(),X(),Q(),Z(),tt(),w=c.IDLE,b=null,m=-1,B=null,j=p.DEFAULT_PLAYERNAME,F=p.STREAMSENSE_VERSION,I=null},setPauseOnBufferingInterval:function(e){M=e},getPauseOnBufferingInterval:function(){return M},setKeepAliveInterval:function(e){O=e},getKeepAliveInterval:function(){return O},setHeartbeatIntervals:function(e){A=e},notify:function(){var e,t,n,r;t=arguments[0],arguments.length==3?(n=arguments[1],r=arguments[2]):(n={},r=arguments[1]),e=nt(t);var i=f.extend({},n);wt(i),i.hasOwnProperty("ns_st_po")||(i.ns_st_po=f.getInteger(r).toString());if(t==l.PLAY||t==l.PAUSE||t==l.BUFFER||t==l.END)s.isPausePlaySwitchDelayEnabled()&&et(w)&&et(e)&&(w!=c.PLAYING||e!=c.PAUSED||!!y)?rt(e,i,o):rt(e,i);else{var u=yt(t,i);f.extend(u,i),st(u,!1),E++}},getLabels:function(){return h},getState:function(){return w},setLabels:function(e){e!=null&&(h==null?h=e:f.extend(h,e))},getLabel:function(e){return h[e]},setLabel:function(e,t){t==null?delete h[e]:h[e]=t},setPixelURL:function(e){if(e==null||e.length==0)return null;var t=decodeURIComponent||unescape,n=e.indexOf("?");if(n>=0){if(n<e.length-1){var r=e.substring(n+1).split("&");for(var i=0,o=r.length;i<o;i++){var u=r[i],a=u.split("=");a.length==2?s.setLabel(a[0],t(a[1])):a.length==1&&s.setLabel(p.PAGE_NAME_LABEL,t(a[0]))}e=e.substring(0,n+1)}}else e+="?";return d=e,d},getPixelURL:function(){return d?d:typeof ns_p!="undefined"&&typeof ns_p.src=="string"?d=ns_p.src.replace(/&amp;/,"&").replace(/&ns__t=\d+/,""):typeof ns_pixelUrl=="string"?d=ns_pixelUrl.replace(/&amp;/,"&").replace(/&ns__t=\d+/,""):null},isPersistentLabelsShared:function(){return T},setPersistentLabelsShared:function(e){T=e},isPauseOnBufferingEnabled:function(){return C},setPauseOnBufferingEnabled:function(e){C=e},isPausePlaySwitchDelayEnabled:function(){return H},setPausePlaySwitchDelayEnabled:function(e){H=e},setPausePlaySwitchDelay:function(e){e&&e>0&&(o=e)},getPausePlaySwitchDelay:function(){return o},setClip:function(e,t){var n=!1;return w==c.IDLE&&(S.getClip().reset(),S.getClip().setLabels(e,null),t&&S.incrementStarts(),n=!0),n},setPlaylist:function(e){var t=!1;return w==c.IDLE&&(S.incrementPlaylistCounter(),S.reset(),S.getClip().reset(),S.setLabels(e,null),t=!0),t},importState:function(e){reset();var t=f.extend({},e);S.setRegisters(t,null),S.getClip().setRegisters(t,null),it(t),E++},exportState:function(){return I},getVersion:function(){return p.STREAMSENSE_VERSION},addListener:function(e){q.push(e)},removeListener:function(e){q.splice(f.indexOf(e,q),1)},getClip:function(){return S.getClip()},getPlaylist:function(){return S},setHttpGet:n,setHttpPost:r}),f.extend(this,{adNotify:Et,customNotify:St,viewNotify:function(e,t){e=e||s.getPixelURL(),e&&u(e,t)}}),ns_.comScore&&(R=ns_.comScore.exports,x=R.c()),h={},E=1,w=c.IDLE,S=new v,N=null,C=!0,L=null,D=0,X(),k=null,y=null,H=!1,B=null,g=0,q=[],s.reset(),t&&s.setLabels(t),i&&s.setPixelURL(i)};return function(e){function i(e,n){return t[r]||o(e,n)}function s(){r=-1;for(var e=0;e<=n;e++)if(t.hasOwnProperty(e)){r=e;break}return ns_.StreamSense.activeIndex=r,r}function o(e,r){return e=e||null,r=r||null,e&&typeof e=="object"&&(r=e,e=null),t[++n]=new ns_.StreamSense(r,e),s(),t[n]}function u(){var e=!1,n=r;if(typeof arguments[0]=="number"&&isFinite(arguments[0]))n=arguments[0];else if(arguments[0]instanceof ns_.StreamSense)for(var i in t)if(t[i]===arguments[0]){n=i;break}return t.hasOwnProperty(n)&&(e=t[n],delete t[n],e.reset(),s()),e}function a(e){return e=e||{},i().setPlaylist(e),i().getPlaylist()}function l(e,t,n){return e=e||{},typeof t=="number"&&(e.ns_st_cn=t),i().setClip(e,n),i().getClip()}function c(e,t,n){return typeof e=="undefined"?!1:(n=n||null,t=t||{},i().notify(e,t,n))}function h(e){typeof e!="undefined"&&i().setLabels(e)}function p(){return i().getLabels()}function d(e){typeof e!="undefined"&&i().getPlaylist().setLabels(e)}function v(){return i().getPlaylist().getLabels()}function m(e){typeof e!="undefined"&&i().getClip().setLabels(e)}function g(){return i().getClip().getLabels()}function y(e){return i().reset(e||{})}function b(e){return i().getPlaylist().reset(e||{})}function w(e){return i().getClip().reset(e||{})}function E(e){return e=e||{},i().viewNotify(null,e)}function S(e,t){return arguments.length>2&&(e=arguments[1],t=arguments[2]),e=e||{},typeof t=="number"&&(e.ns_st_po=t),i().customNotify(e,t)}function x(){return i().exportState()}function T(e){i().importState(e)}var t={},n=-1,r=-1;f.extend(e,{activeIndex:r,newInstance:o,"new":o,destroyInstance:u,destroy:u,newPlaylist:a,newClip:l,notify:c,setLabels:h,getLabels:p,setPlaylistLabels:d,getPlaylistLabels:v,setClipLabels:m,getClipLabels:g,resetInstance:y,resetPlaylist:b,resetClip:w,viewEvent:E,customEvent:S,exportState:x,importState:T})}(t),t}();return m.AdEvents=h,m.PlayerEvents=l,ns_.StreamingTag=ns_.StreamingTag||function(){var e=function(){var e=function(e){function a(){if(f.exists(e)&&f.exists(e.customerC2)){var t=e.secure?"https://sb":"http"+(document.location.href.charAt(4)=="s"?"s://sb":"://b");u.setPixelURL(t+".scorecardresearch.com/p?c1=2"),u.setLabel("c2",e.customerC2),u.setLabel("ns_st_it","r")}}function h(e){return f.exists(e)||(e={}),f.exists(e.ns_st_ci)||(e.ns_st_ci="0"),f.exists(e.c3)||(e.c3="*null"),f.exists(e.c4)||(e.c4="*null"),f.exists(e.c6)||(e.c6="*null"),e}function p(e){return r>0&&e>=r?i+=e-r:i=0,i}function d(e){u.getState()!=c.IDLE&&u.getState()!=c.PAUSED?u.notify(l.END,p(e)):u.getState()==c.PAUSED&&u.notify(l.END,i)}function v(e){return g("ns_st_ci",s,e)&&g("c3",s,e)&&g("c4",s,e)&&g("c6",s,e)}function g(e,t,n){if(f.exists(e)&&f.exists(t)&&f.exists(n)){var r=t[e],i=n[e];return f.exists(r)&&f.exists(i)&&r===i}return!1}function y(e,t){d(e),n++,u.setClip({ns_st_cn:n,ns_st_pn:"1",ns_st_ct:"vc",ns_st_tp:"0"}),u.getClip().setLabels(t),s=t,r=e,i=0,u.notify(l.PLAY,i)}var t=this,n=0,r=0,i=0,s=null,o=!1,u=new m;f.extend(this,{playAdvertisement:function(){var e=+(new Date);d(e),n++;var t=h(null);t.ns_st_cn=n,t.ns_st_pn="1",t.ns_st_ct="va",t.ns_st_tp="1",t.ns_st_ad="1",u.setClip(t),i=0,u.notify(l.PLAY,i),r=e,o=!1},playContentPart:function(e){var t=+(new Date);e=h(e),o?v(e)?(u.getClip().setLabels(e),u.getState()!=c.PLAYING&&(r=t,u.notify(l.PLAY,i))):y(t,e):y(t,e),o=!0},stop:function(){var e=+(new Date);u.notify(l.PAUSE,p(e))}}),a()};return function(e){}(e),e}();return e}(),m}();

/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
var s_code='',s_objectID;function s_gi(un,pg,ss){var c="s.version='H.25.4';s.an=s_an;s.logDebug=function(m){var s=this,tcf=new Function('var e;try{console.log(\"'+s.rep(s.rep(s.rep(m,\"\\\\\",\"\\\\"
		+"\\\\\"),\"\\n\",\"\\\\n\"),\"\\\"\",\"\\\\\\\"\")+'\");}catch(e){}');tcf()};s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}retur"
		+"n y};s.fl=function(x,l){return x?(''+x).substring(0,l):x};s.co=function(o){return o};s.num=function(x){x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;ret"
		+"urn 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',f=\"+~!*()'\",i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3){x=encodeURIComponent("
		+"x);for(i=0;i<f.length;i++) {n=f.substring(i,i+1);if(x.indexOf(n)>=0)x=s.rep(x,n,\"%\"+n.charCodeAt(0).toString(16).toUpperCase())}}else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.su"
		+"bstring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=s.rep(escape(''+x),'+"
		+"','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00"
		+"'+x.substring(i);i=x.indexOf('%',i)}}}return x};s.epa=function(x){var s=this,y,tcf;if(x){x=s.rep(''+x,'+',' ');if(s.em==3){tcf=new Function('x','var y,e;try{y=decodeURIComponent(x)}catch(e){y=unesc"
		+"ape(x)}return y');return tcf(x)}else return unescape(x)}return y};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r"
		+";z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a=a.substring(0,c);if(t.substring("
		+"0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf'"
		+",f);return s.fsg};s.mpc=function(m,a){var s=this,c,l,n,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(v&&v=='prerender'){if(!s.mpq){s.mpq=new Array;l=s.sp('webkitvisibilitychange,visi"
		+"bilitychange',',');for(n=0;n<l.length;n++){s.d.addEventListener(l[n],new Function('var s=s_c_il['+s._in+'],c,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(s.mpq&&v==\"visible\"){whil"
		+"e(s.mpq.length>0){c=s.mpq.shift();s[c.m].apply(s,c.a)}s.mpq=0}'),false)}}c=new Object;c.m=m;c.a=a;s.mpq.push(c);return 1}return 0};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\"'+s.oun+'\")"
		+";s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=undefined){if(typeof(v)!='number')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}c+=\"s.lnk=s.eo=s.linkName=s.li"
		+"nkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostnam"
		+"e,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'"
		+".','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<"
		+"0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-6"
		+"0);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':''"
		+");return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i"
		+";l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tc"
		+"f=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s"
		+".wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0"
		+";return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return "
		+"s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)fo"
		+"r(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,r.t,r.u)}};s.flushBufferedRequests=function(){};s.mr=function(sess,q,rs,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackin"
		+"gServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+(un),im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLowerCase()"
		+";else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/'+s.version+(s.t"
		+"cn?'T':'')+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047)}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if(!s.rc[u"
		+"n]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r;retur"
		+"n ''}imn+='_'+s.rc[un];s.rc[un]++}if(s.debugTracking){var d='AppMeasurement Debug: '+rs,dl=s.sp(rs,'&'),dln;for(dln=0;dln<dl.length;dln++)d+=\"\\n\\t\"+s.epa(dl[dln]);s.logDebug(d)}im=s.wd[imn];if("
		+"!im)im=s.wd[imn]=new Image;im.s_l=0;im.onload=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.bcr();s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nr"
		+"s){s.nrs=1;s.m_m('rs')}else s.nrs++;im.src=rs;if(s.useForcedLinkTracking||s.bcf){if(!s.forcedLinkTrackingTimeout)s.forcedLinkTrackingTimeout=250;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'"
		+"].bcr()',s.forcedLinkTrackingTimeout);}else if((s.lnk||s.eo)&&(!ta||ta=='_self'||ta=='_top'||(s.wd.name&&ta==s.wd.name))){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<500)e=new Date}return '"
		+"'}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){if(t.substring(0,2)=="
		+"'s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,p,l=0,q,a,b='',c='',t;if(x&&x.length>255){y=''+x"
		+";i=y.indexOf('?');if(i>0){q=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCase();j=0;if(h.substring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='https://')j+=8;i=h.indexOf(\"/\",j);if(i>0){h=h."
		+"substring(j,i);p=y.substring(i);y=y.substring(0,i);if(h.indexOf('google')>=0)l=',q,ie,start,search_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l=',p,ei,';if(l&&q){a=s.sp(q,'&');if(a&&a.length"
		+">1){for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'+c;else c=''}i=253-(q.length-c.length)-y.lengt"
		+"h;x=y+(i>0?p.substring(0,i):'')+'?'+q}}}}return x};s.s2q=function(k,v,vf,vfp,f){var s=this,qs='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\"contextData\")k=\"c\";if(v){for(sk in v)if((!f||sk.subst"
		+"ring(0,f.length)==f)&&v[sk]&&(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+',')>=0)&&(!Object||!Object.prototype||!Object.prototype[sk])){nfm=0;if(nfl)for(nfn=0;nfn<nfl.length;nfn++)if(sk.substring(0,nf"
		+"l[nfn].length)==nfl[nfn])nfm=1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk];if(f)sk=sk.substring(f.length);if(sk.length>0){nke=sk.indexOf('.');if(nke>0){nk=sk.substring(0,nke);nf=(f?f:'')+nk+'.';if(!n"
		+"fl)nfl=new Array;nfl[nfl.length]=nf;qs+=s.s2q(nk,v,vf,vfp,nf)}else{if(typeof(sv)=='boolean'){if(sv)sv='true';else sv='false'}if(sv){if(vfp=='retrieveLightData'&&f.indexOf('.contextData.')<0){sp=sk."
		+"substring(0,4);ss=sk.substring(4);if(sk=='transactionID')sk='xact';else if(sk=='channel')sk='ch';else if(sk=='campaign')sk='v0';else if(s.num(ss)){if(sp=='prop')sk='c'+ss;else if(sp=='eVar')sk='v'+"
		+"ss;else if(sp=='list')sk='l'+ss;else if(sp=='hier'){sk='h'+ss;sv=sv.substring(0,255)}}}qs+='&'+s.ape(sk)+'='+s.ape(sv)}}}}}if(qs!='')qs+='&.'+k}return qs};s.hav=function(){var s=this,qs='',l,fv='',"
		+"fe='',mn,i,e;if(s.lightProfileID){l=s.va_m;fv=s.lightTrackVars;if(fv)fv=','+fv+','+s.vl_mr+','}else{l=s.va_t;if(s.pe||s.linkType){fv=s.linkTrackVars;fe=s.linkTrackEvents;if(s.pe){mn=s.pe.substring("
		+"0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].trackEvents}}}if(fv)fv=','+fv+','+s.vl_l+','+s.vl_l2;if(fe){fe=','+fe+',';if(fv)fv+=',events,'}if (s.linkTrackEvents2)e=(e?',':'')+"
		+"s.linkTrackEvents2}for(i=0;i<l.length;i++){var k=l[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(!v)if(k=='events'&&e){v=e;e=''}if(v&&(!fv||fv.indexOf(','+k+',')>=0)&&k!='linkName'&&k!="
		+"'linkType'){if(k=='timestamp')q='ts';else if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pageURL'){q='g';if(v.length>255){s.pageURLRest=v.substring(255);v=v.substrin"
		+"g(0,255);}}else if(k=='pageURLRest')q='-g';else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServer'){q='vmf';if(s.ssl&"
		+"&s.visitorMigrationServerSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()=='AUTO')v='ISO8859-1"
		+"';else if(s.em==2||s.em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvider')q='vvp';else if(k"
		+"=='currencyCode')q='cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='c';else if(k=='javascri"
		+"ptVersion')q='j';else if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType')q='ct';else if(k=='h"
		+"omepage')q='hp';else if(k=='plugins')q='p';else if(k=='events'){if(e)v+=(v?',':'')+e;if(fe)v=s.fs(v,fe)}else if(k=='events2')v='';else if(k=='contextData'){qs+=s.s2q('c',s[k],fv,k,0);v=''}else if(k"
		+"=='lightProfileID')q='mtp';else if(k=='lightStoreForSeconds'){q='mtss';if(!s.lightProfileID)v=''}else if(k=='lightIncrementBy'){q='mti';if(!s.lightProfileID)v=''}else if(k=='retrieveLightProfiles')"
		+"q='mtsr';else if(k=='deleteLightProfiles')q='mtsd';else if(k=='retrieveLightData'){if(s.retrieveLightProfiles)qs+=s.s2q('mts',s[k],fv,k,0);v=''}else if(s.num(x)){if(b=='prop')q='c'+n;else if(b=='eV"
		+"ar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+s.ape(q)+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}return qs};s.ltdf=function(t,h){t=t?t.toLowerCase():'"
		+"';h=h?h.toLowerCase():'';var qi=h.indexOf('?');h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLow"
		+"erCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.wd.location.hostname;h"
		+"=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.indexOf('#')!=0&&h.indexOf('about:')!=0&&h.indexOf('javascript:')!=0&&(lef||lif)&&(!lef||"
		+"s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=this;s.t();s.lnk=0;if(b)return this[b](e"
		+");return true');s.bcr=function(){var s=this;if(s.bct&&s.bce)s.bct.dispatchEvent(s.bce);if(s.bcf){if(typeof(s.bcf)=='function')s.bcf();else if(s.bct&&s.bct.href)s.d.location=s.bct.href}s.bct=s.bce=s"
		+".bcf=0};s.bc=new Function('e','if(e&&e.s_fe)return;var s=s_c_il['+s._in+'],f,tcf,t,n,nrs,a,h;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;if(!s.bbc)s.useForcedLinkTracking=0;else if(!s.useForcedLinkTr"
		+"acking){s.b.removeEventListener(\"click\",s.bc,true);s.bbc=s.useForcedLinkTracking=0;return}else s.b.removeEventListener(\"click\",s.bc,false);s.eo=e.srcElement?e.srcElement:e.target;nrs=s.nrs;s.t("
		+");s.eo=0;if(s.nrs>nrs&&s.useForcedLinkTracking&&e.target){a=e.target;while(a&&a!=s.b&&a.tagName.toUpperCase()!=\"A\"&&a.tagName.toUpperCase()!=\"AREA\")a=a.parentNode;if(a){h=a.href;if(h.indexOf(\""
		+"#\")==0||h.indexOf(\"about:\")==0||h.indexOf(\"javascript:\")==0)h=0;t=a.target;if(e.target.dispatchEvent&&h&&(!t||t==\"_self\"||t==\"_top\"||(s.wd.name&&t==s.wd.name))){e.stopPropagation();e.stopI"
		+"mmediatePropagation();e.preventDefault();n=s.d.createEvent(\"MouseEvents\");n.initMouseEvent(\"click\",e.bubbles,e.cancelable,e.view,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.alt"
		+"Key,e.shiftKey,e.metaKey,e.button,e.relatedTarget);n.s_fe=1;s.bct=e.target;s.bce=n}}}');s.oh=function(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h."
		+"indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.ho"
		+"st:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o){var t=o.tagName;if(o.tagUrn||(o.scopeName&&o.scopeName.toUpperCase()!='HTML'))return '';t=t&&t.to"
		+"UpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=thi"
		+"s,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''"
		+"+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o.value;else if(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t"
		+"=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u"
		+"+',').indexOf(','+un+',')>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return ''};s.rq=function(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)re"
		+"turn s.pt(v,'&','rqf',un);return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return "
		+"0};s.sqs=function(un,q){var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',"
		+"q);v='';for(x in s.squ)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&"
		+"s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i"
		+"<s.d.links.length;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=f"
		+"unction(){var s=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&&s.b.addEventListener){if(s.n&&s.n.userAgent.indexOf('WebKit')>=0"
		+"&&s.d.createEvent){s.bbc=1;s.useForcedLinkTracking=1;s.b.addEventListener('click',s.bc,true)}s.b.addEventListener('click',s.bc,false)}else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var s=this,"
		+"v=s.visitorSampling,g=s.visitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%"
		+"10000>v)return 0}return 1};s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.subst"
		+"ring(i+1);if(s.pt(x,',','dyasmf',m))return n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if"
		+"(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=function(un){v"
		+"ar s=this;if(s.un&&s.mpc('sa',arguments))return;s.un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r"
		+",l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s"
		+";m._n=n;m._l=new Array('_c','_in','_il','_i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l="
		+"m._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c="
		+"s[g+\"_c\"],m,x,f=0;if(s.mpc(\"m_a\",arguments))return;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if("
		+"x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if((\"\"+x).indexOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,"
		+"i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s.m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m"
		+"[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl"
		+",i,o;if(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.loadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':'"
		+");if(i>=0){g=n.substring(i+1);n=n.substring(0,i)}else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');"
		+"i='s_s:'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._in+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'"
		+"')+')}';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250;if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s"
		+".d.createElement(\"script\");if(o){o.type=\"text/javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,"
		+"100)':'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m"
		+"=s.m_i(n);m._e=1}return m};s.voa=function(vo,r){var s=this,l=s.va_g,i,k,v,x;for(i=0;i<l.length;i++){k=l[i];v=vo[k];if(v||vo['!'+k]){if(!r&&(k==\"contextData\"||k==\"retrieveLightData\")&&s[k])for(x"
		+" in s[k])if(!v[x])v[x]=s[k][x];s[k]=v}}};s.vob=function(vo){var s=this,l=s.va_g,i,k;for(i=0;i<l.length;i++){k=l[i];vo[k]=s[k];if(!vo[k])vo['!'+k]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=n"
		+"ew Date,i,vo,f=0;if(s.dll)for(i=0;i<s.dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if("
		+"!s.dli)s.dli=setTimeout(s.dlt,s.maxDelay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.vob(vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if"
		+"(!s.maxDelay)s.maxDelay=250;s.dlt()};s.gfid=function(){var s=this,d='0123456789ABCDEF',k='s_fid',fid=s.c_r(k),h='',l='',i,j,m=8,n=4,e=new Date,y;if(!fid||fid.indexOf('-')<0){for(i=0;i<16;i++){j=Mat"
		+"h.floor(Math.random()*m);h+=d.substring(j,j+1);j=Math.floor(Math.random()*n);l+=d.substring(j,j+1);m=n=16}fid=h+'-'+l;}y=e.getYear();e.setYear(y+2+(y<1900?1900:0));if(!s.c_w(k,fid,e))fid=0;return f"
		+"id};s.applyADMS=function(){var s=this,vb=new Object;if(s.wd.ADMS&&!s.visitorID&&!s.admsc){if(!s.adms)s.adms=ADMS.getDefault();if(!s.admsq){s.visitorID=s.adms.getVisitorID(new Function('v','var s=s_"
		+"c_il['+s._in+'],l=s.admsq,i;if(v==-1)v=0;if(v)s.visitorID=v;s.admsq=0;if(l){s.admsc=1;for(i=0;i<l.length;i++)s.t(l[i]);s.admsc=0;}'));if(!s.visitorID)s.admsq=new Array}if(s.admsq){s.vob(vb);vb['!vi"
		+"sitorID']=0;s.admsq.push(vb);return 1}else{if(s.visitorID==-1)s.visitorID=0}}return 0};s.track=s.t=function(vo){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*100000000"
		+"00000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds("
		+")+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='',code='',vb=new Object;if(s.mpc('t',arguments))return;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i"
		+",x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&"
		+"s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf=new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next){j='1"
		+".7';if(a.reduce){j='1.8';if(j.trim){j='1.8.1';if(Date.parse){j='1.8.2';if(Object.create)j='1.8.5'}}}}}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaE"
		+"nabled()?'Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){"
		+"bw=s.d.documentElement.offsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\""
		+":\"N\"}catch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)whi"
		+"le(pn<s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.bro"
		+"wserHeight=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.vob(vb);s.voa(vo)}s.fid=s.gfid();if(s.applyADMS())return '';if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);i"
		+"f(!s.abort){var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s."
		+"eo:s.lnk,p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(o){t=s.ot(o);n=s.oid(o);x=o.s_oidt}}if"
		+"(!n||t=='BODY')o='';if(o){oc=o.onclick?''+o.onclick:'';if((oc.indexOf('s_gs(')>=0&&oc.indexOf('.s_oc(')<0)||oc.indexOf('.tl(')>=0)o=0}}if(o){if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeav"
		+"eQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l)){s.pe='lnk_'+(t=='d'||t=='e'?t:'o');s.pev1=(h?s.ape(h):'');s.pev2=(l?s.ape(l):'')}else t"
		+"rk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex;if(o.dataset&&o.dataset.sObjectId){s.wd.s_objectID=o.dataset.sObjectId;}else if(o.getAttribute&&o.getAttribute('data-s-o"
		+"bject-id')){s.wd.s_objectID=o.getAttribute('data-s-object-id');}else if(s.useForcedLinkTracking){s.wd.s_objectID='';oc=o.onclick?''+o.onclick:'';if(oc){var ocb=oc.indexOf('s_objectID'),oce,ocq,ocx;"
		+"if(ocb>=0){ocb+=10;while(ocb<oc.length&&(\"= \\t\\r\\n\").indexOf(oc.charAt(ocb))>=0)ocb++;if(ocb<oc.length){oce=ocb;ocq=ocx=0;while(oce<oc.length&&(oc.charAt(oce)!=';'||ocq)){if(ocq){if(oc.charAt("
		+"oce)==ocq&&!ocx)ocq=0;else if(oc.charAt(oce)==\"\\\\\")ocx=!ocx;else ocx=0;}else{ocq=oc.charAt(oce);if(ocq!='\"'&&ocq!=\"'\")ocq=0}oce++;}oc=oc.substring(ocb,oce);if(oc){o.s_soid=new Function('s','"
		+"var e;try{s.wd.s_objectID='+oc+'}catch(e){}');o.s_soid(s)}}}}}if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+("
		+"x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}else trk=0}if(trk||qs){s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,ta);qs='';s.m_m('"
		+"t');if(s.p_r)s.p_r();s.referrer=s.lightProfileID=s.retrieveLightProfiles=s.deleteLightProfiles=''}s.sq(qs)}}}else s.dl(vo);if(vo)s.voa(vb,1);s.abort=0;s.pageURLRest=s.lnk=s.eo=s.linkName=s.linkType"
		+"=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';return code};s.trackLink=s.tl=function(o,t,n,vo,f){var s=this;s.lnk=o;s.linkType="
		+"t;s.linkName=n;if(f){s.bct=o;s.bcf=f}s.t(vo)};s.trackLight=function(p,ss,i,vo){var s=this;s.lightProfileID=p;s.lightStoreForSeconds=ss;s.lightIncrementBy=i;s.t(vo)};s.setTagContainer=function(n){va"
		+"r s=this,l=s.wd.s_c_il,i,t,x,y;s.tcn=n;if(l)for(i=0;i<l.length;i++){t=l[i];if(t&&t._c=='s_l'&&t.tagContainerName==n){s.voa(t);if(t.lmq)for(i=0;i<t.lmq.length;i++){x=t.lmq[i];y='m_'+x.n;if(!s[y]&&!s"
		+"[y+'_c']){s[y]=t[y];s[y+'_c']=t[y+'_c']}s.loadModule(x.n,x.u,x.d)}if(t.ml)for(x in t.ml)if(s[x]){y=s[x];x=t.ml[x];for(i in x)if(!Object.prototype[i]){if(typeof(x[i])!='function'||(''+x[i]).indexOf("
		+"'s_c_il')<0)y[i]=x[i]}}if(t.mmq)for(i=0;i<t.mmq.length;i++){x=t.mmq[i];if(s[x.m]){y=s[x.m];if(y[x.f]&&typeof(y[x.f])=='function'){if(x.a)y[x.f].apply(y,x.a);else y[x.f].apply(y)}}}if(t.tq)for(i=0;i"
		+"<t.tq.length;i++)s.t(t.tq[i]);t.s=s;return}}};s.wd=window;s.ssl=(s.wd.location.protocol.toLowerCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElements"
		+"ByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf"
		+"('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6"
		+"));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.e"
		+"m=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}if(s.oun)s.sa(s.oun);s.sa(un);s.vl_l='timestamp,dynamicVariablePrefix,visito"
		+"rID,fid,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,ppu,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,contextData,currencyCod"
		+"e,lightProfileID,lightStoreForSeconds,lightIncrementBy,retrieveLightProfiles,deleteLightProfiles,retrieveLightData';s.va_l=s.sp(s.vl_l,',');s.vl_mr=s.vl_m='timestamp,charSet,visitorNamespace,cookie"
		+"DomainPeriods,cookieLifetime,contextData,lightProfileID,lightStoreForSeconds,lightIncrementBy';s.vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,e"
		+"vents,events2,products,linkName,linkType';var n;for(n=1;n<=75;n++){s.vl_t+=',prop'+n+',eVar'+n;s.vl_m+=',prop'+n+',eVar'+n}for(n=1;n<=5;n++)s.vl_t+=',hier'+n;for(n=1;n<=3;n++)s.vl_t+=',list'+n;s.va"
		+"_m=s.sp(s.vl_m,',');s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,pageURLRest,plugins';s.vl_t"
		+"+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackingServerSecure,trackingServerBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dy"
		+"namicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilter"
		+"s,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,lightTrackVars,_1_referrer,un';s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);s.contextData=new Object;s.retrieveLightData=new Object;if(!ss)s.wds();i"
		+"f(pg){s.wd.s_co=function(o){return o};s.wd.s_gs=function(un){s_gi(un,1,1).t()};s.wd.s_dc=function(un){s_gi(un,1).t()}}",
	w=window,l=w.s_c_il,n=navigator,u=n.userAgent,v=n.appVersion,e=v.indexOf('MSIE '),m=u.indexOf('Netscape6/'),a,i,j,x,s;if(un){un=un.toLowerCase();if(l)for(j=0;j<2;j++)for(i=0;i<l.length;i++){s=l[i];x=s._c;if((!x||x=='s_c'||(j>0&&x=='s_l'))&&(s.oun==un||(s.fs&&s.sa&&s.fs(s.oun,un)))){if(s.sa)s.sa(un);if(x=='s_c')return s}else s=0}}w.s_an='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

	w.s_sp=new Function("x","d","var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst"
		+"ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
	w.s_jn=new Function("a","d","var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
	w.s_rep=new Function("x","o","n","return s_jn(s_sp(x,o),n)");
	w.s_d=new Function("x","var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d"
		+"=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn("
		+"x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
	w.s_fe=new Function("c","return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
	w.s_fa=new Function("f","var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':"
		+"a");
	w.s_ft=new Function("c","c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i"
		+"f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")"
		+"'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
	c=s_d(c);if(e>0){a=parseInt(i=v.substring(e+5));if(a>3)a=parseFloat(i)}else if(m>0)a=parseFloat(u.substring(m+10));else a=parseFloat(v);if(a<5||v.indexOf('Opera')>=0||u.indexOf('Opera')>=0)c=s_ft(c);if(!s){s=new Object;if(!w.s_c_in){w.s_c_il=new Array;w.s_c_in=0}s._il=w.s_c_il;s._in=w.s_c_in;s._il[s._in]=s;w.s_c_in++;}s._c='s_c';(new Function("s","un","pg","ss",c))(s,un,pg,ss);return s}
function s_giqf(){var w=window,q=w.s_giq,i,t,s;if(q)for(i=0;i<q.length;i++){t=q[i];s=s_gi(t.oun);s.sa(t.un);s.setTagContainer(t.tagContainerName)}w.s_giq=0}s_giqf()
var svid;
var htmlEvents = {
		onload: 1,
		onunload: 1,
		onblur: 1,
		onchange: 1,
		onfocus: 1,
		onreset: 1,
		onselect: 1,
		onsubmit: 1,
		onabort: 1,
		onkeydown: 1,
		onkeypress: 1,
		onkeyup: 1,
		onclick: 1,
		ondblclick: 1,
		onmousedown: 1,
		onmousemove: 1,
		onmouseout: 1,

		onmouseover: 1,
		onmouseup: 1
	},
	TouchCastPlayerSDKEvent = {
		addEvent: function(e, t, a) {
			e.addEventListener ? e.addEventListener(t, a, !1) : e.attachEvent && htmlEvents["on" + t] ? e.attachEvent("on" + t, a) : e["on" + t] = a
		},
		removeEvent: function(e, t, a) {
			e.detachEvent ? (e.detachEvent("on" + t, e[t + a]), e[t + a] = null) : e.removeEventListener(t, a, !1)
		}
	};
! function() {
	function e() {
		void 0 === window.jQuery ? (TouchCastPlayerSDK.jQuery = window.jQuery.noConflict(!0), TouchCastPlayerSDK.init()) : (TouchCastPlayerSDK.jQuery = window.jQuery, TouchCastPlayerSDK.init())
	}
	var t = function(e, t) {
		if (2 != arguments.length) throw new Error("TouchCastInterface constructor called with " + arguments.length + "arguments, but expected exactly 2.");
		this.name = e, this.methods = [];
		for (var a = 0, o = t.length; o > a; a++) {
			if ("string" != typeof t[a]) throw new Error("TouchCastInterface constructor expects method names to be passed in as a string.");
			this.methods.push(t[a])
		}
	};
	t.ensureImplements = function(e) {
		if (arguments.length < 2) throw new Error("TouchCastInterface.ensureImplements was called with " + arguments.length + "arguments, but expected at least 2.");
		for (var t = 1, a = arguments.length; a > t; t++)
			for (var o = arguments[t], n = 0, r = o.methods.length; r > n; n++) {
				var s = o.methods[n];
				if (!e[s] || "function" != typeof e[s]) throw new Error("Developer Class does not implement the '" + o.name + "' TouchCastInterface correctly. The method '" + s + "' was not found.")
			}
	}, TouchCastPlayerSDK = {
		defaults: {
			touchcastID: "",
			autoplay: 1,
			assetsPath: "v4/images/",
			autoforward: 1,
			partner: 0,
			hideinfobar: 0,
			single: 0,
			aspectratio: 1,
			bottomtimeline: 0,
			threedpip: 0,
			track: 0,
			uimode: "default",
			videos_json: "",
			pipposition: "bottom-right",
			pipscale: "0.25"
		},
		_ready: 0,
		_initiated: 0,
		version: 4,
		trackerUrl: "//d243svzaicrrqq.cloudfront.net/pa/player-tracker.js",
		blackListUrl: "//d243svzaicrrqq.cloudfront.net/blacklisturlsjs/production/blacklist.js",
		domain: "//www.touchcast.com",
		cloudfront: "//d243svzaicrrqq.cloudfront.net/sdk/1/v4",
		getIEVersion: function() {
			var e = navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);
			return e ? parseInt(e[1]) : void 0
		},
		init: function() {
			1 != TouchCastPlayerSDK._initiated && 8 != TouchCastPlayerSDK.getIEVersion() && 9 != TouchCastPlayerSDK.getIEVersion() && (console.log("start initializing"), TouchCastPlayerSDK.initTracking(), TouchCastPlayerSDK.initBlacklist(), TouchCastPlayerSDK._readyInterval = window.setInterval(TouchCastPlayerSDK.touchcastReady, 1))
		},
		initTracking: function() {
			console.log("tracker initializing");
			var e = document.createElement("script");
			e.setAttribute("type", "text/javascript"), e.setAttribute("src", TouchCastPlayerSDK.trackerUrl), (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(e)
		},
		initBlacklist: function() {
			console.log("blacklist initializing");
			var e = document.createElement("script");
			e.setAttribute("type", "text/javascript"), e.setAttribute("src", TouchCastPlayerSDK.blackListUrl), (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(e)
		},
		html5Playable: function() {
			return TouchCastPlayerSDK.elem.touchcast("html5Playable")
		},
		getFlashFallback: function(e) {
			return TouchCastPlayerSDK.domain + "/sdk/v" + TouchCastPlayerSDK.version + "/swf/TouchCastPlayerFlashFallback.swf?videoURL=" + e + "&autoplay=0"
		},
		touchcastReady: function() {
			if (TouchCastPlayerSDK.jQuery && "undefined" != TouchCastPlayerSDK.jQuery.fn.touchcast && TouchCastPlayerSDK.jQuery.isReady) {
				window.clearInterval(TouchCastPlayerSDK._readyInterval);
				var e = new CustomEvent("TouchCast_sdkReady", {
					detail: "TouchCastPlayer can be initiated now"
				});
				document.dispatchEvent(e), TouchCastPlayerSDK._ready = 1
			}
		},
		createInteractivePlayer: function(e, a, o) {
			if (console.log("start initializing interactiveness"), TouchCastPlayerSDK.defaults = TouchCastPlayerSDK.jQuery.extend({}, TouchCastPlayerSDK.defaults, a), "custom" == TouchCastPlayerSDK.defaults.uimode) {
				var n = new t("interface", ["getVideoAreaWidth", "getVideoAreaHeight", "getVideoAreaX", "getVideoAreaY", "pauseVideoFromInteractiveLayer", "resumeVideoFromInteractiveLayer", "changeVideoToPIPMode"]);
				t.ensureImplements(o, n)
			}
			console.log("initialized interactiveness"), TouchCastPlayerSDK._initiated = 1;
			var r = TouchCastPlayerSDK.jQuery("." + e);
			if (r.length < 1) var r = TouchCastPlayerSDK.jQuery("#" + e);
			if (TouchCastPlayerSDK.elem = r, console.log("inited library"), TouchCastPlayerSDK.getIEVersion() <= 9) {
				var s = document.createElement("script");
				s.setAttribute("type", "text/javascript"), s.setAttribute("src", TouchCastPlayerSDK.cloudfront + "/js/excanvas.compiled.js"), (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(s)
			}
			TouchCastPlayerSDK.elem.touchcast({
				userID: TouchCastPlayerSDK.defaults.userID,
				autoplay: TouchCastPlayerSDK.defaults.autoplay,
				autoforward: TouchCastPlayerSDK.defaults.autoforward,
				single: TouchCastPlayerSDK.defaults.single,
				partner: TouchCastPlayerSDK.defaults.partner,
				hideinfobar: TouchCastPlayerSDK.defaults.hideinfobar,
				aspectratio: TouchCastPlayerSDK.defaults.aspectratio,
				bottomtimeline: TouchCastPlayerSDK.defaults.bottomtimeline,
				threedpip: TouchCastPlayerSDK.defaults.threedpip,
				uimode: TouchCastPlayerSDK.defaults.uimode,
				customplayer: o,
				pipposition: TouchCastPlayerSDK.defaults.pipposition,
				pipscale: TouchCastPlayerSDK.defaults.pipscale
			})
		},
		loadVideos: function(e) {
			TouchCastPlayerSDK.elem.touchcast("loadTouchCastInfo", e)
		},
		loadVideosByJson: function(e) {
			TouchCastPlayerSDK.elem.touchcast("loadVideosByJson", e)
		},
		loadInsideTCInfo: function(e) {
			TouchCastPlayerSDK.elem.touchcast("loadInsideTCInfo", e)
		},
		checkIfInitialized: function() {
			return 1 == TouchCastPlayerSDK._ready ? !0 : !1
		},
		handleClicks: function(e, t, a) {
			TouchCastPlayerSDK.elem.touchcast("handleClicks", e, t, a)
		},
		videoPause: function() {},
		videoPlay: function() {},
		videoStart: function(e, t) {
			console.log("called videoStart with params TCID - " + e + " userID- " + t), TouchCastPlayerSDK.elem.touchcast("videoStart", e, t)
		},
		videoPlayTimeUpdate: function(e) {
			console.log("called videoPlayTimeUpdate with params curtime - " + e), TouchCastPlayerSDK.elem.touchcast("videoPlayTimeUpdate", e)
		},
		videoEnded: function() {
			var e = new CustomEvent("TouchCast_videoEnded", {
				detail: "TouchCastPlayer Video has ended"
			});
			document.dispatchEvent(e)
		},
		launchFullScreen: function(e) {
			TouchCastPlayerSDK.elem.touchcast("launchFullScreen", e)
		},
		exitFullScreen: function(e) {
			TouchCastPlayerSDK.elem.touchcast("exitFullScreen", e)
		},
		exitPIP: function() {
			TouchCastPlayerSDK.elem.touchcast("exitPIP")
		},
		pipMode: function(e, t, a) {
			TouchCastPlayerSDK.elem.touchcast("pipMode", e, t, a)
		},
		loadFiles: function(){
			var a = document.createElement("script");
			a.setAttribute("type", "text/javascript"), a.setAttribute("src", TouchCastPlayerSDK.cloudfront + "/js/all.min.js");
			var o = document.createElement("link");
			o.setAttribute("rel", "stylesheet"), o.setAttribute("type", "text/css"), o.setAttribute("href", TouchCastPlayerSDK.cloudfront + "/css/all.min.css"), (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(o), a.readyState ? a.onreadystatechange = function() {
				("complete" == this.readyState || "loaded" == this.readyState) && e()
			} : a.onload = e, (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(a)
		}
	};
	/*
	 var a = document.createElement("script");
	 a.setAttribute("type", "text/javascript"), a.setAttribute("src", TouchCastPlayerSDK.cloudfront + "/js/all.min.js");
	 var o = document.createElement("link");
	 o.setAttribute("rel", "stylesheet"), o.setAttribute("type", "text/css"), o.setAttribute("href", TouchCastPlayerSDK.cloudfront + "/css/all.min.css"), (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(o), a.readyState ? a.onreadystatechange = function() {
	 ("complete" == this.readyState || "loaded" == this.readyState) && e()
	 } : a.onload = e, (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(a)
	 */
}();

// MOAT //
function initMoatTracking(a,g,e){if(!1===g.hasOwnProperty("partnerCode"))return!1;var k=window.location.protocol,n="https:"===k?"z":"js",l=document.createElement("script");e=e||a&&("undefined"!==typeof a.O?a.O.parentNode:document.body)||document.body;var f=[],c={adsManager:a,ids:g,imaSDK:!0,events:[]},p={complete:"AdVideoComplete",firstquartile:"AdVideoFirstQuartile",impression:"AdImpression",loaded:"AdLoaded",midpoint:"AdVideoMidpoint",pause:"AdPaused",skip:"AdSkipped",start:"AdVideoStart",thirdquartile:"AdVideoThirdQuartile",
	volumeChange:"AdVolumeChange"};if(google&&google.ima&&a){var d="_moatApi"+Math.floor(1E8*Math.random()),h;for(h in google.ima.AdEvent.Type){var m=function(b){if(c.sendEvent){for(b=f.length-1;0<=b;b--)a.removeEventListener(f[b].type,f[b].func);c.sendEvent(c.events)}else c.events.push({type:p[b.type]||b.type,adVolume:a.getVolume()})};a.addEventListener(google.ima.AdEvent.Type[h],m);f.push({type:google.ima.AdEvent.Type[h],func:m})}}d="undefined"!==typeof d?d:"";window[d]=c;e&&e.appendChild(l);l.src=
	k+"//"+n+".moatads.com/"+g.partnerCode+"/moatvideo.js#"+d};

/*! vidora-client 1.2.5 08-18-2015 */
!function(a,b,c){function d(a){Qb.console&&console.log&&console.log(a)}function e(a){Qb.console&&console.error&&console.error(a)}function f(a){throw new Error(a)}function g(a,b){return a.forEach(b)}function h(a,b){for(var c in a)b(c)}function i(a,b){return a.map(b)}function j(a){return String(a)}function k(a){return"undefined"==typeof a}function l(a){return null===a}function m(a){return k(a)||l(a)}function n(a){return"string"==typeof a}function o(a){return!l(a)&&"object"==typeof a}function p(a){return!m(a)&&a.constructor===Array}function q(a){return"function"==typeof a}function r(a,b){return m(a)?b:a}function s(a,b){var c=r(a,{}),d=r(b,{});for(var e in d)c[e]=d[e];return c}function t(a){var b=r(a,{});return o(b)||f("Options should be an object."),b}function u(a){return JSON.parse(a)}function v(a){return JSON.stringify(a)}function w(a){var b=encodeURIComponent(a),c=b.replace(/!/g,"%21").replace(/\*/g,"%2A").replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29");return c}function x(a,b){return b>a?-1:a>b?1:0}function y(a){var b=[];for(var c in a){var d=a[c],e=k(d)?[c]:[c,d];b.push(e)}b.sort(function(a,b){return x(a,b)});var f=i(b,function(a){return i(a,w).join("=")}),g=f.join("&");return g}function z(){var a=new Date;return a.getTime()}function A(a,b){return a.indexOf(b)>=0}function B(){var a=Sb.userAgent;return A(a,"MSIE ")||A(a,"Trident/")||A(a,"Edge/")}function C(a){var b=new Uint16Array(a);crypto.getRandomValues(b);for(var c=[],d=0;d<b.length;d++)c.push(b[d]);return c}function D(){return Math.random()}function E(){return Math.floor(65536*D())}function F(a){for(var b=[],c=0;Tb>c&&a>c;c++)b.push(65535&(E()^z()));for(;a>c;c++)b.push(E());return b}function G(){var a=i(Vb(10),function(a){var b=(a>>1).toString(32);return Wb.slice(b.length)+b});return a.join("")}function H(a){var b="string"==typeof a.setItem;return!m(a)&&!b}function I(a,b,c){a.setItem(b,v(c))}function J(a,b){var c=a.getItem(b);return m(c)?null:u(c)}function K(a,b){a.removeItem(b)}function L(a,b){for(var c=0;c<a.length;c++){var d=a.key(c);b(d)}}function M(){return H(Xb)}function N(a,b){I(Xb,a,b)}function O(a){return J(Xb,a)}function P(a){K(Xb,a)}function Q(a){L(Xb,a)}function R(a,b,c,d){var e=[];if(e.push(a+"="+encodeURIComponent(b)),c){var f=new Date;f.setTime(f.getTime()+1e3*c);var g="expires="+f.toUTCString();e.push(g)}e.push("path=/"),d&&e.push("domain="+d);var h=e.join("; ");Rb.cookie=h}function S(a){for(var b=Rb.cookie.split("; "),c=0;c<b.length;c++){var d=b[c],e=d.indexOf("=");if(-1!==e){var f=d.slice(0,e);if(f===a){var g=d.slice(e+1);return decodeURIComponent(g)}}}return null}function T(){return z()+":"+D()}function U(a){return a+cc}function V(a){return 0===a.indexOf(bc)&&-1!==a.indexOf(cc)}function W(a){return 0===a.indexOf(bc)&&-1===a.indexOf(cc)}function X(a){var b=U(a),c=0,d=setInterval(function(){c+=1,N(b,c)},_b);return d}function Y(a){return O(a)}function Z(a){P(a),setTimeout(function(){P(a)},100)}function $(a,b){var c=U(a);b&&clearInterval(b),Z(c)}function _(a){return O(a)}function ab(a,b){N(a,b)}function bb(a){var b=U(a);P(a),Z(b)}function cb(a,b,c){var d=bc+T(),e=X(d);return ab(d,{data:a,guid:c,retry:0}),{key:d,guid:c,clock:e}}function db(a){return cb(a,0,T())}function eb(a){var b=a.key,c=a.clock;$(b,c),bb(b)}function fb(a){if(a.length>Yb){a.sort();for(var b=a.length-Zb,c=0;b>c;c++){var d=a.shift();bb(d)}}}function gb(a){h(a,function(b){var c=a[b],d=Y(b);(m(d)||d===c)&&(delete a[b],Z(b))})}function hb(a,b){var c=[];return g(b,function(b){U(b)in a||c.push(b)}),c}function ib(a,b){var c=[];g(a,function(a){var b=_(a);if(m(b));else{var d=b.retry+1;if($b>d){var e=cb(b.data,d,b.guid);c.push(e)}}bb(a)}),g(c,function(a){var c=a.key,d=_(c);b(a,d.data,d.guid)})}function jb(){var a={};return Q(function(b){V(b)&&(a[b]=Y(b))}),a}function kb(){var a=[];return Q(function(b){W(b)&&a.push(b)}),a}function lb(a,b){if(!dc){dc=!0;var c=kb(),d=jb();fb(c);var e=function(){gb(d);var e=hb(d,c);ib(e,a),dc=!1,b&&b()};setTimeout(e,ac)}}function mb(a,b,c){d("XHR Request Succeded: "+c.url)}function nb(a,b,c){e("XHR Request Failed: "+c.url+" "+a)}function ob(a,b,c){e("XHR Timeout: "+c.url)}function pb(a){return a}function qb(a){return a}function rb(a,b,c){var d=new XMLHttpRequest;d.open(a,b.url,c);var e="onSuccess"in b?b.onSuccess:mb,f="onError"in b?b.onError:nb,g="onTimeout"in b?b.onTimeout:ob,h="unmarshall"in b?b.unmarshall:pb;return"crossDomainCredentials"in b&&(d.withCredentials=b.crossDomainCredentials===!0),"timeoutMs"in b&&(d.timeout=b.timeoutMs,d.ontimeout=function(){g.call({},b)}),d.onload=function(){d.readyState===ec&&200===d.status?e.call({},h(d.responseText),d.status,b):f.call({},d.statusText,d.status,d.readyState,b)},d.onerror=function(){var a="Unknown Error.";m(d.status)&&m(d.statusText)?a="Unknown Error.":"statusText"in d&&(a=d.statusText),f.call({},a,d.status,d.readyState,b)},d}function sb(a,b){var c=rb(a,b,!0);if("data"in b){var d="marshall"in b?b.marshall:qb;"dataType"in b&&c.setRequestHeader("Content-type",b.dataType),c.send(d(b.data))}else c.send();return c}function tb(a){sb("GET",a)}function ub(a){sb("POST",a)}function vb(a,b){delete Qb[gc][b],hc.removeChild(a)}function wb(a){var b="cb_"+z().toString(16)+"_"+D().toString(16),c=Rb.createElement("script");Qb[gc][b]=function(d){vb(c,b),a.onSuccess.call({},d,ic,a)};var d=function(){b in Qb[gc]&&(vb(c,b),a.onError.call({},"jsonp error",jc,0,fc,a))};c.onerror=d,c.onload=d,c.onreadystatechange=function(){("loaded"===c.readyState||"complete"===c.readyState)&&d()},c.type="text/javascript",c.src=a.url+"&format=jsonp&callback="+encodeURIComponent(b),hc.appendChild(c)}function xb(){return!m(Sb[kc])}function yb(a,b){return Sb[kc](a,b)}function zb(a,b,c){function d(){a(e),e=[]}var e=[],f=setTimeout(function(){},0);return{add:function(a){clearTimeout(f),e.push(a),e.length>=c?d():f=setTimeout(d,b)},flush:function(){clearTimeout(f),d()}}}function Ab(){}function Bb(a,b){if(s(b,nc),b.data.guid=a.guid,xb()&&m(b.onSuccess)){var c=yb(b.url,b.marshall(b.data));c&&sc(a)}else{var d=b.onSuccess||Ab;b.onSuccess=function(){sc(a),d()},ub(b)}}function Cb(a,b,c){var d=m(c._baseURI)?a._apiHost:c._baseURI,e=s(s({api_key:a.token},c.query),c._params),f=w(a.getUserId()),g=b.replace("%user_id%",f);return d+"/"+a.apiVersion+g+"?"+y(e)}function Db(a,b,c){var d=t(c),e=Cb(a,b,d),f={url:e};s(f,oc),"success"in d&&(f.onSuccess=d.success),"error"in d&&(f.onError=d.error);var g=B()?wb:tb;g(f)}function Eb(a,b){return n(a)?a:b(a)}function Fb(a,b){if(m(a))return a;for(var c={},d=0;d<b.length;d++)b[d]in a&&(c[b[d]]=a[b[d]]);return c}function Gb(a,b,c){var d=t(c),e=s({api_key:a.token},d._params),f=r(d._baseURI,a._analyticsHost),g=f+"/"+a.apiVersion+"/validate?"+y(e),h={url:g,data:{data:b}},i=rc(h);"success"in d&&(h.onSuccess=d.success),Bb(i,h)}function Hb(a,b){var c=i(b,function(a){return a[0]});Gb(a,c)}function Ib(a,b,c,d){d.query=Fb(d.query,c),Db(a,b,d)}function Jb(a,b,c){a in c&&(b[a]=c[a])}function Kb(a){m(a)?f("Vidora API constructed without any options."):o(a)?"apiKey"in a||f("Vidora API constructed without an API Key"):f("Vidora API should be constructed with an option object.");var b=s({},a);this.token=b.apiKey,this.apiVersion="v1";var c=this;this._queue=zb(function(a){Hb(c,a)},500,30),this._analyticsHost=lc,this._apiHost=mc,this._sendMode=pc,this._build=Pb,this._userId=null,tc(Bb)}function Lb(a){a.call({},Cc,Dc)}function Mb(a){var b=a[0],c=a.slice(1);b in Cc||f("Invalid api call '"+b+"'"),Cc[b].apply(Cc,c)}function Nb(a){p(a)?Mb(a):q(a)?Lb(a):f("typeof call item '"+typeof a+"' not supported.")}function Ob(a,b,c){if(a[c]&&a[c]._init===!0)return void e(Ac+" included twice!");Qb=a,Rb=b;var d=a[c];c in a||(a[c]={}),a[c]._init=!0,a[c].push=Mb,a[c].ready=Lb,d&&(d.ready=Lb,d.push=Mb,g(d._q,Nb),d=null)}var Pb={version:"1.2.5",rev:"5400c7d1c85f5dcc5d0adc9fb8a863cbc383a07c"},Qb=window,Rb=document,Sb=navigator,Tb=1,Ub=!k(Qb.Uint16Array)&&!k(Qb.crypto),Vb=Ub?C:F,Wb="000",Xb=(Qb.sessionStorage,Qb.localStorage),Yb=50,Zb=Yb,$b=3,_b=5,ac=3*_b,bc="vidoraRequest:",cc=".clock",dc=!1,ec=4,fc=2,gc="_vidora_jsonp";Qb[gc]=Qb[gc]||{};var hc=Rb.head||Rb.body||Rb,ic=-200,jc=-400,kc="sendBeacon",lc="https://a.vidora.com",mc="//api.vidora.com",nc={marshall:v,dataType:"text/plain"},oc={unmarshall:u},pc=0,qc=1,rc=Ab,sc=Ab,tc=Ab;M()&&(rc=db,sc=eb,tc=lb),Kb.prototype.config=function(a){var b=t(a);"analyticsHost"in b&&(this._analyticsHost=b.analyticsHost),"apiHost"in b&&(this._apiHost=b.apiHost)},Kb.prototype.send=function(a,b,c){for(var d=p(b)?b:[b],e=this.getUserId(),g=this.getSessionId(),h=0;h<d.length;h++){var i=d[h],k=t(c),l={type:Eb(a,j),user_id:Eb(e,j),session_id:Eb(g,j)};m(i)||(l.content_id=Eb(i,j)),s(l,k.params);var n={};Jb("success",n,k),Jb("error",n,k),Jb("timeout",n,k);var o=this._sendMode;switch(("click"===l.type||k.quicksend)&&(o=qc),o){case qc:this._queue.add([l,n]),this._queue.flush();break;case pc:this._queue.add([l,n]);break;default:f()}}};var uc="/users/%user_id%",vc="/groups";Kb.prototype.getItems=function(a){Ib(this,uc+"/recommendations",["category","type","limit"],a)};var wc=["group_ids"];Kb.prototype.getGroupRankings=function(a){Ib(this,uc+vc+"/rankings",wc,a)},Kb.prototype._pncItems=function(a){Db(this,"/pnc"+uc+vc+"/items",a)};var xc=5256e3,yc="vidoraUserId";Kb.prototype.getUUID=function(){var a=S(yc);return l(a)&&(a=G(),R(yc,a,xc)),a};var zc="vidoraSessionId";Kb.prototype.getSessionId=function(){var a=S(zc);return l(a)&&(a=G().slice(0,10),R(zc,a)),a},Kb.prototype.setUserId=function(a){this._userId=a},Kb.prototype.getUserId=function(){return l(this._userId)&&(this._userId=this.getUUID()),this._userId};var Ac="vidora-client",Bc=Kb,Cc=null,Dc={};Dc._i=function(a,b){var c=s({apiKey:a},b);Cc=new Bc(c),d(Ac+" "+Cc._build.version+" "+Cc._build.rev)},Dc._create=function(a){return new Bc(a)},Ob(a,b,c)}(window,document,"vidora");

(function(a,b,c,d,e){var f={_q:[]};f.ready=f.push=function(a){f._q.push(a)},c in a||(a[c]=f),a[c].ready(function(a,b){b._i(d,e)})})(window, document, "vidora","wsj.E4B14D56D6D304BA4A96A94B14D11AA9");
window.vidora.ready(function (api) {
	console.log("Vidora API finished initializing!");
});