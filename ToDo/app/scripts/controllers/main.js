'use strict';

angular.module('ToDoApp')
  .controller('MainCtrl', function ($scope, $location, todoStorage) {
  	var todos = $scope.todos = todoStorage.get();

  	$scope.newTodo = '';
  	$scope.editedTodo = null;

  	$scope.$watch('todos', function(newValue, oldValue) {
  		if (newValue !== oldValue) {
  			todoStorage.put(todos);
  		}
  	}, true);

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

  	$scope.markAll = function(completed) {
  		todos.foreach(function(todo) {
  			todo.completed = completed;
  		});
  	};


  });
