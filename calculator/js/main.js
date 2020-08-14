$(document).ready(function(){
	function num2str(n, text_forms) {  
		n = Math.abs(n) % 100; var n1 = n % 10;
		if (n > 10 && n < 20) { return text_forms[2]; }
		if (n1 > 1 && n1 < 5) { return text_forms[1]; }
		if (n1 == 1) { return text_forms[0]; }
		return text_forms[2];
	}
	$('.field').on('change',function(){
		val = num2str($(this).val(), ['метр', 'метра', 'метров']);
		$(this).siblings('.field__measure').text(val);
	});

	$('input').on('change', function(){
		// Высота забора
		var fenceHeight = $('.form__field_1 .form_1__field').val();
		// Длина забора
		var fenceLength = $('.form__field_2 .form_1__field').val();
		var fence = fenceHeight * fenceLength;

		// Значение селекта
		var amountSelect1 = parseInt($('.__select__content input:checked').val());
		var amountSelect = amountSelect1 * fence;

		if ($('.checkbox').prop('checked')) {
			var amountCheckbox1 = parseInt(200);
			var amountCheckbox = amountCheckbox1 * fence;
		} else {
			var amountCheckbox = 0;
		}
		var amountVal1 = amountSelect + amountCheckbox;
		$('.amount > span').text(amountVal1);

		if ($('.form__field_1 > .field').val() !== '0') {
			$('.form__field_1 > .field').removeClass('invalid');
			$('.form__field_1').removeClass('invalid');
		}
		if ($('.form__field_2 > .field').val() !== '0') {
			$('.form__field_2 > .field').removeClass('invalid');
			$('.form__field_2').removeClass('invalid');
		}
		if (!$('.form_1__field_1 > .field').is(':invalid')) {
			$('.form_1__field_1 > .field').removeClass('invalid');
			$('.form_1__field_1').removeClass('invalid');
		}
		if (!$('.form_1__field_2 > .field').is(':invalid')) {
			$('.form_1__field_2 > .field').removeClass('invalid');
			$('.form_1__field_2').removeClass('invalid');
		}
		if (!$('.form_1__field_3 > .field').is(':invalid')) {
			$('.form_1__field_3 > .field').removeClass('invalid');
			$('.form_1__field_3').removeClass('invalid');
		}
		if (!$('.form_1__field_1 > .field').is(':invalid') && !$('.form_1__field_2 > .field').is(':invalid') && !$('.form_1__field_3 > .field').is(':invalid')) {
			$('.form_2').addClass('is-valide');
		}

		// Подсвечивание кнопки
		if ($('.form__field_1 > .field').is(':valid') && $('.form__field_2 > .field').is(':valid') && $('.form__field_1 > .field').val() !== '0' && $('.form__field_2 > .field').val() !== '0' && $('.form__field_1 > .field').val() !== '' && $('.form__field_2 > .field').val() !== '') {
			$('.button-next').removeClass('disabled');
		} else {
			$('.button-next').addClass('disabled');
		}

		if ($('.form_1__field_1 > .field').is(':valid') && $('.form_1__field_2 > .field').is(':valid') && $('.form_1__field_3 > .field').is(':valid')) {
			$('.button-send').removeClass('disabled');
		}
	});

	// Галочки
	$('.field').on('change', function(){
		if ($('.form__field_1 > .field').is(':valid') && $('.form__field_1 > .field').val() !== '0' && $('.form__field_1 > .field').val() !== '') {
			$('.form__field_1 > .field').parent().addClass('valid');
		} else {
			$('.form__field_1 > .field').parent().removeClass('valid');
		}
	});
	$('.field').on('change', function(){
		if ($('.form__field_2 > .field').is(':valid') && $('.form__field_2 > .field').val() !== '0' && $('.form__field_2 > .field').val() !== '') {
			$('.form__field_2 > .field').parent().addClass('valid');
		} else {
			$('.form__field_2 > .field').parent().removeClass('valid');
		}
	});


	$('.form_1').on('submit', function(){
		// Ширина забора
		var firstFormLengthVal = $('.form__field_1 > .field').val();
		var firstFormLengthMeters = $('.field_1__measure').text();
		var firstFormLength = firstFormLengthVal + ' ' + firstFormLengthMeters;
		$('.message__length span').text(firstFormLength);

		// Высота забора
		var firstFormHeightVal = $('.form__field_2 > .field').val();
		var firstFormHeightMeters = $('.field_2__measure').text();
		var firstFormHeight = firstFormHeightVal + ' ' + firstFormHeightMeters;
		$('.message__height span').text(firstFormHeight);

		// Цена
		var firstFormAmount = $('.amount span').text();
		$('.message__amount-val').text(firstFormAmount);

		// Материал
		var firstFormMaterial = $('.__select__content input:checked').attr('data-material');
		$('.message__material').text(firstFormMaterial);

		$('.form_1').removeClass('active');
		$('.form_2').addClass('active');
		if ($('.__select__content input:checked').val() === '0') {
			$('.form_1').addClass('active');
			$('.form_2').removeClass('active');
		} else {
			$('.form_1').removeClass('active');
			$('.form_2').addClass('active');
		}
	});
	$('.button-next').on('click', function(){
		if ($('.form__field_1 > .field').val() == '0') {
			$('.form__field_1 > .field').addClass('invalid');
			$('.form__field_1').addClass('invalid');
		}
		if ($('.form__field_2 > .field').val() == '0') {
			$('.form__field_2 > .field').addClass('invalid');
			$('.form__field_2').addClass('invalid');
		}

		if ($('.form__field_1 > .field').val() == '') {
			$('.form__field_1 > .field').addClass('invalid');
			$('.form__field_1').addClass('invalid');
		}
		if ($('.form__field_2 > .field').val() == '') {
			$('.form__field_2 > .field').addClass('invalid');
			$('.form__field_2').addClass('invalid');
		}
	});
	$('.button-send').on('click', function(){
		if ($('.form_1__field_1 > .field').is(':invalid')) {
			$('.form_1__field_1 > .field').addClass('invalid');
			$('.form_1__field_1').addClass('invalid');
		}
		if ($('.form_1__field_2 > .field').is(':invalid')) {
			$('.form_1__field_2 > .field').addClass('invalid');
			$('.form_1__field_2').addClass('invalid');
		} else {
			$('.form_1__field_2 > .field').removeClass('invalid');
			$('.form_1__field_2').removeClass('invalid');
		}
		if ($('.form_1__field_3 > .field').is(':invalid')) {
			$('.form_1__field_3 > .field').addClass('invalid');
			$('.form_1__field_3').addClass('invalid');
		} else {
			$('.form_1__field_3 > .field').removeClass('invalid');
			$('.form_1__field_3').removeClass('invalid');
		}
	});
	$('.form_2__back').on('click', function(){
		$('.form_1').addClass('active');
		$('.form_2').removeClass('active');
	});

	$('.form_2').on('submit', function(){
		$(this).removeClass('active');
		$('.submit').addClass('active');

		var submitName = $('.form_1__field_1 .field').val();
		$('.submit__name').text(submitName + ', ');

		var submitEmail = $('.form_1__field_2 .field').val();
		$('.submit__email span').text(submitEmail);

		var submitTel = $('.form_1__field_3 .field').val();
		$('.submit__tel span').text(submitTel);
	});

	$('.submit__back').on('click', function(){
		$('.form-wrapper').addClass('is-hidden');
	});

	// Masked Input
	$(function($){
	   $("#phone").mask("+7 (999) 999 - 99 - 99");
	});
});

const selectSingle = document.querySelector('.__select');
const selectSingle_title = selectSingle.querySelector('.__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}

// Reset title
const reset = document.querySelector('.reset');
  reset.addEventListener('click', () => {
  selectSingle_title.textContent = selectSingle_title.getAttribute('data-default');
});