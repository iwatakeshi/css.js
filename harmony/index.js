class Element {
  constructor(tag){
    this._stack = [];
    this._args = [];
    if(/\./g.test(tag)){
      tag = tag.replace('.', '');
      this._element = document.getElementsByClassName(tag);
    }
    if(/\#/g.test(tag)){
      tag = tag.replace('#', '');
      this._element = document.getElementById(tag);
    }
  }
  element(){
    return this._element;
  }
  _setArguments(args){
    if(args.length === 1){
      if(Array.isArray(args))
        this._args = args;
      else if(typeof(args) === 'string')
        this._args = args.split(' ');
      else this._args = [''];
    }
    if(args.length > 1){
      this._args = args;
    }
  }
  _apply(){
    if(Array.isArray(this._element)){
      this._element.forEach((el)=>{
        this._stack.forEach((property)=>{
          this._args.forEach((argument)=>{
            if(argument || argument !== '')
              el.style[property] = argument;
          });
        });
      });
    }else{
      this._stack.forEach((property)=>{
        this._args.forEach((argument)=>{
          if(argument || argument !== ''){
              this._element.style[property] = argument;
            }
        });
      });
    }
    // Shift the stack
    this._stack.shift();
    // Clear the array
    this._args = [];
  }
}

class Align extends Element{
  constructor(tag){
    super(tag);
  }
  align(...args){
    return this;
  }
  content(...args){
    this._setArguments(args);
    this._stack.push('alignContent');
    this._apply();
    return this;
  }
  items(...args){
    this._setArguments(args);
    this._stack.push('alignItems');
    this._apply();
    return this;
  }
  self(...args){
    this._setArguments(args);
    this._stack.push('alignSelf');
    this._apply();
    return this;
  }
}

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

class Box extends Element{
  constructor(tag){
    super(tag);
  }
  box(...args){
    return this;
  }
  decorationBreak(...args){
    this._setArguments(args);
    this._stack.push('boxDecorationBreak');
    this._apply();
    return this;
  }
  shadow(...args){
    this._setArguments(args);
    this._stack.push('boxShadow');
    this._apply();
    return this;
  }
  sizing(...args){
    this._setArguments(args);
    this._stack.push('boxSizing');
    this._apply();
    return this;
  }
}

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

class Counter extends Element{
  constructor(tag){
    super(tag);
  }
  counter(...args){
    return this;
  }
  increment(...args){
    this._setArguments(args);
    this._stack.push('counterIncrement');
    this._apply();
    return this;
  }
  reset(...args){
    this._setArguments(args);
    this._stack.push('counterReset');
    this._apply();
    return this;
  }
}

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

class Font extends Element{
  constructor(tag){
    super(tag);
  }
  align(...args){
    return this;
  }
  /* Shorthand */
  color(...args){
    this._setArguments(args);
    this._stack.push('color');
    this._apply();
    return this;
  }
  font(...args){
    this._setArguments(args);
    this._stack.push('font');
    this._apply();
    return this;
  }
  family(...args){
    this._setArguments(args);
    this._stack.push('fontFamily');
    this._apply();
    return this;
  }
  size(...args){
    this._setArguments(args);
    this._stack.push('fontSize');
    this._apply();
    return this;
  }
  variant(...args){
    this._setArguments(args);
    this._stack.push('fontVariant');
    this._apply();
    return this;
  }
  weight(...args){
    this._setArguments(args);
    this._stack.push('fontWeight');
    this._apply();
    return this;
  }
  sizeAdjust(...args){
    this._setArguments(args);
    this._stack.push('fontSizeAdjust');
    this._apply();
    return this;
  }
  stretch(...args){
    this._setArguments(args);
    this._stack.push('fontStretch');
    this._apply();
    return this;
  }
}

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

class Margin extends Element{
  constructor(tag){
    super(tag);
  }
  margin(...args){
    this._setArguments(args);
    this._stack.push('margin');
    this._apply();
    return this;
  }
  bottom(...args){
    this._setArguments(args);
    this._stack.push('marginBottom');
    this._apply();
    return this;
  }
  left(...args){
    this._setArguments(args);
    this._stack.push('marginLeft');
    this._apply();
    return this;
  }
  right(...args){
    this._setArguments(args);
    this._stack.push('marginRight');
    this._apply();
    return this;
  }
  top(...args){
    this._setArguments(args);
    this._stack.push('marginTop');
    this._apply();
    return this;
  }
}

class Max extends Element{
  constructor(tag){
    super(tag);
  }
  max(...args){
    return this;
  }
  height(...args){
    this._setArguments(args);
    this._stack.push('maxHeight');
    this._apply();
    return this;
  }
  width(...args){
    this._setArguments(args);
    this._stack.push('maxWidth');
    this._apply();
    return this;
  }
}

class Min extends Element{
  constructor(tag){
    super(tag);
  }
  min(...args){
    return this;
  }
  height(...args){
    this._setArguments(args);
    this._stack.push('minHeight');
    this._apply();
    return this;
  }
  width(...args){
    this._setArguments(args);
    this._stack.push('minWidth');
    this._apply();
    return this;
  }
}

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

class Outline extends Element{
  constructor(tag){
    super(tag);
  }
  outline(...args){
    this._setArguments(args);
    this._stack.push('outline');
    this._apply();
    return this;
  }
  color(...args){
    this._setArguments(args);
    this._stack.push('outlineColor');
    this._apply();
    return this;
  }
  offset(...args){
    this._setArguments(args);
    this._stack.push('outlineOffset');
    this._apply();
    return this;
  }
  style(...args){
    this._setArguments(args);
    this._stack.push('outlineStyle');
    this._apply();
    return this;
  }
  width(...args){
    this._setArguments(args);
    this._stack.push('outlineWidth');
    this._apply();
    return this;
  }
}

class Overflow extends Element{
  constructor(tag){
    super(tag);
  }
  overflow(...args){
    this._setArguments(args);
    this._stack.push('overflow');
    this._apply();
    return this;
  }
  x(...args){
    this._setArguments(args);
    this._stack.push('overflowX');
    this._apply();
    return this;
  }
  y(...args){
    this._setArguments(args);
    this._stack.push('overflowY');
    this._apply();
    return this;
  }
}

class Padding extends Element{
  constructor(tag){
    super(tag);
  }
  padding(...args){
    this._setArguments(args);
    this._stack.push('padding');
    this._apply();
    return this;
  }
  bottom(...args){
    this._setArguments(args);
    this._stack.push('paddingBottom');
    this._apply();
    return this;
  }
  left(...args){
    this._setArguments(args);
    this._stack.push('paddingLeft');
    this._apply();
    return this;
  }
  right(...args){
    this._setArguments(args);
    this._stack.push('paddingRight');
    this._apply();
    return this;
  }
  top(...args){
    this._setArguments(args);
    this._stack.push('paddingTop');
    this._apply();
    return this;
  }
  breakAfter(...args){
    this._setArguments(args);
    this._stack.push('paddingBreakAfter');
    this._apply();
    return this;
  }
  breakBefore(...args){
    this._setArguments(args);
    this._stack.push('paddingBreakBefore');
    this._apply();
    return this;
  }
  breakInside(...args){
    this._setArguments(args);
    this._stack.push('paddingBreakInside');
    this._apply();
    return this;
  }
}

class Page extends Element{
  constructor(tag){
    super(tag);
  }
  page(...args){
    return this;
  }
  breakAfter(...args){
    this._setArguments(args);
    this._stack.push('pageBreakAfter');
    this._apply();
    return this;
  }
  breakBefore(...args){
    this._setArguments(args);
    this._stack.push('pageBreakBefore');
    this._apply();
    return this;
  }
  breakInside(...args){
    this._setArguments(args);
    this._stack.push('pageBreakInside');
    this._apply();
    return this;
  }
}

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

class Transform extends Element{
  constructor(tag){
    super(tag);
  }
  tranform(...args){
    this._setArguments(args);
    this._stack.push('tranform');
    this._apply();
    return this;
  }
  origin(...args){
    this._setArguments(args);
    this._stack.push('transformOrigin');
    this._apply();
    return this;
  }
  style(...args){
    this._setArguments(args);
    this._stack.push('tranformStyle');
    this._apply();
    return this;
  }
}

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

class Word extends Element{
  constructor(tag){
    super(tag);
  }
  word(...args){
    return this;
  }
  break(...args){
    this._setArguments(args);
    this._stack.push('wordBreak');
    this._apply();
    return this;
  }
  spacing(...args){
    this._setArguments(args);
    this._stack.push('wordSpacing');
    this._apply();
    return this;
  }
  wrap(...args){
    this._setArguments(args);
    this._stack.push('wordWrap');
    this._apply();
    return this;
  }
}

class CSS extends Element {
  constructor(tag){
    super(tag);
    // Align
    this._Align = new Align(tag);
    this._Align.then = this.then.bind(this);
    // Animation
    this._Animation = new Animation(tag);
    this._Animation.then = this.then.bind(this);
    // Background
    this._Background = new Background(tag);
    this._Background.then = this.then.bind(this);
    // Border
    this._Border = new Border(tag);
    this._Border.then = this.then.bind(this);
    // Box
    this._Box = new Box(tag);
    this._Box.then = this.then.bind(this);
    // Column
    this._Column = new Column(tag);
    this._Column.then = this.then.bind(this);
    // Counter
    this._Counter = new Counter(tag);
    this._Counter.then = this.then.bind(this);
    // Flex
    this._Flex = new Flex(tag);
    this._Flex.then = this.then.bind(this);
    // Font
    this._Font = new Font(tag);
    this._Font.then = this.then.bind(this);
    // List
    this._List = new List(tag);
    this._List.then = this.then.bind(this);
    // Margin
    this._Margin = new Margin(tag);
    this._Margin.then = this.then.bind(this);
    // Max
    this._Max = new Max(tag);
    this._Max.then = this.then.bind(this);
    // Min
    this._Min = new Min(tag);
    this._Min.then = this.then.bind(this);
    // Nav
    this._Nav = new Nav(tag);
    this._Nav.then = this.then.bind(this);
    // Outline
    this._Outline = new Outline(tag);
    this._Outline.then = this.then.bind(this);
    // Overflow
    this._Overflow = new Overflow(tag);
    this._Overflow.then = this.then.bind(this);
    // Padding
    this._Padding = new Padding(tag);
    this._Padding.then = this.then.bind(this);
    // Page
    this._Page = new Page(tag);
    this._Page.then = this.then.bind(this);
    // Perspective
    this._Perspective = new Perspective(tag);
    this._Perspective.then = this.then.bind(this);
    // Text
    this._Text = new Text(tag);
    this._Text.then = this.then.bind(this);
    // Transform
    this._Transform = new Transform(tag);
    this._Transform.then = this.then.bind(this);
    // Transform
    this._Transition = new Transition(tag);
    this._Transition.then = this.then.bind(this);
    // Word
    this._Word = new Word(tag);
    this._Word.then = this.then.bind(this);
  }
  /* 'then' function bridges the classes
  *  @example:
  *  new CSS(...).background().color()
  *  .then().font().color();
  */
  then(){
    return this;
  }
  align(){
    this._Align.align.apply(this._Align, arguments);
  }
  animation(){
    return this._Animation.animation.apply(this._Animation, arguments);

  }
  background(){
    return this._Background.background.apply(this._Background, arguments);

  }
  border(){
    return this._Border.border.apply(this._Border, arguments);

  }
  box(){
    return this._Box.box.apply(this._Box, arguments);

  }
  column(){
    return this._Column.column.apply(this._Column, arguments);

  }
  counter(){
    return this._Counter.counter.apply(this._Counter, arguments);

  }
  flex(){
    return this._Flex.flex.apply(this._Flex, arguments);

  }
  font(){
    return this._Font.font.apply(this._Font, arguments);

  }
  list(){
    return this._List.list.apply(this._List, arguments);

  }
  margin(){
    return this._Margin.margin.apply(this._Margin, arguments);

  }
  max(){
    return this._Max.max.apply(this._Max, arguments);

  }
  min(){
    return this._Min.min.apply(this._Min, arguments);

  }
  nav(){
    return this._Nav.nav.apply(this._Nav, arguments);

  }
  outline(){
    return this._Outline.outline.apply(this._Outline, arguments);

  }
  overflow(){
    return this._Overflow.overflow.apply(this._Overflow, arguments);

  }
  padding(){
    return this._Padding.padding.apply(this._Padding, arguments);

  }
  page(){
    return this._Page.page.apply(this._Page, arguments);

  }
  perspective(){
    return this._Perspective.perspective.apply(this._Perspective, arguments);

  }
  text(){
    return this._Text.text.apply(this._Text, arguments);

  }
  transition(){
    return this._Transition.transition.apply(this._Transition, arguments);

  }
  word(){
    return this._Word.word.apply(this._Word, arguments);
  }
}
var css = function(tag){
  return new CSS(tag);
};
css.class = CSS;

export default css;
