const Skot= require('./skot')

var new_skot = new Skot()

new_skot.addSkot('LABEL')
new_skot.addSkot('LABEL6')
new_skot.addSkot('LABEL7')
new_skot.addSkot('LABEL8')
new_skot.addSkot('LABEL9')
new_skot.name = 'Koloina'
console.log(new_skot.name)
module.exports = new_skot