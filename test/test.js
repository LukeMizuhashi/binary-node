global.BinaryNode = require('../src/constructor.js');
global.assert = require('chai').assert;

const describeConstructor = require('./constructor/description.js');
const describeLeft = require('./left/description.js');
const describeRight = require('./right/description.js');
const describeIsLeftChild = require('./isLeftChild/description.js');
const describeIsRightChild = require('./isRightChild/description.js');
const describeGetSibling = require('./getSibling/description.js');
const describeRotateLeft = require('./rotateLeft/description.js');
const describeRotateRight = require('./rotateRight/description.js');
const describeIsolate = require('./isolate/description.js');

describe('BinaryNode',() => {

  describeConstructor();
  describe('BinaryNode.left',describeLeft);
  describe('BinaryNode.right',describeRight);
  describe('BinaryNode.isLeftChild',describeIsLeftChild);
  describe('BinaryNode.isRightChild',describeIsRightChild);
  describe('BinaryNode.getSibling',describeGetSibling);
  describe('BinaryNode.rotateLeft',describeRotateLeft);
  describe('BinaryNode.rotateRight',describeRotateRight);
  describe('BinaryNode.isolate',describeIsolate);
});

