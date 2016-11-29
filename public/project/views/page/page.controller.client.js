(function(){
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController);

    function PageListController($location, $routeParams, PageService) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.websiteId = $routeParams.websiteId;

        vm.createNewPage = createNewPage;

        function init() {
            PageService
                .findPagesForWebsite(vm.websiteId)
                .then(
                    function(response) {
                        vm.pages = response.data;
                    }
                );
        }
        init();

        function createNewPage() {
            var page = {
                name: "New Page " + (new Date()).getTime(),
                title: "New Page " + (new Date()).getTime(),
            };
            PageService
                .createPage(vm.websiteId, page)
                .then(
                    function(response) {
                        vm.pages = response.data;
                    }
                )
        }
    }
})();