'use strict';

const LinkedList = require('../lib/list.js');
const Node = require('../lib/node.js');

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
    console.log(list);
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

})

