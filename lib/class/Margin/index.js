class Margin extends Element{
  constructor(tag){
    super(tag);
  }
  margin(...args){
    this._setArguments(args);
    this._stack.push('margin');
    this._apply();
    return this;
  }
  bottom(...args){
    this._setArguments(args);
    this._stack.push('marginBottom');
    this._apply();
    return this;
  }
  left(...args){
    this._setArguments(args);
    this._stack.push('marginLeft');
    this._apply();
    return this;
  }
  right(...args){
    this._setArguments(args);
    this._stack.push('marginRight');
    this._apply();
    return this;
  }
  top(...args){
    this._setArguments(args);
    this._stack.push('marginTop');
    this._apply();
    return this;
  }
}
