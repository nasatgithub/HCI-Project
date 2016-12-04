
module.exports = function() {
    var mongoose = require("mongoose");

    var PageSchema = require("../page/page.schema.server.js")();

    var WebsiteSchema = mongoose.Schema({
        _user: {type: mongoose.Schema.ObjectId, ref: "User"},
        name: String,
        description: String,
        dateCreated: {type: Date, default: Date.now},
        pages: [PageSchema]
    }, {collection: "project.website"});

    return WebsiteSchema;
};