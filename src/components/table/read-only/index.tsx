import React, { FC, useCallback, useRef, useState } from 'react';
import { Box } from 'rebass';

// Components
import Table, { TableProps } from '../index';

// Types
import { Row } from '../types';
import { getColumns, getRows } from './utils';

// Styles
import {
  containerStyles,
  tableStyles,
  theadStyles,
  trowStyles
} from '../table.styles';

// Hooks
import { useDropdown, useOnClickOutside } from '../../..';
import List from '../../list/container';
import SelectList from '../../select/lists/select-list';

export interface ReadOnlyTableProps extends Omit<TableProps, 'value'> {
  staticColumn?: string;
}


const ReadOnlyTable: FC<ReadOnlyTableProps> = ({
  staticColumn,
  ...props
}: ReadOnlyTableProps) => {
  const containerRef = useRef(null);
  const [isOpen, handleToggle, handleClickOutside] = useDropdown(false);
  useOnClickOutside<HTMLDivElement>(containerRef, handleClickOutside);

  // Handlers
  const handleLabelClick = useCallback(() => {
    handleToggle();
  }, [handleToggle]);

  const [hoverColumn, setHoverColumn] = useState<string>();

  return(
  <Box sx={containerStyles}>
    {isOpen && (
          <List>
              <SelectList options={options} value={value} onChange={onChange} />
          </List>
        )}
    <Box as="table" sx={tableStyles}>
      <Box as="thead" sx={theadStyles}>
        <Box as="tr">
          <Box as="th" sx={theadStyles} className="table-corner"></Box>
          {staticColumn && <Box as="th" sx={theadStyles} className={'static-column ' + (hoverColumn == staticColumn && 'hover-column')}>{staticColumn}</Box>}
          {getColumns(props.values).map( column =>
            column !== staticColumn && <Box as="th" sx={theadStyles} className={'' + (hoverColumn == column && 'hover-column')}>{column}</Box>
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
