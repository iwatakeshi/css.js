class Padding extends Element{
  constructor(tag){
    super(tag);
  }
  padding(...args){
    this._setArguments(args);
    this._stack.push('padding');
    this._apply();
    return this;
  }
  bottom(...args){
    this._setArguments(args);
    this._stack.push('paddingBottom');
    this._apply();
    return this;
  }
  left(...args){
    this._setArguments(args);
    this._stack.push('paddingLeft');
    this._apply();
    return this;
  }
  right(...args){
    this._setArguments(args);
    this._stack.push('paddingRight');
    this._apply();
    return this;
  }
  top(...args){
    this._setArguments(args);
    this._stack.push('paddingTop');
    this._apply();
    return this;
  }
  breakAfter(...args){
    this._setArguments(args);
    this._stack.push('paddingBreakAfter');
    this._apply();
    return this;
  }
  breakBefore(...args){
    this._setArguments(args);
    this._stack.push('paddingBreakBefore');
    this._apply();
    return this;
  }
  breakInside(...args){
    this._setArguments(args);
    this._stack.push('paddingBreakInside');
    this._apply();
    return this;
  }
}
