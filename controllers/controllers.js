const Model = require("../models/model")

/** 
*save customer to mysql
*@param {*} req
*@param {*} res
*/

exports.create = (req, res) => {
    try {
        Model.create(req.body.name, req.body.lastname, req.body.mail, (resulta) => {
            res.send(resulta)
        })

    } catch (error) {
        res.status(500).json({
            message: "Fail",
            error: error.message
        })
    }
}
/** 
*get all customer to mysql
*@param {*} req
*@param {*} res
*/
exports.getAll = (req, res) => {
    try {
        Model.getAll((resulta) => {
            res.send(resulta)
        })
    } catch (error) {
        res.status(500).json({
            message: "Fail",
            error: error.message
        })
    }
}
/** 
*get one customer to mysql
*@param {*} req
*@param {*} res
*/
exports.getUser = (req, res) => {
    try {
        Model.selectIduser(req.params.id, (resulta) => {
            res.send(resulta)
        })
    } catch (error) {
        res.status(500).json({
            message: "Fail",
            error: error.message
        })
    }
}
/** 
*get one customer to mysql
*@param {*} req
*@param {*} res
*/
exports.updateUser = (req, res) => {
    try {
                Model.updateUserSelected(req.params.id, req.body.name, req.body.lastname, req.body.mail, (resulta) => {
                    res.send(resulta)
                })

    } catch (error) {
        res.status(500).json({
            message: "Fail",
            error: error.message
        })
    }
}

/** 
*delete one customer to mysql
*@param {*} req
*@param {*} res
*/
exports.deleteUser = (req, res) => {
    try {
                Model.deleteUser(req.params.id, (resulta) => {
                    res.send(resulta)
                })
                console.log("call delete", req.params.id);
                
    } catch (error) {
        res.status(500).json({
            message: "Fail",
            error: error.message
        })
    }
}