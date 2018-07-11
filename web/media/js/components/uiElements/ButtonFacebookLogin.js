(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "fb"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("fb"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.fb);
    global.ButtonFacebookLogin = mod.exports;
  }
})(this, function (exports, _react, _fb) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _fb2 = _interopRequireDefault(_fb);

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

  var ButtonFacebookLogin = function (_React$Component) {
    _inherits(ButtonFacebookLogin, _React$Component);

    function ButtonFacebookLogin(props) {
      _classCallCheck(this, ButtonFacebookLogin);

      var _this = _possibleConstructorReturn(this, (ButtonFacebookLogin.__proto__ || Object.getPrototypeOf(ButtonFacebookLogin)).call(this, props));

      _this.onClick = _this.onClick.bind(_this);
      _this.onConnectFail = _this.onConnectFail.bind(_this);
      _this.onConnected = _this.onConnected.bind(_this);

      window.fbAsyncInit = function () {
        return _fb2.default.init({
          appId: props.appId,
          xfbml: false,
          version: 'v3.0'
        });
      };

      (function (d, s, id) {
        var js = void 0,
            fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s);js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, 'script', 'facebook-jssdk');
      return _this;
    }

    _createClass(ButtonFacebookLogin, [{
      key: "onClick",
      value: function onClick(e) {
        var _this2 = this;

        e.preventDefault();

        _fb2.default.login(function () {
          //after login, check status
          _fb2.default.getLoginStatus(function (response) {
            _this2.statusChangeCallback(response);
          });
        }, { scope: 'email' });

        if (!this.props.onClick) return;
        this.props.onClick(e);
      }
    }, {
      key: "statusChangeCallback",
      value: function statusChangeCallback(response) {
        if (response.status === 'connected') {
          this.prepareSignup(response.authResponse.userID, response.authResponse.accessToken);
        } else if (response.status === 'not_authorized') {
          this.onConnectFail(response);
        } else {
          this.onConnectFail(response);
        }
      }
    }, {
      key: "onConnectFail",
      value: function onConnectFail(response) {
        this.props.onConnectFail(response);
      }
    }, {
      key: "onConnected",
      value: function onConnected(id, token, name) {
        this.props.onConnected({ id: id, token: token, name: name });
      }
    }, {
      key: "prepareSignup",
      value: function prepareSignup(id, token) {
        var _this3 = this;

        _fb2.default.api('/me', function (response) {
          _this3.onConnected(id, token, response.name);
        });
      }
    }, {
      key: "render",
      value: function render() {
        return _react2.default.createElement(
          "div",
          { className: "ui button icon facebook" + (this.props.isLoading ? " loading" : ""), onClick: this.onClick },
          _react2.default.createElement(
            "a",
            { href: "#" },
            _react2.default.createElement("i", { className: "facebook icon" }),
            "facebook \u767B\u5165"
          )
        );
      }
    }]);

    return ButtonFacebookLogin;
  }(_react2.default.Component);

  exports.default = ButtonFacebookLogin;
});

//# sourceMappingURL=ButtonFacebookLogin.js.map