function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import cx from 'clsx';
import makeStyles from '@mui/styles/makeStyles';
import ButtonBase from '@mui/material/ButtonBase';
import styles from './gmailSidebarItem.styles';
var useStyles = makeStyles(styles, {
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
  return /*#__PURE__*/React.createElement(ButtonBase, _extends({
    disableTouchRipple: true
  }, ButtonBaseProps, {
    onClick: onClick,
    classes: _extends(_extends({}, ButtonBaseProps.classes), {}, {
      root: cx(styles.root, (_cx = {}, _defineProperty(_cx, styles.selected, selected), _defineProperty(_cx, styles.collapsed, collapsed), _defineProperty(_cx, styles.dot, collapsed && dotOnCollapsed && amount), _cx)),
      focusVisible: styles.focusVisible
    })
  }), /*#__PURE__*/React.createElement("div", {
    className: 'GmailSidebarItem-startIcon'
  }, startIcon), /*#__PURE__*/React.createElement("div", {
    className: 'GmailSidebarItem-label'
  }, label), amount && /*#__PURE__*/React.createElement("div", {
    className: 'GmailSidebarItem-amount'
  }, amount));
};

export default GmailSidebarItem;