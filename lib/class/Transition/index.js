class Transition extends Element{
  constructor(tag){
    super(tag);
  }
  transition(...args){
    return this;
  }
  property(...args){
    this._setArguments(args);
    this._stack.push('transitionProperty');
    this._apply();
    return this;
  }
  duration(...args){
    this._setArguments(args);
    this._stack.push('transitionDuration');
    this._apply();
    return this;
  }
  timingFunction(...args){
    this._setArguments(args);
    this._stack.push('transitionTimingFunction');
    this._apply();
    return this;
  }
  delay(...args){
    this._setArguments(args);
    this._stack.push('transitionDelay');
    this._apply();
    return this;
  }
}
