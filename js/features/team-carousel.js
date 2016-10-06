$(document).ready(function () {
	
	$("#team-carousel-slides").owlCarousel({
		items: 1,
		loop: true,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		stagePadding: 0,
		nav: true,
		navText: [
			"<i class='fa fa-long-arrow-left fa-lg fa-fw'></i>", 
			"<i class='fa fa-long-arrow-right fa-lg fa-fw'></i>"
		],
		dots: false,
		autoplay: false,
		autoHeight: false,
		autoplaySpeed: 8000
	});
	
}());