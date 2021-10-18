'use strict';

const {_quickSort} = require('../quicksort.js')

describe('Quick Sort', () => {

  it('works', () => {
    expect(true).toBeTruthy();
  });

  it('should correctly implement a Quick Sort to return a sorted array', () => {
    const arr = [3, 1, 5, 9, 2];
    let end = arr.length - 1;
    const results = _quickSort(arr, 0, end);

    expect(results).toEqual([1, 2, 3, 5, 9])
  })

  it('should throw an error if the array is empty', () => {
    const arr = [];
    let end = arr.length - 1;
    const results = _quickSort(arr, 0, end);
    expect(results).toEqual('ERROR: Empty Array')
  })

})