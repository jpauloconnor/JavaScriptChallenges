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
    alert("You are now queueing up " + this.showName + " " + this.episodeNo);
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


//Challenges
//Bronze:  
//Create an object literal called netflixShow. It should have an id, a name, and description property.    
  //You can set the values to whatever you want(ie, name : "Sadness Prevails")
//Silver: Inside the netflixShow object, create another object called seasonInfo. Inside that season, create a season number property, an overview property,and a function that prints the overview.
//Gold: Create another object literal called episodes. This object is going to be an array with information inside of it.
// episodeNumber & episodename properties. 
/*
var netflixShow = {
  id          : 30000000,
  name        : "Happiness Prevails",
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


var address={
        details:{
        "martin":[{"full_name":"James Martin"},{"address":"Florida"},{"phone":"897657834"}],
        "luthar":[{"full_name":"Luther king"},{"address":"Boston"},{"phone":"9856568789"}],
        "jonson":[{"full_name":"Jonson vierra"},{"address":"New york"},{"phone":"98654567887"}]
        }
    }

  function printAddressDetails(){
  for (var i in address.details)
      {

          document.write('<tr><td>' + address.details[i][0]['full_name'] + '</td><td>' + address.details[i][1]['address'] + '</td><td>' + address.details[i][2]['phone'] + '</td></tr>');
      
      }
  }*/