import { Text, TextProps } from 'rebass';

export interface SubtitleProps extends Omit<TextProps, 'css'> {}

const Subtitle = (props: SubtitleProps) => (
  <Text {...props} as="h2" variant="subtitle" />
);

export default Subtitle;
