import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import GetIcon, { GetIconProps } from './GetIcon';
import { IconName } from '../icon/list';
import { Box, Flex } from 'rebass';
import Tooltip from '../tooltip';

export default {
  title: 'Quartz/GetIcon',
  component: GetIcon,
} as Meta;

const allIcons = Object.values(IconName);

const Template: Story<GetIconProps> = (props) => {
  const [copiedIcon, setCopiedIcon] = useState('');
  return (
    <Flex flexWrap="wrap" width="700px" sx={{ gap: '10px' }}>
      <Box fontSize={20} mb={20} width="100%">
        List of all icons - hover over each icon to see the name of tooltip
        Click on Icon to copy the icon name
      </Box>
      {(allIcons.slice(0, allIcons.length / 2) as string[]).map((icon, i) => {
        return (
          <Tooltip
            delayed={false}
            mainText={icon}
            secondaryText={copiedIcon === icon ? 'copied' : 'copy'}
          >
            <Box
              onClick={() => {
                navigator.clipboard.writeText(icon);
                setCopiedIcon(icon);
              }}
            >
              <GetIcon {...props} icon={i} />
            </Box>
          </Tooltip>
        );
      })}
    </Flex>
  );
};

export const Default = Template.bind({});

Default.args = {
  color: 'black',
  size: 50,
};

Default.argTypes = {
  icon: {
    description: 'Icon name - Hover over above icons to see the name',
  },
  size: {
    type: { name: 'number', required: false },
    defaultValue: 18,
    description:
      'Number indicating the width of the svg icon, height will scale accordingly.',
    control: {
      type: 'number',
    },
    table: {
      defaultValue: { summary: '18px' },
    },
  },
  color: {
    type: { name: 'string', required: false },
    defaultValue: 'black',
    description: 'color of progressing bar',
    options: [
      'primary',
      'primaryShade1',
      'primaryShade2',
      'gray',
      'grayShade1',
      'grayShade2',
      'grayShade3',
      'black',
      'white',
      'labels.red',
      'labels.orange',
      'labels.purple',
      'labels.yellow',
      'labels.yellowLight',
      'labels.green',
      'labels.skyblue',
      'labels.darkblue',
      'labels.lightblue',
      'labels.blue',
      'labels.redShade3',
      'labels.orangeShade3',
    ],
    control: {
      type: 'select',
    },
    table: {
      defaultValue: { summary: 'black' },
    },
  },
};
