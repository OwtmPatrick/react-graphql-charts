import type { Theme as ThemeType } from '../area/theme/types';

export const Theme: Record<string, ThemeType> = {
  LIGHT: 'light',
  DARK: 'dark'
} as const;
