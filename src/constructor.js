module.exports = class BinaryNode {
  constructor(options) {
    options = options || {};

    this.allowsDuplicates = options.hasOwnProperty('allowsDuplicates') ?
        options.allowsDuplicates : false;

    if (options.comparator) {
      this.compare = options.comparator;
      this.compare.bind(this);
    }

    this.key = options.key; // Defaults to undefined
    this.value = options.value || null;

    this.left = options.left || null;
    this.right = options.right|| null;
    this.parent = options.parent || null;
  }

  isLeaf() {
    return this.value === null;
  }

  destroy() {
    if (this.isLeaf()) {
      throw new Error(
        'Called BinaryNode.destroy on a leaf node. Leaf nodes can only be '
      + 'converted to non-leaf nodes by setting their value via calling '
      + 'BinaryNode.set'
      );
    }

    if (this.left) {
      this.left.parent = new BinaryNode({
        copmarator: this.compare,
        allowsDuplicates: this.allowsDuplicates,
      });
    }

    if (this.right) {
      this.left.parent = new BinaryNode({
        copmarator: this.compare,
        allowsDuplicates: this.allowsDuplicates,
      });
    }

    if (this.parent) {
      const leafNode = new BinaryNode({
        copmarator: this.compare,
        allowsDuplicates: this.allowsDuplicates,
      });
      if (this.parent.left === this) {
        this.parent.left = leafNode;
      } else {
        this.parent.right = leafNode;
      }
    }

    delete this;
  }

  replaceWith(replacementNode) {
    const left = this.left;
    const right = this.right;
    Object.keys(replacementNode).forEach((key) => {
      this[key] = replacementNode[key];
    });
    this.left = left;
    this.right = right;
  }

  isRightChild() {
    let result = false
    if (this.parent) {
      result = this.parent.right === this;
    }
    return result;
  }

  isLeftChild() {
    let result = false
    if (this.parent) {
      result = this.parent.left === this;
    }
    return result;
  }

  rotateRight() {
    if (!this.isLeftChild()) {
      throw new Error(
        'Can not rotate right: node is not a left child of its parent.'
      );
    }

    let oldParent = this.parent;
    let movingNode = this.right;

    oldParent.parent = this;
    oldParent.left = movingNode;
    this.right = oldParent;
  }

  rotateLeft() {
    if (!this.isRightChild()) {
      throw new Error(
        'Can not rotate left: node is not a right child of its parent.'
      );
    }

    let oldParent = this.parent;
    let movingNode = this.left;

    oldParent.parent = this;
    oldParent.right = movingNode;
    this.left = oldParent;
  }

  getSibling() {
    let sibling = null;
    if (this.parent) {
      if (this.parent.left === this) {
        sibling = this.parent.right;
      } else {
        sibling = this.parent.left;
      }
    }
    return sibling;
  }

  set(...args) {

    let key = undefined;
    let value = undefined;
    if (args.length == 1) {
      key = null;
      value = args[0];
    } else if (args.length == 2) {
      key = args[0];
      value = args[1];
    } else {
      throw new Error(
        'BinaryNode.set must be called as either BinaryNode.set(value) or '
      + 'BinaryNode.set(key,value)'
      );
    }

    if (key !== undefined && key !== null) {
      if (!this.isLeaf()) {
        throw new Error('Can not set key of non-leaf BinaryNode.');
      }
      this.key = key;
    }

    if (this.isLeaf()) {
      this.left= new BinaryNode({
        allowsDuplicates: this.allowsDuplicates,
        comparator: this.compare,
      });
      this.left.parent = this;

      this.right = new BinaryNode({
        allowsDuplicates: this.allowsDuplicates,
        comparator: this.compare,
      });
      this.right.parent = this;
      
      if (this.allowsDuplicates) {
        this.value = [];
      }
    }

    if (this.allowsDuplicates) {
      this.value.push(value);
    } else {
      this.value = value;
    }
  }

  compare(key) {
    if (key < this.key) {
      return -1;
    } else if (key == this.key) {
      return 0;
    } else if (key > this.key) {
      return 1;
    } else {
      throw new Error(
        `${key} is neither less than, greater than, nor equal to ${this.key}`
      );
    }
  }

};

