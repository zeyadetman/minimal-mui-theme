import { Components, Theme } from '@mui/material';
import { MuiTextField } from './input';
import { MuiFormControl } from './formControl';
import { MuiButton } from './button';
import { MuiTable } from './table';

export const components: Components<Omit<Theme, 'components'>> | undefined = {
  MuiTextField,
  MuiFormControl,
  MuiButton,
  MuiTable,
};
