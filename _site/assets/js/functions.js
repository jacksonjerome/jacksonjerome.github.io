$( document ).ready(function(){
 $(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	var t = $('#about').offset().top;
	var b = $('#img1').offset().top;
	
	$('#head1').css({
		'transform' : 'translate(0px, '+ wScroll/6 +'%)',
		'opacity' : 1-((wScroll)/300)
	});
	
	$('.tagline').css({
		'transform' : 'translate(0px, '+ wScroll/6 +'%)',
		'opacity' : 1-((wScroll)/300)
	});
	
	if(wScroll >= (t-50) && wScroll < t){
		$('#navbar').css({
			'background-color' : 'rgba(0,0,0,'+ ((wScroll-(t-50))/62.5) +')'
		});
	}
	
	else if(wScroll >= t && wScroll < (b-50)){
		$('#navbar').css({
			'background-color' : 'rgba(0,0,0,0.8)'
		});
	}
	
	else if(wScroll >= (b-50) && wScroll < b){
		$('#navbar').css({
			'background-color' : 'rgba(0,0,0,'+ (0.8-((wScroll-(b-50))/62.5)) +''
		});
	}
	
	else if(wScroll >= b || wScroll < (t-50)){
		$('#navbar').css({
			'background-color' : 'rgba(0,0,0,0)'
		});
	}

 });
 
 $(function() {
	smoothScroll(500);
	
	function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	         }, duration);
	     }
	    });
    }
	
 });
 

});