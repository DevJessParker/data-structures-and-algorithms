'use strict';

const BinaryTree = require('../binary-tree.js');
const BST = require('../search-tree.js');
const Node = require('../node.js');
const { breadthFirst } = require('../breadth-first.js');

describe('Binary Tree', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });

  it('should create an empty binary tree on instantiation', () => {
    let tree = new BinaryTree();
    expect(tree.root).toEqual(null);
  });

  it('should add a left child and right child to a single root node', () => {
    const node1 = new Node(5);
    const tree = new BST(node1);
    
    tree.add(3);
    tree.add(7);
    
    expect(tree.root.left.value).toEqual(3);
    expect(tree.root.right.value).toEqual(7);
  });

  it('should successfully return a collection from a preorder traversal', () => {
    const node1 = new Node(5);
    const tree = new BST(node1);
    tree.add(1);
    tree.add(10);
    tree.add(3);
    tree.add(8);
    const results = tree.preOrder();
    expect(results).toEqual([5, 1, 3, 10, 8]);
  });

  it('should successfully return a collection from a inorder traversal', () => {
    const node1 = new Node(5);
    const tree = new BST(node1);
    tree.add(1);
    tree.add(10);
    tree.add(3);
    tree.add(8);
    const results = tree.inOrder();
    expect(results).toEqual([1, 3, 5, 8, 10]);
  })

  it('should successfully return a collection from a postorder traversal', () => {
    const node1 = new Node(5);
    const tree = new BST(node1);
    tree.add(1);
    tree.add(10);
    tree.add(3);
    tree.add(8);
    const results = tree.postOrder();
    expect(results).toEqual([3, 1, 8, 10, 5]);
  })

  it('should find the maximum value in a binary tree', () => {
    const node1 = new Node(5);
    const tree = new BST(node1);
    tree.add(1);
    tree.add(10);
    tree.add(3);
    tree.add(8);
    const results = tree.findMaxValue();
    expect(results).toEqual(10);
  })

  it('return the values of a tree with breadth first traversal', () => {
    const node1 = new Node(5);
    const tree = new BST(node1);
    tree.add(1);
    tree.add(10);
    tree.add(3);
    tree.add(8);
    const results = breadthFirst(tree);
    expect(results).toEqual([5, 1, 10, 3, 8]);
  })

})