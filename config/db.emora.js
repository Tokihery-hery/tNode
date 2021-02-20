const env = require('./env')

const mysql= require("mysql");

let con = mysql.createConnection({
    host:env.host,
    user:env.username,
    password:env.password,
    database:env.database
})
con.connect()
module.exports= con

// helllo