'use strict';

const { html } = require("cheerio");
const HashTable = require("./hashtable");

function treeIntersect(tree1, tree2) {

  let table = new HashTable(10);
  let commonValues = [];

  const fillHashTable = () => {
    let _walk = (node) => {
      if (node.left) _walk(node.left);
      table.set(node.value.toString(), node.value);
      if (node.right) _walk(node.right);
    }
    _walk(tree1.root)
  }
  
  fillHashTable(tree1.root, table);

  const checkValue = () => {
    let _walk = (node) => {
      if (table.has(node.value.toString())) {commonValues.push(node.value)}
      if (node.left) _walk(node.left)
      if (node.right) _walk(node.right)
    }
    _walk(tree2.root)
  }

  checkValue(tree2)
  return commonValues;

}

module.exports = {treeIntersect}