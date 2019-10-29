'use strict';

const generators = require('../../lib/id-generators');

describe('prefix-seq', () => {
  it('should return a string with an empty prefix', () => {
    const generator = generators.get('prefix-seq');
    generator.should.be.a('function');
    const gen = generator({});
    gen.should.be.a('function');
    const id = gen();
    console.log('      id: ' + id);
    id.should.be.a('string').match(/^\d+/);
    parseInt(id, 10).should.be.a('number').not.be.NaN;
  });

  it('should return a string with a prefix', () => {
    const generator = generators.get('prefix-seq');
    generator.should.be.a('function');
    const gen = generator({prefix: 'items-'});
    gen.should.be.a('function');
    const id = gen();
    console.log('      id: ' + id);
    id.should.be.a('string').match(/^items-\d+/);
  });

  it('should return a string with seq is 99', () => {
    const generator = generators.get('prefix-seq');
    generator.should.be.a('function');
    const gen = generator({prefix: 'items-', start: 99});
    gen.should.be.a('function');
    const id = gen();
    console.log('      id: ' + id);
    id.should.be.a('string').match(/^items-\d+/);
    id.should.eql('items-99');
  });

  it('should return a string with length is 10', () => {
    const generator = generators.get('prefix-seq');
    generator.should.be.a('function');
    const gen = generator({prefix: 'items-', size: 4});
    gen.should.be.a('function');
    const id = gen();
    console.log('      id: ' + id);
    id.should.be.a('string').match(/^items-\d+/).have.lengthOf(10);
  });

  it('should return a string with length is 10', () => {
    const generator = generators.get('prefix-seq');
    generator.should.be.a('function');
    const gen = generator({prefix: 'items-', size: 4, start: 99});
    gen.should.be.a('function');
    const id = gen();
    console.log('      id: ' + id);
    id.should.be.a('string').match(/^items-\d+/).have.lengthOf(10);
    id.should.eql('items-0099');
  });

  it('should return a string with seq start from 1', () => {
    const generator = generators.get('prefix-seq');
    generator.should.be.a('function');
    const gen = generator({prefix: 'items-', size: 'a NaN', start: 'a NaN'});
    gen.should.be.a('function');
    const id = gen();
    console.log('      id: ' + id);
    id.should.be.a('string').match(/^items-\d+/);

    const gen2 = generator({prefix: 'items-', size: 1, start: 1});
    const id2 = gen2();
    id.should.eql(id2);
  });
});
