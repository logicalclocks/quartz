import type { Meta, StoryObj } from '@storybook/react';
import LogoComponent from './index';
import { Box } from '../box';

const meta = {
  title: 'Media and Icons/Logo',
  component: LogoComponent,
} satisfies Meta<typeof LogoComponent>;

export default meta;

export interface LogoProps {
  width?: number;
  height?: number;
  withName?: boolean;
}
export const Logo: StoryObj<typeof LogoComponent> = {
  args: {
    width: 114,
    height: 22,
    withName: false,
  },
  render: (props) => {
    return (
      <Box bg="primary">
        <LogoComponent {...props} />
      </Box>
    );
  },
};
