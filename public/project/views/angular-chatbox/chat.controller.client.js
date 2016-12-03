/**
 * Created by nasir on 12/2/16.
 */
(function(){
    angular
        .module("WebAppMaker")
        .controller("ChatController", ChatController);

    function ChatController($routeParams, Messages) {
        var vm = this;
        vm.userId = $routeParams.userId;
        // - - - - - - - - - - - - - - - - - -
        // Message Inbox
        // This array will hold the messages
        // ordered by receipt.
        // - - - - - - - - - - - - - - - - - -
        vm.messages = [];

        // - - - - - - - - - - - - - - - - - -
        // Receive Messages
        // Push to Message Inbox.
        // - - - - - - - - - - - - - - - - - -
     /*   Messages.receive(function (message) {
            vm.messages.push(message);
        });*/

        // - - - - - - - - - - - - - - - - - -
        // Send Message
        // This is a controller method used
        // when a user action occurs.
        // Also we expect a model reference
        // ng-model="textbox".
        // - - - - - - - - - - - - - - - - - -

     /*   vm.send = function () {
            Messages.user({name:$routeParams.uid});
            Messages.send({data: vm.textbox});
        }*/

        vm.send = function () {
            vm.messages.push({data:vm.textbox, self:true, user:{name:$routeParams.uid}});
            vm.messages.push({data:"Hello", self:false, user:{name:"home assistant"}});
        }


    }
})();