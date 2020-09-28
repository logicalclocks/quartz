import React from 'react';

import ThemeProvider from '../src/theme/ThemeProvider';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  controls: { expanded: true },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme="default">
      <Story />
    </ThemeProvider>
  ),
];
