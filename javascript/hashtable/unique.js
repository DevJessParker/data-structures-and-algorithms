'use strict'

const HashTable = require('./hashtable.js')

//Write a function that takes in a string and determines whether or not the string is full of unique characters. Return a boolean value.

function uniqueString(str) {
  let table = new HashTable(20);

  let values = str.split('');

  for (let i = 0; i < values.length; i++) {
    
    if (table.has(values[i])) {
      return false
      }
    table.set(values[i].toLowerCase(), values[i])
  }
  return false

}

module.exports = {uniqueString}