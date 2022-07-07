import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useMemo, useState } from 'react';
import { Box } from 'rebass';
import Value from '../typography/value';
import { AlternativeHeader, AlternativeHeaderProps } from './AlternativeHeader';

export default {
  title: 'Quartz/AlternativeHeader',
  component: AlternativeHeader,
} as Meta;

const Template: Story<AlternativeHeaderProps> = (props) => {
  const [active, setActive] = useState('tab');

  const tabs = useMemo(
    () => [
      {
        title: 'tab',
        isActive: active === 'tab',
        onCLick: () => setActive('tab'),
      },
      {
        title: 'another tab',
        isActive: active === 'another tab',
        onCLick: () => setActive('another tab'),
      },
      {
        title: 'one more tab',
        isActive: active === 'one more tab',
        onCLick: () => setActive('one more tab'),
      },
      {
        title: 'last tab',
        isActive: active === 'last tab',
        altContent: (
          <Value as="span" lineHeight="13px">
            altContent
          </Value>
        ),
        onCLick: () => setActive('last tab'),
      },
    ],
    [active],
  );

  return (
    <Box overflow="hidden" minHeight="200px">
      <AlternativeHeader {...props} tabs={tabs} />
    </Box>
  );
};

export const Default = Template.bind({});

Default.args = {
  title: 'Cluster settings',
};

Default.argTypes = {
  title: {
    summary: 'Title',
    control: {
      type: 'text',
    },
  },
  tabs: {
    summary: 'Tabs of header',
    control: {
      type: 'object',
    },
  },
  withBase: {
    summary: 'Adds a line under the menu',
    control: {
      type: 'boolean',
    },
  },
};
