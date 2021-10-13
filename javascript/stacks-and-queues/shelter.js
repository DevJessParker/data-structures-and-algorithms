'use strict';

const LinkedList = require("./list");

class AnimalShelter {
  constructor() {
    this.animalList = new LinkedList(),
    this.length = 0
  }

  enqueue(val) {
    this.animalList.append(val);
    this.length++;
    return this;
  }

  dequeue(pref) {
    console.log('pref', pref)
    if (this.length === 0) {return ('Queue is empty.')};
    if (pref !== 'cat' || 'dog') {return('NULL')};
    if (pref === null) {
      const adopted = this.animalList.getHeadNode();
      this.animalList.removeFirstNode();
      this.length--
      
      return(adopted);
    }
    if (pref === 'cat' || 'dog') {
      const results = this.animalList.removeNodeAtPref(pref);
      this.length--
      console.log('preference results', results)
      return(results);
    }
    
  }
}

module.exports = AnimalShelter;