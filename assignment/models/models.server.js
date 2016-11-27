
module.exports = function() {

    var mongoose = require('mongoose');
    mongoose.connect('mongodb://heroku_zxlnj7ct:ka422ep0r77ohecgtehdhosfii@ds111798.mlab.com:11798/heroku_zxlnj7ct');

    var models = {
        userModel: require("./user/user.model.server")(),
        websiteModel: require("./website/website.model.server")()
        // TODO: add all the toher models: websiteModel, pageModel, widgetModel
    };
    return models;
};