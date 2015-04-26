class Border extends Element{
  constructor(tag){
    super(tag);
  }
  border(...args){
    this._setArguments(args);
    this._stack.push('border');
    this._apply();
    return this;
  }
  bottom(...args){
    this._setArguments(args);
    this._stack.push('borderBottom');
    this._apply();
    return this;
  }
  bottomColor(...args){
    this._setArguments(args);
    this._stack.push('borderBottomColor');
    this._apply();
    return this;
  }
  bottomLeftRadius(...args){
    this._setArguments(args);
    this._stack.push('borderBottomLeftRadius');
    this._apply();
    return this;
  }
  bottomRightRadius(...args){
    this._setArguments(args);
    this._stack.push('borderBottomRightRadius');
    this._apply();
    return this;
  }
  bottomStyle(...args){
    this._setArguments(args);
    this._stack.push('borderBottomStyle');
    this._apply();
    return this;
  }
  bottomWidth(...args){
    this._setArguments(args);
    this._stack.push('borderBottomWidth');
    this._apply();
    return this;
  }
  collapse(...args){
    this._setArguments(args);
    this._stack.push('borderCollapse');
    this._apply();
    return this;
  }
  color(...args){
    this._setArguments(args);
    this._stack.push('borderColor');
    this._apply();
    return this;
  }
  image(...args){
    this._setArguments(args);
    this._stack.push('borderImage');
    this._apply();
    return this;
  }
  imageOutset(...args){
    this._setArguments(args);
    this._stack.push('borderImageOutSet');
    this._apply();
    return this;
  }
  imageRepeat(...args){
    this._setArguments(args);
    this._stack.push('borderImageRepeat');
    this._apply();
    return this;
  }
  imageSlice(...args){
    this._setArguments(args);
    this._stack.push('borderImageSlice');
    this._apply();
    return this;
  }
  imageSource(...args){
    this._setArguments(args);
    this._stack.push('borderImageSource');
    this._apply();
    return this;
  }
  imageWidth(...args){
    this._setArguments(args);
    this._stack.push('borderImageWidth');
    this._apply();
    return this;
  }
  left(...args){
    this._setArguments(args);
    this._stack.push('borderLeft');
    this._apply();
    return this;
  }
  leftColor(...args){
    this._setArguments(args);
    this._stack.push('borderLeftColor');
    this._apply();
    return this;
  }
  leftStyle(...args){
    this._setArguments(args);
    this._stack.push('borderLeftStyle');
    this._apply();
    return this;
  }
  leftWidth(...args){
    this._setArguments(args);
    this._stack.push('borderLeftWidth');
    this._apply();
    return this;
  }
  radius(...args){
    this._setArguments(args);
    this._stack.push('borderRadius');
    this._apply();
    return this;
  }
  right(...args){
    this._setArguments(args);
    this._stack.push('borderRight');
    this._apply();
    return this;
  }
  rightColor(...args){
    this._setArguments(args);
    this._stack.push('borderRightColor');
    this._apply();
    return this;
  }
  rightStyle(...args){
    this._setArguments(args);
    this._stack.push('borderRightStyle');
    this._apply();
    return this;
  }
  rightWidth(...args){
    this._setArguments(args);
    this._stack.push('borderRightWidth');
    this._apply();
    return this;
  }
  spacing(...args){
    this._setArguments(args);
    this._stack.push('borderSpacing');
    this._apply();
    return this;
  }
  style(...args){
    this._setArguments(args);
    this._stack.push('borderStyle');
    this._apply();
    return this;
  }
  top(...args){
    this._setArguments(args);
    this._stack.push('borderTop');
    this._apply();
    return this;
  }
  topColor(...args){
    this._setArguments(args);
    this._stack.push('borderTopColor');
    this._apply();
    return this;
  }
  topLeftRadius(...args){
    this._setArguments(args);
    this._stack.push('borderTopLeftRadius');
    this._apply();
    return this;
  }
  topRightRadius(...args){
    this._setArguments(args);
    this._stack.push('borderTopRightRadius');
    this._apply();
    return this;
  }
  topStyle(...args){
    this._setArguments(args);
    this._stack.push('borderTopStyle');
    this._apply();
    return this;
  }
  topWidth(...args){
    this._setArguments(args);
    this._stack.push('borderTopWidth');
    this._apply();
    return this;
  }
  width(...args){
    this._setArguments(args);
    this._stack.push('borderWidth');
    this._apply();
    return this;
  }
}
