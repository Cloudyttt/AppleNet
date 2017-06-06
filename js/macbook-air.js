$(function(){
     var wifi_height = $(".data-rings").offset().top;
    $(window).scroll(function(){
        var top=$(".header").offset().top+$(".header").height()-$(window).scrollTop();
        //var Width=$(".header-bottom").width();
        // console.log(top);
        var this_scrollTop = $(this).scrollTop();
        if(top<=0){
            $(".header-bottom-content").css({
                "border-bottom": "0"
            });
            $(".header-bottom").css({
                "position": "fixed",
                "top": "0",
                "width": "100%",
                "border-bottom": "1px solid #d6d6d6",
                "z-index": "10",
                "background-color": "rgba(255,255,255,0.9)"
            });
        }
        else{
            $(".header-bottom").css({
                "position": "relative",
                // "top":"0",
                "width": "100%",
                "border-bottom": "0",
                "background-color": "#ffffff"
            });
            $(".header-bottom-content").css({
                "border-bottom": "1px solid #d6d6d6"
            });
        }
        if((this_scrollTop>(wifi_height-400))&&(this_scrollTop<(wifi_height+1000))){
        //$(".macbookair-wifi").animate({
            $(".outer-mid").css({
                "opacity":".13",
                "transition":"opacity 4800ms cubic-bezier(0.39, 0.575, 0.425, 0.975),transform 1800ms cubic-bezier(0.39, 0.575, 0.425, 0.975),-webkit-transform 1800ms cubic-bezier(0.39, 0.575, 0.425, 0.975)",
                "transform": "scale3d(1, 1, 1)"
                             });
            
            $(".inner-mid").css({
                "opacity":".18",
                "transition":"opacity 3800ms cubic-bezier(0.39, 0.575, 0.425, 0.975),transform 1800ms cubic-bezier(0.39, 0.575, 0.425, 0.975),-webkit-transform 1800ms cubic-bezier(0.39, 0.575, 0.425, 0.975)",
                "transform": "scale3d(1, 1, 1)"
            });
            $(".inner-center").css({
                "opacity":".25",
                "transition":"opacity 2800ms cubic-bezier(0.39, 0.575, 0.425, 0.975),transform 1800ms cubic-bezier(0.39, 0.575, 0.425, 0.975),-webkit-transform 1800ms cubic-bezier(0.39, 0.575, 0.425, 0.975)",
                "transform": "scale3d(1, 1, 1)"
            });
            $(".inner").css({
                "opacity":".35",
                "transition":"opacity 1800ms cubic-bezier(0.39, 0.575, 0.425, 0.975),transform 1800ms cubic-bezier(0.39, 0.575, 0.425, 0.975),-webkit-transform 1800ms cubic-bezier(0.39, 0.575, 0.425, 0.975)",
                "transform": "scale3d(1, 1, 1)"
            });
         }
        });
        });