import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Box, Flex } from 'rebass';
import Labeling from '../typography/labeling';
import EmbeddedTabs from '.';
import { Button } from '../button';

const meta: Meta<typeof EmbeddedTabs> = {
  title: 'EmbeddedTabs',
  component: EmbeddedTabs,
  argTypes: {
    tabs: {
      required: true,
      description: 'A list of tab items.',
    },
    initialTab: {
      required: false,
      description: 'The initial tab to be selected.',
      default: 0,
    },
    onTabChange: {
      description: 'Callback to be called when a tab is selected.',
      required: false,
    },
  },
};
export default meta;

const tabs = [
  {
    title: 'Validation Reports',
  },
  {
    title: 'Results',
  },
  {
    title: 'Statistics',
  },
  {
    title: 'And a disabled tab',
    disabled: true,
  },
];

type Story = StoryObj<typeof EmbeddedTabs>;
const args = {
  tabs,
};
export const Uncontrolled: Story = {
  args,
  render: (props) => {
    const [activeTab, setActiveTab] = useState(props.initialTab ?? 0);

    return (
      <Box width="700px">
        <EmbeddedTabs {...props} onTabChange={setActiveTab} />
        <Box mt={3}>
          <Labeling bold>Active tab: {tabs[activeTab].title}</Labeling>
        </Box>
      </Box>
    );
  },
};

export const Controlled: Story = {
  args,
  render: (props) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
      <Box width="700px">
        <EmbeddedTabs.Controlled
          {...props}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        <Box mt={3}>
          <Labeling bold>
            This component is controlled. Active tab: {tabs[activeTab].title}{' '}
          </Labeling>
          <Flex mt={2} sx={{ gap: '10px' }}>
            <Button onClick={() => setActiveTab(2)}>Jump to Statistics</Button>
            <Button onClick={() => setActiveTab(1)}>Jump to Results</Button>
          </Flex>
        </Box>
      </Box>
    );
  },
};
