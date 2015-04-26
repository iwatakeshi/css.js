class Animation extends Element{
  constructor(tag){
    super(tag);
  }
  animation(...args){
    this._setArguments(args);
    this._stack.push('animation');
    this._apply();
    return this;
  }
  delay(...args){
    this._setArguments(args);
    this._stack.push('animationDelay');
    this._apply();
    return this;
  }
  direction(...args){
    this._setArguments(args);
    this._stack.push('animationDirection');
    this._apply();
    return this;
  }
  duration(...args){
    this._setArguments(args);
    this._stack.push('animationDuration');
    this._apply();
    return this;
  }
  fillMode(...args){
    this._setArguments(args);
    this._stack.push('animationFillMode');
    this._apply();
    return this;
  }
  iterationCount(...args){
    this._setArguments(args);
    this._stack.push('animationIterationCount');
    this._apply();
    return this;
  }
  name(...args){
    this._setArguments(args);
    this._stack.push('animationName');
    this._apply();
    return this;
  }
  timingFunction(...args){
    this._setArguments(args);
    this._stack.push('animationTimingFunction');
    this._apply();
    return this;
  }
  playState(...args){
    this._setArguments(args);
    this._stack.push('animationPlayState');
    this._apply();
    return this;
  }
}
