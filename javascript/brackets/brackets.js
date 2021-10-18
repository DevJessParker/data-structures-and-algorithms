'use strict'

function isOdd(num) {
  const remainder = num % 2
  let status;
  remainder > 0 ? status = 'odd' : status = 'even'

  return status
}


function validateBrackets(str) {

  let results = {

  curlyQueue: [],
  roundQueue: [],
  squareQueue: [],
  balancedCurly: '',
  balancedRound: '',
  balancedSquare: ''
  }
  const strArr = [...str];

  for (let i = 0; i < strArr.length; i++) {

   if (strArr[i] === '{') {
     results.curlyQueue.push(strArr[i])
     results.balancedCurly = false;
     console.log(results)
    };

   if (strArr[i] === '(') {
     results.roundQueue.push(strArr[i])
     results.balancedRound = false;
     console.log(results)
    };

   if (strArr[i] === '[') {
     results.squareQueue.push(strArr[i])
     results.balancedSquare = false;
     console.log(results)
    };

   if (strArr[i] === '}' && results.curlyQueue.length === 1) {
     results.curlyQueue.push(strArr[i]);
     results.balancedCurly = true;
     console.log(results)
     results.curlyQueue = [];
   };

   if (strArr[i] === ']' && results.squareQueue.length === 1) {
    results.squareQueue.push(strArr[i]);
    results.balancedSquare = true;
    console.log(results)
    results.squareQueue = [];
   };

   if (strArr[i] === ')' && results.roundQueue.length === 1) {
    results.roundQueue.push(strArr[i]);
    results.balancedRound = true;
    console.log(results)
    results.roundQueue = [];
   };


  }

  if (results.balancedCurly === false || results.balancedRound === false || results.balancedSquare === false) {
    console.log('String is not balanced', `${str}`);
    return false
  } else {
    console.log('String is balanced', `${str}`);
    return true
  }
  
}



module.exports = { validateBrackets, isOdd }