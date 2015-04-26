class List extends Element{
  constructor(tag){
    super(tag);
  }
  list(...args){
    return this;
  }
  height(...args){
    this._setArguments(args);
    this._stack.push('listHeight');
    this._apply();
    return this;
  }
  style(...args){
    this._setArguments(args);
    this._stack.push('listStyle');
    this._apply();
    return this;
  }
  styleImage(...args){
    this._setArguments(args);
    this._stack.push('listStyleImage');
    this._apply();
    return this;
  }
  stylePosition(...args){
    this._setArguments(args);
    this._stack.push('listStylePosition');
    this._apply();
    return this;
  }
  styleType(...args){
    this._setArguments(args);
    this._stack.push('listStyleType');
    this._apply();
    return this;
  }
}
