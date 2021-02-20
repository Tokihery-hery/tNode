const express =require('express')
const _router = express.Router()
const multer = require('multer')
const  bodyParser = require('body-parser')
const controllerUpload = require('../controllers/controller.uploadfile')

_router.get('/', (req, res)=>{
    res.render('uploadFile')
})

// _router.post('/uploadfile', controllerUpload.uploadFile)
_router.post('/ng2uploadfile', controllerUpload.ng2_uploadFile)

// upload file image
_router.get('/uploadimage', (req, res)=>{
    res.render('uploadfileImage')
})
_router.post('/image', controllerUpload.uploadImage)

module.exports= _router