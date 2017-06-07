/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-06-04 12:44:38
 * @version $Id$
 */

$(function(){


		$(window).scroll(function(){
		var top=$("#hd-nav-up").offset().top+$("#hd-nav-up").height()-$(window).scrollTop();
		// console.log(top);
		if(top<=0){
			$("#hd-nav-mid").css({
				"position": "fixed",
				"top": "0",
				"width": "100%",
				"border-bottom": "1px solid #EFEFEF",
				"z-index": "10",
				"background-color": "#F9F9F9"
		    });
		    $("#hd-nav-mid-cont").css({
		    	"border-bottom": "0"
		    });
	    }
        else{
	    	$("#hd-nav-mid").css({
				"position": "relative",
				"width": "100%;",
				"border-bottom": "0",
				"background-color": "#F9F9F9"
		    });
		    $("#hd-nav-mid-cont").css({
		    	"border-bottom": "1px solid #EFEFEF"
		    });
	    }
	});

	var $div1 = $('#div1'),
		$div2 = $('#div2');
	$div2.hide();
	$(document).on('click', function(event){
		var $target = $(event.target);
		if($target.attr('id') == $div1.attr('id')){
			$div2.slideDown('fast');
		}else if($target.attr('id') != $div2.attr('id')){
			$div2.slideUp('fast');
		}
	})

	$("#main-list-down").css({
		"display":"none"
	});
	var flag=0;
	$(".main-list-topp").click(function(event) {
		/* Act on the event */
		$("#main-list-down").slideToggle(1000);
		if(!flag){
			flag=1;
			$(".main-list-topp").html("收起产品列表");
			$(".main-list-add").removeClass('rotate-90').addClass('rotate-45');
		}
		else{
			flag=0;
			$(".main-list-topp").html("展开产品列表");
			$(".main-list-add").removeClass('rotate-45').addClass('rotate-90');
		}
		
	});
})