$('.portfolio-item').mouseenter(function(){
	$(this).find('.descr').addClass('visible')
	$(this).find('.descr-2').addClass('visible')
});

$('.portfolio-item').mouseleave(function(){
	$(this).find('.descr').removeClass('visible')	
	$(this).find('.descr-2').removeClass('visible')
});

$(window).scroll(function(){
	if(!$('.header-menu-wrapper').hasClass('scrolled')) {
		$('.header-menu-wrapper').addClass('scrolled')
		var oldSrc = '../image/home/logo-light.svg';
		var newSrc = '../image/home/logo-black.svg';
		$('.header-logo img[src="' + oldSrc + '"]').attr('src', newSrc);
	} 
})

$(window).scroll(function() {
    var height = $(window).scrollTop();
	    if(height > 0) {
	        if(!$('.header-menu-wrapper').hasClass('scrolled')) {
				$('.header-menu-wrapper').addClass('scrolled')
				var oldSrc = '../image/home/logo-light.svg';
				var newSrc = '../image/home/logo-black.svg';
				$('.header-logo img[src="' + oldSrc + '"]').attr('src', newSrc);
		} 
    } else{
    	$('.header-menu-wrapper').removeClass('scrolled')
		var oldSrc = '../image/home/logo-light.svg';
		var newSrc = '../image/home/logo-black.svg';
		$('.header-logo img[src="' + newSrc + '"]').attr('src', oldSrc);
    }
});

$('.main-carousel').flickity({
  contain: true,
  prevNextButtons: false,
  autoPlay: true,
  accessibility: true,
   wrapAround: true
});

$('.main-carousel-partners').flickity({
  cellAlign: 'center',
  contain: true,
  prevNextButtons: false,
  accessibility: true,
  pageDots: false,
  wrapAround: true
});

$('.main-carousel-blog').flickity({
  cellAlign: 'center',
  contain: true,
  prevNextButtons: false,
  accessibility: true,
  pageDots: true,
  wrapAround: true,
  imagesLoaded: true
});

$('.menu-icon').click(function(){
	$('.sliding-side-menu').toggleClass('visible')
	$('.menu-icon').toggleClass('toggle-sliding-menu')
});



function anchorA(config){ 
	var regex = /#([^\/#]+)$/; 
	if(regex.test(config.href)){ 
		if(config.event) {
			config.event.preventDefault(); 
		}
		var href = config.href;
		// hash => ['#id', ...]
		var hash = href.match(regex); 

		if(hash != null){ 
			var id = hash[0]; // #id - строка
			var missing_element = $(id);
			if(missing_element.length > 0) {
				var missing_element_top_position = missing_element.offset().top;
				var header_height = $('.header-menu-wrapper').outerHeight();
				var final_scroll_position = missing_element_top_position - header_height;

				$('html, body').animate({ 
					scrollTop: final_scroll_position
				}, 200); 
			}
		} 
	} 
}


$(document).on('click', 'a', function(event){ 
	anchorA({
		href: $(this).attr('href'),
		event: event
	});
})
window.onload = function(){ 
	anchorA({
		href: document.URL
	}) 
}