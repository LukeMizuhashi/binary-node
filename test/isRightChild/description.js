module.exports = () => {
  it("Returns expected boolean values",() => {
    let grandparent = new BinaryNode();
    let parent = new BinaryNode();
    let uncle = new BinaryNode();
    let thisNode = new BinaryNode();
    let leftChild = new BinaryNode();
    let rightChild = new BinaryNode();

    grandparent.left = parent;
    grandparent.right = uncle;

    parent.left = thisNode;

    thisNode.left = leftChild;
    thisNode.right = rightChild;


    // assert.strictEqual(parent.isLeftChild(),true);
    assert.strictEqual(uncle.isRightChild(),true);

    // assert.strictEqual(thisNode.isLeftChild(),true);

    // assert.strictEqual(leftChild.isLeftChild(),true);
    assert.strictEqual(rightChild.isRightChild(),true);
  });
};

