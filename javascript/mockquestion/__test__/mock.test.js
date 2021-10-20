'use strict';

const {anagram} = require ('../anagram.js') 
const {reverse1, reverse2} = require ('../reverse.js')

describe('Mock Interview', () => {

  it('should compare two strings to see if they are anagrams and return a boolean value', () => {
    const str1 = "I am Lord Voldemort"
    const str2 = "Tom Marvolo Riddle"

    let results = anagram(str1, str2)
    expect(results).toBeTruthy
  })

  it('should reverse a string using reverse1', () => {
    const str = "Code Fellows"
    
    let results = reverse1(str)
    expect(results).toEqual("swolleF edoC")
  })

  it('should reverse a string using reverse2', () => {
    const str = "Code Fellows"
    
    let results = reverse2(str)
    expect(results).toEqual("swolleF edoC")
  })

})