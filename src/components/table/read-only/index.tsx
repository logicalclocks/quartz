import React, { FC, useCallback, useRef, useState } from 'react';
import { Box, Button } from 'rebass';

// Components
import Table, { TableProps } from '../index';

// Types
import { Row } from '../types';
import { getColumns, getRows } from './utils';

// Styles
import {
  containerStyles,
  dropdownStyles,
  tableStyles,
  theadStyles,
  trowStyles
} from '../table.styles';

// Hooks
import { ListItem, useDropdown, useOnClickOutside } from '../../..';
import List from '../../list/container';

export interface TheadProps{
  column: string;
  className: string;
  actions: Array<{
    label: string,
    handler: (column: string) => void
  }>
}

const Thead: FC<TheadProps> = ({
  column,
  className,
  actions,
}: TheadProps) => {

  const containerRef = useRef(null);
  const [isOpen, handleToggle, handleClickOutside] = useDropdown();
  useOnClickOutside<HTMLDivElement>(containerRef, handleClickOutside);

  // // Handlers
  const handleToggleList = useCallback(() => {
    handleToggle();
  }, [handleToggle]);

  return(
    <Box as="th" sx={theadStyles} className={className} onClick={handleToggleList} ref={containerRef}>
      {column}
      {isOpen && (
        <List sx={dropdownStyles}>
          {actions.map(action =>
            <ListItem onClick={ () => {action.handler(column)} }>{ action.label }</ListItem>
          )}
        </List>
      )}
    </Box>
  )
}

export interface ReadOnlyTableProps extends Omit<TableProps, 'value'> {
  staticColumn?: string;
  onFreeze: (column: string) => void;
  actions: Array<{
    label: string,
    handler: (column: string) => void
  }>
}

const ReadOnlyTable: FC<ReadOnlyTableProps> = ({
  staticColumn,
  onFreeze,
  actions,
  ...props
}: ReadOnlyTableProps) => {

  const [hoverColumn, setHoverColumn] = useState<string>();

  return(
  <Box sx={containerStyles}>
    <Box as="table" sx={tableStyles}>
      <Box as="thead" sx={theadStyles}>
        <Box as="tr">
          <Box as="th" sx={theadStyles} className="table-corner"></Box>
          {staticColumn && <Thead column={staticColumn} className={'static-column ' + (hoverColumn == staticColumn && 'hover-column')} actions={
                [
                  {label: 'unfreeze', handler: (staticColumn) => { onFreeze(''); } },
                  actions[0] // todo
                ]
              }></Thead> }

          {getColumns(props.values).map( (column: string) =>
            column !== staticColumn && <Thead column={column} className={'' + (hoverColumn == column && 'hover-column')} actions={
                [
                  {label: 'freeze', handler: (column) => { onFreeze(column); } },
                  actions[0] // todo
                ]
            }></Thead>
          )}
        </Box>
      </Box>
      <Box as="tbody">
        {getRows(props.values).map( (row, i) => 
          <Box as="tr" sx={trowStyles}>
            <Box as="th">{i+1}</Box>
            {staticColumn && <Box
                as="td"
                className={'static-column ' + (hoverColumn == staticColumn && 'hover-column')}
                onMouseEnter={() => setHoverColumn(staticColumn)}
                onMouseLeave={() => setHoverColumn('')}
              >{row[staticColumn]}</Box>}
            {getColumns(props.values).map( column =>
              column !== staticColumn && <Box
                as="td"
                className={'' + (hoverColumn == column && 'hover-column')}
                onMouseEnter={() => setHoverColumn(column)}
                onMouseLeave={() => setHoverColumn('')}
              >{row[column]}</Box>
            )}
          </Box>
        )}
      </Box>
    </Box>
  </Box>
  );
};

export default ReadOnlyTable;
