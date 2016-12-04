(function(){
    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController);

    function LoginController($location, UserService) {
        var vm = this;

        vm.login = function(username, password) {
            UserService
                .login(username, password)
                .then(function(response){
                        console.log(response);
                        var user = response.data;
                        if(user.username) {
                            $location.url("/home/"+user.username);
                        } else {
                            vm.error = "User not found";
                            alert("user not found");
                        }
                    },
                    function (error) {
                        console.log(error.data.msg);
                        vm.error = error.data.msg;
                    });
        }
    }
})();