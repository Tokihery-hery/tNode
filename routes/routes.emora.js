const express = require('express')
const  bodyParser = require('body-parser')
const extractFile = require('../config/middleware');
const router = express.Router()

const vendeurs = require('../controllers/controller.emora')

router.get("/emora", (req,res)=>{
    res.send('Bonjour, Backend for emora, /all for seeing the list in json data')
})
router.post("/create", vendeurs.create)
router.get('/all', vendeurs.getAll)
router.delete('/delete/:id', vendeurs.deleteOnly)
router.get('/auth/name/:name', vendeurs.authUserName)
router.get('/auth/mail/:mail', vendeurs.authUserMail)
router.get('/search/:search', vendeurs.searchVendeur)
router.get('/getOne/:id', vendeurs.getOneVendeur)
router.get('/pageVendeur/:name/:id', vendeurs.getOneVendeur)
router.put('/update/:id', vendeurs.updateUser)
// router.get('', vendeurs.getAllImg);
    
router.get('/image/:id', vendeurs.getOneImg);

router.post('/image', extractFile, vendeurs.createImg);

// router.post('image/:id', extractFile, vendeurs.updateImg);

// router.post('image/:id', vendeurs.deleteImg);
// route.post('/update/:id', controller.updateUser)
// route.post('/delete/:id', controller.deleteUser)

module.exports= router