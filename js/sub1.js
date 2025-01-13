//서브메뉴 슬라이드
$(function(){
    $('.nav>li').mouseenter(function(){
        $('.sub, .sub_bg').stop().slideDown();
    });
    $('.nav>li').mouseleave(function(){
        $('.sub, .sub_bg').stop().slideUp();
    });
});


//햄버거메뉴 스크롤 + 로그인/가입 버튼
$(function(){
    $('.hbg label').click(function(){
        $("html,body").toggleClass("hbgscroll");
        $(".right").toggleClass("hbg_right");
    });
});

//햄버거메뉴창 - 서브메뉴 클릭 시 햄버거창 히든
$(function(){
    $('.menu_in a').click(function(){
        $('html, body').removeClass('hbgscroll');
        $('#menuicon').prop("checked",false);
        $(".right").removeClass("hbg_right");
    });
});


// aos 소스
AOS.init({
    duration: 900
});
