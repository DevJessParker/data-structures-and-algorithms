'use strict';

class Node {
  constructor(value, right = null, left = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

module.exports = Node;