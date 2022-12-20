import { SystemStyleObject } from '@styled-system/css';

export const withoutBorder = { borderBottomColor: 'transparent' };

export default (isActive: boolean, disablde?: boolean): SystemStyleObject => ({
  height: '35px',

  bg: isActive ? 'grayShade3' : 'inherit',
  color: disablde ? 'gray' : 'inherit',

  display: 'flex',
  alignItems: 'center',

  boxSizing: 'border-box',

  transition: 'all 0.25s ease',

  listStyleType: 'none',

  borderBottomStyle: 'solid',
  borderBottomWidth: '1px',

  '> svg': {
    pr: '7px',
  },

  '> button:last-of-type': {
    visibility: 'hidden',
  },

  '> div': {
    minWidth: 28,
  },

  ':hover > button:last-of-type': {
    visibility: 'visible',
  },
});
