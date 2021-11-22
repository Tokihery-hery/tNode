
const LoggerStrategy = require('./loggerStrategie')
const config = require('./config.json')
class Logger {
	constructor(strategy='toConsole'){
		this.message = "No message"
		this.strategy = LoggerStrategy[strategy]
	}
	log(message){
		this.strategy(message)
	}
	changeStrategy(strategy_name){
		this.strategy = LoggerStrategy[strategy_name]
	}

}

module.exports = new Logger(strategy=config.strategy.logs)