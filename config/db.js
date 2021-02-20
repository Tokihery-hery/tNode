const mysql= require("mysql");

let con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"crudangular"
})
con.connect()
module.exports= con