"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "bannerCheckboxStyles", {
  enumerable: true,
  get: function get() {
    return _bannerCheckbox.bannerCheckboxStyles;
  }
});
Object.defineProperty(exports, "bannerFormControlLabelStyles", {
  enumerable: true,
  get: function get() {
    return _bannerCheckbox.bannerFormControlLabelStyles;
  }
});
Object.defineProperty(exports, "bannerSubtitleStyles", {
  enumerable: true,
  get: function get() {
    return _bannerCheckbox.bannerSubtitleStyles;
  }
});
exports.bannerCheckboxStylesHook = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _bannerCheckbox = require("./bannerCheckbox.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var bannerCheckboxStylesHook = {
  useCheckbox: (0, _makeStyles["default"])(_bannerCheckbox.bannerCheckboxStyles, {
    name: 'BannerCheckbox'
  }),
  useFormControlLabel: (0, _makeStyles["default"])(_bannerCheckbox.bannerFormControlLabelStyles, {
    name: 'BannerCheckbox'
  }),
  useSubtitle: (0, _makeStyles["default"])(_bannerCheckbox.bannerSubtitleStyles, {
    name: 'BannerCheckbox'
  })
};
exports.bannerCheckboxStylesHook = bannerCheckboxStylesHook;