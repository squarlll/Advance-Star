$(document).ready(function(){
	$('img, a').on('dragstart', function(event) { event.preventDefault(); });
	$('.preloader__wrapper').addClass('hidden');
	var mySwiper = new Swiper('.news__slider', {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 30,
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.news__pagination',
			clickable: true,
		}
	});
});