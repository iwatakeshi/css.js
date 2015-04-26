class Transform extends Element{
  constructor(tag){
    super(tag);
  }
  tranform(...args){
    this._setArguments(args);
    this._stack.push('tranform');
    this._apply();
    return this;
  }
  origin(...args){
    this._setArguments(args);
    this._stack.push('transformOrigin');
    this._apply();
    return this;
  }
  style(...args){
    this._setArguments(args);
    this._stack.push('tranformStyle');
    this._apply();
    return this;
  }
}
