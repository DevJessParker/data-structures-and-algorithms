'use strict'

const {_mergeSort} = require('../mergesort.js');

describe('Merge Sort', () => {

  it('works', () => {
    expect(true).toBeTruthy();
  });

  it('should correctly implement a merge sort to return a sorted array', () => {
    const arr = [3, 1, 5, 9];
    const results = _mergeSort(arr);
    console.log('FOUR', results)
    expect(results).toEqual([1, 3, 5, 9])
  })

  it('should throw an error if the original array is empty', () => {
    const arr = [];
    const results = _mergeSort(arr);

    expect(results).toEqual('ERROR: Empty Array')
  })

  it('should sort an array with an odd length', () => {
    const arr = [3, 1, 5, 9, 2];
    const results = _mergeSort(arr);
    console.log('FIVE', results)
    expect(results).toEqual([1, 2, 3, 5, 9])
  })

})