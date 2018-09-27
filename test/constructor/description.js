module.exports = () => {
  it("Does not throw error when no options object passed",() => {
    assert.doesNotThrow(() => {
      new BinaryNode();
    });
  });

 // it("Sets BinaryNode.compare from options.comparator appropriately",() => {
 //    let uut;
 //    let customComparator = () => {};

 //    uut = new BinaryNode();
 //    assert.strictEqual(uut.compare,BinaryNode.prototype.compare);
 //    assert.notStrictEqual(uut.compare,customComparator);

 //    uut = new BinaryNode({ comparator: customComparator });
 //    assert.strictEqual(uut.compare,customComparator);
 //    assert.notStrictEqual(uut.compare,BinaryNode.prototype.compare);
 // }); 

 // it("Sets BinaryNode.key from options.key appropriately",() => {
 //    let uut;

 //    uut = new BinaryNode();
 //    assert.strictEqual(uut.key,undefined);

 //    uut = new BinaryNode({ key: 'foo' });
 //    assert.strictEqual(uut.key,'foo');
 // }); 

 it("Defaults BinaryNode.parent to null",() => {
   let uut = new BinaryNode();
   assert.strictEqual(uut.parent,null);
 }); 

 it("Sets BinaryNode.left from options.left appropriately",() => {
    let uut;
    let leftChild = new BinaryNode();

    uut = new BinaryNode();
    assert.strictEqual(uut.left,null);

    uut = new BinaryNode({ left: leftChild });
    assert.strictEqual(uut.left,leftChild);
    assert.strictEqual(leftChild.parent,uut);
 }); 

 it("Sets BinaryNode.right from options.right appropriately",() => {
    let uut;
    let rightChild = new BinaryNode();

    uut = new BinaryNode();
    assert.strictEqual(uut.right,null);

    uut = new BinaryNode({ right: rightChild });
    assert.strictEqual(uut.right,rightChild);
    assert.strictEqual(rightChild.parent,uut);
 }); 

};

