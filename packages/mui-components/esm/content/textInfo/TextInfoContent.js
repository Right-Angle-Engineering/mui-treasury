function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import makeStyles from '@mui/styles/makeStyles';
import Typography from '@mui/material/Typography';
import styles from './TextInfoContent.styles';
var useDefaultStyles = makeStyles(styles, {
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, overline && /*#__PURE__*/React.createElement(Typography, _extends({
    component: 'span'
  }, overlineProps, {
    className: cx(css.overline, overlineProps.className)
  }), overline), /*#__PURE__*/React.createElement(Typography, _extends({
    component: 'h4'
  }, headingProps, {
    className: cx(css.heading, headingProps.className)
  }), heading), /*#__PURE__*/React.createElement(Typography, _extends({}, bodyProps, {
    className: cx(css.body, bodyProps.className)
  }), body));
};

TextInfoContent.propTypes = {
  overline: PropTypes.node,
  heading: PropTypes.node,
  body: PropTypes.node,
  overlineProps: PropTypes.shape({
    className: PropTypes.string
  }),
  headingProps: PropTypes.shape({
    className: PropTypes.string
  }),
  bodyProps: PropTypes.shape({
    className: PropTypes.string
  }),
  useStyles: PropTypes.func
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
export default TextInfoContent;