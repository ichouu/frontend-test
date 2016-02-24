myApp.controller('loginController', function($scope, $location, userFactory){
  var logout = function() {
    userFactory.logout();
  }
  logout();

  $scope.login = function(input) {
    console.log('trying to loging user with', input);
    userFactory.login(input, function(response){
        console.log('no error, log them in');
        $location.url('/home');
    })
  }
})
