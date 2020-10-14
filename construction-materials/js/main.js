$(document).ready(function(){
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

	$('.burger-wrapper').on('click', function(){
		$(this).toggleClass('_active');
		$('.header__mobile-menu').addClass('_active');
		$('body').addClass('_lock');
		$('.mobile-menu__close').on('click', function(){
			$('.header__mobile-menu').removeClass('_active');
			$('body').removeClass('_lock');
		});
	});
});