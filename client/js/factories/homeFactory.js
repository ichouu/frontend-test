myApp.factory('homeFactory', function($http){
  var factory = {};
  factory.states = function(callback)
	{
		$http.get('/states').success(function(output){ callback(output); });
	}
  return factory;
})
