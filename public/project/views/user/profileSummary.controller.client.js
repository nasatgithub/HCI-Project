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


        function findUserByUsername() {
            // vm.userProfile=UserService.findUserByUsername(uName);


            UserService
                .findUserByUsername(uName)
                .then(function (response) {
                    vm.userProfile = response.data;

                });
        }

        console.log(vm.userProfile);
        findProfileDetails();
        findUserByUsername();
    }

})();