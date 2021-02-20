let Model = require('../models/model_restApicrud')

class Controllers {
    static accuiel_page(req, res) {
        if (req.session.error || req.session.success || req.session.success_edit || req.session.error_search) {
            res.locals.error = req.session.error
            res.locals.success = req.session.success
            res.locals.success_edit = req.session.success_edit
            res.locals.error_search = req.session.error_search
            req.session.error_search = undefined
            req.session.success_edit = undefined
            req.session.error = undefined
            req.session.success = undefined
        }
        Model.getAll((users_data) => {
            res.render('page/restApicrud', { users_data: users_data })
        })
    }
    static posted(req, res) {
        res.render('page/restApicrud', { info: req.body })
        // console.log(req.body)
    }
    static apiAjax(req, res){
        Model.getAll((users_data) => {
            res.send(users_data)
        })
    }
    static postedAndGetuser(req, res) {

        // console.log(req.body.mail)
        if (req.body.name.trim() === undefined || req.body.name.trim() === '' || req.body.lastname.trim() === undefined || req.body.lastname.trim() === '' || req.body.mail.trim() === undefined || req.body.mail.trim() === '') {
            req.session.error = "Feno daholo azafady"
            res.redirect("/crudmysql")

        } else {
            Model.create(req.body.name, req.body.lastname, req.body.mail, (users_data) => {
                req.session.success = "Tafiditra soamatsara, misaotra!!!!"
                res.redirect("/crudmysql")
            })
        }

    }
    static edit(req, res) {
        if (req.params.id === undefined && req.params.id === "") {
            res.send("Tsy misy  io")

        } else {
            Model.selectIduser(req.params.id, (users_selected) => {
                let error_destinateur = ""
                if (users_selected.length <= 0) error_destinateur = 'Mbola tsy misy io nimero io, azafady mamarena mampiditra'
                res.render("page/restApicrud_edit", { users_selected: users_selected, error_destinateur: error_destinateur })
            })

        }
    }
    static updateforpost(req, res) {
        // console.log(req.body);
        if (req.params.id != undefined || req.params.id != "") {
            if (req.body.name.trim() != undefined || req.body.name.trim() != '' || req.body.lastname.trim() != undefined || req.body.lastname.trim() != '' || req.body.mail.trim() != undefined || req.body.mail.trim() != '') {
                Model.updateUserSelected(req.params.id, req.body.name, req.body.lastname, req.body.mail, (users_data) => {
                    Model.getAll((users_data) => {
                        console.log(users_data[0].date)
                        res.render('page/restApicrud', { users_data: users_data, succes_edit: "Vita soamatsara ny fanovana!!!!" })

                    })
                })

            } else {
                res.render("page/restApicrud_edit", { error: "Feno daholo azafady" })

            }
        } else {
            res.render("page/restApicrud_edit", { error: "Tokony hisafidy destinateur ray farafaratsiny" })
        }

    }
    static updateforget(req, res) {
        if (req.params.id != undefined || req.params.id != "") {
            Model.selectIduser(req.params.id, (users_selected) => {
                let error_destinateur = ""
                if (users_selected.length <= 0) error_destinateur = 'Mbola tsy misy io nimero io, azafady mamarena mampiditra'
                res.render("page/restApicrud_edit", { users_selected: users_selected, error_destinateur: error_destinateur })
            })
        }

    }
    static delete(req, res) {
        if (req.params.id != undefined || req.params.id != "") {
            Model.deleteUser(req.params.id, (users_data) => {
                req.session.success_edit = "Vita ny famafana!!!!"
                res.redirect("/crudmysql")
            })
        } else {
            res.send('404 not found page')
        }
    }
    static profil(req, res) {
        if (req.params.id != undefined || req.params.id != "") {
            Model.selectIduser(req.params.id, (users_selected) => {
                let error_destinateur = ""
                if (users_selected.length <= 0) error_destinateur = 'Tsy misy io numero io, mampidira destinateur iray azafady'
                res.render("page/restApiprofil", { users_selected: users_selected, error_destinateur: error_destinateur })
            })
        }
    }
    static search(req, res) {
        if (req.params.id != undefined || req.params.id != "") {
            Model.searchUser(req.params.id, (users_data) => {
                let error_search = ""
                if(users_data.length <= 0){
                    error_search = "Tsy misy io numero io,azafady mampidira hafa"
                    req.session.error_search = error_search
                    res.redirect('/')
                } 
                else{
                    res.render("page/restApicrud", { users_data: users_data, len: users_data.length })
                }
            })
        }
        else {
            res.render("page/restApicrud", { error_search: "veiller enregistrer ou moin un caracteees" })
        }
    }

}


module.exports = Controllers

