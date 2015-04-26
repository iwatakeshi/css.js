class Counter extends Element{
  constructor(tag){
    super(tag);
  }
  counter(...args){
    return this;
  }
  increment(...args){
    this._setArguments(args);
    this._stack.push('counterIncrement');
    this._apply();
    return this;
  }
  reset(...args){
    this._setArguments(args);
    this._stack.push('counterReset');
    this._apply();
    return this;
  }
}
