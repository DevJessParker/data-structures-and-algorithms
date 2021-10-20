'use strict';

const HashTable = require('../hashtable.js');
const Tree = require('../tree.js');
const {repeatedWord} = require('../repeat-word.js');
const {treeIntersect} = require('../hash-tree.js');
const {leftJoin} = require('../left-join.js')


describe('Hash Table', () => {

  it('works', () => {
    expect(true).toBeTruthy();
  });

  it('should add a key/value pair to the hash table', () => {
     let table = new HashTable(10);
     table.set('name', 'jess');
    
     expect(table.map[3].head.value).toEqual({'name': 'jess'});
  })

  it('should retrieve a value based on a key', () => {
     let table = new HashTable(10);
     table.set('baked', 'potato');
     let results = table.get('baked');
     expect(results).toEqual('potato');
  })

  it('should return null for a value that does not exist', () => {
    let table = new HashTable(10);
    table.set('baked', 'potato');
    let results = table.get('soup');
    expect(results).toEqual(null);
  })

  it('should handle a collision by appending a node', () => {
    let table = new HashTable(1);
    table.set('baked', 'potato');
    table.set('fried', 'chicken');
    
    expect(table.map[0].head.next.value).toEqual({'fried': 'chicken'});
  })

  it('should return a value from a bucket that has a collision', () => {
    let table = new HashTable(1);
    table.set('baked', 'potato');
    table.set('fried', 'chicken');
    let results = table.get('fried');
    expect(results).toEqual('chicken');
  })

  it('should successfully hash a key to an in-range value', () => {
    let table = new HashTable(10);
    let hash = table.hash('jess')

    let results;
    (hash >= 0 || hash <= 10) ? results = true : results = false;

    expect(results).toBeTruthy;
  })

  it('should return the first repeated word in a string', () => {
    const str = "do not do that"
    let results = repeatedWord(str);

    expect(results).toEqual('do');
  })

  it('should return the first repeated word in a string', () => {
    let tree1 = new Tree;
    let tree2 = new Tree;
    tree1.add(5)
    tree1.add(7)
    tree1.add(9)
    tree1.add(10)
    tree2.add(3)
    tree2.add(10)
    tree2.add(5)
    tree2.add(12);
  
    let results = treeIntersect(tree1, tree2);

    expect(results).toEqual([10, 5])

  })

  it('should return an array of words in a key -> synonym -> antonym format by right joining two hash tables', () => {
    let verify = [
      ["small", "tiny", "big"],
      ["fat", "curvy", "skinny"],
      ["large", "giant", "NULL"]
    ]

    let table1 = new HashTable(10);
    table1.set('small', 'tiny');
    table1.set('large', 'giant');
    table1.set('fat', 'curvy');

    let table2 = new HashTable(10);
    table2.set('small', 'big');
    table2.set('fat', 'skinny');

    let results = leftJoin(table1, table2)
    expect(results).toEqual(verify);
  })

})