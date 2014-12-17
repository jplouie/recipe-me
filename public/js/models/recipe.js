App.RecipeAdapter = DS.RESTAdapter.extend({
  host: 'https://api.yummly.com/v1',
  headers: {
    'X-Yummly-App-ID': '',
    'X-Yummly-App-Key': ''
  }
});