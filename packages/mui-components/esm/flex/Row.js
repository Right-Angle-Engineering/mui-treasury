function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import cx from 'clsx';
import Item from './Item';
import { Provider, useGapLookup } from './core';

var Row = function Row(_ref) {
  var className = _ref.className,
      children = _ref.children,
      gap = _ref.gap,
      wrap = _ref.wrap,
      props = _objectWithoutProperties(_ref, ["className", "children", "gap", "wrap"]);

  var _useGapLookup = useGapLookup(gap),
      calculatedGap = _useGapLookup.calculatedGap,
      itemProps = _useGapLookup.itemProps;

  return /*#__PURE__*/React.createElement(Item, _extends({
    className: cx('FlexRow', className),
    display: 'flex'
  }, wrap && {
    flexWrap: 'wrap'
  }, itemProps, props, {
    gapDisabled: true
  }), /*#__PURE__*/React.createElement(Provider, {
    flexDirection: 'row',
    gap: calculatedGap
  }, children));
};

export default Row;