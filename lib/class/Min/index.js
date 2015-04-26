class Min extends Element{
  constructor(tag){
    super(tag);
  }
  min(...args){
    return this;
  }
  height(...args){
    this._setArguments(args);
    this._stack.push('minHeight');
    this._apply();
    return this;
  }
  width(...args){
    this._setArguments(args);
    this._stack.push('minWidth');
    this._apply();
    return this;
  }
}
