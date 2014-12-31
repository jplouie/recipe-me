var app = angular.module('RecipeMe', ['ngRoute', 'restangular']);

app.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: '/js/templates/recipes.html',
    controller: 'RecipeController'
  })
  .when('recipes/:id', {
    templateUrl: '/js/templates/single-recipe.html',
    controller: 'SingleRecipeController'
  });
});