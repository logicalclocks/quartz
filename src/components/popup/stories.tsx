import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, screen, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { Box, Button, usePopup } from '../..';
import Popup from './index';
import { reusableArgs } from './storyUitls';

const meta: Meta<typeof Popup> = {
  title: 'Popup',
  argTypes: {
    size: {
      options: [
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        'full',
      ],
      control: { type: 'select' },
    },
    variant: {
      options: ['modal', 'drawer'],
      control: { type: 'radio' },
      description:
        'drawer can be used for having fixed popup on the right side',
    },
  },
};
export default meta;

export const PopupStory: StoryObj<typeof Popup> = {
  args: {
    title: 'Title',
    footer: 'some footer',
    hasCloseButton: false,
    variant: 'modal',
    allowPinchZoom: true,
    ...reusableArgs,
  },
  render: (props) => {
    const [isOpen, handleToggle] = usePopup();

    return (
      <Box>
        <Button
          onClick={handleToggle}
          sx={{ position: 'fixed', top: '20px', left: '20px' }}
        >
          Open Popup
        </Button>
        <Popup {...props} isOpen={isOpen} onClose={handleToggle}>
          <div>this is children</div>
        </Popup>
      </Box>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    userEvent.click(canvas.getByText('Open Popup'));
    expect(await screen.findByText('this is children')).toBeInTheDocument();
    expect(await screen.findByText('some footer')).toBeInTheDocument();

    userEvent.keyboard('{Escape}');
    waitFor(async () => {
      expect(await screen.queryByText('some footer')).toBeNull();
    });
  },
};
