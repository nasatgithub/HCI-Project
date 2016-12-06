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
        vm.profile.uname = $routeParams.uName;
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
            alert("Next Page is :"+pageNo);
            vm.currentPage = pageNo;
        }

        function back(pageNo){
            alert("Previous Page is :"+pageNo);
            vm.currentPage = pageNo;
        }
    }


})();