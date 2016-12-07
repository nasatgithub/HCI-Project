(function(){
    angular
        .module("WebAppMaker")
        .controller("QuestionAnswerController", QuestionAnswerController);


    function QuestionAnswerController($routeParams, QnaService) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.uName = $routeParams.uName;
        vm.qId = $routeParams.qId;
        vm.submitAnswer = submitAnswer;

        function init() {
            alert("");
            vm.question = QnaService.findQuestionById(vm.qId);
            if(!vm.question)
                return;

            vm.answers = QnaService
                .findAnswersForQuestion(vm.qId);
        }

        init();
        
        function submitAnswer() {


            var ans = {
                "_id": (new Date()).getTime() + "",
                "text" : vm.answer,
                "answeredBy": vm.uName,
                "qId" : vm.qId,
                "helpful": 0
            }

            console.log(ans);

            QnaService
                .submitAnswer(ans);

            init();
        }



    }
})();