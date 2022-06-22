import React from 'react';

export const copyToClipboard = async (content: string): Promise<boolean> => {
  return navigator.clipboard
    .writeText(content)
    .then(() => true)
    .catch(() => false);
};

export const saveToFile = (
  title?: React.ReactElement | string,
  content?: string,
): void => {
  if (title) {
    const fileName = title.toString() || 'code';
    if (content) {
      const file = new Blob([content]);

      const a = document.createElement('a');
      const url = URL.createObjectURL(file);
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
};
