// 메인배너 슬라이드
var swiper = new Swiper('.slide ', {
    slidesPerView: 1,
    speed: 3000,//버튼 눌렀을 때 슬라이드가 넘어가는 시간
    autoplay: {
        delay: 2500,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
    },
    loop: true,//슬라이드 무한반복
    navigation: {//화살표 버튼
        nextEl: '.slide .swiper-button-next',
        prevEl: '.slide .swiper-button-prev',
    },
    pagination: {//블릿 버튼
        el: '.slide .swiper-pagination',
        clickable: true,
    },
});

//서브메뉴 슬라이드
$(function(){
    $('.nav>li').mouseenter(function(){
        $('.sub, .sub_bg').stop().slideDown();
    });
    $('.nav>li').mouseleave(function(){
        $('.sub, .sub_bg').stop().slideUp();
    });
});

//티켓구매창 좌측네비
$(function () {
    $('.tabcontent > div').hide();
    $('.tab_menu a').click(function () {
        $('.tabcontent > div').hide().filter(this.hash).fadeIn();
        $('.tab_menu a').removeClass('active');
        $(this).addClass('active');
        return false;
    }).filter(':eq(0)').click();
});

//티켓구매창 셀렉트
$(function(){
    $('#tab1 .bt_1').click(function(){
        $(this).addClass('select').siblings().removeClass('select');
    });
});

//지점소개 슬라이드
var swiper2 = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".mySwiper .swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//프로그램 흘러가는 슬라이드
  $(function () {
    $("#scroller1").simplyScroll({
        speed: 1,
        orientation: 'vertical',
        customClass: 'vert',
    });

    $("#scroller2").simplyScroll({
        speed: 1,
        orientation: 'vertical',
        direction:'backwards',
        customClass: 'vert',
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


// 탑버튼
$(function() { 
	$(window).scroll(function() { 
		if ($(this).scrollTop() > 5000) { // 넘으면 버튼 보여짐
			$('.top_bt').fadeIn(); 
			$('.top_bt').css('left', $('#sidebar').offset().left); // #sidebar left:0 죄표 
		} else { 
			$('.top_bt').fadeOut(); 
		} 
	}); 
	// 버튼 클릭시 
	$(".top_bt").click(function() { 
		$('html, body').animate({ scrollTop : 0 // 0 까지 animation 이동
		}, 400); // 속도 400 
	}); 
});