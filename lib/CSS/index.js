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
