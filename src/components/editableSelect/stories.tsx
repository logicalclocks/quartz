import { action } from '@storybook/addon-actions';
import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';

import { userEvent, within } from '@storybook/testing-library';
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
    labelAction: {
      description: 'React Component',
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
    const canvas = within(canvasElement);

    await step('Ensure default values are used for first render', () => {
      expect(canvas.getByText('integer')).toBeDefined();
      expect(canvas.getByText('string')).toBeDefined();
    });

    await step('Clicking on label opens the menu', async () => {
      await userEvent.click(document.querySelector('label')!);
      expect(canvas.getByText('bigInt')).toBeVisible(); // last element
    });

    await step(
      'Select all options, run out of them, see *noDataMessage*',
      async () => {
        // select all remaining options
        await userEvent.keyboard(
          '[ArrowDown][Enter][ArrowDown][Enter][ArrowDown][Enter]',
        );
        await userEvent.keyboard('[ArrowDown]');
        expect(canvas.getByText('no options')).toBeVisible();
      },
    );

    await step('Remove last two items, see them gone', async () => {
      await userEvent.keyboard('[Backspace][Backspace]');
      await userEvent.keyboard('[Escape][Tab]');
      expect(canvas.queryByText('boolean')).toBeNull();
      expect(canvas.queryByText('bigInt')).toBeNull();
    });

    await step(
      'Add a new option, see "add <new option>", then see it added',
      async () => {
        await userEvent.click(document.querySelector('label')!);

        await userEvent.keyboard('New option');
        expect(canvas.getByText('add')).toBeVisible();
        expect(canvas.getByText('New option')).toBeVisible();

        await userEvent.keyboard('[Enter]');
        expect(canvas.queryByText('add')).toBeNull();
        expect(canvas.getByText('New option')).toBeVisible();
      },
    );
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
      await userEvent.click(document.querySelector('label')!);
      expect(canvas.getByText('bigInt')).toBeVisible(); // last element
    });

    await step('Choose third option, see it being chosen', async () => {
      await userEvent.keyboard('[ArrowDown][ArrowDown][Enter]');
      expect(canvas.getByText('boolean')).toBeVisible();
    });

    await step(
      'Add a new option, see "add <new option>", then see it added',
      async () => {
        await userEvent.keyboard('New option');
        expect(canvas.getByText('add')).toBeVisible();
        expect(canvas.getByText('New option')).toBeVisible();

        await userEvent.keyboard('[Enter]');
        expect(canvas.queryByText('add')).toBeNull();
        expect(canvas.getByText('New option')).toBeVisible();
      },
    );
  },
};
