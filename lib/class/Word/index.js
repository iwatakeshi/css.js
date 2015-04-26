class Word extends Element{
  constructor(tag){
    super(tag);
  }
  word(...args){
    return this;
  }
  break(...args){
    this._setArguments(args);
    this._stack.push('wordBreak');
    this._apply();
    return this;
  }
  spacing(...args){
    this._setArguments(args);
    this._stack.push('wordSpacing');
    this._apply();
    return this;
  }
  wrap(...args){
    this._setArguments(args);
    this._stack.push('wordWrap');
    this._apply();
    return this;
  }
}
