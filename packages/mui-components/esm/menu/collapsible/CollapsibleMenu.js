function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import usePreserveState from '@mui-treasury/utils/usePreserveState';
import makeStyles from '@mui/styles/makeStyles';
import Collapse from '@mui/material/Collapse';
import { StylesProvider } from './StylesContext';
import Row from './submodules/Row';
import List from './submodules/List';
import ListItem from './submodules/ListItem';
import styles from './collapsibleMenu.styles';
var useDefaultStyles = makeStyles(styles, {
  name: 'CollapsibleMenu'
});

var CollapsibleMenu = function CollapsibleMenu(_ref) {
  var extCollapsed = _ref.collapsed,
      children = _ref.children,
      renderToggle = _ref.renderToggle,
      renderWrapper = _ref.renderWrapper,
      useStyles = _ref.useStyles,
      onCollapse = _ref.onCollapse,
      stateBypassed = _ref.stateBypassed,
      props = _objectWithoutProperties(_ref, ["collapsed", "children", "renderToggle", "renderWrapper", "useStyles", "onCollapse", "stateBypassed"]);

  var _usePreserveState = usePreserveState(extCollapsed, onCollapse, stateBypassed),
      _usePreserveState2 = _slicedToArray(_usePreserveState, 2),
      collapsed = _usePreserveState2[0],
      setCollapsed = _usePreserveState2[1];

  var onToggle = React.useMemo(function () {
    return function () {
      return setCollapsed(function (c) {
        return !c;
      });
    };
  }, [setCollapsed]);
  return /*#__PURE__*/React.createElement(StylesProvider, {
    useStyles: useStyles
  }, renderWrapper({
    collapsed: collapsed,
    children: /*#__PURE__*/React.createElement(React.Fragment, null, renderToggle({
      onClick: stateBypassed ? onCollapse : onToggle,
      collapsed: collapsed
    }, setCollapsed), /*#__PURE__*/React.createElement(Collapse, _extends({}, props, {
      "in": collapsed
    }), children))
  }));
};

CollapsibleMenu.Row = Row;
CollapsibleMenu.RowItem = Row.ListItem;
CollapsibleMenu.Action = Row.Action;
CollapsibleMenu.List = List;
CollapsibleMenu.ListItem = ListItem;
CollapsibleMenu.propTypes = {
  collapsed: PropTypes.bool,
  children: PropTypes.node,
  renderToggle: PropTypes.func,
  renderWrapper: PropTypes.func,
  useStyles: PropTypes.func,
  onCollapse: PropTypes.func,
  stateBypassed: PropTypes.bool
};
CollapsibleMenu.defaultProps = {
  collapsed: false,
  children: undefined,
  renderToggle: function renderToggle() {
    return null;
  },
  useStyles: useDefaultStyles,
  stateBypassed: false,
  // eslint-disable-next-line react/prop-types
  renderWrapper: function renderWrapper(_ref2) {
    var children = _ref2.children;
    return /*#__PURE__*/React.createElement(React.Fragment, null, children);
  }
};
export default CollapsibleMenu;