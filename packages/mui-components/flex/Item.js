"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _core = require("./core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Item = function Item(_ref) {
  var className = _ref.className,
      position = _ref.position,
      cssPosition = _ref.cssPosition,
      grow = _ref.grow,
      shrink = _ref.shrink,
      stretched = _ref.stretched,
      gapDisabled = _ref.gapDisabled,
      props = _objectWithoutProperties(_ref, ["className", "position", "cssPosition", "grow", "shrink", "stretched", "gapDisabled"]);

  var flexStyles = (0, _core.useFlexStyles)(position);
  var itemProps = (0, _core.useGapItem)();
  return /*#__PURE__*/_react["default"].createElement(_Box["default"], _extends({
    className: (0, _clsx["default"])('FlexItem', className)
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

var _default = Item;
exports["default"] = _default;