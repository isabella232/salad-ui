'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _icon = require('../../icon/icon');

var _icon2 = _interopRequireDefault(_icon);

var _stylesheet = require('./_stylesheet');

var _stylesheet2 = _interopRequireDefault(_stylesheet);

var _glob = require('../../../lib/glob');

var _glob2 = _interopRequireDefault(_glob);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = function (_Component) {
  _inherits(Select, _Component);

  function Select() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Select.__proto__ || Object.getPrototypeOf(Select)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currentOption: null,
      open: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Select, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var obj = {};

      if (this.props.value !== undefined && this.props.value !== null) {
        obj = this.props.options.find(function (o) {
          return o.value === _this2.props.value;
        });
      } else if (this.props.children) {
        obj = {
          name: this.props.children,
          value: null
        };
      } else {
        obj = this.props.options[0];
      }

      this.setState({
        currentOption: obj
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleOutsideClick = this.handleOutsideClick.bind(this);
      document.addEventListener('click', this.handleOutsideClick);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.handleOutsideClick);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value === undefined || nextProps.value === null) return;

      var obj = {};
      obj = this.props.options.find(function (o) {
        return o.value === nextProps.value;
      });
      this.setState({ currentOption: obj });
    }
  }, {
    key: 'handleOutsideClick',
    value: function handleOutsideClick(e) {
      if (_reactDom2.default.findDOMNode(this).contains(e.target)) return;else {
        this.setState({
          open: false
        });
      }
    }
  }, {
    key: 'selectClick',
    value: function selectClick(e) {
      this.setState({
        open: true
      });
    }
  }, {
    key: 'itemMouseEnter',
    value: function itemMouseEnter(option) {
      this.setState({
        currentOption: option
      });
    }
  }, {
    key: 'itemClick',
    value: function itemClick() {
      this.setState({
        open: false
      });

      if (this.props.onChange) this.props.onChange(this.state.currentOption);
    }
  }, {
    key: 'renderOptions',
    value: function renderOptions() {
      var _this3 = this;

      var selectedItemStyle = Object.assign({}, _stylesheet2.default.dropdownItem, _stylesheet2.default.selected);
      var options = [];

      if (this.props.children) {
        options = options.concat(_react2.default.createElement(
          'li',
          {
            key: 'option.default',
            style: this.state.currentOption.value === null ? selectedItemStyle : _stylesheet2.default.dropdownItem,
            value: null,
            onMouseEnter: function onMouseEnter() {
              return _this3.itemMouseEnter({ name: _this3.props.children, value: null });
            },
            onClick: function onClick() {
              return _this3.itemClick();
            } },
          this.props.children
        ));
      }

      options = options.concat(this.props.options.map(function (item, index) {
        return _react2.default.createElement(
          'li',
          {
            key: 'option.' + index,
            style: item.value === _this3.state.currentOption.value ? selectedItemStyle : _stylesheet2.default.dropdownItem,
            value: item.value,
            onMouseEnter: function onMouseEnter() {
              return _this3.itemMouseEnter(item);
            },
            onClick: function onClick() {
              return _this3.itemClick();
            } },
          item.name
        );
      }));

      var dropdownStyles = Object.assign({}, _stylesheet2.default.dropdown, !this.state.open ? _stylesheet2.default.dropdownHidden : null);
      return _react2.default.createElement(
        'div',
        { style: dropdownStyles, className: 'transition ' + (this.state.open ? 'fade-in' : 'fade-out') },
        _react2.default.createElement(
          'ul',
          null,
          options
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var selectBoxStyles = Object.assign({}, _stylesheet2.default.selectBox, this.props.noBorder ? _stylesheet2.default.noBorder : null);
      return _react2.default.createElement(
        'div',
        { style: { position: 'relative' } },
        _react2.default.createElement(
          'div',
          { style: selectBoxStyles, onClick: function onClick(e) {
              return _this4.selectClick(e);
            } },
          _react2.default.createElement(_icon2.default, { type: 'arrow-left', width: 10, height: 10, style: _stylesheet2.default.dropdownIcon }),
          _react2.default.createElement(
            'div',
            null,
            this.state.currentOption.name || '--'
          )
        ),
        this.renderOptions()
      );
    }
  }]);

  return Select;
}(_react.Component);

Select.defaultProps = {
  noBorder: false,
  options: [{ name: '--', value: null }]
};
exports.default = Select;