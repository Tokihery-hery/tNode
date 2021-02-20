let fs = require("fs")
let data = fs.readFileSync("D:/Node/public/data/commne.json", { encoding: 'utf8' }, (err) => {
    if (err) throw err
})
let datanet = data.split("\n")
exports.parseCsv = (req, res) => {
    res.render('index', { data: datanet[0], databrute: data })
}

exports.parseJsonAvance = (req, res) => {// routing en express js 
    let datajson = JSON.parse(data)
    let commune_all = Array()
    let fokontany_all = Array()
    let compteFokoParCommune = Array()
    for (let listcommune of datajson.commune) {
        compteFokoParCommune.push(listcommune.fokontany.length)
        commune_all.push({ name: listcommune.name, fokontany: listcommune.fokontany, nombreFoko: listcommune.fokontany.length })
        for (let fokontany of listcommune.fokontany) {
            fokontany_all.push(fokontany.name)
        }
    }
    let somDufoko = compteFokoParCommune.reduce((a, b) => a + b)
    res.render("index", { data: commune_all, nombreCommune: compteFokoParCommune.length, nombreFokoAll: fokontany_all.length, nombremoyenFoko: Math.round(somDufoko / compteFokoParCommune.length) }) // mandefa anlay datanet sy averagefoko makan'ny aminy page parserjson.ejs, na .html
}
const max = (array) => {
    let countFokomax = -Infinity
    for (let i = 0; i < array.length; i++) {
        if (array[i] > countFokomax) {
            countFokomax = array[i]
        }
    }
    return countFokomax
}
const min = (array) => {
    let countFokomin = Infinity
    for (let i = 0; i < array.length; i++) {
        if (array[i] < countFokomin) {
            countFokomin = array[i]
        }
    }
    return countFokomin
}