/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-06-05 16:24:56
 * @version $Id$
 */

$(init) 
function init() {
	/*$("#hd-nav-down-cont").css({
		"opacity":"0"
	});*/
    
    $("#hd-nav-down-cont").animate({
    	opacity:"1",
    	left:"0"
    	},
    	500);
};
