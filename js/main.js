$(document).ready(function(){
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
	$('img, a').on('dragstart', function(event) { event.preventDefault(); });
	$('.solution__video').on('click', function(){
		$(this).children('video').trigger('play');
		$(this).children('.play-button').css('display', 'none');
		$(this).children('.video__poster').css('display', 'none');
	});

	$.prototype.animatePathD = function(d) {
		var e = this,
		animate = $(e).find('animate[data-animatePathD]');
		if(animate.length){
			animate.attr({
				'attributeName': 'd', 
				'attributeType': 'XML',
				'from': animate.attr('to') || $(e).attr('d'),
				'to': d,
				'fill': 'freeze'
			});
			animate[0].beginElement();
		};
	};
	$('.slider-prev-btn').on('mouseenter', function(){
		$(this).children('g').children('.slider-prev-path').animatePathD('M28.0134 31.9331L22.9686 28.2092C22.4761 27.809 22.4761 27.0572 22.9686 26.657L28.3 22.9331');
	});
	$('.slider-prev-btn').on('mouseleave', function(){
		$(this).children('g').children('.slider-prev-path').animatePathD('M30.0134 33.9331L22.9686 28.2092C22.4761 27.809 22.4761 27.0572 22.9686 26.657L30.0134 20.9331');
	});
	$('.slider-next-btn').on('mouseenter', function(){
		$(this).children('g').children('.slider-next-path').animatePathD('M24.0057 31.9331L29.0505 28.2092C29.5431 27.809 29.5431 27.0572 29.0505 26.657L24.0057 22.9331');
	});
	$('.slider-next-btn').on('mouseleave', function(){
		$(this).children('g').children('.slider-next-path').animatePathD('M22.0057 33.9331L29.0505 28.2092C29.5431 27.809 29.5431 27.0572 29.0505 26.657L22.0057 20.9331');
	});
	$('.lightgallery').lightGallery(); 
	new WOW().init();
	var mySwiper1 = new Swiper ('.swiper_1', {
		direction: 'horizontal',
		loop: false,
		speed: 700,
		spaceBetween: 15,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			940: {
				direction: 'vertical'
			}
		}
	});
	var mySwiper2 = new Swiper ('.swiper_2', {
		direction: 'horizontal',
		loop: false,
		speed: 500,
		spaceBetween: 50,
		navigation: {
			nextEl: '.swiper-button-next_1',
			prevEl: '.swiper-button-prev_1',
		},
	});
	var images = new Swiper ('.images__slider', {
		direction: 'horizontal',
		slidesPerView: 4,
		loop: false,
		speed: 400,
		spaceBetween: 10,
		navigation: {
			nextEl: '.swiper-button-next_2',
			prevEl: '.swiper-button-prev_2',
		},
		breakpoints: {
			1601: {
				spaceBetween: 15
			},
			1141: {
				spaceBetween: 10,
				slidesPerView: 4
			},
			881: {
				slidesPerView: 3
			},
			631: {
				slidesPerView: 2
			},
			0: {
				slidesPerView: 1
			}
		}
	});
});
$(document).on("scroll", function(){
	if($(document).scrollTop()>0){
		$('.header').addClass('header_small');
		$('.header__logo img').attr('src', 'img/logo-scroll.svg');
	} else{
		$('.header').removeClass("header_small");
		$('.header__logo img').attr('src', 'img/logo.svg');
	}
});