import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material';

type muiFormControl = {
  defaultProps?: ComponentsProps['MuiFormControl'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiFormControl'];
  variants?: ComponentsVariants['MuiFormControl'];
};

export const MuiFormControl: muiFormControl = {
  styleOverrides: {
    root: {
      '& .MuiInputLabel-shrink': {
        transform: 'translate(0, 1.5px) scale(0.75)',
      },
      '& .MuiInputBase-root': {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
      },
    },
  },
};
