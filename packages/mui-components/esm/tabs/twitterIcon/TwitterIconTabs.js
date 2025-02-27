function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Badge from '@mui/material/Badge';
import { twitterIconTabsStylesHook } from '@mui-treasury/styles/tabs';

var TwitterIconTabs = function TwitterIconTabs(_ref) {
  var tabs = _ref.tabs,
      globalTabProps = _ref.tabProps,
      globalBadgeProps = _ref.badgeProps,
      props = _objectWithoutProperties(_ref, ["tabs", "tabProps", "badgeProps"]);

  var tabsClasses = twitterIconTabsStylesHook.useTabs(props);
  var tabClasses = twitterIconTabsStylesHook.useTabItem(globalTabProps);
  var badgeClasses = twitterIconTabsStylesHook.useBadge(globalBadgeProps);
  return /*#__PURE__*/React.createElement(Tabs, _extends({
    variant: 'fullWidth'
  }, props, {
    classes: tabsClasses
  }), tabs.map(function (tab, i) {
    var badgeProps = tab.badgeProps,
        icon = tab.icon,
        tabProps = _objectWithoutProperties(tab, ["badgeProps", "icon"]);

    return /*#__PURE__*/React.createElement(Tab // eslint-disable-next-line react/no-array-index-key
    , _extends({
      key: i,
      className: 'MuiTab--iconOnly',
      icon: icon
    }, badgeProps && {
      icon: /*#__PURE__*/React.createElement(Badge, _extends({
        className: badgeProps.badgeContent === '' ? 'MuiBadge--dotted' : 'MuiBadge--number',
        badgeContent: '',
        invisible: false
      }, globalBadgeProps, badgeProps, {
        classes: _extends(_extends({}, badgeClasses), {}, {
          badge: cx(badgeClasses.badge, 'MuiBadge-badge')
        })
      }), icon)
    }, {
      disableRipple: true
    }, globalTabProps, tabProps, {
      classes: _extends(_extends({}, tabClasses), {}, {
        wrapper: cx(tabClasses.wrapper, 'MuiTab-wrapper')
      })
    }));
  }));
};

TwitterIconTabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.node.isRequired
  })),
  tabProps: PropTypes.shape({}),
  badgeProps: PropTypes.shape({})
};
TwitterIconTabs.defaultProps = {
  tabs: [],
  tabProps: {},
  badgeProps: {}
};
export default TwitterIconTabs;