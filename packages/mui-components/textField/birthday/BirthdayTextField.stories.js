"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _BirthdayTextField = _interopRequireDefault(require("./BirthdayTextField"));

var _bootstrap = require("@mui-treasury/styles/input/bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var StylesProvider = function StylesProvider(_ref) {
  var children = _ref.children,
      hooks = _ref.hooks;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children(hooks.map(function (hook) {
    return hook();
  })));
};

var useStyles = (0, _makeStyles["default"])(function () {
  return {
    label: {
      marginBottom: 4
    },
    day: {
      width: 48
    },
    month: {
      width: 56
    },
    year: {
      width: 72
    },
    separator: {
      padding: '0 4px'
    }
  };
});
(0, _react2.storiesOf)('mui-components|TextField', module).add('birthday', function () {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_BirthdayTextField["default"], {
    id: 'dob',
    label: 'Date of birth'
  }, /*#__PURE__*/_react["default"].createElement(_BirthdayTextField["default"].Day, {
    placeholder: 'DD',
    name: 'birthday.day',
    nextFocus: 'birthday.month'
  }), /*#__PURE__*/_react["default"].createElement(_BirthdayTextField["default"].Separator, null), /*#__PURE__*/_react["default"].createElement(_BirthdayTextField["default"].Month, {
    placeholder: 'MM',
    name: 'birthday.month',
    nextFocus: 'birthday.year'
  }), /*#__PURE__*/_react["default"].createElement(_BirthdayTextField["default"].Separator, null), /*#__PURE__*/_react["default"].createElement(_BirthdayTextField["default"].Year, {
    placeholder: 'YYYY',
    name: 'birthday.year'
  })), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(StylesProvider, {
    hooks: [_bootstrap.useBootstrapInputStyles, useStyles]
  }, function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        bootstrap = _ref3[0],
        styles = _ref3[1];

    return /*#__PURE__*/_react["default"].createElement(_BirthdayTextField["default"], {
      id: 'dob2',
      label: 'Date of birth',
      InputLabelProps: {
        className: styles.label
      }
    }, /*#__PURE__*/_react["default"].createElement(_BirthdayTextField["default"].Day, {
      classes: bootstrap,
      className: styles.day,
      placeholder: 'DD',
      name: 'birthday.day2',
      nextFocus: 'birthday.month2'
    }), /*#__PURE__*/_react["default"].createElement(_BirthdayTextField["default"].Separator, {
      className: styles.separator
    }), /*#__PURE__*/_react["default"].createElement(_BirthdayTextField["default"].Month, {
      classes: bootstrap,
      className: styles.month,
      placeholder: 'MM',
      name: 'birthday.month2',
      nextFocus: 'birthday.year2'
    }), /*#__PURE__*/_react["default"].createElement(_BirthdayTextField["default"].Separator, {
      className: styles.separator
    }), /*#__PURE__*/_react["default"].createElement(_BirthdayTextField["default"].Year, {
      classes: bootstrap,
      className: styles.year,
      placeholder: 'YYYY',
      name: 'birthday.year2'
    }));
  }));
}).add('birthday (RTL)', function () {
  return /*#__PURE__*/_react["default"].createElement(_BirthdayTextField["default"], {
    id: 'dob',
    label: 'Date of birth'
  }, /*#__PURE__*/_react["default"].createElement(_BirthdayTextField["default"].Year, {
    placeholder: 'YYYY',
    name: 'birthday.year',
    nextFocus: 'birthday.month'
  }), /*#__PURE__*/_react["default"].createElement(_BirthdayTextField["default"].Separator, null), /*#__PURE__*/_react["default"].createElement(_BirthdayTextField["default"].Month, {
    placeholder: 'MM',
    name: 'birthday.month',
    nextFocus: 'birthday.day'
  }), /*#__PURE__*/_react["default"].createElement(_BirthdayTextField["default"].Separator, null), /*#__PURE__*/_react["default"].createElement(_BirthdayTextField["default"].Day, {
    placeholder: 'DD',
    name: 'birthday.day'
  }));
});