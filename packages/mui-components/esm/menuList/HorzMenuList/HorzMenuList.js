function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import cx from 'clsx';
import PropTypes from 'prop-types';
import withStyles from '@mui/styles/withStyles';
import createStyles from './HorzMenuList.styles';
var HorzMenuList = withStyles(createStyles, {
  name: 'HorzMenuList'
})(function (_ref) {
  var className = _ref.className,
      classes = _ref.classes,
      menus = _ref.menus,
      selectedKey = _ref.selectedKey,
      getItemProps = _ref.getItemProps,
      Link = _ref.Link;

  var renderLink = function renderLink(_ref2) {
    var target = _ref2.target,
        to = _ref2.to,
        external = _ref2.external,
        label = _ref2.label;

    if (!to) {
      return label;
    }

    if (external) {
      return /*#__PURE__*/React.createElement("a", {
        href: to,
        target: target
      }, label);
    }

    return /*#__PURE__*/React.createElement(Link, {
      to: to,
      target: target
    }, label);
  };

  return /*#__PURE__*/React.createElement("ul", {
    className: cx(classes.navRoot, className)
  }, menus.map(function (item, index) {
    var key = item.key,
        disabled = item.disabled;

    var _getItemProps = getItemProps(item, index),
        extItemProps = _extends({}, _getItemProps);

    return /*#__PURE__*/React.createElement("li", _extends({
      key: key,
      className: cx(classes.navItem, (typeof selectedKey === 'function' ? selectedKey(key) : key === selectedKey) && classes.navSelected)
    }, extItemProps, {
      disabled: disabled
    }), renderLink(item));
  }));
});
HorzMenuList.propTypes = {
  className: PropTypes.string,
  menus: PropTypes.arrayOf(PropTypes.shape({})),
  selectedKey: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  getItemProps: PropTypes.func
};
HorzMenuList.defaultProps = {
  className: undefined,
  menus: [],
  selectedKey: '',
  getItemProps: function getItemProps() {
    return {};
  }
};
export default HorzMenuList;