"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _ListItem = _interopRequireDefault(require("@mui/material/ListItem"));

var _StylesContext = require("../StylesContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ListItem = function ListItem(_ref) {
  var className = _ref.className,
      selected = _ref.selected,
      props = _objectWithoutProperties(_ref, ["className", "selected"]);

  var classes = (0, _StylesContext.useCtxStyles)(props);
  return /*#__PURE__*/_react["default"].createElement(_ListItem["default"], _extends({}, props, {
    className: (0, _clsx["default"])(classes.listItem, selected && classes.listItemSelected, className)
  }));
};

ListItem.propTypes = {
  className: _propTypes["default"].string,
  selected: _propTypes["default"].bool
};
ListItem.defaultProps = {};
var _default = ListItem;
exports["default"] = _default;