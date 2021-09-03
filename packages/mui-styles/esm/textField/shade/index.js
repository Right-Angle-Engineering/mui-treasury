import makeStyles from '@mui/styles/makeStyles';
import { shadeInputBaseStyles, shadeInputLabelStyles } from './shadeTextField.styles';
var shadeTextFieldStylesHook = {
  useInputBase: makeStyles(shadeInputBaseStyles, {
    name: 'ShadeTextField'
  }),
  useInputLabel: makeStyles(shadeInputLabelStyles, {
    name: 'ShadeTextField'
  })
};
export { shadeInputBaseStyles, shadeInputLabelStyles, shadeTextFieldStylesHook };