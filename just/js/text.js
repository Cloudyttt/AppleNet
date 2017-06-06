$(document).ready(function() {

	$(".hd-nav-down-cont").animate({
    	opacity:"1",
    	left:"0"
    	},
    	500);

	$(".builtinapps-submainpart").hide();
	$(".builtinapps-submainpart").eq(0).show();
	$(".button-linkpart").eq(0).css("border-bottom","1px solid #333");
	$(".button-linkpart").on("click",function() {
		$(".button-linkpart").css("border-bottom","1px solid #D6D6D6");
		$(this).css("border-bottom","1px solid #333");
		var numberbutton = $(this).parent().index();
		$(".builtinapps-submainpart").hide();
		$(".builtinapps-submainpart").eq(numberbutton).show();
	});


	$(".proapps-submainpart").hide();
	$(".proapps-submainpart").eq(0).show();
	$(".button-linkpart1").eq(0).css("border-bottom","1px solid #333");
	$(".proapps-button-linkpart").on("click",function() {
		$(".button-linkpart1").css("border-bottom","1px solid #D6D6D6");
		$(this).children().css("border-bottom","1px solid #333");
		var numberbutton1 = $(this).index();
		$(".proapps-submainpart").hide();
		$(".proapps-submainpart").eq(numberbutton1).show();
	});
});