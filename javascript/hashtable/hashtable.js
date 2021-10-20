'use strict';

const LinkedList = require('./linked-list.js');

class HashTable {

  constructor(size) {
    this.size = size;
    this.map = new Array(size).fill();
  }

  hash(key) {
    let chars = key.split('');
    return chars.reduce((p, character) => {
      return p + character.charCodeAt(0);
    }, 0) * 599 % this.size;
  }

  set(key, value) {
    let bucketNumber = this.hash(key);

    if (!this.map[bucketNumber]) {
      this.map[bucketNumber] = new LinkedList();
    }

    let entry = { [key]: value };

    this.map[bucketNumber].add(entry);

  }

  has(key) {

    let bucketNumber = this.hash(key);

    if (!this.map[bucketNumber]) { return false; }

    let current = this.map[bucketNumber].head;
    while (current) {
      let data = current.value;
      if (data[key]) { return true; }
      current = current.next;
    }

    return false;


  }

  get(key) {

    let bucketNumber = this.hash(key);

    if (!this.map[bucketNumber]) { return null; }

    let current = this.map[bucketNumber].head;
    while (current) {
      let data = current.value;
      if (data[key]) { return data[key]; }
      current = current.next;
    }

    return null;

    
  }
}

module.exports = HashTable;