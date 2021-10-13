'use strict'

const LinkedList = require('./list.js');

class Queue {
  constructor() {
    this.listOne = new LinkedList(),
    this.listTwo = new LinkedList(),
    this.oneLength = 0,
    this.twoLength = 0
  }

  enqueue(val) {
    this.listOne.append(val);
    this.oneLength++;
    return this;
  }

  dequeue() {
    if (this.oneLength === 0) {return ('Queue is empty.')}
    const removedNode = this.listOne.getHeadNode(); 
    if (removedNode.data) {
      this.listOne.removeFirstNode();
      this.oneLength--;
      this.listTwo.append(removedNode.data);
      this.twoLength++;

      return this;
    }
  }

  peek() {
    return this.listOne.getHeadNode();
  }
}

module.exports = Queue;