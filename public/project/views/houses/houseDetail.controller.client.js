/**
 * Created by sruth on 12/7/2016.
 */

(function() {
    angular
        .module("WebAppMaker")
        .controller("HouseDetailController", HouseDetailController);

    function HouseDetailController($routeParams) {
        var vm = this;
        vm.uName = $routeParams.uName;
    }
})();