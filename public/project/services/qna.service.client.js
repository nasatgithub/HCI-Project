/**
 * Created by nasir on 11/29/16.
 */
(function(){
    angular
        .module("WebAppMaker")
        .factory("QnaService", QnaService);

    var questions = [
        { "_id": "123",
            "text": "Do I really need to use an Agent to buy a house? ",
            "tags": "agent, buy",
            "postedBy": "Rock",
            "noOfAnswers":2},

        { "_id": "111",
            "text": "How do I know if I am getting a good deal on a mortgage?",
            "tags": "Mortgage",
            "postedBy": "Peter",
            "noOfAnswers":1}
    ];

    var answers = [
        { "_id" : "700",
            "text" : "No. Should you use an Agent to buy a house? Probably, for two reasons. First, in virtually all situations, the buyer does not pay a commission, so the services of an Agent working for you are paid for by the seller. Second, without an Agent, you may be missing valuable representation of your interests. ",
            "answeredBy": "bharath",
            "qId" : "123",
            "helpful": 5
        },
        { "_id" : "701",
            "text" : "Yes, may be",
            "answeredBy": "sruthi",
            "qId" : "123",
            "helpful": 10
        },
        { "_id" : "702",
            "text" : "In a word: Compare. There is a good deal of variation in the mortgage market, not only from week to week, but from lender to lender. Many newspapers list current mortgage rates for your local area in their Real Estate sections, often on Saturday or Sunday. Check them. We have also made arrangements with where you can submit a simple (and secure) application online. For more information, spend some time and visit ",
            "answeredBy": "ram",
            "qId" : "111",
            "helpful": 2
        }
    ]



    function QnaService($http) {
        var api = {
            createWebsite: createWebsite,
            findWebsitesForUserId: findWebsitesForUserId,
            findWebsiteById: findWebsiteById,
            deleteWebsite: deleteWebsite,
            findAllQuestions: findAllQuestions,
            findQuestionById: findQuestionById,
            addQuestion: addQuestionToArr,
            findAnswersForQuestion: findAnswersForQuestion,
            submitAnswer: submitAnswer
        };
        return api;

        function findAllQuestions() {
            return questions;
        }

        function addQuestionToArr(questionText, uName, tags) {
            newQ = {"_id":(new Date()).getTime() + "", "text": questionText,"tags": tags,"postedBy": uName, "noOfAnswers":0};
            questions.push(newQ);
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

        function findQuestionById(qId) {
            for(var i in questions) {
                if(questions[i]._id === qId) {
                   return questions[i];
                }
            }
            return false;
        }

        function  findAnswersForQuestion(qId) {
            var allAnswers = [];
            for(var i in answers) {
                if(answers[i].qId === qId) {
                    allAnswers.push(answers[i]);
                }
            }
            return allAnswers;
        }
        
        function submitAnswer(ans) {
            answers.push(ans);
            alert(answers);
        }
    }
})();