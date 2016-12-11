(function(){
    angular
        .module("WebAppMaker")
        .config(Config);

    function Config($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "views/guest/guestPage.html"
            })
            .when("/home/:uName", {
                templateUrl: "views/user/userPage.html",
                controller: "UserPageController",
                controllerAs: "model"
            })
            .when("/home/:uName/alerts", {
                templateUrl: "views/alerts/userAlert.view.client.html",
                controller: "AlertsController",
                controllerAs: "model"
            })

            .when("/qna/:uName", {
                templateUrl: "views/qna/questions-list.view.client.html",
                controller: "QuestionListController",
                controllerAs: "model"
            })
            .when("/qna/:uName/:qId/answer", {
                templateUrl: "views/qna/question-answer.view.client.html",
                controller: "QuestionAnswerController",
                controllerAs: "model"
            })
            .when("/home/:uName/houses", {
                templateUrl: "views/houses/houses.view.client.html",
                controller: "HousesListController",
                controllerAs: "model"
            })
            .when("/home/:uName/houseDetails/:hId", {
                templateUrl: "views/houses/houseDetail.view.client.html",
                controller: "HouseDetailController",
                controllerAs: "model"
            })
            .when("/qna/:uName/chat/:chatType", {
                templateUrl: "views/angular-chatbox/chat.view.client.html",
                controller: "ChatController",
                controllerAs: "model"
            })
            .when("/flickr", {
                templateUrl: "views/widget/widget-flickr-search.view.client.html",
                controller: "FlickrImageSearchController",
                controllerAs: "model"
            })
            .when("/login", {
                templateUrl: "views/user/login.view.client.html",
                controller: "LoginController",
                controllerAs: "model"
            })
            .when("/register", {
                templateUrl: "views/user/register.view.client.html",
                controller: "RegisterController",
                controllerAs: "model"
            })
            .when("/profile/:uName", {
                templateUrl: "views/user/profile.view.client.html",
                controller: "ProfileController",
                controllerAs: "model"
            })
            .when("/profileSummary/:uName", {
                templateUrl: "views/user/profileSummary.view.client.html",
                controller: "ProfileSummaryController",
                controllerAs: "model"
            })
            .when("/user/:userId/website", {
                templateUrl: "views/website/website-list.view.client.html",
                controller: "WebsiteListController",
                controllerAs: "model"
            })
            .when("/user/:userId/website/new", {
                templateUrl: "views/website/website-new.view.client.html",
                controller: "NewWebsiteController",
                controllerAs: "model"
            })
            .when("/user/:userId/website/:websiteId", {
                templateUrl: "views/website/website-edit.view.client.html",
                controller: "EditWebsiteController",
                controllerAs: "model"
            })
            .when("/user/:uid/website/:wid/page/:pid/widget", {
                templateUrl: "views/widget/widget-list.view.client.html",
                controller: "WidgetListController",
                controllerAs: "model"
            })
            .when("/user/:uid/website/:wid/page/:pid/widget/:widgetId", {
                templateUrl: "views/widget/widget-edit.view.client.html",
                controller: "WidgetEditController",
                controllerAs: "model"
            })
            // pages
            .when("/user/:userId/website/:websiteId/page", {
                templateUrl: "views/page/page-list.view.client.html",
                controller: "PageListController",
                controllerAs: "model"
            })
            .otherwise({
                redirectTo: "/login"
            });


        function checkLoggedIn(UserService, $location, $q, $rootScope) {

            var deferred = $q.defer();

            UserService
                .loggedIn()
                .then(
                    function(response) {
                        var user = response.data;
                        console.log(user);
                        if(user == '0') {
                            $rootScope.currentUser = null;
                            deferred.reject();
                            $location.url("/login");
                        } else {
                            $rootScope.currentUser = user;
                            deferred.resolve();
                        }
                    },
                    function(err) {
                        $location.url("/login");
                    }
                );

            return deferred.promise;
        }
    }
})();