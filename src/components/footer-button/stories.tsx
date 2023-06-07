import { action } from '@storybook/addon-actions';
import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import FooterButton from '.';
import { GetIcon, IconName } from '../icon';

const meta: Meta<typeof FooterButton> = {
  title: 'Buttons/FooterButton',
  component: FooterButton,

  argTypes: {
    intent: {
      control: {
        type: 'select',
        options: ['primary'],
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      table: {
        description: 'On click callback function',
      },
    },
    children: {
      control: {
        type: 'text',
      },
    },
  },
};
export default meta;

export const Default: StoryObj<typeof FooterButton> = {
  args: {
    intent: 'primary',
    children: (
      <>
        <span>Open Feature Group’s Page</span>
        <GetIcon icon={IconName.arrow_right} />
      </>
    ),
    onClick: action('onClick'),
  },
  render: (props) => <FooterButton {...props} />,
};
