/* 자동 가로형 슬라이드 */
(function(){
	var now = 1; //몇번째 사진을 보여주는지 알려주는 변수
	var interval = setInterval(slide, 3000); //원하는시간마다 사진을 보여주는 변수 
	function slide(){
		$(".banners").stop().animate({"left": (-720*now)+"px"}, 500, function(){
			if(now == 5) {
				now = 1;
				$(this).css({"left": 0});
			}
			else now++;
		});
	}
})();

/*수동 가로형 슬라이드 */