'use strict';

const BinaryTree = require('../binary-tree.js');
const BST = require('../binary-search.js');
const Node = require('../node.js');

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

    expect(tree.root.left).toEqual(3);
    expect(tree.root.right).toEqual(7);
  });

  it('should successfully return a collection from a preorder traversal', () => {
    const node1 = new Node(5, 7, 9);
    const node2 = new Node(10, 12, 14);
    const tree = new BST(node1);
    tree.add(node2);
    const results = tree._walk();
    expect(results).toEqual([5, 7, 9, 10, 12, 14]);
  });

  it('should successfully return a collection from a inorder traversal', () => {
    
  })

  it('should successfully return a collection from a postorder traversal', () => {
    
  })

})