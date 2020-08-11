$(document).ready(function(){
	$('img, a').on('dragstart', function(event) { event.preventDefault(); });
	$('.item__info').slideUp(0);
	$('.item__content').on('click', function(){
		$(this).siblings('.item__info').slideToggle(300);
		$(this).parent().siblings().children('.item__info').slideUp(300);
		$(this).toggleClass('active');
		$(this).parent().siblings().children('.item__content').removeClass('active');
	});
	$('.preloader__wrapper').addClass('hidden');
	$('.sec02_button').on('click', function(){
		$('body').addClass('modal-open');
		$('.fade').addClass('in');
	});
});