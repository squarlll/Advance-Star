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
	var counter = 0;
	$('.images__arrow').on('click', function(){
	    // counter++;
	    // if (counter > 2) {
		   //  $('.images__slide_2-img').fadeOut(600);
		   //  $('.images__slide-img').fadeIn(600);
		   //  $('.images__item_1').attr('href', 'img/images/image_6.jpg');
		   //  $('.images__item_1').attr('href', 'img/images/image_7.jpg');
		   //  $('.images__item_1').attr('href', 'img/images/image_8.jpg');
		   //  $('.images__item_1').attr('href', 'img/images/image_9.jpg');
		   //  $('.images__item_1').attr('href', 'img/images/image_10.jpg');
	    // } else {
	    //     $('.images__slide-img').fadeOut(600);
	    //     $('.images__slide_1-img').fadeIn(600);
	    //     $('.images__item_1').attr('href', 'img/images/image_6.jpg');
	    //     $('.images__item_1').attr('href', 'img/images/image_7.jpg');
	    //     $('.images__item_1').attr('href', 'img/images/image_8.jpg');
	    //     $('.images__item_1').attr('href', 'img/images/image_9.jpg');
	    //     $('.images__item_1').attr('href', 'img/images/image_10.jpg');
	    //     $('.images__arrow').on('click', function(){
	    //     $('.images__slide_1-img').fadeOut(600);
	    //     $('.images__slide_2-img').fadeIn(600);
	    //     $('.images__item_1').attr('href', 'img/images/image_11.jpg');
	    //     $('.images__item_1').attr('href', 'img/images/image_12.jpg');
	    //     $('.images__item_1').attr('href', 'img/images/image_13.jpg');
	    //     $('.images__item_1').attr('href', 'img/images/image_14.jpg');
	    //     $('.images__item_1').attr('href', 'img/images/image_15.jpg');
	    //     });
	    // }
	    counter++;
	    if (counter === 1) {
			$('.images__slide-img').fadeOut(600);
			$('.images__slide_1-img').fadeIn(600);
			$('.images__item_1').attr('href', 'img/images/image_1.jpg');
			$('.images__item_2').attr('href', 'img/images/image_2.jpg');
			$('.images__item_3').attr('href', 'img/images/image_3.jpg');
			$('.images__item_4').attr('href', 'img/images/image_4.jpg');
			$('.images__item_5').attr('href', 'img/images/image_5.jpg');
		}
	    if (counter === 2) {
			$('.images__slide_1-img').fadeOut(600);
			$('.images__slide_2-img').fadeIn(600);
			$('.images__item_1').attr('href', 'img/images/image_1.jpg');
			$('.images__item_2').attr('href', 'img/images/image_2.jpg');
			$('.images__item_3').attr('href', 'img/images/image_3.jpg');
			$('.images__item_4').attr('href', 'img/images/image_4.jpg');
			$('.images__item_5').attr('href', 'img/images/image_5.jpg');
		}
	    if (counter === 3) {
			$('.images__slide_2-img').fadeOut(600);
			$('.images__slide-img').fadeIn(600);
			$('.images__item_1').attr('href', 'img/images/image_1.jpg');
			$('.images__item_2').attr('href', 'img/images/image_2.jpg');
			$('.images__item_3').attr('href', 'img/images/image_3.jpg');
			$('.images__item_4').attr('href', 'img/images/image_4.jpg');
			$('.images__item_5').attr('href', 'img/images/image_5.jpg');
		}
	    if (counter === 4) {
			$('.images__slide-img').fadeOut(600);
			$('.images__slide_1-img').fadeIn(600);
			$('.images__item_1').attr('href', 'img/images/image_6.jpg');
			$('.images__item_2').attr('href', 'img/images/image_7.jpg');
			$('.images__item_3').attr('href', 'img/images/image_8.jpg');
			$('.images__item_4').attr('href', 'img/images/image_9.jpg');
			$('.images__item_5').attr('href', 'img/images/image_10.jpg');
	    }
	    if (counter === 5) {
			$('.images__slide_1-img').fadeOut(600);
			$('.images__slide_2-img').fadeIn(600);
			$('.images__item_1').attr('href', 'img/images/image_1.jpg');
			$('.images__item_2').attr('href', 'img/images/image_2.jpg');
			$('.images__item_3').attr('href', 'img/images/image_3.jpg');
			$('.images__item_4').attr('href', 'img/images/image_4.jpg');
			$('.images__item_5').attr('href', 'img/images/image_5.jpg');
		}
	    if (counter === 6) {
			$('.images__slide_2-img').fadeOut(600);
			$('.images__slide-img').fadeIn(600);
			$('.images__item_1').attr('href', 'img/images/image_1.jpg');
			$('.images__item_2').attr('href', 'img/images/image_2.jpg');
			$('.images__item_3').attr('href', 'img/images/image_3.jpg');
			$('.images__item_4').attr('href', 'img/images/image_4.jpg');
			$('.images__item_5').attr('href', 'img/images/image_5.jpg');
		}
	    if (counter === 7) {
			$('.images__slide-img').fadeOut(600);
			$('.images__slide_1-img').fadeIn(600);
			$('.images__item_1').attr('href', 'img/images/image_6.jpg');
			$('.images__item_2').attr('href', 'img/images/image_7.jpg');
			$('.images__item_3').attr('href', 'img/images/image_8.jpg');
			$('.images__item_4').attr('href', 'img/images/image_9.jpg');
			$('.images__item_5').attr('href', 'img/images/image_10.jpg');
	    }
	    if (counter === 8) {
			$('.images__slide_1-img').fadeOut(600);
			$('.images__slide_2-img').fadeIn(600);
			$('.images__item_1').attr('href', 'img/images/image_1.jpg');
			$('.images__item_2').attr('href', 'img/images/image_2.jpg');
			$('.images__item_3').attr('href', 'img/images/image_3.jpg');
			$('.images__item_4').attr('href', 'img/images/image_4.jpg');
			$('.images__item_5').attr('href', 'img/images/image_5.jpg');
		}
	    if (counter === 9) {
			$('.images__slide_2-img').fadeOut(600);
			$('.images__slide-img').fadeIn(600);
			$('.images__item_1').attr('href', 'img/images/image_1.jpg');
			$('.images__item_2').attr('href', 'img/images/image_2.jpg');
			$('.images__item_3').attr('href', 'img/images/image_3.jpg');
			$('.images__item_4').attr('href', 'img/images/image_4.jpg');
			$('.images__item_5').attr('href', 'img/images/image_5.jpg');
		}
	    if (counter === 10) {
			$('.images__slide-img').fadeOut(600);
			$('.images__slide_1-img').fadeIn(600);
			$('.images__item_1').attr('href', 'img/images/image_6.jpg');
			$('.images__item_2').attr('href', 'img/images/image_7.jpg');
			$('.images__item_3').attr('href', 'img/images/image_8.jpg');
			$('.images__item_4').attr('href', 'img/images/image_9.jpg');
			$('.images__item_5').attr('href', 'img/images/image_10.jpg');
	    }
	    if (counter === 11) {
			$('.images__slide_1-img').fadeOut(600);
			$('.images__slide_2-img').fadeIn(600);
			$('.images__item_1').attr('href', 'img/images/image_1.jpg');
			$('.images__item_2').attr('href', 'img/images/image_2.jpg');
			$('.images__item_3').attr('href', 'img/images/image_3.jpg');
			$('.images__item_4').attr('href', 'img/images/image_4.jpg');
			$('.images__item_5').attr('href', 'img/images/image_5.jpg');
		}
	    if (counter === 12) {
			$('.images__slide_2-img').fadeOut(600);
			$('.images__slide-img').fadeIn(600);
			$('.images__item_1').attr('href', 'img/images/image_1.jpg');
			$('.images__item_2').attr('href', 'img/images/image_2.jpg');
			$('.images__item_3').attr('href', 'img/images/image_3.jpg');
			$('.images__item_4').attr('href', 'img/images/image_4.jpg');
			$('.images__item_5').attr('href', 'img/images/image_5.jpg');
		}
	    if (counter === 13) {
			$('.images__slide-img').fadeOut(600);
			$('.images__slide_1-img').fadeIn(600);
			$('.images__item_1').attr('href', 'img/images/image_6.jpg');
			$('.images__item_2').attr('href', 'img/images/image_7.jpg');
			$('.images__item_3').attr('href', 'img/images/image_8.jpg');
			$('.images__item_4').attr('href', 'img/images/image_9.jpg');
			$('.images__item_5').attr('href', 'img/images/image_10.jpg');
	    }
	    if (counter === 14) {
			$('.images__slide_1-img').fadeOut(600);
			$('.images__slide_2-img').fadeIn(600);
			$('.images__item_1').attr('href', 'img/images/image_1.jpg');
			$('.images__item_2').attr('href', 'img/images/image_2.jpg');
			$('.images__item_3').attr('href', 'img/images/image_3.jpg');
			$('.images__item_4').attr('href', 'img/images/image_4.jpg');
			$('.images__item_5').attr('href', 'img/images/image_5.jpg');
		}
	    if (counter === 15) {
			$('.images__slide_2-img').fadeOut(600);
			$('.images__slide-img').fadeIn(600);
			$('.images__item_1').attr('href', 'img/images/image_1.jpg');
			$('.images__item_2').attr('href', 'img/images/image_2.jpg');
			$('.images__item_3').attr('href', 'img/images/image_3.jpg');
			$('.images__item_4').attr('href', 'img/images/image_4.jpg');
			$('.images__item_5').attr('href', 'img/images/image_5.jpg');
		}
	    if (counter === 16) {
			$('.images__slide-img').fadeOut(600);
			$('.images__slide_1-img').fadeIn(600);
			$('.images__item_1').attr('href', 'img/images/image_6.jpg');
			$('.images__item_2').attr('href', 'img/images/image_7.jpg');
			$('.images__item_3').attr('href', 'img/images/image_8.jpg');
			$('.images__item_4').attr('href', 'img/images/image_9.jpg');
			$('.images__item_5').attr('href', 'img/images/image_10.jpg');
	    }
	    if (counter === 17) {
			$('.images__slide_1-img').fadeOut(600);
			$('.images__slide_2-img').fadeIn(600);
			$('.images__item_1').attr('href', 'img/images/image_1.jpg');
			$('.images__item_2').attr('href', 'img/images/image_2.jpg');
			$('.images__item_3').attr('href', 'img/images/image_3.jpg');
			$('.images__item_4').attr('href', 'img/images/image_4.jpg');
			$('.images__item_5').attr('href', 'img/images/image_5.jpg');
		}
	    if (counter === 18) {
			$('.images__slide_2-img').fadeOut(600);
			$('.images__slide-img').fadeIn(600);
			$('.images__item_1').attr('href', 'img/images/image_1.jpg');
			$('.images__item_2').attr('href', 'img/images/image_2.jpg');
			$('.images__item_3').attr('href', 'img/images/image_3.jpg');
			$('.images__item_4').attr('href', 'img/images/image_4.jpg');
			$('.images__item_5').attr('href', 'img/images/image_5.jpg');
		}
	    if (counter === 19) {
			$('.images__slide-img').fadeOut(600);
			$('.images__slide_1-img').fadeIn(600);
			$('.images__item_1').attr('href', 'img/images/image_6.jpg');
			$('.images__item_2').attr('href', 'img/images/image_7.jpg');
			$('.images__item_3').attr('href', 'img/images/image_8.jpg');
			$('.images__item_4').attr('href', 'img/images/image_9.jpg');
			$('.images__item_5').attr('href', 'img/images/image_10.jpg');
	    }
	    if (counter === 20) {
			$('.images__slide_1-img').fadeOut(600);
			$('.images__slide_2-img').fadeIn(600);
			$('.images__item_1').attr('href', 'img/images/image_1.jpg');
			$('.images__item_2').attr('href', 'img/images/image_2.jpg');
			$('.images__item_3').attr('href', 'img/images/image_3.jpg');
			$('.images__item_4').attr('href', 'img/images/image_4.jpg');
			$('.images__item_5').attr('href', 'img/images/image_5.jpg');
		}
	    if (counter === 21) {
			$('.images__slide_2-img').fadeOut(600);
			$('.images__slide-img').fadeIn(600);
			$('.images__item_1').attr('href', 'img/images/image_1.jpg');
			$('.images__item_2').attr('href', 'img/images/image_2.jpg');
			$('.images__item_3').attr('href', 'img/images/image_3.jpg');
			$('.images__item_4').attr('href', 'img/images/image_4.jpg');
			$('.images__item_5').attr('href', 'img/images/image_5.jpg');
		}
	});
	$('img, a').on('dragstart', function(event) { event.preventDefault(); });
	$('.solution__video').on('click', function(){
		$(this).children('video').trigger('play');
		$(this).children('.video__poster').css('display', 'none');
	});
	$('.slider_1__slide').on('click', function(){
		$(this).children('.slider_1__video').trigger('play');
		$(this).children('.slider_1__video').addClass('play')
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
	new WOW().init();
	var mySwiper2 = new Swiper ('.swiper_1', {
		direction: 'vertical',
		loop: false,
		speed: 700,
		spaceBetween: 15,
		allowSlidePrev: 'swiper-button-prev',
		allowSlideNext: 'swiper-button-next',
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	var mySwiper1 = new Swiper ('.swiper_2', {
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