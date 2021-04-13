// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useCallback, useMemo, useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Box } from 'rebass';

// Components
import AlternativeHeader, { AlternativeHeaderProps } from './index';
import { Button, Labeling, Value } from '../../index';

export default {
  title: 'Quartz/AlternativeHeader',
  component: AlternativeHeader,
} as Meta;

const Template: Story<AlternativeHeaderProps> = (props) => {
  const [active, setActive] = useState<string>('tab');

  const isActive = useCallback(
    (title: string) => {
      return active === title;
    },
    [active],
  );

  const tabs = useMemo(
    () => [
      {
        title: 'tab',
        isActive: isActive('tab'),
        count: 0,
        onCLick: () => setActive('tab'),
      },
      {
        title: 'another tab',
        isActive: isActive('another tab'),
        count: 3,
        onCLick: () => setActive('another tab'),
      },
      {
        title: 'one more tab',
        isActive: isActive('one more tab'),
        count: 2,
        onCLick: () => setActive('one more tab'),
      },
      {
        title: 'last tab',
        isActive: isActive('last tab'),
        onCLick: () => setActive('last tab'),
      },
    ],
    [active, setActive],
  );

  return (
    <Box width="90vw" height="90vh">
      <AlternativeHeader {...props} tabs={tabs} />
    </Box>
  );
};

export const Default = Template.bind({});

Default.args = {
  title: 'Cluster settings',
  tabsWithCount: false,
  rightTopContent: (
    <Button intent="secondary" onClick={() => {}}>
      back to projects
    </Button>
  ),
  rightBottomContent: (
    <>
      <Labeling gray mr="5px">
        Instance id
      </Labeling>
      <Value>18ACE34ART8</Value>
    </>
  ),
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
  tabs: {
    control: {
      type: 'object',
    },

    type: {
      summary: 'Tabs of header',
    },
  },
  tabsWithCount: {
    control: {
      type: 'boolean',
    },

    type: {
      summary: 'Tabs with count',
    },
  },
  buttonText: {
    control: {
      type: 'text',
    },

    type: {
      summary: 'Right button text',
    },
  },
  buttonAction: {
    control: {
      type: 'void',
    },

    type: {
      summary: 'Right button handler',
    },
  },
  secondaryContent: {
    control: {
      type: 'text',
    },

    type: {
      summary: 'Right bottom content',
    },
  },
  width: {
    control: {
      type: 'text',
    },

    type: {
      summary: 'Card width (string or number px, %)',
    },
  },
};
