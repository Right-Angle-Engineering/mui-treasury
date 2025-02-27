"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _StylesContext = require("./StylesContext");

var _Action = _interopRequireDefault(require("./submodules/Action"));

var _ListItem = _interopRequireDefault(require("./submodules/ListItem"));

var _rowToggle = _interopRequireDefault(require("./rowToggle.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useDefaultStyles = (0, _makeStyles["default"])(_rowToggle["default"], {
  name: 'RowToggle'
});

var RowToggle = function RowToggle(_ref) {
  var _ref$component = _ref.component,
      Component = _ref$component === void 0 ? 'div' : _ref$component,
      children = _ref.children,
      _ref$useStyles = _ref.useStyles,
      useStyles = _ref$useStyles === void 0 ? useDefaultStyles : _ref$useStyles,
      classes = _ref.classes,
      className = _ref.className,
      selected = _ref.selected,
      props = _objectWithoutProperties(_ref, ["component", "children", "useStyles", "classes", "className", "selected"]);

  var result = useStyles(_extends({
    classes: classes
  }, props));
  return /*#__PURE__*/_react["default"].createElement(_StylesContext.StylesProvider, {
    useStyles: useStyles
  }, /*#__PURE__*/_react["default"].createElement(Component, _extends({
    className: (0, _clsx["default"])(result.root, selected && result.rootSelected, className)
  }, props), children));
};

RowToggle.Action = _Action["default"];
RowToggle.ListItem = _ListItem["default"];
RowToggle.propTypes = {
  component: _propTypes["default"].elementType,
  children: _propTypes["default"].node,
  useStyles: _propTypes["default"].func,
  classes: _propTypes["default"].shape({}),
  className: _propTypes["default"].string,
  selected: _propTypes["default"].bool
};
var _default = RowToggle;
exports["default"] = _default;