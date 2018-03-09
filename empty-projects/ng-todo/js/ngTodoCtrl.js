myApp.controller('myAppCtrl', function myAppCtrl($scope) {
	$scope.todos = [
		{ val: "Make the bed", completed: false},
		{ val: "Have a shower", completed: true},
		{ val: "Make breakfast", completed: false},
		{ val: "Brush teeth", completed: false},
		{ val: "Go to work", completed: false},
	];

	$scope.addNewTask = function() {
		$scope.todos.push({ completed: false, val: $scope.newTask });
		$scope.newTask = '';
	}

	$scope.clearCompleted = function() {
		$scope.todos = $scope.todos.filter(function(el, index) {
			return !el.completed;
		});
	};

	$scope.removeTodo = function(index) {
		this.todos.splice(index, 1);
	}

});