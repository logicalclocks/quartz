import { Meta, StoryObj } from '@storybook/react';
import { User } from './index';
declare const meta: Meta<typeof User>;
export default meta;
type Story = StoryObj<typeof User>;
export declare const Default: Story;
export declare const WithSecondaryText: Story;
export declare const WithTitle: () => import("react/jsx-runtime").JSX.Element;
