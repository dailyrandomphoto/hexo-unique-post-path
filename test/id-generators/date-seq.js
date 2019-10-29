'use strict';

const generators = require('../../lib/id-generators');

describe('date-seq', () => {
  it('should return a string with a date prefix and have length of 10: default size', () => {
    const generator = generators.get('date-seq');
    generator.should.be.a('function');
    const gen = generator({});
    gen.should.be.a('function');
    const id = gen();
    console.log('      id: ' + id);
    id.should.be.a('string').match(/^\d{10}/);
    parseInt(id, 10).should.be.a('number').not.be.NaN;
  });

  it('should return a string with a date prefix and have length of 10', () => {
    const generator = generators.get('date-seq');
    generator.should.be.a('function');
    const gen = generator({size: 2});
    gen.should.be.a('function');
    const id = gen();
    console.log('      id: ' + id);
    id.should.be.a('string').match(/^\d{10}$/);
  });

  it('should return a string with a date prefix and have length of 12', () => {
    const generator = generators.get('date-seq');
    generator.should.be.a('function');
    const gen = generator({size: 4});
    gen.should.be.a('function');
    const id = gen();
    console.log('      id: ' + id);
    id.should.be.a('string').match(/^\d{12}$/);
  });

  it('should return a string with seq is 99', () => {
    const generator = generators.get('date-seq');
    generator.should.be.a('function');
    const gen = generator({start: 99});
    gen.should.be.a('function');
    const id = gen();
    console.log('      id: ' + id);
    id.should.be.a('string').match(/^\d{8}99$/);
  });

  it('should return a string with a custom date prefix: YYYY-MM-DD-', () => {
    const generator = generators.get('date-seq');
    generator.should.be.a('function');
    const gen = generator({prefix: 'YYYY-MM-DD-', size: 4});
    gen.should.be.a('function');
    const id = gen();
    console.log('      id: ' + id);
    id.should.be.a('string').match(/^\d{4}-\d{2}-\d{2}-\d{4}$/);
  });

  it('should return a string with a custom date prefix: YY-MM-DD-', () => {
    const generator = generators.get('date-seq');
    generator.should.be.a('function');
    const gen = generator({prefix: 'YY-MM-DD-', size: 4});
    gen.should.be.a('function');
    const id = gen();
    console.log('      id: ' + id);
    id.should.be.a('string').match(/^\d{2}-\d{2}-\d{2}-\d{4}$/);
  });

  it('should return a string with a custom date prefix: YYYY_', () => {
    const generator = generators.get('date-seq');
    generator.should.be.a('function');
    const gen = generator({prefix: 'YYYY_', size: 4});
    gen.should.be.a('function');
    const id = gen();
    console.log('      id: ' + id);
    id.should.be.a('string').match(/^\d{4}_\d{4}$/);
  });

  it('should return a string with a custom date prefix: TEST_YYYY_', () => {
    const generator = generators.get('date-seq');
    generator.should.be.a('function');
    const gen = generator({prefix: 'TEST_YYYY_', size: 4});
    gen.should.be.a('function');
    const id = gen();
    console.log('      id: ' + id);
    id.should.be.a('string').match(/^TEST_\d{4}_\d{4}$/);
  });

  it('should return a string with seq start from 1', () => {
    const generator = generators.get('date-seq');
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
