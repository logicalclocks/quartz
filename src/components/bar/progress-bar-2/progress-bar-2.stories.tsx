import { Box } from 'rebass';
import { Story } from '@storybook/react/types-6-0';
import ProgressBar2C, { ProgressBar2Props } from '.';

export const ProgressBar2: Story<ProgressBar2Props> = (props) => (
  <Box width="700px">
    <ProgressBar2C {...props} />
  </Box>
);

ProgressBar2.argTypes = {
  isAnimating: {
    control: {
      type: 'boolean',
    },
  },
  animationDuration: {
    control: {
      type: 'number',
    },
  },
  incrementDuration: {
    control: {
      type: 'number',
    },
  },
  minimum: {
    control: {
      type: 'number',
    },
  },
  variant: {
    control: {
      type: 'text',
    },
  },
};

ProgressBar2.args = {
  isAnimating: true,
  animationDuration: undefined,
  incrementDuration: undefined,
  minimum: undefined,
  variant: 'perf.green',
};
