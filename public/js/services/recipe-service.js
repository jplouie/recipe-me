app.factory('Recipe', function(Restangular){
  var basePath = 'http://api.yummly.com/v1';
  var api = Restangular.one('api').one('secrets');
  api.get().then(function(data){
    console.log(data);
  });
  return {
    keys: api
  };
});