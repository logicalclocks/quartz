import type { Meta, StoryObj } from '@storybook/react';
import * as R from 'ramda';
import { useCallback, useState } from 'react';

import { EditableTable2 } from './EditableTable2';
import { TableCellRenderProps } from '../type';

import dummyValuesEditable from './dummydata.json';
import { Checkbox, Select } from '../../../index';

const meta = {
  title: 'DataDisplay/Tables/EditableTable2',
  component: EditableTable2,
  argTypes: {
    actions: {
      type: {
        name: 'string',
        required: false,
      },
      description: 'Actions',
      control: {
        type: 'object',
      },
    },
    filterFns: {
      type: {
        name: 'string',
        required: false,
      },
      description: 'Filter functions',
      control: {
        type: 'object',
      },
    },
    aggregationFns: {
      type: {
        name: 'string',
        required: false,
      },
      description: 'Aggregation functions',
    },
  },
} satisfies Meta<typeof EditableTable2>;

export default meta;

const convertOldDataToNew = R.map(
  R.reduce(
    (acc, item: DataShape) => ({ ...acc, [item.identifierName]: [item.value] }),
    {},
  ),
);
const dummyValues2 = convertOldDataToNew(dummyValuesEditable as DataShape[][]);
const editableTable2Columns = [
  {
    accessorKey: 'away_team_id',
    // cell: since type is input we don't need to explicitly define cell
  },
  {
    accessorKey: 'score',
    cell: ({ value, onChange, onBlur }: TableCellRenderProps) => {
      const handleChange = () => {
        onChange(!(value as boolean));
      };

      return (
        <Checkbox
          ml="8px"
          checked={value as boolean}
          onChange={handleChange}
          variant="gray"
          onBlur={onBlur}
        />
      );
    },
  },
  {
    accessorKey: 'dummycolumn_test1',
    cell: ({ value, onChange, onBlur }: TableCellRenderProps) => (
      <Select
        value={value as string[]}
        onChange={onChange}
        options={['1', '2']}
        placeholder=""
        onBlur={onBlur}
      />
    ),
  },
  {
    accessorKey: 'dummycolumn_test2',
    // cell: since type is input we don't need to explicitly define cell
  },
  {
    accessorKey: 'home_team_id',
    cell: ({ value, onChange }: TableCellRenderProps) => (
      <Select
        value={value as string[]}
        onChange={onChange}
        options={['1', '2']}
        placeholder=""
      />
    ),
  },
];

// converting old data structure to new one
type DataShape = {
  identifierName: string;
  value: any;
};

export const Editable2: StoryObj<typeof EditableTable2> = {
  args: {
    data: dummyValues2,
    hasFreezeButton: true,
    columns: editableTable2Columns as any,
    actions: [
      {
        label: 'go to stats',
        handler: (column) => {
          console.log(`go to stats of ${column}`);
        },
      },
    ],
  },
  render: (props: any) => {
    const [data, setData] = useState(dummyValues2);

    const updateData = useCallback(
      (rowIndex: number, columnId: string, value: any) => {
        console.log({ rowIndex, columnId, value });
        // Skip page index reset until after next rerender
        setData((old) =>
          old.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...old[rowIndex]!,
                [columnId]: value,
              };
            }
            return row;
          }),
        );
      },
      [],
    );

    const handleDeleteRow = (rowIdx: number) =>
      setData((data) => data.filter((x, idx) => idx !== rowIdx));

    return (
      <EditableTable2
        data={data}
        onDeleteRow={handleDeleteRow}
        updateData={updateData}
        {...props}
      />
    );
  },
};
