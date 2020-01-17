'use strict';

const LuhnModN = require('./index');

const radix = 36;
const luhnMod36 = new LuhnModN(character => Number.parseInt(character, radix), codePoint => codePoint.toString(radix).toUpperCase(), radix);
const testData = [
  '1134806PJFB000010013CD18',
  '1144701CEAA0000000004218',
  '1144701AU1087AE065175318',
  '111252331000000008229719'
];

testData.forEach(item => {
  test('Luhn Mod 36', () => {
    expect(luhnMod36.validate(luhnMod36.generate(item)))
      .toBe(true);
  });
});


//test based on algorithm description in https://en.wikipedia.org/wiki/Luhn_algorithm
let luhnModN = new LuhnModN(Number.parseInt, codePoint => codePoint.toString(), 10);
test('Luhn example from Wikipedia', () => {
  expect(luhnModN.validate(luhnModN.generate('7992739871')))
    .toBe(true);
});

//test based on algorithm example in https://en.wikipedia.org/wiki/Luhn_mod_N_algorithm
const map = 'abcdef';
luhnModN = new LuhnModN(character => map.indexOf(character), codePoint => map[codePoint], map.length);
test('Luhn Mod N example from Wikipedia', () => {
  expect(luhnModN.validate(luhnModN.generate('abcdef')))
    .toBe(true);
});
