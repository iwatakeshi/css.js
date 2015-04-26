class Page extends Element{
  constructor(tag){
    super(tag);
  }
  page(...args){
    return this;
  }
  breakAfter(...args){
    this._setArguments(args);
    this._stack.push('pageBreakAfter');
    this._apply();
    return this;
  }
  breakBefore(...args){
    this._setArguments(args);
    this._stack.push('pageBreakBefore');
    this._apply();
    return this;
  }
  breakInside(...args){
    this._setArguments(args);
    this._stack.push('pageBreakInside');
    this._apply();
    return this;
  }
}
