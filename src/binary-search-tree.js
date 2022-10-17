const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.head = null;
  }

  root() {
    return this.head;
  }

  add(data) {
    this.head = addNode(this.head, data)
    
    function addNode(currentNode, data) {
      if (currentNode === null){
        return new Node(data);
      } 

      if (currentNode.data === data) {
        return currentNode;
      } else if (currentNode.data < data) {
        currentNode.right = addNode(currentNode.right, data);
      } else {
        currentNode.left  = addNode(currentNode.left, data);
      }
      return currentNode;
    }
  }

  has(data) {
    let currentNode = this.head;

    while (currentNode !== null) {
      if (data === currentNode.data) {
        return true;
      }else if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }

      if (currentNode === null) {
        return false;
      }
    }
    return false;
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let currentNode = this.head;

    while (currentNode) {
      if (!currentNode.left) {
        return currentNode.data;
      } else {
        currentNode = currentNode.left;
      }
    }
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};