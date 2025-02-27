import createInput from './createInput';
import makeStyles from '@mui/styles/makeStyles';
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
  name: 'MonthInput'
});
export default createInput({
  displayName: 'MonthInput',
  useStyles: useStyles,
  customOnBlur: function customOnBlur(e, _ref) {
    var zeroPrefixDisabled = _ref.zeroPrefixDisabled,
        updater = _ref.updater;

    if (!zeroPrefixDisabled) {
      updater(prefixZero(e.target.value));
    }
  },
  fieldName: 'month',
  updaterName: 'changeMonth',
  maxLength: 2
});