module.exports = () => {
  it("Sets and gets BinaryNode.right as expected",() => {
    let uut;

    uut = new BinaryNode();
    assert.strictEqual(uut.right,null);

    uut = new BinaryNode();
    let rightChild = new BinaryNode();
    uut.right = rightChild;
    assert.strictEqual(uut.right,rightChild);
    assert.strictEqual(rightChild.parent,uut);
  });
};

