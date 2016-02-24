myApp.controller('guestbookController', function($scope,$location, guestbookFactory){
  $scope.result = [];
  var read = function() {
    guestbookFactory.read(function(data){
      console.log(data);
      $scope.result = data;
    })
  }
  read();

  $scope.write = function(input) {
    console.log('trying to write', input);
    guestbookFactory.write(input, function(){
      read();
    })
  }
})
