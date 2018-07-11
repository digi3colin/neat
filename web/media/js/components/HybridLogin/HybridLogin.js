(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', './Select', './InputPassword', './ForgotPassword', './Register', '../uiElements/ButtonLogout', '../Carousel/Carousel', 'react-redux'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('./Select'), require('./InputPassword'), require('./ForgotPassword'), require('./Register'), require('../uiElements/ButtonLogout'), require('../Carousel/Carousel'), require('react-redux'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.Select, global.InputPassword, global.ForgotPassword, global.Register, global.ButtonLogout, global.Carousel, global.reactRedux);
    global.HybridLogin = mod.exports;
  }
})(this, function (exports, _react, _Select, _InputPassword, _ForgotPassword, _Register, _ButtonLogout, _Carousel, _reactRedux) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _Select2 = _interopRequireDefault(_Select);

  var _InputPassword2 = _interopRequireDefault(_InputPassword);

  var _ForgotPassword2 = _interopRequireDefault(_ForgotPassword);

  var _Register2 = _interopRequireDefault(_Register);

  var _ButtonLogout2 = _interopRequireDefault(_ButtonLogout);

  var _Carousel2 = _interopRequireDefault(_Carousel);

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

  var HybridLogin = function (_React$Component) {
    _inherits(HybridLogin, _React$Component);

    function HybridLogin(props) {
      _classCallCheck(this, HybridLogin);

      var _this = _possibleConstructorReturn(this, (HybridLogin.__proto__ || Object.getPrototypeOf(HybridLogin)).call(this, props));

      _this.onSignedIn = _this.onSignedIn.bind(_this);
      _this.onSignedOut = _this.onSignedOut.bind(_this);
      _this.onPageChange = _this.onPageChange.bind(_this);
      _this.onInviteSuccess = _this.onInviteSuccess.bind(_this);
      _this.onForgotSent = _this.onForgotSent.bind(_this);
      return _this;
    }

    _createClass(HybridLogin, [{
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
        this.props.onPageChange(page);
      }
    }, {
      key: 'onInviteSuccess',
      value: function onInviteSuccess(data) {
        this.props.onInviteSuccess(data);
      }
    }, {
      key: 'onForgotSent',
      value: function onForgotSent(data) {
        this.props.onForgotSent(data);
      }
    }, {
      key: 'render',
      value: function render() {
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
            { onPageChange: this.onPageChange, page: this.props.page },
            _react2.default.createElement(_Select2.default, { onPageChange: this.onPageChange, action: 'user/login_submit', onSignedIn: this.onSignedIn }),
            _react2.default.createElement(_InputPassword2.default, { onPageChange: this.onPageChange, action: 'user/login_submit', onSignedIn: this.onSignedIn }),
            _react2.default.createElement(_ForgotPassword2.default, { action: 'user/reset_password_submit', step: this.props.isForgotPasswordSent ? 2 : 1, onResultSuccess: this.onForgotSent }),
            _react2.default.createElement(_Register2.default, { action: 'contributor/invite_submit', isInvited: this.props.isInvited, onResultSuccess: this.onInviteSuccess })
          )
        );

        return this.props.isLoggedIn ? signoutPanel : loggedInPanel;
      }
    }]);

    return HybridLogin;
  }(_react2.default.Component);

  exports.default = (0, _reactRedux.connect)(function (state) {
    return {
      page: state.page,
      isLoggedIn: state.isLoggedIn,
      isInvited: state.isInvited,
      isForgotPasswordSent: state.isForgotPasswordSent
    };
  }, function (dispatch) {
    return {
      onSignedIn: function onSignedIn(data) {
        if (data.status === 'success') {
          dispatch({ type: "CHANGE_LOGIN_STATE", payload: true });
          dispatch({ type: "UPDATE_USER", payload: data });
        }
      },
      onSignedOut: function onSignedOut(data) {
        dispatch({ type: "CHANGE_PAGE", payload: 1 });
        dispatch({ type: "CHANGE_LOGIN_STATE", payload: data.status !== 'success' });
        dispatch({ type: "SET_USER_NAME", payload: null });
        dispatch({ type: "SET_NICK_NAME", payload: null });
        dispatch({ type: "SET_CONTRIBUTOR_KEY", payload: null });
      },

      onPageChange: function onPageChange(page) {
        dispatch({ type: "CHANGE_PAGE", payload: page });
        dispatch({ type: "CHANGE_INVITE_SUCCESS", payload: false });
        dispatch({ type: "CHANGE_FORGOT_SENT", payload: false });
      },

      onInviteSuccess: function onInviteSuccess(data) {
        dispatch({ type: "CHANGE_INVITE_SUCCESS", payload: data.status });
      },

      onForgotSent: function onForgotSent(data) {
        dispatch({ type: "CHANGE_FORGOT_SENT", payload: data.status });
      }
    };
  })(HybridLogin);
});

//# sourceMappingURL=HybridLogin.js.map