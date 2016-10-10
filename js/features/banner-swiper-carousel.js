/* controls the banner swiper carousel functionality */
$(document).ready(function () {
	
	$("#banner-carousel-slides").owlCarousel({
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