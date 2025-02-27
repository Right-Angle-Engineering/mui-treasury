function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import useTheme from '@mui/material/styles/useTheme';
import { gapToCss, resolveGap } from './utils';
var FlexContext = React.createContext(undefined);
var GapContext = React.createContext(undefined);
var BreakpointContext = React.createContext(undefined);
export var FlexProvider = FlexContext.Provider;
export var GapProvider = GapContext.Provider;
export var positionInsideRow = function positionInsideRow(position) {
  if (position === 'left') return undefined;
  if (position === 'right') return {
    marginLeft: 'auto'
  };
  if (position === 'top') return {
    alignSelf: 'flex-start'
  };
  if (position === 'bottom') return {
    alignSelf: 'flex-end'
  };
  if (position === 'middle') return {
    alignSelf: 'center'
  };
  if (position === 'middle-right') return {
    alignSelf: 'center',
    marginLeft: 'auto'
  };
  if (position === 'center') return {
    alignSelf: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  };
};
export var positionInsideColumn = function positionInsideColumn(position) {
  if (position === 'left') return {
    alignSelf: 'flex-start'
  };
  if (position === 'right') return {
    alignSelf: 'flex-end'
  };
  if (position === 'top') return undefined;
  if (position === 'bottom') return {
    marginTop: 'auto'
  };
  if (position === 'middle') return {
    marginTop: 'auto',
    marginBottom: 'auto'
  };
  if (position === 'middle-right') return {
    alignSelf: 'flex-end',
    marginTop: 'auto',
    marginBottom: 'auto'
  };
  if (position === 'center') return {
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 'auto'
  };
};
export var useGapCtx = function useGapCtx() {
  return React.useContext(GapContext);
};
export var useGapLookup = function useGapLookup(gap) {
  var isValidGap = typeof gap !== 'undefined';
  var inheritedGap = useGapCtx();
  var hasInheritedGap = typeof inheritedGap !== 'undefined';
  var calculatedGap = gap;

  if (!isValidGap) {
    calculatedGap = inheritedGap;
  }

  var theme = useTheme();
  return {
    isValidGap: isValidGap,
    hasInheritedGap: hasInheritedGap,
    calculatedGap: calculatedGap,
    itemProps: _extends(_extends({}, !hasInheritedGap && {
      // need to do this, otherwise cannot test calc() with .toHaveStyle
      p: gapToCss(theme)(calculatedGap)
    }), hasInheritedGap && isValidGap && {
      p: gapToCss(theme)(inheritedGap),
      m: gapToCss(theme, function (value) {
        return resolveGap(typeof value === 'number' ? -value : "-".concat(value));
      })(gap)
    })
  };
};
export var useGapItem = function useGapItem() {
  var theme = useTheme();
  var gap = useGapCtx();
  return {
    p: gapToCss(theme)(gap)
  };
};
export var useFlexCtx = function useFlexCtx() {
  return React.useContext(FlexContext);
};
export var useFlexStyles = function useFlexStyles(position) {
  var flex = React.useContext(FlexContext);
  if (flex === 'row') return positionInsideRow(position);
  if (flex === 'column') return positionInsideColumn(position);
};
export var Provider = function Provider(_ref) {
  var flexDirection = _ref.flexDirection,
      gap = _ref.gap,
      children = _ref.children;
  return /*#__PURE__*/React.createElement(FlexProvider, {
    value: flexDirection
  }, /*#__PURE__*/React.createElement(GapProvider, {
    value: gap
  }, children));
};
export var useBreakpointLookup = function useBreakpointLookup(at) {
  var inheritedAt = React.useContext(BreakpointContext);
  return {
    calculatedAt: typeof at !== 'undefined' ? at : inheritedAt
  };
};
export var BreakpointProvider = function BreakpointProvider(_ref2) {
  var at = _ref2.at,
      children = _ref2.children;
  return /*#__PURE__*/React.createElement(BreakpointContext.Provider, {
    value: at
  }, children);
};