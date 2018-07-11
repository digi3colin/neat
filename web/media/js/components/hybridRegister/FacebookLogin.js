(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', '../uiElements/ButtonFacebookLogin', '../uiElements/Form', '../uiElements/ErrorMessage'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('../uiElements/ButtonFacebookLogin'), require('../uiElements/Form'), require('../uiElements/ErrorMessage'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.ButtonFacebookLogin, global.Form, global.ErrorMessage);
    global.FacebookLogin = mod.exports;
  }
})(this, function (exports, _react, _ButtonFacebookLogin, _Form2, _ErrorMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _ButtonFacebookLogin2 = _interopRequireDefault(_ButtonFacebookLogin);

  var _Form3 = _interopRequireDefault(_Form2);

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

  var FacebookLogin = function (_Form) {
    _inherits(FacebookLogin, _Form);

    function FacebookLogin(props) {
      _classCallCheck(this, FacebookLogin);

      var _this = _possibleConstructorReturn(this, (FacebookLogin.__proto__ || Object.getPrototypeOf(FacebookLogin)).call(this, props));

      _this.onFacebookConnectStart = _this.onFacebookConnectStart.bind(_this);
      _this.onFacebookConnect = _this.onFacebookConnect.bind(_this);
      _this.onFacebookConnectFail = _this.onFacebookConnectFail.bind(_this);
      _this.onSignedIn = _this.onSignedIn.bind(_this);
      return _this;
    }

    _createClass(FacebookLogin, [{
      key: 'onResult',
      value: function onResult(data) {
        _get(FacebookLogin.prototype.__proto__ || Object.getPrototypeOf(FacebookLogin.prototype), 'onResult', this).call(this, data);
        this.onSignedIn(data);
      }
    }, {
      key: 'onSignedIn',
      value: function onSignedIn(data) {
        this.props.onSignedIn(data);
      }
    }, {
      key: 'onFacebookConnectStart',
      value: function onFacebookConnectStart(e) {
        this.setState({ isLoading: true });
      }
    }, {
      key: 'onFacebookConnect',
      value: function onFacebookConnect(response) {
        var postData = new FormData();
        postData.append('code', this.props.code);
        postData.append('fbid', response.id);
        postData.append('fbtoken', response.token);
        postData.append('fbname', response.name);

        this.post(postData);
      }
    }, {
      key: 'onFacebookConnectFail',
      value: function onFacebookConnectFail(response) {
        this.setState({ isLoading: false });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: 'selection' },
          _react2.default.createElement(_ButtonFacebookLogin2.default, { isLoading: this.state.isLoading, onClick: this.onFacebookConnectStart, onConnectFail: this.onFacebookConnectFail, onConnected: this.onFacebookConnect }),
          _react2.default.createElement(_ErrorMessage2.default, { message: this.state.error })
        );
      }
    }]);

    return FacebookLogin;
  }(_Form3.default);

  exports.default = FacebookLogin;
});

//# sourceMappingURL=FacebookLogin.js.map