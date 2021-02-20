const express = require('express')
const router = express.Router()
const parseCsv = require("../controllers/controller.parseJsonFile");

router.get('/', parseCsv.parseCsv)
router.get('/avance', parseCsv.parseJsonAvance)
module.exports = router