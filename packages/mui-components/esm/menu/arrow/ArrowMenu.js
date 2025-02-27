function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import cx from 'clsx';
import makeStyles from '@mui/styles/makeStyles';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import MenuList from '@mui/material/MenuList';
import IconButton from '@mui/material/IconButton';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
export var arrowMenuStyles = {
  root: {
    display: 'inline-flex',
    borderRadius: 4
  },
  button: {
    padding: '8px 2px',
    borderRadius: 4
  },
  arrowBtn: {
    padding: 0,
    borderRadius: 4,
    width: 20,
    marginLeft: -2,
    fontSize: 20,
    '&:hover': {
      color: 'rgba(0,0,0,0.87)'
    }
  },
  open: {
    backgroundColor: 'rgba(0,0,0,0.12)'
  }
};
var useStyles = makeStyles(arrowMenuStyles, {
  name: 'ArrowMenu'
});

var ArrowMenu = function ArrowMenu(_ref) {
  var children = _ref.children,
      renderElement = _ref.renderElement,
      props = _objectWithoutProperties(_ref, ["children", "renderElement"]);

  var styles = useStyles(props);

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var anchorRef = React.useRef(null);

  var handleToggle = function handleToggle() {
    setOpen(function (prevOpen) {
      return !prevOpen;
    });
  };

  var handleClose = function handleClose() {
    setOpen(false);
  };

  var handleListKeyDown = function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }; // return focus to the button when we transitioned from !open -> open


  var prevOpen = React.useRef(open);
  React.useEffect(function () {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return /*#__PURE__*/React.createElement("div", {
    ref: anchorRef,
    className: cx(styles.root, _defineProperty({}, styles.open, open))
  }, renderElement && renderElement({
    onClose: handleClose,
    styles: styles
  }), /*#__PURE__*/React.createElement(IconButton, {
    className: cx(styles.button, styles.arrowBtn)
  }, /*#__PURE__*/React.createElement(ArrowDropDown, {
    fontSize: 'inherit',
    onClick: handleToggle
  })), /*#__PURE__*/React.createElement(Popper, {
    open: open,
    anchorEl: anchorRef.current,
    role: undefined,
    transition: true,
    disablePortal: true,
    placement: 'bottom-start'
  }, function (_ref2) {
    var TransitionProps = _ref2.TransitionProps,
        placement = _ref2.placement;
    return /*#__PURE__*/React.createElement(Fade, _extends({}, TransitionProps, {
      style: {
        transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
      }
    }), /*#__PURE__*/React.createElement(Paper, {
      elevation: 4
    }, /*#__PURE__*/React.createElement(ClickAwayListener, {
      onClickAway: handleClose
    }, /*#__PURE__*/React.createElement(MenuList, {
      autoFocusItem: open,
      id: "menu-list-grow",
      onKeyDown: handleListKeyDown
    }, typeof children === 'function' ? // @ts-ignore
    children({
      onClose: handleClose,
      styles: styles
    }) : children))));
  }));
};

export default ArrowMenu;