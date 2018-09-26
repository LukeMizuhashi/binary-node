global.BinaryNode = require('../src/constructor.js');
global.assert = require('chai').assert;

const describeConstructor = require('./constructor/description.js');
const describeIsLeaf = require('./isLeaf/description.js');
const describeDestroy = require('./destroy/description.js');
const describeReplaceWith = require('./replaceWith/description.js');
const describeSet = require('./set/description.js');
const describeCompare = require('./compare/description.js');

describe('BinaryNode',() => {

  describeConstructor();
  describe('BinaryNode.isLeaf',describeIsLeaf);
  describe('BinaryNode.destroy',describeDestroy);
  describe('BinaryNode.replaceWith',describeReplaceWith);
  describe('BinaryNode.set',describeSet);
  describe('BinaryNode.compare',describeCompare);
});

