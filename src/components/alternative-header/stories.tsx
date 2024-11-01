import { Meta, StoryObj } from '@storybook/react';
import { useMemo, useState } from 'react';
import { Box } from 'rebass';
import { AlternativeHeader } from './index';
import TooltipPositions from '../tooltip/positions';

const meta: Meta<typeof AlternativeHeader> = {
  title: 'AlternativeHeader',
  component: AlternativeHeader,
  args: {
    title: 'Cluster settings',
    withBase: false,
  },
};
export default meta;

type Story = StoryObj<typeof AlternativeHeader>;

export const Default: Story = {
  render: (props) => {
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
          title: 'one more tabss',
          isActive: active === 'one more tab',
          onClick: () => setActive('one more tab'),
          disabled: true,
          tooltipProps: {
            mainText: 'this is disabled due to',
            position: TooltipPositions.right,
          },
        },
      ],
      [active],
    );

    return (
      <Box overflow="hidden" minHeight="200px">
        <AlternativeHeader {...props} tabs={tabs} />
      </Box>
    );
  },
};
