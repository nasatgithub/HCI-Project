(function(){
    angular
        .module("WebAppMaker")
        .controller("QuestionListController", QuestionListController);


    function QuestionListController($routeParams, QnaService) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.addQuestion = addQuestion;
        vm.uName = $routeParams.uName;


        vm.sortType     = 'postedBy'; // set the default sort type
        vm.sortReverse  = false;  // set the default sort order
        vm.searchQ   = '';     // set the default search/filter term

        function init() {
            vm.questions = QnaService
                .findAllQuestions();
            
        }

        init();


        function addQuestion() {
            vm.tags = "none";
            QnaService.addQuestion(vm.newQuestion, vm.uName, vm.tags);
            vm.newQuestion="";

            init();
        }
    }
})();