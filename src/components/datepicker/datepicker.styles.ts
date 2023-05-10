import { SxStyleProp } from 'rebass';

export default {
  '.react-datepicker': {
    boxShadow: 'notification',
    borderRadius: 'initial',
  },
  '.react-datepicker__time-box': {
    backgroundColor: 'white',
    color: 'black',
  },

  '.react-datepicker__navigation ': {
    outline: 'none',
  },

  '.react-datepicker__input-container input': {
    width: '50px',
    visibility: 'hidden',
  },

  '.react-datepicker__triangle': {
    display: 'none',
  },

  '.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item: hover':
    {
      backgroundColor: 'grayShade3',
      color: 'black',
    },
  '.react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected':
    {
      backgroundColor: 'primary',
      color: 'white',
    },
  '.react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected: hover':
    {
      backgroundColor: 'primary',
      color: 'white',
    },
  '.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item':
    {
      fontWeight: '500',
      height: '20px',
      lineHeight: '20px',
    },

  '.react-datepicker__day: hover': {
    backgroundColor: 'grayShade3',
  },
  '.react-datepicker__day': {
    fontWeight: 500,
    borderRadius: 0,
  },
  '.react-datepicker__day.react-datepicker__day--in-range': {
    backgroundColor: 'primaryShade1',
  },
  '.react-datepicker__day--selected: hover': {
    backgroundColor: 'primary',
    color: 'white',
    cursor: 'default',
  },

  '.react-datepicker__day: focus': {
    outline: 'none',
  },

  '.react-datepicker__header': {
    backgroundColor: 'grayShade3',
    color: 'black',
  },

  '.react-datepicker .react-datepicker__day-name': {
    fontWeight: 500,
  },
  '.react-datepicker__current-month, .react-datepicker-time__header, .react-datepicker-year-header, .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name':
    {
      color: 'black',
    },
  '.react-datepicker__day--disabled, react-datepicker__day--excluded, .react-datepicker__day--disabled: hover':
    {
      color: 'grayShade1',
      cursor: 'not-allowed',
    },

  '': {
    color: 'grayShade1',
  },
  'ul.react-datepicker__time-list li.react-datepicker__time-list-item': {
    padding: '0px !important',
  },
  '.react-datepicker__day.react-datepicker__day--selected, .react-datepicker__time-list-item--selected':
    {
      backgroundColor: 'primary',
      color: 'white',
    },
  '.ul.react-datepicker__time-list li.react-datepicker__time-list-item, .react-datepicker__month-container':
    {
      backgroundColor: 'white',
      color: 'black',
    },
} as SxStyleProp;
