'use strict';

const BinaryTree = require('./binary-tree.js');
const Node = require('./node.js');
const util = require('util');

class BST {
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
    console.log('PREORDER RES', results)
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
    console.log('INORDER RES', results)
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
    console.log('POSTORDER RES', results)
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
      console.log( "Values are the same");
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

// let node1 = new Node(1);
// let node2 = new Node(2);
// let node4 = new Node(4);
// let node3 = new Node(3);
// let node5 = new Node(5);

// node2.left = node1;
// node2.right = node4;
// node4.left = node3;
// node4.right = node5;

// let tree = new BST(node2)
// console.log('tree', util.inspect(tree.add(7), show));

// console.log('zipped list', util.inspect(zipLists(list, list2), show));

module.exports = BST;