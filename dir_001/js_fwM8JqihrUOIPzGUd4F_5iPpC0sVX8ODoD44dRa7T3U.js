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
        $(context).find('#navbar').toggleClass('open');
      });

      $(context).find('#link-menupopup, .navbar-toggle').on('click', function (e) {
        e.preventDefault();
        $(context).find('#main_menu_overlay').toggleClass('open');
      });

      $(context).find('.menu-toggle').on('click', function (e) {
        e.preventDefault();
        $(context).find('#main_menu_overlay').toggleClass('open');
      });

      $(context).find('#block-menu-close-button').on('click', function (e) {
        e.preventDefault();
        $(context).find('#main_menu_overlay').removeClass('open');
      });

      $(document).keyup(function (e) {
        if (e.keyCode == 27) { // esc keycode
          $(context).find('#main_menu_overlay').removeClass('open');
        }
      });

      $(context).find('#main_menu_overlay').find('.block-menu').find('.block-title').on('click', function (e) {
        e.preventDefault();
        var $padding = $(this).css('padding-left').replace("px", "");
        if ($padding > 0) {
          $(this).toggleClass('open');
          $(this).parent().children('.menu.nav').slideToggle();
        }
      });
    }
  }
})(jQuery);
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
