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

  add(value) {
    const node = new Node(value);
    
    let _walk = (current, direction) => {
      
      if (!current[direction]) {
        current[direction] = new Node(value)
        return this
      }
  
      if (value === current[direction].value) {
        _walk(current[direction], 'left');
        console.log( "Values are the same. Added to left.");
      }
      if (value < current[direction].value) {
        _walk(current[direction], 'left')
      }
      if (value > current[direction].value) {
        _walk(current[direction], 'right')
      }
  
      }
    _walk(this, 'root')
    }
  
}

module.exports = BinaryTree;