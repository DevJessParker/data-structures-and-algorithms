'use strict';

const HashTable = require('../hashtable.js');


describe('Hash Table', () => {

  it('works', () => {
    expect(true).toBeTruthy();
  });

  it('should add a key/value pair to the hash table', () => {
     let table = new HashTable(10);
     table.set('name', 'jess');
     console.log('TABLE', table.map)
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
    console.log(table.map)
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

})