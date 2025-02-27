"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@mui/material/styles");

var growIconButtonStyles = function growIconButtonStyles(_ref) {
  var palette = _ref.palette;
  return (0, _styles.createStyles)({
    root: function root(_ref2) {
      var _ref2$color = _ref2.color,
          color = _ref2$color === void 0 ? palette.primary.light : _ref2$color,
          _ref2$thickness = _ref2.thickness,
          thickness = _ref2$thickness === void 0 ? 3 : _ref2$thickness;
      return {
        backgroundColor: '#fff',
        boxShadow: 'none',
        transition: '0.3s cubic-bezier(.47,1,.41,.8)',
        '&:hover, &:focus': {
          backgroundColor: '#fff',
          boxShadow: "0 0 0 ".concat(thickness, "px ").concat(color)
        }
      };
    }
  });
};

var _default = growIconButtonStyles;
exports["default"] = _default;