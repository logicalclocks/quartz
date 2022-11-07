import { SxStyleProp } from 'rebass';

export const progressBarStyles = (
  percent: number,
  color: string,
  isSelected: boolean,
  borderColor: string,
): SxStyleProp => ({
  bg: color,
  width: `${percent}%`,
  marginRight: '2px',
  border: isSelected ? '1px solid' : null,
  borderColor,
});

export const circleStyles = (
  color: string,
  isSelected: boolean,
  borderColor: string,
): SxStyleProp => ({
  bg: color,
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  border: isSelected ? '1px solid' : null,
  borderColor,
});

export const customComponentWrapperStyles = {
  borderColor: 'grayShade3',
  borderWidth: '1px',
  borderStyle: 'solid',
  width: '100%',
};
