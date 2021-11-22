const fs = require('fs')
const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const app = express()

let data = require('./data.json')
// tempalte
app.set('view engine', 'ejs')

//midlleware
app.use('/assets', express.static('public')) 
app.use(bodyParser.urlencoded({ extended: false }));

//route

app.get('/sys', (req, res) => {
    res.render("sysHis")
    // console.log(findName())
})
app.get('/', (req, res) => {
    res.render("crudjson", { data: data })
    // console.log(findName())
})
app.post('/', (req, res) => {
    if (req.body.name != '' && req.body.email != '') {
        findName(req.body.name || req.body.email).then(ress => {
            if (ress == undefined) {
                createUser(req.body.name, req.body.email)
                res.render("crudjson", { data: data, success:"Created successfull" })
            } else {
                res.render("crudjson", { data: data, message: "User already exit" })
            }
        })
    } else {
        res.render("crudjson", { data: data, message: "Il faut remplir tous les champs" })
    }
})
app.get('/top', (req, res) => {
    search(req.query.q)
        .then(
            ress => res.render("crudjson",
                {
                    resultat: ress.length != 0 ? ress : "No resultat"
                }
            )
        )
})
app.get('/del/:name', (req, res) => {
    deleteUser(req.params.name)
        .then(
            () => res.render(
                "crudjson",
                { data: data, success:"Deleted successfull" }
            )
        )


})
app.get('/edit/:name', (req, res) => {
    findName(req.params.name)
        .then(
            ress => {
                return res.render("crudjson", { edit: ress != undefined ? ress : "No resultat" })
            }
        )
})
app.post('/edit/:name', (req, res) => {
    filterUser(req.params.name).then(ress => {
        let rest = ress.find(ret => ret.name == toLower(req.body.name) || ret.email == toLower(req.body.email) || ret.name == toUpper(req.body.name) || ret.email == toUpper(req.body.email))
        if (rest == undefined) {
            update(req.params.name, req.body.name, req.body.email)
                .then(
                    () => res.render("crudjson",
                        { data: data,success:"Update successfull" }
                    )
                )
        } else {
            res.render("crudjson", { data: data, message: "User already use by other" })
        }
    })

})
//function action MODEL
createUser = (name, email) => {
    data.users.push({ name: name, email: email })
}
findName = async (key) => {
    return await data.users.find(user => user.name == key || user.email == key)
}
update = async (key, name, email) => {
    r = await data.users.find(user => user.name == key)
    r.name = name
    r.email = email
}
deleteUser = async (key) => {
    rest = await data.users.filter(user => user.name != key)
    data = { "users": rest }

}
filterUser = async (key) => {
    rest = await data.users.filter(user => user.name != key)
    return rest
}
search = async (key) => {
    let lower = key.toLowerCase()
    let upper = key.toUpperCase()
    return await data.users.filter(
        res => res.name.match(lower) || res.name.match(upper) != null
            || res.email.match(lower) || res.email.match(upper) != null
    )
}

saveFileJson = async () => {
    let read = fs.createReadStream('./data.json')
    let write = fs.createWriteStream('./data2.json', 'utf8')
    await read.pipe(write)
}
toUpper = (val) => {
    return val.toUpperCase()
}
toLower = (val) => {
    return val.toLowerCase()
}
app.listen(8080, () => {
    console.log("Listen in localhost:8080");
})