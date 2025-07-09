import { StoryObj } from '@storybook/react';
import { ProjectBadge as ProjectBadgeComponent } from './ProjectBadge';

export default {
  title: 'DataDisplay/Badge/ProjectBadge',
  component: ProjectBadgeComponent,
  args: {
    value: 'ml demo web',
  },
};

export const ProjectBadge: StoryObj<typeof ProjectBadgeComponent> = {};
