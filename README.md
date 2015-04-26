# css.js

A super shot for CSS.

## Introduction

css.js is a wrapper for `element.style[api]` written in ES6. Instead of using the element's `style` property you can easily use css.js to apply most styles:

```js
css('#myDiv').font().size('20px');
```
You may have noticed that most methods are chainable, this allows
you to apply multiple CSS styles on the element at once.

## Usage

### Setting the Style

There are other ways to set your style. If you prefer to set your style
at once instead of using chains then you can do the following:

```js
css('#myDiv').font('italic bold 20px arial,serif');
```
Note that some API do not have this capability as it does not apply.

### Chaining API

To chain with other APIs, you can use the `then` function:

```js
css('#myDiv').font().size('20px')
.then()
.background().color('black');
```

**TODO: Finish Docs**
