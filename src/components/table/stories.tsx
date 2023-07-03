import * as R from 'ramda';
import { useCallback, useState } from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { Box } from 'rebass';
import Table from './index';
import ReadOnlyTable from './read-only';

import dummyValues from './read-only/dummydata.json';
import dummyValuesEditable from './editable/dummydata.json';
import EditableTable from './editable';
import { Button, Checkbox, Select } from '../../index';
import BlurInput from './editable/blur-input';
import {
  TableCellRenderProps,
  TableCellType,
  TableHeader,
  TableRowComponent,
} from './type';
import { EditableTable2 } from './editable/EditableTable2';

const meta: Meta<typeof Table> = {
  title: 'Tables',
  component: Table,

  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['read-only'],
      },
      description: 'Type of table',
      defaultValue: { summary: 'read-only' },
    },
  },
};
export default meta;

const headers = [
  {
    identifier: { name: 'away_team_id' },
  },
  {
    identifier: { name: 'score' },
  },
  {
    identifier: { name: 'dummycolumn_test1' },
  },
  {
    identifier: { name: 'dummycolumn_test2' },
  },
  {
    identifier: { name: 'home_team_id' },
  },
];

export const ReadOnly: StoryObj<typeof ReadOnlyTable> = {
  args: {
    values: dummyValues,
    columnHeaders: headers,
  },
  render: (props) => {
    return (
      <Box>
        <ReadOnlyTable
          {...props}
          initialStaticColumn="score"
          actions={[
            {
              label: 'go to stats',
              handler: (column) => {
                console.log(`go to stats of ${column}`);
              },
            },
          ]}
        />
      </Box>
    );
  },
};

const rowComponents: TableRowComponent[] = [
  {
    identifier: { name: 'away_team_id' },
    render: ({ value, onChange, onBlur }) => (
      <BlurInput
        defaultValue={value as string}
        onChange={onChange}
        onBlur={onBlur}
      />
    ),
  },
  {
    identifier: { name: 'score' },
    render: ({ value, onChange, onBlur }) => {
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
    identifier: { name: 'dummycolumn_test1' },
    render: ({ value, onChange, onBlur }) => (
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
    identifier: { name: 'dummycolumn_test2' },
    render: ({ value, onChange }) => (
      <BlurInput defaultValue={value as string} onChange={onChange} />
    ),
  },
  {
    identifier: { name: 'home_team_id' },
    render: ({ value, onChange }) => (
      <Select
        value={value as string[]}
        onChange={onChange}
        options={['1', '2']}
        placeholder=""
      />
    ),
  },
];

export const Editable: StoryObj<typeof EditableTable> = {
  args: {
    values: dummyValuesEditable,
    columnHeaders: headers,
  },
  render: ({ values, columnHeaders }) => {
    const [data, setData] = useState(values);

    const handleRemoveRow = (ind: number) => {
      setData((prevData) => {
        prevData.splice(ind, 1);
        return [...prevData];
      });
    };

    const vals = ['11', true, ['2'], 'dasda', ['2']];

    const addRowVals = columnHeaders.map(
      (header: TableHeader, index: number) => ({
        identifierName: header.identifier.name,
        value: vals[index] as TableCellType,
      }),
    );

    const handleChangeData = (
      rowInd: number,
      columnName: string,
      value: string | string[] | boolean,
    ) => {
      setData((data2) => {
        const prevData = data2.slice();
        const cellIndex = prevData[rowInd].findIndex(
          (cell) => cell.identifierName === columnName,
        );
        const cell = prevData[rowInd][cellIndex];
        prevData[rowInd][cellIndex] = { ...cell, value };
        return prevData;
      });
    };

    const handleAddRow = () => {
      setData((prevData) => [...prevData, addRowVals]);
    };

    return (
      <>
        <Button onClick={handleAddRow}>Add</Button>
        <EditableTable
          columnHeaders={columnHeaders}
          values={data}
          rowComponents={rowComponents}
          onChangeData={handleChangeData}
          onDeleteRow={handleRemoveRow}
          actions={[
            {
              label: 'go to stats',
              handler: (column) => {
                console.log(`go to stats of ${column}`);
              },
            },
          ]}
        />
      </>
    );
  },
};

// converting old data structure to new one
type DataShape = {
  identifierName: string;
  value: any;
};

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

export const Editable2: StoryObj<typeof EditableTable2> = {
  args: {
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
