import { createStyles } from '@mui/material';
var titleFontSize = '0.875rem';
var subtitleFontSize = '0.875rem';
var captionFontSize = '0.75rem';
var family = "'Questrial', sans-serif";

var musicInfoStyles = function musicInfoStyles(_ref) {
  var palette = _ref.palette;
  return createStyles({
    title: {
      fontFamily: family,
      fontSize: titleFontSize,
      lineHeight: 1.6,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    subtitle: {
      fontFamily: family,
      color: palette.grey['500'],
      fontSize: subtitleFontSize,
      lineHeight: 1.6,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    caption: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      color: palette.grey['400'],
      fontSize: captionFontSize,
      lineHeight: 1.5
    }
  });
};

export default musicInfoStyles;