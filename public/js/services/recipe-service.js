app.factory('Recipe', function(Restangular, $rootScope){
  var basePath = 'http://api.yummly.com/v1';
  var api = Restangular.one('api').one('secrets');

  return {
    api: api
  };
});