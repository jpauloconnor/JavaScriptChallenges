$(document).ready(function(){
	   //3 
	alert("jQuery is hooked up.");

$( "#hide-list" ).dblclick(function(){
	$( ".event-list" ).hide();
});

$( "#show-list" ).dblclick(function(){
	$( ".event-list" ).show();
});

$( "li" ).hover(
  function() {
    $( this ).append( $( "<span> ***</span>" ) );
  }, function() {
    $( this ).find( "span:last" ).remove();
  }
);
 
$( "li.fade" ).hover(function() {
  $( this ).fadeOut( 100 );
  $( this ).fadeIn( 500 );
});

});