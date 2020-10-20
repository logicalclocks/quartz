import { Mode } from '../container/types';

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

export default ({ mode }: any) => ({
  ...createBorder(BorderSides.top),
  ...createBorder(BorderSides.bottom),
  ...(mode === Mode.tiny && {
    ...createBorder(BorderSides.left),
    ...createBorder(BorderSides.right),
  }),

  ':hover': {
    bg: 'grayShade3',
  },
});
