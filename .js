exports.module = (req, res, next)=>{
    res.setHeader('Acces-Control-Allow-Origin', '*')
    res.setHeader('Acces-Control-Allow-Headers', 'Origin', 'x-Requestde-With', 'Content-type', 'Accept')
    res.setHeader('Acces-Control-Allow-Method', 'POST, GET, PATCH,PUT, DELETE, OPTIONS')
    next()
}