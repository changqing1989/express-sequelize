var express = require('express');
var router = express.Router();


var multer = require("multer");

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'tmp/my-uploads')
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now()+"-"+file.originalname)
//   }
// })

// var upload = multer({ storage: storage })



var storage = multer.memoryStorage()
var upload = multer({ storage: storage })
var fs = require('fs');


// var upload = multer(
// 	{ 
// 		dest: 'uploads/' ,
// 		filename: function (req, file, cb) {
// 		    cb(null, file.fieldname + '-' + Date.now())
// 		}
// 	}
// );

function base64_encode(file) {
	    // read binary data
	    var bitmap = fs.readFileSync(file);
	    // convert binary data to base64 encoded string
	    debugger;
	    return new Buffer(bitmap).toString('base64');
	}

router.post('/file-upload',upload.any(),/*upload.single("1.png"),*/ function(req, res, next) {

	debugger;
	console.log(req);
	
	

	// var s = base64_encode(req.files[0]);

	// var s = base64_encode('./public/images/1533891771280-1.png');

	var s = req.files[0].buffer.toString('base64');　

	// console.log(s);

	res.status(200).json();



  
});

module.exports = router;
