/*
Scripts for Iframe Builder
*/

jQuery(function(){

    /* Height script not working cross domain */

    /*
    jQuery(document).ready(function() {

        var iFrames = jQuery('iframe');

        function iResize() {
        	for(var i=0, j=iFrames.length; i<j; i++) {
                alert('here');
                iFrames[i].style.height = iFrames[i].contentWindow.document.body.offsetHeight + 'px';
            }
        }
        
        iFrames.ready(function() { 
            iResize();
        });
    	
    });
    */

    jQuery(document).ready(function() {

        var wrapper = jQuery(".input_fields_wrap");
        var add_button = jQuery(".add_field_button");

        var x = 1;

        jQuery(add_button).click(function(e){
            e.preventDefault(); x++; jQuery(wrapper).append('<div><input type="text" name="whitelist[]"/><button class="button remove_field">-</button></div>');
        });
        
        jQuery(wrapper).on("click",".remove_field", function(e){
            e.preventDefault(); jQuery(this).parent('div').remove(); x--;
        });

    });

});
