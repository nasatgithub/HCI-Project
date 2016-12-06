/**
 * Created by Bharath on 06-12-2016.
 */
(function(){
    angular
        .module("WebAppMaker")
        .controller("ProfileSummaryController", ProfileSummaryController);


    function ProfileSummaryController($routeParams, UserService ) {

        var vm=this;
        var uName = $routeParams.uName;


        function findProfileDetails() {
            vm.profile = UserService.findProfileDetails(uName);
            console.log(vm.profile);
        }

        findProfileDetails();
    }

})();