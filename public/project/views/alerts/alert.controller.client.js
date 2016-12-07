
(function() {
    angular
        .module("WebAppMaker")
        .controller("AlertsController", AlertsController);

    function AlertsController($routeParams) {
        var vm = this;
        vm.uName = $routeParams.uName;
    }
})();
