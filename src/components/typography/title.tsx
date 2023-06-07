import { FC } from 'react';
import { Text, TextProps } from 'rebass';

export interface TitleProps extends Omit<TextProps, 'css'> {
  uppercase?: boolean;
}

const Title: FC<TitleProps> = ({ uppercase = false, ...props }: TitleProps) => (
  <Text
    {...props}
    as="h1"
    variant="title"
    sx={{
      ...(uppercase && { textTransform: 'uppercase' }),
      wordWrap: 'normal',
      ...props.sx,
    }}
  />
);
export default Title;
