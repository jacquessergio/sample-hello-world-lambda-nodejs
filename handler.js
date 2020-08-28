'use strict'

module.exports.helloWorld = async (event, context) => {
 
  console.log({event})

  return "Hello World"
}
