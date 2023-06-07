import { useMemo, useState } from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { Box, Flex } from 'rebass';
import GetIcon from './GetIcon';
import { IconName } from './list';
import Tooltip from '../tooltip';
import theme from '../../theme/theme';
import Labeling from '../typography/labeling';
import Input from '../input';

export default {
  title: 'GetIcon',
  component: GetIcon,
  argTypes: {
    icon: {
      description: 'Icon name - Hover over above icons to see the name',
    },
    size: {
      type: { name: 'string', required: false },
      defaultValue: 'lg',
      description:
        'String indicating the width of the svg icon, height will scale accordingly.',
      options: Object.keys(theme.iconSizes),
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'lg' },
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
        'labels.yellowShade2',
        'labels.green',
        'labels.blueShade1',
        'labels.blueShade2',
        'labels.blue',
        'labels.redShade2',
        'labels.orangeShade2',
      ],
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'black' },
      },
    },
  },
} as Meta;

const allIcons = Object.values(IconName);

export const Default: StoryObj<typeof GetIcon> = {
  args: {
    color: 'black',
    size: 'lg',
  },
  render: (props) => {
    const [copiedIcon, setCopiedIcon] = useState('');
    const [search, setSearch] = useState('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    };

    const filteredIcons = useMemo(() => {
      const icons = allIcons.slice(0, allIcons.length / 2) as string[];

      return icons.filter((icon) => icon.includes(search));
    }, [search]);

    return (
      <Flex flexWrap="wrap" width="700px" sx={{ gap: '10px' }}>
        <Input
          placeholder="anything specific? e.g. 'glass'"
          width="100%"
          mb={2}
          value={search}
          onChange={handleSearch}
          icon={IconName.glass}
        />

        {filteredIcons.map((icon) => (
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
              <GetIcon
                {...props}
                icon={IconName[icon as keyof typeof IconName]}
              />
            </Box>
          </Tooltip>
        ))}
        <Box mt={1} width="100%">
          <Labeling gray>^ just click to copy.</Labeling>
        </Box>
      </Flex>
    );
  },
};
