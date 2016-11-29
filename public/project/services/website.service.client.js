(function(){
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", WebsiteService);

    var websites = [
        { "_id": "123", "name": "Facebook",    "developerId": "456" },
        { "_id": "234", "name": "Tweeter",     "developerId": "456" },
        { "_id": "456", "name": "Gizmodo",     "developerId": "456" },
        { "_id": "567", "name": "Tic Tac Toe", "developerId": "123" },
        { "_id": "678", "name": "Checkers",    "developerId": "123" },
        { "_id": "789", "name": "Chess",       "developerId": "234" }
    ];

    function WebsiteService($http) {
        var api = {
            createWebsite: createWebsite,
            findWebsitesForUserId: findWebsitesForUserId,
            findWebsiteById: findWebsiteById,
            deleteWebsite: deleteWebsite
        };
        return api;

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