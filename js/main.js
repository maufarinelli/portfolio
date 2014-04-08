$(document).ready(function(){
				
	var iOffsetAbout = $('#about-us').offset().top;
	var iOffsetProjectsEmployee = $('#web-projects-employee').offset().top;

	$(window).resize(function(){
		iOffsetAbout = $('#about-us').offset().top;
		iOffsetProjectsEmployee = $('#web-projects-employee h2').offset().top;
	});
	
	
	/* For windows' animations with IE9, IE8 and IE7
	--------------------------------------------------------- */
	if($('html').hasClass('ie'))
	{
		$('.project').mouseenter(function(){
			if($(this).children('.window-left:animated').length < 1)
			{				
				$(this).children('.logo').animate({'opacity': 1}, 400);
			
				$(this).children('.window-left').animate({'width': 0}, 200, function(){
					$(this).parent().children('.window-right').css({'right': '192px'});															  
					$(this).parent().children('.window-right').animate({'width': 80}, 200);
				});
				
				$(this).children('.window-right').animate({'width': 0}, 200, function(){
					$(this).parent().children('.window-left').css({'left': '194px'});															  
					$(this).parent().children('.window-left').animate({'width': 85}, 200);
				});
				
				$(this).children('a').removeClass('hide-logo');	
				
				$(this).mouseleave(function(){
					
					$(this).children('.window-left').animate({'width': 0}, 200, function(){
						$(this).parent().children('.window-right').css({'right': '26px'});															  
						$(this).parent().children('.window-right').animate({'width': 80}, 200);
						
					});
					
					$(this).children('.window-right').animate({'width': 0}, 200, function(){
						$(this).parent().children('.window-left').css({'left': '26px'});															  
						$(this).parent().children('.window-left').animate({'width': 85}, 200);
					});
					
					$(this).children('.logo').animate({'opacity': 0}, 200);
					
					$(this).unbind('mouseleave');
				});
			}
		});
		
		/* Helice animation using Raphael.js
		--------------------------------------------------------- */	
		// Creates canvas 280 × 280 at 100, 100
		var canvas = Raphael(document.getElementById('helice'), 280, 280);
		
		//Embed an image into the surface. (src, x, y, width, height)
		var helice = canvas.image("./images/helice.png", 0, 0, 280, 280);
		
		// Animation params
		var anim = Raphael.animation({transform: "r360"}, 25000, "linear");
		
		// Animate it! infinity
		helice.animate(anim.repeat('Infinity'));
		
	}
	else
	{
		/* For windows' animations with CSS3 (Chrome, FF, Safari, Opera)
		--------------------------------------------------------- */
		$('.project, .project-window').hover(function(){	
			$(this).children('.logo').addClass('show-logo');
			$(this).children('.logo').removeClass('hide-logo');
			
			$(this).children('.window-left').addClass("open-left");
			$(this).children('.window-left').removeClass("close-left");
			
			$(this).children('.window-right').addClass("open-right");
			$(this).children('.window-right').removeClass("close-right");
			
		}, function(){
			$(this).children('.logo').addClass('hide-logo');
			$(this).children('.logo').removeClass('show-logo');
			
			$(this).children('.window-left').removeClass("open-left");
			$(this).children('.window-left').addClass("close-left");
			
			$(this).children('.window-right').removeClass("open-right");
			$(this).children('.window-right').addClass("close-right");
		});
	}
		
	
	$('.menu-about').click(function(){
		$('html, body').animate({ scrollTop: iOffsetAbout }, 500);
	});
	$('.menu-projects').click(function(){
		$('html, body').animate({ scrollTop: iOffsetProjectsEmployee }, 500);
	});
	
	
});
