import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
export var useDefaultStyles = makeStyles(defaultStyles, {
  name: 'NavigationMenu'
});
export default function defaultStyles(_ref) {
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
        color: palette.text.secondary,
        borderRadius: 4,
        padding: spacing(1, 2),
        cursor: 'pointer',
        textDecoration: 'none',
        transition: '0.2s ease-out',
        '&:hover, &:focus': {
          color: palette.text.primary,
          backgroundColor: palette.action.selected
        },
        '&:not(:first-child)': {
          marginLeft: typeof gutter === 'number' ? spacing(gutter) : gutter
        }
      };
    },
    itemActive: {
      '&$item': {
        color: palette.text.primary,
        backgroundColor: palette.action.selected
      }
    }
  });
}