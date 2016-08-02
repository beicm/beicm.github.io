(function(window, google){
//1.0 build class
	//1.0.1 module
	var Mapster = (function(){
		// constructor
		function Mapster(element, opts){
			this.gMap = new google.maps.Map(element, opts);
		}
		Mapster.prototype = {

		};


		return Mapster;
		//return function anot a object
	}());
	//end module

	// Mapster.create = function(){
	// 	return new Mapster(element, opts);
	// };

	// attach to window
	window.Mapster = Mapster;

}(window, google));