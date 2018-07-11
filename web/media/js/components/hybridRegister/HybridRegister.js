(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', '../uiElements/Step', '../uiElements/Steps', '../Carousel/Carousel', './Select', './InputPassword', './Resend', './Login', 'react-redux'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('../uiElements/Step'), require('../uiElements/Steps'), require('../Carousel/Carousel'), require('./Select'), require('./InputPassword'), require('./Resend'), require('./Login'), require('react-redux'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.Step, global.Steps, global.Carousel, global.Select, global.InputPassword, global.Resend, global.Login, global.reactRedux);
    global.HybridRegister = mod.exports;
  }
})(this, function (exports, _react, _Step, _Steps, _Carousel, _Select, _InputPassword, _Resend, _Login, _reactRedux) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _Step2 = _interopRequireDefault(_Step);

  var _Steps2 = _interopRequireDefault(_Steps);

  var _Carousel2 = _interopRequireDefault(_Carousel);

  var _Select2 = _interopRequireDefault(_Select);

  var _InputPassword2 = _interopRequireDefault(_InputPassword);

  var _Resend2 = _interopRequireDefault(_Resend);

  var _Login2 = _interopRequireDefault(_Login);

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

  var HybridRegister = function (_React$Component) {
    _inherits(HybridRegister, _React$Component);

    function HybridRegister(props) {
      _classCallCheck(this, HybridRegister);

      var _this = _possibleConstructorReturn(this, (HybridRegister.__proto__ || Object.getPrototypeOf(HybridRegister)).call(this, props));

      _this.onPageChange = _this.onPageChange.bind(_this);
      _this.onRegister = _this.onRegister.bind(_this);
      _this.onResendConfirmation = _this.onResendConfirmation.bind(_this);
      _this.onNicknameChange = _this.onNicknameChange.bind(_this);
      _this.onSignedIn = _this.onSignedIn.bind(_this);
      return _this;
    }

    _createClass(HybridRegister, [{
      key: 'onPageChange',
      value: function onPageChange(page) {
        this.props.onPageChange(page);
      }
    }, {
      key: 'onRegister',
      value: function onRegister(data) {
        this.props.onRegister(data);
      }
    }, {
      key: 'onResendConfirmation',
      value: function onResendConfirmation(data) {
        this.props.onResendConfirmation(data);
      }
    }, {
      key: 'onNicknameChange',
      value: function onNicknameChange(value) {
        this.props.onNicknameChange(value);
      }
    }, {
      key: 'onSignedIn',
      value: function onSignedIn(data) {
        this.props.onSignedIn(data);
      }
    }, {
      key: 'render',
      value: function render() {
        var form = void 0;
        switch (this.props.step) {
          case 1:
            form = _react2.default.createElement(
              _Carousel2.default,
              { onPageChange: this.onPageChange, page: this.props.page },
              _react2.default.createElement(_Select2.default, { action: 'contributor/register_save', code: this.props.code, onRegister: this.onRegister, onPageChange: this.onPageChange }),
              _react2.default.createElement(_InputPassword2.default, { action: 'contributor/register_save', code: this.props.code, onRegister: this.onRegister, defaultValue: this.props.nickname, onNicknameChange: this.onNicknameChange })
            );
            break;
          case 2:
            form = _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'div',
                null,
                '\u6210\u529F\u8A18\u9304',
                this.props.nickname,
                '\u7684\u767B\u5165\u8CC7\u6599\uFF0C\u78BA\u8A8D\u96FB\u90F5\u5DF2\u767C\u9001\u5230',
                this.props.email
              ),
              _react2.default.createElement(_Resend2.default, { onResult: this.onResendConfirmation, action: 'contributor/resend_submit', email: this.props.email, label: '\u91CD\u767C\u78BA\u8A8D\u96FB\u90F5' })
            );
            break;
          case 3:
          case 4:
            form = _react2.default.createElement(_Login2.default, { loginMethod: this.props.loginMethod, onSignedIn: this.onSignedIn, defaultEmail: this.props.email });
        }

        var greeting = this.props.step < 4 ? _react2.default.createElement(
          'div',
          { className: 'ui content' },
          '\u591A\u8B1D ',
          this.props.nickname,
          ' \u652F\u6301\uFF0C\u52C1\u63EA\u9AD4\u6703\u4E0D\u6642\u516C\u4F48\u6700\u65B0\u9032\u5EA6\uFF0C\u8ACB\u8A3B\u518A\u3002'
        ) : _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            null,
            '\u5514\u8A72\u54C2\uFF01\u96FB\u90F5\u5730\u5740\u6210\u529F\u78BA\u8A8D\uFF01\u4F60\u5DF2\u7D93\u5B8C\u6210\u8A3B\u518A\u3002'
          ),
          _react2.default.createElement(
            'div',
            null,
            '\u4F9D\u5BB6\u5373\u523B\u767B\u5165\u5566'
          )
        );
        return _react2.default.createElement(
          'div',
          { className: 'multi-page-form' },
          greeting,
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('i', { className: 'ui icon mail' }),
            '\u4F60\u7684\u96FB\u90F5\u5730\u5740: ',
            this.props.email
          ),
          _react2.default.createElement('div', { className: 'br' }),
          _react2.default.createElement(
            _Steps2.default,
            { className: 'four', step: this.props.step },
            _react2.default.createElement(_Step2.default, { title: '\u8A2D\u5B9A\u767B\u5165\u65B9\u5F0F' }),
            _react2.default.createElement(_Step2.default, { title: '\u96FB\u90F5\u9A57\u2060\u8A3C', description: '\u6AA2\u67E5\u4F60\u7684\u96FB\u90F5' }),
            _react2.default.createElement(_Step2.default, { title: '\u78BA\u8A8D\u96FB\u2060\u90F5\u9A57\u2060\u8A3C', description: '\u6309\u4E0B\u96FB\u90F5\u5167\u7684\u9A57\u8A3C\u9023\u7D50' }),
            _react2.default.createElement(_Step2.default, { title: '\u958B\u59CB\u767B\u5165' })
          ),
          form
        );
      }
    }]);

    return HybridRegister;
  }(_react2.default.Component);

  exports.default = (0, _reactRedux.connect)(function (state) {
    return {
      step: state.step,
      page: state.page,
      code: state.code,
      nickname: state.nickname,
      email: state.email,
      loginMethod: state.login_method
    };
  }, function (dispatch) {
    return {
      onPageChange: function onPageChange(page) {
        dispatch({ type: "CHANGE_PAGE", payload: page });
      },
      onRegister: function onRegister(data) {
        if (data.status !== 'success') return;

        dispatch({ type: "CHANGE_STEP", payload: 2 });
        dispatch({ type: "CHANGE_NICKNAME", payload: data.nickname });
      },
      onResendConfirmation: function onResendConfirmation(data) {
        console.log(data);
      },

      onNicknameChange: function onNicknameChange(value) {
        dispatch({ type: "CHANGE_NICKNAME", payload: value });
      },

      onSignedIn: function onSignedIn(data) {
        var base = document.body.getAttribute('data-base');
        window.location.href = base + data.destination;
      }
    };
  })(HybridRegister);
});

//# sourceMappingURL=HybridRegister.js.map