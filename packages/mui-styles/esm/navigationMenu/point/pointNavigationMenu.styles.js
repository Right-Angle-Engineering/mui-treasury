import { createStyles } from '@mui/material/styles';
var itemHorzPadding = 2;

var pointNavigationMenuStyles = function pointNavigationMenuStyles(_ref) {
  var palette = _ref.palette,
      spacing = _ref.spacing;
  return createStyles({
    menu: {
      display: 'flex',
      overflow: 'auto'
    },
    item: function item(_ref2) {
      var gutter = _ref2.gutter;
      return {
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        borderRadius: 4,
        padding: spacing(1, itemHorzPadding),
        cursor: 'pointer',
        textDecoration: 'none',
        transition: '0.2s ease-out',
        color: palette.mode === 'dark' ? palette.text.secondary : palette.text.primary,
        '&:after': {
          content: '""',
          display: 'block',
          position: 'absolute',
          bottom: 0,
          left: '50%',
          width: 6,
          height: 6,
          borderRadius: 50,
          transform: 'scale(0) translateX(-50%)',
          transition: '0.3s ease-out',
          opacity: 0,
          backgroundColor: palette.mode === 'dark' ? 'rgba(255,255,255,0.8)' : palette.primary.main
        },
        '&:hover': {
          color: palette.text.primary,
          '&:after': {
            opacity: 1,
            transform: 'scale(1) translateX(-50%)'
          }
        },
        '&:not(:first-child)': {
          marginLeft: typeof gutter === 'number' ? spacing(gutter) : gutter
        }
      };
    },
    itemActive: {
      '&$item': {
        color: palette.mode === 'dark' ? '#fff' : palette.primary.main,
        '&:after': {
          opacity: 1,
          width: 40,
          backgroundColor: palette.mode === 'dark' ? 'rgba(255,255,255,0.8)' : palette.primary.light,
          transform: 'scale(1) translateX(-50%)'
        }
      }
    }
  });
};

export default pointNavigationMenuStyles;