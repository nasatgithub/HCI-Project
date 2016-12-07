/**
 * Created by Bharath on 05-12-2016.
 */

(function(){
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);


    function ProfileController($routeParams, UserService ) {
        var vm = this;
        //var uName = $routeParams.uName;
        vm.profile = {};
        vm.profile.uName = $routeParams.uName;
        vm.uName = $routeParams.uName;
        vm.addProfile=addProfile;

        vm.currentPage=1;
        vm.next = next;
        vm.back = back;


        function init() {
           // vm.profile = UserService.findProfileDetails(uName);
        }

        init();


        function addProfile() {
            UserService.addProfile(vm.profile);
        }

        function next(pageNo){
            vm.currentPage = pageNo;
        }

        function back(pageNo){
            vm.currentPage = pageNo;
        }
    }


})();