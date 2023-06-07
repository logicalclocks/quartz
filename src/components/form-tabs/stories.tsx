import { action } from '@storybook/addon-actions';
import { StoryObj, Meta } from '@storybook/react';
import { Box } from 'rebass';
import FormTabs, { ValidateOpts } from './index';
import { Button } from '../..';

const meta: Meta<typeof FormTabs> = {
  title: 'FormTabs',
  component: FormTabs,
  argTypes: {
    tabs: {
      required: true,
    },
    SubmitButton: {
      required: true,
      type: 'function',
    },
    hasScrollOnScreen: {
      control: {
        type: 'boolean',
      },
    },
    onTabChange: {
      description: 'callback to notify tab changes',
    },
  },
};
export default meta;

const handleSubmit = async (validateAll: any) => {
  const isAllValid = await validateAll();
  action('all tabs valid')(isAllValid);
};

const tabs = [
  {
    id: 'title1',
    title: 'Title 1',
    optional: false,
    validationFn: () => ValidateOpts.valid,
  },
  {
    id: 'title2',
    title: 'Title 2',
    optional: true,
    validationFn: () => ValidateOpts.untouched,
  },
  {
    id: 'title3',
    title: 'Title 3',
    optional: false,
    validationFn: () => ValidateOpts.error,
  },
  {
    id: 'title4',
    title: 'Title 4',
    optional: false,
    validationFn: () => ValidateOpts.error,
  },
  {
    id: 'title5',
    title: 'Title 5',
    optional: false,
    validationFn: () => ValidateOpts.error,
  },
  {
    id: 'description',
    title: 'description',
    optional: false,
    submit: true,
    validationFn: () => ValidateOpts.error,
  },
];

export const Default: StoryObj<typeof FormTabs> = {
  args: {
    tabs,
    hasScrollOnScreen: false,
    onTabChange: action('moved to'),
    SubmitButton: ({ validateAll }: { validateAll: () => boolean }) => (
      <Button onClick={() => handleSubmit(validateAll)}>Create feature</Button>
    ),
    initialTab: 'title2',
  },
  render: (props) => (
    <Box width="700px">
      <FormTabs {...props} />
    </Box>
  ),
};
