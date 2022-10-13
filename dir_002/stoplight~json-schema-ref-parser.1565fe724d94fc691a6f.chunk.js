(self.webpackJsonp=self.webpackJsonp||[]).push([[8],{1105:function(e,t,r){"use strict";r(140)},1106:function(e,t,r){"use strict";const{ono:n}=r(341),o=r(156),s=r(2065),{ResolverError:i,ParserError:a,UnmatchedParserError:l,UnmatchedResolverError:u,isHandledError:c}=r(225);e.exports=async function(e,t,r){e=o.stripHash(e);let f=t._add(e),h={url:e,extension:o.getExtension(e)};try{const e=await function(e,t,r){return new Promise((o,a)=>{let l=s.all(t.resolve);l=s.filter(l,"canRead",e),s.sort(l),s.run(l,"read",e,r).then(o,(function(r){!r&&t.continueOnError?a(new u(e.url)):r&&"error"in r?r.error instanceof i?a(r.error):a(new i(r,e.url)):a(n.syntax(`Unable to resolve $ref pointer "${e.url}"`))}))})}(h,r,t);f.pathType=e.plugin.name,h.data=e.result;const o=await function(e,t,r){return new Promise((o,i)=>{let u=s.all(t.parse),c=s.filter(u,"canParse",e),f=c.length>0?c:u;s.sort(f),s.run(f,"parse",e,r).then((function(t){!t.plugin.allowEmpty&&(r=t.result,void 0===r||"object"==typeof r&&0===Object.keys(r).length||"string"==typeof r&&0===r.trim().length||ArrayBuffer.isView(r)&&0===r.length)?i(n.syntax(`Error parsing "${e.url}" as ${t.plugin.name}. \nParsed value is empty`)):o(t);var r}),(function(r){!r&&t.continueOnError?i(new l(e.url)):r&&"error"in r?r.error instanceof a?i(r.error):i(new a(r.error.message,e.url)):i(n.syntax("Unable to parse "+e.url))}))})}(h,r,t);return f.value=o.result,o.result}catch(e){throw c(e)&&(f.value=e),e}}},1109:function(e,t,r){"use strict";const n=r(484);e.exports.get=function(e,t){let r=n.parse(t);if(0===r.length)throw new TypeError("Path cannot point at root");let o=e;for(let e=0;e<r.length-1;e++){if(o=o[r[e]],"object"!=typeof o||null===o)return}return o[r[r.length-1]]},e.exports.set=function(e,t,r){let o=n.parse(t);if(0===o.length)throw new TypeError("Path cannot point at root");let s=e;for(let e=0;e<o.length-1;e++){let t=o[e],r=s;s=s[t],"object"==typeof s&&null!==s||(s=r[t]={})}o[o.length-1]in s||(s[o[o.length-1]]=r)},e.exports.unset=function(e,t){let r=n.parse(t);if(0===r.length)throw new TypeError("Path cannot point at root");let o=e;for(let e=0;e<r.length-1;e++){o=o[r[e]]}o&&r[r.length-1]in o&&delete o[r[r.length-1]]}},1131:function(e,t,r){"use strict";const{capitalize:n,isVersionId:o}=r(2128),{safePointerToPath:s,parse:i}=r(156),{basename:a,extname:l}=r(86),{get:u}=r(1109);function c(e){return n(e.replace(/(?:\.|[\\/]+)([a-z])?/g,(t,r,n)=>o(e,r,n)?"."+r:void 0===r?0===n?"":"_":"_"+r.toUpperCase()))}function f(e,t){let r=t,n=2;for(;e.has(r);)if(r=`${t}_${n++}`,n>20)throw new Error(`suggestKey: MAX_ATTEMPTS exceeded. Keys ${t}_2 through ${t}_20 already taken.`);return r}function h(e){this.root="function"==typeof e?e:()=>e,this._seenSchemas=new WeakMap}h.suggestKey=f,h.appendSlash=function(e){return e.replace(/([^/])\/?$/,"$1/")},e.exports=h,Object.assign(h.prototype,{_initializeOrReuseStateForSchema(e){let t=this._seenSchemas.get(e);if(t)return{state:t,reused:!1};let r={takenKeys:new Set,generatedKeys:new Map};return this._seenSchemas.set(e,r),{state:r,reused:!1}},getTakenKeys(e,t){let{state:r,reused:n}=this._initializeOrReuseStateForSchema(e);if(!n){let n=u(e,this.root(t));if("object"==typeof n&&null!==n)for(let e of Object.keys(n))r.takenKeys.add(e)}return r.takenKeys},isKeyTaken(e,t,r){return this.getTakenKeys(e,r).has(t)},getGeneratedKeys(e){return this._initializeOrReuseStateForSchema(e).state.generatedKeys},getExistingGeneratedKey(e,t){return this.getGeneratedKeys(e)[t]},hasExistingGeneratedKey(e,t){return t in this.getGeneratedKeys(e)},registerNewGeneratedKey(e,t,r,n){let o=this.getGeneratedKeys(e);if(null===r)o[t]=r;else{this.getTakenKeys(e,n).add(r),o[t]=`${this.root(n)}/${r}`}return o[t]},getPrettifiedKeyForFilepath:e=>c(a(e,l(e))),generateUniqueKey(e,t,r){return f(this.getTakenKeys(e,r),t)},generateKeyForFilepath(e,t,r){if(!this.hasExistingGeneratedKey(e,t)){let n=this.generateUniqueKey(e,this.getPrettifiedKeyForFilepath(t),r);this.registerNewGeneratedKey(e,t,n,r)}return this.getExistingGeneratedKey(e,t)},generateKeyForUrl(e,t,r){if(!this.hasExistingGeneratedKey(e,t)){let{path:n}=i(t,!0),o="/"===n?null:this.generateUniqueKey(e,this.getPrettifiedKeyForFilepath(n),r);this.registerNewGeneratedKey(e,t,o,r)}return this.getExistingGeneratedKey(e,t)},generateKeyForPointer(e,t,r){if(!this.hasExistingGeneratedKey(e,t)){let n=h.appendSlash(this.root(r).slice(1)),o=t.split(n).slice(1),s=this.generateUniqueKey(e,c(o.join("/")),r);this.registerNewGeneratedKey(e,t,s,r)}return this.getExistingGeneratedKey(e,t)},isInRoot(e,t){let r=s(e),n=s(this.root(t));if(n.length>=r.length)return!1;for(let e=n.length-1;e>=0;e--)if(r[r.length-(n.length-e)-1]!==n[e])return!1;return!0},isUnderDirectRoot(e){let t=s(e),r=s(this.root(e));return t.length===r.length+1&&this.isInRoot(e,e)}})},1223:function(e,t,r){"use strict";const{ParserError:n}=r(225),o=new(r(750));e.exports={order:100,allowEmpty:!0,canParse:".json",async parse(e){let t=e.data;if(ArrayBuffer.isView(t)&&(t=o.decode(t)),"string"!=typeof t)return t;if(0!==t.trim().length)try{return JSON.parse(t)}catch(t){throw new n(t.message,e.url)}}}},1224:function(e,t,r){"use strict";const{ParserError:n}=r(225),o=r(750),s=r(171),i=new o;e.exports={order:200,allowEmpty:!0,canParse:[".yaml",".yml",".json"],async parse(e){let t=e.data;if(ArrayBuffer.isView(t)&&(t=i.decode(t)),"string"!=typeof t)return t;try{const r=s.parseWithPointers(t,{ignoreDuplicateKeys:!0,mergeKeys:!1});if(r.diagnostics.some(e=>0===e.severity)){const{message:t,range:{start:{line:o,character:s}}}=r.diagnostics[0];throw new n(`${t} at line ${o+1}, column ${s+1}:`,e.url)}return r.data}catch(t){throw new n(t.message,e.url)}}}},156:function(e,t,r){"use strict";(function(n){let o=/^win/.test(n.platform),s=/\//g,i=/^(\w{2,}):\/\//i,a=e.exports,l=/\//g,u=/~/g,c=/~1/g,f=/~0/g,h=[/\?/g,"%3F",/\#/g,"%23"],p=[/\%23/g,"#",/\%24/g,"$",/\%26/g,"&",/\%2C/g,",",/\%40/g,"@"];t.parse=r(463).parse,t.resolve=r(463).resolve,t.cwd=function(){if(n.browser)return location.href;let e=n.cwd(),t=e.slice(-1);return"/"===t||"\\"===t?e:e+"/"},t.getProtocol=function(e){let t=i.exec(e);if(t)return t[1].toLowerCase()},t.getExtension=function(e){let t=e.lastIndexOf(".");return t>=0?e.substr(t).toLowerCase():""},t.getHash=function(e){let t=e.indexOf("#");return t>=0?e.substr(t):"#"},t.stripHash=function(e){let t=e.indexOf("#");return t>=0&&(e=e.substr(0,t)),e},t.isHttp=function(e){let t=a.getProtocol(e);return"http"===t||"https"===t||void 0===t&&n.browser},t.isFileSystemPath=function(e){if(n.browser)return!1;let t=a.getProtocol(e);return void 0===t||"file"===t},t.fromFileSystemPath=function(e){o&&(e=e.replace(/\\/g,"/")),e=encodeURI(e);for(let t=0;t<h.length;t+=2)e=e.replace(h[t],h[t+1]);return e},t.toFileSystemPath=function(e,t){e=decodeURI(e);for(let t=0;t<p.length;t+=2)e=e.replace(p[t],p[t+1]);let r="file://"===e.substr(0,7).toLowerCase();return r&&(e="/"===e[7]?e.substr(8):e.substr(7),o&&"/"===e[1]&&(e=e[0]+":"+e.substr(1)),t?e="file:///"+e:(r=!1,e=o?e:"/"+e)),o&&!r&&":\\"===(e=e.replace(s,"\\")).substr(1,2)&&(e=e[0].toUpperCase()+e.substr(1)),e},t.safePointerToPath=function(e){return e.length<=1||"#"!==e[0]||"/"!==e[1]?[]:e.slice(2).split("/").map(e=>decodeURIComponent(e).replace(c,"/").replace(f,"~"))},t.safePathToPointer=function(e){return 0===e.length?"#":"#/"+e.map(e=>"number"==typeof e?String(e):e.replace(u,"~0").replace(l,"~1")).join("/")}}).call(this,r(59))},2064:function(e,t,r){"use strict";const{ono:n}=r(341),o=r(483),s=r(156);function i(){this.circular=!1,this.propertyMap={},this._$refs={},this._root$Ref=null}function a(e,t){let r=Object.keys(e);return(t=Array.isArray(t[0])?t[0]:Array.prototype.slice.call(t)).length>0&&t[0]&&(r=r.filter(r=>-1!==t.indexOf(e[r].pathType))),r.map(t=>({encoded:t,decoded:"file"===e[t].pathType?s.toFileSystemPath(t,!0):t}))}e.exports=i,i.prototype.paths=function(e){let t=a(this._$refs,arguments);return t.map(e=>e.decoded)},i.prototype.values=function(e){let t=this._$refs,r=a(t,arguments);return r.reduce((e,r)=>(e[r.decoded]=t[r.encoded].value,e),{})},i.prototype.toJSON=i.prototype.values,i.prototype.exists=function(e,t){try{return this._resolve(e,"",t),!0}catch(e){return!1}},i.prototype.get=function(e,t){return this._resolve(e,"",t).value},i.prototype.set=function(e,t){let r=s.resolve(this._root$Ref.path,e),o=s.stripHash(r),i=this._$refs[o];if(!i)throw n(`Error resolving $ref pointer "${e}". \n"${o}" not found.`);i.set(r,t)},i.prototype._add=function(e){let t=s.stripHash(e),r=new o;return r.path=t,r.$refs=this,this._$refs[t]=r,this._root$Ref=this._root$Ref||r,r},i.prototype._resolve=function(e,t,r){let o=s.resolve(this._root$Ref.path,e),i=s.stripHash(o),a=this._$refs[i];if(!a)throw n(`Error resolving $ref pointer "${e}". \n"${i}" not found.`);return a.resolve(o,r,e,t)},i.prototype._get$Ref=function(e){e=s.resolve(this._root$Ref.path,e);let t=s.stripHash(e);return this._$refs[t]}},2065:function(e,t,r){"use strict";function n(e,t,r,n,o){let s=e[t];if("function"==typeof s)return s.apply(e,[r,n,o]);if(!n){if(s instanceof RegExp)return s.test(r.url);if("string"==typeof s)return s===r.extension;if(Array.isArray(s))return-1!==s.indexOf(r.extension)}return s}t.all=function(e){return Object.keys(e).filter(t=>"object"==typeof e[t]).map(t=>(e[t].name=t,e[t]))},t.filter=function(e,t,r){return e.filter(e=>!!n(e,t,r))},t.sort=function(e){for(let t of e)t.order=t.order||Number.MAX_SAFE_INTEGER;return e.sort((e,t)=>e.order-t.order)},t.run=function(e,t,r,o){let s,i,a=0;return new Promise((l,u)=>{function c(){if(s=e[a++],!s)return u(i);try{let e=n(s,t,r,f,o);e&&"function"==typeof e.then?e.then(h,p):void 0!==e&&h(e)}catch(e){p(e)}}function f(e,t){e?p(e):h(t)}function h(e){l({plugin:s,result:e})}function p(e){i={plugin:s,error:e},c()}c()})}},2066:function(e,t,r){"use strict";const n=r(2067);e.exports=function(e){let t,r,o,s;"function"==typeof(e=Array.prototype.slice.call(e))[e.length-1]&&(s=e.pop());"string"==typeof e[0]?(t=e[0],"object"==typeof e[2]?(r=e[1],o=e[2]):(r=void 0,o=e[1])):(t="",r=e[0],o=e[1]);o instanceof n||(o=new n(o));return{path:t,schema:r,options:o,callback:s}}},2067:function(e,t,r){"use strict";const n=r(1223),o=r(1224),s=r(2069),i=r(2070),a=r(2071),l=r(2083);function u(e){c(this,u.defaults),c(this,e)}function c(e,t){if(f(t)){let r=Object.keys(t);for(let n=0;n<r.length;n++){let o=r[n],s=t[o],i=e[o];f(s)?e[o]=c(i||{},s):void 0!==s&&(e[o]=s)}}return e}function f(e){return e&&"object"==typeof e&&!Array.isArray(e)&&!(e instanceof RegExp)&&!(e instanceof Date)}e.exports=u,u.defaults={parse:{json:n,yaml:o,text:s,binary:i},resolve:{file:a,http:l,external:!0},continueOnError:!1,dereference:{circular:!0},bundle:{generateKey:null,defaultRoot:"#/definitions"}}},2069:function(e,t,r){"use strict";const{ParserError:n}=r(225),o=r(750);let s=/\.(txt|htm|html|md|xml|js|min|map|css|scss|less|svg)$/i;e.exports={order:300,allowEmpty:!0,encoding:"utf8",canParse:e=>("string"==typeof e.data||ArrayBuffer.isView(e.data))&&s.test(e.url),parse(e){if("string"==typeof e.data)return e.data;if(ArrayBuffer.isView(e.data)){return new o(this.encoding).decode(e.data)}throw new n("data is not text",e.url)}}},2070:function(e,t,r){"use strict";(function(t){let r=/\.(jpeg|jpg|gif|png|bmp|ico)$/i;e.exports={order:400,allowEmpty:!0,canParse:e=>ArrayBuffer.isView(e.data)&&r.test(e.url),parse:e=>ArrayBuffer.isView(e.data)?new Uint8Array(e.data):new Uint8Array(t.from(e.data))}}).call(this,r(90).Buffer)},2071:function(e,t,r){"use strict";const n=r(1214),{ono:o}=r(341),s=r(156),{ResolverError:i}=r(225);e.exports={order:100,canRead:e=>s.isFileSystemPath(e.url),read:e=>new Promise((t,r)=>{let a;try{a=s.toFileSystemPath(e.url)}catch(t){r(new i(o.uri(t,"Malformed URI: "+e.url),e.url))}try{n.readFile(a,(e,n)=>{e?r(new i(o(e,`Error opening file "${a}"`),a)):t(n)})}catch(e){r(new i(o(e,`Error opening file "${a}"`),a))}})}},2083:function(e,t,r){"use strict";(function(t){r(2084);const{ono:n}=r(341),{AbortController:o}=r(2086),s=r(156),{ResolverError:i}=r(225);e.exports={order:200,headers:null,timeout:5e3,redirects:5,withCredentials:!1,canRead:e=>s.isHttp(e.url),read(e){let r=s.parse(e.url);return t.browser&&!r.protocol&&(r.protocol=s.parse(location.href).protocol),async function e(r,a,l){r=s.parse(r),l.push(r.href);const u=new o,c={method:"GET",headers:a.headers||{},credentials:a.withCredentials?"include":"omit",signal:u.signal,redirect:t.browser?"follow":0===a.redirects?"error":"manual"};let f;a.timeout>0&&isFinite(a.timeout)&&(f=setTimeout(()=>{u.abort()},a.timeout));try{let t=await fetch(r.href,c);if(t.status>=300&&t.status<400){if(l.length>a.redirects)throw new i(n({status:t.status},`Error downloading ${l[0]}. \nToo many redirects: \n  ${l.join(" \n  ")}`));let o=t.headers.get("Location");if(!o)throw new i(n({status:t.status},`HTTP ${t.status} redirect with no location header`));let u=s.resolve(r,o);return await e(u,a,l)}if(!t.ok)throw new Error(t.statusText);return new Uint8Array(await t.arrayBuffer())}catch(e){if(e instanceof i)throw e;throw new i(n(e,"Error downloading "+r.href),r.href)}finally{void 0!==f&&clearTimeout(f)}}(r,this,[])}}}).call(this,r(59))},2087:function(e,t,r){"use strict";const n=r(483),o=r(484),s=r(1106),i=r(156),{isHandledError:a}=r(225);function l(e,t,r,s){let i=[];if(e&&"object"==typeof e&&!ArrayBuffer.isView(e))if(n.isExternal$Ref(e))i.push(u(e,t,r,s));else for(let a of Object.keys(e)){let c=o.join(t,a),f=e[a];n.isExternal$Ref(f)?i.push(u(f,c,r,s)):i=i.concat(l(f,c,r,s))}return i}async function u(e,t,r,n){let o=i.resolve(t,e.$ref),u=i.stripHash(o);if(e=r._$refs[u])return Promise.resolve(e.value);try{let e=l(await s(o,r,n),u+"#",r,n);return Promise.all(e)}catch(e){if(!n.continueOnError||!a(e))throw e;return r._$refs[u]&&(e.source=i.stripHash(t),e.path=i.safePointerToPath(i.getHash(t))),[]}}e.exports=function(e,t){if(!t.resolve.external)return Promise.resolve();try{let r=l(e.schema,e.$refs._root$Ref.path+"#",e.$refs,t);return Promise.all(r)}catch(e){return Promise.reject(e)}}},2088:function(e,t,r){"use strict";const n=r(483),o=r(484),s=r(156),{safePathToPointer:i,safePointerToPath:a}=r(156),{get:l,set:u,unset:c}=r(1109);function f(e,t,r,s,i,a,l,u,c){let d=null===t?e:e[t];if(d&&"object"==typeof d&&!ArrayBuffer.isView(d))if(n.isAllowed$Ref(d))p(e,t,r,s,i,a,l,u,c);else{let e=h(s,u.bundle.defaultRoot),t=Object.keys(d).sort((t,r)=>{if(null!==e){let n=`${s}/${t}`.lastIndexOf(e),o=`${s}/${r}`.lastIndexOf(e);if(n!==o)return o-n}return t.length-r.length});for(let e of t){let t=o.join(r,e),h=o.join(s,e),g=d[e];n.isAllowed$Ref(g)?p(d,e,r,h,i,a,l,u,c):f(d,e,t,h,i,a,l,u,c)}}}function h(e,t){return"string"==typeof t?t:"function"==typeof t?t(e):null}function p(e,t,r,i,a,l,u,c,h){let p=null===t?e:e[t],d=s.resolve(r,p.$ref),g=u._resolve(d,i,c);if(null===g)return;let y=o.parse(i).length,m=s.stripHash(g.path),v=s.getHash(g.path),w=m!==u._root$Ref.path,$=n.isExtended$Ref(p);a+=g.indirections;let E=i,x=function(e,t,r){for(let n=0;n<e.length;n++){let o=e[n];if(o.parent===t&&o.key===r)return o}}(l,e,t);if(x){if(!(y<x.depth||a<x.indirections))return;!function(e,t){let r=e.indexOf(t);e.splice(r,1)}(l,x)}!c.bundle.generateKey||m===u._root$Ref.path||0===r.indexOf(u._root$Ref.path)&&0===p.$ref.indexOf("#/")||(h[m]||(h[m]={}),v in h[m]||(h[m][v]=c.bundle.generateKey(u._root$Ref.value,m,v,i)),E=function(e,t,r){let n=Object.keys(e);if(0===n.length||null===e["#"])return r;n=n.filter(t=>null!==e[t]),n.sort((e,t)=>t.length-e.length);let o=n.find(e=>t.startsWith(e));return void 0===o?r:e[o]+t.replace(o,"")}(h[m],v,i)),l.push({$ref:p,parent:e,key:t,pathFromRoot:i,mappedPathFromRoot:E,depth:y,file:m,hash:v,value:g.value,circular:g.circular,extended:$,external:w,indirections:a}),x||f(g.value,null,g.path,i,a+1,l,u,c,h)}e.exports=function(e,t){e.$refs.propertyMap={};let r=[],s={};f(e,"schema",e.$refs._root$Ref.path+"#","#",0,r,e.$refs,t,s),function(e,t,r,s,f){let p,d,g;t.sort((e,t)=>{if(e.file!==t.file)return e.file<t.file?-1:1;if(e.hash!==t.hash)return e.hash<t.hash?-1:1;if(e.circular!==t.circular)return e.circular?-1:1;if(e.extended!==t.extended)return e.extended?1:-1;if(e.indirections!==t.indirections)return e.indirections-t.indirections;if(e.depth!==t.depth)return e.depth-t.depth;if(s.bundle.defaultRoot){let r=h(e.pathFromRoot,s.bundle.defaultRoot),n=h(t.pathFromRoot,s.bundle.defaultRoot);if(!r&&!n)return 0;if(r&&!n)return-1;if(!r&&n)return 1;let o=e.pathFromRoot.lastIndexOf(r),i=t.pathFromRoot.lastIndexOf(n);return o!==i?i-o:e.pathFromRoot.length-t.pathFromRoot.length}return e.pathFromRoot.length-t.pathFromRoot.length});for(let s of t){if(f[s.file]&&null!==f[s.file][s.hash]){if("#"!==s.hash&&f[s.file]["#"]){let t=l(e,f[s.file]["#"]),r=a(s.hash),n=l(t,i(1===r.length?r:r.slice(0,r.length-1)));u(e,f[s.file][s.hash],1===r.length?n:n[r[r.length-1]]),delete n[r[r.length-1]],s.$ref.$ref=s.mappedPathFromRoot}else{if(s.$ref.$ref=f[s.file][s.hash],l(e,f[s.file][s.hash]))continue;u(e,f[s.file][s.hash],n.dereference(s.$ref,s.value));let r=t.find(({file:e,hash:t})=>e===s.file&&"#"===t);if(!r)continue;g=r.pathFromRoot,"#"!==s.hash&&g&&c(e,o.join(g,o.parse(s.hash.replace(d,"#"))))}g=s.mappedPathFromRoot,d=f[s.file][s.hash]}else s.external?s.file===p&&s.hash===d?s.$ref.$ref=g:s.file===p&&0===s.hash.indexOf(d+"/")?s.$ref.$ref=o.join(g,o.parse(s.hash.replace(d,"#"))):(p=s.file,d=s.hash,s.file in f&&f[s.file]["#"]?(s.$ref.$ref=s.mappedPathFromRoot,g=s.mappedPathFromRoot):(s.$ref=s.parent[s.key]=n.dereference(s.$ref,s.value),g=s.pathFromRoot),s.circular&&(s.$ref.$ref=s.pathFromRoot)):s.$ref.$ref=s.hash;r.propertyMap[g||s.pathFromRoot]=s.file+s.hash}}(e.schema,r,e.$refs,t,s)}},2089:function(e,t,r){"use strict";const n=r(483),o=r(484),{ono:s}=r(341),i=r(156);function a(e,t,r,s,i,c,f){let h,p={value:e,circular:!1};if(e&&"object"==typeof e&&!ArrayBuffer.isView(e)){if(s.push(e),n.isAllowed$Ref(e,f))h=l(e,t,r,s,i,c,f),p.circular=h.circular,p.value=h.value;else for(let d of Object.keys(e)){let g=o.join(t,d),y=o.join(r,d),m=e[d],v=!1;n.isAllowed$Ref(m,f)?(h=l(m,g,y,s,i,c,f),v=h.circular,e[d]!==h.value&&(e[d]=h.value)):-1===s.indexOf(m)?(h=a(m,g,y,s,i,c,f),v=h.circular,e[d]!==h.value&&(e[d]=h.value)):v=u(g,c,f),p.circular=p.circular||v}s.pop()}return p}function l(e,t,r,o,s,l,c){let f=i.resolve(t,e.$ref),h=l._resolve(f,t,c);if(null===h)return{circular:!1,value:null};if(l.propertyMap[r]=f,s[f]){const t=s[f],r=Object.keys(e);if(r.length>1){const n={};for(let o of r)"$ref"===o||o in t.value||(n[o]=e[o]);return{circular:t.circular,value:Object.assign({},t.value,n)}}return t}let p=h.circular,d=p||-1!==o.indexOf(h.value);d&&u(t,l,c);let g=n.dereference(e,h.value);if(!d){let e=a(g,h.path,r,o,s,l,c);d=e.circular,g=e.value}d&&!p&&"ignore"===c.dereference.circular&&(g=e),p&&(g.$ref=r);const y={circular:d,value:g};return 1===Object.keys(e).length&&(s[f]=y),y}function u(e,t,r){if(t.circular=!0,!r.dereference.circular)throw s.reference("Circular $ref pointer found at "+e);return!0}e.exports=function(e,t){e.$refs.propertyMap={};let r=a(e.schema,e.$refs._root$Ref.path,"#",[],{},e.$refs,t);e.$refs.circular=r.circular,e.schema=r.value}},2127:function(e,t,r){"use strict";const n=r(156),o=r(1131);function s(e){return{defaultRoot:e.root,generateKey(t,r,o,s){if(e.isUnderDirectRoot(s))return null;if(!n.isFileSystemPath(r)&&!n.isHttp(r))return null;if("#"!==o&&null!==o){let n=e.getExistingGeneratedKey(t,r);return void 0===n&&(n=e.generateKeyForFilepath(t,r,s)),null===n?null:e.isInRoot(o,s)?e.generateKeyForPointer(t,n+o.slice(1),s):null}return n.isHttp(r)?e.generateKeyForUrl(t,r,s):e.generateKeyForFilepath(t,r,s)}}}e.exports.getGenericDefaults=s,e.exports.getDefaultsForOldJsonSchema=function(e=s(new o(()=>"#/definitions"))){return e},e.exports.getDefaultsForNewJsonSchema=function(e=s(new o(()=>"#/$defs"))){return e};const i=e=>{const t=e.split("/");return l(t)?"#/components/parameters":u(t)?"#/components/responses":c(t)?"#/components/requestBodies":f(t)?"#/components/headers":a(t)?"#/components/schemas":null};function a(e){return e.length>3&&"paths"===e[1]&&e.includes("schema")||"components"===e[1]&&"schemas"===e[2]||"definitions"===e[1]}function l(e){return 5===e.length&&"paths"===e[1]&&"parameters"===e[3]||6===e.length&&"paths"===e[1]&&"parameters"===e[4]}function u(e){return 6===e.length&&"paths"===e[1]&&"responses"===e[4]}function c(e){return 5===e.length&&"paths"===e[1]&&"requestBody"===e[4]}function f(e){return 8===e.length&&"paths"===e[1]&&"responses"===e[4]&&"headers"===e[6]}e.exports.defaultOas2RootResolver=e=>{const t=e.split("/");return l(t)?"#/parameters":u(t)?"#/responses":a(t)?"#/definitions":null},e.exports.defaultOas3RootResolver=i,e.exports.getDefaultsForOAS2=function(t=s(new o(e.exports.defaultOas2RootResolver))){return{...t,generateKey(e,r,n,o){const s=o.split("/");return o.startsWith(t.defaultRoot(o))||a(s)||l(s)||u(s)?t.generateKey(e,r,n,o):null}}},e.exports.getDefaultsForOAS3=function(e=s(new o(i))){return{...e,generateKey(t,r,n,o){const s=o.split("/");return o.startsWith(e.defaultRoot(o))||a(s)||l(s)||u(s)||c(s)||f(s)?e.generateKey(t,r,n,o):null}}}},2128:function(e,t,r){"use strict";e.exports.isVersionId=function(e,t,r){if("v"!==t)return!1;for(r+=2;r<e.length;r++)if(Number.isNaN(Number(e[r]))&&"."===e[r])return!0;return e.length===r},e.exports.capitalize=function(e){return 0===e.length?e:e[0].toUpperCase()+e.slice(1)}},2129:function(e,t,r){"use strict";const{parse:n,isHttp:o,isFileSystemPath:s}=r(156),i=r(1131);function a(e,t){i.call(this,e),this._opts=function(e){return"string"==typeof e.cwd?e.cwd=i.appendSlash(e.cwd):e.cwd=null,"string"==typeof e.endpointUrl?e.endpointUrl=i.appendSlash(e.endpointUrl):e.endpointUrl instanceof RegExp||(e.endpointUrl=/\/api\/v1\/projects\/[^/]+\/[^/+]+\/nodes\/(?!$)/),e}({...t})}e.exports=a,a.prototype=Object.create(i.prototype,{constructor:{configurable:!0,writable:!0,value:a}}),a.prototype.processPath=function(e){if(o(e))return this.extractFilepathFromUrl(e);let{cwd:t}=this._opts;return 0===e.indexOf(t)?e.slice(t.length):e},a.prototype.extractFilepathFromUrl=function(e){let{endpointUrl:t}=this._opts,{pathname:r,href:o,query:s}=n(e,!0);if("/"===r||null===r)return e;let i,a=s.mid?"_m"+s.mid:"";return t instanceof RegExp?[,i]=r.split(t):0===o.indexOf(t)&&(i=o.slice(t.length)),i?i+a:e},a.prototype.generateKeyForFilepath=function(e,t,r){return i.prototype.generateKeyForFilepath.call(this,e,this.processPath(t),r)},a.prototype.hasExistingGeneratedKey=function(e,t){return o(t)||s(t)?i.prototype.hasExistingGeneratedKey.call(this,e,this.processPath(t)):i.prototype.hasExistingGeneratedKey.call(this,e,t)},a.prototype.getExistingGeneratedKey=function(e,t){return o(t)||s(t)?i.prototype.getExistingGeneratedKey.call(this,e,this.processPath(t)):i.prototype.getExistingGeneratedKey.call(this,e,t)},a.prototype.generateKeyForUrl=function(e,t,r){let o=this.getExistingGeneratedKey(e,t);if(void 0!==o)return o;try{let{href:o,query:s}=n(t,!0),i=this.extractFilepathFromUrl(o);if(i!==o){let n=this.getExistingGeneratedKey(e,i);if(void 0!==n)return n;let o=this.getPrettifiedKeyForFilepath(i.replace(/_m[0-9]+$/,""));o=s.mid&&this.isKeyTaken(e,o,r)?this.generateUniqueKey(e,`${o}_m${s.mid}`,r):this.generateUniqueKey(e,o,r);let a=this.registerNewGeneratedKey(e,t,o,r);return this.registerNewGeneratedKey(e,i,o,r),a}}catch{}return null}},2158:function(e,t,r){"use strict";const{getGenericDefaults:n,getDefaultsForOldJsonSchema:o,getDefaultsForOAS2:s,getDefaultsForOAS3:i,defaultOas2RootResolver:a,defaultOas3RootResolver:l}=r(2127),u=r(2129);e.exports=function(e){return{get oas2(){return s(n(new u(a,e)))},get oas3(){return i(n(new u(l,e)))},get json_schema(){return o(n(new u("#/definitions",e)))}}}},225:function(e,t,r){"use strict";const{Ono:n}=r(341),{stripHash:o,toFileSystemPath:s}=r(156),i=t.JSONParserError=class extends Error{constructor(e,t){super(),this.code="EUNKNOWN",this.message=e,this.source=t,this.path=null,n.extend(this)}};l(i);const a=t.JSONParserErrorGroup=class e extends Error{constructor(e){super(),this.files=e,this.message=`${this.errors.length} error${this.errors.length>1?"s":""} occurred while reading '${s(e.$refs._root$Ref.path)}'`,n.extend(this)}static getParserErrors(e){const t=[];for(const r of Object.values(e.$refs._$refs))r.errors&&t.push(...r.errors);return t}get errors(){return e.getParserErrors(this.files)}};l(a);l(t.ParserError=class extends i{constructor(e,t){super(`Error parsing ${t}: ${e}`,t),this.code="EPARSER"}});l(t.UnmatchedParserError=class extends i{constructor(e){super(`Could not find parser for "${e}"`,e),this.code="EUNMATCHEDPARSER"}});l(t.ResolverError=class extends i{constructor(e,t){super(e.message||`Error reading file "${t}"`,t),this.code="ERESOLVER","code"in e&&(this.ioErrorCode=String(e.code))}});l(t.UnmatchedResolverError=class extends i{constructor(e){super(`Could not find resolver for "${e}"`,e),this.code="EUNMATCHEDRESOLVER"}});l(t.MissingPointerError=class extends i{constructor(e,t){super(`Token "${e}" does not exist.`,o(t)),this.code="EMISSINGPOINTER"}});function l(e){Object.defineProperty(e.prototype,"name",{value:e.name,enumerable:!0})}l(t.InvalidPointerError=class extends i{constructor(e,t){super(`Invalid $ref pointer "${e}". Pointers must begin with "#/"`,o(t)),this.code="EINVALIDPOINTER"}}),t.isHandledError=function(e){return e instanceof i||e instanceof a},t.normalizeError=function(e){return null===e.path&&(e.path=[]),e}},244:function(e,t,r){"use strict";r.d(t,"a",(function(){return g}));const n=/\r?\n/,o=/\bono[ @]/;function s(e,t){let r=a(e.stack),n=t?t.stack:void 0;return r&&n?r+"\n\n"+n:r||n}function i(e,t,r){r?Object.defineProperty(t,"stack",{get:()=>s({stack:e.get.apply(t)},r),enumerable:!1,configurable:!0}):function(e,t){Object.defineProperty(e,"stack",{get:()=>a(t.get.apply(e)),enumerable:!1,configurable:!0})}(t,e)}function a(e){if(e){let t,r=e.split(n);for(let e=0;e<r.length;e++){let n=r[e];if(o.test(n))void 0===t&&(t=e);else if(void 0!==t){r.splice(t,e-t);break}}if(r.length>0)return r.join("\n")}return e}const l=["function","symbol","undefined"],u=["constructor","prototype","__proto__"],c=Object.getPrototypeOf({});function f(){let e={},t=this;for(let r of h(t))if("string"==typeof r){let n=t[r],o=typeof n;l.includes(o)||(e[r]=n)}return e}function h(e,t=[]){let r=[];for(;e&&e!==c;)r=r.concat(Object.getOwnPropertyNames(e),Object.getOwnPropertySymbols(e)),e=Object.getPrototypeOf(e);let n=new Set(r);for(let e of t.concat(u))n.delete(e);return n}const p=["name","message","stack"];function d(e,t,r){let n=e;return function(e,t){let r=Object.getOwnPropertyDescriptor(e,"stack");!function(e){return Boolean(e&&e.configurable&&"function"==typeof e.get)}(r)?function(e){return Boolean(!e||e.writable||"function"==typeof e.set)}(r)&&(e.stack=s(e,t)):i(r,e,t)}(n,t),t&&"object"==typeof t&&function(e,t){let r=h(t,p),n=e,o=t;for(let e of r)if(void 0===n[e])try{n[e]=o[e]}catch(e){}}(n,t),n.toJSON=f,r&&"object"==typeof r&&Object.assign(n,r),n}const g=y;function y(e,t){function r(...r){let{originalError:n,props:o,message:s}=function(e,t){let r,n,o,s="";return"string"==typeof e[0]?o=e:"string"==typeof e[1]?(e[0]instanceof Error?r=e[0]:n=e[0],o=e.slice(1)):(r=e[0],n=e[1],o=e.slice(2)),o.length>0&&(s=t.format?t.format.apply(void 0,o):o.join(" ")),t.concatMessages&&r&&r.message&&(s+=(s?" \n":"")+r.message),{originalError:r,props:n,message:s}}(r,t);return d(new e(s),n,o)}return t=function(e){return{concatMessages:void 0===(e=e||{}).concatMessages||Boolean(e.concatMessages),format:void 0!==e.format&&("function"==typeof e.format&&e.format)}}(t),r[Symbol.species]=e,r}y.toJSON=function(e){return f.call(e)},y.extend=function(e,t,r){return r||t instanceof Error?d(e,t,r):t?d(e,void 0,t):d(e)}},341:function(e,t,r){"use strict";r.r(t),function(e){var n=r(781);r.d(t,"ono",(function(){return n.a}));var o=r(244);r.d(t,"Ono",(function(){return o.a}));r(1105);t.default=n.a,"object"==typeof e.exports&&(e.exports=Object.assign(e.exports.default,e.exports))}.call(this,r(325)(e))},483:function(e,t,r){"use strict";e.exports=c;const n=r(484),{InvalidPointerError:o,isHandledError:s,normalizeError:i}=r(225),{safePointerToPath:a,stripHash:l,getHash:u}=r(156);function c(){this.path=void 0,this.value=void 0,this.$refs=void 0,this.pathType=void 0,this.errors=void 0}c.prototype.addError=function(e){void 0===this.errors&&(this.errors=[]),Array.isArray(e.errors)?this.errors.push(...e.errors.map(i)):this.errors.push(i(e))},c.prototype.exists=function(e,t){try{return this.resolve(e,t),!0}catch(e){return!1}},c.prototype.get=function(e,t){return this.resolve(e,t).value},c.prototype.resolve=function(e,t,r,i){let c=new n(this,e,r);try{return c.resolve(this.value,t,i)}catch(e){if(!t||!t.continueOnError||!s(e))throw e;return null===e.path&&(e.path=a(u(i))),e instanceof o&&(e.source=l(i)),this.addError(e),null}},c.prototype.set=function(e,t){let r=new n(this,e);this.value=r.set(this.value,t)},c.is$Ref=function(e){return e&&"object"==typeof e&&"string"==typeof e.$ref&&e.$ref.length>0},c.isExternal$Ref=function(e){return c.is$Ref(e)&&"#"!==e.$ref[0]},c.isAllowed$Ref=function(e,t){if(c.is$Ref(e)){if("#/"===e.$ref.substr(0,2)||"#"===e.$ref)return!0;if("#"!==e.$ref[0]&&(!t||t.resolve.external))return!0}},c.isExtended$Ref=function(e){return c.is$Ref(e)&&Object.keys(e).length>1},c.dereference=function(e,t){if(t&&"object"==typeof t&&c.isExtended$Ref(e)){let r={};for(let t of Object.keys(e))"$ref"!==t&&(r[t]=e[t]);for(let e of Object.keys(t))e in r||(r[e]=t[e]);return r}return t}},484:function(e,t,r){"use strict";e.exports=p;const n=r(483),o=r(156),{JSONParserError:s,InvalidPointerError:i,MissingPointerError:a,isHandledError:l}=r(225),u=/\//g,c=/~/g,f=/~1/g,h=/~0/g;function p(e,t,r){this.$ref=e,this.path=t,this.originalPath=r||t,this.value=void 0,this.circular=!1,this.indirections=0}function d(e,t){if(n.isAllowed$Ref(e.value,t)){let r=o.resolve(e.path,e.value.$ref);if(r!==e.path){let o=e.$ref.$refs._resolve(r,e.path,t);if(null===o)return;return e.indirections+=o.indirections+1,n.isExtended$Ref(e.value)?(e.value=n.dereference(e.value,o.value),!1):(e.$ref=o.$ref,e.path=o.path,e.value=o.value,!0)}e.circular=!0}}function g(e,t,r){if(!e.value||"object"!=typeof e.value)throw new s(`Error assigning $ref pointer "${e.path}". \nCannot set "${t}" of a non-object.`);return"-"===t&&Array.isArray(e.value)?e.value.push(r):e.value[t]=r,r}function y(e){if(l(e))throw e;return e}p.prototype.resolve=function(e,t,r){let n=p.parse(this.path,this.originalPath);this.value=y(e);for(let e=0;e<n.length;e++){if(d(this,t)&&(this.path=p.join(this.path,n.slice(e))),"object"==typeof this.value&&null!==this.value&&"$ref"in this.value)return this;let r=n[e];if(void 0===this.value[r]||null===this.value[r])throw this.value=null,new a(r,this.originalPath);this.value=this.value[r]}return(!this.value||this.value.$ref&&o.resolve(this.path,this.value.$ref)!==r)&&d(this,t),this},p.prototype.set=function(e,t,r){let n,o=p.parse(this.path);if(0===o.length)return this.value=t,t;this.value=y(e);for(let e=0;e<o.length-1;e++)d(this,r),n=o[e],this.value&&void 0!==this.value[n]?this.value=this.value[n]:this.value=g(this,n,{});return d(this,r),n=o[o.length-1],g(this,n,t),e},p.parse=function(e,t){let r=o.getHash(e).substr(1);if(!r)return[];r=r.split("/");for(let e=0;e<r.length;e++)r[e]=decodeURIComponent(r[e].replace(f,"/").replace(h,"~"));if(""!==r[0])throw new i(r,void 0===t?e:t);return r.slice(1)},p.join=function(e,t){-1===e.indexOf("#")&&(e+="#"),t=Array.isArray(t)?t:[t];for(let r=0;r<t.length;r++){let n=t[r];e+="/"+encodeURIComponent(n.replace(c,"~0").replace(u,"~1"))}return e}},750:function(e,t,r){"use strict";const{TextDecoder:n}=r(2068);e.exports="undefined"==typeof TextDecoder?n:TextDecoder},780:function(e,t,r){"use strict";const n=r(2064),o=r(1106),s=r(2066),i=r(2087),a=r(2088),l=r(2089),u=r(156),{JSONParserError:c,InvalidPointerError:f,MissingPointerError:h,ResolverError:p,ParserError:d,UnmatchedParserError:g,UnmatchedResolverError:y,isHandledError:m,JSONParserErrorGroup:v}=r(225),w=r(2090),{ono:$}=r(341);function E(){this.schema=null,this.$refs=new n}function x(e){if(v.getParserErrors(e).length>0)throw new v(e)}e.exports=E,e.exports.default=E,e.exports.JSONParserError=c,e.exports.JSONParserErrorGroup=v,e.exports.InvalidPointerError=f,e.exports.MissingPointerError=h,e.exports.ResolverError=p,e.exports.ParserError=d,e.exports.UnmatchedParserError=g,e.exports.UnmatchedResolverError=y,E.parse=function(e,t,r,n){let o=this,s=new o;return s.parse.apply(s,arguments)},E.prototype.parse=async function(e,t,r,i){let a,l=s(arguments);if(!l.path&&!l.schema){let e=$("Expected a file path, URL, or object. Got "+(l.path||l.schema));return w(l.callback,Promise.reject(e))}this.schema=null,this.$refs=new n;let c="http";if(u.isFileSystemPath(l.path)&&(l.path=u.fromFileSystemPath(l.path),c="file"),l.path=u.resolve(u.cwd(),l.path),l.schema&&"object"==typeof l.schema){let e=this.$refs._add(l.path);e.value=l.schema,e.pathType=c,a=Promise.resolve(l.schema)}else a=o(l.path,this.$refs,l.options);let f=this;try{let e=await a;if(null===e||"object"!=typeof e||ArrayBuffer.isView(e)){if(l.options.continueOnError)return f.schema=null,w(l.callback,Promise.resolve(f.schema));throw $.syntax(`"${f.$refs._root$Ref.path||e}" is not a valid JSON Schema`)}return f.schema=e,w(l.callback,Promise.resolve(f.schema))}catch(e){return l.options.continueOnError&&m(e)?(this.$refs._$refs[u.stripHash(l.path)]&&this.$refs._$refs[u.stripHash(l.path)].addError(e),w(l.callback,Promise.resolve(null))):w(l.callback,Promise.reject(e))}},E.resolve=function(e,t,r,n){let o=this,s=new o;return s.resolve.apply(s,arguments)},E.prototype.resolve=async function(e,t,r,n){let o=this,a=s(arguments);try{return await this.parse(a.path,a.schema,a.options),await i(o,a.options),x(o),w(a.callback,Promise.resolve(o.$refs))}catch(e){return w(a.callback,Promise.reject(e))}},E.bundle=function(e,t,r,n){let o=this,s=new o;return s.bundle.apply(s,arguments)},E.prototype.bundle=async function(e,t,r,n){let o=this,i=s(arguments);try{return await this.resolve(i.path,i.schema,i.options),a(o,i.options),x(o),w(i.callback,Promise.resolve(o.schema))}catch(e){return w(i.callback,Promise.reject(e))}},E.dereference=function(e,t,r,n){let o=this,s=new o;return s.dereference.apply(s,arguments)},E.prototype.dereference=async function(e,t,r,n){let o=this,i=s(arguments);try{return await this.resolve(i.path,i.schema,i.options),l(o,i.options),x(o),w(i.callback,Promise.resolve(o.schema))}catch(e){return w(i.callback,Promise.reject(e))}}},781:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(244);const o=i;i.error=new n.a(Error),i.eval=new n.a(EvalError),i.range=new n.a(RangeError),i.reference=new n.a(ReferenceError),i.syntax=new n.a(SyntaxError),i.type=new n.a(TypeError),i.uri=new n.a(URIError);const s=i;function i(...e){let t=e[0];if("object"==typeof t&&"string"==typeof t.name)for(let r of Object.values(s))if("function"==typeof r&&"ono"===r.name){let n=r[Symbol.species];if(n&&n!==Error&&(t instanceof n||t.name===n.name))return r.apply(void 0,e)}return i.error.apply(void 0,e)}}}]);