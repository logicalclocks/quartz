import { Meta, StoryObj } from '@storybook/react';
import Row, { RowProps } from './container';
import RowGroup from './group';
import RowItem from './item';
declare const meta: Meta<typeof Row>;
export default meta;
export declare const Container: StoryObj<RowProps>;
export declare const Group: StoryObj<typeof RowGroup>;
export declare const Item: StoryObj<typeof RowItem>;
