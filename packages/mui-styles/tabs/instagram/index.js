"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _instagramTabs = require("./instagramTabs.styles");

Object.keys(_instagramTabs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _instagramTabs[key];
    }
  });
});