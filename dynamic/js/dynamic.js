$(document).ready(function() {


	$(window).scroll(function(){
		var top=$(".header-navigation").offset().top+$(".header-navigation").height()-$(window).scrollTop();
		// console.log(top);
		if(top<=0){
			$(".fixedpart").css({
				"position": "fixed",
				"top": "0",
				"width": "100%",
				"border-bottom": "1px solid #EFEFEF",
				"z-index": "10",
				"background-color": "rgba(255,255,255,0.5)"
		    });
		    $(".fixedpart-cnt").css({
		    	"border-bottom": "0"
		    });
	    }
        else{
	    	$(".fixedpart").css({
				"position": "relative",
				// "top":"0",
				"width": "1024px;",
				"border-bottom": "0",
				"background-color": "rgb(255,255,255)"
		    });
		    $(".fixedpart-cnt").css({
		    	"border-bottom": "1px solid #EFEFEF"
		    });
	    }
	    //数字缓慢出现的效果
	    var topNum=$(".cnt-words-num").offset().top-$(window).scrollTop()-$(window).height();
	    if(topNum<0){
	    	$(".cnt-words-num").css({
	    		opacity: '1',
	    		transform: 'translate(0,0)'
	    	});
	    }

	    var topNum1=$(".main3-words-num").offset().top-$(window).scrollTop()-$(window).height();
	    if(topNum1<0){
	    	$(".main3-words-num").css({
	    		opacity: '1',
	    		transform: 'translate(0,0)'
	    	});
	    }

	    var topNum2=$(".main9-words-right").offset().top-$(window).scrollTop()-$(window).height();
	    if(topNum2<0){
	    	$(".main9-words-right").css({
	    		opacity: '1',
	    		transform: 'translate(0,0)'
	    	});
	    }

	    //第八模块图片的缓慢刷新出现
	    var topPic=$(".main8-pic").offset().top+$(".main8-pic").height()-$(window).scrollTop()-$(window).height();
	    if(topPic<0){
	    	$(".main8-pic-dy").fadeOut(2000);
	    }
	    //第九模块图片（及数字）缓慢展开
	    var topPic1=$(".main9-pic").offset().top+$(".main9-pic").height()-$(window).scrollTop()-$(window).height();
	    // console.log(topPic1);
	    if(topPic1<0){
	    	$(".main9-pic-rm").css({top: '-28px'});
	    	$(".main9-pic-rt").css({top: '-210px'});
	    	$(".main9-pic-lm").css({top: '-150px'});
	    	$(".main9-pic-lt").css({top: '-330px'});
	    }
	    //try 滑动
	    // var scrolltop = (document.body.scrollTop-1500)*0.01;
	    // // console.log(scrolltop);
	    // var backgroundpy=$(".main2-pic").css("background-position-y");
	    // // console.log(backgroundpy>'-270px');
	    // if (backgroundpy>'0%') {
	    // 	if(scrolltop>-7&&scrolltop<0){
	    // 		$(".main2-pic").animate({backgroundPositionY:'-=1%'},"fast");
	    // 	}
	    // }
	    // if (backgroundpy<'100%') {
	    // 	if(scrolltop<7&&scrolltop>0){
	    // 		$(".main2-pic").animate({backgroundPositionY:'+=1%'},"fast");
	    // 	}
	    // }


	});
	$('.main2-pic').hover(function() {
		let a = -50;
		$('.main2-pic').mousewheel(function(event, delta, deltaX, deltaY) {
		if(delta == 1 && a>=-100)
		{
		a-=10;
		$(this).css("background-position-y",a);
		}
		else if(a <= 0)
		{
		a+=10;
		$(this).css("background-position-y",a);
		}
		});
	});
	$('.main5-pic').hover(function() {
		let b = -30;
		$('.main5-pic-img').mousewheel(function(event, delta, deltaX, deltaY) {
		if(delta == 1 && b>=-100)
		{
		b-=10;
		$(this).css("transform","translate(0px,"+b+")");
		}
		else if(b <= 0)
		{
		b+=10;
		$(this).css("transform","translate(0px,"+b+")");
		}
		});
	});

	$('.main10-pic').hover(function() {
		let height10 = 60;
		$('.main10-pic').mousewheel(function(event, delta, deltaX, deltaY) {
		if(delta == 1 && height10>=-100)
		{
		height10-=10;
		$(this).css("background-position-y",height10);
		}
		else if(height10 >= 0)
		{
		height10+=10;
		$(this).css("background-position-y",height10);
		}
		});
	});
});
