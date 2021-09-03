"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  chromeTabsStylesHook: true,
  containedTabsStylesHook: true,
  elevatedTabsStylesHook: true,
  firebaseTabsStylesHook: true,
  insideTriangleTabsStylesHook: true,
  instagramTabsStylesHook: true,
  pillTabsStylesHook: true,
  plainTabsStylesHook: true,
  serratedTabsStylesHook: true,
  twitterIconTabsStylesHook: true,
  twitterTabsStylesHook: true,
  appleTabsStylesHook: true
};
exports.appleTabsStylesHook = exports.twitterTabsStylesHook = exports.twitterIconTabsStylesHook = exports.serratedTabsStylesHook = exports.plainTabsStylesHook = exports.pillTabsStylesHook = exports.instagramTabsStylesHook = exports.insideTriangleTabsStylesHook = exports.firebaseTabsStylesHook = exports.elevatedTabsStylesHook = exports.containedTabsStylesHook = exports.chromeTabsStylesHook = void 0;

var _createStyles = _interopRequireDefault(require("@mui/styles/createStyles"));

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var chromeTabsStyles = _interopRequireWildcard(require("./chrome/chromeTabs.styles"));

var containedTabsStyles = _interopRequireWildcard(require("./contained/containedTabs.styles"));

var elevatedTabsStyles = _interopRequireWildcard(require("./elevated/elevatedTabs.styles"));

var firebaseTabsStyles = _interopRequireWildcard(require("./firebase/firebaseTabs.styles"));

var insideTriangleTabsStyles = _interopRequireWildcard(require("./inside-triangle/insideTriangleTabs.styles"));

var instagramTabsStyles = _interopRequireWildcard(require("./instagram/instagramTabs.styles"));

var pillTabsStyles = _interopRequireWildcard(require("./pill/pillTabs.styles"));

var serratedTabsStyles = _interopRequireWildcard(require("./serrated/serratedTabs.styles"));

var twitterIconTabsStyles = _interopRequireWildcard(require("./twitterIcon/twitterIconTabs.styles"));

var twitterTabsStyles = _interopRequireWildcard(require("./twitter/twitterTabs.styles"));

var appleTabs = _interopRequireWildcard(require("./apple/appleTabs.styles"));

var plain = _interopRequireWildcard(require("./plain"));

var _gmail = require("./gmail");

Object.keys(_gmail).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _gmail[key];
    }
  });
});

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var plainTabsStylesHook = {
  useTabs: (0, _makeStyles["default"])(plain.tabsStyles),
  useTabItem: (0, _makeStyles["default"])(plain.tabItemStyles)
};
exports.plainTabsStylesHook = plainTabsStylesHook;
var chromeTabsStylesHook = {
  useTabs: (0, _makeStyles["default"])(chromeTabsStyles.tabsStyles),
  useTabItem: (0, _makeStyles["default"])((0, _createStyles["default"])(chromeTabsStyles.tabItemStyles))
};
exports.chromeTabsStylesHook = chromeTabsStylesHook;
var containedTabsStylesHook = {
  useTabs: (0, _makeStyles["default"])(containedTabsStyles.tabsStyles),
  useTabItem: (0, _makeStyles["default"])((0, _createStyles["default"])(containedTabsStyles.tabItemStyles))
};
exports.containedTabsStylesHook = containedTabsStylesHook;
var elevatedTabsStylesHook = {
  useTabs: (0, _makeStyles["default"])(elevatedTabsStyles.tabsStyles),
  useTabItem: (0, _makeStyles["default"])((0, _createStyles["default"])(elevatedTabsStyles.tabItemStyles))
};
exports.elevatedTabsStylesHook = elevatedTabsStylesHook;
var firebaseTabsStylesHook = {
  useTabs: (0, _makeStyles["default"])(firebaseTabsStyles.tabsStyles),
  useTabItem: (0, _makeStyles["default"])((0, _createStyles["default"])(firebaseTabsStyles.tabItemStyles))
};
exports.firebaseTabsStylesHook = firebaseTabsStylesHook;
var insideTriangleTabsStylesHook = {
  useTabs: (0, _makeStyles["default"])(insideTriangleTabsStyles.tabsStyles),
  useTabItem: (0, _makeStyles["default"])((0, _createStyles["default"])(insideTriangleTabsStyles.tabItemStyles))
};
exports.insideTriangleTabsStylesHook = insideTriangleTabsStylesHook;
var instagramTabsStylesHook = {
  useTabs: (0, _makeStyles["default"])(instagramTabsStyles.tabsStyles),
  useTabItem: (0, _makeStyles["default"])((0, _createStyles["default"])(instagramTabsStyles.tabItemStyles))
};
exports.instagramTabsStylesHook = instagramTabsStylesHook;
var pillTabsStylesHook = {
  useTabs: (0, _makeStyles["default"])(pillTabsStyles.tabsStyles),
  useTabItem: (0, _makeStyles["default"])((0, _createStyles["default"])(pillTabsStyles.tabItemStyles))
};
exports.pillTabsStylesHook = pillTabsStylesHook;
var serratedTabsStylesHook = {
  useTabs: (0, _makeStyles["default"])(serratedTabsStyles.tabsStyles),
  useTabItem: (0, _makeStyles["default"])((0, _createStyles["default"])(serratedTabsStyles.tabItemStyles))
};
exports.serratedTabsStylesHook = serratedTabsStylesHook;
var twitterIconTabsStylesHook = {
  useTabs: (0, _makeStyles["default"])(twitterIconTabsStyles.tabsStyles),
  useTabItem: (0, _makeStyles["default"])((0, _createStyles["default"])(twitterIconTabsStyles.tabItemStyles)),
  useBadge: (0, _makeStyles["default"])(twitterIconTabsStyles.badgeStyles)
};
exports.twitterIconTabsStylesHook = twitterIconTabsStylesHook;
var twitterTabsStylesHook = {
  useTabs: (0, _makeStyles["default"])(twitterTabsStyles.tabsStyles),
  useTabItem: (0, _makeStyles["default"])((0, _createStyles["default"])(twitterTabsStyles.tabItemStyles))
};
exports.twitterTabsStylesHook = twitterTabsStylesHook;
var appleTabsStylesHook = {
  useTabs: (0, _makeStyles["default"])((0, _createStyles["default"])(appleTabs.tabsStyles)),
  useTabItem: (0, _makeStyles["default"])((0, _createStyles["default"])(appleTabs.tabItemStyles))
};
exports.appleTabsStylesHook = appleTabsStylesHook;