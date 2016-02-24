myApp.factory('guestbookFactory', function($http){
  var factory = {};
	factory.read = function (callback)
	{
		$http.get('/read').success(function(output){ callback(output); });
	}
  factory.write = function (input, callback)
  {
    console.log(input);
    $http.post('/write', input).success(function(response){
      callback(response.result);
    })
  }
	return factory;

})
