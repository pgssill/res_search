import { CLASSIC_COLORS, DARK_COLORS } from '@tablecheck/tablekit-theme';

import { AppTheme } from '../types';

export const defaultTheme: AppTheme = {
  classic: {
    colors: {
      ...CLASSIC_COLORS,
      hoverPrimaryBackground: 'rgb(200, 171, 237)'
    }
  },
  dark: {
    colors: {
      ...DARK_COLORS,
      hoverPrimaryBackground: 'rgb(108, 93, 140)'
    }
  }
};
