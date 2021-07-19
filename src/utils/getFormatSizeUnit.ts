const formatSizeUnits = (bytes: number) => {
  if (bytes >= 1073741824) {
    return `${(bytes / 1073741824).toFixed(2)} Gb`;
  }
  if (bytes >= 1048576) {
    return `${(bytes / 1048576).toFixed(2)} mb`;
  }
  if (bytes >= 1024) {
    return `${(bytes / 1024).toFixed(2)} kb`;
  }
  if (bytes > 1) {
    return `${bytes} bytes`;
  }
  if (bytes === 1) {
    return `${bytes} byte`;
  }
  return '0 byte';
};

export default formatSizeUnits;
