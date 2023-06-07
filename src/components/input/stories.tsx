import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { Box } from 'rebass';
import Input from '.';
import { GetIcon, IconName } from '../icon';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
  argTypes: {
    onChange: {
      description: 'Input change callback function',
    },
    placeholder: {
      control: {
        type: 'text',
      },
      description: 'Input placeholder',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'white'],
      },
      description: 'Input variant',
    },
    info: {
      control: {
        type: 'text',
      },
      description: 'Message text (validation error)',
    },
    label: {
      control: {
        type: 'text',
      },
    },
    labelAction: {
      description: 'Label action (React node)',
    },
    width: {
      control: {
        type: 'text',
      },
      description: 'Width of the input group (px, %, em)',
      defaultValue: { description: '180px' },
    },
    intent: {
      control: {
        type: 'select',
        options: ['default', 'error'],
      },
      description: 'Input intent (error border)',
    },
    type: {
      control: {
        type: 'select',
        options: ['textarea', 'text', 'number'],
      },
      required: false,
    },
    rows: {
      control: {
        type: 'number',
      },
      description: 'Textarea rows count',
    },
    icon: {
      options: Object.values(IconName).filter((x) => typeof x === 'string'),
      mapping: IconName,
      control: {
        type: 'select',
      },
      description: 'Left icon. Receives IconName',
    },
    rightIcon: {
      options: ['none', 'example'],
      mapping: {
        none: null,
        example: (
          <Box sx={{ position: 'absolute', right: '8px', top: '8px' }}>
            <GetIcon size="sm" icon={IconName.eye} />
          </Box>
        ),
      },
      control: {
        type: 'select',
      },
      description: `
        Right icon. 
        Receives JSX element. Wants an absolute position, as the parent is relative.
        Should not really be called rightIcon(or exist), but it is a long story :)`,
    },
    suffix: {
      control: {
        type: 'text',
      },
      description:
        'Suffix for the input, e.g. `MB` to show that the input shows megabytes',
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Input> = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    onChange: action('Input change'),
    tooltipInfo: 'tooltip info',
  },
  render: (props) => (
    <Input icon={IconName.glass} iconPaddingRight="40px" {...props} />
  ),
};
