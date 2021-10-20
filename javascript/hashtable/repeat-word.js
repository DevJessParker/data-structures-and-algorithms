'use strict'

const HashTable = require('./hashtable.js');

function repeatedWord(str) {
  let table = new HashTable(12);

  let values = str.split(' ');
  values.map(word => table.set(word, word));

  console.log('TABLE', table.map)
  console.log(table.has('do'));

  for (let i = 0; i < values.length; i++) {
    if (table.has(values[i])) {
      return values[i]
    }
  }
  return('Does not exist.')

}

module.exports = {repeatedWord}