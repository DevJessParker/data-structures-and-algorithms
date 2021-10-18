'use strict'


function breadthFirst(tree) {
  let queue = [tree.root];
  let allValues = [];

  while (queue.length > 0) {
    let node = queue.shift();
    console.log('QUEUE', node);
    console.log('PENDING', queue);
    allValues.push(node.value);
    if (node.left) {
      queue.push(node.left)
    }
    if (node.right) {
      queue.push(node.right)
    }
  }
  return allValues
}

module.exports = { breadthFirst }