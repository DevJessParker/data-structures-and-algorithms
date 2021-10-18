'use strict';

const Node = require('./node.js');

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder() {
    let results = [];

    let _walk = node => {
      results.push(node.value);
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    }
    _walk(this.root);
    return results;
  }

  inOrder() {
    let results = [];

    let _walk = node => {
      if (node.left) _walk(node.left);
      results.push(node.value);
      if (node.right) _walk(node.right);
    }
    _walk(this.root);
    return results;
  }

  postOrder() {
    let results = [];

    let _walk = node => {
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
      results.push(node.value);
    }
    _walk(this.root);
    return results;
  }

  findMaxValue() {
    let results = this.inOrder();
    results.sort;
    return results[results.length - 1]
  }
}

// let node1 = new Node(11);
// let node2 = new Node(9);
// let node3 = new Node(3);
// let node4 = new Node(1);

// node1.left = node2;
// node1.right = node3;
// node2.left = node4;

// console.log('node', node1);

// let tree = new BinaryTree(node1)

// let finalVal = tree.findMaxValue();


module.exports = BinaryTree;