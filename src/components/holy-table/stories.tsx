import { Meta, StoryObj } from '@storybook/react';
import { Box } from 'rebass';
import HT from '.';

export default {
  title: 'HolyTable',
  component: HT,
  args: {
    standalone: false,
    padded: true,
    bordered: true,
    hoverable: true,
    rowHeight: '50px',
  },
} as Meta;

type Story = StoryObj<typeof HT>;

export const HolyTableWithLegend: Story = {
  render: (props) => (
    <Box width="700px">
      <HT {...props} legend={['name', 'hex', 'rgb']}>
        <HT.Row>
          <HT.Cell>Black</HT.Cell>
          <HT.Cell>#000000</HT.Cell>
          <HT.Cell>0, 0, 0</HT.Cell>
        </HT.Row>
        <HT.Row>
          <HT.Cell>White</HT.Cell>
          <HT.Cell>#ffffff</HT.Cell>
          <HT.Cell>255, 255, 255</HT.Cell>
        </HT.Row>
      </HT>
    </Box>
  ),
};

export const HolyTableCustom: Story = {
  render: (props) => (
    <Box width="700px">
      <HT {...props}>
        <thead style={{ background: 'magenta' }}>
          <tr>
            <HT.HeadCell>Name</HT.HeadCell>
            <HT.HeadCell>hex</HT.HeadCell>
            <HT.HeadCell>rgb</HT.HeadCell>
          </tr>
        </thead>
        <tbody>
          <HT.Row>
            <HT.Cell>Black</HT.Cell>
            <HT.Cell>#000000</HT.Cell>
            <HT.Cell>0, 0, 0</HT.Cell>
          </HT.Row>
          <HT.Row>
            <HT.Cell>White</HT.Cell>
            <HT.Cell>#ffffff</HT.Cell>
            <HT.Cell>255, 255, 255</HT.Cell>
          </HT.Row>
        </tbody>
      </HT>
    </Box>
  ),
};
