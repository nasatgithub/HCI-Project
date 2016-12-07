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
        vm.housesList=housesList;
        vm.uName = $routeParams.uName;
        function housesList(){
            if(vm.room=="1b"){
                vm.housesDiv = 1;}
            else if (vm.room=="3b"){
                vm.housesDiv = 3;}
            else if (vm.room=="2b"){
                vm.housesDiv = 2;}
            

        }

    }
})();

