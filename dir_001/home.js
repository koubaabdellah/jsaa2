
function bdtracking(theURL,theWindow) {
              	  var myWindow =  window.open("/portal/exit_tracking.jsp?APPURL="+escape(theURL)+"&APPID="+theWindow,"cpnewwin"+theWindow,"resizable=1,status=1,scrollbars=1,menubar=0,toolbar=0,location=0,directories=0");
              	  myWindow.focus();
              	}

              	function eMtwindow(theURL,theAppId,theWindow) {
              	  var myWindow = window.open("/portal/exit_tracking.jsp?APPURL="+escape(theURL)+"&APPID="+theAppId,theWindow);
              	  myWindow.focus();
              	}
              	
              	function newwindow(theURL,theWindow) {
              		  if(theURL.match("winstyle=popup")!=null){
              			var w=550;
				var h=350;
				 var left = (screen.width/2)-(w/2);
				 var top = (screen.height/2)-(h/2);	
				
				//var myWindow = window.open("/portal/exit_tracking.jsp?APPURL="+escape(theURL)+"&APPID="+theWindow,"cpnewwin"+theWindow,"width=520,height=275,resizable=0,status=1,scrollbars=0,menubar=1,toolbar=0,location=0,directories=0");
				var myWindow = window.open("/portal/exit_tracking.jsp?APPURL="+escape(theURL)+"&APPID="+theWindow,"cpnewwin"+theWindow,"width=520,height=300,resizable=no,toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no,copyhistory=no,top="+top+",left="+left);	
              		  }else {
              		  var myWindow = window.open("/portal/exit_tracking.jsp?APPURL="+escape(theURL)+"&APPID="+theWindow,"cpnewwin"+theWindow);
              		  }
              		  myWindow.focus();
              		}
              	
              	
              	function openClickToChat(url) {
              		if(url != ''){
              			
              	        var c2cwin = window.open(url,"cpwinbdclicktochat","width=472,height=320");
              			c2cwin.top.focus();
              		}
              	}
              	
              	
              	function alertMsgPopup() {
              		
                    vReturnValue = showModalDialog(
                                    '/portal/alertmsg_banner.jsp',
                                    "myWindow",
           					'dialogHeight:500px;dialogWidth:900px;location:no;status:no;resizable:no;scroll:yes;center:yes;');
 }
              	
function openHotLink(hotLinkURL){
	window.close();
       	var hotLinkWindow=window.open(hotLinkURL);
	hotLinkWindow.focus();
}
              	

