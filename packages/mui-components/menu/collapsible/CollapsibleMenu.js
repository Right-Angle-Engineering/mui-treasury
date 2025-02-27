"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _usePreserveState3 = _interopRequireDefault(require("@mui-treasury/utils/usePreserveState"));

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _Collapse = _interopRequireDefault(require("@mui/material/Collapse"));

var _StylesContext = require("./StylesContext");

var _Row = _interopRequireDefault(require("./submodules/Row"));

var _List = _interopRequireDefault(require("./submodules/List"));

var _ListItem = _interopRequireDefault(require("./submodules/ListItem"));

var _collapsibleMenu = _interopRequireDefault(require("./collapsibleMenu.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useDefaultStyles = (0, _makeStyles["default"])(_collapsibleMenu["default"], {
  name: 'CollapsibleMenu'
});

var CollapsibleMenu = function CollapsibleMenu(_ref) {
  var extCollapsed = _ref.collapsed,
      children = _ref.children,
      renderToggle = _ref.renderToggle,
      renderWrapper = _ref.renderWrapper,
      useStyles = _ref.useStyles,
      onCollapse = _ref.onCollapse,
      stateBypassed = _ref.stateBypassed,
      props = _objectWithoutProperties(_ref, ["collapsed", "children", "renderToggle", "renderWrapper", "useStyles", "onCollapse", "stateBypassed"]);

  var _usePreserveState = (0, _usePreserveState3["default"])(extCollapsed, onCollapse, stateBypassed),
      _usePreserveState2 = _slicedToArray(_usePreserveState, 2),
      collapsed = _usePreserveState2[0],
      setCollapsed = _usePreserveState2[1];

  var onToggle = _react["default"].useMemo(function () {
    return function () {
      return setCollapsed(function (c) {
        return !c;
      });
    };
  }, [setCollapsed]);

  return /*#__PURE__*/_react["default"].createElement(_StylesContext.StylesProvider, {
    useStyles: useStyles
  }, renderWrapper({
    collapsed: collapsed,
    children: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, renderToggle({
      onClick: stateBypassed ? onCollapse : onToggle,
      collapsed: collapsed
    }, setCollapsed), /*#__PURE__*/_react["default"].createElement(_Collapse["default"], _extends({}, props, {
      "in": collapsed
    }), children))
  }));
};

CollapsibleMenu.Row = _Row["default"];
CollapsibleMenu.RowItem = _Row["default"].ListItem;
CollapsibleMenu.Action = _Row["default"].Action;
CollapsibleMenu.List = _List["default"];
CollapsibleMenu.ListItem = _ListItem["default"];
CollapsibleMenu.propTypes = {
  collapsed: _propTypes["default"].bool,
  children: _propTypes["default"].node,
  renderToggle: _propTypes["default"].func,
  renderWrapper: _propTypes["default"].func,
  useStyles: _propTypes["default"].func,
  onCollapse: _propTypes["default"].func,
  stateBypassed: _propTypes["default"].bool
};
CollapsibleMenu.defaultProps = {
  collapsed: false,
  children: undefined,
  renderToggle: function renderToggle() {
    return null;
  },
  useStyles: useDefaultStyles,
  stateBypassed: false,
  // eslint-disable-next-line react/prop-types
  renderWrapper: function renderWrapper(_ref2) {
    var children = _ref2.children;
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children);
  }
};
var _default = CollapsibleMenu;
exports["default"] = _default;