/* hides the collapsible dropdown menu on click */
(function(){
	var primaryNav = $("#navigation-production");
	primaryNav.on("click", "a", null, function () {
		primaryNav.collapse("hide");
	});
}());

function autocollapse() {
  var navbar = $('navigation-production');
  navbar.removeClass('collapse');
  if(navbar.innerWidth() < 1000)
    navbar.addClass('collapse');
}
jQuery(document).on('ready', autocollapse);
jQuery(window).on('resize', autocollapse);