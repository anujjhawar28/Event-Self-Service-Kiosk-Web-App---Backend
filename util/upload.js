const multer = require("multer");
const path = require("path");
const { randomUUID } = require("make-random");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images/");
  },
  filename: async function (req, file, cb) {
    console.log("====Filename called", file);
    let guid = await randomUUID();
    guid = guid + "-" + file.originalname;
    cb(null, guid);
  },
});

const uploadSingle = multer({
  storage: storage,
  limits: {
    files: 1, // Take Maximum 5 Files at a time
    fileSize: 1024 * 1024, // Maximum Size of File is 1 MB
  },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).single("image");

const uploadMultiple = multer({
  storage: storage,
  limits: {
    files: 5, // Take Maximum 5 Files at a time
    fileSize: 1024 * 1024, // Maximum Size of File is 1 MB
  },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).array("images", [5]);
//Check file Type

function checkFileType(file, cb) {
  console.log("=======41 Called checkFileType");
  //Allow ext
  const filetypes = /jpeg|jpg|png|gif/;
  //check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  //check mime
  const mimetype = filetypes.test(file.mimetype);
  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}

module.exports = {
  uploadSingle,
  uploadMultiple,
};

/**
 * SAMPLE API FOR FILE UPLOADING
 *
 *
 * const upload = require('./util/upload');
 * app.post('/upload',(req,res,next)=>{
    upload(req, res, (err) => {
        if(err){
            res.json({msg: err})
        }else{
            if(req.file == undefined){
                res.json({msg: 'Error: No File Selected!'})
            }else{
                res.json({
                    msg: 'File Uploaded!',
                    filePath: 'uploads/' + req.file.filename
                });
            }
        }
    });
});
 */
