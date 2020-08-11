$(document).ready(function(){
	$('img, a').on('dragstart', function(event) { event.preventDefault(); });
	$('.item__info').slideUp(0);
	$('.item__content').on('click', function(){
		$(this).siblings('.item__info').slideToggle(300);
		$(this).parent().siblings().children('.item__info').slideUp(300);
		$(this).toggleClass('active');
		$(this).parent().siblings().children('.item__content').removeClass('active');
	});
	$('.menu__button_1').on('click', function(){
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
		$('.tabs#tab_01').addClass('active');
		$('.tabs#tab_01').siblings().removeClass('active');
	});
	$('.menu__button_2').on('click', function(){
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
		$('.tabs#tab_02').addClass('active');
		$('.tabs#tab_02').siblings().removeClass('active');
	});
	$('.menu__button_3').on('click', function(){
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
		$('.tabs#tab_03').addClass('active');
		$('.tabs#tab_03').siblings().removeClass('active');
	});
	$('.preloader__wrapper').addClass('hidden');
});