"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Avatar = _interopRequireDefault(require("@mui/material/Avatar"));

var _face = require("@mui-treasury/styles/group/face");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FaceGroup = function FaceGroup(_ref) {
  var faces = _ref.faces,
      offset = _ref.offset,
      size = _ref.size;
  var styles = (0, _face.useFaceGroupStyles)({
    offset: offset,
    size: size
  });
  return faces.map(function (face) {
    return /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
      className: styles.item,
      key: face,
      src: face
    });
  });
};

FaceGroup.propTypes = {
  faces: _propTypes["default"].arrayOf(_propTypes["default"].string),
  offset: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  size: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
};
FaceGroup.defaultProps = {
  offset: undefined,
  // spacing unit
  size: undefined // spacing unit

};
var _default = FaceGroup;
exports["default"] = _default;