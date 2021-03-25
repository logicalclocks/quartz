export const withoutBorder = { borderBottomColor: 'transparent' };

export default (isActive: boolean) => ({
  height: '35px',

  bg: isActive ? 'grayShade3' : 'initial',

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

  ':hover > button:last-of-type': {
    visibility: 'visible',
  },
});
