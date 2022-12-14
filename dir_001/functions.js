/*global jQuery,google */

var SWIFT = SWIFT || {};

(function(){

	// USE STRICT
	"use strict";

	/////////////////////////////////////////////
	// PAGE FUNCTIONS
	/////////////////////////////////////////////

 	SWIFT.page = {
		init: function () {

			// BROWSER CHECK
			SWIFT.page.browserCheck();

			// FITVIDS
			//SWIFT.page.resizeVideos();

			// FITTEXT
			//SWIFT.page.resizeHeadings();

			// HEADER SLIDER
			if (jQuery('body').hasClass('header-below-slider') && jQuery('.home-slider-wrap').length > 0) {
			SWIFT.page.headerSlider();
			}

			// ONE PAGE NAV
			if (jQuery('#one-page-nav').length > 0) {
				SWIFT.page.onePageNav();
			}

			// BACK TO TOP
			if (jQuery('#back-to-top').length > 0) {
				$window.scroll(function() {
					SWIFT.page.backToTop();
				});
			}

			// EXPANDING ASSETS
			SWIFT.page.expandingAssets();

			// RECENT POSTS
			if (jQuery('.recent-posts').length > 0) {
				SWIFT.recentPosts.init();
			}

			// MOVE MODALS TO BOTTOM OF PAGE
			SWIFT.page.moveModals();

			// LOAD MAP ASSET ON MODAL CLICK
			jQuery('a[data-toggle="modal"]').on('click', function() {
				setTimeout(function() {
					SWIFT.map.init();
				}, 300);

				return true;
			});

			// REFRESH MODAL IFRAME ON CLOSE (FOR VIDEOS)
			SWIFT.page.modalClose();

			// REPLACE COMMENTS REPLY TITLE HTML
			if (body.hasClass('single-post')) {
				var replyTitle = jQuery('#respond').find('h3');
				var originalText = jQuery('#respond').find('h3').html();

				replyTitle.addClass('spb-heading');
				replyTitle.html('<span>'+originalText+'</span>');
			}

			// SMOOTH SCROLL LINKS
			SWIFT.page.smoothScrollLinks();

			// PORTFOLIO STICKY SIDEBAR
			if (!isMobileAlt && jQuery('.sticky-details').length > 0) {
				SWIFT.portfolio.stickyDetails();
			}

			// BUDDYPRESS ACTIVITY LINK CLICK
			jQuery('.activity-time-since,.bp-secondary-action').on('click', function(e) {
				e.preventDefault();
				jQuery('.viewer').css('display', 'none');
				window.location = jQuery(this).attr('href');
			});

			// LOVE IT CLICK
			jQuery('.love-it').on('click', function() {
				SWIFT.page.loveIt(jQuery(this));
				return false;
			});

			// ARTICLE SHARE
			SWIFT.page.articleShare();

			// ARTICLE NAVIGATION
			if (body.hasClass('article-swipe') && body.hasClass('single-post') && jQuery('.post-pagination-wrap').length > 0) {
				SWIFT.page.articleNavigation();
			}

			// ARTICLE WITH FULL WIDTH MEDIA TITLE
			if (jQuery('article').hasClass('single-post-fw-media-title')) {
				SWIFT.page.postMediaTitle();
			}

			// RELATED POSTS
			if (jQuery('.related-items').length > 0) {
				SWIFT.relatedPosts.init();
			}

			// LIGHTBOX
			SWIFT.page.lightbox();

			// PAGE FADE OUT
			if (body.hasClass('page-transitions')) {
				SWIFT.page.pageTransitions();
			}

			// DIRECTORY SUBMIT
			SWIFT.page.directorySubmit();

			// EXPORTING FOR EVENTS
			if (body.hasClass('single-event')) {
				SWIFT.page.exportEvent();
			}
		},
		load: function() {

			// PAGE BUILDER ROW CONTENT HEIGHT
			if ($window.width() > 767) {
				SWIFT.page.fwRowContent();
			}
			$window.smartresize( function() {
				if ($window.width() > 767) {
					SWIFT.page.fwRowContent();
				}
			});

			// FANCY HEADING
			if (jQuery('.fancy-heading').length > 0) {
				SWIFT.page.fancyHeading();
			}

			// STICKY SIDEBAR
			if (!isMobileAlt && sfIncluded.hasClass('stickysidebars') && jQuery('.sidebar').length > 0) {
				SWIFT.page.stickyWidget();
			}

			// ANCHOR ON LOAD
			var anchorID = window.location.hash,
				adjust = 80;

			if ($window.width() > 767) {
				adjust = 0;
			}

			if (anchorID !== "" && anchorID.indexOf("__proto__") < 0 && jQuery(SWIFT.page.sanitizeKey(anchorID)).length > 0) {
				setTimeout(function() {
					SWIFT.page.onePageNavGoTo(SWIFT.page.sanitizeKey(anchorID));
				}, 300);
			}
		},
		browserCheck: function() {
			jQuery.browser = {};
			jQuery.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase());
			jQuery.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
			jQuery.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
			jQuery.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());
			jQuery.browser.msieMobile10 = /iemobile\/10\.0/.test(navigator.userAgent.toLowerCase());

			// BODY CLASSES
			if (isMobileAlt) {
				body.addClass("mobile-browser");
			} else {
				body.addClass("standard-browser");
			}
			if (isIEMobile) {
				body.addClass("ie-mobile");
			}
			if (isAppleDevice) {
				body.addClass("apple-mobile-browser");
			}
			if (body.hasClass("woocommerce-page") && !body.hasClass("woocommerce")) {
				body.addClass("woocommerce");
			}

			// ADD IE CLASS
			if (IEVersion && IEVersion < 9) {
				body.addClass('browser-ie');
			}

			// ADD IE10 CLASS
			var pattern = /MSIE\s([\d]+)/,
				ua = navigator.userAgent,
				matched = ua.match(pattern);
			if (matched) {
				body.addClass('browser-ie10');
			}

			// ADD IE11 CLASS
			if (!!navigator.userAgent.match(/Trident.*rv\:11\./)) {
				body.addClass('browser-ie11');
			}

			// ADD MOZILLA CLASS
			if (jQuery.browser.mozilla) {
				body.addClass('browser-ff');
			}

			// ADD SAFARI CLASS
			if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
				body.addClass('browser-safari');
			}
		},
		sanitizeKey: function(t) {
			return t && ["__proto__", "constructor", "prototype"].includes(t.toLowerCase()) ? t.toUpperCase() : t
		},
		getURLParameters: function(paramName) {

			paramName = SWIFT.page.sanitizeKey(paramName);

		    var sURL = window.document.URL.toString();
		    if (sURL.indexOf("?") > 0)
		    {
		        var arrParams = sURL.split("?");
		        var arrURLParams = arrParams[1].split("&");
		        var arrParamNames = new Array(arrURLParams.length);
		        var arrParamValues = new Array(arrURLParams.length);

		        var i = 0;
		        for (i = 0; i<arrURLParams.length; i++)
		        {
		            var sParam =  arrURLParams[i].split("=");
		            arrParamNames[i] = sParam[0];
		            if (sParam[1] != "")
		                arrParamValues[i] = unescape(sParam[1]);
		            else
		                arrParamValues[i] = "";
		        }

		        for (i=0; i<arrURLParams.length; i++)
		        {
		            if (arrParamNames[i] == paramName)
		            {
						if ( arrParamValues[i] == undefined  ) {
							arrParamValues[i] = "";
						}
		                return arrParamValues[i];
		            }
		        }
		        return "";
		    } else {
		        return "";
		    }
		},
		resizeVideos: function() {
//			jQuery('.blog-items:not(.carousel-items),article.type-portfolio,article.type-post,article.type-team,.spb_video_widget,.infocus-item,.full-width-detail,#activity-stream').fitVids({ ignore: '.no-fv'});
		},
		resizeHeadings: function() {
			var h1FontSize = jQuery('h1:not(.logo-h1)').css('font-size'),
				h2FontSize = jQuery('h2:not(.caption-title)').css('font-size');

			SWIFT.page.resizeHeadingsResize(h1FontSize, h2FontSize);
			$window.smartresize( function() {
				SWIFT.page.resizeHeadingsResize(h1FontSize, h2FontSize);
			});
		},
		resizeHeadingsResize: function(h1FontSize, h2FontSize) {
			if ($window.width() <= 768) {
				if (h1FontSize) {
					h1FontSize = h1FontSize.replace("px", "");
					var h1FontSizeMin = Math.floor(h1FontSize * 0.6);
					jQuery('h1:not(.logo-h1)').fitText(1, { minFontSize: h1FontSizeMin + 'px', maxFontSize: h1FontSize +'px' }).css('line-height', '120%');
				}

				if (h2FontSize) {
					h2FontSize = h2FontSize.replace("px", "");
					var h2FontSizeMin = Math.floor(h2FontSize * 0.6);
					jQuery('h2:not(.caption-title)').fitText(1, { minFontSize: h2FontSizeMin + 'px', maxFontSize: h2FontSize +'px' }).css('line-height', '120%');
				}
			} else {
				jQuery('h1:not(.logo-h1)').css('font-size', '').css('line-height', '');
				jQuery('h2:not(.caption-title)').css('font-size', '').css('line-height', '');
			}
		},
		injectsvgs: function() {
			var mySVGsToInject = document.querySelectorAll('img.inject-me');
			var injectorOptions = {};
			SVGInjector(mySVGsToInject, injectorOptions, function (totalSVGsInjected) {

				// AFTER SVGs HAVE BEEN CONVERTED

			});
		},
		loveIt: function($this) {
			var locale = jQuery('#loveit-locale'),
				post_id = $this.data('post-id'),
				user_id = $this.data('user-id'),
				action = 'love_it';

			if ($this.hasClass('loved')) {
				action = 'unlove_it';
			}
			if (locale.data('loggedin') == 'false' && jQuery.cookie('loved-' + post_id)) {
				action = 'unlove_it';
			}

			var data = {
				action: action,
				item_id: post_id,
				user_id: user_id,
				love_it_nonce: locale.data('nonce')
			};

			jQuery.post(locale.data('ajaxurl'), data, function(response) {
				var ajaxResponse = jQuery.trim(response),
					count_wrap,
					count;

				if (ajaxResponse == 'loved') {
					$this.addClass('loved');
					count_wrap = $this.find('data.count');
					count = count_wrap.text();
					count_wrap.text(parseInt(count) + 1);
					if(locale.data('loggedin') == 'false') {
						jQuery.cookie('loved-' + post_id, 'yes', { expires: 1 });
					}
				} else if (ajaxResponse == 'unloved') {
					$this.removeClass('loved');
					count_wrap = $this.find('data.count');
					count = count_wrap.text();
					count_wrap.text(parseInt(count) - 1);
					if (locale.data('loggedin') == 'false') {
						jQuery.cookie('loved-' + post_id, 'no', { expires: 1 });
					}
				} else {
					alert(locale.data('error'));
				}
			});
		},
		expandingAssets: function() {
			jQuery('.spb-row-expand-text').on('click', '', function(e) {
				e.preventDefault();
				var expand = jQuery(this),
					expandRow = expand.next();

				if (expandRow.hasClass('spb-row-expanding-open') && !expandRow.hasClass('spb-row-expanding-active')) {
					expandRow.addClass('spb-row-expanding-open').addClass('spb-row-expanding-active').slideUp(800);
					setTimeout(function() {
						expand.removeClass('row-open').find('span').text(expand.data('closed-text'));
						expandRow.css('display', 'block').removeClass('spb-row-expanding-open').removeClass('spb-row-expanding-active');
					}, 800);
				} else if (!expandRow.hasClass('spb-row-expanding-active')) {
					expand.addClass('row-open').find('span').text(expand.data('open-text'));
					expandRow.css('display', 'none').addClass('spb-row-expanding-open').addClass('spb-row-expanding-active').slideDown(800);
					setTimeout(function() {
						expandRow.removeClass('spb-row-expanding-active');
					}, 800);
				}

			});
		},
		fwRowContent: function() {
			/*
			jQuery('.spb-row-container[data-v-center="true"]').each(function() {

				if (jQuery(this).find('.row').length > 0) {

					jQuery(this).find('.row').each(function() {
						var contentHeight = 0,
							parentContainer = jQuery(this).parents('.spb-row-container');

						if (parentContainer.hasClass('parallax-window-height')) {
							parentContainer.find('> .spb_content_element').vCenterTop();
						}

						if (jQuery(this).find('> div').length > 1) {

							jQuery(this).addClass('multi-column-row');

							jQuery(this).find('> div').each(function() {
								var assetPadding = parseInt(jQuery(this).css('padding-top')) + parseInt(jQuery(this).css('padding-bottom')),
									itemHeight = jQuery(this).find('.spb-asset-content').first().innerHeight() + assetPadding;
								if (itemHeight > contentHeight) {
									contentHeight = itemHeight;
								}
							});

							// SET THE ROW & INNER ASSET MIN HEIGHT
							jQuery(this).css('min-height', contentHeight);
							jQuery(this).find('> div').css('min-height', contentHeight);

							// VERTICAL ALIGN THE INNER ASSET CONTENT
							jQuery(this).find('> div').each(function() {
								var assetContent = jQuery(this).find('.spb-asset-content').first(),
									assetPadding = parseInt(jQuery(this).css('padding-top')) + parseInt(jQuery(this).css('padding-bottom')) + parseInt(assetContent.css('padding-top')) + parseInt(assetContent.css('padding-bottom')),
									innerHeight = assetContent.height() + assetPadding,
									margins = Math.floor((contentHeight / 2) - (innerHeight /2));

								if (margins > 0) {
									assetContent.css('margin-top', margins).css('margin-bottom', margins);
								} else {
									assetContent.css('margin-top', '').css('margin-bottom', '');
								}
							});

						}

					});

				}
			});
			*/
		},
		headerSlider: function() {

			// SET LOADING INDICATOR
			jQuery('#site-loading').css('display', 'block');

			var sliderHeight = 0;

			if (jQuery('.home-slider-wrap').find('.rev_slider_wrapper').length > 0) {
				sliderHeight = jQuery('.home-slider-wrap').find('.rev_slider_wrapper').height();
			} else {
				sliderHeight = jQuery('.home-slider-wrap').height();
			}

			// SET SLIDER POSITION & HEIGHT
			jQuery('.home-slider-wrap').css('position', 'fixed').css('height', sliderHeight);

			jQuery('#container').css('top', sliderHeight);
			setTimeout(function() {
				jQuery('#site-loading').fadeOut(1000);
			}, 250);

			// RESIZE SLIDER HEIGHT
			$window.smartresize( function() {
				jQuery('#container').css('top', jQuery('.home-slider-wrap').height());
			});

			// CONTINUE LINK
			jQuery('a#slider-continue').on('click', function(e) {

				// Prevent default anchor action
				e.preventDefault();

				// Animate scroll to main content
				jQuery('html, body').stop().animate({
					scrollTop: jQuery('#container').css('top')
				}, 1500, 'easeInOutExpo');

			});
		},
		fancyHeading: function() {
			var fancyHeading = jQuery('.fancy-heading'),
				fancyHeadingText = fancyHeading.find('.heading-text'),
				fancyHeadingTextHeight = fancyHeadingText.height(),
				fancyHeadingHeight = parseInt(fancyHeading.data('height'), 10),
				header = jQuery('.header-wrap'),
				headerHeight = 0;

			if (body.hasClass('header-naked-light') || body.hasClass('header-naked-dark')) {
				headerHeight = header.height();
			}

			if (!fancyHeadingHeight) {
				fancyHeadingHeight = 400;
			}

			if (fancyHeadingTextHeight > fancyHeadingHeight) {
				fancyHeadingHeight = fancyHeadingTextHeight + 80;
			}

			fancyHeadingHeight = fancyHeadingHeight + headerHeight;

			// Vertically center the heading text
			fancyHeadingText.vCenterTop();

			// Animate in the heading text and title
			setTimeout(function() {
				fancyHeading.css({
					'height': fancyHeadingHeight + 'px',
					'opacity': 1
				});
			}, 400);
			setTimeout(function() {
				fancyHeadingText.css('opacity', 1);
			}, 800);
			setTimeout(function() {
				fancyHeading.addClass('animated');
			}, 1400);

			// Check if parallax scroll is possible
			if (parallaxScroll && !isMobileAlt) {
				$window.scroll(function(){

					var scrollTop = $window.scrollTop(),
						headingOffset = 0;

					if (jQuery('.sticky-header').length > 0) {
						headingOffset = jQuery('#header-section').height();
					}
					if (jQuery('#top-bar').length > 0) {
						headingOffset = headingOffset + jQuery('#top-bar').height();
					}
					if (jQuery('#wpadminbar:visible').length > 0 && jQuery("body.feedback-commenting-enabled, body.active_comment") <= 0 ) {
						headingOffset = headingOffset + 32;
					}

					scrollTop = scrollTop - headingOffset;

					// Only scroll if the heading is makes sense to do so
					if (scrollTop < jQuery(document).height() - $window.height()) {

						if (scrollTop < 0) {
							scrollTop = 0;
						}

						// Reduce the heading height
						fancyHeading.stop(true,true).transition({
							top: scrollTop / 1.8
						}, 0);

						// Move & fade the heading content
						fancyHeadingText.stop(true,true).transition({
							opacity: 1 - scrollTop / 420
						}, 0);
					}

				});
			}
		},
		moveModals: function() {
			jQuery(".modal").each(function(){
				jQuery(this).appendTo("body");
			});
		},
		modalClose: function() {
			jQuery(".modal-backdrop, .modal .close, .modal .btn").on("click", function() {
				jQuery(".modal iframe").each(function() {
					var thisModal = jQuery(this);
					thisModal.attr("src", thisModal.attr("src"));
				});
			});
		},
		smoothScrollLinks: function() {
			body.on('click', '.smooth-scroll-link', function(e) {

				var linkHref = jQuery(this).attr('href');

				if (linkHref && linkHref.indexOf('#') === 0) {
					SWIFT.page.onePageNavGoTo(linkHref);
					e.preventDefault();
				} else {
					return e;
				}

			});
		},
		onePageNav: function() {

			var onePageNav = jQuery('#one-page-nav'),
				onePageNavType = onePageNav.hasClass('opn-arrows') ? "arrows" : "standard",
				onePageNavItems = "",
				pageSectionCount = 0,
				mainContent = jQuery('.page-content');

			mainContent.find('section.row').each(function() {
				var linkID = jQuery(this).attr('id'),
					linkName = jQuery(this).data('rowname');

				if (linkID && linkName.length > 0 && jQuery(this).height() > 0) {
					onePageNavItems += '<li><a href="#'+linkID+'" data-title="'+linkName+'"><i></i></a><div class="hover-caption">'+linkName+'</div></li>';
					pageSectionCount++;
				}
			});

			if (pageSectionCount > 0) {
				onePageNav.append('<ul>'+onePageNavItems+'</ul>');

				if (onePageNavType === "arrows") {
					onePageNav.find('ul').css('display', 'none');
					onePageNav.append('<a href="#" class="opn-up"><i class="ss-up"></i></a>');
					onePageNav.append('<div class="opn-status"><span class="current">1</span>/<span class="total">'+pageSectionCount+'</span></div>');
					onePageNav.append('<a href="#" class="opn-down"><i class="ss-down"></i></a>');
				}

				onePageNav.vCenter();
				setTimeout(function() {

					SWIFT.page.onePageNavScroll(onePageNav);

					onePageNav.css('display', 'block').stop().animate({
						'right': '0',
						'opacity': 1
					}, 1000, "easeOutQuart");

					// Nav Dots
					jQuery('#one-page-nav ul li a').bind('click', function(e) {
						SWIFT.page.onePageNavGoTo(jQuery(this).attr('href'));
						e.preventDefault();
					});

					// Up Arrow
					jQuery('#one-page-nav a.opn-up').bind('click', function(e) {
						var currentSection = parseInt(jQuery('.opn-status .current').text(), 10),
							prevSection = currentSection - 1,
							prevSectionHref = jQuery('#one-page-nav ul li:nth-child('+ prevSection +') > a').attr('href');

						if (prevSection > 0) {
							SWIFT.page.onePageNavGoTo(prevSectionHref);
						}
						e.preventDefault();
					});

					// Down Arrow
					jQuery('#one-page-nav a.opn-down').bind('click', function(e) {
						var currentSection = parseInt(jQuery('.opn-status .current').text(), 10),
							nextSection = currentSection + 1,
							nextSectionHref = jQuery('#one-page-nav ul li:nth-child('+ nextSection +') > a').attr('href');

						if (nextSection <= pageSectionCount) {
							SWIFT.page.onePageNavGoTo(nextSectionHref);
						}
						e.preventDefault();
					});

					// Assign current on init and scroll
					SWIFT.page.onePageNavScroll(onePageNav);
					$window.on('scroll', function() {
						SWIFT.page.onePageNavScroll(onePageNav);
					});

				}, 1000);
			}
		},
		onePageNavGoTo: function(anchor) {

			var adjustment = 0;

			if (jQuery('#wpadminbar:visible').length > 0) {
				adjustment = jQuery('#wpadminbar').height();
			}

			if (body.hasClass('sticky-header-enabled')) {
				adjustment = jQuery('.sticky-header').outerHeight() > 0 ? adjustment + jQuery('.sticky-header').outerHeight() : adjustment + jQuery('#header-section').outerHeight();
			}

			SWIFT.isScrolling = true;

			jQuery('html, body').stop().animate({
				scrollTop: jQuery(anchor).offset().top - adjustment + 1
			}, 1000, 'easeInOutExpo', function() {
				SWIFT.isScrolling = false;
			});
		},
		onePageNavScroll: function(onePageNav) {

			var adjustment = 0;

			if (body.hasClass('sticky-header-enabled')) {
				adjustment = jQuery('.sticky-header').height() > 0 ? adjustment + jQuery('.sticky-header').height() : adjustment + jQuery('#header-section').height();
			}

			if (jQuery('#wpadminbar:visible').length > 0) {
				adjustment = adjustment + jQuery('#wpadminbar').height();
			}

			var currentSection = jQuery('section.row:in-viewport('+adjustment+')').data('rowname'),
				currentSectionIndex = 0;

			if (!currentSection) {
				onePageNav.find('li').removeClass('selected');
			}

			if (onePageNav.is(':visible') && currentSection) {
				onePageNav.find('li').removeClass('selected');
				onePageNav.find('li a[data-title="'+currentSection+'"]').parent().addClass('selected');
				currentSectionIndex = onePageNav.find('li a[data-title="'+currentSection+'"]').parent().index() + 1;
			}

			if (currentSectionIndex > 0) {
				jQuery('.opn-status .current').text(currentSectionIndex);
			}

			if (onePageNav.hasClass('opn-arrows')) {
				var current = onePageNav.find('.current').text(),
					total = onePageNav.find('.total').text();

				if (current === "1") {
					onePageNav.find('.opn-up').addClass('disabled');
				} else {
					onePageNav.find('.opn-up').removeClass('disabled');
				}

				if (current === total) {
					onePageNav.find('.opn-down').addClass('disabled');
				} else {
					onePageNav.find('.opn-down').removeClass('disabled');
				}
			}
		},
		articleShare: function() {
			jQuery('.article-share').each(function() {
				var articleShare = jQuery(this);
				articleShare.share({
					button_text: articleShare.data('buttontext'),
					image: articleShare.data('image'),
				});
			});
		},
		articleNavigation: function() {
			var postPagination = jQuery('.post-pagination-wrap'),
				postNext = postPagination.find('.next-article > h2 > a').attr('href'),
				postPrev = postPagination.find('.prev-article > h2 > a').attr('href');

			jQuery('article.type-post').hammer().on("swipeleft", function(event) {
			    if (postPrev) {
			    	window.location = postPrev;
			    }
			});

			jQuery('article.type-post').hammer().on("swiperight", function(event) {
			    if (postNext) {
			    	window.location = postNext;
			    }
			});

		},
		postMediaTitle: function() {
			var detailsOverlay = jQuery('.details-overlay'),
				detailFeature = jQuery('.detail-feature'),
				featureHeight = detailsOverlay.height() + 80;

			if (body.hasClass('header-naked-light') || body.hasClass('header-naked-dark')) {
				detailFeature.css('padding-top', jQuery('.header-wrap').height() * 2);
			}

			detailFeature.css('height', featureHeight);
			setTimeout(function() {
				jQuery('.details-overlay').vCenter().stop().animate({
					'bottom': '50%',
					'opacity': 1
				}, 1500, "easeOutExpo");
			}, 500);

			$window.smartresize( function() {
				detailFeature.css('height', detailsOverlay.height() + 80);
				jQuery('.details-overlay').vCenter();
			});

		},
		lightbox: function() {

			// Lightbox Social
			var lightboxSocial = {};
			if (lightboxSharing) {
				lightboxSocial = {
					facebook: true,
					twitter: true,
					googleplus: true,
					pinterest: {
						source: "https://pinterest.com/pin/create/bookmarklet/?url={URL}",
						text: "Share on Pinterest"
					}
				};
			}

			// Lightbox Galleries
			var galleryArr = [];
			jQuery('[data-rel^="ilightbox["]').each(function () {
				var attr = this.getAttribute("data-rel");
				if ( jQuery(this).hasClass( 'ilightbox-enabled' ) ) {
					return;
				}
				if (jQuery.inArray(attr, galleryArr) == -1 ) {
					galleryArr.push(attr);
				}
			});
			jQuery.each(galleryArr, function (b, c) {
				jQuery('[data-rel="' + c + '"]').iLightBox({
					skin: lightboxSkin,
					social: {
						buttons: lightboxSocial
					},
					path: 'horizontal',
					thumbnails: {
						maxWidth: 120,
						maxHeight: 120
					},
					controls: {
						arrows: lightboxControlArrows,
						thumbnail: lightboxThumbs
					},
				});
				jQuery('[data-rel="' + c + '"]').addClass( 'ilightbox-enabled' );
			});
		},
		backToTop: function() {
			var scrollPosition = $window.scrollTop();

			if (scrollPosition > 300) {
				jQuery('#back-to-top').stop().animate({
					'bottom': '10px',
					'opacity': 1
				}, 300, "linear");
			} else if (scrollPosition < 300) {
				jQuery('#back-to-top').stop().animate({
					'bottom': '-80px',
					'opacity': 0
				}, 300, "linear");
			}
		},
		stickyWidget: function() {

			var stickyWidget = jQuery('.sidebar-widget-wrap'),
				sidebar = stickyWidget.parent(),
				content = jQuery('.page-content'),
				offset = 50;

			if (!body.hasClass('vertical-header')) {
				offset = offset + jQuery('#header-section').height();
			}
			if (jQuery('#wpadminbar:visible').length > 0 && jQuery("body.feedback-commenting-enabled, body.active_comment") <= 0) {
				offset = offset + 32;
			}
			if (jQuery('#top-bar').length > 0) {
				offset = offset + jQuery('#top-bar').height();
			}
			if (jQuery('.page-heading').length > 0) {
				offset = offset + jQuery('.page-heading').height();
			}

			SWIFT.page.initStickyWidget(stickyWidget, sidebar, offset);

			$window.smartresize( function() {
				jQuery('.inner-page-wrap').stickem().destroy();
				SWIFT.page.resizeStickyWidget(stickyWidget, sidebar);
				SWIFT.page.initStickyWidget(stickyWidget, sidebar, offset);
			});

		},
		initStickyWidget: function(stickyWidget, sidebar, offset) {
			jQuery('.inner-page-wrap').stickem({
				item: '.sidebar-widget-wrap',
				container: '.inner-page-wrap',
				offset: offset,
				onStick: function() {
					SWIFT.page.resizeStickyWidget(stickyWidget, sidebar);
				}
			});
		},
		resizeStickyWidget: function(stickyWidget, sidebar) {
			var headerHeight = 0,
				content = jQuery('.page-content'),
				sidebarHeight = sidebar.height(),
				contentHeight = content.height();

			if (jQuery('.sticky-header').length > 0) {
				headerHeight = jQuery('.sticky-header').height() > 0 ? jQuery('.sticky-header').height() : jQuery('#header-section').height();
			}
			if (jQuery('#wpadminbar:visible').length > 0 && jQuery("body.feedback-commenting-enabled, body.active_comment") <= 0) {
				headerHeight = headerHeight + 32;
			}
			stickyWidget.css('width', sidebar.width()).css('top', headerHeight + 30);
			if (contentHeight > sidebarHeight) {
				sidebar.css('height', contentHeight);
			} else {
				sidebar.css('height', sidebarHeight);
			}
		},
		getViewportHeight: function() {
			var height = "innerHeight" in window ? window.innerHeight: document.documentElement.offsetHeight;
			return height;
		},
		checkIE: function() {
			var undef,
				v = 3,
				div = document.createElement('div'),
				all = div.getElementsByTagName('i');

			while (
				div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
				all[0]
			);

			return v > 4 ? v : undef;
		},
		pageTransitions: function() {
			jQuery('a').on('click', function(e) {
				var linkElement = jQuery(this),
					link = linkElement.attr('href'),
					linkTarget = linkElement.attr('target'),
					parentMenuItem = linkElement.parent(),
					subMenu = parentMenuItem.find('ul.sub-menu');

				// Return if is tab click
				if (linkElement.data('toggle') === "tab" || linkElement.parent('.ui-accordion-header').length > 0) {
					return e;
				}

				if (link.indexOf('#') === 0 && link.length > 1) {
					SWIFT.isScrolling = true;
					SWIFT.page.onePageNavGoTo(link);
					setTimeout(function() {
						SWIFT.isScrolling = false;
					}, 1000);
					e.preventDefault();
				} else if (link.indexOf('#') === 0 && link.length === 1) {
					return;
				} else if (linkTarget === '_blank' || link.indexOf('?') >= 0 || link.indexOf('.jpg') >= 0 || link.indexOf('.png') >= 0 || link.indexOf('mailto') >= 0 || e.ctrlKey || e.metaKey || link.indexOf('javascript') === 0 || link.indexOf('tel:') === 0) {
					return e;
				} else {
					if (body.hasClass('mobile-menu-open') || body.hasClass('mh-overlay-show')) {
						return;
					} else {
						SWIFT.page.fadePageOut(link);
						e.preventDefault();
					}
				}
			});
		},
		fadePageIn: function() {
			body.addClass('page-fading-in');
			jQuery('#main-container').animate({
				'opacity': 1,
				'paddingTop': '0'
			}, 0, 'easeOutExpo', function() {
				body.removeClass('page-fading-in');
				body.addClass("page-loaded");
			});
			jQuery('#site-loading').animate({
				'opacity': 0,
			}, 300, 'easeInExpo', function() {
				jQuery(this).css('display', 'none');
			});
		},
		fadePageOut: function(link) {
			var ptop = '150px';

			if (body.hasClass('header-naked-light') || body.hasClass('header-naked-dark')) {
				ptop = '0px';
			}

			jQuery('#site-loading').css('display', 'block').animate({
				'opacity': 1,
			}, 0, 'easeInExpo', function() {
				window.location = link;
			});
		},
		directorySubmit: function() {
			jQuery('#sf_directory_calculate_coordinates').on("click", function(e) {
				e.preventDefault();
				var geocoder = new google.maps.Geocoder();
					geocoder.geocode( { 'address': jQuery('#sf_directory_address').val()}, function(results, status) {
						jQuery('#sf_directory_lat_coord').val(results[0].geometry.location.lat());
						jQuery('#sf_directory_lng_coord').val(results[0].geometry.location.lng());
					});

			});

			jQuery('#directory-submit').click(function(e) {

			if (jQuery('#sf_directory_address').val() === '' || jQuery('#sf_directory_lat_coord').val() === '' || jQuery('sf_directory_lng_coord').val() === '' || jQuery('#directory_title').val() === '' || jQuery('#directory_description').val() === '' || jQuery('#directory-cat').val() <= 0 || jQuery('#directory-loc').val() <= 0) {
					e.preventDefault();
					jQuery('.directory-error').show();
					jQuery('html, body').animate({ scrollTop: jQuery('.directory-error').offset().top-100}, 700);
					return false;
				}
				jQuery('#add-directory-entry').submit();
			});
		},
		exportEvent: function() {
			// EVENTS ICAL EXPORT
			if ( jQuery(".event_export_btn").length > 0 ) {
				jQuery(".event_export_btn").each(function () {

					var filename = jQuery(this).data("filename");
					var subject = jQuery(this).data("subject");
					var description = jQuery(this).data("description");
					var eventLocation = jQuery(this).data("location");
					var eventTimezone = jQuery(this).data("timezone");
					var dates = jQuery.parseJSON(decodeURIComponent(jQuery(this).data("dates")));
					// Used to pass ical info to apple Calendar
					var icsUrl = templateDirectory + "/includes/icstophp.php" ;
					
					jQuery.each(dates, function (index, date) {
						var startDate = date.begin;
						var endDate = date.end;
						
						// passes data to cal
						jQuery(".event_export_btn").addcalevent({
							'onclick': true,
							'apps': [0,1,2,3,4],
							'data': {
								"title":filename,
								"desc":subject, 
								"location": eventLocation,		
								"time":{
									"start":startDate,
									"end":endDate,
									"zone":eventTimezone
								},
							},
							'ics': icsUrl
						});	
					});
				});
			} 
		}
	};


	/////////////////////////////////////////////
	// SUPER SEARCH
	/////////////////////////////////////////////

	SWIFT.superSearch = {
		init: function() {

			jQuery('.search-options .ss-dropdown').on('click', function(e) {
				e.preventDefault();

				var option = jQuery(this),
					dropdown = option.find( 'ul' );

				if (isMobileAlt) {
					if (dropdown.hasClass('show-dropdown')) {
						dropdown.removeClass('show-dropdown');
					} else {
						dropdown.addClass('show-dropdown');
					}
				} else {
					if (dropdown.hasClass('show-dropdown')) {
						dropdown.css('top', 30);
						dropdown.removeClass('show-dropdown');
					} else {
						dropdown.css('top', -10);
						dropdown.addClass('show-dropdown');
					}
				}
			});

			jQuery('.ss-option').on('click', function(e) {
				e.preventDefault();

				var selectedOption = jQuery(this).attr('data-attr_value');
				var parentOption = jQuery(this).parent().parent().parent();

				parentOption.find('li').removeClass('selected');
				jQuery(this).parent().addClass('selected');

				parentOption.attr('data-attr_value', selectedOption);
				parentOption.find('span').text(jQuery(this).text());
			});

			jQuery('.super-search-go').on('click', function(e) {
				e.preventDefault();
				var parentSearch = jQuery(this).parents('.sf-super-search'),
					filterURL = SWIFT.superSearch.urlBuilder(parentSearch),
					homeURL = jQuery(this).attr('data-home_url'),
					shopURL = jQuery(this).attr('data-shop_url');

				if (filterURL.indexOf("product_cat") >= 0) {
				location.href = homeURL + filterURL;
				} else {
				location.href = shopURL + filterURL;
				}

			});
		},
		urlBuilder: function(searchInstance) {

			var queryString = "";

			jQuery(searchInstance).find('.search-options .ss-dropdown').each(function() {

				var attr = jQuery(this).attr('id');
				var attrValue = jQuery(this).attr('data-attr_value');
				if (attrValue !== "") {
					if (attr === "product_cat") {
						if (queryString === "") {
							queryString += "?product_cat=" + attrValue;
						} else {
							queryString += "&product_cat=" + attrValue;
						}
					} else {
						if (queryString === "") {
						queryString += "?filter_" + attr + "=" + attrValue;
						} else {
						queryString += "&filter_" + attr + "=" + attrValue;
						}
					}
				}
			});

			jQuery('.search-options input').each(function() {
				var attr = jQuery(this).attr('name');
				var attrValue = jQuery(this).attr('value');
				if (queryString === "") {
					queryString += "?"+ attr + "=" + attrValue;
				} else {
					queryString += "&" + attr + "=" + attrValue;
				}
			});

			return queryString;
		}
	};


	/////////////////////////////////////////////
	// HEADER
	/////////////////////////////////////////////

	SWIFT.header = {
		init: function() {

			var lastAjaxSearchValue = "",
				searchTimer = false;

			if (body.hasClass('sticky-header-enabled') && !body.hasClass('vertical-header')) {
				SWIFT.header.stickyHeaderInit();
			}

			jQuery('.header-search-link-alt').on('click', function(e) {
				e.preventDefault();

				if (jQuery(this).attr('data-state') == 'open') {
					jQuery(this).attr('data-state', 'closed');
				} else {
					jQuery(this).attr('data-state', 'open');
				}

				var ajaxSearchWrap = jQuery('.ajax-search-wrap');

				if (ajaxSearchWrap.is(':visible')) {
					ajaxSearchWrap.fadeOut(300);
					setTimeout(function() {
						jQuery('.ajax-search-results').slideUp(100).empty();
						jQuery('.ajax-search-form input[name=s]').val('');
					}, 300);
				} else {
					ajaxSearchWrap.fadeIn(300);
					setTimeout(function() {
						jQuery('.ajax-search-form input[name=s]').focus();
						jQuery("#container").bind("click", function(e) {
							var ajaxSearchWrap = jQuery('.ajax-search-wrap');
							if (!jQuery(e.target).closest('.ajax-search-wrap').length) {
								jQuery('.header-search-link-alt').attr('data-state', 'closed');
								ajaxSearchWrap.fadeOut(300);
								setTimeout(function() {
									jQuery('.ajax-search-results').slideUp(100).empty();
									jQuery('.ajax-search-form input[name=s]').val('');
								}, 300);
								jQuery("#container").unbind("click");
							}
						});
					}, 300);
				}

			});

			jQuery('.ajax-search-form input[name=s]').on('keyup', function(e) {
				var searchvalue = e.currentTarget.value;

				clearTimeout(searchTimer);
				if (lastAjaxSearchValue != jQuery.trim(searchvalue) && searchvalue.length >= 3) {
					searchTimer = setTimeout( function() {
						SWIFT.header.ajaxSearch(e);
					}, 400);
				}
			});

			jQuery('a.overlay-menu-link').on('click', function(e) {
				e.preventDefault();
				SWIFT.header.overlayMenuToggle();
			});

			jQuery('#overlay-menu li.menu-item a').on('click', function() {
				SWIFT.header.overlayMenuToggle();
			});

			jQuery('a.contact-menu-link').on('click', function(e) {
				e.preventDefault();
				var headerTop = jQuery('.header-wrap').scrollTop();
				if (headerTop !== 0) {
					jQuery('body,html').animate({scrollTop: headerTop}, 600, 'easeOutCubic');
					setTimeout(function() {
						jQuery('#contact-slideout').slideToggle(800, 'easeInOutExpo');
						if (jQuery(this).hasClass('slide-open')) {
							jQuery(this).removeClass('slide-open');
						} else {
							SWIFT.map.init();
							jQuery(this).addClass('slide-open');
						}
					}, 800);
				} else {
					jQuery('#contact-slideout').slideToggle(800, 'easeInOutExpo');
					if (jQuery(this).hasClass('slide-open')) {
						jQuery(this).removeClass('slide-open');
					} else {
						SWIFT.map.init();
						jQuery(this).addClass('slide-open');
					}
				}
			});

			// Mobile Sticky Header
			if (body.hasClass('mh-sticky')) {
				var mobileHeader = jQuery('#mobile-header');

				mobileHeader.sticky_menu({
					topSpacing: 0
				});

				jQuery('#mobile-header-sticky-wrapper').css('height', mobileHeader.outerHeight(true));

				$window.smartresize( function() {
					mobileHeader.sticky_menu('update');
					jQuery('#mobile-header-sticky-wrapper').css('height', mobileHeader.outerHeight(true));
				});
			}

			if (body.hasClass('layout-boxed') && body.hasClass('vertical-header-right')) {

				var rightOffset = ($window.width() - jQuery('#container').width()) / 2;
				jQuery('.header-wrap').css('right', rightOffset);

				$window.smartresize( function() {
					var rightOffset = ($window.width() - jQuery('#container').width()) / 2;
					jQuery('.header-wrap').css('right', rightOffset);
				});
			}
		},
		stickyHeaderInit: function() {
			var spacing = 0,
				stickyHeader = jQuery('.sticky-header'),
				headerWrap = jQuery('.header-wrap');

			if (jQuery('#wpadminbar:visible').length > 0) {
				spacing = 32;
			}

			stickyHeader.sticky_menu({
				topSpacing: spacing
			});

			if ( stickyHeader ) {
				$window.smartresize( function() {
					stickyHeader.sticky_menu('update');
				});
			}

			if (body.hasClass('layout-boxed')) {
				jQuery('.sticky-header').css('max-width', headerWrap.width());
				$window.smartresize( function() {
					jQuery('.sticky-header').css('max-width', headerWrap.width());
				});
			}

			// Sticky Header Resizing
			if (body.hasClass('sh-dynamic')) {
				var defaultHeaderPos = headerWrap.offset().top;
				$window.scroll(function () {
					defaultHeaderPos = headerWrap.offset().top - $window.scrollTop();
					if (jQuery('.sticky-wrapper').hasClass('is-sticky') && defaultHeaderPos < -100) {
						headerWrap.addClass('resized-header');
					} else if (headerWrap.hasClass('resized-header')) {
						headerWrap.removeClass('resized-header');
					}

				});
			}

			// Sticky Header Hiding
			if (body.hasClass('sh-show-hide')) {
				var lastTop = 0;
				$window.scroll(function(event){
				   var currentTop = jQuery(this).scrollTop();
				   if (currentTop > lastTop && currentTop > 1000){
				   	jQuery('.sticky-header').addClass('sticky-header-hide');
				   } else if (jQuery('.sticky-header').hasClass('sticky-header-hide')) {
					   jQuery('.sticky-header').removeClass('sticky-header-hide');
				   }
				   lastTop = currentTop;
				});
			}
		},
		ajaxSearch: function(e) {
			var searchInput = jQuery(e.currentTarget),
				searchValues = searchInput.parents('form').serialize() + '&action=sf_ajaxsearch',
				results = jQuery('.ajax-search-results'),
				loadingIndicator = jQuery('.ajax-search-wrap .ajax-loading'),
				ajaxurl = jQuery('.ajax-search-wrap').data('ajaxurl');

			jQuery.ajax({
				url: ajaxurl,
				type: "POST",
				data: searchValues,
				beforeSend: function() {
					loadingIndicator.fadeIn(50);
				},
				success: function(response) {
					if (response === 0) {
						response = "";
					} else {
						results.html(response);
					}
				},
				complete: function() {
					loadingIndicator.fadeOut(200);
					results.slideDown(400);
				}
			});
		},
		overlayMenuToggle: function() {
			var overlayMenu = jQuery('#overlay-menu'),
				overlayMenuItemHeight = Math.floor(overlayMenu.find('nav ul').height() / overlayMenu.find('ul.menu > li').length) - 5,
				overlayMenuItemFS = Math.floor(overlayMenuItemHeight * 0.5);

			if (overlayMenuItemFS > 60) {
				overlayMenuItemFS = 60;
			}

			overlayMenu.find('li').css('height', overlayMenuItemHeight + 'px').css('font-size', overlayMenuItemFS + 'px').css('line-height', overlayMenuItemHeight - 20 + 'px');

			if (body.hasClass('overlay-menu-open')) {
				body.removeClass('overlay-menu-open');
				body.addClass('overlay-menu-closing');
				setTimeout(function() {
					jQuery('#main-nav,#main-navigation').fadeIn(400);
				}, 200);
			} else {
				setTimeout(function() {
					body.removeClass('overlay-menu-closing');
					body.addClass('overlay-menu-open');
					jQuery('#main-nav,#main-navigation').fadeOut(300);
				}, 30);
			}
		}
	};


	/////////////////////////////////////////////
	// NAVIGATION
	/////////////////////////////////////////////

	SWIFT.nav = {
		init: function() {

			// Set up Mega Menu
			if (!isMobile || $window.width() > 768) {
				SWIFT.nav.mainMenu();
			}

			// Set up Mobile Menu
			SWIFT.nav.mobileMenuInit();

			// Add main menu actions
			SWIFT.nav.mainMenuActions();

		},
		mainMenu: function() {
			
			var breakWidth = 767;
			
			if ( body.hasClass('vertical-header') ) {
				breakWidth = 724;
			}
			jQuery("#main-navigation").find('.menu li.parent > a[href="#"], .menu li.menu-item-has-children > a[href="#/"]').attr("aria-expanded", "false").attr("aria-haspopup", "true").parent().addClass("sub-menu-click-reveal");
			
			jQuery("#main-navigation").find('.menu li.menu-item.sub-menu-click-reveal').off();
			jQuery("#main-navigation").find('.menu li.menu-item.sub-menu-click-reveal').find('ul.sub-menu,.mega-menu-sub').hide();
			jQuery("#main-navigation").find('.menu li.menu-item.sub-menu-click-reveal > a[href="#"], .menu li.menu-item.sub-menu-click-reveal > a[href="#/"]').unbind("click").off().on("click", function (e) {
				e.preventDefault();
				if ( !jQuery(this).parent().hasClass("show-submenu") ) {
					if (jQuery('#container').width() > breakWidth || body.hasClass('responsive-fixed')) {
						jQuery(this).attr("aria-expanded", "true");
						jQuery(this).parent().removeClass("accessibility-focus-menu");
						jQuery(this).parent().addClass("show-submenu");
						jQuery(this).parent().find('ul.sub-menu,.mega-menu-sub').first().fadeIn(200);
					}
				} else {
					if (jQuery('#container').width() > breakWidth || body.hasClass('responsive-fixed')) {
						jQuery(this).attr("aria-expanded", "false").parent().removeClass("show-submenu");
						jQuery(this).parent().find('ul.sub-menu,.mega-menu-sub').first().fadeOut(150);
					}
				}
				return false;
			});
			jQuery("#main-navigation").find(".menu li.menu-item:not(.sub-menu-click-reveal) > a").unbind("click").off().on("click", function (e) {
				window.location.href = jQuery(this).prop("href");
			});
			jQuery("#main-navigation").find(".menu li.menu-item:not(.sub-menu-click-reveal)").hoverIntent({
				over: function() {
					if (jQuery('#container').width() > breakWidth || body.hasClass('responsive-fixed')) {
						jQuery(this).find('ul.sub-menu,.mega-menu-sub').first().fadeIn(200);
					}
				},
				out:function() {
					if (jQuery('#container').width() > breakWidth || body.hasClass('responsive-fixed')) {
						jQuery(this).find('ul.sub-menu,.mega-menu-sub').first().fadeOut(150);
					}
				},
				timeout: 0
			});

			jQuery("#main-navigation").find(".menu li.menu-item.parent > a, .menu li.menu-item.menu-item-has-children > a").focus(function () {
				if (jQuery('#container').width() > breakWidth || body.hasClass('responsive-fixed')) {
					var $link = jQuery(this);
					var $menu = $link.parents("ul.menu");
					var $parent = $link.parent();
					var $submenu = $parent.find('ul.sub-menu,.mega-menu-sub').first();
					$submenu.stop( true, true ).fadeIn(200, function () {
						jQuery(this).parent().removeClass("accessibility-focus-menu");
						jQuery(this).parent().addClass("show-submenu").find("> a").attr("aria-expanded", "true");
					});
				}
			});

			// Set sub-menu position based on menu height
			var mainNav = jQuery('#main-navigation'),
				mainNavHeight = mainNav.height(),
				subMenu = mainNav.find('.sub-menu');

			subMenu.each(function() {
				jQuery(this).css('top', mainNavHeight);
			});
		},
		mainMenuActions: function() {
		
			var breakWidth = 767;
			
			if ( body.hasClass('vertical-header') ) {
				breakWidth = 724;
			}
			
			// Add parent class to items with sub-menus
			jQuery("ul.sub-menu").parents('li').addClass('parent');
			jQuery("#main-navigation").find('.menu li.parent > a[href="#"], .menu li.menu-item-has-children > a[href="#/"]').attr("aria-expanded", "false").attr("aria-haspopup", "true").parent().addClass("sub-menu-click-reveal");

			// Menu parent click function
			jQuery("#main-navigation").find('.menu li.parent > a, .menu li.menu-item-has-children > a').on('click', function(e) {

				e.preventDefault();

				if (jQuery('#container').width() < 1024 || body.hasClass('standard-browser')) {
					return e;
				}

				var directDropdown = jQuery(this).parent().find('ul.sub-menu').first();

				if (directDropdown.css('opacity') === '1' || directDropdown.css('opacity') === 1) {
					return e;
				} else {
					e.preventDefault();
				}
			});

			// Set Standard Sub Menu Top Position
			jQuery("nav.std-menu").find(".menu li").each(function() {
				var top = jQuery(this).outerHeight();
				jQuery(this).find('ul.sub-menu').first().css('top', top);
			});

			// Enable hover dropdowns for window size above tablet width
			jQuery("nav.std-menu").find('.menu li.parent.sub-menu-click-reveal, .menu li.menu-item-has-children.sub-menu-click-reveal').off();
			jQuery("nav.std-menu").find('.menu li.parent.sub-menu-click-reveal, .menu li.menu-item-has-children.sub-menu-click-reveal').find('ul.sub-menu').hide();
			jQuery("nav.std-menu").find('.menu li.parent.sub-menu-click-reveal > a[href="#"], .menu li.menu-item-has-children.sub-menu-click-reveal > a[href="#/"]').unbind("click").off().on("click", function (e) {
				e.preventDefault();
				if ( !jQuery(this).parent().hasClass("show-submenu") ) {
					if (jQuery('#container').width() > breakWidth || body.hasClass('responsive-fixed')) {
						jQuery(this).attr("aria-expanded", "true");
						jQuery(this).parent().removeClass("accessibility-focus-menu");
						jQuery(this).parent().addClass("show-submenu");
						jQuery(this).parent().find('ul.sub-menu').first().stop( true, true ).fadeIn(0, function () { jQuery(".header-wrap").addClass("sub-menu-open"); });
					}
				} else {
					if (jQuery('#container').width() > breakWidth || body.hasClass('responsive-fixed')) {
						jQuery(this).attr("aria-expanded", "false").parent().removeClass("show-submenu accessibility-focus-menu");
						jQuery(".header-wrap").removeClass("sub-menu-open");
						jQuery(this).parent().find('.sub-menu').first().stop( true, true ).fadeOut(0);
					}
				}
				return false;
			});
			jQuery("nav.std-menu").find(".menu li.parent:not(.sub-menu-click-reveal) > a, .menu li.menu-item-has-children:not(.sub-menu-click-reveal) a").unbind("click").off().on("click", function (e) {
				window.location.href = jQuery(this).prop("href");
			});
			jQuery("nav.std-menu").find('.menu li.parent:not(.sub-menu-click-reveal), .menu li.menu-item-has-children:not(.sub-menu-click-reveal)').hoverIntent({
				over: function() {
					if (jQuery('#container').width() > breakWidth || body.hasClass('responsive-fixed')) {
						jQuery(this).find('ul.sub-menu').first().stop( true, true ).fadeIn(0, function () { jQuery(".header-wrap").addClass("sub-menu-open"); });
					}
				},
				out:function() {
					if (jQuery('#container').width() > breakWidth || body.hasClass('responsive-fixed')) {
						jQuery(".header-wrap").removeClass("sub-menu-open");
						jQuery(this).find('.sub-menu').first().stop( true, true ).fadeOut(0);
					}
				},
				timeout: 0
			});

			jQuery("nav.std-menu").find(".menu li.parent > a, .menu li.menu-item-has-children > a").focus(function () {
				if (jQuery('#container').width() > breakWidth || body.hasClass('responsive-fixed')) {
					var $link = jQuery(this);
					var $menu = $link.parents("ul.menu");
					var $parent = $link.parent();
					var $submenu = $parent.find('ul.sub-menu,.mega-menu-sub').first();
					$menu.find("> .menu-item").not($link.parents()).find('ul.sub-menu,.mega-menu-sub').each(function ()  {
						jQuery(this).parent().find('ul.sub-menu,.mega-menu-sub').first().stop( true, true ).fadeOut(0, function () {
							jQuery(this).parent().removeClass("show-submenu accessibility-focus-menu").find("> a").attr("aria-expanded", "false");
						});
					});
					$submenu.stop( true, true ).fadeIn(200, function () {
						jQuery(this).parent().parent().children().removeClass("show-submenu accessibility-focus-menu").find("> a").attr("aria-expanded", "false");
						jQuery(this).parent().addClass("show-submenu accessibility-focus-menu").find("> a").attr("aria-expanded", "true");
						jQuery(this).parent().parent().children().each(function () {
							if ( !jQuery(this).hasClass("show-submenu") ) {
								jQuery(this).find("> .sub-menu").hide();
							}
						});
					});
				}
			});

			// Shopping bag hover function
			jQuery(document).on("mouseenter", "li.shopping-bag-item", function() {
				if (jQuery('#container').width() > breakWidth || body.hasClass('responsive-fixed')) {
					jQuery(this).find('ul.sub-menu').first().stop( true, true ).fadeIn(200);
				}
			}).on("mouseleave", "li.shopping-bag-item", function() {
				if (jQuery('#container').width() > breakWidth || body.hasClass('responsive-fixed')) {
					jQuery(this).find('ul.sub-menu').first().stop( true, true ).fadeOut(150);
				}
			});


			// Menu item click function
			jQuery('.menu-item').on('click', 'a', function(e) {

				var menuItem = jQuery(this),
					linkHref = menuItem.attr('href'),
					isMobileMenuItem = false,
					youtubeURL = linkHref.match(/watch\?v=([a-zA-Z0-9\-_]+)/),
					vimeoURL = linkHref.match(/^http:\/\/(www\.)?vimeo\.com\/(clip\:)?(\d+).*$/);


				if (jQuery(this).parents('nav').attr('id') === "mobile-menu") {
					isMobileMenuItem = true;
				}

				// Link to full width video overlay if link is YouTube/Vimeo
				if (youtubeURL || vimeoURL) {

					var videoURL = "";

					if (youtubeURL) {
						videoURL = 'http://www.youtube.com/embed/'+ youtubeURL[1] +'?autoplay=1&amp;wmode=transparent';
					} else if (vimeoURL) {
						videoURL = 'https://player.vimeo.com/video/'+ vimeoURL[3] +'?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1&amp;wmode=transparent';
					}

					if (videoURL !== "") {
						jQuery(this).data('video', videoURL);
						SWIFT.widgets.openFullWidthVideo(jQuery(this));
					}
					e.preventDefault();
				// Smooth Scroll
				} else if (linkHref.indexOf('#') === 0 && linkHref.length > 1) {
					var headerHeight = 0;

					if (isMobileMenuItem) {
						SWIFT.nav.mobileMenuHideTrigger();
						setTimeout(function() {
							if (body.hasClass('mh-sticky')) {
								headerHeight = jQuery('#mobile-header').height();
							}
							if (jQuery('#wpadminbar:visible').length > 0) {
								headerHeight = headerHeight + jQuery('#wpadminbar').height();
							}

							if (jQuery(linkHref).length > 0) {
								jQuery('html, body').stop().animate({
									scrollTop: jQuery(linkHref).offset().top - headerHeight + 2
								}, 1000, 'easeInOutExpo');
							}
						}, 400);
					} else {
						if (jQuery(linkHref).length > 0) {
							SWIFT.isScrolling = true;
							SWIFT.page.onePageNavGoTo(linkHref);
							setTimeout(function() {
								SWIFT.isScrolling = false;
							}, 1000);
						}
					}
					e.preventDefault();
				} else {
					if (isMobileMenuItem) {
						return;
					} else {
						return e;
					}
				}

			});


			// Set current language to top bar item
			var currentLanguage = jQuery('li.aux-languages').find('.current-language').html();
			if (currentLanguage !== "") {
				jQuery('li.aux-languages > a').html(currentLanguage);
			}

			// Set menu state on resize
			$window.smartresize( function() {
				if (jQuery('#container').width() > breakWidth || body.hasClass('responsive-fixed')) {
					var menus = jQuery('nav').find('ul.menu');
					menus.each(function() {
						jQuery(this).css("display", "");
					});
				}
			});

			// Change menu active when scroll through sections
			SWIFT.nav.currentScrollIndication();
			$window.scroll(function () {
				SWIFT.nav.currentScrollIndication();
			});
		},
		currentScrollIndication: function() {
			var adjustment = 0;

			if (body.hasClass('sticky-header-enabled')) {
				adjustment = jQuery('.header-wrap').height();
			}

			var inview = jQuery('section.row:in-viewport('+adjustment+')').attr('id');
			var menuItems = jQuery('#main-navigation .menu li a');
			var link = menuItems.filter('[href="#' + inview + '"]');

			menuItems.parent().removeClass('current-scroll-item');

			if (link.length > 0 && !link.hasClass('.current-scroll-item')) {
				menuItems.parent().removeClass('current-scroll-item');
				link.parent().addClass('current-scroll-item');
			}
		},
		mobileMenuInit: function() {

			// Check if admin bar present
			if (jQuery('#wpadminbar:visible').length > 0) {
				var topPadding = 54;

				if (body.hasClass('mh-overlay')) {
					jQuery('.mobile-overlay-close').css('top', topPadding + 'px');
					topPadding = topPadding + 40;
				}

				jQuery('#mobile-menu-wrap').css('padding-top', topPadding + 'px');
				jQuery('#mobile-cart-wrap').css('padding-top', topPadding + 'px');
			}

			// Mobile Logo click
			jQuery('#mobile-logo > a').on('click touchstart', function(e) {
				if (body.hasClass('mobile-menu-open') || body.hasClass('mobile-cart-open') || body.hasClass('mobile-menu-closing')) {
					return false;
				} else {
					return e;
				}
			});

			// Mobile Nav show
			jQuery('.mobile-menu-link').on('click', function(e) {
				e.preventDefault();

				if (body.hasClass('mh-overlay')) {
					SWIFT.nav.mobileHeaderOverlay('menu');
				} else {
					if (body.hasClass('mobile-menu-open')) {
						if (isAndroid) {
							return;
						}
						SWIFT.nav.mobileMenuHideTrigger();
					} else {
						SWIFT.nav.showMobileMenu();
					}
				}
			});

			// Mobile Cart show
			jQuery('.mobile-cart-link').on('click', function(e) {
				e.preventDefault();

				if (body.hasClass('mh-overlay')) {
					SWIFT.nav.mobileHeaderOverlay('cart');
				} else {
					if (body.hasClass('mobile-menu-open')) {
						if (isAndroid) {
							return;
						}
						SWIFT.nav.mobileMenuHideTrigger();
					} else {
						SWIFT.nav.showMobileCart();
					}
				}
			});

			// Mobile Overlay Close
			jQuery('.mobile-overlay-close').on('click', function(e) {
				e.preventDefault();
				if (body.hasClass('mh-cart-show')) {
					jQuery('#mobile-cart-wrap').animate({
						'opacity': 0
					}, 500, 'easeOutQuart');
					setTimeout(function() {
						body.removeClass('mh-overlay-show');
						body.removeClass('mh-cart-show');
					}, 500);
				} else if (body.hasClass('mh-menu-show')) {
					jQuery('#mobile-menu-wrap').animate({
						'opacity': 0
					}, 500, 'easeOutQuart', function() {
						body.removeClass('mh-overlay-show');
						body.removeClass('mh-menu-show');
				  	});
				}
			});

			// Mobile Menu parent click
			jQuery('#mobile-menu li > a').on('click', function(e) {
				var parentMenuItem = jQuery(this).parent(),
					linkHref = jQuery(this).attr('href'),
					linkTarget = jQuery(this).attr('target'),
					subMenu = parentMenuItem.find('ul.sub-menu');

				if ( body.hasClass("mh-overlay") ) {
					jQuery('#mobile-menu-wrap').animate({
						'opacity': 0
					}, 500, 'easeOutQuart', function() {
						body.removeClass('mh-overlay-show');
						body.removeClass('mh-menu-show');
			  		});
				}

				if ( jQuery(this).parent().hasClass("sub-menu-click-reveal") ) {
					if ( jQuery(this).parent().hasClass("show-submenu") ) {
						subMenu.parent("li").removeClass('show-submenu').find("> a").attr("aria-expanded", "false");
						subMenu.removeClass('sub-menu-open');
					} else {
						subMenu.parent("li").addClass('show-submenu').find("> a").attr("aria-expanded", "true");
						subMenu.addClass('sub-menu-open');
					}
					e.preventDefault();
					
				} else if (linkHref.indexOf('#') === 0 && linkHref.length > 1) {
					var headerHeight = 0;

					SWIFT.nav.mobileMenuHideTrigger();
					setTimeout(function() {
						if (body.hasClass('mh-sticky')) {
							headerHeight = jQuery('#mobile-header').height();
						}
						if (jQuery('#wpadminbar:visible').length > 0) {
							headerHeight = headerHeight + jQuery('#wpadminbar').height();
						}

						if (jQuery(linkHref).length > 0) {
							jQuery('html, body').stop().animate({
								scrollTop: jQuery(linkHref).offset().top - headerHeight + 2
							}, 1000, 'easeInOutExpo');
						}
					}, 400);

					e.preventDefault();

				} else {

					if (!parentMenuItem.hasClass('parent') || subMenu.css('display') != "none" ) {
						SWIFT.nav.mobileMenuHideTrigger();

						if (body.hasClass('page-transitions')) {
							SWIFT.page.fadePageOut(linkHref);
						}

						if (body.hasClass('mh-sticky')) { 
							jQuery('#mobile-header').css({'position': 'fixed', 'top': '0'});
						}
						
						setTimeout(function() {
							if ( linkTarget != "_blank" ) {
								window.location.href = linkHref;	
							} else {
								window.open(linkHref);
							}
							if (body.hasClass('mh-sticky')) {
								jQuery('html, body').stop().animate({
									scrollTop: '-=50px'
								}, 1000, 'easeInOutExpo');
							}
						}, 400);
					} else {
						subMenu.parent("li").addClass('show-submenu').find("> a").attr("aria-expanded", "true");
						subMenu.addClass('sub-menu-open');
						e.preventDefault();
					}
				}
			});

			// Swipe to hide mobile menu
			jQuery("#mobile-menu-wrap").swipe({
				swipeLeft:function() {
					if (!body.hasClass('mobile-header-center-logo-alt') && !body.hasClass('mobile-header-left-logo')) {
						SWIFT.nav.mobileMenuHideTrigger();
					}
				},
				swipeRight:function() {
					if (body.hasClass('mobile-header-center-logo-alt') || body.hasClass('mobile-header-left-logo')) {
						SWIFT.nav.mobileMenuHideTrigger();
					}
				},
			});

			// Swipe to hide mobile cart
			jQuery("#mobile-cart-wrap").swipe( {
				swipeLeft:function() {
					if (body.hasClass('mobile-header-center-logo-alt') || body.hasClass('mobile-header-right-logo') || body.hasClass('mobile-header-center-logo')) {
						SWIFT.nav.mobileMenuHideTrigger();
					}
				},
				swipeRight:function() {
					if (!body.hasClass('mobile-header-center-logo-alt') && !body.hasClass('mobile-header-right-logo')) {
						SWIFT.nav.mobileMenuHideTrigger();
					}
				},
			});

			// Hide on resize
			$window.smartresize( function() {

				var windowWidth = $window.width();

				if (windowWidth > 1024 && body.hasClass('mhs-tablet-land')) {
					SWIFT.nav.mobileMenuHideTrigger();
				} else if (windowWidth > 991 && body.hasClass('mhs-tablet-port')) {
					SWIFT.nav.mobileMenuHideTrigger();
				} else if (windowWidth > 767 && body.hasClass('mhs-mobile')) {
					SWIFT.nav.mobileMenuHideTrigger();
				}

			});

		},
		showMobileMenu: function() {

			if ( jQuery("body.mh-slideout").length > 0 ) {
				var offset = 0;
				if ( jQuery("#wpadminbar:visible").length > 0 ) {
					var adminOffset = jQuery("#wpadminbar").height() - $window.scrollTop();
					if ( adminOffset < 0 ) {
						adminOffset = 0;
					}
					offset = offset + adminOffset;
				}
				jQuery("#mobile-menu-wrap.menu-type-slideout").css("top", offset+"px");
			} else if ( jQuery("body.mh-dropdown").length > 0 ) {
				var offset = parseInt(jQuery("header#mobile-header").css("height"));
				if ( jQuery("#wpadminbar:visible").length > 0 ) {
					var adminOffset = jQuery("#wpadminbar").height() - $window.scrollTop();
					if ( adminOffset < 0 ) {
						adminOffset = 0;
					}
					offset = offset + adminOffset;
					if ( jQuery("body:not(.mh-sticky)").length > 0 ) {
						offset = offset;
					}
				}
				jQuery("#mobile-menu-wrap.menu-type-dropdown").css("top", offset+"px");
			}

			jQuery('#mobile-menu-wrap').css('display', 'block');
			body.addClass('mobile-menu-open');

			var windowTop = ( jQuery(window).scrollTop() - parseInt(jQuery("#container").css("border-width")) ) + "px";

			if (jQuery('#mobile-header').length > 0 && parseInt(windowTop) > 0 && body.hasClass('mh-sticky')) {
				if ( $window.width() <= 782 && jQuery("#wpadminbar:visible").length > 0 ) {
					jQuery('#mobile-header').css('position', 'absolute').css('top', ( parseInt(windowTop) - jQuery("#wpadminbar").height() ) + "px");
				} else {
					jQuery('#mobile-header').css('position', 'absolute').css('top', windowTop);
				}
			}

			if ( jQuery("#header-sticky-wrapper.is-sticky #header").length > 0 ) {
				jQuery("#header-sticky-wrapper.is-sticky #header").css("top", windowTop);
			}

			if ( jQuery("body.mh-dropdown").length > 0 ) {
				if ( jQuery("body:not(.mh-sticky) #mobile-menu-wrap.menu-type-dropdown").length > 0 ) {
					var menuHeight = jQuery("#mobile-menu-wrap .mobile-menu").height();
					jQuery("#mobile-header").css("margin-bottom", menuHeight + "px");
					jQuery("#mobile-menu-wrap").css("min-height", menuHeight + "px");
				}
			}

			setTimeout(function() {
				jQuery('#container').on('click touchstart', SWIFT.nav.mobileMenuHideTrigger);
			}, 400);

		},
		hideMobileMenu: function() {
			body.removeClass('mobile-menu-open');
			if ( jQuery("body.mh-dropdown").length > 0 ) {
				if ( jQuery("body:not(.mh-sticky) #mobile-menu-wrap.menu-type-dropdown").length > 0 ) {
					jQuery("#mobile-menu-wrap").hide();
					jQuery("#mobile-header").css("margin-bottom", "0px !important");
					jQuery("#mobile-menu-wrap #mobile-menu .sub-menu-open").each( function() { jQuery(this).parent("li").removeClass('show-submenu').find("> a").attr("aria-expanded", "false"); jQuery(this).removeClass("sub-menu-open"); } );
				}
			}
			setTimeout(function() {
				jQuery('#mobile-menu-wrap').css('display', 'none');
				if (jQuery('#mobile-header-sticky-wrapper.sticky-wrapper').length > 0 && jQuery('#mobile-header-sticky-wrapper.sticky-wrapper').hasClass('is-sticky')) {
					if ( jQuery("#wpadminbar:visible").length > 0 ) {
						jQuery('#header').css('position', 'fixed').css('top', jQuery("#wpadminbar").height());
					} else {
						jQuery('#header').css('position', 'fixed').css('top', '0');
					}
				} else {
					jQuery('#header').css('position', 'relative').css('top', '0px');
				}
				jQuery('#container').off('click touchstart', SWIFT.nav.mobileMenuHideTrigger);
				body.removeClass('mobile-menu-closing');
			}, 300);
		},
		showMobileCart: function() {
			var windowTop = $window.scrollTop();
			if (jQuery('#wpadminbar:visible').length > 0) {
				windowTop = windowTop - jQuery('#wpadminbar').height();
			}
			if (windowTop > 0 && body.hasClass('mh-sticky')) {
				jQuery('#mobile-header').css('position', 'absolute').css('top', windowTop);
			}

			jQuery('#mobile-cart-wrap').css('display', 'block');
			body.addClass('mobile-menu-open');
			body.addClass('mobile-cart-open');
			setTimeout(function() {
				jQuery('#container').on('click touchstart', SWIFT.nav.mobileMenuHideTrigger);
			}, 400);
		},
		mobileMenuHideTrigger: function(e) {
            if (e != null) {
                e.preventDefault();
            }
			body.addClass('mobile-menu-closing');
			SWIFT.nav.hideMobileMenu();
		},
		mobileHeaderOverlay: function(type) {

			if (type === "menu") {
				jQuery('#mobile-menu-wrap').css('display', 'block');
				body.addClass('mh-overlay-show');
				body.addClass('mh-menu-show');
				jQuery('#mobile-menu-wrap').animate({
					'opacity': 1
				}, 500, 'easeOutQuart');
			} else if (type === "cart") {
				jQuery('#mobile-cart-wrap').css('display', 'block');
				body.addClass('mh-overlay-show');
				body.addClass('mh-cart-show');
				jQuery('#mobile-cart-wrap').animate({
					'opacity': 1
				}, 500, 'easeOutQuart');
			}

		}
	};


	/////////////////////////////////////////////
	// WOOCOMMERCE FUNCTIONS
	/////////////////////////////////////////////

	SWIFT.woocommerce = {
		init: function() {

			// QUANTITY FUNCTIONS
			SWIFT.woocommerce.productQuantityAdjust();

			//Wishlist Reload
			jQuery(document).on('click', '.add_to_wishlist', function(){
				
				jQuery(this).parent().parent().find('.yith-wcwl-wishlistaddedbrowse').show().removeClass("hide").addClass("show");
				jQuery(this).hide().addClass("hide").removeClass("show");

				var data = {action: 'sf_add_to_wishlist', product_id: jQuery(this).attr('data-product-id')};
				var ajaxURL = jQuery(this).attr('data-ajaxurl');

				jQuery.post(ajaxURL, data, function(response) {
					var json = jQuery.parseJSON(response);

					jQuery('.wishlist-item .bag-contents').prepend(json.wishlist_output);
				    jQuery('.wishlist-link .count').text(parseInt(jQuery('.wishlist-link .count').text())+1);

				});

			});

			jQuery('.add_to_cart_button').on('click', function() {
				var button = jQuery(this);
				var added_text = button.attr("data-added_text");
				button.addClass("product-added");
				button.find('span').text(added_text);
				button.find('i').attr('class', 'fa-check');
			});

			jQuery('.show-products-link').on('click', function(e) {
				e.preventDefault();
				var linkHref = jQuery(this).attr('href').replace('?', ''),
					currentURL = document.location.href.replace(/\/page\/\d+/, ''),
					currentQuery = document.location.search;

				if (currentQuery.indexOf('?show') >= 0) {
					window.location = jQuery(this).attr('href');
				} else if (currentQuery.indexOf('?') >= 0) {
					window.location = currentURL + '&' + linkHref;
				} else {
					window.location = currentURL + '?' + linkHref;
				}
			});

			jQuery('.shipping-calculator-form input').keypress(function(e) {
				if(e.which == 10 || e.which == 13) {
					jQuery(".update-totals-button button").click();
				}
			});

			if (jQuery('.product-grid').length > 0) {

				if (!jQuery('.inner-page-wrap').hasClass('full-width-shop')) {
					var productGrid = jQuery('.product-grid');
					productGrid.imagesLoaded(function () {
						productGrid.equalHeights();
					});

					$window.smartresize( function() {
						jQuery('.product-grid').children().css('min-height','0');
						jQuery('.product-grid').equalHeights();
					});
				}
			}
		},
		load: function() {

			if (jQuery('.woocommerce-shop-page').hasClass('full-width-shop') && !(IEVersion && IEVersion < 9)) {
				SWIFT.woocommerce.fullWidthShop();
			}

		},
		cartWishlist: function() {
			// Cart remove product
			jQuery(document).on('click', '.shopping-bag .remove-product', function(e) {
	
				e.preventDefault();
				e.stopPropagation();
				
				var prod_id = jQuery(this).attr('data-product-id'),
				    variation_id = jQuery(this).attr('data-variation-id'),
				 	prod_quantity = jQuery(this).attr('data-product-qty'),
					empty_bag_txt = jQuery('.shopping-bag').attr('data-empty-bag-txt'),
					singular_item_txt = jQuery('.shopping-bag').attr('data-singular-item-txt'),
					multiple_item_txt = jQuery('.shopping-bag').attr('data-multiple-item-txt'),
					data = {action: 'sf_cart_product_remove', product_id: prod_id, variation_id: variation_id},
					ajaxURL = jQuery(this).attr('data-ajaxurl');
		
					jQuery('.shopping-bag .loading-overlay').fadeIn(200);
		
					jQuery.post(ajaxURL, data, function(response) {
		
						var cartTotal = response;
						var cartcounter = 0;
						
						if ( body.hasClass('woocommerce-checkout') ) {
							jQuery('.shopping-bag').find(".bag-button")[0].click();
						}
						
						if ( body.hasClass('woocommerce-cart') ) {
							location.reload();
						}
						  		
						jQuery('.shopping-bag .loading-overlay').fadeOut(100);
		
						cartcounter = parseInt(jQuery('.cart-contents .num-items').first().text()) - prod_quantity;
						jQuery('.cart-contents .amount').replaceWith(cartTotal);
						jQuery('.bag-total .amount').replaceWith(cartTotal);
						jQuery('.cart-contents .num-items').text(cartcounter);
		
						jQuery('.cart-contents .num-items').each(function( index ) {
							jQuery(this).text(cartcounter);
						});
		
						if ( variation_id > 0 ){
							jQuery('.product-var-id-'+variation_id).remove();
						}else{
							jQuery('.product-id-'+prod_id).remove();	
						}
		
						if ( cartcounter <= 0 ) {
							jQuery('.sub-menu .shopping-bag').prepend('<div class="bag-empty">' + empty_bag_txt + '</div>');
							jQuery('.sub-menu .shopping-bag .bag-buttons').remove();
							jQuery('.sub-menu .shopping-bag .bag-header').remove();
							jQuery('.sub-menu .shopping-bag .bag-total').remove();
							jQuery('.sub-menu .shopping-bag .bag-contents').remove();
						} else {
							if ( cartcounter == 1 ) {
								jQuery('.sub-menu .shopping-bag .bag-header').text('1 ' + singular_item_txt);
							} else {
								jQuery('.sub-menu .shopping-bag .bag-header').text(cartcounter + ' ' + multiple_item_txt);
							}
						}
		
					});
				
				
	
				return false;
	
			});
				
			//Wishlist Remove a Product
			jQuery(document).on('click', '.wishlist_table .remove', function(){

			       jQuery(".prod-"+jQuery(this).attr('data-product-id')).remove();
			       var wishcounter = parseInt(jQuery('.wishlist-link .count').text())-1;
			       jQuery('.wishlist-link .count').text(wishcounter);
			       if ( wishcounter === 0 ){
				   		jQuery('.wishlist-item .bag-contents').prepend('<div class="wishlist-empty">Your wishlist is currently empty.</div>');
				   }

			});
		},
		variations: function() {
			jQuery('.variations_form select, .variations select').each( function() {
				var variationSelect = jQuery(this);
				variationSelect.on("change", function(){
					if (jQuery('#sf-included').hasClass('has-productzoom')) {
						jQuery('.zoomContainer').remove();
						setTimeout(function() {
							jQuery('.product-slider-image').each(function() {
								jQuery(this).data('zoom-image', jQuery(this).parent().find('a.zoom').attr('href'));
							});
							var firstImage = jQuery('#product-img-slider li:first').find('.product-slider-image');
							SWIFT.woocommerce.productZoom(firstImage);
							jQuery('#product-img-slider').flexslider(0);
						}, 500);
					} else {
						setTimeout(function() {
							jQuery('#product-img-slider').flexslider(0);
							var flexViewport = jQuery('#product-img-slider').find('.flex-viewport'),
							flexsliderHeight = flexViewport.find('ul.slides').css('height');

							flexViewport.animate({
								'height': flexsliderHeight
							}, 300);
						}, 500);
					}
				});
			});
		},
		productZoom: function(zoomObject) {
			jQuery('#product-img-slider li a.zoom').css('display', 'none');
			zoomObject.elevateZoom({
				zoomType: productZoomType,
				cursor: "crosshair",
				zoomParent: '#product-img-slider',
				responsive: true,
				zoomWindowFadeIn: 400,
				zoomWindowFadeOut: 500,
				lensSize: 250
			});
			$window.smartresize( function() {
				var currentImage = jQuery('#product-img-slider li.flex-active-slide').find('.product-slider-image');
				if (!currentImage) {
					jQuery('#product-img-slider li:first').find('.product-slider-image');
				}
				SWIFT.woocommerce.productZoom(currentImage);
			});
		},
		fullWidthShop: function() {
			var shopItems = jQuery('.full-width-shop').find('.products'),
				itemWidth = shopItems.find('div.product').first().data('width'),
				shopSidebar = shopItems.find('.sidebar');

			if (shopSidebar.length > 0) {

				// Full Width Shop Sidebar
				SWIFT.woocommerce.fullWidthShopSetSidebarHeight();
				$window.smartresize( function() {
					SWIFT.woocommerce.fullWidthShopSetSidebarHeight();
				});

				shopItems.isotope({
					itemSelector: '.product',
					layoutMode: 'masonry',
					masonry: {
						columnWidth: '.'+itemWidth
					},
					isOriginLeft: !isRTL
				});

				SWIFT.woocommerce.animateItems(shopItems);

				shopSidebar.stop().animate({
					'opacity': 1
				}, 500);
				shopItems.isotope( 'stamp', shopSidebar );
				shopItems.isotope('layout');

			} else {

				shopItems.isotope({
					itemSelector: '.product',
					layoutMode: 'fitRows',
					isOriginLeft: !isRTL
				});

				SWIFT.woocommerce.animateItems(shopItems);

			}
		},
		fullWidthShopSetSidebarHeight: function() {
			var shopItems = jQuery('.full-width-shop').find('.products'),
				shopSidebar = shopItems.find('div.sidebar'),
				defaultSidebarHeight = shopSidebar.css('height', '').outerHeight(),
				newSidebarHeight = 0,
				sidebarHeightMultiply = 2,
				firstProductHeight = shopItems.find('div.product').first().outerHeight(true);

			sidebarHeightMultiply = Math.ceil(defaultSidebarHeight / firstProductHeight);
			newSidebarHeight = firstProductHeight * sidebarHeightMultiply;
			shopSidebar.css('height', newSidebarHeight);
		},
		animateItems: function(shopItems) {
			shopItems.find('.product').each(function(i) {
				jQuery(this).delay(i*200).animate({
					'opacity' : 1
				}, 800, 'easeOutExpo', function() {
					jQuery(this).addClass('item-animated');
				});
			});
		},
		productQuantityAdjust: function() {

			// Increase
			jQuery(document).on('click', '.qty-plus', function(e) {
				e.preventDefault();
				var quantityInput = jQuery(this).parents('.quantity').find('input.qty'),
					newValue = parseInt(quantityInput.val(), 10) + 1,
					maxValue = parseInt(quantityInput.attr('max'), 10);

				if (!maxValue) {
					maxValue = 9999999999;
				}

				if ( newValue <= maxValue ) {
					quantityInput.val(newValue);
					quantityInput.change();
				}
			});

			// Decrease
			jQuery(document).on('click', '.qty-minus', function(e) {
				e.preventDefault();
				var quantityInput = jQuery(this).parents('.quantity').find('input.qty'),
					newValue = parseInt(quantityInput.val(), 10) - 1,
					minValue = parseInt(quantityInput.attr('min'), 10);
				
				if (!minValue) {
					minValue = 1;
				}

				if ( newValue >= minValue ) {
					quantityInput.val(newValue);
					quantityInput.change();
				}
			});

		}
	};

	/////////////////////////////////////////////
	// FLEXSLIDER FUNCTION
	/////////////////////////////////////////////

	SWIFT.flexSlider = {
		init: function() {

			if (jQuery('#product-img-slider').length > 0) {
				SWIFT.flexSlider.productSlider();
			}

			jQuery('.item-slider').flexslider({
				useCSS: flexUseCSS,
				animation: "slide",              //String: Select your animation type, "fade" or "slide"
				slideDirection: "horizontal",   //String: Select the sliding direction, "horizontal" or "vertical"
				slideshow: sliderAuto,	//Boolean: Animate slider automatically
				slideshowSpeed: sliderSlideSpeed,           //Integer: Set the speed of the slideshow cycling, in milliseconds
				animationDuration: sliderAnimSpeed,			//Integer: Set the speed of animations, in milliseconds
				rtl: isRTL,
				smoothHeight: true,
				directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
				controlNav: true,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
				keyboardNav: false,              //Boolean: Allow slider navigating via keyboard left/right keys
				mousewheel: false,              //Boolean: Allow slider navigating via mousewheel
				prevText: "Prev",           //String: Set the text for the "previous" directionNav item
				nextText: "Next",               //String: Set the text for the "next" directionNav item
				pausePlay: true,               //Boolean: Create pause/play dynamic element
				pauseText: '',             //String: Set the text for the "pause" pausePlay item
				playText: '',               //String: Set the text for the "play" pausePlay item
				randomize: false,               //Boolean: Randomize slide order
				slideToStart: 0,                //Integer: The slide that the slider should start on. Array notation (0 = first slide)
				animationLoop: true,            //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
				pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
				pauseOnHover: false,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
				controlsContainer: "",          //Selector: Declare which container the navigation elements should be appended too. Default container is the flexSlider element. Example use would be ".flexslider-container", "#container", etc. If the given element is not found, the default action will be taken.
				manualControls: "",             //Selector: Declare custom control navigation. Example would be ".flex-control-nav li" or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
				start: function(){},            //Callback: function(slider) - Fires when the slider loads the first slide
				before: function(){},           //Callback: function(slider) - Fires asynchronously with each slider animation
				after: function(){},      //Callback: function(slider) - Fires after each slider animation completes
				end: function(){}               //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
			});
			jQuery('.content-slider').each(function() {
				var slider = jQuery(this),
					autoplay = ((slider.attr('data-autoplay') === "yes") ? true : false);

				slider.flexslider({
					useCSS: flexUseCSS,
					animation: "fade",              //String: Select your animation type, "fade" or "slide"
					slideshow: autoplay,	//Boolean: Animate slider automatically
					slideshowSpeed: sliderSlideSpeed,           //Integer: Set the speed of the slideshow cycling, in milliseconds
					animationDuration: sliderAnimSpeed,			//Integer: Set the speed of animations, in milliseconds
					smoothHeight: true,
					directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
					rtl: isRTL,
					controlNav: false,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
					prevText: "",           //String: Set the text for the "previous" directionNav item
					nextText: "",               //String: Set the text for the "next" directionNav item
					pauseOnHover: true,
					start: function() {
						SWIFT.flexSlider.slideEqualHeights();
						$window.smartresize( function() {
							SWIFT.flexSlider.slideEqualHeights();
						});
					}
				});
			});
		},
		productSlider: function() {

			if (jQuery('#product-img-nav ul.slides li').length > 1) {
				jQuery('#product-img-nav').flexslider({
					animation: "slide",
					rtl: isRTL,
					useCSS: flexUseCSS,
					directionNav: false,
					controlNav: false,
					animationLoop: false,
					slideshow: false,
					itemWidth: 100,
					itemMargin: 0,
					asNavFor: '#product-img-slider'
				});
			} else {
				jQuery('#product-img-nav').css('display', 'none');
			}

			jQuery('#product-img-slider').flexslider({
				useCSS: flexUseCSS,
				animation: "slide",
				controlNav: true,
				smoothHeight: true,
				animationLoop: false,
				slideshow: sliderAuto,
				slideshowSpeed: sliderSlideSpeed,           //Integer: Set the speed of the slideshow cycling, in milliseconds
				animationDuration: sliderAnimSpeed,			//Integer: Set the speed of animations, in milliseconds
				rtl: isRTL,
				sync: '#product-img-nav',
				start: function(productSlider) {
					if (hasProductZoom) {
						if (productSlider.slides) {
							var currentImageHasSlides = productSlider.slides.eq(productSlider.currentSlide).find('.product-slider-image');
							SWIFT.woocommerce.productZoom(currentImageHasSlides);
						} else {
							var currentImageNoSlides = jQuery('#product-img-slider').find('.product-slider-image');
							SWIFT.woocommerce.productZoom(currentImageNoSlides);
						}
					}
				},
				before: function() {
					if (hasProductZoom) {
						jQuery('.zoomContainer').remove();
					}
				},
				after: function(productSlider) {
					if (hasProductZoom) {
						var currentSlideImage = productSlider.slides.eq(productSlider.currentSlide).find('.product-slider-image');
						SWIFT.woocommerce.productZoom(currentSlideImage);
					}
				}
			});
		},
		thumb: function() {
			jQuery('.thumb-slider').flexslider({
				animation: "fade",              //String: Select your animation type, "fade" or "slide"
				slideDirection: "horizontal",   //String: Select the sliding direction, "horizontal" or "vertical"
				slideshow: sliderAuto,	//Boolean: Animate slider automatically
				slideshowSpeed: sliderSlideSpeed,           //Integer: Set the speed of the slideshow cycling, in milliseconds
				animationDuration: sliderAnimSpeed,         //Integer: Set the speed of animations, in milliseconds
				directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
				controlNav: false,               //Boolean: Create navigation for paging control of each slide? Note: Leave true for manualControls usage
				keyboardNav: false,              //Boolean: Allow slider navigating via keyboard left/right keys
				smoothHeight: true,
				rtl: isRTL
			});
		},
		slideEqualHeights: function() {
			setTimeout(function() {
				jQuery('.content-slider').find('.slide-content-wrap').css('position', 'relative');
				jQuery('.content-slider > ul').equalHeights();
				jQuery('.content-slider').find('.slide-content-wrap').vCenterTop();
				jQuery('.content-slider').find('.slide-content-wrap').css('position', 'absolute');
			}, 200);
		}
	};

	/////////////////////////////////////////////
	// PORTFOLIO
	/////////////////////////////////////////////

	var portfolioContainer = jQuery('.portfolio-wrap').find('.filterable-items');

	SWIFT.portfolio = {
		init: function() {
			portfolioContainer.each(function() {
				var portfolioInstance = jQuery(this);
				if (portfolioInstance.hasClass('masonry-items') && !(IEVersion && IEVersion < 9)) {
					SWIFT.portfolio.masonrySetup(portfolioInstance);
				} else if (portfolioInstance.hasClass('multi-masonry-items') && !(IEVersion && IEVersion < 9)) {
					SWIFT.portfolio.multiMasonrySetup(portfolioInstance);
				} else {
					SWIFT.portfolio.standardSetup(portfolioInstance);
				}
			});

			// PORTFOLIO WINDOW RESIZE
			$window.smartresize( function() {
				SWIFT.portfolio.windowResized();
			});

			// Enable filter options on when there are items from that skill
			jQuery('.filtering li').each( function() {
				var filter = jQuery(this),
					filterName = jQuery(this).find('a').attr('class'),
					portfolioItems = jQuery(this).parents('.portfolio-wrap').find('.filterable-items');

				portfolioItems.find('.portfolio-item').each( function() {
					if ( jQuery(this).hasClass(filterName) ) {
						filter.addClass('has-items');
					}
				});
			}).parents('.filtering').animate({
				opacity: 1
			}, 400);

			// filter items when filter link is clicked
			jQuery('.filtering li').on('click', 'a', function(e) {
				e.preventDefault();
				jQuery(this).parent().parent().find('li').removeClass('selected');
				jQuery(this).parent().addClass('selected');
				var selector = jQuery(this).data('filter');
				var portfolioItems = jQuery(this).parents('.portfolio-wrap').find('.filterable-items');
				portfolioItems.isotope({ filter: selector });
			});

			jQuery('.filter-wrap > a').on('click', function(e) {
				e.preventDefault();
				jQuery(this).parent().find('.filter-slide-wrap').slideToggle();
			});
		},
		standardSetup: function(portfolioInstance) {
			portfolioInstance.imagesLoaded(function () {
				SWIFT.portfolio.setItemHeight();
				SWIFT.flexSlider.thumb();
				portfolioInstance.animate({opacity: 1}, 800);
				portfolioInstance.isotope({
					resizable: true,
					layoutMode: 'fitRows',
					isOriginLeft: !isRTL
				});
			});
			portfolioInstance.appear(function() {
				SWIFT.portfolio.animateItems(portfolioInstance);
			});
		},
		masonrySetup: function(portfolioInstance) {
			portfolioInstance.imagesLoaded(function () {
				SWIFT.flexSlider.thumb();
				portfolioInstance.isotope({
					resizable: false,
					itemSelector : '.portfolio-item',
					layoutMode: 'masonry',
					isOriginLeft: !isRTL
				});
			});
			portfolioInstance.appear(function() {
				SWIFT.portfolio.animateItems(portfolioInstance);
			});
		},
		multiMasonrySetup: function(portfolioInstance) {
			portfolioInstance.imagesLoaded(function () {
				SWIFT.flexSlider.thumb();
				SWIFT.portfolio.multiMasonrySizeFix();
				portfolioInstance.isotope({
					resizable: false,
					itemSelector : '.portfolio-item',
					layoutMode: 'packery',
					masonry: {
						columnWidth: '.grid-sizer'
					},
					isOriginLeft: !isRTL
				});
			});
			portfolioInstance.appear(function() {
				SWIFT.portfolio.animateItems(portfolioInstance);
			});
		},
		animateItems: function(portfolioInstance) {
			portfolioInstance.find('.portfolio-item').each(function(i) {
				jQuery(this).delay(i*200).animate({
					'opacity' : 1
				}, 800, 'easeOutExpo', function() {
					jQuery(this).addClass('item-animated');
				});
			});
		},
		setItemHeight: function() {
			if (!portfolioContainer.hasClass('col-1') && !portfolioContainer.hasClass('masonry-items') && !portfolioContainer.hasClass('multi-masonry-items')) {
				portfolioContainer.children().css('min-height','0');
				portfolioContainer.equalHeights();
			}
		},
		multiMasonrySizeFix: function() {
			var baseItem = portfolioContainer.find('.portfolio-item.size-standard').first(),
				standardHeight = baseItem.height(),
				standardWidth = baseItem.width(),
				wideTallHeight = (standardHeight * 2) + parseInt(baseItem.css('margin-bottom'), 10),
				wideWidth = (standardWidth * 2) + parseInt(baseItem.css('margin-bottom'), 10);

			if (standardHeight > 0) {
				portfolioContainer.find('.portfolio-item.size-wide .multi-masonry-img-wrap').css('height', standardHeight).css('width', wideWidth + 8);
				portfolioContainer.find('.portfolio-item.size-wide-tall .multi-masonry-img-wrap').css('height', wideTallHeight).css('width', wideWidth + 8);
				portfolioContainer.find('.portfolio-item.size-tall .multi-masonry-img-wrap').css('height', wideTallHeight).css('width', standardWidth + 8);
			}
			if (portfolioContainer.data('isotope')) {
				portfolioContainer.isotope('layout');
			}
		},
		windowResized: function() {
			if (!portfolioContainer.hasClass('col-1') && !portfolioContainer.hasClass('masonry-items') && !portfolioContainer.hasClass('multi-masonry-items')) {
				SWIFT.portfolio.setItemHeight();
			}

			if (portfolioContainer.hasClass('multi-masonry-items')) {
				SWIFT.portfolio.multiMasonrySizeFix();
			}
		},
		portfolioShowcaseInit: function() {
			SWIFT.flexSlider.thumb();
			SWIFT.portfolio.portfolioShowcaseWrap();
			SWIFT.portfolio.portfolioShowcaseItems();
			$window.smartresize( function() {
				SWIFT.portfolio.portfolioShowcaseWrap();
				SWIFT.portfolio.portfolioShowcaseItems();
			});
		},
		portfolioShowcaseWrap: function() {
			var portfolioShowcaseWrap = jQuery('.portfolio-showcase-wrap');
			portfolioShowcaseWrap.animate({opacity: 1}, 600);
		},
		portfolioShowcaseItems: function() {
			jQuery('.portfolio-showcase-wrap').each(function() {

				var contWidth = jQuery('#main-container').width();

				if (jQuery('#container').hasClass('boxed-layout')) {
					contWidth = jQuery('#container').width();
				}

				var thisShowcase = jQuery(this),
					columns = thisShowcase.find('.portfolio-showcase-items').data('columns'),
					windowWidth = contWidth + 2,
					itemWidth = Math.floor(windowWidth / columns),
					maximisedWidth = Math.floor(windowWidth * 40 / 100),
					reducedWidth = Math.floor(windowWidth / 5),
					deselectedLeft = (itemWidth / 2 - maximisedWidth / 2) / 0.75,
					resetLeft = (reducedWidth / 2 - maximisedWidth / 2) / 1.3,
					isAnimating = !1,
					speed = 300;

				var showcaseItem = thisShowcase.find('li.portfolio-item');

				if (columns === 5) {
					maximisedWidth = Math.floor(windowWidth * 25 / 100);
					reducedWidth = Math.floor(windowWidth / 5.33);
					deselectedLeft = (itemWidth / 2 - maximisedWidth / 2) / 0.75;
					resetLeft = (reducedWidth / 2 - maximisedWidth / 2) / 1.3;
					showcaseItem.css("width", itemWidth);
					showcaseItem.css("height", maximisedWidth / 1.5);
					showcaseItem.find('.main-image').css("width", maximisedWidth);
					showcaseItem.find('.main-image').css("left", resetLeft);
					showcaseItem.find('.main-image').css("top", - maximisedWidth / 6);
					speed = 200;
				} else {
					showcaseItem.css("width", itemWidth);
					showcaseItem.css("height", maximisedWidth / 2);
					showcaseItem.find('.main-image').css("width", maximisedWidth);
					showcaseItem.find('.main-image').css("left", resetLeft);
				}

				showcaseItem.each(function () {
					if (windowWidth > 768) {
						jQuery(this).mouseenter(function () {
							if (!isAnimating) {
								isAnimating = !0;
								jQuery(this).removeClass("deselected-item");
								thisShowcase.find(".deselected-item").stop().animate({
									width: reducedWidth
								}, speed);
								thisShowcase.find(".deselected-item").find(".main-image").stop().animate({
									left: deselectedLeft
								}, speed);
								jQuery(this).find(".main-image").stop().animate({
									left: 0
								}, speed);
								jQuery(this).stop().animate({
									width: maximisedWidth
								}, speed + 1, function () {
									jQuery(this).find(".item-info").stop().show();
									jQuery(this).find(".item-info").stop().animate({
										bottom: 0
									}, speed, "easeInOutQuart");
								});
							}
						});
						jQuery(this).mouseleave(function () {
							if (isAnimating) {
								isAnimating = !1;
								jQuery(this).addClass("deselected-item");
								thisShowcase.find(".portfolio-item").stop().animate({
									width: itemWidth
								}, speed);
								thisShowcase.find(".portfolio-item .main-image").stop().animate({
									left: resetLeft
								}, speed);
								jQuery(this).find(".item-info").stop().animate({
									bottom: -85
								}, speed, function () {
									jQuery(this).find(".item-info").stop().hide();
								});
							}
						});
					}
				});
			});
		},
		stickyDetails: function() {

			var offset = 0,
				navSelectorElement = '.media-wrap',
				footerOffset = 160;

			if (jQuery('.page-heading').length > 0) {
				offset += jQuery('.page-heading').outerHeight(true);
			}

			if (jQuery('.inner-main-container').hasClass('portfolio-type-standard')) {
				offset += 130;
			}

			if (jQuery('.related-projects').length > 0) {
				footerOffset = 520;
			}

			jQuery('.sticky-details').stickySidebar({
				headerSelector: '.header-wrap',
				navSelector: navSelectorElement,
				contentSelector: '.article-body-wrap',
				footerSelector: '#footer-wrap',
				sidebarTopMargin: 0,
				footerThreshold: footerOffset,
				offset: offset
			});

			jQuery('.sticky-details').css('max-width', jQuery('.sticky-details').outerWidth(true));

			SWIFT.portfolio.stickyDetailsScroll();
			$window.scroll(function() {
				SWIFT.portfolio.stickyDetailsScroll();
			});
		},
		stickyDetailsScroll: function() {

			var contentElement = jQuery('.article-body-wrap');

			if (jQuery('.inner-main-container').hasClass('portfolio-type-fw-media')) {
				contentElement = jQuery('.portfolio-detail-description');
			}

			if (jQuery('.sticky-details').hasClass('sticky')) {
				jQuery('.sticky-details').css('margin-left', contentElement.outerWidth(true));
			} else {
				jQuery('.sticky-details').css('margin-left', 0);
			}
		},
	};

	/////////////////////////////////////////////
	// SPONSORS
	/////////////////////////////////////////////

	var sponsorWrap = jQuery('.spb_partner_grid_element');
	var sponsorItems = jQuery('.spb_partner_grid_element').find('.partner-grid-container');

	SWIFT.sponsor = {
		init: function() {

			sponsorWrap.update();
			sponsorItems.update();

			// Blog Equal Heights
			SWIFT.sponsor.sponsorEqualHeights(jQuery('.spb_partner_grid_element').find('.partner-grid-container.equal-heights'));

		},
		sponsorEqualHeights: function (sponsorItem) {
			sponsorItem.find(".partner").each(function () {
				jQuery(this).height( "auto" );
			});
			if ( jQuery( window ).width() > 768 ) {
				if ( sponsorItem.find("img").length > 0 ) {
					sponsorItem.imagesLoaded(function () {
						sponsorItem.equalHeights();
					});
				} else {
					sponsorItem.equalHeights();
				}
			}
		}
	};

	/////////////////////////////////////////////
	// BLOG
	/////////////////////////////////////////////

	var blogWrap = jQuery('.blog-wrap');
	var blogItems = jQuery('.blog-wrap').find('.blog-items');

	SWIFT.blog = {
		init: function() {

			if ( !blogWrap.find(".blog-items-wrap").hasClass("blog-directory") ) {

				blogWrap = jQuery('.blog-wrap');
				blogItems = jQuery('.blog-wrap').find('.blog-items');

				if ( jQuery('.blog-wrap.blog-has-filtering, .blog-wrap.blog-has-pagination').length > 1 ) {
					jQuery('.blog-wrap.blog-has-filtering, .blog-wrap.blog-has-pagination').each(function (i) {
						if (i > 0) {
							jQuery(this).remove();
						}
					});
				}

				// BLOG ITEM SETUP
				blogItems.each(function() {
					var blogInstance = jQuery(this);
					// Blog Adjust Layout
					if (blogInstance.hasClass('blog-grid-items')) {
						SWIFT.blog.blogGrid(blogInstance.find('.grid-items'),blogInstance);
					} else {
						SWIFT.blog.blogLayout(blogInstance);
					}
					if ( blogInstance.find(".blog-item").length < blogInstance.data("found-posts") ) { } else {
						blogInstance.parent().find('.load-more-btn').hide();
						blogInstance.addClass("all-posts-loaded");
					}
					SWIFT.blog.blogAlgoliaFacetCount(blogInstance);
				});

				if ( blogItems.find(".blog-item .sf-blog-modal a").length > 0 ) {
					blogItems.find(".blog-item .sf-blog-modal a").each(function () {
						if ( jQuery(this).data("postid") ) {
							jQuery(this).prop("onclick", "javascript: return false;");
							jQuery(this).off().on("click", function(e){
								e.preventDefault();
								var post = jQuery(this).attr('href');
								jQuery(this).find(".sd-modal-content").each(function () {
									jQuery(this).hide();
								});
								var template = jQuery(this).parents(".sf-blog-modal").data("template");
								if ( !template || template == "" ) {
									template = templateDirectory + "/api/modal_content.php";
								}
								var post_id = jQuery(this).data("postid");
								if ( jQuery("#modal-container .container").html() == "" ) {
									window.location.href = post;
								} else {
									SWIFT.blog.blogOpenModal(template, post, post_id, true);
								}
								return false;
							});
						} else {
							return true;
						}
					});
				}

				if ( jQuery("#close-modal, .close-modal-link").length > 0 ) {
					jQuery("#close-modal, .close-modal-link").off().on("click", function (e) {
						e.preventDefault();
						SWIFT.blog.blogCloseModal(true);
						return false;
					});
				}

			}

			// Blog Filtering
			SWIFT.blog.blogFiltersInit();

		},
		blogEqualHeights: function (blogInstance) {
			blogInstance.find(".blog-item").each(function () {
				jQuery(this).height( "auto" );
				jQuery(this).find(".details-wrap").height( "auto" );
			});
			if ( jQuery( window ).width() > 768 ) {
				if ( blogInstance.find("img").length > 0 ) {
					blogInstance.imagesLoaded(function () {
						blogInstance.equalHeights();
						blogInstance.find(".blog-item").each(function () {
							jQuery(this).find(".details-wrap").height( jQuery(this).height() - jQuery(this).find("figure").height() );
						});
						blogInstance.isotope( 'layout' );
					});
				} else {
					blogInstance.equalHeights();
					blogInstance.find(".blog-item").each(function () {
						jQuery(this).find(".details-wrap").height( jQuery(this).height() - jQuery(this).find("figure").height() );
					});	
					blogInstance.isotope( 'layout' );
				}
			}
		},
		blogOpenModal: function(template, href, post_id, pushToHistory) {
			jQuery("body").removeClass("page-modal-done").addClass("page-modal-loading");
			windowPosition = jQuery(document).scrollTop();
			jQuery(window).scrollTop(0);
			if ( jQuery("body").find(".sd-modal-content-"+post_id).length > 0 ) {
				jQuery("body").find(".sd-modal-content-"+post_id).fadeIn("fast", function () {
					jQuery(window).scrollTop(0);
				});
				jQuery("body").removeClass("page-modal-loading").addClass("page-modal-done");
			} else {
				jQuery.get( template + "?id=" + post_id, function( content ) {
					jQuery("body").find("#modal-container > .container").append('<div class="sd-modal-content sd-modal-content-' + post_id + '" data-postid="' + post_id + '">' + content + '</div>')
					SWIFT.page.injectsvgs();
					jQuery("body").find("#modal-container #close-modal").off().on("click", function (e) {
						e.preventDefault();
						jQuery("body").find(".sd-modal-content").hide();
						jQuery("body").find(".sd-modal-content iframe").each(function () {
							jQuery(this).prop("src", jQuery(this).prop("src"));
						});
						if ( jQuery("body").find("#container.force-close").length > 0 ) {
							window.history.back();
						} else {
							jQuery("body").removeClass("page-modal-open");
							jQuery(document).scrollTop(windowPosition);
						}
						jQuery("body").removeClass("page-modal-done").removeClass("page-modal-loading");
						return false;
					})
					jQuery("body").find(".sd-modal-content-"+post_id).fadeIn("fast", function () {
						jQuery(window).scrollTop(0);
					});
					jQuery("body").removeClass("page-modal-loading").addClass("page-modal-done");
				}, "html")
				.fail(function() {
					window.location.href = href;
	  			});
			}
			jQuery("body").removeClass("mobile-menu-open");
			jQuery("body").addClass("page-modal-open");
		},
		blogCloseModal: function(pushToHistory) {
			jQuery("body").find(".sd-modal-content").hide();
			jQuery("body").find(".sd-modal-content iframe").each(function () {
				jQuery(this).prop("src", jQuery(this).prop("src"));
			});
			if ( jQuery("body").find("#container.force-close").length > 0 ) {
				window.history.back();
			} else {
				jQuery("body").removeClass("page-modal-open");
				jQuery(document).scrollTop(windowPosition);
			}
			jQuery("body").removeClass("page-modal-done").removeClass("page-modal-loading");
		},
		blogFiltersInit: function() {
				
			var blogWrap = jQuery(".blog-wrap");

			blogWrap.find('.filtering').animate({
				opacity: 1
			}, 400);

			var urlParams = [];
			var currentUrl = window.location.href;
			var parsedUrl = jQuery.url(currentUrl);
			var params = parsedUrl.param();
			var getResults = false;

			if ( blogWrap.find(".filtering").length > 0 ) {
				blogWrap.find(".filtering").each(function () {

					var taxonomy = jQuery(this).find("li a").data("taxonomyname");
					var term = jQuery(this).find("li a.selected").data("term");

					if ( taxonomy != "" && taxonomy != undefined ) {
						if ( term && term != "" && term != "All" ) {
							delete params[taxonomy];
							params[taxonomy] = term;
						} else if ( term == "All" ) {
							delete params[taxonomy];
						}
					}

				});

				/* IF LINE DOES NOT EXIST ADD TO DROPDOWN */
				if ( blogWrap.find(".results-summary:visible").length <= 0 ) {
					if ( !jQuery(this).hasClass("all") ) {
						jQuery(this).parents(".filter-dropdown").find(".chosen-single span").html(jQuery(this).find("span").html());
					} else {
						jQuery(this).parents(".filter-dropdown").find(".chosen-single span").html(jQuery(this).parents(".filter-dropdown").data("taxonomy-label"));
					}
				}

				if ( blogWrap.find('.blog-items').hasClass('filter-scope-global') ) {

					urlParams = [];

					jQuery.each(params, function (key, value) {
						urlParams.push(""+key+"="+encodeURIComponent(value)+"")
					});
					urlParams = jQuery.unique(urlParams);

					if ( urlParams.length > 0 ) {
						var historyURL = parsedUrl.data.attr.base + parsedUrl.data.attr.path + "?" + urlParams.join("&");
						if ( window.location.hash != "" ) {
							historyURL = historyURL + window.location.hash;
						}
						window.history.replaceState( '', '', historyURL );
					}

				}
			}

			var keyword = "";
			blogWrap.find(".search-form.search-widget").off('submit', 'a').on("submit", function (e) {
				e.preventDefault();

				var blogWrap = jQuery(this).closest(".blog-wrap");
				var blogID = blogWrap.data("blogid");
				var blogInstance = jQuery(this).closest(".blog-wrap").find('.blog-items');
				var blogAtts = jQuery.parseJSON(decodeURIComponent(blogInstance.data("atts")));
				var blogPaged = blogInstance.data("paged");
				var keyword = blogAtts["q"] = jQuery(this).find('input[type="text"],input[type="search"]').val();
				var template = blogItems.data("template");
				var datearchive = false;
				if ( template == undefined || template == "" ) {
					template = "content_feed";
				}
				var searchParam = "search";
				if ( jQuery("body").hasClass("search") ) {
					searchParam = "s";
				}
				blogPaged = 1;

				/* IF LINE DOES NOT EXIST ADD TO DROPDOWN */
				if ( blogWrap.find(".results-summary:visible").length <= 0 ) {
					if ( !jQuery(this).hasClass("all") ) {
						jQuery(this).parents(".filter-dropdown").find(".chosen-single span").html(jQuery(this).find("span").html());
					} else {
						jQuery(this).parents(".filter-dropdown").find(".chosen-single span").html(jQuery(this).parents(".filter-dropdown").data("taxonomy-label"));
					}
				}

				var filterparams;
				var filterparamsarray = {};
				if ( blogWrap.find('.filtering li.selected').length > 0 ) {
					blogWrap.find('.filtering li.selected').each(function (s, selected) {
						var selectedlink = jQuery(this).find("> a");
						if ( selectedlink.data("term") != "" ) {
							if ( !filterparamsarray[selectedlink.data("taxonomy")] ) {
								filterparamsarray[""+selectedlink.data("taxonomy")+""] = selectedlink.data("term");
							} else {
								filterparamsarray[""+selectedlink.data("taxonomy")+""] = filterparamsarray[selectedlink.data("taxonomy")] + "," + selectedlink.data("term");
							}
						}
					});
					filterparams = "";
					filterparamsarray = jQuery.parseJSON(JSON.stringify(filterparamsarray));
					jQuery.each(filterparamsarray, function( index, value ) {
					   	filterparams = filterparams + index + "=" + value + "&";
					});
					filterparams = "&" + filterparams.trim("&");
					if (filterparams.substring(filterparams.length-1) == "&") {
				        filterparams = filterparams.substring(0, filterparams.length-1);
				    }
				}

				var datearchive = false;
				if ( jQuery("body").hasClass("date") ) {
					datearchive = jQuery("body").data("year");
					if ( jQuery("body").data("month") && jQuery("body").data("month") != "false" ) {
						datearchive = datearchive + "-" + jQuery("body").data("month");
					}
					if ( jQuery("body").data("day") && jQuery("body").data("day") != "false" ) {
						datearchive = datearchive + "-" + jQuery("body").data("day");
					}
				}

				var keyword = blogAtts["q"] = blogWrap.find(".search-form.search-widget").find("input").val();
				var template = blogItems.data("template");
				if ( template == undefined || template == "" ) {
					template = "content_feed";
				}
				blogPaged = 1;
				var searchParam = "search";
				if ( jQuery("body").hasClass("search") ) {
					searchParam = "s";
				}
				if ( keyword == undefined || keyword == "undefined" ) {
					keyword = "";
				}
				if ( blogWrap.data("template") && blogWrap.data("template") == "stylesheet" ) {
					var requestURL = stylesheetDirectory + "/api/" + template + ".php?" + searchParam + "=" + encodeURIComponent(keyword) +"&atts=" + encodeURIComponent(JSON.stringify(blogAtts)) + "&pagenum=" + blogPaged + filterparams + "&permalinkURL=" + pagePermalink + "&blogID=" + blogID + "&datearchive=" + datearchive;
				} else {
					var requestURL = templateDirectory + "/api/" + template + ".php?" + searchParam + "=" + encodeURIComponent(keyword) +"&atts=" + encodeURIComponent(JSON.stringify(blogAtts)) + "&pagenum=" + blogPaged + filterparams + "&permalinkURL=" + pagePermalink + "&blogID=" + blogID + "&datearchive=" + datearchive;
				}
				
				if ( blogWrap.find('.blog-items').hasClass('filter-scope-global') ) {

					/* START UPDATE ALL OTHER GLOBAL FEEDS

					jQuery('.blog-wrap .blog-items.filter-scope-global').parents(".blog-wrap").find('form.search-form.search-widget').each(function () {
						if ( jQuery(this).find('input[type="text"],input[type="search"]').val() != keyword ) {
							jQuery(this).find('input[type="text"],input[type="search"]').val(keyword);
							jQuery(this).submit();
						}
					});

					END UPDATE ALL OTHER GLOBAL FEEDS */

					urlParams = [];

					jQuery.each(params, function (key, value) {
						if ( key != "search" && key != "s" ) {
							if ( value != "All" ) {
								urlParams[key] = encodeURIComponent(value);
							} else {
								urlParams[key] = "all";
							}
						}
					});
					urlParams = Object.keys(urlParams).map(function(key, index) { if ( urlParams[key] != "" ) { return key + '=' + urlParams[key]; } }).join('&');

					if ( keyword == undefined || keyword == "undefined" ) {
						keyword = "";
					}

					if ( jQuery("body.search").length > 0 ) {
						if ( urlParams.length > 0 ) {
							var historyURL = parsedUrl.data.attr.base + parsedUrl.data.attr.path + "?s=" + encodeURIComponent(keyword) + "&" + urlParams;
							if ( window.location.hash != "" ) {
								historyURL = historyURL + window.location.hash;
							}
							window.history.pushState( '', '', historyURL );
						} else {
							var historyURL = parsedUrl.data.attr.base + parsedUrl.data.attr.path + "?s=" + encodeURIComponent(keyword);
							if ( window.location.hash != "" ) {
								historyURL = historyURL + window.location.hash;
							}
							window.history.pushState( '', '', historyURL );
						}
					} else {
						if ( urlParams.length > 0 ) {
							var historyURL = parsedUrl.data.attr.base + parsedUrl.data.attr.path + "?search=" + encodeURIComponent(keyword) + "&" + urlParams;
							if ( window.location.hash != "" ) {
								historyURL = historyURL + window.location.hash;
							}
							window.history.pushState( '', '', historyURL );
						} else {
							var historyURL = parsedUrl.data.attr.base + parsedUrl.data.attr.path + "?search=" + encodeURIComponent(keyword);
							if ( window.location.hash != "" ) {
								historyURL = historyURL + window.location.hash;
							}
							window.history.pushState( '', '', historyURL );
						}
					}
				} 

				blogWrap.removeClass("done-loading");

				console.log(requestURL);

				getResults = jQuery.get( requestURL, function( data ) {

					jQuery("body").append('<div id="filteringHTML" style="display:none;"></div>');
					jQuery("#filteringHTML").html(data);
					var countLoaded = jQuery("#filteringHTML").find(".blog-item").length;
					data = jQuery("#filteringHTML").find(".items-row-wrap").html();
					jQuery("#filteringHTML").remove();
					blogItems.data("found-posts", countLoaded);

					if ( blogItems.hasClass("blog-inf-scroll") || blogItems.hasClass("blog-load-more") ) {
						blogItems.infinitescroll("destroy");
					}

					if ( jQuery("body").hasClass("search") ) {
						data = data.replace("&amp;q=", "&amp;s=").replace("?q=", "?s=");
					}

					blogInstance.closest(".items-row-wrap").html(data);
					SWIFT.page.injectsvgs();

					if ( countLoaded < blogAtts.item_count ) {
						blogWrap.addClass("done-loading");
					}

					SWIFT.blog.blogAlgoliaFacetCount(blogInstance);

					blogInstance.stop().animate({
						'opacity' : 1,
					}, 400, function() {
						blogInstance.update();
						blogItems = jQuery('.blog-wrap').find('.blog-items');
						SWIFT.blog.init();
						if ( blogItems.hasClass("blog-inf-scroll") || blogItems.hasClass("blog-load-more") ) {
							SWIFT.blog.infiniteScroll();
						}
						if ( jQuery('#breadcrumbs > span:last-child span').length > 0 && jQuery('#breadcrumbs > span:last-child span').html().indexOf("Search results for") !== -1 ) {
							jQuery('#breadcrumbs > span:last-child span').html("Search results for '" + keyword + "'");
						}
						if ( jQuery("body.search .page-heading .results-count").length > 0 ) {
							jQuery("body.search .page-heading .results-count").html(blogItems.data("found-posts"));
						}
						if ( blogWrap.find(".results-count").length > 0 ) {
							blogWrap.find(".results-count").html(blogItems.data("found-posts"));
						}
						if ( jQuery("body.search .page-heading .keyword-text").length > 0 ) {
							jQuery("body.search .page-heading .keyword-text").html(keyword);
						}
						if ( blogWrap.find(".keyword-text").length > 0 ) {
							blogWrap.find(".keyword-text").html(keyword);
						}
						if( blogInstance.closest(".items-row-wrap").find("iframe.iframe-resize") ) {
							blogInstance.closest(".items-row-wrap").find("iframe.iframe-resize").removeAttr("height");
							blogInstance.closest(".items-row-wrap").find("iframe.iframe-resize").removeAttr("type");
							blogInstance.closest(".items-row-wrap").find("iframe.iframe-resize").iFrameResize({heightCalculationMethod: "max"});
						}
						SWIFT.widgets.accordion();
					});

				});

				return false;

			});
			
			blogWrap.find('.filtering li').off('click', 'a').on('click', 'a', function(e) {
				e.preventDefault();

				var newFilter = jQuery(this);
				var blogWrap = jQuery(this).closest(".blog-wrap");
				var blogID = blogWrap.data("blogid");
				var blogInstance = jQuery(this).closest(".blog-wrap").find('.blog-items');
				var blogAtts = jQuery.parseJSON(decodeURIComponent(blogInstance.data("atts")));
				var blogPaged = blogInstance.data("paged");
				var taxonomy = jQuery(this).data("taxonomy");
				var taxonomy_name = jQuery(this).data("taxonomyname");
				
				if (!jQuery(this).hasClass("all")) {	
					/* For A-Z Filtering, remove ".selected" from ".all" option after a selection is made */
					jQuery(this).closest(".filter-az .filtering").find('.all').parents('.selected').removeClass('selected');
				}

				var term = jQuery(this).data("term");
				if (!jQuery(this).hasClass("all")) {	
					/* For A-Z Filtering, remove ".selected" from ".all" option after a selection is made */
					jQuery(this).closest(".filter-az .filtering").find('.all').parents('.selected').removeClass('selected');
				}
				if ( jQuery(this).parents(".filter-wrap").hasClass("multiselect") && !jQuery(this).parents(".filter-dropdown").hasClass("filter-sort") ) {
					/* IS MULTI-SELECT */
					if ( jQuery(this).hasClass("all") ) {
						jQuery(this).closest(".filtering").find('li.selected').removeClass('selected');
						jQuery(this).parent('li').addClass('selected');
					} else {
						jQuery(this).parents(".filter-dropdown").find('li.all, li.All').removeClass('selected');
						if ( jQuery(this).parent('li').hasClass("selected") ) {
							params[taxonomy] = jQuery.grep(params[taxonomy].split(","), function(value) { return value != term; });
							jQuery(this).parent('li').removeClass('selected');
						} else {
							jQuery(this).parent('li').addClass('selected');
						}
						term = [];
						jQuery(this).closest(".filtering").find('li.selected').each(function() {
							term.push(jQuery(this).find("> a").data("term"));
						});
						term = term.join(",");
					}
					if ( jQuery(this).parents(".filter-dropdown").find('li.selected').length <= 0 ) {
						jQuery(this).parents(".filter-dropdown").find('li.all, li.All').addClass("selected");
						term = "All";
					}
				} else {
					/* IS SINGLE-SELECT */
					params[taxonomy] = term;
					jQuery(this).closest(".filtering").find('li > a').parent('li.selected').removeClass('selected');
					jQuery(this).closest(".filtering").find('li > a.' + term).parent('li').addClass('selected');
					if ( !jQuery(this).parents(".spb_blog_widget, .spb_algolia_widget").hasClass("filter-display-sidebar") ) {
						jQuery(this).parents(".filter-dropdown").removeClass('open').addClass('closed');
					}
				}

				/* IF LINE DOES NOT EXIST ADD TO DROPDOWN */
				if ( blogWrap.find(".results-summary:visible").length <= 0 ) {
					if ( !jQuery(this).hasClass("all") ) {
						var selected_items = "";
						jQuery(this).parents(".filter-dropdown").find(".selected span").each(function (s, selected) {
							if ( selected_items == "" ) {
								selected_items = jQuery(this).html();
							} else {
								selected_items = selected_items + ", " + jQuery(this).html();
							}
						});
						jQuery(this).parents(".filter-dropdown").find(".chosen-single span").html(selected_items);
					} else {
						jQuery(this).parents(".filter-dropdown").find(".chosen-single span").html(jQuery(this).parents(".filter-dropdown").data("taxonomy-label"));
					}
				}

				var filterparams;
				var filterparamsarray = {};
				if ( blogWrap.find('.filtering li.selected').length > 0 ) {
					blogWrap.find('.filtering li.selected').each(function (s, selected) {
						var selectedlink = jQuery(this).find("> a");
						if ( selectedlink.data("term") != "" ) {
							if ( !filterparamsarray[selectedlink.data("taxonomy")] ) {
								filterparamsarray[""+selectedlink.data("taxonomy")+""] = selectedlink.data("term");
							} else {
								filterparamsarray[""+selectedlink.data("taxonomy")+""] = filterparamsarray[selectedlink.data("taxonomy")] + "," + selectedlink.data("term");
							}
						}
					});
					filterparams = "";
					filterparamsarray = jQuery.parseJSON(JSON.stringify(filterparamsarray));
					jQuery.each(filterparamsarray, function( index, value ) {
					   	filterparams = filterparams + index + "=" + value + "&";
					});
					filterparams = "&" + filterparams.trim("&");
					if (filterparams.substring(filterparams.length-1) == "&") {
				        filterparams = filterparams.substring(0, filterparams.length-1);
				    }
				}

				var datearchive = false;
				if ( jQuery("body").hasClass("date") ) {
					datearchive = jQuery("body").data("year");
					if ( jQuery("body").data("month") && jQuery("body").data("month") != "false" ) {
						datearchive = datearchive + "-" + jQuery("body").data("month");
					}
					if ( jQuery("body").data("day") && jQuery("body").data("day") != "false" ) {
						datearchive = datearchive + "-" + jQuery("body").data("day");
					}
				}

				var keyword = blogAtts["q"] = blogWrap.find(".search-form.search-widget").find("input").val();
				var template = blogItems.data("template");
				if ( template == undefined || template == "" ) {
					template = "content_feed";
				}
				blogPaged = 1;
				var searchParam = "search";
				if ( jQuery("body").hasClass("search") ) {
					searchParam = "s";
				}
				if ( keyword == undefined || keyword == "undefined" ) {
					keyword = "";
				}
				if ( blogWrap.data("template") && blogWrap.data("template") == "stylesheet" ) {
					if ( term != "all" && term != "All" && term != "" ) {
						var requestURL = stylesheetDirectory + "/api/" + template + ".php?" + searchParam + "=" + encodeURIComponent(keyword) +"&atts=" + encodeURIComponent(JSON.stringify(blogAtts)) + "&pagenum=" + blogPaged + filterparams + "&permalinkURL=" + pagePermalink + "&blogID=" + blogID + "&datearchive=" + datearchive;
					} else {
						term = "all";
						if ( taxonomy == "post-type" && term == "all" ) {
							term = blogWrap.data("post-type");
						}
						var requestURL = stylesheetDirectory + "/api/" + template + ".php?" + searchParam + "=" + encodeURIComponent(keyword) +"&atts=" + encodeURIComponent(JSON.stringify(blogAtts)) + "&pagenum=" + blogPaged + filterparams + "&permalinkURL=" + pagePermalink + "&blogID=" + blogID + "&datearchive=" + datearchive;
					}
				} else {
					if ( term != "all" && term != "All" && term != "" ) {
						var requestURL = templateDirectory + "/api/" + template + ".php?" + searchParam + "=" + encodeURIComponent(keyword) +"&atts=" + encodeURIComponent(JSON.stringify(blogAtts)) + "&pagenum=" + blogPaged + filterparams + "&permalinkURL=" + pagePermalink + "&blogID=" + blogID + "&datearchive=" + datearchive;
					} else {
						term = "all";
						if ( taxonomy == "post-type" && term == "all" ) {
							term = blogWrap.data("post-type");
						}
						var requestURL = templateDirectory + "/api/" + template + ".php?" + searchParam + "=" + encodeURIComponent(keyword) +"&atts=" + encodeURIComponent(JSON.stringify(blogAtts)) + "&pagenum=" + blogPaged + filterparams + "&permalinkURL=" + pagePermalink + "&blogID=" + blogID + "&datearchive=" + datearchive;
					}
				}

				blogInstance.append('<div id="infscr-loading" class="first-page-loading" style="position:absolute;top:0px;left:0px;"><div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div>');

				blogInstance.find(".blog-item").stop().animate({
					'opacity' : 0,
				}, 800, 'easeOutExpo', function() {
				
				});		

				/* CHANGE PAGINATION PARAMETERS */
				jQuery(this).closest(".filtering").find('li.selected > a').each(function () {
					var taxonomy = jQuery(this).data("taxonomyname");
					if ( jQuery(this).hasClass("all") ) {
						var term = "All";
					} else {
						var term = jQuery(this).data("term");
					}
					if ( taxonomy != "" && taxonomy != undefined ) {
						if ( term != "" && term != "all" && term != "All" ) {
							if ( params[taxonomy] == "All" || params[taxonomy] == "all" ) {
								params[taxonomy] = "";
							}
							if ( params[taxonomy] ) {
								params[taxonomy] = params[taxonomy] + "," + term;
								params[taxonomy] = params[taxonomy].split(", ").join(",");
								params[taxonomy] = params[taxonomy].split(",").filter(function(itm, i, a) { return i == a.indexOf(itm); }).join(",");
							} else {
								params[taxonomy] = term;
							}
						} else if ( term != "" && term == "All" ) {
							params[taxonomy] = "All";
						}
					}
					if ( params[taxonomy] && params[taxonomy].length <= 0 ) {
						delete params[taxonomy];
					}
				});

				if ( blogWrap.find('.blog-items').hasClass('filter-scope-global') ) {

					/* START UPDATE ALL OTHER GLOBAL FEEDS

					jQuery('.blog-wrap .blog-items.filter-scope-global').parents(".blog-wrap").find(".filter-wrap").each(function () {
						if ( jQuery(this).find('li.selected > a.' + term).length <= 0 ) {
							jQuery(this).find('li > a.' + term).trigger("click");
						}
					});

					END UPDATE ALL OTHER GLOBAL FEEDS */

					urlParams = [];

					jQuery.each(params, function (key, value) {
						if ( key != "search" && key != "s" ) {
							if ( value != "All" ) {
								urlParams[key] = encodeURIComponent(value);
							} else {
								urlParams[key] = "all";
							}
						}
					});
					urlParams = Object.keys(urlParams).map(function(key, index) { if ( urlParams[key] != "" ) { return key + '=' + urlParams[key]; } }).join('&');

					if ( keyword == undefined || keyword == "undefined" ) {
						keyword = "";
					}
					
					if ( jQuery("body.search").length > 0 ) {
						if ( urlParams.length > 0 ) {
							var historyURL = parsedUrl.data.attr.base + parsedUrl.data.attr.path + "?s=" + encodeURIComponent(keyword) + "&" + urlParams;
							if ( window.location.hash != "" ) {
								historyURL = historyURL + window.location.hash;
							}
							window.history.pushState( '', '', historyURL );
						} else {
							var historyURL = parsedUrl.data.attr.base + parsedUrl.data.attr.path + "?s=" + encodeURIComponent(keyword);
							if ( window.location.hash != "" ) {
								historyURL = historyURL + window.location.hash;
							}
							window.history.pushState( '', '', historyURL );
						}
					} else {
						if ( urlParams.length > 0 ) {
							var historyURL = parsedUrl.data.attr.base + parsedUrl.data.attr.path + "?search=" + encodeURIComponent(keyword) + "&" + urlParams;
							if ( window.location.hash != "" ) {
								historyURL = historyURL + window.location.hash;
							}
							window.history.pushState( '', '', historyURL );
						} else {
							var historyURL = parsedUrl.data.attr.base + parsedUrl.data.attr.path + "?search=" + encodeURIComponent(keyword);
							if ( window.location.hash != "" ) {
								historyURL = historyURL + window.location.hash;
							}
							window.history.pushState( '', '', historyURL );
						}
					}
					console.log(urlParams);
					console.log(historyURL);

				}

				blogWrap.removeClass("done-loading");

				console.log(requestURL);

				getResults = jQuery.get( requestURL, function( data ) {

					jQuery("body").append('<div id="filteringHTML" style="display:none;"></div>');
					jQuery("#filteringHTML").html(data);
					var countLoaded = jQuery("#filteringHTML").find(".blog-item").length;
					data = jQuery("#filteringHTML").find(".items-row-wrap").html();
					jQuery("#filteringHTML").remove();
					blogItems.data("found-posts", countLoaded);

					if ( blogItems.hasClass("blog-inf-scroll") || blogItems.hasClass("blog-load-more") ) {
						blogItems.infinitescroll("destroy");
					}

					if ( jQuery("body").hasClass("search") ) {
						data = data.replace("&amp;q=", "&amp;s=").replace("?q=", "?s=");
					}

					blogInstance.closest(".items-row-wrap").html(data);
					SWIFT.page.injectsvgs();
					
					if ( countLoaded < blogAtts.item_count ) {
						blogWrap.addClass("done-loading");
					}

					SWIFT.blog.blogAlgoliaFacetCount(blogInstance);

					blogInstance.stop().animate({
						'opacity' : 1,
					}, 400, function() {
						/* INITIALIZE CONTENT */
						blogInstance.update();
						blogItems = jQuery('.blog-wrap').find('.blog-items');
						SWIFT.blog.init();
						if ( blogItems.hasClass("blog-inf-scroll") || blogItems.hasClass("blog-load-more") ) {
							SWIFT.blog.infiniteScroll();
						}
						if ( jQuery('#breadcrumbs > span:last-child span').length > 0 && jQuery('#breadcrumbs > span:last-child span').html().indexOf("Search results for") !== -1 ) {
							jQuery('#breadcrumbs > span:last-child span').html("Search results for '" + keyword + "'");
						}
						if ( jQuery("body.search .page-heading .results-count").length > 0 ) {
							jQuery("body.search .page-heading .results-count").html(blogItems.data("found-posts"));
						}
						if ( blogWrap.find(".results-count").length > 0 ) {
							blogWrap.find(".results-count").html(blogItems.data("found-posts"));
						}
						if ( jQuery("body.search .page-heading .keyword-text").length > 0 ) {
							jQuery("body.search .page-heading .keyword-text").html(keyword);
						}
						if ( blogWrap.find(".keyword-text").length > 0 ) {
							blogWrap.find(".keyword-text").html(keyword);
						}
						if( blogInstance.closest(".items-row-wrap").find("iframe.iframe-resize") ) {	
							blogInstance.closest(".items-row-wrap").find("iframe.iframe-resize").removeAttr("height");
							blogInstance.closest(".items-row-wrap").find("iframe.iframe-resize").removeAttr("type");
							blogInstance.closest(".items-row-wrap").find("iframe.iframe-resize").iFrameResize({heightCalculationMethod: "max"});
						}
						SWIFT.widgets.accordion();
					});

				});

				return false;

			});

		},
		blogAlgoliaFacetCount: function(blogInstance) {
			if ( blogInstance.parents(".blog-wrap").hasClass("spb_algolia_widget") ) {

				var sfOptionParams = jQuery('#sf-option-params');
				var blogAtts = jQuery.parseJSON(decodeURIComponent(blogInstance.data("atts")));
				var blogPaged = blogInstance.data("paged");
				var keyword = blogAtts["q"] = jQuery(this).find('input[type="text"],input[type="search"]').val();
				
				var client = algoliasearch(sfOptionParams.data("algolia-appid"), sfOptionParams.data("algolia-apikeysearch")); 
				var index = client.initIndex(sfOptionParams.data("algolia-defaultindex"));

				var filterString = '["public:true"';

				if ( blogAtts["post_type"] ) {

					if ( !jQuery.isArray(blogAtts["post_type"]) ) {
						blogAtts["post_type"] = blogAtts["post_type"].split(",");
					}
					filterString = filterString + ',[';

					jQuery.each(blogAtts["post_type"], function (p, post_type) {
						filterString = filterString + ',"type:' + post_type + '"';
					});
					filterString = filterString.replace(",[,", ",[") + ']';

				}

				filterString = filterString + "]";
				filterString = filterString.split(",[]").join("");
				
				index.search(keyword, {page: (blogPaged-1), facets: "*", facetFilters: filterString}).then(function(res) {

					jQuery.each(blogInstance.parents(".blog-wrap").find('.filter-wrap .post-filter-tabs a:not(.all):not(.chosen-single):not(.toggle-link)'), function () {
						
						blogInstance.parents(".blog-wrap").find('.filter-wrap .post-filter-tabs a:not(.all):not(.chosen-single):not(.toggle-link)').each(function () {
							
							var resultsExist = false;
							var $filterLink = jQuery(this);
						
							jQuery.each(res.facets, function (taxonomy, terms) {
								jQuery.each(terms, function (term, termcount) {
									if ( $filterLink.data("taxonomy") == taxonomy && $filterLink.prop("title") == term ) {
										$filterLink.find('.term-count').remove();
										$filterLink.append( '<span class="term-count">' + termcount + '</span>' );
										resultsExist = true;
									}
								});
							});
							if ( resultsExist == false ) {
								$filterLink.find('.term-count').remove();
								$filterLink.append( '<span class="term-count">0</span>' );		
							}
						});	
					});
				});
				    
			}
		},
		blogLayout: function(blogInstance) {

			var blogType = blogInstance.data('blog-type'),
				layoutMode = 'fitRows';

			if (blogType === "masonry") {
				layoutMode = 'masonry';
			}

			if (blogType === "masonry" && blogInstance.hasClass('social-blog')) {

				var tweets = blogInstance.parent().find('.blog-tweets').html(),
					instagrams = blogInstance.parent().find('.blog-instagrams');

				blogInstance.imagesLoaded(function () {
					SWIFT.flexSlider.thumb();
					if (blogInstance.data('isotope')) {
						blogInstance.isotope('destroy');
					}
					blogInstance.isotope({
						resizable: true,
						itemSelector : '.blog-item',
						layoutMode: 'masonry',
						getSortData : {
							date : function ( elem ) {
								return jQuery(elem).data('date');
							}
						},
						sortBy: 'date',
						sortAscending: false,
						stagger: 0,
						hiddenStyle: {
						    opacity: 0
						},
						visibleStyle: {
						    opacity: 1
						},
						isOriginLeft: !isRTL
					});
					if (tweets !== "") {
					blogInstance.isotope('insert', jQuery(tweets));
					}
					if (instagrams.length > 0) {
					SWIFT.blog.masonryInstagram(instagrams, blogInstance);
					}
					blogInstance.isotope('updateSortData').isotope();
					
					if ( isMobileAlt ) {
						setTimeout(function() {
							blogInstance.isotope('layout');
						}, 1000);
					}

					// Blog Equal Heights
					if ( blogInstance.parents('.blog-wrap').hasClass("equal-heights") ) {
						SWIFT.blog.blogEqualHeights(blogInstance);
					}
					
				});

			} else {

				blogInstance.imagesLoaded(function () {

					SWIFT.flexSlider.thumb();
					if (blogInstance.data('isotope')) {
						blogInstance.isotope('destroy');
					}
					blogInstance.isotope({
						resizable: true,
						layoutMode: layoutMode,
						stagger: 0,
						hiddenStyle: {
						    opacity: 0
						},
						visibleStyle: {
						    opacity: 1
						},
						isOriginLeft: !isRTL
					});
					
					// Blog Equal Heights
					if ( blogInstance.parents('.blog-wrap').hasClass("equal-heights") ) {
						SWIFT.blog.blogEqualHeights(blogInstance);
					}

				});

				blogInstance.appear(function() {
					SWIFT.blog.animateItems(blogInstance);
				});

			}
		},
		masonryInstagram: function(instagrams, blogItems) {
			var userID = instagrams.data('userid'),
				token = instagrams.data('token'),
				count = instagrams.data('count'),
				itemClass = instagrams.data('itemclass');

			jQuery.ajax({
				type: "GET",
				dataType: "jsonp",
				cache: false,
				url: "https://api.instagram.com/v1/users/"+userID+"/media/recent/?access_token="+token,
				success: function(data) {
					for (var i = 0; i < count; i++) {
						if (data.data[i]) {
							var caption = "";
							if (data.data[i].caption) {
								caption = data.data[i].caption.text;
							}
							instagrams.append("<li class='blog-item instagram-item "+itemClass+"' data-date='"+data.data[i].created_time+"'><a class='timestamp inst-icon' target='_blank' href='" + data.data[i].link +"'><i class='fa-instagram'></i></a><div class='inst-overlay'><a target='_blank' href='" + data.data[i].link +"'></a><h6>"+instagrams.data('title')+"</h6><h2>"+caption+"</h2><div class='name-divide'></div><data class='date timeago' title='"+data.data[i].created_time+"' value=''>"+data.data[i].created_time+"</data></div><img class='instagram-image' src='" + data.data[i].images.low_resolution.url +"' width='306px' height='306px' /></li>");
						}
					}
					jQuery("data.timeago").timeago();
					instagrams.imagesLoaded(function(){
						blogItems.isotope('insert', jQuery(instagrams.html()));
					});
					blogItems.isotope('updateSortData').isotope();
				}
			});
		},
		animateItems: function(blogInstance) {
			blogInstance.find('.blog-item').each(function(i) {
				jQuery(this).delay(i*50).animate({
					'opacity' : 1,
				}, 400, 'easeOutExpo', function() {
					jQuery(this).addClass('item-animated');
				});
			});
		},
		blogGrid: function(gridItems,blogInstance) {
			var tweets = gridItems.parent().find('.blog-tweets').html(),
				instagrams = gridItems.parent().find('.blog-instagrams');

			gridItems.imagesLoaded(function () {
				SWIFT.flexSlider.thumb();
				gridItems.isotope({
					resizable: false,
					itemSelector : '.blog-item',
					layoutMode: 'fitRows',
					getSortData : {
						id : function ( elem ) {
							return jQuery(elem).data('sortid');
						}
					},
					sortBy: 'id',
					sortAscending: true,
					isOriginLeft: !isRTL
				});
				if (tweets !== "") {
				gridItems.isotope('insert', jQuery(tweets));
				}
				if (instagrams.length > 0) {
				SWIFT.blog.blogGridInstagram(instagrams, gridItems);
				}
				gridItems.isotope('updateSortData').isotope();
				SWIFT.blog.blogGridResize();
				// Blog Equal Heights
				if ( blogInstance.parents('.blog-wrap').hasClass("equal-heights") ) {
					SWIFT.blog.blogEqualHeights(blogInstance);
				}
			}).animate({
				'opacity' : 1
			}, 800, 'easeOutExpo');

			$window.smartresize( function() {
				SWIFT.blog.blogGridResize();
			});

		},
		blogGridResize: function() {
			blogItems.find('.grid-items').each(function() {
				var gridItem = jQuery(this).find('.blog-item'),
					itemWidth = gridItem.first().width();
				if (gridItem.first().hasClass('col-sm-sf-25')) {
					itemWidth = itemWidth / 2;
				}
				gridItem.css('height', itemWidth);
			});
			setTimeout(function() {
				jQuery(".tweet-text,.quote-excerpt").dotdotdot();
				blogItems.find('.grid-items').isotope('layout');
			}, 500);
		},
		blogGridInstagram: function(instagrams, gridItems) {
			var userID = instagrams.data('userid'),
				token = instagrams.data('token'),
				count = instagrams.data('count');

			jQuery.ajax({
				type: "GET",
				dataType: "jsonp",
				cache: false,
				url: "https://api.instagram.com/v1/users/"+userID+"/media/recent/?access_token="+token,
				success: function(data) {
					for (var i = 0; i < count; i++) {
						if (data.data[i]) {
							var caption = "";
							if (data.data[i].caption) {
								caption = data.data[i].caption.text;
							}
							instagrams.append("<li class='blog-item col-sm-sf-5 instagram-item' data-date='"+data.data[i].created_time+"' data-sortid='"+i*2+"'><a class='timestamp inst-icon' target='_blank' href='" + data.data[i].link +"'><i class='fa-instagram'></i></a><div class='inst-img-wrap'><div class='inst-overlay'><a target='_blank' href='" + data.data[i].link +"'></a><h6>"+instagrams.data('title')+"</h6><h2>"+caption+"</h2><div class='name-divide'></div><data class='date timeago' title='"+data.data[i].created_time+"' value=''>"+data.data[i].created_time+"</data></div><img class='instagram-image' src='" + data.data[i].images.low_resolution.url +"' /></div></li>");
						}
					}
					jQuery("data.timeago").timeago();
					SWIFT.blog.blogGridResize();
					instagrams.imagesLoaded(function(){
						gridItems.isotope('insert', jQuery(instagrams.html()));
						SWIFT.blog.blogGridResize();
					});
					gridItems.isotope('updateSortData').isotope();
				}
			});
		},
		infiniteScroll: function() {
			if (!(IEVersion && IEVersion < 9)) {
				var infScrollData = jQuery('#inf-scroll-params');
				blogItems = jQuery('.blog-wrap').find('.blog-items');
				var $lastChild;
				blogItems.each(function(index) {
					var blogID = jQuery(this).data("id");
					if ( jQuery(this).hasClass("blog-load-more") || jQuery(this).hasClass("blog-inf-scroll") ) {
						var blogInstance = jQuery(this);
						var infiniteScroll = {
							loading: {
								img: infScrollData.data('loadingimage'),
								msgText: infScrollData.data('msgtext'),
								finished: function () {
									/* blogItems.addClass("done-loading"); */
								},
								finishedMsg: infScrollData.data('finishedmsg')
							},
							"nextSelector":".pagenavi li.next a",
							"navSelector":".pagenavi",
							"itemSelector":".blog-item-"+blogID,
							"contentSelector":"#blog-items-"+blogID+" .blog-items"
						};
						blogInstance.infinitescroll(
							infiniteScroll, function(elements) {
								var $this = jQuery(this);
								SWIFT.flexSlider.thumb();
								$this.imagesLoaded(function () {
									$this.isotope( 'appended', elements ).isotope( 'layout' );
									jQuery.each(elements, function(i, element) {
										jQuery(element).addClass('item-animated');
									});
								});
								jQuery('[data-rel="ilightbox[posts]"]').removeClass('ilightbox-enabled').iLightBox().destroy();
								SWIFT.page.lightbox();
								if ( $this.parents('.blog-wrap').hasClass("equal-heights") ) {
									SWIFT.blog.blogEqualHeights($this);
								}
								SWIFT.page.injectsvgs();
								$this.find("#infscr-loading").remove();
								if ( $this.parents('.blog-wrap').hasClass("equal-heights") ) {
									SWIFT.blog.blogEqualHeights($this);
								}
								if ($this.parent().find('.pagination-wrap').hasClass('load-more')) {
									if ( $this.find(".blog-item").length < $this.data("found-posts") ) {
										$this.parent().find('.load-more-btn').animate({
											'opacity': 1
										}, 400);
									} else {
										$this.parent().find('.load-more-btn').hide();
										$this.addClass("all-posts-loaded");
									}
								}
								if ( $this.parents('.blog-wrap').find(".blog-item .sf-blog-modal a").length > 0 ) {
									$this.parents('.blog-wrap').find(".blog-item .sf-blog-modal a").each(function () {
										if ( jQuery(this).data("postid") ) {
											jQuery(this).prop("onclick", "javascript: return false;");
											jQuery(this).off().on("click", function(e){
												e.preventDefault();
												var post = jQuery(this).attr('href');
												jQuery(this).find(".sd-modal-content").each(function () {
													jQuery(this).hide();
												});
												var template = jQuery(this).parents(".sf-blog-modal").data("template");
												if ( !template || template == "" ) {
													template = templateDirectory + "/api/modal_content.php";
												}
												var post_id = jQuery(this).data("postid");
												if ( jQuery("#modal-container .container").html() == "" ) {
													window.location.href = post;
												} else {
													SWIFT.blog.blogOpenModal(template, post, post_id, true);
												}
												return false;
											});
										} else {
											return true;
										}
									});
								}
								if ( $lastChild.length > 0 ) {
									setTimeout(function(){ jQuery(window).scrollTop($lastChild.offset().top); }, 100);
								}
							}
						);
						if (blogInstance.parent().find('.pagination-wrap').hasClass('load-more')) {
							$window.unbind('.infscr');
							blogInstance.parent().find('.load-more-btn').off().on('click', function(e) {
								e.preventDefault();	
								$lastChild = jQuery(this).parents(".blog-items-wrap").find(".blog-item:nth-last-child(1)");
								jQuery(this).parent().find(".blog-items").infinitescroll('retrieve');
								jQuery(this).animate({
									'opacity': 0
								}, 400);
								return false;
							});
						}
					}
				});
			} else {
				jQuery('.pagination-wrap').removeClass('hidden');
			}
		}
	};

	/////////////////////////////////////////////
	// GALLERIES
	/////////////////////////////////////////////

	var galleriesContainer = jQuery('.galleries-wrap').find('.filterable-items');

	SWIFT.galleries = {
		init: function() {
			galleriesContainer.each(function() {
				var galleriesInstance = jQuery(this);
				if (galleriesInstance.hasClass('masonry-items')) {
					SWIFT.galleries.masonrySetup(galleriesInstance);
				} else {
					SWIFT.galleries.standardSetup(galleriesInstance);
				}
			});

			// PORTFOLIO WINDOW RESIZE
			$window.smartresize( function() {
				SWIFT.galleries.windowResized();
			});

			// Enable filter options on when there are items from that skill
			jQuery('.filtering li').each( function() {
				var filter = jQuery(this),
					filterName = jQuery(this).find('a').attr('class'),
					galleryItems = jQuery(this).parents('.galleries-wrap').find('.filterable-items');

				galleryItems.find('.gallery-item').each( function() {
					if ( jQuery(this).hasClass(filterName) ) {
						filter.addClass('has-items');
					}
				});
			}).parents('.filtering').animate({
				opacity: 1
			}, 400);

			// filter items when filter link is clicked
			jQuery('.filtering li').on('click', 'a', function(e) {
				e.preventDefault();
				jQuery(this).parent().parent().find('li').removeClass('selected');
				jQuery(this).parent().addClass('selected');
				var selector = jQuery(this).data('filter');
				var galleryItems = jQuery(this).parents('.galleries-wrap').find('.filterable-items');
				galleryItems.isotope({ filter: selector });
			});
		},
		standardSetup: function(galleryInstance) {
			galleryInstance.imagesLoaded(function () {
				SWIFT.galleries.setItemHeight();
				galleryInstance.animate({opacity: 1}, 800);
				galleryInstance.isotope({
					resizable: true,
					layoutMode: 'fitRows',
					isOriginLeft: !isRTL
				});
			});
			galleryInstance.appear(function() {
				SWIFT.galleries.animateItems(galleryInstance);
			});
		},
		masonrySetup: function(galleryInstance) {
			galleryInstance.imagesLoaded(function () {
				galleryInstance.isotope({
					resizable: false,
					itemSelector : '.gallery-item',
					layoutMode: 'masonry',
					isOriginLeft: !isRTL
				});
			});
			galleryInstance.appear(function() {
				SWIFT.galleries.animateItems(galleryInstance);
			});
		},
		animateItems: function(galleryInstance) {
			galleryInstance.find('.gallery-item').each(function(i) {
				jQuery(this).delay(i*200).animate({
					'opacity' : 1
				}, 800, 'easeOutExpo', function() {
					jQuery(this).addClass('item-animated');
				});
			});
		},
		setItemHeight: function() {
			if (!galleriesContainer.hasClass('col-1') && !galleriesContainer.hasClass('masonry-items')) {
				galleriesContainer.children().css('min-height','0');
				galleriesContainer.equalHeights();
			}
		},
		windowResized: function() {
			if (!galleriesContainer.hasClass('col-1') && !galleriesContainer.hasClass('masonry-items')) {
				SWIFT.galleries.setItemHeight();
			}
		},
	};


	/////////////////////////////////////////////
	// GALLERY
	/////////////////////////////////////////////

	SWIFT.gallery = {
		init: function() {

			jQuery('.spb_gallery_widget').each(function() {
				if (jQuery(this).hasClass('gallery-masonry')) {
					SWIFT.gallery.galleryMasonry(jQuery(this).find('.filterable-items'));
				} else if (jQuery(this).hasClass('gallery-slider')) {
					SWIFT.gallery.gallerySlider(jQuery(this));
				}
			});
		},
		galleryMasonry: function(element) {
			element.imagesLoaded(function () {
				element.isotope({
					resizable: false,
					itemSelector : '.gallery-image',
					layoutMode: 'masonry',
					isOriginLeft: !isRTL
				});
			});
			element.appear(function() {
				SWIFT.gallery.animateItems(element);
			});
		},
		animateItems: function(element) {
			element.find('.gallery-image').each(function(i) {
				jQuery(this).delay(i*200).animate({
					'opacity' : 1
				}, 800, 'easeOutExpo', function() {
					jQuery(this).addClass('item-animated');
				});
			});
		},
		gallerySlider: function(element) {

			var gallerySlider = element.find('.gallery-slider'),
				galleryNav = element.find('.gallery-nav'),
				galleryAuto = gallerySlider.data('autoplay');

			if (galleryAuto === "yes") {
				galleryAuto = true;
			} else {
				galleryAuto = false;
			}

			galleryNav.flexslider({
				animation: "slide",
				directionNav: true,
				controlNav: false,
				animationLoop: sliderLoop,
				slideshow: false,
				itemWidth: 100,
				itemMargin: 30,
				rtl: isRTL,
				asNavFor: gallerySlider
			});

			gallerySlider.flexslider({
				animation: gallerySlider.data('transition'),
				slideshow: false,
				slideshowSpeed: sliderSlideSpeed,           //Integer: Set the speed of the slideshow cycling, in milliseconds
				animationDuration: sliderAnimSpeed,         //Integer: Set the speed of animations, in milliseconds
				controlNav: false,
				animationLoop: sliderLoop,
				smoothHeight: true,
				rtl: isRTL,
				sync: galleryNav,
				start: function() {
					if ( galleryAuto ) {
						gallerySlider.appear(function() {
							gallerySlider.flexslider('play');			
						});	
					}
				}
			});

		}
	};


	/////////////////////////////////////////////
	// RECENT POSTS
	/////////////////////////////////////////////

	SWIFT.recentPosts = {
		init: function() {

			// TEAM EQUAL HEIGHTS
			var recentPostItems = jQuery('.recent-posts:not(.carousel-items,.posts-type-list)');
			recentPostItems.imagesLoaded(function () {
				SWIFT.flexSlider.thumb();
				recentPostItems.equalHeights();
			});

			// TEAM ASSETS
			$window.smartresize( function() {
				jQuery('.recent-posts:not(.carousel-items,.posts-type-list)').children().css('min-height','0');
				jQuery('.recent-posts:not(.carousel-items,.posts-type-list)').equalHeights();
			});
		}
	};


	/////////////////////////////////////////////
	// CAROUSEL FUNCTIONS
	/////////////////////////////////////////////

	SWIFT.carouselWidgets = {
		init: function() {

			// CAROUSELS
			var carousel = jQuery('.carousel-items'),
				carouselAuto = sfOptionParams.data('carousel-autoplay'),
				carouselAutoDiration = sfOptionParams.data('carousel-autoplay-diration'),
				carouselPSpeed = sfOptionParams.data('carousel-pagespeed'),
				carouselSSpeed = sfOptionParams.data('carousel-slidespeed'),
				carouselPagination = sfOptionParams.data('carousel-pagination'),
				carouselPDirection = 'ltr',
				desktopWidth = 1199;

			if (body.hasClass('vertical-header')) {
				desktopWidth = desktopWidth + jQuery('#header-section').width();
			}

			if (carouselAuto) {
				carouselAuto = carouselAutoDiration*1000;
			} else {
				carouselAuto = false;
			}
			if (carouselPagination) {
				carouselPagination = true;
			} else {
				carouselPagination = false;
			}
			if (isRTL) {
				carouselPDirection = 'rtl';
			}

			carousel.each(function() {
				var carouselInstance = jQuery('#'+jQuery(this).attr('id')),
					carouselColumns = parseInt(carouselInstance.attr("data-columns"), 10),
					carouselTransition = carouselInstance.attr("data-transition"),
					desktopCarouselItems = 4 > carouselColumns ? carouselColumns : 4,
					desktopSmallCarouselItems = 3 > carouselColumns ? carouselColumns : 3,
					mobileCarouselItems = 1;

				if (carouselInstance.hasClass('clients-items')) {
					mobileCarouselItems = 2;
				}
				if (carouselInstance.hasClass('testimonials')) {
					desktopCarouselItems = 1;
					desktopSmallCarouselItems = 1;
					mobileCarouselItems = 1;
				}

				carouselInstance.imagesLoaded(function () {

					if (!carouselInstance.hasClass('no-gutters')) {
						var carouselWidth = carouselInstance.width();
						if (isRTL) {
						carouselInstance.css('margin-right', '-15px').css('width', carouselWidth + 30);
						} else {
						carouselInstance.css('margin-left', '-15px').css('width', carouselWidth + 30);
						}
					}

					var settings = {
						loop: true,
						nav: false,
						rewind: false,
						lazyLoad: true,
						autoplay: carouselAuto,
						autoplayHoverPause: true,
						navSpeed: carouselSSpeed,
						dotsSpeed: carouselPSpeed,
						autoHeight: true,
						onTranslated: function () {
							var current = carouselInstance.find(".owl-item.active");
							var src = carouselInstance.find(".owl-item").eq(current).height();
							carouselInstance.css('height', src)
							jQuery('.carousel-asset').css('height', src);
							carouselInstance.find('.owl-wrapper').css('height', src);
							if ( current.find(".sf-menu-item-modal a, a.sf-menu-item-modal").length > 0 ) {
								current.find(".sf-menu-item-modal a, a.sf-menu-item-modal").each(function () {
									jQuery(this).prop("onclick", "javascript: return false;");
									jQuery(this).off().on("click", function(e){
										e.preventDefault();
										var post = jQuery(this).attr('href');
										jQuery(this).find(".sd-modal-content").each(function () {
											jQuery(this).hide();
										});
										var post_id = jQuery(this).data("postid");
										if ( jQuery("#modal-container .container").html() == "" ) {
											window.location.href = post;
										} else {
											SWIFT.carouselWidgets.carouselOpenModal(post, post_id, true);
										}
										return false;
									});
								});
							}
						},
						onInitialize: function() {
							carouselInstance.parents(".carousel-asset").show();
							if (!carouselInstance.hasClass('no-gutters')) {
								carouselInstance.css('width', '');
								var carouselWidth = carouselInstance.width();
								carouselInstance.css('width', carouselWidth + 30);
							}
				            jQuery(window).trigger('resize');
						},
						onInitialized: function() {
							carouselInstance.find('.flex-active-slide').resize();
							var current = carouselInstance.find(".owl-item.active");
							var src = carouselInstance.find(".owl-item").eq(current).height();
							carouselInstance.css('height', src)
							jQuery('.carousel-asset').css('height', src);
							carouselInstance.find('.owl-wrapper').css('height', src);
							carouselInstance.find('.owl-carousel').css('height', src);


							carouselInstance.find('.owl-item').attr('aria-selected','false');
				            carouselInstance.find('.owl-item.active').attr('aria-selected','true'); // let screen readers know an item is active

				            // apply meta info to next and previous buttons and make them focusable
				            carouselInstance.find('.carousel-prev, .owl-prev').attr('role','button').attr('title','Previous');
				            carouselInstance.find('.carousel-next, .owl-next').attr('role','button').attr('title','Next');
				            carouselInstance.prop('tabindex','0');
				            carouselInstance.attr('aria-label','Use left and right arrow keys to navigate');
				            jQuery('.carousel-prev, .carousel-next, .owl-next, .owl-prev').prop('tabindex','0');
				            carouselInstance.find('.owl-item').each(function () {
				            	jQuery(this).find("a").not("[aria-hidden='true']").first().prop("tabindex", "0");
				            });
				            carouselInstance.find('.owl-item.cloned a').prop("tabindex", "-1");
				            jQuery(window).trigger('resize');

				            // add instructions to keyboard users that are only visible when the carousel is focused
				            // carouselInstance.find('.owl-stage-outer').append('<p class="alert alert-success show-on-focus">Use left and right arrow keys to navigate.</p>');

				            //Go through each carousel on the page
							carouselInstance.each(function() {
							    //Find each set of dots in this carousel
							  jQuery(this).find('.owl-dot').each(function(index) {
							    //Add one to index so it starts from 1
							    jQuery(this).attr('aria-label', index + 1);
							  });
							});

						},
				        // let screen readers know which slide is active after navigation or reinit
				        onChange : function() {
				            carouselInstance.find('.owl-item').each(function () {
				            	jQuery(this).find("a").not("[aria-hidden='true']").first().prop("tabindex", "0");
				            });
				            carouselInstance.find('.owl-item.cloned a').prop("tabindex", "-1");
				            carouselInstance.find('.owl-item').attr('aria-selected','false');
				            carouselInstance.find('.owl-item.active').attr('aria-selected','true');
				            jQuery(window).trigger('resize');
				        },
						afterMove: function() {
				            carouselInstance.find('.owl-item').each(function () {
				            	jQuery(this).find("a").not("[aria-hidden='true']").first().prop("tabindex", "0");
				            });
				            carouselInstance.find('.owl-item.cloned a').prop("tabindex", "-1");
							if ( carouselInstance.closest(".pagination") ) {
								var currentItem = carouselInstance.currentItem;
								carouselInstance.closest(".pagination").find("a.focus").removeClass( 'focus' );
								carouselInstance.closest(".pagination").find('a[data-index="' + currentItem + '"]').addClass( 'focus' );
							}
				            jQuery(window).trigger('resize');
						}
					};

					if ( carouselInstance.attr("data-columns") == "inline" ) {
						settings["autoWidth"] = true;
					} else {
						settings["items"] = carouselColumns;
						settings["responsive"] = {
						    // breakpoint from 0 up
						    0: {
						    	items: mobileCarouselItems
						    },
						    480: {
						    	items: mobileCarouselItems
						    },
						    767: {
						    	items: desktopSmallCarouselItems
						    },
						    991: {
						    	items: desktopCarouselItems
						    },
						    1200: {
						    	items: desktopCarouselItems
						    }
						};
					}

					if ( carouselTransition == "fade" ) {
						settings["animateIn"] = 'fadeIn';
						settings["animateOut"] = 'fadeOut';
					}

					carouselInstance.owlCarousel(settings).animate({
						'opacity': 1
					},800, function() {
				        jQuery(window).trigger('resize');
					});

				});
			});

			// Previous
			jQuery('.carousel-next, .owl-next').click( function(e) {
				e.preventDefault();
				var carousel = jQuery(this).parents('.carousel-asset').find('.carousel-items').owlCarousel();
				if (isRTL) {
					carousel.trigger('prev.owl.carousel');
				} else {
					carousel.trigger('next.owl.carousel');
				}
				return false;
			});

			// Next
			jQuery('.carousel-prev, .owl-prev').click( function(e) {
				e.preventDefault();
				var carousel = jQuery(this).parents('.carousel-asset').find('.carousel-items').owlCarousel();
				if (isRTL) {
					carousel.trigger('next.owl.carousel');
				} else {
					carousel.trigger('prev.owl.carousel');
				}
				return false;
			});

            // listen for keyboard input
            jQuery(document).on('keydown', function(e){

                var $focusedElement = jQuery(document.activeElement),
                    type = e.which == 39? 'next': null,
                    type = e.which == 37? 'prev': type,
                    type = e.which == 13? 'enter':type;

                if ( $focusedElement ) {
					var $singleOwl = $focusedElement;

	                if (type == 'enter') {
	                    if ($focusedElement.hasClass('carousel-next')) {
	                        $singleOwl.trigger('next.owl.carousel');
	                    } else if ($focusedElement.hasClass('carousel-prev')) {
	                        $singleOwl.trigger('prev.owl.carousel');
	                    }
	                } else if (type == 'next') {
	                    $singleOwl.trigger('next.owl.carousel');
	                } else if (type == 'prev') {
	                    $singleOwl.trigger('prev.owl.carousel');
	                }
	            }
            });
		},
		carouselSwipeIndicator: function(carousel) {
			carousel.appear(function() {
				var swipeIndicator = jQuery(this).parents('.carousel-wrap').find('.sf-swipe-indicator');
				setTimeout(function() {
					swipeIndicator.fadeIn(500);
				}, 400);
				setTimeout(function() {
					swipeIndicator.addClass('animate');
				}, 1000);
				setTimeout(function() {
					swipeIndicator.fadeOut(400);
				}, 3000);
			});
		},
		carouselMinHeight: function(carousel) {
			var minHeight = parseInt(carousel.find('.carousel-item:not(.no-thumb)').eq(0).css('height'));
			carousel.find('.owl-item').each(function () {
				jQuery(this).css('min-height',minHeight+'px');
			});
		},
		carouselOpenModal: function(href, post_id, pushToHistory) {
			jQuery("body").removeClass("page-modal-done").addClass("page-modal-loading");
			windowPosition = jQuery(document).scrollTop();
			jQuery("html, body").scrollTop(0);
			if ( jQuery("body").find(".sd-modal-content-"+post_id).length > 0 ) {
				jQuery("body").find(".sd-modal-content-"+post_id).fadeIn("fast", function () {
					jQuery(window).scrollTop(0);
				});
				jQuery("body").removeClass("page-modal-loading").addClass("page-modal-done");
			} else {
				jQuery.get( templateDirectory + "/api/modal_content.php?id=" + post_id, function( content ) {
					jQuery("body").find("#modal-container > .container").append('<div class="sd-modal-content sd-modal-content-' + post_id + '" data-postid="' + post_id + '">' + content + '</div>')
					SWIFT.page.injectsvgs();
					jQuery("body").find(".sd-modal-content-"+post_id).fadeIn("fast", function () {
						jQuery(window).scrollTop(0);
					});
					jQuery("body").removeClass("page-modal-loading").addClass("page-modal-done");
				}, "html")
				.fail(function() {
					window.location.href = href;
	  			});
			}
			jQuery("body").removeClass("mobile-menu-open");
			jQuery("body").addClass("page-modal-open");
		}
	};


	/////////////////////////////////////////////
	// WIDGET FUNCTIONS
	/////////////////////////////////////////////

	SWIFT.widgets = {
		init: function() {

			// CHARTS
			if (sfIncluded.hasClass('has-chart')) {
				jQuery('.chart-shortcode').each(function(){
					jQuery(this).easyPieChart({
						animate: 1000,
						lineCap: 'round',
						lineWidth: jQuery(this).attr('data-linewidth'),
						size: jQuery(this).attr('data-size'),
						barColor: jQuery(this).attr('data-barcolor'),
						trackColor: jQuery(this).attr('data-trackcolor'),
						scaleColor: 'transparent'
					});
				});
			}

			// LOAD WIDGETS
			SWIFT.widgets.accordion();
			SWIFT.widgets.toggle();
			SWIFT.widgets.fullWidthVideo();
			SWIFT.widgets.introAnimations();
			SWIFT.widgets.iconBoxes();
			SWIFT.widgets.countAssets();

			if (sfIncluded.hasClass('has-countdown')) {
			SWIFT.widgets.countdownAssets();
			}

			if (sfIncluded.hasClass('has-imagebanner')) {
			SWIFT.widgets.imageBanners();
			}

			// SF TOOLTIPS
			if (jQuery('[rel=tooltip]').length > 0) {
			jQuery('[rel=tooltip]').tooltip();
			}

			// DYNAMIC TABS
			jQuery('.tabs-type-dynamic .menu-icon').hover(function() {
				jQuery(this).parents('.nav-tabs').addClass('show-tabs');
			});

			jQuery('.tabs-type-dynamic').mouseleave(function() {
				jQuery(this).find('.nav-tabs').removeClass('show-tabs');
			});

			jQuery('ul.nav-tabs li a, .spb_accordion_section > .ui-accordion-header a, ul.nav-tabs li button, .spb_accordion_section > .ui-accordion-header button').on('click', '', function(e){
				e.preventDefault();
				var thisTab = jQuery(this),
					asset = thisTab.parents('.spb_content_element').first();

				setTimeout(function() {
					// $window.trigger('resize');
					if (asset.find('.map-canvas').length > 0) {
						var map = asset.find('.map-canvas');
						map.each(function() {
							google.maps.event.trigger(jQuery(this), "resize");
						});
					}

					if(jQuery("iframe.iframe-resize").length > 0 ) {
						jQuery("iframe.iframe-resize").css("height", "");
						jQuery("iframe.iframe-resize").removeAttr("height");
						jQuery("iframe.iframe-resize").removeAttr("type");
						jQuery("iframe.iframe-resize").iFrameResize({heightCalculationMethod: "max"});
					}
				}, 300);
				return false;
			});

		},
		accordion: function() {
			jQuery('.spb_accordion').each(function() {
				var spb_tabs,
					active_tab = false,
					active_attr = parseInt(jQuery(this).attr('data-active'), 10);

				if (jQuery.type( active_attr ) === "number") { active_tab = active_attr; }

				if ( jQuery(this).find('.spb_accordion_section > h4 > a').length > 0 ) {
					spb_tabs = jQuery(this).find('.spb_accordion_wrapper').accordion({
						header: "> div > h4",
						autoHeight: true,
						collapsible: true,
						active: active_tab,
						heightStyle: "content"
					});
				}
			
				var accordion_index = 0;
				jQuery(this).find(".spb_accordion_section").each(function () {
					if ( active_attr == accordion_index ) {
						jQuery(this).find(".ui-accordion-header").addClass("ui-accordion-header-active");
						jQuery(this).find(".ui-accordion-content").addClass("ui-accordion-content-active");
						jQuery(this).attr("aria-expanded","true");
						jQuery(this).find(".ui-accordion-content").attr("aria-hidden","false");
					} else {
						jQuery(this).find(".ui-accordion-content").slideUp("fast", function () {
							jQuery(this).find(".ui-accordion-header").removeClass("ui-accordion-header-active");
							jQuery(this).find(".ui-accordion-content").removeClass("ui-accordion-content-active");
						});
						jQuery(this).attr("aria-expanded","false");
						jQuery(this).find(".ui-accordion-content").attr("aria-hidden","true");
					}
					accordion_index++;
				});

				jQuery(this).find('.spb_accordion_wrapper .ui-accordion-header').hover(function () {
					jQuery(this).addClass("ui-state-hover");
				});

				jQuery(this).find('.spb_accordion_wrapper .ui-accordion-header').blur(function () {
					jQuery(this).removeClass("ui-state-hover");
				});

				jQuery(this).find('.spb_accordion_wrapper .ui-accordion-header a, .spb_accordion_wrapper .ui-accordion-header button').click(function (e) {
					e.preventDefault();
					if ( jQuery(this).parents(".ui-accordion-header").hasClass("ui-accordion-header-active") ) {
						jQuery(this).parents(".spb_accordion_section").find(".ui-accordion-content").slideUp("fast", function () {
							jQuery(this).parents(".spb_accordion_section").find(".ui-accordion-header").removeClass("ui-accordion-header-active");
							jQuery(this).parents(".spb_accordion_section").find(".ui-accordion-content").removeClass("ui-accordion-content-active");
							jQuery('.blog-items').isotope('layout');
						});
						jQuery(this).attr("aria-expanded","false");
						jQuery(this).parents(".spb_accordion_section").find(".ui-accordion-content").attr("aria-hidden","true");
					} else {
						jQuery(this).parents(".spb_accordion_section").find(".ui-accordion-content").slideDown("fast", function () {
							jQuery(this).parents(".spb_accordion_section").find(".ui-accordion-header").addClass("ui-accordion-header-active");
							jQuery(this).parents(".spb_accordion_section").find(".ui-accordion-content").addClass("ui-accordion-content-active");
							jQuery('.blog-items').isotope('layout');
						});
						jQuery(this).attr("aria-expanded","true");
						jQuery(this).parents(".spb_accordion_section").find(".ui-accordion-content").attr("aria-hidden","false");
					}
					return false;
				});

			}).css('opacity', 1);

	        setTimeout(function () {
	        	if ( jQuery('.blog-items').data('isotope') ) {
	        	    jQuery('.blog-items').isotope('layout');
	        	}
	        }, 201);

		},
		tabs: function() {
		    if ( $window.width() >= 991 ) {
		      	jQuery('.spb_tabs').each(function () {
			      	// jQuery(this).find(".spb_accordion_section:first-child .ui-accordion-header a").trigger("click");
			      	var tabLinks = '';
			      	jQuery(this).find(".spb_accordion_section .ui-accordion-header").each(function () {
			      		tabLinks += jQuery(this)[0].outerHTML.replace(' tabindex="-1"', '');
			      	});
			      	var activeindex = parseInt(jQuery(this).attr('data-active'), 10);
			      	if ( activeindex >= 0 ) {
				      	jQuery(this).find(".spb_accordion_section:nth-child(" + activeindex + ") .ui-accordion-header a, .spb_accordion_section:nth-child(" + activeindex + ") .ui-accordion-header button").trigger("click");
				    } else {
			      		jQuery(this).find(".spb_accordion_section:first-child .ui-accordion-header a, .spb_accordion_section:first-child .ui-accordion-header button").trigger("click");
				    }
				    jQuery(this).find(".spb_accordion_wrapper").prepend('<div class="tab_menu hidden-xs hidden-sm">' + tabLinks + '</div>');
				    jQuery(this).find(".spb_accordion_wrapper .tab_menu a, .spb_accordion_wrapper .tab_menu button").each(function () {
				    	jQuery(this).attr("id", jQuery(this).prop("id") + "-tab");
				    });
			      	jQuery(this).css("min-height", jQuery(this).find(".tab_menu").height() + 60);
			      	jQuery(this).find(".tab_menu .ui-accordion-header.ui-accordion-header-active").addClass("active-tab").removeClass("ui-accordion-header-active");
			      	if ( activeindex >= 0 ) {
				      	jQuery(this).find(".tab_menu .ui-accordion-header:nth-child(" + activeindex + ") a, .tab_menu .ui-accordion-header:nth-child(" + activeindex + ") button").trigger("click");
				    } else {
			      		jQuery(this).find(".tab_menu .ui-accordion-header:first-child a, .tab_menu .ui-accordion-header:first-child button").trigger("click");
				    }
			    });
		      	jQuery('.spb_tabs .tab_menu .ui-accordion-header a, .spb_tabs .tab_menu .ui-accordion-header button').off().on('click', function(e) {
		      		e.preventDefault();
		      		jQuery(this).parents('.spb_tabs').find('.active-tab').removeClass("active-tab");

	      			jQuery(this).parents('.spb_tabs').find(".ui-accordion-content").slideUp(0, function () {
						jQuery(this).parents('.spb_tabs').find(".ui-accordion-header").removeClass("ui-accordion-header-active");
						jQuery(this).parents('.spb_tabs').find(".ui-accordion-content").removeClass("ui-accordion-content-active");
					});
					jQuery(this).attr("aria-expanded","false");
					jQuery(this).parents(".spb_accordion_section").find(".ui-accordion-content").attr("aria-hidden","true");
					
		      		jQuery(this).parents('.ui-accordion-header').addClass('active-tab');
		      		jQuery(this).parents('.spb_tabs').find('.spb_accordion_section .ui-accordion-header a[aria-controls="' + jQuery(this).prop("id").replace("-tab", "-content") + '"], .spb_accordion_section .ui-accordion-header button[aria-controls="' + jQuery(this).prop("id").replace("-tab", "-content") + '"]').trigger("click");
		      		
					if(jQuery(this).parents('.spb_tabs').find("iframe.iframe-resize").length > 0 ) {
						jQuery(this).parents('.spb_tabs').find("iframe.iframe-resize").css("height", "");
						jQuery(this).parents('.spb_tabs').find("iframe.iframe-resize").removeAttr("height");
						jQuery(this).parents('.spb_tabs').find("iframe.iframe-resize").removeAttr("type");
						jQuery(this).parents('.spb_tabs').find("iframe.iframe-resize").iFrameResize({heightCalculationMethod: "max"});
					}
		      		return false;
		      	});
		    }
		},
		toggle: function() {
			jQuery('.spb_toggle button, .spb_toggle a').click(function (e) {
				e.preventDefault();
				if ( jQuery(this).parents(".spb_toggle").hasClass('spb_toggle_title_active') ) {
					jQuery(this).parents(".spb_toggle").removeClass('spb_toggle_title_active').next().slideUp("fast");
					jQuery(this).attr("aria-expanded","false");
					jQuery(this).parents(".toggle-wrap").find(".spb_toggle_content").attr("aria-hidden","true");
				} else {
					jQuery(this).parents(".spb_toggle").addClass('spb_toggle_title_active').next().slideDown("fast");
					jQuery(this).attr("aria-expanded","true");
					jQuery(this).parents(".toggle-wrap").find(".spb_toggle_content").attr("aria-hidden","false");
				}
				return false;
			});
			jQuery('.spb_toggle_content').each(function() {
				if ( jQuery(this).next().is('h4.spb_toggle') === false ) {
					jQuery('<div class="last_toggle_el_margin"></div>').insertAfter(this);
				}
			});
		},
		initSkillBars: function() {
			// SKILL BARS
			SWIFT.widgets.animateSkillBars();
			jQuery('a.ui-tabs-anchor').click(function(){
				SWIFT.widgets.animateSkillBars();
			});
		},
		animateSkillBars: function() {
			jQuery('.progress:not(.animated)').each(function(){
				var progress = jQuery(this);

				progress.appear(function() {
					var progressBar = jQuery(this),
					progressValue = progressBar.find('.bar').data('value');
					progressBar.addClass('animated');
					progressBar.find('.bar').animate({
						width: progressValue + "%"
					}, 800, function() {
						progressBar.parent().find('.bar-text').css('width', progressValue + "%");
						progressBar.parent().find('.bar-text .progress-value').fadeIn(600);
					});
				});
			});
		},
		charts: function() {
			SWIFT.widgets.animateCharts();
		},
		animateCharts: function() {
			jQuery('.chart-shortcode').each(function(){
				var chart = jQuery(this);
				chart.appear(function() {
					if (!jQuery(this).hasClass('animated')) {
						jQuery(this).addClass('animated');
						var animatePercentage = parseInt(jQuery(this).attr('data-animatepercent'), 10);
						jQuery(this).data('easyPieChart').update(animatePercentage);
					}
				});
			});
		},
		fullWidthVideo: function() {
			body.on('click', '.fw-video-link', function(){
				if (jQuery(this).data('video') !== "") {
					SWIFT.widgets.openFullWidthVideo(jQuery(this));
				}
				return false;
			});

			body.on('click', '.fw-video-close', function(){
				SWIFT.widgets.closeFullWidthVideo();
			});
		},
		openFullWidthVideo: function(element) {
			jQuery('.fw-video-close').addClass('is-open');
			jQuery('.fw-video-spacer').animate({
				height: windowheight
			}, 0, 'easeInOutExpo');

			jQuery('.fw-video-area').css('display', 'block').animate({
				top: 0,
				height: '100%'
			}, 0, 'easeInOutExpo', function() {
				// load video here
				jQuery('.fw-video-area > .fw-video-wrap').html('<div class="row"><div class="container"><div class="sf-video-wrap"><iframe class="fw-video" src="'+element.data('video')+'" width="100%" height="100%" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe></div></div></div>');
			});
		},
		closeFullWidthVideo: function() {
			jQuery('.fw-video-close').removeClass('is-open');
			jQuery('.fw-video-spacer').animate({
				height: 0
			}, 0, 'easeInOutExpo', function(){
			});
			jQuery('.fw-video-area').animate({
				top:'-100%'
			}, 0, 'easeInOutExpo', function() {
				jQuery('.fw-video-area').css('display', 'none');
				jQuery('.fw-video-area .fw-video').remove();
			});

			// pause videos
			jQuery('.fw-video-area video').each(function(){
				this.pause();
			});
			setTimeout(function() {
				jQuery('.fw-video-area').find('iframe').remove();
			}, 1500);

			return false;
		},
		introAnimations: function() {

			if (!(isMobileAlt && body.hasClass('disable-mobile-animations'))) {
				jQuery('.sf-animation').each(function() {

					var animatedItem = jQuery(this),
						itemAnimation = animatedItem.data('animation'),
						itemDelay = animatedItem.data('delay');

					animatedItem.appear(function() {
						setTimeout(function() {
							animatedItem.addClass(itemAnimation + ' sf-animate');
						}, itemDelay);
					}, {accX: 0, accY: -150}, 'easeInCubic');

				});
			}
		},
		iconBoxes: function() {
			if (isMobileAlt) {
				jQuery('.sf-icon-box').on('click', function() {
					jQuery(this).addClass('sf-mobile-hover');
				});
			} else {
				jQuery('.sf-icon-box').hover(
					function() {
						jQuery(this).addClass('sf-hover');
					}, function() {
						jQuery(this).removeClass('sf-hover');
					}
				);
			}
		},
		countAssets: function() {
			jQuery('.sf-count-asset').each(function() {

				var countAsset = jQuery(this),
					countNumber = countAsset.find('.count-number'),
					countDivider = countAsset.find('.count-divider').find('span'),
					countSubject = countAsset.find('.count-subject');

				countNumber.fitText(0.4, { minFontSize: '16px', maxFontSize: '62px' });

				if (!isMobileAlt) {
					countAsset.appear(function() {

						countNumber.countTo({
							onComplete: function () {
								countDivider.animate({
									'width': 50
								}, 400, 'easeOutCubic');
								countSubject.delay(100).animate({
									'opacity' : 1,
									'bottom' : '0px'
								}, 600, 'easeOutCubic');
							}
						});

					}, {accX: 0, accY: -150}, 'easeInCubic');
				} else {
					countNumber.countTo({
						onComplete: function () {
							countDivider.animate({
								'width': 50
							}, 400, 'easeOutCubic');
							countSubject.delay(100).animate({
								'opacity' : 1,
								'bottom' : '0px'
							}, 600, 'easeOutCubic');
						}
					});
				}

			});
		},
		countdownAssets: function() {
			jQuery('.sf-countdown').each(function() {
				var countdownInstance = jQuery(this),
					year = parseInt(countdownInstance.data('year'), 10),
					month = parseInt(countdownInstance.data('month'), 10),
					day = parseInt(countdownInstance.data('day'), 10),
					countdownDate = new Date(year, month - 1, day);

				var labelStrings = jQuery('#countdown-locale'),
					pluralLabels = [labelStrings.data('label_years'),labelStrings.data('label_months'),labelStrings.data('label_weeks'),labelStrings.data('label_days'),labelStrings.data('label_hours'),labelStrings.data('label_mins'),labelStrings.data('label_secs')],
					singularLabels = [labelStrings.data('label_year'),labelStrings.data('label_month'),labelStrings.data('label_week'),labelStrings.data('label_day'),labelStrings.data('label_hour'),labelStrings.data('label_min'),labelStrings.data('label_sec')];

				countdownInstance.countdown({
					until: countdownDate,
					since: null,
					format: 'dHMS',
					labels: pluralLabels,
					labels1: singularLabels,
					onExpiry: function() {
						setTimeout(function() {
							countdownInstance.fadeOut(500);
						}, 1000);
					}
				});
			});
		},
		imageBanners: function() {
			jQuery('.sf-image-banner').each(function() {
				jQuery(this).find('.image-banner-content').vCenter();
			});
		}
	};


	/////////////////////////////////////////////
	// TEAM MEMBERS FUNCTION
	/////////////////////////////////////////////

	SWIFT.teamMembers = {
		init: function() {
			// TEAM EQUAL HEIGHTS
			var team = jQuery('.team-members:not(.carousel-items)');
			team.imagesLoaded(function () {
				if ($window.width() > 767) {
					team.equalHeights();
				}
			});

			// TEAM ASSETS
			$window.smartresize( function() {
				jQuery('.team-members:not(.carousel-items)').children().css('min-height','0');
				if ($window.width() > 767) {
					jQuery('.team-members:not(.carousel-items)').equalHeights();
				}
			});
		}
	};

	/////////////////////////////////////////////
	// RELATED POSTS FUNCTION
	/////////////////////////////////////////////

	SWIFT.relatedPosts = {
		init: function() {
			// TEAM EQUAL HEIGHTS
			var relatedItems = jQuery('.related-items');
			relatedItems.imagesLoaded(function () {
				if ($window.width() > 767) {
					relatedItems.equalHeights();
				}
			});

			// TEAM ASSETS
			$window.smartresize( function() {
				jQuery('.related-items').children().css('min-height','0');
				if ($window.width() > 767) {
					jQuery('.related-items').equalHeights();
				}
			});
		}
	};

	/////////////////////////////////////////////
	// PARALLAX FUNCTION
	/////////////////////////////////////////////

	SWIFT.parallax = {
		init: function(reset) {

			jQuery('.spb_parallax_asset').each(function(reset) {

				var parallaxAsset = jQuery(this);

				if (parallaxAsset.hasClass('sf-parallax-video')) {

					if (!isMobileAlt) {
						SWIFT.parallax.parallaxVideoInit();
					} else {
						parallaxAsset.find('video').remove();

						// Fade in
						parallaxAsset.transition({
							opacity: 1
						}, 300);
					}

					// Add resize handler
					jQuery(window).load(function() {
					    SWIFT.parallax.parallaxVideoResize(parallaxAsset);
					});
					$window.smartresize( function() {
						SWIFT.parallax.parallaxVideoResize(parallaxAsset);
					});

				} else if (parallaxAsset.hasClass('parallax-window-height')) {

					parallaxAsset.css('height', '');
					var assetHeight = $window.height();

					if (parallaxAsset.height() > assetHeight && !reset) {
						assetHeight = parallaxAsset.height();
					}

					parallaxAsset.height(assetHeight - (parseInt(parallaxAsset.css('padding-top'), 10) * 2));
					if (parallaxAsset.data('v-center') === "true") {
						parallaxAsset.find('div:first').vCenterTop();
					}

					// Fade in
					parallaxAsset.transition({
						opacity: 1
					}, 300);

					// Add resize handler
					$window.smartresize( function() {
						SWIFT.parallax.windowImageResize(parallaxAsset);
					});
				}
			});
		},
		load: function() {
			jQuery.stellar({
				horizontalScrolling: false,
				verticalOffset: 200,
			});
		},
		videoScroll: function(asset) {

			var offsetTop = asset.offset().top,
				windowTop = $window.scrollTop(),
				defaultHeight = parseInt(asset.data('height-default'), 10),
				diff = windowTop - offsetTop,
				currentTop = asset.find('.spb_content_wrapper').css('top'),
				heightDifference = defaultHeight - diff * 1.5;

			if (windowTop > offsetTop) {
				asset.css('height', heightDifference);
				asset.find('.spb_content_wrapper').css('opacity', 1 - (diff / 300));
				if (asset.hasClass('parallax-window-height') && asset.data('v-center') === "true") {
				asset.find('.spb_content_wrapper').css('top', currentTop + (diff / 4));
				} else if (asset.data('v-center') === "true") {
				asset.find('.spb_content_wrapper').css('top', (diff / 3));
				}
			} else {
				asset.css('height', defaultHeight);
				asset.find('.spb_content_wrapper').css('opacity', 1);
				if (asset.hasClass('parallax-video-height') && asset.data('v-center') === "true") {
				asset.find('.spb_content_wrapper').css('top', '50%');
				} else {
				asset.find('.spb_content_wrapper').css('top', 0);
				}
			}

		},
		windowImageResize: function(asset) {

			if (asset.hasClass('spb-row-container')) {

				var rowContentHeight = asset.find('> .spb_content_element').height();

				if (asset.hasClass('parallax-window-height')) {

					if (rowContentHeight < $window.height()) {
						rowContentHeight = $window.height();
					}
				}

				asset.height(rowContentHeight);

				if (asset.data('v-center')) {
				asset.find('> .spb_content_element').vCenterTop();
				}

			} else {

				var assetHeight = asset.height();

				if (asset.hasClass('parallax-window-height')) {

					if (assetHeight < $window.height()) {
						assetHeight = $window.height();
					}
				}

				asset.height(assetHeight - asset.css('padding-top') / 2);
				asset.find('.spb_content_wrapper').vCenterTop();
			}

		},
		parallaxVideoInit: function() {
			jQuery('.spb_parallax_asset.sf-parallax-video').each(function() {
				var parallaxAsset = jQuery(this),
					parallaxVideo = parallaxAsset.find('video'),
					parallaxVideoWidth = parallaxVideo.width(),
					parallaxContent = parallaxAsset.find('div:first'),
					parallaxAssetHeight = 0;

				if (parallaxAsset.hasClass('parallax-window-height')) {

					if (parallaxContent.height() > $window.height()) {
						parallaxAssetHeight = parallaxContent.height();
					} else {
						parallaxAssetHeight = $window.height();
					}

					parallaxAsset.animate({
						'height': parallaxAssetHeight
					}, 400);

					setTimeout(function() {
						// Scale video
						SWIFT.parallax.parallaxVideoResize(parallaxAsset);

						// Fade in
						parallaxAsset.transition({
							opacity: 1
						}, 300);
					}, 500);
					
					setTimeout(function() {
						parallaxAsset.find('.video-overlay').animate({
							'opacity': 0.8
						}, 200);
					}, 100);

					if (parallaxAsset.data('v-center') === "true") {
					parallaxContent.vCenterTop();
					}

					setTimeout(function() {
						parallaxContent.animate({
							'opacity': 1,
							'top': '50%'
						}, 600, 'easeOutExpo');
					}, 600);

					parallaxAsset.attr('data-height-default', parallaxVideo.height());
					
					setTimeout(function() {
						$window.trigger('resize');
					}, 800);

				} else {
					SWIFT.parallax.scaleVideo(parallaxAsset);
				}

				if ($window.width() < parallaxVideoWidth) {
					parallaxVideo.css('left', - (parallaxVideoWidth - $window.width()) /2);
				}

			});
		},
		parallaxVideoResize: function(parallaxAsset) {
			var parallaxContent = parallaxAsset.find('div:first'),
				parallaxAssetHeight = 0;

			if (parallaxAsset.hasClass('parallax-window-height')) {
				if (parallaxContent.height() > $window.height()) {
					parallaxAssetHeight = parallaxContent.height();
				} else {
					parallaxAssetHeight = $window.height();
				}

				parallaxAsset.animate({
					'height': parallaxAssetHeight
				}, 400);

				if (parallaxAsset.data('v-center') === "true") {
				parallaxContent.vCenterTop();
				}
			}

			setTimeout(function() {
				SWIFT.parallax.scaleVideo(parallaxAsset);
			}, 400);
		},
		scaleVideo: function(parallaxAsset) {

			var video = parallaxAsset.find('video'),
				assetHeight = parallaxAsset.outerHeight(),
				assetWidth = parallaxAsset.width(),
				videoWidth = video[0].videoWidth,
				videoHeight = video[0].videoHeight;

			// Use the largest scale factor of horizontal/vertical
			var scale_h = assetWidth / videoWidth;
			var scale_v = assetHeight / videoHeight;
			var scale = scale_h > scale_v ? scale_h : scale_v;

			// Update minium width to never allow excess space
			var min_w = videoWidth/videoHeight * (assetHeight+20);

			// Don't allow scaled width < minimum video width
			if (scale * videoWidth < min_w) {scale = min_w / videoWidth;}

			// Scale the video
			video.width(Math.ceil(scale * videoWidth +2));
			video.height(Math.ceil(scale * videoHeight +50));
			video.css('top', - (video.height() - assetHeight) /2);
			video.css('margin-left', - (video.width() - assetWidth) /2);
		},

	};


	/////////////////////////////////////////////
	// MULTILAYER PARALLAX FUNCTIONS
	/////////////////////////////////////////////

	SWIFT.mlparallax = {
		init: function() {
			jQuery('.spb_multilayer_parallax').each(function() {

				var mlParallaxAsset = jQuery(this),
					xScalar = mlParallaxAsset.data('xscalar'),
					yScalar = mlParallaxAsset.data('xscalar'),
					windowHeight = parseInt($window.height(), 10),
					assetFullscreen = mlParallaxAsset.data('fullscreen'),
					assetHeight = parseInt(mlParallaxAsset.data('max-height'), 10);

				// Asset Height
				if (jQuery('#wpadminbar:visible').length > 0) {
					windowHeight = windowHeight - jQuery('#wpadminbar').height();
				}
				if ($window.width() <= 768) {
					assetHeight = assetHeight / 2;
					assetHeight = windowHeight > assetHeight || !assetFullscreen && assetHeight ? assetHeight : windowHeight;
				} else {
					assetHeight = windowHeight > assetHeight || !assetFullscreen && assetHeight ? assetHeight : windowHeight;
				}

				// Set up once images loaded
				mlParallaxAsset.imagesLoaded(function () {

					SWIFT.mlparallax.setContentLayerPos(mlParallaxAsset);

					mlParallaxAsset.parallax({
						scalarX: xScalar,
						scalarY: yScalar
					});

					mlParallaxAsset.animate({
						'opacity' : 1,
						'height' : assetHeight
					}, 400);
				});

				// Resize
				$window.smartresize( function() {
					SWIFT.mlparallax.setAssetHeight(mlParallaxAsset);
				});
			});
		},
		setAssetHeight: function(mlParallaxAsset) {
			var windowHeight = parseInt($window.height(), 10),
				assetFullscreen = mlParallaxAsset.data('fullscreen'),
				assetHeight = parseInt(mlParallaxAsset.data('max-height'), 10);

			// Asset Height
			if (jQuery('#wpadminbar:visible').length > 0) {
				windowHeight = windowHeight - jQuery('#wpadminbar').height();
			}
			if ($window.width() <= 768) {
				assetHeight = assetHeight / 2;
				assetHeight = windowHeight > assetHeight || !assetFullscreen && assetHeight ? assetHeight : windowHeight;
			} else {
				assetHeight = windowHeight > assetHeight || !assetFullscreen && assetHeight ? assetHeight : windowHeight;
			}

			// Set new height
			mlParallaxAsset.css('height', assetHeight);
		},
		setContentLayerPos: function(mlParallaxAsset) {
			mlParallaxAsset.find('.content-layer').each(function() {
				var contentLayer = jQuery(this);
				contentLayer.vCenter();
			});
		}
	};


	/////////////////////////////////////////////
	// MAP FUNCTIONS
	/////////////////////////////////////////////

	var infowindow, bounds, directory_bounds, mapTypeIdentifier = "", mapType, mapColor, mapSaturation, mapCenterLat, mapCenterLng, companyPos = "", isDraggable = true, latitude, longitude, mapCoordinates, markersArray = [], pinTitle, pinContent, pinLink, address, pinButtonText, pinLogoURL = "";

	SWIFT.map = {
		init:function() {

			var maps = jQuery('.map-canvas');
			var mapContainer;

			if (typeof google !== 'undefined') {
				bounds = new google.maps.LatLngBounds();
			}

			maps.each(function(i, element) {
				mapContainer = element;
				var mapZoom = mapContainer.getAttribute('data-zoom');

				mapType = mapContainer.getAttribute('data-maptype');
				mapColor = mapContainer.getAttribute('data-mapcolor');
				mapCenterLat = mapContainer.getAttribute('data-center-lat');
				mapCenterLng = mapContainer.getAttribute('data-center-lng');
				mapSaturation = mapContainer.getAttribute('data-mapsaturation');

				SWIFT.map.createMap( mapContainer, mapZoom, mapType, mapColor, mapSaturation, jQuery(this), mapCenterLat, mapCenterLng );
			});

		},
		getLatLong: function(address, pintit, pinimage, fn) {
			var geocoder;
			geocoder = new google.maps.Geocoder();
			geocoder.geocode( { 'address': address}, function(results, status) {
				fn(results[0].geometry.location, results[0].geometry.location.lat(), results[0].geometry.location.lng(), pintit, pinimage);
			});
		},
		addWinContent: function(marker, html, map) {
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.setContent(html);
				infowindow.open(map, marker);
			});
		},
		addMarker: function(mapInstance, pinLogoURL, pinTitle, pinContent, pinLink, address, pinButtonText) {
			var companyMarker;

			mapCoordinates = new google.maps.LatLng(latitude, longitude);

			if (pinLogoURL) {
				companyPos = new google.maps.LatLng(latitude, longitude);
				companyMarker = new google.maps.Marker({
					position: mapCoordinates,
					map: mapInstance,
					icon: pinLogoURL,
					animation: google.maps.Animation.DROP });
			} else {
				companyPos = new google.maps.LatLng(latitude, longitude);
				companyMarker = new google.maps.Marker({
					position: mapCoordinates,
					map: mapInstance,
					animation: google.maps.Animation.DROP });
			}

			var html = '<div class="pinmarker">';
			if (pinTitle !== "") {
				html += '<h3>'+pinTitle+'</h3>';
			}
			if (pinContent !== "") {
				html += '<p>'+pinContent+' </p>';
			}
			if (pinLink !== "" && pinButtonText !== "") {
				html += '<div><a href="' + pinLink + '">'+pinButtonText+'</a></div>';
			}
			html += '</div>';

			infowindow = new google.maps.InfoWindow();
			SWIFT.map.addWinContent(companyMarker, html, mapInstance);
			bounds.extend(mapCoordinates);
		},
		createMap: function(mapContainer, mapZoom, mapType, mapColor, mapSaturation, targetMap, mapCenterLat, mapCenterLng) {

			if (google) {
				directory_bounds = new google.maps.LatLngBounds();
			}

			var pinLogoURL = "", mapLightness = false;

			if (mapSaturation == "mono-light") {
				if (mapColor === "") {
					mapColor = "#ffffff";
				}
				mapSaturation = -100;
			} else if (mapSaturation == "mono-dark") {
				if (mapColor === "") {
					mapColor = "#222222";
				}
				mapSaturation = -100;
				mapLightness = true;
			} else {
				mapSaturation = -20;
			}

			var styles = [
				{
					stylers: [
						{hue: mapColor},
						{"invert_lightness": mapLightness},
						{saturation: mapSaturation}
					]
				}
			];

			var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});

			if (isMobileAlt) {
			isDraggable = false;
			}

			if (mapType === "satellite") {
			mapTypeIdentifier = google.maps.MapTypeId.SATELLITE;
			} else if (mapType === "terrain") {
			mapTypeIdentifier = google.maps.MapTypeId.TERRAIN;
			} else if (mapType === "hybrid") {
			mapTypeIdentifier = google.maps.MapTypeId.HYBRID;
			} else {
			mapTypeIdentifier = google.maps.MapTypeId.ROADMAP;
			}

			var settings = {
				scrollwheel: false,
				draggable: isDraggable,
				mapTypeControl: true,
				mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
				navigationControl: true,
				navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
				mapTypeId: mapTypeIdentifier
			};

			var mapInstance = new google.maps.Map(mapContainer, settings);
			//var pinTitle, pinContent, pinLink, address, pinButtonText;
			var pincount = targetMap.parent().find('.pin_location').length;

			//Resize Window Responsiveness
			google.maps.event.addDomListener(window, 'resize', function() {
				//mapInstance.fitBounds(bounds);
				mapInstance.setZoom(mapInstance.getZoom());
			});

			bounds = new google.maps.LatLngBounds();
			targetMap.parent().find('.pin_location').each(function(i, element) {

				pinLogoURL = element.getAttribute('data-pinimage');
				pinTitle = element.getAttribute('data-title');
				pinContent = element.getAttribute('data-content');
				address = element.getAttribute('data-address');
				pinLink = element.getAttribute('data-pinlink');
				latitude = element.getAttribute('data-lat');
				longitude = element.getAttribute('data-lng');
				pinButtonText = element.getAttribute('data-button-text');


				if (latitude === '' && longitude === '') {

					SWIFT.map.getLatLong(address, pinTitle, pinLogoURL ,function(location, lati,longi, pintit, pinimage ){

						latitude = lati;
						longitude = longi;
						pinTitle = pintit;
						pinLogoURL = pinimage;

						SWIFT.map.addMarker(mapInstance, pinLogoURL, pinTitle, pinContent, pinLink, address, pinButtonText);

						if ( pincount > 1 ) {
							if(mapCenterLat !== '' && mapCenterLng !== ''){
								mapInstance.setZoom(parseInt(mapZoom, 10));
								mapInstance.setCenter(new google.maps.LatLng(mapCenterLat, mapCenterLng));
							}else{
								mapInstance.fitBounds(bounds);
							}
						} else {
							mapInstance.setZoom(parseInt(mapZoom, 10));
							mapInstance.setCenter(new google.maps.LatLng(latitude, longitude));
						}

					});

				} else {

					SWIFT.map.addMarker(mapInstance, pinLogoURL, pinTitle, pinContent, pinLink, address, pinButtonText);

					if ( pincount > 1 ) {
						if(mapCenterLat !== '' && mapCenterLng !== ''){
								mapInstance.setZoom(parseInt(mapZoom, 10));
								mapInstance.setCenter(new google.maps.LatLng(mapCenterLat, mapCenterLng));
							}else{
								mapInstance.fitBounds(bounds);
						}
					} else {
						mapInstance.setZoom(parseInt(mapZoom, 10));
						mapInstance.setCenter(new google.maps.LatLng(latitude, longitude));
					}

				}

			});


			// MAP COLOURIZE
			if (mapColor !== "") {
				mapInstance.mapTypes.set('map_style', styledMap);
				mapInstance.setMapTypeId('map_style');
			}

			var listener = google.maps.event.addListener(mapInstance, "idle", function() {
                    mapInstance.setZoom(parseInt( mapInstance.getZoom(), 10));
                    google.maps.event.removeListener(listener);
                });

		}
	};


	/////////////////////////////////////////////
	// MAP DIRECTORY FUNCTIONS
	/////////////////////////////////////////////

	SWIFT.mapDirectory = {
		init : function(searchTerm, locationFilter, categoryFilter) {

			searchTerm = jQuery('#dir-search-value').val();
			locationFilter = jQuery('.directory-location-option').val();
			categoryFilter = jQuery('.directory-category-option').val();
			
			var mapsDirectory = jQuery('.map-directory-canvas');
			var mapDirContainer, mapZoom;

			mapsDirectory.each(function(i, element) {

				var mapDirContainer = element,
					mapZoom = mapDirContainer.getAttribute('data-zoom'),
					mapType = mapDirContainer.getAttribute('data-maptype'),
					mapColor = mapDirContainer.getAttribute('data-mapcolor'),
					mapSaturation = mapDirContainer.getAttribute('data-mapsaturation'),
					mapExcerpt = mapDirContainer.getAttribute('data-excerpt');
					
					if ( categoryFilter == null || categoryFilter == 'All' ){
						categoryFilter = mapDirContainer.getAttribute('data-directory-category');	
					}

				SWIFT.mapDirectory.directoryMap( mapDirContainer, mapZoom, mapType, mapColor, mapSaturation, jQuery(this), searchTerm, locationFilter, categoryFilter);

			});
		},
		searchDirectory: function(){
			SWIFT.mapDirectory.init(jQuery('#dir-search-value').val(), jQuery('.directory-location-option').val(), jQuery('.directory-category-option').val());
		},
		getLatLong: function(address, fn){
			var geocoder;
			geocoder = new google.maps.Geocoder();
			geocoder.geocode( { 'address': address}, function(results, status) {
				fn(results[0].geometry.location, results[0].geometry.location.lat(), results[0].geometry.location.lng());
			});
		},
		addWinContent: function(marker, html, map){
				markersArray.push(marker);
				google.maps.event.addListener(marker, 'click', function() {
				infowindow.setContent(html);
				infowindow.open(map, marker);
			});
		},
		addMarkerDir: function(mapInstance, pinLogoURL, pinTitle, pinContent, pinLink, address, pinButtonText,pinFeaturedImage, lat, lng){
			var companyMarker, pinImgContainer;

			mapCoordinates = new google.maps.LatLng(lat, lng);

			if (pinLogoURL) {
				companyPos = new google.maps.LatLng(lat, lng);
				companyMarker = new google.maps.Marker({
					position: mapCoordinates,
					map: mapInstance,
					icon: pinLogoURL,
					optimized: false,
					animation: google.maps.Animation.DROP });
			} else {
				companyPos = new google.maps.LatLng(lat, lng);
				companyMarker = new google.maps.Marker({
					position: mapCoordinates,
					map: mapInstance,
					animation: google.maps.Animation.DROP });
			}
			if (pinFeaturedImage === null) {
				pinImgContainer = '';
			} else {
				pinImgContainer = '<img class="info-window-img" alt="" src="'+pinFeaturedImage+'" height="140" width="140"/>';
			}

			var html = '';
			if (pinLink === '' || pinButtonText === '') {
				html = '<div class="pinmarker">'+pinImgContainer+'<div class="pinmarker-container"><h3>'+pinTitle+'</h3><div class="excerpt">'+pinContent+'</div></div></div>';
			} else {
				html = '<div class="pinmarker">'+pinImgContainer+'<div class="pinmarker-container"><h3>'+pinTitle+'</h3><div class="excerpt">'+pinContent+'</div><a class="pin-button" href="' + pinLink + '" target="_blank">'+pinButtonText+'</a></div></div>';
			}


			infowindow = new google.maps.InfoWindow();
			SWIFT.mapDirectory.addWinContent(companyMarker, html, mapInstance);
			directory_bounds.extend(mapCoordinates);
		},
		directoryMap: function(mapContainer, mapZoom, mapType, mapColor, mapSaturation, targetMap, searchTerm, locationFilter, categoryFilter, excerpt) {

			var pinLogoURL = "", mapLightness = false;
			var mapFilter = mapContainer.getAttribute('data-directory-map-filter');
			var mapFilterPos =  mapContainer.getAttribute('data-directory-map-filter-pos');
			var mapResults =  mapContainer.getAttribute('data-directory-map-results');
			var excerpt = mapContainer.getAttribute('data-excerpt');
			var directoryItemHtml = "";

			//Only if we want to display the map
			if (mapResults !== 'list') {

				if (mapSaturation == "mono-light") {
					if (mapColor === "") {
						mapColor = "#ffffff";
					}
					mapSaturation = -100;
				} else if (mapSaturation == "mono-dark") {
					if (mapColor === "") {
						mapColor = "#222222";
					}
					mapSaturation = -100;
					mapLightness = true;
				} else {
					mapSaturation = -20;
				}

				var styles = [
					{
						stylers: [
							{hue: mapColor},
							{"invert_lightness": mapLightness},
							{saturation: mapSaturation}
						]
					}
				];

				var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});

				if (isMobileAlt) {
					isDraggable = false;
				}

				if (mapType === "satellite") {
				mapTypeIdentifier = google.maps.MapTypeId.SATELLITE;
				} else if (mapType === "terrain") {
				mapTypeIdentifier = google.maps.MapTypeId.TERRAIN;
				} else if (mapType === "hybrid") {
				mapTypeIdentifier = google.maps.MapTypeImapDirContainerd.HYBRID;
				} else {
				mapTypeIdentifier = google.maps.MapTypeId.ROADMAP;
				}


			} else {
				jQuery(mapContainer).hide();
			}

			var pinTitle, pinContent, pinLink, address, pinButtonText, pinShortContent, pinThumbnail;
			var pincount = targetMap.parent().find('.pin_location').length;

			directory_bounds = new google.maps.LatLngBounds();

			if (categoryFilter === "") {
				categoryFilter = mapContainer.getAttribute('data-directory-category');
			}

			//Ajax call to get the Directory Itens
			var data = {
				action: 'sf_directory',
				search_term: searchTerm,
				location_term: locationFilter,
				category_term: categoryFilter,
				item_excerpt: excerpt

			};

			jQuery.post(mapContainer.getAttribute('data-ajaxurl'), data, function(response) {
				var json = jQuery.parseJSON(response);
				var mapFilterHtml;
				var pincount = json.results;

				jQuery('.directory-results').hide();

				var settings = {
					scrollwheel: false,
					draggable: isDraggable,
					mapTypeControl: true,
					mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
					navigationControl: true,
					navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
					mapTypeId: mapTypeIdentifier
				};

				if (pincount > 0) {

					var mapInstance = new google.maps.Map(mapContainer, settings);
					markersArray = [];

					// MAP COLOURIZE
					if (mapColor !== "" && mapResults != 'list') {
						mapInstance.mapTypes.set('map_style', styledMap);
						mapInstance.setMapTypeId('map_style');
					}

					//Resize Window Responsiveness
					google.maps.event.addDomListener(window, 'resize', function() {
						mapInstance.fitBounds(directory_bounds);
						mapInstance.setZoom(parseInt(mapZoom, 10));
					});
					
					var resultText = "", thumbnail_image = '';
										
					if ( pincount > 1 ) {
					resultText = json.results_text_1 + ' '+pincount+' '+json.results_text_2plural;
					} else {
					resultText = json.results_text_1 + ' '+pincount+' '+json.results_text_2;
					}
					jQuery(mapContainer).parent().parent().parent().find('.directory-results').prepend('<div class="results-title"><h2>'+resultText+'</h2>');

				} else {

					for (var i=0; i < markersArray.length; i++) {
						markersArray[i].setMap(null);
					}

					jQuery(mapContainer).parent().parent().parent().find('.directory-results').append('<div class="results-title"><h2>'+json.errormsg+'</h2>');

				}

				if (pincount > 0 && mapResults != 'list') {

					jQuery(mapContainer).show();
					jQuery('.directory-results').append(json.pagination);

					jQuery.each(json.items, function(i, item) {

						//Get the directory itens details
						var pinTitle = item.pin_title,
							pinLogoURL = item.pin_logo_url,
							pinContent = item.pin_content,
							pinShortContent = item.pin_short_content,
							address = item.pin_address,
							pinLink = item.pin_link,
							pinButtonText = item.pin_button_text,
							latitude = item.pin_lat,
							longitude = item.pin_lng,
							pinThumbnail = item.pin_thumbnail,
							categories = item.categories,
							location = item.location,
							thumbnail_image	= '',
							result_header = true,
							hasThumb = false,
							extra_class = '';
							if ( excerpt != '' ){
								pinContent = pinShortContent;
							}

						if (pinThumbnail && pinLink) {
							hasThumb = true;
							thumbnail_image = '<figure class="animated-overlay overlay-alt" role="none"><img itemprop="image" src="'+pinThumbnail+'" alt="'+pinTitle+'"><a href="'+pinLink+'" target="_blank" class="link-to-post"></a><div class="figcaption-wrap"></div><figcaption><div class="thumb-info"><h4>'+pinTitle+'</h4></div></figcaption></figure>';
						} else if (pinThumbnail) {
							hasThumb = true;
							thumbnail_image = '<figure role="none"><img itemprop="image" src="'+pinThumbnail+'" alt="'+pinTitle+'"></figure>';
						}

						//Add the Directory List Results
						if (!hasThumb) {
							extra_class = 'no-thumb';
						}

						if ( mapResults != 'list') {

							//Add directory item to the map
							SWIFT.mapDirectory.addMarkerDir(mapInstance, pinLogoURL, pinTitle, pinContent, pinLink, address, pinButtonText,pinThumbnail, latitude, longitude);

							if ( pincount > 1 ) {
								mapInstance.fitBounds(directory_bounds);
							} else {
								mapInstance.setZoom(parseInt(mapZoom, 10));
								mapInstance.setCenter(new google.maps.LatLng(latitude, longitude));
							}
						}
					});
				}else{
					jQuery(mapContainer).hide();
				}
				jQuery('.directory-results').show();
			});
		}
	};


	/////////////////////////////////////////////
	// CROWDFUNDING FUNCTIONS
	/////////////////////////////////////////////

	SWIFT.crowdfunding = {
		init:function() {

			if (jQuery('#back-this-project').find('.edd_price_options').length <= 0) {
				jQuery('#back-this-project > h2').css('display', 'none');
			}

			if (jQuery('#back-this-project').hasClass('project-donate-only')) {
				jQuery('.edd_price_options').find('li').first().addClass('atcf-selected');
				jQuery('.edd_price_options').find('li').first().find('input[type="radio"]').prop('checked', true);
			}

			jQuery('.atcf-price-option').on('click', function() {

				var selectedOption = jQuery(this),
					selectedPrice = selectedOption.data('price').substr(0, selectedOption.data('price').indexOf('-'));

				if (selectedOption.hasClass('inactive')) {
					return false;
				}

				if (selectedPrice && jQuery('#atcf_custom_price').val().length <= 0) {
				jQuery('#atcf_custom_price').val(selectedPrice);
				}
				jQuery('.atcf-price-option').find('input[type="radio"]').prop('checked', false);
				jQuery('.atcf-price-option').removeClass('atcf-selected');
				selectedOption.find('input[type="radio"]').prop('checked', true);
				selectedOption.addClass('atcf-selected');
			});

			var campaignItems = jQuery('.campaign-items:not(.carousel-items)');
			campaignItems.imagesLoaded(function () {
				campaignItems.equalHeights();
			});

		}
	};

	/////////////////////////////////////////////
	// RELOAD FUNCTIONS
	/////////////////////////////////////////////

	SWIFT.reloadFunctions = {
		init:function() {

			// Remove title attributes from images to avoid showing on hover
			jQuery('img[title]').each(function() {
				jQuery(this).removeAttr('title');
			});

			if (!isAppleDevice) {
				jQuery('embed').show();
			}

			// Animate Top Links
			jQuery('.animate-top').on('click', function(e) {
				e.preventDefault();
				jQuery('body,html').animate({scrollTop: 0}, 800, 'linear');
			});
		},
		load:function() {
			if (!isMobile) {

				// Button hover tooltips
				jQuery('.tooltip').each( function() {
					jQuery(this).css( 'marginLeft', '-' + Math.round( (jQuery(this).outerWidth(true) / 2) ) + 'px' );
				});

				jQuery('.comment-avatar').hover( function() {
					jQuery(this).find('.tooltip' ).stop().animate({
						bottom: '44px',
						opacity: 1
					}, 500, 'easeInOutExpo');
				}, function() {
						jQuery(this).find('.tooltip').stop().animate({
							bottom: '25px',
							opacity: 0
						}, 400, 'easeInOutExpo');
				});

				jQuery('.grid-image').hover( function() {
					jQuery(this).find('.tooltip' ).stop().animate({
						bottom: '85px',
						opacity: 1
					}, 500, 'easeInOutExpo');
				}, function() {
						jQuery(this).find('.tooltip').stop().animate({
							bottom: '65px',
							opacity: 0
						}, 400, 'easeInOutExpo');
				});

			}
		}
	};


	/////////////////////////////////////////////
	// GLOBAL VARIABLES
	/////////////////////////////////////////////

	var $window = jQuery(window),
		body = jQuery('body'),
		sfIncluded = jQuery('#sf-included'),
		sfOptionParams = jQuery('#sf-option-params'),
		windowheight = SWIFT.page.getViewportHeight(),
		deviceAgent = navigator.userAgent.toLowerCase(),
		isMobile = deviceAgent.match(/(iphone|ipod|android|iemobile)/),
		isMobileAlt = deviceAgent.match(/(iphone|ipod|ipad|android|iemobile)/),
		isAppleDevice = deviceAgent.match(/(iphone|ipod|ipad)/),
		isAndroid = deviceAgent.match(/(android)/),
		isIEMobile = deviceAgent.match(/(iemobile)/),
		parallaxScroll = navigator.userAgent.indexOf('Safari') != -1 || navigator.userAgent.indexOf('Chrome') == -1,
		IEVersion = SWIFT.page.checkIE(),
		isRTL = body.hasClass('rtl') ? true : false,
		flexUseCSS = isMobileAlt ? false : true,
		sliderAuto = sfOptionParams.data('slider-autoplay') ? true : false,
		sliderLoop = sfOptionParams.data('slider-loop') ? true : false,
		sliderSlideSpeed = sfOptionParams.data('slider-slidespeed'),
		sliderAnimSpeed = sfOptionParams.data('slider-animspeed'),
		lightboxControlArrows = sfOptionParams.data('lightbox-nav') === "arrows" ? true : false,
		lightboxThumbs = sfOptionParams.data('lightbox-thumbs') ? true : false,
		lightboxSkin = sfOptionParams.data('lightbox-skin') === "dark" ? "metro-black" : "metro-white",
		lightboxSharing = sfOptionParams.data('lightbox-sharing') ? true : false,
		hasProductZoom = jQuery('#sf-included').hasClass('has-productzoom') && !body.hasClass('mobile-browser') ? true : false,
		productZoomType = sfOptionParams.data('product-zoom-type') === "lens" ? "lens" : "inner",
		templateDirectory = sfOptionParams.data('template-directory'),
		stylesheetDirectory = sfOptionParams.data('stylesheet-directory'),
		pagePermalink = sfOptionParams.data('permalink'),
		windowPosition = jQuery(document).scrollTop();

	SWIFT.isScrolling = false;

	/////////////////////////////////////////////
	// LOAD + READY FUNCTION
	/////////////////////////////////////////////

	var onReady = {
		init: function(){
			SWIFT.page.init();
			if (jQuery('.sf-super-search').length > 0) {
			SWIFT.superSearch.init();
			}
			if (jQuery('#header-section').length > 0) {
			SWIFT.header.init();
			}
			SWIFT.nav.init();
			if (sfIncluded.hasClass('has-products') || body.hasClass('woocommerce-cart') || body.hasClass('woocommerce-account') || body.hasClass('single-tribe_events')) {
			SWIFT.woocommerce.init();
			}
			SWIFT.woocommerce.cartWishlist();
			if (sfIncluded.hasClass('has-portfolio')) {
			SWIFT.portfolio.init();
			}
			if (sfIncluded.hasClass('has-portfolio-showcase')) {
			SWIFT.portfolio.portfolioShowcaseInit();
			}
			if (jQuery('.spb_partner_grid_element').length > 0) {
			SWIFT.sponsor.init();
			}
			if (sfIncluded.hasClass('has-blog')) {
			SWIFT.blog.init();
			}
			if (sfIncluded.hasClass('has-infscroll')) {
			SWIFT.blog.infiniteScroll();
			}
			if (sfIncluded.hasClass('has-gallery')) {
			SWIFT.gallery.init();
			}
			if (sfIncluded.hasClass('has-galleries')) {
			SWIFT.galleries.init();
			}
			SWIFT.widgets.init();
			if (sfIncluded.hasClass('has-team')) {
			SWIFT.teamMembers.init();
			}
			if (sfIncluded.hasClass('has-carousel')) {
			SWIFT.carouselWidgets.init();
			}
			if (sfIncluded.hasClass('has-parallax')) {
			SWIFT.parallax.init();
			}
			if (sfIncluded.hasClass('has-ml-parallax')) {
			SWIFT.mlparallax.init();
			}
			SWIFT.crowdfunding.init();
			SWIFT.reloadFunctions.init();
		}
	};
	var onLoad = {
		init: function(){
			SWIFT.flexSlider.init();
			if (sfIncluded.hasClass('has-parallax')) {
			SWIFT.parallax.load();
			}
			if (sfIncluded.hasClass('has-products') || body.hasClass('woocommerce-cart') || body.hasClass('woocommerce-account')) {
			SWIFT.woocommerce.load();
			}
			SWIFT.page.load();
			if (body.hasClass('page-transitions')) {
			SWIFT.page.fadePageIn();
			}
			if (sfIncluded.hasClass('has-chart')) {
			SWIFT.widgets.charts();
			}
			SWIFT.widgets.tabs();
			if (sfIncluded.hasClass('has-progress-bar')) {
			SWIFT.widgets.initSkillBars();
			}
			if (sfIncluded.hasClass('has-map')) {
				SWIFT.map.init();
				SWIFT.mapDirectory.init('', '', '');

				jQuery('#directory-search-button').on( "click", function() {
					jQuery('.directory-search-form').submit();
				});
				jQuery('ul.nav-tabs li a, .spb_accordion_section > .ui-accordion-header a, ul.nav-tabs li button, .spb_accordion_section > .ui-accordion-header button').click(function(e){
					e.preventDefault();
					var thisTabHref = jQuery(this).attr('href');
					if (jQuery(thisTabHref).find('.spb_gmaps_widget').length > 0) {
						SWIFT.map.init();
						SWIFT.mapDirectory.init('', '', '');
					}
					return false;
				});
			}
			SWIFT.reloadFunctions.load();
			SWIFT.woocommerce.variations();
		}
	};

	jQuery(document).ready(onReady.init);
	jQuery(window).load(onLoad.init);

})(jQuery);

// Remove default back button cache
window.onpageshow = function(event) {
    if (event.persisted) {
        window.location.reload();
    }
};
