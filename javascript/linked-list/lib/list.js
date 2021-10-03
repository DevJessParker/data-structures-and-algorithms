'use strict';

const { urlToHttpOptions } = require('url');
const util = require('util');
const Node = require('./node.js');

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    let node = new Node(value);

    if(!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
    return this;
  }

  insert(data){
    const node = new Node(data, this.head);
    this.head = node;
    //this.head = new Node(data, this.head)
    return this
  }

  sizeOf() {
    let count = 0;
    let node = this.head;

    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  getHeadNode() {
    return this.head
  }

  getLastNode() {
    let node = this.head;
    if (!this.head) {
      return null;
    }
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
    return node;
  }

  clearAllNodes() {
    this.head = null;
    return this.head;
  }

  removeFirstNode() {
    if (!this.head) {
      return null;
    } else if (this.head) {
    this.head = this.head.next;
    return this.head;
    }
  }

  removeLastNode() {
    let previous = this.head;
    let node = this.head.next;

    if (!this.head) {
      return null;
    } else if (!this.head.next) {
      this.head = null;
      return this.head;
    }
    
    while(node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
    return this.head;
  }

  insertLast(data) {
   const last = this.getLastNode();

   if (!last) {
     this.head = new Node(data);
    } else {
    last.next = new Node(data);
    }  
    return this;
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) {
        return node
      }
      counter++
      node = node.next 
    }
    return node;
  }

  removeAt(index) {
    
    if(!this.head || index < 0) {
      return null;
    }
    if (index === 0) {
      this.head = this.head.next;
      return this.head;
    }
    const node = this.getAt(index - 1);
    if (!node || !node.next) {
      return null;
    }
    node.next = node.next.next;
    return this.head; 
  }

  insertBeforeValue(value, newValue) {
    let previous = this.head;
    let node = previous.next;
     
    if (!this.head) {
      return null;
    }
    while (node) {
      if (node.data === value) {
        previous.next = new Node(newValue, node)
        return this;
      }
      previous = previous.next;
    }
    return this;
  }

  insertAfterValue(value, newValue) {
    let node = this.head;
     
    if (!this.head) {
      return null;
    }
    while (node) {
      if (node.data === value) {
        node.next = new Node(newValue, node.next)
        return this;
      }
      node = node.next;
    }
    return this;
  }
  
  insertAt(data, index) {
    if (!this.head) {
      return null;
    }
    if (index === 0) {
      this.head = new Node(data, this.head)
    }
    const previous = this.getAt(index - 1) || this.getLastNode();
    const node = new Node (data, previous.next)
    previous.next = node; 
  }

  listIncludes(value) {
    let node = this.head;
    if (!node) {
      return null;
    }
    if (node.data === value) {
      return true;
    }
    while (node) {
      if (node.data === value) {
        return true;
      }
      node = node.next;
    }
    return false;
  }

  toString() {
    let node = this.head;
    let array = [];
    let string = '';

    if (!node) {
      return (null)
    }

    // if (node.next === null) {
    //   string = `${node.data} -> NULL`
    //   return (string)
    // }

    while (node) {
      array.push(node.data)
      node = node.next;
    }
    array.forEach(element => {
      string = string.concat(`{${element}} -> `)
    })
    string = `${string}NULL`
    return string;
  }

  indexFromTail(index) {
  
    let length = this.sizeOf();
    let node = this.head;
    
    if(length === 1) {return('Length of list is 1')};
    if(index > length) {return('Value exceeds length')};
    if(index < 0) {return('Value is negative')};
    if(length === index) {return('Value and length of list are equal')};
    for (let i = 1; i < length - index; i++) {
      node = node.next;
    }
    return node;
  }
  
}
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

function zipLists(list, list2) {
  let zipped = new LinkedList();
  let currentA = list.head;
  let currentB = list2.head;
  let currentZipped = zipped.head;
  while (currentA && currentB) {
    if (currentZipped === null) {
      zipped.head = currentA;
      currentZipped = zipped.head;
      currentA = currentA.next;
    };
    currentZipped.next = currentB;
    currentB = currentB.next;
    currentZipped = currentZipped.next;
    currentZipped.next = currentA;
    currentA = currentA.next;
    currentZipped = currentZipped.next;
  }
  currentA ? currentZipped.next = currentA : currentZipped.next = currentB;
  return zipped;
}

// console.log('final result', zipLists(list, list2));

const show = {showHidden: false, depth: null}
// console.log(util.inspect(list, show))
// console.log(util.inspect(list2, show))

// console.log('string', list.toString());
// console.log('insert', list.insert(7));
// console.log('includes', list.listIncludes('e'));
// console.log('append at last', util.inspect(list.insertLast(12), show));
// console.log('insert before value', util.inspect(list.insertBeforeValue('b', 'z'), show));
// console.log('insert after value', util.inspect(list.insertAfterValue('a', '30'), show));
// console.log('kth index', list.indexFromTail(2));
// console.log('zipped list', util.inspect(zipLists(list, list2), show));

module.exports = {LinkedList, zipLists}