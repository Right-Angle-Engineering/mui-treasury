"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _createStyles = _interopRequireDefault(require("@mui/styles/createStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var growAvatarStyles = function growAvatarStyles() {
  return (0, _createStyles["default"])({
    root: function root(_ref) {
      var src = _ref.src,
          _ref$blur = _ref.blur,
          blur = _ref$blur === void 0 ? '8px' : _ref$blur,
          size = _ref.size,
          _ref$radius = _ref.radius,
          radius = _ref$radius === void 0 ? '50%' : _ref$radius,
          _ref$opacity = _ref.opacity,
          opacity = _ref$opacity === void 0 ? 0.8 : _ref$opacity;
      return {
        position: 'relative',
        zIndex: 0,
        width: size,
        height: size,
        overflow: 'visible',
        '& > div': {
          width: size,
          height: size,
          borderRadius: radius
        },
        '&:before': {
          margin: -4,
          content: '""',
          display: 'block',
          position: 'absolute',
          zIndex: -1,
          borderRadius: radius,
          backgroundImage: "url(".concat(src, ")"),
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          filter: "blur(".concat(blur, ")"),
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          opacity: opacity
        }
      };
    }
  });
};

var _default = growAvatarStyles;
exports["default"] = _default;