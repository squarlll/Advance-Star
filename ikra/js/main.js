$(document).ready(function(){
	$('.header__burger').on('click', function(){
		$('body, html').toggleClass('_lock');
		$('.header__container_1').toggleClass('_active');
		$('.close-button').on('click', function(){
			$('body, html').removeClass('_lock');
			$('.header__container_1').removeClass('_active');
		});
	});

	$('.vote__readmore').on('click', function(){
		$(this).toggleClass('_active');
		$(this).siblings('.vote__text').toggleClass('_active');
	});

	$('.mobile-menu__list-item').on('click', function(){
		$(this).toggleClass('_active');
		$(this).siblings().removeClass('_active');
	});
});
$('.vote__content').slick({
	arrows:true,
	slidesToShow:4,
	slidesToScroll:4,
	responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 2,
        slidesToScroll:2,
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 1,
        slidesToScroll:1,
      }
    },
  ]
});
$('.trailers__content').slick({
	arrows:true,
	dots:true,
	slidesToShow:1,
});
$('.gallery__content').slick({
	arrows:true,
	dots:true,
	slidesToShow:2,
	responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});
$('.magic__content').slick({
	arrows:true,
	dots:true,
	slidesToShow:7,
	slidesToScroll:7,
	responsive: [
	    {
	      breakpoint: 1711,
	      settings: {
	        slidesToShow: 6,
	        slidesToScroll: 6,
	      }
	    },
	    {
	      breakpoint: 1421,
	      settings: {
	        slidesToShow: 5,
	        slidesToScroll: 5,
	      }
	    },
	    {
	      breakpoint: 1221,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 4,
	      }
	    },
	    {
	      breakpoint: 1021,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	      }
	    },
	    {
	      breakpoint: 901,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	      }
	    },
	  ]
});