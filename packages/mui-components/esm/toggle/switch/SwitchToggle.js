function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import makeStyles from '@mui/styles/makeStyles';
import ButtonBase from '@mui/material/ButtonBase';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import styles from './switchToggle.styles';
var useDefaultStyles = makeStyles(styles, {
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
  var cls = cx(result.root, toggled && result.toggled, button && result.button, className);

  var getChildren = function getChildren() {
    if (children) {
      return children;
    }

    return toggled ? /*#__PURE__*/React.createElement(KeyboardArrowUp, null) : /*#__PURE__*/React.createElement(KeyboardArrowDown, null);
  };

  if (!button) {
    return /*#__PURE__*/React.createElement("div", _extends({
      className: cls
    }, props), getChildren());
  }

  return /*#__PURE__*/React.createElement(ButtonBase, _extends({
    className: cls,
    focusRipple: true
  }, props), getChildren());
};

SwitchToggle.propTypes = {
  className: PropTypes.string,
  button: PropTypes.bool,
  classes: PropTypes.shape({
    root: PropTypes.string,
    toggled: PropTypes.string
  }),
  toggled: PropTypes.bool,
  children: PropTypes.node,
  useStyles: PropTypes.func
};
SwitchToggle.defaultProps = {
  className: undefined,
  button: false,
  classes: undefined,
  toggled: false,
  children: undefined,
  useStyles: useDefaultStyles
};
export default SwitchToggle;