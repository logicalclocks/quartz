import { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within, screen, waitFor } from '@storybook/test';

import { Box, Button, usePopup } from '../..';
import PopupComponent from './index';
import { reusableArgs } from './storyUitls';

const meta: Meta<typeof PopupComponent> = {
  title: 'Overlay/Popup/Popup',
  component: PopupComponent,
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
    expandable: {
      control: { type: 'boolean' },
      description:
        'When true, adds an expand button to the header that toggles between normal and full-screen size',
    },
  },
};
export default meta;

export const Popup: StoryObj<typeof PopupComponent> = {
  args: {
    title: 'Title',
    footer: 'some footer',
    hasCloseButton: false,
    variant: 'modal',
    allowPinchZoom: true,
    expandable: false,
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
        <PopupComponent {...props} isOpen={isOpen} onClose={handleToggle}>
          <div>this is children</div>
        </PopupComponent>
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

export const ExpandablePopup: StoryObj<typeof PopupComponent> = {
  args: {
    ...reusableArgs,
    title: 'Expandable Popup',
    footer: 'Click the expand button to go full screen',
    hasCloseButton: true,
    expandable: true,
    size: 'md',
    variant: 'modal',
    allowPinchZoom: true,
  },
  render: (props) => {
    const [isOpen, handleToggle] = usePopup();

    return (
      <Box>
        <Button
          onClick={handleToggle}
          sx={{ position: 'fixed', top: '20px', left: '20px' }}
        >
          Open Expandable Popup
        </Button>
        <PopupComponent {...props} isOpen={isOpen} onClose={handleToggle}>
          <div>
            <p>This popup has an expandable feature.</p>
            <p>
              Look for the expand icon in the header next to the close button.
            </p>
            <p>Click it to toggle between normal and full-screen modes.</p>
            <br />
            <p>
              Content can be quite large and the expand feature helps users
              focus on it without distractions.
            </p>
          </div>
        </PopupComponent>
      </Box>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Open the popup
    userEvent.click(canvas.getByText('Open Expandable Popup'));
    expect(
      await screen.findByText('This popup has an expandable feature.'),
    ).toBeInTheDocument();

    // Test expand button exists
    const expandButton = await screen.findByTestId('expand-button');
    expect(expandButton).toBeInTheDocument();

    // Test expand functionality
    userEvent.click(expandButton);
    await waitFor(() => {
      expect(expandButton).toHaveAttribute('aria-label', 'Minimize');
    });

    // Test minimize functionality
    userEvent.click(expandButton);
    await waitFor(() => {
      expect(expandButton).toHaveAttribute(
        'aria-label',
        'Expand to full screen',
      );
    });
  },
};
