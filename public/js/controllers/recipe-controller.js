app.controller('RecipeController', function($scope, Recipe){
  Recipe.api.get().then(function(data){
    $scope.test = data;
  });
});