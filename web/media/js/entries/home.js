(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['../components/Sample', 'react-dom'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('../components/Sample'), require('react-dom'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.Sample, global.reactDom);
    global.home = mod.exports;
  }
})(this, function (_Sample, _reactDom) {
  'use strict';

  var _Sample2 = _interopRequireDefault(_Sample);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  (function () {
    var props = { text: 'Hello World' };

    _reactDom2.default.render(React.createElement(_Sample2.default, props), document.getElementById('root'));
  })();
});

//# sourceMappingURL=home.js.map