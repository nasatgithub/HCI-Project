(function(){
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService);


    var profiles = [
    ];




    function UserService($http) {
        var api = {
            createUser: createUser,
            register: register,
            login: login,
            logout: logout,
            loggedIn: loggedIn,
            findUserByUsernameAndPassword: findUserByUsernameAndPassword,
            findUserById: findUserById,
            updateUser: updateUser,
            deleteUser: deleteUser,
            findUserByUsername: findUserByUsername,
            findProfileDetails: findProfileDetails,
            addProfile:addProfileToArr
        };
        return api;

        function loggedIn() {
            return $http.get("/api/loggedIn");
        }

        function logout() {
            return $http.post("/api/logout");
        }

        function login(username, password) {
            var user = {
                username: username,
                password: password
            };
            return $http.post("/api/login", user);
        }

        function register(newUser) {
            return $http.post("/api/register", newUser);
        }

        function createUser(username, password) {
            var user = {
                username: username,
                password: password
            };
            return $http.post("/api/user", user);
        }

        function deleteUser(userId) {
            var url = "/api/user/" + userId;
            return $http.delete(url);
        }

        function updateUser(id, newUser) {
            var url = "/api/user/" + id;
            return $http.put(url, newUser);
        }

        function findUserById(id) {
            var url = "/api/user/" + id;
            return $http.get(url);
        }

        function findUserByUsernameAndPassword(username, password) {
            var url = "/api/user?username="+username+"&password="+password;
            return $http.get(url);
        }

        function findUserByUsername(username) {
            var url = "/api/user?username="+username;
            return $http.get(url);
        }
        function findProfileDetails() {
            return profile;
        }

        function addProfileToArr(profile) {
            newProfile = {"uName": profile.uName,
                "age":profile.age,
                "annualIncome":profile.annualIncome,
                "savings":profile.savings,
                "creditScore":profile.creditScore,
                "repaymentYear":profile.repaymentYear,
                "repaymentMonth":profile.repaymentMonth,
                "nonEarningCount":profile.nonEarningCount,
                "companyName":profile.companyName,
                "companyStartDay":profile.companyStartDay,
                "companyAnnualIncome":profile.companyAnnualIncome};
            profiles.push(newProfile);
            console.log(profiles);
        }
    }
})();