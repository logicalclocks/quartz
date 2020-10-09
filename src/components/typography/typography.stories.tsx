import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Box } from 'rebass';

import Value from './value';
import Title from './title';
import Subtitle from './subtitle';
import Labeling from './labeling';
import Microlabeling from './microlabeling';

export default {
  title: 'Quartz/Typography',
} as Meta;

const Template: Story = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      '> *': {
        lineHeight: '30px',
      },
    }}
  >
    <Title>Titrage/H1</Title>
    <Subtitle>Titrage/H2</Subtitle>
    <Labeling bold>labeur/bold</Labeling>
    <Labeling>labeur/regular</Labeling>
    <Labeling gray>labeur/gray</Labeling>
    <Value>value/default</Value>
    <Microlabeling>labeling/micro</Microlabeling>
  </Box>
);

export const Default = Template.bind({});
