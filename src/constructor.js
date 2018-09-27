module.exports = class BinaryNode {
  constructor(options) {
    options = options || {};

    // TODO Move this to a OrderedBinaryNode
    //
    // if (options.comparator) {
    //   this.compare = options.comparator;
    //   this.compare.bind(this);
    // }
    // this.key = options.key; // Defaults to undefined

    this.allowsDuplicates = options.hasOwnProperty('allowsDuplicates') ?
        options.allowsDuplicates : false;

    if (this.allowsDuplicates) {
      this._value = [];
      this.value = options.value; // Defaults to empty array
    } else {
      this.value = options.value; // Defaults to undefined
    }

    this.parent = null; // Always default this.parent to null. Let the caller
                        // set this.parent indirectly by passing this BinaryNode
                        // instance to BinaryNode.left or BinaryNode.right on 
                        // the parent later

    this.left = options.left || null;
    this.right = options.right || null;
  }

  // TODO Move these to some tree structure
  //
  // isRoot() {
  //   return this.parent === null;
  // }

  // isLeaf() {
  //   return (this.left === null && this.right === null);
  // }

  set left(child) {
    if (this._left) {
      this._left.parent = null;
    }

    this._left = child;
    if (child) {
      child.parent = this;
    }
  }

  get left() {
    return this._left;
  }

  set right(child) {
    if (this._right) {
      this._right.parent = null;
    }

    this._right = child;
    if (child) {
      child.parent = this;
    }
  }

  get right() {
    return this._right;
  }

  isLeftChild() {
    let result = false
    if (this.parent) {
      result = this.parent.left === this;
    }
    return result;
  }

  isRightChild() {
    let result = false
    if (this.parent) {
      result = this.parent.right === this;
    }
    return result;
  }

  getSibling() {
    let sibling = undefined;
    if (this.isLeftChild()) {
      sibling = this.parent.right;
    } else if(this.isRightChild()) {
      sibling = this.parent.left;
    }
    return sibling;
  }

  rotateLeft() {
    if (!this.isRightChild()) {
      throw new Error(
        'Can not rotate left: node is not the right child of its parent.'
      );
    }

    let oldParent = this.parent;
    let grandParent = oldParent.parent;
    let wasLeftGrandChild = oldParent.isLeftChild();
    let movingNode = this.left;

    this.left = oldParent;
    oldParent.right = movingNode;

    if (grandParent) {
      this.parent = grandParent;
      if (wasLeftGrandChild) {
        grandParent._left = this;
      } else {
        grandParent._right = this;
      }
    } else {
      this.parent = null;
    }
  }

  rotateRight() {
    if (!this.isLeftChild()) {
      throw new Error(
        'Can not rotate right: node is not a left child of its parent.'
      );
    }

    let oldParent = this.parent;
    let grandParent = oldParent.parent;
    let wasLeftGrandChild = oldParent.isLeftChild();
    let movingNode = this.right;

    this.right = oldParent;
    oldParent.left = movingNode;

    if (grandParent) {
      this.parent = grandParent;
      if (wasLeftGrandChild) {
        grandParent._left = this;
      } else {
        grandParent._right = this;
      }
    } else {
      this.parent = null;
    }
  }

  isolate() {
    if (this.left) {
      this.left.parent = null;
      this.left = new BinaryNode();
    }

    if (this.right) {
      this.right.parent = null; 
      this.right = new BinaryNode();
    }

    if (this.parent) {

      const leafNode = new BinaryNode();

      if (this.isLeftChild()) {
        this.parent.left = leafNode;
      } else {
        this.parent.right = leafNode;
      }
    }
  }

  set value(value) {
    if (this.allowsDuplicates) {
      this._value.push(value);
    } else {
      this._value = value;
    }
  }

  get value() {
    return this._value;
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

  // TODO Move to OrderedBinaryNode
  //
  // compare(key) {
  //   if (key < this.key) {
  //     return -1;
  //   } else if (key == this.key) {
  //     return 0;
  //   } else if (key > this.key) {
  //     return 1;
  //   } else {
  //     throw new Error(
  //       `${key} is neither less than, greater than, nor equal to ${this.key}`
  //     );
  //   }
  // }

};

