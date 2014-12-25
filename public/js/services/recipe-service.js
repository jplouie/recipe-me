app.factory('Recipe', function(Restangular, $rootScope){
  var basePath = 'http://api.yummly.com/v1';
  var api = Restangular.one('api').one('secrets');
  api.get().then(function(data){
    $rootScope.keys = data;
    console.log(data);
  });
  return {
    keys: $rootScope.keys
  };
});