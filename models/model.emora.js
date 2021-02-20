const con = require('../config/db.emora')
const moment = require('moment')


class Model {
    constructor(row) {
        this.row = row
    }
    get id() {
        return this.row.id
    }
    get name() {
        return this.row.name
    }
    get lastname() {
        return this.row.lastname
    }
    get mail() {
        return this.row.mail
    }
    get date() {
        return moment(this.row.date)
    }

    static create(obj, callback) {
        con.query('INSERT INTO tk_vendeur SET ?', [obj], (err, result) => {
            if (err) throw err
            callback(result)
        })
    }
    static getAll(callback) {
        con.query('SELECT * FROM tk_vendeur ORDER BY createAt DESC', (err, rows) => {
            if (err) throw err
            callback(rows.map((row) => new Model(row)))
        })
    }
    static selectIduser(id, callback) {
        con.query('SELECT * FROM tk_vendeur WHERE id=?', [id], (err, result) => {
            if (err) throw err
            callback(result)
        })
    }
    static updateUserSelected(id,obj, callback) {
        con.query("UPDATE tk_vendeur SET ? WHERE id=?", [obj, id], (err, rows) => {
            if (err) throw err
            callback(rows)
        })
    }
    static deleteUser(id, callback) {
        con.query('DELETE FROM tk_vendeur WHERE id=?', [id], (err, result) => {
            if (err) throw err
            callback(result)
        })
    }
    static searchVendeur(key, callback) {
        con.query('SELECT * FROM tk_vendeur WHERE vente LIKE ? OR name LIKE ? OR categorie LIKE ? OR ville LIKE ?', ['%' + key + '%', '%' + key + '%', '%' + key + '%', '%' + key + '%'], (erro, rows) => {
            if (erro) throw erro
            callback(rows)
        })
    }
    static getIfExitName(key, callback) {
        con.query('SELECT COUNT(*) as numberNomExist FROM tk_vendeur WHERE name=?', [key], (err, result) => {
            if (err) throw err
            callback(result)
        })
    }
    static getIfExitMail(key, callback) {
        con.query('SELECT COUNT(*)  as numberMailExist FROM tk_vendeur WHERE mail=? ', [key], (err, result) => {
            if (err) throw err
            callback(result)
        })
    }

    static getOneVendeur(key, callback){
        con.query('SELECT * FROM tk_vendeur WHERE id=? ', [key], (err, result) => {
            if (err) throw err
            callback(result)
        })
    }
    static createImg(obj, callback) {
        con.query('INSERT INTO tk_images SET ?', [obj], (err, result) => {
            if (err) throw err
            callback(result)
        })
    }
    static getOneImg(key, callback){
        con.query('SELECT * FROM tk_images WHERE id=? ', [key], (err, result) => {
            if (err) throw err
            callback(result)
        })
    }




}
module.exports = Model