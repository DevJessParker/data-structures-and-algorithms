'use strict';

const Node = require('../node.js');
const Stack = require('../stack.js');
const Queue = require('../queue.js');


describe('Stacks and Queues', () => {

  it('should push node onto a stack', () => {
    let stack = new Stack();
    const results = stack.push(5);
    console.log(results)
    expect(results.stack.head.data).toBe(5);
  })

  it('should push multiple values onto a stack', () => {
    let stack = new Stack();
    stack.push(5);
    stack.push(4);
    stack.push(3);
    expect(stack.stack.head.data).toEqual(3);
  })

  it('can pop off the stack', () => {
    let stack = new Stack();
    stack.push(5);
    stack.push(4);
    stack.push(3);
    stack.pop();
    expect(stack.stack.head.data).toEqual(4);
  })

  it('can empty a stack after multiple pops', () => {
    let stack = new Stack();
    stack.push(5);
    stack.push(4);
    stack.pop();
    stack.pop();
    expect(stack.length).toEqual(0);
  })

  it('can peek the next item on the stack', () => {
    let stack = new Stack();
    stack.push(5);
    stack.push(4);
    let peekData = stack.peek();
    expect(peekData).toEqual(4);
  })

  it('can instantiate an empty stack', () => {
    const emptyStack = new Stack();

    expect(emptyStack.stack.head).toEqual(null);
  })

  it('will raise exception when calling pop or peek on empty stack', () => {
    const stack = new Stack();
    let error = stack.peek();
    expect(error).toBe('Stack is empty.')
  })

  xit('can enqueue into a queue', () => {

  })

  xit('can enqueue nultiple nodes into a queue', () => {

  })

  xit('can dequeue a given value out of a queue', () => {

  })

  xit('can peek into a queue and see correctly target value', () => {

  })

  xit('can empty a queue by calling dequeue multiple times', () => {

  })

  it('can instantiate an empty queue', () => {
    const emptyQueue = new Queue();

    expect(emptyQueue.front).toEqual(null);
  })

  xit('will raise exception when calling enqueue or dequeue on empty queue', () => {

  })

})