(function($){

	var url = window.location;
	var element = $('ul.nav a').filter(function() {
	    return this.href == url;
	}).parent().addClass('active').parent().addClass('in').parent();
	if (element.is('li')) {
	    element.addClass('active');
	}

	//OWL CAROUSEL
	$(document).ready(function () {
		if($("#partners-slider").length) {
			$("#partners-slider").owlCarousel({
			    autoPlay: 3000,
			    pagination: false,
			    items: 6,
			    itemsDesktop: [1199, 4],
			    itemsDesktopSmall: [991, 3]
			});
		}
	});


	// $('.transparent-header .slider-banner-container .slider-banner-fullscreen').show().revolution({
	// 	delay:8000,
	// 	startwidth:1140,
	// 	startheight:520,
	// 	fullWidth:"off",
	// 	fullScreen:"on",
	// 	fullScreenOffsetContainer: ".header-top",
	// 	fullScreenOffset: "",

	// 	navigationType: "none",
	// 	// navigationArrows:"solo",
		
	// 	navigationStyle: "preview1",
	// 	// navigationHAlign:"center",
	// 	// navigationVAlign:"bottom",
	// 	// navigationHOffset:0,
	// 	// navigationVOffset:20,

	// 	// soloArrowLeftHalign:"left",
	// 	// soloArrowLeftValign:"center",
	// 	// soloArrowLeftHOffset:0,
	// 	// soloArrowLeftVOffset:0,

	// 	// soloArrowRightHalign:"right",
	// 	// soloArrowRightValign:"center",
	// 	// soloArrowRightHOffset:0,
	// 	// soloArrowRightVOffset:0,

	// 	spinner:"spinner2",
		
	// 	stopLoop:"off",
	// 	stopAfterLoops:-1,
	// 	stopAtSlide:-1,
	// 	onHoverStop: "off",

	// 	shuffle:"off",
	// 	hideTimerBar:"on",

	// 	autoHeight:"off",						
	// 	forceFullWidth:"off",						
								
	// 	hideThumbsOnMobile:"off",
	// 	hideNavDelayOnMobile:1500,						
	// 	hideBulletsOnMobile:"off",
	// 	hideArrowsOnMobile:"off",
	// 	hideThumbsUnderResolution:0,
		
	// 	hideSliderAtLimit:0,
	// 	hideCaptionAtLimit:0,
	// 	hideAllCaptionAtLilmit:0,
	// 	startWithSlide:0
	// });


})(this.jQuery);

