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

const borders = {
  ...createBorder(BorderSides.top),
  ...createBorder(BorderSides.bottom),
};

const hover = {
  ':hover': {
    bg: 'grayShade3',
  },
};

export default (bordered: boolean, hoverable: boolean) => ({
  bg: 'white',
  ...(bordered ? borders : {}),
  ...(hoverable ? hover : {}),
});
