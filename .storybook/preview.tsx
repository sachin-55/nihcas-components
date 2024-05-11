import type { Preview } from "@storybook/react";

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

import theme from '../src/theme';

import GlobalStyles from '../src/style/globalStyle';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [withThemeFromJSXProvider({
    themes: {
      light: theme,
      dark: theme,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles,
    })]
};

export default preview;
