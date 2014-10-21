connectors
==========

 A simple JQuery Connector plugin. 

Draws a path between two HTML elements.

USAGE:
	
	Include Jquery file
	<script src="jquery.min.js"></script>
	
	Include Connector Plugin file
	<script src="jquery.connector_html5.js"></script>
	
	Onload Script
	<script>
		$( function() {
			$('#container').connector({
				connectFrom: '#box1', 
				connectTo: '#box2'
			});
		});
	</script>
	
	Where
	connectFrom = ID or Class of Box FROM which you need to connect the path
	connectTo = ID or Class of Box TO which you need to connect the path
	'#container' = All paths will be drawn inside this element
	
	Optional parameters
	connectColor: '#ccc'  (sets color of the connecting curve path)
	connectSize: 5  (sets the thickness of the path)
	
	Using <canvas> tag and Bezier Curve function, we get these smooth curves in case of HTML5 version of Connector.
