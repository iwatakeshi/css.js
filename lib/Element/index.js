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
