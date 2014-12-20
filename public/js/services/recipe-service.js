app.factory('Recipe', function(Restangular){
  var basePath = 'http://api.yummly.com/v1';
  var api = Restangular.all('api').all('secrets');
  console.log(api.getList());
  api.getlist().then(function(data){
    console.log(data);
  });
  return {
    keys: api
  };
});