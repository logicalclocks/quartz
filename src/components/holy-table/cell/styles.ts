export default function (paddedVertically: boolean) {
  return {
    py: paddedVertically ? '12px' : 'initial',
    px: '12px',
    whiteSpace: 'pre',
  };
}
