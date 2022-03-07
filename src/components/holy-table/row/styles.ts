enum BorderSides {
  left = 'Left',
  right = 'Right',
  top = 'Top',
  bottom = 'Bottom',
}

function createBorder(side: BorderSides): { [key: string]: string } {
  return {
    [`border${side}Style`]: 'solid',
    [`border${side}Width`]: '1px',
    [`border${side}Color`]: 'grayShade2',
  };
}

const getBordersForTable = (standalone: boolean) => {
  const integratedBorders = {
    ...createBorder(BorderSides.top),
    ...createBorder(BorderSides.bottom),
  };

  const standaloneBorders = {
    ...integratedBorders,
    ...createBorder(BorderSides.right),
    ...createBorder(BorderSides.left),
  };

  return standalone ? standaloneBorders : integratedBorders;
};

const hover = {
  ':hover': {
    bg: 'grayShade3',
  },
};

export default (
  bordered: boolean,
  hoverable: boolean,
  standalone: boolean,
) => ({
  bg: 'white',
  ...(bordered ? getBordersForTable(standalone) : {}),
  ...(hoverable ? hover : {}),
});
