var app = angular.module('fantasyApp');

app.controller('myCtrl', function($scope, myService){

	$scope.test = "Fantasy Football Finder";
	myService.getPlayers().then(function(players){
		$scope.playerList = players;
	});

})