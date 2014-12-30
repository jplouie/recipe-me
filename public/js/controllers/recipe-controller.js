app.controller('RecipeController', function($scope, Recipe, $rootScope){
  $scope.search = function(msg){
    Recipe.search(msg).then(function(data){
      $scope.results = data.matches;
      console.log(data);
    });
  };
});