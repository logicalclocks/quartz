const YEAR = 31622437236;

export const getProgress = (date: Date) => {
  const progress = 1 - (new Date().getTime() - date.getTime()) / YEAR;

  if (progress < 0) return 0;

  return progress > 1 ? 1 : progress;
};

export const parseDate = (time: string): Date => {
  const date = new Date(`${time} UTC`);

  return !date.getTime() ? new Date() : date;
};

// Get date in format: YYYY-MM-DD HH:mm:SS
export const getFormattedDate = (date: Date) => {
  const dateString = date.toISOString().replace('T', ' ');

  return dateString.slice(0, dateString.indexOf('.'));
};
