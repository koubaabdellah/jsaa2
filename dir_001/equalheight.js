(function($){
	function detectmob() {
		if(window.innerWidth <= 748) {
			return true;
			//alert( "true" );
		} else {
			return false;
			//alert( "false" );
		}
	}
	function equalHeight(group) {
		tallest = 0;
		group.each(function() {
			thisHeight = $(this).height();
			if(thisHeight > tallest) {
				tallest = thisHeight;
			}
		});
		group.height(tallest);
	}
	$(document).ready(function() {
		if(!detectmob()){
			for (i = 0; i < 20; i++) {
				equalHeight($(".home-row-" + i + " .makeequal"));
			}
		}
		if(detectmob()){
			var setHeight = $("#headerwrapper").height();
			$("#container").css({"padding-top":(setHeight+6)});
		}
	});
	$(document).ready(function(){
		$('ul.tabs li').click(function(){
			var tab_id = $(this).attr('data-tab');

			$('ul.tabs li').removeClass('current');
			$('.tab-content').removeClass('current');

			$(this).addClass('current');
			$("#"+tab_id).addClass('current');
		})
	})
})(jQuery);
