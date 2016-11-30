(function(){
    angular
        .module("WebAppMaker")
        .controller("QuestionListController", QuestionListController);

    function QuestionListController($routeParams, QnaService) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.addQuestion = addQuestion;

        function init() {
            vm.questions = QnaService
                .findAllQuestions();

        }

        init();


        function addQuestion() {
            QnaService.addQuestion(vm.newQuestion);
            vm.newQuestion="";
            init();
        }
    }
})();