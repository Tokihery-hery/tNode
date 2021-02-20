const express = require('express')
const  bodyParser = require('body-parser')
const route = express.Router()

let Controllers= require("../controllers/control_restApicrud")
route.get('/',Controllers.accuiel_page)

route.post('/list',Controllers.postedAndGetuser)

route.get('/edit/:id',Controllers.edit)

route.post('/update/:id', Controllers.updateforpost)
route.get('/update/:id', Controllers.updateforget)

route.get('/delete/:id', Controllers.delete)
route.get('/profil/:id', Controllers.profil)
route.get('/search/:id', Controllers.search)
route.get('/ajax', Controllers.apiAjax)

module.exports= route