const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");


const storageUSer = multer.diskStorage({
    destination:(req, file, cb)=> {
        cb(null, path.join(__dirname, "/upload"))
    },
    // konfigurasi penamaan file yang unik
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random()*1E9) + path.extname(file.originalname)
      cb( null, file.fieldname + '-' + uniqueSuffix);
    }
  });

  router.post("/upload",
       multer({storage: storageUSer}).single("foto"), 
       (req, res, next) => {
    const file = req.file.path;

  })

router.use("/upload", express.static(path.join(__dirname + "upload")))
module.exports = router;
