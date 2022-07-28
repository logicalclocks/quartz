import React, { FC, useEffect, useState } from 'react';
import { Box, Flex, FlexProps } from 'rebass';

// Components
import Tooltip from '../tooltip';
import IconButton from '../icon-button';
import Labeling from '../typography/labeling';
// Styles
import styles from './pagination.styles';
import { IconName } from '../icon/list';

export interface PaginationProps extends Omit<FlexProps, 'css' | 'onChange'> {
  totalPages: number;
  currentPage: number;
  disabled?: boolean;
  label?: string;
  variant?: 'primary' | 'white';

  onChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  totalPages,
  currentPage,
  disabled,
  label,
  onChange,
  variant = 'primary',
  ...props
}) => {
  const [current, setCurrent] = useState<string>(String(currentPage));
  const [error, setError] = useState<string>('');

  const formatValue = (page: number): number => {
    if (page > totalPages) {
      return totalPages;
    }

    return page < 1 ? 1 : page;
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      onChange(formatValue(+current));
    }
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = +target.value;

    setCurrent(target.value);

    setError(
      numericValue > totalPages || numericValue < 1 ? 'Out of the range' : '',
    );
  };

  const handlePageClick =
    (sum: number = 1) =>
    () => {
      onChange(formatValue(currentPage + sum));
    };

  useEffect(() => {
    if (current !== String(currentPage)) {
      setCurrent(String(currentPage));
      setError('');
    }
  }, [currentPage]);

  return (
    <Flex
      alignItems="center"
      {...props}
      tx="pagination"
      variant={disabled ? 'disabled' : variant}
      sx={styles}
    >
      <IconButton
        icon={IconName.arrow_left}
        intent="ghost-white"
        tooltip="prev page"
        disabled={disabled || currentPage <= 1}
        onClick={handlePageClick(-1)}
      />

      <Tooltip
        mainText="Press enter to navigate"
        secondaryText={error}
        mx="4px"
        disabled={disabled}
      >
        <Flex
          as="label"
          width="min-content"
          height="32px"
          flexDirection="row"
          alignItems="center"
          pr="8px"
        >
          <Box
            disabled={disabled}
            as="input"
            type="number"
            value={current}
            color="black"
            min={1}
            max={totalPages}
            onChange={handleChange}
            onKeyUp={handleKeyUp}
          />
          <Labeling gray bold>{`/${totalPages}`}</Labeling>
        </Flex>
      </Tooltip>

      <IconButton
        icon={IconName.arrow_right}
        intent="ghost-white"
        tooltip="next page"
        disabled={disabled || currentPage >= totalPages}
        onClick={handlePageClick()}
      />
    </Flex>
  );
};

export default Pagination;
