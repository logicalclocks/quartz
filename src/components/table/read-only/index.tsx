import React, { FC, useCallback, useRef, useState } from 'react';
import { Box } from 'rebass';

// Components
import { TableProps } from '../index';

// Utils
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

  const handleToggleList = useCallback(() => {
    handleToggle();
  }, [handleToggle]);

  return(
    <Box key={`thead-th-${column}`} as="th" sx={theadStyles} className={className} onClick={handleToggleList} ref={containerRef}>
      {column}
      {isOpen && (
        <List sx={dropdownStyles}>
          {actions.map(action =>
            <ListItem key={action.label} onClick={ () => {action.handler(column)} }>{ action.label }</ListItem>
          )}
        </List>
      )}
    </Box>
  )
}

export interface ReadOnlyTableProps extends Omit<TableProps, 'value'> {
  staticColumn?: string;
  onFreeze: (column?: string) => void;
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
            <Box as="th" sx={theadStyles} className="table-corner"/>

            {staticColumn && <Thead column={staticColumn} className={'static-column ' + (hoverColumn == staticColumn && 'hover-column')} actions={
                  [
                    {label: 'unfreeze', handler: () => { onFreeze(); } },
                    actions[0] // todo
                  ]
                }/> }

            {getColumns(props.values).map( (column: string) =>
              column !== staticColumn && <Thead key={column} column={column} className={'' + (hoverColumn == column && 'hover-column')} actions={
                  [
                    {label: 'freeze', handler: (column) => { onFreeze(column); } },
                    actions[0] // todo
                  ]
              }/>
            )}
          </Box>
        </Box>
        <Box as="tbody">
          {getRows(props.values).map( (row, i) => 
            <Box key={i} as="tr" sx={trowStyles}>
              <Box as="th">{i+1}</Box>
              {staticColumn && <Box
                  as="td"
                  className={'static-column ' + (hoverColumn == staticColumn && 'hover-column')}
                  onMouseEnter={() => setHoverColumn(staticColumn)}
                  onMouseLeave={() => setHoverColumn('')}
                >{row[staticColumn]}</Box>}
              {getColumns(props.values).map( (column: string) =>
                column !== staticColumn && <Box
                  key={column}
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
