/**
 * @file
 *
 * Main menu features.
 *
 */

(function ($) {
  Drupal.behaviors.mainMenuFeatures = {
    attach: function (context) {       
      $(context).find('#link-signup').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('opened');
        $(context).find('#navbar-header').toggleClass('open');
      });

      $(context).find('#link-menupopup').on('click', function (e) {
        e.preventDefault();
        $(context).find('#main_menu_overlay').toggleClass('open');
      });

      $(context).find('#block-menu-close-button').on('click', function (e) {
        e.preventDefault();
        $(context).find('#main_menu_overlay').removeClass('open');
      });

      //$(context).find('.main-menu-links-wrapper .field').on('click', function (e){
      //  e.preventDefault();
      //  $(this).toggleClass('drop');
      //  $(this).find('.menu').toggleClass('open');
      //});

      if ($(window).width() < 768) {
        $(context).find('.navbar-toggle').on('click', function (e) {
          e.preventDefault();
          $(context).find('#main_menu_overlay').toggleClass('open');
          $(context).find('.navbar-collapse').removeClass('in');
          return false;
        });
      }

      $(document).keyup(function (e) {
        if (e.keyCode == 27) { // esc keycode
          $(context).find('#main_menu_overlay').removeClass('open');
        }
      });

      $(context).find('#main_menu_overlay').find('.block').find('.block-title').on('click', function (e) {
        e.preventDefault();
        var $padding = $(this).css('padding-left').replace("px", "");
        if ($padding > 0) {
          $(this).toggleClass('open');
          $(this).parent().children('.menu.nav').slideToggle();
        }
      });
    }
  }

//   hide hot as himss if there is no content
  $( document ).ready(function() {
    var sponsor_content = jQuery(".view-sponsor-related-content").length;

    if (sponsor_content == 0) {
        jQuery(".node-news.view-mode-full .field-name-hot-himss-right, .node-news.view-mode-full .field-name-more-from-sponsor, .node-news.view-mode-full   .view-sponsor-related-content").hide();

    } else if (sponsor_content == 1) {
      sponsor_content = jQuery(".view-sponsor-related-content").html().trim().length;
      if (sponsor_content == 0) {
        jQuery(".node-news.view-mode-full .field-name-hot-himss-right, .node-news.view-mode-full .field-name-more-from-sponsor, .node-news.view-mode-full   .view-sponsor-related-content").hide();
      }
    }
  });
})(jQuery);
;
/* ========================================================================
 * Used when browsing DHIMSS Pages through the
 * sets cookie if app=1 query string exists
 * if cookie is set it adds extra css to hide dhimss ads, navbar, etc
 * ======================================================================== */

  //Sets cookie name, value, and time
  function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays*24*60*60*1000));
      var expires = "expires="+ d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  //Gets value of specified cookie
  function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for(var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
              c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
          }
      }
      return "";
  }

  //Gets query string from URL
   var z = window.location.search;

  //If query string is ?app=1 a cookie is set called mobile_app_browse
   if (z == '?app=1') {
     setCookie('mobile_app_browse', 'himss17app', 365);
   }

  var mobile_app_browse = getCookie("mobile_app_browse");

   jQuery(document).ready(function($) {
  // Code that uses jQuery's $ can follow here.
  var mobile_app_browse = getCookie("mobile_app_browse");

  if (mobile_app_browse != "") {
       // Add CSS to hide Navbar, Footer, Ads, etc.
       //Hides navbar/header
       $("#navbar").css({"display": "none"});
       $("#header-section").css({"display": "none"});
       //hides footer
       $("footer.footer").css({"display": "none"});
       $(".powered-by").css({"display": "none"});
       //hides ads
       $(".block-oas-blocks").css({"display": "none"});
       $(".oas-ad-Top-wrapper").css({"display": "none"});
       $(".oas-ad-Right1-wrapper").css({"display": "none"});
       $(".oas-ad-Right2-wrapper").css({"display": "none"});
       $(".oas-ad-Right3-wrapper").css({"display": "none"});
       $(".oas-ad-Bottom-wrapper").css({"display": "none"});
       $(".oas-ad-Bottom1-wrapper").css({"display": "none"});
       $(".oas-ad-Bottom2-wrapper").css({"display": "none"});
       $(".oas-ad-Position3-wrapper").css({"display": "none"});
       $(".oas-ad-Position4-wrapper").css({"display": "none"});
       $(".page-himss-corporate-resources #highlighted-section").css({"display": "none"});
       //fixes padding on page title
       $("#social-media-hub-page .hitn-himss-page-title-wrapper").css({"margin": "0px !important"});
       $(".corporate-member-resources-filters").css({"display": "none"});
     }
  });
;
/*
 Sticky-kit v1.1.2 | WTFPL | Leaf Corcoran 2015 | http://leafo.net
*/
(function(){var b,f;b=this.jQuery||window.jQuery;f=b(window);b.fn.stick_in_parent=function(d){var A,w,J,n,B,K,p,q,k,E,t;null==d&&(d={});t=d.sticky_class;B=d.inner_scrolling;E=d.recalc_every;k=d.parent;q=d.offset_top;p=d.spacer;w=d.bottoming;null==q&&(q=0);null==k&&(k=void 0);null==B&&(B=!0);null==t&&(t="is_stuck");A=b(document);null==w&&(w=!0);J=function(a,d,n,C,F,u,r,G){var v,H,m,D,I,c,g,x,y,z,h,l;if(!a.data("sticky_kit")){a.data("sticky_kit",!0);I=A.height();g=a.parent();null!=k&&(g=g.closest(k));
if(!g.length)throw"failed to find stick parent";v=m=!1;(h=null!=p?p&&a.closest(p):b("<div />"))&&h.css("position",a.css("position"));x=function(){var c,f,e;if(!G&&(I=A.height(),c=parseInt(g.css("border-top-width"),10),f=parseInt(g.css("padding-top"),10),d=parseInt(g.css("padding-bottom"),10),n=g.offset().top+c+f,C=g.height(),m&&(v=m=!1,null==p&&(a.insertAfter(h),h.detach()),a.css({position:"",top:"",width:"",bottom:""}).removeClass(t),e=!0),F=a.offset().top-(parseInt(a.css("margin-top"),10)||0)-q,
u=a.outerHeight(!0),r=a.css("float"),h&&h.css({width:a.outerWidth(!0),height:u,display:a.css("display"),"vertical-align":a.css("vertical-align"),"float":r}),e))return l()};x();if(u!==C)return D=void 0,c=q,z=E,l=function(){var b,l,e,k;if(!G&&(e=!1,null!=z&&(--z,0>=z&&(z=E,x(),e=!0)),e||A.height()===I||x(),e=f.scrollTop(),null!=D&&(l=e-D),D=e,m?(w&&(k=e+u+c>C+n,v&&!k&&(v=!1,a.css({position:"fixed",bottom:"",top:c}).trigger("sticky_kit:unbottom"))),e<F&&(m=!1,c=q,null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),
h.detach()),b={position:"",width:"",top:""},a.css(b).removeClass(t).trigger("sticky_kit:unstick")),B&&(b=f.height(),u+q>b&&!v&&(c-=l,c=Math.max(b-u,c),c=Math.min(q,c),m&&a.css({top:c+"px"})))):e>F&&(m=!0,b={position:"fixed",top:c},b.width="border-box"===a.css("box-sizing")?a.outerWidth()+"px":a.width()+"px",a.css(b).addClass(t),null==p&&(a.after(h),"left"!==r&&"right"!==r||h.append(a)),a.trigger("sticky_kit:stick")),m&&w&&(null==k&&(k=e+u+c>C+n),!v&&k)))return v=!0,"static"===g.css("position")&&g.css({position:"relative"}),
a.css({position:"absolute",bottom:d,top:"auto"}).trigger("sticky_kit:bottom")},y=function(){x();return l()},H=function(){G=!0;f.off("touchmove",l);f.off("scroll",l);f.off("resize",y);b(document.body).off("sticky_kit:recalc",y);a.off("sticky_kit:detach",H);a.removeData("sticky_kit");a.css({position:"",bottom:"",top:"",width:""});g.position("position","");if(m)return null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),h.remove()),a.removeClass(t)},f.on("touchmove",l),f.on("scroll",l),f.on("resize",
y),b(document.body).on("sticky_kit:recalc",y),a.on("sticky_kit:detach",H),setTimeout(l,0)}};n=0;for(K=this.length;n<K;n++)d=this[n],J(b(d));return this}}).call(this);
;
(function ($, Drupal, window, document, undefined) {
  Drupal.behaviors.slideshow_sharethis_fix = {
    attach: function (context, settings) {
      /*
       * Fix for owl carousel not loading right slide based on page query
       *  - next, prev buttons are overwritten
       * */
      var el_width = $("#block-views-slider-block").width();
      var currentPage = urlParam("page"); //searchParams.get("page");
      var currentLink = window.location.href;
      currentLink = currentLink.substring(0, currentLink.indexOf("?"));

      function updateSlideshow(currentPage, speed) {
        return {
          transition: "all " + speed + "ms ease",
          transform:
            "translate3d(-" + el_width * (currentPage - 1) + "px, 0px, 0px)",
        };
      }

      function updateURL(currentPage) {
        if (currentPage === null) {
          currentPage = 1;
        }
        history.pushState(
          "",
          document.title,
          currentLink + "?page=" + currentPage
        );
      }

      function urlParam(name) {
        var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(
          window.location.href
        );
        if (results == null) {
          return null;
        } else {
          return decodeURI(results[1]) || 0;
        }
      }

      $("#block-views-slider-block").ready(function () {
        if ($("#block-views-slider-block").length == 0) return;
        $(".owl-next").addClass("custom-owl-next");
        $(".owl-next").removeClass("owl-next");
        $(".owl-prev").addClass("custom-owl-prev");
        $(".owl-prev").removeClass("owl-prev");

        $(window).resize(function () {
          el_width = $("#block-views-slider-block").width();
        });

        var countSlides = $(".owl-wrapper > div").length;

        function updateCurrentPage(currentPage) {
          if (!(countSlides >= currentPage) || currentPage < 1) {
            return 1;
          }
          return currentPage;
        }

        function updateCss() {
          currentPage = updateCurrentPage(currentPage);
          $(".owl-wrapper").css(updateSlideshow(currentPage, 0));
          updateURL(currentPage);
        }

        updateCss();

        $(".custom-owl-next").click(function (event) {
          currentPage = Number(currentPage) + 1;
          if (currentPage > countSlides) {
            currentPage = 1;
          }
          $(".owl-wrapper").css(updateSlideshow(currentPage, 300));
          updateURL(currentPage);
        });

        $(".custom-owl-prev").click(function (event) {
          currentPage = Number(currentPage) - 1;
          if (currentPage < 1) {
            currentPage = countSlides;
          }
          $(".owl-wrapper").css(updateSlideshow(currentPage, 300));
          updateURL(currentPage);
        });
      });
    },
  };
})(jQuery, Drupal, this, this.document);
;
(function ($) {
  Drupal.behaviors.pushdown_ads_script = {
    attach: function (context, settings) {
      if (window.googletag && googletag.apiReady) {
        googletag.pubads().addEventListener('impressionViewable', function(event) {
          var leaderboard_ad_1 = $("#ads_leaderboard_leaderboard1 iframe");
          if (leaderboard_ad_1.contents().find(".gam_pushdown").length) {
            leaderboard_ad_1.hover(
              function () {
                $(this).stop(true, false).animate({
                  height: "420px"
                });
                leaderboard_ad_1.contents().find("#GAM_RMF_POS_ORG").hide();
              }, function () {
                $(this).stop(true, false).animate({
                  height: "90px"
                }, 400, 'swing', function () {
                  leaderboard_ad_1.contents().find("#GAM_RMF_POS_ORG").show();
                });
              });
          }
        });
      }
    }
  };
})(jQuery);;
(function ($) {
  Drupal.behaviors.boxes_edit_link = {
    attach: function () {
      /*
       * Fix Edit box link for boxes.
       * */
      $("[id*=boxes-box]").each(function () {
        var $contectualLinks = $(this).find(".boxes-box-controls");

        if ($contectualLinks) {
          var $boxId = $(this).attr("id").substr(10);
          var editLink = "/admin/structure/block/manage/boxes/" + $boxId + "/configure?destination=/" + Drupal.settings.getQ;

          $contectualLinks.find(".links").append("<li class='edit'><a href='" + editLink + "'>Edit Box</a></li>");
        }
      });
    }
  };
})(jQuery);
;
