import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material';

type muiButton = {
  defaultProps?: ComponentsProps['MuiButton'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiButton'];
  variants?: ComponentsVariants['MuiButton'];
};

export const MuiButton: muiButton = {
  defaultProps: {
    variant: 'contained',
    color: 'primary',
  },
  variants: [
    {
      props: { variant: 'contained' },
      style: ({ theme }) => ({
        width: 'fit-content',
        borderRadius: 0,
      }),
    },
  ],
};
