'use strict';

//Reverse a string in several ways

function reverse1(str) {

  const arr = str.split('');
  
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  
  const results = arr.join('');
  return results

}

function reverse2(str) {

  let reversed = ''
  let arr = str.split('')

  while (arr.length) {
    const char = arr.pop();
    reversed = reversed.concat(char)
  }
  return reversed
}

module.exports = {reverse1, reverse2}