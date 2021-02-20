const express = require('express')
const  bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const path = require('path')
let sesssion = require("express-session")
let port = process.env.PORT || 80
require('./config/db.react')
// charge le middleware

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/', express.static(path.join(__dirname, 'angular')));
app.use('/assets', express.static('public')) 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
//   next();
// });
const corsOption = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

app.use(sesssion({
  secret: "blansdueufhf", 
  resave : false,
  saveUninitialized : true,
 cookie:{ secure: false}
}))
app.use(cors(corsOption))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
    
// import router file
// route for emora project
const routerEmora = require('./routes/routes.emora')

// router for parse csv
const routeparseJson = require('./routes/router.parseJsonFile')

// router first crud mysql
const routeCrudmysql =require("./routes/routesApicrud")
// router uploadfile
const routefileUpload = require('./routes/routefileUpload')
//route react crud
const _router  = require('./controllers/controller.react')

// set template ejs
app.set('view engine', 'ejs')

// router 
app.use('/', routerEmora) // for emora api
app.use('/parsecsv', routeparseJson) // for parse csv
app.use('/crudmysql', routeCrudmysql) // for crud mysql
app.use('/upload', routefileUpload) // for uploadfile 
app.use('/post_user', _router) //for react crud
app.listen(port, (err) => {
  if(err) throw err
    console.log(`Listen in http://localhost:${port}`);
})

