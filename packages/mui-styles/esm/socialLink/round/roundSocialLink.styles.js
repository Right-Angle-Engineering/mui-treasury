import { createStyles } from '@mui/material/styles';
import Color from 'color';

var roundSocialLinkStyles = function roundSocialLinkStyles(_ref) {
  var palette = _ref.palette;
  var extraLightPrimary = Color(palette.primary.main).rotate(-6).lighten(0.4).fade(0.72).toString();
  return createStyles({
    anchor: {
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer',
      fontSize: 24,
      padding: 8,
      borderRadius: 8,
      border: '2px solid',
      borderColor: extraLightPrimary,
      color: palette.mode === 'dark' ? palette.text.secondary : palette.primary.light,
      transition: '0.3s ease-out',
      '&:not(:first-of-type)': {
        marginLeft: '0.5rem'
      },
      '&:hover, &:focus': {
        boxShadow: "0 0 12px 0 ".concat(palette.divider),
        borderColor: palette.text.secondary,
        color: palette.mode === 'dark' ? '#fff' : palette.text.primary
      },
      '&:active': {
        '& $icon': {
          transform: 'scale(0.8)'
        }
      }
    },
    icon: {
      transition: '0.2s cubic-bezier(.47,1.64,.41,.8), color 0s'
    }
  });
};

export default roundSocialLinkStyles;