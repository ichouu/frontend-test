myApp.factory('userFactory', function($http){
  var user = {};
  var error = {};
  var factories = {};
  factories.logout = function(){
      user = {};
      $http.get('/logout').then(function(response){
        console.log(response);
      })
    },
    factories.login = function(input, callback){
        user = {};
        error = {};
        console.log('factory trying to log in with', input);
        $http.post('/login', input).then(function(response){
          console.log(response);
          user = response.result;
          console.log(user);
          callback(response.result);
        })
    }
  return factories;
})
