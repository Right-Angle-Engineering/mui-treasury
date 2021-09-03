function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';

var calculateMargin = function calculateMargin(selfIndex, slideIndex) {
  var speed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 50;
  var diff = selfIndex - slideIndex;
  if (Math.abs(diff) > 1) return 0;
  return "".concat(diff * speed, "%");
};

var ParallaxSlide = function ParallaxSlide(_ref) {
  var transition = _ref.transition,
      children = _ref.children,
      renderElements = _ref.renderElements,
      props = _objectWithoutProperties(_ref, ["transition", "children", "renderElements"]);

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      index = _useState2[0],
      setIndex = _useState2[1];

  var _useState3 = useState(index),
      _useState4 = _slicedToArray(_useState3, 2),
      fineIndex = _useState4[0],
      setFineIndex = _useState4[1];

  var onChangeIndex = function onChangeIndex(i) {
    setIndex(i);
    setFineIndex(i);
  };

  var views = children({
    fineIndex: fineIndex,
    injectStyle: function injectStyle(slideIndex, speed) {
      return {
        marginLeft: calculateMargin(slideIndex, fineIndex, speed),
        transition: fineIndex === index ? transition : 'none'
      };
    }
  });
  var isSingleView = views.length < 2;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SwipeableViews, _extends({
    disabled: isSingleView,
    resistance: true,
    springConfig: {
      duration: '0.6s',
      easeFunction: '',
      delay: '0s'
    },
    enableMouseEvents: true
  }, props, {
    index: index,
    onChangeIndex: onChangeIndex,
    onSwitching: function onSwitching(i) {
      setFineIndex(i);
    }
  }), views), !isSingleView && renderElements({
    index: index,
    onChangeIndex: onChangeIndex
  }));
};

ParallaxSlide.propTypes = {
  transition: PropTypes.string,
  children: PropTypes.func.isRequired,
  renderElements: PropTypes.func
};
ParallaxSlide.defaultProps = {
  transition: '0.8s',
  renderElements: function renderElements() {}
};
export default ParallaxSlide;