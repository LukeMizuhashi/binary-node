module.exports = () => {
  it("Returns null, an instance of BinaryNode, or undefined as expected",() => {
    let uut = new BinaryNode();
    let parent = new BinaryNode();
    let sibling = new BinaryNode();

    assert.strictEqual(uut.getSibling(),undefined); 

    parent.left = uut;
    assert.strictEqual(uut.getSibling(),null); 

    parent.right = sibling;
    assert.strictEqual(uut.getSibling(),sibling); 
    assert(uut.getSibling() instanceof BinaryNode); 

  });
};

