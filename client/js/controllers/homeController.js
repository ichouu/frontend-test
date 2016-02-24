myApp.controller('homeController', function($scope, homeFactory){
  $scope.result = [];
  var states = function() {
    homeFactory.states(function(data){
      $scope.result = data;
    })
  }
  states();
})
