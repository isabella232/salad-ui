'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPlural = exports.pluralTypeName = exports.langToTypeMap = exports.pluralTypes = exports.pluralTypeToLanguages = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _lodash = require('lodash.map');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.zipobject');

var _lodash4 = _interopRequireDefault(_lodash3);

var _sprintfJs = require('sprintf-js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEBUG = false;
var LANG = 'en';
var PLURAL_TYPE = 'german';

var Trans = function (_React$Component) {
  _inherits(Trans, _React$Component);

  function Trans() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Trans);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Trans)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.allowedElements = ['a', 'b', 'i', 'p', 'span', 'br', 'img'], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Trans, [{
    key: 'translate',
    value: function translate(key, args, pluralForm) {
      var _this2 = this;

      var trans = this.trans || this.props.context;
      if (trans && trans[key]) key = trans[key];else {
        if (DEBUG) console.warn('%s is not in translated keys', key, ' - context was ', trans);
      }
      if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object' && key.singular) {
        if (pluralForm) return (0, _sprintfJs.sprintf)(key.plural, args);else return (0, _sprintfJs.sprintf)(key.singular, args);
      }
      return (0, _sprintfJs.sprintf)(key, (0, _lodash4.default)(Object.keys(args), (0, _lodash2.default)(args, function (e) {
        if ((typeof e === 'undefined' ? 'undefined' : _typeof(e)) === 'object' && ~_this2.allowedElements.indexOf(e.type)) return _server2.default.renderToString(_react2.default.createElement(e.type, e, e.text || null));
        if (_react2.default.isValidElement(e)) return _server2.default.renderToString(e);
        return e;
      })));
    }
  }, {
    key: 'safe_translate',
    value: function safe_translate(key, args, pluralForm) {
      var translation = key;
      try {
        translation = this.translate(key, args, pluralForm);
      } catch (e) {
        console.warn('Failed to produce translation of ', key, e);
      }
      return translation;
    }
  }, {
    key: 'render',
    value: function render() {
      var pluralForm = isPlural(parseFloat(this.props.n || 1));
      return _react2.default.createElement('span', { dangerouslySetInnerHTML: {
          __html: this.safe_translate(this.props.children, this.props, pluralForm)
        } });
    }
  }]);

  return Trans;
}(_react2.default.Component);

Trans.defaultProps = {
  closeLink: '</a>',
  newLine: '<br/>'
};

Trans.enableDebug = function () {
  var enable = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
  return DEBUG = !!enable;
};

Trans.setLang = function () {
  var locale = arguments.length <= 0 || arguments[0] === undefined ? 'en' : arguments[0];

  LANG = locale;
  PLURAL_TYPE = pluralTypeName(locale);
};

exports.default = Trans;
var pluralTypeToLanguages = exports.pluralTypeToLanguages = {
  chinese: ['fa', 'id', 'ja', 'ko', 'lo', 'ms', 'th', 'tr', 'zh'],
  german: ['da', 'de', 'en', 'es', 'fi', 'el', 'he', 'hu', 'it', 'nl', 'no', 'pt', 'sv'],
  french: ['fr', 'tl', 'pt-br'],
  russian: ['hr', 'ru'],
  czech: ['cs'],
  polish: ['pl'],
  icelandic: ['is']
};

/*
 * Inspired By
 * (c) 2012-2016 Airbnb, Inc.
 * http://airbnb.io/polyglot.js/polyglot.html
 */

var pluralTypes = exports.pluralTypes = {
  chinese: function chinese(n) {
    return 0;
  },
  german: function german(n) {
    return n !== 1 ? 1 : 0;
  },
  french: function french(n) {
    return n > 1 ? 1 : 0;
  },
  russian: function russian(n) {
    return n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
  },
  czech: function czech(n) {
    return n === 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2;
  },
  polish: function polish(n) {
    return n === 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
  },
  icelandic: function icelandic(n) {
    return n % 10 !== 1 || n % 100 === 11 ? 1 : 0;
  }
};
var langToTypeMap = exports.langToTypeMap = function langToTypeMap(mapping) {
  var type = void 0,
      langs = void 0,
      l = void 0,
      ret = {};
  for (type in mapping) {
    if (mapping.hasOwnProperty(type)) {
      langs = mapping[type];
      for (l in langs) {
        ret[langs[l]] = type;
      }
    }
  }
  return ret;
};
var pluralTypeName = exports.pluralTypeName = function pluralTypeName(locale) {
  var langToPluralType = langToTypeMap(pluralTypeToLanguages);
  return langToPluralType[locale] || langToPluralType.en;
};
var isPlural = exports.isPlural = function isPlural() {
  var n = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
  return pluralTypes[PLURAL_TYPE](n);
};