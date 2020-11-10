$(document).ready(function(){
	const	menuNavigation = $('.header__navigation');
	const menuNavigationOffset = $('.header__navigation').offset().top;
	var	menuNavigationOffset1 = menuNavigationOffset - $('html').scrollTop();
	if (menuNavigationOffset1 <= 10) {
		menuNavigation.addClass('_sticky');
		$('.header-wrapper').addClass('_sticky-wrapper');
	} else if (menuNavigationOffset1 > 10) {
		menuNavigation.removeClass('_sticky');
		$('.header-wrapper').removeClass('_sticky-wrapper');
	}
	$(window).on('scroll', function(){
		const	menuNavigation = $('.header__navigation');
		var	menuNavigationOffset1 = menuNavigationOffset - $('html').scrollTop();
		if (menuNavigationOffset1 <= 10) {
			menuNavigation.addClass('_sticky');
			$('.header-wrapper').addClass('_sticky-wrapper');
		} else if (menuNavigationOffset1 > 10) {
			menuNavigation.removeClass('_sticky');
			$('.header-wrapper').removeClass('_sticky-wrapper');
		}
	});
	$(window).on('resize', function(){
		$(window).on('scroll', function(){
			const	menuNavigation = $('.header__navigation');
			var	menuNavigationOffset1 = menuNavigationOffset - $('html').scrollTop();
			if (menuNavigationOffset1 <= 10) {
				menuNavigation.addClass('_sticky');
				$('.header-wrapper').addClass('_sticky-wrapper');
			} else if (menuNavigationOffset1 > 10) {
				menuNavigation.removeClass('_sticky');
				$('.header-wrapper').removeClass('_sticky-wrapper');
			}
		});
	});
	// Модальные окна
	$('.header__callback-button, .footer__callback-button').on('click', function(){
		$('.popup__wrapper-call').addClass('_active');
	});
	$('.about__button').on('click', function(){
		$('.popup__wrapper-consultation').addClass('_active');
	});
	$('.popup__close, .popup__area').on('click', function(){
		$(this).parents('.popup__wrapper').removeClass('_active');
	});

	// Маска на поля
	$('.form__field').mask('+7 (999) 999-99-99');

	// Дропдаун
	$('.header__dropdown').on('mouseenter', function(){
		$(this).children('.header__dropdown-list').addClass('_visible');
		$(this).on('mouseleave', function(){
			$(this).children('.header__dropdown-list').removeClass('_visible');
		});
	});

	// Мобильное меню
	$('.burger-wrapper').on('click', function(){
		$(this).toggleClass('_active');
		$('.header__mobile-menu').addClass('_active');
		$('body').addClass('_lock');
		$('.mobile-menu__close, .mobile-menu__link').on('click', function(){
			$('.header__mobile-menu').removeClass('_active');
			$('body').removeClass('_lock');
		});
	});

	// Плавная прокрутка
	$('a[href^="#"]').click(function(){
		var target = $(this).attr('href');
		$('html, body').animate({scrollTop: $(target).offset().top - 50}, 1000);
		return false;
	});

	// Прикрепление файла
	$('.form__file-input').on('change', function(){
		$('.form__file-text').text('Файл прикреплен')
	});

	// Переключение картинок в блоке с работами
	$('.work__images-item img').on('click', function(){
		var workImagesItem = $(this).attr('src');
		$(this).parents('.work__images-item').addClass('_active');
		$(this).parents('.work__images-item').siblings().removeClass('_active');
		$(this).parents('.work__images').siblings('.work__main-image').children('picture').children('img').prop('src', workImagesItem);
		$(this).parents('.work__images').siblings('.work__main-image').children('picture').children('source').prop('srcset', workImagesItem);
	});

	// Добавление сайта в избранное
	$('.footer__favorites-button').on('click', function(){
		alert('Нажмите Ctrl+D чтобы добавить страницу в закладки')
	});

	$('.text__button').on('click', function(){
		$('.text-wrapper .text').toggleClass('_hidden');
	});

	// input range
	$('.quiz__range').on('change', function(){
		var rangeValue = $(this).val();
		$('.quiz__range-value').val(rangeValue);
	});
	$('.quiz__range').on('mousemove', function(){
		var rangeValue = $(this).val();
		$('.quiz__range-value').val(rangeValue);
	});
	$('.quiz__range-value').on('change', function(){
		var rangeInputValue = $(this).val();
		$('.quiz__range').val(rangeInputValue);
	});

	// Отправка формы
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});