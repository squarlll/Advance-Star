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
		$('.popup-wrapper').addClass('active');
		$('.popup__area, .popup__close-button').on('click', function(){
			$('html').removeClass('lock');
			$('.popup-wrapper').removeClass('active');
		});
	});
	// / popup
	$('.images__arrow').on('click', function(){
		$('.images__item').addClass('images__slide_1');
		$('.images__item').addClass('images__slide_1');
		$('.images__item').addClass('images__slide_1');
		$('.images__item').addClass('images__slide_1');
		$('.images__item').addClass('images__slide_1');
		$(this).on('click', function(){
			$('.images__item').addClass('images__slide_2');
			$('.images__item').addClass('images__slide_2');
			$('.images__item').addClass('images__slide_2');
			$('.images__item').addClass('images__slide_2');
			$('.images__item').addClass('images__slide_2');
		});
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