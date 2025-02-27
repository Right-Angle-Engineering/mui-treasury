function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

function SvgComponent(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 512 512",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M256 8C119.1 8 8 119.1 8 256s111.1 248 248 248 248-111.1 248-248S392.9 8 256 8zm-70.7 372a124 124 0 010-248c31.3 0 60.1 11 83 32.3l-33.6 32.6c-13.2-12.9-31.3-19.1-49.4-19.1-42.9 0-77.2 35.5-77.2 78.1s34.2 78.1 77.2 78.1c32.6 0 64.9-19.1 70.1-53.3h-70.1v-42.6h116.9a109.2 109.2 0 011.9 20.7c0 70.8-47.5 121.2-118.8 121.2zm230.2-106.2v35.5H380v-35.5h-35.5v-35.5H380v-35.5h35.5v35.5h35.2v35.5z"
  }));
}

export default SvgComponent;