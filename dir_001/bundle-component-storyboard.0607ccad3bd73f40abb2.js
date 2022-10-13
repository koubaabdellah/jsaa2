"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[3667],{61081:function(e,t,i){i.d(t,{Z:function(){return Z}});var a=i(27378),l=i(52148),r=i(11194),n=i(15297),o=i(85637),d=i(96445),c=i(69301),s=i(90811),u=i(72055),m=i(62753),g=i(62999),p=i(21123),f=i(36788),h=i(83933),y=i(64217),v=i(64834),b=i(21645),x=i(595),E={default:{imageGallery:"Image gallery",previousImage:"Previous image",nextImage:"Next image",slide:"Slide",slideNumeration:"of",skipLinkText:"Skip image gallery",skipLinkEndText:"End of image gallery"},cy:{imageGallery:"Oriel luniau",previousImage:"Y llun blaenorol",nextImage:"Y llun nesaf",slide:"Sleid",slideNumeration:"o",skipLinkText:"Neidio heibio'r oriel luniau",skipLinkEndText:"Diwedd yr oriau luniau"},gd:{imageGallery:"Gailearaidh dhealbhan",previousImage:"Dealbh roimhe",nextImage:"An ath dhealbh",slide:"Duilleag",slideNumeration:"de",skipLinkText:"Leum seachad air gailearaidh dhealbhan",skipLinkEndText:"Deireadh gailearaidh dhealbhan"}};i(17827);var k=(0,l.default)("section",{target:"e47idof9",label:"ImageGallerySection"})("position:relative;background:",(e=>{var{theme:t,useAccentColour:i}=e;return i?t.colourPalette.accent:t.colourPalette.midground}),";"),S=(0,l.default)("span",{target:"e47idof8",label:"StyledAccessibilityLinks"})({name:"17q2mnx",styles:">:first-child:focus{z-index:2;}"}),w=(0,l.default)("ol",{target:"e47idof7",label:"Gallery"})({name:"wemehq",styles:"max-width:100%;display:flex;overflow-x:auto;scroll-snap-type:x mandatory;position:relative;-ms-overflow-style:none;scrollbar-width:none;margin:0;padding:0;list-style:none;&::-webkit-scrollbar{display:none;}"}),C=(0,l.default)("li",{target:"e47idof6",label:"Slide"})({name:"160gz0d",styles:"width:100%;min-height:100%;flex-shrink:0;position:relative;scroll-snap-align:start;scroll-snap-stop:always;display:flex;flex-direction:column; z-index:1"}),I=(0,l.default)("div",{target:"e47idof5",label:"ContainerWithBackground"})("width:100%;padding-top:100%;position:relative;overflow:hidden;flex-grow:0;flex-shrink:0;@media (min-width: ",s.TN,"){padding-top:56.25%;}&::before{content:'';position:absolute;z-index:0;top:",(0,u.s)(-60),";left:",(0,u.s)(-60),";width:calc(100% + ",(0,u.s)(120),");height:calc(100% + ",(0,u.s)(120),");background-image:url(",(e=>{var{image:t}=e;return t}),");background-size:cover;background-position:center;filter:blur(",(0,u.s)(30),");}"),L=(0,l.default)("div",{target:"e47idof4",label:"ContentPositioning"})({name:"1y45q3k",styles:"display:flex;flex-direction:column;justify-content:center;align-items:center;position:absolute;top:0;bottom:0;left:0;right:0"}),N=(0,l.default)("div",{target:"e47idof3",label:"ImageContainer"})("max-width:100%;max-height:100%;position:absolute;top:0px;right:0px;bottom:0px;left:0px;>:first-child{padding-bottom:100%;@media (min-width: ",s.TN,"){padding-bottom:56.25%;}}"),T=(0,l.default)("div",{target:"e47idof2",label:"StyledControls"})((e=>{var{hidden:t}=e;return t&&"visibility: hidden;"})," display:flex;justify-content:flex-end;align-items:center;height:",(0,u.s)(44),";padding:",m.SPACING_6," ",m.SPACING_2," ",m.SPACING_2," 0;"),_=(0,l.default)("div",{target:"e47idof1",label:"Buttons"})("display:flex;gap:",m.SPACING_3,";"),A=(0,l.default)("p",{target:"e47idof0",label:"CurrentEntry"})(g.eV," ",p.WM," color:",(e=>{var{theme:t}=e;return t.colourPalette.primary}),";margin-right:",m.SPACING_4,";"),G=e=>{var{children:t}=e,[i,l]=(0,a.useState)(!0);return(0,a.useEffect)((()=>{l(!1)}),[]),a.createElement(T,{hidden:i},t)},P=e=>{var{condition:t,children:i}=e;return t?a.createElement(c.Z,null,i):i},Z=e=>{var{images:t,experienceComposition:i,useAccentColour:l}=e,c=t.length,[s,u]=(0,a.useState)(!0),[m,g]=(0,a.useState)(1===c),p=(0,a.useRef)(null),T=(0,a.useRef)([]),[Z,O]=(0,a.useState)(0),D=(0,a.useCallback)((e=>{var{directionOffset:t=0}=e;p.current.scrollLeft=p.current.offsetWidth*(Z+t)}),[Z]),z={root:p.current,rootMargin:"0px",threshold:.5},F=(0,r.Z)(T.current,z);(0,a.useEffect)((()=>{F&&F.forEach((e=>{var t=T.current.findIndex((t=>t.current.isEqualNode(e.target)));e.isIntersecting&&t>-1&&e.intersectionRatio>=.5&&(O(t),u(0===t),g(t===c-1))}))}),[F,c]);var q=(0,f.Qg)(),B=E[q]||E.default,{imageGallery:R,slideNumeration:j,previousImage:W,nextImage:H,slide:K,skipLinkText:M,skipLinkEndText:U}=B,Y="".concat(Z+1," ").concat(j," ").concat(c);return(0,a.useEffect)((()=>(window.addEventListener("resize",D,{passive:!0}),()=>window.removeEventListener("resize",D))),[Z,D]),a.createElement(k,{"aria-labelledby":"image-gallery",useAccentColour:l},a.createElement(P,{condition:l},a.createElement(n.Z,{id:"image-gallery"},R),a.createElement(S,null,a.createElement(v.Z,{offset:!1,links:[{url:"#end-of-image-gallery",label:M}]})),a.createElement(w,{ref:p,tabIndex:"0"},t.map(((e,l)=>{var{image:r,caption:n}=null==e?void 0:e.model,{alt:d,copyright:c,src:s,srcSet:u,backgroundSrc:m,height:g,width:p,mimeType:f,fallbackSrcSets:v}=r,E=n?a.createElement(b.Z,{blocks:n.model.blocks,container:a.Fragment,hideFromFocus:l!==Z}):null,k=(0,y.XP)({groupName:"Storyboard Experience",groupType:"storyboard experience",groupItemCount:t.length,itemType:"slide",itemName:d,type:"image",itemPosition:l,image:{src:s},experienceComposition:i});return a.createElement(h.f,{tracking:k,key:"".concat(s,"-").concat(l),trackClicks:!1},(e=>{var{trackRef:t}=e;return a.createElement(C,{key:"".concat(s,"-").concat(l),ref:e=>{T.current[l]={current:e}},"aria-hidden":l!==Z,"data-testid":"slide".concat(l)},a.createElement("div",{ref:t},a.createElement(x.Z,{caption:E,copyright:c,mediaType:"image",isInStoryboard:!0},a.createElement(I,{image:m},a.createElement(L,null,a.createElement(N,null,a.createElement(o.Z,{fallbackSrcSets:v,mimeType:f,src:s,srcSet:u,alt:d,loading:0===l?"eager":"lazy",height:g,width:p,placeholderObjectFit:"contain",placeholder:"transparent"})))))))}))}))),a.createElement(G,null,a.createElement(A,{"data-testid":"currentEntry"},Y),a.createElement(_,null,a.createElement(d.Z,{emphasis:"high",iconType:"arrows:chevron-left",iconOnly:!0,onClick:()=>D({directionOffset:-1}),disabled:s,"data-testid":"back-button"},W),a.createElement(d.Z,{emphasis:"high",iconType:"arrows:chevron-right",iconOnly:!0,onClick:()=>D({directionOffset:1}),disabled:m,"data-testid":"forward-button"},H))),a.createElement(n.Z,{"data-testid":"live-region",id:"live-region","aria-live":"polite","aria-atomic":"true"},(()=>{var e,i,l=t[Z],{image:r,caption:n}=null==l?void 0:l.model,{alt:o}=r,d=null==n||null===(e=n.model)||void 0===e||null===(i=e.blocks)||void 0===i?void 0:i.filter((e=>"paragraph"===(null==e?void 0:e.type))),c=null==d?void 0:d.reduce(((e,t)=>{var i,a=null==t||null===(i=t.model)||void 0===i?void 0:i.text;return"".concat(e," ").concat(a).trim()}),"");return a.createElement(a.Fragment,null,a.createElement("span",{role:"text"},K," ",Y,", ",o,", ",c))})()),a.createElement(n.Z,{as:"div"},a.createElement("div",{id:"end-of-image-gallery"},U))))}}}]);