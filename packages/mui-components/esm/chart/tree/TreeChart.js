function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { blueGrey } from '@mui/material/colors';
import makeStyles from '@mui/styles/makeStyles';
import { TreeProvider } from './TreeContext';
import styles from './treeChart.styles';
var useDefaultStyles = makeStyles(styles, {
  name: 'TreeChart'
});

var TreeChart = function TreeChart(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/React.createElement(TreeProvider, props, children);
};

TreeChart.propTypes = {
  children: PropTypes.node,
  length: PropTypes.number,
  gap: PropTypes.number,
  outline: PropTypes.string,
  useStyles: PropTypes.func
};
TreeChart.defaultProps = {
  children: null,
  length: 16,
  gap: 12,
  outline: "1px solid ".concat(blueGrey[100]),
  useStyles: useDefaultStyles
};
export default TreeChart;