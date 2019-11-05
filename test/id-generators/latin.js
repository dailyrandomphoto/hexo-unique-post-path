'use strict';

const generators = require('../../lib/id-generators');

describe('latin', () => {
  it('should convert Chinese text to pinyin text (lowercase)', () => {
    const generator = generators.get('latin');
    generator.should.be.a('function');
    const gen = generator();
    gen.should.be.a('function');
    const id = gen('你好, World!');
    console.log('      id: ' + id);
    id.should.be.a('string').eql('ni-hao-world');
  });

  it('should convert Chinese text to pinyin text (lowercase) with separator \'-\'', () => {
    const generator = generators.get('latin');
    generator.should.be.a('function');
    const gen = generator({separator: ['invalid type']});
    gen.should.be.a('function');
    const id = gen('你好, World!');
    console.log('      id: ' + id);
    id.should.be.a('string').eql('ni-hao-world');
  });

  it('should convert Chinese text to pinyin text', () => {
    const generator = generators.get('latin');
    generator.should.be.a('function');
    const gen = generator({lowercase: false});
    gen.should.be.a('function');
    const id = gen('你好, World!');
    console.log('      id: ' + id);
    id.should.be.a('string').eql('Ni-Hao-World');
  });

  it('should convert Chinese text to pinyin text with separator \'_\'', () => {
    const generator = generators.get('latin');
    generator.should.be.a('function');
    const gen = generator({lowercase: 'false', separator: '_'});
    gen.should.be.a('function');
    const id = gen('你好, World!');
    console.log('      id: ' + id);
    id.should.be.a('string').eql('Ni_Hao_World');
  });

  it('should convert Chinese text to pinyin text with no separator', () => {
    const generator = generators.get('latin');
    generator.should.be.a('function');
    const gen = generator({lowercase: false, separator: ''});
    gen.should.be.a('function');
    const id = gen('你好, World!');
    console.log('      id: ' + id);
    id.should.be.a('string').eql('NiHaoWorld');
  });

  it('should convert Korean text to Latin text', () => {
    const generator = generators.get('latin');
    generator.should.be.a('function');
    const gen = generator();
    gen.should.be.a('function');
    const id = gen('안녕하세요, 세계');
    console.log('      id: ' + id);
    id.should.be.a('string').eql('annyeonghaseyo-segye');
  });

  it('should convert multi languages and numbers', () => {
    const generator = generators.get('latin');
    generator.should.be.a('function');
    const gen = generator();
    gen.should.be.a('function');
    const id = gen('你好, 안녕하세요, Hello World! 1234');
    console.log('      id: ' + id);
    id.should.be.a('string').eql('ni-hao-annyeonghaseyo-hello-world-1234');
  });
});
