export default {
  default: {
    border: '1px solid #F5F5F5',
    borderRadius: '2px',
    backgroundColor: '#F5F5F5',
    cursor: 'pointer',
    boxShadow: 'none',
    color: '#272727',
    lineHeight: '15px',
    fontSize: '12px',
    fontWeight: 'bold',
    py: '4px',
    px: '6px',

    ':hover': {
      backgroundColor: '#F5F5F5',
      borderColor: '#CBCBCB',
    },

    span: {
      width: '4px',
      height: '4px',
      borderRadius: '50%',
      backgroundColor: '#A0A0A0',

      '&[data-active="true"]': {
        backgroundColor: '#21B182',
      },
    },
  },
  highlight: {
    backgroundColor: '#E6F2EE',
    borderColor: '#E6F2EE',

    ':hover': {
      backgroundColor: '#E6F2EE',
      borderColor: '#21B182',
    },
  },
  flex: {
    gap: '4px',
  },
};
