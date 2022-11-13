import {
  FormControl,
  OutlinedInput,
  InputLabel,
  FormHelperText,
  styled,
} from '@mui/material';

export const FormControlItem = styled(FormControl)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    marginBottom: '32px',
  },
  [theme.breakpoints.down('lg')]: {
    marginBottom: '20px',
  },
}));

export const OutlinedInputItem = styled(OutlinedInput)(({ theme }) => ({
  '& fieldset': {
    borderRadius: `${theme.shape.borderRadiusSm}px`,
    transition: 'border 0.3s',
  },
  '& input': {
    borderRadius: `${theme.shape.borderRadiusSm}px !important`,
  },

  [theme.breakpoints.up('md')]: {
    '& input': {
      padding: '24.9px 20px',
    },
  },

  [theme.breakpoints.down('lg')]: {
    '& input': {
      padding: '22px 20px',
    },
  },
}));

export const InputLabelItem = styled(InputLabel)({
  fontWeight: 500,
});

export const FormHelperTextItem = styled(FormHelperText)(({ theme }) => ({
  color: theme.palette.error.main,
  fontSize: '16px',
}));
