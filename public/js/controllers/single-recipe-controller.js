app.controller('SingleRecipeController', function($scope, $routeParams, Recipe){
  // GET SINGLE RECIPE BY ID IN URL
  Recipe.get($routeParams.id).then(function(data){
    console.log(data);
    $scope.name = data.name;
  });
});