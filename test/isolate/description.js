const getMemoryUsage = require('process').memoryUsage;

module.exports = () => {
  it("Isolates instance from parent and child nodes as expected",() => {
    let parent;
    let leftChild;
    let rightChild;
    let uut;

    parent = new BinaryNode();
    leftChild = new BinaryNode();
    rightChild = new BinaryNode();
    uut = new BinaryNode();

    parent.left = uut;
    uut.left = leftChild;
    uut.right = rightChild;

    uut.isolate();

    assert.strictEqual(uut.parent,null);
    assert.notStrictEqual(uut.left,leftChild);
    assert.notStrictEqual(uut.right,rightChild);

    assert.notStrictEqual(parent.left,uut);

    assert.notStrictEqual(leftChild.parent,uut);
    assert.notStrictEqual(rightChild.parent,uut);

    assert.strictEqual(leftChild.parent,null);
    assert.strictEqual(rightChild.parent,null);
  });
};

