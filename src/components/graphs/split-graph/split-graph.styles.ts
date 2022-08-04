import { SxStyleProp } from 'rebass';

export const progressBarStyles = (
  percent: number,
  color: string,
  isSelected: boolean,
): SxStyleProp => ({
  bg: color,
  width: `${percent}%`,
  marginRight: '2px',
  border: isSelected ? '1px solid' : null,
  borderColor: 'black',
});

export const circleStyles = (
  color: string,
  isSelected: boolean,
): SxStyleProp => ({
  bg: color,
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  border: isSelected ? '1px solid' : null,
  borderColor: 'black',
});
