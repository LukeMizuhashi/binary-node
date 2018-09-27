module.exports = () => {
  it("Returns appropriate boolean values",() => {
    let uut = new BinaryNode();
    assert.strictEqual(uut.isLeaf(),true);

    uut.set = 1;
    assert.strictEqual(uut.isLeaf(),false);
  });
};

