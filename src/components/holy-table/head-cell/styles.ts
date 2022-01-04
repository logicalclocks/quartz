export default function (fillSpace: boolean) {
  return {
    textAlign: 'left',
    width: fillSpace ? '100%' : 'auto',
    whiteSpace: 'pre',
    py: '12px',
    px: '20px',
    ':first-of-type': { pl: '8px' },
    ':last-of-type': { pr: '8px' },
  };
}
