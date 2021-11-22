// learnig docker

// const express = require('express')
// const app = express()
// const ejs = require('ejs')

// // port
// const port = process.env.PORT || 8080

// // ejs.Template
// app.set('view engine', 'ejs')

// // midleware
// app.use('/assets', express.static('js')) 

// // route
// app.get('/', (req, res)=>{
//     res.render('t')
// })

// app.listen(port, ()=>{
//     console.log("Serveur started in port "+port)
// })


const fs = require('fs')

const { promisify } = require('util')

let index = 0

const writeFile = promisify(fs.writeFile)
const unlinkFile = promisify(fs.unlink)
const readdir = promisify(fs.readdir)
const beep = () =>process.stdout.write("\x07")
const delay =(seconds)=> new Promise((resolve)=>{
    setTimeout(resolve, seconds * 1000)

    console.log(seconds,index , "this is promisify")
    index =+1
})

//parallel asyncronuos
Promise.all([
    writeFile('readme.md', "Hello world, this is simple"),
    delay(1, index),
    writeFile('readme.txt', "Hello world, this is simple"),
    delay(10, index),
    writeFile('readme.json', '{"data": {"name": "Tokihery", "age":25}}'),
    delay(1,index)
    ])
    .then(res=>readdir(__dirname))
    .then(console.log)