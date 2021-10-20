'use strict';

const {anagram} = require ('../anagram.js') 

describe('Mock Interview', () => {

  it('should compare two strings to see if they are anagrams and return a boolean value', () => {
    const str1 = "I am Lord Voldemort"
    const str2 = "Tom Marvolo Riddle"

    let results = anagram(str1, str2)
    expect(results).toBeTruthy
  })
})