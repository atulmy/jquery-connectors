/*
	http://atulmy.com
	Author: Atul Yadav
	Email: info@atulmy.com
*/
( function($) {
	
	$.fn.connector = function(options) {
		
		var settings = $.extend( {}, $.fn.connector.defaults, options );
		
		var $container = $(this);
		$fromBox = $(settings.connectFrom);
		$toBox = $(settings.connectTo);
		
		var topValueFrom = $fromBox.offset().top;
		var boxHeight = $fromBox.height();
		var yFrom = topValueFrom + parseInt(boxHeight/2);
		
		var leftValue = $fromBox.offset().left;
		var boxWidthFrom = $fromBox.width();
		var xFrom = leftValue + boxWidthFrom - 5;
		
		var topValueTo = $toBox.offset().top;
		var boxHeight = $toBox.height();
		var yTo = topValueTo + parseInt(boxHeight/2);
		
		var leftValue = $toBox.offset().left;
		var boxWidthTo = $toBox.width();
		var xTo = leftValue + 5;
		tracePath($container, xFrom, yFrom, boxWidthFrom, xTo, yTo, boxWidthTo, settings.connectSize, settings.connectColor);	
	};
	
	$.fn.connector.defaults = {
		connectFrom: "#connectFrom",
		connectTo: "#connectTo",
		connectColor: '#000000',
		connectSize: 1
	};
	
	function tracePath($container, xFrom, yFrom, boxWidthFrom, xTo, yTo, boxWidthTo, connectSize, connectColor) {
		var containerHeight = $container.height();
		var containerWidth = $container.width();
		var containerId = $container.attr('id');
		if(!$('#'+containerId+'_canvas').is(':visible')) {
			$container.append('<canvas id="'+containerId+'_canvas" width="'+containerWidth+'" height="'+containerHeight+'" style="position: absolute;"></canvas>');
		}
		var canvas = $('#'+containerId+'_canvas')[0];
		var context = canvas.getContext('2d');
		
		context.beginPath();
		context.moveTo(xFrom, yFrom);
		context.bezierCurveTo(xFrom+(xTo-xFrom)/2, yFrom, xTo-(xTo-xFrom)/2, yTo, xTo, yTo);
		context.lineWidth = connectSize;

		// line color
		context.strokeStyle = connectColor;
		context.stroke();
	}
	
}(jQuery));