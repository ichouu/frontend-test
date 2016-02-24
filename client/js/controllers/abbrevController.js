myApp.controller('abbrevController', function($scope, abbrevFactory, $routeParams){
  $scope.result = [];
  var id = $routeParams.abbrev
  console.log(id);
  var state = function(id) {
    abbrevFactory.state(id,function(data){
      $scope.result = data;
    })
  }
  state(id);
})
