import { beforeMount } from '@playwright/experimental-ct-react/hooks';
import ThemeProvider from '../src/theme/ThemeProvider';

beforeMount<{}>(async ({ App }) => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
});
