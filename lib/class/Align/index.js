class Align extends Element{
  constructor(tag){
    super(tag);
  }
  align(...args){
    return this;
  }
  content(...args){
    this._setArguments(args);
    this._stack.push('alignContent');
    this._apply();
    return this;
  }
  items(...args){
    this._setArguments(args);
    this._stack.push('alignItems');
    this._apply();
    return this;
  }
  self(...args){
    this._setArguments(args);
    this._stack.push('alignSelf');
    this._apply();
    return this;
  }
}
