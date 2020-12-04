$(document).ready(function(){

	$('.nav-icon').click(function(){
		$('.header-menu ul').slideToggle(1000)

		return false;
	})

	 // Clients-Carousel
	$('.clients').owlCarousel({
		items:4,
		loop:true,
		autoplay:true,
		dots:false,
		nav:false,
		responsive:{
        0:{
            items:2
        },
        767:{
            items:2
        },
        768:{
            items:4
        }
    }
	 })
})