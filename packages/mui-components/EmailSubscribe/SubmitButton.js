"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubmitButton = SubmitButton;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _ButtonBase = _interopRequireDefault(require("@mui/material/ButtonBase"));

var _StylesContext = require("./StylesContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SubmitButton(props) {
  var styles = (0, _StylesContext.useCtxStyles)();
  return /*#__PURE__*/_react["default"].createElement(_ButtonBase["default"], _extends({
    focusRipple: true
  }, props, {
    className: (0, _clsx["default"])(styles.submit, props.className),
    type: "submit"
  }));
}