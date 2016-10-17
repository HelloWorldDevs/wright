/* hides the collapsible dropdown menu on click */
(function(){
	var primaryNav = $("#navigation");
	primaryNav.on("click", "a", null, function () {
		primaryNav.collapse("hide");
	});
}());