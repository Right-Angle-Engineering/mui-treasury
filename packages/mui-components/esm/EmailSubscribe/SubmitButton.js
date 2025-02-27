function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import cx from 'clsx';
import ButtonBase from '@mui/material/ButtonBase';
import { useCtxStyles } from './StylesContext';
export function SubmitButton(props) {
  var styles = useCtxStyles();
  return /*#__PURE__*/React.createElement(ButtonBase, _extends({
    focusRipple: true
  }, props, {
    className: cx(styles.submit, props.className),
    type: "submit"
  }));
}