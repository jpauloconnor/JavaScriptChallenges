//DEMO: Friend Info
var friend = {
    firstName : "Paul",
    lastName  : "O'Connor",
    age       : 39
};

document.getElementById("demo").innerHTML = friend.firstName + " " + friend.lastName + friend.age;
document.getElementById("name").innerHTML = friend.firstName;
document.getElementById("age").innerHTML = friend.age;

//JavaScript Record
var record = {
  //property slots
  fName : "James",
  lName : "Joyce",
  age   : 26
}

//Demo: Looping over an object.


var netflix = {
  showName      : "",
  episodeNo     : 1,
  episodeDesc   : "",
  averageRating : 4,
  watchNow      : function(){
    alert("You are now queueing up " + this.showName + " Episode: " + this.episodeNo);
  }
};

var houseOfCards = Object.create(netflix);
houseOfCards.showName = "House of Cards";
houseOfCards.episodeNo = 1;
houseOfCards.episodeDesc = "We are introduced to the nefarious ways of Frank Underwood.";

document.getElementById("show-name").innerHTML = houseOfCards.showName;
document.getElementById("episode-number").innerHTML = houseOfCards.episodeNo;
document.getElementById("episode-description").innerHTML = houseOfCards.episodeDesc;

var peakyBlinders = Object.create(netflix);
peakyBlinders.showName = "Peaky Blinders";
peakyBlinders.episodeNo = 1;
peakyBlinders.episodeDesc = "We are introduced to the craziest brothers on Netflix.";

document.getElementById("show-name-2").innerHTML = peakyBlinders.showName;
document.getElementById("episode-number-2").innerHTML = peakyBlinders.episodeNo;
document.getElementById("episode-description-2").innerHTML = peakyBlinders.episodeDesc;


//Address details



//Bronze:  
//Create an object literal called netflixShow. It should have an id, a name, and description property.    
  //You can set the values to whatever you want(ie, name : "Sadness Prevails")
//Silver: Inside the netflixShow object, create another object called seasonInfo. Inside that season, create a season number property, an overview property,and a function that prints the overview.
//Gold: Create another object literal called episodes. This object is going to be an array with information inside of it.
// episodeNumber & episodename properties. 

//A couple utility functions for making space in the console
function makeTwoLinesOfSpace(){
  console.log("        ");
  console.log("        ");
}

section = "  ACCESSING THE EPISODES  "
function utilityFunctionForMakingSpace(section){
  for(var i = 0; i < 5; i++)
  if(i===2 && section === "  ACCESSING DIFFERENT PARTS OF THE OBJECTS             "){
    console.log(section)
  }else if(i===2 && section === "  ACCESSING THE EPISODES  " ){
    console.log("  ACCESSING THE EPISODES  ");
  }else if(i===2 && section === "  JSON EXAMPLE       "){
    console.log(section);
  }else{
    console.log("           ");
  }
}

//Our netflix object

var netflixShow = {
  id          : 1,
  name        : "Happiness Prevails in Paul's World!",
  description : "This show is the happiest show in history.",
  seasonInfo  : {
    seasonNumber : 1,
    overview     : "In this season the main character is happy.",
    printDetails : function(){
     console.log(this.overview);
    },
  episodes: [
    { episodeNumber: 1, episodeName: "Happy Stuff"},
    { episodeNumber: 2, episodeName: "The Real Happy Story"},
    { episodeNumber: 3, episodeName: "Even happier than before."},
    { episodeNumber: 4, episodeName: "Wow, so cool."},
    { episodeNumber: 5, episodeName: "A day off."},
    { episodeNumber: 6, episodeName: "Great."},
    { episodeNumber: 7, episodeName: "Happiness is here to stay."},
    { episodeNumber: 8, episodeName: "A dream achieved."},
    { episodeNumber: 9, episodeName: "It's so great."},
  { episodeNumber: 10, episodeName: "unbounded joy."}
  ]
  }
};

//Accessing parts of the object

section = "  ACCESSING DIFFERENT PARTS OF THE OBJECTS             ";
utilityFunctionForMakingSpace();
console.log("1: " + netflixShow.id);
console.log("2: " + netflixShow.name);
console.log("3: " + netflixShow.description);
console.log("4: " + netflixShow.seasonInfo.seasonNumber);
console.log("5: " + netflixShow.seasonInfo.overview);
console.log("6: " + netflixShow.seasonInfo.episodes[0].episodeNumber);
console.log("7: " + "Episode: " + netflixShow.seasonInfo.episodes[0].episodeNumber + " " +  netflixShow.seasonInfo.episodes[0].episodeName);

netflixShow.seasonInfo.printDetails();

section = "  ACCESSING THE EPISODES  "
utilityFunctionForMakingSpace();
//One way to do it. 
for (var info in netflixShow.seasonInfo.episodes){
  console.log(netflixShow.seasonInfo.episodes[info].episodeNumber);
}

makeTwoLinesOfSpace();

console.log("Printing the episode numbers and names.");
for (var info in netflixShow.seasonInfo.episodes){
    console.log(netflixShow.seasonInfo.episodes[info].episodeNumber + " " + netflixShow.seasonInfo.episodes[info].episodeName);
}

makeTwoLinesOfSpace();

console.log("Ryan's Method - Pretty cool");
for (info in netflixShow.seasonInfo.episodes){
  console.log((parseInt(info) + 1) + " - " + netflixShow.seasonInfo.episodes[info].episodeName);
}

section = "  JSON EXAMPLE       "
utilityFunctionForMakingSpace();

//This is more how JSON is going to look. A bunch of strings.
var movie = {
        details:{
        "the_shining"   :[{"full_name":"The Shining"},{"director":"Stanley Kubrick"},{"year":"1980?"}],
        "pulp_fiction"  :[{"full_name":"Pulp Fiction"},{"director":"Quentin Tarantino"},{"year":"1994"}],
        "the_godfather" :[{"full_name":"The Godfather"},{"director":"Martin Scorcese"},{"year":"1976"}]
        }
    };

//Notice the difference between a console.log & a stringify 
console.log(movie.details);
JSON.stringify(movie.details);




//Practice with Object Literals

//Bronze Challenge:
  //Create an object called fishersYelpRestaurants object literal with the following properties
  //create a directoryIdByZip property and set it to a zip code int.
  //create a name property and give it a value of "Local Yelp Directory"
  //a description that has a value of "This is a directory of restaurants in Fishers"
  //a restaurantInfo property that is an object inside of the fishersYelpRestaurants object
  //inside the restaurantInfo object, you should have a restaurantsByRating array
  //the array should have another object with three properties rating, restaurantName, and topDish
  //Assign unique values to each of these.  

//Silver Challenge
  //Write a series of console.log statements that acess different parts of the fishersYelpRestaurants object
  //Write about 5-7 different things to the console
  
//Gold Challenge
  //Write a couple loops that loop different properties in the  restaurantsByRating array.
  
    //1 - Paul's Thai Buffet - Paul's Thai 
    //2 - Paul's Real Tacos - Carnitas
    //3 - Paul's Pizza Palace - Stuffed
    //4 - Paul's Indian - Paneer Paulak
  
  
var fishersYelpRestaurants = {
  directoryIdByZip     : 46032,
  name               : "Local Yelp Directory",
  description        : "This is a directory of restaurants in Fishers.",
    restaurantInfo   : {
      restaurantsByRating: [
        { rating: 1, restaurantName: "Paul's Thai Buffet", topDish: "Paul Thai"},
        { rating: 2, restaurantName: "Paul's Real Tacos", topDish: "Carnitas"},
        { rating: 3, restaurantName: "Paul's Pizza Palace", topDish: "Stuffed"},
        { rating: 4, restaurantName: "Paul's Indian", topDish: "Paneer Paulak"}
      ]
     }
};

console.log(fishersYelpRestaurants);
console.log(fishersYelpRestaurants.directoryIdByZip);
console.log(fishersYelpRestaurants.restaurantName);
console.log(fishersYelpRestaurants.description);
console.log(fishersYelpRestaurants.restaurantInfo.restaurantsByRating[0].restaurantName);

for (var restaurant in fishersYelpRestaurants.restaurantInfo.restaurantsByRating){
  console.log(fishersYelpRestaurants.restaurantInfo.restaurantsByRating[restaurant].restaurantName);
}

for (var restaurant in fishersYelpRestaurants.restaurantInfo.restaurantsByRating){
  console.log(fishersYelpRestaurants.restaurantInfo.restaurantsByRating[restaurant].rating + " - " + fishersYelpRestaurants.restaurantInfo.restaurantsByRating[restaurant].restaurantName + " - " + fishersYelpRestaurants.restaurantInfo.restaurantsByRating[restaurant].topDish);
}

