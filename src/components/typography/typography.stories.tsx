import { Meta, StoryObj } from '@storybook/react';
import { Box } from 'rebass';

import ValueC from './value';
import TitleC from './title';
import SubtitleC from './subtitle';
import LabelingC from './labeling';
import MicrolabelingC from './microlabeling';
import { HoverableText as HoverableTextC, Text } from '../../index';
import InputValidationC from './input-validation/input-validation';

const meta: Meta = {
  title: 'Typography/Typography',
};
export default meta;

const Template = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      '> *': {
        lineHeight: '30px',
      },
    }}
  >
    <TitleC uppercase>Titrage/H1</TitleC>
    <Text>Text</Text>
    <HoverableTextC>hoverable</HoverableTextC>
    <SubtitleC>Titrage/H2</SubtitleC>
    <LabelingC bold>labeur/bold</LabelingC>
    <LabelingC>labeur/regular</LabelingC>
    <LabelingC gray>labeur/gray</LabelingC>
    <ValueC>value/default</ValueC>
    <MicrolabelingC>labeling/micro</MicrolabelingC>
  </Box>
);

export const Typography = {
  render: Template,
};

export const Title: StoryObj<typeof TitleC> = {
  args: {
    uppercase: false,
  },
  render: (props) => <TitleC {...props}>Titrage/H1</TitleC>,
};

export const Value: StoryObj<typeof ValueC> = {
  render: (props) => <ValueC {...props}>value/default</ValueC>,
};

export const Subtitle: StoryObj<typeof SubtitleC> = {
  render: (props) => <SubtitleC {...props}>Titrage/H2</SubtitleC>,
};

export const Labeling: StoryObj<typeof LabelingC> = {
  args: {
    bold: false,
    gray: false,
  },
  render: (props) => <LabelingC {...props}>labeur/regular</LabelingC>,
};

export const Microlabeling: StoryObj<typeof MicrolabelingC> = {
  render: (props) => <MicrolabelingC {...props}>labeling/micro</MicrolabelingC>,
};

export const InputValidation: StoryObj<typeof InputValidationC> = {
  argTypes: {
    intent: {
      control: { type: 'select' },
      options: ['success', 'fail', 'warning', 'neutral'],
    },
  },
  args: {
    intent: 'success',
  },
  render: (props) => (
    <InputValidationC {...props}>the sum is 100%</InputValidationC>
  ),
};
