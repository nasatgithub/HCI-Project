(function(){
    angular
        .module("WebAppMaker")
        .controller("UserPageController", UserPageController);

    function UserPageController($location, $routeParams, UserService, $rootScope) {
        var vm = this;
        vm.updateUser = updateUser;
        vm.unregister = unregister;
        vm.logout = logout;

        var username = $routeParams.uName;
        vm.uName = username;
        function init() {
            UserService
                .findUserByUsername(username)
                .then(function(response){
                    vm.user = response.data;
                });
        }
        
        init();

        function logout() {
            UserService
                .logout()
                .then(
                    function(response){
                        $location.url("/login");
                    },
                    function() {
                        $location.url("/login");
                    }
                )
        }

        function unregister() {
            UserService
                .deleteUser(id)
                .then(
                    function(){
                        $location.url("/login");
                    },
                    function() {
                        vm.error = "Unable to remove user"
                    }
                );
        }

        function updateUser(newUser) {
            UserService
                .updateUser(id, newUser)
                .then(
                    function(response) {
                        vm.success = "Updated successfully";
                    },
                    function(error) {
                        vm.error = "Unable to update user"
                    }
                );
        }
    }

})();