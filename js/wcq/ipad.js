
var check=1;
var check2=1;
$(function(){
    var retina_height = $(".retina").offset().top;	
    var func_height = $(".func").offset().top;	
    var app_height = $(".app").offset().top;	
    var ios_height = $(".ios").offset().top;	
    var touch_height = $(".touch").offset().top;	
    var camera_height = $(".camera").offset().top;	
    var connect_height = $(".connect").offset().top;	
    var design_height = $(".design").offset().top;	
    var LTE_height = $(".LTE").offset().top;	
    var part_height = $(".part").offset().top;	
    var video1_height=$(".func-video").offset().top;	

	$(window).scroll(function(){
		var top=$(".header-navigation").offset().top+$(".header-navigation").height()-$(window).scrollTop();
        var this_scrollTop = $(this).scrollTop();
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
		    });
	    }
	    
        if((this_scrollTop>(retina_height-400))&&(this_scrollTop<(retina_height+1000))){
        	// $(".retina").fadeIn("slow");
            $(".retina").css("opacity","1");
            $(".retina").css("transform","translate(0, 0)");
        }
        if((this_scrollTop>(func_height-400))&&(this_scrollTop<(func_height+1000))){
        	// $("retina").show();
            $(".func").css("opacity","1");
            $(".func").css("transform","translate(0, 0)");
            if(check==1){
                $('.video1').get(0).play();
                check=0;
            }

        }

        if((this_scrollTop>(app_height-400))&&(this_scrollTop<(app_height+1000))){
            $(".app").css("opacity","1");
            $(".app").css("transform","translate(0, 0)");
        }
        if((this_scrollTop>(ios_height-400))&&(this_scrollTop<(ios_height+1000))){
            $(".ios").css("opacity","1");
            $(".ios").css("transform","translate(0, 0)");
        }
        if((this_scrollTop>(touch_height-400))&&(this_scrollTop<(touch_height+1000))){

            $(".touch").css("opacity","1");
            $(".touch").css("transform","translate(0, 0)");
        }
        if((this_scrollTop>(camera_height-400))&&(this_scrollTop<(camera_height+1000))){

            $(".camera").css("opacity","1");
            $(".camera").css("transform","translate(0, 0)");
        }
        if((this_scrollTop>(connect_height-400))&&(this_scrollTop<(connect_height+1000))){

            $(".connect").css("opacity","1");
            $(".connect").css("transform","translate(0, 0)");
            if(check2==1){
                $('.video2').get(0).play();
                check2=0;
            }
        }
        if((this_scrollTop>(design_height-400))&&(this_scrollTop<(design_height+1000))){

            $(".design").css("opacity","1");
            $(".design").css("transform","translate(0, 0)");
        }
        if((this_scrollTop>(LTE_height-400))&&(this_scrollTop<(LTE_height+1000))){

            $(".LTE").css("opacity","1");
            $(".LTE").css("transform","translate(0, 0)");
        }
        if((this_scrollTop>(part_height-400))&&(this_scrollTop<(part_height+1000))){

            $(".part").css("opacity","1");
            $(".part").css("transform","translate(0, 0)");
        }
    });



    $(".replay-button").click(function(){
    	$('.video1').get(0).play();
    });
    $(".replay-button2").click(function(){
    	$('.video2').get(0).play();
    });

    $(".buttonl").click(function(){
         var i=$(this).parent().index();
         if(i!=0){
         	var left=parseInt($('.app-float').css("margin-left"));
         	left+=650;
         	$(".app-float").css("margin-left",left+"px");
        	$('.five-points').children().removeClass("bgb");
            $(".sd").eq(i-1).addClass("bgb");
         }
    });  

    $(".buttonr").click(function(){
         var i=$(this).parent().index();
         if(i!=4){
         	var left=parseInt($('.app-float').css("margin-left"));
         	left-=650;
         	$(".app-float").css("margin-left",left+"px");
        	$('.five-points').children().removeClass("bgb");
            $(".sd").eq(i+1).addClass("bgb");
         }
    });   

    $(".sd").click(function(){
    	var i=$(this).index();
    	$('.five-points').children().removeClass("bgb");
    	$(this).addClass("bgb");
        $(".app-float").css("margin-left",-650*i+"px");

    });

    $(".buttonl2").click(function(){
         var i=$(this).parent().index();
         if(i!=0){
         	var left=parseInt($('.ios-float').css("margin-left"));
         	left+=650;
         	$(".ios-float").css("margin-left",left+"px");
        	$('.five-points2').children().removeClass("bgb");
            $(".point").eq(i-1).addClass("bgb");
         }
    });  

    $(".buttonr2").click(function(){
         var i=$(this).parent().index();
         if(i!=4){
         	var left=parseInt($('.ios-float').css("margin-left"));
         	left-=650;
         	$(".ios-float").css("margin-left",left+"px");
        	$('.five-points2').children().removeClass("bgb");
            $(".point").eq(i+1).addClass("bgb");
         }
    }); 

    $(".point").click(function(){
    	var i=$(this).index();
    	// alert(i);
    	$('.five-points2').children().removeClass("bgb");
    	$(this).addClass("bgb");
        $(".ios-float").css("margin-left",-650*i+"px");

    });

});


 