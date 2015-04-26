(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define('css', ['exports', 'module'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod);
    global.css = mod.exports;
  }
})(this, function (exports, module) {
  'use strict';

  var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

  var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var Element = (function () {
    function Element(tag) {
      _classCallCheck(this, Element);

      this._stack = [];
      this._args = [];
      if (/\./g.test(tag)) {
        tag = tag.replace('.', '');
        this._element = document.getElementsByClassName(tag);
      }
      if (/\#/g.test(tag)) {
        tag = tag.replace('#', '');
        this._element = document.getElementById(tag);
      }
    }

    _createClass(Element, [{
      key: 'element',
      value: function element() {
        return this._element;
      }
    }, {
      key: '_setArguments',
      value: function _setArguments(args) {
        if (args.length === 1) {
          if (Array.isArray(args)) this._args = args;else if (typeof args === 'string') this._args = args.split(' ');else this._args = [''];
        }
        if (args.length > 1) {
          this._args = args;
        }
      }
    }, {
      key: '_apply',
      value: function _apply() {
        var _this = this;

        if (Array.isArray(this._element)) {
          this._element.forEach(function (el) {
            _this._stack.forEach(function (property) {
              _this._args.forEach(function (argument) {
                if (argument || argument !== '') el.style[property] = argument;
              });
            });
          });
        } else {
          this._stack.forEach(function (property) {
            _this._args.forEach(function (argument) {
              if (argument || argument !== '') {
                _this._element.style[property] = argument;
              }
            });
          });
        }
        // Shift the stack
        this._stack.shift();
        // Clear the array
        this._args = [];
      }
    }]);

    return Element;
  })();

  var Align = (function (_Element) {
    function Align(tag) {
      _classCallCheck(this, Align);

      _get(Object.getPrototypeOf(Align.prototype), 'constructor', this).call(this, tag);
    }

    _inherits(Align, _Element);

    _createClass(Align, [{
      key: 'align',
      value: function align() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return this;
      }
    }, {
      key: 'content',
      value: function content() {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        this._setArguments(args);
        this._stack.push('alignContent');
        this._apply();
        return this;
      }
    }, {
      key: 'items',
      value: function items() {
        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        this._setArguments(args);
        this._stack.push('alignItems');
        this._apply();
        return this;
      }
    }, {
      key: 'self',
      value: function self() {
        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        this._setArguments(args);
        this._stack.push('alignSelf');
        this._apply();
        return this;
      }
    }]);

    return Align;
  })(Element);

  var Animation = (function (_Element2) {
    function Animation(tag) {
      _classCallCheck(this, Animation);

      _get(Object.getPrototypeOf(Animation.prototype), 'constructor', this).call(this, tag);
    }

    _inherits(Animation, _Element2);

    _createClass(Animation, [{
      key: 'animation',
      value: function animation() {
        for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          args[_key5] = arguments[_key5];
        }

        this._setArguments(args);
        this._stack.push('animation');
        this._apply();
        return this;
      }
    }, {
      key: 'delay',
      value: function delay() {
        for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          args[_key6] = arguments[_key6];
        }

        this._setArguments(args);
        this._stack.push('animationDelay');
        this._apply();
        return this;
      }
    }, {
      key: 'direction',
      value: function direction() {
        for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
          args[_key7] = arguments[_key7];
        }

        this._setArguments(args);
        this._stack.push('animationDirection');
        this._apply();
        return this;
      }
    }, {
      key: 'duration',
      value: function duration() {
        for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
          args[_key8] = arguments[_key8];
        }

        this._setArguments(args);
        this._stack.push('animationDuration');
        this._apply();
        return this;
      }
    }, {
      key: 'fillMode',
      value: function fillMode() {
        for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
          args[_key9] = arguments[_key9];
        }

        this._setArguments(args);
        this._stack.push('animationFillMode');
        this._apply();
        return this;
      }
    }, {
      key: 'iterationCount',
      value: function iterationCount() {
        for (var _len10 = arguments.length, args = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
          args[_key10] = arguments[_key10];
        }

        this._setArguments(args);
        this._stack.push('animationIterationCount');
        this._apply();
        return this;
      }
    }, {
      key: 'name',
      value: function name() {
        for (var _len11 = arguments.length, args = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
          args[_key11] = arguments[_key11];
        }

        this._setArguments(args);
        this._stack.push('animationName');
        this._apply();
        return this;
      }
    }, {
      key: 'timingFunction',
      value: function timingFunction() {
        for (var _len12 = arguments.length, args = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
          args[_key12] = arguments[_key12];
        }

        this._setArguments(args);
        this._stack.push('animationTimingFunction');
        this._apply();
        return this;
      }
    }, {
      key: 'playState',
      value: function playState() {
        for (var _len13 = arguments.length, args = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
          args[_key13] = arguments[_key13];
        }

        this._setArguments(args);
        this._stack.push('animationPlayState');
        this._apply();
        return this;
      }
    }]);

    return Animation;
  })(Element);

  var Background = (function (_Element3) {
    function Background(tag) {
      _classCallCheck(this, Background);

      _get(Object.getPrototypeOf(Background.prototype), 'constructor', this).call(this, tag);
    }

    _inherits(Background, _Element3);

    _createClass(Background, [{
      key: 'background',
      value: function background() {
        for (var _len14 = arguments.length, args = Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
          args[_key14] = arguments[_key14];
        }

        this._setArguments(args);
        this._stack.push('background');
        this._apply();
        return this;
      }
    }, {
      key: 'attachment',
      value: function attachment() {
        for (var _len15 = arguments.length, args = Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
          args[_key15] = arguments[_key15];
        }

        this._setArguments(args);
        this._stack.push('backgroundAttachment');
        this._apply();
        return this;
      }
    }, {
      key: 'color',
      value: function color() {
        for (var _len16 = arguments.length, args = Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
          args[_key16] = arguments[_key16];
        }

        this._setArguments(args);
        this._stack.push('backgroundColor');
        this._apply();
        return this;
      }
    }, {
      key: 'image',
      value: function image() {
        for (var _len17 = arguments.length, args = Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
          args[_key17] = arguments[_key17];
        }

        this._setArguments(args);
        this._stack.push('backgroundImage');
        this._apply();
        return this;
      }
    }, {
      key: 'position',
      value: function position() {
        for (var _len18 = arguments.length, args = Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
          args[_key18] = arguments[_key18];
        }

        this._setArguments(args);
        this._stack.push('backgroundPosition');
        this._apply();
        return this;
      }
    }, {
      key: 'repeat',
      value: function repeat() {
        for (var _len19 = arguments.length, args = Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
          args[_key19] = arguments[_key19];
        }

        this._setArguments(args);
        this._stack.push('backgroundRepeat');
        this._apply();
        return this;
      }
    }, {
      key: 'clip',
      value: function clip() {
        for (var _len20 = arguments.length, args = Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
          args[_key20] = arguments[_key20];
        }

        this._setArguments(args);
        this._stack.push('backgroundClip');
        this._apply();
        return this;
      }
    }, {
      key: 'origin',
      value: function origin() {
        for (var _len21 = arguments.length, args = Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {
          args[_key21] = arguments[_key21];
        }

        this._setArguments(args);
        this._stack.push('backgroundOrigin');
        this._apply();
        return this;
      }
    }, {
      key: 'size',
      value: function size() {
        for (var _len22 = arguments.length, args = Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {
          args[_key22] = arguments[_key22];
        }

        this._setArguments(args);
        this._stack.push('backgroundSize');
        this._apply();
        return this;
      }
    }]);

    return Background;
  })(Element);

  var Border = (function (_Element4) {
    function Border(tag) {
      _classCallCheck(this, Border);

      _get(Object.getPrototypeOf(Border.prototype), 'constructor', this).call(this, tag);
    }

    _inherits(Border, _Element4);

    _createClass(Border, [{
      key: 'border',
      value: function border() {
        for (var _len23 = arguments.length, args = Array(_len23), _key23 = 0; _key23 < _len23; _key23++) {
          args[_key23] = arguments[_key23];
        }

        this._setArguments(args);
        this._stack.push('border');
        this._apply();
        return this;
      }
    }, {
      key: 'bottom',
      value: function bottom() {
        for (var _len24 = arguments.length, args = Array(_len24), _key24 = 0; _key24 < _len24; _key24++) {
          args[_key24] = arguments[_key24];
        }

        this._setArguments(args);
        this._stack.push('borderBottom');
        this._apply();
        return this;
      }
    }, {
      key: 'bottomColor',
      value: function bottomColor() {
        for (var _len25 = arguments.length, args = Array(_len25), _key25 = 0; _key25 < _len25; _key25++) {
          args[_key25] = arguments[_key25];
        }

        this._setArguments(args);
        this._stack.push('borderBottomColor');
        this._apply();
        return this;
      }
    }, {
      key: 'bottomLeftRadius',
      value: function bottomLeftRadius() {
        for (var _len26 = arguments.length, args = Array(_len26), _key26 = 0; _key26 < _len26; _key26++) {
          args[_key26] = arguments[_key26];
        }

        this._setArguments(args);
        this._stack.push('borderBottomLeftRadius');
        this._apply();
        return this;
      }
    }, {
      key: 'bottomRightRadius',
      value: function bottomRightRadius() {
        for (var _len27 = arguments.length, args = Array(_len27), _key27 = 0; _key27 < _len27; _key27++) {
          args[_key27] = arguments[_key27];
        }

        this._setArguments(args);
        this._stack.push('borderBottomRightRadius');
        this._apply();
        return this;
      }
    }, {
      key: 'bottomStyle',
      value: function bottomStyle() {
        for (var _len28 = arguments.length, args = Array(_len28), _key28 = 0; _key28 < _len28; _key28++) {
          args[_key28] = arguments[_key28];
        }

        this._setArguments(args);
        this._stack.push('borderBottomStyle');
        this._apply();
        return this;
      }
    }, {
      key: 'bottomWidth',
      value: function bottomWidth() {
        for (var _len29 = arguments.length, args = Array(_len29), _key29 = 0; _key29 < _len29; _key29++) {
          args[_key29] = arguments[_key29];
        }

        this._setArguments(args);
        this._stack.push('borderBottomWidth');
        this._apply();
        return this;
      }
    }, {
      key: 'collapse',
      value: function collapse() {
        for (var _len30 = arguments.length, args = Array(_len30), _key30 = 0; _key30 < _len30; _key30++) {
          args[_key30] = arguments[_key30];
        }

        this._setArguments(args);
        this._stack.push('borderCollapse');
        this._apply();
        return this;
      }
    }, {
      key: 'color',
      value: function color() {
        for (var _len31 = arguments.length, args = Array(_len31), _key31 = 0; _key31 < _len31; _key31++) {
          args[_key31] = arguments[_key31];
        }

        this._setArguments(args);
        this._stack.push('borderColor');
        this._apply();
        return this;
      }
    }, {
      key: 'image',
      value: function image() {
        for (var _len32 = arguments.length, args = Array(_len32), _key32 = 0; _key32 < _len32; _key32++) {
          args[_key32] = arguments[_key32];
        }

        this._setArguments(args);
        this._stack.push('borderImage');
        this._apply();
        return this;
      }
    }, {
      key: 'imageOutset',
      value: function imageOutset() {
        for (var _len33 = arguments.length, args = Array(_len33), _key33 = 0; _key33 < _len33; _key33++) {
          args[_key33] = arguments[_key33];
        }

        this._setArguments(args);
        this._stack.push('borderImageOutSet');
        this._apply();
        return this;
      }
    }, {
      key: 'imageRepeat',
      value: function imageRepeat() {
        for (var _len34 = arguments.length, args = Array(_len34), _key34 = 0; _key34 < _len34; _key34++) {
          args[_key34] = arguments[_key34];
        }

        this._setArguments(args);
        this._stack.push('borderImageRepeat');
        this._apply();
        return this;
      }
    }, {
      key: 'imageSlice',
      value: function imageSlice() {
        for (var _len35 = arguments.length, args = Array(_len35), _key35 = 0; _key35 < _len35; _key35++) {
          args[_key35] = arguments[_key35];
        }

        this._setArguments(args);
        this._stack.push('borderImageSlice');
        this._apply();
        return this;
      }
    }, {
      key: 'imageSource',
      value: function imageSource() {
        for (var _len36 = arguments.length, args = Array(_len36), _key36 = 0; _key36 < _len36; _key36++) {
          args[_key36] = arguments[_key36];
        }

        this._setArguments(args);
        this._stack.push('borderImageSource');
        this._apply();
        return this;
      }
    }, {
      key: 'imageWidth',
      value: function imageWidth() {
        for (var _len37 = arguments.length, args = Array(_len37), _key37 = 0; _key37 < _len37; _key37++) {
          args[_key37] = arguments[_key37];
        }

        this._setArguments(args);
        this._stack.push('borderImageWidth');
        this._apply();
        return this;
      }
    }, {
      key: 'left',
      value: function left() {
        for (var _len38 = arguments.length, args = Array(_len38), _key38 = 0; _key38 < _len38; _key38++) {
          args[_key38] = arguments[_key38];
        }

        this._setArguments(args);
        this._stack.push('borderLeft');
        this._apply();
        return this;
      }
    }, {
      key: 'leftColor',
      value: function leftColor() {
        for (var _len39 = arguments.length, args = Array(_len39), _key39 = 0; _key39 < _len39; _key39++) {
          args[_key39] = arguments[_key39];
        }

        this._setArguments(args);
        this._stack.push('borderLeftColor');
        this._apply();
        return this;
      }
    }, {
      key: 'leftStyle',
      value: function leftStyle() {
        for (var _len40 = arguments.length, args = Array(_len40), _key40 = 0; _key40 < _len40; _key40++) {
          args[_key40] = arguments[_key40];
        }

        this._setArguments(args);
        this._stack.push('borderLeftStyle');
        this._apply();
        return this;
      }
    }, {
      key: 'leftWidth',
      value: function leftWidth() {
        for (var _len41 = arguments.length, args = Array(_len41), _key41 = 0; _key41 < _len41; _key41++) {
          args[_key41] = arguments[_key41];
        }

        this._setArguments(args);
        this._stack.push('borderLeftWidth');
        this._apply();
        return this;
      }
    }, {
      key: 'radius',
      value: function radius() {
        for (var _len42 = arguments.length, args = Array(_len42), _key42 = 0; _key42 < _len42; _key42++) {
          args[_key42] = arguments[_key42];
        }

        this._setArguments(args);
        this._stack.push('borderRadius');
        this._apply();
        return this;
      }
    }, {
      key: 'right',
      value: function right() {
        for (var _len43 = arguments.length, args = Array(_len43), _key43 = 0; _key43 < _len43; _key43++) {
          args[_key43] = arguments[_key43];
        }

        this._setArguments(args);
        this._stack.push('borderRight');
        this._apply();
        return this;
      }
    }, {
      key: 'rightColor',
      value: function rightColor() {
        for (var _len44 = arguments.length, args = Array(_len44), _key44 = 0; _key44 < _len44; _key44++) {
          args[_key44] = arguments[_key44];
        }

        this._setArguments(args);
        this._stack.push('borderRightColor');
        this._apply();
        return this;
      }
    }, {
      key: 'rightStyle',
      value: function rightStyle() {
        for (var _len45 = arguments.length, args = Array(_len45), _key45 = 0; _key45 < _len45; _key45++) {
          args[_key45] = arguments[_key45];
        }

        this._setArguments(args);
        this._stack.push('borderRightStyle');
        this._apply();
        return this;
      }
    }, {
      key: 'rightWidth',
      value: function rightWidth() {
        for (var _len46 = arguments.length, args = Array(_len46), _key46 = 0; _key46 < _len46; _key46++) {
          args[_key46] = arguments[_key46];
        }

        this._setArguments(args);
        this._stack.push('borderRightWidth');
        this._apply();
        return this;
      }
    }, {
      key: 'spacing',
      value: function spacing() {
        for (var _len47 = arguments.length, args = Array(_len47), _key47 = 0; _key47 < _len47; _key47++) {
          args[_key47] = arguments[_key47];
        }

        this._setArguments(args);
        this._stack.push('borderSpacing');
        this._apply();
        return this;
      }
    }, {
      key: 'style',
      value: function style() {
        for (var _len48 = arguments.length, args = Array(_len48), _key48 = 0; _key48 < _len48; _key48++) {
          args[_key48] = arguments[_key48];
        }

        this._setArguments(args);
        this._stack.push('borderStyle');
        this._apply();
        return this;
      }
    }, {
      key: 'top',
      value: function top() {
        for (var _len49 = arguments.length, args = Array(_len49), _key49 = 0; _key49 < _len49; _key49++) {
          args[_key49] = arguments[_key49];
        }

        this._setArguments(args);
        this._stack.push('borderTop');
        this._apply();
        return this;
      }
    }, {
      key: 'topColor',
      value: function topColor() {
        for (var _len50 = arguments.length, args = Array(_len50), _key50 = 0; _key50 < _len50; _key50++) {
          args[_key50] = arguments[_key50];
        }

        this._setArguments(args);
        this._stack.push('borderTopColor');
        this._apply();
        return this;
      }
    }, {
      key: 'topLeftRadius',
      value: function topLeftRadius() {
        for (var _len51 = arguments.length, args = Array(_len51), _key51 = 0; _key51 < _len51; _key51++) {
          args[_key51] = arguments[_key51];
        }

        this._setArguments(args);
        this._stack.push('borderTopLeftRadius');
        this._apply();
        return this;
      }
    }, {
      key: 'topRightRadius',
      value: function topRightRadius() {
        for (var _len52 = arguments.length, args = Array(_len52), _key52 = 0; _key52 < _len52; _key52++) {
          args[_key52] = arguments[_key52];
        }

        this._setArguments(args);
        this._stack.push('borderTopRightRadius');
        this._apply();
        return this;
      }
    }, {
      key: 'topStyle',
      value: function topStyle() {
        for (var _len53 = arguments.length, args = Array(_len53), _key53 = 0; _key53 < _len53; _key53++) {
          args[_key53] = arguments[_key53];
        }

        this._setArguments(args);
        this._stack.push('borderTopStyle');
        this._apply();
        return this;
      }
    }, {
      key: 'topWidth',
      value: function topWidth() {
        for (var _len54 = arguments.length, args = Array(_len54), _key54 = 0; _key54 < _len54; _key54++) {
          args[_key54] = arguments[_key54];
        }

        this._setArguments(args);
        this._stack.push('borderTopWidth');
        this._apply();
        return this;
      }
    }, {
      key: 'width',
      value: function width() {
        for (var _len55 = arguments.length, args = Array(_len55), _key55 = 0; _key55 < _len55; _key55++) {
          args[_key55] = arguments[_key55];
        }

        this._setArguments(args);
        this._stack.push('borderWidth');
        this._apply();
        return this;
      }
    }]);

    return Border;
  })(Element);

  var Box = (function (_Element5) {
    function Box(tag) {
      _classCallCheck(this, Box);

      _get(Object.getPrototypeOf(Box.prototype), 'constructor', this).call(this, tag);
    }

    _inherits(Box, _Element5);

    _createClass(Box, [{
      key: 'box',
      value: function box() {
        for (var _len56 = arguments.length, args = Array(_len56), _key56 = 0; _key56 < _len56; _key56++) {
          args[_key56] = arguments[_key56];
        }

        return this;
      }
    }, {
      key: 'decorationBreak',
      value: function decorationBreak() {
        for (var _len57 = arguments.length, args = Array(_len57), _key57 = 0; _key57 < _len57; _key57++) {
          args[_key57] = arguments[_key57];
        }

        this._setArguments(args);
        this._stack.push('boxDecorationBreak');
        this._apply();
        return this;
      }
    }, {
      key: 'shadow',
      value: function shadow() {
        for (var _len58 = arguments.length, args = Array(_len58), _key58 = 0; _key58 < _len58; _key58++) {
          args[_key58] = arguments[_key58];
        }

        this._setArguments(args);
        this._stack.push('boxShadow');
        this._apply();
        return this;
      }
    }, {
      key: 'sizing',
      value: function sizing() {
        for (var _len59 = arguments.length, args = Array(_len59), _key59 = 0; _key59 < _len59; _key59++) {
          args[_key59] = arguments[_key59];
        }

        this._setArguments(args);
        this._stack.push('boxSizing');
        this._apply();
        return this;
      }
    }]);

    return Box;
  })(Element);

  var Column = (function (_Element6) {
    function Column(tag) {
      _classCallCheck(this, Column);

      _get(Object.getPrototypeOf(Column.prototype), 'constructor', this).call(this, tag);
    }

    _inherits(Column, _Element6);

    _createClass(Column, [{
      key: 'column',
      value: function column() {
        for (var _len60 = arguments.length, args = Array(_len60), _key60 = 0; _key60 < _len60; _key60++) {
          args[_key60] = arguments[_key60];
        }

        return this;
      }
    }, {
      key: 'count',
      value: function count() {
        for (var _len61 = arguments.length, args = Array(_len61), _key61 = 0; _key61 < _len61; _key61++) {
          args[_key61] = arguments[_key61];
        }

        this._setArguments(args);
        this._stack.push('columnCount');
        this._apply();
        return this;
      }
    }, {
      key: 'fill',
      value: function fill() {
        for (var _len62 = arguments.length, args = Array(_len62), _key62 = 0; _key62 < _len62; _key62++) {
          args[_key62] = arguments[_key62];
        }

        this._setArguments(args);
        this._stack.push('columnFill');
        this._apply();
        return this;
      }
    }, {
      key: 'gap',
      value: function gap() {
        for (var _len63 = arguments.length, args = Array(_len63), _key63 = 0; _key63 < _len63; _key63++) {
          args[_key63] = arguments[_key63];
        }

        this._setArguments(args);
        this._stack.push('columnGap');
        this._apply();
        return this;
      }
    }, {
      key: 'rule',
      value: function rule() {
        for (var _len64 = arguments.length, args = Array(_len64), _key64 = 0; _key64 < _len64; _key64++) {
          args[_key64] = arguments[_key64];
        }

        this._setArguments(args);
        this._stack.push('columnRule');
        this._apply();
        return this;
      }
    }, {
      key: 'ruleColor',
      value: function ruleColor() {
        for (var _len65 = arguments.length, args = Array(_len65), _key65 = 0; _key65 < _len65; _key65++) {
          args[_key65] = arguments[_key65];
        }

        this._setArguments(args);
        this._stack.push('columnRuleColor');
        this._apply();
        return this;
      }
    }, {
      key: 'ruleStyle',
      value: function ruleStyle() {
        for (var _len66 = arguments.length, args = Array(_len66), _key66 = 0; _key66 < _len66; _key66++) {
          args[_key66] = arguments[_key66];
        }

        this._setArguments(args);
        this._stack.push('columnRuleStyle');
        this._apply();
        return this;
      }
    }, {
      key: 'ruleWidth',
      value: function ruleWidth() {
        for (var _len67 = arguments.length, args = Array(_len67), _key67 = 0; _key67 < _len67; _key67++) {
          args[_key67] = arguments[_key67];
        }

        this._setArguments(args);
        this._stack.push('columnRuleWidth');
        this._apply();
        return this;
      }
    }]);

    return Column;
  })(Element);

  var Counter = (function (_Element7) {
    function Counter(tag) {
      _classCallCheck(this, Counter);

      _get(Object.getPrototypeOf(Counter.prototype), 'constructor', this).call(this, tag);
    }

    _inherits(Counter, _Element7);

    _createClass(Counter, [{
      key: 'counter',
      value: function counter() {
        for (var _len68 = arguments.length, args = Array(_len68), _key68 = 0; _key68 < _len68; _key68++) {
          args[_key68] = arguments[_key68];
        }

        return this;
      }
    }, {
      key: 'increment',
      value: function increment() {
        for (var _len69 = arguments.length, args = Array(_len69), _key69 = 0; _key69 < _len69; _key69++) {
          args[_key69] = arguments[_key69];
        }

        this._setArguments(args);
        this._stack.push('counterIncrement');
        this._apply();
        return this;
      }
    }, {
      key: 'reset',
      value: function reset() {
        for (var _len70 = arguments.length, args = Array(_len70), _key70 = 0; _key70 < _len70; _key70++) {
          args[_key70] = arguments[_key70];
        }

        this._setArguments(args);
        this._stack.push('counterReset');
        this._apply();
        return this;
      }
    }]);

    return Counter;
  })(Element);

  var Flex = (function (_Element8) {
    function Flex(tag) {
      _classCallCheck(this, Flex);

      _get(Object.getPrototypeOf(Flex.prototype), 'constructor', this).call(this, tag);
    }

    _inherits(Flex, _Element8);

    _createClass(Flex, [{
      key: 'flex',
      value: function flex() {
        for (var _len71 = arguments.length, args = Array(_len71), _key71 = 0; _key71 < _len71; _key71++) {
          args[_key71] = arguments[_key71];
        }

        this._setArguments(args);
        this._stack.push('flex');
        this._apply();
        return this;
      }
    }, {
      key: 'basis',
      value: function basis() {
        for (var _len72 = arguments.length, args = Array(_len72), _key72 = 0; _key72 < _len72; _key72++) {
          args[_key72] = arguments[_key72];
        }

        this._setArguments(args);
        this._stack.push('flexBasis');
        this._apply();
        return this;
      }
    }, {
      key: 'direction',
      value: function direction() {
        for (var _len73 = arguments.length, args = Array(_len73), _key73 = 0; _key73 < _len73; _key73++) {
          args[_key73] = arguments[_key73];
        }

        this._setArguments(args);
        this._stack.push('flexDirection');
        this._apply();
        return this;
      }
    }, {
      key: 'flow',
      value: function flow() {
        for (var _len74 = arguments.length, args = Array(_len74), _key74 = 0; _key74 < _len74; _key74++) {
          args[_key74] = arguments[_key74];
        }

        this._setArguments(args);
        this._stack.push('flexFlow');
        this._apply();
        return this;
      }
    }, {
      key: 'grow',
      value: function grow() {
        for (var _len75 = arguments.length, args = Array(_len75), _key75 = 0; _key75 < _len75; _key75++) {
          args[_key75] = arguments[_key75];
        }

        this._setArguments(args);
        this._stack.push('flexGrow');
        this._apply();
        return this;
      }
    }, {
      key: 'shrink',
      value: function shrink() {
        for (var _len76 = arguments.length, args = Array(_len76), _key76 = 0; _key76 < _len76; _key76++) {
          args[_key76] = arguments[_key76];
        }

        this._setArguments(args);
        this._stack.push('flexShrink');
        this._apply();
        return this;
      }
    }, {
      key: 'wrap',
      value: function wrap() {
        for (var _len77 = arguments.length, args = Array(_len77), _key77 = 0; _key77 < _len77; _key77++) {
          args[_key77] = arguments[_key77];
        }

        this._setArguments(args);
        this._stack.push('flexWrap');
        this._apply();
        return this;
      }
    }]);

    return Flex;
  })(Element);

  var Font = (function (_Element9) {
    function Font(tag) {
      _classCallCheck(this, Font);

      _get(Object.getPrototypeOf(Font.prototype), 'constructor', this).call(this, tag);
    }

    _inherits(Font, _Element9);

    _createClass(Font, [{
      key: 'align',
      value: function align() {
        for (var _len78 = arguments.length, args = Array(_len78), _key78 = 0; _key78 < _len78; _key78++) {
          args[_key78] = arguments[_key78];
        }

        return this;
      }
    }, {
      key: 'color',

      /* Shorthand */
      value: function color() {
        for (var _len79 = arguments.length, args = Array(_len79), _key79 = 0; _key79 < _len79; _key79++) {
          args[_key79] = arguments[_key79];
        }

        this._setArguments(args);
        this._stack.push('color');
        this._apply();
        return this;
      }
    }, {
      key: 'font',
      value: function font() {
        for (var _len80 = arguments.length, args = Array(_len80), _key80 = 0; _key80 < _len80; _key80++) {
          args[_key80] = arguments[_key80];
        }

        this._setArguments(args);
        this._stack.push('font');
        this._apply();
        return this;
      }
    }, {
      key: 'family',
      value: function family() {
        for (var _len81 = arguments.length, args = Array(_len81), _key81 = 0; _key81 < _len81; _key81++) {
          args[_key81] = arguments[_key81];
        }

        this._setArguments(args);
        this._stack.push('fontFamily');
        this._apply();
        return this;
      }
    }, {
      key: 'size',
      value: function size() {
        for (var _len82 = arguments.length, args = Array(_len82), _key82 = 0; _key82 < _len82; _key82++) {
          args[_key82] = arguments[_key82];
        }

        this._setArguments(args);
        this._stack.push('fontSize');
        this._apply();
        return this;
      }
    }, {
      key: 'variant',
      value: function variant() {
        for (var _len83 = arguments.length, args = Array(_len83), _key83 = 0; _key83 < _len83; _key83++) {
          args[_key83] = arguments[_key83];
        }

        this._setArguments(args);
        this._stack.push('fontVariant');
        this._apply();
        return this;
      }
    }, {
      key: 'weight',
      value: function weight() {
        for (var _len84 = arguments.length, args = Array(_len84), _key84 = 0; _key84 < _len84; _key84++) {
          args[_key84] = arguments[_key84];
        }

        this._setArguments(args);
        this._stack.push('fontWeight');
        this._apply();
        return this;
      }
    }, {
      key: 'sizeAdjust',
      value: function sizeAdjust() {
        for (var _len85 = arguments.length, args = Array(_len85), _key85 = 0; _key85 < _len85; _key85++) {
          args[_key85] = arguments[_key85];
        }

        this._setArguments(args);
        this._stack.push('fontSizeAdjust');
        this._apply();
        return this;
      }
    }, {
      key: 'stretch',
      value: function stretch() {
        for (var _len86 = arguments.length, args = Array(_len86), _key86 = 0; _key86 < _len86; _key86++) {
          args[_key86] = arguments[_key86];
        }

        this._setArguments(args);
        this._stack.push('fontStretch');
        this._apply();
        return this;
      }
    }]);

    return Font;
  })(Element);

  var List = (function (_Element10) {
    function List(tag) {
      _classCallCheck(this, List);

      _get(Object.getPrototypeOf(List.prototype), 'constructor', this).call(this, tag);
    }

    _inherits(List, _Element10);

    _createClass(List, [{
      key: 'list',
      value: function list() {
        for (var _len87 = arguments.length, args = Array(_len87), _key87 = 0; _key87 < _len87; _key87++) {
          args[_key87] = arguments[_key87];
        }

        return this;
      }
    }, {
      key: 'height',
      value: function height() {
        for (var _len88 = arguments.length, args = Array(_len88), _key88 = 0; _key88 < _len88; _key88++) {
          args[_key88] = arguments[_key88];
        }

        this._setArguments(args);
        this._stack.push('listHeight');
        this._apply();
        return this;
      }
    }, {
      key: 'style',
      value: function style() {
        for (var _len89 = arguments.length, args = Array(_len89), _key89 = 0; _key89 < _len89; _key89++) {
          args[_key89] = arguments[_key89];
        }

        this._setArguments(args);
        this._stack.push('listStyle');
        this._apply();
        return this;
      }
    }, {
      key: 'styleImage',
      value: function styleImage() {
        for (var _len90 = arguments.length, args = Array(_len90), _key90 = 0; _key90 < _len90; _key90++) {
          args[_key90] = arguments[_key90];
        }

        this._setArguments(args);
        this._stack.push('listStyleImage');
        this._apply();
        return this;
      }
    }, {
      key: 'stylePosition',
      value: function stylePosition() {
        for (var _len91 = arguments.length, args = Array(_len91), _key91 = 0; _key91 < _len91; _key91++) {
          args[_key91] = arguments[_key91];
        }

        this._setArguments(args);
        this._stack.push('listStylePosition');
        this._apply();
        return this;
      }
    }, {
      key: 'styleType',
      value: function styleType() {
        for (var _len92 = arguments.length, args = Array(_len92), _key92 = 0; _key92 < _len92; _key92++) {
          args[_key92] = arguments[_key92];
        }

        this._setArguments(args);
        this._stack.push('listStyleType');
        this._apply();
        return this;
      }
    }]);

    return List;
  })(Element);

  var Margin = (function (_Element11) {
    function Margin(tag) {
      _classCallCheck(this, Margin);

      _get(Object.getPrototypeOf(Margin.prototype), 'constructor', this).call(this, tag);
    }

    _inherits(Margin, _Element11);

    _createClass(Margin, [{
      key: 'margin',
      value: function margin() {
        for (var _len93 = arguments.length, args = Array(_len93), _key93 = 0; _key93 < _len93; _key93++) {
          args[_key93] = arguments[_key93];
        }

        this._setArguments(args);
        this._stack.push('margin');
        this._apply();
        return this;
      }
    }, {
      key: 'bottom',
      value: function bottom() {
        for (var _len94 = arguments.length, args = Array(_len94), _key94 = 0; _key94 < _len94; _key94++) {
          args[_key94] = arguments[_key94];
        }

        this._setArguments(args);
        this._stack.push('marginBottom');
        this._apply();
        return this;
      }
    }, {
      key: 'left',
      value: function left() {
        for (var _len95 = arguments.length, args = Array(_len95), _key95 = 0; _key95 < _len95; _key95++) {
          args[_key95] = arguments[_key95];
        }

        this._setArguments(args);
        this._stack.push('marginLeft');
        this._apply();
        return this;
      }
    }, {
      key: 'right',
      value: function right() {
        for (var _len96 = arguments.length, args = Array(_len96), _key96 = 0; _key96 < _len96; _key96++) {
          args[_key96] = arguments[_key96];
        }

        this._setArguments(args);
        this._stack.push('marginRight');
        this._apply();
        return this;
      }
    }, {
      key: 'top',
      value: function top() {
        for (var _len97 = arguments.length, args = Array(_len97), _key97 = 0; _key97 < _len97; _key97++) {
          args[_key97] = arguments[_key97];
        }

        this._setArguments(args);
        this._stack.push('marginTop');
        this._apply();
        return this;
      }
    }]);

    return Margin;
  })(Element);

  var Max = (function (_Element12) {
    function Max(tag) {
      _classCallCheck(this, Max);

      _get(Object.getPrototypeOf(Max.prototype), 'constructor', this).call(this, tag);
    }

    _inherits(Max, _Element12);

    _createClass(Max, [{
      key: 'max',
      value: function max() {
        for (var _len98 = arguments.length, args = Array(_len98), _key98 = 0; _key98 < _len98; _key98++) {
          args[_key98] = arguments[_key98];
        }

        return this;
      }
    }, {
      key: 'height',
      value: function height() {
        for (var _len99 = arguments.length, args = Array(_len99), _key99 = 0; _key99 < _len99; _key99++) {
          args[_key99] = arguments[_key99];
        }

        this._setArguments(args);
        this._stack.push('maxHeight');
        this._apply();
        return this;
      }
    }, {
      key: 'width',
      value: function width() {
        for (var _len100 = arguments.length, args = Array(_len100), _key100 = 0; _key100 < _len100; _key100++) {
          args[_key100] = arguments[_key100];
        }

        this._setArguments(args);
        this._stack.push('maxWidth');
        this._apply();
        return this;
      }
    }]);

    return Max;
  })(Element);

  var Min = (function (_Element13) {
    function Min(tag) {
      _classCallCheck(this, Min);

      _get(Object.getPrototypeOf(Min.prototype), 'constructor', this).call(this, tag);
    }

    _inherits(Min, _Element13);

    _createClass(Min, [{
      key: 'min',
      value: function min() {
        for (var _len101 = arguments.length, args = Array(_len101), _key101 = 0; _key101 < _len101; _key101++) {
          args[_key101] = arguments[_key101];
        }

        return this;
      }
    }, {
      key: 'height',
      value: function height() {
        for (var _len102 = arguments.length, args = Array(_len102), _key102 = 0; _key102 < _len102; _key102++) {
          args[_key102] = arguments[_key102];
        }

        this._setArguments(args);
        this._stack.push('minHeight');
        this._apply();
        return this;
      }
    }, {
      key: 'width',
      value: function width() {
        for (var _len103 = arguments.length, args = Array(_len103), _key103 = 0; _key103 < _len103; _key103++) {
          args[_key103] = arguments[_key103];
        }

        this._setArguments(args);
        this._stack.push('minWidth');
        this._apply();
        return this;
      }
    }]);

    return Min;
  })(Element);

  var Nav = (function (_Element14) {
    function Nav(tag) {
      _classCallCheck(this, Nav);

      _get(Object.getPrototypeOf(Nav.prototype), 'constructor', this).call(this, tag);
    }

    _inherits(Nav, _Element14);

    _createClass(Nav, [{
      key: 'nav',
      value: function nav() {
        for (var _len104 = arguments.length, args = Array(_len104), _key104 = 0; _key104 < _len104; _key104++) {
          args[_key104] = arguments[_key104];
        }

        return this;
      }
    }, {
      key: 'down',
      value: function down() {
        for (var _len105 = arguments.length, args = Array(_len105), _key105 = 0; _key105 < _len105; _key105++) {
          args[_key105] = arguments[_key105];
        }

        this._setArguments(args);
        this._stack.push('navDown');
        this._apply();
        return this;
      }
    }, {
      key: 'index',
      value: function index() {
        for (var _len106 = arguments.length, args = Array(_len106), _key106 = 0; _key106 < _len106; _key106++) {
          args[_key106] = arguments[_key106];
        }

        this._setArguments(args);
        this._stack.push('navIndex');
        this._apply();
        return this;
      }
    }, {
      key: 'left',
      value: function left() {
        for (var _len107 = arguments.length, args = Array(_len107), _key107 = 0; _key107 < _len107; _key107++) {
          args[_key107] = arguments[_key107];
        }

        this._setArguments(args);
        this._stack.push('navLeft');
        this._apply();
        return this;
      }
    }, {
      key: 'right',
      value: function right() {
        for (var _len108 = arguments.length, args = Array(_len108), _key108 = 0; _key108 < _len108; _key108++) {
          args[_key108] = arguments[_key108];
        }

        this._setArguments(args);
        this._stack.push('navRight');
        this._apply();
        return this;
      }
    }, {
      key: 'up',
      value: function up() {
        for (var _len109 = arguments.length, args = Array(_len109), _key109 = 0; _key109 < _len109; _key109++) {
          args[_key109] = arguments[_key109];
        }

        this._setArguments(args);
        this._stack.push('navUp');
        this._apply();
        return this;
      }
    }]);

    return Nav;
  })(Element);

  var Outline = (function (_Element15) {
    function Outline(tag) {
      _classCallCheck(this, Outline);

      _get(Object.getPrototypeOf(Outline.prototype), 'constructor', this).call(this, tag);
    }

    _inherits(Outline, _Element15);

    _createClass(Outline, [{
      key: 'outline',
      value: function outline() {
        for (var _len110 = arguments.length, args = Array(_len110), _key110 = 0; _key110 < _len110; _key110++) {
          args[_key110] = arguments[_key110];
        }

        this._setArguments(args);
        this._stack.push('outline');
        this._apply();
        return this;
      }
    }, {
      key: 'color',
      value: function color() {
        for (var _len111 = arguments.length, args = Array(_len111), _key111 = 0; _key111 < _len111; _key111++) {
          args[_key111] = arguments[_key111];
        }

        this._setArguments(args);
        this._stack.push('outlineColor');
        this._apply();
        return this;
      }
    }, {
      key: 'offset',
      value: function offset() {
        for (var _len112 = arguments.length, args = Array(_len112), _key112 = 0; _key112 < _len112; _key112++) {
          args[_key112] = arguments[_key112];
        }

        this._setArguments(args);
        this._stack.push('outlineOffset');
        this._apply();
        return this;
      }
    }, {
      key: 'style',
      value: function style() {
        for (var _len113 = arguments.length, args = Array(_len113), _key113 = 0; _key113 < _len113; _key113++) {
          args[_key113] = arguments[_key113];
        }

        this._setArguments(args);
        this._stack.push('outlineStyle');
        this._apply();
        return this;
      }
    }, {
      key: 'width',
      value: function width() {
        for (var _len114 = arguments.length, args = Array(_len114), _key114 = 0; _key114 < _len114; _key114++) {
          args[_key114] = arguments[_key114];
        }

        this._setArguments(args);
        this._stack.push('outlineWidth');
        this._apply();
        return this;
      }
    }]);

    return Outline;
  })(Element);

  var Overflow = (function (_Element16) {
    function Overflow(tag) {
      _classCallCheck(this, Overflow);

      _get(Object.getPrototypeOf(Overflow.prototype), 'constructor', this).call(this, tag);
    }

    _inherits(Overflow, _Element16);

    _createClass(Overflow, [{
      key: 'overflow',
      value: function overflow() {
        for (var _len115 = arguments.length, args = Array(_len115), _key115 = 0; _key115 < _len115; _key115++) {
          args[_key115] = arguments[_key115];
        }

        this._setArguments(args);
        this._stack.push('overflow');
        this._apply();
        return this;
      }
    }, {
      key: 'x',
      value: function x() {
        for (var _len116 = arguments.length, args = Array(_len116), _key116 = 0; _key116 < _len116; _key116++) {
          args[_key116] = arguments[_key116];
        }

        this._setArguments(args);
        this._stack.push('overflowX');
        this._apply();
        return this;
      }
    }, {
      key: 'y',
      value: function y() {
        for (var _len117 = arguments.length, args = Array(_len117), _key117 = 0; _key117 < _len117; _key117++) {
          args[_key117] = arguments[_key117];
        }

        this._setArguments(args);
        this._stack.push('overflowY');
        this._apply();
        return this;
      }
    }]);

    return Overflow;
  })(Element);

  var Padding = (function (_Element17) {
    function Padding(tag) {
      _classCallCheck(this, Padding);

      _get(Object.getPrototypeOf(Padding.prototype), 'constructor', this).call(this, tag);
    }

    _inherits(Padding, _Element17);

    _createClass(Padding, [{
      key: 'padding',
      value: function padding() {
        for (var _len118 = arguments.length, args = Array(_len118), _key118 = 0; _key118 < _len118; _key118++) {
          args[_key118] = arguments[_key118];
        }

        this._setArguments(args);
        this._stack.push('padding');
        this._apply();
        return this;
      }
    }, {
      key: 'bottom',
      value: function bottom() {
        for (var _len119 = arguments.length, args = Array(_len119), _key119 = 0; _key119 < _len119; _key119++) {
          args[_key119] = arguments[_key119];
        }

        this._setArguments(args);
        this._stack.push('paddingBottom');
        this._apply();
        return this;
      }
    }, {
      key: 'left',
      value: function left() {
        for (var _len120 = arguments.length, args = Array(_len120), _key120 = 0; _key120 < _len120; _key120++) {
          args[_key120] = arguments[_key120];
        }

        this._setArguments(args);
        this._stack.push('paddingLeft');
        this._apply();
        return this;
      }
    }, {
      key: 'right',
      value: function right() {
        for (var _len121 = arguments.length, args = Array(_len121), _key121 = 0; _key121 < _len121; _key121++) {
          args[_key121] = arguments[_key121];
        }

        this._setArguments(args);
        this._stack.push('paddingRight');
        this._apply();
        return this;
      }
    }, {
      key: 'top',
      value: function top() {
        for (var _len122 = arguments.length, args = Array(_len122), _key122 = 0; _key122 < _len122; _key122++) {
          args[_key122] = arguments[_key122];
        }

        this._setArguments(args);
        this._stack.push('paddingTop');
        this._apply();
        return this;
      }
    }, {
      key: 'breakAfter',
      value: function breakAfter() {
        for (var _len123 = arguments.length, args = Array(_len123), _key123 = 0; _key123 < _len123; _key123++) {
          args[_key123] = arguments[_key123];
        }

        this._setArguments(args);
        this._stack.push('paddingBreakAfter');
        this._apply();
        return this;
      }
    }, {
      key: 'breakBefore',
      value: function breakBefore() {
        for (var _len124 = arguments.length, args = Array(_len124), _key124 = 0; _key124 < _len124; _key124++) {
          args[_key124] = arguments[_key124];
        }

        this._setArguments(args);
        this._stack.push('paddingBreakBefore');
        this._apply();
        return this;
      }
    }, {
      key: 'breakInside',
      value: function breakInside() {
        for (var _len125 = arguments.length, args = Array(_len125), _key125 = 0; _key125 < _len125; _key125++) {
          args[_key125] = arguments[_key125];
        }

        this._setArguments(args);
        this._stack.push('paddingBreakInside');
        this._apply();
        return this;
      }
    }]);

    return Padding;
  })(Element);

  var Page = (function (_Element18) {
    function Page(tag) {
      _classCallCheck(this, Page);

      _get(Object.getPrototypeOf(Page.prototype), 'constructor', this).call(this, tag);
    }

    _inherits(Page, _Element18);

    _createClass(Page, [{
      key: 'page',
      value: function page() {
        for (var _len126 = arguments.length, args = Array(_len126), _key126 = 0; _key126 < _len126; _key126++) {
          args[_key126] = arguments[_key126];
        }

        return this;
      }
    }, {
      key: 'breakAfter',
      value: function breakAfter() {
        for (var _len127 = arguments.length, args = Array(_len127), _key127 = 0; _key127 < _len127; _key127++) {
          args[_key127] = arguments[_key127];
        }

        this._setArguments(args);
        this._stack.push('pageBreakAfter');
        this._apply();
        return this;
      }
    }, {
      key: 'breakBefore',
      value: function breakBefore() {
        for (var _len128 = arguments.length, args = Array(_len128), _key128 = 0; _key128 < _len128; _key128++) {
          args[_key128] = arguments[_key128];
        }

        this._setArguments(args);
        this._stack.push('pageBreakBefore');
        this._apply();
        return this;
      }
    }, {
      key: 'breakInside',
      value: function breakInside() {
        for (var _len129 = arguments.length, args = Array(_len129), _key129 = 0; _key129 < _len129; _key129++) {
          args[_key129] = arguments[_key129];
        }

        this._setArguments(args);
        this._stack.push('pageBreakInside');
        this._apply();
        return this;
      }
    }]);

    return Page;
  })(Element);

  var Perspective = (function (_Element19) {
    function Perspective(tag) {
      _classCallCheck(this, Perspective);

      _get(Object.getPrototypeOf(Perspective.prototype), 'constructor', this).call(this, tag);
    }

    _inherits(Perspective, _Element19);

    _createClass(Perspective, [{
      key: 'perspective',
      value: function perspective() {
        for (var _len130 = arguments.length, args = Array(_len130), _key130 = 0; _key130 < _len130; _key130++) {
          args[_key130] = arguments[_key130];
        }

        this._setArguments(args);
        this._stack.push('perspective');
        this._apply();
        return this;
      }
    }, {
      key: 'origin',
      value: function origin() {
        for (var _len131 = arguments.length, args = Array(_len131), _key131 = 0; _key131 < _len131; _key131++) {
          args[_key131] = arguments[_key131];
        }

        this._setArguments(args);
        this._stack.push('perspectiveOrigin');
        this._apply();
        return this;
      }
    }]);

    return Perspective;
  })(Element);

  var Text = (function (_Element20) {
    function Text(tag) {
      _classCallCheck(this, Text);

      _get(Object.getPrototypeOf(Text.prototype), 'constructor', this).call(this, tag);
    }

    _inherits(Text, _Element20);

    _createClass(Text, [{
      key: 'text',
      value: function text() {
        for (var _len132 = arguments.length, args = Array(_len132), _key132 = 0; _key132 < _len132; _key132++) {
          args[_key132] = arguments[_key132];
        }

        return this;
      }
    }, {
      key: 'align',
      value: function align() {
        for (var _len133 = arguments.length, args = Array(_len133), _key133 = 0; _key133 < _len133; _key133++) {
          args[_key133] = arguments[_key133];
        }

        this._setArguments(args);
        this._stack.push('textAlign');
        this._apply();
        return this;
      }
    }, {
      key: 'alignLast',
      value: function alignLast() {
        for (var _len134 = arguments.length, args = Array(_len134), _key134 = 0; _key134 < _len134; _key134++) {
          args[_key134] = arguments[_key134];
        }

        this._setArguments(args);
        this._stack.push('textAlignLast');
        this._apply();
        return this;
      }
    }, {
      key: 'decoration',
      value: function decoration() {
        for (var _len135 = arguments.length, args = Array(_len135), _key135 = 0; _key135 < _len135; _key135++) {
          args[_key135] = arguments[_key135];
        }

        this._setArguments(args);
        this._stack.push('textDecoration');
        this._apply();
        return this;
      }
    }, {
      key: 'decorationColor',
      value: function decorationColor() {
        for (var _len136 = arguments.length, args = Array(_len136), _key136 = 0; _key136 < _len136; _key136++) {
          args[_key136] = arguments[_key136];
        }

        this._setArguments(args);
        this._stack.push('textDecorationColor');
        this._apply();
        return this;
      }
    }, {
      key: 'decorationLine',
      value: function decorationLine() {
        for (var _len137 = arguments.length, args = Array(_len137), _key137 = 0; _key137 < _len137; _key137++) {
          args[_key137] = arguments[_key137];
        }

        this._setArguments(args);
        this._stack.push('textDecorationLine');
        this._apply();
        return this;
      }
    }, {
      key: 'decorationStyle',
      value: function decorationStyle() {
        for (var _len138 = arguments.length, args = Array(_len138), _key138 = 0; _key138 < _len138; _key138++) {
          args[_key138] = arguments[_key138];
        }

        this._setArguments(args);
        this._stack.push('textDecorationStyle');
        this._apply();
        return this;
      }
    }, {
      key: 'indent',
      value: function indent() {
        for (var _len139 = arguments.length, args = Array(_len139), _key139 = 0; _key139 < _len139; _key139++) {
          args[_key139] = arguments[_key139];
        }

        this._setArguments(args);
        this._stack.push('textIndent');
        this._apply();
        return this;
      }
    }, {
      key: 'justify',
      value: function justify() {
        for (var _len140 = arguments.length, args = Array(_len140), _key140 = 0; _key140 < _len140; _key140++) {
          args[_key140] = arguments[_key140];
        }

        this._setArguments(args);
        this._stack.push('textJustify');
        this._apply();
        return this;
      }
    }, {
      key: 'overflow',
      value: function overflow() {
        for (var _len141 = arguments.length, args = Array(_len141), _key141 = 0; _key141 < _len141; _key141++) {
          args[_key141] = arguments[_key141];
        }

        this._setArguments(args);
        this._stack.push('textOverflow');
        this._apply();
        return this;
      }
    }, {
      key: 'shadow',
      value: function shadow() {
        for (var _len142 = arguments.length, args = Array(_len142), _key142 = 0; _key142 < _len142; _key142++) {
          args[_key142] = arguments[_key142];
        }

        this._setArguments(args);
        this._stack.push('textShadow');
        this._apply();
        return this;
      }
    }, {
      key: 'transform',
      value: function transform() {
        for (var _len143 = arguments.length, args = Array(_len143), _key143 = 0; _key143 < _len143; _key143++) {
          args[_key143] = arguments[_key143];
        }

        this._setArguments(args);
        this._stack.push('textShadow');
        this._apply();
        return this;
      }
    }]);

    return Text;
  })(Element);

  var Transform = (function (_Element21) {
    function Transform(tag) {
      _classCallCheck(this, Transform);

      _get(Object.getPrototypeOf(Transform.prototype), 'constructor', this).call(this, tag);
    }

    _inherits(Transform, _Element21);

    _createClass(Transform, [{
      key: 'tranform',
      value: function tranform() {
        for (var _len144 = arguments.length, args = Array(_len144), _key144 = 0; _key144 < _len144; _key144++) {
          args[_key144] = arguments[_key144];
        }

        this._setArguments(args);
        this._stack.push('tranform');
        this._apply();
        return this;
      }
    }, {
      key: 'origin',
      value: function origin() {
        for (var _len145 = arguments.length, args = Array(_len145), _key145 = 0; _key145 < _len145; _key145++) {
          args[_key145] = arguments[_key145];
        }

        this._setArguments(args);
        this._stack.push('transformOrigin');
        this._apply();
        return this;
      }
    }, {
      key: 'style',
      value: function style() {
        for (var _len146 = arguments.length, args = Array(_len146), _key146 = 0; _key146 < _len146; _key146++) {
          args[_key146] = arguments[_key146];
        }

        this._setArguments(args);
        this._stack.push('tranformStyle');
        this._apply();
        return this;
      }
    }]);

    return Transform;
  })(Element);

  var Transition = (function (_Element22) {
    function Transition(tag) {
      _classCallCheck(this, Transition);

      _get(Object.getPrototypeOf(Transition.prototype), 'constructor', this).call(this, tag);
    }

    _inherits(Transition, _Element22);

    _createClass(Transition, [{
      key: 'transition',
      value: function transition() {
        for (var _len147 = arguments.length, args = Array(_len147), _key147 = 0; _key147 < _len147; _key147++) {
          args[_key147] = arguments[_key147];
        }

        return this;
      }
    }, {
      key: 'property',
      value: function property() {
        for (var _len148 = arguments.length, args = Array(_len148), _key148 = 0; _key148 < _len148; _key148++) {
          args[_key148] = arguments[_key148];
        }

        this._setArguments(args);
        this._stack.push('transitionProperty');
        this._apply();
        return this;
      }
    }, {
      key: 'duration',
      value: function duration() {
        for (var _len149 = arguments.length, args = Array(_len149), _key149 = 0; _key149 < _len149; _key149++) {
          args[_key149] = arguments[_key149];
        }

        this._setArguments(args);
        this._stack.push('transitionDuration');
        this._apply();
        return this;
      }
    }, {
      key: 'timingFunction',
      value: function timingFunction() {
        for (var _len150 = arguments.length, args = Array(_len150), _key150 = 0; _key150 < _len150; _key150++) {
          args[_key150] = arguments[_key150];
        }

        this._setArguments(args);
        this._stack.push('transitionTimingFunction');
        this._apply();
        return this;
      }
    }, {
      key: 'delay',
      value: function delay() {
        for (var _len151 = arguments.length, args = Array(_len151), _key151 = 0; _key151 < _len151; _key151++) {
          args[_key151] = arguments[_key151];
        }

        this._setArguments(args);
        this._stack.push('transitionDelay');
        this._apply();
        return this;
      }
    }]);

    return Transition;
  })(Element);

  var Word = (function (_Element23) {
    function Word(tag) {
      _classCallCheck(this, Word);

      _get(Object.getPrototypeOf(Word.prototype), 'constructor', this).call(this, tag);
    }

    _inherits(Word, _Element23);

    _createClass(Word, [{
      key: 'word',
      value: function word() {
        for (var _len152 = arguments.length, args = Array(_len152), _key152 = 0; _key152 < _len152; _key152++) {
          args[_key152] = arguments[_key152];
        }

        return this;
      }
    }, {
      key: 'break',
      value: function _break() {
        for (var _len153 = arguments.length, args = Array(_len153), _key153 = 0; _key153 < _len153; _key153++) {
          args[_key153] = arguments[_key153];
        }

        this._setArguments(args);
        this._stack.push('wordBreak');
        this._apply();
        return this;
      }
    }, {
      key: 'spacing',
      value: function spacing() {
        for (var _len154 = arguments.length, args = Array(_len154), _key154 = 0; _key154 < _len154; _key154++) {
          args[_key154] = arguments[_key154];
        }

        this._setArguments(args);
        this._stack.push('wordSpacing');
        this._apply();
        return this;
      }
    }, {
      key: 'wrap',
      value: function wrap() {
        for (var _len155 = arguments.length, args = Array(_len155), _key155 = 0; _key155 < _len155; _key155++) {
          args[_key155] = arguments[_key155];
        }

        this._setArguments(args);
        this._stack.push('wordWrap');
        this._apply();
        return this;
      }
    }]);

    return Word;
  })(Element);

  var CSS = (function (_Element24) {
    function CSS(tag) {
      _classCallCheck(this, CSS);

      _get(Object.getPrototypeOf(CSS.prototype), 'constructor', this).call(this, tag);
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

    _inherits(CSS, _Element24);

    _createClass(CSS, [{
      key: 'then',

      /* 'then' function bridges the classes
      *  @example:
      *  new CSS(...).background().color()
      *  .then().font().color();
      */
      value: function then() {
        return this;
      }
    }, {
      key: 'align',
      value: function align() {
        this._Align.align.apply(this._Align, arguments);
      }
    }, {
      key: 'animation',
      value: function animation() {
        return this._Animation.animation.apply(this._Animation, arguments);
      }
    }, {
      key: 'background',
      value: function background() {
        return this._Background.background.apply(this._Background, arguments);
      }
    }, {
      key: 'border',
      value: function border() {
        return this._Border.border.apply(this._Border, arguments);
      }
    }, {
      key: 'box',
      value: function box() {
        return this._Box.box.apply(this._Box, arguments);
      }
    }, {
      key: 'column',
      value: function column() {
        return this._Column.column.apply(this._Column, arguments);
      }
    }, {
      key: 'counter',
      value: function counter() {
        return this._Counter.counter.apply(this._Counter, arguments);
      }
    }, {
      key: 'flex',
      value: function flex() {
        return this._Flex.flex.apply(this._Flex, arguments);
      }
    }, {
      key: 'font',
      value: function font() {
        return this._Font.font.apply(this._Font, arguments);
      }
    }, {
      key: 'list',
      value: function list() {
        return this._List.list.apply(this._List, arguments);
      }
    }, {
      key: 'margin',
      value: function margin() {
        return this._Margin.margin.apply(this._Margin, arguments);
      }
    }, {
      key: 'max',
      value: function max() {
        return this._Max.max.apply(this._Max, arguments);
      }
    }, {
      key: 'min',
      value: function min() {
        return this._Min.min.apply(this._Min, arguments);
      }
    }, {
      key: 'nav',
      value: function nav() {
        return this._Nav.nav.apply(this._Nav, arguments);
      }
    }, {
      key: 'outline',
      value: function outline() {
        return this._Outline.outline.apply(this._Outline, arguments);
      }
    }, {
      key: 'overflow',
      value: function overflow() {
        return this._Overflow.overflow.apply(this._Overflow, arguments);
      }
    }, {
      key: 'padding',
      value: function padding() {
        return this._Padding.padding.apply(this._Padding, arguments);
      }
    }, {
      key: 'page',
      value: function page() {
        return this._Page.page.apply(this._Page, arguments);
      }
    }, {
      key: 'perspective',
      value: function perspective() {
        return this._Perspective.perspective.apply(this._Perspective, arguments);
      }
    }, {
      key: 'text',
      value: function text() {
        return this._Text.text.apply(this._Text, arguments);
      }
    }, {
      key: 'transition',
      value: function transition() {
        return this._Transition.transition.apply(this._Transition, arguments);
      }
    }, {
      key: 'word',
      value: function word() {
        return this._Word.word.apply(this._Word, arguments);
      }
    }]);

    return CSS;
  })(Element);

  var css = function css(tag) {
    return new CSS(tag);
  };
  css['class'] = CSS;

  module.exports = css;
});