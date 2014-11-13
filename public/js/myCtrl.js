var app = angular.module('fantasyApp');

app.controller('myCtrl', function($scope, myService){

	$scope.test = "Fantasy Football Finder";
	$scope.playerList = myService.getPlayers();

})