function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@mui/styles/makeStyles';
import { blueGrey } from '@mui/material/colors';
import Tree from '../tree';
import { Inheritor, Spouse, Children, Person } from './submodules';
import styles from './familyChart.styles';
var useStyles = makeStyles(styles, {
  name: 'FamilyChart'
});

var FamilyChart = function FamilyChart(_ref) {
  var tree = _ref.tree,
      renderContent = _ref.renderContent,
      _ref$stretchIndexes = _ref.stretchIndexes,
      stretchIndexes = _ref$stretchIndexes === void 0 ? [] : _ref$stretchIndexes,
      props = _objectWithoutProperties(_ref, ["tree", "renderContent", "stretchIndexes"]);

  if (!tree) return null;

  var inspectPerson = function inspectPerson(item) {
    var hasOneSpouse = item.spouse && !Array.isArray(item.spouse);
    var hasManySpouses = item.spouse && Array.isArray(item.spouse);
    var hasChildren = item.children && item.children.length > 0;
    return {
      hasOneSpouse: hasOneSpouse,
      hasManySpouses: hasManySpouses,
      hasChildren: hasChildren
    };
  };

  var renderChildren = function renderChildren() {
    var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        index = _ref2.index,
        noStretched = _ref2.noStretched;

    return /*#__PURE__*/React.createElement(Children, {
      stretch: stretchIndexes.includes(index) && !noStretched
    }, children.map(function (item, i) {
      var _inspectPerson = inspectPerson(item),
          hasOneSpouse = _inspectPerson.hasOneSpouse,
          hasManySpouses = _inspectPerson.hasManySpouses,
          hasChildren = _inspectPerson.hasChildren;

      var extraInfo = {
        level: index,
        index: i,
        array: children,
        hasOneSpouse: hasOneSpouse,
        hasManySpouses: hasManySpouses,
        hasChildren: hasChildren
      };
      return /*#__PURE__*/React.createElement(Inheritor, {
        key: i,
        hasOneSpouse: hasOneSpouse
      }, /*#__PURE__*/React.createElement(Tree.Stem, null, renderContent(item, _extends({
        isSpouse: false
      }, extraInfo))), hasOneSpouse && /*#__PURE__*/React.createElement(Spouse, {
        hasChildren: hasChildren
      }, renderContent(item.spouse, _extends({
        isSpouse: true
      }, extraInfo))), hasManySpouses && renderChildren(item.spouse, {
        index: index + 1,
        noStretched: true
      }), hasChildren && !hasManySpouses && renderChildren(item.children, {
        index: index + 1
      }));
    }));
  };

  var _inspectPerson2 = inspectPerson(tree),
      hasOneSpouse = _inspectPerson2.hasOneSpouse,
      hasManySpouses = _inspectPerson2.hasManySpouses,
      hasChildren = _inspectPerson2.hasChildren;

  var extraInfo = {
    level: 0,
    index: 0,
    array: [],
    hasOneSpouse: hasOneSpouse,
    hasManySpouses: hasManySpouses,
    hasChildren: hasChildren
  };
  return /*#__PURE__*/React.createElement(Tree, _extends({
    useStyles: useStyles
  }, props), /*#__PURE__*/React.createElement(Tree.Trunk, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tree.Stem, null, renderContent(tree, _extends({
    isSpouse: false
  }, extraInfo))), hasOneSpouse && /*#__PURE__*/React.createElement(Spouse, {
    hasChildren: hasChildren
  }, renderContent(tree.spouse, _extends({
    isSpouse: true
  }, extraInfo))))), renderChildren(tree.children, {
    index: 1
  }));
};

FamilyChart.propTypes = {
  tree: PropTypes.shape({}),
  renderContent: PropTypes.func,
  stretchIndexes: PropTypes.arrayOf(PropTypes.number),
  avatarSize: PropTypes.number,
  personHeight: PropTypes.number,
  length: PropTypes.number,
  gap: PropTypes.number,
  outline: PropTypes.string
};
FamilyChart.defaultProps = {
  tree: undefined,
  renderContent: function renderContent(props) {
    return /*#__PURE__*/React.createElement(Person, props);
  },
  stretchIndexes: [],
  avatarSize: 48,
  personHeight: 72,
  length: 24,
  gap: 24,
  outline: "1px solid ".concat(blueGrey[100])
};
export default FamilyChart;