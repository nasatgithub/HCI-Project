(function () {
    angular
        .module("TodoApp", ["MyDirectives"])
        .controller("TodosController", TodoController);

    function TodoController($http) {
        var vm = this;
        vm.reorderTodos = reorderTodos;

        function init() {
            $http.get("/api/todos")
                .then(function(response){
                    vm.data = response.data;
                });
        }
        init();

        function reorderTodos(start, end) {
            console.log("TodosController");
            console.log(start);
            console.log(end);
            $http.put("/api/todos?start="+start+"&end="+end)
                .then(init);
        }
    }
})();