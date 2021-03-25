export const withoutBorder = { borderBottomColor: 'transparent' };

export default {
  height: '35px',

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
};
