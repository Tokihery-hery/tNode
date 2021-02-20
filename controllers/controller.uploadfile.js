
const multer = require('multer')
const path = require('path')

// upload file image test 
//set storage engine
const storage = multer.diskStorage({
  destination:'./public/data/',
  filename:function (req, file, cb){
      cb(null, file.fieldname+ '-'+ Date.now()+path.extname(file.originalname))
  }
})
// init upload 
const upload= multer({
  storage:storage,
  limits:{fileSize:10000000},
  fileFilter:function(req, file, cb){
      checkFileType(file,cb)
  }
}).single('fileimage')
//check file type
const checkFileType =(file, cb)=>{
  //allowed extesion file image
  const fileType = /jpeg|png|webp|gif|jpg/
  //check extesion
  const extname = fileType.test(path.extname(file.originalname).toLowerCase())
  //check mimetype
  const mimetype = fileType.test(file.mimetype) 
  if(mimetype && extname){
      return cb(null, true)
  }else{
      return cb('Error : Image Only accepted to upload!!!')
  }
}
// fn to uplad images import in route
 exports.uploadImage=(req, res)=>{
  upload(req, res, (err)=>{
      if(err){
          res.json({
              msg:err
          })
      }else{
         if(req.file == undefined){
          res.json({
              msg:'Error: no file selected'
          })
         }else{
          res.json({
              msg:'file selected uploaded',
              src:`localhost/assets/data/${req.file.filename}`
          })
         }
      }
  })
}

// upload file in angualar projet
let ng2_upload = multer({storage:storage}).single('file')

exports.ng2_uploadFile = (req, res, next)=>{
  ng2_upload(req, res, (err)=>{
    // res.writeHeader(200)
    if(err) return res.sendStatus(501).json({error: err})
    // console.log(req.file);
    res.json({orignalname: req.file.originalname, uploadname: req.file.filename})
    res.end()
  })
}
