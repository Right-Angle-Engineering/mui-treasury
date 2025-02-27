import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import TreeChart from './TreeChart';
import Trunk from './submodules/Trunk';
import Stem from './submodules/Stem';
import Twig from './submodules/Twig';
import Branches from './submodules/Branches';
storiesOf('mui-components|Chart', module).add('Tree', function () {
  return /*#__PURE__*/React.createElement(TreeChart, {
    length: 24,
    gutter: 16,
    outline: '1px solid red'
  }, /*#__PURE__*/React.createElement(Box, {
    p: 4
  }, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    spacing: 5
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement(Stem, null, /*#__PURE__*/React.createElement(Avatar, null))), /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement(Twig, null, /*#__PURE__*/React.createElement(Stem, null, /*#__PURE__*/React.createElement(Avatar, null))), /*#__PURE__*/React.createElement(Twig, null, /*#__PURE__*/React.createElement(Stem, null, /*#__PURE__*/React.createElement(Avatar, null))), /*#__PURE__*/React.createElement(Twig, null, /*#__PURE__*/React.createElement(Stem, null, /*#__PURE__*/React.createElement(Avatar, null)))), /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement(Twig, null, /*#__PURE__*/React.createElement(Stem, null, /*#__PURE__*/React.createElement(Avatar, null)), /*#__PURE__*/React.createElement(Branches, null, /*#__PURE__*/React.createElement(Twig, null, /*#__PURE__*/React.createElement(Stem, null, /*#__PURE__*/React.createElement(Avatar, null))), /*#__PURE__*/React.createElement(Twig, null, /*#__PURE__*/React.createElement(Stem, null, /*#__PURE__*/React.createElement(Avatar, null)))))), /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement(Trunk, null, /*#__PURE__*/React.createElement(Avatar, null), /*#__PURE__*/React.createElement(Branches, null, /*#__PURE__*/React.createElement(Twig, null, /*#__PURE__*/React.createElement(Stem, null, /*#__PURE__*/React.createElement(Avatar, null)), /*#__PURE__*/React.createElement(Branches, null, /*#__PURE__*/React.createElement(Twig, null, /*#__PURE__*/React.createElement(Stem, null, /*#__PURE__*/React.createElement(Avatar, null))), /*#__PURE__*/React.createElement(Twig, null, /*#__PURE__*/React.createElement(Stem, null, /*#__PURE__*/React.createElement(Avatar, null))))), /*#__PURE__*/React.createElement(Twig, null, /*#__PURE__*/React.createElement(Stem, null, /*#__PURE__*/React.createElement(Avatar, null)), /*#__PURE__*/React.createElement(Branches, null, /*#__PURE__*/React.createElement(Twig, null, /*#__PURE__*/React.createElement(Stem, null, /*#__PURE__*/React.createElement(Avatar, null))), /*#__PURE__*/React.createElement(Twig, null, /*#__PURE__*/React.createElement(Stem, null, /*#__PURE__*/React.createElement(Avatar, null))), /*#__PURE__*/React.createElement(Twig, null, /*#__PURE__*/React.createElement(Stem, null, /*#__PURE__*/React.createElement(Avatar, null)))))))))));
});