'use strict';

function leftJoin(hm1, hm2) {
  let results = [];
  
  for (let i = 0; i < hm1.map.length; i++) {
    console.log('HASH ONE', hm1.map)

    let node = (hm1.map[i] ? hm1.map[i].head : null) 
    
    while(node) {
      let key = Object.keys(node.value)[0];
      if (hm2.has(key)) {
        results.push([key, hm1.get(key), hm2.get(key)])
      } else {
        results.push([key, hm1.get(key), "NULL"])
      }
     node = node.next
    }
  }

  console.log('***', results)

  return results
}

module.exports = {leftJoin}