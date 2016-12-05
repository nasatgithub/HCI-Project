(function () {
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, UserService) {
        var vm = this;

        vm.register = register;

        function register(newUser) {
            UserService
                .findUserByUsername(newUser.username)
                .then(function (response) {
                    var user = response.data;
                    if(user.username) {
                        return null;
                    }
                    else {
                        return  UserService.register(newUser);
                    }
                })
                .then(
                    function(response){
                        if(response) {
                            var user = response.data;
                            if(user.username === newUser.username) {
                                $location.url("/home/"+user.username);
                            }
                        }
                        else {
                            vm.error = "username already exists";
                        }
                    },
                    function(err) {
                        vm.error = "Unexpected error has occured!! Contact admin";
                    }
                );
        }
    }
})();