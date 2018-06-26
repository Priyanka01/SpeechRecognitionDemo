const pictures = require('../controller/pictures.js')
module.exports = function(app) {

    // app.get('/quotes/new', function(req, res) {
    //     console.log("*************Calling routes")
    //     quotes.index(req, res);
    // })

    app.post("/create", function(req, res) {
        console.log("*************Calling routes")
        pictures.create(req, res);
    })

    app.get("/display/:name", function(req, res) {
        console.log("*************Calling display")
        pictures.display(req, res)
    })

    app.get("/displayAll", function(req, res) {
        console.log("*************Calling displayAll")
        pictures.displayAllPics(req, res)
    })
}