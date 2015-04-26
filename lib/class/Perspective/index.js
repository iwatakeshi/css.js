class Perspective extends Element{
  constructor(tag){
    super(tag);
  }
  perspective(...args){
    this._setArguments(args);
    this._stack.push('perspective');
    this._apply();
    return this;
  }
  origin(...args){
    this._setArguments(args);
    this._stack.push('perspectiveOrigin');
    this._apply();
    return this;
  }
}
