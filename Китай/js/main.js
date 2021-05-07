$(document).ready(function(){
	$('.popup_button').on('click', function(){
		$('.popup__wrapper').addClass('_active');
		$('html, body').addClass('_lock');
	});
	$('.popup__close, .popup__area').on('click', function(){
		$('.popup__wrapper').removeClass('_active');
		$('html, body').removeClass('_lock');
	});
});