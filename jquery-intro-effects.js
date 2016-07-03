		//Selector expression
		//document == entire dom
		//2 Ready - evaluates when DOM is ready
		//3 execute the anonymous function
		//$ = shortcut for jQuery
		//Why an anonymous function? Why ready at all?
		//Gap in time between DOM fully created
		//Moment when web page has downloaded all that it needs
		//Dangerous gap, users can work with page.
		//jQuery tests DOM to see if it's ready.
		//jQuery degrades gracefully
		//ready allows you to define anonymous function that accesses DOM safely
//Just a test.
		//1			2
jQuery(document).ready(function(){
	   //3 
	alert("jQuery is hooked up.");
});

//Even shorter
$(function(){
	alert("This works!");
});

//http://api.jquery.com/Types/#/jquery

//Just starting with jQuery effects here. 

$(document).ready(function(){
	$("#hide").click(function(){
		$("#image").hide();
	});
  $('#fadeIn').click(function(){
		$('#image').fadeIn(2000);
	});
   $("#explode").click(function(){
    $("#image").hide( "explode", {pieces: 16 }, 2000 );
  });
   $("#explode2").click(function(){
    $("#image").hide( "explode", {pieces: 128 }, 10000 );
  });
  $("#slideup").click(function(){
    $("#image").slideUp();
  });
    $("#slidedown").click(function(){
    $("#image").slideDown();
  });
   $("#bounce").click(function() {
   $("#image").effect( "bounce", "slow" );
  });
  $("#updown").click(function(){
        $("#image").css("color", "red").slideUp(6000).slideDown(200);
    });
   $("#sizechange").click(function(){
        $("#image").animate({
            left: '250px',
            height: '+=150px',
            width: '+=150px'
        });
   });
});

//jQuery storytelling

$(document).ready(function(){
  $("#explode-shirt").click(function(){
    $("#torn-shirt").hide("explode", {pieces: 512}, 2000)
  });
  $("#explode2").click(function(){
    $("#image").hide("explode", {pieces: 16}, 5000)
  });
  $("#slideDown-store").click(function(){
    $("#shirt-store").slideDown();
  });
  $("#bounce-crying").click(function(){
    $("#crying").effect("bounce", "slow");
  });  
});