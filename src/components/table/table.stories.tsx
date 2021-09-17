import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Box } from 'rebass';
import Table from './index';
import ReadOnlyTable, { ReadOnlyTableProps } from './read-only';

import dummyValues from './read-only/dummydata.json';
import dummyValuesEditable from './editable/dummydata.json';
import EditableTable, { EditableTableProps } from './editable';
import { Button, Checkbox, Select } from '../../index';
import BlurInput from './editable/blur-input';
import {
  ColumnIdentifier,
  TableCellType,
  TableHeader,
  TableRowComponent,
} from './type';

export default {
  title: 'Quartz/Tables',
  component: Table,
} as Meta;

/* eslint-disable arrow-body-style */

const headers = [
  {
    identifier: { name: 'away_team_id', isStatic: false, readOnly: false },
  },
  {
    identifier: { name: 'score', isStatic: false, readOnly: false },
  },
  {
    identifier: {
      name: 'dummycolumn_test1',
      isStatic: false,
      readOnly: false,
    },
  },
  {
    identifier: {
      name: 'dummycolumn_test2',
      isStatic: false,
      readOnly: false,
    },
  },
  {
    identifier: { name: 'home_team_id', isStatic: false, readOnly: false },
  },
];

export const ReadOnly: Story<ReadOnlyTableProps> = (props) => {
  const [staticColumn, setStaticColumn] = useState<ColumnIdentifier>();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars-experimental
  const handleChangeStaticColumn = (column: ColumnIdentifier) => {
    setStaticColumn(column);
  };

  return (
    <Box>
      <ReadOnlyTable
        {...props}
        staticColumn={staticColumn}
        // onFreeze={handleChangeStaticColumn}
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
};

export const Editable: Story<EditableTableProps> = ({
  values,
  columnHeaders,
}) => {
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
      identifier: header.identifier,
      value: vals[index] as TableCellType,
    }),
  );

  const rowComponents: TableRowComponent[] = [
    {
      identifier: { name: 'away_team_id' },
      render: ({ value, onChange }) => (
        <BlurInput defaultValue={value as string} onChange={onChange} />
      ),
    },
    {
      identifier: { name: 'score' },
      render: ({ value, onChange }) => {
        const handleChange = () => {
          onChange(!(value as boolean));
        };

        return (
          <Checkbox
            ml="8px"
            checked={value as boolean}
            onChange={handleChange}
            variant="gray"
          />
        );
      },
    },
    {
      identifier: { name: 'dummycolumn_test1' },
      render: ({ value, onChange }) => (
        <Select
          value={value as string[]}
          onChange={onChange}
          options={['1', '2']}
          placeholder=""
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

  const handleChangeData = (
    rowInd: number,
    columnName: string,
    value: string | string[] | boolean,
  ) => {
    setData((prevData) => {
      return prevData.map((oldData, rIndex) => ({
        ...oldData,
        row: oldData.map((r) => {
          return r.identifierName.name === columnName && rIndex === rowInd
            ? { ...r, columnValue: value }
            : r;
        }),
      }));
    });
  };

  const handleAddRow = () => {
    setData((prevData) => [addRowVals, ...prevData]);
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
};

ReadOnly.args = {
  values: dummyValues,
  columnHeaders: headers,
};

ReadOnly.argTypes = {
  variant: {
    control: {
      type: 'select',
      options: ['read-only'],
    },
    type: {
      required: false,
      summary: 'Type of table',
    },
    defaultValue: { summary: 'read-only' },
  },
};

Editable.args = {
  values: dummyValuesEditable,
  columnHeaders: headers,
};
