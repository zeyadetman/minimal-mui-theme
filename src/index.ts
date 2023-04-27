import { createTheme } from '@mui/material';
import { palette } from './theme/foundations/pallete';
import { typography } from './theme/foundations/typography';
import { components } from './theme/components';

export const theme = createTheme({
  palette,
  typography,
  components,
});
