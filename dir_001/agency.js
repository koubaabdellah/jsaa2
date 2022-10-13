(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 60)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });
  
  $('section').click(function() {
    $('.navbar-collapse').collapse('hide');
  });
  
  $(window).scroll(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 140
  });

  // Collapse the navbar when page is scrolled
  /*$(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });*/
  
    $("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });
  $("#job1").click(function(){
        $("#job1f").slideToggle("slow");
    }); 
    
    $("#job2").click(function(){
        $("#job2f").slideToggle("slow");
    });
    
    $("#job3").click(function(){
        $("#job3f").slideToggle("slow");
    });
    
    $("#upanel").hide();
    $("#dpanel").hide();
    $("#ppanel").hide();
    $("#gpanel").hide();
    $("#hpanel").hide();
    $("#spanel").hide();
    $("#vpanel").hide();
    $("#cpanel").hide();
    $(".uminus").hide();
    $(".dminus").hide();
    $(".pminus").hide();
    $(".gminus").hide();
    $(".hminus").hide();
    $(".sminus").hide();
    $(".vminus").hide();
    $(".cminus").hide();
    
    $("#ubut").click(function(){
        $("#upanel").slideToggle("slow");
        $(".uplus").toggle();
        $(".uminus").toggle();
    }); 
    
    $("#dbut").click(function(){
        $("#dpanel").slideToggle("slow");
        $(".dplus").toggle();
        $(".dminus").toggle();
    });
    
    $("#pbut").click(function(){
        $("#ppanel").slideToggle("slow");
        $(".pplus").toggle();
        $(".pminus").toggle();
    });
    $("#gbut").click(function(){
        $("#gpanel").slideToggle("slow");
       $(".gplus").toggle();
        $(".gminus").toggle();
    });
    
    $("#hbut").click(function(){
        $("#hpanel").slideToggle("slow");
        $(".hplus").toggle();
        $(".hminus").toggle();
    }); 
    
    $("#sbut").click(function(){
        $("#spanel").slideToggle("slow");
        $(".splus").toggle();
        $(".sminus").toggle();
    });
    
    $("#vbut").click(function(){
        $("#vpanel").slideToggle("slow");
        $(".vplus").toggle();
        $(".vminus").toggle();
    });
    
    $("#cbut").click(function(){
        $("#cpanel").slideToggle("slow");
        $(".cplus").toggle();
        $(".cminus").toggle();
    });
    
  /*function Utils() {

}

Utils.prototype = {
    constructor: Utils,
    isElementInView: function (element, fullyInView) {
        var pageTop = $(window).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).height();

        if (fullyInView === true) {
            return ((pageTop < elementTop) && (pageBottom > elementBottom));
        } else {
            return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
        }
    }
};

var Utils = new Utils();*/
  
  /* card code */
  //$( '#sb-container' ).swatchbook();
    
/*$(window).scroll(function(){
	var isElementInView = Utils.isElementInView($('#sb-container'), true);
if (isElementInView) {
    console.log('in view');
    $( '#sb-container' ).swatchbook( { } );
} else {
    console.log('out of view');
    
}
});*/
    /* end card code */
    
   

})(jQuery); // End of use strict
