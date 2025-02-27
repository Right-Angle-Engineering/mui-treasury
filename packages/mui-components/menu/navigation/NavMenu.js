"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _StylesContext = require("./StylesContext");

var _defaultStyles = require("./defaultStyles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function NavMenu(_ref) {
  var children = _ref.children,
      gutter = _ref.gutter,
      _ref$useStyles = _ref.useStyles,
      useStyles = _ref$useStyles === void 0 ? _defaultStyles.useDefaultStyles : _ref$useStyles,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "gutter", "useStyles", "className"]);

  var styles = useStyles({
    gutter: gutter
  });
  return /*#__PURE__*/_react["default"].createElement(_StylesContext.StylesProvider, {
    styles: styles
  }, /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: (0, _clsx["default"])(styles.menu, className)
  }, props), children));
}

var _default = NavMenu;
exports["default"] = _default;