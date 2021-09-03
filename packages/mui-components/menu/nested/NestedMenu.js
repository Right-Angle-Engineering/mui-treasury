"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _utils = require("@mui-treasury/utils");

var _usePreserveState3 = _interopRequireDefault(require("@mui-treasury/utils/usePreserveState"));

var _StylesContext = require("./StylesContext");

var _List = _interopRequireDefault(require("./submodules/List"));

var _ListItem = _interopRequireDefault(require("./submodules/ListItem"));

var _Parent = _interopRequireDefault(require("./submodules/Parent"));

var _Collapse = _interopRequireDefault(require("./submodules/Collapse"));

var _nestedMenu = _interopRequireDefault(require("./nestedMenu.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useDefaultStyles = (0, _makeStyles["default"])(_nestedMenu["default"], {
  name: 'NestedMenu'
});

var NestedMenu = function NestedMenu(_ref) {
  var _ref$useStyles = _ref.useStyles,
      useStyles = _ref$useStyles === void 0 ? useDefaultStyles : _ref$useStyles,
      children = _ref.children,
      _ref$menus = _ref.menus,
      menus = _ref$menus === void 0 ? [] : _ref$menus,
      _ref$openKeys = _ref.openKeys,
      openKeys = _ref$openKeys === void 0 ? [] : _ref$openKeys,
      _ref$selectedKey = _ref.selectedKey,
      extSelectedKey = _ref$selectedKey === void 0 ? '' : _ref$selectedKey,
      onSelectedKeyChange = _ref.onSelectedKeyChange,
      _ref$onOpenKeysChange = _ref.onOpenKeysChange,
      onOpenKeysChange = _ref$onOpenKeysChange === void 0 ? function () {} : _ref$onOpenKeysChange,
      _ref$getRowProps = _ref.getRowProps,
      getRowProps = _ref$getRowProps === void 0 ? function () {} : _ref$getRowProps,
      _ref$getListProps = _ref.getListProps,
      getListProps = _ref$getListProps === void 0 ? function () {} : _ref$getListProps,
      _ref$getActionProps = _ref.getActionProps,
      getActionProps = _ref$getActionProps === void 0 ? function () {} : _ref$getActionProps,
      _ref$getItemProps = _ref.getItemProps,
      getItemProps = _ref$getItemProps === void 0 ? function () {} : _ref$getItemProps,
      renderItem = _ref.renderItem;
  var keyMap = (0, _utils.mapNestedPath)(menus);

  var _usePreserveState = (0, _usePreserveState3["default"])(extSelectedKey, onSelectedKeyChange),
      _usePreserveState2 = _slicedToArray(_usePreserveState, 2),
      selectedKey = _usePreserveState2[0],
      setSelectedKey = _usePreserveState2[1];

  var openKeysCallback = function openKeysCallback(key) {
    return function (toggled) {
      if (toggled) return onOpenKeysChange(openKeys.concat(key));
      return onOpenKeysChange(openKeys.filter(function (k) {
        return k !== key;
      }));
    };
  };

  var renderChildren = function renderChildren(items, level) {
    return items.map(function (item) {
      var key = item.key,
          label = item.label,
          subMenus = item.subMenus,
          isToggleOutside = item.isToggleOutside;
      var selected = selectedKey === key;
      var active = keyMap[key].includes(selectedKey) || selected;

      if (Array.isArray(subMenus) && subMenus.length) {
        return /*#__PURE__*/_react["default"].createElement(_Collapse["default"], {
          key: key,
          level: level,
          collapsed: openKeys.includes(key),
          onCollapse: openKeysCallback(key),
          renderWrapper: function renderWrapper(_ref2) {
            var children = _ref2.children,
                collapsed = _ref2.collapsed;
            return /*#__PURE__*/_react["default"].createElement(_Parent["default"], {
              active: active,
              level: level,
              collapsed: collapsed
            }, children);
          },
          renderToggle: function renderToggle(_ref3) {
            var onClick = _ref3.onClick,
                collapsed = _ref3.collapsed;

            var toToggleProps = function toToggleProps(fn) {
              return fn(item, {
                selected: selected,
                active: active,
                collapsed: collapsed,
                level: level,
                onClick: onClick
              });
            };

            var rowProps = _extends({
              selected: selected
            }, toToggleProps(getRowProps));

            var itemProps = _extends({
              button: true,
              selected: selected
            }, toToggleProps(getItemProps));

            if (!isToggleOutside) {
              var action = /*#__PURE__*/_react["default"].createElement(_Collapse["default"].Action, _extends({
                button: false,
                toggled: collapsed
              }, toToggleProps(getActionProps)));

              return /*#__PURE__*/_react["default"].createElement(_Collapse["default"].Row, rowProps, renderItem ? renderItem(item, _extends(_extends({}, itemProps), {}, {
                onClick: onClick,
                children: action
              })) : /*#__PURE__*/_react["default"].createElement(_Collapse["default"].RowItem, _extends({}, itemProps, {
                onClick: onClick
              }), label, action));
            }

            return /*#__PURE__*/_react["default"].createElement(_Collapse["default"].Row, rowProps, renderItem ? renderItem(item, _extends(_extends({}, itemProps), {}, {
              onClick: onClick,
              children: null
            })) : /*#__PURE__*/_react["default"].createElement(_Collapse["default"].RowItem, itemProps, label), /*#__PURE__*/_react["default"].createElement(_Collapse["default"].Action, _extends({
              toggled: collapsed,
              onClick: onClick
            }, toToggleProps(getActionProps))));
          }
        }, /*#__PURE__*/_react["default"].createElement(_Collapse["default"].List, getListProps(item, {
          active: active,
          selected: selected,
          level: level + 1
        }), renderChildren(subMenus, level + 1)));
      }

      var onClick = function onClick() {
        return setSelectedKey(key);
      };

      var itemProps = _extends({
        key: key,
        button: true,
        level: level,
        selected: selected,
        onClick: onClick
      }, getItemProps(item, {
        active: active,
        selected: selected,
        level: level,
        onClick: onClick
      }));

      return renderItem ? renderItem(item, itemProps) : /*#__PURE__*/_react["default"].createElement(_ListItem["default"], itemProps, label);
    });
  };

  return /*#__PURE__*/_react["default"].createElement(_StylesContext.StylesProvider, {
    useStyles: useStyles
  }, children || /*#__PURE__*/_react["default"].createElement(_List["default"], {
    level: 1
  }, renderChildren(menus, 1)));
};

NestedMenu.List = _List["default"];
NestedMenu.ListItem = _ListItem["default"];
NestedMenu.Parent = _Parent["default"];
NestedMenu.Collapse = _Collapse["default"];
NestedMenu.propTypes = {
  useStyles: _propTypes["default"].func,
  children: _propTypes["default"].node,
  menus: _propTypes["default"].arrayOf(_propTypes["default"].shape({})),
  openKeys: _propTypes["default"].arrayOf(_propTypes["default"].string),
  selectedKey: _propTypes["default"].string,
  onSelectedKeyChange: _propTypes["default"].func,
  onOpenKeysChange: _propTypes["default"].func,
  getRowProps: _propTypes["default"].func,
  getListProps: _propTypes["default"].func,
  getItemProps: _propTypes["default"].func,
  getActionProps: _propTypes["default"].func,
  renderItem: _propTypes["default"].func
};
var _default = NestedMenu;
exports["default"] = _default;