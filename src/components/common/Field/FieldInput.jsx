import { useTheme } from '@mui/material';
import { useField } from 'formik';
import {
  FormControlItem,
  OutlinedInputItem,
  InputLabelItem,
  FormHelperTextItem,
} from './FieldInputStyled';

const FieldInput = props => {
  const [field, meta] = useField(props);
  const { palette } = useTheme();

  return (
    <FormControlItem fullWidth>
      <InputLabelItem
        htmlFor='outlined-adornment-amount'
        sx={{
          color: meta.error && meta.touched && palette.error.main,
          '&.Mui-focused': {
            color: meta.error && meta.touched && palette.error.main,
          },
        }}
      >
        {props.label}
      </InputLabelItem>
      <OutlinedInputItem
        {...props}
        {...field}
        error={meta.error && meta.touched && true}
      />
      {meta.error && meta.touched && (
        <FormHelperTextItem id='component-helper-text'>
          {meta.error}
        </FormHelperTextItem>
      )}
    </FormControlItem>
  );
};

export default FieldInput;
