'use strict';

const Node = require('./lib/node.js');
const LinkedList = require('./lib/list.js');

const node1 = new Node(1);
const node2 = new Node(3);
const node3 = new Node(5);
const node4 = new Node(7);
node1.next = node2;
node2.next = node3;
node3.next = node4;
let list = new LinkedList(node1);

const node5 = new Node(2);
const node6 = new Node(4);
const node7 = new Node(6);
const node8 = new Node(8);
node5.next = node6;
node6.next = node7;
node7.next = node8;
let list2 = new LinkedList(node5);

const show = {showHidden: false, depth: null}

module.exports = { list, list2 };
