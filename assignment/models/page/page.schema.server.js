
module.exports = function () {
    var mongoose = require("mongoose");

    var PageSchema = mongoose.Schema({
        name: String,
        title: String
        // ,widgets: [WidgetSchema]
    });

    return PageSchema;
};