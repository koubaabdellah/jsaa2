jQuery(document).ready(function(){jQuery('.search-top').click(function(){jQuery('#masthead .search-form-top').toggle();});jQuery('.menu-primary-container .menu-item-has-children').append('<span class="sub-toggle"> <i class="fa fa-angle-right"></i> </span>');jQuery('.menu-primary-container .sub-toggle').click(function(){jQuery(this).parent('.menu-item-has-children').children('ul.sub-menu').first().slideToggle('1000');jQuery(this).children('.fa-angle-right').first().toggleClass('fa-angle-down');});jQuery('#scroll-up').hide();jQuery(window).scroll(function(){if(jQuery(this).scrollTop()>1000){jQuery('#scroll-up').fadeIn();}else{jQuery('#scroll-up').fadeOut();}});jQuery('a#scroll-up').click(function(){jQuery('body,html').animate({scrollTop:0},800);return false;});if(typeof jQuery.fn.sticky!=='undefined'){var wpAdminBar=jQuery('#wpadminbar');if(wpAdminBar.length){jQuery('#site-navigation').sticky({topSpacing:wpAdminBar.height()});}else{jQuery('#site-navigation').sticky({topSpacing:0});}}
if(typeof jQuery.fn.easytabs!=='undefined'){jQuery('.tabbed-widget').easytabs();}
if(typeof jQuery.fn.fitVids!=='undefined'){jQuery('.fitvids-video').fitVids();}
if(typeof jQuery.fn.magnificPopup!=='undefined'){jQuery('.image-popup').magnificPopup({type:'image'});jQuery('.gallery').magnificPopup({delegate:'a',type:'image',gallery:{enabled:true}});jQuery('.colormag-ticker-news-popup-link').magnificPopup({type:'ajax',callbacks:{parseAjax:function(mfpResponse){var setting=jQuery.magnificPopup.instance,content=jQuery(setting.currItem.el[0]),fragment=(content.data('fragment'));mfpResponse.data=jQuery(mfpResponse.data).find(fragment);}}});}
if(typeof jQuery.fn.newsTicker!=='undefined'){var breaking_news_slide_effect=colormag_ticker_settings.breaking_news_slide_effect;var breaking_news_duration=colormag_ticker_settings.breaking_news_duration;var breaking_news_speed=colormag_ticker_settings.breaking_news_speed;jQuery('.newsticker').newsTicker({row_height:25,max_rows:1,speed:breaking_news_speed,direction:breaking_news_slide_effect,duration:breaking_news_duration,autostart:1,pauseOnHover:1,start:function(){jQuery('.newsticker').css('visibility','visible');}});var breaking_news_widget_init=function(breaking_news_slider,breaking_news_slider_up,breaking_news_slider_down,breaking_news_slider_direction,breaking_news_slider_duration,breaking_news_slider_row_height,breaking_news_slider_max_row){jQuery(breaking_news_slider).newsTicker({row_height:breaking_news_slider_row_height,max_rows:breaking_news_slider_max_row,duration:breaking_news_slider_duration,direction:breaking_news_slider_direction,prevButton:jQuery(breaking_news_slider_up),nextButton:jQuery(breaking_news_slider_down),start:function(){jQuery('.breaking-news-widget-slide').css('visibility','visible');}});};var breaking_news_widget_wrapper=jQuery('.breaking_news_widget_inner_wrap');jQuery(breaking_news_widget_wrapper).each(function(){var breaking_news_slider='#'+jQuery(this).children('.breaking-news-widget-slide').attr('id');var breaking_news_slider_up='#'+jQuery(this).children('.fa-arrow-up').attr('id');var breaking_news_slider_down='#'+jQuery(this).children('.fa-arrow-down').attr('id');var breaking_news_slider_direction=jQuery(this).children('.breaking-news-widget-slide').data('direction');var breaking_news_slider_duration=jQuery(this).children('.breaking-news-widget-slide').data('duration');var breaking_news_slider_row_height=jQuery(this).children('.breaking-news-widget-slide').data('rowheight');var breaking_news_slider_max_row=jQuery(this).children('.breaking-news-widget-slide').data('maxrows');breaking_news_widget_init(breaking_news_slider,breaking_news_slider_up,breaking_news_slider_down,breaking_news_slider_direction,breaking_news_slider_duration,breaking_news_slider_row_height,breaking_news_slider_max_row);});}
if(typeof jQuery.fn.bxSlider!=='undefined'){var category_init=function(category_slider,category_mode,category_speed,category_pause,category_auto){jQuery(category_slider).bxSlider({mode:category_mode,speed:category_speed,auto:category_auto,pause:category_pause,adaptiveHeight:true,nextText:'<div class="category-slide-next"><i class="fa fa-angle-right"></i></div>',prevText:'<div class="category-slide-prev"><i class="fa fa-angle-left"></i></div>',pager:false,tickerHover:true,onSliderLoad:function(){jQuery('.widget_slider_area_rotate').css('visibility','visible');jQuery('.widget_slider_area_rotate').css('height','auto');}});};var category_slider_wrapper=jQuery('.widget_featured_slider_inner_wrap');jQuery(category_slider_wrapper).each(function(){var category_slider='#'+jQuery(this).children('.widget_slider_area_rotate').attr('id');var category_mode=jQuery(this).children('.widget_slider_area_rotate').data('mode');var category_speed=jQuery(this).children('.widget_slider_area_rotate').data('speed');var category_pause=jQuery(this).children('.widget_slider_area_rotate').data('pause');var category_auto=jQuery(this).children('.widget_slider_area_rotate').data('auto');category_init(category_slider,category_mode,category_speed,category_pause,category_auto);});var style5_slider_init=function(style5_slider,style5_speed,style5_pause,style5_auto){jQuery(style5_slider).bxSlider({minSlides:1,maxSlides:2,slideWidth:390,slideMargin:20,speed:style5_speed,pause:style5_pause,auto:style5_auto,adaptiveHeight:true,nextText:'<div class="slide-next"><i class="fa fa-angle-right"></i></div>',prevText:'<div class="slide-prev"><i class="fa fa-angle-left"></i></div>',pager:false,captions:false,onSliderLoad:function(){jQuery('.widget_block_picture_news .widget_highlighted_post_area').css('visibility','visible');jQuery('.widget_block_picture_news .widget_highlighted_post_area').css('height','auto');}});};var style5_slider_wrapper=jQuery('.widget_block_picture_news_inner_wrap');jQuery(style5_slider_wrapper).each(function(){var style5_slider='#'+jQuery(this).children('.widget_block_picture_news .widget_highlighted_post_area').attr('id');var style5_speed=jQuery(this).children('.widget_block_picture_news .widget_highlighted_post_area').data('speed');var style5_pause=jQuery(this).children('.widget_block_picture_news .widget_highlighted_post_area').data('pause');var style5_auto=jQuery(this).children('.widget_block_picture_news .widget_highlighted_post_area').data('auto');style5_slider_init(style5_slider,style5_speed,style5_pause,style5_auto);});var style6_slider_init=function(style6_slider_class,style6_pager_class,style6_mode,style6_speed,style6_pause,style6_auto){jQuery(style6_slider_class).bxSlider({mode:style6_mode,speed:style6_speed,pause:style6_pause,auto:style6_auto,pagerCustom:style6_pager_class,controls:false,nextText:'',prevText:'',nextSelector:'',prevSelector:'',captions:false,onSliderLoad:function(){jQuery('.thumbnail-big-sliders').css('visibility','visible');jQuery('.thumbnail-big-sliders').css('height','auto');}});};var style6_slider_wrapper=jQuery('.thumbnail-slider-news');jQuery(style6_slider_wrapper).each(function(){var style6_slider_class='#'+jQuery(this).children('.thumbnail-big-sliders').attr('id');var style6_pager_class='#'+jQuery(this).children('.thumbnail-slider').attr('id');var style6_mode=jQuery(this).children('.thumbnail-big-sliders').data('mode');var style6_speed=jQuery(this).children('.thumbnail-big-sliders').data('speed');var style6_pause=jQuery(this).children('.thumbnail-big-sliders').data('pause');var style6_auto=jQuery(this).children('.thumbnail-big-sliders').data('auto');style6_slider_init(style6_slider_class,style6_pager_class,style6_mode,style6_speed,style6_pause,style6_auto);});var style7_slider_init=function(style7_slider,style7_speed){jQuery(style7_slider).bxSlider({minSlides:5,maxSlides:8,slideWidth:150,slideMargin:12,ticker:true,speed:style7_speed,tickerHover:true,useCSS:false,onSliderLoad:function(){jQuery('.image-ticker-news').css('visibility','visible');jQuery('.image-ticker-news').css('height','auto');}});};var style7_slider_wrapper=jQuery('.widget_ticker_news_colormag');jQuery(style7_slider_wrapper).each(function(){var style7_slider='#'+jQuery(this).children('.image-ticker-news').attr('id');var style7_speed=jQuery(this).children('.image-ticker-news').data('speed');style7_slider_init(style7_slider,style7_speed);});jQuery('.blog .gallery-images, .archive .gallery-images, .search .gallery-images, .single-post .gallery-images').bxSlider({mode:'fade',speed:1500,auto:true,pause:3000,adaptiveHeight:true,nextText:'',prevText:'',nextSelector:'.slide-next',prevSelector:'.slide-prev',pager:false});}
if((typeof jQuery.fn.theiaStickySidebar!=='undefined')&&(typeof ResizeSensor!=='undefined')){var height=jQuery('#site-navigation-sticky-wrapper').outerHeight();if(height===null){height=0;}
jQuery('#primary, #secondary').theiaStickySidebar({additionalMarginTop:40+height});}});jQuery(document).on('click','#site-navigation ul li.menu-item-has-children > a',function(event){var menuClass=jQuery(this).parent('.menu-item-has-children');if(!menuClass.hasClass('focus')&&jQuery(window).width()<=768){menuClass.addClass('focus');event.preventDefault();menuClass.children('.sub-menu').css({'display':'block'});}});