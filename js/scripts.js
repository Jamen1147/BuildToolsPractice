$(document).ready(function() {
	// carousel control
	$('#mycarousel').carousel({ interval: 2000 });
	var cBtn = $('#carouselButton');
	cBtn.click(function() {
		var icon = cBtn.children('span');
		if (icon.hasClass('fa-pause')) {
			$('#mycarousel').carousel('pause');
			icon.removeClass('fa-pause');
			icon.addClass('fa-play');
		} else {
			$('#mycarousel').carousel('cycle');
			icon.removeClass('fa-play');
			icon.addClass('fa-pause');
		}
	});

	// login control
	$('#loginBtn').click(function() {
		$('#loginModal').modal('show');
	});
	$('#loginModalCloseBtn').click(function() {
		$('#loginModal').modal('hide');
	});
	$('#loginModalCancelBtn').click(function() {
		$('#loginModal').modal('hide');
	});

	// reserve control
	$('#reserveBtn').click(function() {
		$('#reserveModal').modal('show');
	});
	$('#reserveModalCloseBtn').click(function() {
		$('#reserveModal').modal('hide');
	});
	$('#reserveModalCancelBtn').click(function() {
		$('#reserveModal').modal('hide');
	});
});
