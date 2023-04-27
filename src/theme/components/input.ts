import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material';

type muiTextField = {
  defaultProps?: ComponentsProps['MuiTextField'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiTextField'];
  variants?: ComponentsVariants['MuiTextField'];
};

export const MuiTextField: muiTextField = {
  defaultProps: {
    variant: 'outlined',
  },
  variants: [
    {
      props: { variant: 'outlined' },
      style: ({ theme }) => ({
        '& .MuiInputBase-root': {
          '& fieldset': {
            border: 'none',
          },
          maxWidth: '100%',
          borderRadius: 0,
          border: `1px solid ${theme.palette.primary.main}`,
          '& .MuiInputBase-input': {
            padding: `1rem 2rem`,
          },
        },
      }),
    },
  ],
};
