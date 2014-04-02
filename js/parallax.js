// Paralax customize by Mauricio Farinelli, based on http://www.ianlunn.co.uk/blog/code-tutorials/recreate-nikebetterworld-parallax/
(function($){
	
	var $window = $(window);
	var $header = $('header');
	var $sun = $('#sun');
	var $bgBack = $('#background');
	var $bgFront = $('#forefront');
	var windowHeight = $window.height();
	var pos;
	
	$('#background, header, #sun, .mobile-symbol').bind('inview', function (event, visible) {
		
		if (visible == true) 
		{
			$(this).addClass("inview");
		}
		
		else 
		{
		  $(this).removeClass("inview");
		}
		
	});
	
	/* 	Core function of background moves
	* 	x = the horizontal position of the image
		negative = TRUE or FALSE. if true Background will have negative value
	*	windowHeight = the height of the window
	*	pos = The position of the scrollbar
	*	adjuster = A value that moves the background image into a position we want
	*	inertia = The speed at which the background image moves in relation to the scrollbar
	*/
	function newPos(x, negative, windowHeight, pos, adjuster, inertia)
	{ 
		if(negative == 1) 
			return x + "% "+ (-((windowHeight + pos) - adjuster) * inertia) + "px"; 
		else
			return x + "% "+ (((windowHeight + pos) - adjuster) * inertia) + "px"; 
	}
	
	/*
	* Change bg gradient. sunset effect
	* start : the initial value of the hue color
	* pos : The position of the scrollbar
	* inertia : The speed at which the background color changes in relation to the scrollbar 
	*/
	function newGradient(start, pos, inertia)
	{
		return start - (pos * inertia);
	}

	
	$(window).scroll(function(){
		pos = $window.scrollTop();	
		
		if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
			if($bgBack.hasClass("inview"))
			{
				// In this case, I put the winodwHeight value fix as 800, because doesn't matter the height, I want the y position to start at 0px;
				$bgBack.css({'backgroundPosition': newPos(50, 0, 800, pos, 800, 0.25)});
			}
			
			if($sun.hasClass("inview"))
			{
				// In this case, I put the windowHeight value fix as 800, because doesn't matter the height, I want the y position to start at 0px;
				$sun.css({'backgroundPosition': newPos(50, 0, 800, pos, 800, 0.175)});
			}
			
			if($header.hasClass("inview"))
			{
				$header.css({'background': '-webkit-linear-gradient(top,  hsl('+ newGradient(36, pos, 0.04) +',100%,53%) 0%,hsl('+ newGradient(44, pos, 0.04) +',100%,60%) 43%)'});
				$header.css({'background': '-moz-linear-gradient(top,  hsl('+ newGradient(36, pos, 0.04) +',100%,53%) 0%,hsl('+ newGradient(44, pos, 0.04) +',100%,60%) 43%)'});
				$header.css({'background': '-o-linear-gradient(top,  hsl('+ newGradient(36, pos, 0.04) +',100%,53%) 0%,hsl('+ newGradient(44, pos, 0.04) +',100%,60%) 43%)'});
				$header.css({'background': '-ms-linear-gradient(top,  hsl('+ newGradient(36, pos, 0.04) +',100%,53%) 0%,hsl('+ newGradient(44, pos, 0.04) +',100%,60%) 43%)'});
			}
		}
		
		// To show mobile symbol to click on window 
		if($('.mobile-symbol').hasClass('inview'))
		{
			$('.mobile-symbol').animate({opacity: 0}, 1000, 'easeOutCubic', function(){
				$('.mobile-symbol').hide();				
			});
		}
	});
	
})(jQuery);
