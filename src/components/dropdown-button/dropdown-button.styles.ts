export default {
  container: {
    position: 'relative',
    cursor: 'pointer',
    zIndex: 5,
    marginTop: '-2px',
    width: 'fit-content',
  },
  dropdown: (height: number | undefined, alignLeft: boolean) => ({
    position: 'absolute',
    top: `${height}px`,
    ...(alignLeft
      ? {
          right: '0px',
        }
      : {
          left: '0px',
        }),
  }),
};
