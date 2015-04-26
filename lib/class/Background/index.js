class Background extends Element{
  constructor(tag){
    super(tag);
  }
  background(...args){
    this._setArguments(args);
    this._stack.push('background');
    this._apply();
    return this;
  }
  attachment(...args){
    this._setArguments(args);
    this._stack.push('backgroundAttachment');
    this._apply();
    return this;
  }
  color(...args){
    this._setArguments(args);
    this._stack.push('backgroundColor');
    this._apply();
    return this;
  }
  image(...args){
    this._setArguments(args);
    this._stack.push('backgroundImage');
    this._apply();
    return this;
  }
  position(...args){
    this._setArguments(args);
    this._stack.push('backgroundPosition');
    this._apply();
    return this;
  }
  repeat(...args){
    this._setArguments(args);
    this._stack.push('backgroundRepeat');
    this._apply();
    return this;
  }
  clip(...args){
    this._setArguments(args);
    this._stack.push('backgroundClip');
    this._apply();
    return this;
  }
  origin(...args){
    this._setArguments(args);
    this._stack.push('backgroundOrigin');
    this._apply();
    return this;
  }
  size(...args){
    this._setArguments(args);
    this._stack.push('backgroundSize');
    this._apply();
    return this;
  }
}
