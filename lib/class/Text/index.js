class Text extends Element{
  constructor(tag){
    super(tag);
  }
  text(...args){
    return this;
  }
  align(...args){
    this._setArguments(args);
    this._stack.push('textAlign');
    this._apply();
    return this;
  }
  alignLast(...args){
    this._setArguments(args);
    this._stack.push('textAlignLast');
    this._apply();
    return this;
  }
  decoration(...args){
    this._setArguments(args);
    this._stack.push('textDecoration');
    this._apply();
    return this;
  }
  decorationColor(...args){
    this._setArguments(args);
    this._stack.push('textDecorationColor');
    this._apply();
    return this;
  }
  decorationLine(...args){
    this._setArguments(args);
    this._stack.push('textDecorationLine');
    this._apply();
    return this;
  }
  decorationStyle(...args){
    this._setArguments(args);
    this._stack.push('textDecorationStyle');
    this._apply();
    return this;
  }
  indent(...args){
    this._setArguments(args);
    this._stack.push('textIndent');
    this._apply();
    return this;
  }
  justify(...args){
    this._setArguments(args);
    this._stack.push('textJustify');
    this._apply();
    return this;
  }
  overflow(...args){
    this._setArguments(args);
    this._stack.push('textOverflow');
    this._apply();
    return this;
  }
  shadow(...args){
    this._setArguments(args);
    this._stack.push('textShadow');
    this._apply();
    return this;
  }
  transform(...args){
    this._setArguments(args);
    this._stack.push('textShadow');
    this._apply();
    return this;
  }
}
