$(document).ready(function(){
	// Шаг 1
	var fieldType = $('.find-out__input[name="type"]');
	var fieldWeight = $('.find-out__input[name="weight"]');
	var fieldDimensions = $('.find-out__input[name="dimensions"]');

	// Шаг 1
	$('.find-out__input').on('change', function(){
		if (fieldType.val() == '') {
			fieldType.addClass('invalid');
		} else {
			fieldType.removeClass('invalid');
		}
		if (fieldWeight.val() == '') {
			fieldWeight.addClass('invalid');
		} else {
			fieldWeight.removeClass('invalid');
		}
		if (fieldDimensions.val() == '') {
			fieldDimensions.addClass('invalid');
		} else {
			fieldDimensions.removeClass('invalid');
		}
	});

	// Шаг 2
	$('.find-out__checkbox .checkbox').on('change', function(){
		if ($('.checkbox[name="other"]').is(':checked')) {
			$(this).siblings('input[type="text"]').prop('required', 'required');
		} else {
			$(this).siblings('input[type="text"]').prop('required', false);
		}
	});
	$('.find-out__checkbox input[type="text"]').on('focus', function(){
		$(this).siblings('.checkbox').prop('checked', 'checked');
		$(this).on('change', function(){
			if ($(this).val() == '') {
				$(this).siblings('.checkbox').prop('checked', false);
			} else {
				$(this).siblings('.checkbox').prop('checked', 'checked');
			}
		});
	});
	$('.find-out__submit').on('click', function(){
		// Шаг 1
		if (fieldType.val() !== '' && fieldWeight.val() !== '' && fieldDimensions.val() !== '') {
			$('.find-out__items_2').siblings().removeClass('_active');
			$('.find-out__items_2').addClass('_active');
			$('.find-out__step span').text('2');
			$('.find-out__submit').addClass('find-out__submit_2');
			// Шаг 2
			$('.find-out__submit_2').on('click', function(){
				var count = $('.find-out__items_2 .checkbox:checked').length;
				if (count > 0) {
					$('.find-out__items_3').siblings().removeClass('_active');
					$('.find-out__items_3').addClass('_active');
					$('.find-out__step span').text('3');
					$('.find-out__submit_2').addClass('find-out__submit_3').removeClass('find-out__submit_2');
				}
				if ($('.checkbox[name="other"]').prop('checked') && $('.field-other').val() == '') {
					$('.find-out__step span').text('2');
					$('.find-out__items_2').siblings().removeClass('_active');
					$('.find-out__items_2').addClass('_active');
					$('.find-out__submit').addClass('find-out__submit_2').removeClass('find-out__submit_3');
				}
				// Шаг 3
				$('.find-out__submit_3').on('click', function(){
					if ($('input[name="whence"]').val() !== '' && $('input[name="where"]').val() !== '' && $('input[name="equipment"]').val() !== '') {
						$('.find-out__items_4').siblings().removeClass('_active');
						$('.find-out__items_4').addClass('_active');
						$('.find-out__step span').text('4');
						$('.find-out__submit_3').addClass('find-out__submit_4').removeClass('find-out__submit_3');
					}

					// Шаг 4
					$('.find-out__submit_4').on('click', function(){
						if ($('.find-out__items_4 input[name="Телефон"]').val() !== '' && $('.find-out__items_4 input[name="Email"]').val() !== '') {
							$('.find-out__items_4').removeClass('_active');
						}
					});
				});
			});
		}
	});
	$('.checkbox[name="other"]').on('change', function(){
		if (!$('.checkbox[name="other"]').prop('checked')) {
			$('.field-other').val('');
		}
	});
});