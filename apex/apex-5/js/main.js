$(document).ready(function(){
	$('img, a').on('dragstart', function(event) { event.preventDefault(); });
	$('.item__info').slideUp(0);
	$('.item__content').on('click', function(){
		$(this).siblings('.item__info').slideToggle(300);
		$(this).parent().siblings().children('.item__info').slideUp(300);
		$(this).toggleClass('active');
		$(this).parent().siblings().children('.item__content').removeClass('active');
	});
	$('.create__button').on('click', function(){
		$('.modals__registration').addClass('active');
		$('html').addClass('lock');
	});
	$('.modals__registration .modal__form').on('submit', function(){
		$('.modals__registration').removeClass('active');
		$('.modals__after-registration').addClass('active');
		$('html').addClass('lock');
	});
	$('.modal__area').on('click', function(){
		$(this).parents('.modal').removeClass('active');
		$('html').removeClass('lock');
	});
	$('.create-2__remove').on('click', function(){
		$('.modals__remove').addClass('active');
		$('html').addClass('lock');
	});
	$('.create-2__invite').on('click', function(){
		$('.modals__after-registration').addClass('active');
		$('html').addClass('lock');
	});
	$('.modal__confirm-button_1').on('click', function(){
		$(this).parents('.modal').removeClass('active');
		$('html').removeClass('lock');
	});
	$('.modal__close-button').on('click', function(){
		$(this).parents('.modal').removeClass('active');
		$('html').removeClass('lock');
	});
	$('.preloader__wrapper').addClass('hidden');
});

// copy text
function myFunction() {
	var copyText = document.getElementById("myInput");
	copyText.select();
	document.execCommand("copy");
}