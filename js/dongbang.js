$(function () {
    //보여지는 배너 체크할 변수
    var showBanner = 0;
    //첫번째 매거진을 마지막에 추가하는 변수 append();
    var fobj =$(".magazinelist>.m1").clone();
    $(".magazinelist").append(fobj);
    // var sobj =$(".magazinelist>.m2").clone();
    // $(".magazinelist").append(sobj);
    // var lobj =$(".magazinelist>.m8").clone();
    // $(".magazinelist").prepend(lobj);

    //배너이동
    function moveBanner() {
        $(".magazinelist").stop().animate({
            marginLeft : -showBanner * 100 + "%"
        }, 300)
    }

    //왼쪽 버튼
    $(".leftBtn").click(function(){
        console.log(showBanner);
        
        if(showBanner==0){
            showBanner=8;
            $(".magazinelist").css("margin-left",-100*showBanner+"%")
        }
        showBanner--;
        moveBanner();
    })
    //오른쪽 버튼
    $(".rightBtn").click(function(){
        console.log(showBanner);
        
        if(showBanner==8){
            showBanner=0;
            $(".magazinelist").css("margin-left",0)
        }
        showBanner++;
        moveBanner();
    })

    // 비즈니스 이미지 띄우기
    $(".businessNav>ul>li").click(function(){
        var sNum = $(this).index();
        console.log(sNum);
        //엑티브 속성 옮기기
        $(this).addClass("active").siblings().removeClass("active");

        //이미지 페이드인아웃
        $(".conBanner>ul>li").eq(sNum).fadeIn(600).siblings().fadeOut(600);
    })
})