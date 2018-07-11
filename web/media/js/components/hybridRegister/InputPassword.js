(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "../uiElements/Form", "../uiElements/ErrorMessage", "../uiElements/ButtonSubmit"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("../uiElements/Form"), require("../uiElements/ErrorMessage"), require("../uiElements/ButtonSubmit"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.Form, global.ErrorMessage, global.ButtonSubmit);
    global.InputPassword = mod.exports;
  }
})(this, function (exports, _react, _Form2, _ErrorMessage, _ButtonSubmit) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _Form3 = _interopRequireDefault(_Form2);

  var _ErrorMessage2 = _interopRequireDefault(_ErrorMessage);

  var _ButtonSubmit2 = _interopRequireDefault(_ButtonSubmit);

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

  var InputPassword = function (_Form) {
    _inherits(InputPassword, _Form);

    function InputPassword(props) {
      _classCallCheck(this, InputPassword);

      var _this = _possibleConstructorReturn(this, (InputPassword.__proto__ || Object.getPrototypeOf(InputPassword)).call(this, props));

      _this.onNicknameChange = _this.onNicknameChange.bind(_this);
      return _this;
    }

    _createClass(InputPassword, [{
      key: "onResult",
      value: function onResult(data) {
        _get(InputPassword.prototype.__proto__ || Object.getPrototypeOf(InputPassword.prototype), "onResult", this).call(this, data);
        this.props.onRegister(data);
      }
    }, {
      key: "onNicknameChange",
      value: function onNicknameChange(e) {
        e.preventDefault();
        this.props.onNicknameChange(e.target.value);
      }
    }, {
      key: "render",
      value: function render() {
        return _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "h3",
            { className: "ui" },
            _react2.default.createElement("i", { className: "ellipsis horizontal icon" }),
            "\u8A2D\u5B9A\u767B\u5165\u5BC6\u78BC"
          ),
          _react2.default.createElement(
            "form",
            { method: "post", action: this.state.urlBase + this.props.action, autoComplete: "off", onSubmit: this.onSubmit },
            _react2.default.createElement("input", { type: "hidden", name: "destination", value: "" }),
            _react2.default.createElement("input", { type: "hidden", name: "code", value: this.props.code }),
            _react2.default.createElement(
              "div",
              { className: "ui left icon input" },
              _react2.default.createElement("input", { title: "nickname", name: "nickname", type: "text", placeholder: "\u66B1\u7A31", autoComplete: "off", required: "required", disabled: this.state.isLoading, defaultValue: this.props.defaultValue, onChange: this.onNicknameChange }),
              _react2.default.createElement("i", { className: "user icon" })
            ),
            _react2.default.createElement("div", { className: "br" }),
            _react2.default.createElement(
              "div",
              { className: "ui left icon input" },
              _react2.default.createElement("input", { title: "password", name: "password", type: "password", placeholder: "\u5BC6\u78BC", autoComplete: "new-password", required: "required", disabled: this.state.isLoading }),
              _react2.default.createElement("i", { className: "lock icon" })
            ),
            _react2.default.createElement("div", { className: "br" }),
            _react2.default.createElement(
              _ButtonSubmit2.default,
              { isLoading: this.state.isLoading },
              "\u63D0\u4EA4"
            ),
            _react2.default.createElement("div", { className: "br" }),
            _react2.default.createElement(_ErrorMessage2.default, { message: this.state.error })
          )
        );
      }
    }]);

    return InputPassword;
  }(_Form3.default);

  exports.default = InputPassword;
});

//# sourceMappingURL=InputPassword.js.map