import { SxStyleProp } from "rebass";

export default (paddedVertically: boolean) : SxStyleProp =>
({
  py: paddedVertically ? '12px': 'initial',
  px: '12px',
  whiteSpace: 'pre',
})
