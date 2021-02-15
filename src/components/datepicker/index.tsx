import { Box, Flex } from 'rebass';
import React, { FC, memo, useState } from 'react';
import Select, { SelectProps } from '../select';
import ReactDatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.min.css';
import styles from './datepicker.styles';
import * as Popper from 'popper.js';

export interface ReactDatePickerProps {
  adjustDateOnChange?: boolean;
  allowSameDay?: boolean;
  ariaLabelClose?: string;
  ariaLabelledBy?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  calendarClassName?: string;
  calendarContainer?(props: { children: React.ReactNode[] }): React.ReactNode;
  children?: React.ReactNode;
  chooseDayAriaLabelPrefix?: string;
  className?: string;
  clearButtonTitle?: string;
  closeOnScroll?: boolean | ((e: Event) => boolean);
  customInput?: React.ReactNode;
  customInputRef?: string;
  customTimeInput?: React.ReactNode;
  dateFormat?: string | string[];
  dateFormatCalendar?: string;
  dayClassName?(date: Date): string | null;
  weekDayClassName?(date: Date): string | null;
  monthClassName?(date: Date): string | null;
  timeClassName?(date: Date): string | null;
  disabledDayAriaLabelPrefix?: string;
  disabled?: boolean;
  disabledKeyboardNavigation?: boolean;
  dropdownMode?: 'scroll' | 'select';
  endDate?: Date | null;
  excludeDates?: Date[];
  excludeTimes?: Date[];
  filterDate?(date: Date): boolean;
  fixedHeight?: boolean;
  forceShowMonthNavigation?: boolean;
  formatWeekDay?(formattedDate: string): string;
  formatWeekNumber?(date: Date): string | number;
  id?: string;
  includeDates?: Date[];
  includeTimes?: Date[];
  injectTimes?: Date[];
  inline?: boolean;
  focusSelectedMonth?: boolean;
  isClearable?: boolean;
  locale?: string | Locale;
  maxDate?: Date | null;
  maxTime?: Date;
  minDate?: Date | null;
  minTime?: Date;
  monthsShown?: number;
  name?: string;
  nextMonthButtonLabel?: string | React.ReactNode;
  nextYearButtonLabel?: string;
  onBlur?(event: React.FocusEvent<HTMLInputElement>): void;
  onCalendarClose?(): void;
  onCalendarOpen?(): void;
  onChange(
    date: Date | [Date, Date] | /* for selectsRange */ null,
    event: React.SyntheticEvent<any> | undefined,
  ): void;
  onChangeRaw?(event: React.FocusEvent<HTMLInputElement>): void;
  onClickOutside?(event: React.MouseEvent<HTMLDivElement>): void;
  onDayMouseEnter?: (date: Date) => void;
  onFocus?(event: React.FocusEvent<HTMLInputElement>): void;
  onInputClick?(): void;
  onInputError?(err: { code: number; msg: string }): void;
  onKeyDown?(event: React.KeyboardEvent<HTMLDivElement>): void;
  onMonthChange?(date: Date): void;
  onMonthMouseLeave?: () => void;
  onSelect?(date: Date, event: React.SyntheticEvent<any> | undefined): void;
  onWeekSelect?(
    firstDayOfWeek: Date,
    weekNumber: string | number,
    event: React.SyntheticEvent<any> | undefined,
  ): void;
  onYearChange?(date: Date): void;
  open?: boolean;
  openToDate?: Date;
  peekNextMonth?: boolean;
  placeholderText?: string;
  popperClassName?: string;
  popperContainer?(props: { children: React.ReactNode[] }): React.ReactNode;
  popperModifiers?: Popper.Modifiers;
  popperPlacement?: string;
  popperProps?: {};
  preventOpenOnFocus?: boolean;
  previousMonthButtonLabel?: string | React.ReactNode;
  previousYearButtonLabel?: string;
  readOnly?: boolean;
  renderCustomHeader?(params: {
    date: Date;
    changeYear(year: number): void;
    changeMonth(month: number): void;
    decreaseMonth(): void;
    increaseMonth(): void;
    prevMonthButtonDisabled: boolean;
    nextMonthButtonDisabled: boolean;
    decreaseYear(): void;
    increaseYear(): void;
    prevYearButtonDisabled: boolean;
    nextYearButtonDisabled: boolean;
  }): React.ReactNode;
  renderDayContents?(dayOfMonth: number, date?: Date): React.ReactNode;
  required?: boolean;
  scrollableMonthYearDropdown?: boolean;
  scrollableYearDropdown?: boolean;
  selected?: Date | null;
  selectsEnd?: boolean;
  selectsStart?: boolean;
  selectsRange?: boolean;
  shouldCloseOnSelect?: boolean;
  showDisabledMonthNavigation?: boolean;
  showFullMonthYearPicker?: boolean;
  showMonthDropdown?: boolean;
  showMonthYearDropdown?: boolean;
  showMonthYearPicker?: boolean;
  showPopperArrow?: boolean;
  showPreviousMonths?: boolean;
  showQuarterYearPicker?: boolean;
  showTimeInput?: boolean;
  showTimeSelect?: boolean;
  showTimeSelectOnly?: boolean;
  showTwoColumnMonthYearPicker?: boolean;
  showWeekNumbers?: boolean;
  showYearDropdown?: boolean;
  showYearPicker?: boolean;
  startDate?: Date | null;
  startOpen?: boolean;
  strictParsing?: boolean;
  tabIndex?: number;
  timeCaption?: string;
  timeFormat?: string;
  timeInputLabel?: string;
  timeIntervals?: number;
  title?: string;
  todayButton?: React.ReactNode;
  useShortMonthInDropdown?: boolean;
  useWeekdaysShort?: boolean;
  weekAriaLabelPrefix?: string;
  value?: string;
  weekLabel?: string;
  withPortal?: boolean;
  portalId?: string;
  wrapperClassName?: string;
  yearDropdownItemNumber?: number;
  excludeScrollbar?: boolean;
  enableTabLoop?: boolean;
}

export interface DatePickerProps extends ReactDatePickerProps {
  selectProps: SelectProps;
  datePickerAlign?: 'left' | 'right';
}

const DatePicker: FC<DatePickerProps> = ({
  selectProps,
  datePickerAlign = 'right',
  ...props
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Flex flexDirection="column" sx={styles(datePickerAlign)}>
      <Box onClick={() => setOpen(!open)}>
        <Select {...selectProps} />
      </Box>
      <Box alignSelf={datePickerAlign === 'right' ? 'flex-end' : 'flex-start'}>
        <ReactDatePicker
          open={open}
          {...props}
          onChange={(date, event) => {
            props.onChange(date, event);
            setOpen(false);
          }}
          onClickOutside={() => setOpen(false)}
        />
      </Box>
    </Flex>
  );
};

export default memo(DatePicker);
