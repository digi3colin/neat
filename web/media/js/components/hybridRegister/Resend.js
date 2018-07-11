(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "../uiElements/Form", "../uiElements/ButtonSubmit", "../uiElements/ErrorMessage"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("../uiElements/Form"), require("../uiElements/ButtonSubmit"), require("../uiElements/ErrorMessage"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.Form, global.ButtonSubmit, global.ErrorMessage);
    global.Resend = mod.exports;
  }
})(this, function (exports, _react, _Form2, _ButtonSubmit, _ErrorMessage) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _Form3 = _interopRequireDefault(_Form2);

  var _ButtonSubmit2 = _interopRequireDefault(_ButtonSubmit);

  var _ErrorMessage2 = _interopRequireDefault(_ErrorMessage);

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

  var _get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

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

  var Resend = function (_Form) {
    _inherits(Resend, _Form);

    function Resend() {
      _classCallCheck(this, Resend);

      return _possibleConstructorReturn(this, (Resend.__proto__ || Object.getPrototypeOf(Resend)).apply(this, arguments));
    }

    _createClass(Resend, [{
      key: "onResult",
      value: function onResult(data) {
        var _this2 = this;

        _get(Resend.prototype.__proto__ || Object.getPrototypeOf(Resend.prototype), "onResult", this).call(this, data);
        this.props.onResult(data);
        if (data.status !== 'success') return;

        this.setState({
          success: "確認電郵已寄出"
        });

        clearTimeout(this.iid);
        this.iid = setTimeout(function () {
          _this2.setState({ success: '' });
        }, 4000);
      }
    }, {
      key: "render",
      value: function render() {
        return _react2.default.createElement(
          "form",
          { method: "post", action: this.state.urlBase + this.props.action, autoComplete: "off", onSubmit: this.onSubmit },
          _react2.default.createElement(
            "div",
            { className: "ui left icon input" },
            _react2.default.createElement("input", { title: "username", name: "username", type: "email", placeholder: "\u96FB\u90F5\u5730\u5740", autoComplete: "off", required: "required", disabled: this.state.isLoading, defaultValue: this.props.email }),
            _react2.default.createElement("i", { className: "mail icon" })
          ),
          _react2.default.createElement("div", { className: "br" }),
          _react2.default.createElement(
            _ButtonSubmit2.default,
            { isLoading: this.state.isLoading },
            this.props.label
          ),
          _react2.default.createElement(_ErrorMessage2.default, { message: this.state.error }),
          _react2.default.createElement(_ErrorMessage2.default, { message: this.state.success })
        );
      }
    }]);

    return Resend;
  }(_Form3.default);

  exports.default = Resend;
});

//# sourceMappingURL=Resend.js.map