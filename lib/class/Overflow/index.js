class Overflow extends Element{
  constructor(tag){
    super(tag);
  }
  overflow(...args){
    this._setArguments(args);
    this._stack.push('overflow');
    this._apply();
    return this;
  }
  x(...args){
    this._setArguments(args);
    this._stack.push('overflowX');
    this._apply();
    return this;
  }
  y(...args){
    this._setArguments(args);
    this._stack.push('overflowY');
    this._apply();
    return this;
  }
}
