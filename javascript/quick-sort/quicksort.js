'use strict';

function _quickSort (arr, start, end) {
  if (arr.length < 1) {
    return('ERROR: Empty Array');
  }
  if (start < end) {

    let position = partition(arr, start, end);

    _quickSort(arr, start, position - 1);
    _quickSort(arr, position + 1, end);
  }

  return(arr);
}

function partition(arr, start, end) {

  let initialPivot = arr[end];
  let newPivot = start - 1;

  for (let i = start; i <= end - 1; i++) {
    if(arr[i] <= initialPivot) {
      newPivot++
      swap(arr, i, newPivot)
    }
  }
  swap(arr, end, newPivot + 1)
  return(newPivot + 1)
}

function swap(arr, i, j) {

  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}



module.exports = { _quickSort }
