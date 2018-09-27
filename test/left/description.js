module.exports = () => {
  it("Sets and gets BinaryNode.left as expected",() => {
    let uut;

    uut = new BinaryNode();
    assert.strictEqual(uut.left,null);

    uut = new BinaryNode();
    let leftChild = new BinaryNode();
    uut.left = leftChild;
    assert.strictEqual(uut.left,leftChild);
    assert.strictEqual(leftChild.parent,uut);
  });
};

