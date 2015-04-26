class Outline extends Element{
  constructor(tag){
    super(tag);
  }
  outline(...args){
    this._setArguments(args);
    this._stack.push('outline');
    this._apply();
    return this;
  }
  color(...args){
    this._setArguments(args);
    this._stack.push('outlineColor');
    this._apply();
    return this;
  }
  offset(...args){
    this._setArguments(args);
    this._stack.push('outlineOffset');
    this._apply();
    return this;
  }
  style(...args){
    this._setArguments(args);
    this._stack.push('outlineStyle');
    this._apply();
    return this;
  }
  width(...args){
    this._setArguments(args);
    this._stack.push('outlineWidth');
    this._apply();
    return this;
  }
}
