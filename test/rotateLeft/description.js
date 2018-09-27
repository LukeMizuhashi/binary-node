module.exports = () => {
  it("Does not throw if no left child",() => {
    let parent;
    let thisNode;
    let rightChild;

    parent = new BinaryNode();
    thisNode = new BinaryNode();
    rightChild = new BinaryNode();

    parent.right = thisNode;
    thisNode.right = rightChild;

    assert.doesNotThrow(() => {
      thisNode.rotateLeft();
    });
    assert.strictEqual(thisNode.left,parent);
    assert.strictEqual(parent.parent,thisNode);
    assert.strictEqual(thisNode.parent,null);

    parent = new BinaryNode();
    thisNode = new BinaryNode();

    parent.right = thisNode;

    assert.doesNotThrow(() => {
      thisNode.rotateLeft();
    });
    assert.strictEqual(thisNode.left,parent);
    assert.strictEqual(parent.parent,thisNode);
    assert.strictEqual(thisNode.parent,null);
  });

  it("Throws if node is not a child",() => {
    let thisNode;
    let leftChild;
    let rightChild;

    thisNode = new BinaryNode();
    leftChild = new BinaryNode();
    rightChild = new BinaryNode();

    thisNode.left = leftChild;
    thisNode.right = rightChild;

    assert.throw(() => {
      thisNode.rotateLeft();
    });

    thisNode = new BinaryNode();
    rightChild = new BinaryNode();

    thisNode.right = rightChild;

    assert.throw(() => {
      thisNode.rotateLeft();
    });

    thisNode = new BinaryNode();

    assert.throw(() => {
      thisNode.rotateLeft();
    });
  });

  it("Changes data structure as expected",() => {
    let grandParent;
    let parent;
    let thisNode;
    let sibling;
    let leftChild;
    let rightChild;

    grandParent = new BinaryNode();
    parent = new BinaryNode();
    thisNode = new BinaryNode();
    sibling = new BinaryNode();
    leftChild = new BinaryNode();
    rightChild = new BinaryNode();

    grandParent.right = parent;

    parent.left = sibling;
    parent.right = thisNode;

    thisNode.left = leftChild;
    thisNode.right = rightChild;

    thisNode.rotateLeft();

    assert.strictEqual(thisNode.right,rightChild);
    assert.strictEqual(thisNode.left,parent);
    assert.strictEqual(thisNode.parent,grandParent);

    assert.strictEqual(parent.right,leftChild);
    assert.strictEqual(parent.left,sibling);
    assert.strictEqual(parent.parent,thisNode);

    assert.strictEqual(leftChild.parent,parent);
    assert.strictEqual(rightChild.parent,thisNode);
    assert.strictEqual(sibling.parent,parent);



    // grandParent = new BinaryNode();
    parent = new BinaryNode();
    thisNode = new BinaryNode();
    sibling = new BinaryNode();
    leftChild = new BinaryNode();
    rightChild = new BinaryNode();

    // grandParent.right = parent;

    parent.left= sibling;
    parent.right= thisNode;

    thisNode.left = leftChild;
    thisNode.right = rightChild;

    thisNode.rotateLeft();

    assert.strictEqual(thisNode.right,rightChild);
    assert.strictEqual(thisNode.left,parent);
    assert.strictEqual(thisNode.parent,null);

    assert.strictEqual(parent.right,leftChild);
    assert.strictEqual(parent.left,sibling);
    assert.strictEqual(parent.parent,thisNode);

    assert.strictEqual(leftChild.parent,parent);
    assert.strictEqual(rightChild.parent,thisNode);
    assert.strictEqual(sibling.parent,parent);
  });
};

