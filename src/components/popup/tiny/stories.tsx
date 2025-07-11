import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { Button, Input, usePopup } from '../../..';
import TinyPopupComponent from '.';
import { reusableArgs } from '../storyUitls';

const meta: Meta<typeof TinyPopupComponent> = {
  title: 'Overlay/Popup/TinyPopup',
  component: TinyPopupComponent,
};
export default meta;

type Story = StoryObj<typeof TinyPopupComponent>;

export const TinyPopup: Story = {
  args: {
    title: 'Title',
    secondaryText: 'Secondary text',
    withCloseButton: true,

    mainButtonProps: {
      children: 'main',
      onClick: action('main'),
      isLoading: true,
    },
    secondaryButtonProps: {
      children: 'secondary',
      onClick: action('secondary'),
    },
    ...reusableArgs,
  },
  render: (props) => {
    const [isOpen, handleToggle] = usePopup();

    return (
      <>
        <Button onClick={handleToggle}>Open Tiny popup</Button>
        <TinyPopupComponent {...props} onClose={handleToggle} isOpen={isOpen}>
          <Input label="Value" />
        </TinyPopupComponent>
      </>
    );
  },
};
