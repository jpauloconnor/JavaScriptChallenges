//DEMO: Friend Info
var friend = {
    firstName : "Paul",
    lastName  : "O'Connor",
    age       : 39
};

document.getElementById("demo").innerHTML = friend.firstName + " " + friend.lastName + friend.age;
document.getElementById("name").innerHTML = friend.firstName;
document.getElementById("age").innerHTML = friend.age;

//Demo: Looping over an object.


var netflix = {
  showName    : "",
  episodeNo   : 1,
  episodeDesc : "",
  //Silver Challenge
  watchNow    : function(){
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
/*
var netflixShow = {
  id          : 30000000,
  name        : "Happiness Prevails in Paul's World!",
  description : "This show is the happiest show in history.",
  seasonInfo  : {
    seasonNumber : 1,
    overview     : "In this season the main character doesn't die.",
    printDetails : function(){
      document.write(overview);
    }
  },
  episodes: [
    { episodeNumber: 1, episodeName: "Happy Stuff"},
    { episodeNumber: 2, episodeName: "The Real Happy Story"},
    { episodeNumber: 3, episodeName: "Even happier than before."}
  ]
};

//Accessing the object

  for (info in netflixShow.seasonInfo){
    document.write("<br/>" + info + "==>" + netflixShow.seasonInfo[info])
  }
*/
//Playing around with this still.
var movie={
        details:{
        "the_shining"   :[{"full_name":"The Shining"},{"director":"Stanley Kubrick"},{"year":"1980?"}],
        "pulp_fiction"  :[{"full_name":"Pulp Fiction"},{"director":"Quentin Tarantino"},{"year":"1994"}],
        "the_godfather" :[{"full_name":"The Godfather"},{"director":"Martin Scorcese"},{"year":"1976"}]
        }
    };

function printMovieDetails(){

for (var i in movie.details)
    var container = ""
    {
        var movieTable = '<tr><td>' + movie.details[i][0]['full_name'] + '</td><td>' + movie.details[i][1]['director'] + '</td><td>' + movie.details[i][2]['year'] + '</td></tr>';
        container += movieTable;
    }
//    document.getElementById("tablePrint").innerHTML = movieTable;
}
