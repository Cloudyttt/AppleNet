$(document).ready(function(){
   /*$(".image-hero-logo").fadeIn(500, function() {
        $(".typography-elevated-headline").fadeIn(500, function() {
            $(".hero-intro-cta").fadeIn(500, function() {
                $(".image-hero").addClass("image-hero-background");
            });
        });
    });*/
    $(".image-hero-logo").fadeIn(1000);
    $(".typography-elevated-headline").fadeIn(2000);
    $(".hero-intro-cta").fadeIn(2500,function(){
        $(".image-hero").animate({
            opacity:"1"
        }, 500)
    });


    $(".hero_icon").click(function() {
        /* Act on the event */
        $(".labelContainer").animate({
            "opacity": "0.01"
        }, "slow");  
        $(".hero_icon").animate({
            "opacity": "0.01"
        }, "slow"); 
        $(".open_icon").fadeIn("slow");      
        $(".card-content").slideDown("slow").css({"top": "120px"});
    });


    $(".open_icon").click(function(){
        $(".labelContainer").animate({
            "opacity": "1"
        }, "slow");  
        $(".hero_icon").animate({
            "opacity": "1"
        }, "slow"); 
        $(".open_icon").fadeOut("slow");      
        $(".card-content").slideUp("slow");
    });



    var leftBotton = 0;
    $(".paddlenav-arrow-previous").css({
        "opacity": "0.01"
    });
    $(".gallery-item:first").css({
        "opacity": "1"
    });    
    $(".paddlenav-arrow-next").click(function(event) {
        /* Act on the event */
        {
            leftBotton++;
            if(leftBotton==1)
            {
                $(".gallery-item:eq(1)").css({
                    "opacity": "1"
                });
                $(".gallery-item:eq(0)").css({
                    "opacity": "0.5"
                });
                $(".gallery-item:eq(2)").css({
                    "opacity": "0.5"
                });
                $(".gallery-item").each(function() {
                    var m = $(this);
                    m.animate({
                        left:"-=900px"
                    }, "slow");
                });
                $(".paddlenav-arrow-previous").css({
                    "opacity": "1"
                });              
            }
            if(leftBotton==2)
            {
                $(".gallery-item:eq(1)").css({
                    "opacity": "0.5"
                });
                $(".gallery-item:eq(0)").css({
                    "opacity": "0.5"
                });
                $(".gallery-item:eq(2)").css({
                    "opacity": "1"
                });
                $(".gallery-item").each(function() {
                    var m = $(this);
                    m.animate({
                        left:"-=900px"
                    }, "slow");
                });
                $(".paddlenav-arrow-next").css({
                    "opacity": "0.01"
                });  
            }
            if(leftBotton > 2)
            {
                leftBotton = 2;
            }
        }

    });
    $(".paddlenav-arrow-previous").click(function(event) {
        /* Act on the event */
        {
            leftBotton--;
            if(leftBotton==1)
            {
                $(".gallery-item:eq(1)").css({
                    "opacity": "1"
                });
                $(".gallery-item:eq(0)").css({
                    "opacity": "0.5"
                });
                $(".gallery-item:eq(2)").css({
                    "opacity": "0.5"
                });
                $(".gallery-item").each(function() {
                    var m = $(this);
                    m.animate({
                        left:"+=900px"
                    }, "slow");
                });
                $(".paddlenav-arrow-next").css({
                    "opacity": "1"
                });                
            }
            if(leftBotton==0)
            {
                $(".gallery-item:eq(1)").css({
                    "opacity": "0.5"
                });
                $(".gallery-item:eq(0)").css({
                    "opacity": "1"
                });
                $(".gallery-item:eq(2)").css({
                    "opacity": "0.5"
                });
                $(".gallery-item").each(function() {
                    var m = $(this);
                    m.animate({
                        left:"+=900px"
                    }, "slow");
                });
                $(".paddlenav-arrow-previous").css({
                    "opacity": "0.01"
                }); 
                $(".paddlenav-arrow-next").css({
                    "opacity": "1"
                });  
            }
            if(leftBotton < 0)
            {
                leftBotton = 0;
            }
        }

    });

    $(window).scroll(function() {
        /* Act on the event */
        var top = $(this).scrollTop();
        console.log(top);
        var fixedpart_top = $(".adv-wrapper").offset().top+$(".adv-wrapper").height()-$(window).scrollTop();
        if(fixedpart_top<=0)
        {
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
        else
        {
            $(".fixedpart").css({
                "position": "relative",
                // "top":"0",
                "width": "100%",
                "border-bottom": "0",
                "background-color": "rgb(246,246,246)"
            });
            $(".fixedpart-cnt").css({
            });
        } 
        var item = $("#content1").find(".hero-intro-block");
        item.each(function() {
            var m = $(this);
            var itemTop = m.offset().top;
            console.log(itemTop);
            if ((top>=itemTop-600)&&(top<=itemTop+1000)) 
            {
                m.animate({
                    opacity:"1",
                    top:"-200px"
                }, 1500);           
            }
        });
        var item = $("#content1").find("#badgeblock-top");
        item.each(function() {
            var m = $(this);
            var itemTop = m.offset().top;
            console.log(itemTop);
            if ((top>=itemTop-600)&&(top<=itemTop+1000)) 
            {
                m.animate({
                    opacity:"1",
                    top:"-150px"
                }, 1500);           
            }
        });
        var item = $("#content1").find(".image-hero-sidebyside");
        item.each(function() {
            var m = $(this);
            var itemTop = m.offset().top;
            console.log(itemTop);
            if ((top>=itemTop-600)&&(top<=itemTop+1000)) 
            {
                m.animate({
                    opacity:"1",
                }, 1500);           
            }
        });
        var item = $("#content1").find(".badgeblock-bottom");
        item.each(function() {
            var m = $(this);
            var itemTop = m.offset().top;
            console.log(itemTop);
            if ((top>=itemTop-600)&&(top<=itemTop+1000)) 
            {
                m.animate({
                    opacity:"1",
                }, 1500);           
            }
        });
        var item = $("#content1").find(".gallery-overlap");
        item.each(function() {
            var m = $(this);
            var itemTop = m.offset().top;
            console.log(itemTop);
            if ((top>=itemTop-600)&&(top<=itemTop+1000)) 
            {
                m.animate({
                    opacity:"1"
                }, 1500);  
            }
        });
        var item = $(".touchbar-gallery-section");
        item.each(function() {
            var m = $(this);
            var itemTop = m.offset().top;
            console.log(itemTop);
            if ((top>=itemTop-400)&&(top<=itemTop+1000)) 
            {
                m.animate({
                    height: "924px"
                }, 1000);  
            }
        });



    });
});