import makeStyles from '@mui/styles/makeStyles';
import createInput from './createInput';
import { prefixZero } from '../BirthdayContext';
var useStyles = makeStyles(function () {
  return {
    root: {
      width: 36,
      paddingLeft: 2,
      paddingRight: 2
    }
  };
}, {
  name: 'DayInput'
});
export default createInput({
  displayName: 'DayInput',
  useStyles: useStyles,
  customOnBlur: function customOnBlur(e, _ref) {
    var zeroPrefixDisabled = _ref.zeroPrefixDisabled,
        updater = _ref.updater;

    if (!zeroPrefixDisabled) {
      updater(prefixZero(e.target.value));
    }
  },
  fieldName: 'day',
  updaterName: 'changeDay',
  maxLength: 2
});