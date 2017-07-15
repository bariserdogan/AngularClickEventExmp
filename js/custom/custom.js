var firstApp = angular.module("Language",[])

firstApp.controller("langController",function($scope){
	var records = [
	{name:"JAVA",like:3,dislike:1},
	{name:"C#",like:3,dislike:2},
	{name:"PYTHON",like:2,dislike:3},
	{name:"RUBY",like:3,dislike:2}
	];

	$scope.languages=records;

	$scope.likePlus = function(lang){
		lang.like+=1;
	};
	$scope.dislikePlus=function(lang){
		lang.dislike+=1;
	};

});