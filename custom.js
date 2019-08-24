 var app = angular.module('myApp',['ngMaterial']);
 app.controller('MyController',  function($scope){

  var humans = [
	  {
	  	name: "Dung",
	  	age: 21,
	  	gender: "male"
	  },
	  {
	  	name: "Huong",
	  	age: 21,
	  	gender: "famemale"
	  },
	  {
	  	name: "Linh",
	  	age: 21,
	  	gender: "famemale"
	  },
	  {
	  	name: "Viet",
	  	age: 21,
	  	gender: "male"
	  }
	]
  $scope.humans = humans;
  $scope.searchText = '';
 })