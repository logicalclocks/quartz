import { test, expect } from '@playwright/experimental-ct-react';
import { Button } from './Button';

test('should work', async ({ mount }) => {
  const component = await mount(<Button>Playwrite works</Button>);
  await expect(component).toContainText('Playwrite');
});
