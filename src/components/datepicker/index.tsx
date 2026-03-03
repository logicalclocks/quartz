import { forwardRef, memo, useState } from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import { Flex, SxStyleProp } from 'rebass';

import { SelectProps } from '../select';

import 'react-datepicker/dist/react-datepicker.min.css';
import { GetIcon, IconName } from '../icon';
import Labeling from '../typography/labeling';
import Value from '../typography/value';
import styles from './datepicker.styles';

export interface DatePickerProps extends ReactDatePickerProps {
  selectProps: Pick<SelectProps, 'variant' | 'noDataMessage' | 'value'>;
  datePickerAlign?: 'left' | 'right';
  editable?: boolean;
  sx?: SxStyleProp;
}

const getPlacement = (align: DatePickerProps['datePickerAlign']) =>
  align === 'right' ? 'bottom-end' : 'bottom-start';

const DatePicker = ({
  selectProps,
  datePickerAlign = 'right',
  editable = false,
  sx,
  ...props
}: DatePickerProps) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Flex flexDirection="column" sx={{ ...styles, ...sx }}>
      <ReactDatePicker
        onCalendarOpen={() => setOpen(true)}
        onCalendarClose={() => setOpen(false)}
        shouldCloseOnSelect
        {...props}
        customInput={
          <DateSelect
            isOpen={isOpen}
            selectProps={selectProps}
            editable={editable}
          />
        }
        popperPlacement={getPlacement(datePickerAlign)}
      />
    </Flex>
  );
};

export default memo(DatePicker);

const DateSelect = forwardRef(
  ({ value, selectProps, isOpen, editable, onChange, ...props }: any, ref: any) => (
    <Flex
      ref={ref}
      alignItems="center"
      flexShrink={0}
      {...props}
      sx={{
        height: '32px',
        px: '5px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: isOpen ? 'grayShade1' : '',
        ':hover': {
          borderColor: 'grayShade1',
        },
      }}
      variant={selectProps?.variant ?? 'white'}
      tx="variants.select"
    >
      {selectProps && (
        <Labeling gray mr="5px" minWidth="unset">
          {selectProps.noDataMessage}
        </Labeling>
      )}

      {editable ? (
        <input
          value={value ?? ''}
          onChange={onChange}
          style={{
            flexGrow: 1,
            minWidth: '175px',
            marginRight: '5px',
            border: 'none',
            outline: 'none',
            fontFamily: 'Inter',
            fontSize: '12px',
            fontWeight: 500,
            color: '#272727',
          }}
        />
      ) : (
        <Value
          mr="5px"
          sx={{ fontSize: 'text', fontWeight: 'text', fontFamily: 'text' }}
          flexGrow={1}
          flexShrink={0}
        >
          {selectProps?.value ?? value}
        </Value>
      )}
      <GetIcon flexShrink={0} icon={IconName.arrow_up_down} size="sm" />
    </Flex>
  ),
);
