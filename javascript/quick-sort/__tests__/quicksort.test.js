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
  let temp;
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const array = [8,4,23,42,16,15];

describe('Quick Sort', () => {
  
  it('should sort an array from smallest to greatest value', () => {
    const results = _quickSort(array, 0, 6);
    expect(results).toBe([8,4,23,42,16,15])
  })
})