export const loaderCross = (isLoading: boolean) => ({
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'transparent',
  cursor: 'pointer',
  mt: isLoading ? '1px' : '-1px',
  ml: '10px',
  width: '60px',
  svg: {
    ...(isLoading
      ? {
          width: '16px',
          height: '16px',
          path: {
            fill: 'black',
          },
        }
      : {
          width: '20px',
          height: '20px',
          path: {
            fill: 'black',
          },
        }),
  },
});

export const fileNameBox = (isLoading: boolean) => ({
  color: isLoading ? 'primaryShade1' : 'primary',
});

export const statusAndLocationBox = (isLoadig: boolean) => ({
  color: isLoadig ? 'gray' : 'black',
  display: 'inline',
  wordBreak: 'break-all',
});

export default (isLoading: boolean) => ({
  overflow: 'hidden',
  color: isLoading ? 'gray' : 'black',
  fontFamily: 'label',
  fontWeight: 'label',
  fontSize: 'label',
  alignItems: 'center',
});
