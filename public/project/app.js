// IIFE (immediately invoked function expression
(function(){
    angular
        .module("WebAppMaker", ["chat","ngRoute"])
        .constant( 'config', {
            "pubnub": {
                "publish-key"   : "pub-c-21d8d640-14fb-4c3c-b3d9-4fe19615d67f",
                "subscribe-key" : "sub-c-08be7604-b8ff-11e6-b38f-02ee2ddab7fe"
            }
        });
})();