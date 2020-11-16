import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Table from './index';
import ReadOnlyTable, { ReadOnlyTableProps } from './read-only';

import dummyValues from './read-only/dummydata.json';
import dummyValuesEditable from './editable/dummydata.json';
import EditableTable, { TableColumn } from './editable';
import { Button, Checkbox, Select } from '../../index';
import BlurInput from './editable/blur-input';
import { Box } from 'rebass';

export default {
  title: 'Quartz/Tables',
  component: Table,
} as Meta;

export const ReadOnly: Story<ReadOnlyTableProps> = (props) => {
  const [staticColumn, setStaticColumn] = useState<string | undefined>(
    undefined,
  );
  const handleChangeStaticColumn = (column: string | undefined) => {
    setStaticColumn(column);
  };

  return (
    <Box width="1000px">
      <Box height="400px">
        <ReadOnlyTable
          {...props}
          staticColumn={staticColumn}
          onFreeze={handleChangeStaticColumn}
          actions={[
            {
              label: 'go to stats',
              handler: (column) => {
                console.log('go to stats of ' + column);
              },
            },
          ]}
        />
      </Box>
    </Box>
  );
};

export const Editable: Story<ReadOnlyTableProps> = ({ values }) => {
  const [data, setData] = useState(values);

  const handleChangeData = (
    rowInd: number,
    columnName: string,
    value: string | string[] | boolean,
  ) => {
    setData((prevData) => {
      return prevData.map((data, rIndex) => ({
        ...data,
        row: data.row.map((r) =>
          r.columnName === columnName && rIndex === rowInd
            ? { ...r, columnValue: value }
            : r,
        ),
      }));
    });
  };

  const handleRemoveRow = (ind: number) => {
    setData((prevData) => {
      prevData.splice(ind, 1);
      return [...prevData];
    });
  };

  const handleAddRow = () => {
    setData((prevData) => [
      {
        row: [
          {
            columnName: 'away_team_id',
            columnValue: '11',
          },
          {
            columnName: 'score',
            columnValue: true,
          },

          {
            columnName: 'dummycolumn_test1',
            columnValue: ['2'],
          },
          {
            columnName: 'dummycolumn_test2',
            columnValue: 'dasda',
          },

          {
            columnName: 'home_team_id',
            columnValue: ['2'],
          },
        ],
      },
      ...prevData,
    ]);
  };

  const columns: TableColumn[] = [
    {
      name: 'away_team_id',
      render: ({ value, onChange }) => (
        <BlurInput defaultValue={value} onChange={onChange} />
      ),
    },
    {
      name: 'score',
      render: ({ value, onChange }) => {
        const handleChange = () => {
          onChange(!value);
        };

        return (
          <Checkbox
            ml="8px"
            checked={value}
            onChange={handleChange}
            variant="gray"
          />
        );
      },
    },
    {
      name: 'dummycolumn_test1',
      render: ({ value, onChange }) => (
        <Select
          value={value}
          onChange={onChange}
          options={['1', '2']}
          placeholder=""
        />
      ),
    },
    {
      name: 'dummycolumn_test2',
      render: ({ value, onChange }) => (
        <BlurInput defaultValue={value} onChange={onChange} />
      ),
    },
    {
      name: 'home_team_id',
      render: ({ value, onChange }) => (
        <Select
          value={value}
          onChange={onChange}
          options={['1', '2']}
          placeholder=""
        />
      ),
    },
  ];

  return (
    <>
      <Button onClick={handleAddRow}>Add</Button>
      <EditableTable
        columns={columns}
        values={data}
        onChangeData={handleChangeData}
        onDeleteRow={handleRemoveRow}
        actions={[
          {
            label: 'go to stats',
            handler: (column) => {
              console.log('go to stats of ' + column);
            },
          },
        ]}
      />
    </>
  );
};

ReadOnly.args = {
  variant: 'read-only',
  values: dummyValues,
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
  variant: 'editable',
  values: dummyValuesEditable,
};
