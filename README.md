# luhnmodn

![GitHub](https://img.shields.io/github/license/alfredmyers/luhnmodn.svg?style=flat) [![Build Status](https://travis-ci.com/alfredmyers/luhnmodn.svg?branch=master)](https://travis-ci.com/alfredmyers/luhnmodn)

Generates and calculates Luhn Mod N check values

Code based on <https://en.wikipedia.org/wiki/Luhn_mod_N_algorithm>
with minimal modifications.

## Installing

```sh
npm i luhnmodn
```

## API

### Parameters

Parameter | Description
--- | ---
codePointFromCharacter | Function to obtain a code point from a character
characterFromCodePoint | Function to obtain a character from a code point
n | Base, radix or number of valid characters
