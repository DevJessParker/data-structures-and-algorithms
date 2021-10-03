'use strict';

const {LinkedList, zipLists} = require('../lib/list.js');
const Node = require('../lib/node.js');
const util = require('util');

describe('Linked List', () => {

  it('works', () => {
    expect(true).toBeTruthy();
  });

  it('should create an empty linked list on instantiation', () => {
    const list = new LinkedList();
    expect(list.head).toEqual(null);
  })

  it('should have a head property that correctly points to the first node in the list', () => {
    const node1 = new Node(1);
    const node2 = new Node(3);
    node1.next = node2;
    const list = new LinkedList(node1);
    expect(list.head.data).toBe(1);
    expect(list.head.next.data).toBe(3);
  })

  it('should be able to append a node to the end of the list', () => {
    const node1 = new Node(1);
    const node2 = new Node(3);
    node1.next = node2;
    const list = new LinkedList(node1);
    list.append(5);
    expect(list.head.next.next.data).toEqual(5);
    expect(list.head.next.next.next).toEqual(null);
    })

  it('should return true if a value exists in the list.', () => {
    const node1 = new Node(1);
    const node2 = new Node(3);
    node1.next = node2;
    const list = new LinkedList(node1);
    const tresult = list.listIncludes(3);
    expect(tresult).toEqual(true);
  })

  it('should return false if a value does not exist in the list.', () => {
    const node1 = new Node(1);
    const node2 = new Node(3);
    node1.next = node2;
    const list = new LinkedList(node1);
    const fresult = list.listIncludes(8);
    expect(fresult).toEqual(false);
  })

  it('should return a string representing all the values in the LL', () => {
    const node1 = new Node(1);
    const node2 = new Node(3);
    node1.next = node2;
    const list = new LinkedList(node1);
    list.append(5);
    const result = list.toString();
    expect(result).toEqual("{1} -> {3} -> {5} -> NULL")
  })

  it('should insert a new value before a given value in the list', () => {
    const node1 = new Node(1);
    const node2 = new Node(3);
    node1.next = node2;
    const list = new LinkedList(node1);
    list.insertBeforeValue(3, 8);
    expect(list.head.next.data).toBe(8);
  })

  it('should insert a new value after a given value in the list', () => {
    const node1 = new Node(1);
    const node2 = new Node(3);
    node1.next = node2;
    const list = new LinkedList(node1);
    list.insertAfterValue(3, 8);
    expect(list.head.next.next.data).toBe(8);
  })

  it('should find a Happy Path if given k value is in the middle of the list', () => {
    const node1 = new Node(1);
    const node2 = new Node(3);
    const node3 = new Node(5);
    const node4 = new Node(7);
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    const list = new LinkedList(node1);

    const result = list.indexFromTail(2);
    expect(result.data).toEqual(3)
  })

  it('should return an error if the index Value is greater than the length of the list', () => {
    const node1 = new Node(1);
    const node2 = new Node(3);
    const node3 = new Node(5);
    const node4 = new Node(7);
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    const list = new LinkedList(node1);

    const result = list.indexFromTail(4);
    expect(result).toEqual('Value and length of list are equal')
  })

  it('should return an error if the index Value is a negative integer', () => {
    const node1 = new Node(1);
    const node2 = new Node(3);
    const node3 = new Node(5);
    const node4 = new Node(7);
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    const list = new LinkedList(node1);

    const result = list.indexFromTail(-3);
    expect(result).toEqual('Value is negative')
  })

  it('should return an error if the list is one node long', () => {
    const node1 = new Node(1);
    const list = new LinkedList(node1);

    const result = list.indexFromTail(-3);
    expect(result).toEqual('Length of list is 1')
  })

  it('should return an error if the index Value is a greater than the length of the list', () => {
    const node1 = new Node(1);
    const node2 = new Node(3);
    const node3 = new Node(5);
    const node4 = new Node(7);
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    const list = new LinkedList(node1);

    const result = list.indexFromTail(8);
    expect(result).toEqual('Value exceeds length')
  })

  it('should zipper two linked lists', () => {
    const node1 = new Node(1);
    const node2 = new Node(3);
    const node3 = new Node(2);
    const node4 = new Node(4);
    node1.next = node2;
    node3.next = node4;
    
    const list = new LinkedList(node1);
    const list2 = new LinkedList(node3)

    const result = zipLists(list, list2);
    expect(result).toEqual({"head": {"data": 1, "next": {"data": 2, "next": {"data": 3, "next": {"data": 4, "next": null}}}}})
  })
})

