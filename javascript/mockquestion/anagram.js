'use strict' 

function anagram(str1, str2) {

  //Since anagrams are scrambles of one another, they have to be the exact same length.
  if (str1.length != str2.length) {return false}

  //Sort both for comparison in a loop.
  str1.sort();
  str2.sort();

  // Now that our logic has verified they're the same length and now that both have been sorted, they should be identical at each index.
  for (let i = 0; i < str1.length; i++) {
    if (str1[i].toLowerCase() !== str2[i].toLowerCase())
    return false
  }
  return true
}

module.exports = {anagram}