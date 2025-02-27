"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BreakpointProvider = exports.useBreakpointLookup = exports.Provider = exports.useFlexStyles = exports.useFlexCtx = exports.useGapItem = exports.useGapLookup = exports.useGapCtx = exports.positionInsideColumn = exports.positionInsideRow = exports.GapProvider = exports.FlexProvider = void 0;

var _react = _interopRequireDefault(require("react"));

var _useTheme = _interopRequireDefault(require("@mui/material/styles/useTheme"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var FlexContext = _react["default"].createContext(undefined);

var GapContext = _react["default"].createContext(undefined);

var BreakpointContext = _react["default"].createContext(undefined);

var FlexProvider = FlexContext.Provider;
exports.FlexProvider = FlexProvider;
var GapProvider = GapContext.Provider;
exports.GapProvider = GapProvider;

var positionInsideRow = function positionInsideRow(position) {
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

exports.positionInsideRow = positionInsideRow;

var positionInsideColumn = function positionInsideColumn(position) {
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

exports.positionInsideColumn = positionInsideColumn;

var useGapCtx = function useGapCtx() {
  return _react["default"].useContext(GapContext);
};

exports.useGapCtx = useGapCtx;

var useGapLookup = function useGapLookup(gap) {
  var isValidGap = typeof gap !== 'undefined';
  var inheritedGap = useGapCtx();
  var hasInheritedGap = typeof inheritedGap !== 'undefined';
  var calculatedGap = gap;

  if (!isValidGap) {
    calculatedGap = inheritedGap;
  }

  var theme = (0, _useTheme["default"])();
  return {
    isValidGap: isValidGap,
    hasInheritedGap: hasInheritedGap,
    calculatedGap: calculatedGap,
    itemProps: _extends(_extends({}, !hasInheritedGap && {
      // need to do this, otherwise cannot test calc() with .toHaveStyle
      p: (0, _utils.gapToCss)(theme)(calculatedGap)
    }), hasInheritedGap && isValidGap && {
      p: (0, _utils.gapToCss)(theme)(inheritedGap),
      m: (0, _utils.gapToCss)(theme, function (value) {
        return (0, _utils.resolveGap)(typeof value === 'number' ? -value : "-".concat(value));
      })(gap)
    })
  };
};

exports.useGapLookup = useGapLookup;

var useGapItem = function useGapItem() {
  var theme = (0, _useTheme["default"])();
  var gap = useGapCtx();
  return {
    p: (0, _utils.gapToCss)(theme)(gap)
  };
};

exports.useGapItem = useGapItem;

var useFlexCtx = function useFlexCtx() {
  return _react["default"].useContext(FlexContext);
};

exports.useFlexCtx = useFlexCtx;

var useFlexStyles = function useFlexStyles(position) {
  var flex = _react["default"].useContext(FlexContext);

  if (flex === 'row') return positionInsideRow(position);
  if (flex === 'column') return positionInsideColumn(position);
};

exports.useFlexStyles = useFlexStyles;

var Provider = function Provider(_ref) {
  var flexDirection = _ref.flexDirection,
      gap = _ref.gap,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(FlexProvider, {
    value: flexDirection
  }, /*#__PURE__*/_react["default"].createElement(GapProvider, {
    value: gap
  }, children));
};

exports.Provider = Provider;

var useBreakpointLookup = function useBreakpointLookup(at) {
  var inheritedAt = _react["default"].useContext(BreakpointContext);

  return {
    calculatedAt: typeof at !== 'undefined' ? at : inheritedAt
  };
};

exports.useBreakpointLookup = useBreakpointLookup;

var BreakpointProvider = function BreakpointProvider(_ref2) {
  var at = _ref2.at,
      children = _ref2.children;
  return /*#__PURE__*/_react["default"].createElement(BreakpointContext.Provider, {
    value: at
  }, children);
};

exports.BreakpointProvider = BreakpointProvider;