"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _Grid = _interopRequireDefault(require("@mui/material/Grid"));

var _Avatar = _interopRequireDefault(require("@mui/material/Avatar"));

var _Children = _interopRequireDefault(require("./submodules/Children"));

var _FamilyChart = _interopRequireDefault(require("./FamilyChart"));

var _Spouse = _interopRequireDefault(require("./submodules/Spouse"));

var _Inheritor = _interopRequireDefault(require("./submodules/Inheritor"));

var _familyChart = _interopRequireDefault(require("./familyChart.styles"));

var _tree = _interopRequireDefault(require("../tree"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useStyles = (0, _makeStyles["default"])(_familyChart["default"], {
  name: 'FamilyChart'
});
(0, _react2.storiesOf)('mui-components|Chart', module).add('Family', function () {
  return /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 4
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_FamilyChart["default"], {
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
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_tree["default"], {
    useStyles: useStyles
  }, /*#__PURE__*/_react["default"].createElement(_tree["default"].Stem, null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null)), /*#__PURE__*/_react["default"].createElement(_Spouse["default"], null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null))), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_tree["default"], {
    useStyles: useStyles
  }, /*#__PURE__*/_react["default"].createElement(_tree["default"].Stem, null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null)), /*#__PURE__*/_react["default"].createElement(_Spouse["default"], {
    hasChildren: true
  }, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null)))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_tree["default"], {
    useStyles: useStyles
  }, /*#__PURE__*/_react["default"].createElement(_Children["default"], null, /*#__PURE__*/_react["default"].createElement(_Inheritor["default"], {
    hasOneSpouse: true
  }, /*#__PURE__*/_react["default"].createElement(_tree["default"].Stem, null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null)), /*#__PURE__*/_react["default"].createElement(_Spouse["default"], {
    hasChildren: true
  }, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null))), /*#__PURE__*/_react["default"].createElement(_Inheritor["default"], null, /*#__PURE__*/_react["default"].createElement(_tree["default"].Stem, null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null))), /*#__PURE__*/_react["default"].createElement(_Inheritor["default"], {
    hasOneSpouse: true
  }, /*#__PURE__*/_react["default"].createElement(_tree["default"].Stem, null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null)), /*#__PURE__*/_react["default"].createElement(_Spouse["default"], {
    hasChildren: true
  }, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null)))))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_tree["default"], {
    useStyles: useStyles
  }, /*#__PURE__*/_react["default"].createElement(_Children["default"], {
    stretch: true
  }, /*#__PURE__*/_react["default"].createElement(_Inheritor["default"], {
    hasOneSpouse: true
  }, /*#__PURE__*/_react["default"].createElement(_tree["default"].Stem, null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null)), /*#__PURE__*/_react["default"].createElement(_Spouse["default"], {
    hasChildren: true
  }, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null))), /*#__PURE__*/_react["default"].createElement(_Inheritor["default"], null, /*#__PURE__*/_react["default"].createElement(_tree["default"].Stem, null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null)))))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_tree["default"], {
    useStyles: useStyles
  }, /*#__PURE__*/_react["default"].createElement(_tree["default"].Trunk, null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_tree["default"].Stem, null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null)), /*#__PURE__*/_react["default"].createElement(_Spouse["default"], {
    hasChildren: true
  }, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null)))), /*#__PURE__*/_react["default"].createElement(_Children["default"], null, /*#__PURE__*/_react["default"].createElement(_Inheritor["default"], {
    hasOneSpouse: true
  }, /*#__PURE__*/_react["default"].createElement(_tree["default"].Stem, null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null)), /*#__PURE__*/_react["default"].createElement(_Spouse["default"], {
    hasChildren: true
  }, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null)), /*#__PURE__*/_react["default"].createElement(_Children["default"], {
    stretch: true
  }, /*#__PURE__*/_react["default"].createElement(_Inheritor["default"], null, /*#__PURE__*/_react["default"].createElement(_tree["default"].Stem, null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null))), /*#__PURE__*/_react["default"].createElement(_Inheritor["default"], null, /*#__PURE__*/_react["default"].createElement(_tree["default"].Stem, null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null))))), /*#__PURE__*/_react["default"].createElement(_Inheritor["default"], null, /*#__PURE__*/_react["default"].createElement(_tree["default"].Stem, null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null)), /*#__PURE__*/_react["default"].createElement(_Children["default"], null, /*#__PURE__*/_react["default"].createElement(_Inheritor["default"], {
    hasOneSpouse: true
  }, /*#__PURE__*/_react["default"].createElement(_tree["default"].Stem, null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null)), /*#__PURE__*/_react["default"].createElement(_Spouse["default"], {
    hasChildren: true
  }, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null)), /*#__PURE__*/_react["default"].createElement(_Children["default"], null, /*#__PURE__*/_react["default"].createElement(_Inheritor["default"], null, /*#__PURE__*/_react["default"].createElement(_tree["default"].Stem, null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null)), /*#__PURE__*/_react["default"].createElement(_Children["default"], null, /*#__PURE__*/_react["default"].createElement(_Inheritor["default"], null, /*#__PURE__*/_react["default"].createElement(_tree["default"].Stem, null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null))))), /*#__PURE__*/_react["default"].createElement(_Inheritor["default"], null, /*#__PURE__*/_react["default"].createElement(_tree["default"].Stem, null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null))), /*#__PURE__*/_react["default"].createElement(_Inheritor["default"], {
    hasOneSpouse: true
  }, /*#__PURE__*/_react["default"].createElement(_tree["default"].Stem, null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null)), /*#__PURE__*/_react["default"].createElement(_Spouse["default"], {
    hasChildren: true
  }, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null)), /*#__PURE__*/_react["default"].createElement(_Children["default"], null, /*#__PURE__*/_react["default"].createElement(_Inheritor["default"], null, /*#__PURE__*/_react["default"].createElement(_tree["default"].Stem, null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null))))))), /*#__PURE__*/_react["default"].createElement(_Inheritor["default"], null, /*#__PURE__*/_react["default"].createElement(_tree["default"].Stem, null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null)), /*#__PURE__*/_react["default"].createElement(_Children["default"], null, /*#__PURE__*/_react["default"].createElement(_Inheritor["default"], null, /*#__PURE__*/_react["default"].createElement(_tree["default"].Stem, null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null))), /*#__PURE__*/_react["default"].createElement(_Inheritor["default"], {
    hasOneSpouse: true
  }, /*#__PURE__*/_react["default"].createElement(_tree["default"].Stem, null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null)), /*#__PURE__*/_react["default"].createElement(_Spouse["default"], null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null))))), /*#__PURE__*/_react["default"].createElement(_Inheritor["default"], null, /*#__PURE__*/_react["default"].createElement(_tree["default"].Stem, null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null))))), /*#__PURE__*/_react["default"].createElement(_Inheritor["default"], null, /*#__PURE__*/_react["default"].createElement(_tree["default"].Stem, null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null)))))));
});