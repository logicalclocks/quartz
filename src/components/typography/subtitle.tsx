import { FC } from 'react';
import { Text, TextProps } from 'rebass';

export interface SubtitleProps extends Omit<TextProps, 'css'> {}

const Subtitle: FC<SubtitleProps> = (props: SubtitleProps) => (
  <Text {...props} as="h2" variant="subtitle" />
);

export default Subtitle;
