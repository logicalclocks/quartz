import { action } from '@storybook/addon-actions';
import { expect, userEvent, within } from '@storybook/test';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Box } from '../../index';
import EditableSelect from './index';

const meta: Meta<typeof EditableSelect> = {
  title: 'EditableSelect',
  component: EditableSelect,
  argTypes: {
    value: {
      description: 'Array of strings',
      control: { type: 'array' },
    },
    options: {
      description: 'array of strings',
      control: { type: 'array' },
    },
    label: {
      control: { type: 'text' },
    },
    placeholder: {
      description: 'string',
      control: { type: 'text' },
    },
    noDataMessage: {
      description: 'string',
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    isMulti: {
      control: { type: 'boolean' },
    },
    preventAdding: {
      description:
        'Turns off ability to create new options, the "add <>" thing',
      control: { type: 'boolean' },
    },
    labelAction: {
      description: 'React Component',
    },
    variant: {
      control: { type: 'select' },
      description: 'Component can look different with different variants',
      options: ['primary', 'white'],
    },
  },
};
export default meta;

const options = ['integer', 'string', 'boolean', 'float', 'bigInt'];

export const Multi: StoryObj<typeof EditableSelect> = {
  args: {
    label: 'Label',
    labelAction: '(optional)',
    placeholder: 'placeholder',
    noDataMessage: 'no options',
    disabled: false,
    isMulti: true,
    value: ['integer', 'string'],
    options,
  },
  render: ({ value: initialValue, options, ...props }) => {
    const [value, setValue] = useState<string[]>(initialValue);

    const handleChange = (data: string[]) => {
      action('onChange')(data);
      setValue(data);
    };

    return (
      <Box minHeight="400px" width="600px">
        <EditableSelect
          {...props}
          value={value}
          options={options}
          onChange={handleChange}
        />
      </Box>
    );
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement.parentElement!);

    await step('Ensure default values are used for first render', () => {
      expect(canvas.getByText('integer')).toBeDefined();
      expect(canvas.getByText('string')).toBeDefined();
    });

    await step('Clicking on label opens the menu', async () => {
      const label = await document.querySelector('label')!;
      await userEvent.click(label);
      await userEvent.keyboard('[ArrowDown]');
      expect(canvas.getByText('bigInt')).toBeVisible(); // last element
    });

    await step(
      'Select all options, run out of them, see *noDataMessage*',
      async () => {
        // select all remaining options
        await userEvent.keyboard(
          '[ArrowDown][Enter][ArrowDown][Enter][ArrowDown][Enter]',
        );
        const noOptions = await canvas.findByText('no options');
        expect(noOptions).toBeVisible();
      },
    );

    await step('Remove last two items, see them gone', async () => {
      await userEvent.keyboard(
        '[Backspace][Backspace][Backspace][Backspace][Backspace]',
      );
      await userEvent.keyboard('[Escape][Tab]');
      expect(canvas.queryByText('boolean')).toBeNull();
      expect(canvas.queryByText('bigInt')).toBeNull();
    });
  },
};

export const Single: StoryObj<typeof EditableSelect> = {
  args: {
    label: 'Label',
    labelAction: '(optional)',
    placeholder: 'placeholder',
    noDataMessage: 'no options',
    disabled: false,
    isMulti: false,
    value: ['integer'],
    options,
  },
  render: ({ value: initialValue, options, ...props }) => {
    const [value, setValue] = useState<string[]>(initialValue);

    const handleChange = (data: string[]) => {
      action('onChange')(data);
      setValue(data);
    };

    return (
      <Box minHeight="400px" width="600px">
        <EditableSelect
          // isOpen
          {...props}
          value={value}
          options={options}
          onChange={handleChange}
        />
      </Box>
    );
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Ensure "integer" is selected by value, from props', () => {
      expect(canvas.getByText('integer')).toBeVisible();
    });

    await step('Clicking on label opens the menu', async () => {
      const label = await canvas.getByText('Label(optional)');
      await userEvent.click(label);
      await userEvent.keyboard('[ArrowDown]');
      expect(canvas.getByText('bigInt')).toBeVisible(); // last element
    });

    await step('Choose third option, see it being chosen', async () => {
      const label = await canvas.getByText('Label(optional)');
      await userEvent.click(label);
      await userEvent.keyboard('[ArrowDown][ArrowDown][Enter]');
      expect(canvas.getByText('boolean')).toBeVisible();
    });
  },
};

export const GroupedSelect: StoryObj<typeof EditableSelect> = {
  args: {
    label: 'Label',
    labelAction: '(optional)',
    placeholder: 'placeholder',
    noDataMessage: 'no options',
    disabled: false,
    isMulti: true,
    value: ['integer'],
    options: [
      {
        label: 'label1',
        options: options.map((value) => ({ value, label: value })),
      },
      {
        label: 'group 2',
        options: options.map((value) => ({
          value: `${value} second`,
          label: `${value} second`,
        })),
      },
    ],
  },
  render: ({ value: initialValue, options, ...props }) => {
    const [value, setValue] = useState<string[]>(initialValue);

    const handleChange = (data: string[]) => {
      action('onChange')(data);
      setValue(data);
    };

    return (
      <Box minHeight="400px" width="600px">
        <EditableSelect
          // isOpen
          {...props}
          value={value}
          options={options}
          onChange={handleChange}
        />
      </Box>
    );
  },
};
