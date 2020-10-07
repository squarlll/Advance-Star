$(document).ready(function(){
	$('.work__images-item img').on('click', function(){
		var workImagesItem = $(this).attr('src');
		// alert(workImagesItem);
		$('.work__main-image img').prop('src', workImagesItem);
		$('.work__main-image source').prop('srcset', workImagesItem);
	});
});