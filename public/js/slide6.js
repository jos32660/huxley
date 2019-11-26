var now = 0;
var interval;

$(".bt-prev").click(function(){
	if(now > 0) now--;
	init();
}).hide();
$(".bt-next").click(function(){
	if(now < 4) now++;
	init();
	btInit();
});
$(".pager").click(function(){
	now = $(this).index();
	init();
});

function init(){
	ani();
	btInit();
	pagerInit();
}

function ani(){
	$(".banners").stop().animate({"top":(-380*now)+"px"}, 500, function(){
		if(now == 5){
			now = 1;
			$(this).css({"top":0});
			btInit();
			pagerInit();
		}
	});
}
function btInit(){
	if(now == 0){
		$(".bt-prev").hide();
		$(".bt-next").show();
	}
	else if(now == 4){
		$(".bt-prev").show();
		$(".bt-next").hide();
	}
	else {
		$(".bt-prev").show();
		$(".bt-next").show();
	}
}
function pagerInit(){
	$(".pager").removeClass("active");
	$(".pager").eq(now).addClass("active");
}