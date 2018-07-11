(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', '../HybridLogin/InputPassword', '../HybridLogin/ForgotPassword', '../uiElements/ButtonLogout', '../Carousel/Carousel', './FacebookLogin'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('../HybridLogin/InputPassword'), require('../HybridLogin/ForgotPassword'), require('../uiElements/ButtonLogout'), require('../Carousel/Carousel'), require('./FacebookLogin'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.InputPassword, global.ForgotPassword, global.ButtonLogout, global.Carousel, global.FacebookLogin);
    global.Login = mod.exports;
  }
})(this, function (exports, _react, _InputPassword, _ForgotPassword, _ButtonLogout, _Carousel, _FacebookLogin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _InputPassword2 = _interopRequireDefault(_InputPassword);

  var _ForgotPassword2 = _interopRequireDefault(_ForgotPassword);

  var _ButtonLogout2 = _interopRequireDefault(_ButtonLogout);

  var _Carousel2 = _interopRequireDefault(_Carousel);

  var _FacebookLogin2 = _interopRequireDefault(_FacebookLogin);

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

  var Login = function (_React$Component) {
    _inherits(Login, _React$Component);

    function Login(props) {
      _classCallCheck(this, Login);

      var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

      _this.state = {
        isForgotPasswordSent: false,
        page: 1
      };

      _this.onSignedIn = _this.onSignedIn.bind(_this);
      _this.onSignedOut = _this.onSignedOut.bind(_this);
      _this.onPageChange = _this.onPageChange.bind(_this);
      _this.onForgotSuccess = _this.onForgotSuccess.bind(_this);
      return _this;
    }

    _createClass(Login, [{
      key: 'onSignedIn',
      value: function onSignedIn(data) {
        this.props.onSignedIn(data);
      }
    }, {
      key: 'onSignedOut',
      value: function onSignedOut(data) {
        this.props.onSignedOut(data);
      }
    }, {
      key: 'onPageChange',
      value: function onPageChange(page) {
        this.setState({
          page: page,
          isForgotPasswordSent: false
        });
      }
    }, {
      key: 'onForgotSuccess',
      value: function onForgotSuccess() {
        this.setState({ isForgotPasswordSent: true });
      }
    }, {
      key: 'render',
      value: function render() {
        var firstTab = this.props.loginMethod === "facebook" ? _react2.default.createElement(_FacebookLogin2.default, { action: 'user/login_submit', onSignedIn: this.onSignedIn }) : _react2.default.createElement(_InputPassword2.default, { onPageChange: this.onPageChange, action: 'user/login_submit', onSignedIn: this.onSignedIn, defaultEmail: this.props.defaultEmail });

        var signoutPanel = _react2.default.createElement(
          'div',
          { className: 'multi-page-form' },
          _react2.default.createElement(_ButtonLogout2.default, { action: 'user/logout', onSignedOut: this.onSignedOut })
        );

        var loggedInPanel = _react2.default.createElement(
          'div',
          { className: 'multi-page-form' },
          _react2.default.createElement(
            _Carousel2.default,
            { onPageChange: this.onPageChange, page: this.state.page },
            firstTab,
            _react2.default.createElement(
              'div',
              null,
              '.'
            ),
            _react2.default.createElement(_ForgotPassword2.default, { action: 'user/reset_password_submit', step: this.state.isForgotPasswordSent ? 2 : 1, onResultSuccess: this.onForgotSuccess })
          )
        );

        return this.props.isLoggedIn ? signoutPanel : loggedInPanel;
      }
    }]);

    return Login;
  }(_react2.default.Component);

  exports.default = Login;
});

//# sourceMappingURL=Login.js.map