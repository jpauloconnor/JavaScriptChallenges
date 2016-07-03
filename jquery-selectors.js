$(function() {
 //alert('hi');
  // By id - This adds a CSS class to it.
  $('#example-one').addClass('highlight');

  //By class - We'll make two example 2s here.
  $('.example-two').css( "border", "4px solid gray");
  
  // By element/ tag
  $('h5').click(function(){
    $('h5').fadeToggle( "slow", "linear" );
  });
  
//https://jqueryui.com/draggable/
  $( "#draggable" ).draggable();
  // Combo - ID & Class selector
  $('#id-combo-demo, .class-combo-demo').draggable();  

  // Contains : Any list that contains the word sad.
  $('li:contains("sad")').click(function(){
    $(this).hide();
  });

  //$('li:odd').addClass('highlight');

  // next, previous
 // $('li:contains("Three")').prev().addClass('highlight');  

  // siblings, parent - select all other list items in unordered list
  //$('li:contains("Three")').parent().addClass('highlight');

  //Not 0 based. First list item of its parent
  //$('li:nth-child(1)').addClass('highlight');

  // attribute - paragraph with name attribute. Use on anchor tag with href
  //$('p[name="mySecondPara"]').addClass('highlight');

  //exclamation tests for equality. Name not equal to. 
  //$('p[name!="mySecondPara"]').addClass('highlight');

  //all paragraph items Not those with a name attribute item.
  //$('p').not('[name]').addClass('highlight');

  //find h1
  //$(':header').addClass('highlight');

  //any empty paragraphs
  //$('p:empty').text('You seemed lonely so I gave you some text');


});







