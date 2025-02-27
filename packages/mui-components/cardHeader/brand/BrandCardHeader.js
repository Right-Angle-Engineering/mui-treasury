"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _withStyles = _interopRequireDefault(require("@mui/styles/withStyles"));

var _brand = _interopRequireDefault(require("@mui-treasury/styles/cardHeader/brand"));

var _Avatar = _interopRequireDefault(require("@mui/material/Avatar"));

var _Typography = _interopRequireDefault(require("@mui/material/Typography"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BrandCardHeader = (0, _withStyles["default"])(_brand["default"], {
  name: 'BrandCardHeader'
})(function (_ref) {
  var classes = _ref.classes,
      image = _ref.image,
      extra = _ref.extra;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.header
  }, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
    alt: 'brand logo',
    className: classes.avatar,
    src: image
  }), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    className: classes.extra
  }, extra)), /*#__PURE__*/_react["default"].createElement("hr", {
    className: classes.divider
  }));
});
BrandCardHeader.propTypes = {
  image: _propTypes["default"].string,
  extra: _propTypes["default"].string
};
BrandCardHeader.defaultProps = {
  image: '',
  extra: ''
};
var _default = BrandCardHeader;
exports["default"] = _default;