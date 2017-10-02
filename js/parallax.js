// scroll
$(document).ready(function() {
	
	$(window).bind('scroll', function() {
		"use strict";
		parallax();
	});
		$('a.panel1').click(function(){
    	$('html, body').animate({
    		scrollTop:0
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
	});
    $('a.panel2').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#panel2').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.panel3').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#panel3').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.panel4').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#panel4').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.panel5').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#panel5').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.panel6').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#panel6').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    
});

function parallax() {
	"use strict";
	var scrollPosition = $(window).scrollTop();
	$('#images').css('top', (0 - (scrollPosition * .6)) + 'px');
}
//

// pin the intro
	var rocket = new ScrollTop.Scene({
		triggerElement: '#intro',
		triggerHook: 0,
		duration: '30%'
	})
	.setPin('#intro', {pushFollowers: false})
	.addTo(controller);
//

// * Next/prev and primary nav btn click handlers */

/* Scroll the background layers */
function parallaxScroll(){
	"use strict";
	var scrolled = $(window).scrollTop();
}

/* Set navigation changes to an active state as the user scrolls */
function parallaxScroll(){
	"use strict";
	var section1Top = 0 ;
	// The top of each section is offset by half the distance to the previous section.
	var section2Top =  $('#panel2').offset().top - (($('#panel3').offset().top - $('#panel2').offset().top) / 2);
	var section3Top =  $('#panel3').offset().top - (($('#panel4').offset().top - $('#panel3').offset().top) / 2);
	var section4Top =  $('#panel4').offset().top - (($('#panel5').offset().top - $('#panel4').offset().top) / 2);
	var section5Top =  $('#panel5').offset().top - (($('#panel6').offset().top - $('#panel5').offset().top) / 2);
	var section6Top =  $('#panel6').offset().top - (($(document).height() - $('#panel6').offset().top) / 2);
	$('nav#primary a').removeClass('active');
	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('nav#primary a.panel1').addClass('active');
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		$('nav#primary a.panel2').addClass('active');
	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
		$('nav#primary a.panel3').addClass('active');
	} else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top){
		$('nav#primary a.panel4').addClass('active');
	} else if ($(document).scrollTop() >= section5Top && $(document).scrollTop() < section6Top){
		$('nav#primary a.panel5').addClass('active');
	} else if ($(document).scrollTop() >= section6Top){
		$('nav#primary a.panel6').addClass('active');
	}
	
}