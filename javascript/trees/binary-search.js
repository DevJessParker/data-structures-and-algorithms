'use strict';

const BinaryTree = require('./binary-tree.js');
const Node = require('./node.js');

class BST extends BinaryTree {
    constructor(root, left, right) {
      super(root, left, right);
      this.root = root;
    }
  

  add(value) {
    const node = new Node(value);

    if (this.root = null) {
      this.root = node;
    }

    let current = this.root;

    while(current) {
      if (node.head === current.root) return ("Value is the same.")
      if (node.head < current.root) {
        if (current.left === null) {
          current.left = node;
          return this
        }
        current = current.left.head;
      } else {
        if (current.right === null) {
          current.right = node;
          return current.right;
        }
        current = this;
      }
    }
  }

  contains(value) {
    const arr = _walk();
    return (arr.includes(value));
  }
}

module.exports = BST;