import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { Button, Input, usePopup } from '../../..';
import TinyPopup from '.';
import { reusableArgs } from '../storyUitls';

const meta: Meta<typeof TinyPopup> = {
  title: 'TinyPopup',
};
export default meta;

type Story = StoryObj<typeof TinyPopup>;

export const PopupTiny: Story = {
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
        <TinyPopup {...props} onClose={handleToggle} isOpen={isOpen}>
          <Input label="Value" />
        </TinyPopup>
      </>
    );
  },
};
