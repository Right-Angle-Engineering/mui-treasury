function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import InputBase from '@mui/material/InputBase';
import { useBirthday, useNextFocus } from '../BirthdayContext';
export default (function (_ref) {
  var displayName = _ref.displayName,
      useStyles = _ref.useStyles,
      fieldName = _ref.fieldName,
      maxLength = _ref.maxLength,
      updaterName = _ref.updaterName,
      customOnBlur = _ref.customOnBlur;

  var InputComponent = function InputComponent(_ref2) {
    var Component = _ref2.component,
        classes = _ref2.classes,
        className = _ref2.className,
        inputProps = _ref2.inputProps,
        name = _ref2.name,
        nextFocus = _ref2.nextFocus,
        _onChange = _ref2.onChange,
        _onFocus = _ref2.onFocus,
        _onBlur = _ref2.onBlur,
        zeroPrefixDisabled = _ref2.zeroPrefixDisabled,
        props = _objectWithoutProperties(_ref2, ["component", "classes", "className", "inputProps", "name", "nextFocus", "onChange", "onFocus", "onBlur", "zeroPrefixDisabled"]);

    var styles = useStyles();

    var _useBirthday = useBirthday(),
        state = _useBirthday[fieldName],
        updater = _useBirthday[updaterName];

    var setFocused = useNextFocus(state.length === maxLength, nextFocus);
    return /*#__PURE__*/React.createElement(Component, _extends({
      type: 'tel',
      inputProps: _extends({
        maxLength: maxLength,
        name: name
      }, inputProps)
    }, props, {
      className: cx(styles.root, className),
      classes: classes,
      value: state,
      onChange: function onChange(e) {
        updater(e.target.value);
        return _onChange === null || _onChange === void 0 ? void 0 : _onChange(e);
      },
      onFocus: function onFocus(e) {
        setFocused(true);
        return _onFocus === null || _onFocus === void 0 ? void 0 : _onFocus(e);
      },
      onBlur: function onBlur(e) {
        setFocused(false); // eslint-disable-next-line no-unused-expressions

        customOnBlur === null || customOnBlur === void 0 ? void 0 : customOnBlur(e, {
          zeroPrefixDisabled: zeroPrefixDisabled,
          updater: updater
        });
        return _onBlur === null || _onBlur === void 0 ? void 0 : _onBlur(e);
      }
    }));
  };

  InputComponent.displayName = displayName;
  InputComponent.propTypes = {
    component: PropTypes.elementType,
    classes: PropTypes.shape({}),
    className: PropTypes.string,
    inputProps: PropTypes.shape({}),
    zeroPrefixDisabled: PropTypes.bool,
    name: PropTypes.string,
    nextFocus: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
  };
  InputComponent.defaultProps = {
    component: InputBase,
    classes: undefined,
    className: undefined,
    inputProps: undefined,
    name: undefined,
    zeroPrefixDisabled: false,
    nextFocus: undefined,
    onChange: undefined,
    onFocus: undefined,
    onBlur: undefined
  };
  return InputComponent;
});