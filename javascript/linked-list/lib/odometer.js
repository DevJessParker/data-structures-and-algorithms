'use strict'

const LinkedList = require('./list.js');


function odometer(LL) {

  LL.reverse();
  let current = LL.head;

  while(current) {
    if (current.data < 9) {
      current.data++
      break;
    } else if (current.data === 9) {
      current.data = 0;
      current = current.next;
    }
  }
  // EDGE CASE CODE
  if (current.data === 0 && current.next === null) {
    current.next = LL.append(1);
  }
  //if we've reached the tail node AND the value of the tail is zero, we need to instantiate a new Node as the new tail with an initial value of 1, since it's carrying over the ten place value.

  //A tail node will ONLY have a data value of 0 in the case of incrementing alist of the following edge case: 9 -> 9 -> 9 -> 9 
  //If the below conditional is met, we will have incremented to:
  // 0 -> 0 -> 0 -> 0 but we will have run out of existing nodes with which to carry over our ten place value.
  // Therefore, we instantiate a new tail node with a default data value of 1 like so 0 -> 0 -> 0 -> 0 -> 1

  //This new tail node will become our head node when we reverse the LL to its original direction, giving us the correct odometer value order of: 1 -> 0 -> 0 -> 0 -> 0

  LL.reverse();
  return LL;
}

module.exports = {odometer}