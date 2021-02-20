const con = require('../config/db')
const moment = require('moment')


class Model {
    
       constructor(row){
           this.row = row
       }
       get id(){
           return this.row.id
       }
       get name(){
          return this.row.name
       }
       get lastname(){
        return this.row.lastname
     } 
     get mail(){
        return this.row.mail
     }
     get date(){
        return moment(this.row.date)
     }
    
    static create(name,lastname, mail, callback){ 
        con.query('INSERT INTO tk_users SET  name =?, lastname=?, mail=?', [name, lastname, mail], (err, result)=>{
            if (err) throw err
            callback(result)
        })
    }
    static getAll(callback){
        con.query('SELECT * FROM tk_users ORDER BY date DESC', (err, rows)=>{
            if(err) throw err
            callback(rows.map((row)=> new Model(row)))
        })
    }
    static selectIduser(id, callback){
        con.query('SELECT * FROM tk_users WHERE id=?', [id], (err, result)=>{
            if(err) throw err
            callback(result)
        })
    }
    static updateUserSelected(id, name, lastname, mail, callback){
        con.query("UPDATE tk_users SET name=?,lastname=?,mail=? WHERE id=?", [name,lastname, mail, id], (err,rows)=>{
            if(err) throw err
            callback(rows)
        })
    }
static deleteUser(id, callback){
    con.query('DELETE FROM tk_users WHERE id=?',[id], (err, result)=>{
        if(err) throw err
        callback(result)
    })
}
static searchUser(key, callback){
    con.query('SELECT * FROM tk_users WHERE id LIKE ? OR name LIKE ? OR lastname LIKE ? OR mail LIKE ?', ['%'+key+'%', '%'+key+'%', '%'+key+'%', '%'+key+'%'],(erro,rows )=>{
        if(erro) throw erro
        callback(rows.map((row)=> new Model(row)))
    }) 
}





}
module.exports= Model