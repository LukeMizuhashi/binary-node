module.exports = () => {
  it("Sets and gets BinaryNode.value as expected",() => {
    let uut;
    let value;

    uut = new BinaryNode(); 
    assert(!Array.isArray(uut.value));
    value = 'apple';
    uut.value = value;
    assert(!Array.isArray(uut.value));
    assert.strictEqual(uut.value,value);


    uut = new BinaryNode(); 
    assert(!Array.isArray(uut.value));
    value = ['apple'];
    uut.value = value;
    assert(Array.isArray(uut.value));
    assert.strictEqual(uut.value,value);


    uut = new BinaryNode(); 
    assert(!Array.isArray(uut.value));
    value = 'orange';
    uut.value = ['apple'];
    uut.value = value;
    assert(!Array.isArray(uut.value));
    assert.strictEqual(uut.value,value);




    const options = { allowsDuplicates: true };
    uut = new BinaryNode(options); 
    assert(Array.isArray(uut.value));
    value = 'apple';
    uut.value = value;
    assert(Array.isArray(uut.value));
    assert.strictEqual(uut.value[0],value);


    uut = new BinaryNode(options); 
    assert(Array.isArray(uut.value));
    value = ['apple'];
    uut.value = value;
    assert(Array.isArray(uut.value));
    assert.strictEqual(uut.value[0],value);


    uut = new BinaryNode(options); 
    assert(Array.isArray(uut.value));
    value = 'orange';
    let otherValue = ['apple'];
    uut.value = otherValue;
    uut.value = value;
    assert(Array.isArray(uut.value));
    assert.strictEqual(uut.value[0],otherValue);
    assert.strictEqual(uut.value[1],value);
  });
};

