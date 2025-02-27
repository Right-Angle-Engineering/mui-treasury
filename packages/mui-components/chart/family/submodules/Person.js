"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Avatar = _interopRequireDefault(require("@mui/material/Avatar"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _tree = require("../../tree");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Person = function Person(_ref) {
  var displayName = _ref.displayName,
      photoURL = _ref.photoURL;
  var classes = (0, _tree.useTreeStyles)();
  return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    align: 'center',
    lineHeight: 1
  }, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
    alt: displayName,
    src: photoURL,
    className: classes.personAvatar
  }), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    mt: 0.5,
    mb: 1,
    minHeight: 12,
    position: 'relative',
    mx: 'auto',
    align: 'center'
  }, displayName && /*#__PURE__*/_react["default"].createElement("p", {
    className: classes.personName
  }, displayName)), /*#__PURE__*/_react["default"].createElement("div", null));
};

Person.propTypes = {
  displayName: _propTypes["default"].string,
  photoURL: _propTypes["default"].string
};
Person.defaultProps = {
  displayName: undefined,
  photoURL: undefined
};
var _default = Person;
exports["default"] = _default;