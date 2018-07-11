(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["../components/uiElements/ButtonFacebookLogin", "../components/uiElements/ButtonMicrosoft", "react-dom"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("../components/uiElements/ButtonFacebookLogin"), require("../components/uiElements/ButtonMicrosoft"), require("react-dom"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.ButtonFacebookLogin, global.ButtonMicrosoft, global.reactDom);
    global.home = mod.exports;
  }
})(this, function (_ButtonFacebookLogin, _ButtonMicrosoft, _reactDom) {
  "use strict";

  var _ButtonFacebookLogin2 = _interopRequireDefault(_ButtonFacebookLogin);

  var _ButtonMicrosoft2 = _interopRequireDefault(_ButtonMicrosoft);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  (function () {
    _reactDom2.default.render(React.createElement(
      "div",
      null,
      React.createElement(_ButtonFacebookLogin2.default, { appId: "1076752449143771", onClick: function onClick(e) {
          return console.log(e);
        }, onConnected: function onConnected(e) {
          return console.log(e);
        }, onFail: function onFail(e) {
          return console.log(e);
        } }),
      React.createElement(_ButtonMicrosoft2.default, { appId: "24fdffcb-dde8-4d9a-86ed-352f77f188e9", scope: "openid profile User.Read Mail.Read", redicrectUri: "https://neat.qoro.me/auth/" })
    ), document.getElementById('root'));
  })();
});

//# sourceMappingURL=home.js.map