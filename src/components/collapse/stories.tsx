import { Box } from 'rebass';
import { StoryObj, Meta } from '@storybook/react';

import { Button } from '../button';
import { Labeling, Value } from '../../index';
import CollapseComponent from './index';

const meta: Meta<typeof CollapseComponent> = {
  title: 'Disclosure/Collapse',
  component: CollapseComponent,
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

export const Collapse: StoryObj<typeof CollapseComponent> = {
  args: {
    title: <Labeling ml="8px">section title</Labeling>,
    secondaryContent: <Labeling gray>secondary text</Labeling>,
  },
  render: (props) => {
    return (
      <Box height="300px">
        <CollapseComponent width="500px" {...props}>
          <Box>
            <Value>some text</Value>
            <Button>button</Button>
          </Box>
        </CollapseComponent>
        <CollapseComponent mt="8px" width="500px" {...props}>
          <Box>
            <Value>some text</Value>
            <Button>button</Button>
          </Box>
          <Box>
            <Value>some text</Value>
            <Button>button</Button>
          </Box>
        </CollapseComponent>
      </Box>
    );
  },
};
