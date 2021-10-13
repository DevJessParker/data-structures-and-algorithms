'use strict';

function _quickSort (arr, start, end) {
  
  if (start < end) {

    const position = partition(arr, start, end);

    _quickSort(arr, start, position - 1);
    _quickSort(arr, position + 1, end);
  }
}

function partition(arr, start, end) {

  const initialPivot = arr[end];
  const newPivot = start - 1;

  for (i = start; i <= end - 1; i++) {
    if(arr[i] <= initialPivot) {
      newPivot++
      swap(arr, i, newPivot)
    }
  }
  swap(arr, right, newPivot + 1)
  return(newPivot + 1)
}

function swap(arr, i, j) {
  const temp;
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const arr = [8, 4, 23, 42, 16, 15];

const results = _quickSort(arr, 0, 5);
console.log(results);

module.exports = { _quickSort, swap, partition }
