import { action } from '@storybook/addon-actions';
import { StoryObj, Meta } from '@storybook/react';

import FooterButtonComponent from '.';
import { GetIcon, IconName } from '../icon';

const meta: Meta<typeof FooterButtonComponent> = {
  title: 'Forms/Buttons/FooterButton',
  component: FooterButtonComponent,

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

export const FooterButton: StoryObj<typeof FooterButtonComponent> = {
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
};
