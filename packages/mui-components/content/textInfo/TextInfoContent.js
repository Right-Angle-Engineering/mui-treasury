"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _Typography = _interopRequireDefault(require("@mui/material/Typography"));

var _TextInfoContent = _interopRequireDefault(require("./TextInfoContent.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useDefaultStyles = (0, _makeStyles["default"])(_TextInfoContent["default"], {
  name: 'TextInfoContent'
});

var TextInfoContent = function TextInfoContent(_ref) {
  var useStyles = _ref.useStyles,
      overline = _ref.overline,
      heading = _ref.heading,
      body = _ref.body,
      overlineProps = _ref.overlineProps,
      headingProps = _ref.headingProps,
      bodyProps = _ref.bodyProps,
      props = _objectWithoutProperties(_ref, ["useStyles", "overline", "heading", "body", "overlineProps", "headingProps", "bodyProps"]);

  var css = useStyles(props);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, overline && /*#__PURE__*/_react["default"].createElement(_Typography["default"], _extends({
    component: 'span'
  }, overlineProps, {
    className: (0, _clsx["default"])(css.overline, overlineProps.className)
  }), overline), /*#__PURE__*/_react["default"].createElement(_Typography["default"], _extends({
    component: 'h4'
  }, headingProps, {
    className: (0, _clsx["default"])(css.heading, headingProps.className)
  }), heading), /*#__PURE__*/_react["default"].createElement(_Typography["default"], _extends({}, bodyProps, {
    className: (0, _clsx["default"])(css.body, bodyProps.className)
  }), body));
};

TextInfoContent.propTypes = {
  overline: _propTypes["default"].node,
  heading: _propTypes["default"].node,
  body: _propTypes["default"].node,
  overlineProps: _propTypes["default"].shape({
    className: _propTypes["default"].string
  }),
  headingProps: _propTypes["default"].shape({
    className: _propTypes["default"].string
  }),
  bodyProps: _propTypes["default"].shape({
    className: _propTypes["default"].string
  }),
  useStyles: _propTypes["default"].func
};
TextInfoContent.defaultProps = {
  overline: null,
  heading: null,
  body: null,
  overlineProps: {},
  headingProps: {},
  bodyProps: {},
  useStyles: useDefaultStyles
};
var _default = TextInfoContent;
exports["default"] = _default;