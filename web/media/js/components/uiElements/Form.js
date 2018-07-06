'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form(props) {
    _classCallCheck(this, Form);

    var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

    _this.state = {
      isLoading: false,
      urlBase: document.body.getAttribute('data-base')
    };
    _this.onSubmit = _this.onSubmit.bind(_this);
    _this.onResult = _this.onResult.bind(_this);
    _this.post = _this.post.bind(_this);
    return _this;
  }

  _createClass(Form, [{
    key: 'onSubmit',
    value: function onSubmit(e) {
      e.preventDefault();
      var postData = new FormData(e.target);
      this.post(postData);
    }
  }, {
    key: 'post',
    value: function post(postData) {
      var _this2 = this;

      this.setState({ isLoading: true });
      fetch(this.state.urlBase + (this.props.action || this.state.action) + '.json', {
        credentials: "same-origin",
        method: 'post',
        body: postData
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        _this2.setState({ isLoading: false });
        _this2.onResult(data);
      });
    }
  }, {
    key: 'onResult',
    value: function onResult(data) {
      var _this3 = this;

      this.setState({
        error: null,
        isLoading: false
      });

      if (data.status === 'success') {
        if (this.props.onResultSuccess !== null) this.props.onResultSuccess(data);
      } else {
        if (this.props.onResultError !== null) this.props.onResultError(data);

        this.setState({
          error: data.code + data.info.message
        });

        clearTimeout(this.iid);
        this.iid = setTimeout(function () {
          _this3.setState({ error: '' });
        }, 4000);
      }
    }
  }]);

  return Form;
}(_react2.default.Component);

exports.default = Form;

//# sourceMappingURL=Form.js.map