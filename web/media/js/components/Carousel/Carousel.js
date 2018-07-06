(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "react-dom", "hammerjs"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("react-dom"), require("hammerjs"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactDom, global.hammerjs);
    global.Carousel = mod.exports;
  }
})(this, function (exports, _react, _reactDom, _hammerjs) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _hammerjs2 = _interopRequireDefault(_hammerjs);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var Carousel = function (_React$Component) {
    _inherits(Carousel, _React$Component);

    function Carousel(props) {
      _classCallCheck(this, Carousel);

      var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

      _this.handleSwipe = _this.handleSwipe.bind(_this);
      return _this;
    }

    _createClass(Carousel, [{
      key: "handleSwipe",
      value: function handleSwipe() {
        if (this.props.onPageChange === null) return;

        this.props.onPageChange(1);
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.hammer = new _hammerjs2.default(_reactDom2.default.findDOMNode(this));
        this.hammer.get('swipe').set({ direction: _hammerjs2.default.DIRECTION_HORIZONTAL });
        this.hammer.on('swiperight', this.handleSwipe);
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        this.setState({ page: nextProps.page });
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.hammer.stop(true);
        this.hammer.destroy();
      }
    }, {
      key: "render",
      value: function render() {
        var lists = this.props.children.map(function (item, index) {
          return _react2.default.createElement(
            "li",
            { key: index },
            item
          );
        });

        return _react2.default.createElement(
          "div",
          { className: "carousel", "data-active": this.props.page },
          _react2.default.createElement(
            "ul",
            { className: "box" },
            lists
          )
        );
      }
    }]);

    return Carousel;
  }(_react2.default.Component);

  exports.default = Carousel;
});

//# sourceMappingURL=Carousel.js.map