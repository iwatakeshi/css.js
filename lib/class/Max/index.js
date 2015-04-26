class Max extends Element{
  constructor(tag){
    super(tag);
  }
  max(...args){
    return this;
  }
  height(...args){
    this._setArguments(args);
    this._stack.push('maxHeight');
    this._apply();
    return this;
  }
  width(...args){
    this._setArguments(args);
    this._stack.push('maxWidth');
    this._apply();
    return this;
  }
}
