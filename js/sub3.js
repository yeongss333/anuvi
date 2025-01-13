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


// 베이직티켓 탭
$(function () {
    $('.tabcontent > div').hide();
    $('.tabnav a').click(function () {
        $('.tabcontent > div').hide().filter(this.hash).show();
        $('.tabnav a').removeClass('active');
        $(this).addClass('active');
        return false;
    }).filter(':eq(0)').click();
});


// 탑버튼
$(function() { 
	$(window).scroll(function() { 
		if ($(this).scrollTop() > 3000) { // 넘으면 버튼 보여짐
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