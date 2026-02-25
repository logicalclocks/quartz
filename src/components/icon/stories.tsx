import { useMemo, useState } from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { Box, Flex } from 'rebass';
import GetIconComponent from './GetIcon';
import { IconName } from './list';
import { getLucideMappedIcons } from './lucide-mappings';
import { CUSTOM_ICON_NAMES } from './custom-icons';
import Tooltip from '../tooltip';
import theme from '../../theme/theme';
import Labeling from '../typography/labeling';
import Input from '../input';

const meta: Meta = {
  title: 'Media and Icons/GetIcon',
  component: GetIconComponent,
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
};
export default meta;

const allIcons = Object.values(IconName);

export const GetIcon: StoryObj<typeof GetIconComponent> = {
  args: {
    color: 'black',
    size: 'xl',
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
              <GetIconComponent
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

export const LucideIcons: StoryObj<typeof GetIconComponent> = {
  args: {
    color: 'black',
    size: 'lg',
  },
  render: (props) => {
    const lucideIcons = getLucideMappedIcons();

    return (
      <Box>
        <Labeling mb={3}>
          Icons using Lucide React ({lucideIcons.length} icons) - Modern,
          tree-shakable icons
        </Labeling>
        <Flex flexWrap="wrap" sx={{ gap: '10px' }}>
          {lucideIcons.map((icon) => (
            <Tooltip
              key={icon}
              delayed={false}
              mainText={IconName[icon]}
              secondaryText="Lucide icon"
            >
              <GetIconComponent {...props} icon={icon} />
            </Tooltip>
          ))}
        </Flex>
      </Box>
    );
  },
};

export const CustomIcons: StoryObj<typeof GetIconComponent> = {
  args: {
    color: 'black',
    size: 'lg',
  },
  render: (props) => {
    // Show a sample of custom icons that are implemented
    const implementedCustomIcons = [
      IconName.hopworks,
      IconName.jupyter,
      IconName.fg,
      IconName.td,
      IconName.sc,
    ];

    return (
      <Box>
        <Labeling mb={3}>
          Custom SVG Icons (Platform & Domain Specific) - Sample of{' '}
          {CUSTOM_ICON_NAMES.length} total custom icons
        </Labeling>
        <Flex flexWrap="wrap" sx={{ gap: '10px' }}>
          {implementedCustomIcons.map((icon) => (
            <Tooltip
              key={icon}
              delayed={false}
              mainText={IconName[icon]}
              secondaryText="Custom SVG"
            >
              <GetIconComponent {...props} icon={icon} />
            </Tooltip>
          ))}
        </Flex>
      </Box>
    );
  },
};

export const IconComparison: StoryObj<typeof GetIconComponent> = {
  args: {
    color: 'primary',
    size: 'xl',
  },
  render: (props) => {
    const sampleLucideIcons = [
      IconName.home,
      IconName.plus,
      IconName.settings,
      IconName.download,
      IconName.terminal,
    ];

    const sampleCustomIcons = [
      IconName.hopworks,
      IconName.jupyter,
      IconName.fg,
    ];

    return (
      <Box>
        <Flex flexDirection="column" sx={{ gap: '20px' }}>
          <Box>
            <Labeling mb={2}>
              Lucide Icons (Tree-shakable, consistent design)
            </Labeling>
            <Flex sx={{ gap: '15px' }}>
              {sampleLucideIcons.map((icon) => (
                <Tooltip
                  key={icon}
                  mainText={IconName[icon]}
                  secondaryText="Lucide"
                >
                  <GetIconComponent {...props} icon={icon} />
                </Tooltip>
              ))}
            </Flex>
          </Box>

          <Box>
            <Labeling mb={2}>
              Custom Icons (Platform-specific, domain-specific)
            </Labeling>
            <Flex sx={{ gap: '15px' }}>
              {sampleCustomIcons.map((icon) => (
                <Tooltip
                  key={icon}
                  mainText={IconName[icon]}
                  secondaryText="Custom SVG"
                >
                  <GetIconComponent {...props} icon={icon} />
                </Tooltip>
              ))}
            </Flex>
          </Box>
        </Flex>
      </Box>
    );
  },
};
