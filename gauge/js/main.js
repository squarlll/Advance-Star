$(document).ready(function(){
	$('.button_1').on('click', function(){
		$(this).addClass('target');
		$(this).siblings().addClass('target');
		$('tab_1').addClass('target');
		$('tab_1').siblings().removeClass('target');
	});

	$('.characteristics__slider').slick({
		prevArrow: $('.slick-prev_1'),
		nextArrow: $('.slick-next_1'),
	});

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	// Плавная прокрутка
	$('a[href^="#"]').click(function(){
		var target = $(this).attr('href');
		$('html, body').animate({scrollTop: $(target).offset().top - 50}, 1000);
		return false;
	});

	// Видео
	$(document).on('click', '.video__preview', function() {
		var $video = $('#video1'),
			src = $video.attr('src');
		$('.video__preview').fadeOut(400);
	 
		$video.attr('src', src + '&autoplay=1');
	});

	$("#phone").mask("+7 (999) 999-99-99");
});

// check Webp
function testWebP(callback) {
	var webP = new Image();
		webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else{
		document.querySelector('body').classList.add('no-webp');
	}
});