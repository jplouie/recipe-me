app.factory('Recipe', function(Restangular, YummlyRestangular, $rootScope){
  var api = Restangular.one('api').one('secrets');
  api.get().then(function(data){
    $rootScope.keys = data;
  });
  var search = YummlyRestangular.all('api');

  return {
    api: api.get(),
    search: function(query){
      return search.customGET('recipes', {q: query}, {
        'X-Yummly-App-ID': $rootScope.keys.appId,
        'X-Yummly-App-Key': $rootScope.keys.appKey
      });
    },
    get: function(query){
      
    }
  };
});