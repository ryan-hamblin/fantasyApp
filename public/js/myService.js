var app = angular.module('fantasyApp');

app.factory('myService', function($http){

	var factoryReturn = {};

	var kimonoApiUrl = "https://www.kimonolabs.com/api/5j5mfsb0?apikey=3zfzqMzsUAvKEzb4IKLKl0y0Iv0qmyYD&callback=JSON_CALLBACK";

	factoryReturn.getPlayers = function() {
		return $http.jsonp(kimonoApiUrl).then(function(response){
			return response.data
		})   
	}
		return factoryReturn;
});