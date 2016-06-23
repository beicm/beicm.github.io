'use strict';


jQuery( function(){
	//cache window object
	// var mnEcran = jQuery( window );
	// //recuperation des différentes attribut crées

	// jQuery( 'section[data-type="background"]' ).each( function(){
	// 	//recuperatin de la section à annuler 
	// 	var imgbg_ = jQuery( this );
	// 	// console.log( imgbg_.data( 'speed' ) ); 
	// 	// Donner les instructions d'animations

	// 	jQuery( window ).scroll( function() {
	// 		var yPos = - ( mnEcran.scrollTop() / imgbg_.data( 'speed' ) );
	// 		// console.log( yPos );
	// 		var Cord_ = ' 50% ' + yPos + ' px ';
	// 		jQuery( imgbg_ ).css( {backgroundPosition: Cord_} );

	// 	} );

	// } );
	
});

$(document).ready( function(){

	$( '#bei_carousel' ).carousel({
		interval:5000,
		cycle:true
	})
} )

