_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[42],{"7DDl":function(e,a,t){"use strict";t.r(a);var s,n=t("o0o1"),i=t.n(n),r=t("HaE+"),c=t("rePB"),o=t("h4VS"),l=t("MX0m"),d=t.n(l),m=t("q1tI"),p=t.n(m),x=t("YFqc"),u=t.n(x),b=t("ttZb"),g=t("UYTu"),j=t("8Kt/"),h=t.n(j),f=t("B/3u"),w=t("M09o"),v=p.a.createElement,N=function(e){var a=e.ad;return Object(m.useEffect)((function(){Object(w.a)(a)}),[a]),v("div",{className:"sidebar-cwad"},v("div",{className:"image"},v("picture",null,v("source",{media:"(min-width: 360px)",srcSet:a.data.image.path}),v("a",{href:a.url,target:"_blank",rel:"noopener"},v("img",{src:a.data.image.path,alt:a.title})))),v("div",{className:"title"},a.title),v("div",{className:"divider"}),v("div",{className:"description",dangerouslySetInnerHTML:{__html:a.data.description}}))},y=p.a.createElement,k=function(e){var a=e.ad;return Object(m.useEffect)((function(){Object(w.a)(a)}),[a]),y("div",{className:"sidebar-cwad"},y("div",{className:"image"},y("picture",null,y("source",{media:"(min-width: 360px)",srcSet:a.data.image.path}),y("a",{href:a.url,target:"_blank",rel:"noopener"},y("img",{src:a.data.image.path,alt:a.title})))))},O=p.a.createElement,T=function(e){var a=e.ad;return Object(m.useEffect)((function(){Object(w.a)(a)}),[a]),O("div",{className:"sidebar-cwad"},O("div",{className:"title"},a.title),O("div",{className:"divider"}),O("div",{className:"description",dangerouslySetInnerHTML:{__html:a.data.description}}))},M=p.a.createElement,P=function(e){var a=e.ads;return M(p.a.Fragment,null,a.map((function(e){var a=null;switch(e.kind){case"ContentAdvertisementDefault":a=M(N,{ad:e,key:e.id});break;case"ContentAdvertisementImageBanner":a=M(k,{ad:e,key:e.id});break;case"ContentAdvertisementNative":a=M(T,{ad:e,key:e.id});break;default:console.log("Ad type ".concat(e.kind," to be implemented"))}return a})))},_=t("y25A"),E=t("UwMZ"),I=t("OE4A"),S=t("Ihcx"),C=t("vs7D"),L=t("gnB8"),D=t("Y0NT"),A=t("v11j"),F=t("WuuX"),$=t("vpFo"),q=p.a.createElement;function z(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}function H(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?z(Object(t),!0).forEach((function(a){Object(c.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):z(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var R=Object(g.a)(s||(s=Object(o.a)(["\n  query PodcastEpisodeContent(\n    $showId: String\n    $episode: Int\n    $query: String\n    $ctQuery: String\n    $ctOptions: QueryOptionsInput\n    $token: String\n    $adQuery: String\n  ) {\n    Contents(query: $query) {\n      items {\n        ... on Content {\n          kind\n          id\n          metadata {\n            datePublished\n            dateModified\n          }\n          articleMetadata {\n            title\n            description\n            keywords\n            url\n            section\n            authors {\n              title\n              fullName\n              givenName\n              middleName\n              familyName\n              suffix\n            }\n            image {\n              path\n              width\n              height\n              title\n              altText\n              caption\n              credit\n            }\n            membershipLevel\n          }\n          title\n          body\n          tags\n        }\n        ... on ContentPodcast {\n          data {\n            showId\n            showTitle\n            episode\n            airDate\n            media {\n              source\n              url\n              format\n            }\n            hasTranscript\n          }\n        }\n        ... on ContentTranscript {\n          data {\n            showId\n            showTitle\n            episode\n            airDate\n            media {\n              source\n              url\n              format\n            }\n          }\n        }\n      }\n      pageInfo {\n        size\n        totalElements\n        totalPages\n        number\n      }\n    }\n    ContentMetadatas(query: $ctQuery, options: $ctOptions, token: $token) {\n      items {\n        id\n        active\n        type\n        subtype\n        category\n        title\n        titleFormatted\n        description\n        path\n        pathId\n        rss {\n          url\n          app\n          name\n          devices\n          notes {\n            desktop\n          }\n        }\n        image {\n          path\n          pathTemplate\n          width\n          height\n        }\n        hosts {\n          image {\n            path\n            width\n            height\n            altText\n          }\n          givenName\n          familyName\n          fullName\n          linkedInName\n          twitterName\n          bio\n        }\n        schedule\n        credits\n        trailer {\n          source\n          description\n          url\n        }\n        creator {\n          title\n          altText\n          path\n          width\n          height\n        }\n        socialMedia {\n          source\n          icon\n          handle\n          text\n          url\n        }\n        displayOrder\n        isPremium\n        hasAdFree\n      }\n      pageInfo {\n        size\n        totalElements\n        totalPages\n        number\n      }\n    }\n    ads: ContentPodcastAdvertisements(showId: $showId, episode: $episode, query: $adQuery) {\n      items {\n        ... on ContentAdvertisement {\n          kind\n          id\n          title\n          url\n          startDate\n          endDate\n          spot\n          position\n          sponsor {\n            name\n          }\n        }\n        ... on ContentAdvertisementDefault {\n          data {\n            description\n            image {\n              path\n              width\n              height\n              altText\n            }\n          }\n        }\n        ... on ContentAdvertisementNative {\n          data {\n            description\n          }\n        }\n        ... on ContentAdvertisementImageBanner {\n          data {\n            image {\n              path\n              width\n              height\n              altText\n            }\n          }\n        }\n      }\n      pageInfo {\n        size\n        totalElements\n        totalPages\n        number\n      }\n    }\n  }\n"]))),B=function(e){var a=new Date(e);return"".concat(a.getMonth()+1,".").concat(a.getDate(),".").concat(a.getFullYear()%100)},Q=function(e){e.isServer;var a=e.show,t=e.episode,s=e.info,n=Object(m.useContext)(S.a);Object(m.useEffect)((function(){n.trackPageView("/podcasts/".concat(a,"/").concat(t,"/").concat(s)),n.page.setTitle("Podcasts"),Object(w.c)()}));var i="transcript"===s?"ContentTranscript":"ContentPodcast",r={query:'{"kind": "'.concat(i,'", "data.showId":"').concat(a,'", "data.episode":').concat(t,"}"),showId:a,episode:parseInt(t,10),adQuery:'{"channel":"Web"}',ctQuery:'{"type": "'.concat("transcript"===s?"Transcript":"Podcast",'", "pathId": "').concat(a,'"}'),token:n.token},c=Object(b.c)(R,{variables:r}),o=c.data,l=c.loading,x=c.error;if(l)return console.log("Loading PodcastEpisodeContent..."),q(L.a,null);if(x)return console.error(x),q(D.default,{statusCode:400,message:x.message});var g=[];if(o.ads.items.length>0&&(g=o.ads.items.sort((function(e,a){return e.position>a.position?1:e.position<a.position?-1:0}))),0===o.Contents.items.length)return console.error("**** Podcast Episode Not Found. Show=".concat(a," episode=").concat(t," *****")),q(D.default,{statusCode:404,title:"Podcast Episode Not Found"});console.log("isPremium");var j=o.Contents.items[0],f=o.ContentMetadatas.items[0],v=f.isPremium,N="transcript"!==s?"/podcasts/".concat(a,"/").concat(t,"/notes"):"/podcasts/".concat(a,"/").concat(t,"/transcript"),y="".concat(j.data.showTitle," ").concat(B(j.data.airDate)),k="Ep ".concat(j.data.episode," | ").concat(B(j.data.airDate)),O=H(H(H({},j.articleMetadata),{url:N}),j.metadata),T="";if(!v){var M=j.data.media.find((function(e){return"Libsyn"===e.source}));T=M?M.url:""}var z=["page-".concat("ContentPodcast"===i?"podcast":"transcript","-").concat(a,"-").concat(t)].concat(f.membershipTags);return j.tags&&(z=z.concat(j.tags)),E.d&&console.log("membership level ".concat(j.articleMetadata.membershipLevel," => ").concat(Object(F.a)(j.articleMetadata.membershipLevel))),j.articleMetadata.membershipLevel>F.b.NONE&&Object(F.a)(j.articleMetadata.membershipLevel).forEach((function(e){return z.push(e)})),j.articleMetadata.membershipLevel>F.b.NONE&&"Transcript"===f.type&&Object(C.a)(j.metadata.datePublished)>=30&&z.push("archived"),n.setTags([z]),n.exec(),E.d&&console.log("==== Rendering PodcastEpisodeContent ====="),q(p.a.Fragment,null,q(A.a,{articleMetadata:O,altText:y,hasLD:!0},f.itunesAppId&&q("meta",{name:"apple-itunes-app",content:"app-id=".concat(f.itunesAppId),className:"jsx-3523806343"})),q(h.a,null,!v&&T&&q("meta",{property:"og:audio:type",content:"audio/mp3",key:"og_audio_type",className:"jsx-3523806343"}),!v&&T&&q("meta",{property:"og:audio",content:T,key:"og_audio",className:"jsx-3523806343"})),q("div",{className:"jsx-3523806343 content-container-wrapper"},q("div",{className:"jsx-3523806343 content-grid-container"},q("div",{className:"jsx-3523806343 top-bar-container"},q("div",{className:"jsx-3523806343 breadcrumb-container"},q("div",{className:"jsx-3523806343 directory"},q(u.a,{href:"/podcasts"},q("a",{className:"jsx-3523806343"},q("div",{className:"jsx-3523806343 breadcrumb-button"},q("div",{className:"jsx-3523806343 label"},"Podcasts"))))),q("div",{className:"jsx-3523806343 directory breadcrumb-arrow"},q("img",{src:"/images/icons/arrow-right-grey.svg",className:"jsx-3523806343"})),q(u.a,{href:"/podcasts/[show]",as:"/podcasts/".concat(a)},q("a",{className:"jsx-3523806343"},q("div",{className:"jsx-3523806343 breadcrumb-button"},q("div",{className:"jsx-3523806343 label"},f.title)))),q("div",{className:"jsx-3523806343 breadcrumb-arrow"},q("img",{src:"/images/icons/arrow-right-grey.svg",className:"jsx-3523806343"})),q("div",{className:"jsx-3523806343 breadcrumb-text"},"Ep ".concat(j.data.episode)))),q("div",{className:"jsx-3523806343 content-main-container"},q("div",{className:"jsx-3523806343 content-item-image"},q("picture",{className:"jsx-3523806343"},q("source",{media:"(min-width: 360px)",srcSet:j.articleMetadata.image.path,className:"jsx-3523806343"}),q("img",{src:j.articleMetadata.image.path,alt:y,className:"jsx-3523806343"})),(j.articleMetadata.image.caption||j.articleMetadata.image.credit)&&q("div",{className:"jsx-3523806343 caption"},j.articleMetadata.image.caption&&q("span",{className:"jsx-3523806343"},j.articleMetadata.image.caption," "),j.articleMetadata.image.credit&&q("span",{className:"jsx-3523806343"},j.articleMetadata.image.credit))),q("div",{className:"jsx-3523806343 content pageview meter"}),q("div",{className:"jsx-3523806343 content-item-main podcast"},q("div",{className:"jsx-3523806343 mb30"}),q(I.a,{metaText:k,url:"".concat(E.p).concat(N),shareTitle:j.title}),q("h1",{className:"jsx-3523806343 title"},j.title),v&&(!n.user||n.user&&n.user.membershipLevel<F.b.PRO)&&q("div",{className:"jsx-3523806343 button subscribe proplus"},n.user&&n.user.membershipLevel>=F.b.PROLEGACY&&q("div",{className:"jsx-3523806343"},"Upgrade"),(!n.user||n.user.membershipLevel<F.b.PROLEGACY)&&q("div",{className:"jsx-3523806343"},"Subscribe to Pro")),(!v||v&&n.user&&n.user.membershipLevel>=F.b.PRO)&&q(p.a.Fragment,null,q("div",{className:"jsx-3523806343 button-bar"},q(_.a,{content:j,contentMetadata:f})),q("div",{className:"jsx-3523806343 subscribe"},v&&q($.a,{podcast:j}),!v&&q(p.a.Fragment,null,q("div",{className:"jsx-3523806343 title"},"Subscribe"),q("div",{className:"jsx-3523806343 apps"},f.rss&&f.rss.filter((function(e){return e.url})).map((function(e){return q("div",{key:"".concat(e.app,"-").concat(e.devices.join("")),className:"jsx-3523806343 "+(e.devices.join(" ")||"")},q("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"jsx-3523806343"},q("div",{className:"jsx-3523806343 podcastApp"},q("div",{className:"jsx-3523806343 icon"},q("img",{src:"/images/icons/".concat(e.app,"-icon.svg"),width:"18px",height:"18px",alt:"".concat(e.name," icon"),title:e.name,className:"jsx-3523806343"})),q("div",{className:"jsx-3523806343 description"},q("span",{className:"jsx-3523806343 title"},e.name)))))})))))),q("div",{className:"jsx-3523806343 content-item-text"},"transcript"!==s&&q(p.a.Fragment,null,q("div",{className:"jsx-3523806343 tab-bar"},q("div",{className:"jsx-3523806343 tab-label active"},"Show Notes"),j.data.hasTranscript&&q("div",{className:"jsx-3523806343 tab-label"},q(u.a,{href:"/podcasts/[show]/[episode]/[info]",as:"/podcasts/".concat(a,"/").concat(t,"/transcript")},q("a",{className:"jsx-3523806343"},"Transcript")))),q("div",{className:"jsx-3523806343 divider"}),q("div",{dangerouslySetInnerHTML:{__html:j.body},className:"jsx-3523806343 description"})),"transcript"===s&&q(p.a.Fragment,null,q("div",{className:"jsx-3523806343 tab-bar"},q("div",{className:"jsx-3523806343 tab-label"},q(u.a,{href:"/podcasts/[show]/[episode]/[info]",as:"/podcasts/".concat(a,"/").concat(t,"/notes")},q("a",{className:"jsx-3523806343"},"Show Notes"))),q("div",{className:"jsx-3523806343 tab-label active"},"Transcript")),q("div",{className:"jsx-3523806343 divider"}),q("div",{dangerouslySetInnerHTML:{__html:j.body},className:"jsx-3523806343 transcript"}))))),q("div",{className:"jsx-3523806343 sidebar-container"},q("div",{className:"jsx-3523806343 podcast-title"},q(u.a,{href:"/podcasts/[show]",as:"/podcasts/".concat(a)},q("a",{dangerouslySetInnerHTML:{__html:f.titleFormatted||f.title},className:"jsx-3523806343"}))),q("div",{className:"jsx-3523806343 section-title"},"Podcast Info"),q("div",{style:{backgroundColor:"var(--background-color)",paddingLeft:0,paddingRight:0},className:"jsx-3523806343 sidebar-cwad"},q("div",{className:"jsx-3523806343 show content"},f.hosts&&q("div",{className:"jsx-3523806343 host"},q("div",{className:"jsx-3523806343 title"},"HOST(S):"),f.hosts.filter((function(e){return e.image&&e.image.path})).map((function(e){return q("div",{className:"jsx-3523806343 image"},q("img",{src:e.image.path,alt:e.image.altText,className:"jsx-3523806343"}))})),q("div",{className:"jsx-3523806343 bios"},f.hosts.map((function(e){return q(p.a.Fragment,null,e.bio&&e.bio.length>0&&q("div",{className:"jsx-3523806343 bio"},q("span",{dangerouslySetInnerHTML:{__html:e.bio},className:"jsx-3523806343"})),(e.twitterName||e.linkedInName)&&q("div",{className:"jsx-3523806343 social"},e.twitterName&&q(u.a,{href:"https://twitter.com/".concat(e.twitterName)},q("a",{target:"_blank",className:"jsx-3523806343"},q("img",{src:"/images/icons/twitter-logo-blue.svg",className:"jsx-3523806343 icon"}))),e.linkedInName&&q(u.a,{href:"https://www.linkedin.com/in/".concat(e.linkedInName)},q("a",{target:"_blank",className:"jsx-3523806343"},q("img",{src:"/images/icons/LI-In-Bug.svg",className:"jsx-3523806343 icon"}))),q("div",{className:"jsx-3523806343"},"Follow ",e.fullName||"".concat(e.givenName," ").concat(e.familyName))))})))),f.schedule&&q("div",{className:"jsx-3523806343 stats"},f.schedule&&q("div",{className:"jsx-3523806343 stat"},q("span",{className:"jsx-3523806343 name"},"Schedule: "),f.schedule)),f.credits&&q("div",{className:"jsx-3523806343 credits"},q("span",{className:"jsx-3523806343 name"},"Credits: "),q("span",{dangerouslySetInnerHTML:{__html:f.credits},className:"jsx-3523806343"})),f.creator&&f.creator.title&&q("div",{className:"jsx-3523806343 creator"},q("span",{className:"jsx-3523806343 name"},"Creator: "),q("span",{className:"jsx-3523806343"},f.creator.title)),f.socialMedia&&q("div",{className:"jsx-3523806343 socialMedia"},q("span",{className:"jsx-3523806343 name"},"Social Media: "),q("ul",{className:"jsx-3523806343"},f.socialMedia.map((function(e){return q("li",{className:"jsx-3523806343"},q(u.a,{href:e.url},q("a",{target:"_blank",className:"jsx-3523806343"},q("img",{src:"/images/icons/".concat(e.icon),className:"jsx-3523806343 icon"})," ",e.text," ",e.handle&&q("span",{className:"jsx-3523806343 orange"},"\xa0",e.handle))))})))),f.image&&f.image.path&&q("div",{className:"jsx-3523806343 coverart"},q(u.a,{href:"/podcasts/[show]",as:"/podcasts/".concat(a)},q("a",{className:"jsx-3523806343"},q("img",{src:f.image.pathTemplate.replace("${level}",f.isPremium?"pro":"cw").replace("${width}","178"),alt:f.title,className:"jsx-3523806343"})))))),g.length>0&&q("div",{className:"jsx-3523806343 ads"},q("div",{className:"jsx-3523806343 section-title"},"ADVERTISEMENT"),q(P,{ads:g}))))),q(d.a,{id:"3523806343"},[".banner-title.jsx-3523806343{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",".banner-title.jsx-3523806343 div.jsx-3523806343{white-space:nowrap;}",".banner-title.jsx-3523806343 div.jsx-3523806343 a.jsx-3523806343{color:#ffffff;-webkit-text-decoration:underline;text-decoration:underline;}",".content-main-container.jsx-3523806343{margin-bottom:2rem;grid-area:content;}",".top-bar-container.jsx-3523806343{grid-area:bcrumb;}",".sidebar-container.jsx-3523806343{grid-area:sidebar-cwads;}",".button.subscribe.proplus.jsx-3523806343{max-width:200px;}",".subscribe.jsx-3523806343 .title.jsx-3523806343{font-size:20px;font-weight:700;margin-bottom:20px;}",".subscribe.jsx-3523806343 .apps.jsx-3523806343{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}",".subscribe.jsx-3523806343 .podcastApp.jsx-3523806343{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:5px;margin-right:10px;margin-bottom:10px;border:1px solid #4a4a4a;border-radius:4px;}",".subscribe.jsx-3523806343 .podcastApp.jsx-3523806343 .icon.jsx-3523806343{margin-right:5px;}",".subscribe.jsx-3523806343 .podcastApp.jsx-3523806343 .title.jsx-3523806343{font-size:12px;font-weight:500;}",".button-bar.jsx-3523806343{margin-bottom:20px;}",".content-item-image.jsx-3523806343 .caption.jsx-3523806343{padding:10px 20px;font-size:12px;font-style:italic;}",".sidebar-container.jsx-3523806343 .image.jsx-3523806343,.sidebar-container.jsx-3523806343 .stats.jsx-3523806343,.sidebar-container.jsx-3523806343 .credits.jsx-3523806343,.sidebar-container.jsx-3523806343 .creator.jsx-3523806343,.sidebar-container.jsx-3523806343 .socialMedia.jsx-3523806343{margin-bottom:1rem;}",".section-title.jsx-3523806343{font-size:1rem;}",".ads.jsx-3523806343{margin-bottom:2em;}",".coverart.jsx-3523806343{width:48%;}",".coverart.jsx-3523806343 img.jsx-3523806343{width:100%;}",".sidebar-container.jsx-3523806343 .content.jsx-3523806343 .host.jsx-3523806343{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}",".show.content.jsx-3523806343{font-size:13px;}",".podcast-title.jsx-3523806343{font-size:2.5em;font-weight:900;margin-bottom:1rem;}",".podcast-title.jsx-3523806343>a.jsx-3523806343:hover{-webkit-text-decoration:underline;text-decoration:underline;}",".host.jsx-3523806343 .title.jsx-3523806343{margin-bottom:1rem;display:block;width:100%;color:rgba(64,64,64,0.9);font-size:13px;font-weight:700;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;text-transform:uppercase;}",".host.jsx-3523806343 .image.jsx-3523806343{width:48%;max-width:170px;margin-bottom:1rem;}",".host.jsx-3523806343 .image.jsx-3523806343 img.jsx-3523806343{width:100%;}",".bios.jsx-3523806343 div.jsx-3523806343{margin-bottom:1rem;}",".bio.jsx-3523806343 .name.jsx-3523806343{font-weight:700;}",".stat.jsx-3523806343 .name.jsx-3523806343,.credits.jsx-3523806343 .name.jsx-3523806343,.creator.jsx-3523806343 .name.jsx-3523806343,.socialMedia.jsx-3523806343 .name.jsx-3523806343{font-weight:700;text-transform:uppercase;}",".social.jsx-3523806343{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:1rem;}",".socialMedia.jsx-3523806343 .icon.jsx-3523806343,.social.jsx-3523806343 a.jsx-3523806343 .icon.jsx-3523806343{width:2em;margin-right:15px;}",".socialMedia.jsx-3523806343 .icon.jsx-3523806343{margin-bottom:0px;}",".socialMedia.jsx-3523806343 ul.jsx-3523806343{padding:0;margin-bottom:0px;}",".socialMedia.jsx-3523806343 ul.jsx-3523806343 li.jsx-3523806343{list-style:none;padding-bottom:10px;margin-bottom:0px;}",".socialMedia.jsx-3523806343 ul.jsx-3523806343 li.jsx-3523806343 a.jsx-3523806343{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","span.orange.jsx-3523806343{color:var(--orange);}","@media (max-width:425px){.breadcrumb-button.jsx-3523806343{max-width:170px;white-space:inherit;}}","@media (max-width:901px){.content-container-wrapper.jsx-3523806343{padding-left:0;padding-right:0;margin-top:1rem;}.content-grid-container.jsx-3523806343{grid-template-columns:1fr;grid-template-areas: 'bcrumb' 'content' 'sidebar-cwads';}.content-main-container.jsx-3523806343{margin-bottom:0;}.top-bar-container.jsx-3523806343{padding-left:14px;padding-right:14px;}.sidebar-container.jsx-3523806343{padding-top:3em;padding-bottom:2em;padding-left:14px;padding-right:14px;}.show.content.jsx-3523806343{padding:1em 0 0 0;}.host.jsx-3523806343 .title.jsx-3523806343{margin-bottom:1em;}.host.jsx-3523806343 .image.jsx-3523806343{max-width:160px;}.social.jsx-3523806343 a.jsx-3523806343 .icon.jsx-3523806343{width:3em;margin-right:20px;}.coverart.jsx-3523806343{max-width:160px;}}","@media (min-width:902px){.content-container-wrapper.jsx-3523806343{padding-left:2em;padding-right:2em;margin-top:2rem;}.content-grid-container.jsx-3523806343{grid-template-columns:55fr 23fr;grid-template-areas: 'bcrumb bcrumb' 'content sidebar-cwads';}}","@media (-webkit-min-device-pixel-ratio:3), only screen and (min-resolution:3dppx), only screen and (min-device-width:320px) and (max-device-width:800px), only screen and (device-width:1024px) and (device-height:768px), only screen and (device-width:1280px) and (device-height:800px), (min-resolution:288dpi){.subscribe.jsx-3523806343 .apps.jsx-3523806343 .desktop.jsx-3523806343{display:none;}.subscribe.jsx-3523806343 .apps.jsx-3523806343 .mobile.jsx-3523806343{display:inherit;}}",".subscribe.jsx-3523806343 .apps.jsx-3523806343 .mobile.jsx-3523806343{display:none;}",".subscribe.jsx-3523806343 .apps.jsx-3523806343 .desktop.jsx-3523806343{display:inherit;}"]))};Q.getInitialProps=function(){var e=Object(r.a)(i.a.mark((function e(a){var t,s,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return!1,t=a.query,s=t.show,n=t.episode,r=t.info,E.d&&console.log("Running getInitialProps podcasts/".concat(s,"/").concat(n,"/").concat(r)),e.abrupt("return",{isServer:false,show:s,episode:n,info:r});case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();a.default=Object(f.a)(Q)},OE4A:function(e,a,t){"use strict";var s=t("q1tI"),n=t.n(s),i=n.a.createElement,r=function(e){var a=e.url,t="https://www.facebook.com/dialog/share?app_id=1908410902609006&href=".concat(a,"&redirect_uri=https://www.facebook.com/");"https://www.facebook.com/dialog/feed?app_id=1908410902609006&link=".concat(a,"&redirect_uri=https://www.facebook.com/");return i("a",{className:"title",target:"_blank",rel:"noopener",href:t},i("img",{src:"/images/icons/facebook-share.svg",alt:"Share on Facebook"}))},c=n.a.createElement,o=function(e){var a=e.url,t=e.shareTitle,s="https://twitter.com/intent/tweet?url=".concat(a,"&text=").concat(t);return c("a",{className:"title",target:"_blank",rel:"noopener",href:s},c("img",{src:"/images/icons/twitter-share.svg",alt:"Share on Twitter"}))},l=n.a.createElement,d=function(e){var a=e.url,t=(e.shareTitle,"https://www.linkedin.com/shareArticle?mini=true&url=".concat(a,"&source=CyberWire"));return l("a",{className:"title",target:"_blank",rel:"noopener",href:t},l("img",{src:"/images/icons/linkedin-share.svg",alt:"Share on LinkedIn"}))},m=n.a.createElement,p=function(e){var a=e.metaText,t=e.url,s=e.shareTitle,n=e.logo,i=e.byline;return m("div",{className:"meta"},m("div",{className:"meta-box"},i&&m("div",{className:"meta-text",style:{paddingRight:"10px"}},"By ",m("span",{style:{fontWeight:800}},i)),n&&m("img",{className:"mr10",src:"/images/icons/cw-logo-grey.svg",alt:"the cyberwire logo"}),m("span",{className:"meta-text"},a)),m("div",{className:"share-icons"},m(d,{url:t,shareTitle:s}),m(r,{url:t}),m(o,{url:t,shareTitle:s})))};p.defaultProps={logo:!1};a.a=p},Xq9i:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/podcasts/[show]/[episode]/[info]",function(){return t("7DDl")}])},vs7D:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var s=function(e){var a=(new Date).getTime(),t=new Date(e).getTime();return Math.floor((a-t)/864e5)}}},[["Xq9i",1,0,2,3,4,5,6,7,12]]]);