module.exports = () => {
  it("Replaces nodes as expected",() => {
    let uut;
    let grandparent;
    let parent;
    let sibling;
    let leftChild;
    let rightChild;
    let newNode;

    uut = new BinaryNode({ value: 0 });
    grandparent = new BinaryNode({ value: 1 });
    parent = new BinaryNode({ value: 2 });
    sibling = new BinaryNode({ value: 3 });
    leftChild = new BinaryNode({ value: 4 });
    rightChild = new BinaryNode({ value: 5 });

    newNode = new BinaryNode({ value: 6 });

    grandparent.left = parent;
    parent.left = uut;
    parent.right = sibling;
    uut.left = leftChild;
    uut.right = rightChild;

    assert.notStrictEqual(newNode.parent,parent);
    assert.notStrictEqual(newNode.left,leftChild);
    assert.notStrictEqual(newNode.right,rightChild);
    assert.notStrictEqual(newNode.value,uut.value);

    newNode.replaceWith(uut);

    assert.strictEqual(newNode.parent,parent);
    assert.strictEqual(newNode.left,leftChild);
    assert.strictEqual(newNode.right,rightChild);
    assert.strictEqual(newNode.value,uut.value);
  });
};

