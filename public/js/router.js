App.Router.reopen({
  rootURL: '/'
});

App.Router.map(function(){
  this.resource('recipes');
});