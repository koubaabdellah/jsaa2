(window.salesJsonp=window.salesJsonp||[]).push([[34],{HxnR:function(e,a,t){"use strict";t.r(a);var s=t("Skxz");a.default=s.a},Skxz:function(e,a,t){"use strict";t.d(a,"a",(function(){return I}));var s=t("pbKT"),n=t.n(s),i=t("p0XB"),o=t.n(i),l=t("/HRN"),c=t.n(l),r=t("WaGi"),d=t.n(r),u=t("K47E"),f=t.n(u),p=t("N9n2"),C=t.n(p),h=t("ZDA2"),g=t.n(h),b=t("/+P4"),v=t.n(b),x=t("xHqa"),q=t.n(x),m=t("q1tI"),A=t("a6RD"),k=t.n(A),y=t("tW8+"),O=t("A6Gw"),w=t("oLJ8"),j=t("7xkB"),L=t.n(j),N=t("gvb+"),T=t("rSlB"),E=t("ERpJ"),D=t("LjLF"),S=t("fhwx"),V=t.n(S),W=m.createElement;function F(e){var a=function(){if("undefined"===typeof Reflect||!n.a)return!1;if(n.a.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(n()(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,s=v()(e);if(a){var i=v()(this).constructor;t=n()(s,arguments,i)}else t=s.apply(this,arguments);return g()(this,t)}}var H=k()((function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"xs2A"))}),{loadableGenerated:{webpack:function(){return["xs2A"]},modules:["./../Products"]}}),P=t("bmMU"),B="faqHandle",I=function(e){C()(t,e);var a=F(t);function t(e){var s;c()(this,t),s=a.call(this,e),q()(f()(s),"reportingService",new D.a),q()(f()(s),"buildFaqs",(function(e,a,t){if(e&&e.data&&e.data.faq&&o()(e.data.faq)&&e.data.faq.length>0){var n=e.options,i=n.breakpoint,l=e.data.faq.slice(0,a);if(e.data.accordionView){var c=[];l.map((function(e,a){c.push({data:{children:V()(Object(N.getDerivedValueAtWidth)(e.copy,i)),title:V()(Object(N.getDerivedValueAtWidth)(e.heading,i))},options:{isOpen:!1}})}));var r={title:V()(Object(N.getDerivedValueAtWidth)(e.data.heading,i)),titleClassName:Object(T.buildConfigClasses)(n.headingClass,E.faqHeading,i),withExpand:!0};return W("div",{className:Object(T.buildConfigClasses)(n.faqsClass,E.faqItems,i)},W(L.a,{data:c,name:"FAQ_ACCORDION",options:r}))}return W("div",{className:Object(T.buildConfigClasses)(n.faqsClass,E.faqItems,i)},W(H,{data:l,events:{headingOnClick:s.faqClick,headingOnKeyDown:s.faqKeyed},options:{analytics:e.data.analytics,breakpoint:i,copyClass:n.faqsCopyClass,copyTag:n.faqsCopyTag,ctaAnchorClass:n.faqsCtaAnchorClass,eyebrowClass:n.faqsEyebrowClass,eyebrowTag:n.faqsEyebrowTag,headingClass:n.faqsHeadingClass,headingTag:n.faqsHeadingTag,id:"".concat(n.id,"faqs"),itemClass:[n.itemClass,B,t?void 0:E.collapsed],legalClass:n.faqsLegalClass,productContentClass:n.faqsContentClass,style:E}}))}return null})),q()(f()(s),"childEventListeners",(function(e){if(document){var a=document.querySelectorAll(".".concat(B," > div > div > div:last-child"));a.length>0&&a.forEach((function(a){var t=a.querySelectorAll("a"),n=a.querySelectorAll("button");t.forEach((function(a){a.removeEventListener("focus",s.childFocus),e&&a.addEventListener("focus",s.childFocus)})),n.forEach((function(a){a.removeEventListener("focus",s.childFocus),e&&a.addEventListener("focus",s.childFocus)}))}))}})),q()(f()(s),"childFocus",(function(e){e.target.closest(".".concat(B)).classList.remove(E.collapsed)})),q()(f()(s),"expandClick",(function(e){var a=!s.state.expandAll,t=s.props,n=t.options.breakpoint,i=a?Object(N.getDerivedValueAtWidth)(t.data.collapseText,n):Object(N.getDerivedValueAtWidth)(t.data.expandText,n);s.fireLinkClick(s.state.expandText);var o=s.buildFaqs(t,s.state.showing,a);s.setState({expandAll:a,expandText:i,faqs:o})})),q()(f()(s),"faqClick",(function(e,a){var t=e.target,n=Object(N.getDerivedValueAtWidth)(s.props.data.faq[a]&&s.props.data.faq[a].analytics,s.props.options.breakpoint);n.linkName=Object(N.getDerivedValueAtWidth)(s.props.data.faq[a]&&s.props.data.faq[a].heading,s.props.options.breakpoint),s.reportingService.fireLinkClickEvent(n),t.closest(".".concat(B)).classList.toggle(E.collapsed)})),q()(f()(s),"fireLinkClick",(function(e){var a=Object(N.getDerivedValueAtWidth)(s.props.data.analytics,s.props.options.breakpoint);a.linkName=e,a.linkPosition=a.componentName,s.reportingService.fireLinkClickEvent(a)})),q()(f()(s),"faqKeyed",(function(e,a){13===e.which&&s.faqClick(e,a)})),q()(f()(s),"moreLess",(function(e){var a=s.props,t=a.data,n=a.options,i=s.state,l=n.breakpoint,c=t.faq&&o()(t.faq)?t.faq.length:0,r=Object(N.getDerivedValueAtWidth)(t.viewMore,l),d=Object(N.getDerivedValueAtWidth)(t.viewLess,l),u=r,f=i.showing+n.configuration.additionalCount;s.fireLinkClick(i.moreLessText),f>=c&&(u=d),i.moreLessText===d&&(f=n.configuration.initialCount,u=r,document.getElementById(n.id).scrollIntoView()),s.setState({faqs:s.buildFaqs(s.props,f,i.expandAll),moreLessText:u,showing:f})}));var n=e.data,i=e.options,l=i.breakpoint;return s.state={className:Object(T.buildConfigClasses)(i.className,E.faq,l),ctaAnchorClass:Object(T.buildConfigClasses)(i.ctaAnchorClass,E.faqCta,l),expandAll:i.configuration.expandAll,expandClass:Object(T.buildConfigClasses)(i.expandClass,E.expandText,l),expandText:i.configuration.expandAll?Object(N.getDerivedValueAtWidth)(n.collapseText,l):Object(N.getDerivedValueAtWidth)(n.expandText,l),faqs:s.buildFaqs(e,i.configuration.initialCount,i.configuration.expandAll),footerClass:Object(T.buildConfigClasses)(i.footerClass,"",l),headerClass:Object(T.buildConfigClasses)(i.headerClass,"",l),heading:Object(N.getDerivedValueAtWidth)(n.heading,l),headingClass:Object(T.buildConfigClasses)(i.headingClass,E.faqHeading,l),increaseCountBy:i.configuration.additionalCount,moreLessText:Object(N.getDerivedValueAtWidth)(n.viewMore,l),showViewMore:n.faq&&n.faq.length>i.configuration.initialCount,showing:i.configuration.initialCount},s.buildFaqs=s.buildFaqs.bind(f()(s)),s}return d()(t,[{key:"componentDidMount",value:function(){this.childEventListeners(!0)}},{key:"componentDidUpdate",value:function(){this.childEventListeners(!0)}},{key:"componentWillUnmount",value:function(){this.childEventListeners()}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var a=e.options,t=a.breakpoint,s=a.configuration||{},n=Object(T.buildConfigClasses)(a.className,E.faq,t),i=Object(T.buildConfigClasses)(a.ctaAnchorClass,E.faqCta,t),o=Object(T.buildConfigClasses)(a.expandClass,E.expandText,t),l=s.expandAll!==this.props.options.configuration.expandAll?this.state.expandAll:s.expandAll,c=this.buildFaqs(e,s.initialCount,l),r=Object(T.buildConfigClasses)(a.footerClass,"",t),d=Object(T.buildConfigClasses)(a.headerClass,"",t),u=Object(T.buildConfigClasses)(a.headingClass,E.faqHeading,t),f=this.state;n!==f.className&&this.setState({className:n}),i!==f.ctaAnchorClass&&this.setState({ctaAnchorClass:i}),o!==f.expandClass&&this.setState({expandClass:o}),P(c,f.faqs)||this.setState({faqs:c}),r!==f.footerClass&&this.setState({footerClass:r}),d!==f.headerClass&&this.setState({headerClass:d}),u!==f.headingClass&&this.setState({headingClass:u})}},{key:"render",value:function(){var e=this.props,a=e.options,t=this.state;return W("section",{className:"".concat(t.className," ").concat(E.faq),id:a.id,itemscope:y.e.NONE,itemtype:y.f.FAQ},W("div",{className:"container"},W("div",{className:"row flex-wrap"},!e.data.accordionView&&W("div",{className:t.headerClass},t.heading&&W(w.a,{data:{text:t.heading},options:{className:t.headingClass,tag:a.headingTag}}),W(O.a,{data:{tabIndex:0,text:t.expandText},events:{onKeyPress:this.expandClick,onMouseDown:this.expandClick},options:{accessibility:t.expandText,className:t.expandClass}})),t.faqs,t.showViewMore&&W("div",{className:t.footerClass},W(O.a,{data:{text:t.moreLessText},events:{onClick:this.moreLess},options:{accessibility:t.moreLessText,className:t.ctaAnchorClass}})))))}}]),t}(m.PureComponent)}}]);