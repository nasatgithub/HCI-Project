/**
 * Created by nasir on 12/2/16.
 */
(function(){
    angular
        .module("WebAppMaker")
        .controller("ChatController", ChatController);

    var urlBase = "https://api.api.ai/api/query?v=20150910&query=TEXT&lang=en&sessionId=f2386a58-9db9-45e0-a82c-6b75d1db71bc&timezone=2016-12-03T15:49:46-0500";
    function ChatController($routeParams, Messages, $http) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.chatType = $routeParams.chatType;
        // - - - - - - - - - - - - - - - - - -
        // Message Inbox
        // This array will hold the messages
        // ordered by receipt.
        // - - - - - - - - - - - - - - - - - -
        vm.messages = [];

        if(vm.chatType == 'group') {
            vm.welcome = "Group Chat Room";
            // - - - - - - - - - - - - - - - - - -
            // Receive Messages
            // Push to Message Inbox.
            // - - - - - - - - - - - - - - - - - -
            Messages.receive(function (message) {
                vm.messages.push(message);
                autoScroll();
            });


            // - - - - - - - - - - - - - - - - - -
            // Send Message
            // This is a controller method used
            // when a user action occurs.
            // Also we expect a model reference
            // ng-model="textbox".
            // - - - - - - - - - - - - - - - - - -

            vm.send = function () {
                Messages.user({name:$routeParams.uid});
                Messages.send({data: vm.textbox});
                autoScroll();
            }
        }

        else if(vm.chatType == 'assistant') {
            vm.welcome = "Chat With Assistant";
            vm.send = function () {
                var text = vm.textbox;
                if(text ==null || text.trim()== "")
                    return;

                vm.status = "sending"
                vm.messages.push({data:vm.textbox, self:true, user:{name:$routeParams.uid}});

                var url = urlBase.replace("TEXT", vm.textbox);
                $http
                    .get(url,
                        {headers: {'Authorization': 'Bearer 06a396e8751e4b47a640a97daf1c93cf'}})
                    .then(function(response) {

                        console.log("Speech"+response.data.result.fulfillment.speech);
                        vm.messages.push({data:response.data.result.fulfillment.speech, self:false, user:{name:"home assistant"}});
                        vm.status = "sent";
                        autoScroll();
                    },function(error) {
                        console.log("error!!");
                    })
            }
        }


        function autoScroll() {
            $(".chat-messages").scrollTop($(".chat-messages")[0].scrollHeight);
        }

    }
})();