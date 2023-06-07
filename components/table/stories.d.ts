import { StoryObj, Meta } from '@storybook/react';
import Table from './index';
import ReadOnlyTable from './read-only';
import EditableTable from './editable';
declare const meta: Meta<typeof Table>;
export default meta;
export declare const ReadOnly: StoryObj<typeof ReadOnlyTable>;
export declare const Editable: StoryObj<typeof EditableTable>;
