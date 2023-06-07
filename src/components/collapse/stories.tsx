import { Box } from 'rebass';
import { StoryObj, Meta } from '@storybook/react';

import { Button } from '../button';
import { Labeling, Value } from '../../index';
import Collapse from './index';

const meta: Meta<typeof Collapse> = {
  title: 'Collapse',
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
      description: 'Title',
    },
    secondaryContent: {
      control: {
        type: 'text',
      },
      description: 'Secondary content',
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Collapse> = {
  args: {
    title: <Labeling ml="8px">section title</Labeling>,
    secondaryContent: <Labeling gray>secondary text</Labeling>,
  },
  render: (props) => {
    return (
      <Box height="300px">
        <Collapse width="500px" {...props}>
          <Box>
            <Value>some text</Value>
            <Button>button</Button>
          </Box>
        </Collapse>
        <Collapse mt="8px" width="500px" {...props}>
          <Box>
            <Value>some text</Value>
            <Button>button</Button>
          </Box>
          <Box>
            <Value>some text</Value>
            <Button>button</Button>
          </Box>
        </Collapse>
      </Box>
    );
  },
};
