import React from 'react';

import ThemeProvider from '../src/theme/ThemeProvider';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  controls: { expanded: true },
  viewMode: 'docs' // `docs` is default tab, instead of canvas
};

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
