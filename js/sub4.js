//서브메뉴 슬라이드
$(function () {
    $('.nav>li').mouseenter(function () {
        $('.sub, .sub_bg').stop().slideDown();
    });
    $('.nav>li').mouseleave(function () {
        $('.sub, .sub_bg').stop().slideUp();
    });
});


//햄버거메뉴 스크롤 + 로그인/가입 버튼
$(function () {
    $('.hbg label').click(function () {
        $("html,body").toggleClass("hbgscroll");
        $(".right").toggleClass("hbg_right");
    });
});

//햄버거메뉴창 - 서브메뉴 클릭 시 햄버거창 히든
$(function () {
    $('.menu_in a').click(function () {
        $('html, body').removeClass('hbgscroll');
        $('#menuicon').prop("checked", false);
        $(".right").removeClass("hbg_right");
    });
});



// FAQ 탭메뉴
$(function () {
    $('.tabcontent > div').hide();
    $('.tabnav a').click(function () {
        $('.tabcontent > div').hide().filter(this.hash).fadeIn();
        $('.tabnav a').removeClass('active');
        $(this).addClass('active');
        return false;
    }).filter(':eq(0)').click();
});


// FAQ 목록 리스트
$(function () {
    $(".q_a li").click(function () {
        $(this).children("div").slideToggle()
        $(this).siblings().children("div").slideUp();
        $(this).toggleClass("on").siblings().removeClass("on")
    });
});


// 회원후기 리뷰 슬라이드
$(function () {
    $("#scroller1").simplyScroll({
        speed: 1,
        orientation: 'vertical',
        direction: 'backwards',
        customClass: 'vert',
    });
    $("#scroller2").simplyScroll({
        speed: 1,
        orientation: 'vertical',
        customClass: 'vert',
    });
    $("#scroller3").simplyScroll({
        speed: 1,
        orientation: 'vertical',
        direction: 'backwards',
        customClass: 'vert',
    });
    $("#scroller4").simplyScroll({
        speed: 1,
        orientation: 'vertical',
        customClass: 'vert',
    });
});