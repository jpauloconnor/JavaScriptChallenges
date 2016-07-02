//Bronze
function sayHello() {
	alert("Good Morning!");
}

//Silver
function swapText() {
      var textContainer = document.getElementById('changingTextBox').value;

      if (textContainer.length === 0) {
        alert("It appears that you have not entered a value into the text box.");
        return;
      }
      var myTitle = document.getElementById('title');
      title.innerHTML = textContainer;
}

//Gold
var conceptArray = ["git", "HTML", "CSS", "JavaScript"];
function printConcepts(){
	var container = ""
	for (var concept in conceptArray){
		container += conceptArray[concept] + "<br>";
	}
	document.getElementById("concept-list").innerHTML = container;
}