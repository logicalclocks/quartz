export const formatSizeUnits = (bytes: any) => {
  bytes *= 1024;
  if (bytes >= 1073741824) {
    bytes = (bytes / 1073741824).toFixed(2) + ' Gb';
  } else if (bytes >= 1048576) {
    bytes = (bytes / 1048576).toFixed(2) + ' mb';
  } else if (bytes >= 1024) {
    bytes = (bytes / 1024).toFixed(2) + ' kb';
  } else if (bytes > 1) {
    bytes = bytes + ' bytes';
  } else if (bytes == 1) {
    bytes = bytes + ' byte';
  } else {
    bytes = '0 byte';
  }
  return bytes;
};
