import React from 'react';
import { storiesOf } from '@storybook/react';
import Container from '@mui/material/Container';
import FeatureWidget from './FeatureWidget';
storiesOf('mui-components|Widget', module).add('feature', function () {
  return /*#__PURE__*/React.createElement(Container, {
    maxWidth: 'xs'
  }, /*#__PURE__*/React.createElement(FeatureWidget, {
    title: 'Reduce UI Development time',
    content: /*#__PURE__*/React.createElement(React.Fragment, null, "No one likes to write the same code twice, same as ui. I strongly believe that this project can reduce development time for any starter project based on ", /*#__PURE__*/React.createElement("b", null, "Material-UI")),
    renderIcon: function renderIcon(_ref) {
      var className = _ref.className;
      return /*#__PURE__*/React.createElement("i", {
        className: "fa fa-fighter-jet ".concat(className)
      });
    }
  }));
});