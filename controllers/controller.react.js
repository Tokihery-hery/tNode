const express = require('express')

const router = express.Router()

let { postUser } = require('../models/model.react')

let ObjectID = require('mongoose').Types.ObjectId
router.get('/', (req, res) => {
    postUser.find((err, docs) => {
        !err ? res.send(docs) : console.log("erro of the", JSON.stringify(err, undefined, 2));
    })
})
router.get('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id)) res.sendStatus(400).send(`No data compatible with Id : ${req.params.id}`)
    postUser.find({ _id: req.params.id }, (err, docs) => {
        !err ? res.send(docs) : console.log(`No sure to find `, JSON.stringify(err, undefined, 2));
    })
})
router.post('/', (req, res) => {
    let newRecord = new postUser({
        name: req.body.name,
        mail: req.body.mail,
        password: req.body.password
    })
    newRecord.save((err, docs) => {
        !err ? res.send(docs) : console.log(`errone save this user of the `, JSON.stringify(err, undefined, 2));

    })
})
router.put('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id)) res.sendStatus(400).send(`No data compatible with Id : ${req.params.id}`)

    let updateRecord = {
        name: req.body.name,
        mail: req.body.mail,
        password: req.body.password
    }
    postUser.findByIdAndUpdate(req.params.id, { $set: updateRecord }, (err, docs) => {
        !err ? res.send(docs) : console.log(`No sure to update  `, JSON.stringify(err, undefined, 2));

    })
})
router.delete('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id)) res.sendStatus(400).send(`No data compatible with Id : ${req.params.id}`)
    postUser.findByIdAndRemove(req.params.id, (err, docs) => {
        !err ? res.send(docs) : console.log(`No sure to delete `, JSON.stringify(err, undefined, 2));
    })
})

module.exports = router 