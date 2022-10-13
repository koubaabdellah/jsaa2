//This is an IE bug fix put in by MF on 1/2/12. When you use console.log() without the developer
//tools open, window.onLoad does not fire. This snip of code will create an object, to store
//the console messages in, if one does not exist (when dev tools is closed). 
//Taken from: http://www.wastedpotential.com/why-does-my-javascript-fail-in-internet-explorer/
try {
	console //does the console exist?
}
catch(e) { //if not...
	console = {}; //create a console object for IE
	console.log = function() {}; //add a log method to the new console object
	//add other console methods here if you need them
}
function log(msg) {

}
