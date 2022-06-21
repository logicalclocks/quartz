import { SxStyleProp } from 'rebass';

export default (align: 'left' | 'right') =>
  ({
    '.react-datepicker': {
      boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.25)',
      borderRadius: 'initial',
    },

    '.react-datepicker__navigation ': {
      outline: 'none',
    },

    '.react-datepicker-popper': {
      top: '-25px !important',
      left: align === 'right' ? '-270px !important' : '0',
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
      color: 'black',
    },
    '.react-datepicker__day': {
      fontWeight: 500,
      borderRadius: 0,
    },
    '.react-datepicker__day--selected': {
      backgroundColor: 'primary',
      color: 'white',
    },
    '.react-datepicker__day--selected: hover': {
      backgroundColor: 'primary',
      color: 'white',
    },

    '.react-datepicker__day: focus': {
      outline: 'none',
    },

    '.react-datepicker__header': {
      backgroundColor: 'grayShade3',
    },

    'react-datepicker__day-name': {
      fontWeight: 500,
    },
  } as SxStyleProp);
