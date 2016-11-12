$('.menu__hamburger').click(function(){
	if ( $(this).parent().hasClass( "menu_active" ) ) { 
		$(this).parent().removeClass("menu_active")
	} else {
		$(this).parent().addClass("menu_active")
	}
});