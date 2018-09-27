module.exports = () => {
  it("Does not throw if no left child",() => {
    let parent;
    let thisNode;
    let leftChild;

    parent = new BinaryNode();
    thisNode = new BinaryNode();
    leftChild = new BinaryNode();

    parent.left = thisNode;
    thisNode.left = leftChild;

    assert.doesNotThrow(() => {
      thisNode.rotateRight();
    });
    assert.strictEqual(thisNode.right,parent);
    assert.strictEqual(parent.parent,thisNode);
    assert.strictEqual(thisNode.parent,null);

    parent = new BinaryNode();
    thisNode = new BinaryNode();

    parent.left = thisNode;

    assert.doesNotThrow(() => {
      thisNode.rotateRight();
    });
    assert.strictEqual(thisNode.right,parent);
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
      thisNode.rotateRight();
    });

    thisNode = new BinaryNode();
    rightChild = new BinaryNode();

    thisNode.right = rightChild;

    assert.throw(() => {
      thisNode.rotateRight();
    });

    thisNode = new BinaryNode();

    assert.throw(() => {
      thisNode.rotateRight();
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

    parent.left= thisNode;
    parent.right= sibling;

    thisNode.left = leftChild;
    thisNode.right = rightChild;

    thisNode.rotateRight();

    assert.strictEqual(thisNode.left,leftChild);
    assert.strictEqual(thisNode.right,parent);
    assert.strictEqual(thisNode.parent,grandParent);

    assert.strictEqual(parent.left,rightChild);
    assert.strictEqual(parent.right,sibling);
    assert.strictEqual(parent.parent,thisNode);

    assert.strictEqual(leftChild.parent,thisNode);
    assert.strictEqual(rightChild.parent,parent);
    assert.strictEqual(sibling.parent,parent);



    // grandParent = new BinaryNode();
    parent = new BinaryNode();
    thisNode = new BinaryNode();
    sibling = new BinaryNode();
    leftChild = new BinaryNode();
    rightChild = new BinaryNode();

    // grandParent.right = parent;

    parent.left= thisNode;
    parent.right= sibling;

    thisNode.left = leftChild;
    thisNode.right = rightChild;

    thisNode.rotateRight();

    assert.strictEqual(thisNode.left,leftChild);
    assert.strictEqual(thisNode.right,parent);
    assert.strictEqual(thisNode.parent,null);

    assert.strictEqual(parent.left,rightChild);
    assert.strictEqual(parent.right,sibling);
    assert.strictEqual(parent.parent,thisNode);

    assert.strictEqual(leftChild.parent,thisNode);
    assert.strictEqual(rightChild.parent,parent);
    assert.strictEqual(sibling.parent,parent);
  });
};

