// 1. Import the extendTheme function
import { extendTheme, theme } from '@chakra-ui/react';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  primary: theme.colors.purple,
  secondary: theme.colors.orange,
};

export const challengeTheme = extendTheme({ colors });
