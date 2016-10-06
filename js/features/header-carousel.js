$(document).ready(function () {
	
	$("#header-carousel-slides").owlCarousel({
		items: 1,
		loop: true,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		stagePadding: 0,
		nav: false,
		dots: false,
		autoplay: true,
		autoHeight: true,
		autoplaySpeed: 1000
	});
	
}(jQuery));