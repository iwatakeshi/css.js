class Nav extends Element{
  constructor(tag){
    super(tag);
  }
  nav(...args){
    return this;
  }
  down(...args){
    this._setArguments(args);
    this._stack.push('navDown');
    this._apply();
    return this;
  }
  index(...args){
    this._setArguments(args);
    this._stack.push('navIndex');
    this._apply();
    return this;
  }
  left(...args){
    this._setArguments(args);
    this._stack.push('navLeft');
    this._apply();
    return this;
  }
  right(...args){
    this._setArguments(args);
    this._stack.push('navRight');
    this._apply();
    return this;
  }
  up(...args){
    this._setArguments(args);
    this._stack.push('navUp');
    this._apply();
    return this;
  }
}
