'use strict';

class Node {
  constructor(value, right = null, left = null) {
    this.value = value,
    this.right = right,
    this.left = left
  }
}

module.exports = Node;