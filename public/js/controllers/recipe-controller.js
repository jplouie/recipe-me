app.controller('RecipeController', function($scope, $location, Recipe){
  $scope.search = function(msg){
    Recipe.search(msg).then(function(data){
      $scope.results = data.matches;
      console.log(data);
    });
  };

  $scope.get = function(recipe){
    var id = recipe.id;
    $location.path('recipes/' + id);
  };
});