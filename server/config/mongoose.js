// var path = require('path');
// var mongoose = require('mongoose');

// module.exports = function(app) {

//     // app.use(express.static(path.join(__dirname, './static')));

//     // Setting our Views Folder Directory
//     // app.set('views', path.join(__dirname, './views'));


//     mongoose.connect('mongodb://localhost/speechDB');

//     // create a variable that points to the models folder
//     var models_path = path.join(__dirname, './../model');
//     // read all of the files in the models_path and require (run) each of the javascript files
//     fs.readdirSync(models_path).forEach(function(file) {
//         if (file.indexOf('.js') >= 0) {
//             // require the file (this runs the model file which registers the schema)
//             require(models_path + '/' + file);
//         }
//     })
// }

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/SpeechDB', function(err) {
    console.log("HEYYYAYAYYAAY")
});

const PictureSchema = new mongoose.Schema({
    name: { type: String, required: true },
    imgurl: String,
    position: { type: Number, default: 400 }
}, { timestamps: true })


console.log("SCHEMA DONE")

module.exports = {
    Picture: mongoose.model('Picture', PictureSchema),
}