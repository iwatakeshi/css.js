class Column extends Element{
  constructor(tag){
    super(tag);
  }
  column(...args){
    return this;
  }
  count(...args){
    this._setArguments(args);
    this._stack.push('columnCount');
    this._apply();
    return this;
  }
  fill(...args){
    this._setArguments(args);
    this._stack.push('columnFill');
    this._apply();
    return this;
  }
  gap(...args){
    this._setArguments(args);
    this._stack.push('columnGap');
    this._apply();
    return this;
  }
  rule(...args){
    this._setArguments(args);
    this._stack.push('columnRule');
    this._apply();
    return this;
  }
  ruleColor(...args){
    this._setArguments(args);
    this._stack.push('columnRuleColor');
    this._apply();
    return this;
  }
  ruleStyle(...args){
    this._setArguments(args);
    this._stack.push('columnRuleStyle');
    this._apply();
    return this;
  }
  ruleWidth(...args){
    this._setArguments(args);
    this._stack.push('columnRuleWidth');
    this._apply();
    return this;
  }
}
