(function(window, google, mapster){
	// map Option
	var options = mapster.MAP_OPTIONS,

	element = document.getElementById('bei_map'),
	//Create map

	map = new google.maps.Map(element, options);
	// map = mapster.create(element, options);



	//create marker

	var marker = new google.maps.Marker({
		position : {
			lat: 4.0518286,
			lng: 9.7751069
		},
		map: map.gMap,
		//add own icon marker
		icon: 'assets/images/icons/marker_bei.png'
	});

}(window, google, window.Mapster || (window.Mapster = {})));