(function(){
    angular
        .module("WebAppMaker")
        .factory("PageService", PageService);


    function PageService($http) {
        var api = {
            findPagesForWebsite: findPagesForWebsite,
            createPage: createPage
        };
        return api;

        function createPage(websiteId, page) {
            return $http.post("/api/website/"+websiteId+"/page", page);
        }
        function findPagesForWebsite(websiteId) {
            return $http.get("/api/website/"+websiteId+"/page");
        }
    }
})();