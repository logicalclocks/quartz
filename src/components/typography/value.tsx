import { Text, TextProps } from 'rebass';

export interface ValueProps extends Omit<TextProps, 'css'> {
  primary?: boolean;
}

const Value = ({ primary, sx, ...props }: ValueProps) => (
  <Text
    fontFamily="Inter"
    sx={{
      wordWrap: 'normal',
      ...sx,
    }}
    {...props}
    variant={`value${primary ? 'Primary' : ''}`}
  />
);

export default Value;
