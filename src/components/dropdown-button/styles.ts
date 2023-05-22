export default {
  container: {
    position: 'relative',
    cursor: 'pointer',
    marginTop: '-2px',
    width: 'fit-content',
    height: 'fit-content',
    background: 'white',
  },
  dropdown: (height: number | undefined, alignLeft: boolean) => ({
    position: 'absolute',
    top: `${height}px`,
    zIndex: 5,
    ...(alignLeft
      ? {
          right: '0px',
        }
      : {
          left: '0px',
        }),
  }),
};
