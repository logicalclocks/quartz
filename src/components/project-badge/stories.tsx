import { StoryObj } from '@storybook/react';
import { ProjectBadge } from './ProjectBadge';

export default {
  title: 'Badges/ProjectBadge',
  component: ProjectBadge,
  args: {
    value: 'ml demo web',
  },
};

export const Default: StoryObj<typeof ProjectBadge> = {
  render: (props) => <ProjectBadge {...props} />,
};
