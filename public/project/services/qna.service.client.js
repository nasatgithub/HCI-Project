/**
 * Created by nasir on 11/29/16.
 */
(function(){
    angular
        .module("WebAppMaker")
        .factory("QnaService", QnaService);

    var questions = [
        { "_id": "123", "text": "What is your name?","tags": "Name","postedBy": "Me", "noOfAnswers":3},
        { "_id": "111", "text": "How are you?","tags": "Well","postedBy": "You", "noOfAnswers":6}
    ];

    function QnaService($http) {
        var api = {
            createWebsite: createWebsite,
            findWebsitesForUserId: findWebsitesForUserId,
            findWebsiteById: findWebsiteById,
            deleteWebsite: deleteWebsite,
            findAllQuestions: findAllQuestions
        };
        return api;

        function findAllQuestions() {
            return questions;
        }
        

        function findWebsiteById(websiteId) {
            return $http.get("/api/website/"+websiteId);
        }

        function deleteWebsite(websiteId) {
            for(var i in websites) {
                if(websites[i]._id === websiteId) {
                    websites.splice(i, 1);
                    return true;
                }
            }
            return false;
        }

        function createWebsite(userId, name, desc) {
            var website = {
                name: name,
                description: desc
            };
            return $http.post("/api/user/"+userId+"/website", website);
            // var newWebsite = {
            //     _id: (new Date()).getTime()+"",
            //     name: name,
            //     description: desc,
            //     developerId: developerId
            // };
            // websites.push(newWebsite);
            // return newWebsite;
        }

        function findWebsitesForUserId(userId) {
            return $http.get("/api/user/"+userId+"/website");
            // var resultSet = [];
            // for(var i in websites) {
            //     if(websites[i].developerId === userId) {
            //         resultSet.push(websites[i]);
            //     }
            // }
            // return resultSet;
        }
    }
})();