import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
// Font Awesome icons
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import ThemeProvider from '../src/theme/ThemeProvider';

library.add(fas, far);

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
