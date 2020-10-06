import React, { FC } from 'react';
import { Text, TextProps } from 'rebass';

export interface TitleProps extends Omit<TextProps, 'css'> {}

const Title: FC<TitleProps> = (props: TitleProps) => (
  <Text
    {...props}
    as="h1"
    variant="title"
    sx={{ textTransform: 'uppercase', ...props.sx }}
  />
);
export default Title;
