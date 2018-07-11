(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', '../uiElements/Form', '../uiElements/ErrorMessage', '../uiElements/ButtonSubmit'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('../uiElements/Form'), require('../uiElements/ErrorMessage'), require('../uiElements/ButtonSubmit'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.Form, global.ErrorMessage, global.ButtonSubmit);
    global.Register = mod.exports;
  }
})(this, function (exports, _react, _Form2, _ErrorMessage, _ButtonSubmit) {
  'use strict';

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

  var Register = function (_Form) {
    _inherits(Register, _Form);

    function Register() {
      _classCallCheck(this, Register);

      return _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).apply(this, arguments));
    }

    _createClass(Register, [{
      key: 'handleInviteSuccess',
      value: function handleInviteSuccess() {
        if (this.props.onInviteSuccess === null) return;
        this.props.onInviteSuccess();
      }
    }, {
      key: 'render',
      value: function render() {
        var form = _react2.default.createElement(
          'form',
          { method: 'post', action: this.state.urlBase + this.props.action, autoComplete: 'off', onSubmit: this.onSubmit },
          _react2.default.createElement(
            'div',
            null,
            '\u8ACB\u586B\u5BEB\u4F60\u8CC7\u52A9\u300A\u52C1\u63EA\u9AD4\u7C4C\u65D7\u9020\u5B57\u8A08\u5283\u300B\u6642\uFF0C\u6240\u4F7F\u7528\u7684\u96FB\u90F5\u5730\u5740\u3002'
          ),
          _react2.default.createElement('div', { className: 'br' }),
          _react2.default.createElement(
            'div',
            { className: 'ui left icon input' },
            _react2.default.createElement('input', { title: 'email', name: 'email', type: 'email', placeholder: '\u96FB\u90F5\u5730\u5740', autoComplete: 'off', required: 'required', disabled: this.state.isLoading }),
            _react2.default.createElement('i', { className: 'mail icon' })
          ),
          _react2.default.createElement('div', { className: 'br' }),
          _react2.default.createElement(
            _ButtonSubmit2.default,
            { isLoading: this.state.isLoading },
            '\u767C\u51FA\u8A3B\u518A\u96FB\u90F5'
          )
        );

        var thankyou = _react2.default.createElement(
          'div',
          null,
          '\u8B1D\u8B1D\u4F60\u7684\u8A3B\u518A\uFF0C\u9080\u8ACB\u96FB\u90F5\u5DF2\u9001\u51FA\u3002\u8ACB\u6AA2\u67E5\u4F60\u7684\u96FB\u90F5\u4FE1\u7BB1\u3002'
        );

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h3',
            null,
            _react2.default.createElement('i', { className: 'write icon' }),
            '\u8A3B\u518A\u6210\u70BA\u7DB2\u7AD9\u6210\u54E1'
          ),
          this.props.isInvited ? thankyou : form,
          _react2.default.createElement(_ErrorMessage2.default, { message: this.state.error })
        );
      }
    }, {
      key: 'onResult',
      value: function onResult(data) {
        _get(Register.prototype.__proto__ || Object.getPrototypeOf(Register.prototype), 'onResult', this).call(this, data);
        if (data.status !== "success") return;

        this.handleInviteSuccess();
      }
    }]);

    return Register;
  }(_Form3.default);

  exports.default = Register;
});

//# sourceMappingURL=Register.js.map