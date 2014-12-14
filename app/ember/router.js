App.router.reopen({
  rootURL: '/'
});

App.router.map(function(){
  this.resource('recipes');
});