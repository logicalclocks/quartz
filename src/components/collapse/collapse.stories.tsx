import React from 'react';
import { Box } from 'rebass';
import { Story, Meta } from '@storybook/react/types-6-0';

// Components
import Button from '../button';
import { Labeling, Value } from '../../index';
import Collapse, { CollapseProps } from './index';

export default {
  title: 'Quartz/Collapse',
  component: Collapse,
} as Meta;

const Template: Story<CollapseProps> = (props) => {
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
};

export const Default = Template.bind({});

Default.args = {
  title: <Labeling ml="8px">section title</Labeling>,
  secondaryContent: <Labeling gray>secondary text</Labeling>,
};

Default.argTypes = {
  title: {
    control: {
      type: 'text',
    },
    type: {
      summary: 'Title',
      required: true,
    },
  },
  secondaryContent: {
    control: {
      type: 'text',
    },
    type: {
      summary: 'Secondary content',
      required: false,
    },
  },
};
