const Picture = require('../config/mongoose.js').Picture
    // Picture = mongoose.model('Picture')

module.exports = {
    // index: function(req, res) {
    //     console.log("***************Rendering new page")
    //     res.render('new')
    // },

    create: function(req, res) {
        console.log("In create", req.body)
        Picture.create(req.body, function(err, data) {
            if (err) {
                console.log("Error", err)
                res.json(err)
            } else {
                console.log("***************Create data")
                res.json({ message: "Record inserted" })
            }
        })
    },

    display: function(req, res) {
        console.log("####display", req.params.name)
        let pictures = Picture.find({ 'name': req.params.name }, function(err, data) {
            // console.log("display_picture", pictures)
            if (err) {
                console.log("Error", err)
                res.json(err)
            } else {
                console.log("***************One Picture", data)
                res.json(data)
            }
        })
    },

    displayAllPics: function(req, res) {
        let pictures = Picture.find({}, function(err, data) {
            // console.log("displayAllPics", pictures)
            if (err) {
                console.log("Error", err)
                res.json(err)
            } else {
                console.log("***************All Pictures")
                res.json(data)
            }
        })
    },
}