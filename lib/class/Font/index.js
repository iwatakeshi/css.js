class Font extends Element{
  constructor(tag){
    super(tag);
  }
  align(...args){
    return this;
  }
  /* Shorthand */
  color(...args){
    this._setArguments(args);
    this._stack.push('color');
    this._apply();
    return this;
  }
  font(...args){
    this._setArguments(args);
    this._stack.push('font');
    this._apply();
    return this;
  }
  family(...args){
    this._setArguments(args);
    this._stack.push('fontFamily');
    this._apply();
    return this;
  }
  size(...args){
    this._setArguments(args);
    this._stack.push('fontSize');
    this._apply();
    return this;
  }
  variant(...args){
    this._setArguments(args);
    this._stack.push('fontVariant');
    this._apply();
    return this;
  }
  weight(...args){
    this._setArguments(args);
    this._stack.push('fontWeight');
    this._apply();
    return this;
  }
  sizeAdjust(...args){
    this._setArguments(args);
    this._stack.push('fontSizeAdjust');
    this._apply();
    return this;
  }
  stretch(...args){
    this._setArguments(args);
    this._stack.push('fontStretch');
    this._apply();
    return this;
  }
}
