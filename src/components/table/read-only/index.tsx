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
  lastTheadStyles,
  tableStyles,
  theadStyles,
  trowStyles,
} from '../table.styles';

// Hooks
import ListItem from '../../list/item';
import Tooltip from '../../tooltip';
import List from '../../list/container';
import icons from '../../../sources/icons';
import useDropdown from '../../../utils/useDropdown';
import useOnClickOutside from '../../../utils/useClickOutside';

export interface TheadProps {
  column: string;
  isPrimary?: boolean;
  isPartition?: boolean;
  className?: string;
  actions: Array<{
    label: string;
    handler: (column: string) => void;
  }>;
}

export const Thead: FC<TheadProps> = ({
  column,
  className,
  actions,
  isPrimary,
  isPartition,
}: TheadProps) => {
  const containerRef = useRef(null);
  const [isOpen, handleToggle, handleClickOutside] = useDropdown();
  useOnClickOutside<HTMLDivElement>(handleClickOutside, [containerRef]);

  const handleToggleList = useCallback(() => {
    handleToggle();
  }, [handleToggle]);

  return (
    <Box
      key={`thead-th-${column}`}
      as="th"
      sx={theadStyles}
      className={className}
      onClick={handleToggleList}
      ref={containerRef}
    >
      <Box
        as="th"
        sx={{
          width: '100%',
        }}
      />
      <div>
        {column}
        {isPrimary && (
          <Tooltip mainText="primary key">
            <Box
              ml="5px"
              sx={{
                svg: {
                  path: {
                    fill: 'labels.green',
                  },
                },
              }}
              my="-5px"
            >
              {icons.primary}
            </Box>
          </Tooltip>
        )}
        {isPartition && (
          <Tooltip mainText="partition key">
            <Box
              ml="5px"
              sx={{
                svg: {
                  path: {
                    fill: 'labels.green',
                  },
                },
              }}
              my="-5px"
            >
              {icons.partition}
            </Box>
          </Tooltip>
        )}
        {isOpen && (
          <List sx={dropdownStyles}>
            {actions.map((action) => (
              <ListItem
                key={action.label}
                onClick={() => {
                  action.handler(column);
                }}
              >
                {action.label}
              </ListItem>
            ))}
          </List>
        )}
      </div>
    </Box>
  );
};

export interface ReadOnlyTableProps extends Omit<TableProps, 'value'> {
  staticColumn?: string;
  onFreeze: (column?: string) => void;
  actions: Array<{
    label: string;
    handler: (column: string) => void;
  }>;
}

const ReadOnlyTable: FC<ReadOnlyTableProps> = ({
  staticColumn,
  onFreeze,
  actions,
  ...props
}: ReadOnlyTableProps) => {
  const [hoverColumn, setHoverColumn] = useState<string>();

  return (
    <Box sx={containerStyles}>
      <Box as="table" sx={tableStyles}>
        <Box as="thead" sx={theadStyles}>
          <Box as="tr">
            <Box as="th" sx={theadStyles} className="table-corner" />

            {staticColumn && (
              <Thead
                column={staticColumn}
                isPrimary={
                  props.values[0].row.find((r) => r.columnName === staticColumn)
                    ?.isPrimary
                }
                isPartition={
                  props.values[0].row.find((r) => r.columnName === staticColumn)
                    ?.isPartition
                }
                className={
                  'static-column ' +
                  (hoverColumn == staticColumn && 'hover-column')
                }
                actions={[
                  {
                    label: 'unfreeze',
                    handler: () => {
                      onFreeze();
                    },
                  },
                  ...actions,
                ]}
              />
            )}

            {getColumns(props.values).map(
              (column: string) =>
                column !== staticColumn && (
                  <Thead
                    key={column}
                    column={column}
                    isPrimary={
                      props.values[0].row.find((r) => r.columnName === column)
                        ?.isPrimary
                    }
                    isPartition={
                      props.values[0].row.find((r) => r.columnName === column)
                        ?.isPartition
                    }
                    className={'' + (hoverColumn == column && 'hover-column')}
                    actions={[
                      {
                        label: 'freeze',
                        handler: (column) => {
                          onFreeze(column);
                        },
                      },
                      ...actions,
                    ]}
                  />
                ),
            )}
            <Box as="th" sx={{ ...lastTheadStyles }} />
          </Box>
        </Box>
        <Box
          as="tbody"
          sx={{
            backgroundColor: 'white',
          }}
        >
          {getRows(props.values).map((row, i) => (
            <Box key={i} as="tr" sx={trowStyles}>
              <Box as="th">{i + 1}</Box>
              {staticColumn && (
                <Box
                  as="td"
                  className={
                    'static-column ' +
                    (hoverColumn == staticColumn && 'hover-column')
                  }
                  onMouseEnter={() => setHoverColumn(staticColumn)}
                  onMouseLeave={() => setHoverColumn('')}
                >
                  {row[staticColumn]}
                </Box>
              )}
              {getColumns(props.values).map(
                (column: string) =>
                  column !== staticColumn && (
                    <Box
                      key={column}
                      as="td"
                      className={'' + (hoverColumn == column && 'hover-column')}
                      onMouseEnter={() => setHoverColumn(column)}
                      onMouseLeave={() => setHoverColumn('')}
                    >
                      {row[column]}
                    </Box>
                  ),
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ReadOnlyTable;
