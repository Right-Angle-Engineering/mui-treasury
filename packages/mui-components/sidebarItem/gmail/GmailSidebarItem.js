"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _ButtonBase = _interopRequireDefault(require("@mui/material/ButtonBase"));

var _gmailSidebarItem = _interopRequireDefault(require("./gmailSidebarItem.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var useStyles = (0, _makeStyles["default"])(_gmailSidebarItem["default"], {
  name: 'GmailSidebarItem'
});

var GmailSidebarItem = function GmailSidebarItem(_ref) {
  var _cx;

  var color = _ref.color,
      startIcon = _ref.startIcon,
      label = _ref.label,
      amount = _ref.amount,
      _ref$ButtonBaseProps = _ref.ButtonBaseProps,
      ButtonBaseProps = _ref$ButtonBaseProps === void 0 ? {} : _ref$ButtonBaseProps,
      _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? {} : _ref$classes,
      collapsed = _ref.collapsed,
      dotOnCollapsed = _ref.dotOnCollapsed,
      selected = _ref.selected,
      onClick = _ref.onClick;
  var styles = useStyles({
    classes: classes,
    color: color
  });
  return /*#__PURE__*/_react["default"].createElement(_ButtonBase["default"], _extends({
    disableTouchRipple: true
  }, ButtonBaseProps, {
    onClick: onClick,
    classes: _extends(_extends({}, ButtonBaseProps.classes), {}, {
      root: (0, _clsx["default"])(styles.root, (_cx = {}, _defineProperty(_cx, styles.selected, selected), _defineProperty(_cx, styles.collapsed, collapsed), _defineProperty(_cx, styles.dot, collapsed && dotOnCollapsed && amount), _cx)),
      focusVisible: styles.focusVisible
    })
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: 'GmailSidebarItem-startIcon'
  }, startIcon), /*#__PURE__*/_react["default"].createElement("div", {
    className: 'GmailSidebarItem-label'
  }, label), amount && /*#__PURE__*/_react["default"].createElement("div", {
    className: 'GmailSidebarItem-amount'
  }, amount));
};

var _default = GmailSidebarItem;
exports["default"] = _default;