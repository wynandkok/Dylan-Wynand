'use strict';

angular.module('ToDoApp')
  .controller('MainCtrl', function ($scope, $location, todoStorage, filterFilter) {
  	var todos = $scope.todos = todoStorage.get();

  	$scope.newTodo = '';
  	$scope.editedTodo = null;

  	$scope.$watch('todos', function(newValue, oldValue) {
  		$scope.remainingCount = filterFilter(todos, { completed: false }).length;
  		$scope.completedCount = todos.length - $scope.remainingCount;
  		$scope.allChecked = !$scope.remainingCount;
  		if (newValue !== oldValue) {
  			todoStorage.put(todos);
  		}
  	}, true);

  	if ($location.path() === '') {
  		$location.path('/');
  	}

  	$scope.location = $location;

  	$scope.$watch('location.path()', function(path) {
  		$scope.statusFilter = (path === '/active') ?
  				{ completed: false } : (path === '/completed') ?
  				{ completed: true } : null;
  	});

  	$scope.addToDo = function() {
  		var newTodo = $scope.newTodo.trim();
  		console.log("Added?");
  		if(!newTodo.length) {
  			return;
  		}
  		todos.push({
  			title: newTodo,
  			completed: false
  		});
  		$scope.newTodo = '';
  	}

  	$scope.removeToDo = function(todo) {
  		todos.splice(todos.indexOf(todo), 1);
  	}

  	$scope.clearCompletedTodos = function() {
  		$scope.todos = todos = todos.filter(function(val) {
  			return !val.completed;
  		});
  	};

  	$scope.markAll = function(completed) {
  		todos.forEach(function(todo) {
  			todo.completed = completed;
  		});
  	};
  });
