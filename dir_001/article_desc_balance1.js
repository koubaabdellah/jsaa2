function content_balance(){
	var hig = document.getElementById('main').offsetHeight;
	var rankheight = document.getElementById('ranking').offsetHeight;
	//alert(hig);   
    if(hig <=450 )
	  {
	    document.getElementById('ads_side').style.display='none'; 
	    document.getElementById('whitepaper_side').style.display='none';
	    document.getElementById('editorpick_side').style.display='none';
	    
	  } 

	 if(hig >=450 && hig <=570)
	  {

		document.getElementById('ads_side').style.display='none'; 
	    var box1 = 11; 
			var i;
			for (i = 1; i <= box1; i++) {	
			   document.getElementById("edtr-"+i).style.display='none';
			}
		document.getElementById('editorpick_side').style.display='none';	
	  }
	  if(hig >=571 && hig <=600)
	  { 
	    document.getElementById('editorpick_side').style.display='none';
	    document.getElementById('whitepaper_side').style.display='none';
	    var box1 = 9;
			var i;
			for (i = 1; i <= box1; i++) {	
			   document.getElementById("edtr-"+i).style.display='none';
			}
	  }
	  if(hig >=601 && hig <=700)
	  {
	     var box1 = 10;
			var i;
			for (i = 1; i <= box1; i++) {	
			   document.getElementById("edtr-"+i).style.display='none';
			}
			document.getElementById('magazine_side').style.display='block';
	  }
	  if(hig >=701 && hig <=800)
	  {
		   var box1 = 10;
			var i;
			for (i = 1; i <= box1; i++) {	
			   document.getElementById("edtr-"+i).style.display='none';
			}
			document.getElementById('magazine_side').style.display='block';
	  }
	  if(hig >=801 && hig <=900)
	  {
		   var box1 = 10;
			var i;
			for (i = 1; i <= box1; i++) {	
			   document.getElementById("edtr-"+i).style.display='none';
			}
			document.getElementById('magazine_side').style.display='block';
	 }
	 if(hig >=901 && hig <=1000)
	  {
		   var box1 = 9;
			var i;
			for (i = 1; i <= box1; i++) {	
			   document.getElementById("edtr-"+i).style.display='none';
			}
			document.getElementById('ads_side').style.display='none'; 
	 }
	  if(hig >=1001 && hig <=1100)
	  {
		 var box1 = 8;
			var i;
			for (i = 1; i <= box1; i++) {	
			   document.getElementById("edtr-"+i).style.display='none';
			}
			document.getElementById('ads_side').style.display='none'; 
	  }
	  if(hig >=1101 && hig <=1250)
	  {
		  
		var box1 = 8;
			var i;
			for (i = 1; i <= box1; i++) {	
			   document.getElementById("edtr-"+i).style.display='none';
			}
			 document.getElementById('ads_side').style.display='none'; 
	  }

      if(hig >=1251 && hig <=1350)
	  {
		  if(rankheight > 0 )
			 {
		  	var box1 = 11;
				var i;
				for (i = 1; i <= box1; i++) {	
				   document.getElementById("edtr-"+i).style.display='none';
				}
					document.getElementById('editorpick_side').style.display='none';
			  }else{
			  	var box1 = 8;
					var i;
					for (i = 1; i <= box1; i++) {	
					   document.getElementById("edtr-"+i).style.display='none';
					}		
		     }

	  }
	  if(hig >=1351 && hig <=1460)
	  {
	    if(rankheight > 0 )
		  {
			var box1 = 11;
				var i;
				for (i = 1; i <= box1; i++) {	
				   document.getElementById("edtr-"+i).style.display='none';
				}
				document.getElementById('editorpick_side').style.display='none';
		  }else{
		  	var box1 = 7;
				var i;
				for (i = 1; i <= box1; i++) {	
				   document.getElementById("edtr-"+i).style.display='none';
				}		

		     }
	
	    }
	  if(hig >=1461 && hig <=1500)
	  {
	  	var box1 = 6;
			var i;
			for (i = 1; i <= box1; i++) {	
			   document.getElementById("edtr-"+i).style.display='none';
			}
			document.getElementById('magazine_side').style.display='block';
	  }
	  
      if(hig >=1501 && hig <=1650)
	  {
	    if(rankheight > 100 )
		  {
			var box1 = 9;
				var i;
				for (i = 1; i <= box1; i++) {	
				   document.getElementById("edtr-"+i).style.display='none';
				}
		  }else{	  	
	  		var box1 = 6;
			var i;
				for (i = 1; i <= box1; i++) {	
				   document.getElementById("edtr-"+i).style.display='none';
				}				
		   }
		document.getElementById('ads_side').style.display='none';   
	  }
	   if(hig >=1651 && hig <=1780)//1760
	  {  	
	  	var box1 = 7;
			var i;
			for (i = 1; i <= box1; i++) {	
			   document.getElementById("edtr-"+i).style.display='none';
			}
			document.getElementById('magazine_side').style.display='block';
	  }
	   if(hig >1781 && hig <=1980)
	  { 	
	    if(rankheight > 100 )
		  {
			var box1 = 9;
			var i;
		   for (i = 1; i <= box1; i++) {	
		   document.getElementById("edtr-"+i).style.display='none';
			}
		  }else{	
	  	    var box1 = 5;
			var i;
			for (i = 1; i <= box1; i++) {	
			   document.getElementById("edtr-"+i).style.display='none';
			}
		}	
		document.getElementById('ads_side').style.display='none'; 
	  }
	  if(hig >1981 && hig <=2050)
	  { 	
	  	var box1 = 5;
			var i;
			for (i = 1; i <= box1; i++) {	
			   document.getElementById("edtr-"+i).style.display='none';
			}
		  if(rankheight > 100 )
			 {		
			document.getElementById('ads_side').style.display='none'; 
		    }
	  }
	   if(hig >=2051 && hig <=2360)
	  { 

	  	var box1 = 3;
			var i;
			for (i = 1; i <= box1; i++) {	
			   document.getElementById("edtr-"+i).style.display='none';
			}
		  if(rankheight > 100 )
			 {		
			document.getElementById('ads_side').style.display='none'; 
		    }
	  }
	  if(hig >=2361 && hig <=2460)
	  { 	
	  	var box1 = 0;
			var i;
			for (i = 1; i <= box1; i++) {	
			   document.getElementById("edtr-"+i).style.display='none';
			}
		  if(rankheight > 0 )
			 {		
			document.getElementById('ads_side').style.display='none'; 
		    }			

	  }
	  if(hig >=2461 && hig <=2600)
	  { 	
	  	var box1 = 0;
			var i;
			for (i = 1; i <= box1; i++) {	
			   document.getElementById("edtr-"+i).style.display='none';
			}
			document.getElementById('magazine_side').style.display='block';
	  }
	  if(hig >=2661 && hig <=2800)
	  { 	
	  	var box1 = 0;
			var i;
			for (i = 1; i <= box1; i++) {	
			   document.getElementById("edtr-"+i).style.display='none';
			}
			document.getElementById('magazine_side').style.display='block';
	  }
}
$(document).ready(function(){
    content_balance();
}); 