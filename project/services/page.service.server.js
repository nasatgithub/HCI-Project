module.exports = function(app, models) {

    var websiteModel = models.websiteModel;

    app.get("/api/website/:websiteId/page", findPagesForWebsite);
    app.post("/api/website/:websiteId/page", createPage);

    function findPagesForWebsite(req, res){
        var websiteId = req.params.websiteId;
        websiteModel
            .findWebsiteById(websiteId)
            .then(
                function(website) {
                    res.json(website.pages);
                }
            );
    }
    
    function createPage(req, res){
        var websiteId = req.params.websiteId;
        var page = req.body;
        websiteModel
            .findWebsiteById(websiteId)
            .then(
                function(website) {
                    website.pages.push(page);
                    return website
                        .save()
                }
            )
            .then(function (website) {
                res.json(website.pages);
            })
    }
};