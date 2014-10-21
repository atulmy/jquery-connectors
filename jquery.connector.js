/*
	http://atulmy.com
	Author: Atul Yadav
	Email: info@atulmy.com
*/
( function($) {
	
	$.fn.connector = function(options) {
		
		var settings = $.extend( {}, $.fn.connector.defaults, options );
		
		var $container = $(this);
		var upDownCheck = 0;
		$fromBox = $(settings.connectFrom);
		$toBox = $(settings.connectTo);
		
		var topValueFrom = $fromBox.offset().top;
		var boxHeight = $fromBox.height();
		var yFrom = topValueFrom + parseInt(boxHeight/2);
		
		var leftValue = $fromBox.offset().left;
		var boxWidth = $fromBox.width();
		var xFrom = leftValue + boxWidth;
		
		var topValueTo = $toBox.offset().top;
		var boxHeight = $toBox.height();
		var yTo = topValueTo + parseInt(boxHeight/2);
		
		var leftValue = $toBox.offset().left;
		var boxWidth = $toBox.width();
		var xTo = leftValue;
		if(topValueTo > topValueFrom) {
			upDownCheck = 1;
		}
		tracePath($container, xFrom, yFrom, xTo, yTo, upDownCheck, settings.dotSize);	
	};
	
	$.fn.connector.defaults = {
		connectFrom: "#connectFrom",
		connectTo: "#connectTo",
		dotSize: 2
	};
	
	function tracePath($container, xFrom, yFrom, xTo, yTo, upDownCheck, dotSize) {
		var j = yFrom;
		for(var i = xFrom; i <= xTo; i=i+dotSize) {
			$($container).append('<div class="dot" style="left: '+i+'px; top: '+j+'px;"></div>');
			dotSizeY = dotSize+1;
			if(dotSize > 2) {
				dotSizeY = Math.round(dotSize/2);
			}
			if(upDownCheck == 1) {
				if(j < yTo) {
					j = j + dotSizeY;
				}
			} else {
				if(j > yTo) {
					j = j - dotSizeY;
				}
			}
		}
	}
	
}(jQuery));