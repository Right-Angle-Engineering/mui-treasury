function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React from 'react';
import { storiesOf } from '@storybook/react';
import makeStyles from '@mui/styles/makeStyles';
import Birthday from './BirthdayTextField';
import { useBootstrapInputStyles } from '@mui-treasury/styles/input/bootstrap';

var StylesProvider = function StylesProvider(_ref) {
  var children = _ref.children,
      hooks = _ref.hooks;
  return /*#__PURE__*/React.createElement(React.Fragment, null, children(hooks.map(function (hook) {
    return hook();
  })));
};

var useStyles = makeStyles(function () {
  return {
    label: {
      marginBottom: 4
    },
    day: {
      width: 48
    },
    month: {
      width: 56
    },
    year: {
      width: 72
    },
    separator: {
      padding: '0 4px'
    }
  };
});
storiesOf('mui-components|TextField', module).add('birthday', function () {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Birthday, {
    id: 'dob',
    label: 'Date of birth'
  }, /*#__PURE__*/React.createElement(Birthday.Day, {
    placeholder: 'DD',
    name: 'birthday.day',
    nextFocus: 'birthday.month'
  }), /*#__PURE__*/React.createElement(Birthday.Separator, null), /*#__PURE__*/React.createElement(Birthday.Month, {
    placeholder: 'MM',
    name: 'birthday.month',
    nextFocus: 'birthday.year'
  }), /*#__PURE__*/React.createElement(Birthday.Separator, null), /*#__PURE__*/React.createElement(Birthday.Year, {
    placeholder: 'YYYY',
    name: 'birthday.year'
  })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(StylesProvider, {
    hooks: [useBootstrapInputStyles, useStyles]
  }, function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        bootstrap = _ref3[0],
        styles = _ref3[1];

    return /*#__PURE__*/React.createElement(Birthday, {
      id: 'dob2',
      label: 'Date of birth',
      InputLabelProps: {
        className: styles.label
      }
    }, /*#__PURE__*/React.createElement(Birthday.Day, {
      classes: bootstrap,
      className: styles.day,
      placeholder: 'DD',
      name: 'birthday.day2',
      nextFocus: 'birthday.month2'
    }), /*#__PURE__*/React.createElement(Birthday.Separator, {
      className: styles.separator
    }), /*#__PURE__*/React.createElement(Birthday.Month, {
      classes: bootstrap,
      className: styles.month,
      placeholder: 'MM',
      name: 'birthday.month2',
      nextFocus: 'birthday.year2'
    }), /*#__PURE__*/React.createElement(Birthday.Separator, {
      className: styles.separator
    }), /*#__PURE__*/React.createElement(Birthday.Year, {
      classes: bootstrap,
      className: styles.year,
      placeholder: 'YYYY',
      name: 'birthday.year2'
    }));
  }));
}).add('birthday (RTL)', function () {
  return /*#__PURE__*/React.createElement(Birthday, {
    id: 'dob',
    label: 'Date of birth'
  }, /*#__PURE__*/React.createElement(Birthday.Year, {
    placeholder: 'YYYY',
    name: 'birthday.year',
    nextFocus: 'birthday.month'
  }), /*#__PURE__*/React.createElement(Birthday.Separator, null), /*#__PURE__*/React.createElement(Birthday.Month, {
    placeholder: 'MM',
    name: 'birthday.month',
    nextFocus: 'birthday.day'
  }), /*#__PURE__*/React.createElement(Birthday.Separator, null), /*#__PURE__*/React.createElement(Birthday.Day, {
    placeholder: 'DD',
    name: 'birthday.day'
  }));
});