import { createTheme } from '@mui/material';
import { components } from 'theme/components';
import { palette } from 'theme/foundations/pallete';
import { typography } from 'theme/foundations/typography';

export const theme = createTheme({
  palette,
  typography,
  components,
});
