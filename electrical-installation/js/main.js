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

	// Шаг 1
	$('.quiz__next-button').on('click', function(){
		if ($('.quiz').is(':valid')) {
			$('.quiz_2').siblings('.quiz__page').removeClass('_active');
			$('.quiz_2').addClass('_active');
			$('.quiz__step:nth-child(2)').addClass('_active');
			$('.quiz__step:nth-child(2)').siblings().removeClass('_active');
			$('.quiz__steps-text').text('Осталось 6 вопросов');

			// Шаг 2
			$('.quiz__next-button').on('click', function(){
				$('.quiz_3').siblings('.quiz__page').removeClass('_active');
				$('.quiz_3').addClass('_active');
				$('.quiz_3 .quiz__radio-button').attr('required', 'required');
				$('.quiz__step:nth-child(3)').addClass('_active');
				$('.quiz__step:nth-child(3)').siblings().removeClass('_active');
				if ($('.quiz').is(':valid')) {
					$('.quiz__steps-text').text('Осталось 5 вопросов');
				}

				// Шаг 3
				$('.quiz__next-button').on('click', function(){
					if ($('.quiz').is(':valid')) {
						$('.quiz_4').siblings('.quiz__page').removeClass('_active');
						$('.quiz_4').addClass('_active');
						$('.quiz_4 .quiz__radio-button').attr('required', 'required');
						$('.quiz__step:nth-child(4)').addClass('_active');
						$('.quiz__step:nth-child(4)').siblings().removeClass('_active');
						$('.quiz__steps-text').text('Осталось 4 вопроса');

						// Шаг 4
						$('.quiz__next-button').on('click', function(){
							if ($('.quiz').is(':valid')) {
								$('.quiz_5').siblings('.quiz__page').removeClass('_active');
								$('.quiz_5').addClass('_active');
								$('.quiz_5 .quiz__radio-button').attr('required', 'required');
								$('.quiz__step:nth-child(5)').addClass('_active');
								$('.quiz__step:nth-child(5)').siblings().removeClass('_active');
								$('.quiz__steps-text').text('Осталось 3 вопроса');

								// Шаг 5
								$('.quiz__next-button').on('click', function(){
									if ($('.quiz').is(':valid')) {
										$('.quiz_6').siblings('.quiz__page').removeClass('_active');
										$('.quiz_6').addClass('_active');
										$('.quiz_6 .quiz__radio-button').attr('required', 'required');
										$('.quiz__step:nth-child(6)').addClass('_active');
										$('.quiz__step:nth-child(6)').siblings().removeClass('_active');
										$('.quiz__steps-text').text('Осталось 2 вопроса');

										// Шаг 6
										$('.quiz__next-button').on('click', function(){
											if ($('.quiz').is(':valid')) {
												$('.quiz_7').siblings('.quiz__page').removeClass('_active');
												$('.quiz_7').addClass('_active');
												$('.quiz_7 .quiz__radio-button').attr('required', 'required');
												$('.quiz__step:nth-child(7)').addClass('_active');
												$('.quiz__step:nth-child(7)').siblings().removeClass('_active');
												$('.quiz__steps-text').text('Последний вопрос');
												$('.quiz__next-button').on('click', function(){
													if ($('.quiz').is(':valid')) {
														$('.quiz_8').siblings('.quiz__page').removeClass('_active');
														$('.quiz_8').addClass('_active');
														$('.quiz__row').addClass('_hidden');
														$('.quiz .form__field').attr('required', 'required');
													}
												});
											} else {
												$('.quiz_6').siblings('.quiz__page').removeClass('_active');
												$('.quiz_6').addClass('_active');
											}
										});
									} else {
										$('.quiz_5').siblings('.quiz__page').removeClass('_active');
										$('.quiz_5').addClass('_active');
									}
								});
							} else {
								$('.quiz_4').siblings('.quiz__page').removeClass('_active');
								$('.quiz_4').addClass('_active');
							}
						});
					}
				});
			});
		}
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
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});