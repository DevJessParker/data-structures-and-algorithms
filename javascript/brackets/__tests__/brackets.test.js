'use strict';

const util = require('util');
const {isOdd, validateBrackets} = require('../brackets.js');

let string1 = '{}(){}'
let string2 = '{n(){}'

describe('Brackets', () => {

  it('works', () => {
    expect(true).toBeTruthy();
  });

  it('should result in a boolean output', () => {
    const result = validateBrackets(string1);
    expect(typeof result).toBe('boolean');
  })

  it('should assess whether a number is even or odd', () => {
    let result1 = isOdd(3);
    let result2 = isOdd(2)
    expect(result1).toBe('odd');
    expect(result2).toBe('even');
  })

  it('should return true if brackets in a string are balanced', () => {
    let result = validateBrackets(string1)
    expect(result).toBe(true);
  })

  it('should return false if brackets in a string are not balanced', () => {
    let result = validateBrackets(string2)
    expect(result).toBe(false);
  })
  
})

