(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4599],{23472:function(a,b,c){"use strict";var d=c(4079),e=c(9534),f=c(26509),g=c(98056),h=c(36676),i=["projectId","dataset","imageOptions","ignoreUnknownTypes"],j={imageOptions:{},ignoreUnknownTypes:!0};function k(a){return"block"===a._type&&a.listItem}a.exports=function(a,b,c,l){var m=d({},j,b),n=g(Array.isArray(m.blocks)?m.blocks:[m.blocks]),o=f(n,m.listNestMode),p=h(c,m.serializers||{}),q=i.reduce(function(a,b){var c,d=m[b];return void 0!==(c=d)&&(a[b]=d),a},{});function r(a,b,c,d){var e,f;return(e=a,"list"===e._type&&e.listItem)?v(a):k(a)?u(a,s(a,c)):(f=a,"string"==typeof f||f.marks||"span"===f._type)?l(a,p,b,{serializeNode:r}):t(a,b,d)}function s(a,b){for(var c=0,d=0;d<b.length&&b[d]!==a;d++)k(b[d])&&c++;return c}function t(b,c,d){var f=e(b).map(function(a,b,c){return r(a,b,c,!0)}),g={key:b._key||"block-".concat(c),node:b,isInline:d,serializers:p,options:q};return a(p.block,g,f)}function u(b,c){var d=b._key,f=e(b),g=f.map(r);return a(p.listItem,{node:b,serializers:p,index:c,key:d,options:q},g)}function v(b){var c=b.listItem,d=b.level,e=b._key,f=b.children.map(r);return a(p.list,{key:e,level:d,type:c,options:q},f)}var w=Boolean(m.renderContainerOnSingleChild),x=o.map(r);if(w||x.length>1){var y=m.className?{className:m.className}:{};return a(p.container,y,x)}return x[0]?x[0]:"function"==typeof p.empty?a(p.empty):p.empty}},9534:function(a){"use strict";var b=["strong","em","code","underline","strike-through"],c=function(a){var b=a.children,c=a.markDefs;if(!b||!b.length)return[];var e=b.map(d),h={_type:"span",children:[]},i=[h];return b.forEach(function(a,b){var d=e[b];if(!d){i[i.length-1].children.push(a);return}var h=1;if(i.length>1)for(;h<i.length;h++){var j=i[h].markKey,k=d.indexOf(j);if(-1===k)break;d.splice(k,1)}i=i.slice(0,h);var l=g(i);if(d.forEach(function(b){var d={_type:"span",_key:a._key,children:[],mark:c.find(function(a){return a._key===b})||b,markKey:b};l.children.push(d),i.push(d),l=d}),f(a)){for(var m=a.text.split("\n"),n=m.length;n-- >1;)m.splice(n,0,"\n");l.children=l.children.concat(m)}else l.children=l.children.concat(a)}),h.children};function d(a,b,c){if(!a.marks||0===a.marks.length)return a.marks||[];var d=a.marks.reduce(function(a,d){a[d]=a[d]?a[d]+1:1;for(var e=b+1;e<c.length;e++){var f=c[e];if(f.marks&&Array.isArray(f.marks)&& -1!==f.marks.indexOf(d))a[d]++;else break}return a},{}),f=e.bind(null,d);return a.marks.slice().sort(f)}function e(a,c,d){var e=a[c]||0,f=a[d]||0;if(e!==f)return f-e;var g=b.indexOf(c),h=b.indexOf(d);return g!==h?g-h:c<d?-1:c>d?1:0}function f(a){return"span"===a._type&&"string"==typeof a.text&&(Array.isArray(a.marks)|| void 0===a.marks)}function g(a){for(var b=a.length-1;b>=0;b--){var c=a[b];if("span"===c._type&&c.children)return c}}a.exports=c},98056:function(a,b,c){"use strict";var d=c(4079);function e(a){var b=0,c=a.length;if(0===c)return b;for(var d=0;d<c;d++)b=(b<<5)-b+a.charCodeAt(d),b&=b;return b}a.exports=function(a){return a.map(function(a){var b;return a._key?a:d({_key:(b=a,e(JSON.stringify(b)).toString(36).replace(/[^A-Za-z0-9]/g,""))},a)})}},98317:function(a,b,c){"use strict";var d=c(47859),e=c(53116),f=c(4079),g=encodeURIComponent,h="You must either:\n  - Pass `projectId` and `dataset` to the block renderer\n  - Materialize images to include the `url` field.\n\nFor more information, see ".concat(d("block-content-image-materializing")),i=function(a){var b=a.imageOptions,c=Object.keys(b);if(!c.length)return"";var d=c.map(function(a){return"".concat(g(a),"=").concat(g(b[a]))});return"?".concat(d.join("&"))},j=function(a){var b=a.node,c=a.options,d=c.projectId,g=c.dataset,j=b.asset;if(!j)throw Error("Image does not have required `asset` property");if(j.url)return j.url+i(c);if(!d||!g)throw Error(h);if(!j._ref)throw Error("Invalid image reference in block, no `_ref` found on `asset`");return e(f({projectId:d,dataset:g},c.imageOptions||{})).image(b).toString()};a.exports=j},36676:function(a,b,c){"use strict";function d(a){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}var e=c(4079);a.exports=function(a,b){return Object.keys(a).reduce(function(c,f){var g,h=d(a[f]);return"function"===h?(g=b[f],c[f]=void 0!==g?b[f]:a[f]):"object"===h?c[f]=e({},a[f],b[f]):c[f]=void 0===b[f]?a[f]:b[f],c},{})}},26509:function(a,b,c){"use strict";var d=c(4079);function e(a){return Boolean(a.listItem)}function f(a,b){return a.level===b.level&&a.listItem===b.listItem}function g(a){return{_type:"list",_key:"".concat(a._key,"-parent"),level:a.level,listItem:a.listItem,children:[a]}}function h(a){return a.children&&a.children[a.children.length-1]}function i(a,b){var c="string"==typeof b.listItem;if("list"===a._type&&a.level===b.level&&c&&a.listItem===b.listItem)return a;var d=h(a);return!!d&&i(d,b)}a.exports=function(a){for(var b,c=arguments.length>1&& void 0!==arguments[1]?arguments[1]:"html",j=[],k=0;k<a.length;k++){var l=a[k];if(!e(l)){j.push(l),b=null;continue}if(!b){b=g(l),j.push(b);continue}if(f(l,b)){b.children.push(l);continue}if(l.level>b.level){var m=g(l);if("html"===c){var n=h(b),o=d({},n,{children:n.children.concat(m)});b.children[b.children.length-1]=o}else b.children.push(m);b=m;continue}if(l.level<b.level){var p=i(j[j.length-1],l);if(p){(b=p).children.push(l);continue}b=g(l),j.push(b);continue}if(l.listItem!==b.listItem){var q=i(j[j.length-1],{level:l.level});if(q&&q.listItem===l.listItem){(b=q).children.push(l);continue}b=g(l),j.push(b);continue}console.warn("Unknown state encountered for block",l),j.push(l)}return j}},76553:function(a,b,c){"use strict";var d=c(4079),e=c(98317);a.exports=function(a,b){var c=b||{useDashedStyles:!1};function f(b,c){return a(b,null,c.children)}var g,h=function(){return a("br")};return{defaultSerializers:{types:{block:function(b){var c=b.node.style||"normal";return/^h\d/.test(c)?a(c,null,b.children):"blockquote"===c?a("blockquote",null,b.children):a("p",null,b.children)},image:function(b){if(!b.node.asset)return null;var c=a("img",{src:e(b)});return b.isInline?c:a("figure",null,c)}},marks:{strong:f.bind(null,"strong"),em:f.bind(null,"em"),code:f.bind(null,"code"),underline:function(b){return a("span",{style:c.useDashedStyles?{"text-decoration":"underline"}:{textDecoration:"underline"}},b.children)},"strike-through":function(b){return a("del",null,b.children)},link:function(b){return a("a",{href:b.mark.href},b.children)}},list:function(b){return a("bullet"===b.type?"ul":"ol",null,b.children)},listItem:function(b){var c=b.node.style&&"normal"!==b.node.style?a(b.serializers.types.block,b,b.children):b.children;return a("li",null,c)},block:function(b){var c=b.node,d=b.serializers,e=b.options,f=b.isInline,g=b.children,h=c._type,i=d.types[h];if(!i){if(e.ignoreUnknownTypes)return console.warn('Unknown block type "'.concat(h,'", please specify a serializer for it in the `serializers.types` prop')),a(d.unknownType,{node:c,options:e,isInline:f},g);throw Error('Unknown block type "'.concat(h,'", please specify a serializer for it in the `serializers.types` prop'))}return a(i,{node:c,options:e,isInline:f},g)},span:function(b){var c=b.node,d=c.mark,e=c.children,f="string"==typeof d?d:d._type,g=b.serializers.marks[f];return g?a(g,b.node,e):(console.warn('Unknown mark type "'.concat(f,'", please specify a serializer for it in the `serializers.marks` prop')),a(b.serializers.unknownMark,null,e))},hardBreak:h,unknownType:function(b){return a("div",{style:{display:"none"}},'Unknown block type "'.concat(b.node._type,'", please specify a serializer for it in the `serializers.types` prop'))},unknownMark:"span",container:"div",text:void 0,empty:""},serializeSpan:function(b,c,e,f){if("\n"===b&&c.hardBreak)return a(c.hardBreak,{key:"hb-".concat(e)});if("string"==typeof b)return c.text?a(c.text,{key:"text-".concat(e)},b):b;b.children&&(g={children:b.children.map(function(a,c){return f.serializeNode(a,c,b.children,!0)})});var g,h=d({},b,g);return a(c.span,{key:b._key||"span-".concat(e),node:h,serializers:c})}}}},47859:function(a){a.exports=function(a){return"https://docs.sanity.io/help/"+a}},53116:function(a){!function(b,c){a.exports=c()}(this,function(){function a(){return(a=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}function b(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}var c="image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg",d=function(a){var b=a;return!!b&&"string"==typeof b._ref},e=function(a){var b=a;return!!b&&"string"==typeof b._id},f=function(a){var b=a;return!!b&&!!b.asset&&"string"==typeof b.asset.url};function g(a){return("image-"+a.split("/").slice(-1)[0]).replace(/\.([a-z]+)$/,"-$1")}var h=[["width","w"],["height","h"],["format","fm"],["download","dl"],["blur","blur"],["sharpen","sharp"],["invert","invert"],["orientation","or"],["minHeight","min-h"],["maxHeight","max-h"],["minWidth","min-w"],["maxWidth","max-w"],["quality","q"],["fit","fit"],["crop","crop"],["saturation","sat"],["auto","auto"],["dpr","dpr"],["pad","pad"]],i=["clip","crop","fill","fillmax","max","scale","min"],j=["top","bottom","left","right","center","focalpoint","entropy"],k=["format"];function l(a){for(var c,d=function(a){var c=0;if("undefined"==typeof Symbol||null==a[Symbol.iterator]){if(Array.isArray(a)||(a=function(a,c){if(a){if("string"==typeof a)return b(a,c);var d=Object.prototype.toString.call(a).slice(8,-1);if("Object"===d&&a.constructor&&(d=a.constructor.name),"Map"===d||"Set"===d)return Array.from(a);if("Arguments"===d||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return b(a,c)}}(a)))return function(){return c>=a.length?{done:!0}:{done:!1,value:a[c++]}};throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(c=a[Symbol.iterator]()).next.bind(c)}(h);!(c=d()).done;){var e=c.value,f=e[0],g=e[1];if(a===f||a===g)return f}return a}var m=function(){function b(b,c){this.options=b?a(a({},b.options||{}),c||{}):a({},c||{})}var m=b.prototype;return m.withOptions=function(c){var d=c.baseUrl||this.options.baseUrl,e={baseUrl:d};for(var f in c)c.hasOwnProperty(f)&&(e[l(f)]=c[f]);return new b(this,a({baseUrl:d},e))},m.image=function(a){return this.withOptions({source:a})},m.dataset=function(a){return this.withOptions({dataset:a})},m.projectId=function(a){return this.withOptions({projectId:a})},m.bg=function(a){return this.withOptions({bg:a})},m.dpr=function(a){return this.withOptions({dpr:a})},m.width=function(a){return this.withOptions({width:a})},m.height=function(a){return this.withOptions({height:a})},m.focalPoint=function(a,b){return this.withOptions({focalPoint:{x:a,y:b}})},m.maxWidth=function(a){return this.withOptions({maxWidth:a})},m.minWidth=function(a){return this.withOptions({minWidth:a})},m.maxHeight=function(a){return this.withOptions({maxHeight:a})},m.minHeight=function(a){return this.withOptions({minHeight:a})},m.size=function(a,b){return this.withOptions({width:a,height:b})},m.blur=function(a){return this.withOptions({blur:a})},m.sharpen=function(a){return this.withOptions({sharpen:a})},m.rect=function(a,b,c,d){return this.withOptions({rect:{left:a,top:b,width:c,height:d}})},m.format=function(a){return this.withOptions({format:a})},m.invert=function(a){return this.withOptions({invert:a})},m.orientation=function(a){return this.withOptions({orientation:a})},m.quality=function(a){return this.withOptions({quality:a})},m.forceDownload=function(a){return this.withOptions({download:a})},m.flipHorizontal=function(){return this.withOptions({flipHorizontal:!0})},m.flipVertical=function(){return this.withOptions({flipVertical:!0})},m.ignoreImageParams=function(){return this.withOptions({ignoreImageParams:!0})},m.fit=function(a){if(-1===i.indexOf(a))throw Error('Invalid fit mode "'+a+'"');return this.withOptions({fit:a})},m.crop=function(a){if(-1===j.indexOf(a))throw Error('Invalid crop mode "'+a+'"');return this.withOptions({crop:a})},m.saturation=function(a){return this.withOptions({saturation:a})},m.auto=function(a){if(-1===k.indexOf(a))throw Error('Invalid auto mode "'+a+'"');return this.withOptions({auto:a})},m.pad=function(a){return this.withOptions({pad:a})},m.url=function(){return function(b){var i=a({},b||{}),j=i.source;delete i.source;var k=function(b){if(!b)return null;if("string"==typeof b&&(c=b,/^https?:\/\//.test(""+c)))h={asset:{_ref:g(b)}};else if("string"==typeof b)h={asset:{_ref:b}};else if(d(b))h={asset:b};else if(e(b))h={asset:{_ref:b._id||""}};else if(f(b))h={asset:{_ref:g(b.asset.url)}};else{if("object"!=typeof b.asset)return null;h=b}var c,h,i=b;return i.crop&&(h.crop=i.crop),i.hotspot&&(h.hotspot=i.hotspot),function b(c){if(c.crop&&c.hotspot)return c;var d=a({},c);return d.crop||(d.crop={left:0,top:0,bottom:0,right:0}),d.hotspot||(d.hotspot={x:.5,y:.5,height:1,width:1}),d}(h)}(j);if(!k)return null;var l=function(a){var b=a.split("-"),d=b[1],e=b[2],f=b[3];if(!d||!e||!f)throw Error("Malformed asset _ref '"+a+"'. Expected an id like \""+c+'".');var g=e.split("x"),h=g[0],i=g[1],j=+h,k=+i,l=isFinite(j)&&isFinite(k);if(!l)throw Error("Malformed asset _ref '"+a+"'. Expected an id like \""+c+'".');return{id:d,width:j,height:k,format:f}}(k.asset._ref||k.asset._id||""),m=Math.round(k.crop.left*l.width),n=Math.round(k.crop.top*l.height),o={left:m,top:n,width:Math.round(l.width-k.crop.right*l.width-m),height:Math.round(l.height-k.crop.bottom*l.height-n)},p=k.hotspot.height*l.height/2,q=k.hotspot.width*l.width/2,r=k.hotspot.x*l.width,s=k.hotspot.y*l.height;return i.rect||i.focalPoint||i.ignoreImageParams||i.crop||(i=a(a({},i),function a(b,c){var d,e=c.width,f=c.height;if(!(e&&f))return{width:e,height:f,rect:b.crop};var g=b.crop,h=b.hotspot,i=e/f;if(g.width/g.height>i){var j=g.height,k=j*i,l=g.top,m=(h.right-h.left)/2+h.left-k/2;m<g.left?m=g.left:m+k>g.left+g.width&&(m=g.left+g.width-k),d={left:Math.round(m),top:Math.round(l),width:Math.round(k),height:Math.round(j)}}else{var n=g.width,o=n/i,p=g.left,q=(h.bottom-h.top)/2+h.top-o/2;q<g.top?q=g.top:q+o>g.top+g.height&&(q=g.top+g.height-o),d={left:Math.max(0,Math.floor(p)),top:Math.max(0,Math.floor(q)),width:Math.round(n),height:Math.round(o)}}return{width:e,height:f,rect:d}}({crop:o,hotspot:{left:r-q,top:s-p,right:r+q,bottom:s+p}},i))),function a(b){var c=b.baseUrl||"https://cdn.sanity.io",d=b.asset.id+"-"+b.asset.width+"x"+b.asset.height+"."+b.asset.format,e=c+"/images/"+b.projectId+"/"+b.dataset+"/"+d,f=[];if(b.rect){var g=b.rect,i=g.left,j=g.top,k=g.width,l=g.height;(0!==i||0!==j||l!==b.asset.height||k!==b.asset.width)&&f.push("rect="+i+","+j+","+k+","+l)}b.bg&&f.push("bg="+b.bg),b.focalPoint&&(f.push("fp-x="+b.focalPoint.x),f.push("fp-y="+b.focalPoint.y));var m=[b.flipHorizontal&&"h",b.flipVertical&&"v"].filter(Boolean).join("");return(m&&f.push("flip="+m),h.forEach(function(a){var c=a[0],d=a[1];void 0!==b[c]?f.push(d+"="+encodeURIComponent(b[c])):void 0!==b[d]&&f.push(d+"="+encodeURIComponent(b[d]))}),0===f.length)?e:e+"?"+f.join("&")}(a(a({},i),{},{asset:l}))}(this.options)},m.toString=function(){return this.url()},b}();return function(a){var b,c=a;if((b=c)&&"object"==typeof b.clientConfig){var d=c.clientConfig,e=d.apiHost,f=d.projectId,g=d.dataset,h=e||"https://api.sanity.io";return new m(null,{baseUrl:h.replace(/^https:\/\/api\./,"https://cdn."),projectId:f,dataset:g})}return new m(null,a)}})},42838:function(a,b,c){"use strict";function d(a,b){return null!=b&&"undefined"!=typeof Symbol&&b[Symbol.hasInstance]?!!b[Symbol.hasInstance](a):a instanceof b}c.d(b,{Z:function(){return d}})}}])