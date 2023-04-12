import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useMemo, useState } from 'react';
import { Box } from 'rebass';
import { AlternativeHeader, AlternativeHeaderProps } from './index';

export default {
  title: 'Quartz/AlternativeHeader',
  component: AlternativeHeader,
  args: {
    title: 'Cluster settings',
    withBase: false,
  },
} as Meta;

const Template: Story<AlternativeHeaderProps> = (props) => {
  const [active, setActive] = useState('tab');

  const tabs = useMemo(
    () => [
      {
        title: 'tab',
        isActive: active === 'tab',
        onClick: () => setActive('tab'),
      },
      {
        title: 'another tab',
        isActive: active === 'another tab',
        onClick: () => setActive('another tab'),
      },
      {
        title: 'one more tab',
        isActive: active === 'one more tab',
        onClick: () => setActive('one more tab'),
      },
      // if the storybook page hangs, comment the tab below. There is an unknown memory leak, which breaks the page.
      // {
      //   title: 'last tab',
      //   isActive: active === 'last tab',
      //   altContent: (
      //     <Value as="span" lineHeight="13px">
      //       38
      //     </Value>
      //   ),
      //   onClick: () => setActive('last tab'),
      // },
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
