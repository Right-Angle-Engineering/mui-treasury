import makeStyles from '@mui/styles/makeStyles';
import { roundInputBaseStyles, roundInputLabelStyles, roundHelperTextStyles } from './roundTextField.styles';
var roundTextFieldStylesHook = {
  useInputBase: makeStyles(roundInputBaseStyles, {
    name: 'RoundTextField'
  }),
  useInputLabel: makeStyles(roundInputLabelStyles, {
    name: 'RoundTextField'
  }),
  useHelperText: makeStyles(roundHelperTextStyles, {
    name: 'RoundTextField'
  })
};
export { roundInputBaseStyles, roundInputLabelStyles, roundTextFieldStylesHook };