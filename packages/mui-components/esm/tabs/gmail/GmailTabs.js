function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useGmailTabsStyles, useGmailTabItemStyles // @ts-ignore
} from '@mui-treasury/styles/tabs/gmail';
export var GmailTabItem = function GmailTabItem(_ref) {
  var color = _ref.color,
      label = _ref.label,
      subLabel = _ref.subLabel,
      tag = _ref.tag,
      props = _objectWithoutProperties(_ref, ["color", "label", "subLabel", "tag"]);

  var tabItemStyles = useGmailTabItemStyles(_extends(_extends({}, props), {}, {
    color: color
  }));
  return /*#__PURE__*/React.createElement(Tab, _extends({
    disableTouchRipple: true
  }, props, {
    classes: tabItemStyles,
    label: /*#__PURE__*/React.createElement("div", {
      className: 'MuiTabItem-labelGroup'
    }, /*#__PURE__*/React.createElement("div", {
      className: 'MuiTabItem-label'
    }, label, " ", tag && /*#__PURE__*/React.createElement("span", {
      className: 'MuiTabItem-tag'
    }, tag)), subLabel && /*#__PURE__*/React.createElement("div", {
      className: 'MuiTabItem-subLabel'
    }, subLabel))
  }));
};
export var GmailTabs = function GmailTabs(_ref2) {
  var _ref2$indicatorColors = _ref2.indicatorColors,
      indicatorColors = _ref2$indicatorColors === void 0 ? ['#d93025', '#1a73e8', '#188038', '#e37400'] : _ref2$indicatorColors,
      props = _objectWithoutProperties(_ref2, ["indicatorColors"]);

  var tabsStyles = useGmailTabsStyles(_extends(_extends({}, props), {}, {
    indicatorColors: indicatorColors
  }));
  return (
    /*#__PURE__*/
    // @ts-ignore
    React.createElement(Tabs, _extends({}, props, {
      children: React.Children.map(props.children, function (child, index) {
        return React.cloneElement(child, {
          color: indicatorColors[index]
        });
      }),
      classes: tabsStyles,
      TabIndicatorProps: _extends(_extends({}, props.TabIndicatorProps), {}, {
        children: /*#__PURE__*/React.createElement("div", {
          className: "MuiIndicator-".concat(props.value)
        })
      })
    }))
  );
};
export default {
  Tabs: GmailTabs,
  Tab: GmailTabItem
};