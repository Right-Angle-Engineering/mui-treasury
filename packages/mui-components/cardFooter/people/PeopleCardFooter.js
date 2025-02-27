"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Divider = _interopRequireDefault(require("@mui/material/Divider"));

var _people = require("@mui-treasury/styles/cardFooter/people");

var _face = _interopRequireDefault(require("../../group/face"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PeopleCardFooter = function PeopleCardFooter(_ref) {
  var faces = _ref.faces,
      noDivider = _ref.noDivider;
  var styles = (0, _people.usePeopleCardFooterStyles)();
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !noDivider && /*#__PURE__*/_react["default"].createElement(_Divider["default"], {
    className: styles.divider,
    light: true
  }), /*#__PURE__*/_react["default"].createElement(_face["default"], {
    faces: faces
  }));
};

PeopleCardFooter.propTypes = {
  faces: _propTypes["default"].arrayOf(_propTypes["default"].string),
  noDivider: _propTypes["default"].bool
};
PeopleCardFooter.defaultProps = {
  faces: [],
  noDivider: false
};
var _default = PeopleCardFooter;
exports["default"] = _default;