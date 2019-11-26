window.addEventListener("wheel", wheelFn, {passive: false});
/*
document.querySelectorAll(".page").forEach(function(page, key){
	page.addEventListener("wheel", wheelFn, {passive: false});
});
*/
function wheelFn(){
	event.preventDefault();
	event.stopPropagation();
	var hei = $(window).outerHeight();
	var delta = event.deltaY; //스크롤 tic을 한번 할때 값
	var posY = event.pageY; 
	var n = Math.floor(posY/hei);
	var tar = 0;
	var pageCnt = $(".page").length; //4
	if(delta > 0) (n < pageCnt - 1) ? wheelAni((n + 1) * hei, n) : ""; //아래로 휠 삼항방적식-(조건) ? 참 : 거짓(값이 없어도 넣어야함. ex-"",0)
	else (n > 0) ? wheelAni((n -1) * hei, n) : ""; //위로 휠
	// if(delta > 0) $("html, body").stop().animate({"scrollTop":hei}, 300);
	// else $("html, body").stop().animate({"scrollTop":0}, 300);
}

function wheelAni(pos, prevPage, nowPage){
	// console.log(prevPage, nowPage);
	$("html, body").stop().animate({"scrollTop":pos}, 1000, function(){

	});
}