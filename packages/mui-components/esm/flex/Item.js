function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import cx from 'clsx';
import Box from '@mui/material/Box';
import { useFlexStyles, useGapItem } from './core';

var Item = function Item(_ref) {
  var className = _ref.className,
      position = _ref.position,
      cssPosition = _ref.cssPosition,
      grow = _ref.grow,
      shrink = _ref.shrink,
      stretched = _ref.stretched,
      gapDisabled = _ref.gapDisabled,
      props = _objectWithoutProperties(_ref, ["className", "position", "cssPosition", "grow", "shrink", "stretched", "gapDisabled"]);

  var flexStyles = useFlexStyles(position);
  var itemProps = useGapItem();
  return /*#__PURE__*/React.createElement(Box, _extends({
    className: cx('FlexItem', className)
  }, flexStyles, !gapDisabled && itemProps, {
    flexGrow: typeof grow === 'boolean' ? 1 : grow
  }, stretched && {
    flexGrow: 100000
  }, {
    flexShrink: shrink
  }, props, {
    position: cssPosition
  }));
};

export default Item;