$(document).ready(function(){
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

	$('.work__images-item img').on('click', function(){
		var workImagesItem = $(this).attr('src');
		$(this).parents('.work__images').siblings('.work__main-image').children('picture').children('img').prop('src', workImagesItem);
		$(this).parents('.work__images').siblings('.work__main-image').children('picture').children('source').prop('srcset', workImagesItem);
	});

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
		$('.mobile-menu__close').on('click', function(){
			$('.header__mobile-menu').removeClass('_active');
			$('body').removeClass('_lock');
		});
	});

	$('.form__file-input').on('change', function(){
		$('.form__file-text').text('Файл прикреплен')
	});

	// Плавная прокрутка
	$('a[href^="#"]').click(function(){
		var target = $(this).attr('href');
		$('html, body').animate({scrollTop: $(target).offset().top - 100}, 1000);
		return false;
	});

	$('.form__field').mask('+7 (999) 999-99-99');

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
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});