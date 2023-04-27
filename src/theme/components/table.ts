import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material';

type muiFormControl = {
  defaultProps?: ComponentsProps['MuiTable'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiTable'];
  variants?: ComponentsVariants['MuiTable'];
};

export const MuiTable: muiFormControl = {
  styleOverrides: {
    root: ({ theme }) => ({
      '& .MuiTableHead-root': {
        '& .MuiTableCell-root': {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.secondary.main,
        },
      },
    }),
  },
};
