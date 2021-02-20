const express = require("express")
const multer = require('multer')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const fs = require('fs')
const async = require('async')
const path = require('path')
const jwt = require('jsonwebtoken')
app.use('/assets', express.static('public'))
app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(function (req, res, next) {
    res.setHeader('Acces-Control-Allow-Origin', '*')
    res.setHeader('Acces-Control-Allow-Headers', 'Origin', 'x-Request-With', 'Content-type', 'Accept')
    res.setHeader('Acces-Control-Allow-Method', 'POST, GET, PATCH,PUT, DELETE, OPTIONS')
    next()
})
const corsOption = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}
app.use(cors(corsOption))
app.get('/', function (req, res) {
    res.render('uploadFile')
});

// stremean file 

let uploadCopy = (file) => {
    fs.stat(file, (err, stat) => {
        let sizea = stat.size
        let proc = 0
        let stream = fs.createReadStream(file)
        stream.on('data', (chunk) => {
            proc += chunk.length
            console.log("j'ai lu " + Math.round(100 * proc / sizea) + "%")
        })
        stream.on('end', () => {
            console.log('finished');

        })
    })
}

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        fs.stat('./upload', (err) => {
            if (!err) {
                console.log('create file ');
                
                fs.mkdir('./upload', function (err) {
                    if (err) {
                        console.log(err.stack)
                    } else {
                        // console.log(file);
                        console.log('got to direcoery');
                        
                        callback(null, './upload');
                    }
                })
            }else{
                console.log(err);
                
            }
        })

    },
    filename: function (req, file, callback) {
        callback(null, file.originalname + '' + Date.now());
    }
})
let ng2_upload = multer({ store: storage }).single('file')
app.post('/image', function (req, res) {
    ng2_upload(req, res, (err) => {
        // res.sendStatus(200)
        if (err) return res.sendStatus(501).json({ error: err })
        res.json({ orignalname: req.file.originalname, uploadname: req.file.filename })
        res.end()
    })

})
let fileIO = require('./fileIO')
// fileIO.fileIOs()
app.get('/video', fileIO.fileIOs)


// jsonwebtoken api gestion d'authorization
let verificationToken = (req, res, next) => {
    const accHeader = req.headers['authorization']
    if (typeof accHeader != 'undefined') {
        const accToken = accHeader.split(' ')[1]
        req.token = accToken
        next()
    } else {
        res.sendStatus(403)// forbidein
    }
}
app.get('/jwt', (req, res) => {
    res.json({
        message: "CREATE TOKEN NODE JS "
    })
})
app.post('/api/auth', verificationToken, (req, res) => {
    jwt.verify(req.token, 'secretekeyY', (err, authData) => {
        if (err) {
            res.sendStatus(403)
        } else {
            res.json({
                message: "create token successfull",
                authorization: req.headers['authorization'],
                name: "successfull",
                authorization: 'salut bruan',
                authData
            })
        }

    })
})
app.post('/api/jwt', (req, res) => {
    const user = {
        'id': 1,
        'name': 'Tokihery',
        'role': 'admin'
    }
    jwt.sign({ user: user }, 'secretekeyY', (err, token) => {
        res.json({
            token
        })
    })
})
//routes for angular file upload
let _router = require('./routes/routefileUpload')
app.use('/ng2', _router)
// app.use('/', _router)
app.listen(3000, function () {
    console.log("Working on port 3000");
})