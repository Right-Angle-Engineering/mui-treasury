import React from 'react';
import { storiesOf } from '@storybook/react';
import makeStyles from '@mui/styles/makeStyles';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Children from './submodules/Children';
import FamilyChart from './FamilyChart';
import Spouse from './submodules/Spouse';
import Inheritor from './submodules/Inheritor';
import styles from './familyChart.styles';
import TreeChart from '../tree';
var useStyles = makeStyles(styles, {
  name: 'FamilyChart'
});
storiesOf('mui-components|Chart', module).add('Family', function () {
  return /*#__PURE__*/React.createElement(Grid, {
    container: true,
    spacing: 4
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement(FamilyChart, {
    stretchIndexes: [2],
    tree: {
      displayName: 'Alanis',
      spouse: {
        displayName: 'Leon'
      },
      children: [{
        displayName: 'Hattie',
        spouse: {
          displayName: 'Alessa'
        },
        children: [{
          displayName: 'Alexander'
        }, {
          displayName: 'Bryna'
        }]
      }, {
        displayName: 'Celina',
        spouse: [{
          spouse: {
            displayName: 'Josephe'
          },
          children: [{
            displayName: 'Zandra',
            children: [{
              displayName: 'Anuj'
            }]
          }, {
            displayName: 'Damian'
          }, {
            displayName: 'Mary',
            spouse: {
              displayName: 'Celina'
            },
            children: [{
              displayName: 'Benita'
            }]
          }]
        }, {
          displayName: 'Claude',
          children: [{
            displayName: 'Ryanne'
          }, {
            spouse: {
              displayName: 'Cristina'
            }
          }]
        }, {
          displayName: 'Zlatan'
        }]
      }, {
        displayName: 'Geraldine'
      }]
    }
  })), /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement(TreeChart, {
    useStyles: useStyles
  }, /*#__PURE__*/React.createElement(TreeChart.Stem, null, /*#__PURE__*/React.createElement(Avatar, null)), /*#__PURE__*/React.createElement(Spouse, null, /*#__PURE__*/React.createElement(Avatar, null))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(TreeChart, {
    useStyles: useStyles
  }, /*#__PURE__*/React.createElement(TreeChart.Stem, null, /*#__PURE__*/React.createElement(Avatar, null)), /*#__PURE__*/React.createElement(Spouse, {
    hasChildren: true
  }, /*#__PURE__*/React.createElement(Avatar, null)))), /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement(TreeChart, {
    useStyles: useStyles
  }, /*#__PURE__*/React.createElement(Children, null, /*#__PURE__*/React.createElement(Inheritor, {
    hasOneSpouse: true
  }, /*#__PURE__*/React.createElement(TreeChart.Stem, null, /*#__PURE__*/React.createElement(Avatar, null)), /*#__PURE__*/React.createElement(Spouse, {
    hasChildren: true
  }, /*#__PURE__*/React.createElement(Avatar, null))), /*#__PURE__*/React.createElement(Inheritor, null, /*#__PURE__*/React.createElement(TreeChart.Stem, null, /*#__PURE__*/React.createElement(Avatar, null))), /*#__PURE__*/React.createElement(Inheritor, {
    hasOneSpouse: true
  }, /*#__PURE__*/React.createElement(TreeChart.Stem, null, /*#__PURE__*/React.createElement(Avatar, null)), /*#__PURE__*/React.createElement(Spouse, {
    hasChildren: true
  }, /*#__PURE__*/React.createElement(Avatar, null)))))), /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement(TreeChart, {
    useStyles: useStyles
  }, /*#__PURE__*/React.createElement(Children, {
    stretch: true
  }, /*#__PURE__*/React.createElement(Inheritor, {
    hasOneSpouse: true
  }, /*#__PURE__*/React.createElement(TreeChart.Stem, null, /*#__PURE__*/React.createElement(Avatar, null)), /*#__PURE__*/React.createElement(Spouse, {
    hasChildren: true
  }, /*#__PURE__*/React.createElement(Avatar, null))), /*#__PURE__*/React.createElement(Inheritor, null, /*#__PURE__*/React.createElement(TreeChart.Stem, null, /*#__PURE__*/React.createElement(Avatar, null)))))), /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement(TreeChart, {
    useStyles: useStyles
  }, /*#__PURE__*/React.createElement(TreeChart.Trunk, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TreeChart.Stem, null, /*#__PURE__*/React.createElement(Avatar, null)), /*#__PURE__*/React.createElement(Spouse, {
    hasChildren: true
  }, /*#__PURE__*/React.createElement(Avatar, null)))), /*#__PURE__*/React.createElement(Children, null, /*#__PURE__*/React.createElement(Inheritor, {
    hasOneSpouse: true
  }, /*#__PURE__*/React.createElement(TreeChart.Stem, null, /*#__PURE__*/React.createElement(Avatar, null)), /*#__PURE__*/React.createElement(Spouse, {
    hasChildren: true
  }, /*#__PURE__*/React.createElement(Avatar, null)), /*#__PURE__*/React.createElement(Children, {
    stretch: true
  }, /*#__PURE__*/React.createElement(Inheritor, null, /*#__PURE__*/React.createElement(TreeChart.Stem, null, /*#__PURE__*/React.createElement(Avatar, null))), /*#__PURE__*/React.createElement(Inheritor, null, /*#__PURE__*/React.createElement(TreeChart.Stem, null, /*#__PURE__*/React.createElement(Avatar, null))))), /*#__PURE__*/React.createElement(Inheritor, null, /*#__PURE__*/React.createElement(TreeChart.Stem, null, /*#__PURE__*/React.createElement(Avatar, null)), /*#__PURE__*/React.createElement(Children, null, /*#__PURE__*/React.createElement(Inheritor, {
    hasOneSpouse: true
  }, /*#__PURE__*/React.createElement(TreeChart.Stem, null, /*#__PURE__*/React.createElement(Avatar, null)), /*#__PURE__*/React.createElement(Spouse, {
    hasChildren: true
  }, /*#__PURE__*/React.createElement(Avatar, null)), /*#__PURE__*/React.createElement(Children, null, /*#__PURE__*/React.createElement(Inheritor, null, /*#__PURE__*/React.createElement(TreeChart.Stem, null, /*#__PURE__*/React.createElement(Avatar, null)), /*#__PURE__*/React.createElement(Children, null, /*#__PURE__*/React.createElement(Inheritor, null, /*#__PURE__*/React.createElement(TreeChart.Stem, null, /*#__PURE__*/React.createElement(Avatar, null))))), /*#__PURE__*/React.createElement(Inheritor, null, /*#__PURE__*/React.createElement(TreeChart.Stem, null, /*#__PURE__*/React.createElement(Avatar, null))), /*#__PURE__*/React.createElement(Inheritor, {
    hasOneSpouse: true
  }, /*#__PURE__*/React.createElement(TreeChart.Stem, null, /*#__PURE__*/React.createElement(Avatar, null)), /*#__PURE__*/React.createElement(Spouse, {
    hasChildren: true
  }, /*#__PURE__*/React.createElement(Avatar, null)), /*#__PURE__*/React.createElement(Children, null, /*#__PURE__*/React.createElement(Inheritor, null, /*#__PURE__*/React.createElement(TreeChart.Stem, null, /*#__PURE__*/React.createElement(Avatar, null))))))), /*#__PURE__*/React.createElement(Inheritor, null, /*#__PURE__*/React.createElement(TreeChart.Stem, null, /*#__PURE__*/React.createElement(Avatar, null)), /*#__PURE__*/React.createElement(Children, null, /*#__PURE__*/React.createElement(Inheritor, null, /*#__PURE__*/React.createElement(TreeChart.Stem, null, /*#__PURE__*/React.createElement(Avatar, null))), /*#__PURE__*/React.createElement(Inheritor, {
    hasOneSpouse: true
  }, /*#__PURE__*/React.createElement(TreeChart.Stem, null, /*#__PURE__*/React.createElement(Avatar, null)), /*#__PURE__*/React.createElement(Spouse, null, /*#__PURE__*/React.createElement(Avatar, null))))), /*#__PURE__*/React.createElement(Inheritor, null, /*#__PURE__*/React.createElement(TreeChart.Stem, null, /*#__PURE__*/React.createElement(Avatar, null))))), /*#__PURE__*/React.createElement(Inheritor, null, /*#__PURE__*/React.createElement(TreeChart.Stem, null, /*#__PURE__*/React.createElement(Avatar, null)))))));
});