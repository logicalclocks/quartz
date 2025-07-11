import { StoryObj } from '@storybook/react';
import { Box } from '../box';
import { Flex as FlexComponent } from './index';

export default {
  title: 'Layout/Flex',
  component: FlexComponent,
};

export const Flex: StoryObj<typeof FlexComponent> = {
  args: {
    gap: '20px',
  },
  render: (props) => (
    <FlexComponent {...props}>
      <Box width="200px" height="200px" bg="red" />
      <Box width="200px" height="200px" bg="green" />
      <Box width="200px" height="200px" bg="blue" />
    </FlexComponent>
  ),
};
