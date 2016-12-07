/**
 * Created by sruth on 12/4/2016.
 */
(function(){
    angular
        .module("WebAppMaker")
        .controller("HousesListController", HousesListController);

    function HousesListController($routeParams) {
        var vm = this;
        //vm.userId = $routeParams.userId;
        vm.housesDiv= 0;
        vm.sugDiv=0;
        vm.housesList=housesList;
        vm.uName = $routeParams.uName;
        function housesList(){
            vm.sugDiv=1;
            if(vm.room != null || vm.price == null ) {
                if (vm.room == "1b") {
                    vm.housesDiv = 1;
                }
                else if (vm.room == "3b") {
                    vm.housesDiv = 3;
                }
                else if (vm.room == "2b") {
                    vm.housesDiv = 2;
                }
            }
            if (vm.price != null || vm.room==null){
                if (vm.price == "all") {
                    vm.housesDiv = 1;
                }
                else if (vm.price == "hun") {
                    vm.housesDiv = 3;
                }
                else if (vm.price == "tho") {
                    vm.housesDiv = 2;
                }
                else if (vm.price == "mil") {
                    vm.housesDiv = 2;
                }
            }
        }

    }
})();

