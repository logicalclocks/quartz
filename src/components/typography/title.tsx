import { Text, TextProps } from 'rebass';

export interface TitleProps extends Omit<TextProps, 'css'> {
  uppercase?: boolean;
}

const Title = ({ uppercase = false, ...props }: TitleProps) => (
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
