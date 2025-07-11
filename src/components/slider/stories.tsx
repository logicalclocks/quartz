import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Box } from 'rebass';
import SliderComponent from './slider';

const meta: Meta<typeof SliderComponent> = {
  title: 'Forms/SpecializedInputs/Slider',
  component: SliderComponent,
};

export default meta;

type Story = StoryObj<typeof SliderComponent>;

export const Slider: Story = {
  args: {
    label: 'CPU cores',
    step: 1,
    range: [0, 10],
  },
  render: (props) => {
    const [value, setValue] = useState(0);

    return (
      <Box width="700px">
        <SliderComponent {...props} value={value} onChange={setValue} />
      </Box>
    );
  },
};

export const WithCustomDisplayValue: Story = {
  args: {
    label: 'RAM',
    step: 128,
    range: [0, 1024],
    formatDisplayValue: (value) => `${value} MB`,
  },
  render: (props) => {
    const [value, setValue] = useState(0);

    return (
      <Box width="700px">
        <SliderComponent {...props} value={value} onChange={setValue} />
      </Box>
    );
  },
};
