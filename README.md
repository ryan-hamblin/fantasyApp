fantasyApp
==========
#### Fantasy App


This will be a Web Application that will allow users of the Yahoo Fantasy Football leagues to do some Data research on professional football players. It will be built primarily in AngularJS and I will be using Flex-Box in CSS to do a lot of
tweaking with the styles. On top of that I will be using a little bit of jQuery for some I will also be using Firebase for this project.
It is going to be a fun experiment!


Create API with Kimono and figure out how to load player data into firebase.

//on page load
$http("https://www.kimonolabs.com/api/5j5mfsb0?apikey=3zfzqMzsUAvKEzb4IKLKl0y0Iv0qmyYD&callback=?").then(function(response){
 $scope.allPlayers = response.data
 })   

//once someone has picked a person
$scope.chosenPlayerId = 8855 (or whatever id is for the player they picked)
$http("https://www.kimonolabs.com/api/9i7ms6p0?apikey=3zfzqMzsUAvKEzb4IKLKl0y0Iv0qmyYD&callback=?&kimpath3=" + $scope.chosenPlayerId).then(function(response){
 $scope.statsForChosenPlayer = response.data
 }) 