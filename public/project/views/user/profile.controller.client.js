/**
 * Created by Bharath on 05-12-2016.
 */

(function(){
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);


    function ProfileController($routeParams, UserService ) {
        var vm = this;
        vm.profile = {};
        vm.profile.uName = $routeParams.uName;
        vm.addProfile=addProfile;

        vm.currentPage=1;
        vm.next = next;
        vm.back = back;


        function init() {

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