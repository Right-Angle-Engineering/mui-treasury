import { createStyles } from '@mui/material/styles';

var plainNavigationMenuStyles = function plainNavigationMenuStyles(_ref) {
  var palette = _ref.palette,
      spacing = _ref.spacing;
  return createStyles({
    menu: {
      display: 'flex'
    },
    item: function item(_ref2) {
      var gutter = _ref2.gutter;
      return {
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        color: palette.mode === 'dark' ? 'rgba(255,255,255,0.57)' : palette.text.secondary,
        borderRadius: 4,
        padding: spacing(1, 2),
        cursor: 'pointer',
        textDecoration: 'none',
        transition: '0.2s ease-out',
        '&:hover': {
          color: palette.mode === 'dark' ? '#fff' : palette.text.primary
        },
        '&:not(:first-child)': {
          marginLeft: typeof gutter === 'number' ? spacing(gutter) : gutter
        }
      };
    },
    itemActive: {
      '&$item': {
        color: palette.mode === 'dark' ? '#fff' : palette.text.primary
      }
    }
  });
};

export default plainNavigationMenuStyles;