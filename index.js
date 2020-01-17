'use strict';

/* 
    Code based on https://en.wikipedia.org/wiki/Luhn_mod_N_algorithm
    with minimal modifications.
*/

function LuhnModN(codePointFromCharacter, characterFromCodePoint, n) {
	this.calculate = require('calculate-luhn-mod-n').bind(undefined, codePointFromCharacter, characterFromCodePoint, n);
	this.validate = require('validate-luhn-mod-n').bind(undefined, codePointFromCharacter, n);
}

LuhnModN.prototype.generate = function(input) {
	return input + this.calculate(input);
}

module.exports = LuhnModN;
