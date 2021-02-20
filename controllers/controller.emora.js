const Model= require("../models/model.emora")
/** 
*save customer to mysql
*@param {*} req
*@param {*} res
*/

exports.create = (req, res) => {
    let vendeur = {}
    try {
        ///builiding vendeur object from uploading request bod
        vendeur = {
            name: req.body.name,
            mail:req.body.mail,
            password:req.body.password,
            description:req.body.description,
            siege:req.body.siege,
            contact:req.body.contact,
            pdp:req.body.pdp,
            ville:req.body.ville,
            region:req.body.region,
            vente:req.body.vente,
            categorie:req.body.categorie
    
        }
        Model.create(vendeur, (resultat)=>{
            res.send(resultat)
        })
    } catch (error) {
        res.status(500).json({
            message: "Fail",
            error: error.message
        })
    }
}
/** 
// *get all customer to mysql
// *@param {*} req
// *@param {*} res
// */
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
exports.authUserName= (req, res)=>{
    try {
       Model.getIfExitName(req.params.name,(resulta) => {
            res.send(resulta)
        })
    } catch (error) {
        res.status(500).json({
            message: "Fail",
            error: error.message
        })
    }
}
exports.authUserMail= (req, res)=>{
    try {
       Model.getIfExitMail(req.params.mail,(resulta) => {
            res.send(resulta)
        })
    } catch (error) {
        res.status(500).json({
            message: "Fail",
            error: error.message
        })
    }
}
exports.searchVendeur= (req, res)=>{
    try {
       Model.searchVendeur(req.params.search,(resulta) => {
            res.send(resulta)
        })
    } catch (error) {
        res.status(500).json({
            message: "Fail",
            error: error.message
        })
    }
}
exports.getOneVendeur= (req, res)=>{
    try {
       Model.getOneVendeur(req.params.id,(resulta) => {
            res.send(resulta)
        })
    } catch (error) {
        res.status(500).json({
            message: "Fail",
            error: error.message
        })
    }
}
exports.createImg = (req, res) => {
    let image = {}
    try {
        ///builiding vendeur object from uploading request bod
        image = {
            name: req.body.name,
            imagePath:req.body.imagePath,   
        }
        Model.createImg(image, (resultat)=>{
            res.send(resultat)
        })
    } catch (error) {
        res.status(500).json({
            message: "Fail",
            error: error.message
        })
    }
}
exports.getOneImg= (req, res)=>{
    try {
       Model.getOneImg(req.params.id,(resulta) => {
            res.send(resulta)
        })
    } catch (error) {
        res.status(500).json({
            message: "Fail",
            error: error.message
        })
    }
}
exports.deleteOnly= (req, res)=>{
    try {
       Model.deleteUser(req.params.id,(resulta) => {
            res.send(resulta)
        })
    } catch (error) {
        res.status(500).json({
            message: "Fail",
            error: error.message
        })
    }
}
exports.updateUser = (req, res) =>{
    let obj ={}
    try{
        obj ={
            name:req.body.name,
            mail:req.body.mail,
            password:req.body.password,
            description:req.body.description
        }
        Model.updateUserSelected(req.params.id, obj, (resulta)=>{
            res.send(resulta)
        })
    } catch (error) {
        res.status(500).json({
            message: "Fail",
            error: error.message
        })
    }
}
// /** 
// *get one customer to mysql
// *@param {*} req
// *@param {*} res
// */
// exports.getUser = (req, res) => {
//     try {
//         Model.selectIduser(req.params.id, (resulta) => {
//             res.send(resulta)
//         })
//     } catch (error) {
//         res.status(500).json({
//             message: "Fail",
//             error: error.message
//         })
//     }
// }
// /** 
// *get one customer to mysql
// *@param {*} req
// *@param {*} res
// */
// exports.updateUser = (req, res) => {
//     try {
//                 Model.updateUserSelected(req.params.id, req.body.name, req.body.lastname, req.body.mail, (resulta) => {
//                     res.send(resulta)
//                 })

//     } catch (error) {
//         res.status(500).json({
//             message: "Fail",
//             error: error.message
//         })
//     }
// }

// /** 
// *delete one customer to mysql
// *@param {*} req
// *@param {*} res
// */
// exports.deleteUser = (req, res) => {
//     try {
//                 Model.deleteUser(req.params.id, (resulta) => {
//                     res.send(resulta)
//                 })
//                 console.log("call delete", req.params.id);
                
//     } catch (error) {
//         res.status(500).json({
//             message: "Fail",
//             error: error.message
//         })
//     }
// }