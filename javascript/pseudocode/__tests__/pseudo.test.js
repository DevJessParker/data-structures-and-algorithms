'use strict';

const {insertionSort} = require('../insertionsort/insertionsort.js')

describe('Linked List', () => {

  it('works', () => {
    expect(true).toBeTruthy();
  });

  it('should correctly implement an insertionSort to return a sorted array', () => {
    const arr = [3, 1, 5, 9, 2];
    const results = insertionSort(arr);

    expect(results).toEqual([1, 2, 3, 5, 9])
  })

})