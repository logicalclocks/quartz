const color = (hue: number, lightness: number) =>
  `hsl(${hue}, 75%, ${lightness}%)`;

export const avatar = (hue: number) => ({
  justifyContent: 'center',
  alignItems: 'center',

  borderRadius: '50%',
  borderWidth: '2px',
  borderStyle: 'solid',
  borderColor: color(hue, 55),

  color: color(hue, 55),
  backgroundColor: color(hue, 90),

  fontSize: '12px',
  fontWeight: 'bold',
  fontFamily: 'Inter',
});

export const secondaryTextContainer = {
  backgroundColor: 'grayShade2',
  borderRadius: '20px',
};

export const userBadgeContainer = {
  border: '1px solid',
  borderColor: 'white',
  borderRadius: '20px',
};
