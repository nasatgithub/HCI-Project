/**
 * Created by sruth on 12/4/2016.
 */
(function(){
    angular
        .module("WebAppMaker")
        .controller("HousesListController", HousesListController);

    function HousesListController($routeParams) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.housesList=housesList;
        function housesList(){
            console.log(vm.room);
            return 1;
        }

    }
})();

