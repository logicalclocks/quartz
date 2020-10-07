import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Box, BoxProps } from 'rebass';

import Button from '../button';
import Drawer from './drawer';
import { FooterButton } from '../../index';
import { DrawerSectionProps } from './drawer/drawer-section';
import Popup, { PopupProps } from './index';
import TinyPopup, { TinyPopupProps } from './tiny';
import usePopup from '../../utils/usePopup';

export default {
  title: 'Quartz/Popup',
  component: Popup,
} as Meta;

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

const Template: Story<PopupProps> = (props) => {
  const [isOpen, handleToggle] = usePopup();

  return (
    <div>
      <Button onClick={handleToggle}>Open Drawer</Button>
      <Popup isOpen={isOpen} onClose={handleToggle} {...props} />
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {};

export const PopupDrawer = () => {
  const [isOpen, handleToggle] = usePopup();

  return (
    <>
      <Button onClick={handleToggle}>Open Drawer</Button>
      <Drawer
        isOpen={isOpen}
        headerLine={<YellowBox width="268px">head line</YellowBox>}
        headerSummary={<YellowBox>header summary</YellowBox>}
        bottomButton={<FooterButton width="100%">CTA</FooterButton>}
        onClose={handleToggle}
      >
        <Drawer.Section
          title="Section title"
          actions={
            <Button intent="inline" p="0">
              section link
            </Button>
          }
        >
          <YellowBox height="64px">content</YellowBox>
        </Drawer.Section>
        <Drawer.Section
          title="Section title"
          actions={
            <Button intent="inline" p="0">
              section link
            </Button>
          }
        >
          <YellowBox height="121px">content</YellowBox>
        </Drawer.Section>
        <Drawer.Section
          title="Section title"
          actions={
            <Button intent="inline" p="0">
              section link
            </Button>
          }
        >
          <YellowBox height="163px">content</YellowBox>
        </Drawer.Section>
      </Drawer>
    </>
  );
};

export const PopupTiny: Story<TinyPopupProps> = (props) => {
  const [isOpen, handleToggle] = usePopup();

  return (
    <>
      <Button onClick={handleToggle}>Open Drawer</Button>
      <TinyPopup
        {...props}
        onClose={handleToggle}
        isOpen={isOpen}
        mainButton={<Button>main</Button>}
        secondaryButton={
          <Button intent="secondary" mr="11px">
            secondary
          </Button>
        }
      >
        children?: React.ReactNode;
      </TinyPopup>
    </>
  );
};

export const DrawerSection: Story<DrawerSectionProps> = (props) => (
  <Drawer.Section width="300px" {...props} />
);

DrawerSection.args = {
  title: 'Title',
  actions: (
    <Button intent="inline" p="0">
      section link
    </Button>
  ),
  children: <YellowBox height="121px">content</YellowBox>,
};

DrawerSection.argTypes = {
  title: {
    control: {
      type: 'text',
    },
    type: {
      summary: 'React Component slot',
      required: true,
    },
  },
  actions: {
    control: {
      type: 'text',
    },

    type: {
      summary: 'React Component slot',
    },
  },
  children: {
    control: {
      type: 'text',
    },
    type: {
      summary: 'React Component slot',
      required: true,
    },
  },
};

PopupDrawer.args = {};

PopupDrawer.argTypes = {
  headerLine: {
    control: {
      type: 'text',
    },
    type: {
      summary: 'React Component slot',
      required: true,
    },
  },
  headerSummary: {
    control: {
      type: 'text',
    },

    type: {
      summary: 'React Component slot',
    },
  },
  bottomButton: {
    control: {
      type: 'text',
    },
    type: {
      summary: 'React Component slot',
      required: true,
    },
  },
  children: {
    control: {
      type: 'text',
    },

    type: {
      summary: 'Slot for any React component or the Drawer Section',
    },
  },
  otherProps: {
    type: {
      summary: 'Other props extended from the Popup Default component ',
    },
  },
};

PopupTiny.args = {
  title: 'Title',
  secondaryText: 'Secondary text',
};

PopupTiny.argTypes = {
  title: {
    control: {
      type: 'text',
    },
    type: {
      summary: 'Title',
      required: true,
    },
  },
  secondaryText: {
    control: {
      type: 'text',
    },
    type: {
      summary: 'Secondary text',
      required: true,
    },
  },
  mainButton: {
    control: {
      type: 'text',
    },

    type: {
      summary: 'React Component slot',
    },
  },
  secondaryButton: {
    control: {
      type: 'text',
    },

    type: {
      summary: 'React Component slot',
    },
  },
  otherProps: {
    type: {
      summary: 'Other props extended from the Popup Default component ',
    },
  },
};

Default.argTypes = {
  children: {
    control: {
      type: 'text',
    },
    type: {
      summary: 'Popup content',
      required: true,
    },
  },
  left: {
    control: {
      type: 'text',
    },

    type: {
      required: false,
    },
    summary: 'Custom position left',
  },
  top: {
    control: {
      type: 'text',
    },

    type: {
      summary: 'Custom position top',
    },
  },
  bottom: {
    control: {
      type: 'text',
    },

    type: {
      summary: 'Custom position bottom',
    },
  },
  right: {
    control: {
      type: 'text',
    },
    type: {
      summary: 'Custom position right',
    },
  },
  variant: {
    control: {
      type: 'select',
      options: ['primary'],
    },

    type: {
      summary: 'Popup variant',
    },
  },
  hasBackdrop: {
    control: {
      type: 'boolean',
    },

    type: {
      summary: 'Is show backdrop',
    },
  },
};
