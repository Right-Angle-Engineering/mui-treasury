function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@mui/styles/makeStyles';
import Avatar from '@mui/material/Avatar';
import Tree, { treeChartStyles } from '../tree';
var defaultUseStyles = makeStyles(treeChartStyles, {
  name: 'OrgChart'
});

var OrgChart = function OrgChart(_ref) {
  var treeData = _ref.treeData,
      renderContent = _ref.renderContent,
      useStyles = _ref.useStyles,
      props = _objectWithoutProperties(_ref, ["treeData", "renderContent", "useStyles"]);

  if (!treeData) return null;

  var renderChildren = function renderChildren() {
    var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return /*#__PURE__*/React.createElement(Tree.Branches, null, children.map(function (item, index) {
      return /*#__PURE__*/React.createElement(Tree.Twig, {
        key: index
      }, /*#__PURE__*/React.createElement(Tree.Stem, null, renderContent(item)), item.children && renderChildren(item.children));
    }));
  };

  return /*#__PURE__*/React.createElement(Tree, _extends({
    useStyles: useStyles
  }, props), /*#__PURE__*/React.createElement(Tree.Trunk, null, Array.isArray(treeData) ? renderChildren(treeData) : /*#__PURE__*/React.createElement(React.Fragment, null, renderContent(treeData), treeData.children && renderChildren(treeData.children))));
};

OrgChart.propTypes = {
  treeData: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.arrayOf(PropTypes.shape({}))]),
  renderContent: PropTypes.func,
  useStyles: PropTypes.func
};
OrgChart.defaultProps = {
  treeData: undefined,
  renderContent: function renderContent() {
    return /*#__PURE__*/React.createElement(Avatar, null);
  },
  useStyles: defaultUseStyles
};
export default OrgChart;