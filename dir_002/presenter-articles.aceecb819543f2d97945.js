!function(e){function t(t){for(var i,r,s=t[0],l=t[1],d=t[2],p=0,g=[];p<s.length;p++)r=s[p],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&g.push(o[r][0]),o[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);for(c&&c(t);g.length;)g.shift()();return a.push.apply(a,d||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(i=!1)}i&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},o={7:0},a=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/verso/static/";var s=window.webpackJsonpVerso=window.webpackJsonpVerso||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var c=l;a.push([2614,0,1]),n()}({1390:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.envConfigFromWorkflow=t.Env=void 0;var i=n(1391);Object.defineProperty(t,"Env",{enumerable:!0,get:function(){return i.Env}}),Object.defineProperty(t,"envConfigFromWorkflow",{enumerable:!0,get:function(){return i.envConfigFromWorkflow}})},1391:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.envConfigFromWorkflow=t.Env=void 0,function(e){e.production="production",e.staging="staging"}(t.Env||(t.Env={}));t.envConfigFromWorkflow=(e,t)=>t[e.env]},1395:function(e,t,n){const i=n(1),o=n(0),a=n(8),{BlockquoteEmbedWrapper:r,BlockquoteEmbedContent:s,BlockquoteEmbedFooter:l,BlockquoteEmbedCite:d}=n(422),{trackComponent:c}=n(5),p=({attributes:e,children:t,citeUrl:n,className:i,dangerousAttribution:p,hasParagraphMargin:g,hasSmallMargins:u,hasTopBorder:m,shouldUseBodyColor:h})=>(o.useEffect(()=>{c("BlockquoteEmbed")},[]),o.createElement(r,Object.assign({},e,{cite:n,hasTopBorder:m,hasSmallMargins:u,className:a(i,"blockquote-embed")}),o.createElement(s,{hasParagraphMargin:g,shouldUseBodyColor:h,className:"blockquote-embed__content"},t),p&&o.createElement(l,null,o.createElement(d,{dangerouslySetInnerHTML:{__html:p}}))));p.propTypes={attributes:i.object,children:i.oneOfType([i.arrayOf(i.node),i.node]).isRequired,citeUrl:i.string,className:i.string,dangerousAttribution:i.string,hasParagraphMargin:i.bool,hasSmallMargins:i.bool,hasTopBorder:i.bool,shouldUseBodyColor:i.bool},p.defaultProps={hasSmallMargins:!1,hasTopBorder:!0,shouldUseBodyColor:!1},p.displayName="BlockquoteEmbed",e.exports=p},1399:function(e,t,n){const i=n(8),o=n(1),a=n(0),{default:r}=n(158),{trackComponent:s}=n(5),{processLinks:l,processCeros:d,processTiktok:c,processSidebarHeadings:p}=n(276),g=n(497),u=n(255),{BodyWrapper:m}=n(176),h=new r({a:l,blockquote:({props:e})=>({type:g,props:e}),ceros:d,h2:p,tiktok:c,"inline-embed":u}),y=({body:e,className:t,children:n,shouldDisableMaxWidth:o,shouldEnableDataJourneyHook:r=!0})=>{a.useEffect(()=>{s("Body")},[]);const l={className:i("body",t),shouldDisableMaxWidth:o};return r&&(l["data-journey-hook"]="client-content"),a.createElement(m,Object.assign({},l,{"data-testid":"BodyWrapper"}),n||h.convert(e))};y.propTypes={body:o.array,children:o.node,className:o.string,shouldDisableMaxWidth:o.bool,shouldEnableDataJourneyHook:o.bool},y.defaultProps={body:["div"],shouldDisableMaxWidth:!1},e.exports=y},1411:function(e,t,n){const i=n(1),o=n(0),{InfoSliceValue:a,InfoSliceKey:r,InfoSliceItem:s,InfoSliceListItem:l,InfoSliceList:d,InfoSliceWrapper:c}=n(1412),{trackComponent:p}=n(5),g=({className:e,items:t,isMusicReview:n})=>(o.useEffect(()=>{p("InfoSlice")},[]),t&&0!==t.length?o.createElement(c,{className:e},o.createElement(d,{isMusicReview:n},t.map(e=>{const{key:t,value:n}=e;return t&&n?o.createElement(l,{key:t.toString().toLowerCase()},o.createElement(s,null,o.createElement(r,null,t),o.createElement(a,null,n))):null}))):null);g.propTypes={className:i.string,isMusicReview:i.bool,items:i.arrayOf(i.shape({key:i.string,value:i.string}))},g.defaultProps={isMusicReview:!1},e.exports=g},1412:function(e,t,n){const i=n(3).default,{calculateSpacing:o,getColorStyles:a}=n(4),{BaseText:r}=n(10),{BREAKPOINTS:s}=n(6),{maxThresholds:l}=n(17),d=i(r).withConfig({displayName:"InfoSliceValue"})`
  display: table-cell;
  vertical-align: top;
`;d.defaultProps={colorToken:"colors.consumption.body.standard.body",typeIdentity:"typography.definitions.globalEditorial.numerical-small"};const c=i(r).withConfig({displayName:"InfoSliceKey"})`
  display: table-cell;
  padding-right: ${o(1)};
  vertical-align: top;
`;c.defaultProps={colorToken:"colors.consumption.body.standard.subhed",typeIdentity:"typography.definitions.globalEditorial.context-title"};const p=i.div.withConfig({displayName:"InfoSliceItem"})`
  display: table;
  align-items: center;
  padding: ${o(.5)} 0;
`,g=i.li.withConfig({displayName:"InfoSliceListItem"})`
  @media (max-width: ${l.md}px) {
    margin: 0 auto;
  }
  @media (min-width: ${s.md}) {
    margin-right: ${o(3)};

    :last-child {
      margin-right: ${o(0)};
    }
  }
`,u=i.ul.withConfig({displayName:"InfoSliceList"})`
  display: flex;
  flex-direction: column;
  margin: 0;
  border-width: 2px 0 0;
  border-style: solid;
  ${({theme:e})=>a(e,"border-color","colors.consumption.body.standard.divider")};
  padding: ${o(1.5)} 0;
  list-style: none;

  @media (min-width: ${s.md}) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    ${({isMusicReview:e})=>e&&"\n    justify-content: center;\n    border-width: 0 0 0;"}
  }
  ${({isMusicReview:e})=>e&&"\n  justify-content: center;\n  border-width: 0 0 0;"}
`,m=i.div.withConfig({displayName:"InfoSliceWrapper"})``;e.exports={InfoSliceValue:d,InfoSliceKey:c,InfoSliceItem:p,InfoSliceListItem:g,InfoSliceList:u,InfoSliceWrapper:m}},1418:function(e,t,n){const{asVariation:i}=n(13),o=n(1429),a=n(1445),r=n(1448);o.TextAboveCenterGridWidth=i(o,"TextAboveCenterGridWidth",{contentAlign:"center",contentPosition:"above"}),o.TextAboveCenterGridWidthTopCardSmall=i(o,"TextAboveCenterGridWidthTopCardSmall",{contentAlign:"center",contentPosition:"above",contentStyle:"card",copyWidth:"fullbleed",leadRailAnchor:!0,mediaWidth:"small"}),o.TextAboveCenterFullBleed=i(o,"TextAboveCenterFullBleed",{contentAlign:"center",contentPosition:"above",mediaWidth:"fullbleed"}),o.TextAboveCenterFullBleedNoContributor=i(o,"TextAboveCenterFullBleedNoContributor",{contentAlign:"center",contentPosition:"above",mediaWidth:"fullbleed"},{hasDesktopTitleBlockDivider:!1,captionStyle:"span-content-well",captionWidth:"fullbleed",showContributorImage:!1}),o.TextAboveCenterFullBleedTop=i(o,"TextAboveCenterFullBleedTop",{contentAlign:"center",contentPosition:"above",copyWidth:"fullbleed"}),o.TextAboveCenterFullBleedGridWidthCard=i(o,"TextAboveCenterFullBleedGridWidthCard",{contentAlign:"center",contentPosition:"above",contentStyle:"card",copyWidth:"fullbleed"}),o.TextAboveCenterFullBleedCard=i(o,"TextAboveCenterFullBleedCard",{contentAlign:"center",contentPosition:"above",contentStyle:"card",mediaWidth:"fullbleed",copyWidth:"fullbleed"}),o.TextAboveLeftSmall=i(o,"TextAboveLeftSmall",{contentAlign:"left",contentPosition:"above",leadRailAnchor:!0,mediaWidth:"small"}),o.TextAboveLeftSmallWithRule=i(o,"TextAboveLeftSmallWithRule",{contentAlign:"left",contentPosition:"above",hasLedeLightbox:!0,leadRailAnchor:!0,mediaWidth:"smallrule",hasInlinePublishDate:!0,hasNoRowPadding:!0,hasXsNavSpacing:!0},{stickySocialAnchorTop:{selector:"[data-testid='ContentHeaderAccreditation']",edge:"bottom"}}),o.TextAboveCenterSmallWithRule=i(o,"TextAboveCenterSmallWithRule",{contentAlign:"center",contentPosition:"above",leadRailAnchor:!0,ledeAlign:"center",mediaWidth:"smallrule",hasInlinePublishDate:!0,hasNoRowPadding:!0,hasXsNavSpacing:!0},{stickySocialAnchorTop:{selector:"[data-testid='ContentHeaderAccreditation']",edge:"bottom"}}),o.InlineImage=i(o,"InlineImage",{contentAlign:"center",contentPosition:"above",leadRailAnchor:!0,ledeAlign:"center",mediaWidth:"smallrule",hasInlinePublishDate:!0,hasNoRowPadding:!0,hasXsNavSpacing:!0},{dividerType:"bottom",hideLede:!0,showContributorImage:!1,stickySocialAnchorTop:{selector:"[data-testid='ContentHeaderAccreditation']",edge:"bottom"}}),o.TextAboveLeftFullBleed=i(o,"TextAboveLeftFullBleed",{contentAlign:"left",contentPosition:"above",copyWidth:"grid",hasLedeLightbox:!0,mediaWidth:"fullbleed"}),o.TextAboveLeftGridWidth=i(o,"TextAboveLeftGridWidth",{contentAlign:"left",contentPosition:"above",mediaWidth:"grid"}),o.TextAboveLeftGridWidthCard=i(o,"TextAboveLeftGridWidthCard",{contentAlign:"left",contentPosition:"above",contentStyle:"card",mediaWidth:"grid"}),o.TextAboveLeftNoImg=i(o,"TextAboveLeftNoImg",{contentAlign:"left",contentPosition:"above"},{className:"content-header--no-lede",lede:null}),o.TextBelowCenterGridWidth=i(o,"TextBelowCenterGridWidth",{contentAlign:"center",contentPosition:"below"}),o.TextBelowCenterFullBleed=i(o,"TextBelowCenterFullBleed",{contentAlign:"center",contentPosition:"below",mediaWidth:"fullbleed"}),o.TextBelowCenterFullBleedNoContributor=i(o,"TextBelowCenterFullBleedNoContributor",{contentAlign:"center",contentPosition:"below",mediaWidth:"fullbleed"},{hasDesktopTitleBlockDivider:!1,captionStyle:"span-content-well",captionWidth:"fullbleed",showContributorImage:!1}),o.TextBelowLeftGridWidth=i(o,"TextBelowLeftGridWidth",{contentAlign:"left",contentPosition:"below"}),o.TextBelowLeftGridWidthCard=i(o,"TextBelowLeftGridWidthCard",{contentAlign:"left",contentPosition:"below",contentStyle:"card"}),o.TextBelowLeftFullBleed=i(o,"TextBelowLeftFullBleed",{contentAlign:"left",contentPosition:"below",mediaWidth:"fullbleed"}),o.TextBelowFullBleedDenseCard=i(o,"TextBelowFullBleedDenseCard",{contentAlign:"left",contentPosition:"below",contentStyle:"dense-card",mediaWidth:"fullbleed"}),o.TextOverlay=i(a,"TextOverlayContentHeader",{}),o.TextOverlayWithLogo=i(a,"TextOverlayContentHeaderWithLogo",{isFeatured:!0}),o.TextOverlayCenterFullBleedGradient=i(a,"TextOverlayCenterFullBleedGradient",{contentAlign:"center",background:"gradient"}),o.SplitScreenImgLeft=i(o,"SplitScreenImgLeft",{contentAlign:"left",contentPosition:"end"}),o.SplitScreenImgRight=i(o,"SplitScreenImgRight",{contentAlign:"left",contentPosition:"start"}),o.SplitScreenImgRightContentCenter=i(o,"SplitScreenImgRightContentCenter",{contentAlign:"center",contentPosition:"start",contentStyle:"card",mediaWidth:"grid"}),o.AssetMiddleCenterBig=i(o,"AssetMiddleCenterBig",{assetPosition:"middle",contentAlign:"center",contentPosition:"above",mediaWidth:"small"}),o.AssetMiddleCenterFullBleed=i(o,"AssetMiddleCenterFullBleed",{assetPosition:"middle",contentAlign:"center",contentPosition:"above",mediaWidth:"grid"}),o.SubjectFocus=i(o,"SubjectFocus",{contentAlign:"left",contentPosition:"above",hasExtraSpaceBetweenSeparator:!0,leadRailAnchor:!0,mediaWidth:"small",publishDatePosition:"top",reducedSpacings:!0},{showContributorImage:!1}),o.SplitScreenImageRightFullBleed=i(r,"SplitScreenImageRightFullBleed",{},{isTextRight:!1,showContributorImage:!1}),o.SplitScreenImageRightInset=i(r,"SplitScreenImageRightInset",{},{isInset:!0,isTextRight:!1,showContributorImage:!1}),o.SplitScreenImageLeftFullBleed=i(r,"SplitScreenImageLeftFullBleed",{},{isTextRight:!0,showContributorImage:!1}),o.SplitScreenImageLeftInset=i(r,"SplitScreenImageLeftInset",{},{isInset:!0,isTextRight:!0,showContributorImage:!1}),o.BusinessContentHeader=i(o,"BusinessContentHeader",{contentAlign:"center",contentPosition:"below",mediaWidth:"fullbleed",showContentDivider:!0,hideRubric:!0}),o.PodcastContentHeader=i(o,"PodcastContentHeader",{contentAlign:"center",contentPosition:"below",shouldUseSmallLede:!0,showPodcastButton:!0,hasDivider:!0},{hideLedeCaption:!0}),e.exports=o},1419:function(e,t,n){e.exports=n(1430)},1420:function(e,t,n){const{asConfiguredComponent:i}=n(9),o=n(1441);e.exports=i(o,"ReviewRatingData")},1421:function(e,t,n){e.exports=n(1411)},1429:function(e,t,n){const i=n(8),o=n(1),a=n(0),r=n(145),{withLightbox:s}=n(1419),l=n(74),{trackComponent:d}=n(5),c=n(21),p=n(45),g=n(36),u=n(184),m=n(92),h=n(110),y=n(11),b=n(1433),f=n(219),C=n(1440),{useNativeShare:v}=n(94),{getThemedBylineVariation:S}=n(248),{ContentHeaderSocialIcons:w}=n(442),{ContentHeaderWrapper:k,ContentHeaderOffersData:x,ContentHeaderLeadOverride:$,ContentHeaderAccreditationBottom:T,ContentHeaderContainer:E,ContentHeaderPublishDate:N,ContentHeaderLeadAssetWrapper:L,ContentHeaderBylines:I,ContentHeaderPersistentAside:B}=n(245),{ContentHeaderDek:A}=n(243),{getOverrideBehaviour:P}=n(428),D=({additionalPhotos:e,authorsTitleBlockPosition:t,awards:n,business:o,bylineVariation:r,captionStyle:l,captionWidth:c,className:p,contentHeaderCategories:g,contentSponsorNames:u,contributorImage:m,contributors:h,ctaText:y,dangerousDek:D,dangerousHed:R,dividerType:M,externalLinks:O,hasDesktopTitleBlockDivider:H,hasLedeLightboxButton:_,hasLightbox:W,hasSlideshow:G,hasStaticPositionedAward:j,hasStickyBoxIndexPosition:F,hasStickySocialIcons:V,hideByLine:U,hideContributors:z,hideDangerousDek:q,hideRubric:K,hideSocialIconsOnMobile:Y,hideTopDisclaimerOnMobile:Z,hideTopRating:X,hidePublishDate:J,interactiveOverride:Q,isBusinessContentHeader:ee,isLiveStoryType:te,isStoryLive:ne,issueDate:ie,issueLink:oe,lede:ae,ledeSocialIcons:re,offers:se,persistentAsideAlign:le,price:de,publishDate:ce,rating:pe,reviewRating:ge,rubric:ue,rubricVariation:me,itemsCount:he,hasContributorImageBackground:ye,metadataVideo:be,showContentDivider:fe,showContributorImage:Ce,showSponsorBlock:ve,showHeaderButton:Se,hideIssueDate:we,hideIssueDatePipeSeparator:ke,hideLede:xe,hideLedeCaption:$e,hasDisabledCloseOnClickForLightbox:Te,hasNarrowHeader:Ee,podcastPagePrimaryCta:Ne,shouldDisplayPremiereDate:Le,shouldShortenHeadline:Ie,showFullWidthLeadImage:Be,showIssueCopyByDate:Ae,showTextOverlayDek:Pe,slideShowVariation:De,socialIconsToHide:Re,socialMedia:Me,socialTitle:Oe,socialDescription:He,stickySocialAnchorBottom:_e,stickySocialAnchorTop:We,theme:Ge,sponsoredContentHeaderProps:je,sponsorByline:Fe,variations:{assetPosition:Ve,copyWidth:Ue,contentAlign:ze,contentPosition:qe,contentStyle:Ke,hasExtraSpaceBetweenSeparator:Ye=!1,hasLedeLightbox:Ze,hasNoRowPadding:Xe,hasInlinePublishDate:Je,hasXsNavSpacing:Qe,ledeAlign:et,leadRailAnchor:tt,mediaWidth:nt,publishDatePosition:it="bottom",reducedSpacings:ot=!1,hasDivider:at,showPodcastButton:rt,shouldUseSmallLede:st},hasNativeShareButton:lt,shouldEnableNativeShareOnDesktop:dt,showBreadCrumb:ct,venueAwards:pt,hasInvertedCaption:gt,hasInvertedLedeBackground:ut})=>{a.useEffect(()=>{d("ContentHeader",{assetPosition:Ve,copyWidth:Ue,contentAlign:ze,contentPosition:qe,contentStyle:Ke,hasExtraSpaceBetweenSeparator:Ye,hasLedeLightbox:Ze,hasNarrowHeader:Ee,hasNoRowPadding:Xe,hasInlinePublishDate:Je,hasXsNavSpacing:Qe,ledeAlign:et,leadRailAnchor:tt,mediaWidth:nt,publishDatePosition:it,reducedSpacings:ot})},[]);const mt="middle"===Ve,ht=(e=>e&&1===Object.keys(e).length&&e.author&&1===e.author.items.length)(h)&&Je,yt="storyimage"===P(Q),bt=S({bylineVariation:r,theme:Ge}),ft=a.createElement(b,{authorsPosition:t,business:o,bylineVariation:bt,contentHeaderCategories:g,contentSponsorNames:u,contributors:h,dangerousHed:R,dividerType:M,externalLinks:O,hasContentDivider:fe,hasDesktopTitleBlockDivider:H,hasDivider:at,hasNoRowPadding:Xe,hasExtraSpaceBetweenSeparator:Ye,hideIssueDate:we,hideIssueDatePipeSeparator:ke,hideRubric:K,hidePublishDate:J,isBusinessContentHeader:ee,isLiveStoryType:te,isStoryLive:ne,issueDate:ie,issueLink:oe,itemsCount:he,metadataVideo:be,podcastPagePrimaryCta:Ne,price:de,publishDate:ce,publishDatePosition:it,rubric:ue,rubricVariation:me,showIssueCopyByDate:Ae,showPodcastButton:rt,theme:Ge});let Ct=f;W&&Ze&&(Ct=e?s(f,e,G,De,Te):s(f,[ae]));const{showNativeShareButton:vt,pageUrl:St}=v(lt,dt),wt="hidden"!==t,kt=h&&Object.keys(h).length>1,xt=h&&!z&&a.createElement(I,{contributors:h,bylineVariation:bt,isCompact:!1,inlinePublishDate:ht}),$t=!J&&a.createElement(N,{inlinePublishDate:ht,"data-testid":"ContentHeaderPublishDate",mediaWidth:nt,contentAlign:ze},ce);return a.createElement(k,{className:i("content-header",{[p]:p}),isLiveStoryType:te,publishDatePosition:it,hasXsNavSpacing:Qe,contentAlign:ze,assetPosition:Ve,shouldShowAuthorsInTitleBlock:wt,captionStyle:l,copyWidth:Ue,mediaWidth:nt,contentStyle:Ke,contentPosition:qe,isBusinessContentHeader:ee,shouldShortenHeadline:Ie,reducedSpacings:ot,hasInvertedCaption:gt,containerTheme:Ge,shouldBylineContentStacked:kt,hasExtraSpaceBetweenSeparator:Ye,hasLede:!!ae,hasNarrowHeader:Ee,showBreadCrumb:ct,showTextOverlayDek:Pe},a.createElement(E,{containerTheme:Ge,mediaWidth:nt,showFullWidthLeadImage:Be,contentStyle:Ke,contentPosition:qe,"data-testid":"ContentHeaderContainer"},R&&ft,a.createElement(C,{bylinesBlock:xt,contributorImage:m,dangerousDek:D,hideDangerousDek:q,dividerType:M,hasContributorImageBackground:ye,hasDesktopTitleBlockDivider:H,hasLede:!!ae,hideTopRating:X,hasStickySocialIcons:V,hideByLine:U,hideSocialIconsOnMobile:Y,isBusinessContentHeader:ee,isMiddleImage:mt,isSponsoredContent:u.length>0,isLiveStoryType:te,isStoryLive:ne,metadataVideo:be,publishDateBlock:$t,publishDatePosition:it,rating:pe,reviewRating:ge,shouldDisplayPremiereDate:Le,shouldShowAuthorsInTitleBlock:wt,showContributorImage:Ce,showSponsorBlock:ve,socialIconsToHide:Re,socialMedia:Me,socialTitle:Oe,socialDescription:He,sponsorByline:Fe,sponsoredContentHeaderProps:je,pageUrl:St,showNativeShareButton:vt,venueAwards:pt,mediaWidth:nt,contentAlign:ze,contentPosition:qe,theme:Ge}),a.createElement(x,{ctaText:y,hideTopDisclaimerOnMobile:Z,offers:se,showHeaderButton:Se,buttonPosition:"content-header"}),yt?a.createElement($,{contentPosition:qe,dangerouslySetInnerHTML:{__html:Q.markup}}):!xe&&ae&&a.createElement(L,{awards:n,hasLightboxButton:_,hasStaticPositionedAward:j,hideLedeCaption:$e,hasDisabledCloseOnClickForLightbox:Te,lede:ae,captionWidth:c,shouldRenderRailAnchor:tt,shouldUseSmallLede:st,socialIcons:re,mediaWidth:nt,containerTheme:Ge,hasInvertedLedeBackground:ut,ledeAlign:et,showFullWidthLeadImage:Be,isBusinessContentHeader:ee,as:Ct,className:i({["lead-asset--width-"+nt]:nt})}),!q&&D&&mt&&a.createElement(T,null,a.createElement(A,{dangerouslySetInnerHTML:{__html:D},assetPosition:Ve,mediaWidth:nt,"data-testid":"ContentHeaderDek"}))),!vt&&V&&Me&&a.createElement(B,{attributes:{shouldFadeOnMove:!0},align:le,anchorBottom:_e,anchorTop:We,hasStickyBoxIndexPosition:F,fullWidthSelector:".container--full, .full-bleed-ad, .callout--feature-large"},a.createElement(w,Object.assign({},Me,{className:"social-icons--share"}))))};D.propTypes={additionalPhotos:o.array,authorsTitleBlockPosition:o.oneOf(["above","below","hidden"]),awards:o.array,business:o.shape({address:o.object,phone:o.string,email:o.string,socialMedia:o.array}),bylineVariation:o.string,captionStyle:o.oneOf(["default","span-content-well"]),captionWidth:o.oneOf(["standard","fullbleed"]),className:o.string,contentHeaderCategories:o.shape({title:o.string,tags:o.array}),contentSponsorNames:o.array,contributorImage:o.shape(y.propTypes),contributors:o.shape(g.propTypes.contributors),ctaText:o.string,dangerousDek:o.string,dangerousHed:o.string,dividerType:o.oneOf(["both","bottom","top"]),externalLinks:o.array,hasContributorImageBackground:o.bool,hasDesktopTitleBlockDivider:o.bool,hasDisabledCloseOnClickForLightbox:o.bool,hasInvertedCaption:o.bool,hasInvertedLedeBackground:o.bool,hasLedeLightboxButton:o.bool,hasLightbox:o.bool,hasNarrowHeader:o.bool,hasNativeShareButton:o.bool,hasSlideshow:o.bool,hasStaticPositionedAward:o.bool,hasStickyBoxIndexPosition:o.bool,hasStickySocialIcons:o.bool,hideByLine:o.bool,hideContributors:o.bool,hideDangerousDek:o.bool,hideIssueDate:o.bool,hideIssueDatePipeSeparator:o.bool,hideLede:o.bool,hideLedeCaption:o.bool,hidePublishDate:o.bool,hideRubric:o.bool,hideSocialIconsOnMobile:o.bool,hideTopDisclaimerOnMobile:o.bool,hideTopRating:o.bool,interactiveOverride:o.shape({markup:o.string,behavior:o.string}),isBusinessContentHeader:o.bool,isLiveStoryType:o.bool,isStoryLive:o.bool,issueDate:o.string,issueLink:o.string,itemsCount:o.shape(l.propTypes),lede:o.oneOfType([o.shape(y.propTypes),o.shape(u.propTypes),o.shape(m.propTypes)]),ledeSocialIcons:o.shape(c.propTypes),metadataVideo:o.shape({isLive:o.bool,premiereDate:o.string,premiereGap:o.number,series:o.string,videoLength:o.number}),offers:o.array,persistentAsideAlign:o.oneOf(["left","left-lead-asset"]),podcastPagePrimaryCta:o.string,price:o.string,publishDate:o.string.isRequired,rating:o.shape(h.propTypes),reviewRating:o.number,rubric:o.shape(p.propTypes),rubricVariation:o.string,shouldDisplayPremiereDate:o.bool,shouldEnableNativeShareOnDesktop:o.bool,shouldShortenHeadline:o.bool,showBreadCrumb:o.bool,showContentDivider:o.bool,showContributorImage:o.bool,showFullWidthLeadImage:o.bool,showHeaderButton:o.bool,showIssueCopyByDate:o.bool,showSponsorBlock:o.bool,showTextOverlayDek:o.bool,slideShowVariation:o.string,socialDescription:o.string,socialIconsToHide:o.array,socialMedia:o.shape(c.propTypes),socialTitle:o.string,sponsorByline:o.string,sponsoredContentHeaderProps:o.shape({campaignUrl:o.string,sponsorLogo:o.shape(y.propTypes),sponsorName:o.string}),stickySocialAnchorBottom:r.propTypes.anchorBottom,stickySocialAnchorTop:r.propTypes.anchorTop,theme:o.oneOf(["standard","inverted","special","live"]),variations:o.shape({assetPosition:o.oneOf(["bottom","middle"]),contentAlign:o.oneOf(["center","left"]),contentPosition:o.oneOf(["above","below","start","end"]),contentStyle:o.oneOf(["card","dense-card","item"]),copyWidth:o.oneOf(["grid","fullbleed"]),hasDivider:o.bool,hasExtraSpaceBetweenSeparator:o.bool,hasInlinePublishDate:o.bool,hasLedeLightbox:o.bool,hasNoRowPadding:o.bool,hasXsNavSpacing:o.bool,leadRailAnchor:o.bool,ledeAlign:o.oneOf(["default","center"]),mediaWidth:o.oneOf(["small","smallrule","grid","fullbleed"]),publishDatePosition:o.oneOf(["top","bottom"]),reducedSpacings:o.bool,shouldUseSmallLede:o.bool,showPodcastButton:o.bool}),venueAwards:o.string},D.defaultProps={authorsTitleBlockPosition:"hidden",business:{address:{},phone:"",email:"",socialMedia:[],link:""},captionStyle:"default",captionWidth:"standard",contentSponsorNames:[],dividerType:"both",externalLinks:[],hasContributorImageBackground:!1,hasDesktopTitleBlockDivider:!1,hasInvertedCaption:!1,hasInvertedLedeBackground:!0,hasLightbox:!1,hasNarrowHeader:!1,hasNativeShareButton:!1,hasSlideshow:!1,hasStaticPositionedAward:!1,hasStickySocialIcons:!0,hideByLine:!1,hideContributors:!1,hideDangerousDek:!1,hideIssueDatePipeSeparator:!1,hideLede:!1,hideLedeCaption:!1,hidePublishDate:!1,hideRubric:!1,hideSocialIconsOnMobile:!1,isLiveStoryType:!1,isStoryLive:!1,metadataVideo:{},persistentAsideAlign:"left",shouldDisplayPremiereDate:!1,shouldEnableNativeShareOnDesktop:!1,shouldShortenHeadline:!1,showContentDivider:!1,showContributorImage:!0,showFullWidthLeadImage:!1,showIssueCopyByDate:!1,showSponsorBlock:!1,showTextOverlayDek:!1,socialIconsToHide:[],stickySocialAnchorBottom:{selector:".page",edge:"bottom"},stickySocialAnchorTop:{selector:"[data-testid='ContentHeaderContainer']",edge:"bottom"},theme:"standard",variations:{contentAlign:"center",contentPosition:"above",hasDivider:!1,hasExtraSpaceBetweenSeparator:!1,hasInlinePublishDate:!1,hasLedeLightbox:!1,hasNoRowPadding:!1,hasXsNavSpacing:!1,leadRailAnchor:!1,ledeAlign:"default",publishDatePosition:"bottom",reducedSpacings:!1,shouldUseSmallLede:!1,showPodcastButton:!1}},D.displayName="ContentHeader",e.exports=D},1430:function(e,t,n){const i=n(0),o=n(157),a=n(8),{createGlobalStyle:r}=n(3),s=n(1461),l=n(48),d=n(1562),c=n(1398),p=n(1397),{useIntl:g}=n(2),u=n(1431).default,m=n(434),h=n(1432),y=n(32),{trackComponent:b}=n(5),{LightboxCloseButtonIcon:f,LightboxSwipe:C,LightboxWrapper:v,LightboxSlidesWrapper:S}=n(513),{getColorToken:w,getZIndex:k}=n(4);let x;const $=r`
  .lightbox {
    height: 100vh;
  }

  .body__lightbox--open {
    overflow: hidden;
  }

  .lightbox__overlay {
    position: fixed;
    top: 0;
    left: 0;
    transition: opacity 0.2s;
    opacity: 0;
    z-index: ${k("hyperstitialLayer")};
    background-color: ${({theme:e})=>w(e,"colors.consumption.lead.standard.background")};

    &.lightbox__overlay--open {
      opacity: 1;

      &.lightbox__overlay--closing {
        opacity: 0;
      }
    }
  }

  .listicle-variation {
    overflow-y: scroll;
  }
`;e.exports={withLightbox:(e,t,n,r,w=!1)=>k=>{const[T,E]=i.useState(-1),{formatMessage:N}=g(),L=e=>n&&E(s(T+e,0,t.length-1)),I=T>-1,B=e=>{var t;"swipeClose"!==e&&("IMG"===(t=e.target).tagName||"SPAN"===t.tagName)||E(void 0)},A={transform:`translate(${"listicle"===r?"0":-100*T/t.length}%)`},P=()=>{x&&(x.style.height=window.innerHeight+"px")};i.useEffect(()=>{b("LightBox",{Component:e,slides:t,hasSlideShow:n,slideShowVariation:r})}),i.useEffect(()=>{const e=l(P,50);return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),i.useEffect(()=>{!I&&x&&p.enableBodyScroll(x)},[I]);const D=(e,t)=>w?{}:t.reduce((t,n)=>Object.assign(Object.assign({},t),{[n]:t=>B(e||t)}),{});return i.createElement(v,null,i.createElement(m.Provider,{value:{expandHandler:e=>E(d(t,{id:e})),isInSlides:e=>c(t,{id:e})}},i.createElement(e,Object.assign({},k))),i.createElement(o,{className:a("lightbox "+(r?r+"-variation":"")),overlayClassName:{base:a("lightbox__overlay"),afterOpen:"lightbox__overlay--open",beforeClose:"lightbox__overlay--closing"},bodyOpenClassName:"body__lightbox--open",isOpen:I,onAfterOpen:()=>{p.disableBodyScroll(x),P()},onRequestClose:()=>{E(void 0)},contentRef:e=>{e&&(x=e)},closeTimeoutMS:200,contentLabel:N(u.contentLabel)},i.createElement(f,{ButtonIcon:y,isIconButton:!0,className:r?r+"-variation-close":"",dataAttrs:{"data-action":"close"},label:N(u.closeButtonIconLabel),onClickHandler:B,role:"button",ariaLabel:N(u.closeButtonIconLabel)}),i.createElement(C,Object.assign({},D("swipeClose",["onSwipeDown","onSwipeUp"]),{onSwipeRight:()=>L(-1),onSwipeLeft:()=>L(1),shouldPreventDefaultEvent:!0}),i.createElement(S,Object.assign({className:r?r+"-variation-slide-wrapper":"",style:A},D("",["onMouseDown","onTouchEnd"])),t.map(e=>i.createElement(h,Object.assign({},e,{className:r?r+"-variation-slide":"",key:e.id}))))),i.createElement($,null)))}}},1431:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});const i=n(2);t.default=i.defineMessages({contentLabel:{id:"Lightbox.ContentLabel",defaultMessage:"Photo Gallery",description:"Lightbox component content label"},closeButtonIconLabel:{id:"Lightbox.CloseButtonIconLabel",defaultMessage:"Close Lightbox",description:"Lightbox component close button icon label"}})},1432:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};const o=n(1),a=n(0),r=n(66),s=n(11),l=n(59),{LightboxSlideWrapper:d,LightboxSlideTopSpacer:c,LightboxSlideImageCaptionOuter:p,LightboxSlideCaptionContainer:g}=n(513),u=e=>{var{caption:t,className:n,credit:o,dangerousCredit:l,dangerousCaption:u}=e,m=i(e,["caption","className","credit","dangerousCredit","dangerousCaption"]);const[h,y]=a.useState("landscape");return a.createElement(d,{className:n,screenOrientation:h},a.createElement(c,null),a.createElement(p,null,a.createElement(s,Object.assign({},m,{contentType:"photo",onAssetLoaded:({width:e,height:t})=>{e<t?y("portrait"):e>t?y("landscape"):e===t&&y("square")}})),a.createElement(g,null,a.createElement(r,{dangerousCaptionText:t||u,dangerousCredit:o||l,hasLinebreak:"portrait"===h}))))};u.propTypes=Object.assign(Object.assign({},l.propTypes),{caption:o.string,credit:o.string,dangerousCaption:o.string,dangerousCredit:o.string}),e.exports=u},1433:function(e,t,n){const i=n(1),o=n(0),{asConfiguredComponent:a}=n(9),r=n(74),s=n(45),l=n(514),d=n(515),c=n(1434),p=n(516),g=n(1438),u=n(125),{ContentHeaderContentDivider:m,ContentHeaderLowerBylineDateBlock:h,ContentHeaderItemCount:y,ContentHeaderHed:b,ContentHeaderTitleBlockWrapper:f,PodcastButtonWrapper:C,PodcastButton:v,PodcastLink:S}=n(177),w=e=>e.length>0?e[0]:null,k=({authorsPosition:e,business:t,bylineVariation:n,contentHeaderCategories:i,contentSponsorNames:a,contributors:r,dangerousHed:s,dividerType:k,externalLinks:x,hasContentDivider:$,hasDesktopTitleBlockDivider:T,hasDivider:E,hasExtraSpaceBetweenSeparator:N,hideIssueDate:L,hideIssueDatePipeSeparator:I,hasNoRowPadding:B,hidePublishDate:A,hideRubric:P,isBusinessContentHeader:D,isLiveStoryType:R,isStoryLive:M,issueDate:O,issueLink:H,itemsCount:_,metadataVideo:W,price:G,podcastPagePrimaryCta:j,publishDate:F,publishDatePosition:V,rubric:U,rubricVariation:z,shouldDisplayLiveIndicator:q,showIssueCopyByDate:K,showItemCount:Y,showPodcastButton:Z,theme:X})=>{const J=$&&"above"!==e,Q="inverted"===X,ee=Q?"outlined":"filled",te=T&&("both"===k||"top"===k);return o.createElement(f,{rowWithTopBorder:te,isBusinessContentHeader:D,"data-testid":"ContentHeaderTitleBlockWrapper",hasDivider:E},W.isLive&&q&&o.createElement(u,null),o.createElement(c,{authorsPosition:e,bylineVariation:n,contributors:r,hasExtraSpaceBetweenSeparator:N,hasNoRowPadding:B,hideIssueDate:L,hideIssueDatePipeSeparator:I,hidePublishDate:A,hideRubric:P,isLiveStoryType:R,isStoryLive:M,issueDate:O,issueLink:H,price:G,publishDate:F,publishDatePosition:V,rubric:U,rubricVariation:z,showIssueCopyByDate:K,sponsorName:w(a),theme:X}),o.createElement(p,Object.assign({},i)),o.createElement(b,{dangerouslySetInnerHTML:{__html:s},"data-testid":"ContentHeaderHed"}),"below"===e&&o.createElement(h,null,o.createElement(l,{bylineVariation:n,contributors:r}),o.createElement(d,{hasExtraSpaceBetweenSeparator:N,hidePublishDate:A,publishDate:F})),Y&&_&&o.createElement(y,Object.assign({},_)),J&&o.createElement(m,null),D&&o.createElement(g,{address:null==t?void 0:t.address,phone:null==t?void 0:t.phone,email:null==t?void 0:t.email,socialMedia:null==t?void 0:t.socialMedia,link:null==t?void 0:t.url}),Z&&j&&o.createElement(C,null,o.createElement(v,{btnStyle:ee,href:j,label:"Start Listening Now",target:"blank",inputKind:"link"}),x.length>0&&o.createElement(S,{isInverted:Q,href:x[0].url,target:"blank"},"Or, choose where to Listen")))};k.propTypes={authorsPosition:i.oneOf(["above","below","hidden"]),business:i.shape({address:i.object,phone:i.string,email:i.string,socialMedia:i.array,url:i.string}),bylineVariation:i.string,contentHeaderCategories:i.shape({title:i.string,tags:i.array,hasCategoryEyebrow:i.boolean}),contentSponsorNames:i.array,contributors:i.object,dangerousHed:i.string.isRequired,dividerType:i.string,externalLinks:i.array,hasContentDivider:i.bool,hasDesktopTitleBlockDivider:i.bool,hasDivider:i.bool,hasExtraSpaceBetweenSeparator:i.bool,hasNoRowPadding:i.bool,hideIssueDate:i.bool,hideIssueDatePipeSeparator:i.bool,hidePublishDate:i.bool,hideRubric:i.bool,isBusinessContentHeader:i.bool,isLiveStoryType:i.bool,isStoryLive:i.bool,issueDate:i.string,issueLink:i.string,itemsCount:i.shape(r.propTypes),metadataVideo:i.shape({isLive:i.bool,premiereDate:i.string,series:i.string,videoLength:i.number}),podcastPagePrimaryCta:i.string,price:i.string,publishDate:i.string,publishDatePosition:i.oneOf(["top","bottom"]),rubric:i.shape(s.propTypes),rubricVariation:i.string,shouldDisplayLiveIndicator:i.bool,showIssueCopyByDate:i.bool,showItemCount:i.bool,showPodcastButton:i.bool,theme:i.oneOf(["standard","inverted","special"])},k.defaultProps={authorsPosition:"hidden",contentHeaderCategories:{hasCategoryEyebrow:!1},contentSponsorNames:[],dividerType:"both",hasDesktopTitleBlockDivider:!1,hasExtraSpaceBetweenSeparator:!1,hasNoRowPadding:!1,hideIssueDate:!0,hideIssueDatePipeSeparator:!1,hidePublishDate:!1,hideRubric:!1,isBusinessContentHeader:!1,metadataVideo:{},publishDatePosition:"bottom",shouldDisplayLiveIndicator:!1,showIssueCopyByDate:!1,showItemCount:!1,showPodcastButton:!1,theme:"standard"},k.displayName="TitleBlock",e.exports=a(k,"TitleBlock"),e.exports.TitleBlock=k},1434:function(e,t,n){const i=n(1),o=n(0),a=n(125),r=n(45),s=n(514),l=n(1435),d=n(515),{ContentHeaderSponsorName:c,ContentHeaderRubricBlock:p,ContentHeaderRubricDateBlock:g,ContentHeaderRubricPrice:u,ContentHeaderRubricContainer:m,ContentHeaderLiveIndicator:h}=n(161),y=({authorsPosition:e,bylineVariation:t,contributors:n,hasExtraSpaceBetweenSeparator:i,hideIssueDate:y,hideIssueDatePipeSeparator:b,hidePublishDate:f,hideRubric:C,isLiveStoryType:v,isStoryLive:S,issueDate:w,issueLink:k,price:x,publishDate:$,publishDatePosition:T,rubric:E,rubricVariation:N,showIssueCopyByDate:L,sponsorName:I})=>{const B=r[N]||r,A=!y&&w&&E,P=("above"===e||"top"===T)&&!I;return v&&S?o.createElement(h,null,o.createElement(a,{hasBackground:!0,isDiscovery:!1,shouldEnableAnimation:!0})):!(E||w||n)||C?null:(E||w||n)&&o.createElement(p,{hasIssueDateAndRubricBlock:A,"data-testid":"ContentHeaderRubric"},"above"===e&&o.createElement(s,{bylineVariation:t,contributors:n}),o.createElement(g,{"data-testid":"ContentHeaderRubricDateBlock"},E&&o.createElement(m,Object.assign({},E,{isVerticalAlign:"above"===e||"top"===T||A,as:B})),x&&o.createElement(u,null,"/ ",x),I&&o.createElement(c,{hasExtraSpaceBetweenSeparator:i,items:[{name:I}]}),P&&o.createElement(d,{hasExtraSpaceBetweenSeparator:i,hidePublishDate:f,publishDate:$})),o.createElement(l,{hideIssueDate:y,hideIssueDatePipeSeparator:b,issueDate:w,issueLink:k,showIssueCopyByDate:L}))};y.propTypes={authorsPosition:i.string,bylineVariation:i.string,contributors:i.object,hasExtraSpaceBetweenSeparator:i.bool,hasNoRowPadding:i.bool,hideIssueDate:i.bool,hideIssueDatePipeSeparator:i.bool,hidePublishDate:i.bool,hideRubric:i.bool,isLiveStoryType:i.bool,isStoryLive:i.bool,issueDate:i.string,issueLink:i.string,price:i.string,publishDate:i.string,publishDatePosition:i.string,rubric:i.shape(r.propTypes),rubricVariation:i.string,showIssueCopyByDate:i.bool,sponsorName:i.string},y.defaultProps={isLiveStoryType:!1,isStoryLive:!1},e.exports=y},1435:function(e,t,n){const i=n(1),o=n(0),{ContentHeaderRubricIssueDate:a}=n(161),r=({hideIssueDate:e,hideIssueDatePipeSeparator:t,issueDate:n,issueLink:i,showIssueCopyByDate:r})=>e||!n?null:o.createElement(a,{name:`${n}${r?" Issue":""}`,url:i,hideIssueDatePipeSeparator:t});r.propTypes={hideIssueDate:i.bool,hideIssueDatePipeSeparator:i.bool,issueDate:i.string,issueLink:i.string,showIssueCopyByDate:i.bool},e.exports=r},1436:function(e,t,n){const i=n(1),o=n(0),{CategoriesWrapper:a,CategoriesTitle:r,CategoriesItemList:s,CategoriesItem:l,CategoriesLink:d}=n(1437),c=({title:e,tags:t})=>o.createElement(a,null,o.createElement(r,null,e),o.createElement(s,null,t.map(e=>o.createElement(l,{key:e.name},o.createElement(d,{href:e.slug},e.name)))));c.propTypes={tags:i.array,title:i.string},c.defaultProps={tags:[]},c.displayName="Categories",e.exports=c},1437:function(e,t,n){const{default:i}=n(3),{BaseText:o,BaseLink:a}=n(10),{calculateSpacing:r,getColorToken:s,getLinkStyles:l}=n(4),d=i.div.withConfig({displayName:"CategoriesWrapper"})`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  margin-top: ${r(.5)};
`,c=i(o).withConfig({displayName:"CategoriesTitle"})`
  margin-right: ${r(1)};
`;c.defaultProps={as:"div",colorToken:"colors.consumption.lead.standard.accreditation",typeIdentity:"typography.definitions.globalEditorial.accreditation-feature"};const p=i.ul.withConfig({displayName:"CategoriesItemList"})`
  margin: 0;
  padding: 0;
  line-height: 1;
`,g=i.li.withConfig({displayName:"CategoriesItem"})`
  display: inline-block;

  &:not(:last-child) {
    &::after {
      margin: 0 ${r(1)};
      color: ${({theme:e})=>s(e,"colors.consumption.lead.standard.divider")};
      content: '|';
    }
  }
`,u=i(a).withConfig({displayName:"CategoriesLink"})`
  ${({theme:e})=>l(e,"colors.consumption.lead.standard.link",null,"global")};
`;u.defaultProps={typeToken:"typography.definitions.globalEditorial.accreditation-core"},e.exports={CategoriesWrapper:d,CategoriesTitle:c,CategoriesItemList:p,CategoriesItem:g,CategoriesLink:u}},1438:function(e,t,n){const i=n(0),o=n(1),{AddressBlockWrapper:a,HeaderSocialInformation:r}=n(177),s=n(233),l=n(234),d=n(1439),c=({address:e,email:t,phone:n,socialMedia:o,link:c})=>{if(!e&&!n&&!t)return null;const{street:p,city:g,state:u,postalCode:m,country:h}=e,y=[];return[p,g,u,m,h].forEach(e=>{e&&y.push(e)}),i.createElement(a,null,e&&i.createElement("div",{"data-testid":"HeaderAddressDetails"},p&&i.createElement("span",{"data-testid":"HeaderAddressStreet"},p),g&&i.createElement("span",{"data-testid":"HeaderAddressCity"},y[0]!==g&&", ",g),u&&i.createElement("span",{"data-testid":"HeaderAddressState"},y[0]!==u&&", ",u),m&&i.createElement("span",{"data-testid":"HeaderAddressPostalCode"},y[0]!==m&&", ",m),h&&i.createElement("span",{"data-testid":"HeaderAddressCountry"},y[0]!==h&&", ",h)),n&&i.createElement("div",{"data-testid":"HeaderAddressPhone",dangerouslySetInnerHTML:{__html:n}}),i.createElement(r,null,t&&i.createElement("a",{"data-testid":"HeaderAddressEmail",href:"mailto:"+t,"aria-label":t,rel:"nofollow noopener noreferrer",target:"_blank"},s()),c&&i.createElement("a",{"data-testid":"HeaderAddressEmail",href:c,"aria-label":c,rel:"nofollow noopener noreferrer",target:"_blank"},d()),(null==o?void 0:o.length)>0&&i.createElement("a",{"data-testid":"HeaderAddressInstagram",href:o[0].handle,"aria-label":o[0].network,rel:"nofollow noopener noreferrer",target:"_blank"},l())))};c.propTypes={address:o.object,email:o.string,link:o.string,phone:o.string,socialMedia:o.array},e.exports=c},1439:function(e,t,n){const i=n(0),{useIntl:o}=n(2),a=n(7).default;e.exports=()=>{const{formatMessage:e}=o();return i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",fill:"none"},i.createElement("title",null,e(a.weblink)),i.createElement("path",{d:"M15.8136 11.1823L17.6157 9.38027C18.3786 8.68488 19.3802 8.31019 20.4122 8.33408C21.4443 8.35797 22.4275 8.77861 23.1574 9.50857C23.8874 10.2385 24.3081 11.2217 24.3319 12.2537C24.3558 13.2858 23.9812 14.2874 23.2858 15.0503L20.7101 17.6169C20.3389 17.9894 19.8978 18.2851 19.412 18.4868C18.9263 18.6885 18.4056 18.7924 17.8796 18.7924C17.3537 18.7924 16.8329 18.6885 16.3472 18.4868C15.8615 18.2851 15.4203 17.9894 15.0491 17.6169M16.8524 21.4857L15.0503 23.2878C14.2874 23.9832 13.2858 24.3578 12.2537 24.334C11.2217 24.3101 10.2385 23.8894 9.50858 23.1595C8.77861 22.4295 8.35797 21.4463 8.33408 20.4143C8.3102 19.3822 8.68488 18.3807 9.38029 17.6177L11.9559 15.0512C12.3271 14.6786 12.7682 14.3829 13.254 14.1812C13.7397 13.9795 14.2604 13.8756 14.7864 13.8756C15.3123 13.8756 15.8331 13.9795 16.3188 14.1812C16.8045 14.3829 17.2457 14.6786 17.6169 15.0512",stroke:"black",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))}},1440:function(e,t,n){const i=n(0),{useIntl:o}=n(2),a=n(1),r=n(517),s=n(1420),l=n(11),d=n(110),c=n(21),p=n(167),g=n(172).default,u=n(518),m=n(436),{ContentHeaderByline:h,ContentHeaderAccreditationSocialIcons:y,ContentHeaderContributorImage:b,ContentHeaderNativeShareButton:f,ContentHeaderBylineContent:C,ContentHeaderDekRewards:v,ContentHeaderAccreditation:S,ContentHeaderDek:w,SummaryPremiereWrapper:k}=n(243),x=({venueAwards:e})=>i.createElement(i.Fragment,null,e&&i.createElement(v,{dangerouslySetInnerHTML:{__html:e}}));x.propTypes={venueAwards:a.string};const $=({bylinesBlock:e,contributorImage:t,dangerousDek:n,dividerType:a,hasContributorImageBackground:l,hasDesktopTitleBlockDivider:c,hasLede:v,hasStickySocialIcons:$,hideByLine:T,hideDangerousDek:E,hideSocialIconsOnMobile:N,hideTopRating:L,isBusinessContentHeader:I,isMiddleImage:B,isSponsoredContent:A,showSponsorBlock:P,sponsorByline:D,sponsoredContentHeaderProps:R,isLiveStoryType:M,metadataVideo:O,publishDateBlock:H,publishDatePosition:_,rating:W,reviewRating:G,shouldShowAuthorsInTitleBlock:j,showContributorImage:F,socialIconsToHide:V,socialMedia:U,socialTitle:z,socialDescription:q,pageUrl:K,shouldDisplayPremiereDate:Y,showNativeShareButton:Z,venueAwards:X,theme:J})=>{const{rating:Q,count:ee}=W||{},te=x({venueAwards:X}),ne={showDek:!E&&n&&!B,showVenueAwards:X,showByline:!j&&!A&&!T,showNativeShareButton:Z,socialMedia:U},{isLive:ie,premiereGap:oe,premiereDate:ae}=O,{formatMessage:re}=o();return i.createElement(S,{className:"content-header__accreditation",shouldShowAuthorsInTitleBlock:j,isBusinessContentHeader:I,hasLede:v,rowWithBottomBorder:c&&("both"===a||"bottom"===a),visibilityInfo:ne,"data-testid":"ContentHeaderAccreditation"},ne.showDek&&i.createElement(w,{dangerouslySetInnerHTML:{__html:n},as:"div"}),Y&&ae&&!ie&&i.createElement(k,null,i.createElement(m,{premiereDate:ae,premiereGap:oe,containerTheme:J,hideTimeStampIcon:!0})),M&&P&&i.createElement(u,{sponsorByline:D,sponsoredContentHeaderProps:Object.assign({},R),theme:J}),te,G&&!L&&i.createElement(s,{rating:G}),ne.showByline&&i.createElement(h,{isLiveStoryType:M,sponsorName:null==R?void 0:R.sponsorName,showSponsorBlock:P},F&&t&&i.createElement(b,Object.assign({},t,{sizes:"66px",hasContributorImageBackground:l,isBusinessContentHeader:I})),i.createElement(C,null,e,"bottom"===_&&H)),Z?i.createElement(f,null,i.createElement(p,{shareData:{url:K,title:z,text:q}})):U&&i.createElement(y,Object.assign({},U,{className:"content-header__social-share",hideSocialIconsOnMobile:N,hasStickySocialIcons:$,socialIconsToHide:V})),!!Q&&!!ee&&i.createElement(d,{averageRatingCount:Math.round(10*Q)/10,hasBorderTop:!0,link:{label:re(g.readReviews),onClick:e=>{e.preventDefault();const t=document.getElementById("reviews"),{top:n}=r(t);window.scrollTo(0,n-56)},url:"#reviews"},totalRatingCount:ee}))};$.propTypes={bylinesBlock:a.node,contributorImage:a.shape(l.propTypes),dangerousDek:a.string,dividerType:a.string,hasContributorImageBackground:a.bool,hasDesktopTitleBlockDivider:a.bool,hasLede:a.bool,hasStickySocialIcons:a.bool,hideByLine:a.bool,hideDangerousDek:a.bool,hideSocialIconsOnMobile:a.bool,hideTopRating:a.bool,isBusinessContentHeader:a.bool,isLiveStoryType:a.bool,isMiddleImage:a.bool,isSponsoredContent:a.bool,metadataVideo:a.shape({isLive:a.bool,premiereDate:a.string,premiereGap:a.number,series:a.string,videoLength:a.number}),pageUrl:a.string,publishDateBlock:a.node,publishDatePosition:a.string,rating:a.shape(d.propTypes),reviewRating:a.number,shouldDisplayPremiereDate:a.bool,shouldShowAuthorsInTitleBlock:a.bool,showContributorImage:a.bool,showNativeShareButton:a.bool,showSponsorBlock:a.bool,socialDescription:a.string,socialIconsToHide:a.array,socialMedia:a.shape(c.propTypes),socialTitle:a.string,sponsorByline:a.string,sponsoredContentHeaderProps:a.shape({campaignUrl:a.string,sponsorLogo:a.shape(l.propTypes),sponsorName:a.string}),theme:a.oneOf(["standard","inverted","special"]),venueAwards:a.string},$.defaultProps={hideByLine:!1,hideDangerousDek:!1,isLiveStoryType:!1,metadataVideo:{},shouldDisplayPremiereDate:!1,showSponsorBlock:!1,socialIconsToHide:[],theme:"standard"},e.exports=$},1441:function(e,t,n){const i=n(1),o=n(8),a=n(0),{useIntl:r}=n(2),s=n(433),l=n(14),d=n(149),{trackComponent:c}=n(5),p=n(1442).default,{ReviewRatingDataLabel:g,ReviewRatingDataWrapper:u,ReviewRatingDataValue:m,ReviewRatingDataExplainer:h,ReviewRatingDataExplainerModal:y,ReviewRatingDataExplainerModalList:b,ReviewRatingDataExplainerModalListRating:f,ReviewRatingDataExplainerModalListDescribe:C}=n(1443),v=({className:e,rating:t,ratingList:n})=>{a.useEffect(()=>{c("ReviewRatingData")},[]);const i=r(),[v,S]=a.useState(!0),w=()=>{S(!v)},k=a.createElement(y,{className:"review-rating-data__rating-explainer-modal"},n.map((e,t)=>a.createElement(b,{key:e},a.createElement(f,{as:"span"},t+1),a.createElement(C,{as:"span"},e))));return a.createElement(u,{className:o("review-rating-data",e)},a.createElement(g,{className:"review-rating-data__label"},i.formatMessage(p.dataLabel)),a.createElement(m,null,t,"/10"),a.createElement(h,null,a.createElement(l.Utility,{isIconButton:!0,ButtonIcon:s,className:"review-rating-data__info-button",label:i.formatMessage(p.buttonLabel),onClickHandler:w,role:"button"}),!v&&a.createElement(d,{className:"alert__tooltip",arrowPosition:52,gaIdentifier:"review-rating-explainer",isVisible:!0,isTooltip:!0,onClose:w,shouldUseArrow:!0},k)))};v.propTypes={className:i.string,rating:i.number,ratingList:i.array},v.defaultProps={rating:0,ratingList:[]},v.displayName="ReviewRatingData",e.exports=v},1442:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});const i=n(2);t.default=i.defineMessages({dataLabel:{id:"ReviewRatingData.DataLabel",defaultMessage:"Rating:",description:"Label for rating"},buttonLabel:{id:"ReviewRatingData.ButtonLabel",defaultMessage:"Open rating explainer",description:"Label for rating explainer button"}})},1443:function(e,t,n){const i=n(3).default,{BaseText:o}=n(10),{calculateSpacing:a,getTypographyStyles:r,getColorToken:s}=n(4),l=i.div.withConfig({displayName:"ReviewRatingDataWrapper"})`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  margin-top: ${a(2)};
  width: 100%;
`,d=i(o).withConfig({displayName:"ReviewRatingDataLabel"})`
  margin-right: ${a(1)};
`;d.defaultProps={as:"span",typeIdentity:"typography.definitions.consumptionEditorial.subhed-aux-primary"};const c=i(o).withConfig({displayName:"ReviewRatingDataValue"})`
  ${({theme:e})=>r(e,"typography.definitions.consumptionEditorial.subhed-aux-primary")}
  color: ${({theme:e})=>s(e,"colors.consumption.body.standard.subhed")};
`,p=i.div.withConfig({displayName:"ReviewRatingDataExplainer"})`
  margin-left: ${a(.5)};

  .review-rating-data__info-button,
  .review-ratingdata__close-button {
    margin: 0;
    border: 0;
    background-color: ${({theme:e})=>s(e,"colors.interactive.base.white")};
    fill: ${({theme:e})=>s(e,"colors.consumption.body.standard.accent")};
    padding: 0;

    &:hover,
    &:focus {
      border: 0;
      background: none;
    }
  }

  .icon {
    padding-right: 5px;
    width: 24px;
    height: 24px;
  }

  .review-rating-data__info-button {
    .button__icon-container,
    .icon {
      padding-right: 0;
      width: 18px;
      height: 18px;
    }
  }

  .icon.icon-close {
    width: 35px;
    height: 35px;
  }
`,g=i.div.withConfig({displayName:"ReviewRatingDataExplainerModal"})`
  padding: ${a(2)} 0 ${a(2)}
    ${a(2)};
`,u=i.div.withConfig({displayName:"ReviewRatingDataExplainerModalList"})`
  display: flex;
  letter-spacing: 0;
`,m=i.span.withConfig({displayName:"ReviewRatingDataExplainerModalListRating"})`
  flex: 1;
  ${({theme:e})=>r(e,"typography.definitions.consumptionEditorial.citation")}
  font-weight: bold;
`,h=i.span.withConfig({displayName:"ReviewRatingDataExplainerModalListDescribe"})`
  flex: 9;
  ${({theme:e})=>r(e,"typography.definitions.consumptionEditorial.citation")}
`;e.exports={ReviewRatingDataLabel:d,ReviewRatingDataWrapper:l,ReviewRatingDataValue:c,ReviewRatingDataExplainer:p,ReviewRatingDataExplainerModal:g,ReviewRatingDataExplainerModalList:u,ReviewRatingDataExplainerModalListRating:m,ReviewRatingDataExplainerModalListDescribe:h}},1444:function(e,t,n){const{default:i}=n(3),{BREAKPOINTS:o}=n(6),{calculateSpacing:a,getColorToken:r,getTypographyStyles:s}=n(4),l=n(11),{SpanWrapper:d}=n(81),c=n(33),p=i.div.withConfig({displayName:"SponsorContentContainer"})`
  margin-top: ${a(3)};
  text-align: center;
  ${d} {
    display: inline-flex;
    margin-top: 0;
    margin-bottom: 0;
    width: 66px;
  }
`,g=i(l).withConfig({displayName:"SponsorImage"})`
  margin-right: auto;
  margin-left: auto;

  img {
    border: 1px solid;
    border-radius: 50%;
    ${({containerTheme:e,theme:t})=>((e,t)=>"inverted"===e||"special"===e?`\n      border-color: ${r(t,"colors.consumption.lead.inverted.divider")};\n    `:`\n    border-color: ${r(t,"colors.consumption.lead.standard.divider")};\n  `)(e,t)}
    width: 64px;
    height: 64px;
  }
`,u=i.div.withConfig({displayName:"SponsoredContent"})`
  ${({theme:e})=>s(e,"typography.definitions.globalEditorial.syndication")}

  display: block;
  margin: ${a(2,"px")} 0 ${a(2,"px")};
  ${({containerTheme:e,theme:t})=>((e,t)=>"inverted"===e||"special"===e?`\n      color: ${r(t,"colors.consumption.lead.inverted.syndication")};\n    `:`\n    color: ${r(t,"colors.consumption.lead.standard.syndication")};\n  `)(e,t)}

  @media (min-width: 0) and (max-width: ${o.md}) {
    margin: ${a(1.5,"px")} 0 ${a(1.5,"px")};
  }
`,m=i(c).withConfig({displayName:"SponsoredContentCampaignLink"})`
  text-decoration: none;
`;e.exports={SponsorContentContainer:p,SponsorImage:g,SponsoredContent:u,SponsoredContentCampaignLink:m}},1445:function(e,t,n){const i=n(1446);e.exports=i},1446:function(e,t,n){const i=n(0),o=n(1),a=n(66),r=n(45),s=n(167),l=n(36),d=n(11),c=n(184),p=n(92),g=n(21),u=n(516),m=n(1447),h=n(125),{useNativeShare:y}=n(94),{TextOverlayLogo:b,TextOverlayLogoLink:f,TextOverlayLogoImage:C,TextOverlayWrapper:v,ImageWrapper:S,Content:w,ContentAlign:k,Hed:x,DekWrapper:$,Dek:T,Figure:E,ContentDivider:N,ContributorImage:L,Accreditation:I,PublishDate:B,DekAndCaption:A,ContentGrid:P}=n(519),D=n(235),R=n(518),M=({background:e,bylineVariation:t,contentAlign:n,contentHeaderCategories:o,contributorImage:c,contributors:p,dangerousDek:M,dangerousHed:O,hasNativeShareButton:H,hideContributors:_,hideDangerousDek:W,hideLedeCaption:G,hidePublishDate:j,hideShareButtons:F,hideRubric:V,isLiveStoryType:U,isStoryLive:z,lede:q,logoImage:K,logoBaseUrl:Y,numberOfLinesToClamp:Z,publishDate:X,rubric:J,shouldUseCutomColorLiveIndicator:Q,showContentDivider:ee,showContributorImage:te,showLogo:ne,showTextOverlayDek:ie,showSponsorBlock:oe,socialDescription:ae,socialMedia:re,socialTitle:se,sponsoredContentHeaderProps:le,sponsorByline:de,ledeCaption:ce})=>{const{showNativeShareButton:pe,pageUrl:ge}=y(H),ue=q&&!G&&(q.caption&&q.caption.trim()||q.credit&&q.credit.trim()||ce);return i.createElement(v,{"data-testid":"ContentHeader"},i.createElement(S,{background:e,contentAlign:n},i.createElement(m,{lede:q}),ne&&K?i.createElement(b,null,i.createElement(f,{href:Y},i.createElement(C,Object.assign({},K)))):null,i.createElement(P,{contentAlign:n},i.createElement(w,null,!V&&(U&&z?i.createElement(k,{contentAlign:n},i.createElement(h,{hasBackground:!0,isDiscovery:!1,shouldEnableAnimation:!0,shouldUseCutomColorLiveIndicator:Q})):J?i.createElement(k,{contentAlign:n,"data-testid":"ContentHeaderRubric"},i.createElement(r.Inverted,Object.assign({},J))):null),i.createElement(k,{contentAlign:n},i.createElement(u,Object.assign({},o))),i.createElement(x,{dangerouslySetInnerHTML:{__html:O},"data-testid":"ContentHeaderHed",contentAlign:n}),!W&&M&&ie&&i.createElement(T,{dangerouslySetInnerHTML:{__html:M},contentAlign:n,"data-testid":"ContentHeaderDek"}),ee&&i.createElement(N,{contentAlign:n}),U&&oe?i.createElement(R,{sponsorByline:de,sponsoredContentHeaderProps:Object.assign({},le)}):null,te&&c&&i.createElement(L,{contentAlign:n},i.createElement(d,Object.assign({},c))),i.createElement(I,{contentAlign:n},p&&!_&&i.createElement(l,{contributors:p,bylineVariation:t,contentAlign:n,isCompact:!1}),!j&&i.createElement(B,{"data-testid":"ContentHeaderPublishDate",contentAlign:n},X)),!F&&(pe?i.createElement(k,{contentAlign:n,bottomSpacing:4},i.createElement(s,{hasDarkBackground:!0,shareData:{url:ge,title:se,text:ae},theme:"inverted"})):re&&i.createElement(k,{contentAlign:n,bottomSpacing:4},i.createElement(g.Footer,Object.assign({},re))))))),(ue||M&&!W)&&i.createElement(A,null,ue&&i.createElement(E,{contentAlign:n},i.createElement(a,{dangerousCaptionText:q.caption,dangerousCredit:U?q.credit||ce:q.credit,topSpacing:0})),!W&&M&&!ie&&i.createElement($,null,i.createElement(D,{isCollapsible:!0,lines:Z},i.createElement(T,{dangerouslySetInnerHTML:{__html:M},contentAlign:n,"data-testid":"ContentHeaderDek"})))))};M.defaultProps={background:"gradient",bylineVariation:"Inverted",contentAlign:"center",hideContributors:!1,hideDangerousDek:!1,hideLedeCaption:!1,isLiveStoryType:!1,isStoryLive:!1,logoBaseUrl:"/",numberOfLinesToClamp:2,shouldUseCutomColorLiveIndicator:!1,showContentDivider:!1,showContributorImage:!0,showSponsorBlock:!1,showTextOverlayDek:!1},M.propTypes={background:o.oneOf(["gradient","solid"]),bylineVariation:o.string,contentAlign:o.oneOf(["center","left"]),contentHeaderCategories:o.shape({title:o.string,tags:o.array}),contributorImage:o.shape(d.propTypes),contributors:o.shape(l.propTypes.contributors),dangerousDek:o.string,dangerousHed:o.string,hasNativeShareButton:o.bool,hideContributors:o.bool,hideDangerousDek:o.bool,hideLedeCaption:o.bool,hidePublishDate:o.bool,hideRubric:o.bool,hideShareButtons:o.bool,isLiveStoryType:o.bool,isStoryLive:o.bool,lede:o.oneOfType([o.shape(d.propTypes),o.shape(c.propTypes),o.shape(p.propTypes)]),ledeCaption:o.string,logoBaseUrl:o.string,logoImage:o.shape(d.propTypes),numberOfLinesToClamp:o.number,publishDate:o.string,rubric:o.shape(r.propTypes),shouldUseCutomColorLiveIndicator:o.bool,showContentDivider:o.bool,showContributorImage:o.bool,showLogo:o.bool,showSponsorBlock:o.bool,showTextOverlayDek:o.bool,socialDescription:o.string,socialMedia:o.shape(g.propTypes),socialTitle:o.string,sponsorByline:o.string,sponsoredContentHeaderProps:o.shape({campaignUrl:o.string,sponsorLogo:o.shape(d.propTypes),sponsorName:o.string})},M.displayName="TextOverlay",e.exports=M},1447:function(e,t,n){const i=n(0),o=n(1),a=n(11),r=n(184),s=n(92),{transformLegacySources:l}=n(94),{Image:d}=n(519),c=({lede:e})=>{if(!e||0===Object.keys(e).length)return null;const t="cnevideo"===e.modelName,n="gallery"===e.modelName,o=l(e);return i.createElement(d,null,!t&&!n&&i.createElement(a,Object.assign({},o)),t&&e.scriptEmbedUrl&&i.createElement(s,{shouldAutoplay:!0,scriptUrl:e.scriptEmbedUrl}),n&&i.createElement(r,Object.assign({},e,{showNoAdsFromParent:!0})))};c.defaultProps={lede:null},c.propTypes={lede:o.oneOfType([o.shape(a.propTypes),o.shape(r.propTypes),o.shape(s.propTypes)])},c.displayName="ImageBlock",e.exports=c},1448:function(e,t,n){e.exports=n(1449)},1449:function(e,t,n){const i=n(8),o=n(1),a=n(0),{useIntl:r}=n(2),s=n(44),l=n(1450).default,{mapSourcesToSegmentedSources:d}=n(130),c=n(1451),p=n(11),g=n(45),u=n(1421),m=n(1452),h=n(36),y=n(145),b=n(21),f=n(110),C=n(517),{formatInfoSliceItems:v}=n(1457),S=n(167),{useNativeShare:w}=n(94),{getThemedBylineVariation:k}=n(248),{trackComponent:x}=n(5),{SplitScreenContentHeaderArtist:$,SplitScreenContentHeaderArtistSlash:T,SplitScreenContentHeaderArtistWrapper:E,SplitScreenContentHeaderByline:N,SplitScreenContentHeaderCaption:L,SplitScreenContentHeaderContributorImage:I,SplitScreenContentHeaderDek:B,SplitScreenContentHeaderDekDown:A,SplitScreenContentHeaderDivider:P,SplitScreenContentHeaderHed:D,SplitScreenContentHeaderMain:R,SplitScreenContentHeaderInfoSlice:M,SplitScreenContentHeaderForMusicReview:O,SplitScreenContentHeaderNativeShareButton:H,SplitScreenContentHeaderPublishDate:_,SplitScreenContentHeaderRating:W,SplitScreenContentHeaderRubric:G,SplitScreenContentHeaderRubricIssueDate:j,SplitScreenContentHeaderSignageRubric:F,SplitScreenContentHeaderSocialShare:V,SplitScreenContentHeaderTitleBlock:U,SplitScreenContentHeaderWrapper:z,SplitScreenContentHeaderScoreBox:q,SplitScreenContentHeaderLeadWrapper:K,SplitScreenContentHeaderArtistLink:Y,SplitScreenContentHeaderGrid:Z,SplitScreenContentHeaderPersistentAside:X,SplitScreenContentHeaderReleaseYear:J}=n(246),{SplitScreenContentHeaderSocialIcons:Q}=n(441),{doHideBookmark:ee,doDisplayBookmark:te}=n(437),ne=({contributors:e,contributorsPosition:t,hasInvertedBylineLink:n,hideContributors:i,hideIssueDate:o,hidePublishDate:r,issueDate:s,issueDatePostfix:l,issueLink:d,publishDate:c,publishDatePosition:p,rubric:u,rubricVariation:m,hideRubric:h,themedBylineVariation:y})=>{const b=g[m]||g,f=g.Item,C=e&&0!==Object.keys(e).length;return a.createElement("div",{"data-testid":"ContentHeaderRubric"},C&&!i&&"top"===t&&a.createElement(N,{contributors:e,bylineVariation:y,isCompact:!1,contributorsPosition:t,hasInvertedBylineLink:n}),u&&!h&&a.createElement(G,Object.assign({as:b},u)),!o&&s&&a.createElement(j,{as:f,name:l?`${s}${l}`:s,url:d}),!r&&c&&"top"===p&&a.createElement(_,{"data-testid":"ContentHeaderPublishDate"},c))};ne.propTypes={contributors:o.object,contributorsPosition:o.oneOf(["top","bottom"]),hasInvertedBylineLink:o.bool,hideContributors:o.bool,hideIssueDate:o.bool,hidePublishDate:o.bool,hideRubric:o.bool,issueDate:o.string,issueDatePostfix:o.string,issueLink:o.string,publishDate:o.string,publishDatePosition:o.oneOf(["top","bottom"]),rubric:o.shape(g.propTypes),rubricVariation:o.string,themedBylineVariation:o.string};const ie=({signage:e,shouldDisplaySignage:t})=>e&&t?a.createElement("div",{"data-testid":"ContentHeaderRubricSignage"},a.createElement(F,{name:e})):null;ie.propTypes={shouldDisplaySignage:o.bool,signage:o.string};const oe=(e,t,n,i,o)=>i&&a.createElement(V,Object.assign({},i,{hasSocialShare:!0,hasStickySocialIcons:e,hideSocialIconsOnMobile:t,socialIconsToHide:n,socialMediaPositionInMobile:o})),ae=(e,t)=>((null==t?void 0:t.caption)||(null==t?void 0:t.credit))&&!e&&a.createElement(Z,null,a.createElement(L,{dangerousCaptionText:t.caption,dangerousCredit:t.credit})),{useRef:re,useEffect:se}=a,le=({artists:e,brandSlug:t,captionPosition:o,className:p,contentAlign:g,contributorImage:h,dangerousHed:y,dangerousDek:b,hasContributorImageBackground:f,hasInvertedBylineLink:L,hasMargin:G,hasStickySocialIcons:j,hasNativeShareButton:F,hideContributorTitle:V,hideContributors:le,hideDangerousDek:de,hideIssueDate:ce,hidePublishDate:pe,hideRubric:ge,socialIconsToHide:ue,hideSocialIconsOnMobile:me,hideCaption:he,imageAlignment:ye,infoSliceFields:be,isInset:fe,isMusicReview:Ce,isTextRight:ve,isTrackReview:Se,issueDate:we,issueDatePostfix:ke,issueLink:xe,isSplitScreenArtistLarge:$e,rubric:Te,rubricVariation:Ee,contributors:Ne,contributorsPosition:Le,bylineVariation:Ie,persistentAsideAlign:Be,publishDate:Ae,publishDatePosition:Pe,lede:De,ledeContentAlign:Re,musicRating:Me,shouldEnableNativeShareOnDesktop:Oe,shouldFitToViewport:He,showBookmarked:_e,shouldHeaderFitToViewport:We,showContentDivider:Ge,showContributorImage:je,showHeaderDivider:Fe,socialDescription:Ve,socialMedia:Ue,socialMediaPositionInMobile:ze,socialTitle:qe,stickySocialAnchorBottom:Ke,stickySocialAnchorTop:Ye,theme:Ze,rating:Xe,signage:Je,shouldDisplaySignage:Qe,showReviewLink:et,textAlign:tt})=>{a.useEffect(()=>{x("SplitScreenContentHeader")},[]);const nt=k({bylineVariation:Ie,theme:Ze}),{showNativeShareButton:it,pageUrl:ot}=w(F,Oe),{score:at,isBestNewMusic:rt,isBestNewReissue:st}=Me,lt=v(be),dt=null==be?void 0:be.releaseYear,ct=(e=>{if(!e)return;const t=Object.assign({},e);return new Set(["photo","cartoon"]).has(e.contentType)&&!e.segmentedSources&&e.sources&&(t.segmentedSources=d(e.sources)),t})(De),pt="cnevideo"===(null==De?void 0:De.modelName),gt=!De||pt,{rating:ut,count:mt}=Xe||{},{BookmarkIcon:ht}=n(150),yt=Ce?O:R,{formatMessage:bt}=r(),ft={},Ct=re();"belowImage"===o&&(ft.captionCredit=ae(he,De)),"inLeadWrapperBelowImg"===ze&&(ft.socialMedia=oe(j,me,ue,Ue,ze));const vt=()=>{(e=>{const t=e.current&&e.current.offsetTop,n=window.pageYOffset;return Math.abs(n)>Math.abs(t)})(Ct)?te():ee()};return se(()=>{const e=s(vt,100);return window.addEventListener("scroll",e,{passive:!0}),()=>{window.removeEventListener("scroll",e)}}),a.createElement(z,{className:i("content-header",{[p]:p}),contentHeaderTheme:Ze,isFullWidth:gt,isTextRight:ve,isInset:fe,imageAlignment:ye,ledeContentAlign:Re,shouldFitToViewport:!He,isMusicReview:Ce,"data-testid":"SplitScreenContentHeaderWrapper",showHeaderDivider:Fe,socialMediaPositionInMobile:ze,shouldHeaderFitToViewport:We,captionPosition:o,hidePublishDate:pe,mediaContentType:(null==ct?void 0:ct.contentType)||"",hasInvertedBylineLink:L,hasMargin:G},a.createElement(yt,{shouldFitToViewport:!He},a.createElement(U,{contentAlign:g,textAlign:tt},a.createElement(ie,{signage:Je,shouldDisplaySignage:Qe}),a.createElement(ne,Object.assign({},{contributors:Ne,contributorsPosition:Le,rubric:Te,rubricVariation:Ee,hideContributors:le,hideIssueDate:ce,hidePublishDate:pe,issueDate:we,issueDatePostfix:ke,issueLink:xe,publishDate:Ae,publishDatePosition:Pe,hideRubric:ge,hasInvertedBylineLink:L,themedBylineVariation:nt})),a.createElement(D,{dangerouslySetInnerHTML:{__html:y},"data-testid":"ContentHeaderHed",isMusicReview:Ce}),Ge&&a.createElement(P,{ledeContentAlign:Re}),e&&Ce?a.createElement(E,{isMusicReview:Ce},0===e.length&&a.createElement($,{isSplitScreenArtistLarge:$e},bt(l.variousArtists)),e.map((t,n)=>a.createElement(a.Fragment,{key:n},a.createElement(Y,{key:n,href:"/".concat(t.uri)},a.createElement($,{dangerouslySetInnerHTML:{__html:t.name},isSplitScreenArtistLarge:$e})),!(n===e.length-1)&&a.createElement(T,{dangerouslySetInnerHTML:{__html:" / "},isSplitScreenArtistLarge:$e})))):!de&&b&&a.createElement(B,{dangerouslySetInnerHTML:{__html:b}}),je&&h&&a.createElement(I,Object.assign({},h,{sizes:"66px",hasContributorImageBackground:f})),Ne&&!le&&"bottom"===Le&&a.createElement(N,{contributors:Ne,bylineVariation:nt,isCompact:!1,hasInvertedBylineLink:L}),!pe&&"bottom"===Pe&&a.createElement(_,{"data-testid":"ContentHeaderPublishDate"},Ae),(Ce||Se)&&dt&&a.createElement(J,{"data-testid":"SplitScreenContentHeaderReleaseYear"},dt),_e&&a.createElement("div",{ref:Ct},a.createElement(ht,{bookmarkTrackingType:"header",link:{label:"Save story",url:"#",network:"bookmark",behavior:"bookmark"},theme:"standard",type:"thin",isUrlBookmark:!0,isBookmarkButton:!0})),!!ut&&!!mt&&a.createElement(W,{averageRatingCount:Math.round(10*ut)/10,brandSlug:t,hasBorderTop:!0,link:et&&{label:bt(l.ratingLinkLabel),onClick:e=>{e.preventDefault();const t=document.getElementById("reviews"),{top:n}=C(t);null==t||t.focus(),window.scrollTo(0,n-56)},url:"#reviews"},totalRatingCount:mt}),it?a.createElement(H,null,a.createElement(S,{shareData:{url:ot,title:qe,text:Ve}})):oe(j,me,ue,Ue,ze)),a.createElement(K,{isMusicReview:Ce},a.createElement(c,Object.assign({lede:ct,isCNEVideo:pt},ft)),Ce&&a.createElement(q,null,a.createElement(m,{rating:at,isBestNewMusic:rt,isBestNewReissue:st,isTrackReview:Se})))),"belowHeader"===o&&ae(he,De),Ne&&le&&a.createElement(N,{contributors:Ne,bylineVariation:V?"Item":Ie,isCompact:!1,isMusicReview:Ce}),lt.length>0&&a.createElement(Z,null,a.createElement(M,null,a.createElement(u,{items:lt,isMusicReview:Ce}))),!de&&Ce&&b&&a.createElement(Z,null,a.createElement(A,{dangerouslySetInnerHTML:{__html:b}})),!it&&j&&Ue&&a.createElement(X,{align:Be,attributes:{shouldFadeOnMove:!0},anchorBottom:Ke,anchorTop:Ye,fullWidthSelector:".container--full, .full-bleed-ad, .callout--feature-large"},a.createElement(Q,Object.assign({},Ue,{bookmarkTrackingType:"sticky",className:"social-icons--share"}))))};le.propTypes={artists:o.array,brandSlug:o.string,bylineVariation:o.string,captionPosition:o.oneOf(["belowHeader","belowImage"]),className:o.string,contentAlign:o.oneOf(["center","left"]),contributorImage:o.shape(p.propTypes),contributors:o.shape(h.propTypes.contributors),contributorsPosition:o.oneOf(["top","bottom"]),dangerousDek:o.string,dangerousHed:o.string.isRequired,hasContributorImageBackground:o.bool,hasInvertedBylineLink:o.bool,hasMargin:o.bool,hasNativeShareButton:o.bool,hasStickySocialIcons:o.bool,hideCaption:o.bool,hideContributors:o.bool,hideContributorTitle:o.bool,hideDangerousDek:o.bool,hideIssueDate:o.bool,hidePublishDate:o.bool,hideRubric:o.bool,hideSocialIconsOnMobile:o.bool,imageAlignment:o.oneOf(["center","top","left","right","bottom"]),infoSliceFields:o.object,isInset:o.bool,isMusicReview:o.bool,isSplitScreenArtistLarge:o.bool,issueDate:o.string,issueDatePostfix:o.string,issueLink:o.string,isTextRight:o.bool,isTrackReview:o.bool,lede:o.oneOfType([o.shape(p.propTypes)]),ledeContentAlign:o.oneOf(["left","center"]),musicRating:o.object,persistentAsideAlign:o.oneOf(["left","left-lead-asset"]),publishDate:o.string.isRequired,publishDatePosition:o.oneOf(["top","bottom"]),rating:o.shape(f.propTypes),rubric:o.shape(g.propTypes),rubricVariation:o.string,shouldDisplaySignage:o.bool,shouldEnableNativeShareOnDesktop:o.bool,shouldFitToViewport:o.bool,shouldHeaderFitToViewport:o.bool,showBookmarked:o.bool,showContentDivider:o.bool,showContributorImage:o.bool,showHeaderDivider:o.bool,showReviewLink:o.bool,signage:o.string,socialDescription:o.string,socialIconsToHide:o.array,socialMedia:o.shape(b.propTypes),socialMediaPositionInMobile:o.oneOf(["inLeadWrapperBelowImg","inTitleBlock"]),socialTitle:o.string,stickySocialAnchorBottom:y.propTypes.anchorBottom,stickySocialAnchorTop:y.propTypes.anchorTop,textAlign:o.oneOf(["left","center"]),theme:o.oneOf(["standard","inverted","special"])},le.defaultProps={brandSlug:"",captionPosition:"belowHeader",contentAlign:"center",contributorsPosition:"bottom",hasContributorImageBackground:!1,hasInvertedBylineLink:!1,hasMargin:!1,hasStickySocialIcons:!0,hideCaption:!1,hideContributorTitle:!1,hideContributors:!1,hideDangerousDek:!1,hidePublishDate:!1,hideRubric:!1,hideSocialIconsOnMobile:!1,imageAlignment:"center",isInset:!1,isTextRight:!1,issueDatePostfix:" Issue",ledeContentAlign:"left",musicRating:{score:null},persistentAsideAlign:"left",publishDatePosition:"bottom",shouldEnableNativeShareOnDesktop:!1,shouldFitToViewport:!0,shouldHeaderFitToViewport:!1,showBookmarked:!1,showContentDivider:!1,showContributorImage:!0,showHeaderDivider:!0,showReviewLink:!0,socialIconsToHide:[],socialMediaPositionInMobile:"inTitleBlock",stickySocialAnchorBottom:{selector:".page",edge:"bottom"},stickySocialAnchorTop:{selector:"[data-testid='SplitScreenContentHeaderWrapper']",edge:"bottom"},textAlign:"center",theme:"standard"},le.displayName="SplitScreenContentHeader",e.exports=le},1450:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});const i=n(2);t.default=i.defineMessages({ratingLinkLabel:{id:"SplitScreenContentHeader.RatingLinkLabel",defaultMessage:"Read Reviews",description:"SplitScreenContentHeader component Rating Link Label"},variousArtists:{id:"SplitScreenContentHeader.VariousArtists",defaultMessage:"Various Artists",description:"SplitScreenContentHeader component various artists text"}})},1451:function(e,t,n){const i=n(0),o=n(1),a=n(92),{SplitScreenContentHeaderLede:r,SplitScreenContentHeaderLedeBlock:s}=n(246),l=({captionCredit:e,className:t,isCNEVideo:n,lede:o,socialMedia:l})=>o?n?o.scriptEmbedUrl?i.createElement(s,{"data-testid":"ContentHeaderLeadAsset",className:t},i.createElement(a,{hasMargins:!1,shouldAutoplay:!0,scriptUrl:o.scriptEmbedUrl})):null:i.createElement(s,{"data-testid":"ContentHeaderLeadAsset",className:t},i.createElement(r,Object.assign({},o)),e,l):null;l.propTypes={captionCredit:o.object,className:o.string,isCNEVideo:o.bool,lede:o.object,socialMedia:o.object},e.exports=l},1452:function(e,t,n){e.exports=n(1453)},1453:function(e,t,n){const i=n(0),{useIntl:o}=n(2),a=n(1),{BestNewMusicArrows:r}=n(1454),s=n(1455).default,l=n(77),{trackComponent:d}=n(5),{BestNewMusicText:c,Rating:p,ScoreBoxWrapper:g,ScoreCircle:u}=n(520),m=n(65),{default:h}=n(1456),y=({rating:e,isBestNewMusic:t,isBestNewReissue:n,palette:a,isTrackReview:y})=>{i.useEffect(()=>{d("ScoreBox")},[]);const{formatMessage:b}=o(),[f,C]=m(),v=y&&t;if(y&&!t)return null;const S=e<10?Number(e).toFixed(1):e,w=t||n,k=t&&n;return i.createElement(l,{palette:a},i.createElement(g,{ref:f},(h.isAccessNegotiationEnabled&&C||!h.isAccessNegotiationEnabled)&&i.createElement(i.Fragment,null,w&&i.createElement(r,{isBestBoth:k,isBest:w}),!v&&i.createElement(u,{isBest:w,isBestBoth:k},i.createElement(p,{isBest:w,isBestBoth:k},S)),w&&i.createElement(c,{isBestBoth:k,isBest:w},!v&&t&&i.createElement("div",null," ",b(s.BestNewMusic)," "),!v&&n&&i.createElement("div",null," ",b(s.BestNewReissue)),v&&i.createElement("div",null," ",b(s.BestNewTrack))))))};y.propTypes={isBestNewMusic:a.bool,isBestNewReissue:a.bool,isTrackReview:a.bool,palette:a.oneOf(["standard","inverted"]),rating:a.number},y.defaultProps={isBestNewMusic:!1,isBestNewReissue:!1,palette:"standard"},e.exports=y},1454:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.BestNewMusicArrows=void 0;const i=n(0),o=n(1),{SvgWrapper:a,SvgStyle:r}=n(520);t.BestNewMusicArrows=e=>i.createElement(a,{theme:e.theme,isBestBoth:e.isBestBoth,isBest:e.isBest},i.createElement(r,{x:"0px",y:"0px",viewBox:"0 0 80 40"},i.createElement("g",null,i.createElement("polyline",{points:"25.4,14.7 33.9,14.7 33.9,39.8 46.3,39.8 46.3,14.7 54.8,14.7 40.1,0 25.4,14.7   "}),i.createElement("polyline",{points:"50.6,40 80,40 65.2,25.4 50.6,40    "}),i.createElement("polyline",{points:"0,40 29.4,40 14.7,25.4 0,40    "})))),t.BestNewMusicArrows.propTypes={isBest:o.bool,isBestBoth:o.bool,theme:o.string}},1455:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});const i=n(2);t.default=i.defineMessages({BestNewMusic:{id:"ScoreBox.BestNewMusic",defaultMessage:"Best New Music",description:"Best New Music"},BestNewReissue:{id:"ScoreBox.BestNewReissue",defaultMessage:"Best New Reissue",description:"Best New Reissue"},BestNewTrack:{id:"ScoreBox.BestNewTrack",defaultMessage:"Best New Track",description:"Best New Track"}})},1456:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.AwsRegion=void 0;const i=n(1390),{AWS_REGION:o,CNE_GRAPHQL_URL:a,CNE_PLAYER_DOMAIN:r,CONFIG_SERVICE_URL:s,CONFIG_SERVICE_WS_URL:l,DOMAIN_LOGIN_ENABLED:d,DISABLE_MEMORY_CACHE:c,EPI_WEB_SERVICES_URL:p,LOCAL_USERPLATFORM_URL:g,MARTECH_LIBRARY_URL:u,PRELOAD_CONFIGS:m,REDIS_HOSTNAME:h,SECRETS_BACKEND:y,SENTRY_DSN:b,SWG_ENABLED:f,VAULT_TOKEN:C}=Object({ENABLE_LIVE_RELOAD:"false",NODE_ENV:"production"}),v=a||"http://api.cnevids.com/graphql",S=Object({ENABLE_LIVE_RELOAD:"false",NODE_ENV:"production"}).APP_ENV||i.Env.staging,w=Object({ENABLE_LIVE_RELOAD:"false",NODE_ENV:"production"}).GP_CLUSTER||"gp-prod-na-0";function k(e){return e[S]}const x=r||k({ci:"https://player.cnevids.com",staging:"https://player-backend-qa.cnevids.com",production:"https://player.cnevids.com"}),$=w.replace("nonprod","prod"),T=s||k({ci:`https://config-service.${$}.conde.digital/graphql`,staging:`https://config-service.${$}.conde.digital/graphql`,production:`https://config-service.${$}.conde.digital/graphql`}),E=l||k({ci:`wss://config-service.${$}.conde.digital/graphql-ws`,staging:`wss://config-service.${$}.conde.digital/graphql-ws`,production:`wss://config-service.${$}.conde.digital/graphql-ws`}),N=k({production:"a61a3c7a-01d9-4175-8ab8-7171949de605",staging:"0438259f-2d71-419c-b8da-33106659c133",ci:"13f49bf8-68fb-4214-8a01-6bd6b5239540"}),L="true"===f,I="true"===d,B=p||k({ci:"https://origin-stag-services.epicurious.com/api/",staging:"https://origin-stag-services.epicurious.com/api/",production:"https://origin-services.epicurious.com/api/"}),A=k({production:"https://id.condenast.com",staging:"https://staging-id.condenast.com",ci:"https://ci-id.condenast.com"}),P=u||k({ci:"https://stag-martech.condenastdigital.com/lib/martech.js",staging:"https://stag-martech.condenastdigital.com/lib/martech.js",production:"https://martech.condenastdigital.com/lib/martech.js"}),D=k({production:{endpoint:"https://live.content.conde.digital/graphql",region:"us-east-1",authentication_type:"API_KEY",api_key:"da2-mxut7d55nfcetc3tfkdc6d4pna"},staging:{endpoint:"https://live.content-nonprod.conde.digital/graphql",region:"us-east-1",authentication_type:"API_KEY",api_key:"da2-sx7pr6xp3ndn3fgwfbvtr3ajgu"},ci:{endpoint:"",region:"us-east-1",authentication_type:"API_KEY",api_key:""}});!function(e){e.NA="us-east-1",e.EU="eu-central-1",e.AP="ap-northeast-1"}(t.AwsRegion||(t.AwsRegion={}));const R="true"===m||!(S===i.Env.staging&&"dev"===Object({ENABLE_LIVE_RELOAD:"false",NODE_ENV:"production"}).BUILD_ENV),M={accessNegotiationS3Url:"https://access-negotiation.s3.amazonaws.com",awsRegion:o,cneGraphqlUrl:v,cnePlayerBase:x,configServiceUrl:T,configServiceWsUrl:E,env:S,epiWebServicesUrl:B,disableMemoryCache:"true"===c,formationOrgAppId:N,isAccessNegotiationEnabled:"production"!==S,isDomainSigninSwitchEnabled:I,isSwgEnabled:L,liveStoriesAppSync:D,martechLibraryUrl:P,oidcProviderConnectionUrl:A,preloadConfigs:R,redisHostname:h,secretsBackend:y||"vault",sentryDSN:b,userPlatformLocalHost:g,vaultBasePath:"secret/colab/multi-tenant/"+S,vaultToken:C};t.default=M},1457:function(e,t){const n={genre:"Genre:",label:"Label:",reviewDate:"Reviewed:"};e.exports={formatInfoSliceItems:e=>{if(!e)return[];const t=[];return Object.keys(e).forEach(i=>{e[i]&&e[i].length&&n[i]&&t.push({key:n[i],value:e[i]})}),t}}},146:function(e,t,n){const{default:i,css:o}=n(3),{calculateSpacing:a,getColorStyles:r,getTypographyStyles:s}=n(4),{BaseText:l}=n(10),{BREAKPOINTS:d}=n(6),c=n(11),p=i.header.withConfig({displayName:"UtilityLedeHeader"})`
  ${({contentAlign:e})=>e?(e=>`\n  text-align: ${e};\n`)(e):""}
  ${({theme:e,hasBackground:t})=>t?(e=>`\n  ${r(e,"background-color","colors.discovery.body.white.background")};\n`)(e):""}
  ${({hasImage:e})=>e?`\n      display: grid;\n      grid-template-columns: repeat(8, 1fr);\n      grid-column-gap: 1.5rem;\n      align-items: center;\n      padding: ${a(12)} 0 ${a(100)} 0;\n      @media  (min-width: 0) and (max-width: ${d.md}){\n          grid-gap: ${a(2)};\n          grid-template-columns: repeat(4, 1fr);\n          padding: ${a(5)} 0 ${a(5)} 0;\n          justify-items: center;\n      }\n      `:""}
  ${({alternativeStyle:e})=>e?`\n    grid-gap: ${a(2)} 0;\n    @media (min-width: 0) and (max-width: ${d.md}){\n      grid-gap: ${a(4)} 0;\n    }\n    `:""}
`,g=i.div.withConfig({displayName:"UtilityLedeWrapper"})`
  grid-auto-flow: row;
  grid-column: 4 / span 5;

  @media (min-width: 0) and (max-width: ${d.md}) {
    grid-gap: ${a(2)} 0;
    grid-column: 1 / span 4;
  }

  ${e=>!0===e.alternativeStyle?`\n        grid-gap: ${a(2)} 0;\n        @media (min-width: 0) and (max-width: ${d.md}){\n            grid-gap: ${a(4)} 0;\n        }\n        `:""}
`,u=i(l).withConfig({displayName:"UtilityLedeHedText"})`
  ${e=>!0===e.alternativeStyle?`\n        ${({theme:e})=>r(e,"color","colors.discovery.lead.primary.hed")};\n        ${({theme:e})=>s(e,"typography.definitions.discovery.page-hed-section")};\n        `:""}
  ${e=>!0===e.hasImage?"\n        margin: 0;\n        ":`margin: 0 0 ${a(2,"px")};`}

  ${e=>!0===e.hasInverted&&o`
      ${({theme:e})=>r(e,"color","colors.discovery.body.white.context-texture")};
      ${({theme:e})=>s(e,"typography.definitions.discovery.hed-core-primary")};
      line-height: 25px;
      font-size: 20px;
    `}
`;u.defaultProps={as:"h1",colorToken:"colors.discovery.body.white.heading",typeIdentity:"typography.definitions.discovery.hed-break-out"};const m=i(l).withConfig({displayName:"UtilityLedeDekText"})`
  a {
    ${({theme:e})=>r(e,"color","colors.discovery.body.white.accent")};
  }

  p {
    margin: 0; /* overwrite native browser margins for paragraph tags */
  }
  ${e=>!0===e.alternativeStyle?`\n        ${({theme:e})=>r(e,"color","colors.discovery.lead.primary.description")};\n        ${({theme:e})=>s(e,"typography.definitions.discovery.description.feature")};\n        a {\n          ${({theme:e})=>r(e,"color","colors.discovery.lead.primary.description")};\n        }\n        `:""}

  ${e=>!0===e.hasImage?"\n        margin: 0;\n        ":`margin: ${a(2,"px")} 0 0;`}

  @media (min-width: 0) and (max-width: ${d.md}) {
    grid-row: 2;
  }
`;m.defaultProps={as:"h2",colorToken:"colors.discovery.body.white.description",typeIdentity:"typography.definitions.consumptionEditorial.body-core"};const h=i(c).withConfig({displayName:"UtilityLedeImage"})`
  grid-column: 1 / span 3;
  @media (min-width: 0) and (max-width: ${d.md}) {
    grid-column: 2 / span 2;
    grid-row: 1;
  }
  ${e=>!0===e.hasImage?`\n      @media (min-width: 0) and (max-width: ${d.md}){\n        padding-bottom: 0;\n      }\n      `:""}
`;e.exports={UtilityLedeHeader:p,UtilityLedeWrapper:g,UtilityLedeHedText:u,UtilityLedeDekText:m,UtilityLedeImage:h}},1461:function(e,t,n){var i=n(1469),o=n(1561);e.exports=function(e,t,n){return void 0===n&&(n=t,t=void 0),void 0!==n&&(n=(n=o(n))==n?n:0),void 0!==t&&(t=(t=o(t))==t?t:0),i(o(e),t,n)}},1468:function(e,t,n){const{asConfiguredComponent:i}=n(9),{asThemedComponent:o}=n(30),a=n(1418);e.exports=o(i(a,"ContentHeader"))},1469:function(e,t){e.exports=function(e,t,n){return e==e&&(void 0!==n&&(e=e<=n?e:n),void 0!==t&&(e=e>=t?e:t)),e}},1478:function(e,t,n){e.exports=n(1490)},148:function(e,t,n){const i=n(3).default,{BaseText:o}=n(10),{calculateSpacing:a,getColorStyles:r}=n(4),{BREAKPOINTS:s}=n(6),l=i.div.withConfig({displayName:"ToggleChipListWrapper"})`
  ${({hasToggleGridColor:e,theme:t})=>e&&`\n  ${r(t,"background-color","colors.background.light")};\n  border-bottom:${a(4)} solid ;\n  ${r(t,"border-color","colors.background.light")};\n  `}
  display: flex;
  flex-direction: column;
  ${({contentAlign:e})=>"left"===e?"align-items: flex-start":"center"===e?"align-items: center":"right"===e&&"align-items: flex-end"}
`,d=i(o).withConfig({displayName:"LabelText"})`
  margin: 0 0 ${a(1)};

  ${({hasIncreasedBottomMargin:e})=>e&&` \n    margin: 0 0 ${a(2)};\n  `}

  ${({hasLargeLabel:e})=>e&&" \n    font-size: 1rem;\n    letter-spacing: 1px;\n  "}

  ${({fullPageTheme:e,theme:t})=>"inverted"===e?r(t,"color","colors.interactive.base.white"):""}
`;d.defaultProps={as:"div",colorToken:"colors.interactive.base.black",typeIdentity:"typography.definitions.utility.label"};const c=i.div.withConfig({displayName:"ListWrapper"})`
  display: flex;
  flex-direction: row;
  padding: 0 ${a(3)};
  width: 100%;
  gap: ${a(1.5)};

  ${({hasNoHorizontalScroll:e})=>e&&" &::-webkit-scrollbar \n    {\n      display: none;\n    }"}

  ${({layout:e})=>"wrap"===e?"flex-wrap: wrap;":"overflow-x: auto;"}
  
  ${({contentAlign:e,layout:t})=>{if("nowrap"===t)return"";switch(e){case"left":return"justify-content: flex-start;";case"center":return"justify-content: center;";case"right":return"justify-content: flex-end;";default:return""}}}
  
  ${({hasToggleGridColor:e})=>e&&`--grid-margin: ${a(3)};`}
`,p=i.div.withConfig({displayName:"ListItemWrapper"})`
  ${({contentAlign:e,layout:t,hasSpacing:n})=>{if("wrap"===t)return"";let i=e;switch(n&&(i="centerWithPadding"),i){case"center":return"\n        &:first-child {\n          margin-left: auto;\n        }\n\n        &:last-child {\n          margin-right: auto;\n        }\n      ";case"right":return"\n        &:first-child {\n          margin-left: auto;\n        }\n      ";case"centerWithPadding":return`\n        @media (min-width: ${s.md}) {\n          &:first-child {\n            margin-left: auto;\n          }\n\n          &:last-child {\n            margin-right: auto;\n          }\n        }\n\n        @media (min-width: ${s.sm}) and (max-width: ${s.md}) {\n          &:first-child {\n            margin-left: 1.5rem;\n          }\n  \n          &:last-child {\n            margin-right: 1.5rem;\n          }\n        }          \n        `;default:return""}}}
`,g=i(o).withConfig({displayName:"HelperText"})`
  margin: ${a(1)} 0 0;
`;g.defaultProps={as:"div",colorToken:"colors.interactive.base.dark",typeIdentity:"typography.definitions.utility.assistive-text"},e.exports={ToggleChipListWrapper:l,LabelText:d,ListWrapper:c,ListItemWrapper:p,HelperText:g}},1490:function(e,t,n){const i=n(1),o=n(0),{connect:a}=n(20),{useIntl:r}=n(2),s=n(1491).default,l=n(26).default,d=n(32),c=n(11),{googleAnalytics:p}=n(12),{asConfiguredComponent:g}=n(9),{doCloseModal:u}=n(153),{trackComponent:m}=n(5),{SignInModalBaseWrapper:h,SignInModalCloseButton:y,SignInModalButtons:b,SignInModalDek:f,SignInModalHed:C,SignInModalEmail:v,SignInModalSignInSection:S,SignInModalSpotIllustration:w,SignInModalSignInLink:k,SignInModalHedSpanTag:x}=n(1492),$=({analyticsType:e,authSource:t,brandIdentityAssets:n,className:i,closeButtonCallback:a,dangerousDek:g,dangerousHed:$,dangerousHedSpanTag:T,hasLargeMargins:E,hasRoundedCornersButtons:N,isVisible:L,redirectURL:I,source:B,type:A})=>{o.useEffect(()=>{m("SignInModal")},[]);const P=t=>p.emitGoogleTrackingEvent(t,{signInModalType:e});L&&P("signin-modal-impression");let D=`${l.oidcAuth}?redirectURL=${encodeURIComponent(I)}&skipAccountLink=true&authSource=${t}`;B&&(D=`${D}&source=${B}`);const R=n.signInModalAsset[A]||n.signInModalAsset.default,{formatMessage:M}=r();return o.createElement(h,{className:i,hasLargeMargins:E,closeTimeoutMS:400,isOpen:L},o.createElement(y,{isIconButton:!0,ariaLabel:M(s.closeButtonAriaLabel),label:M(s.closeButtonLabel),onClickHandler:()=>{u(),P("signin-modal-close"),a&&a()},role:"button",ButtonIcon:d}),o.createElement(C,null,$||M(s.hed),o.createElement(x,null,T||M(s.hedSpanTag))),o.createElement(w,null,o.createElement(c,Object.assign({},R))),o.createElement(f,{dangerouslySetInnerHTML:{__html:g}}),o.createElement(b,{hasRoundedCornersButtons:N},o.createElement(v,{label:M(s.oidcSignUpButtonLabel),href:D,inputKind:"link",rel:"link",iconPosition:"before",onClickHandler:()=>P("signin-modal-oidc-sign-in-click"),"data-testid":"SignInModalEmail"})),o.createElement(S,null,M(s.oidcSignInText)," ",o.createElement(k,{href:D,onClick:()=>P("signin-modal-oidc-sign-in-click")},M(s.oidcSignInLinkText)),"voting"===A&&o.createElement("div",null,"  »")))};$.displayName="SignInModal",$.defaultProps={authSource:"sign-in-modal",hasLargeMargins:!1,redirectURL:"/",type:"default"},$.propTypes={analyticsType:i.string.isRequired,authSource:i.string,brandIdentityAssets:i.shape({signInModalAsset:i.shape({default:i.object,crosswords:i.object,voting:i.object})}).isRequired,className:i.string,closeButtonCallback:i.func,dangerousDek:i.string,dangerousHed:i.string,dangerousHedSpanTag:i.string,hasLargeMargins:i.bool,hasRoundedCornersButtons:i.bool,isVisible:i.bool,redirectURL:i.string,source:i.string,type:i.oneOf(["default","crosswords","voting"])};const T=g($,"SignInModal");e.exports=a(e=>{const{signInModalConfig:t,brandIdentityAssets:n}=e;return Object.assign({brandIdentityAssets:n},t)})(T)},1491:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});const i=n(2);t.default=i.defineMessages({oidcSignUpButtonLabel:{id:"SignInModal.OidcSignUpButtonLabel",defaultMessage:"Create account",description:"SignInModal component OIDC SignUp button label"},closeButtonLabel:{id:"SignInModal.CloseButtonLabel",defaultMessage:"Close Sign In Modal",description:"SignInModal component close button label"},closeButtonAriaLabel:{id:"SignInModal.CloseButtonAriaLabel",defaultMessage:"Close Sign In Modal",description:"SignInModal component close button aria label"},hed:{id:"SignInModal.Hed",defaultMessage:"Save stories ",description:"SignInModal component hed text",isConfigurable:!0},hedSpanTag:{id:"SignInModal.HedSpanTag",defaultMessage:"with an account",description:"SignInModal component hed spanTag text",isConfigurable:!0},oidcSignInText:{id:"SignInModal.OidcSignInText",defaultMessage:"Already have an account?",description:"SignInModal component OIDC SignIn Text"},oidcSignInLinkText:{id:"SignInModal.OidcSignInLinkText",defaultMessage:"Sign in",description:"SignInModal component OIDC SignIn Link Text"}})},1492:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};const o=n(0),a=n(157),r=n(1),{default:s,css:l}=n(3),{BaseText:d,BaseLink:c}=n(10),{calculateSpacing:p}=n(4),{BREAKPOINTS:g,ZINDEX_MAP:u}=n(6),m=n(14),{getColorToken:h,getTypographyStyles:y}=n(4),{ResponsiveImagePicture:b}=n(24),{ButtonWrapper:f}=n(34),C=s(d).withConfig({displayName:"SignInModalHed"})`
  text-align: center;
`;C.defaultProps={as:"div",colorToken:"colors.discover.body.white.heading",topSpacing:1,typeIdentity:"typography.definitions.consumptionEditorial.display-small"};const v=s.span.withConfig({displayName:"SignInModalHedSpanTag"})`
  display: block;
`,S=s.p.withConfig({displayName:"SignInModalDek"})`
  ${y("typography.definitions.consumptionEditorial.body-core")}
  text-align: center;
  color: ${h("colors.discover.body.white.description")};
  @media (max-width: ${g.md}) {
    margin-bottom: ${p(3)};
  }
`,w=s(d).withConfig({displayName:"SignInModalSpotIllustration"})`
  margin: ${p(1.5)} auto;
  text-align: center;

  ${b} {
    width: 200px;
    height: 170px;
  }
`;w.defaultProps={as:"div",typeIdentity:"typography.definitions.consumptionEditorial.body-core"};const k=s(m.Primary).withConfig({displayName:"SignInModalButtonPrimary"})`
  margin-bottom: ${p(1)};
  width: 100%;
`,x=s(m.Primary).withConfig({displayName:"SignInModalButtonPrimaryOutlined"})`
  width: 100%;
`,$=s(m.Utility).withConfig({displayName:"SignInModalCloseButton"})`
  position: absolute;
  top: ${p(1)};
  right: ${p(1)};
  padding: 0;
  fill: ${h("colors.discovery.body.light.context-tertiary")};

  &,
  &:focus,
  &:hover {
    border: 0;
    background-color: transparent;
  }
`,T=s(m.Utility).withConfig({displayName:"SignInModalEmail"})`
  margin-top: 0;
  padding: 0;
`,E=s.div.withConfig({displayName:"SignInModalButtons"})`
  display: flex;
  justify-content: center;
  margin: auto;
  padding-bottom: ${p(2)};
  width: 100%;

  ${T} {
    padding: 0;
    width: 100%;
  }

  ${({hasRoundedCornersButtons:e})=>e&&`\n    ${f} {\n      border-radius: 4px;\n    }\n  `}
`,N=l`
  &&& {
    padding: ${p(8)} ${p(5)};
    min-height: ${p(62)};
  }
  ${w} {
    margin: ${p(1.5)} auto;

    ${b} {
      width: 175px;
      height: 175px;
    }
  }

  ${S} {
    margin-bottom: ${p(2)};
  }

  ${E} {
    margin-bottom: ${p(4)};

    @media (max-width: ${g.md}) {
      padding-bottom: 0;
    }
  }
`;function L(e){var{className:t}=e,n=i(e,["className"]);const r=t+"__content",s=t+"__overlay";return o.createElement(a,Object.assign({portalClassName:t,className:r,overlayClassName:s},n))}L.propTypes={className:r.string};const I=s(L).withConfig({displayName:"SignInModalBaseWrapper"})`
  &__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: ${u.interstitialLayer};

    background-color: rgba(
      ${h("colors.background.black",{rgbOnly:!0})},
      0
    );

    &.ReactModal__Overlay--after-open {
      transition: background-color 750ms;
      opacity: 1;
      background-color: rgba(
        ${h("colors.background.black",{rgbOnly:!0})},
        0.4
      );
    }

    &.ReactModal__Overlay--after-close {
      transition: background-color 750ms;
      background-color: rgba(
        ${h("colors.background.black",{rgbOnly:!0})},
        0
      );
    }
  }

  &__content {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${h("colors.background.white")};
    padding: ${p(5)};
    width: ${p(60)};
    max-height: calc(100% - ${p(1,"px")});
    overflow-y: auto;

    @media (max-width: ${g.md}) {
      transform: translateY(-50%)
        translateX(calc(-50% - ${p(2,"px")}));

      margin: 0 ${p(2,"px")};
      padding: ${p(4)} ${p(5)}
        ${p(4)} ${p(5)};
      width: auto;
      min-width: ${p(38)};
      max-width: ${p(60)};
    }

    ${k}
    ${x}
    ${({hasLargeMargins:e})=>!0===e&&N}
  }
`,B=s(d).withConfig({displayName:"SignInModalSignInSection"})`
  display: flex;
  justify-content: center;
  width: 100%;
`;B.defaultProps={as:"div",colorToken:"colors.discovery.body.light.context-tertiary",typeIdentity:"typography.definitions.utility.assistive-text"};const A=s(c).withConfig({displayName:"SignInModalSignInLink"})`
  && {
    z-index: ${u.interstitialLayer};
    margin-left: 5px;
    text-decoration: underline;
  }
`;A.defaultProps={colorToken:"colors.interactive.base.black",typeToken:"typography.definitions.utility.assistive-text"},e.exports={SignInModalBaseWrapper:I,SignInModalCloseButton:$,SignInModalButtons:E,SignInModalDek:S,SignInModalEmail:T,SignInModalHed:C,SignInModalSignInSection:B,SignInModalSignInLink:A,SignInModalSpotIllustration:w,SignInModalHedSpanTag:v}},1539:function(e,t,n){e.exports=n(1601)},1540:function(e,t,n){const{default:i}=n(3),{calculateSpacing:o,minScreen:a,minMaxScreen:r,getColorToken:s}=n(4),{CarouselControlButton:l}=n(46),d=n(19),{BREAKPOINTS:c}=n(6),p=i(d.EvenFour).withConfig({displayName:"FilterableSummaryListGrid"})`
  &.grid-even.grid-items-4 {
    ${a(c.md)} {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }

  &.grid-even {
    ${r(0,c.md)} {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      padding-right: ${o(3)};
      padding-left: ${o(3)};
    }
    padding-right: ${o(4)};
    padding-left: ${o(4)};
  }

  &.grid {
    row-gap: ${o(6)};
  }
`,g=i(d.DynamicGridItemLayout).withConfig({displayName:"FilterableSummaryListDynamicGridItemLayout"})`
  &.grid-even.grid-items-4 {
    ${a(c.md)} {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }

  &.grid-even {
    ${r(0,c.md)} {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      padding-right: ${o(3)};
      padding-left: ${o(3)};
    }
    padding-right: ${o(4)};
    padding-left: ${o(4)};
  }

  &.grid {
    row-gap: ${o(6)};
    ${({shouldDisplayDenseGrid:e=!0})=>!e&&"grid-auto-flow:row;"}
  }
`,u=i.section.withConfig({displayName:"FilterableSummaryListWrapper"})`
  ${({theme:e,hasBorderBottom:t})=>t&&`border-bottom: 1px solid ${s(e,"colors.consumption.lead.standard.divider")};`}

  ${({hasPadding:e,hasToggleGridColor:t})=>e&&!t?`padding: ${o(4)} 0 ${o(4)};`:""}
`,m=i.div.withConfig({displayName:"TitleWrapper"})`
  ${({hasTitleMarginTop:e})=>{const t=o(4);return`margin: ${e?t:"0"} 0 ${t} 0;`}}

  ${({hasPadding:e})=>e&&`padding-left: ${o(3)};\n    padding-right:  ${o(3)};\n   `}
  
  ${({hasTitleNoMargin:e})=>e&&"margin: 0;"}
`,h=i.div.withConfig({displayName:"ChipWrapper"})`
  ${({hasToggleGridColor:e})=>e?`padding-bottom: ${o(4)};`:`margin: ${o(4)} 0 0 0;`}
`,y=i.div.withConfig({displayName:"CarouselWrapper"})`
  ${l} {
    margin-top: 1rem;

    &:disabled {
      display: none;
    }
  }
`;e.exports={FilterableSummaryListWrapper:u,TitleWrapper:m,ChipWrapper:h,CarouselWrapper:y,FilterableSummaryListGrid:p,FilterableSummaryListDynamicGridItemLayout:g}},1548:function(e,t,n){const{default:i,createGlobalStyle:o,css:a}=n(3),{BREAKPOINTS:r}=n(6),{calculateSpacing:s,getColorStyles:l,getTypographyStyles:d,minScreen:c,minMaxScreen:p,getColorToken:g,getLinkStyles:u}=n(4),{withRecircContextProvider:m}=n(165),h=m(n(79)),{getPattern:y}=n(429),b=n(14),{ConfiguredDisclaimer:f}=n(95),{BodyWrapper:C}=n(176),v=n(485),{SectionTitleHed:S}=n(78),{LinkStackContent:w}=n(486),{RecircMostPopularWrapper:k,RecircMostPopularHeading:x}=n(479),{StickyBoxWrapper:$,StickyBoxPrimary:T}=n(463),{IframeEmbedWrapper:E}=n(256),{ResponsiveCartoonWrapper:N}=n(236),{GalleryEmbedHr:L}=n(168),{AssetEmbedAssetContainer:I}=n(101),{GridItem:B,GridWrapper:A}=n(25),P=n(145),{SocialIconsListItem:D}=n(27),{ResponsiveCartoonCaption:R}=n(236),M=a`
  ${({theme:e})=>y(e,"page-background")}
  .grid-layout__content {
    ${c(r.md)} {
      grid-column: 3 / span 8;
    }

    ${c(r.lg)} {
      grid-column: 2 / span 6;
    }

    ${p(r.sm,r.md)} {
      grid-column: 1 / -1;
    }
  }

  .grid-layout--adrail.narrow {
    .container--body-inner {
      ${c(r.md)} {
        grid-column: 1 / -1;
      }
    }

    ${k} {
      &:first-child {
        margin-top: 0;

        ${x} {
          margin-top: 0;
        }
      }
    }
  }

  .container--body {
    grid-gap: 20px;
  }

  inline-embed[name='align-right'] {
    text-align: right;
  }

  inline-embed[name='align-center'] {
    text-align: center;
  }
`,O=i(h).withConfig({displayName:"ArticlePageBase"})`
  &&& {
    ${M}
    ${({shouldHideBaseTopPadding:e})=>e&&"padding-top : 0;"}
    ${({hideNav:e,shouldPrioritizeSeriesPagination:t,hasContentHeaderLogo:n})=>!t&&n&&(e=>e?"\n    header.site-navigation {\n      margin-bottom: -7rem;\n      transform: translateY(-150%);\n      transition: all 1000ms ease;\n    }\n    ":"\n    header.site-navigation {\n      margin-bottom: -7rem;\n      transition: all 500ms ease;\n    }\n")(e)}
  }
`,H=o`
    .channel--body {
      ${M}
    }
    
    .body__container {
      grid-column: 1/ -1;
    
      ${c(r.md)} {
        grid-column: 3 / span 8;
      }
    }
  
    /* 1. required to enforce proper alignment when text may be less than a full line
       2. remove extra top spacing added by default paragraph margins */
      .article__body {
        margin-bottom: ${s(2)};
        width: 100%; /* 1 */
  
        p:first-child:not(.callout--group-item) {
          margin-top: 0; /* 2 */
        }
  
        .small {
          font-variant: small-caps;
          text-transform: lowercase;
          font-style: normal;
        }
  
        .underline {
          text-decoration: underline;
          font-style: normal;
        }

        ${R} .underline {
          font-style: inherit;
        }
      }
  
      .article__body > .body__inner-container > {
        ${E}, .cne-video-embed {
            &:first-child {
              margin-top: 0;
            }
          }
  
          inline-embed:first-child ${E} {
            margin-top: 0;
          }
      }

      .article__body--grid-margins {
        grid-column: 1 / -1;
      }

      /**
       1. have ad span more columns from the right panel
       to have a larger right margin
       2. have it span 3 which is intended in a 12 column grid
       */
       .grid-layout__aside {
         display: none;
     
         ${c(r.lg)} {
           display: block;
           min-width: 300px;
     
           ${$} {
             top: 90px;
           }
         }
     
         ${k} {
           &:first-child {
             margin-top: 0;
     
             ${x} {
               margin-top: 0;
             }
           }
         }
       }

  `,_=i("div").withConfig({displayName:"PaywallInlineBarrierWithWrapperGrid"})`
  ${({adRail:e})=>!e&&`\n    > ${B} {\n      grid-column: 1 / -1;\n    }`}
`,W=i("div").withConfig({displayName:"ArticlePageLedeBackground"})`
  ${({theme:e})=>y(e,"lede-background")}
`,G=i("div").withConfig({displayName:"ArticlePageContentBackGround"})`
  ${({theme:e})=>y(e,"lede-background")}
  padding-top: ${s(2)};

  @media (min-width: 1208px) {
    padding-top: ${s(4)};
  }

  ${({togglePaddingTop:e})=>"large"===e&&`padding-top: ${s(4)};\n       ${c(r.md)}{ \n        padding-top: ${s(6)};\n       }\n      `}

  ${({togglePaddingTop:e})=>"xlarge"===e&&`${c(r.lg)} {  padding-top: ${s(8)}; }`}
  
    ${({isMobileTruncated:e})=>e&&`\n          position: relative;\n          height: 890px;\n          overflow: hidden;\n  \n          &::before {\n            display: block;\n            position: absolute;\n            bottom: 0;\n            z-index: 1;\n            background: linear-gradient(\n              0deg,\n              rgba(255, 255, 255, 1) 20%,\n              rgba(255, 255, 255, 0) 100%\n            );\n            width: 100%;\n            height: 192px;\n            content: '';\n          }\n  \n          ${c(r.md)} {\n            height: auto;\n            overflow: visible;\n  \n            &::before {\n              display: none;\n            }\n          }\n        `}

  ${({cartoonVariation:e})=>"card"===e&&a`
      ${N}::before, ${N}::after {
        border: none;
      }

      ${N} {
        padding: ${s(2)};
        ${l("background-color","colors.background.brand")};

        ${c(r.lg)} {
          ${D} a {
            width: ${s(5)};
          }
        }
      }
    `}
`,j=i("div").withConfig({displayName:"ArticlePageChunks"})`
  .grid:last-child {
    .body__container > .body__inner-container > *:last-child {
      ${L}:last-child {
        display: none;
      }
    }
  }

  ${({horizontalRuleStyle:e})=>"thin"===e&&"\n        .body__container {\n          .callout--has-top-border {\n            border-top-width: 1px;\n          }\n\n          hr {\n            height: 1px;\n          }\n        }\n      "}

  ${({hasTopSpacing:e})=>!e&&`\n        .inset-embedded-lede {\n          @media (min-width: 0px) and (max-width: calc(${r.md} - 1px)) {\n            ${I} {\n              transform: translateX(-50%);  /* 1 */\n              margin-left: 50%;\n              width: 100vw;\n            }\n          }\n        }\n\n        ${c(r.md)} {\n          .body__container {\n            p:first-of-type {\n              margin-top: 0;\n            }\n\n            .inset-embedded-lede {\n              margin-top: 0;\n            }\n          }\n        }\n    `}

  @media print {
    ${A} {
      display: block;
    }

    ${A} > p {
      font-size: 17px;
    }
  }
`,F=i(b.Utility).withConfig({displayName:"ArticlePageBodyMobileTruncatedBtn"})`
  position: absolute;
  bottom: 0;
  left: 50%;
  z-index: 2;
  margin-left: -100px;
  width: 200px;

  ${c(r.md)} {
    display: none;
  }
`,V=i(f).withConfig({displayName:"ArticlePageDisclaimer"})`
  ${d("typography.definitions.discovery.subhed-section-collection")}
  p {
    ${d("typography.definitions.globalEditorial.context-secondary")};
  }
  ${({theme:e})=>l(e,"color","colors.consumption.body.standard.body")};
  ${c(r.md)} {
    .grid-layout--adrail & {
      grid-column: 1 / -1;
    }
  }
`,U=i("div").withConfig({displayName:"ArticlePageChunksContent"})`
  ${({isNarrowContentWell:e})=>e&&`\n        .grid > *:first-child,\n        .body__container {\n          grid-column: 1 / -1;\n\n          ${c(r.lg)} {\n            grid-column: 4 / span 6;\n          }\n        }\n\n        ${N} {\n          .grid--item {\n            grid-column: 1 / -1;\n          }\n        }\n      `}

  ${({shouldBlurText:e})=>{e&&a`
        .grid:first-of-type .body__container p.has-dropcap::first-letter {
          color: transparent;
        }
        ${C} {
          * {
            text-shadow: 0 0 20px
              rgba(
                ${g("colors.consumption.body.standard.body")},
                0.5
              );
            color: transparent;
          }

          a:not(.button) {
            ${({theme:e})=>u(e,"colors.consumption.body.standard.link","colors.consumption.body.standard.link-hover")};
            text-shadow: 0 0 20px
              rgba(
                ${g("colors.consumption.body.standard.link")},
                0.5
              );
          }
        }
      `}}
`,z=i("article").withConfig({displayName:"ArticlePageMainContent"})`
  ${({shouldBlurText:e})=>e&&"\n        .grid {\n          .body__container {\n            p.has-dropcap,\n            p.has-dropcap__lead-standard-heading {\n              &::first-letter {\n                color: inherit;\n              }\n            }\n          }\n        }\n      "}
`,q=i(P).withConfig({displayName:"ArticlePageSplitAdRail"})`
  ${$},
  ${$} > ${T} {
    height: 100%;
  }

  > aside > ${$} {
    position: static;
  }
`,K=i("div").withConfig({displayName:"ArticlePageSplitAdRailContent"})`
  display: flex;
  flex-direction: column;
  height: 100%;

  ${$} {
    margin-bottom: 0;
  }

  > div {
    flex: 1;
  }
`,Y=i("div").withConfig({displayName:"ArticlePageSplitAdRailTop"})``,Z=i("div").withConfig({displayName:"ArticlePageSplitAdRailMiddle"})`
  margin-top: 40px;
`,X=i("div").withConfig({displayName:"ArticlePageSplitAdRailBottom"})`
  margin-top: 40px;
`,J=i("div").withConfig({displayName:"ArticlePageBodyGridContainer"})`
  width: 100%;
`,Q=i.div.withConfig({displayName:"ArticlePageChunksGrid"})`
  ${({adRail:e})=>!e&&`\n     > ${B} {\n      grid-column: 1/ -1;\n      ${c(r.md)} {\n        grid-column: 3 / span 8;\n      }\n    }`}
  > ${B} {
    margin-bottom: ${s(2)};
  }
`,ee=i.div.withConfig({displayName:"ArticlePageContentFooterGrid"})`
  ${B} {
    grid-column: 1 / -1;
    ${c(r.md)} {
      grid-column: 3 / span 8;
    }
    ${({isNarrow:e})=>e&&`\n         ${c(r.md)} {\n            grid-column: 4 / span 6;\n          }\n         `}
  }
`,te=i.div.withConfig({displayName:"ArticlePageDisclaimerGrid"})`
  ${({adRail:e})=>!e&&`\n    > ${B} {\n      grid-column: 1/ -1;\n      ${c(r.md)} {\n        grid-column: 3 / span 8;\n      }\n    }`}
`,ne=i.div.withConfig({displayName:"ContentWrapperGrid"})`
  ${({isadRail:e})=>!e&&`\n    > ${B} {\n      grid-column: 1/ -1;\n      ${c(r.md)} {\n        grid-column: 3 / span 8;\n      }\n    }`}
`,ie=i(v).withConfig({displayName:"LinkStackArticlePage"})`
  margin: 48px 0;
  padding-bottom: 0;

  ${S} {
    margin: 0;
  }

  ${w} > ul {
    margin-left: 0;
    padding-left: 0;
  }
`;e.exports={ArticlePageBase:O,ArticlePageGlobalStyle:H,ArticlePageLedeBackground:W,ArticlePageContentBackGround:G,ArticlePageChunks:j,ArticlePageBodyMobileTruncatedBtn:F,ArticlePageChunksContent:U,ArticlePageMainContent:z,ArticlePageDisclaimer:V,ArticlePageSplitAdRail:q,ArticlePageSplitAdRailContent:K,ArticlePageSplitAdRailTop:Y,ArticlePageSplitAdRailMiddle:Z,ArticlePageSplitAdRailBottom:X,ArticlePageBodyGridContainer:J,ArticlePageChunksGrid:Q,ArticlePageContentFooterGrid:ee,ArticlePageDisclaimerGrid:te,ContentWrapperGrid:ne,LinkStackArticlePage:ie,PaywallInlineBarrierWithWrapperGrid:_}},1557:function(e,t,n){const{asConfiguredComponent:i}=n(9),o=n(1566);e.exports=i(o,"BreadcrumbTrail")},1566:function(e,t,n){const i=n(1),o=n(0),a=n(77),r=n(19),{getSeparatorIconComponent:s}=n(1567),{BreadcrumbTrailWrapper:l,BreadcrumbTrailScrollContainer:d,BreadcrumbTrailItem:c}=n(1570),{trackComponent:p}=n(5),g=({hierarchy:e,shouldRemoveBackgroundColor:t,theme:n,shouldUseContentHeaderColorForLink:i,separatorIcon:g})=>(o.useEffect(()=>{p("BreadcrumbTrail")},[]),o.createElement(a,{palette:n},o.createElement(l,{"data-testid":"BreadcrumbTrail",shouldRemoveBackgroundColor:t},e&&e.length>0&&o.createElement(r.WithMargins,null,o.createElement(d,null,e.map((e,t)=>{const{name:n,slug:a}=e||{};return o.createElement(c,{key:t,shouldUseContentHeaderColorForLink:i},a?o.createElement("a",{className:"breadCrumbLink",href:a},n):o.createElement("span",null,n),s(g))}))))));g.displayName="BreadcrumbTrail",g.defaultProps={separatorIcon:{name:"Chevron",type:"standard"},shouldRemoveBackgroundColor:!1,theme:"standard"},g.propTypes={hierarchy:i.array.isRequired,separatorIcon:i.shape({name:i.string,type:i.oneOf(["standard","thin","thinner"])}),shouldRemoveBackgroundColor:i.bool,shouldUseContentHeaderColorForLink:i.bool,theme:i.string},e.exports=g},1567:function(e,t,n){const i=n(0),{getIconComponent:o}=n(1568);e.exports={getSeparatorIconComponent:e=>{const{name:t,type:n}=e,a=o(t,n)||o("Chevron","standard");return i.createElement(a,Object.assign({},{width:"1rem",height:"1rem"}))}}},1568:function(e,t,n){const i={standard:n(116),thin:n(472),thinner:n(1569)};e.exports={getIconComponent:(e,t="standard")=>{if(!e)return null;const n=i[t][e];return n||null}}},1569:function(e,t,n){e.exports={Bookmark:n(160),BookmarkActivated:n(99),Email:n(466),Facebook:n(467),Twitter:n(469),Print:n(470),Shopping:n(468)}},1570:function(e,t,n){const{default:i}=n(3),{BaseText:o}=n(10),{calculateSpacing:a,getLinkStyles:r,getColorStyles:s}=n(4),{BREAKPOINTS:l}=n(6),{isInverted:d}=n(28),c=i.div.withConfig({displayName:"BreadcrumbTrailWrapper"})`
  ${({theme:e,shouldRemoveBackgroundColor:t})=>{const n=d(e)?"colors.background.black":"colors.background.light";return t?"background-color: transparent;":s(e,"background-color",n)+";"}};

  padding-top: ${a(2.4)};
  padding-bottom: ${a(2.4)};
  width: 100%;

  @media (max-width: ${l.md}) {
    overflow-y: hidden;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`,p=i.div.withConfig({displayName:"BreadcrumbTrailScrollContainer"})`
  display: flex;
  width: max-content;
`,g=i(o).withConfig({displayName:"BreadcrumbTrailItem"})`
  display: inline-flex;
  flex-direction: row;
  align-items: center;

  ${({theme:e})=>d(e)&&`\n      ${s(e,"color","colors.consumption.lead.inverted.link")};`}

  a:active,
  a:link {
    text-decoration: none;
  }

  a:hover,
  a:focus {
    text-decoration: underline;
  }

  .icon {
    margin: 0 ${a(.2)};

    path {
      ${({theme:e})=>d(e)&&`\n          ${s(e,"fill","colors.consumption.lead.inverted.link")};\n        `}
    }
  }

  &:last-of-type {
    a {
      ${({theme:e,shouldUseContentHeaderColorForLink:t})=>{const n=d(e)?r(e,"colors.consumption.lead.inverted.link",null):r(e,"colors.discovery.lead.secondary.link",null);return t?r(e,"colors.consumption.lead.standard.context-signature",null):n}}

      &:active,
      &:link {
        text-decoration: none;
      }

      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }

    span {
      ${({theme:e})=>s(e,"color","colors.discovery.lead.secondary.link")};
    }

    .icon {
      display: none;
    }
  }
`;g.defaultProps={typeIdentity:"typography.definitions.globalEditorial.tags"},e.exports={BreadcrumbTrailWrapper:c,BreadcrumbTrailScrollContainer:p,BreadcrumbTrailItem:g}},1571:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});const i=n(2);t.default=i.defineMessages({bylineBrandXAdvertiser:{id:"SponsoredContentHeader.BylineBrandXAdvertiser",defaultMessage:"{brandName} X",description:"Byline text when it's a brand and an advertiser"},bylineBrandedContent:{id:"SponsoredContentHeader.BylineBrandedContent",defaultMessage:"Branded Content By",description:"Byline text for branded content"},bylineCreated:{id:"SponsoredContentHeader.BylineCreated",defaultMessage:"Created By {brandName} For",description:"Byline text for created by brand"},bylinePaidPost:{id:"SponsoredContentHeader.BylinePaidPost",defaultMessage:"PAID POST",description:"Byline text for a paid post"},bylineProduced:{id:"SponsoredContentHeader.BylineProduced",defaultMessage:"Produced By",description:"Byline text for produced by"},bylineProducedByAdvertiser:{id:"SponsoredContentHeader.BylineProducedByAdvertiser",defaultMessage:"Produced By",description:"Byline text for produced by advertiser"},bylineProducedByBrand:{id:"SponsoredContentHeader.BylineProducedByBrand",defaultMessage:"Produced By {brandName} With",description:"Byline text for produced by brand"},bylineSponsored:{id:"SponsoredContentHeader.BylineSponsored",defaultMessage:"Sponsored content",description:"Byline text for sponsored content"},bylineSponsoredContent:{id:"SponsoredContentHeader.BylineSponsoredContent",defaultMessage:"Sponsored Content By",description:"Byline text for sponsored content with a sponsor name"},bylineInCollaboration:{id:"SponsoredContentHeader.BylineInCollaboration",defaultMessage:"In Collaboration With",description:"Byline text for in collaboration with"},bylineSponsoredBy:{id:"SponsoredContentHeader.BylineSponsoredBy",defaultMessage:"Sponsored By",description:"Byline text for sponsored by"},bylineInPartnership:{id:"SponsoredContentHeader.BylineInPartnership",defaultMessage:"In Partnership With",description:"Byline text for in partnership with"},bylineAdvertisementFeatureWith:{id:"SponsoredContentHeader.BylineAdvertisementFeatureWith",defaultMessage:"Advertisement Feature With",description:"Byline text for advertisement feature with"},bylineOriginalContentBy:{id:"SponsoredContentHeader.BylineOriginalContentBy",defaultMessage:"Original Content By",description:"Byline text for Original Content By"},sponsoredLinkCTA:{id:"SponsoredContentHeader.SponsoredLinkCTA",defaultMessage:"Click to go to {sponsorName}'s website",description:"Call to action for sponsored link"}})},1572:function(e,t,n){const{default:i,css:o}=n(3),{BREAKPOINTS:a,ZINDEX_MAP:r}=n(6),{applyGridSpacing:s,cssVariablesGrid:l}=n(16),{calculateSpacing:d,minScreen:c,maxScreen:p,minMaxScreen:g,getColorToken:u,getTypographyStyles:m,firstLetterDropCap:h}=n(4),y=n(14),{universalGridCore:b}=n(53),f=n(55),{RowWrapper:C}=n(465),v=n(19),{GridItem:S}=n(25),w=n(699),{SummaryRiverSection:k}=n(482),{SummaryCollageOneGridWithMargin:x}=n(1589),{SectionTitleHed:$}=n(78),T=`\n  ${l()}\n  ${s("padding")}\n\n  margin: 0 auto;\n  width: 100%;\n  max-width: ${a.xxl};\n`,E=i(f).withConfig({displayName:"MultiPackageBaseRow"})`
  &:first-child,
  & ~ & {
    ${({hasMarginTopMultiPackageRow:e})=>e?"":"margin-top: 0;"}
  }

  inline-embed[name='align-right'] {
    text-align: right;
  }

  inline-embed[name='align-center'] {
    text-align: center;
  }
`,N=i(y.Utility).withConfig({displayName:"MultiPackageRow"})`
  &&& {
    align-items: center;
    width: auto;
  }
`,L=i(E).withConfig({displayName:"MultiPackageRow"})`
  ${({hasNoTopMargin:e})=>e?"":`margin-top: ${d(7)};`}

  ${({hasPlpFilterableContainerLightBackgroundColor:e,theme:t,isInvertedTheme:n})=>e?`background-color: ${u(t,"colors.discovery.body.light.background")};`:n?`background-color: ${u(t,"colors.consumption.lead.inverted.background")};`:""}

  ${({hasMediumMargin:e,hasNoBottomMargin:t,hasReducedMargin:n,isNativeAd:i})=>e?`margin-bottom: ${d(4)};`:t||i&&n?"margin-bottom: 0;":n?`margin-bottom: ${d(2)};`:`margin-bottom: ${d(7)};`}

  ${({hasMarginBottomMultiPackageRow:e})=>e?`\n          ${c(a.lg)} {\n            margin-bottom: ${d(5)};\n          }\n          ${g(a.md,a.lg)} {\n            margin-bottom: ${d(4)};\n          }\n          ${g(0,a.md)} {\n            margin-bottom: ${d(3)};\n          }`:""}

  ${({hasStickyLinkBanner:e})=>e?`\n        position: sticky;\n        top: 0px;\n        z-index: ${r.interstitialLayer};\n      `:""} 

  /* TODO: this should be a configuration for a layout
     Specificity is required due to star selector in homepage  */
  ${c(a.lg)} {
    ${C}.homepage__half-column-row + && {
      width: 50%;
      max-width: 800px;
      ${$} {
        ${m("typography.definitions.discovery.subhed-section-secondary")};
      }
    }
    .homepage__half-column-row + && > ${x} {
      padding-left: var(--grid-gap);
    }
    ${k} {
      margin: 0 auto;
      max-width: 1600px;
    }
  }
`,I=i(v.WithMargins).withConfig({displayName:"DiscoveryQuoteRow"})`
  ${({hasTopAndBottomBorderQuote:e,theme:t})=>e?`\n    border-top:1px solid ${u(t,"colors.consumption.lead.standard.accent")};\n    border-bottom:1px solid ${u(t,"colors.consumption.lead.standard.accent")};`:""}

  ${S} {
    grid-column: 1/-1;

    ${c(a.md)} {
      grid-column: 3/11;
    }
  }
`,B=i(w).withConfig({displayName:"MultiPackageBody"})`
  p.has-dropcap {
    margin-top: ${d(4,"px")};

    &::first-letter {
      ${h};
    }

    &.has-dropcap__lead-standard-heading {
      &::first-letter {
        padding: 0.1em 0.05em 0 0;
        color: ${u("colors.consumption.lead.standard.heading")};
      }
    }
  }
  ${({constrainPagragraph:e})=>e&&`\n    inline-embed{\n      display: block;\n      p {\n        display:inline-block;\n        max-width: ${d(40.875)};\n        ${c(a.lg)} {\n          max-width: ${d(91.5)};\n        }\n      }\n    }\n  `}
`,A=o`
  &.puzzles-games-landing-page {
    .ticker-wrapper {
      margin-bottom: 0;
    }

    .ticker-view > div:nth-child(2) {
      margin-top: ${d(4)};
    }

    .summary-collage-six-puzzles-games .summary-item:first-child h3 {
      ${m("typography.definitions.discovery.description-core")};
      font-size: ${d(4)};
    }

    .verso-features {
      margin-bottom: ${d(4)};
    }

    > div:nth-child(3)
      .summary-collage-six-puzzles-games
      .summary-list--collection-list {
      ${p(a.lg)} {
        padding-top: 0;
      }
    }

    .summary-river-puzzles-games {
      h2 {
        font-size: 24px;
      }

      & > section {
        .summary-item:last-child {
          border-bottom: 0;
        }

        > div {
          margin-bottom: ${d(2)};

          > div:first-child {
            margin-bottom: 0;
          }
        }
      }

      .summary-item {
        padding-top: ${d(2)};
      }
    }

    .summary-item--is-dense .summary-item__asset-container {
      ${g(0,a.xl)} {
        display: block;
      }

      ${c(a.xl)} {
        float: none;
        margin-left: 0;
      }
    }

    .summary-list--collection-list {
      ${g(0,a.lg)} {
        border-top: 0;
        padding-top: 0;
      }
    }

    .summary-list__items .summary-item:not(:first-child) {
      margin-bottom: 0;
      padding-bottom: ${d(2)};
    }

    .summary-list__items .summary-item:first-child {
      ${g(0,a.lg)} {
        padding-bottom: ${d(2)};
      }

      ${c(a.lg)} {
        padding-bottom: 0;
      }
    }

    .summary-collage-six-puzzles-games .summary-item h3 {
      ${m("typography.definitions.discovery.hed-core-secondary")};
    }

    .summary-collage-six-puzzles-games h2,
    .summary-collection-grid h2 {
      ${m("typography.definitions.discovery.subhed-section-primary")};
    }

    .verso-embed-row inline-embed h1 {
      margin: 0;
      font-size: ${d(5.5)};
    }

    .verso-embed-row {
      margin: ${d(4)} 0;
    }

    ${B} {
      max-width: initial;
    }

    .verso-features h2 {
      font-size: 24px;
    }

    .summary-collage-six-puzzles-games h2 {
      font-size: 20px;
    }

    .summary-item__dek > a {
      ${m("typography.definitions.foundation.link-primary")};
      display: block;
      padding-top: ${d(2.5)};
      text-decoration: none;
      color: ${u("colors.interactive.base.brand-primary")};
    }

    .summary-item__dek > a:hover {
      text-decoration: underline;
    }
  }
`,P=i.div.withConfig({displayName:"MultiPackageContainer"})`
  ${({showFooterAdPadding:e})=>e&&`padding-bottom: ${d(10,"px")};`}

  ${({customClass:e})=>e&&"puzzles-games-landing-page"===e&&A}
  ${({hasMarginBottomMultiPackageRow:e})=>e?"\n            .verso-features {\n              && {\n                margin-bottom: 0;\n              }\n            }\n          ":""}
`,D=i.div.withConfig({displayName:"SectionJumpLinksWrapper"})`
  ${({theme:e})=>(e=>`\n    background: ${u(e,"colors.consumption.body.inverted.display-texture")};\n    ${c(a.md)} {\n      width: ${a.md};\n      padding: ${d(3)} ${d(9)} ${d(5)} ${d(9)};\n    }\n    padding: ${d(2)} ${d(5)} ${d(3.5)} ${d(5)};\n    margin: auto;\n    div {\n      div {\n        h1 {\n          text-align: center;\n        }\n        div {\n          a {\n            font-family: Konnect, helvetica, sans-serif;\n            font-style: normal;\n            line-height: ${d(2.4,"rem")};\n            font-size: ${d(2)};\n            &:not(.button):link,\n            &:not(.button):visited {\n              color: rgb(0, 0, 0);\n            }\n          }\n          display: grid;\n          ${c(a.md)} {\n            grid-template-columns: 1fr 1fr 1fr;\n            grid-row-gap: ${d(1.5)};\n          }\n          grid-template-columns: 1fr 1fr;\n          grid-row-gap: ${d(1)};\n        }\n      }\n    }\n  }\n  `)(e)}
`,R=i(L).withConfig({displayName:"MultiPackageReadMore"})`
  display: flex;
  justify-content: center;
`,M=i.div.withConfig({displayName:"PromoBoxWrapper"})`
  ${T}
`,O=i.div.withConfig({displayName:"EventsListWrapper"})`
  ${l()}

  margin: 0 auto;
  width: 100%;
  max-width: ${a.xxl};

  ${c(a.lg)} {
    padding-right: var(--grid-margin);
    padding-left: var(--grid-margin);
  }
`,H=i.div.withConfig({displayName:"PromoBoxWrapper"})`
  ${T}
`,_=i.div.withConfig({displayName:"NewsletterWrapper"})`
  ${T}

  padding-top: ${d(6)};
  padding-bottom: ${d(6)};

  ${c(a.md)} {
    padding-top: ${d(9)};
    padding-bottom: ${d(9)};
  }
`,W=i.div.withConfig({displayName:"CMUnitWrapper"})`
  ${T}

  ${c(a.lg)} {
    padding-right: var(--grid-margin);
    padding-left: var(--grid-margin);
  }
`,G=i.div.withConfig({displayName:"SubTopicDiscoveryWrapper"})`
  ${b(!0)}
  ${s("padding")}

  margin: 0 auto;
  width: 100%;
  max-width: ${a.xxl};

  ${c(a.lg)} {
    padding-right: var(--grid-margin);
    padding-left: var(--grid-margin);
  }
`,j=i(v).withConfig({displayName:"GridWrapper"})`
  ${T}
`,F=i.div.withConfig({displayName:"EmbedWrapper"})`
  ${T}
`,V=i.div.withConfig({displayName:"TickerWrapper"})`
  ${({isInvertedTheme:e})=>e?`\n        ${l()}\n        ${s("padding",!0)}`:""+T}
`,U=i("div").withConfig({displayName:"MultipackageNoItemsBlock"})`
  ${l()}
  ${s("padding")}
  margin: 0 auto;
  margin-bottom: ${d(4)};
  width: 100%;
  max-width: ${a.xxl};
  color: white;
  font-family: 'LabGrotesque';
  ${({hasRule:e,theme:t})=>e?`\n        &::before {\n          border-top: 1px solid ${u(t,"colors.discovery.body.white.divider")};\n          content: '';\n          grid-column: 1/-1;\n          margin-bottom: ${d(4)};\n          display: block;\n        }\n      `:""}

  h3 {
    margin: 0 auto;
    width: fit-content;
    ${m("typography.definitions.consumptionEditorial.subhed-break-secondary")}
  }

  p {
    font-family: Proxima Nova;
    font-size: 12px;
  }
`,z=i.div.withConfig({displayName:"MultiPackageBodyWrapperGrid"})`
  ${b()}
  ${s("padding")}
`;e.exports={CMUnitWrapper:W,DiscoveryQuoteRow:I,EmbedWrapper:F,GridWrapper:j,EventsListWrapper:O,MultiPackageContainer:P,MultiPackageRow:L,MultiPackageBody:B,MultiPackageReadMore:R,NewsFeedWrapper:H,NewsletterWrapper:_,PromoBoxWrapper:M,SubTopicDiscoveryWrapper:G,TickerWrapper:V,MultipackageNoItemsBlock:U,MultiPackageBodyWrapperGrid:z,SectionJumpLinksWrapper:D,UtilityButton:N}},1589:function(e,t,n){const{default:i,css:o}=n(3),{BREAKPOINTS:a}=n(6),{applyGridSpacing:r,cssVariablesGrid:s}=n(16),{RubricLink:l}=n(71),{calculateSpacing:d,minScreen:c,minMaxScreen:p,getTypographyStyles:g,getColorToken:u}=n(4),{BaseLink:m}=n(10),{SocialIconsList:h}=n(27),{SpanWrapper:y}=n(81),b=i.div.withConfig({displayName:"SummaryCollageOneTitle"})`
  grid-column: 1 / -1;

  ${({isSingleFeature:e})=>!e&&`\n      margin-bottom: ${d(2)};\n\n      ${c(a.md)} {\n        margin-bottom: ${d(1)};\n      }\n\n      ${c(a.lg)} {\n        margin-bottom: ${d(0)};\n      }\n    `}
`,f=i.div.withConfig({displayName:"SummaryCollageOneCtaLink"})`
  grid-column: 1 / -1;
  text-align: center;

  span {
    display: block;
    width: 100%;
    text-align: center;
  }
`,C=i(m).withConfig({displayName:"SummaryCollageOneAnchorLink"})`
  ${g("typography.definitions.foundation.link-primary")}
  display: inline-block;
  margin-bottom: ${d(2)};
  vertical-align: top;
  ${c(a.lg)} {
    margin-bottom: ${d(4)};
  }
`;C.defaultProps={colorSecondaryLinkToken:"colors.interactive.base.dark",colorStaticLinkToken:"colors.interactive.base.brand-primary",linkStyle:"global"};const v=o`
  ${s()}
  ${r("padding")}

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: var(--grid-gap);
  margin: 0 auto;
  width: 100%;
  max-width: ${a.xxl};
  row-gap: var(--grid-gap);

  .summary-item--layout-placement-text-below {
    &.summary-item--text-align-left,
    &.summary-item--text-align-center {
      .summary-item__hed {
        ${g("typography.definitions.discovery.hed-break-out")};
      }

      .summary-item__dek {
        ${g("typography.definitions.discovery.description-feature")};
      }
    }
  }

  .summary-item__hed-link {
    &::after {
      border-bottom: 1px solid
        ${u("colors.discovery.body.white.accent")};
    }
  }

  .summary-item__content:empty {
    display: none;
  }

  ${h} {
    justify-content: center;
  }

  ${c(a.md)} {
    grid-template-columns: repeat(12, 1fr);
  }
`,S=i.div.withConfig({displayName:"SummaryCollageOneItemComponent"})`
  grid-column: 1 / -1;

  &&& {
    border-bottom: 0;

    .summary-item__content {
      margin: 0;
      @media (min-width: 0) and (max-width: ${a.lg}) {
        margin: 0;
      }
    }
    @media (min-width: 0) and (max-width: ${a.md}) {
      padding-bottom: 0;
    }
  }
`,w=o`
  &&& {
    grid-gap: ${d(4)};
    grid-template-rows: auto 1fr auto;
    height: 100%;
  }

  ${S} {
    display: grid;
    align-items: center;
  }

  ${y}.summary-item__image {
    .summary-item__image {
      display: grid;
      justify-items: center;

      picture {
        max-width: 300px;
        ${c(a.lg)} {
          max-width: 400px;
        }
      }
    }

    .responsive-cartoon__caption {
      margin-top: 0;
      ${c(a.lg)} {
        margin-top: ${d(2)};
        width: 85%;
      }
    }
  }
`,k=o`
  ${p(0,a.lg)} {
    .summary-item__asset-container {
      ${r("margin",!0)};
    }
  }
`,x=o`
  &&& {
    grid-template-rows: unset;
    background-color: ${u("colors.discovery.body.dark.background")};
    max-width: ${a.xxl};

    ${p(a.sm,a.md)} {
      column-gap: ${d(9)};
      margin: ${d(0)};
      padding: ${d(0)};
    }
    ${c(a.md)} {
      column-gap: ${d(3)};
      margin: ${d(0)};
      padding: ${d(5)} ${d(3)};
    }
    ${c(a.lg)} {
      margin: ${d(0)};
      padding: ${d(7)} ${d(6)};
    }
    ${c(a.xl)} {
      column-gap: 2rem;
      margin: ${d(0)};
      padding: ${d(10)} ${d(8)};
    }
    ${c(a.xxl)} {
      column-gap: 2rem;
      margin: auto;
      padding: ${d(10)} ${d(8)};
    }
  }
  ${l} {
    color: ${u("colors.discovery.body.dark.context-signature")};
  }

  .summary-item__rubric {
    color: ${u("colors.discovery.body.dark.context-signature")};
  }

  .summary-item__dek {
    color: ${u("colors.discovery.body.dark.description")};
  }

  .summary-item__hed--hed-core-primary {
    ${g("typography.definitions.discovery.hed-core-primary")}
    color: ${u("colors.discovery.body.dark.heading")};
  }

  .summary-item__hed {
    color: ${u("colors.discovery.body.dark.heading")};
  }

  .summary-item--dark-background-right {
    ${c(a.md)} {
      grid-column: 2 / -2;
      margin: ${d(0)} ${d(-3)};
    }
    ${c(a.lg)} {
      grid-column: 2 / -2;
      margin: ${d(0)} ${d(-3)};
      padding: ${d(0)};
    }
    ${c(a.xl)} {
      grid-column: 2 / -2;
      margin: ${d(0)} ${d(-4)};
      padding: ${d(0)};
    }
    ${c(a.xxl)} {
      grid-column: 2 / -2;
      margin: ${d(0)};
      padding: ${d(0)};
    }

    .summary-item__asset-container {
      ${c(a.md)} {
        margin-left: ${d(-3)};
      }
      ${c(a.xl)} {
        margin-left: ${d(0)};
      }
    }
  }

  .summary-item__content {
    margin: ${d(0)};
    ${c(a.md)} {
      padding-right: ${d(3)};
    }
    ${c(a.lg)} {
      padding-right: ${d(5)};
    }
    ${c(a.xl)} {
      padding-right: ${d(3)};
    }
    ${c(a.xxl)} {
      padding-right: ${d(6)};
    }
  }
`,$=i.div.withConfig({displayName:"SummaryCollageOneGridWithMargin"})`
  ${v}
  ${({isSingleFeature:e})=>e&&w}

  ${({hasFullWidthImage:e})=>e&&k}
  
  ${({isFullBleedDarkBackground:e})=>e&&x}
`,T=i.div.withConfig({displayName:"SummaryCollageOneIsFullBleed"})`
  ${({isFullBleedDarkBackground:e})=>e&&o`
      background-color: ${u("colors.discovery.body.dark.background")};
      max-width: 100%;
    `}
`;e.exports={SummaryCollageOneTitle:b,SummaryCollageOneCtaLink:f,SummaryCollageOneGridWithMargin:$,SummaryCollageOneIsFullBleed:T,SummaryCollageOneItemComponent:S,SummaryCollageOneAnchorLink:C}},159:function(e,t,n){e.exports=n(162)},1601:function(e,t,n){const i=n(0),o=n(1),{trackComponent:a}=n(5),r=({children:e,name:t})=>{if(i.useEffect(()=>{a("Slot")},[]),!t)throw new Error("A slot must contain a name!");return e};r.propTypes={children:o.node.isRequired,name:o.string.isRequired};e.exports={Slot:r,getSlots:(e,t=[])=>{const n=new Set(t),o={};let a;const s=[];return i.Children.forEach(e,e=>{a=e.props.name,s.push(e.props.url),e.type===r&&a&&(0===n.size||n.has(a))&&(o[a]=e)}),{slots:o,urlData:s}}}},1602:function(e,t,n){const{asConfiguredComponent:i}=n(9),o=n(1603);e.exports=i(o,"FilterableSummaryList")},1603:function(e,t,n){const i=n(0),o=n(1),{useIntl:a}=n(2),{calculateSpacing:r}=n(4),{getSlots:s}=n(1539),l=n(244),d=n(249),c=n(40),{Disclaimer:p}=n(95),g=n(96),{trackComponent:u}=n(5),{componentTracking:m,googleAnalytics:h}=n(12),{FilterableSummaryListWrapper:y,TitleWrapper:b,ChipWrapper:f,CarouselWrapper:C,FilterableSummaryListGrid:v,FilterableSummaryListDynamicGridItemLayout:S}=n(1540),{ArticleGalleryCarouselBtnWrapper:w,ArticleGalleryCarouselButton:k}=n(118),x=n(1604).default,$={spacing:{sm:r(1.5),xl:r(2)},width:{sm:`calc(60% - ${r(1.5)})`,lg:`calc(27% - ${r(1.5)})`,xl:`calc(24% - ${r(2)})`,xxl:`calc(21% - ${r(2)})`}},T=({affiliateDisclaimer:e,buttonConfig:t,children:n,className:o,controlButtonIcon:r,controlPlacement:T,controlPosition:E,dangerousDek:N,dangerousHed:L,defaultToggleChipTitle:I,hasBorderBottom:B,hasCarouselSliderPagination:A,hasControls:P,hasCustomSlider:D,hasImpressionTracking:R,hasNavigationButtonVariation:M,hasNoHorizontalScrollCarousel:O,paginationStyle:H,hasPadding:_,hasPagination:W,hasProductDisclaimerAlternativeStyle:G,hasTitleMarginTop:j,hasTitleNoMargin:F,hasToggleGridColor:V,hasHigherHorizontalPadding:U,sectionTitleVariation:z,selectedToggleChipTitle:q,shouldAppendFilterInUrl:K,shouldDisplaySingleSlot:Y,shouldNotDisplayAllLabel:Z,shouldEnableBundleComponentAnalytics:X,shouldEnableProductDisclaimer:J,hasCarouselControl:Q,trackingNamespace:ee,isDotClickable:te,layout:ne,pos:ie,gridConfig:oe})=>{i.useEffect(()=>{u("FilterableSummaryList")},[]);const{formatMessage:ae}=a(),{slots:re,urlData:se}=s(n),le=Object.keys(re),[de,ce]=i.useState(le),[pe,ge]=i.useState(de[0]),[ue,me]=i.useState(I),he=L||N,ye=(null==ee?void 0:ee.toggle)||L,be=(null==ee?void 0:ee.card)||L;if(0===de.length)return null;const fe=de.length>1||Y,Ce=t.hasCtaLink?ae(x.atArticleGalleryCarouselBtnTextWithCtaLink,{categoryName:t.name}):ae(x.atArticleGalleryCarouselBtnText,{categoryName:t.name}),{isDynamicGridItemLayout:ve,shouldDisplayDenseGrid:Se}=oe||{},we=()=>i.Children.map(re[pe].props.children,(e,t)=>{const n=m.addDataSectionTitleAttribute(X,`${be}/${pe}/`,t,!1),o=i.cloneElement(e,{analyticsDataAttribute:n});return i.createElement("div",null,o)}),ke=(e,t)=>{var n,i;ge(t),Y&&(e.detail.checked?(ce([t]),q&&me(q)):(ge(le[0]),ce(le),me(I))),n=t,i="body",h.emitUniqueGoogleTrackingEvent("toggle-click",{clickText:n,clickType:i})};return i.useEffect(()=>{var e;{const t=decodeURIComponent(null===(e=null===window||void 0===window?void 0:window.location)||void 0===e?void 0:e.hash),n=de.findIndex(e=>"#"+e.toLowerCase()===t.toLowerCase());ge(de[n>=0?n:0])}},[de]),i.createElement(y,{className:o,hasToggleGridColor:V,hasPadding:_,hasBorderBottom:B},he&&i.createElement(b,{hasPadding:_,hasTitleMarginTop:j,as:c[z],dangerousHed:L,dangerousDek:N,hasTitleNoMargin:F}),fe&&i.createElement(f,{hasToggleGridColor:V,hasPadding:_},i.createElement(d,{contentAlign:"center",layout:"nowrap",hasToggleGridColor:V,label:ue},de.map((e,t)=>{const n=m.addDataSectionTitleAttribute(X,`${ye}/${e}`),o=e===pe;return Z&&"All"===e?null:i.createElement(l,{analyticsDataAttribute:n,key:e,isChecked:o,hasToggleGridColor:V,onChange:t=>ke(t,e),isAnchorUrl:K,redirectUrl:se[t],shouldDisplaySingleChip:Y},e)}))),function(){switch(ne){case"GridFourColumns":return ve?i.createElement(S,{shouldDisplayDenseGrid:Se},we()):i.createElement(v,null,we());case"FullBleed":return i.createElement("div",null,we());default:return i.createElement(C,null,i.createElement(p.TextCenterNoTopRule,{isEnabled:J&&Q,hasHigherHorizontalPadding:U,hasProductDisclaimerAlternativeStyle:G,disclaimerHtml:e}),i.createElement(g,{hasControls:P,hasNavigationButtonVariation:M,hasPagination:W,controlButtonIcon:M?"ArrowIcon":r,controlPlacement:T,controlPosition:E,isDotClickable:te,hasPadding:_,hasNoHorizontalScrollCarousel:O,hasImpressionTracking:R,paginationStyle:A&&"slider"===H?H:"bullet",hasCustomSlider:A&&D,dangerousHed:he,pos:ie},i.Children.map(re[pe].props.children,(e,t)=>{const n=m.addDataSectionTitleAttribute(X,`${be}/${pe}/`,t,!1),o=i.cloneElement(e,{analyticsDataAttribute:n}),a=`${he}/${pe}`;return i.createElement(g.CarouselItem,Object.assign({},$,{key:`${pe}-${t}`,carouselTitle:a,carouselItemIndex:t,carouselItemName:e.props.dangerousHed,pos:ie}),o)})),t.showButton&&t.url&&i.createElement(w,null,i.createElement("div",{className:"more-products"},i.createElement(k,{className:"article-gallery__more-button",label:Ce,btnStyle:"outlined",ariaLabel:Ce,href:t.hasCtaLink?t.url:"/products/shop"+t.url,inputKind:"link"}))))}}())};T.propTypes={affiliateDisclaimer:o.string,buttonConfig:o.object,children:o.node.isRequired,className:o.string,controlButtonIcon:o.oneOf(["ChevronIcon","ArrowIcon"]),controlPlacement:o.oneOf(["right","space-between"]),controlPosition:o.oneOf(["top","bottom","center"]),dangerousDek:o.string,dangerousHed:o.string,defaultToggleChipTitle:o.string,gridConfig:o.object,hasBorderBottom:o.bool,hasCarouselControl:o.bool,hasCarouselSliderPagination:o.bool,hasControls:o.bool,hasCustomSlider:o.bool,hasHigherHorizontalPadding:o.bool,hasImpressionTracking:o.bool,hasNavigationButtonVariation:o.bool,hasNoHorizontalScrollCarousel:o.bool,hasPadding:o.bool,hasPagination:o.bool,hasProductDisclaimerAlternativeStyle:o.bool,hasTitleMarginTop:o.bool,hasTitleNoMargin:o.bool,hasToggleGridColor:o.bool,isDotClickable:o.bool,layout:o.string,paginationStyle:o.string,pos:o.number,sectionTitleVariation:o.string,selectedToggleChipTitle:o.string,shouldAppendFilterInUrl:o.bool,shouldDisplaySingleSlot:o.bool,shouldEnableBundleComponentAnalytics:o.bool,shouldEnableProductDisclaimer:o.bool,shouldNotDisplayAllLabel:o.bool,trackingNamespace:o.shape({toggle:o.string,card:o.string})},T.displayName="FilterableSummaryList",T.defaultProps={buttonConfig:{name:"",showButton:!1,url:""},controlButtonIcon:"ChevronIcon",controlPlacement:"space-between",controlPosition:"center",hasControls:!0,hasHigherHorizontalPadding:!1,hasImpressionTracking:!1,hasNoHorizontalScrollCarousel:!1,hasPagination:!0,hasTitleMarginTop:!1,isDotClickable:!1,shouldAppendFilterInUrl:!0,shouldDisplaySingleSlot:!1,shouldEnableBundleComponentAnalytics:!1,shouldEnableProductDisclaimer:!1,shouldNotDisplayAllLabel:!1},T.displayName="FilterableSummaryList",e.exports=T},1604:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});const i=n(2);t.default=i.defineMessages({atArticleGalleryCarouselBtnText:{id:"FilterableSummaryList.AtArticleGalleryCarouselBtnText",defaultMessage:"VIEW ALL {categoryName}",description:"Article and Gallery carousel button text"},atArticleGalleryCarouselBtnTextWithCtaLink:{id:"FilterableSummaryList.AtArticleGalleryCarouselBtnTextWithCtaLink",defaultMessage:"{categoryName}",description:"Article and Gallery carousel button text for cta link"}})},162:function(e,t,n){const{asVariation:i}=n(13),o=n(163);o.ContentCenterNoBackground=i(o,"ContentCenterNoBackground",{contentAlign:"center",hasBackground:!1}),o.ContentRightNoBackground=i(o,"ContentRightNoBackground",{contentAlign:"right",hasBackground:!1}),o.ContentLeftNoBackground=i(o,"ContentLeftNoBackground",{contentAlign:"left",hasBackground:!1}),e.exports=o},163:function(e,t,n){const i=n(1),o=n(8),a=n(0),r=n(11),{trackComponent:s}=n(5),{UtilityLedeHeader:l,UtilityLedeWrapper:d,UtilityLedeHedText:c,UtilityLedeDekText:p,UtilityLedeImage:g}=n(146),u=({ariaLive:e,className:t,dangerousDek:n,dangerousHed:i,image:r,shouldUseAlternativeStyle:u,hasInverted:m,variations:h})=>{a.useEffect(()=>{s("UtilityLede",h)},[]);const y=r&&Object.keys(r).length>0;return a.createElement(l,{className:o("utility-lede",t),"aria-live":e,"aria-label":"UtilityPageHeader",contentAlign:h.contentAlign,hasBackground:h.hasBackground,hasImage:y,alternativeStyle:u},r&&a.createElement(g,Object.assign({hasImage:y},r)),a.createElement(d,{alternativeStyle:u},a.createElement(c,{"data-testid":"UtilityLedeHedText",hasImage:y,dangerouslySetInnerHTML:{__html:i},hasInverted:m}),n&&a.createElement(p,{"data-testid":"UtilityLedeDekText",hasImage:y,dangerouslySetInnerHTML:{__html:n}})))};u.propTypes={ariaLive:i.string,className:i.string,dangerousDek:i.string,dangerousHed:i.string.isRequired,hasInverted:i.bool,image:i.shape(r.propTypes),shouldUseAlternativeStyle:i.bool,variations:i.shape({contentAlign:i.oneOf(["center","left","right"]),hasBackground:i.bool})},u.defaultProps={shouldUseAlternativeStyle:!1,variations:{contentAlign:"center",hasBackground:!0}},e.exports=u},1644:function(e,t,n){const{asConfiguredComponent:i}=n(9);e.exports=i(n(1645),"SponsoredContentHeader")},1645:function(e,t,n){const i=n(8),o=n(1),a=n(0),{useIntl:r}=n(2),s=n(1571).default,{trackComponent:l}=n(5),{SponsoredContentHeaderWrapper:d,SponsoredContentHeaderExternalLink:c,SponsoredContentHeaderInfoBox:p,SponsoredContentHeaderBylineText:g,SponsoredContentHeaderResponsiveAsset:u,SponsoredContentHeaderSponsorName:m}=n(1646),{getBylineText:h,getLogoRatio:y,getSponsoredHeaderDisplayOptions:b,getValidBylineOption:f}=n(1647),C=({brandName:e,bylineOption:t,bylineVariant:n,campaignUrl:o,className:C,sponsorLogo:v,sponsorName:S})=>{a.useEffect(()=>{l("SponsoredContentHeader")},[]);const w=r(),k=f(t),{isBrandedLegacy:x,shouldDisplayLogo:$}=b({bylineOption:k,bylineVariant:n,hasLogo:!!v}),T=h({intl:w,bylineOption:k,brandName:e}),E=y({sponsorLogo:v});return a.createElement(d,{isBrandedLegacy:x,className:i(C,k.replace("_","-")),"data-testid":"SponsoredContentHeaderWrapper"},a.createElement(c,{additionalRelVals:["sponsored"],href:o||void 0,attributes:{"aria-label":w.formatMessage(s.sponsoredLinkCTA,{sponsorName:S})}},a.createElement(p,{isBrandedLegacy:x},a.createElement(g,{isBrandedLegacy:x,"data-testid":"SponsoredContentHeaderBylineText"},T),$?a.createElement(u,{altText:v.altText,constrainLogoByWidth:E>1,isBrandedLegacy:x,sources:v.sources}):a.createElement(m,{isBrandedLegacy:x},S))))};C.propTypes={brandName:o.string.isRequired,bylineOption:o.string.isRequired,bylineVariant:o.string.isRequired,campaignUrl:o.string.isRequired,className:o.string,sponsorLogo:o.any,sponsorName:o.string.isRequired},C.displayName="SponsoredContentHeader",e.exports=C},1646:function(e,t,n){const i=n(3).default,{BaseText:o}=n(10),{calculateSpacing:a,getColorStyles:r,getTypographyStyles:s}=n(4),l=n(93),d=n(33),c=i.div.withConfig({displayName:"SponsoredContentHeaderWrapper"})`
  display: flex;
  justify-content: center;
  ${({theme:e})=>r(e,"background-color","colors.discovery.body.light.background")};
  padding: ${a(2)};
  width: 100%;
  min-height: 80px;

  ${({isBrandedLegacy:e})=>e?`\n    grid-column: 1 / -1;\n    padding: unset;\n    height: 60px;\n    min-height: unset;\n\n    &.light-theme {\n      ${({theme:e})=>r(e,"background-color","colors.background.light")}\n    }\n  `:""}
`,p=i(d).withConfig({displayName:"SponsoredContentHeaderExternalLink"})`
  text-decoration: none;
`,g=i.div.withConfig({displayName:"SponsoredContentHeaderInfoBox"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  ${({isBrandedLegacy:e})=>e?"& { flex-direction: unset; }":""}
`,u=i(o).withConfig({displayName:"SponsoredContentHeaderBylineText"})`
  ${({theme:e,isBrandedLegacy:t})=>t?`\n      ${s(e,"typography.definitions.globalEditorial.context-primary")};\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: flex-end;\n      padding-right: ${a(2)};\n      height: 100%;\n\n      &.light-theme {\n        ${({theme:e})=>r(e,"color","colors.discovery.body.light.heading")}\n      }\n    }\n  `:""}
`;u.defaultProps={as:"div",colorToken:"colors.consumption.lead.standard.syndication",typeIdentity:"typography.definitions.globalEditorial.syndication"};const m=i(l).withConfig({displayName:"SponsoredContentHeaderResponsiveAsset"})`
  &.responsive-asset {
    display: flex;
    align-items: center;
    margin-top: ${a(1)};
    overflow: visible;

    ${({theme:e,isBrandedLegacy:t})=>t?`\n      justify-content: flex-start;\n      margin-top: unset;\n      padding-left: ${a(2)};\n      border-left: 1px solid;\n      ${r(e,"border-color","colors.discovery.body.light.divider")};\n    `:""}
  }

  &.responsive-image {
    height: 60px;

    img {
      height: 100%;
    }

    ${({constrainLogoByWidth:e})=>e?"{\n      width: 60px;\n      height: unset;\n\n      img {\n        height: unset;\n      }\n    }":""}
  }
`,h=i(o).withConfig({displayName:"SponsoredContentHeaderSponsorName"})`
  display: flex;
  align-items: center;
  margin-top: ${a(.5)};

  ${({isBrandedLegacy:e,theme:t})=>e?`\n    justify-content: flex-start;\n    margin-top: unset;\n    padding-left: ${a(.5)};\n\n    &.light-theme {\n      ${r(t,"color","colors.discovery.body.light.syndication")};\n    }\n  `:""}
`;h.defaultProps={as:"div",colorToken:"colors.consumption.lead.standard.syndication",typeIdentity:"typography.definitions.consumptionEditorial.description-feature"},e.exports={SponsoredContentHeaderWrapper:c,SponsoredContentHeaderExternalLink:p,SponsoredContentHeaderInfoBox:g,SponsoredContentHeaderBylineText:u,SponsoredContentHeaderResponsiveAsset:m,SponsoredContentHeaderSponsorName:h}},1647:function(e,t,n){const i=n(1571).default,o={brand_x_advertiser:i.bylineBrandXAdvertiser,branded_content:i.bylineBrandedContent,created:i.bylineCreated,original_content_by:i.bylineOriginalContentBy,paid_post:i.bylinePaidPost,produced:i.bylineProduced,produced_by_advertiser:i.bylineProducedByAdvertiser,produced_by_brand:i.bylineProducedByBrand,sponsored:i.bylineSponsored,sponsored_content:i.bylineSponsoredContent,in_collaboration:i.bylineInCollaboration,sponsored_by:i.bylineSponsoredBy,in_partnership:i.bylineInPartnership,advertisement_feature_with:i.bylineAdvertisementFeatureWith};function a(e){return Object.prototype.hasOwnProperty.call(o,e)?e:"produced_by_advertiser"}e.exports={BYLINE_TEMPLATES:o,getBylineText:function({intl:e,bylineOption:t="produced_by_advertiser",brandName:n}){return e.formatMessage(o[t],{brandName:n})},getLogoRatio:function({sponsorLogo:e}){var t,n,i,o;return((null===(n=null===(t=null==e?void 0:e.sources)||void 0===t?void 0:t.sm)||void 0===n?void 0:n.height)||0)/((null===(o=null===(i=null==e?void 0:e.sources)||void 0===i?void 0:i.sm)||void 0===o?void 0:o.width)||1)},getSponsoredHeaderDisplayOptions:function({bylineOption:e,bylineVariant:t,hasLogo:n}){const i=a(e),o="sponsored"===i||"produced"===i;return{isBrandedLegacy:o,shouldDisplayLogo:n&&("logo"===t||o)}},getValidBylineOption:a}},1648:function(e,t,n){const{asConfiguredComponent:i}=n(9),o=n(1649);e.exports=i(o,"VersoFilterableSummaryList")},1649:function(e,t,n){const i=n(0),o=n(1),a=n(141),r=n(48),{useIntl:s}=n(2),{Slot:l}=n(1539),d=n(473),c=n(1650),p=n(1653),{FilterableSummaryList:g}=n(1654),u=n(251),m=n(42),{trackComponent:h}=n(5),{formatGtmData:y,productImpressionTracking:b}=n(241),f=({copilotId:e,buttonConfig:t,ctaCardAspectRatio:n,dangerousHed:o,dangerousDek:f,dropShipSellers:C,groups:v,hasBorder:S,hasBorderBottom:w,hasCarouselSliderPagination:k,hasControls:x,hasImageGrid:$,hasAtRetailerNameLowerCase:T,hasNavigationButtonVariation:E,hasPadding:N,hasProductPriceColor:L,hasProductNewPriceColor:I,hasProductWhiteBackground:B,hasGridColumn:A,hasUnderlineHed:P,isProductCardName:D,isProductCardRetailerName:R,shouldCheckProductInView:M,hasMarginTopAuto:O,hasPLPBrandNameContextTitle:H,hasPLPCardNameDescriptionCore:_,paginationStyle:W,sectionTitleVariation:G,shouldEnableBundleComponentAnalytics:j,shouldHideDangerousDek:F,shouldHidePublishDate:V,shouldRenderCtaCard:U,showOfferUrl:z,summaryItemVariation:q,shouldUseProductPriceSecondary:K,expVariationName:Y,isDropshipProduct:Z,trackingNamespace:X,isDotClickable:J,layout:Q,gridConfig:ee,priceFormatting:te})=>{i.useEffect(()=>{h("VersoFilterableSummaryList")},[]);const{formatMessage:ne}=s(),ie=Q||"Carousel",oe="ProductCarousel"===ie,ae="GridFourColumns"===ie?"PLP":Q,re=o?o.replace(/[^a-zA-Z]+/gi,"-").toLowerCase():"",{gridItemColSpan:se}=ee||{};i.useEffect(()=>{oe||(window.addEventListener("scroll",r(()=>{b(document.getElementsByClassName("impressionTracking"),ae)},1e3)),window.addEventListener("load",()=>b(document.getElementsByClassName("impressionTracking"),ae)))},[ae,oe]);function le(t){switch(ie){case"ProductCarousel":case"GridFourColumns":return(t=>{const n=m.TextBelowLeft;return t.items.map((t,o)=>"product"===t.contentType?i.createElement(u,Object.assign({},t,{key:`${t.dangerousHed}-${o}`,hasAtRetailerNameLowerCase:T,hasImageGrid:$,hasProductPriceColor:L,hasProductNewPriceColor:I,shouldUseProductPriceSecondary:K,hasProductWhiteBackground:B,isProductCardName:D,isProductCardRetailerName:R,hasMarginTopAuto:O,hasPLPBrandNameContextTitle:H,hasPLPCardNameDescriptionCore:_,hasUnderlineHed:P,hasCarouselControl:oe,shouldCheckProductInView:M,layout:ie,copilotID:e,dropShipSellers:C,isDropshipProduct:Z,showOfferUrl:z,hasImpressionTracking:!0,data_item:t,onClick:()=>y(window,Object.assign(Object.assign({},t),{expVariationName:Y}),o,ae,re),expVariationName:Y,layoutName:re,priceFormatting:te})):i.createElement(n,Object.assign({gridItemColSpan:se,shouldHideIcon:!0,shouldHideMetadataSecondary:!0},t,{key:`${t.dangerousHed}-${o}`,hasBorder:S,hasUnderlineHed:P,shouldHideDangerousDek:F,shouldHidePublishDate:!0,hasHedCorePrimary:!0})))})(t);case"ArticleCarousel":return(e=>{const t=m[q];return e.items.map((e,n)=>i.createElement(t,Object.assign({},e,{key:`${e.dangerousHed}-${n}`,hasBorder:S,hasUnderlineHed:P,shouldHideDangerousDek:F,shouldHidePublishDate:V})))})(t);default:return t.items.map((e,t)=>i.createElement(d,Object.assign({},e,{key:`${e.hed}-${t}`})))}}const de=A&&"GridFourColumns"===ie,[ce]=i.useState(parseInt(a(),10));return v&&0!==v.length?i.createElement(g,{dangerousHed:o,dangerousDek:f,sectionTitleVariation:G,shouldEnableBundleComponentAnalytics:j,hasImpressionTracking:!0,trackingNamespace:X,isDotClickable:J,hasCarouselSliderPagination:k,hasCarouselControl:oe,hasControls:x,hasNavigationButtonVariation:E,hasToggleGridColor:de,hasPadding:N,layout:ie,pos:ce,paginationStyle:W,buttonConfig:t,gridConfig:ee,hasBorderBottom:w},v.map(e=>{const t=le(e);U&&e.url&&t.push(i.createElement(c,{aspectRatio:n,key:"cta-"+e.label,url:e.url},ne(p.ctaMessage,{groupName:e.label.toLocaleLowerCase()})));const o=t.filter(e=>{var t,n,i;return((null===(n=null===(t=null==e?void 0:e.props)||void 0===t?void 0:t.image)||void 0===n?void 0:n.id)||(null===(i=null==e?void 0:e.props)||void 0===i?void 0:i.aspectRatio))&&e});return i.createElement(l,{key:e.label,name:e.label,url:e.url},o)})):null};f.propTypes={buttonConfig:o.object,copilotId:o.string,ctaCardAspectRatio:o.arrayOf(o.number),dangerousDek:o.string,dangerousHed:o.string,dropShipSellers:o.arrayOf(o.string),expVariationName:o.string,gridConfig:o.object,groups:o.arrayOf(o.object),hasAtRetailerNameLowerCase:o.bool,hasBorder:o.bool,hasBorderBottom:o.bool,hasCarouselSliderPagination:o.bool,hasControls:o.bool,hasGridColumn:o.bool,hasImageGrid:o.bool,hasMarginTopAuto:o.bool,hasNavigationButtonVariation:o.bool,hasPadding:o.bool,hasPLPBrandNameContextTitle:o.bool,hasPLPCardNameDescriptionCore:o.bool,hasProductNewPriceColor:o.bool,hasProductPriceColor:o.bool,hasProductWhiteBackground:o.bool,hasToggleGridColor:o.bool,hasUnderlineHed:o.bool,isDotClickable:o.bool,isDropshipProduct:o.bool,isProductCardName:o.bool,isProductCardRetailerName:o.bool,layout:o.string,paginationStyle:o.string,priceFormatting:o.shape({fractionDigits:o.number,shouldFormatDecimalSeparator:o.bool}),sectionTitleVariation:o.string,shouldCheckProductInView:o.bool,shouldEnableBundleComponentAnalytics:o.bool,shouldHideDangerousDek:o.bool,shouldHidePublishDate:o.bool,shouldRenderCtaCard:o.bool,shouldUseProductPriceSecondary:o.bool,showNewProductCardDesign:o.bool,showOfferUrl:o.bool,summaryItemVariation:o.string,trackingNamespace:o.shape({toggle:o.string,card:o.string})},f.displayName="VersoFilterableSummaryList",f.defaultProps={ctaCardAspectRatio:[2,1],dropShipSellers:[],hasAtRetailerNameLowerCase:!1,hasMarginTopAuto:!1,isDotClickable:!1,isDropshipProduct:!1,isProductCardRetailerName:!1,layout:"Carousel",sectionTitleVariation:"TextCenter",shouldEnableBundleComponentAnalytics:!1,shouldRenderCtaCard:!1,showNewProductCardDesign:!1,summaryItemVariation:"TextBelowLeft"},e.exports=f},1650:function(e,t,n){e.exports=n(1651)},1651:function(e,t,n){const i=n(0),o=n(1),{CTACardBody:a,CTACardContent:r,CTACardFooter:s,CTACardIcon:l,CTACardText:d,CTACardWrapper:c}=n(1652),p=({aspectRatio:e,children:t,url:n})=>i.createElement(c,{aspectRatio:e},i.createElement(r,null,i.createElement(a,null,i.createElement(d,{href:n},t)),i.createElement(s,null,i.createElement("a",{href:n},i.createElement(l,null)))));p.propTypes={aspectRatio:o.arrayOf(o.number),children:o.node.isRequired,url:o.string.isRequired},p.defaultProps={aspectRatio:[1,1]},e.exports=p},1652:function(e,t,n){const{default:i}=n(3),{BREAKPOINTS:o}=n(6),{calculateSpacing:a,getColorToken:r,getDecoration:s,minScreen:l}=n(4),{BaseLink:d}=n(10),c=n(119),p=i.div.withConfig({displayName:"CTACardWrapper"})`
  position: relative;
  border-radius: ${({theme:e})=>s(e,"cardRadiusSm")};
  background-color: ${r("colors.discovery.body.brand.background")};
  padding-top: ${({aspectRatio:e})=>e[1]/e[0]*100}%;

  ${l(o.md)} {
    border-radius: ${({theme:e})=>s(e,"cardRadiusMd")};
  }

  ${l(o.lg)} {
    border-radius: ${({theme:e})=>s(e,"cardRadiusLg")};
  }
`,g=i.div.withConfig({displayName:"CTACardContent"})`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  flex-direction: column;
  padding: 0 ${a(3)} ${a(2)}
    ${a(3)};

  ${l(o.lg)} {
    padding: 0 ${a(5)} ${a(5)}
      ${a(5)};
  }
`,u=i.div.withConfig({displayName:"CTACardBody"})`
  display: flex;
  flex: 1 0 auto;
  align-items: center;
`,m=i.div.withConfig({displayName:"CTACardFooter"})`
  height: ${a(6)};
`,h=i(d).withConfig({displayName:"CTACardText"})``;h.defaultProps={colorToken:"colors.discovery.body.brand.heading",typeIdentity:"typography.definitions.discovery.hed-core-secondary"};const y=i(c).withConfig({displayName:"CTACardIcon"})`
  border-radius: 50%;
  background-color: ${r("colors.discovery.body.brand.context-signature")};
  width: ${a(6)};
  height: ${a(6)};
  fill: ${r("colors.discovery.body.brand.context-texture")};
`;e.exports={CTACardBody:u,CTACardContent:g,CTACardFooter:m,CTACardIcon:y,CTACardText:h,CTACardWrapper:p}},1653:function(e,t,n){const{defineMessages:i}=n(2);e.exports=i({ctaMessage:{id:"VersoFilterableSummaryList.CTAMessage",defaultMessage:"See more {groupName} recipes",description:"Message to display in the CTACard"}})},1654:function(e,t,n){const{default:i}=n(3),{BREAKPOINTS:o}=n(6),{minScreen:a,calculateSpacing:r,minMaxScreen:s}=n(4),{cssVariablesGrid:l,applyGridSpacing:d}=n(16),{LabelText:c,ListWrapper:p}=n(148),{CarouselListItem:g}=n(46),{CarouselWrapper:u,ChipWrapper:m}=n(1540),h=i(n(1602)).withConfig({displayName:"FilterableSummaryList"})`
  margin: 0 auto;
  ${({hasToggleGridColor:e})=>!e&&`max-width:${o.fullBleed};\n  ${l()}`}
  ${({hasPadding:e})=>!e&&d("padding")}
  ${g}:first-child {
    box-sizing: content-box;
    ${({hasPadding:e})=>e?`padding-left:${r(8)};\n      ${s(0,o.md)}\n      {  \n        padding-left:${r(3)};  \n      }`:"padding-left: 0;"}
  }
  ${g}:last-child {
    box-sizing: content-box;
    ${({hasPadding:e})=>e?`padding-right:${r(8)};\n    ${s(0,o.md)}\n     { padding-right:${r(3)}; \n    }`:null}
  }
  ${a(o.xxl)} {
    ${m},
    ${u} {
      ${({hasToggleGridColor:e})=>!e&&"margin-left: revert;\n      margin-right: revert;"}
      ${c} ,
      ${p} {
        padding-right: revert;
        padding-left: revert;
      }
      ${g}:first-child {
        ${({hasPadding:e})=>!e&&"padding-left: revert;"}
      }
      ${g}:last-child {
        ${({hasPadding:e})=>!e&&"padding-right: revert;"}
      }
    }
  }
`;e.exports={FilterableSummaryList:h}},172:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});const i=n(2);t.default=i.defineMessages({showAllPhotos:{id:"ContentHeader.ShowAllPhotos",defaultMessage:"Show all Photos",description:"Call to action to view entire photo gallery"},readReviews:{id:"ContentHeader.ReadReviews",defaultMessage:"Read Reviews",description:"Call to action to read reviews"}})},1733:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AGE_GATE_COOKIE_EXPIRATION_IN_DAYS=t.AGE_GATE_COOKIE_KEY=t.AGE_GATE_ACCEPT=void 0,t.AGE_GATE_ACCEPT="accept",t.AGE_GATE_COOKIE_KEY="ageGate",t.AGE_GATE_COOKIE_EXPIRATION_IN_DAYS=28},1734:function(e,t,n){e.exports=n(1735)},1735:function(e,t,n){const i=n(1),o=n(0),a=n(47),{PaywallInlineBarrierWrapper:r}=n(1736),{trackComponent:s}=n(5),l=function(e){o.useEffect(()=>{s("PaywallInlineBarrier")},[]);const{position:t,className:n}=e;return o.createElement(r,{className:n,"data-testid":"PaywallInlineBarrierWrapper"},o.createElement(a,{position:t,aria:{"aria-live":"polite"}}))};l.propTypes={className:i.string,position:i.string},l.defaultProps={position:"paywall-inline-barrier"},e.exports=l},1736:function(e,t,n){const{default:i}=n(3),o=i.aside.withConfig({displayName:"PaywallInlineBarrierWrapper"})`
  width: auto;
  height: auto;

  @media print {
    display: none;
  }
`;e.exports={PaywallInlineBarrierWrapper:o}},1737:function(e,t,n){const i=n(0),{useState:o}=n(0),a=n(1),r=n(173),{PaymentGateway:s}=n(23),{asConfiguredComponent:l}=n(9),{StickyMidContentAdWrapper:d}=n(252),c={"300x250":500,"300x100":400,"300x50":300,"320x50":300},p=e=>{const{isStickyEnabled:t}=Object.assign({},e),[n,a]=o(),l=e=>{a(e)},p=n&&2===n.length?`${n[0]}x${n[1]}`:"0x0";return t?i.createElement(d,{height:c[p],className:"ad-stickymidcontent"},i.createElement(s,{group:"ads"},i.createElement(r,Object.assign({position:"mid-content",handleAdSizeChange:l},e)))):i.createElement(s,{group:"ads"},i.createElement(r,Object.assign({position:"mid-content",handleAdSizeChange:l},e)))};p.propTypes={isStickyEnabled:a.bool},p.defaultProps={isStickyEnabled:!1},p.displayName="StickyMidContent",e.exports=l(p,"StickyMidContent")},1738:function(e,t,n){const i=n(1),o=n(0),{useIntl:a}=n(2),r=n(14),s=n(42),l=n(1739).default,{componentTracking:d}=n(12),{useOnAdFilled:c}=n(73),{asConfiguredComponent:p}=n(9),{trackComponent:g}=n(5),{SummaryCollectionSplitColumnsWrapper:u,SummaryCollectionSplitColumnsItems:m,SummaryCollectionSplitColumnsRecsWrapper:h,SummaryCollectionSplitColumnsItem:y}=n(1740),b=({className:e,dangerousHed:t,guideItem:n,hasBackgroundColor:i,hasBorderItem:s,hasExtraRubricSpace:p,hasLessBottomSpace:b,hasTighterBylineSpacing:f,itemHedTag:C,location:v,recommendedItems:S,recommendedItemCount:w,shouldHideDangerousDek:k,shouldAppendReadMoreLinkForDek:x,shouldHideBylines:$,shouldEnableBundleComponentAnalytics:T,summaryItemRubricVariation:E,trackingNamespace:N})=>{o.useEffect(()=>{g("SummaryCollectionSplitColumns")},[]);const{formatMessage:L}=a(),{items:I,recommendedType:B,recommendedClickout:A}=S,P=C||(t?"h3":"h2"),[D]=c("trending-ad");return o.createElement(u,{className:e,"data-testid":"SummaryCollectionSplitColumnsWrapper",hasBackgroundColor:i},o.createElement(m,{"data-testid":"SummaryCollectionSplitColumnsItems",showTrendingAd:D},o.createElement(h,null,o.createElement("p",null,L(l.recommendedTitle,{recommendedType:B})),I.slice(0,w).map((e,t)=>{const n=d.addDataSectionTitleAttribute(T,null==N?void 0:N.item,t);return o.createElement(o.Fragment,{key:t},o.createElement(y,Object.assign({},e,{analyticsDataAttribute:n,variation:"TextBelowImageLeftHasRuleWithDek",hasBorder:s,hedTag:P,key:t,rubricVariation:E,"data-testid":"SummaryCollectionSplitColumnsItem",shouldHideDangerousDek:k,shouldAppendReadMoreLinkForDek:x,shouldHideBylines:$,hasLessBottomSpace:b,hasExtraRubricSpace:p})))}),A&&o.createElement(r.Utility,{label:L(l.viewAllButton,{location:v,recommendedType:B}),inputKind:"link",href:A})),o.createElement(y,Object.assign({},n[0],{image:n[0].lede,dangerousHed:v?L(l.guideItemHed,{location:v}):t,variation:"TextBelowImageLeftHedAndDek",hasBorder:s,hedTag:P,rubricVariation:E,"data-testid":"SummaryCollectionSplitColumnsItem",shouldHideBylines:$,hasTighterBylineSpacing:f,hasLessBottomSpace:b,hasExtraRubricSpace:p}))))};b.propTypes={className:i.string,dangerousHed:i.string,guideItem:i.arrayOf(i.shape(s.propTypes)).isRequired,hasBackgroundColor:i.bool,hasBorderItem:i.bool,hasExtraRubricSpace:i.bool,hasLessBottomSpace:i.bool,hasTighterBylineSpacing:i.bool,itemHedTag:i.string,location:i.string,recommendedItemCount:i.number,recommendedItems:i.shape({items:i.arrayOf(i.shape(s.propTypes)),recommendedType:i.string,recommendedClickout:i.string}).isRequired,shouldAppendReadMoreLinkForDek:i.bool,shouldEnableBundleComponentAnalytics:i.bool,shouldHideBylines:i.bool,shouldHideDangerousDek:i.bool,summaryItemRubricVariation:i.string,trackingNamespace:i.object},b.defaultProps={hasBackgroundColor:!0,hasBorderItem:!0,hasExtraRubricSpace:!1,hasLessBottomSpace:!1,hasTighterBylineSpacing:!1,recommendedItemCount:2,shouldAppendReadMoreLinkForDek:!0,shouldHideBylines:!0,shouldHideDangerousDek:!1},b.displayName="SummaryCollectionSplitColumns",e.exports=p(b,"SummaryCollectionSplitColumns")},1739:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});const i=n(2);t.default=i.defineMessages({viewAllButton:{id:"SummaryCollectionSplitColumns.ViewAllButton",defaultMessage:"View All {location} {recommendedType}",description:"button label for view all button"},guideItemHed:{id:"SummaryCollectionSplitColumns.GuideItemHed",defaultMessage:"{location} Travel Guide",description:"dangerousHed for guideItem"},recommendedTitle:{id:"SummaryCollectionSplitColumns.RecommendedTitle",defaultMessage:"Recommended {recommendedType}",description:"recommended title for recircs"}})},1740:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};const o=n(0),{default:a}=n(3),{BylineWrapper:r,BylinePreamble:s,BylineName:l,BylineLink:d}=n(98),c=n(42),{GridItem:p}=n(25),g=n(19),{calculateSpacing:u,getColorToken:m,getColorStyles:h,getTypographyStyles:y,minScreen:b,styledProperty:f}=n(4),{BREAKPOINTS:C}=n(6),v=a.div.withConfig({displayName:"SummaryCollectionSplitColumnsWrapper"})`
  margin: ${u(4)} 0;
  background-color: ${({hasBackgroundColor:e})=>e?m("colors.discovery.body.light.background"):"transparent"};
`,S=`\n  &:last-child {\n    padding-bottom: 0;\n    \n    ${b(C.md)}{\n      padding-bottom: ${u(2)};\n    }\n  }\n`,w=a(e=>{var{columnAmount:t,variation:n,shouldHideDangerousDek:a,hasExtraRubricSpace:r,hasLessBottomSpace:s,hasTighterBylineSpacing:l}=e,d=i(e,["columnAmount","variation","shouldHideDangerousDek","hasExtraRubricSpace","hasLessBottomSpace","hasTighterBylineSpacing"]);const p=c[n];return o.createElement(p,Object.assign({},d))}).withConfig({displayName:"SummaryCollectionSplitColumnsItem"})`
  ${v} & {
    padding-bottom: ${u(2)};

    ${b(C.md)} {
      border-bottom: 0;
    }

    .summary-item__rubric {
      ${y("typography.definitions.globalEditorial.context-primary")}
      display: block;
      color: ${m("colors.discovery.body.light.context-signature")};

      ${b(C.md)} {
        margin-bottom: ${({hasExtraRubricSpace:e})=>u(e?1:.5)};
      }
    }

    .summary-item__hed-link {
      color: ${m("colors.discovery.body.light.heading")};

      &::after {
        display: none;
      }
    }

    .summary-item__hed {
      ${y("typography.definitions.discovery.hed-bulletin-primary")}
      margin-bottom: 0;
    }

    .summary-item__dek {
      ${y("typography.definitions.discovery.description-page")}
      display: ${({shouldHideDangerousDek:e})=>e?"none":"block"};
      margin: ${u(2)} 0 ${u(1)};
      color: ${m("colors.discovery.body.white.description")};
    }

    .summary-item__content {
      padding-bottom: ${({hasLessBottomSpace:e})=>e?u(0):""};
    }

    .summary-item__byline {
      margin-top: ${({hasTighterBylineSpacing:e})=>u(e?1:2)};

      ${r},
      ${s},
      ${l},
      ${d} {
        ${y("typography.definitions.globalEditorial.accreditation-core")}
        color: ${m("colors.discovery.body.light.accreditation")};
      }

      ${d}:link {
        color: ${m("colors.discovery.body.light.accreditation")};
      }
    }

    .summary-item__metadata-secondary {
      margin: ${u(2)} 0 0 0;
    }

    ${f("hasBorder",!1,S)};
  }
`,k=a(g.ThreeUp).withConfig({displayName:"SummaryCollectionSplitColumnsItems"})`
  ${p} {
    grid-column: 1 / -1;
    margin-top: ${u(2)};
  }
  ${p}:first-of-type {
    margin: ${u(3)} 0;
    ${b(C.md)} {
      grid-column: span 7;
    }
  }
  ${p}:last-of-type {
    ${b(C.md)} {
      grid-column: span 5;
      margin: ${u(3)} 0;
    }
  }
`,x=a("div").withConfig({displayName:"SummaryCollectionSplitColumnsRecsWrapper"})`
  display: grid;
  grid-column-gap: ${u(3)};
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: ${u(2)};
  height: 100%;

  ${b(C.md)} {
    display: grid;
    grid-template-rows: 5% 75% 20%;
    grid-row-gap: ${u(1)};
    border-right: 1px solid;
    border-color: ${({theme:e})=>h(e,"border-color","colors.consumption.body.standard.divider")};
    padding-right: ${u(3)};
  }

  p {
    grid-column: span 6;
    grid-row: 1 / 1;
    align-self: center;
    margin: 0;
    ${({theme:e})=>y(e,"typography.definitions.foundation.link-primary")}
  }

  .summary-item {
    display: grid;
    grid-column-gap: 1rem;
    grid-column: span 6;
    grid-template-columns: 40% 60%;
    align-items: center;

    ${b(C.sm)} {
      grid-template-columns: 1fr 1fr;
    }

    ${b(C.md)} {
      display: unset;
      grid-column: span 3;
      grid-row: 2 / 2;
    }
  }

  .button {
    grid-column: span 6;
    max-height: ${u(6)};
    ${b(C.md)} {
      grid-column: 2 / span 4;
      grid-row: 3;
    }
    ${b(C.lg)} {
      justify-self: center;
      padding: 0 ${u(6)};
    }
  }
`;e.exports={SummaryCollectionSplitColumnsWrapper:v,SummaryCollectionSplitColumnsItems:k,SummaryCollectionSplitColumnsRecsWrapper:x,SummaryCollectionSplitColumnsItem:w}},1916:function(e,t,n){const{asConfiguredComponent:i}=n(9),o=n(1917);e.exports=i(o,"AgeGate")},1917:function(e,t,n){const i=n(0),o=n(1),{useIntl:a}=n(2),{trackComponent:r}=n(5),{HiddenCheckbox:s,Overlay:l,Title:d,Text:c,Logo:p,DefaultLogo:g,AgeGateButton:u}=n(1918),{AGE_GATE_ACCEPT:m,AGE_GATE_COOKIE_KEY:h}=n(1733),{hasContentWarnings:y,acceptAgeGatePrompt:b}=n(1919),{getCookie:f}=n(41),C=n(1920).default,v=({hed:e,dek:t,acceptLabel:n,declineLabel:o,logo:v,content:S,cookieExpirationInDays:w,brandContentWarnings:k})=>{i.useEffect(()=>{r("AgeGate")},[]);const{useState:x,useEffect:$}=i,{formatMessage:T}=a(),[E,N]=x(!1);if($(()=>{const e=!(f(h)===m)&&y({content:S,brandContentWarnings:k});N(e)},[S,k]),!E)return null;const L=null!=t?t:T(C.ageGateDekText);return i.createElement(i.Fragment,null,i.createElement(s,{id:"age-gate-check"}),i.createElement(l,{id:"age-gate-overlay",role:"dialog","aria-labelledby":"age-gate-title","aria-describedby":"age-gate-description"},v?i.createElement(p,{src:v,alt:e}):i.createElement(g,{width:96,height:96}),i.createElement(d,{as:"h2",id:"age-gate-title"},null!=e?e:T(C.ageGateHedText)),L&&i.createElement(c,{id:"age-gate-description"},L),i.createElement("label",{htmlFor:"age-gate-check",key:"age-gate-label-accept"},i.createElement(u,{inputKind:"link",onClickHandler:()=>((e,t)=>{e(!1),b(t)})(N,w),key:"age-gate-button-accept",dataAttrs:{"data-test-id":"age-gate-button-accept"},label:n||T(C.ageGateAcceptLabel)})),i.createElement(u,{href:"/",inputKind:"link",key:"age-gate-button-decline",dataAttrs:{"data-test-id":"age-gate-button-decline"},label:o||T(C.ageGateDeclineLabel)})))};v.displayName="AgeGate",v.propTypes={acceptLabel:o.string,brandContentWarnings:o.array,content:o.object.isRequired,cookieExpirationInDays:o.number,declineLabel:o.string,dek:o.string,hed:o.string,logo:o.string},v.defaultProps={brandContentWarnings:["sexual_content","drug_content","death_content","alcohol_content"]},e.exports=v},1918:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.AgeGateButton=t.Text=t.Title=t.Logo=t.DefaultLogo=t.Overlay=t.HiddenCheckbox=void 0;const o=i(n(3)),a=n(17),r=n(4),s=i(n(116)),l=n(10),d=i(n(14));t.HiddenCheckbox=o.default.input.withConfig({displayName:"AgeGateCheckbox"})``,t.HiddenCheckbox.defaultProps={hidden:!0,type:"checkbox"},t.Overlay=o.default.div.withConfig({displayName:"AgeGateOverlay"})`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  background: ${r.getColorToken("colors.consumption.lead.inverted.background")};
  padding: 0 1rem;
  width: 100%;
  height: 100%;
  text-align: center;

  ${t.HiddenCheckbox}:checked ~ & {
    display: none;
  }

  @media (min-width: ${a.minThresholds.lg}px) {
    padding: 0 10rem;
  }

  @media (min-width: ${a.minThresholds.xl}px) {
    padding: 0 20rem;
  }
`,t.DefaultLogo=o.default(s.default.AgeGate).withConfig({displayName:"AgeGateDefaultLogo"})`
  margin: 0 0 ${r.calculateSpacing(3)};
  fill: ${({theme:e})=>r.getColorToken(e,"colors.consumption.lead.inverted.heading")};
  width: 96px;
  height: 96px;

  path:first-of-type {
    fill: ${({theme:e})=>r.getColorToken(e,"colors.consumption.lead.inverted.accent")};
  }
`,t.Logo=o.default.img.withConfig({displayName:"AgeGateLogo"})`
  margin: 0 0 ${r.calculateSpacing(3)};
  width: 96px;
  height: 96px;
`,t.Title=o.default(l.BaseText).withConfig({displayName:"AgeGateTitle"})`
  margin: 0 0 ${r.calculateSpacing(2)};

  & + label,
  & + button {
    margin-top: ${r.calculateSpacing(2)};
  }
`,t.Title.defaultProps={colorToken:"colors.consumption.lead.inverted.heading",typeIdentity:"typography.definitions.consumptionEditorial.hed-bulletin"},t.Text=o.default(l.BaseText).withConfig({displayName:"AgeGateText"})`
  margin: 0 0 ${r.calculateSpacing(4)};
`,t.Text.defaultProps={colorToken:"colors.consumption.lead.inverted.heading",typeIdentity:"typography.definitions.consumptionEditorial.description-core"},t.AgeGateButton=o.default(d.default.Primary).withConfig({as:"a",displayName:"AgeGateButton"})`
  margin: 0 0 ${r.calculateSpacing(2)};
`},1919:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.acceptAgeGatePrompt=t.hasContentWarnings=void 0;const i=n(1733),{createCookie:o}=n(41);t.hasContentWarnings=({content:e,brandContentWarnings:t}={})=>{const{contentWarnings:n}=e||{},i=null==t?void 0:t.some(e=>null==n?void 0:n.some(t=>t.slug===e));return Boolean(i)};t.acceptAgeGatePrompt=e=>{document.cookie=o(i.AGE_GATE_COOKIE_KEY,i.AGE_GATE_ACCEPT,{expirationInMs:864e5*(e||i.AGE_GATE_COOKIE_EXPIRATION_IN_DAYS),path:"/"})}},1920:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});const i=n(2);t.default=i.defineMessages({ageGateHedText:{id:"AgeGate.HedText",defaultMessage:"Are you 18 or over?",description:"Age Gate title"},ageGateDekText:{id:"AgeGate.DekText",defaultMessage:"This material is intended for people over the age of 18",description:"Age Gate description"},ageGateAcceptLabel:{id:"AgeGate.AcceptLabel",defaultMessage:"I am 18+",description:"Age Gate accept button label"},ageGateDeclineLabel:{id:"AgeGate.DeclineLabel",defaultMessage:"I'm under 18",description:"Age Gate decline button label"}})},1921:function(e,t,n){const{asConfiguredComponent:i}=n(9),{asVariation:o}=n(13),a=n(1922);a.WithAdRail=o(a,"WithAdRail",{adRail:!0}),a.OneColumn=o(a,"OneColumn",{adRail:!1}),a.OneColumnNarrow=o(a,"OneColumnNarrow",{adRail:!1,isNarrowContentWell:!0}),e.exports=i(a,"ChunkedArticleContent")},1922:function(e,t,n){const i=n(1),o=n(0),a=n(8),r=n(19),{PaymentGateway:s}=n(23),l=n(55),d=n(1734),c=n(147),p=n(1923),{ArticlePageDisclaimer:g,ArticlePageChunksContent:u,ArticlePageChunks:m,ArticlePageDisclaimerGrid:h,PaywallInlineBarrierWithWrapperGrid:y}=n(1548),b=({body:e,hasProduct:t,linkList:n,isLinkStackEnabled:i,hasProductLisitingCarousel:c,isAffiliateLinksDisabled:b,hasTopSpacing:f,horizontalRuleStyle:C,interlude:v,multiChunkRailStrategy:S,shouldBlurText:w,shouldUsePersistentAd:k,singleChunkRailStrategy:x,variations:$,hideRecircMostPopular:T,recircMostPopular:E,showFirstRailRecirc:N,hideAutoDisclaimer:L,wordsToDisplay:I,hideAffiliateDisclaimer:B,hideProductDisclaimer:A})=>{const P=$&&$.adRail,D=a("article__body",{"article__body--grid-margins":!P}),R=P?r.NarrowContentWithWideAdRail:l,M=P?r.NarrowContentWithWideAdRail:r.WithMargins;return o.createElement(u,{isNarrowContentWell:$.isNarrowContentWell,shouldBlurText:w},(t||c)&&!b&&!L&&!B&&A&&o.createElement(h,{adRail:P,as:M},o.createElement(g,null)),o.createElement(m,{hasTopSpacing:f,horizontalRuleStyle:C,"data-testid":"ArticlePageChunks"},o.createElement(p,{jsonml:e,adRail:P,linkList:n,isLinkStackEnabled:i,multiChunkRailStrategy:S,interlude:v,FullBleedContentWrapper:R,GeneralContentWrapper:M,recircMostPopular:E,shouldUsePersistentAd:k,singleChunkRailStrategy:x,hideRecircMostPopular:T,showFirstRailRecirc:N,wordsToDisplay:I,hideAffiliateDisclaimer:B})),o.createElement(s,{group:"paywall"},o.createElement(e=>o.createElement(y,{adRail:P,as:M},o.createElement("div",{className:a("body","body__inline-barrier",D)},o.createElement("div",{className:"container container--body"},o.createElement("div",{className:"container--body-inner"},o.createElement(d,Object.assign({},e)))))),null)))};b.propTypes={body:i.array.isRequired,hasProduct:i.bool,hasProductLisitingCarousel:i.bool,hasTopSpacing:i.bool,hideAffiliateDisclaimer:i.bool,hideAutoDisclaimer:i.bool,hideProductDisclaimer:i.bool,hideRecircMostPopular:i.bool,horizontalRuleStyle:i.oneOf(["thin"]),interlude:i.shape(Object.assign(Object.assign({},c.propTypes),{isRailEligible:i.boolean})),isAffiliateLinksDisabled:i.bool,isLinkStackEnabled:i.bool,linkList:i.object,multiChunkRailStrategy:i.oneOf(["alternate"]),recircMostPopular:i.array,shouldBlurText:i.bool,shouldUsePersistentAd:i.bool,showFirstRailRecirc:i.bool,singleChunkRailStrategy:i.oneOf(["split-in-three"]),variations:i.shape({adRail:i.bool,isNarrowContentWell:i.bool}),wordsToDisplay:i.number},b.defaultProps={hasTopSpacing:!0,hideAutoDisclaimer:!1,isAffiliateLinksDisabled:!1,shouldBlurText:!1,variations:{}},b.displayName="ChunkedArticleContent",e.exports=b},1923:function(e,t,n){const i=n(0),o=n(1),a=n(72),{default:r}=n(158),{withRecircContextConsumer:s}=n(165),l=n(39),d=n(1737),{PaymentGateway:c}=n(23),p=n(55),g=n(47),{InContent:u}=n(60),m=n(127),h=n(497),y=n(147),b=s(n(506)),f=n(1924),C=n(145),v=n(478),{showRecircMostPopular:S}=n(1926),w=n(255),{processLinks:k,processCeros:x,processTiktok:$,processSidebarHeadings:T}=n(276),{connectDomain:E}=n(18),N=E("payment"),L=E("featureFlags"),{shouldRenderNothing:I}=n(477),B=n(1399),{ArticlePageChunksGrid:A}=n(1548),{ArticlePageSplitAdRail:P,ArticlePageSplitAdRailContent:D,ArticlePageSplitAdRailTop:R,ArticlePageSplitAdRailMiddle:M,ArticlePageSplitAdRailBottom:O,ArticlePageBodyGridContainer:H,LinkStackArticlePage:_}=n(1548);function W(){return i.createElement("div",null,i.createElement(g,{position:"article-mid-content",secondPosition:"in-content"}),i.createElement(u,null))}const G=new r({a:k,blockquote:({props:e})=>({type:h,props:e}),ceros:x,h2:T,tiktok:$,"cm-unit":()=>({type:W}),"inline-embed":w,"inline-recirc":e=>i.createElement(b,Object.assign({},e,{className:"article-inline-recirc-wrapper"})),"native-ad":e=>i.createElement(c,{group:"ads"},i.createElement(l,Object.assign({},e))),"inline-newsletter":e=>i.createElement(f,Object.assign({},e))});function j(e){return function(e){return Array.isArray(e)&&"string"==typeof e[0]}(e)&&e[1]&&"object"==typeof e[1]&&!Array.isArray(e[1])?e.slice(2):e.slice(1)}function F(e,t){return`${e}-${t}`}class V{constructor({adRail:e,GeneralContentWrapper:t=(()=>null),FullBleedContentWrapper:n=(()=>null),interlude:o,multiChunkRailStrategy:a,recircMostPopular:r,shouldRenderMidContent:s,shouldShowMostPopular:l,shouldUsePersistentAd:d,singleChunkRailStrategy:c,hideRecircMostPopular:p,showFirstRailRecirc:g,linkList:u,isLinkStackEnabled:m}={}){var h;this.isLinkStackEnabled=m,this.linkList=u,this.adRail=e,this.multiChunkRailStrategy=a,this.chunkCount=0,this.shouldRenderMidContent=s,this.shouldUsePersistentAd=d,this.GeneralContentWrapper=t,this.FullBleedContentWrapper=n,this.finalAdSet=!1,this.isSingleChunk=!1,this.singleChunkRailStrategy=c,this.interlude=(null===(h=null==o?void 0:o.strategy)||void 0===h?void 0:h.enabled)&&o.isRailEligible?i.createElement(y,Object.assign({},o,{isRightRail:!0})):null,this.interludeSet=!1,this.mostPopular=l&&!p&&i.createElement(v,{className:"article-recirc-most-popular-wrapper",items:r}),this.showFirstRailRecirc=g}determineAd(){if(this.shouldUsePersistentAd)return this.interludeSet=!0,this.persistentAd();const e=this.stickyAd(this.showFirstRailRecirc);return this.interludeSet=!0,e}showAds(e){if(1===this.chunkCount)return this.determineAd();if(!this.finalAdSet){const t=this.stickyAd(e);return this.interludeSet=!0,t}return null}getAdSlot(e){return i.createElement(i.Fragment,null,i.createElement(c,{group:"ads"},e,i.createElement(l,{position:"rail"})),i.createElement(c,{group:"consumer-marketing"},i.createElement(g,{position:"display-rail"})))}withStickyBox(e,t={}){return e&&i.createElement(m,Object.assign({},t),e)}renderSplitAdRail(){const e=this.withStickyBox(this.getAdSlot(null)),t=this.withStickyBox(this.mostPopular),n=this.withStickyBox(this.getAdSlot(null));return i.createElement(P,{anchorTop:{selector:"[data-testid='ContentHeaderLeadRailAnchor']"},anchorBottom:{selector:".content-bottom-anchor",edge:"bottom"}},i.createElement(D,{className:"split-ad-rail-content"},i.createElement(R,null,e),this.showFirstRailRecirc&&i.createElement(M,{className:"split-ad-rail-middle"},t),i.createElement(O,{className:"split-ad-rail-bottom"},n)))}renderAdRail(e){return this.isSingleChunk&&"split-in-three"===this.singleChunkRailStrategy?this.renderSplitAdRail():this.showAds(e)}closeSmallGroup(e,t,n){if(e.length>0){++this.chunkCount;const o=this.GeneralContentWrapper;return t.concat([i.createElement(A,{adRail:this.adRail,as:o,key:F("small-group",n)},i.createElement(B,{className:"body__container article__body"},G.convert(["div",{className:"body__inner-container"},...e]),"final"===n&&this.isLinkStackEnabled&&i.createElement(_,Object.assign({},this.linkList))),this.adRail&&this.renderAdRail("final"!==n))])}return t}isMultiChunkRailStrategyAlternate(){return"alternate"===this.multiChunkRailStrategy}shouldRenderAd(){return!this.isMultiChunkRailStrategyAlternate()||this.chunkCount%2==1}shouldRenderMostPopular(e){return this.isMultiChunkRailStrategyAlternate()&&e?this.chunkCount%2==0:e}getChunkAdRailContent(e,t){return i.createElement(i.Fragment,null,(this.shouldRenderAd()||!t)&&this.getAdSlot(e),this.shouldRenderMostPopular(t)&&this.mostPopular)}injectInlineRecirc(e){let t=0,n=0;return e.reduce((i,o,a)=>this.isParagraph(o)?(t++,this.isParagraph(e[a+1])&&this.shouldInsertRecirc(t,n)?(t=0,i.concat([o,["inline-recirc",{reelId:++n}]])):i.concat([o])):i.concat([o]),[])}isParagraph(e){return e&&"p"===e[0]}persistentAd(){return i.createElement(C,{anchorTop:{selector:"[data-testid='ContentHeaderLeadRailAnchor']"},anchorBottom:{edge:"bottom"}},this.getChunkAdRailContent(this.interlude,this.showFirstRailRecirc))}shouldInsertRecirc(e,t){return e>=(0===t?5:8)}stickyAd(e){const t=!this.interludeSet&&this.interlude,n=this.getChunkAdRailContent(t,e);return i.createElement(i.Fragment,null,this.withStickyBox(n,{isExpanded:!!t}))}wrapInFullSizeContainer(e,t,n){const o=this.FullBleedContentWrapper;return t.concat([i.createElement(o,{key:F("full",n)},i.createElement(H,{className:"body__grid-container",as:B,shouldDisableMaxWidth:!0,shouldEnableDataJourneyHook:!1},G.convert(e)))])}visit(e){let t=j(e),n=[],o=[];this.isSingleChunk=!t.some(e=>"ad"===e[0]),this.finalAdSet=!1;return t.filter(this.isParagraph).length>10&&(t=this.injectInlineRecirc(t)),t.forEach((e,t)=>{var a,r,s,l;const[c,g,u]=e;if("ad"===c)this.shouldRenderMidContent&&(n=this.closeSmallGroup(o,n,t),o=[],n=n.concat([i.createElement(p,{className:"full-bleed-ad row-mid-content-ad",key:F("ad",t)},i.createElement(d,{shouldDisplayLabel:!0,shouldHoldSpace:!0}))]));else if(!this.adRail&&function(e){const t=e[0],n=e[1]||{},i="inline-embed"===t&&"callout:feature-large"===n.type,o="inline-embed"===t&&"callout:feature-medium"===n.type;return i||o||"ad"===t}(e))n=this.closeSmallGroup(o,n,t),o=[],n=this.wrapInFullSizeContainer(e,n,t);else if("inline-embed"===c&&(null===(r=null===(a=null==g?void 0:g.props)||void 0===a?void 0:a.childTypes)||void 0===r?void 0:r.includes("cartoon"))&&(null==u?void 0:u.length)){const t=u[1];o=(null===(l=null===(s=null==t?void 0:t.props)||void 0===s?void 0:s.image)||void 0===l?void 0:l.showCTA)?o.concat([u]):o.concat([e])}else o=o.concat([e])}),n=this.closeSmallGroup(o,n,"final"),this.finalAdSet=!0,n}}function U({adRail:e,FullBleedContentWrapper:t,featureFlags:n,GeneralContentWrapper:o,interlude:a,jsonml:r,multiChunkRailStrategy:s,payment:l,recircMostPopular:d,shouldUsePersistentAd:c,singleChunkRailStrategy:p,hideRecircMostPopular:g,showFirstRailRecirc:u,wordsToDisplay:m,linkList:h,isLinkStackEnabled:y}){i.useEffect(()=>{const e=document.querySelector(".split-ad-rail-content"),t=document.querySelector(".split-ad-rail-middle"),n=document.querySelector(".split-ad-rail-bottom");if(e&&t&&n){const i=new IntersectionObserver((e=>t=>{const[n]=t;n.intersectionRatio<e&&n.target.remove()})(.95),{root:e,threshold:.95});return i.observe(t),i.observe(n),()=>{i.disconnect()}}return()=>{}});const b=!I("ads",l,n),f=S(r,m);return new V({adRail:e,FullBleedContentWrapper:t,GeneralContentWrapper:o,interlude:a,multiChunkRailStrategy:s,recircMostPopular:d,shouldRenderMidContent:b,linkList:h,isLinkStackEnabled:y,shouldShowMostPopular:f,shouldUsePersistentAd:c,singleChunkRailStrategy:p,hideRecircMostPopular:g,showFirstRailRecirc:u}).visit(r)}U.defaultProps={multiChunkRailStrategy:"default",singleChunkRailStrategy:"default"},U.propTypes={adRail:o.bool,featureFlags:o.object,FullBleedContentWrapper:o.func,GeneralContentWrapper:o.func,hideRecircMostPopular:o.bool,interlude:o.shape(Object.assign(Object.assign({},y.propTypes),{isRailEligible:o.boolean})),jsonml:o.array.isRequired,multiChunkRailStrategy:o.oneOf(["default","alternate"]),payment:o.object,recircMostPopular:o.array,shouldUsePersistentAd:o.bool,showFirstRailRecirc:o.bool,singleChunkRailStrategy:o.oneOf(["default","split-in-three"]),wordsToDisplay:o.number},e.exports=i.memo(N(L(U)),(function(e,t){return a(e,t)})),e.exports.Chunks=U},1924:function(e,t,n){const i=n(1925),{asConfiguredComponent:o}=n(9);e.exports=o(i,"SlimNewsletterWrapper")},1925:function(e,t,n){const i=n(0),{googleAnalytics:o}=n(12),{connector:a}=n(18),r=n(464),{getNewsletterSubscriptions:s}=n(488);class l extends i.Component{constructor(e){super(e),this.fetchNewsletterSubscriptions=async e=>{try{const t=await s(e);if(200===t.status)return t.newsletterSubscriptions&&t.newsletterSubscriptions.data}catch(e){console.log(e)}return{}},this.state={}}async componentDidMount(){let e,t;const n=this.props.newsletters&&this.props.newsletters.map(e=>e.newsletterId)||[];if(document){e="nl"===new URLSearchParams(document.location.search).get("utm_source")}const{user:i,userPlatform:a}=this.props,{userPlatformProxy:r,xClientID:s}=a||{};if(i.isAuthenticated){const e={amgUUID:i.amguuid,newsletterIds:n,userPlatformProxy:r,xClientID:s,provider:"sailthru"},o=(await this.fetchNewsletterSubscriptions(e)).filter(e=>"SUBSCRIBED"===e.attributes.status).map(e=>e.attributes.newsletterId);t=n.find(e=>!o.includes(e))}else t=n[0];this.props.isNewsletterSlim&&!e&&t&&o.emitGoogleTrackingEvent("newsletter-loaded-inlineslim",{newslettterId:t}),this.setState(Object.assign(Object.assign({},this.state),{isSourceNewsletter:e,newsletterToShow:t}))}render(){let e;const{isNewsletterSlim:t,isNewsletterAggressive:n,hasSlimAlternateStyle:o,newsletterType:a,patternType:s,showToggleForLoggedInUser:l,user:d}=this.props;("aggressive-newsletter"===a&&n||"slim-newsletter"===a&&t)&&(e=!0);const{isSourceNewsletter:c,newsletterToShow:p}=this.state,g=this.props.newsletters&&this.props.newsletters.find(e=>e.newsletterId===p);return!c&&e&&g?i.createElement(r,Object.assign({},g,{enableSlimUnitToggle:l&&(null==d?void 0:d.isAuthenticated)&&(null==d?void 0:d.email),hasSlimAlternateStyle:o,newsletterType:a,patternType:s,userEmail:(null==d?void 0:d.isAuthenticated)&&(null==d?void 0:d.email)})):null}}l.propTypes=r.propTypes,l.defaultProps=r.defaultProps,l.displayName="SlimNewsletterWrapper",e.exports=a(l,{keysToPluck:["user","userPlatform"]})},1926:function(e,t,n){const{showRecircMostPopular:i}=n(1927);e.exports={showRecircMostPopular:i}},1927:function(e,t){const n=(e=[])=>Array.isArray(e)&&e.reduce((e,t,i)=>Array.isArray(t)&&t.length>1?e+n(t):"string"==typeof t&&0!==i?e+t.trim().replace(/\s+/gi," ").split(" ").length:e,0);e.exports={showRecircMostPopular:(e,t)=>n(e)>(t||200)}},1928:function(e,t,n){const i=n(22),o=n(1929),a=n(1930),r=n(1931),{connectDomain:s}=n(18),{withIncognitoDetection:l}=n(178),d=s("user"),c=s("paywall"),p=i([d,s("payment"),c,l]);e.exports={PaywallCollaborator:p(o),withArticleTruncation:a,withGalleryTruncation:r}},1929:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};const o=n(1),a=n(0),r=n(499),s=n(500),{trackComponent:l}=n(5),d=e=>{a.useEffect(()=>{l("PaywallCollaborator")},[]);const{component:t,name:n,paywall:o}=e,d=i(e,["component","name","paywall"]),c=r[o.strategy],p=o.strategy&&c,g=c&&c.names.includes(n);return p&&g?a.createElement(t,Object.assign({},s.execute(c,e))):a.createElement(t,Object.assign({},d))};d.propTypes={component:o.func.isRequired,name:o.string.isRequired,payment:o.object.isRequired,paywall:o.object.isRequired},e.exports=d},1930:function(e,t,n){const i=n(1),o=n(0);e.exports=(e,t)=>{const n=e.displayName||e.name,a=e=>"object"==typeof e&&"p"===e[0],r=(e,t)=>e.filter((n,i)=>((e,t)=>e.slice(0,t).filter(a).length)(e,i)<t),s=n=>{const{[t]:i,shouldTruncate:a,paywall:{gateway:s={},paragraphLimit:l}={}}=n,d=i&&(s.shouldTruncate||a)&&(s.paragraphLimit>=0||l>=0);return o.createElement(e,Object.assign({},n,{[t]:d?r(i,s.paragraphLimit||l):i}))};return s.propTypes={[t]:i.array.isRequired,paywall:i.shape({gateway:i.shape({paragraphLimit:i.number,shouldTruncate:i.bool}),paragraphLimit:i.number}),shouldTruncate:i.bool},s.displayName=`withArticleTruncation(${n})`,s}},1931:function(e,t,n){const i=n(1),o=n(0);e.exports=(e,t)=>{const n=e.displayName||e.name,a=(e,t)=>e.map(n=>n.filter(n=>((e,t)=>e.flat().indexOf(t))(e,n)<t)).filter((e,t)=>e.length>0||0===t),r=n=>{const{[t]:i,shouldTruncate:r,paywall:{gateway:s={},gallerySlideLimit:l}={}}=n,d=i&&(s.shouldTruncate||r)&&(s.gallerySlideLimit>=0||l>=0);return o.createElement(e,Object.assign({},n,{[t]:d?a(i,s.gallerySlideLimit||l):i}))};return r.propTypes={[t]:i.array.isRequired,paywall:i.shape({gateway:i.shape({gallerySlideLimit:i.number,shouldTruncate:i.bool}),gallerySlideLimit:i.number}).isRequired,shouldTruncate:i.bool},r.displayName=`withGalleryTruncation(${n})`,r}},1932:function(e,t,n){e.exports={BeopScript:n(1933)}},1933:function(e,t,n){const i=n(0),o=n(1),{trackComponent:a}=n(5),r=({accountId:e})=>(i.useEffect(()=>{a("BeopScript")},[]),i.createElement(i.Fragment,null,i.createElement("script",{id:"beop-script",type:"text/javascript",dangerouslySetInnerHTML:{__html:`window.beOpAsyncInit = function () {\n                      window.BeOpSDK.init({\n                        account: '${e}'\n                      });\n                      window.BeOpSDK.watch();\n                  };`}}),i.createElement("script",{id:"beop-sdk",async:!0,src:"https://widget.beop.io/sdk.js"})));r.propTypes={accountId:o.string.isRequired},e.exports=r},1934:function(e,t,n){e.exports=n(1935)},1935:function(e,t,n){const i=n(1738);e.exports=i},219:function(e,t,n){const i=n(8),o=n(1),a=n(0),{useIntl:r}=n(2),s=n(86),{storyVideoPosition:l}=n(228),d=n(225),c=n(229),p=n(11),g=n(21),{transformLegacySources:u}=n(94),m=n(172).default,{ContentHeaderLeadAsset:h,ContentHeaderResponsiveAsset:y,ContentHeaderLeadAssetContent:b,ContentHeaderLeadAssetCaption:f,ContentHeaderLeadAssetContentMedia:C,ContentHeaderLedeLightboxButton:v,ContentHeaderLeadRailAnchor:S,ContentHeaderLeadContentFullWidth:w,ContentHeaderLeadContentCaptionCredit:k,ContentHeaderLeadAssetAwards:x}=n(102),{useState:$,Fragment:T}=a,E="landscape",N="portrait",L=({awards:e,className:t,captionWidth:n,containerTheme:o,lede:p,mediaWidth:L,shouldRenderRailAnchor:I,showFullWidthLeadImage:B,socialIcons:A,hasLightboxButton:P,hasStaticPositionedAward:D,hasInvertedLedeBackground:R,hideLedeCaption:M})=>{const[O,H]=$((e=>{var t;const n=null===(t=null==e?void 0:e.masterAspectRatio)||void 0===t?void 0:t.split(":");return(null==e?void 0:e.restrictCropping)&&2===(null==n?void 0:n.length)&&Number(n[0])/Number(n[1])<=1?N:E})(p)),{formatMessage:_}=r(),W=({width:e,height:t})=>{e/t<=1&&H(N)},G=u(p),j="cnevideo"===p.modelName,F="gallery"===p.modelName,V="clip"===p.modelName,U=!M&&(p.caption&&p.caption.trim()||p.credit&&p.credit.trim()),z=a.createElement(f,{dangerousCaptionText:p.caption,dangerousCredit:p.credit,mediaWidth:L});return a.createElement(T,null,a.createElement(h,{className:i("lead-asset",t),mediaWidth:L,containerTheme:o,ledeContentType:p.contentType,ledeAssetOrientation:O,hasInvertedLedeBackground:R,"data-testid":"ContentHeaderLeadAsset"},a.createElement(b,null,a.createElement(C,{ledeContentType:p.contentType,showFullWidthLeadImage:B,mediaWidth:L,className:"lead-asset__content__"+p.contentType},!j&&!F&&!V&&a.createElement(T,null,e&&!D&&a.createElement(x,{awards:e,hasStaticPositionedAward:D}),a.createElement(y,Object.assign({},G,{onAssetLoaded:W,shouldRestrictCropping:null==p?void 0:p.restrictCropping,masterAspectRatio:null==p?void 0:p.masterAspectRatio,shouldHoldImageSpace:!0,mediaWidth:L,"data-testid":"assetMedia"}))),j&&p.scriptEmbedUrl&&a.createElement(s,{shouldAutoplay:!0,scriptUrl:p.scriptEmbedUrl,shouldHaveTeaser:!0,videoEmbedPosition:l}),F&&a.createElement(d,Object.assign({},p,{showNoAdsFromParent:!0})),A&&a.createElement(g.Overlay,{links:A.links}),V&&a.createElement(y,Object.assign({},G,{onAssetLoaded:W,shouldRestrictCropping:null==p?void 0:p.restrictCropping,masterAspectRatio:null==p?void 0:p.masterAspectRatio,shouldHoldImageSpace:!0,mediaWidth:L,"data-testid":"assetMedia"})),P&&a.createElement(v,{onClickHandler:()=>{document.querySelector(".responsive-image--expandable").click()},ButtonIcon:()=>a.createElement(c,null),hasEnableIcon:!0,btnStyle:"text",iconPosition:"before",inputKind:"button",isStaticText:!0,label:_(m.showAllPhotos),shouldRenderCaption:U}),U&&"fullbleed"!==n&&z,e&&D&&a.createElement(x,{awards:e,hasStaticPositionedAward:D}))),I&&a.createElement(S,{"data-testid":"ContentHeaderLeadRailAnchor"})),U&&"fullbleed"===n&&a.createElement(w,null,a.createElement(k,null,z)))};L.propTypes={awards:o.array,captionWidth:o.oneOf(["standard","fullbleed"]),className:o.string,containerTheme:o.oneOf(["standard","inverted","special"]),hasInvertedLedeBackground:o.bool,hasLightboxButton:o.bool,hasStaticPositionedAward:o.bool,hideLedeCaption:o.bool,lede:o.oneOfType([o.shape(p.propTypes),o.shape(s.propTypes)]).isRequired,mediaWidth:o.oneOf(["small","smallrule","grid","fullbleed"]),shouldRenderRailAnchor:o.bool,showFullWidthLeadImage:o.bool,socialIcons:o.shape(g.propTypes)},L.defaultProps={captionWidth:"standard",hasStaticPositionedAward:!1,hideLedeCaption:!1},e.exports=L,e.exports.transformLegacySources=u},220:function(e,t,n){const i=n(3).default,{BaseLink:o,BaseText:a}=n(10),{calculateSpacing:r,getLinkStyles:s,getTypographyStyles:l,getColorStyles:d,getInputFieldStyles:c}=n(4),p=n(31),g=i.div.withConfig({displayName:"GroupedNavigationWrapper"})`
  padding-top: ${r(4)};
  height: 100%;

  ${({hasFilter:e})=>e&&`padding-top: ${r(2)};`}

  .navigation__heading {
    ${({theme:e})=>l(e,"typography.definitions.foundation.title-primary")};
    margin: 0;
    line-height: normal;
    ${({theme:e})=>d(e,"color","colors.foundation.expanded-utility.nav-link.default")};
  }

  .navigation__list-item {
    white-space: normal;
  }

  .content-divider {
    display: block;
    margin-bottom: ${r(2)};
    border-bottom-width: ${r(.5)};
    border-bottom-style: solid;
    ${({theme:e})=>d(e,"border-bottom-color","colors.discovery.lead.secondary.accent")};
    padding-top: ${r(1)};
    width: ${r(2)};
  }

  .grouped-navigation__link {
    ${({theme:e})=>s(e,"colors.foundation.expanded-utility.nav-link.default","colors.foundation.expanded-utility.nav-link.hover","navigation")}

    &.link--primary {
      ${({theme:e})=>l(e,"typography.definitions.foundation.link-primary")};
    }

    &.link--secondary {
      ${({theme:e})=>l(e,"typography.definitions.foundation.link-secondary")};
    }
  }
`,u=i.div.withConfig({displayName:"GroupedNavigationFilter"})`
  position: static;
  border-width: 0 0 1px;
  border-style: solid;
  ${({theme:e})=>d(e,"color","colors.discovery.body.white.divider")};
  width: calc(100% - 1.25rem);
  height: 60px;

  .icon {
    position: absolute;
    top: 10px;
    right: 0;
    pointer-events: none;
  }
`,m=i.div.withConfig({displayName:"GroupedNavigationFilterContent"})`
  position: relative;
`,h=i(a).withConfig({displayName:"GroupedNavigationFilterInput"})`
  ${({theme:e})=>c(e,"normal","background")};
  ${({theme:e})=>c(e,"normal","text")};
  border: none;
  width: 100%;
  height: ${r(6.2)};
`;h.defaultProps={as:"input",typeIdentity:"typography.definitions.foundation.link-secondary"};const y=i.div.withConfig({displayName:"GroupedNavigationContent"})`
  display: flex;
  height: 100%
    ${({hasFilter:e})=>e&&`\n      padding-top: ${r(4)};\n      height: calc(100% - 60px);\n  `};
`,b=i.div.withConfig({displayName:"GroupedNavigationLinks"})`
  flex: 1;
  height: 100%;
  overflow-y: auto;

  && li {
    padding-bottom: ${r(2)};

    &.link--primary {
      ${({theme:e})=>l(e,"typography.definitions.foundation.link-primary")};
    }

    &.link--secondary {
      ${({theme:e})=>l(e,"typography.definitions.foundation.link-secondary")};
    }
  }
`,f=i(p.Vertical).withConfig({displayName:"GroupedNavigationGroup"})`
  padding-bottom: ${r(5)};
`,C=i.div.withConfig({displayName:"GroupedNavigationIndex"})`
  position: static;
  padding-right: ${r(1)};
  overflow-y: auto;
`,v=i(a).withConfig({displayName:"AtoZIndexWrapper"})`
  width: ${r(3)};
  text-align: center;
`;v.defaultProps={as:"nav"};const S=i(a).withConfig({displayName:"AtoZIndexList"})`
  margin-top: 0;
  padding: 0;
  list-style: none;
`;S.defaultProps={as:"ul"};const w=i(o).withConfig({displayName:"AtoZIndexLink"})`
  display: block;
  background: none;
  padding-top: ${r(.25)};
  padding-bottom: ${r(.25)};
  width: 100%;
`;w.defaultProps={colorSecondaryLinkToken:"colors.foundation.expanded-utility.nav-link.hover",colorStaticLinkToken:"colors.foundation.expanded-utility.nav-link.default",colorToken:"colors.foundation.expanded-utility.nav-link.default",linkStyle:"navigation",typeToken:"typography.definitions.foundation.link-secondary"};const k=i(a).withConfig({displayName:"AtoZIndexText"})`
  margin: 0;
  padding-top: ${r(.25)};
  padding-bottom: ${r(.25)};
`;k.defaultProps={as:"li",colorToken:"colors.foundation.expanded-utility.nav-link.default",typeIdentity:"typography.definitions.foundation.link-secondary"},e.exports={GroupedNavigationWrapper:g,GroupedNavigationFilter:u,GroupedNavigationFilterContent:m,GroupedNavigationFilterInput:h,GroupedNavigationContent:y,GroupedNavigationLinks:b,GroupedNavigationGroup:f,GroupedNavigationIndex:C,AtoZIndexWrapper:v,AtoZIndexList:S,AtoZIndexLink:w,AtoZIndexText:k}},244:function(e,t,n){const{asConfiguredComponent:i}=n(9),o=n(257);e.exports=i(o,"ToggleChip")},249:function(e,t,n){const{asConfiguredComponent:i}=n(9),o=n(281);e.exports=i(o,"ToggleChipList")},257:function(e,t,n){const i=n(1),o=n(0),{useRef:a,useState:r}=n(0),{trackComponent:s}=n(5),{asThemedComponent:l}=n(30),d=n(32),{ToggleButton:c}=n(258),p=({analyticsDataAttribute:e,children:t,fullPageTheme:n,isAnchorUrl:i,isChecked:l,onChange:p,redirectUrl:g,shouldDefaultChecked:u,shouldDisplaySingleChip:m,shouldUrlRedirect:h})=>{o.useEffect(()=>{s("ToggleChip")},[]);const{current:y}=a(void 0!==l),[b,f]=r(u),C=y?l:b,[v,S]=r(C);return o.createElement(c,Object.assign({},e,{as:g?"a":"button",href:g||void 0,role:"switch","aria-checked":m?v:C,onClick:e=>(e=>{let n,o;if(m?S(e=>(o=!e,!e)):n=!C,y||f(n),p){const e=new CustomEvent("change",{detail:{checked:o||n}});p(e)}if(i){const e="#"+t.toString().toLowerCase();window.history.replaceState(void 0,void 0,e)}h||e.preventDefault()})(e),fullPageTheme:n}),m&&v&&o.createElement(d,null),t)};p.propTypes={analyticsDataAttribute:i.object,children:i.node.isRequired,fullPageTheme:i.oneOf(["standard","inverted"]),isAnchorUrl:i.bool,isChecked:i.bool,onChange:i.func,redirectUrl:i.string,shouldDefaultChecked:i.bool,shouldDisplaySingleChip:i.bool,shouldUrlRedirect:i.bool},p.defaultProps={isAnchorUrl:!1,isChecked:void 0,onChange:()=>{},shouldDefaultChecked:!1,shouldDisplaySingleChip:!1,shouldUrlRedirect:!0},e.exports=l(p)},258:function(e,t,n){const i=n(3).default,{calculateSpacing:o,getColorStyles:a,getColorToken:r,getTypographyStyles:s}=n(4),l=i.button.withConfig({displayName:"ToggleButton"})`
  display: inline-block;
  border-radius: ${o(3)};
  cursor: pointer;
  padding: ${o(1)} ${o(3)};
  text-decoration: none;
  white-space: nowrap;

  .icon {
    ${({theme:e})=>a(e,"color","colors.interactive.base.black")};
    fill: ${r("colors.interactive.base.white")};
    margin-left: ${o(-2)};
    width: ${o(4)};
    height: ${o(2)};
    vertical-align: middle;

    &:hover {
      fill: ${r("colors.interactive.base.black")};
    }
  }

  ${({theme:e})=>s(e,"typography.definitions.globalEditorial.tags")};

  &[aria-checked='false'] {
    /* TODO support rgba in getColorStyles  */
    transition: background-color 0.25s, color 0.25s;
    background-color: rgba(
      ${r("colors.interactive.base.black",{rgbOnly:!0})},
      0.1
    );
    ${({theme:e})=>a(e,"color","colors.interactive.base.black")};
  }

  &[aria-checked='true'] {
    transition: background-color 0.25s, color 0.25s;
    text-decoration: none;
    ${({theme:e})=>a(e,"background-color","colors.interactive.base.black")};
    ${({theme:e})=>a(e,"color","colors.interactive.base.white")};

    .icon {
      fill: ${r("colors.interactive.base.black")};
    }
  }

  &:hover,
  &:focus {
    outline: 0;
    /* TODO support this in getColorStyles  */
    box-shadow: 0 0 0 1px ${r("colors.interactive.base.black")}
      inset;
    text-decoration: none;

    .icon {
      fill: ${r("colors.interactive.base.black")};
    }
  }

  ${({fullPageTheme:e,theme:t})=>"inverted"===e?`\n\n      border: 1px solid;\n      ${a(t,"border-color","colors.discovery.body.white.border")};\n\n      &[aria-checked='false'] {\n        &:hover{\n          ${a(t,"background-color","colors.interactive.base.white")};\n          ${a(t,"color","colors.interactive.base.black")};\n        }\n        ${a(t,"background-color","colors.interactive.base.black")};\n        ${a(t,"color","colors.interactive.base.white")};\n      }\n\n      &[aria-checked='true'] {\n        ${a(t,"background-color","colors.interactive.base.white")};\n        ${a(t,"color","colors.interactive.base.black")};\n      }\n\n      &:hover,\n      &:focus {\n        box-shadow: none;\n      }\n    `:""}
`;e.exports={ToggleButton:l}},2614:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=i(n(2615));i(n(154)).default(o.default)},2615:function(e,t,n){const i=n(2616),{asConfiguredComponent:o}=n(9);e.exports=o(i,"ArticlePage")},2616:function(e,t,n){const i=n(8),o=n(124),a=n(15),r=n(44),s=n(1),l=n(0),{injectIntl:d}=n(2),c=n(2617).default,{I18nProvider:p}=n(512),g=n(1916),u=n(1557),m=n(2618),h=n(1921),{connector:y}=n(18),b=n(438),f=n(1468),{googleAnalytics:C}=n(12),v=n(19),{PaywallCollaborator:S,withArticleTruncation:w}=n(1928),{InlineBarrier:k}=n(60),x=n(2620),$=n(1644),T=n(147),{withLightbox:E}=n(1419),N=n(55),{Disclaimer:L}=n(95),{BeopScript:I}=n(1932),{trackComponent:B}=n(5);const A=n(2624),P=n(446),D=n(1478),R=n(464),M=n(2628),{asConfiguredComponent:O}=n(9),H=n(487),_=n(1934),W=n(439),{getNewsletterSubscriptions:G}=n(488),{ArticlePageBase:j,ArticlePageGlobalStyle:F,ArticlePageLedeBackground:V,ArticlePageContentBackGround:U,ArticlePageBodyMobileTruncatedBtn:z,ArticlePageContentFooterGrid:q,ContentWrapperGrid:K}=n(1548),Y=n(1648),{MultiPackageRow:Z}=n(1572),{getOverrideBehaviour:X}=n(428),J=n(2630),Q=n(2632);class ee extends l.Component{constructor(e){super(e),this.onHandleScroll=()=>{const e=window.scrollY<=this.pageContentEl.current.offsetTop+100;e!==this.state.hideNav&&this.setState({hideNav:e})},this.onTruncationDismiss=()=>{this.setState({isMobileTruncated:!this.state.isMobileTruncated}),C.emitUniqueGoogleTrackingEvent("article-read-more")},this.fetchNewsletterSubscriptions=async e=>{try{const t=await G(e);if(200===t.status){const e=this.props.article.newsletterModules.filter(e=>e.priority).sort((e,t)=>e.priority-t.priority).map(e=>e.newsletterId),n=this.props.article.newsletter.newsletterId,i=t.newsletterSubscriptions.data.filter(e=>"SUBSCRIBED"===e.attributes.status).map(e=>e.attributes.newsletterId);if(i.length){const t=e.filter(e=>!i.includes(e)),o=this.props.article.newsletterModules.find(e=>e.newsletterId===t[0]);i.includes(n)&&this.setState({newsletterData:Object.assign(Object.assign({},this.state.newsletterData),o)})}}}catch(e){console.log(e)}return{}},this.state={hideNav:this.props.article.headerProps.hasContentHeaderLogo,isMobileTruncated:!1,newsletterData:this.props.article.newsletter},this.pageContentEl=l.createRef();const t=e.hasLightbox?E(h,e.article.lightboxImages,e.hasSlideShow):h;this.TruncatedChunkedArticleContent=w(t,"body")}componentDidMount(){var e;if(B("ArticlePage"),this.props.user.isAuthenticated&&this.props.hasDynamicNewsletterSignup&&(null===(e=this.props.article.newsletterModules)||void 0===e?void 0:e.length)){const e=this.props.article.newsletterModules.map(e=>e.newsletterId).toString(),t={amgUUID:this.props.user.amguuid,newsletterIds:e,userPlatformProxy:this.props.userPlatform.userPlatformProxy,provider:"sailthru",xClientID:this.props.userPlatform.xClientID};this.fetchNewsletterSubscriptions(t)}const{hasTruncationOnMobile:t}=this.props.article;if(t?this.setState({isMobileTruncated:!0}):this.setState({isMobileTruncated:!1}),this.props.article.headerProps.hasContentHeaderLogo){this.setState({hideNav:!0});const e=r(this.onHandleScroll,300);window.addEventListener("scroll",e)}const n="header"===a(this.props.article.interactiveOverride,"behavior"),i=a(this.props.componentConfig,"BasePage.settings.showNavWithHeaderOverride"),o=n&&!i;window.sessionStorage.setItem("nav_invisible",o)}componentWillUnmount(){window.removeEventListener("scroll",this.onHandleScroll),window.sessionStorage.removeItem("nav_invisible")}render(){const{article:{id:e,body:t,channelCloudData:n,contentWarnings:r,affiliateDisclaimer:s,contributorSpotLightProps:d,hideAffiliateDisclaimer:h,hasAffiliateLinks:y,hasEventBannerHidden:C,hideProductDisclaimer:w,channelMap:T,coralComments:E,hasNewsletterInBody:B,hasProduct:G,hasProductLisitingCarousel:ee,hasTruncationOnMobile:te,headerProps:ne,hideAutoDisclaimer:ie,hideContributorBio:oe,hideRecircList:ae,hideRecircMostPopular:re,hierarchy:se,shouldReplaceOutbrainWithVMG:le,interactiveOverride:de,isAffiliateLinksDisabled:ce,lang:pe,langTranslations:ge,customHeading:ue={},recircs:me=[],recircMostPopular:he,recircRelated:ye,relatedVideo:be,interlude:fe,isHeroAdVisible:Ce,isLicensedPartner:ve,licensedPartnerLink:Se,magazineDisclaimer:we,paddingTop:ke,tagCloud:xe,newsletter:$e,shouldUsePersistentAd:Te,showAgeGate:Ee,showBookmark:Ne,showBreadcrumbTrail:Le,showHotelRecirc:Ie,signageConfig:Be,isLinkStackEnabled:Ae,relatedGalleryImages:Pe,shouldShowFooterNewsletter:De,shouldPrioritizeSeriesPagination:Re,savingsUnitedCoupons:Me=[]},showFirstRailRecirc:Oe,attributes:He,className:_e,componentConfig:We,shouldCenterDisclaimer:Ge,shouldHideBaseTopPadding:je,shouldHideSeriesNavigation:Fe,shouldHideSeriesRecirc:Ve,shouldInheritDropcapColor:Ue,showLinkStackInsideContentBody:ze,featureFlags:qe,hasLightbox:Ke,hasChannelNavigation:Ye,showContributorSpotlight:Ze,cartoonVariation:Xe,hasRecircDriver:Je,linkList:Qe,related:et,metadataVideo:tt,outbrain:nt,taboola:it,productCarousel:ot,user:at,hasNewsletterForABTest:rt,intl:st,xlargePaddingTop:lt,articleVariationForXlargePaddingTop:dt,beOp:ct,hasDynamicDisclaimer:pt}=this.props,{hideNav:gt}=this.state,ut=!!rt||B,{hasContentHeaderLogo:mt}=ne;mt&&(()=>{const e=a(We,"ContentHeader.settings");o(We,"ContentHeader.variation","TextOverlayWithLogo"),o(We,"ContentHeader.settings",Object.assign(Object.assign({},e),{showLogo:!0,hideContributors:!0,hidePublishDate:!0,hideRubric:!0,hideShareButtons:!0}))})();const ht=oe?void 0:ne.contributors,{hasNativeShareButton:yt,hasNewsletterOnPageTop:bt,hasNewsletterWithoutWrapper:ft,shouldEnableNativeShareOnDesktop:Ct,shouldRemoveBackgroundColor:vt}=qe,St=function(e){return"WithAdRail"===a(e,"ChunkedArticleContent.variation")?v.NarrowContentWithWideAdRail:v.WithMargins}(We),wt="OneColumnNarrow"===a(We,"ChunkedArticleContent.variation"),kt=v.DynamicGrid({startColumn:2,endColumn:12}),xt=Ge?L.TextCenterNoTopRule:L,$t=me.map((e,t)=>{const n=O(H,e.displayName),i=e.heading||"",{results:o,destinationPage:a,location:r,recommendedClickout:s,recommendedType:d}=e;return Je&&a?l.createElement(_,{key:"SummaryCollectionSplitColumns"+t,recommendedItems:{items:o,recommendedType:d,recommendedClickout:s},guideItem:[a],location:r,shouldAppendReadMoreLinkForDek:!0}):l.createElement(W,{key:"ConnectedErrorBoundary"+t},l.createElement(n,{related:e.related,heading:i}))}),Tt=a(We,"ContentHeader.variation")===dt&&lt?lt:ke,Et=(null==ct?void 0:ct.accountID)||"",Nt=(null==ct?void 0:ct.isEnabled)||!1,Lt=Ye&&l.createElement(P,null),It="WithAdRail"===a(We,"ChunkedArticleContent.variation"),Bt=({children:e})=>l.createElement(K,{isadRail:It,as:St},l.createElement("div",{className:"body body__container"},l.createElement("div",{className:"container container--body"},l.createElement("div",{className:"container--body-inner"},e)))),At="articleheader"===X(de),Pt=a(ne,"sponsoredContentHeaderProps");return l.createElement(j,{additionalNavigation:Lt,attributes:He,channelMap:T,className:i("page--article",_e),featureFlags:qe,hideNav:gt,hasContentHeaderLogo:mt,hasEventBannerHidden:C,hasFooterAdsMargins:!0,interactiveOverride:de,isHeroAdVisible:Ce,hasBaseAds:!0,user:at,lang:pe,customHeading:ue,shouldHideBaseTopPadding:je,shouldPrioritizeSeriesPagination:Re},Nt&&l.createElement(I,{accountId:Et}),l.createElement(p,{locale:pe,translations:ge},Ne&&l.createElement(D,null),l.createElement(l.Fragment,null,y&&s&&!h&&!w&&l.createElement(N,null,l.createElement(kt,null,l.createElement(xt,{disclaimerHtml:s,hasTopRule:!1})))),Le&&l.createElement(u,{hierarchy:se,shouldRemoveBackgroundColor:vt}),l.createElement("article",{className:i("article main-content",{"article--inherited-dropcaps":Ue}),lang:pe},bt&&$e&&l.createElement(R,Object.assign({},$e,{position:"article-page-top"})),ne.sponsoredContentHeaderProps&&l.createElement($,Object.assign({},ne.sponsoredContentHeaderProps,{className:"light-theme"})),At?l.createElement("div",{className:"interactive-override-container interactive-override-container--content_header",dangerouslySetInnerHTML:{__html:de.markup}}):l.createElement(V,{ref:this.pageContentEl},l.createElement(f,Object.assign({},ne,{hasNativeShareButton:yt,shouldEnableNativeShareOnDesktop:Ct,className:"article__content-header",hasLightbox:Ke,stickySocialAnchorBottom:{selector:".content-bottom-anchor",edge:"bottom"},stickySocialAnchorTop:{selector:".body",edge:"top"},interactiveOverride:de,metadataVideo:tt,showBreadCrumb:Le}))),!Fe&&l.createElement(A,{className:"article__series-navigation"}),l.createElement(U,{togglePaddingTop:Tt,isMobileTruncated:this.state.isMobileTruncated,cartoonVariation:Xe,"data-attribute-verso-pattern":"article-body"},te&&this.state.isMobileTruncated&&l.createElement(z,{inputKind:"button",label:st.formatMessage(c.truncatedButtonLabel),onClickHandler:this.onTruncationDismiss}),a(We,"ChannelCloud.settings.shouldShowChannelCloud",!1)&&(null===(Dt=null==n?void 0:n.channels)||void 0===Dt?void 0:Dt.length)>0&&l.createElement(v.ContentWithAdRailNarrow,null,l.createElement("div",null,l.createElement(M,Object.assign({},n,a(We,"ChannelCloud.settings"))))),t&&l.createElement(S,{body:t,linkList:Qe,isLinkStackEnabled:Ae&&ze,component:this.TruncatedChunkedArticleContent,contributors:ht,hasProduct:G,hasProductLisitingCarousel:ee,hasTopSpacing:!!ne.lede,interlude:fe,isAffiliateLinksDisabled:ce,name:"chunked-article-content",shouldUsePersistentAd:Te,hideRecircMostPopular:re,recircMostPopular:he,showFirstRailRecirc:Oe,hideAutoDisclaimer:ie,hideAffiliateDisclaimer:h,hideProductDisclaimer:w}),t&&l.createElement(Bt,null,l.createElement(k,null))),!Ve&&l.createElement(x,{ContentWrapper:St})),Nt&&l.createElement(Bt,null,l.createElement("div",{className:"BeOpWidget"})),Object.keys(ot).length>0&&l.createElement(Z,{key:"articleCarouselProduct",dataJourneyHook:"row-content"},l.createElement(Y,Object.assign({},ot,{copilotId:e}))),l.createElement(q,{as:b,className:i({"content-footer--mobile-truncated":this.state.isMobileTruncated}),channelMap:T,consumerMarketing:{position:"article-footer"},ContentWrapper:St,contributors:ht,contributorSpotlight:d,coralComments:E,hideContributorBio:oe,showContributorSpotlight:Ze,hideRecircList:ae,hasNewsletterWithoutWrapper:ft,isLicensedPartner:ve,isLinkStackEnabled:Ae&&!ze,isNarrow:wt,isAdRail:It,licensedPartnerLink:Se,linkList:Qe,magazineDisclaimer:we,newsletter:at.isAuthenticated?this.state.newsletterData:$e,outbrain:nt,taboola:it,recircs:me,recircListElements:$t,related:et,recircRelated:ye,relatedVideo:be,showNewsletter:De||!ut,showHotelRecirc:Ie,signageConfig:Be,tagCloud:xe,shouldReplaceOutbrainWithVMG:le,savingsUnitedCoupons:Me,sponsoredProps:Pt,hasDynamicDisclaimer:pt}),Ee&&l.createElement(g,{content:{contentWarnings:r}}),!at.isAuthenticated&&at.hasUserAuthCheck&&l.createElement(m,{as:"document",hint:"prefetch",href:"/account/sign-in"})),(null==Pe?void 0:Pe.length)&&l.createElement(J,null,l.createElement(Q,{items:Pe,contentType:"cartoon",showPublishedDate:!0})),l.createElement(F,null));var Dt}}ee.propTypes={article:s.shape({body:s.array,channelCloudData:s.object,affiliateDisclaimer:s.string,contributorSpotLightProps:s.object,hideProductDisclaimer:s.bool,hideAffiliateDisclaimer:s.boolean,hasAffiliateLinks:s.boolean,channelMap:s.object,coralComments:s.shape({enableComments:s.bool,coralHostName:s.string}),contentWarnings:s.array,customHeading:s.object,hasEventBannerHidden:s.bool,hasNewsletterInBody:s.bool,hasProduct:s.bool,hasProductLisitingCarousel:s.bool,hasTruncationOnMobile:s.bool,headerProps:s.object.isRequired,hideAutoDisclaimer:s.bool,hideContributorBio:s.bool,hideRecircList:s.bool,hideRecircMostPopular:s.bool,hierarchy:s.array,id:s.string,interactiveOverride:s.shape({markup:s.string,behavior:s.string}),interlude:s.shape(Object.assign(Object.assign({},T.propTypes),{isRailEligible:s.boolean})),isAffiliateLinksDisabled:s.bool,isHeroAdVisible:s.bool.isRequired,isLicensedPartner:s.bool,isLinkStackEnabled:s.bool,lang:s.string,langTranslations:s.object,licensedPartnerLink:s.string,lightboxImages:s.array.isRequired,magazineDisclaimer:s.shape({issueDate:s.string.isRequired,issueLink:s.string.isRequired,originalHed:s.string}),newsletter:s.object,newsletterModules:s.array,paddingTop:s.oneOf(["large"]),recircs:s.array,recircMostPopular:s.array,recircRelated:s.array,relatedGalleryImages:s.array,relatedVideo:s.shape({brand:s.string,related:s.any,useRelatedVideo:s.bool}),savingsUnitedCoupons:s.array,shouldPrioritizeSeriesPagination:s.bool,shouldShowFooterNewsletter:s.bool,shouldUsePersistentAd:s.bool,shouldReplaceOutbrainWithVMG:s.bool,showAgeGate:s.bool,showBookmark:s.bool,showBreadcrumbTrail:s.bool,showHotelRecirc:s.bool,signageConfig:s.object,tagCloud:s.shape({tags:s.arrayOf(s.shape({tag:s.string.isRequired,url:s.string}))})}).isRequired,articleVariationForXlargePaddingTop:s.string,attributes:s.object,beOp:s.shape({accountID:s.string,isEnabled:s.boolean}),cartoonVariation:s.oneOf(["default","card"]),className:s.string,componentConfig:s.object,featureFlags:s.object,hasChannelNavigation:s.bool,hasDynamicDisclaimer:s.bool,hasDynamicNewsletterSignup:s.bool,hasLightbox:s.bool,hasNewsletterForABTest:s.bool,hasRecircDriver:s.bool,hasSlideShow:s.bool,hideNav:s.bool,intl:s.object,linkList:s.object,metadataVideo:s.shape({isLive:s.bool,premiereDate:s.string,series:s.string,videoLength:s.number,premiereGap:s.number}),outbrain:s.shape({canonicalUrl:s.string.isRequired,shouldDisplayAboveRecircList:s.bool,template:s.string.isRequired,widgetId:s.string}),productCarousel:s.object,related:s.array,shouldCenterDisclaimer:s.bool,shouldHideBaseTopPadding:s.bool,shouldHideSeriesNavigation:s.bool,shouldHideSeriesRecirc:s.bool,shouldInheritDropcapColor:s.bool,showContributorSpotlight:s.bool,showFirstRailRecirc:s.bool,showLinkStackInsideContentBody:s.bool,taboola:s.shape({publisherId:s.string.isRequired}),user:s.object,userPlatform:s.object,xlargePaddingTop:s.string},ee.defaultProps={cartoonVariation:"default",hasDynamicNewsletterSignup:!1,hasLightbox:!1,hasSlideShow:!0,metadataVideo:{},productCarousel:{},related:[],shouldCenterDisclaimer:!1,shouldHideSeriesNavigation:!0,shouldHideSeriesRecirc:!0,shouldInheritDropcapColor:!1,showLinkStackInsideContentBody:!1},ee.displayName="ArticlePage",e.exports=y(d(ee),{keysToPluck:["article","beOp","componentConfig","featureFlags","linkList","metadataVideo","outbrain","productCarousel","related","showFirstRailRecirc","taboola","user","userPlatform"]})},2617:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});const i=n(2);t.default=i.defineMessages({truncatedButtonLabel:{id:"ArticlePage.TruncatedButtonLabel",defaultMessage:"Read Full Story",description:"ArticlePage component truncated button label"}})},2618:function(e,t,n){e.exports=n(2619)},2619:function(e,t,n){const i=n(0),{trackComponent:o}=n(5);class a extends i.PureComponent{constructor(){super(...arguments),this.writeResourceHintLink=e=>{const{as:t,hint:n,href:i}=e,o=document.createElement("link");o.as=t,o.href=i,o.rel=n,document.head.appendChild(o)}}componentDidMount(){o("ResourceHint"),this.props&&this.writeResourceHintLink(this.props)}render(){return i.createElement(i.Fragment,null)}}e.exports=a},2620:function(e,t,n){const{asConfiguredComponent:i}=n(9),o=n(2621);e.exports=i(o,"SeriesRecirc")},2621:function(e,t,n){const i=n(1),o=n(0),{useIntl:a}=n(2),{useInView:r}=n(75),{connector:s}=n(18),l=n(11),d=n(19),c=n(2622).default,{trackComponent:p}=n(5),{googleAnalytics:g}=n(12),{SeriesRecircAsset:u,SeriesRecircContainer:m,SeriesRecircContent:h,SeriesRecircDek:y,SeriesPromoHed:b,SeriesRecircReadMoreCta:f,SeriesRecircReadMoreCtaMobile:C,SeriesRecircTextContainer:v}=n(2623),S={"Read more":c.readMoreDefault,"Read next":c.readNext},w=({ContentWrapper:e,readMoreCTA:t,seriesData:n})=>{const{formatMessage:i}=a();o.useEffect(()=>{p("SeriesRecirc")},[]);const s=(({links:e})=>{let t;for(let n=0;n<e.length;n++){const{isCurrent:i}=e[n];if(i){for(let i=n+1;i<e.length;i++){const{isExternal:n,isPublished:o}=e[i]||{};if(o&&!n){t=e[i];break}}break}}return t})({links:(null==n?void 0:n.links)||[]}),d=e=>{g.emitGoogleTrackingEvent("seriesrecirc",{title:e})},[c,w]=r();if(o.useEffect(()=>{w&&g.emitUniqueGoogleTrackingEvent("series-inview",{title:null==s?void 0:s.promoHed})},[w]),!n)return null;if(!s)return null;const{dek:k="",hed:x="",image:$=null,promoHed:T="",url:E=""}=s,N=$&&($.segmentedSources||$.sources)&&Object.assign({},$);return o.createElement(e,null,s&&o.createElement(m,{ref:c},o.createElement(h,null,o.createElement(C,null,i(S[t])),o.createElement(u,null,N&&o.createElement("a",{href:E,onClick:()=>d(T||x)},o.createElement(l,Object.assign({},N,{isLazy:!0})))),o.createElement(v,null,o.createElement(f,null,i(S[t])),(x||T)&&o.createElement(b,null,o.createElement("a",{href:E,onClick:()=>d(T||x)},o.createElement("span",{dangerouslySetInnerHTML:{__html:T||x}}))),k&&o.createElement(y,null,o.createElement("span",{dangerouslySetInnerHTML:{__html:k}}))))))};w.propTypes={ContentWrapper:i.elementType,readMoreCTA:i.string,seriesData:i.shape({hed:i.string,dek:i.string,image:i.object,links:i.arrayOf(i.shape({hed:i.string,dek:i.string,image:i.object,isCurrent:i.bool,isExternal:i.bool,isPublished:i.bool,promoDek:i.string,promoHed:i.string,url:i.string}))})},w.defaultProps={ContentWrapper:d.NarrowContentWithWideAdRail,readMoreCTA:"Read more",seriesData:null},w.displayName="SeriesRecirc",e.exports=s(w,{keysToPluck:["seriesData"]})},2622:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});const i=n(2);t.default=i.defineMessages({readMoreDefault:{id:"ReadMore.SeriesRecirc",defaultMessage:"Read more",description:"SeriesRecirc component Read more text"},readNext:{id:"ReadNext.SeriesRecirc",defaultMessage:"Read next",description:"SeriesRecirc component Read next text"}})},2623:function(e,t,n){const i=n(3).default,{BaseText:o}=n(10),{calculateSpacing:a,getColorToken:r}=n(4),{BREAKPOINTS:s}=n(6),l=i.div.withConfig({displayName:"SeriesRecircAsset"})`
  grid-column: 1/5;

  @media (max-width: ${s.md}) {
    grid-column: 1/-1;
  }
`,d=i.div.withConfig({displayName:"SeriesRecircContainer"})`
  margin-top: ${a(4)};
  margin-bottom: ${a(5)};
  border-top: 2px solid
    ${({theme:e})=>r(e,"colors.discovery.body.white.heading")};
  padding-top: ${a(2)};
`,c=i.figure.withConfig({displayName:"SeriesRecircContent"})`
  margin-right: 0;
  margin-left: 0;

  @media (min-width: ${s.md}) {
    display: grid;
    grid-column-gap: ${a(3)};
    grid-template-columns: repeat(10, 1fr);
  }

  @media (max-width: ${s.md}) {
    display: block;
  }
`,p=i(o).withConfig({displayName:"SeriesRecircDek"})`
  @media (min-width: ${s.md}) {
    grid-column: 1/-1;
  }
`;p.defaultProps={as:"div",typeIdentity:"typography.definitions.consumptionEditorial.description-embed"},p.displayName="SeriesRecircDek";const g=i(o).withConfig({displayName:"SeriesPromoHed"})`
  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: ${s.md}) {
    grid-column: 1/-1;
  }
`;g.defaultProps={as:"h2",bottomSpacing:.625,topSpacing:1,typeIdentity:"typography.definitions.discovery.subhed-section-tertiary"};const u=i(o).withConfig({displayName:"SeriesRecircReadMoreCta"})`
  @media (max-width: ${s.md}) {
    display: none;
  }
`;u.defaultProps={typeIdentity:"typography.definitions.discovery.subhed-section-primary"};const m=i(u).withConfig({displayName:"SeriesRecircReadMoreCtaMobile"})`
  display: none;

  @media (max-width: ${s.md}) {
    display: block;
    grid-column: 1/-1;
    margin-bottom: 1em;
  }
`,h=i.div.withConfig({displayName:"SeriesRecircTextContainer"})`
  @media (min-width: ${s.md}) {
    grid-column: 5/-1;
  }
`;e.exports={SeriesRecircAsset:l,SeriesRecircContainer:d,SeriesRecircContent:c,SeriesRecircDek:p,SeriesPromoHed:g,SeriesRecircReadMoreCta:u,SeriesRecircReadMoreCtaMobile:m,SeriesRecircTextContainer:h}},2624:function(e,t,n){const{asConfiguredComponent:i}=n(9),o=n(2625);e.exports=i(o,"SeriesNavigation")},2625:function(e,t,n){const i=n(1),o=n(0),a=n(8),{useIntl:r}=n(2),{connector:s}=n(18),l=n(11),d=n(2626).default,{googleAnalytics:c}=n(12),{trackComponent:p}=n(5),{SeriesNavigationAsset:g,SeriesNavigationItemContainer:u,SeriesNavigationDek:m,SeriesNavigationHeadingContainer:h,SeriesNavigationHed:y,SeriesNavigationItemDek:b,SeriesNavigationItemHed:f,SeriesNavigationItemNowReading:C,SeriesNavigationList:v,SeriesNavigationListItem:S,SeriesNavigationResponsiveAssetComingSoonText:w,SeriesNavigationResponsiveAssetContainer:k,SeriesNavigationTextContainer:x,SeriesNavigationWrapper:$,UnpublishedResponsiveAssetContainer:T}=n(2627),E={"Coming soon":d.comingSoonText,"Now reading":d.nowReadingText},N=({comingSoonText:e,nowReadingText:t,links:n})=>{const{formatMessage:i}=r(),s=a("grid"),d=e=>{c.emitGoogleTrackingEvent("seriesnavigation",{title:e})};return n.length?o.createElement(v,{className:s},n.map((n={},a)=>{const r=a,{dek:s,hed:c,image:p,isCurrent:m,isExternal:h,isPublished:y,url:v}=n,$=!y&&!h,N=p&&(p.segmentedSources||p.sources);return o.createElement(S,{key:r},o.createElement(u,null,N&&o.createElement(g,{isComingSoon:$},o.createElement(k,{isComingSoon:$},$?o.createElement(o.Fragment,null,o.createElement(w,null,i(E[e])),o.createElement(T,null,o.createElement(l,Object.assign({},p,{isLazy:!0})))):o.createElement("a",{href:v,onClick:()=>d(c)},o.createElement(l,Object.assign({},p,{isLazy:!0}))))),o.createElement(x,null,c&&($?o.createElement(f,{isComingSoon:$,dangerouslySetInnerHTML:{__html:c}}):o.createElement(f,null,o.createElement("a",{href:v,dangerouslySetInnerHTML:{__html:c},onClick:()=>d(c)}))),!m&&s&&o.createElement(b,{isComingSoon:$,dangerouslySetInnerHTML:{__html:s}}),m&&o.createElement(C,{isCurrent:m,dangerouslySetInnerHTML:{__html:i(E[t])}}))))})):null};N.propTypes={comingSoonText:i.string,links:i.arrayOf(i.shape({dek:i.string,hed:i.string,isExternal:i.bool,url:i.string})),nowReadingText:i.string},N.defaultProps={links:[]};const L=({className:e,comingSoonText:t,nowReadingText:n,seriesData:i})=>{if(o.useEffect(()=>{p("SeriesNavigation")},[]),!i)return null;const{hed:r,dek:s,links:l}=i,d={comingSoonText:t,hed:r,dek:s,links:l,nowReadingText:n},c=a("grid",e);return o.createElement($,{className:c},o.createElement(h,null,r&&o.createElement(y,{dangerouslySetInnerHTML:{__html:r}}),s&&o.createElement(m,{dangerouslySetInnerHTML:{__html:s}})),o.createElement(N,Object.assign({},d)))};L.displayName="SeriesNavigation",L.propTypes={className:i.string,comingSoonText:i.string,nowReadingText:i.string,seriesData:i.shape({hed:i.string,dek:i.string,image:i.object,links:i.arrayOf(i.shape({hed:i.string,dek:i.string,image:i.object,isCurrent:i.bool,isExternal:i.bool,isPublished:i.bool,promoHed:i.string,url:i.string}))})},L.defaultProps={comingSoonText:"Coming soon",nowReadingText:"Now reading",seriesData:null},e.exports=s(L,{keysToPluck:["seriesData"]})},2626:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});const i=n(2);t.default=i.defineMessages({comingSoonText:{id:"ComingSoon.SeriesNavigation",defaultMessage:"COMING SOON",description:"ChannelFilter component Coming Soon text"},nowReadingText:{id:"NowReading.SeriesNavigation",defaultMessage:"Now Reading",description:"SeriesNavigation component Now Reading text"}})},2627:function(e,t,n){const i=n(3).default,{applyGridSpacing:o,cssVariablesGrid:a}=n(16),{BaseText:r}=n(10),{calculateSpacing:s,getTypographyStyles:l,getColorStyles:d}=n(4),{BREAKPOINTS:c}=n(6),{universalGridCore:p}=n(53),g=i.div.withConfig({displayName:"SeriesNavigationAsset"})`
  ${({isComingSoon:e})=>e?"background: black;":""}
`,u=i.div.withConfig({displayName:"SeriesNavigationItemContainer"})`
  @media (max-width: ${c.md}) {
    width: ${s(22)};
  }
`,m=i.div.withConfig({displayName:"SeriesNavigationDek"})`
  ${({theme:e})=>l(e,"typography.definitions.discovery.description-page")};
`,h=i.div.withConfig({displayName:"SeriesNavigationHeadingContainer"})`
  grid-column: 1/-1;
  padding-top: ${s(2)};
`,y=i.h2.withConfig({displayName:"SeriesNavigationHed"})`
  ${({theme:e})=>l(e,"typography.definitions.discovery.hed-core-primary")};

  margin-top: 0;
  margin-bottom: ${s(.25)};
`,b=i(r).withConfig({displayName:"SeriesNavigationItemDek"})`
  ${({theme:e})=>l(e,"typography.definitions.globalEditorial.context-secondary")};
  ${({isComingSoon:e})=>e?"opacity: 43%":""}
`;b.defaultProps={isComingSoon:!1};const f=i(r).withConfig({displayName:"SeriesNavigationItemHed"})`
  ${({isComingSoon:e})=>e?"opacity: 43%;":""};

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }
`;f.defaultProps={as:"p",bottomSpacing:.6875,isComingSoon:!1,topSpacing:1,typeIdentity:"typography.definitions.discovery.hed-bulletin-primary"};const C=i(r).withConfig({displayName:"SeriesNavigationItemNowReading"})`
  ${({theme:e})=>l(e,"typography.definitions.globalEditorial.context-secondary")};

  ${({theme:e})=>d(e,"color","colors.interactive.feedback.invalid-primary")};
`,v=i.ul.withConfig({displayName:"SeriesNavigationList"})`
  grid-column: 1/-1;
  margin: 0;
  padding: 0 0 0.5rem 0;
  height: 100%;
  list-style: none;

  &.grid {
    ${p()}
  }
  @media (max-width: ${c.md}) {
    &.grid {
      display: flex;
      flex-wrap: nowrap;
      align-items: flex-start;
      padding: 0 0 1rem 0;
      width: 100%;
      overflow-x: scroll;
    }
  }
`,S=i.li.withConfig({displayName:"SeriesNavigationListItem"})`
  display: inline-block;
  grid-column: span 3;

  @media (max-width: ${c.md}) {
    &:last-child {
      padding-right: ${s(3)};
    }
  }

  @media (min-width: ${c.lg}) {
    grid-column: span 2;
  }
`,w=i.div.withConfig({displayName:"SeriesNavigationResponsiveAssetContainer"})`
  position: relative;
`,k=i(r).withConfig({displayName:"SeriesNavigationResponsiveAssetComingSoonText"})`
  position: absolute;
  top: ${s(1)};
  left: ${s(1.25)};
  z-index: 1;
`;k.defaultProps={as:"span",colorToken:"colors.background.adContainer.special",typeIdentity:"typography.definitions.discovery.subhed-section-secondary"};const x=i.div.withConfig({displayName:"SeriesNavigationWrapper"})`
  ${a()}
  ${o("padding")};

  grid-template-rows: auto auto;
  border-bottom: 1px solid;
  padding-bottom: ${s(1)};
  width: 100%;

  ${({theme:e})=>d(e,"border-color","colors.discovery.body.white.divider")};
  ${({theme:e})=>d(e,"background","colors.foundation.menu-bg.collapsed")};

  &.grid {
    ${p()}
  }
`,$=i.div.withConfig({displayName:"SeriesNavigationTextContainer"})`
  margin-top: ${s(2)};
`,T=i.div.withConfig({displayName:"UnpublishedResponsiveAssetContainer"})`
  opacity: 43%;
`;e.exports={SeriesNavigationAsset:g,SeriesNavigationItemContainer:u,SeriesNavigationDek:m,SeriesNavigationHeadingContainer:h,SeriesNavigationHed:y,SeriesNavigationItemDek:b,SeriesNavigationItemHed:f,SeriesNavigationItemNowReading:C,SeriesNavigationList:v,SeriesNavigationListItem:S,SeriesNavigationResponsiveAssetComingSoonText:k,SeriesNavigationResponsiveAssetContainer:w,SeriesNavigationTextContainer:$,SeriesNavigationWrapper:x,UnpublishedResponsiveAssetContainer:T}},2628:function(e,t,n){const i=n(1),o=n(0),{asConfiguredComponent:a}=n(9),{googleAnalytics:r}=n(12),{trackComponent:s}=n(5),{ChannelCloudContainer:l,ChannelCloudContainerWrapper:d,ChannelCloudHeaderContainer:c,ChannelCloudHeaderLink:p,ChannelCloudHeaderImage:g,ChannelCloudSubChannelContainer:u,ChannelCloudSubChannelLink:m,ChannelCloudSubChannelLinkText:h,ChannelCloudSubChannelText:y}=n(2629),b=({channels:e,headerLogo:t,headerLink:n,sectionHeader:i})=>(o.useEffect(()=>{s("ChannelCloud")},[]),o.createElement(d,null,i&&o.createElement(c,null,t&&o.createElement(g,{src:t,alt:"logo"}),o.createElement(p,{href:n,hasLogo:Boolean(t),dangerouslySetInnerHTML:{__html:i}})),e&&o.createElement(l,null,e.map(e=>o.createElement(u,{key:e.id},o.createElement(y,{dangerouslySetInnerHTML:{__html:e.text}}),e.sub.map(e=>o.createElement(m,{key:e.id,href:e.url,onClick:()=>r.emitGoogleTrackingEvent("channelCloud",e)},o.createElement(h,{dangerouslySetInnerHTML:{__html:e.text}}))))))));b.propTypes={channels:i.arrayOf(i.shape({id:i.string,text:i.string,originalText:i.string,sub:i.arrayOf(i.shape({id:i.string,text:i.string,url:i.string}))})).isRequired,headerLink:i.string,headerLogo:i.string,sectionHeader:i.string.isRequired},b.displayName="ChannelCloud",e.exports=a(b,"ChannelCloud")},2629:function(e,t,n){const i=n(3).default,{BaseText:o,BaseLink:a}=n(10),{calculateSpacing:r,getColorStyles:s}=n(4),l="\n  display: flex;\n  align-items: center;\n",d=i.div.withConfig({displayName:"ChannelCloudContainerWrapper"})``,c=i.div.withConfig({displayName:"ChannelCloudHeaderContainer"})`
  ${l};

  border-width: 0 0 ${r(.25)};
  border-style: solid;
  padding: ${r(1)} ${r(3)} ${r(2)}
    0;

  ${({theme:e})=>s(e,"border-color","colors.interactive.base.black")};
`,p=i.img.withConfig({displayName:"ChannelCloudHeaderImage"})`
  width: 25px;
  height: 30px;
`,g=i(a).withConfig({displayName:"ChannelCloudHeaderLink"})`
  position: relative;
  top: ${r(.3)};
  padding-left: ${({hasLogo:e})=>e?r(1.3):0};
`;g.defaultProps={colorToken:"colors.interactive.base.black",typeIdentity:"typography.definitions.discovery.hed-bulletin-secondary"};const u=i.div.withConfig({displayName:"ChannelCloudContainer"})`
  display: flex;
  flex-wrap: wrap;
  padding: ${r(2.4)} ${r(6)}
    ${r(1)} 0;
`,m=i.div.withConfig({displayName:"ChannelCloudSubChannelContainer"})`
  ${l}
  flex-wrap: wrap;
  margin-bottom: ${r(2)};
  padding-right: ${r(2)};
`,h=i(o).withConfig({displayName:"ChannelCloudSubChannelText"})`
  padding-right: ${r(1)};

  &::after {
    content: ':';
  }
`;h.defaultProps={colorToken:"colors.interactive.base.black",typeIdentity:"typography.definitions.globalEditorial.context-primary"};const y=i(a).withConfig({displayName:"ChannelCloudSubChannelLink"})`
  ${l}
  padding-right: ${r(1)};

  svg {
    ${({theme:e})=>s(e,"fill","colors.consumption.body.standard.body-deemphasized")};

    position: relative;
    top: 2px;
    right: 2px;
    transform: rotate(-45deg);
    width: 12px;
    height: 12px;
    vertical-align: bottom;
  }

  &::after {
    ${({theme:e})=>s(e,"color","colors.consumption.body.standard.body-deemphasized")};

    position: relative;
    right: ${({hasIcon:e})=>e?r(.4):0};
    line-height: 0;
    content: ',';
  }

  &:last-child {
    &::after {
      content: '';
    }
  }
`,b=i(o).withConfig({displayName:"ChannelCloudSubChannelLinkText"})`
  line-height: 1.7em;

  &:hover {
    ${({theme:e})=>s(e,"color","colors.consumption.body.standard.link-hover")};
    text-decoration: underline;
    ${({theme:e})=>s(e,"text-decoration-color","colors.consumption.body.standard.link-hover")};
  }
`;b.defaultProps={colorToken:"colors.consumption.body.standard.body-deemphasized",typeIdentity:"typography.definitions.globalEditorial.context-primary"},e.exports={ChannelCloudContainer:u,ChannelCloudContainerWrapper:d,ChannelCloudHeaderContainer:c,ChannelCloudHeaderLink:g,ChannelCloudHeaderImage:p,ChannelCloudSubChannelContainer:m,ChannelCloudSubChannelLink:y,ChannelCloudSubChannelLinkText:b,ChannelCloudSubChannelText:h}},2630:function(e,t,n){const{asConfiguredComponent:i}=n(9),o=n(2631);e.exports=i(o,"GenericModal")},2631:function(e,t,n){const i=n(0),o=n(1),{connect:a}=n(20),r=n(157),{createGlobalStyle:s}=n(3),{getColorToken:l}=n(4),d=n(535),c=s`
  .ReactModal__Body--open {
    overflow: hidden;
  }

  .genericModalOverlay {
    position: fixed;
    top: ${({headerHeight:e})=>e?e+"px":0};
    left: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
  }

  .genericModal {
    background: ${({theme:e})=>l(e,"colors.interactive.base.white")};
    width: 100%;
    height: 100%;
  }
`,p=({children:e,shouldShowModal:t,toggleModal:n})=>{i.useEffect(()=>{r.setAppElement("#app-root")},[]);const o=i.useMemo(()=>{var e;if(!t||!document)return 0;const n=document.getElementsByClassName("site-navigation");return n&&0!==n.length&&(null===(e=n[0])||void 0===e?void 0:e.clientHeight)||0},[t]);return i.createElement(r,{isOpen:t,className:"genericModal",overlayClassName:"genericModalOverlay"},i.createElement("button",{onClick:()=>n(!1)},"X"),e,i.createElement(c,{headerHeight:o}))};p.propTypes={children:o.any,shouldShowModal:o.bool,toggleModal:o.func},e.exports=a(e=>({shouldShowModal:e.shouldShowModal}),e=>{const{toggleModal:t}=d(e);return{toggleModal:t}})(p)},2632:function(e,t,n){const{asConfiguredComponent:i}=n(9),o=n(2633);e.exports=i(o,"GenericSlider")},2633:function(e,t,n){const i=n(0),o=n(1),a=n(116),r=n(502),{SliderWrapper:s,SliderTitle:l,Suggestion:d,SlidesWrapper:c,Slides:p,RightArrow:g,LeftArrow:u,PreviousSlide:m,NextSlide:h,ActiveSlide:y,ActiveSlideWrapper:b,SliderCount:f,SmallScreenView:C}=n(2634),v=({contentType:e,items:t,nextSuggestion:n,showPublishedDate:o,title:v})=>{const[S,w]=i.useState([]),[k,x]=i.useState(0),[$,T]=i.useState(null),[E,N]=i.useState(null),[L,I]=i.useState(t[k]),[B,A]=i.useState(!1),[P,D]=i.useState(!1);i.useEffect(()=>{if(t.length){let n;switch(e){case"cartoon":n=t.map((e,t)=>i.createElement(r,Object.assign({key:t},e,{showPublishedDate:o})));break;default:n=[]}w(n),I(n[0]),T(n[1])}},[e,o,t]),i.useEffect(()=>{P&&(I(S[k]),T(S[k+1]),N(S[k-1]))},[P,k,S]);return e&&S.length?i.createElement(s,null,i.createElement(l,null,v,i.createElement(d,null,n)),i.createElement(c,null,i.createElement(p,{startFadeOut:B,startFadeIn:P},i.createElement(m,null,k>0&&E),i.createElement(u,{label:"Left",isIconButton:!0,ButtonIcon:a.Arrow,onClickHandler:()=>{x(k-1),D(!1),A(!0)},btnStyle:"text",isShown:S.length>1&&k>0}),i.createElement(b,{slideNo:k},i.createElement(y,{onAnimationEnd:()=>{D(!0),A(!1)}},L),i.createElement(f,null,`${k+1}/${S.length}`)),i.createElement(g,{label:"Right",isIconButton:!0,ButtonIcon:a.Arrow,onClickHandler:()=>{x(k+1),D(!1),A(!0)},btnStyle:"text",isShown:S.length>1&&k+1<S.length}),i.createElement(h,null,k+1<S.length&&$))),i.createElement(C,null,S.map((e,t)=>i.createElement("li",{key:t},e)))):null};v.propTypes={contentType:o.string.isRequired,items:o.array.isRequired,nextSuggestion:o.oneOfType([o.string,o.object]),showPublishedDate:o.bool,title:o.string},v.defaultProps={nextSuggestion:"",showPublishedDate:!1,title:""},e.exports=v},2634:function(e,t,n){const{default:i,css:o,keyframes:a}=n(3),{minScreen:r,maxScreen:s,calculateSpacing:l,getTypographyStyles:d,getColorToken:c}=n(4),{maxThresholds:p}=n(17),{BaseText:g}=n(10),u=n(14),{ResponsiveImageContainer:m,ResponsiveImagePicture:h}=n(24),y=n(19),{GridItem:b}=n(25),{ResponsiveCartoonWrapper:f,ResponsiveCartoonCredit:C,ResponsiveCartoonCaption:v,ResponsiveCartoonCTA:S}=n(236),w=a`
  from {
    opacity: .2;
  }

  to {
    opacity: 0;
  }
`,k=a`
  from {
    opacity: 0;
  }

  to {
    opacity: .2;
  }
`,x=a`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,$=a`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,T=i.h2.withConfig({displayName:"SliderTitle"})`
  position: relative;
  margin: 0;
  text-align: center;
  ${({theme:e})=>d(e,"typography.definitions.globalEditorial.context-primary")}
`,E=i.span.withConfig({displayName:"Suggestion"})`
  position: absolute;
  right: ${l(8)};

  a {
    ${({theme:e})=>d(e,"typography.definitions.foundation.link-primary")}
  }
  ${s(p.lg+"px")} {
    display: none;
  }
`,N=i(u).withConfig({displayName:"RightArrow"})`
  display: none;
  cursor: pointer;
  width: ${l(7.5)};
  ${({isShown:e})=>e&&"display: block;"}
`,L=i(N).withConfig({displayName:"LeftArrow"})`
  transform: rotate(180deg);
  ${({isShown:e})=>e&&"display: block;"}
`,I=i.div.withConfig({displayName:"Slide"})`
  position: relative;
  opacity: 0.3;
`,B=i(I).withConfig({displayName:"PreviousSlide"})`
  margin: auto;
`,A=i(I).withConfig({displayName:"NextSlide"})`
  margin: auto;
`,P=i.div.withConfig({displayName:"ActiveSlideWrapper"})`
  position: relative;
  margin: auto;
`,D=i.div.withConfig({displayName:"ActiveSlide"})`
  top: 0;
`,R=i.div.withConfig({displayName:"SlidesWrapper"})`
  ${s(p.lg+"px")} {
    display: none;
  }
`,M=o`
  ${f} {
    grid-template-rows: 1fr auto auto;
    height: 100%;
    max-height: 100%;

    .responsive-cartoon__caption,
    .responsive-cartoon__credit {
      overflow: hidden;
      white-space: nowrap;
    }
    ${h} {
      text-align: center;
    }

    ${m} {
      height: 100%;
      max-height: ${l(40.5)};
      object-fit: cover;
    }
  }
`,O=i(y.NoMarginsFullBleed).withConfig({displayName:"Slides"})`
  position: relative;
  padding-top: ${l(15.5)};
  ${b}:nth-child(1) {
    grid-column: 1/1;
    ${I} {
      height: 100%;
      ${M};

      ${m} {
        object-position: right;
      }
    }
  }
  ${b}:nth-child(2) {
    display: flex;
    grid-column: 2/2;
    align-self: center;
    justify-content: end;
  }
  ${b}:nth-child(3) {
    grid-column: 4/10;
    ${M};
  }
  ${b}:nth-child(4) {
    display: flex;
    grid-column: 11/11;
    align-self: center;
    justify-content: start;
  }
  ${b}:nth-child(5) {
    grid-column: 12/12;
    ${I} {
      height: 100%;
      ${M};
    }
  }
  ${D} {
    ${({startFadeOut:e,startFadeIn:t})=>e?o`
          animation: ${x} ease-in-out 300ms;
        `:t?o`
          animation: ${$} ease-in-out 300ms;
        `:""};
  }
  ${B}, ${A} {
    ${C},
    ${v},
    ${S} {
      display: none;
    }
    ${({startFadeOut:e,startFadeIn:t})=>e?o`
          animation: ${w} ease-in-out 300ms;
        `:t?o`
          animation: ${k} ease-in-out 300ms;
        `:""};
  }
`,H=i(g).withConfig({displayName:"SliderCount"})`
  position: absolute;
  top: 0;
  right: ${"-"+l(6.25)};
  border: 1px solid
    ${({theme:e})=>c(e,"colors.interactive.base.light")};
  border-radius: ${l(10)};
  padding: ${l(1)};
  width: ${l(6.25)};
  text-align: center;
  ${({theme:e})=>d(e,"typography.definitions.globalEditorial.numerical-small")};
`,_=i.ul.withConfig({displayName:"ListView"})`
  margin: 0;
  padding: 0 ${l(5)};
  list-style: none;

  li {
    border-bottom: 1px solid
      ${({theme:e})=>c(e,"colors.interactive.base.light")};
    padding: ${l(8)} 0;

    &:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
  }
  ${r(p.lg+"px")} {
    display: none;
  }
`,W=i.div.withConfig({displayName:"SliderWrapper"})`
  position: relative;
  padding: ${l(2.5)} 0;
`;e.exports={SliderWrapper:W,SliderTitle:T,SlidesWrapper:R,Slides:O,Suggestion:E,RightArrow:N,LeftArrow:L,PreviousSlide:B,NextSlide:A,ActiveSlide:D,ActiveSlideWrapper:P,SliderCount:H,SmallScreenView:_}},280:function(e,t,n){e.exports={Circle:n(430),Vogue:n(443)}},281:function(e,t,n){const i=n(1),o=n(0),{ToggleChipListWrapper:a,LabelText:r,ListWrapper:s,ListItemWrapper:l,HelperText:d}=n(148),{trackComponent:c}=n(5),{asThemedComponent:p}=n(30),g=({label:e,children:t,contentAlign:n,fullPageTheme:i,hasNoHorizontalScroll:p,hasIncreasedBottomMargin:g,hasLargeLabel:u,hasSpacing:m,hasToggleGridColor:h,helper:y,layout:b})=>(o.useEffect(()=>{c("ToggleChipList")},[]),o.createElement(a,{contentAlign:n,hasToggleGridColor:h},e&&o.createElement(r,{fullPageTheme:i,hasIncreasedBottomMargin:g,hasLargeLabel:u},e),o.createElement(s,{contentAlign:n,layout:b,hasNoHorizontalScroll:p,hasToggleGridColor:h,className:"list-wrapper"},o.Children.map(t,(e,t)=>e?o.createElement(l,{contentAlign:n,key:t,layout:b,hasSpacing:m,className:"list-item-wrapper"},e):null)),y&&o.createElement(d,null,y)));g.propTypes={children:i.array.isRequired,contentAlign:i.oneOf(["left","center","right"]),fullPageTheme:i.oneOf(["standard","inverted"]),hasIncreasedBottomMargin:i.bool,hasLargeLabel:i.bool,hasNoHorizontalScroll:i.bool,hasSpacing:i.bool,hasToggleGridColor:i.bool,helper:i.string,label:i.string,layout:i.oneOf(["wrap","nowrap"])},g.defaultProps={contentAlign:"left",hasIncreasedBottomMargin:!1,hasLargeLabel:!1,hasNoHorizontalScroll:!1,hasSpacing:!1,layout:"wrap"},e.exports=p(g)},423:function(e,t,n){e.exports=n(452)},425:function(e,t,n){const{fetchWithTimeout:i}=n(51),{loadData:o}=n(451);e.exports={fetchWithTimeout:i,loadData:o}},429:function(e,t,n){const i=n(1460),o=n(15),a=e=>{const t=o(e,"gradient-style"),n=o(e,"color-stops");let i=o(e,"angle");"radial"===t&&(i=null);return`background: ${((e,t,n=null)=>null===n?`${e}-gradient(${t})`:`${e}-gradient(${n}, ${t})`)(t,n,i)}; position: sticky;`},r=e=>{const t=o(e,"url"),n=o(e,"repeat"),i=o(e,"color"),a=o(e,"attachment"),r=o(e,"size");return((e,t="no-repeat",n="center",i="cover",o="scroll",a="transparent")=>{let r,s="";if(null!==e&&(r=e),s=`background-image:${r};\n      background-attachment:${o};\n      background-color:${a};\n      background-repeat:${t};\n      background-position:${n};`,"string"==typeof i)s+=`background-size:${i};`;else{const e=[];i.forEach(t=>{e.push(t)}),s+=`background-size:${i.toString()};`}return s})(t,n,o(e,"position"),r,a,i)},s=e=>{return i(e,"gradient")?a(o(e,"gradient")):i(e,"image")?r(o(e,"image")):i(e,"solid")?(t=o(e,"solid"),`background-color:${o(t,"color")};`):"background: none;";var t};e.exports={getPattern:(e,t)=>{let n;if(!e||0===Object.keys(e).length||!t)return"background: none;";if(i(e,"container-styles")){const l=e["container-styles"];if(!l[t])return"background: none;";n=l[t];const d=i(n,"pattern")?n.pattern:null;if(d&&d.length){let e="";return d.length>=2?(d.forEach((t,n)=>{let s=n;if(i(t,"gradient"))e+=a(o(t,"gradient"));else if(i(t,"image")){let n="";o(t,"image").size&&(n=o(t,"url")),n.size?e+=`'url(${n})'`:s=d.length,r(o(t,"image"))}else if(i(t,"solid")){const n=o(t,"solid");n&&(e+=o(n,"color"))}s!==d.length-1&&(e+=",")}),e.toString()):s(d[0])}}return"background: none;"}}},430:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};const o=n(0),a=n(1),r=e=>{var{fillColor:t="#000",width:n="100px",height:a="100px",margin:r="20px"}=e,s=i(e,["fillColor","width","height","margin"]);return o.createElement("svg",Object.assign({style:{width:n,height:a,margin:r,display:"inline-block"}},s,{version:"1.1",id:"L9",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 100 100",enableBackground:"new 0 0 0 0"}),o.createElement("path",{fill:t,d:"M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"},o.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"1s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})))};r.propTypes={fillColor:a.string,height:a.string,margin:a.string,width:a.string},e.exports=r},443:function(e,t,n){const i=n(0),{VogueWrapper:o}=n(444);e.exports=()=>i.createElement(o,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 36",textRendering:"geometricPrecision",shapeRendering:"geometricPrecision",className:"loader-vogue"},i.createElement("path",{id:"E",className:"st0",d:"M23.2612,0L23.2612,11.7649C23.2612,11.8148,23.0279,11.8315,23.0279,11.7649C23.0279,11.6982,23.2612,0.333282,12.7129,0.333282L8.76346,0.333282C8.54683,0.333282,8.41352,0.36661,8.41352,0.549915L8.41352,15.231C8.41352,15.3643,8.54683,15.4476,8.76346,15.4476L10.0799,15.4476C16.3456,15.4476,15.8457,9.14859,15.8457,9.08193C15.8457,9.01528,16.0957,9.03194,16.0957,9.08193C16.0957,9.13193,16.1123,22.2966,16.1123,22.3466C16.1123,22.3966,15.929,22.4132,15.929,22.3466C15.929,22.2799,15.779,15.7809,9.94661,15.7809L8.76346,15.7809C8.56349,15.7809,8.41352,15.8476,8.41352,15.9975L8.41352,31.7951C8.41352,31.9118,8.54683,32.0117,8.76346,32.0117C9.64666,32.0117,11.9296,32.0284,12.5629,32.0284C23.8945,32.0617,23.7445,19.8969,23.7445,19.8469C23.7445,19.797,24.0278,19.797,24.0278,19.8469L24.0278,32.445L0.114794,32.445C0.0481373,32.445,0.0481373,32.0951,0.114794,32.0951L2.49776,32.0951C2.71439,32.0951,2.84771,32.0284,2.84771,31.8784C2.84771,29.1455,2.84771,0.799877,2.84771,0.549915C2.84771,0.349946,2.58108,0.333282,2.49776,0.333282C2.46443,0.333282,1.23129,0.333282,0.0148091,0.333282C0.0148091,0.333282,-0.0685114,0.166641,0.0148091,0C0.0981296,0,23.2612,0,23.2612,0",opacity:"0",transform:"translate(4.15223,1.87884)",style:{animation:"E_o 1.5s linear infinite both"}}),i.createElement("path",{id:"U",className:"st0",d:"M27.1719,0.266719C25.7716,0.266719,24.3713,0.266719,24.3713,0.266719C24.3713,0.266719,24.0214,0.266719,24.0214,0.466748C24.0214,2.70041,24.0214,21.5031,24.0214,24.1868L24.0214,24.2034C24.038,30.8378,18.9372,33.0048,15.2701,33.0548L15.2701,33.0381C10.9528,33.0548,3.20169,32.338,3.20169,22.77C3.20169,22.77,3.18502,1.00016,3.16835,0.700115C3.15167,0.233381,2.55159,0.250051,2.55159,0.250051C2.55159,0.250051,0.10124,0.250051,0.017895,0.250051C-0.0654503,0.250051,-0.0487813,-0.1,0.017895,-0.1L11.9529,-0.1C12.0196,-0.1,12.003,0.250051,11.9529,0.250051C11.9029,0.250051,9.41925,0.250051,9.41925,0.250051C9.41925,0.250051,8.6358,0.216712,8.6358,0.733453C8.6358,1.46689,8.65246,25.0203,8.65246,25.8537C8.65246,29.5209,10.7361,32.7714,15.2534,32.7048C18.7873,32.638,23.6879,30.5711,23.6714,24.1868C23.6714,23.8701,23.6714,2.83376,23.6714,0.466748C23.6546,0.283389,23.3046,0.266719,23.3046,0.266719L19.9875,0.266719C19.9207,0.266719,19.9207,-0.0666619,20.004,-0.0666619C20.0208,-0.0666619,27.0885,-0.0666619,27.1719,-0.0666619C27.2385,0.100029,27.1719,0.266719,27.1719,0.266719Z",opacity:"0",transform:"translate(2.57354,1.9455)",style:{animation:"U_o 1.5s linear infinite both"}}),i.createElement("path",{id:"G",className:"st0",d:"M16.5382,19.9408L19.2012,19.9408C19.2012,19.9408,19.7005,19.8909,19.7005,20.124C19.7005,20.1406,19.7005,27.7636,19.7005,27.7636C19.7005,33.6389,13.8419,33.7056,12.1941,33.5224C6.06906,32.8233,5.95255,20.1905,5.91927,16.8784C5.83605,7.85727,7.2508,0.00125154,13.4091,0.317489C20.7159,0.683659,22.63,11.1694,22.7465,11.6355C22.9962,11.7187,22.9962,11.519,22.9962,11.519L23.0127,0.0844721C23.0127,0.0844721,22.9628,-0.0153926,22.813,0.11776C22.7631,0.167692,22.6965,0.23427,22.63,0.300845C19.401,3.59637,17.7866,0.134404,13.0762,-0.0153926C7.28409,-0.198477,0.0938322,7.82398,-0.00603238,17.0947C-0.105897,26.4154,6.01913,33.6056,12.7101,33.8554C16.3385,33.9885,16.2553,32.9898,20.7324,31.5917C23.4621,30.743,24.7604,32.5904,24.8602,33.356C25.0267,33.4725,25.0434,33.2727,25.0434,33.2727L25.0434,20.1739C25.0434,19.9077,25.4094,19.9576,25.4094,19.9576L27.8729,19.9576C27.9394,19.9576,27.9394,19.5914,27.8729,19.5914L16.5216,19.5914C16.4383,19.5914,16.4383,19.9408,16.5382,19.9408",opacity:"0",transform:"translate(2.19725,0.935133)",style:{animation:"G_o 1.5s linear infinite both"}}),i.createElement("path",{id:"O",className:"st0",d:"M5.92208,16.6329C5.92208,7.61677,7.65213,0.247436,14.0399,0.264071C20.9103,0.264071,22.2578,7.93283,22.2578,16.6496C22.2578,25.6659,20.9435,33.4346,14.09,33.4346C6.73721,33.4177,5.92208,26.115,5.92208,16.6329M13.9735,33.6839C20.7938,33.7005,28.1633,26.1649,28.18,16.8159C28.1965,7.01792,21.1101,0.0478142,14.09,-0.00209099C6.90356,-0.0686311,0,7.83302,0,16.8159C0,26.0983,6.52095,33.6507,13.9735,33.6839",opacity:"0",transform:"translate(2.065,1.05937)",style:{animation:"O_o 1.5s linear infinite both"}}),i.createElement("path",{id:"V",className:"st0",d:"M0.0178861,0L11.7176,0C11.7843,0,11.7676,0.349993,11.7176,0.349993L9.31769,0.349993C9.31769,0.349993,8.63437,0.31666,8.85104,0.699985C8.88437,0.783317,17.1175,23.2828,17.1175,23.2828C17.1175,23.2828,17.2675,23.6662,17.3842,23.7162C17.3842,23.7162,24.7007,1.11664,24.7007,1.09998C24.7674,0.883315,25.034,0.366659,24.584,0.366659L21.9341,0.366659C21.8841,0.366659,21.8841,0.0166663,21.9341,0.0166663L28.234,0.0166663C28.284,0.0166663,28.284,0.366659,28.234,0.366659L25.884,0.366659C25.234,0.349993,25.234,0.549989,25.1174,0.883315C25.0674,1.04998,14.9342,32.616,14.9342,32.616C14.9342,32.616,14.8842,32.4827,14.8509,32.3493C10.5677,19.9663,3.93447,2.73328,3.40115,0.883315C3.25115,0.333326,3.16782,0.349993,2.83449,0.349993C2.71783,0.349993,0.101218,0.349993,0.0178861,0.349993C-0.0654455,0.349993,-0.0487792,0,0.0178861,0",opacity:"0",transform:"translate(2.03854,1.8455)",style:{animation:"V_o 1.5s linear infinite both"}}))},444:function(e,t,n){const i=n(3).default.svg.withConfig({displayName:"VogueWrapper"})`
  animation: rotate 2s linear infinite;
  width: 36px;
  height: 32px;

  & .path {
    stroke: #5652bf;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes E_o {
    0% {
      opacity: 0;
    }

    80.5556% {
      animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
      opacity: 0;
    }

    83.3333% {
      opacity: 1;
    }

    97.2222% {
      animation-timing-function: cubic-bezier(0.42, 0, 1, 1);
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
  @keyframes U_o {
    0% {
      opacity: 0;
    }

    63.8889% {
      animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
      opacity: 0;
    }

    66.6667% {
      opacity: 1;
    }

    80.5556% {
      animation-timing-function: cubic-bezier(0.42, 0, 1, 1);
      opacity: 1;
    }

    83.3333% {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
  }
  @keyframes G_o {
    0% {
      opacity: 0;
    }

    47.2222% {
      animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    63.8889% {
      animation-timing-function: cubic-bezier(0.42, 0, 1, 1);
      opacity: 1;
    }

    66.6667% {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
  }
  @keyframes O_o {
    0% {
      opacity: 0;
    }

    30.5556% {
      animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
      opacity: 0;
    }

    33.3333% {
      opacity: 1;
    }

    47.2222% {
      animation-timing-function: cubic-bezier(0.42, 0, 1, 1);
      opacity: 1;
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
  }
  @keyframes V_o {
    0% {
      opacity: 0;
    }

    13.8889% {
      animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
      opacity: 0;
    }

    16.6667% {
      animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
      opacity: 1;
    }

    30.5556% {
      animation-timing-function: cubic-bezier(0.42, 0, 1, 1);
      opacity: 1;
    }

    33.3333% {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
  }
`;e.exports={VogueWrapper:i}},446:function(e,t,n){const{asConfiguredComponent:i}=n(9),o=n(447);e.exports=i(o,"ChannelNavigation")},447:function(e,t,n){const i=n(0),{useState:o,useRef:a,useEffect:r}=n(0),s=n(1),{useIntl:l}=n(2),d=n(44),c=n(448).default,{connector:p}=n(18),{trackComponent:g}=n(5),{googleAnalytics:u}=n(12),m=n(449),h=n(122),y=n(32),b=n(104),{INITIAL_STATE:f,computeScroll:C}=n(28),{ChannelNavigationWrapper:v,ChannelNavigationContainer:S,ChannelNavigationContent:w,ChannelNavigationLogoWrapper:k,ChannelNavigationLogo:x,ChannelNavigationScrollViewLogo:$,ChannelNavigationLinksWrapper:T,ChannelNavigationLinksList:E,ChannelNavigationLinkItem:N,ChannelNavigationLink:L,ChannelNavigationChannelDrawer:I,ChannelNavigationGroupedNavigation:B,ChannelNavigationGlobalDrawer:A,ChannelNavigationAccount:P,ChannelNavigationToggle:D,ChannelNavigationSecondaryMenu:R}=n(457),M=({accountProps:e,isFixed:t,logo:n,isAccountsEnabled:s,scrollViewLogo:p,channelNavigationLinks:M,channelNavigationLogoBaseUrl:O,overrideChannelNavigationLinks:H,secondaryMenuProps:_,showExternalProfileLink:W,loaderType:G,onNavigationLinkClick:j,activeLinkIndex:F,user:V,hideLinksOnMobile:U})=>{i.useEffect(()=>{g("ChannelNavigation")},[]);const[z,q]=o(!1),[K,Y]=i.useState(!1),[Z,X]=o(null),[J,Q]=o(f),ee=a(null),{formatMessage:te}=l(),ne=H||M;i.useEffect(()=>{const e=e=>{"Escape"===e.key&&K&&(u.emitGoogleTrackingEvent("hamburger-menu-"+(K?"collapsed":"expanded")),Y(!1))};return K&&window.addEventListener("keyup",e),()=>window.removeEventListener("keyup",e)},[K]);const ie=e=>{Q(e=>{var t,n;const i=C(e),o=(null===(t=null===document||void 0===document?void 0:document.body)||void 0===t?void 0:t.scrollHeight)-(null===(n=null===document||void 0===document?void 0:document.body)||void 0===n?void 0:n.clientHeight);return Object.assign(Object.assign({},i),{scrollHeight:o})}),e.preventDefault()};r(()=>{const e=d(ie,100);return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[t]);const{direction:oe,pageYOffset:ae,scrollHeight:re}=J,se=K?y:b,le=t||ae>0,de=t||"up"!==oe&&ae>0||re===ae;return ne&&ne.length?i.createElement(v,{isFixed:le},i.createElement(S,{ref:ee,"data-testid":"channel-navigation"},i.createElement(w,{isFixed:le,isScrollingDown:de},n&&p&&i.createElement(k,{isFixed:le,isScrollingDown:de},i.createElement("a",{href:O},i.createElement(x,Object.assign({isScrollingDown:de},n)),de&&i.createElement($,Object.assign({isScrollingDown:de},p))))),i.createElement(T,{isScrollingDown:de,hideLinksOnMobile:U},i.createElement(E,{"data-journey-hook":"channel-navigation"},ne.map((e,t)=>{const n=void 0===F||t===F;return i.createElement(N,{key:e.key||e.type},i.createElement(L,{tabIndex:0,isActive:n,label:e.text,href:e.href,as:"a",isInline:!0,onClick:t=>{e.apiEndpoint&&(t.preventDefault(),q(!0),X(Object.assign({},e))),j&&j(e),u.emitGoogleTrackingEvent(e.analyticsEvent)}},e.text))}))),!s&&W&&i.createElement(P,{isScrollingDown:de,signInLabel:null==W?void 0:W.signInLabel,signInLink:null==W?void 0:W.signInLink,user:{isAuthenticated:!1}}),s&&V&&i.createElement(P,{isScrollingDown:de,accountLinks:e.accountLinks,savedStoriesLabel:null==e?void 0:e.savedStoriesLabel,accountBookmarkAlertLabel:null==e?void 0:e.accountBookmarkAlertLabel,accountLabel:null==e?void 0:e.accountLabel,signInLabel:null==e?void 0:e.signInLabel,signInLink:null==e?void 0:e.signInLink,signOutLink:null==e?void 0:e.signOutLink,user:V,className:"standard-navigation__section--utility-links-login"}),i.createElement(D,{tabIndex:0,isIconButton:!0,isScrollingDown:de,ButtonIcon:se,label:"Open Navigation Menu",onClickHandler:()=>{u.emitGoogleTrackingEvent("hamburger-menu-"+(K?"collapsed":"expanded")),Y(!K)},role:"button","aria-expanded":K})),!!Z&&i.createElement(I,{isOpen:z,onClose:()=>{q(!1)},contentLabel:te(c.channelDrawerContentLabel),showCloseButton:!0,className:"channel-navigation-drawer"},i.createElement(B,null,i.createElement(m,{storeKey:Z.key,dataUrl:Z.apiEndpoint,hasAtoZIndex:Z.hasAtoZIndex,loaderType:G,hasFilter:Z.hasFilter,filterLabel:Z.filterLabel}))),i.createElement(A,{isOpen:K,onClose:()=>Q(!K),contentLabel:"Navigation Menu"},i.createElement(R,{isFixed:le},!s&&W?i.createElement(h,Object.assign({},_,{user:{isAuthenticated:!1},isAccountsEnabled:!0,contentAlign:"center"})):i.createElement(h,Object.assign({accountProps:e},_,{user:V,isAccountsEnabled:s,contentAlign:"center"}))))):null},O=s.shape({text:s.string,key:s.string,apiEndpoint:s.string});M.defaultProps={accountProps:{accountLinks:[]},hideLinksOnMobile:!1,isAccountsEnabled:!1},M.propTypes={accountProps:s.object,activeLinkIndex:s.number,channelNavigationLinks:s.arrayOf(O),channelNavigationLogoBaseUrl:s.string,hideLinksOnMobile:s.bool,isAccountsEnabled:s.bool,isFixed:s.bool,loaderType:s.string,logo:s.object,onNavigationLinkClick:s.func,overrideChannelNavigationLinks:s.arrayOf(O),scrollViewLogo:s.object,secondaryMenuProps:s.object,showExternalProfileLink:s.object,user:s.shape({isAuthenticated:s.bool.isRequired})},M.displayName="ChannelNavigation",e.exports=p(M,{keysToPluck:["user","isAccountsEnabled","accountProps"]})},448:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});const i=n(2);t.default=i.defineMessages({toggleLabel:{id:"ChannelNavigation.ToggleLabel",defaultMessage:"Open Navigation Menu",description:"ChannelNavigation component toggle label"},channelDrawerContentLabel:{id:"ChannelNavigation.ChannelDrawerContentLabel",defaultMessage:"Runway filters navigation",description:"ChannelNavigation component channel drawer content label"},globalDrawerContentLabel:{id:"ChannelNavigation.GlobalDrawerContentLabel",defaultMessage:"Navigation Menu",description:"ChannelNavigation component global drawer content label"}})},449:function(e,t,n){e.exports=n(450)},450:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};const o=n(1),a=n(0),{useState:r,useEffect:s}=n(0),{connect:l}=n(20),{loadData:d}=n(425),c=n(423),p=n(280),{LoaderWrapper:g}=n(456),u=n(159),{trackComponent:m}=n(5),h=e=>{var{dataUrl:t,storeKey:n,data:o,setData:l,loaderType:h="Circle"}=e,y=i(e,["dataUrl","storeKey","data","setData","loaderType"]);a.useEffect(()=>{m("GroupedNavigationContainer")},[]);const[b,f]=r(!1),[C,v]=r(!1),S=p[h];return s(()=>{!async function(){if(!o&&t){f(!0);try{const e=await d({url:""+t}),i=e?e[n]:[];l(n,i)}catch(e){v(!0)}finally{f(!1)}}}()},[t]),a.createElement(a.Fragment,null,C&&a.createElement(u.ContentCenterNoBackground,{ariaLive:"polite",className:"brand-background__lede",dangerousHed:"Oops",dangerousDek:"something went wrong"}),b&&a.createElement(g,null,a.createElement(S,null)),o&&a.createElement(c,Object.assign({groupedLinks:o},y)))};h.propTypes={analyticsEventForFilter:o.string,data:o.array,dataUrl:o.string.isRequired,filterLabel:o.string,hasAtoZIndex:o.bool,hasFilter:o.bool,loaderType:o.string,setData:o.func.isRequired,storeKey:o.string.isRequired},e.exports=l((e,{storeKey:t})=>{var n;return{data:(null===(n=e.groupedNavigation)||void 0===n?void 0:n[t])||null}},e=>({setData:(t,n)=>{e({type:"MERGE_KEY",key:"groupedNavigation",value:{[t]:n}})}}))(h)},451:function(e,t){e.exports={loadData:async function({url:e,gtmEvent:t=null}){window.dataLayer&&t&&window.dataLayer.push({event:t});const n=await fetch(e);if(n.ok)return n.json();throw new Error(n.statusText)}}},452:function(e,t,n){const i=n(1),o=n(0),{useIntl:a}=n(2),{useState:r}=n(0),s=n(141),l=n(84),d=n(70),{asConfiguredComponent:c}=n(9),{filter:p,useDebounce:g}=n(453),u=n(454),{trackComponent:m}=n(5),{GroupedNavigationWrapper:h,GroupedNavigationFilter:y,GroupedNavigationFilterContent:b,GroupedNavigationFilterInput:f,GroupedNavigationContent:C,GroupedNavigationLinks:v,GroupedNavigationGroup:S,GroupedNavigationIndex:w}=n(220),k=n(455).default,x=({className:e,groupedLinks:t,showContentDivider:n=!0,hasAtoZIndex:i=!1,hasFilter:c=!1,analyticsEventForFilter:x,filterLabel:$})=>{o.useEffect(()=>{m("GroupedNavigation")},[]);const{formatMessage:T}=a(),E=o.useRef(null),N=s(),[L,I]=r(""),[B,A]=g(t,200);return t&&t.length?o.createElement(h,{className:e,hasFilter:c,"data-testid":"GroupedNavigationWrapper"},c&&o.createElement(y,null,o.createElement(b,null,o.createElement(f,{placeholder:$,"aria-label":$||T(k.filterInputAriaLabelText),name:"filter",type:"text",onChange:e=>{const n=e.target.value;I(n),A(()=>p(t,n))},onFocus:()=>{x&&l.emitGoogleTrackingEvent(x)},value:L}),o.createElement(d,null))),o.createElement(C,{hasFilter:c},o.createElement(v,{ref:E},B.map(e=>{if(!e.links)return null;const t=e.links.map(e=>{const t=!0===e.isSecondary?"link--secondary":"link--primary";return Object.assign(Object.assign({},e),{className:t})}),a={};return i&&(a.id="#"===e.groupName?"other-"+N:`${e.groupName.toLowerCase()}-${N}`),o.createElement(S,{key:e.groupName,className:"grouped-navigation__group",links:t,linkClassName:"grouped-navigation__link",heading:e.groupName,showContentDivider:n,shouldStyleListItems:!0,attributes:a})})),i&&o.createElement(w,{className:"grouped-navigation__index"},o.createElement(u,{links:t,linksRef:E,navId:N})))):null},$=i.shape({text:i.string.isRequired,url:i.string.isRequired,isSecondary:i.bool,analyticsEvent:i.string}),T=i.arrayOf(i.shape({links:i.arrayOf($),groupName:i.string,groupId:i.string}));x.propTypes={analyticsEventForFilter:i.string,className:i.string,filterLabel:i.string,groupedLinks:T,hasAtoZIndex:i.bool,hasFilter:i.bool,showContentDivider:i.bool},x.displayName="GroupedNavigation",e.exports=c(x,"GroupedNavigation"),e.exports.groupedLinksShape=T},453:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.useDebounce=t.filter=void 0;const{useState:i,useCallback:o}=n(0),a=n(48);t.filter=(e,t)=>{if(!(null==t?void 0:t.trim()))return e;const n=e=>e.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9\s]/gi,"");return e.map(e=>{var i;return Object.assign(Object.assign({},e),{links:null===(i=e.links)||void 0===i?void 0:i.filter(e=>/(\s|')/.test(t)?n(e.text).includes(n(t)):e.text.match(/([a-zA-Z]\.){2,}/)?e.text.split(" ").filter(e=>n(e).startsWith(n(t))).length:e.text.split(/([ \-'’.]+)/).filter(e=>n(e).startsWith(n(t))).length)})}).filter(e=>{var t;return null===(t=e.links)||void 0===t?void 0:t.length})};t.useDebounce=(e,t)=>{const[n,r]=i(e),s=o(a(e=>{r(e)},t),[]);return[n,e=>{s(e)}]}},454:function(e,t,n){const i=n(1),o=n(0),{AtoZIndexWrapper:a,AtoZIndexList:r,AtoZIndexLink:s,AtoZIndexText:l}=n(220),d=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","#"],c=({links:e,linksRef:t,navId:n})=>{if(!e||!e.length)return null;const i=e=>{e.preventDefault();const n=window.requestAnimationFrame||(e=>window.setTimeout(e,20)),i=document.getElementById(e.target.hash.replace("#",""));if(!i)return;const{offsetTop:o}=i,{offsetTop:a,scrollTop:r}=t.current,s=o-a-r;let l=0;const d=()=>{l+=20;const e=function(e,t,n,i){let o=e;return o/=i/2,o<1?n/2*o*o+t:(o--,-n/2*(o*(o-2)-1)+t)}(l,r,s,600);t.current.scrollTop=e,l<600&&n(d)};d()};return o.createElement(a,{"data-testid":"AtoZIndexWrapper"},o.createElement(r,null,d.map(t=>{const a=e.find(e=>e.groupName===t);return a?o.createElement("li",{key:t},o.createElement(s,{"data-testid":"AtoZIndexLink",href:"#"+("#"===a.groupName?"other-"+n:`${a.groupName.toLowerCase()}-${n}`),onClick:i},t)):o.createElement(l,{key:t},t)})))};c.propTypes={links:i.arrayOf(i.shape({groupName:i.string.isRequired})),linksRef:i.object,navId:i.string},e.exports=c},455:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});const i=n(2);t.default=i.defineMessages({filterInputAriaLabelText:{id:"GroupedNavigation.FilterInputAriaLabel",defaultMessage:"Filter links",description:"Grouped Navigation Filter component aria label text",isConfigurable:!0}})},456:function(e,t,n){const i=n(3).default,{calculateSpacing:o}=n(4),a=i.div.withConfig({displayName:"LoaderWrapper"})`
  padding-top: ${o(6)};
  text-align: center;
`;e.exports={LoaderWrapper:a}},457:function(e,t,n){const i=n(3).default,{calculateSpacing:o,getColorToken:a,getTypographyStyles:r,getZIndex:s}=n(4),{hideVisually:l}=n(49),{BREAKPOINTS:d,ZINDEX_MAP:c}=n(6),{maxThresholds:p}=n(17),g=n(14),u=n(80),m=n(59),h=n(19),y=n(171),{SecondaryMenuAccount:b}=n(170),{StandardNavigationDropdown:f,StandardNavigationAccountLabel:C,AccountDropdownToggleIcon:v}=n(82),{GridItem:S}=n(25),w=i.nav.withConfig({displayName:"ChannelNavigationWrapper"})`
  position: relative;
  z-index: ${c.persistentTopLayer};
  max-height: ${o(24)};
  ${({isFixed:e})=>e&&"\n      position: fixed;\n      top: 0;\n      right: 0;\n      left: 0;\n      "};
`;w.displayName="ChannelNavigationWrapper";const k=i.div.withConfig({displayName:"ChannelNavigationContainer"})`
  position: relative;
  border-bottom: 1px solid rgba(51, 51, 51, 1);

  background: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.background")};
  @media (min-width: ${d.md}) {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`,x=i.div.withConfig({displayName:"ChannelNavigationContent"})`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  z-index: 1;
  margin: 0 auto;
  border-bottom: 1px solid
    ${({theme:e})=>a(e,"colors.consumption.lead.inverted.divider")};
  background: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.background")};
  @media (min-width: ${d.md}) {
    flex-wrap: ${({isScrollingDown:e})=>e?"nowrap":"wrap"};
  }
`,$=i.div.withConfig({displayName:"ChannelNavigationLogoWrapper"})`
  margin: 0 auto;
  padding: ${o(1)};

  @media (min-width: ${d.md}) {
    ${({isScrollingDown:e})=>e?`\n      left: ${o(3)};\n      position: absolute;\n      padding: ${o(1)};\n    `:`padding: ${o(1)} 0;`}
  }
`,T=i(m).withConfig({displayName:"ChannelNavigationLogo"})`
  width: 96px;
  @media (min-width: ${d.md}) {
    display: flex;
    padding: ${o(1)} 0;
    width: 168px;
    height: 88px;
    ${({isScrollingDown:e})=>e&&`\n        ${l()}\n      `};
  }
`,E=i(m).withConfig({displayName:"ChannelNavigationScrollViewLogo"})`
  @media (max-width: ${d.md}) {
    ${l()}
  }
  padding: ${o(.5)} 0;
  width: 83px;
  height: unset;
`,N=i(h.NoMargins).withConfig({displayName:"ChannelNavigationLinksWrapper"})`
  > ${S} {
    grid-column: 1;
    margin: 0 auto;
    text-align: center;
    @media (min-width: ${d.md}) {
      grid-column: 2 / span 10;
    }
  }

  position: absolute;
  top: auto;
  transition: transform 0.5s ease-in-out;
  background: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.background")};
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;

  ${({isScrollingDown:e})=>e?"transform: translateY(-100%);":"transform: translateY(0%);"}

  @media (min-width: ${d.md}) {
    display: grid;
    position: initial;
    align-items: center;
    justify-content: center;
    transform: none;
    margin: 0 calculateSpacing(14.5);
    height: 64px;
  }

  @media (max-width: ${p.md}px) {
    ${({hideLinksOnMobile:e})=>e?l()+";":`padding: ${o(2)} 0 ${o(2)}\n      ${o(3)};\n      &::after {\n        background: linear-gradient(\n          to right,\n          rgba(0, 0, 0, 0.01) 31.25%,\n          ${({theme:e})=>a(e,"colors.consumption.lead.inverted.background")}\n            100%\n        );\n        content: '';\n        height: ${o(4)};\n        width: 48px;\n        bottom: ${o(2)};\n        right: 0;\n        position: sticky;\n        pointer-events: none;`}
  }
`,L=i.ul.withConfig({displayName:"ChannelNavigationLinksList"})`
  display: flex;
  margin: 0 auto;
  list-style: none;
  text-align: center;
  padding-inline-start: 0;

  @media (max-width: ${d.md}) {
    ${({hideLinksOnMobile:e})=>e?l()+";":""}
  }
`,I=i.li.withConfig({displayName:"ChannelNavigationLinkItem"})`
  padding-right: ${o(2)};

  &:last-child {
    padding-right: 0;
  }

  @media (min-width: ${d.md}) {
    margin-right: 0;
    padding-right: ${o(3)};
  }
`,B=i.a.withConfig({displayName:"ChannelNavigationLink"})`
  ${({theme:e})=>r(e,"typography.definitions.foundation.link-primary")}

  border: none;
  min-width: auto;
  text-decoration: none;
  white-space: nowrap;
  color: rgb(
    ${({theme:e})=>a(e,"colors.consumption.lead.inverted.link",{rgbOnly:!0})},
    ${({isActive:e})=>e?"1":"0.6"}
  );

  &:hover {
    color: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.link-hover")};
  }
`,A=i(u.Right).withConfig({displayName:"ChannelNavigationChannelDrawer"})`
  @media (min-width: ${d.md}) {
    width: 400px;
    max-width: 400px;

    && {
      height: 100%;
    }
  }
`,P=i.div.withConfig({displayName:"ChannelNavigationGroupedNavigation"})`
  padding: 0 ${o(4)} ${o(2)};
  height: 100%;
`,D=i(u).withConfig({displayName:"ChannelNavigationGlobalDrawer"})`
  height: auto;
`,R=i(y).withConfig({displayName:"ChannelNavigationAccount"})`
  position: absolute;
  right: ${o(3)};
  border: none;
  background: transparent;
  padding: ${o(1)} ${o(1.5)};

  @media (max-width: ${d.md}) {
    display: none;
  }

  @media (min-width: ${d.md}) {
    left: inherit;
    padding: 0;
    min-width: auto;
  }

  &&&.standard-navigation-account {
    position: absolute;
    top: ${({isScrollingDown:e})=>o(e?1.4:14.4)};
    margin-right: ${o(3)};
    margin-left: ${o(1.5)};
    width: ${o(12)};
    height: ${o(6)};
    white-space: nowrap;
  }

  ${C} {
    justify-content: center;
    color: ${({theme:e})=>a(e,"colors.interactive.base.white")};

    &:hover,
    &:link,
    &:visited,
    &:active {
      color: ${({theme:e})=>a(e,"colors.interactive.base.white")};

      svg {
        path {
          fill: ${({theme:e})=>a(e,"colors.interactive.base.white")};
        }
      }
    }
  }

  .standard-navigation-account--icon,
  ${v} {
    margin-right: ${o(2)};
  }

  ${f} {
    top: ${o(6)};
    background-color: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.background")};
    color: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.link")};

    &::before {
      border-color: black;
    }
  }

  ${f} .account-links__navigation {
    background-color: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.background")};

    .navigation__list-item {
      &:hover {
        background-color: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.background")};
      }

      .navigation__link {
        ${({theme:e})=>r(e,"typography.definitions.foundation.link-secondary")};
        color: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.link")};
      }
    }
  }

  ${f}

  .account-links__sign-out {
    ${({theme:e})=>r(e,"typography.definitions.foundation.link-secondary")};
    color: ${a("colors.consumption.lead.inverted.link")};

    &:hover {
      background-color: ${a("colors.consumption.lead.standard.divider")};
      color: ${a("colors.consumption.lead.standard.link")};
    }
  }
`,M=i(g.Utility).withConfig({displayName:"ChannelNavigationToggle"})`
  position: absolute;
  top: 14px;
  right: ${o(2)};
  z-index: ${s("dropdown")};
  border: none;
  background: transparent;
  padding: ${o(1)} ${o(1.5)};
  width: ${o(4)};
  height: ${o(4)};
  @media (min-width: ${d.md}) {
    top: ${({isScrollingDown:e})=>e?o(2.5):"122px"};
    left: inherit;
    padding: 0;
    min-width: auto;
  }

  & > div {
    position: absolute;
  }

  path {
    fill: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.link")};
  }

  &:focus {
    outline: 2px auto -webkit-focus-ring-color;
    border: unset;
    background: transparent;
  }

  &:hover {
    border-width: unset;
    border-style: none;
    border-color: transparent;
    background: transparent;

    path {
      fill: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.link-hover")};
    }
  }
`,O=i.div.withConfig({displayName:"ChannelNavigationSecondaryMenu"})`
  padding-top: ${({isFixed:e})=>e?0:"62px"};
  height: 100%;
  ${b} {
    display: block;
  }

  @media (min-width: ${d.md}) {
    padding-top: ${({isFixed:e})=>e?0:"160px"};
  }

  @media (min-width: ${d.lg}) {
    height: 100vh;
    ${b} {
      display: none;
    }
  }
`;e.exports={ChannelNavigationWrapper:w,ChannelNavigationContainer:k,ChannelNavigationContent:x,ChannelNavigationLogoWrapper:$,ChannelNavigationLogo:T,ChannelNavigationScrollViewLogo:E,ChannelNavigationLinksList:L,ChannelNavigationLinksWrapper:N,ChannelNavigationLinkItem:I,ChannelNavigationLink:B,ChannelNavigationChannelDrawer:A,ChannelNavigationGlobalDrawer:D,ChannelNavigationGroupedNavigation:P,ChannelNavigationAccount:R,ChannelNavigationToggle:M,ChannelNavigationSecondaryMenu:O}},482:function(e,t,n){const{default:i}=n(3),o=n(39),{BREAKPOINTS:a,GRID_GAP:r}=n(6),{applyGridSpacing:s,cssVariablesGrid:l}=n(16),{calculateSpacing:d,minMaxScreen:c,getColorToken:p,minScreen:g}=n(4),{SummaryListWrapper:u}=n(155),m=i.div.withConfig({displayName:"SummaryRiverWrapper"})`
  ${l()}

  ${({isFullBleedMobile:e})=>e&&`\n        ${u} {\n            ${c(0,a.md)} {\n              padding: 0;\n            }\n        }\n    `};
  ${({gridColSpanValue:e,showRecircMostPopularInAsideWithRail:t})=>e>=1&&t?`\n            @media (min-width: ${a.lg}) {\n                .summary-list .grid-layout__content {\n                  grid-column: span ${e};\n                }\n              }\n            `:""}

  ${({topSpacingInRem:e})=>e?`\n        ${g(a.md)} {\n          margin-top: ${d(e)};\n        }\n      `:""}
`,h=i(o).withConfig({displayName:"SummaryRiverAd"})`
  margin-bottom: ${d(4)};
`,y=i.div.withConfig({displayName:"SummaryRiverTitleWrapper"})`
  ${s("padding")}
  ${({hasScrollOffset:e})=>e?`scroll-margin-top: ${d(8)};`:""}

  margin-bottom: ${d(4)};

  ${({hasExtraTitlePadding:e})=>e?`\n      @media (min-width: ${a.xxl}) {\n        padding-left: calc(2.5 * var(--grid-margin));\n        padding-right: calc(2.5 * var(--grid-margin));\n      }\n      `:""}

  ${({hasDividerAbove:e})=>e?"":`margin-top: ${d(2)};`}
`,b=i.section.withConfig({displayName:"SummaryRiverSection"})``,f=i.div.withConfig({displayName:"SummaryRiverList"})`
  ${({hasRule:e,theme:t})=>e?`\n        &::before {\n          border-top: 1px solid ${p(t,"colors.discovery.body.white.divider")};\n          content: '';\n          grid-column: 1/-1;\n          margin-bottom: ${d(5-r.md)};\n        }\n      `:""}
`;e.exports={SummaryRiverList:f,SummaryRiverWrapper:m,SummaryRiverAd:h,SummaryRiverSection:b,SummaryRiverTitleWrapper:y}},497:function(e,t,n){const{asConfiguredComponent:i}=n(9),o=n(1395);e.exports=i(o,"BlockquoteEmbed")},513:function(e,t,n){const i=n(3).default,o=n(14),{CaptionWrapper:a,CaptionText:r}=n(58),{calculateSpacing:s,getColorToken:l,getLinkStyles:d}=n(4),c=n(440),{BREAKPOINTS:p}=n(6),{ResponsiveImageContainer:g}=n(24),u=i.div.withConfig({displayName:"LightboxWrapper"})`
  grid-column-start: main;
`,m=i(c).withConfig({displayName:"LightboxSwipe"})`
  display: flex;
  width: 100%;
  height: 100%;
`,h=i(o.Utility).withConfig({displayName:"LightboxCloseButtonIcon"})`
  position: fixed;
  top: ${s(.5)};
  right: ${s(.5)};
  z-index: 1;
  cursor: pointer;
  padding: 8px;
  line-height: 0;

  &.listicle-variation-close {
    top: 1px;
  }

  &,
  &:hover {
    border: 1px solid
      ${({theme:e})=>l(e,"colors.interactive.base.white")};
    background-color: ${({theme:e})=>l(e,"colors.interactive.base.white")};
  }

  &:focus {
    border: 1px solid
      ${({theme:e})=>l(e,"colors.interactive.base.brand-primary")};
    background-color: ${({theme:e})=>l(e,"colors.interactive.base.white")};
  }

  .icon {
    fill: ${({theme:e})=>l(e,"colors.interactive.base.dark")};
  }

  .icon:hover {
    fill: ${({theme:e})=>l(e,"colors.interactive.base.brand-primary")};
    border: 1px solid
      ${({theme:e})=>l(e,"colors.interactive.base.white")};
  }

  @media (min-width: ${p.md}) {
    top: ${s(2)};
    right: ${s(2)};
  }
`,y=i.div.withConfig({displayName:"LightboxSlidesWrapper"})`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  transition: transform 0.4s ease-in-out;
  height: 100%;

  &.listicle-variation-slide-wrapper {
    display: block;
  }
`,b=i.div.withConfig({displayName:"LightboxSlideTopSpacer"})``,f=i.div.withConfig({displayName:"LightboxSlideImageCaptionOuter"})``,C=i.div.withConfig({displayName:"LightboxSlideCaptionContainer"})``,v=i.div.withConfig({displayName:"LightboxSlideWrapper"})`
  background-color: ${({theme:e})=>l(e,"colors.consumption.lead.standard.background")};
  width: 100vw;

  &.listicle-variation-slide {
    background-color: ${({theme:e})=>l(e,"colors.interactive.base.white")};
    padding: ${s(3)} ${s(9)};

    ${a} {
      margin-bottom: 0;
      background-color: ${({theme:e})=>l(e,"colors.interactive.base.white")};
    }
  }

  ${a} {
    background-color: ${({theme:e})=>l(e,"colors.consumption.lead.standard.background")};
    text-align: initial;

    ${r} {
      ${({theme:e})=>d(e,"colors.consumption.lead.standard.description",null)}

      &:hover {
        text-decoration: none;
      }
    }
  }

  ${({screenOrientation:e})=>"landscape"===e||"portrait"===e||"square"===e?`\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: auto;\n\n    ${f} {\n      display: contents;\n    }\n\n    .responsive-image {\n      display: flex;\n      flex-direction: column;\n\n      ${g} {\n        max-height: 85vh;\n        object-fit: contain;\n      }\n    }\n\n    ${C} {\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-end;\n    }\n\n    ${a} {\n      margin: ${s(2)} ${s(2)} ${s(5)};\n    }\n\n    @media (min-width: ${p.md}) {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      padding: ${s(4)};\n      height: initial;\n\n      ${b} {\n        display: none;\n      }\n\n      ${f} {\n        display: block;\n      }\n\n      .responsive-asset {\n        display: table-cell;\n      }\n\n      ${C} {\n        display: table-caption;\n        caption-side: bottom;\n      }\n\n      ${a} {\n        margin: 0;\n        margin-top: ${s(1)};\n      }\n    }\n\n    ${"portrait"===e?`\n      @media (min-width: ${p.lg}) {\n        display: flex;\n        flex-direction: row;\n        height: 100%;\n\n        ${b} {\n          display: none;\n        }\n\n        ${f} {\n          display: contents;\n        }\n\n        .responsive-asset {\n          display: flex;\n          height: 100%;\n\n          .responsive-image {\n            height: 100%;\n\n            ${g} {\n              height: 100%;\n              max-height: initial;\n            }\n          }\n        }\n\n        ${C} {\n          display: flex;\n          flex-direction: column;\n          align-self: flex-end;\n        }\n\n        ${a} {\n          margin: 0;\n          margin-bottom: ${s(6)};\n          margin-left: ${s(2)};\n          max-width: 180px;\n        }\n      }\n    `:""}\n  `:""}
`;e.exports={LightboxSwipe:m,LightboxCloseButtonIcon:h,LightboxSlideImageCaptionOuter:f,LightboxSlideCaptionContainer:C,LightboxWrapper:u,LightboxSlideTopSpacer:b,LightboxSlidesWrapper:y,LightboxSlideWrapper:v}},514:function(e,t,n){const i=n(1),o=n(0),{ContentHeaderBylines:a}=n(245),r=({bylineVariation:e,contributors:t})=>t&&0!==Object.keys(t).length?o.createElement(a,{contributors:t,bylineVariation:e,isCompact:!1}):null;r.propTypes={bylineVariation:i.string,contributors:i.object},e.exports=r},515:function(e,t,n){const i=n(1),o=n(0),{ContentHeaderTitleBlockPublishDate:a}=n(177),r=({hasExtraSpaceBetweenSeparator:e,hidePublishDate:t,publishDate:n})=>t||!n?null:o.createElement(a,{hasExtraSpaceBetweenSeparator:e,"data-testid":"ContentHeaderPublishDate"},n);r.propTypes={hasExtraSpaceBetweenSeparator:i.bool,hidePublishDate:i.bool,publishDate:i.string},e.exports=r},516:function(e,t,n){const i=n(1),o=n(0),a=n(1436),r=({hasCategoryEyebrow:e,tags:t,title:n})=>e&&(null==t?void 0:t.length)>0?o.createElement(a,{title:n,tags:t}):null;r.propTypes={hasCategoryEyebrow:i.bool,tags:i.array,title:i.string},e.exports=r},517:function(e,t){e.exports=e=>{if(!window)return{};const{bottom:t,left:n,right:i,top:o}=e.getBoundingClientRect(),a=e.currentStyle||window.getComputedStyle(e);return{bottom:t+parseFloat(a.marginBottom),left:n-parseFloat(a.marginLeft),right:i+parseFloat(a.marginRight),top:o-parseFloat(a.marginTop)}}},518:function(e,t,n){const i=n(1),o=n(0),{SponsorContentContainer:a,SponsorImage:r,SponsoredContent:s,SponsoredContentCampaignLink:l}=n(1444),d=n(11),c=({sponsorByline:e,sponsoredContentHeaderProps:t,theme:n})=>{const{sponsorLogo:i,sponsorName:d,campaignUrl:c}=t;if(!d||!e)return null;const p=`${e} ${d}`;return o.createElement(a,null,o.createElement(l,{additionalRelVals:["sponsored"],href:c},o.createElement(r,Object.assign({},i)),o.createElement(s,{containerTheme:n},p)))};c.propTypes={sponsorByline:i.string,sponsoredContentHeaderProps:i.shape({campaignUrl:i.string,sponsorLogo:i.shape(d.propTypes),sponsorName:i.string}),theme:i.oneOf(["standard","inverted","special"])},c.defaultProps={theme:"inverted"},e.exports=c},519:function(e,t,n){const{default:i}=n(3),{getColorToken:o,getTypographyStyles:a,calculateSpacing:r,maxScreen:s}=n(4),{SocialIconsList:l}=n(27),{BREAKPOINTS:d}=n(6),{BaseText:c,BaseLink:p}=n(10),{SITE_HEADER_TOP_HEIGHT:g,SITE_HEADER_TOP_STICKY_HEIGHT_MD:u,SITE_HEADER_TOP_STICKY_HEIGHT_LG:m}=n(151),h=n(19),{GridItem:y}=n(25),{universalGridCore:b}=n(53),{applyGridSpacing:f}=n(16),C=n(11),v=i.header.withConfig({displayName:"TextOverlayWrapper"})`
  .responsive-clip {
    height: 100%;
  }
  overflow: hidden;
`,S=i.div.withConfig({displayName:"ImageWrapper"})`
  display: flex;
  position: relative;
  align-items: flex-end;
  justify-content: ${({contentAlign:e})=>e};

  @media (orientation: landscape) {
    display: grid;
    min-height: 400px;
  }

  @media (max-width: ${d.md}) {
    display: grid;
    min-height: 667px;
  }

  @media (min-width: ${d.md}) {
    display: grid;
    height: calc(
      100vh - ${g} - ${u}
    );
  }

  @media (min-width: ${d.lg}) {
    display: grid;
    height: calc(
      100vh - ${g} - ${m}
    );
  }

  @media (min-width: ${d.xl}) {
    display: grid;
    min-height: 720px;
  }

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${({background:e})=>"gradient"===e?"linear-gradient(to top, rgb(0, 0, 0) 0, transparent 65%)":"rgba(0, 0, 0, 0.65)"};
    content: '';
    pointer-events: none;
  }
`,w=i.div.withConfig({displayName:"Image"})`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .responsive-asset {
    &::before {
      display: block;
      width: 100%;
      content: '';
    }
  }

  > *,
  picture,
  .responsive-asset picture, /* set to override the css specifity set on this component  */
  img {
    object-fit: cover;
    object-position: top;
    width: 100%;
    height: 100%;
  }

  picture {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }
`,k=i.div.withConfig({displayName:"ContentAlign"})`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({contentAlign:e})=>e};
  width: 100%;

  > .social-icons--footer {
    ${l} {
      @media (min-width: ${d.md}) {
        position: relative; /* for bookmark onboarding alert placement */
      }
    }
  }

  ${({socialIconsToHide:e})=>e&&`\n      ${s(d.lg)} {\n        ${(e=>e.map(e=>`\n        .social-icons__list-item--${e} {\n          display: none;\n        }\n    `).join("\n"))(e)}\n      }\n    `}

  ${({bottomSpacing:e})=>e&&"margin-bottom: "+r(e)}
`,x=i.div.withConfig({displayName:"Content"})`
  position: relative;
  z-index: 2;
`,$=i(c).withConfig({displayName:"Hed"})`
  text-align: ${({contentAlign:e})=>e};
`;$.defaultProps={as:"h1",colorToken:"colors.consumption.lead.inverted.heading",topSpacing:2,typeIdentity:"typography.definitions.consumptionEditorial.hed-standard"};const T=i("div").withConfig({displayName:"DekAndCaption"})`
  ${b()}
  ${f("padding")}
  ${({isInverted:e,theme:t})=>e&&`\n      background: ${o(t,"colors.background.dark")};\n    `}
`,E=i.div.withConfig({displayName:"DekWrapper"})`
  grid-column: 1 / span 4;
  text-align: ${({contentAlign:e})=>e};

  @media (min-width: ${d.md}) {
    grid-column: 3 / span 8;
  }
`,N=i(c).withConfig({displayName:"Dek"})`
  ${({isInverted:e,theme:t})=>e&&`\n    color: ${o(t,"colors.consumption.lead.inverted.description")};\n    `}
  text-align: ${({contentAlign:e})=>e};
`;N.defaultProps={as:"p",bottomSpacing:4,colorToken:"colors.consumption.lead.standard.description",topSpacing:3,typeIdentity:"typography.definitions.consumptionEditorial.description-core"};const L=i(c).withConfig({displayName:"Figure"})`
  grid-column: 1 / span 4;
  text-align: ${({contentAlign:e})=>e};

  @media (min-width: ${d.md}) {
    grid-column: 1 / span 12;
  }
`;L.defaultProps={as:"figure",colorToken:"colors.consumption.lead.standard.description",topSpacing:2,typeIdentity:"typography.definitions.consumptionEditorial.description-embed"};const I=i.span.withConfig({displayName:"ContentDivider"})`
  display: block;
  margin-top: ${r(4)};
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme:e})=>o(e,"colors.consumption.lead.standard.accent")};
  width: 100px;
  ${({contentAlign:e})=>"center"===e&&`margin: ${r(4)} auto 0`}
`,B=i.div.withConfig({displayName:"ContributorImage"})`
  display: block;
  margin-top: ${r(4)};
  border-radius: 50%;
  min-width: 60px;
  max-width: 66px;
  min-height: 60px;
  max-height: 66px;
  overflow: hidden;
  ${({contentAlign:e})=>"center"===e&&`margin: ${r(4)} auto 0`}
`,A=i.div.withConfig({displayName:"Accreditation"})`
  ${({contentAlign:e})=>"center"===e?`margin: ${r(2)} auto`:`margin: ${r(2)} 0`}
`,P=i.time.withConfig({displayName:"PublishDate"})`
  ${({theme:e})=>a(e,"typography.definitions.globalEditorial.accreditation-core")}
  display: block;
  margin: ${r(1)} 0 ${r(4)};
  text-align: ${({contentAlign:e})=>e};
  color: ${({theme:e})=>o(e,"colors.consumption.lead.inverted.context-tertiary")};
`,D=i(h.WithMargins).withConfig({displayName:"ContentGrid"})`
  > ${y} {
    grid-column: 1 / span 4;
    margin-bottom: 4.5rem;
    @media (min-width: ${d.md}) {
      grid-column: ${({contentAlign:e})=>"left"===e?"1 / span 10":"2 / span 10"};
    }
  }
`,R=i(C).withConfig({displayName:"TextOverlayLogoImage"})`
  grid-column: 1 / span 4;

  img {
    max-width: 100%;
    height: 100px;
    vertical-align: bottom;
  }
`,M=i(p).withConfig({displayName:"TextOverlayLogoLink"})`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${r(2)};

  @media (max-width: ${d.md}) {
    padding-right: calc(1 * ${r(3)});
    padding-left: calc(1 * ${r(3)});
  }
`,O=i.div.withConfig({displayName:"TextOverlayLogo"})`
  margin: auto;
  margin-top: 1.5rem;
`;e.exports={TextOverlayLogo:O,TextOverlayLogoLink:M,TextOverlayLogoImage:R,TextOverlayWrapper:v,ImageWrapper:S,Image:w,ContentAlign:k,Content:x,Hed:$,DekAndCaption:T,DekWrapper:E,Dek:N,Figure:L,ContentDivider:I,ContributorImage:B,Accreditation:A,PublishDate:P,ContentGrid:D}},520:function(e,t,n){const{default:i}=n(3),{BaseText:o}=n(10),{calculateSpacing:a,getColorToken:r,getTypographyStyles:s}=n(4),l=i.div.withConfig({displayName:"ScoreBoxWrapper"})`
  position: relative;
  width: 130px;
`,d=i.div.withConfig({displayName:"ScoreCircle"})`
  position: relative;
  margin-bottom: ${a(2)};
  border: 7px solid
    ${({isBest:e})=>e?({theme:e})=>"inverted"===e.palette?r("colors.consumption.lead.inverted.accent"):r("colors.consumption.lead.standard.accent"):r("colors.consumption.lead.standard.context-signature")};
  border-radius: 50%;
  padding-bottom: ${a(2)};
  width: 134px;
  height: 134px;
  text-align: center;
  color: ${({isBest:e})=>e?({theme:e})=>"inverted"===e.palette?r("colors.consumption.lead.inverted.accent"):r("colors.consumption.lead.standard.accent"):r("colors.consumption.lead.standard.context-signature")};
`,c=i(o).withConfig({displayName:"Rating"})`
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  color: ${({isBest:e})=>e?({theme:e})=>"inverted"===e.palette?r("colors.consumption.lead.inverted.accent"):r("colors.consumption.lead.standard.accent"):r("colors.consumption.lead.standard.context-signature")};
  ${s("typography.definitions.globalEditorial.numerical-large")};
`,p=i(o).withConfig({displayName:"BestNewMusicText"})`
  ${s("typography.definitions.globalEditorial.context-primary")};
  width: 134px;
  text-align: center;
  color: ${({isBest:e})=>e?({theme:e})=>"inverted"===e.palette?r("colors.consumption.lead.inverted.accent"):r("colors.consumption.lead.standard.accent"):r("colors.consumption.lead.standard.context-signature")};
`,g=i.svg.withConfig({displayName:"SvgStyle"})`
  margin-bottom: ${a(2,"px")};
  margin-left: ${a(3,"px")};
  width: 86px;
  height: 26px;
`,u=i.div.withConfig({displayName:"SvgWrapper"})`
  svg {
    fill: ${({isBest:e})=>e?({theme:e})=>"inverted"===e.palette?r("colors.consumption.lead.inverted.accent"):r("colors.consumption.lead.standard.accent"):r("colors.consumption.lead.standard.context-signature")};
  }
  line-height: 0em;
`;e.exports={BestNewMusicText:p,Rating:c,ScoreBoxWrapper:l,ScoreCircle:d,SvgStyle:g,SvgWrapper:u}},699:function(e,t,n){e.exports=n(1399)},79:function(e,t,n){const{asConfiguredComponent:i}=n(9),o=n(152);e.exports=i(o,"BasePage")}});