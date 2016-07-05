//Sublime server got me, I guess.
$(function() {

  $.ajax({
  	type: 'GET',
  	url: 'http://rest.learncode.academy',
  	success: function(data){
  	 $.each(orders, function(i, order){
        $orders.append('<li>name:' + order.name +', drink:' + order.drink + '</li>');
     });
  	}
  });
});
/*
  $('#clickme').click(function() {
   
      
    $.getJSON('JSONdata.json', function(data) {

        var items = [];

        $.each(data, function(key, val) {

          items.push('<li id="' + key + '">' + val + '</li>');    

        });

        $('<ul/>', {
          'class': 'interest-list',
          html: items.join('')
        }).appendTo('body');

     });
     
      });

    
    $.ajax({
       url: 'JSONdata.json',
       dataType: 'json',
       success: function(data) {
          var items = [];

          $.each(data, function(key, val) {

            items.push('<li id="' + key + '">' + val + '</li>');    

          });

          $('<ul/>', {
             'class': 'interest-list',
             html: items.join('')
          }).appendTo('body');

       },
      statusCode: {
         404: function() {
           alert('There was a problem with the server.  Try again soon!');
         }
       }
    });
  });
  
});