$(document).ready(function(){
	$('.schedule__tab_1').on('click', function(){
		$(this).addClass('_active');
		$(this).siblings().removeClass('_active');
		$('.schedule_1').addClass('_active');
		$('.schedule_1').siblings().removeClass('_active');
	});
	$('.schedule__tab_2').on('click', function(){
		$(this).addClass('_active');
		$(this).siblings().removeClass('_active');
		$('.schedule_2').addClass('_active');
		$('.schedule_2').siblings().removeClass('_active');
	});
	$('.schedule__tab_3').on('click', function(){
		$(this).addClass('_active');
		$(this).siblings().removeClass('_active');
		$('.schedule_3').addClass('_active');
		$('.schedule_3').siblings().removeClass('_active');
	});
});