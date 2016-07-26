'use strict';


jQuery( function(){
	//cache window object
	var mnEcran = jQuery( window );
	

	jQuery( 'section[data-type="background"]' ).each( function(){
		 
		var imgbg_ = jQuery( this );
		

		jQuery( window ).scroll( function() {
			var yPos = - ( mnEcran.scrollTop() / imgbg_.data( 'speed' ) );
			
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

	// $( window ).scroll(  function(){
	// 	console.log( $( this ).scrollTop() );
	// } );

	$("a[href^='#']").click(function(e){

		var pos = $(this.hash).offset().top - repere_menu;
		$('body, html').stop().animate({ scrollTop:pos }, 1500);
		e.preventDefault();

	});


		// AWESOME  MENU  



		$('.nav_phone .navicon').click(  function(){

			var  _man = $(this).parent().children( '.navmenu' );

			if( $( _man ).css( 'display' ) == 'none'  ){
				$( _man ).addClass( 'show' );
				$( this ).children('.fa').removeClass( 'fa-navicon' ).addClass( 'fa-close' );
			}else{
				$( _man ).removeClass( 'show' );
				$( this ).children('.fa').addClass( 'fa-navicon' ).removeClass( 'fa-close' );
			}
			
		} );

} );

