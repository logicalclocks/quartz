export default function (fillSpace: boolean) {
  return {
    textAlign: 'left',
    width: fillSpace ? '100%' : 'auto',
    whiteSpace: 'pre',
    padding: '12px',
  };
}
