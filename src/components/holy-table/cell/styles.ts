export default function (paddedVertically: boolean) {
  return {
    py: paddedVertically ? '12px' : 'initial',
    whiteSpace: 'pre',
    px: '20px',
    ':first-of-type': { pl: '8px' },
    ':last-of-type': { pr: '8px' },
  };
}
