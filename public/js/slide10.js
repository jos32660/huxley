/* 페이드형 슬라이드*/

/* 전역변수 */
var now = 0;			//페이드 될 li
var depth = 10;		//계속 증가될 z-index
var interval;

/* 이벤트 */
interval = setInterval(intervalCb, 2000);

function intervalCb(){
	now == 4 ? now = 0 : now++;
	$(".pager").eq(now).trigger("click");
}
$(".pager").click(function(){
	now = $(this).index();
	$(".banner").eq(now).css({"z-index": depth++, "opacity": 0});
	$(".banner").eq(now).stop().animate({"opacity":1}, 1000);
	$(".pager").removeClass("active");
	$(this).addClass("active");
});
$(".pager").eq(now).trigger("click");

$(".banners").mouseover(function(){
	clearInterval(interval);
});
$(".banners").mouseleave(function(){
	interval = setInterval(intervalCb, 2000);
});
/* 동작 */

