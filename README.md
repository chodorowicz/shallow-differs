# shallow-differs (with whitelist) [![Build Status](https://travis-ci.org/chodorowicz/shallow-differs.svg?branch=master)](https://travis-ci.org/chodorowicz/shallow-differs)

This module is quite standard implementation of shallow compare of two objects. It iterates through object properties comparing them in a shallow way and returns a boolean, whether this two object are different (true) or they're the same in a shallow way (false).

One extra improvement over most basic implementation is support for a whitelist of keys, which are to be ignored during comparison. It might be useful in scenarios that we're sure that given key is not really important (think of e.g. shouldComponentUpdate and one key of props, which doesn't influence rendering but still might change and trigger unnecessary re-render).

## Installation

```sh
npm install --save shallow-differs
```

## Usage

```ts
import { shallowDiffers } from "shallow-differs";

shallowDiffers(a, b, ["keys", "to", "ignore"]);
```

- arguments
  - `a` and `b` are two object, which keys we want to compare
  - whitelist is an array of keys, which will be ignored during comparison
