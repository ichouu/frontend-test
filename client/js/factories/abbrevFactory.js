myApp.factory('abbrevFactory', function($http){
  var factory = {};
	factory.state = function (id, callback)
	{
		$http.get('/states/' + id).success(function(output){ callback(output); });
	}

	return factory;

})
