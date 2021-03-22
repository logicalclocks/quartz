import React from 'react';

export const copyToClipboard = (content: string): boolean => {
  const dummy = document.createElement('textarea');
  document.body.appendChild(dummy);
  dummy.value = content;
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);
  return true;
};

export const saveToFile = (
  title?: React.ReactElement | string,
  content?: string,
): void => {
  if (title) {
    const fileName = title.toString() || 'code';
    if (content) {
      const file = new Blob([content]);

      if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(file);
      } else {
        const a = document.createElement('a'),
          url = URL.createObjectURL(file);
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        setTimeout(function () {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
        }, 0);
      }
    }
  }
};
