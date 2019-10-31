'use strict';

const generators = require('../../lib/id-generators');

describe('id-generators', () => {
  it('should return a function', () => {
    const generator = generators.get();
    generator.should.be.a('function');
    const gen = generator({});
    gen.should.be.a('function');
    const id = gen();
    console.log(id);
    id.should.be.a('string');
  });

  describe('cuid', () => {
    it('should return a string with length is 25', () => {
      const generator = generators.get('cuid');
      generator.should.be.a('function');
      const gen = generator({});
      gen.should.be.a('function');
      const id = gen();
      console.log('      cuid: ' + id);
      id.should.be.a('string').have.lengthOf(25);
      id.substr(0, 1).should.eql('c');
    });
  });

  describe('cuid-slug', () => {
    it('should return a string with length is 7 to 10', () => {
      const generator = generators.get('cuid-slug');
      generator.should.be.a('function');
      const gen = generator({});
      gen.should.be.a('function');
      const id = gen();
      console.log('      cuid-slug: ' + id);
      id.should.be.a('string').have.lengthOf.within(7, 10);
    });
  });

  describe('nanoid', () => {
    it('should return a string with length is 21', () => {
      const generator = generators.get('nanoid');
      generator.should.be.a('function');
      const gen = generator({});
      gen.should.be.a('function');
      const id = gen();
      console.log('      nanoid: ' + id);
      id.should.be.a('string').have.lengthOf(21);
    });

    it('should return a string with a custom length', () => {
      const generator = generators.get('nanoid');
      generator.should.be.a('function');
      const gen = generator({size: 18});
      gen.should.be.a('function');
      const id = gen();
      console.log('      nanoid: ' + id);
      id.should.be.a('string').have.lengthOf(18);
    });
  });

  describe('nanoid-simple', () => {
    it('should return a string with length is 24', () => {
      const generator = generators.get('nanoid-simple');
      generator.should.be.a('function');
      const gen = generator({});
      gen.should.be.a('function');
      const id = gen();
      console.log('      nanoid-simple: ' + id);
      id.should.be.a('string').have.lengthOf(24);
    });

    it('should return a string with a custom length', () => {
      const generator = generators.get('nanoid-simple');
      generator.should.be.a('function');
      const gen = generator({size: 18});
      gen.should.be.a('function');
      const id = gen();
      console.log('      nanoid-simple: ' + id);
      id.should.be.a('string').have.lengthOf(18);
    });
  });

  describe('nanoid-lowercase', () => {
    it('should return a string with length is 26', () => {
      const generator = generators.get('nanoid-lowercase');
      generator.should.be.a('function');
      const gen = generator({});
      gen.should.be.a('function');
      const id = gen();
      console.log('      nanoid-lowercase: ' + id);
      id.should.be.a('string').have.lengthOf(26);
    });

    it('should return a string with a custom length', () => {
      const generator = generators.get('nanoid-lowercase');
      generator.should.be.a('function');
      const gen = generator({size: 18});
      gen.should.be.a('function');
      const id = gen();
      console.log('      nanoid-lowercase: ' + id);
      id.should.be.a('string').have.lengthOf(18);
    });
  });

  require('./seq');
  require('./prefix-seq');
  require('./date-seq');
});
