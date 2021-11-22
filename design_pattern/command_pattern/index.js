const { createInterface } = require('readline')
const os = require('os')

const rl = createInterface({
	input: process.stdin,
	output:process.stdout
})


console.log('create <fileName> <text>| exit')
rl.prompt()
rl.on('line',  input=>{
	let [commands,...remaining] = input.split(' ')
	let [filemane, ...fileText] = remaining


	switch(commands){
		case 'exit':
			console.log('TODO: exit')
			console.log(os.cpus())
			break;
		case 'create':
			console.log('TODO: Create file ', `${filemane}`)
			console.log('file  Content', fileText)
			break;
		default:
			console.log('Defaut output ')

	}

	rl.prompt()
}) 