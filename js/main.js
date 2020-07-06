$(document).ready(function(){
	$(document).on("scroll", function(){
		if($(document).scrollTop()>0){
			$('.header').addClass('header_small');
			$('.header__logo img').attr('src', 'img/logo-scroll.svg');
		} else{
			$('.header').removeClass("header_small");
			$('.header__logo img').attr('src', 'img/logo.svg');
		}
	});
	// popup
	$('.main__form form, .map__form').on('submit', function(){
		$('html').addClass('lock');
		$('.popup-wrapper, .popup_1').addClass('active');
		$('.popup__area, .popup__close-button').on('click', function(){
			$('html').removeClass('lock');
			$('.popup-wrapper, .popup_1').removeClass('active');
		});
	});
	$('.header__callback, .stages__button, .detailing__button, .process__button').on('click', function(){
		$('html').addClass('lock');
		$('.popup-wrapper, .popup__form-wrapper').addClass('active');
		$('.popup__form').on('submit', function(){
			$('.popup__form-wrapper').removeClass('active');
			$('.popup_1').addClass('active');
		});
		$('.popup__area, .popup__close-button').on('click', function(){
			$('html').removeClass('lock');
			$('.popup-wrapper, .popup_1, .popup__form-wrapper').removeClass('active');
		});
	});
	// / popup
	// $('.images__arrow').on('click', function(){
	// 	$('.images__slide-img').fadeOut(400);
	// 	$('.images__slide_1-img').fadeIn(400);
	// 	$(this).on('click', function(){
	// 		$('.images__slide_1-img').fadeOut(400);
	// 		$('.images__slide_2-img').fadeIn(400);
	// 	});
	// });
	var counter = 0;
	$('.images__arrow').on('click', function(){
	    counter++;
	    if (counter > 2) {
	        return false;
	    } else {
	        $('.images__slide-img').fadeOut(400);
	        $('.images__slide_1-img').fadeIn(400);
	        $('.images__arrow').on('click', function(){
	        	$('.images__slide_1-img').fadeOut(400);
	        	$('.images__slide_2-img').fadeIn(400);
	        });
	    }
	});
	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	$('.solution__video').on('click', function(){
		$('.solution__video video').trigger('play');
		$(this).children('.video__poster').css('display', 'none');
	});
	$('.slider_1__slide').on('click', function(){
		$(this).children('.slider_1__video').trigger('play');
		$(this).children('.video__poster').css('display', 'none');
	});
	var mySwiper = new Swiper ('.swiper-container', {
		direction: 'horizontal',
		loop: false,
		spaceBetween: 50,
		allowSlidePrev: 'swiper-button-prev',
		allowSlideNext: 'swiper-button-next',
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
});