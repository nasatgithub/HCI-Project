(function() {
    angular
        .module("ExperimentsApp", ["jgaDirectives", "textAngular"])
        .controller("ExperimentsController", ExperimentsController)
        .filter('reverse', function() {
            return function(items) {
                return items.slice().reverse();
            };
        });

    function ExperimentsController($http, $scope) {
        var vm = this;
        vm.sort = sort;
        vm.createTodo = createTodo;

        function init() {
            $http.get("/api/experiments/todo").success(function(todos){
                vm.todos = todos;
            });
        }
        init();

        vm.box1 = {
            x: 50,
            y: 100
        };
        vm.box2 = {
            x: 50,
            y: 100
        };
        vm.html = "Hello";

        function sort(start, end) {
            // console.log([start, end]);
            // vm.todos.splice(end, 0, vm.todos.splice(start, 1)[0]);
            // $scope.$apply();
            $http.put("/api/experiments/todo/order?start="+start+"&?end="+end).success(function(todos){
                vm.todos = todos;
            })
        }

        function createTodo(todo) {
            $http.post("/api/experiments/todo", todo).success(function(todos){
                vm.todos = todos;
            });
        }
    }
})();