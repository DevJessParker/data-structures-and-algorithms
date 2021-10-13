'use strict';

const LinkedList = require('./list.js');

class Stack {
  constructor() {
  this.stack = new LinkedList(),
  this.length = 0
  }

  push(val) {
    this.stack.insertNewHead(val);
    this.length++

    return this;
  }

  pop() {
    this.stack.removeFirstNode();
    this.length--;

    return this;
  }

  peek() {
    return this.length === 0 ? 'Stack is empty.'
    : this.stack.head.data;
  }
}

module.exports = Stack;