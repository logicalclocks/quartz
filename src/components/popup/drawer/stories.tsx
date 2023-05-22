import { action } from '@storybook/addon-actions';
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box, BoxProps } from 'rebass';
import { Button, Drawer, usePopup } from '../../..';
import { reusableArgs } from '../storyUitls';

const YellowBox = (props: Omit<BoxProps, 'css'>) => (
  <Box
    sx={{
      bg: '#F2C94C',
      color: 'black',
      fontFamily: 'Inter',
      fontSize: '12px',
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    width="100%"
    height="40px"
    {...props}
  />
);

const meta: Meta<typeof Drawer> = {
  title: 'Drawer',
};
export default meta;

export const Simple: StoryObj<typeof Drawer> = {
  args: {
    headerLine: <YellowBox width="268px">head line</YellowBox>,
    headerSummary: <YellowBox>header summary</YellowBox>,
    bottomButton: ['CTA', action('CTA')],
    placement: 'right',
    ...reusableArgs,
  },
  render: (props: any) => {
    const [isOpen, handleToggle] = usePopup();

    return (
      <>
        <Button onClick={handleToggle}>Open Drawer</Button>
        <Drawer isOpen={isOpen} {...props} onClose={handleToggle}>
          <Drawer.Section
            title="Section title"
            action={['section link', action('section action')]}
          >
            <YellowBox height="64px">content</YellowBox>
          </Drawer.Section>
          <Drawer.Section
            title="Section title"
            action={['section link', action('section action')]}
          >
            <YellowBox height="121px">content</YellowBox>
          </Drawer.Section>
          <Drawer.Section
            title="Section title"
            action={['section link', action('section action')]}
          >
            <YellowBox height="163px">content</YellowBox>
          </Drawer.Section>
        </Drawer>
      </>
    );
  },
};
