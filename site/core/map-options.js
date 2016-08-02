/*
	################# ADD Librairie ######


*/

(function(window, google, mapster){

	mapster.MAP_OPTIONS  = {
		center: {
			lat: 4.0518286,
			lng: 9.7751069
		},
		zoom: 10,
		disableDefaultUI: false,
		scrollwheel: true,
		mapTypeID: google.maps.MapTypeId.ROADMAP,
		maxZoom: 11,
		minZoom: 9,
		zoomControlOptions: {
			position: google.maps.ControlPosition.LEFT_BOTTOM,
			style: google.maps.ZoomControlStyle.DEFAULT
		},
		panControlOptions: {
			position: google.maps.ControlPosition.LEFT_BOTTOM
		}
	};


}(window, google, window.Mapster || (window.Mapster = {})));