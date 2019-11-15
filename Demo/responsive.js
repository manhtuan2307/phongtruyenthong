
/***************************************************************************************/
/*
/*		Designed by 'AS Designing'
/*		Web: http://www.asdesigning.com
/*
/**************************************************************************************/


var calcHeight = function() 
{
	var headerDimensions = $('#frame_header').height();
	var selector = '#frames';

	$(selector).height($(window).height() - headerDimensions);
	$('.full-screen .iframe').height($(window).height() - headerDimensions);
}


/**************************************************************************************/
/*	when document loads
/**************************************************************************************/

$(document).ready(function()
{
	calcHeight();

	$(window).resize(function() 
	{
		calcHeight();
	}).load(function() 
	{
		calcHeight();
	});	

	var frame = document.getElementById('frame');
	
	$('#preview_nav').css('left',(($(window).width())/2-310)+'px').show();
	$(window).resize(function()
	{
		$('#preview_nav').css('left',(($(window).width())/2-310)+'px');
	}); 	

});

