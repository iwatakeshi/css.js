class Flex extends Element{
  constructor(tag){
    super(tag);
  }
  flex(...args){
    this._setArguments(args);
    this._stack.push('flex');
    this._apply();
    return this;
  }
  basis(...args){
    this._setArguments(args);
    this._stack.push('flexBasis');
    this._apply();
    return this;
  }
  direction(...args){
    this._setArguments(args);
    this._stack.push('flexDirection');
    this._apply();
    return this;
  }
  flow(...args){
    this._setArguments(args);
    this._stack.push('flexFlow');
    this._apply();
    return this;
  }
  grow(...args){
    this._setArguments(args);
    this._stack.push('flexGrow');
    this._apply();
    return this;
  }
  shrink(...args){
    this._setArguments(args);
    this._stack.push('flexShrink');
    this._apply();
    return this;
  }
  wrap(...args){
    this._setArguments(args);
    this._stack.push('flexWrap');
    this._apply();
    return this;
  }
}
