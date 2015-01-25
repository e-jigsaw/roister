roister [![npm version](https://badge.fury.io/js/roister.svg)](http://badge.fury.io/js/roister) [![dependency Status](https://david-dm.org/e-jigsaw/roister/status.svg)](https://david-dm.org/e-jigsaw/roister) [![devDependency Status](https://david-dm.org/e-jigsaw/roister/dev-status.svg)](https://david-dm.org/e-jigsaw/roister#info=devDependencies)
=======

:beer: using [riot](https://github.com/muut/riotjs) by jade and coffeescript

# Usage

riot:

```jsx
<todo>

  <!-- layout -->
  <h3>{ opts.title }</h3>

  <ul>
    <li each={ item, i in items }>{ item }</li>
  </ul>

  <form onsubmit={ add }>
    <input>
    <button>Add { items.length + 1 }</button>
  </form>

  // logic
  this.items = []

  add(e) {
    var input = e.target[0]
    this.items.push(input.value)
    input.value = ''
  }

</todo>
```

roister:

```jade
todo
  h3 { opts.title }

  ul
    li(each='{ item, i in items}') { item }

  form(onsubmit='{ add }')
    input
    button Add { items.length + 1 }

  script.
    @items = []

    @add = (e)=>
      input = e.target[0]
      @items.push input.value
      input.value = ''
```

Roister write with [jade](http://jade-lang.com/) and [CoffeeScript](http://coffeescript.org/).

# Installation

## Global install

```
% npm install roister -g
```

## Local install

```
% npm install roister -S
```

# Requirements

* Node.js

# Build

```
% npm run build
```

# Test

```
% npm test
```

# Author

* jigsaw (http://jgs.me, [@e-jigsaw](http://github.com/e-jigsaw))

# License

MIT

The MIT License (MIT)

Copyright (c) 2015 Takaya Kobayashi

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
