# luhn-mod-n-algorithm

![GitHub](https://img.shields.io/github/license/alfredmyers/luhn-mod-n-algorithm.svg?style=flat) ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/alfredmyers/luhn-mod-n-algorithm/Node CI)

Generates and calculates Luhn Mod N check values

Code based on <https://en.wikipedia.org/wiki/Luhn_mod_N_algorithm>
with minimal modifications.

## Installing

```sh
npm i luhn-mod-n-algorithm
```

## API

### Parameters

Parameter | Description
--- | ---
codePointFromCharacter | Function to obtain a code point from a character
characterFromCodePoint | Function to obtain a character from a code point
n | Base, radix or number of valid characters
