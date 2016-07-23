'use strict';

// jQuery( document ).ready( function(){
// 	// console.log( 'jquery is ready' );

// 	jQuery( window ).scroll( function(){
// 		// console.log(jQuery( this ).scrollTop());
// 		var $_test = jQuery( 'section[data-type="background"]' );
// 		console.log( jQuery( this ).scrollTop() );
// 	});
// });

jQuery( function(){
	//cache window object
	var mnEcran = jQuery( window );
	//recuperation des différentes attribut crées

	jQuery( 'section[data-type="background"]' ).each( function(){
		//recuperatin de la section à annuler 
		var imgbg_ = jQuery( this );
		// console.log( imgbg_.data( 'speed' ) ); 
		// Donner les instructions d'animations

		jQuery( window ).scroll( function() {
			var yPos = - ( mnEcran.scrollTop() / imgbg_.data( 'speed' ) );
			// console.log( yPos );
			var Cord_ = ' 50% ' + yPos + ' px ';
			jQuery( imgbg_ ).css( {backgroundPosition: Cord_} );

		} );

	} );

	
});

$(document).ready( function(){


	var repere_menu = 45;

	$( '#bei_carousel' ).carousel({
		interval:5000,
		cycle:true
	});

	$( '.nav_bei li > a' ).click( function(evt){
		evt.preventDefault();
		$( '.nav_bei li a' ).removeClass( 'actived' );
		$( this ).addClass( 'actived' );
		
	} );

	// determine height position of my cursor

	/*$( window ).scroll(  function(){
		console.log( $( this ).scrollTop() );
	} );*/

	$("a[href^='#']").click(function(e){

		var pos = $(this.hash).offset().top - repere_menu;
		$('body, html').stop().animate({ scrollTop:pos }, 1500);
		e.preventDefault();

	});


//#################### MAP  ###########

	(function(window, google ){
	// map options

	var 

		options_geo = {
			center:{
				lat: 4.0540905,
				lng: 9.7359671
			},

			zoom:11,
			//customize map 
			disableDefaultUI:false,
			scrollwheel:true,
			draggable:true,
			mapTypeId:google.maps.MapTypeId.ROADMAP,
			maxZoom:13,
			minZoom:10,
			zoomControlOptions:{
				position:google.maps.ControlPosition.LEFT_BOTTOM,
				style:google.maps.ZoomControlStyle.DEFAULT
			},
			panControlOptions:{
				position:google.maps.ControlPosition.LEFTBOTTOM
			}

		},

		element = document.getElementById('bei_map'),
	//map
		map = new google.maps.Map( element , options_geo );

}(window, google ));





} ) // END READy

