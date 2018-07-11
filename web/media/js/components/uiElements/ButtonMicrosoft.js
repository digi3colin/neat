(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', '@microsoft/microsoft-graph-client', 'uuid'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('@microsoft/microsoft-graph-client'), require('uuid'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.microsoftGraphClient, global.uuid);
    global.ButtonMicrosoft = mod.exports;
  }
})(this, function (exports, _react, _microsoftGraphClient, _uuid) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _microsoftGraphClient2 = _interopRequireDefault(_microsoftGraphClient);

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

  var ButtonMicrosoft = function (_React$Component) {
    _inherits(ButtonMicrosoft, _React$Component);

    function ButtonMicrosoft(props) {
      _classCallCheck(this, ButtonMicrosoft);

      var _this = _possibleConstructorReturn(this, (ButtonMicrosoft.__proto__ || Object.getPrototypeOf(ButtonMicrosoft)).call(this, props));

      var authParams = {
        response_type: 'id_token token',
        client_id: props.appId,
        redirect_uri: props.redirectUri,
        scope: props.scope,
        state: (0, _uuid.uuid)(),
        nonce: (0, _uuid.uuid)(),
        response_mode: 'fragment'
      };

      var params = Object.keys(authParams).map(function (k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(authParams[k]);
      }).join('&');

      _this.state = {
        authURL: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize?' + params,
        client: null
      };
      return _this;
    }

    _createClass(ButtonMicrosoft, [{
      key: 'onClick',
      value: function onClick(e) {
        var _this2 = this;

        e.preventDefault();
        window.open(this.state.authURL, 'ms-auth', 'width=300,height:600');

        window.msAuthHandler = function (x) {
          var client = _microsoftGraphClient2.default.Client.init({
            authProvider: function authProvider(done) {
              return done(null, x.access_token);
            }
          });
          _this2.onSignIn(client);
          window.msAuthHandler = null;
        };

        if (!this.props.onClick) return;
        this.props.onClick(e);
      }
    }, {
      key: 'onSignIn',
      value: function onSignIn(client) {
        client.api('/me').get(function (err, res) {
          return console.log(res.displayName);
        });

        if (!this.props.onSignIn) return;
        this.onSignIn(client);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { onClick: this.onClick },
          'Microsoft \u767B\u5165'
        );
      }
    }]);

    return ButtonMicrosoft;
  }(_react2.default.Component);

  exports.default = ButtonMicrosoft;
});

//# sourceMappingURL=ButtonMicrosoft.js.map