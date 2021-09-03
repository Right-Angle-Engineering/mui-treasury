"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useStyles = (0, _makeStyles["default"])(function (_ref) {
  var palette = _ref.palette;
  return {
    root: {
      display: 'inline-flex',
      paddingLeft: 4,
      paddingRight: 4,
      color: palette.text.disabled
    }
  };
}, {
  name: 'Separator'
});

var Separator = function Separator(_ref2) {
  var className = _ref2.className,
      _ref2$children = _ref2.children,
      children = _ref2$children === void 0 ? '/' : _ref2$children,
      props = _objectWithoutProperties(_ref2, ["className", "children"]);

  var classes = useStyles(props);
  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: (0, _clsx["default"])(classes.root, className)
  }, props), children);
};

var _default = Separator;
exports["default"] = _default;