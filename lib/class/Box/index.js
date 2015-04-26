class Box extends Element{
  constructor(tag){
    super(tag);
  }
  box(...args){
    return this;
  }
  decorationBreak(...args){
    this._setArguments(args);
    this._stack.push('boxDecorationBreak');
    this._apply();
    return this;
  }
  shadow(...args){
    this._setArguments(args);
    this._stack.push('boxShadow');
    this._apply();
    return this;
  }
  sizing(...args){
    this._setArguments(args);
    this._stack.push('boxSizing');
    this._apply();
    return this;
  }
}
