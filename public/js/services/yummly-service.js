app.factory('YummlyRestangular', function(Restangular){
  var basePath = 'http://api.yummly.com/v1';

  return Restangular.withConfig(function(RestangularConfigurer){
    RestangularConfigurer.setBaseUrl(basePath);
  });
});