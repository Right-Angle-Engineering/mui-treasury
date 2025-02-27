"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _ButtonBase = _interopRequireDefault(require("@mui/material/ButtonBase"));

var _KeyboardArrowUp = _interopRequireDefault(require("@mui/icons-material/KeyboardArrowUp"));

var _KeyboardArrowDown = _interopRequireDefault(require("@mui/icons-material/KeyboardArrowDown"));

var _switchToggle = _interopRequireDefault(require("./switchToggle.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useDefaultStyles = (0, _makeStyles["default"])(_switchToggle["default"], {
  name: 'SwitchToggle'
});

var SwitchToggle = function SwitchToggle(_ref) {
  var className = _ref.className,
      button = _ref.button,
      toggled = _ref.toggled,
      children = _ref.children,
      useStyles = _ref.useStyles,
      classes = _ref.classes,
      props = _objectWithoutProperties(_ref, ["className", "button", "toggled", "children", "useStyles", "classes"]);

  var result = useStyles(_extends({
    classes: classes
  }, props));
  var cls = (0, _clsx["default"])(result.root, toggled && result.toggled, button && result.button, className);

  var getChildren = function getChildren() {
    if (children) {
      return children;
    }

    return toggled ? /*#__PURE__*/_react["default"].createElement(_KeyboardArrowUp["default"], null) : /*#__PURE__*/_react["default"].createElement(_KeyboardArrowDown["default"], null);
  };

  if (!button) {
    return /*#__PURE__*/_react["default"].createElement("div", _extends({
      className: cls
    }, props), getChildren());
  }

  return /*#__PURE__*/_react["default"].createElement(_ButtonBase["default"], _extends({
    className: cls,
    focusRipple: true
  }, props), getChildren());
};

SwitchToggle.propTypes = {
  className: _propTypes["default"].string,
  button: _propTypes["default"].bool,
  classes: _propTypes["default"].shape({
    root: _propTypes["default"].string,
    toggled: _propTypes["default"].string
  }),
  toggled: _propTypes["default"].bool,
  children: _propTypes["default"].node,
  useStyles: _propTypes["default"].func
};
SwitchToggle.defaultProps = {
  className: undefined,
  button: false,
  classes: undefined,
  toggled: false,
  children: undefined,
  useStyles: useDefaultStyles
};
var _default = SwitchToggle;
exports["default"] = _default;