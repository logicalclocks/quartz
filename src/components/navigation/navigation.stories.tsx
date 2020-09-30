import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Navigation, { NavigationProps } from './container';

export default {
  title: 'Quartz/Navigation',
  component: Navigation,
} as Meta;

const Template: Story<NavigationProps> = () => (
  <Navigation>
    <Navigation.Category title="Home" icon={['far', 'copy']}>
      <Navigation.Item title="Overview" />
    </Navigation.Category>
    <Navigation.Category title="Feature Groups" icon={['far', 'copy']}>
      <Navigation.Item title="Overview">
        <Navigation.Item title="Feature List" />
        <Navigation.Item title="Schematised Tags" />
        <Navigation.Item title="Running Code" />
        <Navigation.Item title="API" />
      </Navigation.Item>
      <Navigation.Item title="Data" />
      <Navigation.Item title="Activity" />
    </Navigation.Category>
    <Navigation.Item title="Training Datasets" icon={['far', 'copy']} />
    <Navigation.Item title="Source" icon={['far', 'copy']} />
    <Navigation.Item title="Jobs" icon={['far', 'copy']} />
  </Navigation>
);

export const Default = Template.bind({});
