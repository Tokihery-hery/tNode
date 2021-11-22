let logger = require('./logger')


// first strategie is called function  toConsole 
logger.log('Hello')
logger.log('Hello 7845')
logger.log('Hello BJF')
logger.log('Hello KHJJDHF')

// change strategie to called toFile
logger.changeStrategy('toFile')

logger.log('Hello')
logger.log('Hello 7845')
logger.log('Hello BJF')
logger.log('Hello KHJJDHF')