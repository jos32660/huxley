/*
변수 타입
primitive type: 
	Number(0 == false),
	String(문자열, "" == flase),
	Boolean(true, false),
	undefined == false,
	null =false
refernce type: 
	Array(데이터 저장 주소, 참조할것),
	Object

상수타입-변하지 않음
const a = 5;
a = 10; //Error
const b = [];
b[1] = 10; //No Error
b = [1, 2, 3]; //Error
*/


/* 가로형 슬라이드 - pager*/
/* 전역변수 */
var now = 0;
var interval;

/* 이벤트 */
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
$(".banners-wrap").mouseover(function(){
	clearInterval(interval);
});
$(".banners-wrap").mouseleave(function(){
	clearInterval(interval);
	interval = setInterval(intervalCb, 2000);
});
// Interval CallBack
function intervalCb(){
	now++;
	init();
}


/* 동작 */
// 시작할 때 한번 실행
(function (){
	pagerInit();
	interval = setInterval(intervalCb, 2000);
})();

// 이벤트 발생할 때 실행할 함수
function init(){
	ani();
	btInit();
	pagerInit();
}
// 애니메이션
function ani(){
	$(".banners").stop().animate({"left": (-720*now)+"px"}, 500, function(){
		if(now == 5){
			now = 0;
			$(".banners").css("left",0);
			pagerInit();
			btInit();
		}
	});
}
// 버튼 정렬
function btInit() {
	if(now == 0) {
		$(".bt-prev").hide();
		$(".bt-next").show();
	}
	else if(now == 4) {
		$(".bt-prev").show();
		$(".bt-next").hide();
	}
	else {
		$(".bt-prev").show();
		$(".bt-next").show();
	}
}
// 페이저 정렬
function pagerInit(){
	$(".pager").removeClass("active");
	$(".pager").eq(now).addClass("active");
}
