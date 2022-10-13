//this file was added on 19 Aug 2020
	function echeck(str) {
		
                var at="@"
                var dot="."
                var lat=str.indexOf(at)
                var lstr=str.length
                var ldot=str.indexOf(dot)

                if (str == "") {
                   return false
                }
                if (str.indexOf(at)==-1){
                   return false
                }

                if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr){
                   return false
                }

                if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr){
                    return false
                }

                 if (str.indexOf(at,(lat+1))!=-1){
                    return false
                 }

                 if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){
                    return false
                 }

                 if (str.indexOf(dot,(lat+2))==-1){
                    return false
                 }

                 if (str.indexOf(" ")!=-1){
                    return false
                 }
            return true
        }
        
		
		function userIDCheck(userlogin){		   
	      var alphanumCheck = checkalphaNumFunc(userlogin);
		  			
			if(alphanumCheck){
				return true;
			}
			else{
				return false;
			}			       		
		}
		
		 
		function checkalphaNumFunc(userlogin){
		
		  var letters = /^([0-9a-z]){6,12}$/;
          if(userlogin.match(letters))
          {
            return true;
           }
          else
          {
           return false;
          }		  
       }