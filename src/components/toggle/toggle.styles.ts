export default {
  cursor: 'pointer',

  // Hide the HTML checkbox
  '> input': {
    position: 'absolute',
    zIndex: -1,
    opacity: 0,
  },

  '.toggle-track': {
    position: 'relative',
    display: 'inline-block',
    width: '40px',
    height: '20px',
    backgroundColor: 'grayShade2',
    borderRadius: '1px',
    transition: 'background-color 0.25s ease',
    boxSizing: 'border-box',
  },

  '.toggle-thumb': {
    position: 'absolute',
    top: '2px',
    left: '2px',
    width: '16px',
    height: '16px',
    backgroundColor: 'white',
    borderRadius: '1px',
    transition: 'transform 0.25s ease',
    boxSizing: 'border-box',
  },

  // Checked state
  '> input:checked ~ .toggle-track': {
    backgroundColor: 'primary',
  },

  '> input:checked ~ .toggle-track .toggle-thumb': {
    transform: 'translateX(20px)',
  },

  // Disabled state
  '> input:disabled ~ .toggle-track': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:has(input:disabled)': {
    cursor: 'not-allowed',
  },
};
