(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7644],{27484:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",c="day",u="week",s="month",l="quarter",f="year",p="date",m="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},b={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,s),o=n-i<0,a=t.clone().add(r+(o?-1:1),s);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:s,y:f,w:u,d:c,D:p,h:a,m:o,s:i,ms:r,Q:l}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=g;var w=function(e){return e instanceof S},E=function e(t,n,r){var i;if(!t)return v;if("string"==typeof t){var o=t.toLowerCase();x[o]&&(i=o),n&&(x[o]=n,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var c=t.name;x[c]=t,i=c}return!r&&i&&(v=i),i||!r&&v},T=function(e,t){if(w(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new S(n)},O=b;O.l=E,O.i=w,O.w=function(e,t){return T(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var S=function(){function g(e){this.$L=E(e.locale,null,!0),this.parse(e)}var y=g.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(O.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(d);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return O},y.isValid=function(){return!(this.$d.toString()===m)},y.isSame=function(e,t){var n=T(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return T(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<T(e)},y.$g=function(e,t,n){return O.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!O.u(t)||t,l=O.p(e),m=function(e,t){var i=O.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(c)},d=function(e,t){return O.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},h=this.$W,g=this.$M,y=this.$D,b="set"+(this.$u?"UTC":"");switch(l){case f:return r?m(1,0):m(31,11);case s:return r?m(1,g):m(0,g+1);case u:var v=this.$locale().weekStart||0,x=(h<v?h+7:h)-v;return m(r?y-x:y+(6-x),g);case c:case p:return d(b+"Hours",0);case a:return d(b+"Minutes",1);case o:return d(b+"Seconds",2);case i:return d(b+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,u=O.p(e),l="set"+(this.$u?"UTC":""),m=(n={},n[c]=l+"Date",n[p]=l+"Date",n[s]=l+"Month",n[f]=l+"FullYear",n[a]=l+"Hours",n[o]=l+"Minutes",n[i]=l+"Seconds",n[r]=l+"Milliseconds",n)[u],d=u===c?this.$D+(t-this.$W):t;if(u===s||u===f){var h=this.clone().set(p,1);h.$d[m](d),h.init(),this.$d=h.set(p,Math.min(this.$D,h.daysInMonth())).$d}else m&&this.$d[m](d);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[O.p(e)]()},y.add=function(r,l){var p,m=this;r=Number(r);var d=O.p(l),h=function(e){var t=T(m);return O.w(t.date(t.date()+Math.round(e*r)),m)};if(d===s)return this.set(s,this.$M+r);if(d===f)return this.set(f,this.$y+r);if(d===c)return h(1);if(d===u)return h(7);var g=(p={},p[o]=t,p[a]=n,p[i]=e,p)[d]||1,y=this.$d.getTime()+r*g;return O.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||m;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),o=this.$H,a=this.$m,c=this.$M,u=n.weekdays,s=n.months,l=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].slice(0,o)},f=function(e){return O.s(o%12||12,e,"0")},p=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},d={YY:String(this.$y).slice(-2),YYYY:this.$y,M:c+1,MM:O.s(c+1,2,"0"),MMM:l(n.monthsShort,c,s,3),MMMM:l(s,c),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,u,2),ddd:l(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(o),HH:O.s(o,2,"0"),h:f(1),hh:f(2),a:p(o,a,!0),A:p(o,a,!1),m:String(a),mm:O.s(a,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(h,(function(e,t){return t||d[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,p,m){var d,h=O.p(p),g=T(r),y=(g.utcOffset()-this.utcOffset())*t,b=this-g,v=O.m(this,g);return v=(d={},d[f]=v/12,d[s]=v,d[l]=v/3,d[u]=(b-y)/6048e5,d[c]=(b-y)/864e5,d[a]=b/n,d[o]=b/t,d[i]=b/e,d)[h]||b,m?v:O.a(v)},y.daysInMonth=function(){return this.endOf(s).$D},y.$locale=function(){return x[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=E(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return O.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},g}(),C=S.prototype;return T.prototype=C,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",c],["$M",s],["$y",f],["$D",p]].forEach((function(e){C[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),T.extend=function(e,t){return e.$i||(e(t,S,T),e.$i=!0),T},T.locale=E,T.isDayjs=w,T.unix=function(e){return T(1e3*e)},T.en=x[v],T.Ls=x,T.p={},T}()},90680:function(e,t,n){"use strict";n.d(t,{h:function(){return u}});var r=n(13179),i=n(2784),o=n(48173),a=n(74348),c=(0,r.Z)("p",{target:"eniimjc0"})("background:",(function(e){var t=e.theme;return"".concat(t.colors.lightGrey)}),";color:inherit;font-size:11px;margin:0;padding:10px 7% 10px;text-align:center;min-height:30px;width:100%;letter-spacing:-0.07px;line-height:0.875rem;",(function(e){return e.theme.fonts.primarySemiBold}),";a{color:",(function(e){var t=e.theme;return"".concat(t.colors.secondary)}),";text-decoration:underline;}",(function(e){return e.theme.MQ.XS}),"{padding:10px 10% 10px;}",(function(e){return e.theme.MQ.S}),"{padding:7px 15% 7px;}");function u(){var e=(0,i.useContext)(o.D).siteConstants,t=e.META_DATA.applicationName,n=e.SITE_HOST;return i.createElement(i.Fragment,null,i.createElement(c,null,t," receives compensation from some of the companies listed on this page."," ",i.createElement(a.rU,{href:"".concat(n,"/advertising-disclosure/"),variant:"secondary"},"Advertising Disclosure")))}},8133:function(e,t,n){"use strict";n.d(t,{$:function(){return $}});var r=n(97685),i=n(13179),o=n(2784),a=n(53864),c=n(59815),u=(0,i.Z)("div",{target:"e928gu45"})("display:block;padding:10px 0;",(function(e){return e.theme.MQ.M}),"{padding:0;}@media (min-width: 1200px) and (max-width: 1300px){margin:0 auto;}",(function(e){return e.theme.MQ.XL}),"{margin-left:auto;right:0;}"),s=(0,i.Z)("button",{target:"e928gu44"})("background:none;border:none;color:",(function(e){return e.theme.colors.white}),";cursor:pointer;display:inline-block;font-size:20px;font-weight:500;line-height:30px;margin:0;padding:0;outline:none;text-align:left;",(function(e){return e.theme.MQ.S}),"{font-size:22px;}",(function(e){return e.theme.MQ.M}),"{color:",(function(e){return e.theme.colors.primary}),";cursor:default;}"),l=(0,i.Z)("span",{target:"e928gu43"})("display:inline-block;height:7.6px;padding-left:10px;width:15px;",(function(e){return e.theme.MQ.M}),"{display:none;}"),f=(0,i.Z)("div",{target:"e928gu42"})("display:none;",(function(e){return e.theme.MQ.M}),"{display:block;}"),p=(0,i.Z)("div",{target:"e928gu41"})("display:flex;flex-direction:column;line-height:40px;padding:10px 10px;a{color:#fff;}&:hover{color:#fff;}",(function(e){return e.theme.MQ.M}),"{line-height:40px;padding:5px 0;a{color:",(function(e){return e.theme.colors.darkGrey}),";}& a:hover{color:",(function(e){return e.theme.colors.tertiary}),";}}"),m=(0,i.Z)("div",{target:"e928gu40"})((function(e){return e.theme.MQ.M}),"{display:none;}");function d(e){var t=e.activeCategory,n=e.categoryId,r=e.categoryText,i=e.handleCategoryClick,d=e.links,h=(0,a.u)().footer.chevronColor;return o.createElement(u,null,o.createElement(s,{onClick:function(){return i(n)}},r,o.createElement(l,{categoryId:n,activeCategory:t},o.createElement(c.T,{color:h,rotationDeg:t!==n?180:0}))),o.createElement(f,null,o.createElement(p,null,d)),o.createElement(m,null,t===n&&o.createElement(p,null,d)))}var h=n(8459),g=n(48173),y=n(74348),b=(0,i.Z)("div",{target:"eem3k9x11"})("height:100%;width:100%;*{box-sizing:content-box!important;}a{",(function(e){return e.theme.fonts.primary}),";}background:",(function(e){var t=e.theme;return"linear-gradient(90deg, ".concat(t.colors.primary," 50%, ").concat(t.colors.lightGrey," 50%)")}),";width:100%;"),v=(0,i.Z)("div",{target:"eem3k9x10"})("background:",(function(e){return e.theme.colors.primary}),";display:flex;flex-direction:column;margin:auto;padding:40px 40px;",(function(e){return e.theme.MQ.M}),"{",(function(e){return e.theme.maxWidth.L}),";background:",(function(e){return e.theme.colors.lightGrey}),";flex-direction:row;padding:0;}"),x=(0,i.Z)(y.rU,{target:"eem3k9x9"})("cursor:pointer;color:",(function(e){return e.theme.colors.white}),";display:block;font-size:14px;width:fit-content;&:hover{color:",(function(e){return e.theme.navigation.altLinkHoverColor}),";}"),w=(0,i.Z)("div",{target:"eem3k9x8"})("color:",(function(e){return e.theme.colors.white}),";display:block;line-height:30px;"),E=(0,i.Z)("div",{target:"eem3k9x7"})("color:",(function(e){return e.theme.colors.white}),";font-size:14px;"),T=(0,i.Z)("div",{target:"eem3k9x6"})("bottom:0;display:none;margin:10px 0;top:40vh;",(function(e){return e.theme.MQ.M}),"{display:block;}"),O=(0,i.Z)("div",{target:"eem3k9x5"})("display:block;margin:10px 0;",(function(e){return e.theme.MQ.M}),"{display:none;bottom:0;margin-left:auto;padding:0 30px;position:absolute;right:30px;top:40vh;}"),S=(0,i.Z)("div",{target:"eem3k9x4"})("color:",(function(e){return e.theme.colors.white}),";display:block;line-height:20px;",(function(e){return e.theme.MQ.M}),"{font-size:14px;}"),C=(0,i.Z)("div",{target:"eem3k9x3"})((function(e){return e.theme.MQ.M}),"{display:none;}"),k=(0,i.Z)("div",{target:"eem3k9x2"})("display:none;",(function(e){return e.theme.MQ.M}),"{display:block;}"),M=(0,i.Z)("div",{target:"eem3k9x1"})("padding-top:15px;",(function(e){return e.theme.MQ.M}),"{background:",(function(e){return e.theme.colors.lightGrey}),";bottom:0;display:flex;justify-content:space-around;flex-basis:70%;padding:75px 30px 20px 30px;position:relative;margin:auto 0 40px 0;}",(function(e){return e.theme.MQ.XL}),"{padding:75px 10px 20px 10px;}"),A=(0,i.Z)("div",{target:"eem3k9x0"})((function(e){return e.theme.MQ.M}),"{background:",(function(e){return e.theme.colors.primary}),";flex-basis:30%;padding:75px 30px 20px 30px;}");function $(e){var t=e.pathname,n=(0,o.useContext)(g.D),i=n.siteConstants.FOOTER_LINKS,a=i.resources,c=i.ourCompany,u=i.ourBrands,s=i.contactUs,l=n.siteComponents.FooterLogo,f=(0,o.useState)(!1),p=(0,r.Z)(f,2),m=p[0],y=p[1],$=a.map((function(e){return o.createElement(x,{key:e.text,href:e.link},e.text)})),_=c.map((function(e){var t=e.link,n=e.target,r=e.text;return o.createElement(x,{key:r,href:t,target:n},r)})),L=u.map((function(e){var t=e.link,n=e.target,r=e.text,i=e.rel;return o.createElement(x,{key:r,href:t,target:n,rel:i},r)})),j=s.map((function(e){if("link"===e.dataType){if("/connect/"===t){if("email"===e.type)return o.createElement(x,{key:"sales@business.com",href:"mailto:sales@business.com"},"sales@business.com");if("phone"===e.type)return o.createElement(x,{key:"1-888-393-5000 x4",href:"tel:1-888-393-5000;ext=4"},"888.393.5000 x4")}return o.createElement(x,{key:e.text,href:e.link},e.text)}return o.createElement(E,{key:e.text},e.text)})),D=function(e){y(m===e?null:e)},I=(new Date).getFullYear();return o.createElement(b,{id:"footer"},o.createElement(v,null,o.createElement(A,null,o.createElement(l,null),o.createElement(k,null,o.createElement(w,null,j),o.createElement(h.T,{variant:"inverse"}),o.createElement(T,null,o.createElement(S,null,"\xa9 ",I," business.com"),o.createElement(S,null,"All Rights Reserved.")))),o.createElement(M,null,o.createElement(d,{activeCategory:m,categoryId:"resources",categoryText:"Resources",handleCategoryClick:D,links:$}),o.createElement(d,{activeCategory:m,categoryId:"ourCompany",categoryText:"Our Company",handleCategoryClick:D,links:_}),o.createElement(d,{activeCategory:m,categoryId:"ourBrands",categoryText:"Our Brands",handleCategoryClick:D,links:L}),o.createElement(C,null,o.createElement(d,{activeCategory:m,categoryId:"contactUs",categoryText:"Contact Us",handleCategoryClick:D,links:j}),o.createElement(h.T,{variant:"inverse"}))),o.createElement(O,null,o.createElement(S,null,"\xa9 ",I," business.com"),o.createElement(S,null,"All Rights Reserved."))))}},24291:function(e,t,n){"use strict";n.d(t,{F:function(){return u}});var r=n(13179),i=n(2784),o=n(26561),a=n(57277),c=(0,r.Z)("div",{target:"e25zze80"})("height:100%;width:100%;*{box-sizing:",(function(e){return e.boxSizing}),";}");function u(e){var t=e.boxSizing,n=void 0===t?"border-box":t,r=e.children,u=e.docType,s=void 0===u?"":u,l=e.meta,f=void 0===l?{}:l;return i.createElement(c,{boxSizing:n,"data-doctype":s},i.createElement(a.U,{meta:f}),i.createElement(o.A,null),r)}},87475:function(e,t,n){"use strict";n.d(t,{A:function(){return d}});var r=n(2784),i=n(11163),o=n(27987),a=n(90680),c=n(8133),u=n(8744),s=n(24291),l=n(13179),f=n(70803),p=(0,l.Z)("div",{target:"e9uzmtu0"})(".ribbon_wrapLt,.ribbon_wrapRt,.ribbon_banner,.ribbon_wraps,.ribbon_holder{position:absolute;}.ribbon_banner{box-shadow:0px 3px 5px rgba(0, 0, 0, 0.5);}.ribbon_wraps{transform-origin:100% 50%;}.ribbon_wrapLt,.ribbon_wrapRt{transform-origin:50% 100%;}.ribbon_wraps{transform:rotate(-45deg);}.ribbon_wrapLt{transform:rotate(135deg);}.ribbon_wrapRt{transform:rotate(225deg);}.ribbon_holder{z-index:10000;left:-6px;top:-6px;width:150px;height:150px;overflow:hidden;background:transparent;}.ribbon_wraps{width:204px;height:48px;left:-60px;top:-24px;overflow:hidden;}.ribbon_wrapLt{width:30px;height:6px;left:-15px;bottom:50%;}.ribbon_wrapRt{width:30px;height:6px;right:-15px;bottom:50%;}.ribbon_banner{width:204px;height:24px;right:0px;top:0px;line-height:24px;font-size:16px;text-align:center;background:",(function(e){return e.theme.colors.primary}),";}"),m=function(){return r.createElement(p,null,r.createElement("div",{className:"ribbon_holder"},r.createElement("div",{className:"ribbon_wraps"},r.createElement("div",{className:"ribbon_wrapLt"}),r.createElement("div",{className:"ribbon_wrapRt"}),r.createElement("div",{className:"ribbon_banner"},r.createElement(f.Link,{variant:"light",href:"/api/exit-preview"},"Exit Preview")))))};function d(e){var t=e.boxSizing,n=void 0===t?"border-box":t,l=e.children,f=e.docType,p=void 0===f?"":f,d=e.isOverlappingHero,h=void 0!==d&&d,g=e.meta,y=void 0===g?{}:g,b=e.hasAdDisclosure,v=void 0!==b&&b,x=e.disableHeader,w=void 0!==x&&x,E=e.disableFooter,T=void 0!==E&&E,O=(0,i.useRouter)(),S=O.pathname,C=O.isPreview;return r.createElement(r.Fragment,null,r.createElement(s.F,{boxSizing:n,meta:y,docType:p},v&&r.createElement(a.h,null),!w&&r.createElement(u.bj,{isOverlappingHero:h}),C&&o.jU&&r.createElement(m,null),l,!T&&r.createElement(c.$,{pathname:S})))}},57277:function(e,t,n){"use strict";n.d(t,{U:function(){return u}});var r=n(2784),i=n(64593),o=n(53864),a=n(27987),c=n(48173);function u(e){var t=e.meta,n=t.canonical,u=t.description,s=t.ogImage,l=t.robots,f=t.title,p=(0,r.useContext)(c.D).siteConstants.META_DATA,m=(0,o.u)().colors.primary,d=p.applicationName,h=p.twitterName;l=l||p.robots,f=f||p.title;var g=(0,a.KV)({src:s||p.ogImage,method:"w",w:"700"});return r.createElement(i.Z,{htmlAttributes:{lang:"en"}},r.createElement("meta",{charSet:"utf-8"}),r.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),r.createElement("title",null,f),r.createElement("meta",{httpEquiv:"Content-Type",content:"text/html; charset=utf-8"}),r.createElement("meta",{name:"title",content:f}),u&&r.createElement("meta",{name:"description",content:u}),l&&r.createElement("meta",{name:"robots",content:l}),r.createElement("meta",{name:"mobile-web-app-capable",content:"yes"}),r.createElement("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),r.createElement("meta",{name:"application-name",content:d}),r.createElement("meta",{name:"apple-mobile-web-app-title",content:d}),r.createElement("meta",{name:"theme-color",content:m}),r.createElement("meta",{name:"msapplication-navbutton-color",content:m}),r.createElement("meta",{name:"apple-mobile-web-app-status-bar-style",content:"black-translucent"}),r.createElement("meta",{name:"msapplication-starturl",content:"/"}),r.createElement("meta",{property:"og:title",content:f}),u&&r.createElement("meta",{property:"og:description",content:u}),r.createElement("meta",{property:"og:site_name",content:d}),n&&r.createElement("meta",{property:"og:url",content:n}),r.createElement("meta",{property:"og:image",content:g}),r.createElement("meta",{property:"og:type",content:"article"}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:site",content:h}),r.createElement("meta",{name:"twitter:creator",content:h}),r.createElement("meta",{name:"twitter:title",content:f}),u&&r.createElement("meta",{name:"twitter:description",content:u}),r.createElement("meta",{name:"twitter:image",content:g}),n&&r.createElement("link",{rel:"canonical",href:n}),r.createElement("link",{rel:"manifest",href:"/manifest.webmanifest"}))}},8459:function(e,t,n){"use strict";n.d(t,{T:function(){return s}});var r=n(13179),i=n(2784),o=n(48173),a=n(74348);var c=(0,r.Z)("div",{target:"e1tivk5u1"})({name:"2e8zl8",styles:"display:flex;justify-content:space-between;max-width:200px;margin:20px 0;width:100%"}),u=(0,r.Z)(a.rU,{target:"e1tivk5u0"})({name:"8px11j",styles:"svg{width:30px;height:30px;}line-height:30px"});function s(e){var t=e.variant,n=void 0===t?"primary":t,r=(0,i.useContext)(o.D).siteComponents.SOCIAL_MEDIA_GROUP_ICONS;return i.createElement(c,null,r.map((function(e,t){var r=e.label,o=e.slug,a=e.Svg;return i.createElement(u,{"aria-label":r,href:o,key:t,rel:"noopener noreferrer",target:"_blank"},i.createElement(a,{variant:n}))})))}},28526:function(e,t,n){"use strict";n.d(t,{cv:function(){return a},vd:function(){return c},Qy:function(){return u},od:function(){return s},f3:function(){return l},Hi:function(){return f}});var r=n(2784),i=n(48173),o=function(e){return e.replace(/(<([^>]+)>)/gi,"").replace(/"|&#8220;|&#8221;/g,"'").replace(/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-f]{1,6});/g,"")};function a(e){var t=e.authors,n=e.canonical,a=e.content,c=e.lastModified,u=e.published,s=e.title,l=e.thumbnail,f=o(a),p=t.map((function(e){return{"@type":"Person",name:e.name,description:e.bio?e.bio.replace(/(<([^>]+)>)/gi,""):"",image:e.thumbnail,url:e.link}})),m=(0,r.useContext)(i.D).siteConstants.ARTICLE_SCHEMA_PROPS,d=m.name,h=m.logoHeight,g=m.logoWidth,y=m.logoUrl;return{"@context":"http://schema.org","@type":"Article",articleBody:f,author:1===p.length?p[0]:p,datePublished:u,dateModified:c,inLanguage:"en-us",headline:s,mainEntityOfPage:{"@type":"WebPage","@id":n},publisher:{"@type":"Organization",name:d,logo:{"@type":"ImageObject",url:y,width:g,height:h}},image:{"@type":"ImageObject",url:l.path}}}function c(e,t){var n=(0,r.useContext)(i.D).siteConstants.SITE_HOST;if(Array.isArray(e)){var o={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[]};return o.itemListElement=e.map((function(e,t){var n=e.name;return{"@type":"ListItem",position:t+1,item:{"@id":e.slug,name:n}}})),o}var a=e.primary,c=void 0===a?null:a,u=e.sub,s=void 0===u?null:u,l=t?"".concat(n):"".concat(n,"/"),f=c&&c.slug&&(t?"".concat(n,"/").concat(c.slug):"".concat(n,"/").concat(c.slug,"/")),p=s&&s.slug&&(t?"".concat(n,"/").concat(s.slug):"".concat(n,"/").concat(s.slug,"/")),m=c&&{"@type":"ListItem",position:2,item:{"@id":f,name:c.name}},d=s&&{"@type":"ListItem",position:3,item:{"@id":p,name:s.name}};return{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":l,name:"Home"}},c&&c.slug?m:"",s&&s.slug?d:""]}}function u(e){var t=e.authorName,n=e.canonical,r=e.items,i=e.items.isFeaturedBestPick,a=void 0!==i&&i,c=e.modifiedDate,u=e.publishedDate;return{"@context":"https://schema.org","@type":"ItemList",itemListOrder:"https://schema.org/ItemListOrderDescending",name:e.title,numberOfItems:r.length,url:n,itemListElement:r.map((function(e,r){var i,s=e.bestPickDescription,l=e.fullTitle,f=e.review,p=f.score,m=f.reviewContent,d=e.serviceName,h=e.thumbnail;return p>0&&(i={"@type":"Rating",ratingValue:p,bestRating:10,worstRating:0}),!a&&{"@type":"ListItem",position:r+1,name:l,item:{"@type":"Product",name:d,url:"".concat(n,"#").concat(d.replace(/\s/g,"-")),description:s,image:{"@type":"ImageObject",url:h},review:{"@type":"Review",datePublished:u,dateModified:c,reviewBody:o(m||""),reviewRating:i,author:{"@type":"Person",name:t}},brand:{"@type":"Thing",name:d}}}}))}}function s(e,t,n){return{"@context":"https://schema.org","@type":"Organization",url:e,logo:t,sameAs:n&&n.map((function(e){return e}))}}function l(e){var t=e.canonical,n=e.educations,o=e.users,a=o.aboutMe,c=(o.company,o.currentJobTitle),u=o.email,s=o.name,l=o.profileImage,f=o.socials,p=(0,r.useContext)(i.D).siteConstants.SITE_HOST;return{"@context":"https://schema.org","@type":"Person",image:{"@type":"ImageObject",url:l,caption:s},description:a,email:u,jobTitle:c,name:s,alumniOf:n&&n.map((function(e){return{name:e.institution}})),url:t,sameAs:f&&Object.values(f).filter((function(e){return""!==e})).map((function(e){return e})),worksFor:{"@type":"Organization","@id":"".concat(p,"/#organization")}}}function f(e){return{"@context":"https://schema.org","@type":"WebSite",url:"".concat(e),potentialAction:{"@type":"SearchAction",target:"".concat(e,"/search/?q={search_term_string}"),"query-input":"required name=search_term_string"}}}},69590:function(e){var t="undefined"!==typeof Element,n="function"===typeof Map,r="function"===typeof Set,i="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!==u--;)if(!o(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!o(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!==u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!==u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!==u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!o(e[s[u]],a[s[u]]))return!1;return!0}return e!==e&&a!==a}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},64593:function(e,t,n){"use strict";n.d(t,{q:function(){return le}});var r=n(45697),i=n.n(r),o=n(83524),a=n.n(o),c=n(69590),u=n.n(c),s=n(2784),l=n(96086),f=n.n(l),p="bodyAttributes",m="htmlAttributes",d="titleAttributes",h={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},g=(Object.keys(h).map((function(e){return h[e]})),"charset"),y="cssText",b="href",v="http-equiv",x="innerHTML",w="itemprop",E="name",T="property",O="rel",S="src",C="target",k={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",A="defer",$="encodeSpecialCharacters",_="onChangeClientState",L="titleTemplate",j=Object.keys(k).reduce((function(e,t){return e[k[t]]=t,e}),{}),D=[h.NOSCRIPT,h.SCRIPT,h.STYLE],I="data-react-helmet",P="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},R=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Z=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t},U=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Y=function(e){var t=W(e,h.TITLE),n=W(e,L);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=W(e,M);return t||r||void 0},F=function(e){return W(e,_)||function(){}},B=function(e,t){return t.filter((function(t){return"undefined"!==typeof t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return H({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return"undefined"!==typeof e[h.BASE]})).map((function(e){return e[h.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},q=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||("undefined"!==typeof t[e]&&X("Helmet: "+e+' should be of type "Array". Instead found type "'+P(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),a=0;a<o.length;a++){var c=o[a],u=c.toLowerCase();-1===t.indexOf(u)||n===O&&"canonical"===e[n].toLowerCase()||u===O&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==x&&c!==y&&c!==w||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][s]&&(i[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var c=o[a],u=f()({},r[c],i[c]);r[c]=u}return e}),[]).reverse()},W=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},J=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout((function(){J(t)}),0)}}(),K=function(e){return clearTimeout(e)},V="undefined"!==typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||J:n.g.requestAnimationFrame||J,G="undefined"!==typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||K:n.g.cancelAnimationFrame||K,X=function(e){return console&&"function"===typeof console.warn&&console.warn(e)},ee=null,te=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;ie(h.BODY,r),ie(h.HTML,i),re(f,p);var m={baseTag:oe(h.BASE,n),linkTags:oe(h.LINK,o),metaTags:oe(h.META,a),noscriptTags:oe(h.NOSCRIPT,c),scriptTags:oe(h.SCRIPT,s),styleTags:oe(h.STYLE,l)},d={},g={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(g[e]=m[e].oldTags)})),t&&t(),u(e,d,g)},ne=function(e){return Array.isArray(e)?e.join(""):e},re=function(e,t){"undefined"!==typeof e&&document.title!==e&&(document.title=ne(e)),ie(h.TITLE,t)},ie=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(I),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===i.indexOf(u)&&i.push(u);var l=o.indexOf(u);-1!==l&&o.splice(l,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);i.length===o.length?n.removeAttribute(I):n.getAttribute(I)!==a.join(",")&&n.setAttribute(I,a.join(","))}},oe=function(e,t){var n=document.head||document.querySelector(h.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===x)n.innerHTML=t.innerHTML;else if(r===y)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c="undefined"===typeof t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(I,"true"),i.some((function(e,t){return a=t,n.isEqualNode(e)}))?i.splice(a,1):o.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:o}},ae=function(e){return Object.keys(e).reduce((function(t,n){var r="undefined"!==typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},ce=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[k[n]||n]=e[n],t}),t)},ue=function(e,t,n){switch(e){case h.TITLE:return{toComponent:function(){return function(e,t,n){var r,i=((r={key:t})[I]=!0,r),o=ce(n,i);return[s.createElement(h.TITLE,o,t)]}(0,t.title,t.titleAttributes)},toString:function(){return function(e,t,n,r){var i=ae(n),o=ne(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+U(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+U(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case p:case m:return{toComponent:function(){return ce(t)},toString:function(){return ae(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[I]=!0,r);return Object.keys(t).forEach((function(e){var n=k[e]||e;if(n===x||n===y){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),s.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===x||e===y)})).reduce((function(e,t){var i="undefined"===typeof r[t]?t:t+'="'+U(r[t],n)+'"';return e?e+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===D.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},se=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,d=e.titleAttributes;return{base:ue(h.BASE,t,r),bodyAttributes:ue(p,n,r),htmlAttributes:ue(m,i,r),link:ue(h.LINK,o,r),meta:ue(h.META,a,r),noscript:ue(h.NOSCRIPT,c,r),script:ue(h.SCRIPT,u,r),style:ue(h.STYLE,s,r),title:ue(h.TITLE,{title:f,titleAttributes:d},r)}},le=function(e){var t,n;return n=t=function(t){function n(){return N(this,n),Z(this,t.apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),n.prototype.shouldComponentUpdate=function(e){return!u()(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case h.SCRIPT:case h.NOSCRIPT:return{innerHTML:t};case h.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return H({},r,((t={})[n.type]=[].concat(r[n.type]||[],[H({},i,this.mapNestedChildrenToProps(n,o))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,o=e.newChildProps,a=e.nestedChildren;switch(r.type){case h.TITLE:return H({},i,((t={})[r.type]=a,t.titleAttributes=H({},o),t));case h.BODY:return H({},i,{bodyAttributes:H({},o)});case h.HTML:return H({},i,{htmlAttributes:H({},o)})}return H({},i,((n={})[r.type]=H({},o),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=H({},t);return Object.keys(e).forEach((function(t){var r;n=H({},n,((r={})[t]=e[t],r))})),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return s.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[j[n]||n]=e[n],t}),t)}(z(i,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case h.LINK:case h.META:case h.NOSCRIPT:case h.SCRIPT:case h.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=z(t,["children"]),i=H({},r);return n&&(i=this.mapChildrenToProps(n,i)),s.createElement(e,i)},R(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(s.Component),t.propTypes={base:i().object,bodyAttributes:i().object,children:i().oneOfType([i().arrayOf(i().node),i().node]),defaultTitle:i().string,defer:i().bool,encodeSpecialCharacters:i().bool,htmlAttributes:i().object,link:i().arrayOf(i().object),meta:i().arrayOf(i().object),noscript:i().arrayOf(i().object),onChangeClientState:i().func,script:i().arrayOf(i().object),style:i().arrayOf(i().object),title:i().string,titleAttributes:i().object,titleTemplate:i().string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=se({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n}(a()((function(e){return{baseTag:Q([b,C],e),bodyAttributes:B(p,e),defer:W(e,A),encode:W(e,$),htmlAttributes:B(m,e),linkTags:q(h.LINK,[O,b],e),metaTags:q(h.META,[E,g,v,T,w],e),noscriptTags:q(h.NOSCRIPT,[x],e),onChangeClientState:F(e),scriptTags:q(h.SCRIPT,[S,x],e),styleTags:q(h.STYLE,[y],e),title:Y(e),titleAttributes:B(d,e)}}),(function(e){ee&&G(ee),e.defer?ee=V((function(){te(e,(function(){ee=null}))})):(te(e),ee=null)}),se)((function(){return null})));le.renderStatic=le.rewind,t.Z=le},45363:function(e,t,n){"use strict";t.hg=void 0;var r=n(82342);Object.defineProperty(t,"hg",{enumerable:!0,get:function(){return r.JsonLd}})},82342:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.helmetJsonLdProp=t.jsonLdScriptProps=t.JsonLd=void 0;var i=n(2784);function o(e,t){return void 0===t&&(t={}),{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(e,s,t.space)}}}t.JsonLd=function(e){return i.createElement("script",r({},o(e.item,e)))},t.jsonLdScriptProps=o,t.helmetJsonLdProp=function(e,t){return void 0===t&&(t={}),{type:"application/ld+json",innerHTML:JSON.stringify(e,s,t.space)}};var a=Object.freeze({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"}),c=new RegExp("["+Object.keys(a).join("")+"]","g"),u=function(e){return a[e]},s=function(e,t){switch(typeof t){case"object":if(null===t)return;return t;case"number":case"boolean":case"bigint":return t;case"string":return t.replace(c,u);default:return}}},83524:function(e,t,n){"use strict";var r,i=n(2784),o=(r=i)&&"object"===typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"===typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!==typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!==typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!==typeof n&&"function"!==typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!==typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return u},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return o.createElement(r,this.props)},i}(i.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}}}]);