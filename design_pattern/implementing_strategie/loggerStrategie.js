const path = require('path')
const { appendFile} = require('fs')
class LoggerStrategy{

	static toConsole(message){
		console.log(message)
	}

	static toFile(message){
		let filemane = path.join(__dirname, 'logger.txt')
		appendFile(filemane, `${message}\n`, error=>{
			if(error){
				console.log(error)
				console.error(error)
			}
		})

	}
	static noDate(){
		console.log(`efa hoe no data`)
	}
}

module.exports = LoggerStrategy