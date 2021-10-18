'use strict'


function _mergeSort(arr) {
  let n = arr.length
  if (n === 0) {return('ERROR: Empty Array')}
  if (n > 1) {
    console.log('ARRAY', arr);
    let mid = n / 2;
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, n);
    _mergeSort(left);
    _mergeSort(right);
    merge(left, right, arr)
  }
  return(arr)
}

function merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;
  console.log('LEFT', left);
  console.log('RIGHT', right);

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i]
      console.log('ARRAY IN PROGRESS', arr)
      i++
    } else {
      arr[k] = right[j];
      j++
    }
    k++
  }

  if (i === left.length) {
    for (let z = k; z < arr.length; z++){
      arr[z] = right[j];
      j++;
    }
  } else {
    for (let z = k; z < arr.length; z++){
      arr[z] = left[i];
      i++;
    }
  }
  console.log('MERGED', arr)
  return(arr)
}

module.exports = {_mergeSort}