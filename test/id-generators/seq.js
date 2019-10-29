'use strict';

const generators = require('../../lib/id-generators');

describe('seq', () => {
  it('should return a string', () => {
    const generator = generators.get('seq');
    generator.should.be.a('function');
    const gen = generator({});
    gen.should.be.a('function');
    const id = gen();
    console.log('      id: ' + id);
    id.should.be.a('string');
    parseInt(id, 10).should.be.a('number').not.be.NaN;
  });

  it('should return a string with length is 2', () => {
    const generator = generators.get('seq');
    generator.should.be.a('function');
    const gen = generator({start: 99});
    gen.should.be.a('function');
    const id = gen();
    console.log('      id: ' + id);
    id.should.be.a('string').have.lengthOf(2);
    id.should.eql('99');
    parseInt(id, 10).should.be.a('number').not.be.NaN;
  });

  it('should return a string with length is 4', () => {
    const generator = generators.get('seq');
    generator.should.be.a('function');
    const gen = generator({size: 4});
    gen.should.be.a('function');
    const id = gen();
    console.log('      id: ' + id);
    id.should.be.a('string').have.lengthOf(4);
    parseInt(id, 10).should.be.a('number').not.be.NaN;
  });

  it('should return a string with length is 4', () => {
    const generator = generators.get('seq');
    generator.should.be.a('function');
    const gen = generator({size: 4, start: 99});
    gen.should.be.a('function');
    const id = gen();
    console.log('      id: ' + id);
    id.should.be.a('string').have.lengthOf(4);
    id.should.eql('0099');
    parseInt(id, 10).should.be.a('number').not.be.NaN;
  });

  it('should return a string with seq start from 1', () => {
    const generator = generators.get('seq');
    generator.should.be.a('function');
    const gen = generator({size: 'a NaN', start: 'a NaN'});
    gen.should.be.a('function');
    const id = gen();
    console.log('      id: ' + id);
    id.should.be.a('string').match(/^\d+/);
    parseInt(id, 10).should.be.a('number').not.be.NaN;

    const gen2 = generator({size: 1, start: 1});
    const id2 = gen2();
    id.should.eql(id2);
  });
});
