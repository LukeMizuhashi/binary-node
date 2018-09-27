module.exports = () => {
  it("Returns appropriate boolean values",() => {
    let uut = new BinaryNode();
    assert.strictEqual(uut.parent,null);
    assert.strictEqual(uut.isRoot(),true);

    let parent = new BinaryNode();
    parent.left = uut;
    assert.strictEqual(uut.parent,parent);
    assert.strictEqual(uut.isRoot(),false);
  });
};

