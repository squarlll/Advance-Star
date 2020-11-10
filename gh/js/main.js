$(document).ready(function(){
	$('.header__burger').on('click', function(){
		$(this).toggleClass('_active');
		$('.header__menu').slideToggle(300);
	});

	jQuery(window).scroll(function(){
		var $sections = $('.section');
		$sections.each(function(i,el){
			var top  = $(el).offset().top-100;
			var bottom = top +$(el).height();
			var scroll = $(window).scrollTop();
			var id = $(el).attr('id');
			if( scroll > top && scroll < bottom){
				$('a._active').removeClass('_active');
				$('a[href="#'+id+'"]').addClass('_active');
			}
	  });

	  var	scrollTop = $('html').scrollTop();
	  if (scrollTop > 400) {
	  	$('.scroll-top-button').addClass('_visible');
	  } else {
	  	$('.scroll-top-button').removeClass('_visible');
	  }
	});

	$('.scroll-top-button').on('click', function(){
		$('body, html').animate({scrollTop: 0}, 800);
	});

	$('nav').on('click', 'a', function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
		top = $(id).offset().top;
		$('body, html').animate({scrollTop: top}, 800);
	});
});