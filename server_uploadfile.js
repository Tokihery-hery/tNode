const express = require('express')
const multer = require('multer')
const port = process.env.port | 8080
const ejs = require('ejs')
const path = require('path')
//init app
const app = express()
//template ejs
app.set('view engine', 'ejs')
//set access public path
app.use(express.static('./public'))

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
        return cb('Error : images onlys')
    }
}
//route page upload 
app.get('/', (req, res)=>{
    res.render('uploadfileImage')
})
//route post to upload
app.post('/upload', (req, res)=>{
    upload(req, res, (err)=>{
        if(err){
            res.render('uploadfileImage', {
                msg:err
            })
        }else{
           if(req.file == undefined){
            res.render('uploadfileImage', {
                msg:'Error: no file selected'
            })
           }else{
            res.render('uploadfileImage', {
                msg:'file selected uploaded',
                src:`data/${req.file.filename}`
            })
           }
        }
    })
})
app.listen(port, ()=>{
    console.log(`server listen in port ${port}`);
})